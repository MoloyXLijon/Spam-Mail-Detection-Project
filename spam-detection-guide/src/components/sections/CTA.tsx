import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900/50 via-indigo-900/30 to-neutral-900 border border-violet-500/20 p-12 sm:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-violet-300 text-sm font-medium">🚀 Start building today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to ship your{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                next project?
              </span>
            </h2>

            <p className="text-neutral-300 text-lg max-w-xl mx-auto mb-10">
              Get started in minutes. No credit card required. Free forever for personal projects.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-900 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                Get Started Free
              </Link>
              <Link
                href="#"
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white font-semibold px-8 py-3.5 rounded-xl transition-all border border-white/20 hover:border-white/30"
              >
                View on GitHub
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
              {[
                "✓ Free to use",
                "✓ Open source",
                "✓ MIT License",
                "✓ No vendor lock-in",
              ].map((badge) => (
                <span key={badge} className="text-neutral-300">{badge}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
