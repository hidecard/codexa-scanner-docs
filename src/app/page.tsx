import { Navbar } from '@/components/codexa/navbar'
import { Hero } from '@/components/codexa/hero'
import { Modules } from '@/components/codexa/modules'
import { Platforms } from '@/components/codexa/platforms'
import { HowItWorks } from '@/components/codexa/how-it-works'
import { Downloads } from '@/components/codexa/downloads'
import { QuickStart } from '@/components/codexa/quick-start'
import { Footer } from '@/components/codexa/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Modules />
        <Platforms />
        <HowItWorks />
        <Downloads />
        <QuickStart />
      </main>
      <Footer />
    </div>
  )
}
