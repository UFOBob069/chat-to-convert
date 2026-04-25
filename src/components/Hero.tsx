import Link from "next/link";
import { ArrowRight, CircleDollarSign, Dot, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-slate-100 bg-[radial-gradient(circle_at_top_center,#ecfeff_0,#ffffff_50%,#f8fafc_100%)] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-200/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-size-[28px_28px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-teal-300/60 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800 shadow-sm">
            <CircleDollarSign className="h-3.5 w-3.5" />
            Most service businesses lose 30–70% of website leads
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Turn Website Visitors Into Booked Jobs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Capture, qualify, and route high-intent leads instantly - even after
            hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#live-chat-demo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-900/25 transition hover:-translate-y-0.5 hover:bg-accent-hover"
            >
              Try the Live Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-5 text-sm font-medium text-slate-700">
            👉 Ask a question in the chat to see how it works
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Works on WordPress, Webflow, Squarespace, Shopify, and custom sites
            — anywhere you can add a script tag.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-32 rounded-full bg-teal-200/30 blur-3xl" />
            <div className="relative flex items-center justify-between border-b border-slate-100 pb-4">
              <p className="text-sm font-semibold text-slate-900">
                Lead activity feed
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-700">
                <Sparkles className="h-3.5 w-3.5" />
                System running
              </span>
            </div>
            <div className="relative mt-4 space-y-3">
              <div className="animate-[fadeInUp_0.5s_ease-out] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">
                  New Lead: AC Repair <span className="text-rose-600">(Urgent)</span>
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Routed to: John - SMS sent
                </p>
              </div>
              <div className="animate-[fadeInUp_0.7s_ease-out] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">New Lead: Roof Leak</p>
                <p className="mt-1 text-sm text-slate-600">
                  Qualified: Insurance Claim - High Value
                </p>
              </div>
              <div className="animate-[fadeInUp_0.9s_ease-out] rounded-2xl border border-dashed border-teal-300 bg-teal-50/50 p-4">
                <p className="flex items-center text-sm text-teal-900">
                  <Dot className="h-6 w-6 animate-pulse" />
                  More leads syncing in real time...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
