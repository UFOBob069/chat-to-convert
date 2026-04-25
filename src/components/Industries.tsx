import {
  Bug,
  CloudLightning,
  Droplets,
  Hammer,
  Home,
  Plug,
  Truck,
  Wrench,
} from "lucide-react";

const industries = [
  {
    name: "HVAC",
    icon: CloudLightning,
    before: "Missed urgent AC repair requests at night",
    after: "Capture and respond to emergency jobs instantly",
  },
  {
    name: "Plumbing",
    icon: Droplets,
    before: "New requests blend together with low urgency inquiries",
    after: "Triage burst pipes vs routine jobs before dispatch",
  },
  {
    name: "Roofing",
    icon: Home,
    before: "Low-quality storm leads fill the pipeline",
    after: "Pre-qualify high-value jobs and route them quickly",
  },
  {
    name: "Electrical",
    icon: Plug,
    before: "Safety-critical inquiries wait in a generic inbox",
    after: "Flag high-priority electrical calls for immediate follow-up",
  },
  {
    name: "Restoration",
    icon: Truck,
    before: "Late response times on water and fire emergencies",
    after: "Capture urgent details and notify your on-call team fast",
  },
  {
    name: "Pest control",
    icon: Bug,
    before: "Incomplete requests lead to extra back-and-forth",
    after: "Collect issue type and property details on first touch",
  },
  {
    name: "Contractors",
    icon: Hammer,
    before: "Unqualified remodel inquiries waste estimator time",
    after: "Filter for project fit, scope, and timeline early",
  },
  {
    name: "Home services agencies",
    icon: Wrench,
    before: "Lead quality and response speed vary by client account",
    after: "Standardize intake and route leads by client and service",
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 border-b border-slate-100 bg-slate-50/50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Built for Businesses Where Speed Wins
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Home services are the core. Med spas and dental practices can use the
          same guided intake for high-value bookings — without overpromising on
          regulated advice.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((i) => (
            <div
              key={i.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <i.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{i.name}</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Before
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{i.before}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-teal-700">
                After
              </p>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-800">
                {i.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
