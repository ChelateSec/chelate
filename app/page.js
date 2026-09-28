import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-chelate-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-chelate-ink mb-6 leading-tight">
                Don't let your workflows work{' '}
                <span className="text-gradient">against you</span>
              </h1>
              <p className="text-xl text-chelate-ink/80 mb-8 leading-relaxed">
                Your CI/CD pipelines hold the keys to your kingdom.
                AI agents now run there too, reading untrusted text and acting with real tokens.
                <strong className="text-chelate-purple-700"> Breaches aren't an option.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#get-started"
                  className="bg-chelate-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-chelate-purple-700 transition-all hover:scale-105 text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  href="https://github.com/chelate-dev/shrike"
                  target="_blank"
                  className="border-2 border-chelate-purple-600 text-chelate-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-chelate-purple-50 transition-all text-center"
                >
                  View on GitHub
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-chelate-purple-900 rounded-lg p-6 font-mono text-sm shadow-2xl glow-purple">
                <div className="text-chelate-orange-400 mb-2">$ shrike scan .</div>
                <div className="text-chelate-cream/60 mb-4">Scanning workflows...</div>
                <div className="text-red-400">⚠️  CRITICAL: Pwn request detected</div>
                <div className="text-chelate-cream/60 ml-4 mb-2">→ .github/workflows/pr-check.yml:12</div>
                <div className="text-chelate-cream/60 ml-4 mb-4">→ Anyone can trigger, no approval needed</div>
                <div className="text-yellow-400">⚠️  HIGH: AI agent with untrusted input</div>
                <div className="text-chelate-cream/60 ml-4 mb-2">→ .github/workflows/triage-bot.yml:8</div>
                <div className="text-chelate-cream/60 ml-4 mb-4">→ Reads issue body, has GITHUB_TOKEN write access</div>
                <div className="text-chelate-cream mt-4">Found 2 exploitable workflows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-chelate-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-chelate-ink mb-4">
              Your pipelines are the easiest way in
            </h2>
            <p className="text-xl text-chelate-ink/80 max-w-3xl mx-auto">
              CI/CD workflows hold cloud credentials, publishing tokens, and write access to code.
              Two things make this worse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-chelate-orange-600 text-4xl mb-4">🔓</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-chelate-ink">
                GitHub Actions are easy to break
              </h3>
              <p className="text-chelate-ink/80 leading-relaxed">
                Pwn requests, script injection, over-broad tokens, and secrets reachable by outsiders
                keep showing up in major projects. Existing scanners report long lists of "risks,"
                most not exploitable, so teams ignore them.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-chelate-purple-600 text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-chelate-ink">
                AI agents run inside CI now
              </h3>
              <p className="text-chelate-ink/80 leading-relaxed">
                They triage issues, review PRs, and fix bugs. They read untrusted text and act with real tokens.
                One hidden instruction can make an agent leak secrets, push to main, or publish a package.
                No existing tool understands that an agent is acting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-chelate-ink mb-4">
              Security that ships with your code
            </h2>
            <p className="text-xl text-chelate-ink/80 max-w-3xl mx-auto">
              Shrike tells you which workflows an attacker can actually exploit today,
              and shows you what your AI agents do in CI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 border-2 border-chelate-purple-200 hover:border-chelate-purple-400 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4 text-chelate-purple-700">
                Exploitability, not patterns
              </h3>
              <p className="text-chelate-ink/80 leading-relaxed">
                Every finding answers: who can trigger it, what must be true first, what the attacker gets.
                The same pattern can be critical in one workflow and low in another.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-chelate-purple-200 hover:border-chelate-purple-400 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4 text-chelate-purple-700">
                Built for AI agents
              </h3>
              <p className="text-chelate-ink/80 leading-relaxed">
                Shrike traces untrusted text → agent → privileged action, both statically and at runtime.
                It links every agent action to the input that caused it.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-2 border-chelate-purple-200 hover:border-chelate-purple-400 transition-all">
              <h3 className="text-xl font-serif font-bold mb-4 text-chelate-purple-700">
                Researcher-grade signal
              </h3>
              <p className="text-chelate-ink/80 leading-relaxed">
                Rules come from real vulnerabilities and bug bounty experience.
                Few, precise findings beat many noisy ones. No false alarms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-chelate-purple-900 text-chelate-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Three commands. Complete visibility.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-chelate-purple-800 rounded-lg p-8">
              <div className="font-mono text-chelate-orange-400 text-lg mb-4">$ shrike scan</div>
              <h3 className="text-xl font-serif font-bold mb-4">Find exploitable workflows</h3>
              <p className="text-chelate-cream/80 leading-relaxed">
                Works on local checkouts or remote GitHub repos.
                Reports only what an attacker can actually exploit today.
              </p>
            </div>

            <div className="bg-chelate-purple-800 rounded-lg p-8">
              <div className="font-mono text-chelate-orange-400 text-lg mb-4">$ shrike fix</div>
              <h3 className="text-xl font-serif font-bold mb-4">Apply safe fixes</h3>
              <p className="text-chelate-cream/80 leading-relaxed">
                Pin actions to SHAs, add minimal permissions, move untrusted expressions.
                See the diff with --dry-run.
              </p>
            </div>

            <div className="bg-chelate-purple-800 rounded-lg p-8">
              <div className="font-mono text-chelate-orange-400 text-lg mb-4">$ shrike guard</div>
              <h3 className="text-xl font-serif font-bold mb-4">Monitor AI agents</h3>
              <p className="text-chelate-cream/80 leading-relaxed">
                Audit-only runtime monitor. Records what agents read and did,
                flags hidden instructions and secret exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source + Enterprise */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-chelate-purple-50 rounded-lg p-10 border-2 border-chelate-purple-200">
              <div className="text-chelate-purple-600 text-3xl mb-4">🔓</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-chelate-ink">
                Open Source Forever
              </h3>
              <p className="text-chelate-ink/80 mb-6 leading-relaxed">
                Anything one developer needs to secure one repo is free and open source.
                Apache 2.0 licensed.
              </p>
              <ul className="space-y-3 text-chelate-ink/80">
                <li className="flex items-start">
                  <span className="text-chelate-purple-600 mr-2">✓</span>
                  <span>Scan local and remote repos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-purple-600 mr-2">✓</span>
                  <span>Automated fixes with --dry-run</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-purple-600 mr-2">✓</span>
                  <span>Audit-only runtime monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-purple-600 mr-2">✓</span>
                  <span>GitHub Action for CI scanning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-10 border-2 border-chelate-orange-400 shadow-lg">
              <div className="text-chelate-orange-600 text-3xl mb-4">🏢</div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-chelate-ink">
                Shrike for Organizations
              </h3>
              <p className="text-chelate-ink/80 mb-6 leading-relaxed">
                Org-wide enforcement, runtime blocking, and compliance.
                Control every repo without opt-in.
              </p>
              <ul className="space-y-3 text-chelate-ink/80">
                <li className="flex items-start">
                  <span className="text-chelate-orange-600 mr-2">✓</span>
                  <span>Runtime blocking for AI agents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-orange-600 mr-2">✓</span>
                  <span>Scoped short-lived tokens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-orange-600 mr-2">✓</span>
                  <span>Central org-wide policy engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-orange-600 mr-2">✓</span>
                  <span>Dashboard, SSO, audit logs, SIEM export</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chelate-orange-600 mr-2">✓</span>
                  <span>SOC 2, ISO 27001, SLSA compliance</span>
                </li>
              </ul>
              <button className="mt-8 bg-chelate-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-chelate-orange-700 transition-colors w-full">
                Request Enterprise Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="bg-chelate-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-chelate-ink mb-6">
            Start securing your pipelines today
          </h2>
          <p className="text-xl text-chelate-ink/80 mb-8">
            Install Shrike in under a minute. No runtime dependencies, works offline.
          </p>

          <div className="bg-chelate-purple-900 rounded-lg p-8 text-left mb-8">
            <div className="font-mono text-chelate-cream">
              <div className="text-chelate-orange-400 mb-2"># macOS / Linux</div>
              <div className="mb-4">$ brew install chelate-dev/tap/shrike</div>

              <div className="text-chelate-orange-400 mb-2"># Or download directly</div>
              <div className="mb-4">$ curl -L https://github.com/chelate-dev/shrike/releases/latest/download/shrike-linux-amd64 -o shrike</div>

              <div className="text-chelate-orange-400 mb-2"># Scan your repo</div>
              <div>$ shrike scan .</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://github.com/chelate-dev/shrike"
              target="_blank"
              className="bg-chelate-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-chelate-purple-700 transition-colors"
            >
              View Documentation
            </Link>
            <Link
              href="/blog"
              className="border-2 border-chelate-purple-600 text-chelate-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-chelate-purple-50 transition-colors"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
