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
  usage: string[]
  checks: string[]
  notes?: string
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
    usage: [
      'Open the Port Scanner module from the sidebar.',
      'Enter a bare IPv4/IPv6 address or ASCII DNS hostname — URLs, ports and control characters are rejected.',
      'Set the port range to scan (e.g. 1–1000).',
      'Confirm the authorization prompt for the exact target and selected range.',
      'Start the scan — reachable ports stream live with service and banner hints.',
      'For private/lab targets (RFC1918, ULA, loopback), enable the default-off one-shot opt-in.',
      'Cancel at any time; status reflects cancellation, completion or failure.',
    ],
    checks: [
      'Concurrent TCP connect probes with capped workers & per-connection timeout',
      'Hostname resolved once (5s lookup) → one deterministic pinned address (IPv4 preferred)',
      'Best-effort service identification & banner collection on reachable ports',
      'Private/special-use address policy with one-shot lab opt-in',
    ],
    notes:
      'When a name has multiple A/AAAA answers, only the selected address is scanned in that run. The pinned address is shown in the UI.',
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
    usage: [
      'Open the Web Audit module.',
      'Enter one or more URLs (HTTP or HTTPS) — up to 100 per run.',
      'Enable the private/lab opt-in if any target is on an internal address.',
      'Optionally set a request delay to control rate.',
      'Run the audit — each URL is checked in its own host/port scope with a 5-hop redirect cap.',
      'Review findings by severity: headers, cookies, TLS, CSP, mixed-content, CORS/JWT, client-side exposure.',
      'Check the per-URL risk score (0–100) and A+–F grade.',
      'Export the report to JSON, HTML, Markdown or PDF.',
    ],
    checks: [
      'Security headers, Secure/HttpOnly/SameSite cookie attributes',
      'CSP directive diagnostics with evidence (unsafe-inline, unsafe-eval, wildcards)',
      'TLS certificate expiry/trust/hostname + mixed-content references',
      'Bounded /.well-known/security.txt & /robots.txt inspectors',
      'Passive CORS/JWT posture, DB-error disclosure & client-side exposure clues',
    ],
    notes:
      'Same-host redirects are allowed (incl. HTTP:80 → HTTPS:443); cross-host redirects, HTTPS downgrades and other port changes are blocked. robots.txt is discovery guidance, not a security control.',
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
    usage: [
      'Open the Subdomain Discovery module.',
      'Enter a root domain (e.g. example.org).',
      'Run the Certificate Transparency lookup via crt.sh — capped at 500 names.',
      'Optionally enable the bounded DNS wordlist lookup for deeper enumeration.',
      'Review discovered subdomains in the results list.',
      'Send selected names directly to the Web Audit HTTP analyzer.',
    ],
    checks: [
      'Certificate Transparency lookups via crt.sh (capped at 500 names)',
      'Optional bounded DNS wordlist resolution',
      'Discovered names can feed the HTTP analyzer',
    ],
    notes:
      'CT coverage depends on what certificates have been issued — absence of a name does not prove it does not exist.',
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
    usage: [
      'Open the Path Fuzzer module.',
      'Enter the target URL origin (scheme + host).',
      'Choose a preset: framework, environment or API path lists.',
      'Optionally set a request delay.',
      'Run — HEAD requests are sent to up to 500 candidate paths.',
      'Review results by comparing status and Content-Length against the randomized missing-path baseline.',
    ],
    checks: [
      'HEAD-only requests — response bodies are never fetched or displayed',
      'Status & Content-Length compared to a randomized missing-path baseline',
      'Follows no redirects; capped at 500 candidate paths',
    ],
    notes:
      'This is an active but bounded check. Results are indicators for review, not proof of a hidden endpoint.',
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
    usage: [
      'Open the TLS Inspector module.',
      'Enter the host (and port, default 443).',
      'Run the inspection — TLS is validated with the system trust store.',
      'Review certificate validity, trust/self-signed state, expiry and presented chain subjects.',
      'Inspect the SAN count and negotiated cipher.',
      'Check legacy TLS 1.0 / 1.1 support status.',
    ],
    checks: [
      'Certificate trust / self-signed state & expiry',
      'Subject Alternative Names (SAN) count & details',
      'Negotiated cipher & presented chain subjects',
      'TLS 1.0 / 1.1 exact-version handshake probes',
    ],
    notes:
      'TLS 1.0/1.1 results are best-effort: the local Go crypto policy can prevent a legacy handshake independently of the remote server. "Not supported" is reported only after an explicit protocol_version alert.',
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
    usage: [
      'Open the DNS Intelligence module.',
      'Enter the domain to query.',
      'Run the query — A, AAAA, MX, NS, TXT, SPF, DMARC and reverse PTR records are resolved.',
      'Review the complete record set in the results panel.',
      'Optionally enable RDAP lookup for public-IP registration & country metadata.',
      'Results are saved locally for later review.',
    ],
    checks: [
      'A, AAAA, MX, NS, TXT, SPF, DMARC record resolution',
      'Reverse PTR lookups',
      'Optional RDAP registration / country metadata (public IPs only)',
    ],
    notes:
      'RDAP country/network data describes registry records and is not precise geolocation or a guaranteed ASN mapping.',
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
    usage: [
      'Open the IP Information module.',
      'Enter an IP address (IPv4 or IPv6).',
      'Review the source-labeled classification: public, private or special-use.',
      'Check the reverse DNS lookup result.',
      'For public IPs, review the RDAP registration metadata.',
    ],
    checks: [
      'RFC1918 / IPv6 ULA / loopback private classification',
      'Reverse DNS (PTR) lookups',
      'Public-IP RDAP registration metadata',
      'Link-local, multicast, unspecified & reserved address awareness',
    ],
    notes:
      'No geolocation is inferred. Private/special-use targets follow the same authorization policy as the rest of the app.',
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
    usage: [
      'Every scan is automatically saved to the local SQLite history.',
      'Open the History module to browse past scans (latest 2,000 records).',
      'Compare the latest two scans for a target to see a port diff.',
      'Open any saved scan to review its full findings.',
      'Export any scan to JSON, HTML, Markdown or PDF.',
      'To clear history: close the app, then delete the CodexaScanner/history.sqlite file.',
    ],
    checks: [
      'Local SQLite history at CodexaScanner/history.sqlite',
      'Auto-pruned to latest 2,000 records',
      'Latest-two-scan port diff per target',
      'Bounded redaction of credentials, sensitive query/fragments & sensitive keys',
    ],
    notes:
      'The database is not uploaded by the app and is not encrypted. On Unix-style systems, access is restricted to the current user.',
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
