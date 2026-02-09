import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Sparkles,
  Link2,
  Layers,
  Search,
} from "lucide-react"

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Scrape the Web.
          <br />
          <span className="text-primary">Understand it with AI.</span>
        </h1>

        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
          Paste a link or upload hundreds at once.  
          Our AI scrapes, summarizes, tags, and organizes content so you can
          discover insights instantly.
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button size="lg">
            <Sparkles className="mr-2 size-4" />
            Get Started
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/discover">
              Explore Discover
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={<Link2 />}
          title="Single Link Scraping"
          description="Paste any website URL and instantly extract clean, readable content."
        />

        <FeatureCard
          icon={<Layers />}
          title="Bulk Scraping"
          description="Upload or paste multiple links and let AI process them in parallel."
        />

        <FeatureCard
          icon={<Search />}
          title="AI Discover"
          description="Browse saved items with summaries, tags, and search-powered discovery."
        />
      </section>

      {/* How it works */}
      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          How it works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Step
            step="1"
            title="Add link(s)"
            description="Paste a single URL or upload a list for bulk scraping."
          />

          <Step
            step="2"
            title="AI processes content"
            description="We scrape, clean, summarize, and tag the content using AI."
          />

          <Step
            step="3"
            title="Discover insights"
            description="Search, explore, and revisit your saved knowledge anytime."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl border bg-muted p-10 text-center space-y-6">
        <h3 className="text-2xl font-semibold">
          Turn websites into structured knowledge
        </h3>

        <p className="text-muted-foreground max-w-xl mx-auto">
          Built with Next.js, OpenRouter, and AI SDK — fast, private,
          and designed for real research workflows.
        </p>

        <Button size="lg">
          Start Scraping with AI
        </Button>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-3">
        <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}

function Step({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <Card>
      <CardContent className="pt-6 space-y-2">
        <span className="text-sm font-medium text-primary">
          Step {step}
        </span>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  )
}
