'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-dark-900">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">II</span>
                </div>
                <span className="font-bold text-xl hidden sm:inline text-dark-900 dark:text-white">
                  IINTEKKU
                </span>
              </Link>

              {/* Menu Links */}
              <div className="hidden md:flex space-x-8">
                <Link
                  href="/"
                  className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
                >
                  Home
                </Link>
                <Link
                  href="/clock"
                  className="text-dark-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition"
                >
                  Clock
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 text-dark-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-700 rounded"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-dark-900 dark:bg-black text-white border-t border-dark-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">IINTEKKU Group</h3>
                <p className="text-gray-400">Execution. Efficiency. Partnership. Results.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white transition">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/clock" className="hover:text-white transition">
                      Clock
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-gray-400">info@iintekkugroup.org</p>
              </div>
            </div>

            <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2026 IINTEKKU Group. All rights reserved. Together, We Shall Thrive.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
