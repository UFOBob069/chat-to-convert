import { Bell, CheckSquare, Code2, MessageSquareText, Workflow } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Add one script to your website",
    body: "Paste a single snippet in your site header or tag manager — no heavy install.",
    icon: Code2,
  },
  {
    step: 2,
    title: "Visitor starts a guided chat",
    body: "Instead of a blank box, visitors answer clear questions that match how you sell.",
    icon: MessageSquareText,
  },
  {
    step: 3,
    title: "Lead is qualified automatically",
    body: "Capture urgency, service type, and contact details so your team can prioritize in seconds.",
    icon: Workflow,
  },
  {
    step: 4,
    title: "Your team gets an instant alert",
    body: "Route to email, SMS, Slack, or your CRM so the right person can respond in minutes.",
    icon: Bell,
  },
];

const platforms = [
  "WordPress",
  "Webflow",
  "Squarespace",
  "Shopify",
  "Custom websites",
  "Any site that allows a script tag",
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-slate-100 bg-slate-50/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          From first visit to routed lead in four straightforward steps.
        </p>
        <ol className="relative mt-12 grid gap-6 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-8 right-8 top-6 hidden h-0.5 bg-linear-to-r from-teal-200 via-teal-300 to-teal-200 lg:block" />
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-lg font-bold text-white">
                  {s.step}
                </div>
                <s.icon className="h-5 w-5 text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-700">
                  {s.step === 1 && (
                    <div>
                      <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                        Example only — your real snippet comes from the dashboard
                      </p>
                      <code className="block whitespace-pre-wrap break-all rounded-md bg-slate-900 p-2 font-mono text-[11px] leading-relaxed text-slate-100 sm:text-xs">
                        {`<script
  src="https://cdn.example.com/widget.js"
  data-client-id="YOUR_CLIENT_ID"
  async>
</script>`}
                      </code>
                    </div>
                  )}
                  {s.step === 2 && (
                    <div className="space-y-1">
                      <p className="rounded-md bg-white px-2 py-1">Hi! What service do you need?</p>
                      <p className="rounded-md bg-teal-50 px-2 py-1 text-teal-900">AC repair</p>
                    </div>
                  )}
                  {s.step === 3 && (
                    <div className="space-y-1">
                      <p className="flex items-center gap-2">
                        <CheckSquare className="h-3.5 w-3.5 text-teal-600" />
                        Urgency: Same-day
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckSquare className="h-3.5 w-3.5 text-teal-600" />
                        Service: Emergency repair
                      </p>
                    </div>
                  )}
                  {s.step === 4 && (
                    <p className="rounded-md bg-white px-2 py-1">
                      New lead alert sent to SMS + Slack in under 10 seconds.
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Works on
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <li
                key={p}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
