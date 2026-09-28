import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-chelate-purple-900 text-chelate-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Chelate</h3>
            <p className="text-chelate-cream/80 mb-4">
              Securing AI agents in CI/CD pipelines. Because breaches aren't an option.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/chelate-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/chelate_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="https://github.com/chelate-dev/shrike" target="_blank" className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="mailto:hello@chelate.dev" className="text-chelate-cream/80 hover:text-chelate-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chelate-purple-800 mt-8 pt-8 text-center text-chelate-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Chelate. Open source security for CI/CD.</p>
        </div>
      </div>
    </footer>
  )
}
