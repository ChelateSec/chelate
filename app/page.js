import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Don't let your workflows work against you
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your CI/CD pipelines hold the keys to your kingdom. AI agents now run there too,
              reading untrusted text and acting with real tokens. <strong className="text-gray-900">Breaches aren't an option.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-primary-700 transition-colors text-sm"
              >
                Get Started
              </Link>
              <Link
                href="https://github.com/chelate-dev/shrike"
                target="_blank"
                className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Code Demo */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="text-primary-400 mb-2">$ shrike scan .</div>
            <div className="text-gray-500 mb-4">Scanning workflows...</div>
            <div className="text-red-400 mb-1">CRITICAL: Pwn request detected</div>
            <div className="text-gray-400 ml-4 mb-3">
              → .github/workflows/pr-check.yml:12<br/>
              → Anyone can trigger, no approval needed
            </div>
            <div className="text-yellow-400 mb-1">HIGH: AI agent with untrusted input</div>
            <div className="text-gray-400 ml-4 mb-4">
              → .github/workflows/triage-bot.yml:8<br/>
              → Reads issue body, has GITHUB_TOKEN write access
            </div>
            <div className="text-gray-300">Found 2 exploitable workflows</div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Your pipelines are the easiest way in
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              CI/CD workflows hold cloud credentials, publishing tokens, and write access to code.
              Two things make this worse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                GitHub Actions are easy to break
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pwn requests, script injection, over-broad tokens, and secrets reachable by outsiders
                keep showing up in major projects. Existing scanners report long lists of "risks,"
                most not exploitable, so teams ignore them.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                AI agents run inside CI now
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                They triage issues, review PRs, and fix bugs. They read untrusted text and act with real tokens.
                One hidden instruction can make an agent leak secrets, push to main, or publish a package.
                No existing tool understands that an agent is acting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Security that ships with your code
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Shrike tells you which workflows an attacker can actually exploit today,
              and shows you what your AI agents do in CI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">
                Exploitability, not patterns
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every finding answers: who can trigger it, what must be true first, what the attacker gets.
                The same pattern can be critical in one workflow and low in another.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">
                Built for AI agents
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Shrike traces untrusted text to agent to privileged action, both statically and at runtime.
                It links every agent action to the input that caused it.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-base font-semibold mb-3 text-gray-900">
                Researcher-grade signal
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Rules come from real vulnerabilities and bug bounty experience.
                Few, precise findings beat many noisy ones. No false alarms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Three commands. Complete visibility.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="font-mono text-sm text-primary-600 mb-3">$ shrike scan</div>
              <h3 className="text-base font-semibold mb-2">Find exploitable workflows</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Works on local checkouts or remote GitHub repos.
                Reports only what an attacker can actually exploit today.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="font-mono text-sm text-primary-600 mb-3">$ shrike fix</div>
              <h3 className="text-base font-semibold mb-2">Apply safe fixes</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pin actions to SHAs, add minimal permissions, move untrusted expressions.
                See the diff with --dry-run.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 bg-white">
              <div className="font-mono text-sm text-primary-600 mb-3">$ shrike guard</div>
              <h3 className="text-base font-semibold mb-2">Monitor AI agents</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Audit-only runtime monitor. Records what agents read and did,
                flags hidden instructions and secret exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source + Enterprise */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-8 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Open Source Forever
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Anything one developer needs to secure one repo is free and open source.
                Apache 2.0 licensed.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Scan local and remote repos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Automated fixes with --dry-run</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Audit-only runtime monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>GitHub Action for CI scanning</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-300 rounded-lg p-8 bg-white">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                Shrike for Organizations
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Org-wide enforcement, runtime blocking, and compliance.
                Control every repo without opt-in.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Runtime blocking for AI agents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Scoped short-lived tokens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Central org-wide policy engine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>Dashboard, SSO, audit logs, SIEM export</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-600 mr-2">✓</span>
                  <span>SOC 2, ISO 27001, SLSA compliance</span>
                </li>
              </ul>
              <button className="bg-gray-900 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors w-full">
                Request Enterprise Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="get-started" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Start securing your pipelines today
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Install Shrike in under a minute. No runtime dependencies, works offline.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm mb-8 overflow-x-auto">
            <div className="text-gray-500 mb-2"># macOS / Linux</div>
            <div className="text-gray-200 mb-4">$ brew install chelate-dev/tap/shrike</div>

            <div className="text-gray-500 mb-2"># Or download directly</div>
            <div className="text-gray-200 mb-4">$ curl -L https://github.com/chelate-dev/shrike/releases/latest/download/shrike-linux-amd64 -o shrike</div>

            <div className="text-gray-500 mb-2"># Scan your repo</div>
            <div className="text-gray-200">$ shrike scan .</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://github.com/chelate-dev/shrike"
              target="_blank"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-primary-700 transition-colors text-sm"
            >
              View Documentation
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-2.5 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
