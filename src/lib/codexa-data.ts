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
  Radio,
  BriefcaseBusiness,
} from 'lucide-react'
import type { LocalString } from '@/lib/i18n/local-string'

export const PROJECT = {
  name: 'Codexa Scanner',
  version: 'v1.1.5',
  author: 'H!D3-C4rD',
  repo: 'https://github.com/hidecard/codexa-scanner',
  releases: 'https://github.com/hidecard/codexa-scanner/releases',
  docs: 'https://github.com/hidecard/codexa-scanner/tree/main/docs',
  downloadBase: 'https://github.com/hidecard/codexa-scanner/releases/download/v1.1.5',
  description: {
    en: 'A desktop application for network reconnaissance and HTTP security-header inspection built with Go, Wails v2, React and TypeScript. Designed for authorized testing, education and defensive security work.',
    my: 'ကွန်ရက်စူးစမ်းမှုနဲ့ HTTP လုံခြုံရေးဟက်ဒါ စစ်ဆေးခြင်းအတွက် Go, Wails v2, React နဲ့ TypeScript နဲ့တည်ဆောက်ထားတဲ့ ဒက်စတော့ပ် application တစ်ခု။ ခွင့်ပြုထားတဲ့ စမ်းသပ်မှု၊ ပညာရေးနဲ့ ကာကွယ်ရေး လုံခြုံမှုလုပ်ငန်းတွေအတွက် ရည်ရွယ်ထား။',
  } as LocalString,
} as const

export type Platform = {
  id: string
  name: string
  os: 'Linux' | 'Windows' | 'macOS'
  arch: string
  file: string
  url: string
  size: LocalString
  format: string
  icon: LucideIcon
  accent: string
  install: LocalString[]
  note?: LocalString
}

export const PLATFORMS: Platform[] = [
  {
    id: 'linux',
    name: 'Linux',
    os: 'Linux',
    arch: 'amd64',
    file: 'CodexaScanner_1.1.5_amd64.deb',
    url: `${PROJECT.downloadBase}/CodexaScanner_1.1.5_amd64.deb`,
    size: { en: '.deb package', my: '.deb ပက်ကေ့ဂျ်' },
    format: 'DEB',
    icon: Terminal,
    accent: 'amber',
    install: [
      { en: 'Download the .deb package', my: '.deb ပက်ကေ့ဂျ်ကို ဒေါင်းလုဒ်လုပ်ပါ' },
      { en: 'Install via: sudo dpkg -i CodexaScanner_1.1.5_amd64.deb', my: 'sudo dpkg -i CodexaScanner_1.1.5_amd64.deb နဲ့ install လုပ်ပါ' },
      { en: 'Install GTK/WebKit runtime deps if missing', my: 'GTK/WebKit runtime dependencies မရှိရင် ထည့်ပေးပါ' },
      { en: 'Launch CodexaScanner from your app menu', my: 'App menu ကနေ CodexaScanner ကိုဖွင့်ပါ' },
    ],
  },
  {
    id: 'windows',
    name: 'Windows',
    os: 'Windows',
    arch: 'x64',
    file: 'CodexaScanner.exe',
    url: `${PROJECT.downloadBase}/CodexaScanner.exe`,
    size: { en: 'Portable EXE', my: 'Portable EXE' },
    format: 'EXE',
    icon: Cpu,
    accent: 'sky',
    install: [
      { en: 'Download CodexaScanner.exe', my: 'CodexaScanner.exe ကို ဒေါင်းလုဒ်လုပ်ပါ' },
      { en: 'Ensure WebView2 runtime is installed (Windows 11 has it by default)', my: 'WebView2 runtime ထည့်ထားကြောင်း စစ်ပါ (Windows 11 မှာ ပုံသေပါရှိ)' },
      { en: 'Run the executable — no installation required', my: 'Executable ကို run လုပ်ပါ — install လုပ်စရာမလို' },
      { en: 'Optional: pin to taskbar for quick access', my: 'အလွယ်သုံးဖို့ taskbar မှာ pin လုပ်ထားလို့ရတယ်' },
    ],
    note: {
      en: 'Portable build — runs without installation.',
      my: 'Portable build — install လုပ်စရာမလို run လုပ်လို့ရတယ်။',
    },
  },
  {
    id: 'macos-arm',
    name: 'macOS Apple Silicon',
    os: 'macOS',
    arch: 'arm64',
    file: 'CodexaScanner-arm64.dmg',
    url: `${PROJECT.downloadBase}/CodexaScanner-arm64.dmg`,
    size: { en: '.dmg disk image', my: '.dmg disk image' },
    format: 'DMG',
    icon: Layers,
    accent: 'emerald',
    install: [
      { en: 'Download CodexaScanner-arm64.dmg (M1/M2/M3/M4 Macs)', my: 'CodexaScanner-arm64.dmg ကို ဒေါင်းလုဒ်လုပ်ပါ (M1/M2/M3/M4 Mac များ)' },
      { en: 'Open the DMG and drag CodexaScanner.app to Applications', my: 'DMG ကိုဖွင့်ပြီး CodexaScanner.app ကို Applications ထဲသို့ ဆွဲထည့်ပါ' },
      { en: 'First launch: right-click → Open (Gatekeeper, unsigned build)', my: 'ပထမဆုံးဖွင့်တဲ့အခါ: right-click → Open (Gatekeeper, unsigned build)' },
    ],
    note: {
      en: 'Unsigned & not notarized — use Finder “Open” the first time.',
      my: 'Unsigned & not notarized — ပထမဆုံးအကြိမ် Finder “Open” နဲ့ဖွင့်ပါ။',
    },
  },
  {
    id: 'macos-intel',
    name: 'macOS Intel',
    os: 'macOS',
    arch: 'amd64',
    file: 'CodexaScanner-amd64.dmg',
    url: `${PROJECT.downloadBase}/CodexaScanner-amd64.dmg`,
    size: { en: '.dmg disk image', my: '.dmg disk image' },
    format: 'DMG',
    icon: Layers,
    accent: 'emerald',
    install: [
      { en: 'Download CodexaScanner-amd64.dmg (Intel Macs)', my: 'CodexaScanner-amd64.dmg ကို ဒေါင်းလုဒ်လုပ်ပါ (Intel Mac များ)' },
      { en: 'Open the DMG and drag CodexaScanner.app to Applications', my: 'DMG ကိုဖွင့်ပြီး CodexaScanner.app ကို Applications ထဲသို့ ဆွဲထည့်ပါ' },
      { en: 'First launch: right-click → Open to bypass Gatekeeper', my: 'ပထမဆုံးဖွင့်တဲ့အခါ: right-click → Open နဲ့ Gatekeeper ကိုကျော်ပါ' },
    ],
    note: {
      en: 'Unsigned & not notarized — use Finder “Open” the first time.',
      my: 'Unsigned & not notarized — ပထမဆုံးအကြိမ် Finder “Open” နဲ့ဖွင့်ပါ။',
    },
  },
]

export type Module = {
  id: string
  name: string
  icon: LucideIcon
  short: LocalString
  description: LocalString
  bullets: LocalString[]
  usage: LocalString[]
  checks: LocalString[]
  notes?: LocalString
}

export const MODULES: Module[] = [
  {
    id: 'port-scanner',
    name: 'Port Scanner',
    icon: Radar,
    short: {
      en: 'Concurrent TCP port checks with live results',
      my: 'Live ရလဒ်တွေနဲ့ တပြိုင်နက် TCP port စစ်ဆေးမှု',
    },
    description: {
      en: 'Concurrent TCP port checks with a capped worker pool and per-connection timeout. Hostnames resolve once per scan with one deterministic pinned address shown in the UI.',
      my: 'ကန့်သတ်ထားတဲ့ worker pool နဲ့ connection တစ်ခုချင်း timeout သုံးပြီး တပြိုင်နက် TCP port စစ်ဆေးမှု။ Hostname တွေက scan တစ်ခုမှာ တစ်ကြိမ်တည်း resolve လုပ်ပြီး တိကျတဲ့ address တစ်ခုကို UI မှာပြတယ်။',
    },
    bullets: [
      { en: 'Live findings & progress with cancellation-aware status', my: 'Live ရလဒ် + cancel လုပ်လို့ရတဲ့ status နဲ့ တိုးတက်မှု' },
      { en: 'Bare IPv4/IPv6 or ASCII DNS hostnames only', my: 'Bare IPv4/IPv6 ဒါမမဟုတ် ASCII DNS hostname သာ' },
      { en: 'Best-effort service identification & banner collection', my: 'Best-effort service သိမှု + banner စုဆောင်မှု' },
      { en: 'Explicit authorization confirmation per scan', my: 'Scan တိုင်းအတွက် အတည်ပြုချက်လိုတယ်' },
    ],
    usage: [
      { en: 'Open the Port Scanner module from the sidebar.', my: 'Sidebar ကနေ Port Scanner module ကိုဖွင့်ပါ။' },
      { en: 'Enter a bare IPv4/IPv6 address or ASCII DNS hostname — URLs, ports and control characters are rejected.', my: 'Bare IPv4/IPv6 address ဒါမမဟုတ် ASCII DNS hostname ထည့်ပါ — URL, port နဲ့ control character တွေက ငြင်းပယ်ခံရတယ်။' },
      { en: 'Set the port range to scan (e.g. 1–1000).', my: 'စစ်ဆေးမည့် port range ထားပါ (ဥပမာ 1–1000)။' },
      { en: 'Confirm the authorization prompt for the exact target and range.', my: 'အတိအကျ target နဲ့ range အတွက် authorization prompt ကို အတည်ပြုပါ။' },
      { en: 'Start the scan — reachable ports stream live with service and banner hints.', my: 'Scan စတင်ပါ — ရောက်နိုင်တဲ့ port တွေက service နဲ့ banner hint တွေနဲ့ live stream ဝင်တယ်။' },
      { en: 'For private/lab targets (RFC1918, ULA, loopback), enable the default-off one-shot opt-in.', my: 'Private/lab target တွေ (RFC1918, ULA, loopback) အတွက် ပုံသေပိတ်ထားတဲ့ one-shot opt-in ကိုဖွင့်ပါ။' },
      { en: 'Cancel at any time; status reflects cancellation, completion or failure.', my: 'ဘယ်အချိန်မဆို cancel လုပ်လို့ရတယ်; status က cancel၊ ပြီးပြီ၊ ဒါမမဟုတ် ကျိုးကြောင်းပြတယ်။' },
    ],
    checks: [
      { en: 'Concurrent TCP connect probes with capped workers & per-connection timeout', my: 'ကန့်သတ် workers + connection timeout နဲ့ တပြိုင်နက် TCP connect probe တွေ' },
      { en: 'Hostname resolved once (5s lookup) → one deterministic pinned address (IPv4 preferred)', my: 'Hostname တစ်ကြိမ် resolve (5s lookup) → တိကျတဲ့ pinned address တစ်ခု (IPv4 ဦးစားပေး)' },
      { en: 'Best-effort service identification & banner collection on reachable ports', my: 'ရောက်နိုင်တဲ့ port တွေမှာ best-effort service သိမှု + banner စုဆောင်မှု' },
      { en: 'Private/special-use address policy with one-shot lab opt-in', my: 'Private/special-use address policy + one-shot lab opt-in' },
    ],
    notes: {
      en: 'When a name has multiple A/AAAA answers, only the selected address is scanned in that run. The pinned address is shown in the UI.',
      my: 'Name တစ်ခုမှာ A/AAAA အဖြေတွေစွာရှိရင်၊ ရွေးချယ်ထားတဲ့ address တစ်ခုကိုသာ အဲဒီ run မှာ scan လုပ်တယ်။ Pinned address ကို UI မှာပြတယ်။',
    },
  },
  {
    id: 'web-audit',
    name: 'Web Audit',
    icon: ShieldCheck,
    short: {
      en: 'Headers, cookies, TLS, CSP & client-side exposure',
      my: 'Header၊ cookie၊ TLS၊ CSP + client-side exposure',
    },
    description: {
      en: 'Bulk HTTP/HTTPS checks with bounded concurrency, redirect-chain disclosure, and passive analysis of security headers, cookies, TLS, mixed-content and CSP diagnostics.',
      my: 'ကန့်သတ် concurrency နဲ့ bulk HTTP/HTTPS စစ်ဆေးမှု၊ redirect-chain ထုတ်ပြချက်၊ နဲ့ security header၊ cookie၊ TLS၊ mixed-content နဲ့ CSP diagnostics တွေရဲ့ passive စစ်ဆေးမှု။',
    },
    bullets: [
      { en: 'CSP directive diagnostics with evidence', my: 'CSP directive diagnostics (evidence နဲ့)' },
      { en: 'CORS / JWT posture & DB-error disclosure clues', my: 'CORS/JWT posture + DB-error disclosure hint တွေ' },
      { en: 'Bounded client-side exposure indicators', my: 'ကန့်သတ် client-side exposure ညွှန်ကိန်းတွေ' },
      { en: 'JSON / HTML / Markdown / PDF exports', my: 'JSON/HTML/Markdown/PDF export တွေ' },
    ],
    usage: [
      { en: 'Open the Web Audit module.', my: 'Web Audit module ကိုဖွင့်ပါ။' },
      { en: 'Enter one or more URLs (HTTP or HTTPS) — up to 100 per run.', my: 'URL တစ်ခု ဒါမမဟုတ် တစ်ခုထက်ပိုထည့်ပါ (HTTP ဒါမမဟုတ် HTTPS) — run တစ်ခုမှာ 100 ထိ။' },
      { en: 'Enable the private/lab opt-in if any target is on an internal address.', my: 'Target တစ်ခုခု internal address မှာဆိုရင် private/lab opt-in ဖွင့်ပါ။' },
      { en: 'Optionally set a request delay to control rate.', my: 'Rate ထိန်းဖို့ request delay ထားလို့ရတယ်။' },
      { en: 'Run the audit — each URL is checked in its own host/port scope with a 5-hop redirect cap.', my: 'Audit လုပ်ပါ — URL တစ်ခုချင်းစီက ကိုယ်ပိုင် host/port scope မှာ 5-hop redirect cap နဲ့ စစ်ဆေးတယ်။' },
      { en: 'Review findings by severity: headers, cookies, TLS, CSP, mixed-content, CORS/JWT, client-side exposure.', my: 'ရလဒ်တွေကို severity အရကြည့်ပါ: header၊ cookie၊ TLS၊ CSP၊ mixed-content၊ CORS/JWT၊ client-side exposure။' },
      { en: 'Check the per-URL risk score (0–100) and A+–F grade.', my: 'URL တစ်ခုချင်း risk score (0–100) နဲ့ A+–F grade ကိုစစ်ပါ။' },
      { en: 'Export the report to JSON, HTML, Markdown or PDF.', my: 'Report ကို JSON၊ HTML၊ Markdown ဒါမမဟုတ် PDF နဲ့ export လုပ်ပါ။' },
    ],
    checks: [
      { en: 'Security headers, Secure/HttpOnly/SameSite cookie attributes', my: 'Security header၊ Secure/HttpOnly/SameSite cookie attribute တွေ' },
      { en: 'CSP directive diagnostics with evidence (unsafe-inline, unsafe-eval, wildcards)', my: 'CSP directive diagnostics (evidence နဲ့ — unsafe-inline, unsafe-eval, wildcards)' },
      { en: 'TLS certificate expiry/trust/hostname + mixed-content references', my: 'TLS certificate expiry/trust/hostname + mixed-content reference တွေ' },
      { en: 'Bounded /.well-known/security.txt & /robots.txt inspectors', my: 'ကန့်သတ် /.well-known/security.txt + /robots.txt inspector တွေ' },
      { en: 'Passive CORS/JWT posture, DB-error disclosure & client-side exposure clues', my: 'Passive CORS/JWT posture၊ DB-error disclosure + client-side exposure hint တွေ' },
    ],
    notes: {
      en: 'Same-host redirects are allowed (incl. HTTP:80 → HTTPS:443); cross-host redirects, HTTPS downgrades and other port changes are blocked. robots.txt is discovery guidance, not a security control.',
      my: 'Same-host redirect တွေကခွင့်ပြု (HTTP:80 → HTTPS:443 ပါ); cross-host redirect၊ HTTPS downgrade နဲ့ အခြား port ပြောင်းမှုတွေကပိတ်ဆို့ခံရတယ်။ robots.txt က ရှာဖွေလမ်းညွှန်ချက်သာ၊ security control မဟုတ်ပါ။',
    },
  },
  {
    id: 'subdomain-discovery',
    name: 'Subdomain Discovery',
    icon: Network,
    short: {
      en: 'Certificate Transparency + optional DNS wordlist',
      my: 'Certificate Transparency + optional DNS wordlist',
    },
    description: {
      en: 'Discover subdomains from Certificate Transparency data via crt.sh, capped at 500 names. An optional bounded DNS wordlist lookup can be enabled for deeper enumeration.',
      my: 'Certificate Transparency data ကနေ crt.sh ဆီမှာ subdomain တွေရှာဖွေပါ၊ 500 နာမည်ထိကန့်သတ်။ ပိုနက်ရှိုင်းစွာ enumerate လုပ်ဖို့ optional ကန့်သတ် DNS wordlist lookup ကိုဖွင့်လို့ရတယ်။',
    },
    bullets: [
      { en: 'CT log lookups capped at 500 names', my: 'CT log lookup တွေ 500 နာမည်ထိ' },
      { en: 'Optional capped DNS wordlist expansion', my: 'Optional ကန့်သတ် DNS wordlist ချဲ့ထွင်မှု' },
      { en: 'Send discovered names straight to the HTTP analyzer', my: 'ရှာတွေ့တဲ့ နာမည်တွေကို HTTP analyzer ဆီပို့လို့ရတယ်' },
      { en: 'Results feed other modules automatically', my: 'ရလဒ်တွေက အခြား module တွေကို အလိုလို feed လုပ်တယ်' },
    ],
    usage: [
      { en: 'Open the Subdomain Discovery module.', my: 'Subdomain Discovery module ကိုဖွင့်ပါ။' },
      { en: 'Enter a root domain (e.g. example.org).', my: 'Root domain ထည့်ပါ (ဥပမာ example.org)။' },
      { en: 'Run the Certificate Transparency lookup via crt.sh — capped at 500 names.', my: 'crt.sh ဆီက Certificate Transparency lookup လုပ်ပါ — 500 နာမည်ထိ။' },
      { en: 'Optionally enable the bounded DNS wordlist lookup for deeper enumeration.', my: 'ပိုနက်ရှိုင်းစွာ enumerate လုပ်ဖို့ optional ကန့်သတ် DNS wordlist lookup ဖွင့်ပါ။' },
      { en: 'Review discovered subdomains in the results list.', my: 'ရှာတွေ့တဲ့ subdomain တွေကို ရလဒ်စာရင်းမှာကြည့်ပါ။' },
      { en: 'Send selected names directly to the Web Audit HTTP analyzer.', my: 'ရွေးချယ်ထားတဲ့ နာမည်တွေကို Web Audit HTTP analyzer ဆီပို့ပါ။' },
    ],
    checks: [
      { en: 'Certificate Transparency lookups via crt.sh (capped at 500 names)', my: 'crt.sh ဆီက Certificate Transparency lookup (500 နာမည်ထိ)' },
      { en: 'Optional bounded DNS wordlist resolution', my: 'Optional ကန့်သတ် DNS wordlist resolution' },
      { en: 'Discovered names can feed the HTTP analyzer', my: 'ရှာတွေ့တဲ့ နာမည်တွေ HTTP analyzer ကို feed လုပ်လို့ရတယ်' },
    ],
    notes: {
      en: 'CT coverage depends on what certificates have been issued — absence of a name does not prove it does not exist.',
      my: 'CT coverage က certificate တွေဘယ်လောက်ထုတ်ထားလဲပေါ် မူတည်တယ် — နာမည်တစ်ခုမပါရှိတာက အဲဒါမရှိဘူးလို့ မသက်သေပါ။',
    },
  },
  {
    id: 'path-fuzzer',
    name: 'Path Fuzzer',
    icon: Route,
    short: {
      en: 'HEAD-only bounded path discovery',
      my: 'HEAD-only ကန့်သတ် path ရှာဖွေမှု',
    },
    description: {
      en: 'A path discovery module that uses HEAD requests only, compares status and Content-Length to a randomized missing-path baseline, and never returns response bodies.',
      my: 'HEAD request သာသုံးတဲ့ path ရှာဖွေမှု module — status နဲ့ Content-Length ကို random missing-path baseline နဲ့ နှိုင်းယှဉ်ပြီး response body တွေကို ဘယ်တော့မျှ မပြန်ပါ။',
    },
    bullets: [
      { en: 'HEAD-only — no response bodies fetched', my: 'HEAD-only — response body တွေမယူပါ' },
      { en: 'Framework / env / API presets', my: 'Framework/env/API preset တွေ' },
      { en: 'Up to 500 candidate paths', my: '500 path ထိ' },
      { en: 'Request delay control', my: 'Request delay ထိန်းချုပ်မှု' },
    ],
    usage: [
      { en: 'Open the Path Fuzzer module.', my: 'Path Fuzzer module ကိုဖွင့်ပါ။' },
      { en: 'Enter the target URL origin (scheme + host).', my: 'Target URL origin ထည့်ပါ (scheme + host)။' },
      { en: 'Choose a preset: framework, environment or API path lists.', my: 'Preset ရွေးပါ: framework၊ environment ဒါမမဟုတ် API path list တွေ။' },
      { en: 'Optionally set a request delay.', my: 'Request delay ထားလို့ရတယ်။' },
      { en: 'Run — HEAD requests are sent to up to 500 candidate paths.', my: 'Run — HEAD request တွေကို 500 path ထိပို့တယ်။' },
      { en: 'Review results by comparing status and Content-Length against the randomized missing-path baseline.', my: 'ရလဒ်တွေကို status နဲ့ Content-Length ကို random missing-path baseline နဲ့ နှိုင်းယှဉ်ကြည့်ပါ။' },
    ],
    checks: [
      { en: 'HEAD-only requests — response bodies are never fetched or displayed', my: 'HEAD-only request — response body တွေကို ဘယ်တော့မျှ မယူ မပြပါ' },
      { en: 'Status & Content-Length compared to a randomized missing-path baseline', my: 'Status + Content-Length ကို random missing-path baseline နဲ့ နှိုင်းယှဉ်တယ်' },
      { en: 'Follows no redirects; capped at 500 candidate paths', my: 'Redirect မလိုက်ပါ; 500 path ထိကန့်သတ်' },
    ],
    notes: {
      en: 'This is an active but bounded check. Results are indicators for review, not proof of a hidden endpoint.',
      my: 'ဒါက active ဒါပေမယ့် ကန့်သတ် check တစ်ခု။ ရလဒ်တွေက ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေသာ၊ hidden endpoint ရှိကြောင်း သက်သေမဟုတ်ပါ။',
    },
  },
  {
    id: 'tls-inspector',
    name: 'TLS Inspector',
    icon: Lock,
    short: {
      en: 'Certificate trust, expiry, SANs & cipher',
      my: 'Certificate trust၊ expiry၊ SAN + cipher',
    },
    description: {
      en: 'Inspect TLS certificate trust/self-signed state, expiry, subject alternative names and negotiated cipher. Legacy TLS 1.0/1.1 probes use exact-version handshakes.',
      my: 'TLS certificate trust/self-signed state၊ expiry၊ subject alternative name တွေနဲ့ negotiated cipher စစ်ဆေးပါ။ Legacy TLS 1.0/1.1 probe တွေက exact-version handshake သုံးတယ်။',
    },
    bullets: [
      { en: 'Certificate validity & presented chain subjects', my: 'Certificate validity + presented chain subject တွေ' },
      { en: 'SAN count & negotiated cipher details', my: 'SAN count + negotiated cipher အသေးအဖွဲ့' },
      { en: 'TLS 1.0 / 1.1 handshake probes with clear results', my: 'TLS 1.0/1.1 handshake probe တွေ (ရှင်းရှင်းလင်းလင်း ရလဒ်)' },
      { en: 'Best-effort reporting of legacy protocol support', my: 'Legacy protocol support အစီရင်ခံစာ (best-effort)' },
    ],
    usage: [
      { en: 'Open the TLS Inspector module.', my: 'TLS Inspector module ကိုဖွင့်ပါ။' },
      { en: 'Enter the host (and port, default 443).', my: 'Host ထည့်ပါ (port ပါ၊ ပုံသေ 443)။' },
      { en: 'Run the inspection — TLS is validated with the system trust store.', my: 'Inspection လုပ်ပါ — TLS ကို system trust store နဲ့ စစ်ဆေးတယ်။' },
      { en: 'Review certificate validity, trust/self-signed state, expiry and presented chain subjects.', my: 'Certificate validity၊ trust/self-signed state၊ expiry + presented chain subject တွေကိုကြည့်ပါ။' },
      { en: 'Inspect the SAN count and negotiated cipher.', my: 'SAN count နဲ့ negotiated cipher စစ်ပါ။' },
      { en: 'Check legacy TLS 1.0 / 1.1 support status.', my: 'Legacy TLS 1.0/1.1 support status စစ်ပါ။' },
    ],
    checks: [
      { en: 'Certificate trust / self-signed state & expiry', my: 'Certificate trust/self-signed state + expiry' },
      { en: 'Subject Alternative Names (SAN) count & details', my: 'Subject Alternative Name (SAN) count + အသေးအဖွဲ့' },
      { en: 'Negotiated cipher & presented chain subjects', my: 'Negotiated cipher + presented chain subject တွေ' },
      { en: 'TLS 1.0 / 1.1 exact-version handshake probes', my: 'TLS 1.0/1.1 exact-version handshake probe တွေ' },
    ],
    notes: {
      en: 'TLS 1.0/1.1 results are best-effort: the local Go crypto policy can prevent a legacy handshake independently of the remote server. "Not supported" is reported only after an explicit protocol_version alert.',
      my: 'TLS 1.0/1.1 ရလဒ်တွေက best-effort: local Go crypto policy က remote server နဲ့ မသက်ဆိုင်ဘဲ legacy handshake ကိုတားနိုင်တယ်။ "Not supported" ကို explicit protocol_version alert ပြီးမှသာ အစီရင်ခံတယ်။',
    },
  },
  {
    id: 'dns-intelligence',
    name: 'DNS Intelligence',
    icon: Globe,
    short: {
      en: 'A, AAAA, MX, NS, TXT, SPF, DMARC & PTR',
      my: 'A, AAAA, MX, NS, TXT, SPF, DMARC + PTR',
    },
    description: {
      en: 'DNS and network intelligence for A, AAAA, MX, NS, TXT, SPF, DMARC and reverse PTR records. Optional RDAP registration and country metadata fetched from an external service.',
      my: 'A, AAAA, MX, NS, TXT, SPF, DMARC နဲ့ reverse PTR record တွေအတွက် DNS + ကွန်ရက် intelligence။ Optional RDAP registration နဲ့ country metadata ကို external service ကနေယူတယ်။',
    },
    bullets: [
      { en: 'Full record-set resolution per query', my: 'Query တစ်ခုချင်း record-set အပြည့် resolve' },
      { en: 'Optional RDAP registration / country metadata', my: 'Optional RDAP registration/country metadata' },
      { en: 'Saved locally for later review', my: 'နောက်မှကြည့်ဖို့ local မှာသိမ်းတယ်' },
      { en: 'Public-IP focused lookups', my: 'Public-IP အထွေထွေ lookup တွေ' },
    ],
    usage: [
      { en: 'Open the DNS Intelligence module.', my: 'DNS Intelligence module ကိုဖွင့်ပါ။' },
      { en: 'Enter the domain to query.', my: 'Query လုပ်မည့် domain ထည့်ပါ။' },
      { en: 'Run the query — A, AAAA, MX, NS, TXT, SPF, DMARC and reverse PTR records are resolved.', my: 'Query လုပ်ပါ — A, AAAA, MX, NS, TXT, SPF, DMARC + reverse PTR record တွေ resolve လုပ်တယ်။' },
      { en: 'Review the complete record set in the results panel.', my: 'Record set အပြည့်ကို ရလဒ် panel မှာကြည့်ပါ။' },
      { en: 'Optionally enable RDAP lookup for public-IP registration & country metadata.', my: 'Public-IP registration + country metadata အတွက် optional RDAP lookup ဖွင့်ပါ။' },
      { en: 'Results are saved locally for later review.', my: 'ရလဒ်တွေက နောက်မှကြည့်ဖို့ local မှာသိမ်းတယ်။' },
    ],
    checks: [
      { en: 'A, AAAA, MX, NS, TXT, SPF, DMARC record resolution', my: 'A, AAAA, MX, NS, TXT, SPF, DMARC record resolution' },
      { en: 'Reverse PTR lookups', my: 'Reverse PTR lookup တွေ' },
      { en: 'Optional RDAP registration / country metadata (public IPs only)', my: 'Optional RDAP registration/country metadata (public IP သာ)' },
    ],
    notes: {
      en: 'RDAP country/network data describes registry records and is not precise geolocation or a guaranteed ASN mapping.',
      my: 'RDAP country/network data က registry record တွေဖော်ပြတာပါ၊ တိကျတဲ့ geolocation ဒါမမဟုတ် guaranteed ASN mapping မဟုတ်ပါ။',
    },
  },
  {
    id: 'ip-information',
    name: 'IP Information',
    icon: Server,
    short: {
      en: 'Public/private classification & reverse DNS',
      my: 'Public/private အမျိုးအစား + reverse DNS',
    },
    description: {
      en: 'Source-labeled IP information for public/private/special-use classification, reverse DNS, and public-IP RDAP registration metadata. No geolocation is inferred.',
      my: 'Public/private/special-use အမျိုးအစား၊ reverse DNS၊ နဲ့ public-IP RDAP registration metadata အတွက် source-labeled IP information။ Geolocation မညှားဆောင်ပါ။',
    },
    bullets: [
      { en: 'RFC1918 / ULA / loopback classification', my: 'RFC1918/ULA/loopback အမျိုးအစားခွဲခြားမှု' },
      { en: 'Reverse DNS lookups', my: 'Reverse DNS lookup တွေ' },
      { en: 'Public-IP RDAP registration metadata', my: 'Public-IP RDAP registration metadata' },
      { en: 'Reserved & special-use address awareness', my: 'Reserved + special-use address သိမှု' },
    ],
    usage: [
      { en: 'Open the IP Information module.', my: 'IP Information module ကိုဖွင့်ပါ။' },
      { en: 'Enter an IP address (IPv4 or IPv6).', my: 'IP address ထည့်ပါ (IPv4 ဒါမမဟုတ် IPv6)။' },
      { en: 'Review the source-labeled classification: public, private or special-use.', my: 'Source-labeled အမျိုးအစားကိုကြည့်ပါ: public၊ private ဒါမမဟုတ် special-use။' },
      { en: 'Check the reverse DNS lookup result.', my: 'Reverse DNS lookup ရလဒ်စစ်ပါ။' },
      { en: 'For public IPs, review the RDAP registration metadata.', my: 'Public IP တွေအတွက် RDAP registration metadata ကြည့်ပါ။' },
    ],
    checks: [
      { en: 'RFC1918 / IPv6 ULA / loopback private classification', my: 'RFC1918/IPv6 ULA/loopback private အမျိုးအစား' },
      { en: 'Reverse DNS (PTR) lookups', my: 'Reverse DNS (PTR) lookup တွေ' },
      { en: 'Public-IP RDAP registration metadata', my: 'Public-IP RDAP registration metadata' },
      { en: 'Link-local, multicast, unspecified & reserved address awareness', my: 'Link-local၊ multicast၊ unspecified + reserved address သိမှု' },
    ],
    notes: {
      en: 'No geolocation is inferred. Private/special-use targets follow the same authorization policy as the rest of the app.',
      my: 'Geolocation မညှားဆောင်ပါ။ Private/special-use target တွေက app တစ်ခုလုံးနဲ့ တူတဲ့ authorization policy ကိုလိုက်တယ်။',
    },
  },
  {
    id: 'history-reports',
    name: 'History & Reports',
    icon: History,
    short: {
      en: 'Local SQLite history + multi-format exports',
      my: 'Local SQLite history + format မျိုးစုံ export',
    },
    description: {
      en: 'Local SQLite history for scan snapshots, capped at 2,000 records, with a latest-two-scan port diff for a target. Bounded redaction applied to stored data and exports.',
      my: 'Scan snapshot တွေအတွက် local SQLite history၊ 2,000 record ထိကန့်သတ်၊ target တစ်ခုအတွက် နောက်ဆုံး scan နှစ်ခု port diff ပါ။ Stored data နဲ့ export တွေမှာ bounded redaction သုံးထား။',
    },
    bullets: [
      { en: 'Auto-pruned to latest 2,000 records', my: 'နောက်ဆုံး 2,000 record အထိ auto-prune' },
      { en: 'JSON / HTML / Markdown / PDF report exports', my: 'JSON/HTML/Markdown/PDF report export တွေ' },
      { en: 'Latest-two-scan port diff per target', my: 'Target တစ်ခုချင်း နောက်ဆုံး scan နှစ်ခု port diff' },
      { en: 'Bounded redaction of credentials & sensitive keys', my: 'Credential + sensitive key တွေ bounded redaction' },
    ],
    usage: [
      { en: 'Every scan is automatically saved to the local SQLite history.', my: 'Scan တိုင်းက local SQLite history မှာ အလိုလိုသိမ်းတယ်။' },
      { en: 'Open the History module to browse past scans (latest 2,000 records).', my: 'History module ဖွင့်ပြီး အတွတ်က scan တွေကြည့်ပါ (နောက်ဆုံး 2,000 record)။' },
      { en: 'Compare the latest two scans for a target to see a port diff.', my: 'Target တစ်ခုရဲ့ နောက်ဆုံး scan နှစ်ခုနှိုင်းယှဉ်ပြီး port diff ကြည့်ပါ။' },
      { en: 'Open any saved scan to review its full findings.', my: 'သိမ်းထားတဲ့ scan တစ်ခုခုဖွင့်ပြီး ရလဒ်အပြည့်ကြည့်ပါ။' },
      { en: 'Export any scan to JSON, HTML, Markdown or PDF.', my: 'Scan တစ်ခုခုကို JSON၊ HTML၊ Markdown ဒါမမဟုတ် PDF နဲ့ export လုပ်ပါ။' },
      { en: 'To clear history: close the app, then delete the CodexaScanner/history.sqlite file.', my: 'History ရှင်းဖို့: app ပိတ်ပြီး CodexaScanner/history.sqlite file ကိုဖျက်ပါ။' },
    ],
    checks: [
      { en: 'Local SQLite history at CodexaScanner/history.sqlite', my: 'CodexaScanner/history.sqlite မှာ local SQLite history' },
      { en: 'Auto-pruned to latest 2,000 records', my: 'နောက်ဆုံး 2,000 record အထိ auto-prune' },
      { en: 'Latest-two-scan port diff per target', my: 'Target တစ်ခုချင်း နောက်ဆုံး scan နှစ်ခု port diff' },
      { en: 'Bounded redaction of credentials, sensitive query/fragments & sensitive keys', my: 'Credential၊ sensitive query/fragment + sensitive key တွေ bounded redaction' },
    ],
    notes: {
      en: 'The database is not uploaded by the app and is not encrypted. On Unix-style systems, access is restricted to the current user.',
      my: 'Database ကို app က upload မလုပ်ပါ၊ encrypt မလုပ်ပါ။ Unix-style system တွေမှာ current user သာ ဝင်ရောက်နိုင်တယ်။',
    },
  },

  {
    id: 'threat-feed',
    name: 'Latest Threat & CVE Feed',
    icon: Radio,
    short: { en: 'Opt-in CISA KEV and NVD updates with offline cache', my: 'Opt-in CISA KEV နဲ့ NVD update + offline cache' },
    description: { en: 'Manually syncs official CISA KEV and recent Critical/High NVD entries without an API key, stores them in a local SQLite cache, and feeds matching advisories into passive version checks.', my: 'API key မလိုဘဲ CISA KEV နဲ့ Critical/High NVD entry အသစ်တွေကို ကိုယ်တိုင် sync လုပ်၊ local SQLite cache မှာသိမ်းပြီး passive version check ထဲမှာ advisory match လုပ်ပေးတယ်။' },
    bullets: [
      { en: 'Manual or opt-in sync only; no startup request', my: 'Manual ဒါမမဟုတ် opt-in sync သာ; startup request မပို့' },
      { en: '15-second per-source timeout with bundled/cache fallback', my: 'Source တစ်ခုချင်း 15-second timeout + bundled/cache fallback' },
      { en: '7-day and 30-day Critical/High views with KEV badges', my: '7-day နဲ့ 30-day Critical/High view + KEV badge' },
      { en: 'Scanned-asset technology matching and dynamic advisory updates', my: 'Scan လုပ်ထားတဲ့ asset technology matching + dynamic advisory update' },
    ],
    usage: [
      { en: 'Open Dashboard and choose Sync Latest CVEs.', my: 'Dashboard ဖွင့်ပြီး Sync Latest CVEs ကိုရွေးပါ။' },
      { en: 'Choose the 7-day or 30-day view and review source/severity badges.', my: '7-day ဒါမမဟုတ် 30-day view ရွေးပြီး source/severity badge တွေကြည့်ပါ။' },
      { en: 'Review Affects Your Scanned Assets matches as prioritization clues, not exploit proof.', my: 'Affects Your Scanned Assets match ကို ဦးစားပေး clue အဖြစ်သာကြည့်ပါ၊ exploit သက်သေမဟုတ်ပါ။' },
      { en: 'If the network is unavailable, continue using the local cache and bundled advisory data.', my: 'Network မရရင် local cache နဲ့ bundled advisory data ကိုဆက်သုံးပါ။' },
    ],
    checks: [
      { en: 'CISA Known Exploited Vulnerabilities JSON feed', my: 'CISA Known Exploited Vulnerabilities JSON feed' },
      { en: 'NVD API 2.0 recent CVEs without an API key', my: 'API key မလိုတဲ့ NVD API 2.0 recent CVE' },
      { en: 'Local SQLite cve_feed persistence', my: 'Local SQLite cve_feed သိမ်းဆည်းမှု' },
      { en: 'Technology/product matching against scanned assets', my: 'Scan လုပ်ထားတဲ့ asset တွေနဲ့ technology/product matching' },
    ],
    notes: { en: 'Sync is deliberately manual and local-first. Remote feeds are advisory intelligence and do not replace verification of affected versions.', my: 'Sync ကို တမင် manual + local-first ထားတယ်။ Remote feed က advisory intelligence သာဖြစ်ပြီး affected version အတည်ပြုမှုကို မအစားထိုးပါ။' },
  },
  {
    id: 'engagement-workflows',
    name: 'Engagement Workflows',
    icon: BriefcaseBusiness,
    short: { en: 'Workspaces, imports, Inspector, replay and analyst triage', my: 'Workspace၊ import၊ Inspector၊ replay + analyst triage' },
    description: { en: 'Organize authorized work in local workspaces, import Nmap XML or subdomain lists, inspect bounded HTTP traffic, replay safe requests, and annotate findings.', my: 'ခွင့်ပြုထားတဲ့အလုပ်တွေကို local workspace နဲ့စီမံ၊ Nmap XML ဒါမဟုတ် subdomain list import၊ bounded HTTP traffic inspect၊ safe request replay နဲ့ finding annotation လုပ်ပါ။' },
    bullets: [
      { en: 'Project/engagement workspaces backed by SQLite', my: 'SQLite အခြေခံ project/engagement workspace' },
      { en: 'Nmap XML and newline-delimited subdomain imports', my: 'Nmap XML နဲ့ newline ခွဲ subdomain import' },
      { en: 'Raw HTTP Inspector with GET/HEAD/OPTIONS bounded replay', my: 'GET/HEAD/OPTIONS bounded replay ပါ Raw HTTP Inspector' },
      { en: 'Finding tags, notes, bilingual Security Playbook and Ctrl/Cmd+K palette', my: 'Finding tag၊ note၊ bilingual Security Playbook + Ctrl/Cmd+K palette' },
    ],
    usage: [
      { en: 'Create or select a workspace before importing or reviewing history.', my: 'Import ဒါမဟုတ် history review မလုပ်ခင် workspace ဖန်တီး ဒါမဟုတ်ရွေးပါ။' },
      { en: 'Import Nmap -oX XML or newline-delimited subdomains; invalid entries are reported and duplicates removed.', my: 'Nmap -oX XML ဒါမဟုတ် newline ခွဲ subdomain import လုပ်ပါ; မမှန် entry တွေဖော်ပြပြီး duplicate ဖယ်ရှားတယ်။' },
      { en: 'Use Inspector only for approved targets and safe methods; replay stays in the same host/port scope.', my: 'ခွင့်ပြုထားတဲ့ target နဲ့ safe method သာ Inspector မှာသုံးပါ; replay က host/port scope တူထဲမှာပဲနေတယ်။' },
      { en: 'Tag findings and open the Playbook for remediation and verification guidance.', my: 'Finding တွေကို tag လုပ်ပြီး remediation + verification လမ်းညွှန်အတွက် Playbook ဖွင့်ပါ။' },
    ],
    checks: [
      { en: 'Workspace assignment without deleting scan history', my: 'Scan history မဖျက်ဘဲ workspace assignment' },
      { en: 'Safe import validation, deduplication and target caps', my: 'Safe import validation၊ deduplication + target cap' },
      { en: 'Header/body preview, TLS and protocol details in Inspector', my: 'Inspector ထဲ header/body preview၊ TLS + protocol detail' },
      { en: 'Verified / False Positive / Needs Review / Accepted Risk tags', my: 'Verified / False Positive / Needs Review / Accepted Risk tag တွေ' },
    ],
    notes: { en: 'Import and replay never execute external commands. Review and redact evidence before sharing reports.', my: 'Import နဲ့ replay က external command မ run ပါ။ Report မျှဝေခင် evidence ကို review + redact လုပ်ပါ။' },
  },
]

export type Tech = {
  name: string
  icon: LucideIcon
  role: LocalString
}

export const TECH_STACK: Tech[] = [
  { name: 'Go', icon: Code2, role: { en: 'Backend core & networking engine', my: 'Backend core + ကွန်ရက် engine' } },
  { name: 'Wails v2', icon: Layers, role: { en: 'Cross-platform desktop runtime', my: 'ခရိုစ်-ပလက်ဖောင်း desktop runtime' } },
  { name: 'React', icon: Cpu, role: { en: 'Component-based UI layer', my: 'Component-based UI layer' } },
  { name: 'TypeScript', icon: Terminal, role: { en: 'Type-safe frontend logic', my: 'Type-safe frontend logic' } },
]

export const QUICK_STEPS: { step: string; title: LocalString; body: LocalString }[] = [
  {
    step: '01',
    title: { en: 'Download & install', my: 'ဒေါင်းလုဒ် + install' },
    body: {
      en: 'Grab the build for your OS from the Releases page — .deb for Linux, .exe for Windows, or the matching .dmg for macOS.',
      my: 'သင့် OS အတွက် build ကို Releases page ကနေယူပါ — Linux အတွက် .deb၊ Windows အတွက် .exe၊ macOS အတွက် .dmg။',
    },
  },
  {
    step: '02',
    title: { en: 'Confirm authorization', my: 'Authorization အတည်ပြု' },
    body: {
      en: 'Every scan requires explicit authorization confirmation for the exact target and selected range. Private/lab targets need a one-shot opt-in.',
      my: 'Scan တိုင်းက အတိအကျ target နဲ့ range အတွက် authorization အတည်ပြုချက်လိုတယ်။ Private/lab target တွေက one-shot opt-in လိုတယ်။',
    },
  },
  {
    step: '03',
    title: { en: 'Pick a module', my: 'Module ရွေးပါ' },
    body: {
      en: 'Choose from Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence, IP Information, Threat Feed or Engagement Workflows.',
      my: 'Port Scanner၊ Web Audit၊ Subdomain Discovery၊ Path Fuzzer၊ TLS Inspector၊ DNS Intelligence ဒါမမဟုတ် IP Information ကနေရွေးပါ။',
    },
  },
  {
    step: '04',
    title: { en: 'Review & export', my: 'ဆန်းစစ် + export' },
    body: {
      en: 'Inspect findings with severity, evidence and remediation guidance, then export to JSON, HTML, Markdown or PDF.',
      my: 'Severity၊ evidence + remediation လမ်းညွှန်နဲ့ ရလဒ်ဆန်းစစ်ပြီး JSON၊ HTML၊ Markdown ဒါမမဟုတ် PDF နဲ့ export လုပ်ပါ။',
    },
  },
]

export const STATS: { label: LocalString; value: LocalString }[] = [
  { label: { en: 'Platforms', my: 'ပလက်ဖောင်းများ' }, value: { en: '4', my: '4' } },
  { label: { en: 'Modules', my: 'မော်ဂျူးများ' }, value: { en: '10', my: '10' } },
  { label: { en: 'Version', my: 'ဗားရှင်း' }, value: { en: 'v1.1.5', my: 'v1.1.5' } },
  { label: { en: 'License', my: 'လိုင်စင်' }, value: { en: 'Open Source', my: 'အခမဲ့' } },
]
