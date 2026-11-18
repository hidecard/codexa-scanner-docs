import { Navbar } from '@/components/codexa/navbar'
import { Footer } from '@/components/codexa/footer'
import { ScrollToTop } from '@/components/codexa/scroll-to-top'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
