import type { LucideIcon } from 'lucide-react'
import {
  Radar,
  ShieldCheck,
  Network,
  Route,
  Lock,
  Globe,
  Server,
  History,
  Terminal,
  Cpu,
  Code2,
  Layers,
} from 'lucide-react'

export const PROJECT = {
  name: 'Codexa Scanner',
  version: 'v1.1.4',
  tagline: 'Cross-platform network reconnaissance & HTTP security-header inspection',
  description:
    'A desktop application for network reconnaissance and HTTP security-header inspection built with Go, Wails v2, React and TypeScript. Designed for authorized testing, education and defensive security work.',
  author: 'H!D3-C4rD',
  repo: 'https://github.com/hidecard/codexa-scanner',
  releases: 'https://github.com/hidecard/codexa-scanner/releases',
  docs: 'https://github.com/hidecard/codexa-scanner/tree/main/docs',
  downloadBase: 'https://github.com/hidecard/codexa-scanner/releases/download/v1.1.4',
} as const

export type Platform = {
  id: string
  name: string
  os: 'Linux' | 'Windows' | 'macOS'
  arch: string
  file: string
  url: string
  size: string
  format: string
  icon: LucideIcon
  accent: string
  install: string[]
  note?: string
}

export const PLATFORMS: Platform[] = [
  {
    id: 'linux',
    name: 'Linux',
    os: 'Linux',
    arch: 'amd64',
    file: 'CodexaScanner_1.1.4_amd64.deb',
    url: `${PROJECT.downloadBase}/CodexaScanner_1.1.4_amd64.deb`,
    size: '.deb package',
    format: 'DEB',
    icon: Terminal,
    accent: 'amber',
    install: [
      'Download the .deb package',
      'Install via: sudo dpkg -i CodexaScanner_1.1.4_amd64.deb',
      'Install GTK/WebKit runtime deps if missing',
      'Launch CodexaScanner from your app menu',
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    os: 'Windows',
    arch: 'x64',
    file: 'CodexaScanner.exe',
    url: `${PROJECT.downloadBase}/CodexaScanner.exe`,
    size: 'Portable EXE',
    format: 'EXE',
    icon: Cpu,
    accent: 'sky',
    install: [
      'Download CodexaScanner.exe',
      'Ensure WebView2 runtime is installed (Windows 11 has it by default)',
      'Run the executable — no installation required',
      'Optional: pin to taskbar for quick access',
    ],
    note: 'Portable build — runs without installation.',
  },
  {
    id: 'macos-arm',
    name: 'macOS Apple Silicon',
    os: 'macOS',
    arch: 'arm64',
    file: 'CodexaScanner-arm64.dmg',
    url: `${PROJECT.downloadBase}/CodexaScanner-arm64.dmg`,
    size: '.dmg disk image',
    format: 'DMG',
    icon: Layers,
    accent: 'emerald',
    install: [
      'Download CodexaScanner-arm64.dmg (M1/M2/M3/M4 Macs)',
      'Open the DMG and drag CodexaScanner.app to Applications',
      'First launch: right-click → Open (Gatekeeper, unsigned build)',
    ],
    note: 'Unsigned & not notarized — use Finder “Open” the first time.',
  },
  {
    id: 'macos-intel',
    name: 'macOS Intel',
    os: 'macOS',
    arch: 'amd64',
    file: 'CodexaScanner-amd64.dmg',
    url: `${PROJECT.downloadBase}/CodexaScanner-amd64.dmg`,
    size: '.dmg disk image',
    format: 'DMG',
    icon: Layers,
    accent: 'emerald',
    install: [
      'Download CodexaScanner-amd64.dmg (Intel Macs)',
      'Open the DMG and drag CodexaScanner.app to Applications',
      'First launch: right-click → Open to bypass Gatekeeper',
    ],
    note: 'Unsigned & not notarized — use Finder “Open” the first time.',
  },
]

export type Module = {
  id: string
  name: string
  icon: LucideIcon
  short: string
  description: string
  bullets: string[]
}

export const MODULES: Module[] = [
  {
    id: 'port-scanner',
    name: 'Port Scanner',
    icon: Radar,
    short: 'Concurrent TCP port checks with live results',
    description:
      'Concurrent TCP port checks with a capped worker pool and per-connection timeout. Hostnames resolve once per scan with one deterministic pinned address shown in the UI.',
    bullets: [
      'Live findings & progress with cancellation-aware status',
      'Bare IPv4/IPv6 or ASCII DNS hostnames only',
      'Best-effort service identification & banner collection',
      'Explicit authorization confirmation per scan',
    ],
  },
  {
    id: 'web-audit',
    name: 'Web Audit',
    icon: ShieldCheck,
    short: 'Headers, cookies, TLS, CSP & client-side exposure',
    description:
      'Bulk HTTP/HTTPS checks with bounded concurrency, redirect-chain disclosure, and passive analysis of security headers, cookies, TLS, mixed-content and CSP diagnostics.',
    bullets: [
      'CSP directive diagnostics with evidence',
      'CORS / JWT posture & DB-error disclosure clues',
      'Bounded client-side exposure indicators',
      'JSON / HTML / Markdown / PDF exports',
    ],
  },
  {
    id: 'subdomain-discovery',
    name: 'Subdomain Discovery',
    icon: Network,
    short: 'Certificate Transparency + optional DNS wordlist',
    description:
      'Discover subdomains from Certificate Transparency data via crt.sh, capped at 500 names. An optional bounded DNS wordlist lookup can be enabled for deeper enumeration.',
    bullets: [
      'CT log lookups capped at 500 names',
      'Optional capped DNS wordlist expansion',
      'Send discovered names straight to the HTTP analyzer',
      'Results feed other modules automatically',
    ],
  },
  {
    id: 'path-fuzzer',
    name: 'Path Fuzzer',
    icon: Route,
    short: 'HEAD-only bounded path discovery',
    description:
      'A path discovery module that uses HEAD requests only, compares status and Content-Length to a randomized missing-path baseline, and never returns response bodies.',
    bullets: [
      'HEAD-only — no response bodies fetched',
      'Framework / env / API presets',
      'Up to 500 candidate paths',
      'Request delay control',
    ],
  },
  {
    id: 'tls-inspector',
    name: 'TLS Inspector',
    icon: Lock,
    short: 'Certificate trust, expiry, SANs & cipher',
    description:
      'Inspect TLS certificate trust/self-signed state, expiry, subject alternative names and negotiated cipher. Legacy TLS 1.0/1.1 probes use exact-version handshakes.',
    bullets: [
      'Certificate validity & presented chain subjects',
      'SAN count & negotiated cipher details',
      'TLS 1.0 / 1.1 handshake probes with clear results',
      'Best-effort reporting of legacy protocol support',
    ],
  },
  {
    id: 'dns-intelligence',
    name: 'DNS Intelligence',
    icon: Globe,
    short: 'A, AAAA, MX, NS, TXT, SPF, DMARC & PTR',
    description:
      'DNS and network intelligence for A, AAAA, MX, NS, TXT, SPF, DMARC and reverse PTR records. Optional RDAP registration and country metadata fetched from an external service.',
    bullets: [
      'Full record-set resolution per query',
      'Optional RDAP registration / country metadata',
      'Saved locally for later review',
      'Public-IP focused lookups',
    ],
  },
  {
    id: 'ip-information',
    name: 'IP Information',
    icon: Server,
    short: 'Public/private classification & reverse DNS',
    description:
      'Source-labeled IP information for public/private/special-use classification, reverse DNS, and public-IP RDAP registration metadata. No geolocation is inferred.',
    bullets: [
      'RFC1918 / ULA / loopback classification',
      'Reverse DNS lookups',
      'Public-IP RDAP registration metadata',
      'Reserved & special-use address awareness',
    ],
  },
  {
    id: 'history-reports',
    name: 'History & Reports',
    icon: History,
    short: 'Local SQLite history + multi-format exports',
    description:
      'Local SQLite history for scan snapshots, capped at 2,000 records, with a latest-two-scan port diff for a target. Bounded redaction applied to stored data and exports.',
    bullets: [
      'Auto-pruned to latest 2,000 records',
      'JSON / HTML / Markdown / PDF report exports',
      'Latest-two-scan port diff per target',
      'Bounded redaction of credentials & sensitive keys',
    ],
  },
]

export type Tech = {
  name: string
  icon: LucideIcon
  role: string
}

export const TECH_STACK: Tech[] = [
  { name: 'Go', icon: Code2, role: 'Backend core & networking engine' },
  { name: 'Wails v2', icon: Layers, role: 'Cross-platform desktop runtime' },
  { name: 'React', icon: Cpu, role: 'Component-based UI layer' },
  { name: 'TypeScript', icon: Terminal, role: 'Type-safe frontend logic' },
]

export const QUICK_STEPS = [
  {
    step: '01',
    title: 'Download & install',
    body: 'Grab the build for your OS from the Releases page — .deb for Linux, .exe for Windows, or the matching .dmg for macOS.',
  },
  {
    step: '02',
    title: 'Confirm authorization',
    body: 'Every scan requires explicit authorization confirmation for the exact target and selected range. Private/lab targets need a one-shot opt-in.',
  },
  {
    step: '03',
    title: 'Pick a module',
    body: 'Choose from Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence or IP Information.',
  },
  {
    step: '04',
    title: 'Review & export',
    body: 'Inspect findings with severity, evidence and remediation guidance, then export to JSON, HTML, Markdown or PDF.',
  },
] as const

export const STATS = [
  { label: 'Platforms', value: '4' },
  { label: 'Modules', value: '8' },
  { label: 'Version', value: 'v1.1.4' },
  { label: 'License', value: 'Open Source' },
] as const
