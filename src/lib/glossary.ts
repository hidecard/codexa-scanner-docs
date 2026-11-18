import type { LocalString } from '@/lib/i18n/local-string'

export type GlossaryTerm = {
  term: string
  category: LocalString
  definition: LocalString
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: 'Banner grabbing',
    category: { en: 'Recon', my: 'Recon' },
    definition: {
      en: 'Collecting the service identification text a port returns on connect, used to guess what software and version is running.',
      my: 'Port တစ်ခုကို connect လုပ်တဲ့အခါ ပြန်ပေးတဲ့ service မှတ်သားစာ (identification text) ကိုစုဆောင်ခြင်း — ဘယ် software/version 跑လဲခန့်မှန်ရန်အသုံးပြု။',
    },
  },
  {
    term: 'Certificate Transparency (CT)',
    category: { en: 'TLS', my: 'TLS' },
    definition: {
      en: 'A public, append-only log of issued TLS certificates. Codexa Scanner queries it (via crt.sh) to discover subdomains.',
      my: 'ထုတ်ပေးထားတဲ့ TLS certificate တွေရဲ့ အများသိုင်း၊ append-only log။ Codexa Scanner ကိုယ် (crt.sh ဆီမှာ) subdomain တွေရှာဖွေဖို့ query လုပ်တယ်။',
    },
  },
  {
    term: 'Cipher',
    category: { en: 'TLS', my: 'TLS' },
    definition: {
      en: 'The encryption algorithm negotiated between client and server during a TLS handshake.',
      my: 'TLS handshake အတွင်း client နဲ့ server ကြား negotiate လုပ်ထားတဲ့ encryption algorithm။',
    },
  },
  {
    term: 'CORS',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'Cross-Origin Resource Sharing — a browser mechanism that controls whether scripts on one origin can read responses from another.',
      my: 'Cross-Origin Resource Sharing — တစ် origin က script တွေက အခြား origin က response ကိုဖတ်လို့ရမလား ထိန်းတဲ့ browser mechanism။',
    },
  },
  {
    term: 'CSP',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'Content Security Policy — an HTTP header that restricts which sources a browser may load and execute (scripts, styles, frames).',
      my: 'Content Security Policy — browser က ဘယ် source တွေကို load/execute လုပ်လို့ရမလည်း ကန့်သတ်တဲ့ HTTP header။',
    },
  },
  {
    term: 'DMARC',
    category: { en: 'DNS', my: 'DNS' },
    definition: {
      en: 'A DNS record that tells receivers how to handle email that fails SPF/DKIM checks.',
      my: 'SPF/DKIM check တွေမမှန်တဲ့ email ကို ဘယ်လိုကိုင်တွယ်မလဲ receiver တွေကိုပြောတဲ့ DNS record။',
    },
  },
  {
    term: 'DNS records',
    category: { en: 'DNS', my: 'DNS' },
    definition: {
      en: 'Domain Name System entries: A/AAAA (address), MX (mail), NS (nameserver), TXT (text), SPF, DMARC, and PTR (reverse).',
      my: 'Domain Name System entry တွေ: A/AAAA (address)၊ MX (mail)၊ NS (nameserver)၊ TXT (text)၊ SPF၊ DMARC၊ PTR (reverse)။',
    },
  },
  {
    term: 'HEAD request',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'An HTTP method that asks for the headers of a resource without the response body — used by the Path Fuzzer.',
      my: 'Response body မပါဘဲ resource ရဲ့ header တွေကိုသာတောင်းတဲ့ HTTP method — Path Fuzzer ကသုံးတယ်။',
    },
  },
  {
    term: 'HttpOnly',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'A cookie attribute that prevents JavaScript from reading the cookie, reducing XSS theft risk.',
      my: 'JavaScript က cookie ကိုဖတ်မရအောင်ပိတ်တဲ့ cookie attribute — XSS ခိုးမှု risk လျှော့တယ်။',
    },
  },
  {
    term: 'JWT',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'JSON Web Token — a compact, signed token used for authentication; posture is checked passively.',
      my: 'JSON Web Token — authentication အတွက်သုံးတဲ့ compact, signed token; posture ကို passive စစ်ဆေးတယ်။',
    },
  },
  {
    term: 'Link-local',
    category: { en: 'Network', my: 'Network' },
    definition: {
      en: 'Addresses valid only on a single network segment (e.g. 169.254.0.0/16). Blocked entirely by Codexa Scanner.',
      my: 'Network segment တစ်ခုတည်းမှာသာ သုံးလို့ရတဲ့ address (ဥပမာ 169.254.0.0/16)။ Codexa Scanner ကအပြည့်အဝပိတ်။',
    },
  },
  {
    term: 'Loopback',
    category: { en: 'Network', my: 'Network' },
    definition: {
      en: 'The local-host address range (127.0.0.0/8, ::1) — traffic that stays on your own machine.',
      my: 'Local-host address range (127.0.0.0/8၊ ::1) — သင့်မက်စင်ပေါ်မှာသာ traffic ရှိတာ။',
    },
  },
  {
    term: 'Mixed content',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'Loading insecure (HTTP) sub-resources on a secure (HTTPS) page — flagged by the Web Audit.',
      my: 'Secure (HTTPS) page ပေါ်မှာ insecure (HTTP) sub-resource တွေ load လုပ်ခြင်း — Web Audit ကအလံပြတယ်။',
    },
  },
  {
    term: 'Pinning (address)',
    category: { en: 'Recon', my: 'Recon' },
    definition: {
      en: 'Resolving a hostname once and using one deterministic address for the whole scan or request chain.',
      my: 'Hostname ကိုတစ်ကြိမ် resolve လုပ်ပြီး တစ်ခုလုံးရဲ့ scan/request chain အတွက် တိကျတဲ့ address တစ်ခုသုံးခြင်း။',
    },
  },
  {
    term: 'Port scanning',
    category: { en: 'Recon', my: 'Recon' },
    definition: {
      en: 'Probing a host to find which TCP ports are open, filtered, or closed.',
      my: 'ဘယ် TCP port တွေက open၊ filtered၊ closed လဲသိဖို့ host ကို probing လုပ်ခြင်း။',
    },
  },
  {
    term: 'RDAP',
    category: { en: 'Network', my: 'Network' },
    definition: {
      en: 'Registration Data Access Protocol — the modern WHOIS, returns registration/country metadata for public IPs.',
      my: 'Registration Data Access Protocol — ခေတ်မီ WHOIS၊ public IP တွေအတွက် registration/country metadata ပြန်တယ်။',
    },
  },
  {
    term: 'Redirect chain',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'The sequence of HTTP redirects a URL follows before the final response — capped at 5 hops.',
      my: 'URL တစ်ခုက final response မရောက်ခင်လိုက်ရတဲ့ HTTP redirect တွေရဲ့ sequence — 5 hop ထိကန့်သတ်။',
    },
  },
  {
    term: 'RFC1918',
    category: { en: 'Network', my: 'Network' },
    definition: {
      en: 'The IPv4 private address ranges (10/8, 172.16/12, 192.168/16) used on internal networks.',
      my: 'Internal network တွေမှာသုံးတဲ့ IPv4 private address range (10/8၊ 172.16/12၊ 192.168/16)။',
    },
  },
  {
    term: 'Risk score',
    category: { en: 'Reporting', my: 'Reporting' },
    definition: {
      en: 'A 0–100 severity-weighted heuristic plus an A+–F grade — not CVSS, a quick triage signal.',
      my: '0–100 severity-weighted heuristic + A+–F grade — CVSS မဟုတ်၊ အမြန် triage signal။',
    },
  },
  {
    term: 'SAN',
    category: { en: 'TLS', my: 'TLS' },
    definition: {
      en: 'Subject Alternative Name — the list of hostnames a TLS certificate is valid for.',
      my: 'Subject Alternative Name — TLS certificate တစ်ခုက ဘယ် hostname တွေအတွက် သုံးလို့ရလဲဆိုတဲ့စာရင်း။',
    },
  },
  {
    term: 'SameSite',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'A cookie attribute controlling whether a cookie is sent on cross-site requests.',
      my: 'Cross-site request မှာ cookie ပို့မလား ထိန်းတဲ့ cookie attribute။',
    },
  },
  {
    term: 'Secure (cookie)',
    category: { en: 'Web', my: 'Web' },
    definition: {
      en: 'A cookie attribute that ensures the cookie is only sent over HTTPS.',
      my: 'Cookie ကို HTTPS ပေါ်မှာသာ ပို့တယ်ဆိုတာ သေချာစေတဲ့ cookie attribute။',
    },
  },
  {
    term: 'TLS',
    category: { en: 'TLS', my: 'TLS' },
    definition: {
      en: 'Transport Layer Security — the protocol that encrypts HTTPS connections and verifies server identity via certificates.',
      my: 'Transport Layer Security — HTTPS connection တွေကို encrypt လုပ်ပြီး certificate တွေနဲ့ server identity စစ်ဆေးတဲ့ protocol။',
    },
  },
  {
    term: 'ULA',
    category: { en: 'Network', my: 'Network' },
    definition: {
      en: 'Unique Local Address — IPv6 private address range (fc00::/7), equivalent to RFC1918 for IPv6.',
      my: 'Unique Local Address — IPv6 private address range (fc00::/7)၊ IPv6 အတွက် RFC1918 နဲ့တူတယ်။',
    },
  },
  {
    term: 'Wails',
    category: { en: 'Stack', my: 'Stack' },
    definition: {
      en: 'A Go framework that wraps a web frontend (React) into a native desktop app using the OS webview.',
      my: 'Web frontend (React) ကို OS webview နဲ့ native desktop app အဖြစ် wrap လုပ်ပေးတဲ့ Go framework။',
    },
  },
]
