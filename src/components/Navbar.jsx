import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500" />
          <span className="text-xl font-semibold tracking-tight text-gray-900">GetEHealth</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
          <a href="#privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
        </nav>
      </div>
    </header>
  );
}
