import Image from "next/image";

const items = [
  { title: "Education", desc: "Education, nutrition & holistic development of children.", icon: "/images/edu.png" },
  { title: "Healthcare", desc: "Taking healthcare services to the unreached.", icon: "/images/health.png" },
  { title: "Women Empowerment", desc: "Livelihood, skills & dignity.", icon: "/images/women.png" },
  { title: "Livelihood", desc: "Skilling youth for employment.", icon: "/images/livelihood.png" },
  { title: "Empowering Grassroots", desc: "Helping community orgs become sustainable.", icon: "/images/grassroots.png" },
  { title: "Disaster Response", desc: "Reach out & respond to urgent needs.", icon: "/images/disaster.png" },
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-12 md:py-16">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Our Programmes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {items.map((x) => (
            <div key={x.title} className="card p-5 flex gap-4">
              <div className="shrink-0">
                <Image src={x.icon} alt="" width={48} height={48} />
              </div>
              <div>
                <h3 className="font-semibold">{x.title}</h3>
                <p className="text-sm text-brand-gray">{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

