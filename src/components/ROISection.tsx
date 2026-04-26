import { DollarSign, Flame, Home, Target } from "lucide-react";

const cards = [
  {
    title: "$500+ average service job",
    value: "$500+",
    icon: DollarSign,
    hint: "Typical repair or standard visit",
  },
  {
    title: "$1,000+ emergency job",
    value: "$1,000+",
    icon: Flame,
    hint: "After-hours and urgent calls",
  },
  {
    title: "$5,000+ major job",
    value: "$5,000+",
    icon: Home,
    hint: "Storm, water, and larger projects",
  },
  {
    title: "Positive ROI target",
    value: "1 extra job/month",
    icon: Target,
    hint: "One additional close can cover your cost",
  },
];

export default function ROISection() {
  return (
    <section
      id="roi"
      className="scroll-mt-20 border-b border-slate-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            One More Closed Job Can Pay For This
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            For HVAC, plumbing, roofing, restoration, and other high-value
            service businesses, one missed website lead can be worth hundreds or
            thousands of dollars. Jobs to Close helps capture and route those
            leads before they disappear.
          </p>
          <p className="mt-5 text-xl font-semibold text-slate-900">
            If Jobs to Close helps you close just 1 more job per month, it can
            more than pay for itself.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-teal-700">
                <c.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                {c.title}
              </p>
              <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900">
                {c.value}
              </p>
              <p className="mt-2 text-sm text-slate-600">{c.hint}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-slate-900 px-6 py-5 text-center text-white shadow-xl shadow-slate-900/20">
          <p className="text-xl font-bold sm:text-2xl">
            Close 1 more job → This pays for itself
          </p>
        </div>
        <p className="mt-8 text-sm text-slate-500">
          Actual results vary by business and follow-up speed.
        </p>
      </div>
    </section>
  );
}
