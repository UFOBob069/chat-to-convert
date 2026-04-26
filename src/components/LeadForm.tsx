"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

const industries = [
  "HVAC",
  "Plumbing",
  "Roofing",
  "Electrical",
  "Water damage / restoration",
  "Pest control",
  "Garage door",
  "Remodeling / contractor",
  "Other home services",
  "Med spa (secondary)",
  "Dental practice (secondary)",
  "Agency / marketing partner",
  "Other",
];

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  }

  return (
    <section
      id="lead-form"
      className="scroll-mt-20 bg-slate-50/80 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Connect with Client Success to get started
        </h2>
        <p className="mt-2 text-center text-slate-600">
          Tell us about your business. A member of Client Success will reach out
          with next steps — no spam, no hard sell.
        </p>
        <p className="mt-1 text-center text-sm font-medium text-teal-700">
          Takes 30 seconds.
        </p>
        {submitted ? (
          <div className="mt-10 flex flex-col items-center rounded-2xl border border-teal-200 bg-white p-10 text-center shadow-sm">
            <CheckCircle2 className="h-14 w-14 text-teal-600" strokeWidth={1.5} />
            <p className="mt-4 text-lg font-semibold text-slate-900">
              Request received
            </p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Thanks for your interest in Job To Close. Client Success will
              contact you shortly to get you started.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none ring-teal-500/0 transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="Alex Rivera"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                  Business name
                </span>
                <input
                  required
                  name="business"
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="Northside Heating & Cooling"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Website</span>
                <input
                  name="website"
                  type="url"
                  inputMode="url"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="https://"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="you@company.com"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Phone</span>
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="(555) 000-0000"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">Industry</span>
                <select
                  required
                  name="industry"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your industry
                  </option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                  Monthly website leads (estimate)
                </span>
                <select
                  name="leadVolume"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Rough range is fine
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="11-30">11–30</option>
                  <option value="31-75">31–75</option>
                  <option value="76+">76+</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                  Current chat or intake tool
                </span>
                <input
                  name="currentTool"
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-slate-900 shadow-sm outline-none transition focus:border-teal-400 focus:ring-4 focus:ring-teal-500/15"
                  placeholder="e.g. web form only, Intercom, none"
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                "Send to Client Success"
              )}
            </button>
            <p className="text-center text-xs text-slate-500">
              We’ll only use this information to connect you with Client Success.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
