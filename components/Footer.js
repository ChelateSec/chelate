import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-base font-semibold mb-3">Chelate</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-sm">
              Securing AI agents in CI/CD pipelines. Security that ships with your code.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/chelate-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/chelate_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="https://github.com/chelate-dev/shrike" target="_blank" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="mailto:hello@chelate.dev" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Chelate. Open source security for CI/CD.</p>
        </div>
      </div>
    </footer>
  )
}
