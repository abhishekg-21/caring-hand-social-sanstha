import Hero from "./components/Hero";
import ImpactStats from "./components/ImpactStats";
import Programmes from "./components/Programmes";
import SDGs from "./components/SDGs";
import Stories from "./components/Stories";
import SupportCause from "./components/SupportCause";
import Partners from "./components/Partners";
import Accreditations from "./components/Accreditations";
import Newsletter from "./components/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-10 md:py-14 bg-white">
        <div className="container-page">
          <p className="text-center text-sm md:text-base text-brand-gray max-w-3xl mx-auto">
            Established in 2002, Smile Foundation is an Indian development organization…
            (replace this with your own copy)
          </p>
        </div>
      </section>

      <ImpactStats />
      <Programmes />
      <SDGs />
      <Stories />
      <SupportCause />
      <Partners />
      <Accreditations />
      <Newsletter />
    </>
  );
}
