import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      {/* Hero image */}
      <div className="relative h-[102vh] md:h-[68vh] w-full">
        <Image
          src="/images/Banner3-1.jpg.webp"
          alt="Ensuring fair opportunity for women & girls"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* headline overlay */}
      <div className="absolute inset-0 flex items-start md:items-center">
        <div className="container-page">
          <div className="mt-6 md:mt-0 max-w-xl">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow">
              Ensuring <br /> Fair Opportunity for <br /> Women &amp; Girls
            </h1>
            <Link
              href="#donate"
              className="mt-5 inline-block bg-brand-green text-white font-semibold px-5 py-3 rounded-full"
            >
              Support a Cause
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
