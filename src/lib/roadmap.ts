import type { LocalString } from '@/lib/i18n/local-string'

export type RoadmapStatus = 'considering' | 'planned'

export type RoadmapItem = {
  id: string
  title: LocalString
  desc: LocalString
  category: LocalString
  status: RoadmapStatus
}

export const ROADMAP: RoadmapItem[] = [
  {
    id: 'macos-notarized',
    title: { en: 'Signed & notarized macOS builds', my: 'Signed + notarized macOS build' },
    desc: {
      en: 'Notarize the DMGs so Gatekeeper no longer blocks first launch.',
      my: 'DMG တွေကို notarize လုပ်ပြီး Gatekeeper ကပထမဖွင့်တာ မတားတော့။',
    },
    category: { en: 'Distribution', my: 'Distribution' },
    status: 'planned',
  },
  {
    id: 'scan-diff',
    title: { en: 'Diff between any two scans', my: 'Scan နှစ်ခ်ကြား diff' },
    desc: {
      en: 'Compare any two saved scans for a target, beyond the current latest-two port diff.',
      my: 'လက်ရှိ နောက်ဆုံး scan နှစ်ခု port diff ထက်ပိုပြီး target တစ်ခုရဲ့ သိမ်းထားတဲ့ scan နှစ်ခုကြား နှိုင်းယှဉ်။',
    },
    category: { en: 'History', my: 'History' },
    status: 'planned',
  },
  {
    id: 'ipv6-scanning',
    title: { en: 'IPv6 port scanning improvements', my: 'IPv6 port scanning တိုးတက်မှု' },
    desc: {
      en: 'Broader IPv6 target support and address selection.',
      my: 'IPv6 target support ပိုကျယ် + address selection။',
    },
    category: { en: 'Port Scanner', my: 'Port Scanner' },
    status: 'planned',
  },
  {
    id: 'cli-mode',
    title: { en: 'CLI / headless mode', my: 'CLI / headless mode' },
    desc: {
      en: 'Run scans and exports from the command line without the desktop UI.',
      my: 'Desktop UI မပါဘဲ command line ကနေ scan + export run လုပ်။',
    },
    category: { en: 'Surface', my: 'Surface' },
    status: 'considering',
  },
  {
    id: 'scheduled-scans',
    title: { en: 'Scheduled / recurring scans', my: 'Scheduled / recurring scan' },
    desc: {
      en: 'Schedule scans to run on a cadence and auto-export results.',
      my: 'Scan တွေကို အချိန်ဇယားနဲ့ run + ရလဒ် auto-export။',
    },
    category: { en: 'Automation', my: 'Automation' },
    status: 'considering',
  },
  {
    id: 'export-templates',
    title: { en: 'Customizable export templates', my: 'Customizable export template' },
    desc: {
      en: 'Template-based JSON/HTML/Markdown report generation.',
      my: 'Template အခြေခံ JSON/HTML/Markdown report ထုတ်လုပ်။',
    },
    category: { en: 'Reports', my: 'Reports' },
    status: 'considering',
  },
  {
    id: 'plugins',
    title: { en: 'Plugin / extension system', my: 'Plugin / extension system' },
    desc: {
      en: 'Allow third-party modules to plug into the scan + report pipeline.',
      my: 'Third-party module တွေကို scan + report pipeline ထဲ plug-in လုပ်ခွင့်။',
    },
    category: { en: 'Extensibility', my: 'Extensibility' },
    status: 'considering',
  },
  {
    id: 'linux-arm',
    title: { en: 'Linux ARM builds', my: 'Linux ARM build' },
    desc: {
      en: 'Provide Linux ARM64 packages alongside the existing amd64 .deb.',
      my: 'လက်ရှိ amd64 .deb နဲ့အတူ Linux ARM64 package ထုတ်ပေး။',
    },
    category: { en: 'Distribution', my: 'Distribution' },
    status: 'considering',
  },
  {
    id: 'history-import',
    title: { en: 'Import / export history', my: 'History import / export' },
    desc: {
      en: 'Move the local SQLite history between machines.',
      my: 'Local SQLite history ကို မက်စင်ကြားရွှေ့။',
    },
    category: { en: 'History', my: 'History' },
    status: 'considering',
  },
]
