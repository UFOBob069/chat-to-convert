import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 font-semibold text-slate-900">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
            <MessageCircle className="h-5 w-5" strokeWidth={2} />
          </span>
          ChatToConvert
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <Link href="#roi" className="hover:text-slate-900">
            ROI
          </Link>
          <Link href="#features" className="hover:text-slate-900">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-slate-900">
            Pricing
          </Link>
          <Link href="#faq" className="hover:text-slate-900">
            FAQ
          </Link>
          <Link href="#lead-form" className="hover:text-slate-900">
            Early access
          </Link>
        </nav>
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} ChatToConvert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
