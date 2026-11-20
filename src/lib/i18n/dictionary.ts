export type Locale = 'en' | 'my'

// Flat dictionary. t(key) returns the string for the active locale.
// Marketing/chrome strings are translated; deep technical docs content
// (module/article/changelog bodies) stays English by design.
export const DICTIONARY = {
  en: {
    'lang.toggle': 'မြန်မာ',
    'lang.label': 'EN',

    'nav.features': 'Features',
    'nav.docs': 'Docs',
    'nav.download': 'Download',
    'nav.guide': 'Guide',
    'nav.about': 'About',
    'nav.playground': 'Playground',
    'nav.github': 'GitHub',
    'nav.downloadBtn': 'Download',
    'nav.menuToggle': 'Toggle menu',

    'footer.product': 'Product',
    'footer.resources': 'Resources',
    'footer.modules': 'Modules',
    'footer.home': 'Home',
    'footer.documentation': 'Documentation',
    'footer.changelog': 'Changelog',
    'footer.glossary': 'Glossary',
    'footer.roadmap': 'Roadmap',
    'footer.contributing': 'Contributing',
    'footer.releases': 'Releases',
    'footer.repository': 'Repository',
    'footer.builtFor': 'Built for authorized testing & defensive security work',
    'footer.developedBy': 'Developed by',

    'hero.latest': 'Latest release',
    'hero.tagline':
      'Cross-platform network reconnaissance & HTTP security-header inspection',
    'hero.desc':
      'A desktop app for network reconnaissance and HTTP security-header inspection — built with Go, Wails, React & TypeScript.',
    'hero.downloadFree': 'Download for free',
    'hero.exploreFeatures': 'Explore features',
    'hero.viewGithub': 'View on GitHub',
    'hero.platforms': 'Platforms',
    'hero.modules': 'Modules',
    'hero.version': 'Version',
    'hero.license': 'License',
    'hero.openSource': 'Open Source',

    'common.download': 'Download',
    'common.viewGithub': 'View on GitHub',
    'common.previous': 'Previous',
    'common.next': 'Next',
    'common.onThisPage': 'On this page',
    'common.overview': 'Overview',
    'common.howToUse': 'How to use',
    'common.whatItInspects': 'What it inspects',
    'common.goodToKnow': 'Good to know',
    'common.documentation': 'Documentation',
    'common.gettingStarted': 'Getting Started',
    'common.modules': 'Modules',
    'common.reference': 'Reference',
    'common.docs': 'Docs',

    'search.title': 'Search Codexa Scanner',
    'search.desc': 'Search pages, modules and documentation articles.',
    'search.placeholder': 'Search docs, modules, pages…',
    'search.empty': 'No results found.',
    'search.trigger': 'Search docs…',

    'docschrome.title': 'Documentation',
    'docschrome.versionNote': 'v1.1.6 · {n} articles',
    'docschrome.modules': 'Modules',

    'cta.heading': 'Ready to run your first scan?',
    'cta.desc':
      'Download Codexa Scanner for your platform, or read the guide to see how the bounded, authorization-first workflow keeps every check safe and reviewable.',
    'cta.download': 'Download',
    'cta.readGuide': 'Read the guide',

    'highlights.eyebrow': 'Why Codexa',
    'highlights.title': 'A scanner you can trust',
    'highlights.titleHighlight': 'trust',
    'highlights.cross.title': 'Truly cross-platform',
    'highlights.cross.body':
      'Native builds for Linux, Windows and macOS — including separate Intel & Apple Silicon DMGs. One app, every desktop.',
    'highlights.eight.title': 'Eight modules in one',
    'highlights.eight.body':
      'Port scanning, web audit, subdomain discovery, path fuzzing, TLS, DNS, IP intel and history — a full recon toolchain.',
    'highlights.bounded.title': 'Bounded & authorization-first',
    'highlights.bounded.body':
      'Every scan requires explicit confirmation. Capped concurrency, timeouts and passive, non-exploitative checks throughout.',
    'highlights.local.title': 'Local & private',
    'highlights.local.body':
      'History lives in a local SQLite file, auto-pruned and never uploaded. Bounded redaction on stored data and exports.',

    'teaser.eyebrow': 'Modules',
    'teaser.title': 'A complete recon toolchain',
    'teaser.titleHighlight': 'recon toolchain',
    'teaser.desc':
      'Eight bounded modules cover discovery, inspection and reporting — each with its own documentation and usage guide.',
    'teaser.browseAll': 'Browse all modules & docs',

    'demo.eyebrow': 'Interactive demo',
    'demo.title': 'See a scan in action',
    'demo.titleHighlight': 'action',
    'demo.desc':
      'A simulated run of the Port Scanner module — watch how DNS resolves, an address is pinned, and ports stream in live. This is a demo, not a real scan.',
    'demo.runScan': 'Run scan',
    'demo.scanning': 'Scanning…',
    'demo.reset': 'Reset',
    'demo.resolving': 'Resolving hostname…',
    'demo.pinned': 'Pinned:',
    'demo.scanComplete': 'scan complete',
    'demo.ready': 'Ready to scan. Click “Run scan”.',
    'demo.awaiting': 'Awaiting scan…',
    'demo.port': 'Port',
    'demo.service': 'Service',
    'demo.status': 'Status',
    'demo.open': 'open',
    'demo.filtered': 'filtered',
    'demo.closed': 'closed',
    'demo.disclaimer':
      'Simulated output for demonstration only — no real network requests are made. Actual scans require authorization.',

    'notfound.title': 'Page not found',
    'notfound.desc':
      "The page you're looking for doesn't exist or has moved. It may have been blocked or the URL may be a dead end.",
    'notfound.home': 'Back home',
    'notfound.browseDocs': 'Browse docs',
    'notfound.search': 'Search',
    'notfound.hint': 'Or try the Changelog, Features or Download pages.',

    'theme.toggle': 'Toggle theme',
    'backToTop.label': 'Back to top',
    'scrollprogress.label': 'Reading progress',
  },

  my: {
    'lang.toggle': 'EN',
    'lang.label': 'မြန်မာ',

    'nav.features': 'လုပ်ဆောင်ချက်များ',
    'nav.docs': 'စာရွက်စာတမ်း',
    'nav.download': 'ဒေါင်းလုဒ်',
    'nav.guide': 'လမ်းညွှန်',
    'nav.about': 'အကြောင်း',
    'nav.playground': 'Playground',
    'nav.github': 'GitHub',
    'nav.downloadBtn': 'ဒေါင်းလုဒ်',
    'nav.menuToggle': 'မီနူးဖွင့်/ပိတ်',

    'footer.product': 'ထုတ်ကုန်',
    'footer.resources': 'အရင်းအမြစ်များ',
    'footer.modules': 'မော်ဂျူးများ',
    'footer.home': 'ပင်မ',
    'footer.documentation': 'စာရွက်စာတမ်း',
    'footer.changelog': 'ပြောင်းလဲမှုမှတ်တမ်း',
    'footer.glossary': 'အသုံးအနှုန်း အဘိဓာန်',
    'footer.roadmap': 'Roadmap',
    'footer.contributing': 'ဆောင်ရွက်ခြင်း',
    'footer.releases': 'ထွက်ရှိမှုများ',
    'footer.repository': 'ရီပိုစီထိုရီ',
    'footer.builtFor': 'ခွင့်ပြုထားတဲ့ စမ်းသပ်မှုနဲ့ ကာကွယ်ရေး လုံခြုံမှုအတွက် တည်ဆောက်ထားခြင်း',
    'footer.developedBy': 'ဖန်တီးသူ',

    'hero.latest': 'နောက်ဆုံးထွက်ရှိမှု',
    'hero.tagline':
      'ခရိုစ်-ပလက်ဖောင်း ကွန်ရက်စူးစမ်းမှုနဲ့ HTTP လုံခြုံရေးဟက်ဒါ စစ်ဆေးခြင်း',
    'hero.desc':
      'ကွန်ရက်စူးစမ်းမှုနဲ့ HTTP လုံခြုံရေးဟက်ဒါ စစ်ဆေးခြင်းအတွက် ဒက်စတော့ပ် app — Go, Wails, React နဲ့ TypeScript နဲ့တည်ဆောက်ထား။',
    'hero.downloadFree': 'အခမဲ့ဒေါင်းလုဒ်',
    'hero.exploreFeatures': 'လုပ်ဆောင်ချက်များကြည့်',
    'hero.viewGithub': 'GitHub မှာကြည့်',
    'hero.platforms': 'ပလက်ဖောင်းများ',
    'hero.modules': 'မော်ဂျူးများ',
    'hero.version': 'ဗားရှင်း',
    'hero.license': 'လိုင်စင်',
    'hero.openSource': 'အခမဲ့အသုံးပြု',

    'common.download': 'ဒေါင်းလုဒ်',
    'common.viewGithub': 'GitHub မှာကြည့်',
    'common.previous': 'အရင်',
    'common.next': 'နောက်',
    'common.onThisPage': 'ဒီစာမျက်နှာမှာ',
    'common.overview': 'အကြဉ်းချုပ်',
    'common.howToUse': 'အသုံးပြုပုံ',
    'common.whatItInspects': 'စစ်ဆေးတာတွေ',
    'common.goodToKnow': 'သိထားသင့်တာ',
    'common.documentation': 'စာရွက်စာတမ်း',
    'common.gettingStarted': 'စတင်အသုံးပြု',
    'common.modules': 'မော်ဂျူးများ',
    'common.reference': 'ကိုးကား',
    'common.docs': 'စာရွက်စာတမ်း',

    'search.title': 'Codexa Scanner ရှာဖွေရန်',
    'search.desc': 'စာမျက်နှာ၊ မော်ဂျူးနဲ့ ဆောင်းပါးများကို ရှာဖွေပါ။',
    'search.placeholder': 'စာရွက်စာတမ်း၊ မော်ဂျူး၊ စာမျက်နှာ ရှာဖွေ…',
    'search.empty': 'ရှာဖွေတွေ့မှုမရှိပါ။',
    'search.trigger': 'စာရွက်စာတမ်း ရှာဖွေ…',

    'docschrome.title': 'စာရွက်စာတမ်း',
    'docschrome.versionNote': 'v1.1.6 · ဆောင်းပါး {n} ပုဒ်',
    'docschrome.modules': 'မော်ဂျူးများ',

    'cta.heading': 'ပထမဆုံး scan လုပ်ဖို့ အဆင်သင့်ဖြစ်ပြီလား?',
    'cta.desc':
      'သင့်ပလက်ဖောင်းအတွက် Codexa Scanner ကို ဒေါင်းလုဒ်လုပ်ပါ၊ ဒါမမဟုတ် ကန့်သတ်ထားတဲ့ authorization-first လုပ်ငန်းစဉ်က ဘယ်လို စစ်ဆေးမှုတွေကို လုံခြုံစွာ ပြန်လည်စစ်ဆေးနိုင်တယ်ဆိုတာ ဖတ်ကြည့်ပါ။',
    'cta.download': 'ဒေါင်းလုဒ်',
    'cta.readGuide': 'လမ်းညွှန်ဖတ်ပါ',

    'highlights.eyebrow': 'ဘာကြောင့် Codexa',
    'highlights.title': 'မှီခိုအပ်နိုင်တဲ့ scanner',
    'highlights.titleHighlight': 'မှီခိုအပ်',
    'highlights.cross.title': 'တကယ့်ခရိုစ်-ပလက်ဖောင်း',
    'highlights.cross.body':
      'Linux, Windows နဲ့ macOS အတွက် native builds — Intel နဲ့ Apple Silicon DMG နှစ်ခုစလုံးပါ။ App တစ်ခုတည်း၊ desktop တိုင်း။',
    'highlights.eight.title': 'မော်ဂျူးရှစ်ခု တစ်ခုတည်း',
    'highlights.eight.body':
      'Port scanning, web audit, subdomain discovery, path fuzzing, TLS, DNS, IP intel နဲ့ history — စုံလင်တဲ့ recon toolchain။',
    'highlights.bounded.title': 'ကန့်သတ်ထား + authorization ဦးစွာ',
    'highlights.bounded.body':
      'scan တိုင်းက အတည်ပြုချက်လိုတယ်။ ကန့်သတ်ထားတဲ့ concurrency၊ timeouts နဲ့ passive၊ non-exploitative စစ်ဆေးမှုတွေ အကုန်။',
    'highlights.local.title': 'Local နဲ့ private',
    'highlights.local.body':
      'History က local SQLite file မှာ၊ auto-pruned လုပ်ပြီး မည်သည့်နေရာကိုမျှ upload မလုပ်ပါ။ stored data နဲ့ exports မှာ bounded redaction သုံးထား။',

    'teaser.eyebrow': 'မော်ဂျူးများ',
    'teaser.title': 'စုံလင်တဲ့ recon toolchain',
    'teaser.titleHighlight': 'recon toolchain',
    'teaser.desc':
      'ကန့်သတ်ထားတဲ့ မော်ဂျူးရှစ်ခုက ရှာဖွေ၊ စစ်ဆေး၊ တင်ပြမှုတွေကို ဖုံးထားတယ် — တစ်ခုချင်းစီမှာ ကိုယ်ပိုင် စာရွက်စာတမ်းနဲ့ အသုံးပြုပုံ လမ်းညွှန်ပါ။',
    'teaser.browseAll': 'မော်ဂျူးနဲ့ စာရွက်စာတမ်းအကုန် ကြည့်ပါ',

    'demo.eyebrow': 'Interactive demo',
    'demo.title': 'scan လုပ်တာကို လုပ်ဆောင်ချက်နဲ့ကြည့်',
    'demo.titleHighlight': 'လုပ်ဆောင်ချက်',
    'demo.desc':
      'Port Scanner မော်ဂျူးရဲ့ တုပစမ်း run တစ်ခု — DNS ဘယ်လို resolve လုပ်တယ်၊ address တစ်ခု pin လုပ်တယ်၊ port တွေ live မှာ stream ဝင်တယ်ဆိုတာ ကြည့်ပါ။ ဒါက demoပါ၊ တကယ့် scan မဟုတ်ပါ။',
    'demo.runScan': 'Scan လုပ်',
    'demo.scanning': 'စစ်ဆေးနေ…',
    'demo.reset': 'ပြန်စ',
    'demo.resolving': 'Hostname resolve လုပ်နေ…',
    'demo.pinned': 'Pinned:',
    'demo.scanComplete': 'scan ပြီးပါပြီ',
    'demo.ready': 'Scan လုပ်ဖို့ အဆင်သင့်။ “Scan လုပ်” ကိုနှိပ်ပါ။',
    'demo.awaiting': 'Scan စောင့်နေ…',
    'demo.port': 'Port',
    'demo.service': 'Service',
    'demo.status': 'Status',
    'demo.open': 'open',
    'demo.filtered': 'filtered',
    'demo.closed': 'closed',
    'demo.disclaimer':
      'ပြသမှုအတွက်သာ simulated output — တကယ့်ကွန်ရက် request တွေ မလုပ်ပါ။ တကယ့် scan တွေက authorization လိုတယ်။',

    'notfound.title': 'စာမျက်နှာရှာမတွေ့',
    'notfound.desc':
      'သင်ရှာနေတဲ့ စာမျက်နှာက မရှိတော့ဘူး ဒါမမဟုတ် ရွှေ့သွားပြီ။ Block လုပ်ထားနိုင်တယ် ဒါမမဟုတ် URL က dead end ဖြစ်နိုင်တယ်။',
    'notfound.home': 'ပင်မကိုပြန်',
    'notfound.browseDocs': 'စာရွက်စာတမ်းကြည့်',
    'notfound.search': 'ရှာဖွေ',
    'notfound.hint': 'သို့မဟုတ် Changelog၊ Features ဒါမမဟုတ် Download စာမျက်နှာတွေကို စမ်းကြည့်ပါ။',

    'theme.toggle': 'Theme ပြောင်း',
    'backToTop.label': 'အပေါ်ကိုပြန်တက်',
    'scrollprogress.label': 'ဖတ်နေတဲ့ တိုးတက်မှု',
  },
} as const

export type DictKey = keyof (typeof DICTIONARY)['en']
