import Image from "next/image";
import Link from "next/link";

const causes = [
  { title: "Tayyari Kal Ki", img: "/images/cause1.jpg", copy: "Career readiness & skilling for youth." },
  { title: "Health Cannot Wait", img: "/images/cause2.jpg", copy: "Medical outreach for underserved communities." },
  { title: "Shiksha Na Ruke", img: "/images/cause3.jpg", copy: "Helping children continue education." },
  { title: "She Can Fly", img: "/images/cause4.jpg", copy: "Empowering girls to soar." },
];

export default function SupportCause() {
  return (
    <section id="support" className="py-12 md:py-16">
      <div className="container-page">
        <h2 className="section-title text-2xl md:text-3xl">Support a Cause</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {causes.map((c) => (
            <div key={c.title} className="card">
              <div className="relative h-44">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-brand-gray">{c.copy}</p>
                <Link href="#donate" className="inline-block mt-3 text-brand-green font-semibold">
                  Know More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
