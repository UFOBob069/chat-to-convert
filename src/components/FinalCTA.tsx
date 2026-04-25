import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-b border-slate-100 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Stop Letting High-Value Leads Slip Away
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          Capture, qualify, and convert your next website visitor while they’re
          still ready to book.
        </p>
        <Link
          href="#live-chat-demo"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-teal-50"
        >
          Try the Live Demo
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
