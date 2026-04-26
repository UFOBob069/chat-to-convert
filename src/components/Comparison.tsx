import { Check, X } from "lucide-react";

const basic = [
  "Waits for users to type",
  "Generic responses",
  "No lead scoring",
  "No routing logic",
  "Easy to ignore",
];

const ours = [
  "Guided questions",
  "Captures contact info",
  "Qualifies urgency and job type",
  "Alerts your team instantly",
  "Helps turn visitors into booked jobs",
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="scroll-mt-20 border-b border-slate-100 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          More Than a Basic Chat Widget
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Jobs to Close is built around outcomes your P&amp;L cares about — not
          vanity message counts.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-800">
              Basic chat widget
            </h3>
            <ul className="mt-6 space-y-4">
              {basic.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                    <X className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-white to-accent-soft/40 p-6 shadow-lg shadow-teal-900/5 sm:p-8">
            <h3 className="text-lg font-semibold text-teal-950">Jobs to Close</h3>
            <ul className="mt-6 space-y-4">
              {ours.map((item) => (
                <li key={item} className="flex gap-3 text-slate-800">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
