import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were bleeding after-hours AC calls. Now every urgent lead hits Slack with context before the homeowner moves on to the next company.",
    name: "Daniel R.",
    title: "Owner",
    company: "Northline Heating & Cooling",
    trade: "HVAC",
  },
  {
    quote:
      "Dispatch finally gets job type and urgency up front. Fewer ‘what’s your address again?’ callbacks, and our close rate on web leads went up the first month.",
    name: "Priya M.",
    title: "Operations Manager",
    company: "ClearFlow Plumbing",
    trade: "Plumbing",
  },
  {
    quote:
      "Storm season used to mean chaos in the inbox. The guided intake sorts real damage from tire-kickers, and our estimators call the right people first.",
    name: "James K.",
    title: "General Manager",
    company: "PeakGuard Roofing",
    trade: "Roofing",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 border-b border-slate-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Customer stories
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Teams that live and die by the phone trust the workflow
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            What we hear from teams who needed speed, clearer handoffs, and fewer
            dropped website leads.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <Quote className="mt-4 h-8 w-8 text-teal-600/40" strokeWidth={1.5} />
              <blockquote className="mt-3 flex-1 text-base leading-relaxed text-slate-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">
                  {t.title}, {t.company}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {t.trade}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
