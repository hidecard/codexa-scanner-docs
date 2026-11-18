import type { LucideIcon } from 'lucide-react'
import { Compass, PackageCheck, Hammer, HelpCircle, ShieldAlert } from 'lucide-react'
import type { LocalString } from '@/lib/i18n/local-string'

export type DocBlock =
  | { kind: 'paragraph'; text: LocalString }
  | { kind: 'list'; items: LocalString[] }
  | { kind: 'code'; code: string }
  | { kind: 'callout'; tone: 'info' | 'warning'; title?: LocalString; text: LocalString }

export type DocSection = {
  id: string
  title: LocalString
  blocks: DocBlock[]
}

export type GuideArticle = {
  id: string
  name: string
  icon: LucideIcon
  category: 'Getting Started' | 'Reference'
  short: LocalString
  intro: LocalString
  sections: DocSection[]
}

export const GUIDE_ARTICLES: GuideArticle[] = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: Compass,
    category: 'Getting Started',
    short: {
      en: 'Authorization model, your first scan, and where data lives',
      my: 'Authorization model၊ ပထမ scan၊ နဲ့ data ဘယ်သိမ်းလဲ',
    },
    intro: {
      en: 'New to Codexa Scanner? This guide walks through the authorization-first workflow, your first scan, and where your data lives.',
      my: 'Codexa Scanner မှာ အသစ်လား? ဒီလမ်းညွှန်က authorization-first လုပ်ငန်းစဉ်၊ ပထမ scan၊ နဲ့ data ဘယ်မှာသိမ်းလဲဆိုတာ ဖော်ပြတယ်။',
    },
    sections: [
      {
        id: 'what-is-codexa',
        title: { en: 'What is Codexa Scanner', my: 'Codexa Scanner ဆိုတာ' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'Codexa Scanner is a cross-platform desktop application for network reconnaissance and HTTP security-header inspection. It is built with Go, Wails v2, React and TypeScript, and ships native builds for Linux, Windows and macOS. It bundles eight bounded modules — port scanning, web audit, subdomain discovery, path fuzzing, TLS inspection, DNS intelligence, IP information, and local history & reports — into a single desktop tool.',
              my: 'Codexa Scanner က ကွန်ရက်စူးစမ်းမှုနဲ့ HTTP လုံခြုံရေးဟက်ဒါ စစ်ဆေးခြင်းအတွက် ခရိုစ်-ပလက်ဖောင်း desktop application တစ်ခု။ Go, Wails v2, React နဲ့ TypeScript နဲ့တည်ဆောက်ပြီး Linux, Windows, macOS အတွက် native build တွေပါ။ ကန့်သတ် module ရှစ်ခု — port scanning, web audit, subdomain discovery, path fuzzing, TLS inspection, DNS intelligence, IP information, နဲ့ local history & reports — ကို desktop tool တစ်ခုတည်းမှာ ပေါင်းထားတယ်။',
            },
          },
        ],
      },
      {
        id: 'before-you-start',
        title: { en: 'Before you start', my: 'မစတင်ခင်' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'Codexa Scanner is designed for authorized testing, education and defensive security work. Keep these principles in mind:',
              my: 'Codexa Scanner ကို ခွင့်ပြုထားတဲ့ စမ်းသပ်မှု၊ ပညာရေးနဲ့ ကာကွယ်ရေး လုံခြုံမှုလုပ်ငန်းအတွက် ရည်ရွယ်ထားတယ်။ ဒီမူတွေကို မှတ်ထားပါ:',
            },
          },
          {
            kind: 'list',
            items: [
              { en: 'Use it only against systems you own or have explicit permission to assess.', my: 'သင်ပိုင်တဲ့ ဒါမမဟုတ် စစ်ဆေးဖို့ ခွင့်ပြုထားတဲ့ system တွေမှာသာ သုံးပါ။' },
              { en: 'Every scan requires explicit authorization confirmation for its exact target and range.', my: 'Scan တိုင်းက အတိအကျ target နဲ့ range အတွက် authorization အတည်ပြုချက်လိုတယ်။' },
              { en: 'All checks are passive and non-exploitative — they surface indicators, not proof of exploitability.', my: 'Check အကုန်က passive + non-exploitative — ညွှန်ကိန်းတွေပြတယ်၊ exploit ရကြောင်း သက်သေမဟုတ်ပါ။' },
              { en: 'Private/lab targets (RFC1918, ULA, loopback) are default-off and need a one-shot opt-in.', my: 'Private/lab target တွေ (RFC1918, ULA, loopback) က ပုံသေပိတ် + one-shot opt-in လိုတယ်။' },
            ],
          },
        ],
      },
      {
        id: 'your-first-scan',
        title: { en: 'Your first scan', my: 'သင့်ပထမ scan' },
        blocks: [
          {
            kind: 'paragraph',
            text: { en: 'A typical first run with the Port Scanner module:', my: 'Port Scanner module နဲ့ ပုံမှန်ပထမ run တစ်ခု:' },
          },
          {
            kind: 'list',
            items: [
              { en: 'Open a module from the sidebar — for example Port Scanner.', my: 'Sidebar ကနေ module တစ်ခုဖွင့်ပါ — ဥပမာ Port Scanner။' },
              { en: 'Enter a bare IPv4/IPv6 address or ASCII DNS hostname (URLs and ports are rejected).', my: 'Bare IPv4/IPv6 address ဒါမမဟုတ် ASCII DNS hostname ထည့်ပါ (URL နဲ့ port ငြင်းပယ်ခံရတယ်)။' },
              { en: 'Set the port range to scan (e.g. 1–1000).', my: 'Scan လုပ်မည့် port range ထားပါ (ဥပမာ 1–1000)။' },
              { en: 'Confirm the authorization prompt for the exact target and range.', my: 'အတိအကျ target နဲ့ range အတွက် authorization prompt အတည်ပြုပါ။' },
              { en: 'Watch reachable ports stream in live, with service and banner hints.', my: 'ရောက်နိုင်တဲ့ port တွေက service + banner hint နဲ့ live stream ဝင်တာ ကြည့်ပါ။' },
              { en: 'Review findings, then export to JSON, HTML, Markdown or PDF.', my: 'ရလဒ်ကြည့်ပြီး JSON၊ HTML၊ Markdown ဒါမမဟုတ် PDF နဲ့ export လုပ်ပါ။' },
            ],
          },
        ],
      },
      {
        id: 'where-data-lives',
        title: { en: 'Where your data lives', my: 'Data ဘယ်မှာသိမ်းလဲ' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'Every scan is saved to a local SQLite database at CodexaScanner/history.sqlite in your OS user-configuration directory. The database is auto-pruned to the latest 2,000 records and is never uploaded by the app. Bounded redaction is applied to stored data and exports for credentials, sensitive query/fragments and sensitive keys.',
              my: 'Scan တိုင်းက CodexaScanner/history.sqlite မှာ local SQLite database ထဲသိမ်းတယ် (OS user-configuration directory ထဲ)။ Database က နောက်ဆုံး 2,000 record အထိ auto-prune လုပ်ပြီး app က upload မလုပ်ပါ။ Stored data နဲ့ export တွေမှာ credential၊ sensitive query/fragment နဲ့ sensitive key တွေအတွက် bounded redaction သုံးတယ်။',
            },
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: { en: 'Not encrypted', my: 'Encrypt မလုပ်ထား' },
            text: {
              en: 'The history database is not encrypted. To clear history, close the app completely and delete the history.sqlite file. On Unix-style systems, access is restricted to the current user.',
              my: 'History database က encrypt မလုပ်ထားပါ။ History ရှင်းဖို့ app ကိုပိတ်ပြီး history.sqlite file ဖျက်ပါ။ Unix-style system တွေမှာ current user သာဝင်နိုင်တယ်။',
            },
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
    short: {
      en: 'Download, install, verify, upgrade and uninstall',
      my: 'ဒေါင်းလုဒ်၊ install၊ စစ်ဆေး၊ upgrade + uninstall',
    },
    intro: {
      en: 'Download, install, verify, upgrade and uninstall Codexa Scanner across Linux, Windows and macOS.',
      my: 'Linux, Windows, macOS မှာ Codexa Scanner ကို ဒေါင်းလုဒ်၊ install၊ စစ်ဆေး၊ upgrade + uninstall လုပ်ပါ။',
    },
    sections: [
      {
        id: 'download',
        title: { en: 'Download', my: 'ဒေါင်းလုဒ်' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'All builds are published on the GitHub Releases page and produced by GitHub Actions CI:',
              my: 'Build အကုန်ကို GitHub Releases page မှာတင်ပြီး GitHub Actions CI ကထုတ်တယ်:',
            },
          },
          {
            kind: 'list',
            items: [
              { en: 'Linux — CodexaScanner_1.1.4_amd64.deb', my: 'Linux — CodexaScanner_1.1.4_amd64.deb' },
              { en: 'Windows — CodexaScanner.exe (portable)', my: 'Windows — CodexaScanner.exe (portable)' },
              { en: 'macOS Apple Silicon — CodexaScanner-arm64.dmg', my: 'macOS Apple Silicon — CodexaScanner-arm64.dmg' },
              { en: 'macOS Intel — CodexaScanner-amd64.dmg', my: 'macOS Intel — CodexaScanner-amd64.dmg' },
            ],
          },
        ],
      },
      {
        id: 'install-per-os',
        title: { en: 'Install per OS', my: 'OS အလိုက် install' },
        blocks: [
          {
            kind: 'list',
            items: [
              { en: 'Linux: sudo dpkg -i CodexaScanner_1.1.4_amd64.deb (install GTK/WebKit runtime deps if missing).', my: 'Linux: sudo dpkg -i CodexaScanner_1.1.4_amd64.deb (GTK/WebKit runtime deps မရှိရင် ထည့်ပါ)။' },
              { en: 'Windows: run CodexaScanner.exe directly — WebView2 runtime is required (preinstalled on Windows 11).', my: 'Windows: CodexaScanner.exe ကိုတိုက်ရိုက် run — WebView2 runtime လို (Windows 11 မှာ ပုံသေပါ)။' },
              { en: 'macOS: open the DMG, drag CodexaScanner.app to Applications, then right-click → Open the first time (Gatekeeper, unsigned build).', my: 'macOS: DMG ဖွင့်ပြီး CodexaScanner.app ကို Applications သို့ဆွဲ၊ ပထမဆုံး right-click → Open (Gatekeeper၊ unsigned build)။' },
            ],
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: { en: 'Unsigned macOS builds', my: 'Unsigned macOS build တွေ' },
            text: {
              en: 'The macOS DMGs are currently unsigned and not notarized. Use Open from the Finder context menu the first time if Gatekeeper blocks the launch.',
              my: 'macOS DMG တွေက လက်ရှိ unsigned + notarize မလုပ်ထားပါ။ Gatekeeper တားရင် ပထမဆုံး Finder context menu က Open နဲ့ဖွင့်ပါ။',
            },
          },
        ],
      },
      {
        id: 'verify-install',
        title: { en: 'Verify a clean-machine install', my: 'Clean-machine install စစ်ဆေး' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'For clean-machine install, upgrade and uninstall steps — plus SQLite history data-retention verification — see docs/release-verification.md in the repository. It covers the exact sequence to confirm a build behaves correctly on a fresh machine.',
              my: 'Clean-machine install၊ upgrade + uninstall အဆင့်တွေအတွက် — SQLite history retention စစ်ဆေးမှုပါ — repository ထဲ docs/release-verification.md ကြည့်ပါ။ build တစ်ခုကို clean machine မှာ မှန်ကန်စွာ စစ်ဆေးဖို့ အတိအကျ sequence ပါ။',
            },
          },
        ],
      },
      {
        id: 'upgrade-uninstall',
        title: { en: 'Upgrade & uninstall', my: 'Upgrade + uninstall' },
        blocks: [
          {
            kind: 'list',
            items: [
              { en: 'Upgrade: replace the binary or app bundle with the newer release; history is preserved.', my: 'Upgrade: binary ဒါမမဟုတ် app bundle ကို အသစ်နဲ့အစားထိုး; history ကိုထိန်းထားတယ်။' },
              { en: 'Linux uninstall: sudo apt remove codexascanner (or dpkg -r).', my: 'Linux uninstall: sudo apt remove codexascanner (ဒါမမဟုတ် dpkg -r)။' },
              { en: 'Windows uninstall: delete the portable .exe.', my: 'Windows uninstall: portable .exe ကိုဖျက်ပါ။' },
              { en: 'macOS uninstall: drag CodexaScanner.app from Applications to Trash.', my: 'macOS uninstall: CodexaScanner.app ကို Applications ကနေ Trash သို့ဆွဲပါ။' },
            ],
          },
        ],
      },
      {
        id: 'history-retention',
        title: { en: 'SQLite history retention', my: 'SQLite history retention' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'History is auto-pruned to the latest 2,000 records. Bounded redaction is applied to embedded URL credentials, sensitive query/fragments and sensitive result keys — this is not a complete guarantee, but limits exposure in stored data and exports.',
              my: 'History က နောက်ဆုံး 2,000 record အထိ auto-prune လုပ်တယ်။ URL credential၊ sensitive query/fragment နဲ့ sensitive result key တွေအတွက် bounded redaction သုံးတယ် — ဒါက အပြည့်အဝ အာမခံမဟုတ်ပေမယ့် stored data နဲ့ export တွေမှာ exposure ကိုကန့်သတ်တယ်။',
            },
          },
          {
            kind: 'callout',
            tone: 'info',
            text: {
              en: 'The database is not uploaded by the app and is not encrypted. Delete CodexaScanner/history.sqlite while the app is closed to clear all history.',
              my: 'Database ကို app က upload မလုပ်ပါ၊ encrypt မလုပ်ပါ။ History အကုန်ရှင်းဖို့ app ပိတ်ထားချိန် CodexaScanner/history.sqlite ဖျက်ပါ။',
            },
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
    short: {
      en: 'Prerequisites, clone, per-platform targets & CI',
      my: 'Prerequisite၊ clone၊ platform အလိုက် target + CI',
    },
    intro: {
      en: 'Prefer to compile yourself? Codexa Scanner builds cleanly with Go, the Wails CLI and a standard npm frontend pipeline.',
      my: 'ကိုယ်တိုင် compile လုပ်ချင်လား? Codexa Scanner ကို Go, Wails CLI နဲ့ npm frontend pipeline နဲ့ သန့်စင်စွာ build လုပ်လို့ရတယ်။',
    },
    sections: [
      {
        id: 'prerequisites',
        title: { en: 'Prerequisites', my: 'Prerequisite တွေ' },
        blocks: [
          {
            kind: 'list',
            items: [
              { en: 'Go 1.22 or newer', my: 'Go 1.22 ဒါမမဟုတ် ပိုအသစ်' },
              { en: 'Node.js 20+ and npm', my: 'Node.js 20+ + npm' },
              { en: 'Wails v2 CLI (see the official Wails install docs)', my: 'Wails v2 CLI (တရားဝင် Wails install docs ကြည့်ပါ)' },
              { en: 'Linux: GTK / WebKit development libraries', my: 'Linux: GTK/WebKit development library တွေ' },
              { en: 'Windows: WebView2 runtime (run the build on Windows)', my: 'Windows: WebView2 runtime (build ကို Windows မှာ run ပါ)' },
            ],
          },
        ],
      },
      {
        id: 'clone-build',
        title: { en: 'Clone & build', my: 'Clone + build' },
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
        title: { en: 'Per-platform targets', my: 'Platform အလိုက် target' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'On macOS, Wails builds an application bundle. Build the architecture matching your Mac, or use the release DMG files:',
              my: 'macOS မှာ Wails က application bundle တစ်ခုဆောက်တယ်။ သင့် Mac နဲ့ကိုက်တဲ့ architecture build လုပ်ပါ၊ ဒါမမဟုတ် release DMG file သုံးပါ:',
            },
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
        title: { en: 'Development mode', my: 'Development mode' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'For development with hot reload, run wails dev from the repository root after installing dependencies. Frontend dependencies are pinned with a committed lockfile to reduce build drift.',
              my: 'Hot reload နဲ့ development အတွက် dependency တွေထည့်ပြီး repository root ကနေ wails dev run ပါ။ Frontend dependency တွေက committed lockfile နဲ့ pin ထားပြီး build drift လျှော့တယ်။',
            },
          },
        ],
      },
      {
        id: 'ci',
        title: { en: 'Continuous integration', my: 'Continuous integration' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'GitHub Actions (.github/workflows/build.yml) runs on pushes to main, pull requests and version tags (v*). Permissions are least-privilege by default (contents: read); only the tag-release job is granted contents: write. The release job attaches the .deb, .exe and both .dmg assets to a GitHub Release with generated notes.',
              my: 'GitHub Actions (.github/workflows/build.yml) က main မှာ push၊ pull request နဲ့ version tag (v*) မှာ run တယ်။ Permission တွေက least-privilege (contents: read); tag-release job သာ contents: write ရတယ်။ Release job က .deb, .exe နဲ့ .dmg asset နှစ်ခုကို generated notes နဲ့ GitHub Release မှာတွဲတယ်။',
            },
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
    short: {
      en: 'How reporting works and where the bounds are',
      my: 'Reporting ဘယ်လိုလုပ်လဲ + ကန့်သတ်ချက်ဘယ်မှာလဲ',
    },
    intro: {
      en: 'Common questions about how Codexa Scanner reports findings and bounds its checks.',
      my: 'Codexa Scanner ကရလဒ်တွေ ဘယ်လိုအစီရင်ခံလဲ + check တွေကို ဘယ်လိုကန့်သတ်လဲဆိုတဲ့ မေးခွန်းတွေ။',
    },
    sections: [
      {
        id: 'risk-score-cvss',
        title: { en: 'Is the risk score a CVSS?', my: 'Risk score က CVSS လား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. The 0–100 risk score and the A+–F grade are a simple severity-weighted heuristic — not CVSS and not a formal risk score. Use them as a quick triage signal, not a definitive measurement.',
              my: 'မဟုတ်ပါ။ 0–100 risk score နဲ့ A+–F grade က severity-weighted heuristic တစ်ခုသာ — CVSS မဟုတ်၊ formal risk score မဟုတ်ပါ။ အမြန် triage signal အဖြစ်သာသုံးပါ၊ အတိအကျတိုင်းတာမှုမဟုတ်ပါ။',
            },
          },
        ],
      },
      {
        id: 'tls-inconclusive',
        title: { en: 'Why are TLS 1.0/1.1 results sometimes "Inconclusive"?', my: 'TLS 1.0/1.1 ရလဒ်တွေ "Inconclusive" ဖြစ်ရတဲ့အကြောင်းရင်း?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'TLS 1.0/1.1 probes report "Supported" only after an exact-version handshake succeeds, "Not supported" only after an explicit protocol_version alert, and otherwise "Inconclusive" with the probe error. The local Go crypto policy can prevent a legacy handshake independently of the remote server, so these results are best-effort.',
              my: 'TLS 1.0/1.1 probe တွေက exact-version handshake ပြီးမှသာ "Supported", explicit protocol_version alert ပြီးမှသာ "Not supported", အခြားအခါ "Inconclusive" + probe error အစီရင်ခံတယ်။ Local Go crypto policy က remote server နဲ့မသက်ဆိုင်ဘဲ legacy handshake တားနိုင်လို့ ဒီရလဒ်တွေက best-effort ဖြစ်တယ်။',
            },
          },
        ],
      },
      {
        id: 'subdomain-coverage',
        title: { en: 'Does subdomain discovery find every subdomain?', my: 'Subdomain discovery က subdomain အကုန်ရှာတွေ့လား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. Discovery relies on Certificate Transparency data via crt.sh, capped at 500 names. Coverage depends on what certificates have been issued — the absence of a name does not prove it does not exist. An optional bounded DNS wordlist lookup can go deeper.',
              my: 'မဟုတ်ပါ။ Discovery က crt.sh ဆီက Certificate Transparency data ပေါ်မူတည်၊ 500 နာမည်ထိ။ Coverage က certificate တွေဘယ်လောက်ထုတ်ထားလဲပေါ် မူတည် — နာမည်မပါတာက မရှိဘူးလို့ မသက်သေပါ။ Optional bounded DNS wordlist lookup ကို ပိုနက်ရှိုင်းစွာသုံးလို့ရတယ်။',
            },
          },
        ],
      },
      {
        id: 'tech-fingerprints',
        title: { en: 'Are technology / WAF fingerprints definitive?', my: 'Technology/WAF fingerprint တွေ အတည်ပြုလား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. Fingerprints are passive clues based on observed response headers, cookie names and a bounded HTML sample. They may be incomplete or false positives — they are not confirmation of a WAF or a specific product.',
              my: 'မဟုတ်ပါ။ Fingerprint တွေက response header၊ cookie နာမည် နဲ့ bounded HTML sample ပေါ်အခြေခံတဲ့ passive clue။ မပြည့်စုံ ဒါမမဟုတ် false positive ဖြစ်နိုင် — WAF ဒါမမဟုတ် product အတိအကျ အတည်မပြုပါ။',
            },
          },
        ],
      },
      {
        id: 'clean-report',
        title: { en: 'Does a clean report mean no vulnerabilities?', my: 'Clean report ဆိုတာ vulnerability မရှိလား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. The passive web-audit module does not authenticate, crawl linked routes, submit forms, test authorization or exploit vulnerabilities. A clean report does not mean a site is vulnerability-free. The separate path module is active but bounded and HEAD-only.',
              my: 'မဟုတ်ပါ။ Passive web-audit module က authenticate မလုပ်၊ linked route မcrawl၊ form မsubmit၊ authorization မစစ်၊ vulnerability မexploit။ Clean report က site မှာ vulnerability မရှိလို့ မဆိုလိုပါ။ Path module က active ဒါပေမယ့် bounded + HEAD-only ဖြစ်တယ်။',
            },
          },
        ],
      },
      {
        id: 'rdap-geolocation',
        title: { en: 'Is RDAP country data precise geolocation?', my: 'RDAP country data က တိကျတဲ့ geolocation လား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. RDAP country/network data describes registry records and is not precise geolocation or a guaranteed ASN mapping. No geolocation is inferred anywhere in the app.',
              my: 'မဟုတ်ပါ။ RDAP country/network data က registry record တွေဖော်ပြတာပါ၊ တိကျတဲ့ geolocation ဒါမမဟုတ် guaranteed ASN mapping မဟုတ်။ App တစ်ခုလုံးမှာ geolocation မညှားဆောင်ပါ။',
            },
          },
        ],
      },
      {
        id: 'history-uploaded',
        title: { en: 'Is my scan history uploaded anywhere?', my: 'Scan history ကို ဘယ်နေရာကိုမျှ upload လုပ်လား?' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'No. History lives in a local SQLite file (CodexaScanner/history.sqlite) and is never uploaded by the app. Optional RDAP lookups contact the public RDAP service only for public IP addresses.',
              my: 'မဟုတ်ပါ။ History က local SQLite file (CodexaScanner/history.sqlite) မှာရှိပြီး app က upload မလုပ်ပါ။ Optional RDAP lookup တွေက public RDAP service ကို public IP address တွေအတွက်သာဆက်သွယ်တယ်။',
            },
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
    short: {
      en: 'The notice, what passive means, and your responsibilities',
      my: 'သတိပြုစရာ၊ passive ဆိုတာ၊ + သင့်တာဝန်တွေ',
    },
    intro: {
      en: 'Codexa Scanner is provided for authorized testing, education and defensive security work. Read this before scanning anything.',
      my: 'Codexa Scanner ကို ခွင့်ပြုထားတဲ့ စမ်းသပ်မှု၊ ပညာရေးနဲ့ ကာကွယ်ရေး လုံခြုံမှုလုပ်ငန်းအတွက်ပေးထားတယ်။ ဘာကိုမျှ scan မလုပ်ခင် ဒါဖတ်ပါ။',
    },
    sections: [
      {
        id: 'notice',
        title: { en: 'Authorized-use notice', my: 'ခွင့်ပြုထားတဲ့ အသုံးပြုမှု သတိပြုစရာ' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'Use Codexa Scanner only against systems you own or have explicit permission to assess. Port scanning and HTTP requests may be logged, trigger defensive controls, or violate policy or law when performed without authorization. Checks are passive and non-exploitative; results are indicators for review, not proof of exploitability or a substitute for a professional assessment.',
              my: 'Codexa Scanner ကို သင်ပိုင်တဲ့ ဒါမမဟုတ် စစ်ဆေးဖို့ ခွင့်ပြုထားတဲ့ system တွေမှာသာသုံးပါ။ Port scanning နဲ့ HTTP request တွေက ခွင့်မပြုဘဲလုပ်ရင် log တက်၊ defensive control တက်၊ ဒါမမဟုတ် policy/law ပိုင်းဆိုင်ရာ ချိုးဖောက်နိုင်တယ်။ Check တွေက passive + non-exploitative; ရလဒ်တွေက ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေသာ၊ exploit ရကြောင်း သက်သေ ဒါမမဟုတ် ကျွမ်းကျင် စစ်ဆေးမှုအစား မဟုတ်ပါ။',
            },
          },
          {
            kind: 'callout',
            tone: 'warning',
            title: { en: 'Your responsibility', my: 'သင့်တာဝန်' },
            text: {
              en: 'You are responsible for obtaining permission, complying with applicable laws, and respecting target scope and rate limits. The authors accept no liability for misuse or damage.',
              my: 'ခွင့်ပြုချက်ရယူခြင်း၊ လိုက်နာရမည့် ဥပဒေတွေလိုက်နာခြင်း၊ target scope နဲ့ rate limit လေးစားခြင်းက သင့်တာဝန်ပါ။ မမှန်ကန်သုံးတာ ဒါမမဟုတ် ပျက်ဆီးမှုအတွက် ဖန်တီးသူတွေက တာဝန်မခံပါ။',
            },
          },
        ],
      },
      {
        id: 'passive-meaning',
        title: { en: 'What "passive & non-exploitative" means', my: '"passive + non-exploitative" ဆိုတာ ဘာလဲ' },
        blocks: [
          {
            kind: 'list',
            items: [
              { en: 'The web-audit module does not authenticate, crawl linked routes, submit forms or test authorization.', my: 'Web-audit module က authenticate မလုပ်၊ linked route မcrawl၊ form မsubmit၊ authorization မစစ်ပါ။' },
              { en: 'It does not exploit vulnerabilities or attempt to bypass controls.', my: 'Vulnerability မexploit၊ control တွေကို bypass မလုပ်ပါ။' },
              { en: 'The path module is active but bounded and HEAD-only — it never fetches or displays response bodies.', my: 'Path module က active ဒါပေမယ့် bounded + HEAD-only — response body တွေကို ဘယ်တော့မျှ မယူ မပြပါ။' },
              { en: 'Findings are severity-tagged indicators for review, not proof of exploitability.', my: 'ရလဒ်တွေက severity tag ပါတဲ့ ဆန်းစစ်ဖို့ ညွှန်ကိန်းတွေသာ၊ exploit ရကြောင်း သက်သေမဟုတ်ပါ။' },
            ],
          },
        ],
      },
      {
        id: 'responsibilities',
        title: { en: 'Your responsibilities', my: 'သင့်တာဝန်တွေ' },
        blocks: [
          {
            kind: 'list',
            items: [
              { en: 'Obtain explicit permission for every target before scanning.', my: 'Scan မလုပ်ခင် target တိုင်းအတွက် ခွင့်ပြုချက်ရယူပါ။' },
              { en: 'Comply with all applicable laws and regulations in your jurisdiction.', my: 'သင့်နယ်နိမိတ်ရဲ့ လိုက်နာရမည့် ဥပဒေ + စည်းမျဉ်းတွေလိုက်နာပါ။' },
              { en: 'Respect the agreed scope and rate limits — use the request delay controls where offered.', my: 'သဘောတူထားတဲ့ scope + rate limit လေးစားပါ — request delay control ပေးထားရင်သုံးပါ။' },
              { en: 'Treat results as indicators to investigate, not as a green light to act.', my: 'ရလဒ်တွေကို ဆန်းစစ်ဖို့ ညွှန်ကိန်းအဖြစ်ကြည့်ပါ၊ လုပ်ဆောင်ဖို့ အစိမ်းရောင်မီးမဟုတ်ပါ။' },
            ],
          },
        ],
      },
      {
        id: 'private-targets',
        title: { en: 'Private & lab targets', my: 'Private + lab target တွေ' },
        blocks: [
          {
            kind: 'paragraph',
            text: {
              en: 'Private RFC1918, IPv6 ULA and loopback targets are blocked by default and require a one-shot opt-in for authorized lab use. Link-local, multicast, unspecified and special-use/reserved addresses remain blocked entirely. There is no blanket private-IP block — authorized private/lab targets are available when explicitly opted in.',
              my: 'Private RFC1918၊ IPv6 ULA နဲ့ loopback target တွေက ပုံသေပိတ် + ခွင့်ပြု lab အသုံးပြုမှုအတွက် one-shot opt-in လိုတယ်။ Link-local၊ multicast၊ unspecified နဲ့ special-use/reserved address တွေက အပြည့်အဝပိတ်။ Blanket private-IP block မဟုတ် — ခွင့်ပြု private/lab target တွေက explicit opt-in လုပ်ရင်ရတယ်။',
            },
          },
        ],
      },
    ],
  },
]
