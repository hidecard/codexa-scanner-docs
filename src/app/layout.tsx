import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/i18n/language-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/hidecard/codexa-scanner-docs"),
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  title: "Codexa Scanner — Cross-Platform Network & Web Security Scanner",
  description:
    "Codexa Scanner is a cross-platform desktop app for network reconnaissance and HTTP security-header inspection. Built with Go, Wails, React and TypeScript. Available for Linux, Windows and macOS.",
  keywords: [
    "Codexa Scanner",
    "network scanner",
    "port scanner",
    "HTTP security headers",
    "web audit",
    "TLS inspector",
    "DNS intelligence",
    "Wails",
    "cross-platform",
    "security tool",
  ],
  authors: [{ name: "H!D3-C4rD" }],
  icons: {
    icon: "/images/app-icon.png",
  },
  openGraph: {
    title: "Codexa Scanner — Cross-Platform Security Scanner",
    description:
      "Desktop network reconnaissance and HTTP security-header inspection for Linux, Windows and macOS.",
    url: "https://github.com/hidecard/codexa-scanner-docs",
    siteName: "Codexa Scanner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codexa Scanner",
    description: "Cross-platform desktop network & web security scanner.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
