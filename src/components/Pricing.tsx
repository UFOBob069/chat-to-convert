import Link from "next/link";
import { Check } from "lucide-react";

const included = [
  "Embeddable chat widget",
  "Custom intake flow",
  "Lead alerts",
  "Source tracking",
  "Monthly performance summary",
  "Setup support included",
  "Cancel anytime",
  "No contracts",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Simple pricing
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Straightforward monthly pricing. Client Success helps you launch and
          tune your intake flow.
        </p>
        <div className="mx-auto mt-12 max-w-lg">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
              Plan
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-900">Starter</p>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-bold tracking-tight text-slate-900">
                $300
              </span>
              <span className="text-slate-600">/month</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-teal-700">
              Less than the value of one service call for most teams.
            </p>
            <ul className="mt-8 space-y-3">
              {included.map((line) => (
                <li key={line} className="flex gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" strokeWidth={2} />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#lead-form"
              className="mt-8 flex w-full items-center justify-center rounded-full bg-accent py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-teal-900/20 transition hover:bg-accent-hover"
            >
              Connect with Client Success
            </Link>
            <p className="mt-5 text-center text-sm text-slate-600">
              If this helps you close just one additional job, it can pay for itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
