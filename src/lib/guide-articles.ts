import type { LucideIcon } from 'lucide-react'
import { Compass, PackageCheck, Hammer, HelpCircle, ShieldAlert } from 'lucide-react'

export type DocBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'code'; code: string }
  | {
      kind: 'callout'
      tone: 'info' | 'warning'
      title?: string
      text: string
    }

export type DocSection = {
  id: string
  title: string
  blocks: DocBlock[]
}

export type GuideArticle = {
  id: string
  name: string
  icon: LucideIcon
  category: 'Getting Started' | 'Reference'
  short: string
  intro: string
  sections: DocSection[]
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: Compass,
    category: 'Getting Started',
    short: 'Authorization model, your first scan, and where data lives',
    intro:
      'New to Codexa Scanner? This guide walks through the authorization-first workflow, your first scan, and where your data lives.',
    sections: [
      {
        id: 'what-is-codexa',
        title: 'What is Codexa Scanner',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Codexa Scanner is a cross-platform desktop application for network reconnaissance and HTTP security-header inspection. It is built with Go, Wails v2, React and TypeScript, and ships native builds for Linux, Windows and macOS. It bundles eight bounded modules — port scanning, web audit, subdomain discovery, path fuzzing, TLS inspection, DNS intelligence, IP information, and local history & reports — into a single desktop tool.',
          },
        ],
      },
      {
        id: 'before-you-start',
        title: 'Before you start',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Codexa Scanner is designed for authorized testing, education and defensive security work. Keep these principles in mind:',
          },
          {
            kind: 'list',
            items: [
              'Use it only against systems you own or have explicit permission to assess.',
              'Every scan requires explicit authorization confirmation for its exact target and range.',
              'All checks are passive and non-exploitative — they surface indicators, not proof of exploitability.',
              'Private/lab targets (RFC1918, ULA, loopback) are default-off and need a one-shot opt-in.',
            ],
          },
        ],
      },
      {
        id: 'your-first-scan',
        title: 'Your first scan',
        blocks: [
          {
            kind: 'paragraph',
            text: 'A typical first run with the Port Scanner module:',
          },
          {
            kind: 'list',
            items: [
              'Open a module from the sidebar — for example Port Scanner.',
              'Enter a bare IPv4/IPv6 address or ASCII DNS hostname (URLs and ports are rejected).',
              'Set the port range to scan (e.g. 1–1000).',
              'Confirm the authorization prompt for the exact target and range.',
              'Watch reachable ports stream in live, with service and banner hints.',
              'Review findings, then export to JSON, HTML, Markdown or PDF.',
            ],
          },
        ],
      },
      {
        id: 'where-data-lives',
        title: 'Where your data lives',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Every scan is saved to a local SQLite database at CodexaScanner/history.sqlite in your OS user-configuration directory. The database is auto-pruned to the latest 2,000 records and is never uploaded by the app. Bounded redaction is applied to stored data and exports for credentials, sensitive query/fragments and sensitive keys.',
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: 'Not encrypted',
            text: 'The history database is not encrypted. To clear history, close the app completely and delete the history.sqlite file. On Unix-style systems, access is restricted to the current user.',
          },
        ],
      },
    ],
  },
  {
    id: 'installation',
    name: 'Installation & Verification',
    icon: PackageCheck,
    category: 'Getting Started',
    short: 'Download, install, verify, upgrade and uninstall',
    intro:
      'Download, install, verify, upgrade and uninstall Codexa Scanner across Linux, Windows and macOS.',
    sections: [
      {
        id: 'download',
        title: 'Download',
        blocks: [
          {
            kind: 'paragraph',
            text: 'All builds are published on the GitHub Releases page and produced by GitHub Actions CI:',
          },
          {
            kind: 'list',
            items: [
              'Linux — CodexaScanner_1.1.4_amd64.deb',
              'Windows — CodexaScanner.exe (portable)',
              'macOS Apple Silicon — CodexaScanner-arm64.dmg',
              'macOS Intel — CodexaScanner-amd64.dmg',
            ],
          },
        ],
      },
      {
        id: 'install-per-os',
        title: 'Install per OS',
        blocks: [
          {
            kind: 'list',
            items: [
              'Linux: sudo dpkg -i CodexaScanner_1.1.4_amd64.deb (install GTK/WebKit runtime deps if missing).',
              'Windows: run CodexaScanner.exe directly — WebView2 runtime is required (preinstalled on Windows 11).',
              'macOS: open the DMG, drag CodexaScanner.app to Applications, then right-click → Open the first time (Gatekeeper, unsigned build).',
            ],
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: 'Unsigned macOS builds',
            text: 'The macOS DMGs are currently unsigned and not notarized. Use Open from the Finder context menu the first time if Gatekeeper blocks the launch.',
          },
        ],
      },
      {
        id: 'verify-install',
        title: 'Verify a clean-machine install',
        blocks: [
          {
            kind: 'paragraph',
            text: 'For clean-machine install, upgrade and uninstall steps — plus SQLite history data-retention verification — see docs/release-verification.md in the repository. It covers the exact sequence to confirm a build behaves correctly on a fresh machine.',
          },
        ],
      },
      {
        id: 'upgrade-uninstall',
        title: 'Upgrade & uninstall',
        blocks: [
          {
            kind: 'list',
            items: [
              'Upgrade: replace the binary or app bundle with the newer release; history is preserved.',
              'Linux uninstall: sudo apt remove codexascanner (or dpkg -r).',
              'Windows uninstall: delete the portable .exe.',
              'macOS uninstall: drag CodexaScanner.app from Applications to Trash.',
            ],
          },
        ],
      },
      {
        id: 'history-retention',
        title: 'SQLite history retention',
        blocks: [
          {
            kind: 'paragraph',
            text: 'History is auto-pruned to the latest 2,000 records. Bounded redaction is applied to embedded URL credentials, sensitive query/fragments and sensitive result keys — this is not a complete guarantee, but limits exposure in stored data and exports.',
          },
          {
            kind: 'callout',
            tone: 'info',
            text: 'The database is not uploaded by the app and is not encrypted. Delete CodexaScanner/history.sqlite while the app is closed to clear all history.',
          },
        ],
      },
    ],
  },
  {
    id: 'build-from-source',
    name: 'Build from Source',
    icon: Hammer,
    category: 'Getting Started',
    short: 'Prerequisites, clone, per-platform targets & CI',
    intro:
      'Prefer to compile yourself? Codexa Scanner builds cleanly with Go, the Wails CLI and a standard npm frontend pipeline.',
    sections: [
      {
        id: 'prerequisites',
        title: 'Prerequisites',
        blocks: [
          {
            kind: 'list',
            items: [
              'Go 1.22 or newer',
              'Node.js 20+ and npm',
              'Wails v2 CLI (see the official Wails install docs)',
              'Linux: GTK / WebKit development libraries',
              'Windows: WebView2 runtime (run the build on Windows)',
            ],
          },
        ],
      },
      {
        id: 'clone-build',
        title: 'Clone & build',
        blocks: [
          {
            kind: 'code',
            code: `git clone https://github.com/hidecard/codexa-scanner.git
cd codexa-scanner

npm install --prefix frontend
cd frontend && npm run build && cd ..
go mod tidy

wails build -platform linux/amd64`,
          },
        ],
      },
      {
        id: 'per-platform-targets',
        title: 'Per-platform targets',
        blocks: [
          {
            kind: 'paragraph',
            text: 'On macOS, Wails builds an application bundle. Build the architecture matching your Mac, or use the release DMG files:',
          },
          {
            kind: 'code',
            code: `wails build -platform darwin/arm64   # Apple Silicon
wails build -platform darwin/amd64   # Intel
wails build -platform windows/amd64  # Windows`,
          },
        ],
      },
      {
        id: 'development-mode',
        title: 'Development mode',
        blocks: [
          {
            kind: 'paragraph',
            text: 'For development with hot reload, run wails dev from the repository root after installing dependencies. Frontend dependencies are pinned with a committed lockfile to reduce build drift.',
          },
        ],
      },
      {
        id: 'ci',
        title: 'Continuous integration',
        blocks: [
          {
            kind: 'paragraph',
            text: 'GitHub Actions (.github/workflows/build.yml) runs on pushes to main, pull requests and version tags (v*). Permissions are least-privilege by default (contents: read); only the tag-release job is granted contents: write. The release job attaches the .deb, .exe and both .dmg assets to a GitHub Release with generated notes.',
          },
        ],
      },
    ],
  },
  {
    id: 'faq',
    name: 'FAQ',
    icon: HelpCircle,
    category: 'Reference',
    short: 'How reporting works and where the bounds are',
    intro:
      'Common questions about how Codexa Scanner reports findings and bounds its checks.',
    sections: [
      {
        id: 'risk-score-cvss',
        title: 'Is the risk score a CVSS?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. The 0–100 risk score and the A+–F grade are a simple severity-weighted heuristic — not CVSS and not a formal risk score. Use them as a quick triage signal, not a definitive measurement.',
          },
        ],
      },
      {
        id: 'tls-inconclusive',
        title: 'Why are TLS 1.0/1.1 results sometimes "Inconclusive"?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'TLS 1.0/1.1 probes report "Supported" only after an exact-version handshake succeeds, "Not supported" only after an explicit protocol_version alert, and otherwise "Inconclusive" with the probe error. The local Go crypto policy can prevent a legacy handshake independently of the remote server, so these results are best-effort.',
          },
        ],
      },
      {
        id: 'subdomain-coverage',
        title: 'Does subdomain discovery find every subdomain?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. Discovery relies on Certificate Transparency data via crt.sh, capped at 500 names. Coverage depends on what certificates have been issued — the absence of a name does not prove it does not exist. An optional bounded DNS wordlist lookup can go deeper.',
          },
        ],
      },
      {
        id: 'tech-fingerprints',
        title: 'Are technology / WAF fingerprints definitive?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. Fingerprints are passive clues based on observed response headers, cookie names and a bounded HTML sample. They may be incomplete or false positives — they are not confirmation of a WAF or a specific product.',
          },
        ],
      },
      {
        id: 'clean-report',
        title: 'Does a clean report mean no vulnerabilities?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. The passive web-audit module does not authenticate, crawl linked routes, submit forms, test authorization or exploit vulnerabilities. A clean report does not mean a site is vulnerability-free. The separate path module is active but bounded and HEAD-only.',
          },
        ],
      },
      {
        id: 'rdap-geolocation',
        title: 'Is RDAP country data precise geolocation?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. RDAP country/network data describes registry records and is not precise geolocation or a guaranteed ASN mapping. No geolocation is inferred anywhere in the app.',
          },
        ],
      },
      {
        id: 'history-uploaded',
        title: 'Is my scan history uploaded anywhere?',
        blocks: [
          {
            kind: 'paragraph',
            text: 'No. History lives in a local SQLite file (CodexaScanner/history.sqlite) and is never uploaded by the app. Optional RDAP lookups contact the public RDAP service only for public IP addresses.',
          },
        ],
      },
    ],
  },
  {
    id: 'authorized-use',
    name: 'Authorized Use',
    icon: ShieldAlert,
    category: 'Reference',
    short: 'The notice, what passive means, and your responsibilities',
    intro:
      'Codexa Scanner is provided for authorized testing, education and defensive security work. Read this before scanning anything.',
    sections: [
      {
        id: 'notice',
        title: 'Authorized-use notice',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Use Codexa Scanner only against systems you own or have explicit permission to assess. Port scanning and HTTP requests may be logged, trigger defensive controls, or violate policy or law when performed without authorization. Checks are passive and non-exploitative; results are indicators for review, not proof of exploitability or a substitute for a professional assessment.',
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: 'Your responsibility',
            text: 'You are responsible for obtaining permission, complying with applicable laws, and respecting target scope and rate limits. The authors accept no liability for misuse or damage.',
          },
        ],
      },
      {
        id: 'passive-meaning',
        title: 'What "passive & non-exploitative" means',
        blocks: [
          {
            kind: 'list',
            items: [
              'The web-audit module does not authenticate, crawl linked routes, submit forms or test authorization.',
              'It does not exploit vulnerabilities or attempt to bypass controls.',
              'The path module is active but bounded and HEAD-only — it never fetches or displays response bodies.',
              'Findings are severity-tagged indicators for review, not proof of exploitability.',
            ],
          },
        ],
      },
      {
        id: 'responsibilities',
        title: 'Your responsibilities',
        blocks: [
          {
            kind: 'list',
            items: [
              'Obtain explicit permission for every target before scanning.',
              'Comply with all applicable laws and regulations in your jurisdiction.',
              'Respect the agreed scope and rate limits — use the request delay controls where offered.',
              'Treat results as indicators to investigate, not as a green light to act.',
            ],
          },
        ],
      },
      {
        id: 'private-targets',
        title: 'Private & lab targets',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Private RFC1918, IPv6 ULA and loopback targets are blocked by default and require a one-shot opt-in for authorized lab use. Link-local, multicast, unspecified and special-use/reserved addresses remain blocked entirely. There is no blanket private-IP block — authorized private/lab targets are available when explicitly opted in.',
          },
        ],
      },
    ],
  },
]
