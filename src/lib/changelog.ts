import type { LocalString } from '@/lib/i18n/local-string'

export type ReleaseAsset = {
  name: string
  size: string
}

export type Release = {
  version: string
  tag: string
  date: string
  latest?: boolean
  summary: LocalString
  highlights: LocalString[]
  assets?: ReleaseAsset[]
  compareUrl: string
}

// Releases use GitHub's auto-generated notes (no hand-written body).
// Highlights below are derived from the repository's commit history and
// the feature set documented in the README, mapped to each tag.
export const RELEASES: Release[] = [
  {
    version: 'v1.1.6',
    tag: 'v1.1.6',
    date: '2026-11-20T02:00:00Z',
    latest: true,
    summary: {
      en: 'Latest Threat & CVE Feed, engagement workflows, and CI/release reliability updates.',
      my: 'Latest Threat & CVE Feed၊ engagement workflow နဲ့ CI/release ယုံကြည်ရမှု update တွေ။',
    },
    highlights: [
      { en: 'Opt-in CISA KEV and NVD 2.0 sync without an API key', my: 'API key မလိုတဲ့ opt-in CISA KEV + NVD 2.0 sync' },
      { en: 'Local SQLite CVE cache with 15-second source timeouts and offline bundled-advisory fallback', my: '15-second source timeout နဲ့ offline bundled-advisory fallback ပါ local SQLite CVE cache' },
      { en: 'Dashboard 7/30-day Critical/High feed, KEV badges and scanned-asset technology matching', my: 'Dashboard 7/30-day Critical/High feed၊ KEV badge + scanned-asset technology matching' },
      { en: 'Workspaces, Nmap XML/subdomain imports, HTTP Inspector and bounded safe replay', my: 'Workspace၊ Nmap XML/subdomain import၊ HTTP Inspector + bounded safe replay' },
      { en: 'Analyst finding tags/notes, command palette and bilingual Security Playbook', my: 'Analyst finding tag/note၊ command palette + bilingual Security Playbook' },
      { en: 'CI portability fix for missing custom-rules files and verified release packaging', my: 'Custom-rules file မရှိတဲ့အခါ CI portability fix + release packaging verification' },
    ],
    assets: [
      { name: 'CodexaScanner-amd64.dmg', size: 'release asset' },
      { name: 'CodexaScanner-arm64.dmg', size: 'release asset' },
      { name: 'CodexaScanner.exe', size: 'release asset' },
      { name: 'CodexaScanner_1.1.6_amd64.deb', size: 'release asset' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.1.4...v1.1.6',
  },
  {
    version: 'v1.1.4',
    tag: 'v1.1.4',
    date: '2026-11-18T01:28:30Z',
    latest: true,
    summary: {
      en: 'macOS DMG builds for Intel and Apple Silicon, plus CI runner updates and UI fixes.',
      my: 'Intel နဲ့ Apple Silicon အတွက် macOS DMG build တွေ၊ CI runner update + UI fix တွေပါ။',
    },
    highlights: [
      { en: 'macOS DMG builds for both Intel (amd64) and Apple Silicon (arm64)', my: 'Intel (amd64) + Apple Silicon (arm64) နှစ်ခုလုံးအတွက် macOS DMG build' },
      { en: 'CI: macOS 15 runner for Apple Silicon DMG; Intel DMG on available runner', my: 'CI: Apple Silicon DMG အတွက် macOS 15 runner; Intel DMG က available runner ပေါ်' },
      { en: 'CI: stage macOS app before creating DMG', my: 'CI: DMG မဆောက်ခင် macOS app stage လုပ်' },
      { en: 'UI fixes and feature refinements', my: 'UI fix + feature တိုးတက်မှု' },
      { en: 'Remediation prioritization guidance', my: 'Remediation ဦးစားပေး လမ်းညွှန်' },
    ],
    assets: [
      { name: 'CodexaScanner-amd64.dmg', size: '6.42 MB' },
      { name: 'CodexaScanner-arm64.dmg', size: '6.02 MB' },
      { name: 'CodexaScanner.exe', size: '14.7 MB' },
      { name: 'CodexaScanner_1.1.4_amd64.deb', size: '5.86 MB' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.1.3...v1.1.4',
  },
  {
    version: 'v1.1.3',
    tag: 'v1.1.3',
    date: '2026-11-18T00:56:34Z',
    summary: {
      en: 'Remediation guidance improvements.',
      my: 'Remediation လမ်းညွှန် တိုးတက်မှု။',
    },
    highlights: [
      { en: 'Bilingual remediation playbook improvements', my: 'Bilingual remediation playbook တိုးတက်မှု' },
      { en: 'Remediation prioritization guidance', my: 'Remediation ဦးစားပေး လမ်းညွှန်' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.1.2...v1.1.3',
  },
  {
    version: 'v1.1.2',
    tag: 'v1.1.2',
    date: '2026-11-18T00:53:32Z',
    summary: {
      en: 'Feature phase update and refinements.',
      my: 'Feature phase update + တိုးတက်မှု။',
    },
    highlights: [
      { en: 'Feature phase update across modules', my: 'Module တွေကို feature phase update' },
      { en: 'Continued UI and feature refinements', my: 'UI + feature တိုးတက်မှု ဆက်လုပ်' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.1.1...v1.1.2',
  },
  {
    version: 'v1.1.1',
    tag: 'v1.1.1',
    date: '2026-11-18T00:47:30Z',
    summary: {
      en: 'CI and UI fixes.',
      my: 'CI + UI fix တွေ။',
    },
    highlights: [
      { en: 'CI workflow reliability fixes', my: 'CI workflow ယုံကြည်စရာဖြစ်မှု fix' },
      { en: 'UI fixes and feature refinements', my: 'UI fix + feature တိုးတက်မှု' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.1.0...v1.1.1',
  },
  {
    version: 'v1.1.0',
    tag: 'v1.1.0',
    date: '2026-11-18T00:31:38Z',
    summary: {
      en: 'Major feature expansion — added recon modules, IP information and improved UI.',
      my: 'Feature ကြီးကြီးမားမား တိုးချဲ့ — recon module၊ IP information + UI တိုးတက်မှု ထည့်။',
    },
    highlights: [
      { en: 'Added recon modules: subdomain discovery, path fuzzer, TLS inspector, DNS intelligence', my: 'Recon module တွေထည့်: subdomain discovery, path fuzzer, TLS inspector, DNS intelligence' },
      { en: 'IP information view with public/private classification and RDAP metadata', my: 'Public/private အမျိုးအစား + RDAP metadata ပါ IP information view' },
      { en: 'Local scan history with latest-two-scan port diff', my: 'နောက်ဆုံး scan နှစ်ခု port diff ပါ local scan history' },
      { en: 'Improved responsive UI and scrolling', my: 'Responsive UI + scrolling တိုးတက်မှု' },
      { en: 'Feature guides documentation', my: 'Feature guide စာရွက်စာတမ်း' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/compare/v1.0.0...v1.1.0',
  },
  {
    version: 'v1.0.0',
    tag: 'v1.0.0',
    date: '2026-11-17T18:36:51Z',
    summary: {
      en: 'Initial cross-platform release — port scanner, web audit and local history.',
      my: 'ခရိုစ်-ပလက်ဖောင်း ပထမထွက်ရှိမှု — port scanner, web audit + local history။',
    },
    highlights: [
      { en: 'Cross-platform desktop app: Linux (.deb) and Windows (.exe)', my: 'ခရိုစ်-ပလက်ဖောင်း desktop app: Linux (.deb) + Windows (.exe)' },
      { en: 'Port scanner with concurrent TCP checks and live results', my: 'တပြိုင်နက် TCP check + live ရလဒ်ပါ port scanner' },
      { en: 'Web audit: HTTP/HTTPS checks, security headers, TLS and CSP diagnostics', my: 'Web audit: HTTP/HTTPS check, security header, TLS + CSP diagnostics' },
      { en: 'Local SQLite scan history with bounded redaction', my: 'Bounded redaction ပါ local SQLite scan history' },
      { en: 'Passive, non-exploitative checks with an authorization-first model', my: 'Authorization-first model နဲ့ passive + non-exploitative check တွေ' },
    ],
    compareUrl: 'https://github.com/hidecard/codexa-scanner/commits/v1.0.0',
  },
]
