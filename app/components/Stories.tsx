import Image from "next/image";

const stories = [
  { id: 1, title: "Tayyari Kal Ki", img: "/images/story1.jpg" },
  { id: 2, title: "Health Cannot Wait", img: "/images/story2.jpg" },
  { id: 3, title: "Shiksha Na Ruke", img: "/images/story3.jpg" },
  { id: 4, title: "She Can Fly", img: "/images/story4.jpg" },
];

export default function Stories() {
  return (
    <section id="stories" className="py-12 md:py-16 bg-cream">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Stories in Motion</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stories.map((s) => (
            <article key={s.id} className="card group">
              <div className="relative h-56">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
                {/* play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 grid place-items-center group-hover:scale-105 transition">
                    <div className="ml-0.5 w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-brand-green" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-brand-gray mt-1">
                  Short description about the campaign and impact.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
