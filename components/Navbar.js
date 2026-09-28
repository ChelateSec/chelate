'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-chelate-cream/95 backdrop-blur-sm border-b border-chelate-purple-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-serif font-bold text-chelate-purple-700">Chelate</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-chelate-ink hover:text-chelate-purple-600 transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-chelate-ink hover:text-chelate-purple-600 transition-colors">
              How It Works
            </Link>
            <Link href="/blog" className="text-chelate-ink hover:text-chelate-purple-600 transition-colors">
              Blog
            </Link>
            <Link
              href="https://github.com/chelate-dev/shrike"
              target="_blank"
              className="text-chelate-ink hover:text-chelate-purple-600 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="/#get-started"
              className="bg-chelate-purple-600 text-white px-4 py-2 rounded-lg hover:bg-chelate-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-chelate-ink p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/#features" className="text-chelate-ink hover:text-chelate-purple-600">
                Features
              </Link>
              <Link href="/#how-it-works" className="text-chelate-ink hover:text-chelate-purple-600">
                How It Works
              </Link>
              <Link href="/blog" className="text-chelate-ink hover:text-chelate-purple-600">
                Blog
              </Link>
              <Link href="https://github.com/chelate-dev/shrike" target="_blank" className="text-chelate-ink hover:text-chelate-purple-600">
                GitHub
              </Link>
              <Link href="/#get-started" className="text-chelate-ink hover:text-chelate-purple-600">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
