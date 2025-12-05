'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-black z-50 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <span className="font-bold text-lg md:text-xl text-[#FF1493] tracking-tight">
              (ALMOST) ZERO MOTION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
            >
              <button className="text-sm font-semibold lowercase hover:text-[#FF1493] transition-colors flex items-center">
                shop
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl py-2">
                  <Link
                    href="/collections/walking-gear"
                    className="block px-4 py-2 hover:bg-[#FFE4F0] transition-colors text-sm"
                  >
                    walking gear 🚶‍♀️
                  </Link>
                  <Link
                    href="/collections/stretching-gear"
                    className="block px-4 py-2 hover:bg-[#FFE4F0] transition-colors text-sm"
                  >
                    stretching gear 🧘
                  </Link>
                  <Link
                    href="/collections/light-layers"
                    className="block px-4 py-2 hover:bg-[#FFE4F0] transition-colors text-sm"
                  >
                    light layers 🧥
                  </Link>
                  <Link
                    href="/collections/couch-mode"
                    className="block px-4 py-2 hover:bg-[#FFE4F0] transition-colors text-sm"
                  >
                    couch mode 🛋️
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 hover:bg-[#FFE4F0] transition-colors text-sm font-semibold"
                  >
                    all products
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/pages/the-science"
              className="text-sm font-semibold lowercase hover:text-[#FF1493] transition-colors"
            >
              the science
            </Link>
            <Link
              href="/pages/about"
              className="text-sm font-semibold lowercase hover:text-[#FF1493] transition-colors"
            >
              about
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop) */}
            <button className="hidden md:block hover:text-[#FF1493] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Account Icon (Desktop) */}
            <button className="hidden md:block hover:text-[#FF1493] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button className="relative hover:text-[#FF1493] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF1493] rounded-full text-white text-xs flex items-center justify-center font-bold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#FF1493]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="text-xs uppercase tracking-wide opacity-50 font-semibold">
                shop
              </div>
              <Link
                href="/collections/walking-gear"
                className="text-sm font-medium hover:text-[#FF1493] transition-colors pl-4"
              >
                walking gear 🚶‍♀️
              </Link>
              <Link
                href="/collections/stretching-gear"
                className="text-sm font-medium hover:text-[#FF1493] transition-colors pl-4"
              >
                stretching gear 🧘
              </Link>
              <Link
                href="/collections/light-layers"
                className="text-sm font-medium hover:text-[#FF1493] transition-colors pl-4"
              >
                light layers 🧥
              </Link>
              <Link
                href="/collections/couch-mode"
                className="text-sm font-medium hover:text-[#FF1493] transition-colors pl-4"
              >
                couch mode 🛋️
              </Link>
              <Link
                href="/shop"
                className="text-sm font-semibold hover:text-[#FF1493] transition-colors pl-4"
              >
                all products
              </Link>
              <div className="border-t border-gray-200 my-2"></div>
              <Link
                href="/pages/the-science"
                className="text-sm font-semibold hover:text-[#FF1493] transition-colors"
              >
                the science
              </Link>
              <Link
                href="/pages/about"
                className="text-sm font-semibold hover:text-[#FF1493] transition-colors"
              >
                about
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
