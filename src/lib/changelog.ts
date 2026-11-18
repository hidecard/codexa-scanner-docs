export type ReleaseAsset = {
  name: string
  size: string
}

export type Release = {
  version: string
  tag: string
  date: string
  latest?: boolean
  summary: string
  highlights: string[]
  assets?: ReleaseAsset[]
  compareUrl: string
}

// Releases use GitHub's auto-generated notes (no hand-written body).
// Highlights below are derived from the repository's commit history and
// the feature set documented in the README, mapped to each tag.
export const RELEASES: Release[] = [
  {
    version: 'v1.1.4',
    tag: 'v1.1.4',
    date: '2026-11-18T01:28:30Z',
    latest: true,
    summary:
      'macOS DMG builds for Intel and Apple Silicon, plus CI runner updates and UI fixes.',
    highlights: [
      'macOS DMG builds for both Intel (amd64) and Apple Silicon (arm64)',
      'CI: macOS 15 runner for Apple Silicon DMG; Intel DMG on available runner',
      'CI: stage macOS app before creating DMG',
      'UI fixes and feature refinements',
      'Remediation prioritization guidance',
    ],
    assets: [
      { name: 'CodexaScanner-amd64.dmg', size: '6.42 MB' },
      { name: 'CodexaScanner-arm64.dmg', size: '6.02 MB' },
      { name: 'CodexaScanner.exe', size: '14.7 MB' },
      { name: 'CodexaScanner_1.1.4_amd64.deb', size: '5.86 MB' },
    ],
    compareUrl:
      'https://github.com/hidecard/codexa-scanner/compare/v1.1.3...v1.1.4',
  },
  {
    version: 'v1.1.3',
    tag: 'v1.1.3',
    date: '2026-11-18T00:56:34Z',
    summary: 'Remediation guidance improvements.',
    highlights: [
      'Bilingual remediation playbook improvements',
      'Remediation prioritization guidance',
    ],
    compareUrl:
      'https://github.com/hidecard/codexa-scanner/compare/v1.1.2...v1.1.3',
  },
  {
    version: 'v1.1.2',
    tag: 'v1.1.2',
    date: '2026-11-18T00:53:32Z',
    summary: 'Feature phase update and refinements.',
    highlights: [
      'Feature phase update across modules',
      'Continued UI and feature refinements',
    ],
    compareUrl:
      'https://github.com/hidecard/codexa-scanner/compare/v1.1.1...v1.1.2',
  },
  {
    version: 'v1.1.1',
    tag: 'v1.1.1',
    date: '2026-11-18T00:47:30Z',
    summary: 'CI and UI fixes.',
    highlights: [
      'CI workflow reliability fixes',
      'UI fixes and feature refinements',
    ],
    compareUrl:
      'https://github.com/hidecard/codexa-scanner/compare/v1.1.0...v1.1.1',
  },
  {
    version: 'v1.1.0',
    tag: 'v1.1.0',
    date: '2026-11-18T00:31:38Z',
    summary:
      'Major feature expansion — added recon modules, IP information and improved UI.',
    highlights: [
      'Added recon modules: subdomain discovery, path fuzzer, TLS inspector, DNS intelligence',
      'IP information view with public/private classification and RDAP metadata',
      'Local scan history with latest-two-scan port diff',
      'Improved responsive UI and scrolling',
      'Feature guides documentation',
    ],
    compareUrl:
      'https://github.com/hidecard/codexa-scanner/compare/v1.0.0...v1.1.0',
  },
  {
    version: 'v1.0.0',
    tag: 'v1.0.0',
    date: '2026-11-17T18:36:51Z',
    summary:
      'Initial cross-platform release — port scanner, web audit and local history.',
    highlights: [
      'Cross-platform desktop app: Linux (.deb) and Windows (.exe)',
      'Port scanner with concurrent TCP checks and live results',
      'Web audit: HTTP/HTTPS checks, security headers, TLS and CSP diagnostics',
      'Local SQLite scan history with bounded redaction',
      'Passive, non-exploitative checks with an authorization-first model',
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/commits/v1.0.0',
  },
]
