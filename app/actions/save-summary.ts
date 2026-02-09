'use server'

import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/session'
import { generateText } from 'ai'
import { openrouter } from '@/lib/openRouter'
import { notFound } from 'next/navigation'
import z from 'zod'

const schema = z.object({
  id: z.string(),
  summary: z.string(),
})

export async function saveSummaryActionAndGenTags(input: z.infer<typeof schema>) {
  const { id, summary } = schema.parse(input)
  const session = await requireAuth()

  const item = await prisma.savedItem.findFirst({
    where: { id, userId: session.user.id },
  })

  if (!item) notFound()

  const { text } = await generateText({
    model: openrouter.chat('arcee-ai/trinity-large-preview:free'),
    system: `
Generate 3–5 concise tags.
- single words or short phrases
- relevant to the summary
- comma separated
    `,
    prompt: summary,
  })

  const tags = text
    .split(',')
    .map(t => t.trim().toLowerCase())
    .filter(Boolean)
    .slice(0, 5)

  return prisma.savedItem.update({
    where: { id },
    data: {
      summary,
      tags,
    },
  })
}
