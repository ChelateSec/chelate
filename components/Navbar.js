'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">Chelate</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </Link>
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Blog
            </Link>
            <Link
              href="https://github.com/chelate-dev/shrike"
              target="_blank"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/#get-started"
              className="bg-primary-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">
                Features
              </Link>
              <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-gray-900">
                How It Works
              </Link>
              <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="https://github.com/chelate-dev/shrike" target="_blank" className="text-sm text-gray-600 hover:text-gray-900">
                GitHub
              </Link>
              <Link href="/#get-started" className="text-sm text-gray-600 hover:text-gray-900">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
