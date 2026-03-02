const stats = [
  { value: "10x", label: "Faster Development", description: "Ship features in hours, not days" },
  { value: "99.9%", label: "Uptime SLA", description: "Enterprise-grade reliability" },
  { value: "50+", label: "Components", description: "Ready-to-use UI building blocks" },
  { value: "1k+", label: "Happy Developers", description: "Trusted by teams worldwide" },
];

export default function Stats() {
  return (
    <section className="py-16 border-y border-neutral-800 bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-neutral-500 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
