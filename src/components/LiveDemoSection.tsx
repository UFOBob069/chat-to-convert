export default function LiveDemoSection() {
  return (
    <section
      id="live-chat-demo"
      className="scroll-mt-20 border-b border-slate-100 bg-white py-14 sm:py-18"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Live Chat Demo
          </h2>
          <p className="text-sm font-medium text-slate-600">
            Ask a question to test lead qualification flow
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-3 shadow-xl shadow-slate-900/5">
          <div className="min-h-[460px] rounded-2xl border border-dashed border-teal-300 bg-white p-4">
            <p className="text-sm text-slate-500">
              Embed the real ChatToConvert widget in this container.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
