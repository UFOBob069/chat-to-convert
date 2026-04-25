import { BellOff, Clock3, MessageSquareX, PhoneCall } from "lucide-react";

const pains = [
  {
    title: "Visitors leave without contacting you",
    icon: MessageSquareX,
  },
  {
    title: "After-hours leads go unanswered",
    icon: Clock3,
  },
  {
    title: "Busy teams miss messages",
    icon: BellOff,
  },
  {
    title: "Customers call competitors within minutes",
    icon: PhoneCall,
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-slate-100 bg-[linear-gradient(135deg,#020617_0%,#0f172a_55%,#042f2e_100%)] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Most Website Leads Never Turn Into Jobs
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-3xl font-bold text-white">30–70%</p>
            <p className="mt-1 text-sm text-slate-300">Leads often missed or not followed up fast enough</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-3xl font-bold text-white">&lt;5 min</p>
            <p className="mt-1 text-sm text-slate-300">Window before many buyers try another company</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-3xl font-bold text-white">$500+</p>
            <p className="mt-1 text-sm text-slate-300">Potential value of a single service opportunity</p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/20 text-teal-200">
                <pain.icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-base font-medium text-slate-100">
                {pain.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
