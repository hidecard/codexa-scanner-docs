import { Navbar } from '@/components/codexa/navbar'
import { Footer } from '@/components/codexa/footer'
import { ScrollToTop } from '@/components/codexa/scroll-to-top'
import { SearchPalette } from '@/components/codexa/search-palette'
import { ScrollProgress } from '@/components/codexa/scroll-progress'
import { BackToTop } from '@/components/codexa/back-to-top'
import { ShortcutsDialog } from '@/components/codexa/shortcuts-dialog'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <SearchPalette />
      <ShortcutsDialog />
      <BackToTop />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
