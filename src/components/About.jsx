import React from 'react';
import { ShieldCheck, User, Calendar, Lock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Anonymous & Secure */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">100% Anonymous and Secure</h2>
          <div className="mt-4 space-y-3 text-gray-600 leading-relaxed">
            <p>You never have to share your identity if you don’t want to. All sessions are completely private and encrypted.</p>
            <p>GetEHealth was built around trust, not exposure — your comfort and confidentiality come first.</p>
            <p>We never share or sell user data, and all communications are HIPAA-compliant.</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 ring-1 ring-teal-200 text-teal-800"><ShieldCheck className="h-4 w-4" /> HIPAA compliant</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 ring-1 ring-sky-200 text-sky-800"><Lock className="h-4 w-4" /> End-to-end encryption</span>
          </div>
        </div>

        {/* Therapy for Everyone */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">Support for Every Stage of Life</h3>
            <div className="mt-3 space-y-3 text-gray-600">
              <p>GetEHealth serves all age groups — from teens to adults and seniors — with therapists specialized in age-specific needs.</p>
              <p>We match users with certified professionals trained in various areas, including stress, anxiety, depression, relationships, grief, trauma, and more.</p>
              <p>No matter your background or challenge, there’s a therapist ready to help you grow.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900">No Judgment, Just Support</h3>
            <div className="mt-3 space-y-3 text-gray-600">
              <p>Our platform was designed to be a safe space for everyone. Whether you’re facing major life challenges or just need someone to talk to, our therapists listen without bias.</p>
              <p>We believe mental health care should always be free from stigma, shame, or judgment.</p>
            </div>
          </div>
        </div>

        {/* Certified and Consistent Care */}
        <div className="mt-16 rounded-2xl border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Certified Therapists, Consistent Help</h3>
          <div className="mt-3 space-y-3 text-gray-600">
            <p>All GetEHealth therapists are certified professionals with verified credentials and years of experience.</p>
            <p>You’ll work with the same therapist throughout your journey for consistent, reliable support.</p>
            <p>Our approach focuses on building long-term, meaningful progress through regular, structured sessions.</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900">How It Works</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="h-10 w-10 rounded-xl bg-teal-500/10 grid place-items-center">
                <User className="h-5 w-5 text-teal-600" />
              </div>
              <p className="mt-3 font-medium text-gray-900">1. Choose Your Therapist Preference</p>
              <p className="mt-1 text-sm text-gray-600">Select male, female, or no preference.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 grid place-items-center">
                <Calendar className="h-5 w-5 text-sky-600" />
              </div>
              <p className="mt-3 font-medium text-gray-900">2. Book a Session</p>
              <p className="mt-1 text-sm text-gray-600">Instantly schedule a time that works for you (via Calendly for now).</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 grid place-items-center">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <p className="mt-3 font-medium text-gray-900">3. Start Your Journey</p>
              <p className="mt-1 text-sm text-gray-600">Meet privately and securely from anywhere.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ready to Begin?</h3>
          <p className="mt-3 text-gray-600">Take the first step toward a better you. Completely private. Always on your schedule.</p>
          <div className="mt-6">
            <a href="#start" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              Find a Therapist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
