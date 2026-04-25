import { CheckCircle2, ShieldCheck } from "lucide-react";

const businesses = ["HVAC", "Plumbing", "Roofing", "Electrical", "Restoration"];

export default function TrustProof() {
  return (
    <section className="border-b border-slate-100 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Used by service businesses across the U.S.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm font-semibold text-slate-500 sm:grid-cols-4 lg:grid-cols-6">
          {["NorthAir HVAC", "PipePro", "Summit Roofing", "BrightWire", "RapidRestore", "PeakPest"].map((name) => (
            <div key={name} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              {name}
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-800">
              <ShieldCheck className="h-3.5 w-3.5" />
              Lightweight proof
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Built for service businesses like:
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {businesses.map((business) => (
                <li
                  key={business}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {business}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Example qualified lead
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                <span className="text-slate-500">Name</span>
                <span className="font-semibold text-slate-900">Megan T.</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                <span className="text-slate-500">Service</span>
                <span className="font-semibold text-slate-900">Emergency AC repair</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                <span className="text-slate-500">Urgency</span>
                <span className="inline-flex items-center gap-1 font-semibold text-rose-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Same-day
                </span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
                <span className="text-slate-500">Captured</span>
                <span className="font-semibold text-slate-900">Today, 8:42 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
