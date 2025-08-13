export default function Accreditations() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Empanelment & Accreditations</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card p-5">
              <div className="h-28 bg-gray-100 rounded-xl mb-4 grid place-items-center text-brand-gray">
                Badge / Seal
              </div>
              <div className="font-semibold">Accreditation title</div>
              <p className="text-sm text-brand-gray">
                Short description about the accreditation and details.
              </p>
              <button className="mt-3 text-brand-green font-semibold">Read more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
