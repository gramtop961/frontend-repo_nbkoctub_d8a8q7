import React, { useState } from 'react';
import { Shield, Lock, Calendar } from 'lucide-react';

function SelectionModal({ open, onClose }) {
  if (!open) return null;

  const options = [
    {
      label: 'Male Therapist',
      href: 'https://calendly.com/sample-male-therapist/consultation',
    },
    {
      label: 'Female Therapist',
      href: 'https://calendly.com/sample-female-therapist/consultation',
    },
    {
      label: 'No Preference',
      href: 'https://calendly.com/sample-any-therapist/consultation',
    },
  ];

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-9 w-9 rounded-xl bg-teal-500/10 grid place-items-center">
            <Calendar className="h-5 w-5 text-teal-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Select a preference</h3>
            <p className="text-sm text-gray-600">You’ll be redirected to Calendly to book your session.</p>
          </div>
        </div>

        <div className="space-y-3">
          {options.map((opt) => (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-gray-900 hover:border-teal-300 hover:bg-teal-50/50 transition"
            >
              {opt.label}
            </a>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          Note: Internal booking system coming soon.
        </p>

        <button onClick={onClose} className="mt-4 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
          Close
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section id="start" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-teal-200">
            <Shield className="h-3.5 w-3.5" /> HIPAA-compliant & encrypted
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Your Mental Health, Your Space.
          </h1>
          <p className="mt-4 text-lg text-gray-700">Connect with certified therapists — privately, safely, and on your terms.</p>
          <p className="mt-3 text-gray-600 leading-relaxed max-w-prose">
            GetEHealth provides accessible, judgment-free online therapy sessions for individuals of all backgrounds and age groups.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Find a Therapist
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4" />
              <span>Private. Secure. On your terms.</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-sky-50 to-teal-50 p-4">
                <p className="text-sm font-medium text-gray-900">Video Sessions</p>
                <p className="mt-1 text-xs text-gray-600">Face-to-face from anywhere</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
                <p className="text-sm font-medium text-gray-900">Audio Calls</p>
                <p className="mt-1 text-xs text-gray-600">Talk when it suits you</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-gray-50 to-sky-50 p-4">
                <p className="text-sm font-medium text-gray-900">Text Therapy</p>
                <p className="mt-1 text-xs text-gray-600">Message-based support</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-4">
                <p className="text-sm font-medium text-gray-900">Licensed Pros</p>
                <p className="mt-1 text-xs text-gray-600">Certified & experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SelectionModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
