export default function ImpactStats() {
  const stats = [
    { value: "20+", label: "LAC", sub: "children impacted" },
    { value: "2000+", label: "villages", sub: "across the country" },
    { value: "400+", label: "projects", sub: "across verticals" },
    { value: "27+", label: "states", sub: "pan-India reach" },
  ];
  return (
    <section className="bg-cream py-10 md:py-14">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="stat-badge">{s.value}</div>
              <div className="uppercase text-xs tracking-wide text-brand-gray">{s.label}</div>
              <div className="text-sm text-brand-gray">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
