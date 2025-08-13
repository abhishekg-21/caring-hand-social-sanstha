export default function SDGs() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-page text-center">
        <div className="uppercase text-xs tracking-wider text-brand-gray">Towards Achieving</div>
        <h2 className="section-title text-2xl md:text-3xl mt-1">
          Sustainable Development Goals
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card h-24 flex items-center justify-center text-brand-gray">
              SDG #{i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

