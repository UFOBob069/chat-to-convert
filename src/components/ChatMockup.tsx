import { Sparkles } from "lucide-react";

const messages: { role: "bot" | "user"; text: string }[] = [
  { role: "bot", text: "Hi! What service do you need?" },
  { role: "user", text: "AC repair" },
  { role: "bot", text: "Is this urgent?" },
  { role: "user", text: "Yes, today if possible" },
  { role: "bot", text: "Great — what’s your name and phone number?" },
];

export default function ChatMockup() {
  return (
    <div className="relative w-full max-w-md">
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-100/80 via-white to-slate-100 blur-2xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-semibold text-slate-800">
              Live chat
            </span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-medium text-slate-500 ring-1 ring-slate-200">
            <Sparkles className="h-3 w-3 text-teal-600" />
            Guided intake
          </span>
        </div>
        <div className="space-y-3 p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={
                  m.role === "user"
                    ? "max-w-[85%] rounded-2xl rounded-br-md bg-accent px-3.5 py-2.5 text-sm font-medium text-white shadow-sm"
                    : "max-w-[90%] rounded-2xl rounded-bl-md border border-slate-100 bg-white px-3.5 py-2.5 text-sm text-slate-700 shadow-sm"
                }
              >
                {m.text}
              </div>
            </div>
          ))}
          <div className="flex justify-start pt-1">
            <div className="flex gap-1 rounded-full bg-slate-100 px-3 py-2">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400" />
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 bg-slate-50/50 px-4 py-3">
          <div className="flex items-center gap-2 rounded-xl border border-dashed border-slate-200 bg-white px-3 py-2 text-sm text-slate-400">
            Type a message…
          </div>
        </div>
      </div>
    </div>
  );
}
