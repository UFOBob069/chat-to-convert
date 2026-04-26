import { ChevronDown } from "lucide-react";

const faqs: { q: string; a: string }[] = [
  {
    q: "Does this work on WordPress?",
    a: "Yes. Add the embed script to your theme header, a header plugin, or your tag manager — same pattern most analytics tools use.",
  },
  {
    q: "Does this work on non-WordPress sites?",
    a: "Yes. Webflow, Squarespace, Shopify, and custom HTML all work as long as you can place a script tag on the page or template.",
  },
  {
    q: "Do I need to replace my CRM?",
    a: "No. Job To Close is designed to feed your existing process with cleaner lead data. CRM or spreadsheet sync is optional.",
  },
  {
    q: "Can I customize the questions?",
    a: "Yes. You can tailor prompts by trade, season, or campaign so dispatchers get the details they actually need.",
  },
  {
    q: "Can leads go to Slack, email, or SMS?",
    a: "Yes. Route to the channels your team already monitors so nothing sits in an inbox nobody checks.",
  },
  {
    q: "Is this an AI chatbot?",
    a: "It’s a guided intake experience first. Optional AI can summarize conversations for your team — it’s not a gimmicky open-ended bot.",
  },
  {
    q: "How fast can it be installed?",
    a: "Most marketing sites go live in a single sitting once you have script access. Complex multi-domain setups may take a bit longer.",
  },
  {
    q: "What types of businesses is this best for?",
    a: "Local and home service companies with phone-led sales — HVAC, plumbing, roofing, electrical, restoration, pest control, garage door, and similar trades. Med spas and dental practices can adapt it for booking-focused intake without clinical claims.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-slate-100 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-lg text-slate-600">
          Straight answers — no jargon wall.
        </p>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white px-5 shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
              </summary>
              <p className="border-t border-slate-100 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
