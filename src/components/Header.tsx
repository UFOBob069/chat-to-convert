import Link from "next/link";
import { MessageCircle } from "lucide-react";

const nav = [
  { href: "#roi", label: "ROI" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#industries", label: "Industries" },
  { href: "#comparison", label: "Compare" },
  { href: "#testimonials", label: "Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="flex min-w-0 shrink-0 items-center gap-2 font-semibold tracking-tight text-slate-900"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-sm shadow-teal-900/10">
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="truncate">Job To Close</span>
        </Link>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-2.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 xl:px-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <details className="relative lg:hidden">
            <summary className="list-none [&::-webkit-details-marker]:hidden">
              <span className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm">
                Menu
              </span>
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-52 rounded-xl border border-slate-200 bg-white py-2 shadow-lg">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#lead-form"
                className="block border-t border-slate-100 px-4 py-2.5 text-sm font-semibold text-teal-700 hover:bg-slate-50"
              >
                Connect with Client Success
              </Link>
            </div>
          </details>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href="#lead-form"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 md:block"
            >
              Client Success
            </Link>
            <Link
              href="#lead-form"
              className="inline-flex max-w-[200px] items-center justify-center rounded-full bg-accent px-3 py-2.5 text-[11px] font-semibold leading-tight text-white shadow-sm shadow-teal-900/15 transition hover:bg-accent-hover sm:max-w-none sm:px-4 sm:text-sm"
            >
              <span className="sm:hidden">Get started</span>
              <span className="hidden sm:inline">Connect with Client Success</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
