export default function Partners() {
  return (
    <section id="partners" className="py-12 md:py-16 bg-[#d6e7e6]">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Our Partners in Change</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-white/70 rounded-xl h-20 grid place-items-center text-brand-gray">
              Logo
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
