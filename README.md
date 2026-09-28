# Chelate Website

Official website for Chelate - Securing AI Agents in CI/CD pipelines.

## Overview

Chelate finds exploitable workflows and shows what your AI agents do in CI. This repository contains the source code for the Chelate marketing website, built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern, responsive design inspired by developer-first security tools
- 📝 Blog section with MDX support
- ⚡ Fast and optimized with Next.js 14
- 🎯 SEO-friendly with proper meta tags
- 🚀 Easy deployment to Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Blog**: MDX support for rich content
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

\`\`\`bash
# Create production build
npm run build

# Start production server
npm start
\`\`\`

## Project Structure

\`\`\`
chelate/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── [slug]/       # Individual blog posts
│   │   └── page.js       # Blog listing
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Homepage
├── components/            # Reusable components
│   ├── Footer.js
│   └── Navbar.js
├── public/               # Static assets
└── package.json
\`\`\`

## Deployment

This site is designed to be deployed on Vercel:

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/weshinew/chelate)

## About Chelate

Chelate is building security tools for the age of AI-powered CI/CD:

- **Shrike** (Open Source): CLI tool to find exploitable workflows and monitor AI agents
- **Shrike for Organizations**: Enterprise-grade runtime protection and compliance

Visit [chelate.dev](https://chelate.dev) to learn more.

## License

Website code is MIT licensed. See [LICENSE](LICENSE) for details.

## Contact

- GitHub: [@chelate-dev](https://github.com/chelate-dev)
- Email: hello@chelate.dev
- Twitter: [@chelate_dev](https://twitter.com/chelate_dev)

---

**Security that ships with your code. Because breaches aren't an option.**
