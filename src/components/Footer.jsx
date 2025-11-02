import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-teal-500 to-sky-500" />
              <span className="text-lg font-semibold text-gray-900">GetEHealth</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 max-w-md">
              Calm, private, and professional online therapy. Because getting help should be simple.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a id="privacy" href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
            <a href="mailto:hello@getehealth.com" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} GetEHealth. All rights reserved.</p>
      </div>
    </footer>
  );
}
