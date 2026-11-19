# Codexa Scanner Documentation

Documentation site for [Codexa Scanner](https://github.com/hidecard/codexa-scanner), a cross-platform desktop application for network reconnaissance and web security checks. The site provides product information, feature/module guides, a glossary, release downloads, a changelog, and a roadmap.

> **Authorization notice:** Codexa Scanner is intended for systems and networks you own or are explicitly authorized to assess. Follow applicable laws and the target owner’s rules before using any scanning feature.

## What’s in this repository?

- **Guides:** step-by-step documentation for the scanner’s modules
- **Features:** Port Scanner, Web Audit, Subdomain Discovery, Path Fuzzer, TLS Inspector, DNS Intelligence, IP Information, and History & Reports
- **Downloads:** release installation instructions for Linux, Windows, and macOS
- **Reference:** glossary, changelog, and roadmap
- **Site:** a Next.js application built with React, TypeScript, Tailwind CSS, and shadcn/ui components

## Requirements

- [Bun](https://bun.sh/) (the repository uses `bun.lock`)
- Node.js 20.9 or newer (required by the configured Next.js 16 release)

## Run locally

```bash
git clone https://github.com/hidecard/codexa-scanner-docs.git
cd codexa-scanner-docs
bun install --frozen-lockfile
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Useful commands:

```bash
bun run lint
bun run build
```

The production build prepares a standalone Next.js output. Use the repository’s deployment configuration when running the generated server; the `start` script expects Bun.

## Dependency and version notes

`package.json` is the source manifest and `bun.lock` is the committed dependency lockfile. When changing dependencies, run `bun install` with the project’s Bun version and commit both the manifest and the updated lockfile. Do not maintain a separate npm lockfile unless the project intentionally adopts npm as its package manager.

This repository contains the **documentation website**, not the Codexa Scanner desktop application’s Go/Wails source or a published npm library. The scanner’s release version shown on the download page is independent of this website’s private package version.

## Contributing

Please open an issue for documentation corrections or proposed changes, then submit a focused pull request. Keep instructions aligned with the current scanner release and avoid describing scans against systems without authorization.

## Related project

- [Codexa Scanner application and releases](https://github.com/hidecard/codexa-scanner)
