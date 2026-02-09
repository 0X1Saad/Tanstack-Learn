import { streamText, generateText } from 'ai'
import { openrouter } from '@/lib/openRouter'
import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // ✅ Auth
  const session = await auth.api.getSession({
    headers: req.headers,
  })

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { prompt } = await req.json()

  if (!prompt || !prompt.trim()) {
    return NextResponse.json(
      { error: 'Missing prompt' },
      { status: 400 }
    )
  }

  // ✅ VERY IMPORTANT: truncate for free models
  const SAFE_PROMPT = prompt.slice(0, 6_000)

  let hasStreamed = false

  const result = streamText({
    model: openrouter.chat('arcee-ai/trinity-large-preview:free'),
    system: `
You MUST return a summary.
Never return an empty response.

Rules:
- 2 short paragraphs
- Clear language
- No markdown
    `,
    prompt: `Summarize the following content:\n\n${SAFE_PROMPT}`,
    onChunk() {
      hasStreamed = true
    },
  })

  // ⛑️ Fallback if streaming fails (very common on free models)
  if (!hasStreamed) {
    const { text } = await generateText({
      model: openrouter.chat('arcee-ai/trinity-large-preview:free'),
      system: `
You MUST return a summary.
- 2 short paragraphs
- Clear language
- No markdown
      `,
      prompt: `Summarize the following content:\n\n${SAFE_PROMPT}`,
    })

    if (!text?.trim()) {
      return NextResponse.json(
        { error: 'AI failed to generate summary' },
        { status: 500 }
      )
    }

    return new Response(text, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }

  // ✅ Required for useCompletion()
  return result.toTextStreamResponse()
}
