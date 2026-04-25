import {
  BellRing,
  ClipboardList,
  Moon,
  Route,
  Smartphone,
  Siren,
  TimerReset,
  UserRoundCheck,
  Waypoints,
} from "lucide-react";

const groups = [
  {
    title: "Capture",
    desc: "Turn more visitors into real conversations.",
    items: [
      { label: "Guided chat", icon: Waypoints },
      { label: "Mobile optimized", icon: Smartphone },
      { label: "After-hours coverage", icon: Moon },
    ],
  },
  {
    title: "Qualify",
    desc: "Identify the right lead quality before follow-up.",
    items: [
      { label: "Custom questions", icon: ClipboardList },
      { label: "Urgency detection", icon: Siren },
      { label: "Service categorization", icon: UserRoundCheck },
    ],
  },
  {
    title: "Convert",
    desc: "Route and respond while intent is still high.",
    items: [
      { label: "Instant alerts", icon: BellRing },
      { label: "Routing to your team", icon: Route },
      { label: "Follow-up readiness", icon: TimerReset },
    ],
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-20 border-b border-slate-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Built to capture, qualify, and convert
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Outcome-focused tooling for service teams that need speed, clarity, and consistent follow-up.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            {groups.map((group) => (
              <div key={group.title} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">
                  {group.title}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">{group.desc}</h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-2.5 text-slate-700">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-teal-700">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_top,#ecfeff_0,#ffffff_70%)] p-6 shadow-xl shadow-slate-900/10">
            <p className="text-sm font-semibold text-slate-900">What your team sees</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="font-semibold text-slate-900">New Lead - Plumbing</p>
                <p className="text-slate-600">Burst pipe, same-day requested</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <p className="font-semibold text-slate-900">Qualification complete</p>
                <p className="text-slate-600">Contact captured, urgency high, dispatch-ready</p>
              </div>
              <div className="rounded-xl border border-teal-200 bg-teal-50 p-3">
                <p className="font-semibold text-teal-900">Alert sent instantly</p>
                <p className="text-teal-800">SMS + Slack notification to on-call rep</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
