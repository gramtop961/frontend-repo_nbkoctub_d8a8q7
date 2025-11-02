import React from 'react';
import { ShieldCheck, User, Stars } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">About GetEHealth</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our mission is to make therapy accessible, private, and truly supportive. We connect you with licensed therapists for secure video, audio, and text-based sessions—designed to fit your life.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-10 w-10 rounded-xl bg-teal-500/10 grid place-items-center">
              <ShieldCheck className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">HIPAA-compliant & Encrypted</h3>
            <p className="mt-2 text-sm text-gray-600">Your privacy is our priority. All sessions are encrypted and adhere to HIPAA standards.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-10 w-10 rounded-xl bg-sky-500/10 grid place-items-center">
              <User className="h-5 w-5 text-sky-600" />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">Licensed Professionals</h3>
            <p className="mt-2 text-sm text-gray-600">Work with certified, experienced therapists ready to support your goals.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 grid place-items-center">
              <Stars className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="mt-4 font-medium text-gray-900">What’s Coming</h3>
            <p className="mt-2 text-sm text-gray-600">Smart matching, personal dashboards, and subscription plans—care that grows with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
