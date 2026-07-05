import {
  HiOutlineBuildingOffice2,
  HiOutlineWrenchScrewdriver,
  HiOutlineTruck as HiTruck,
  HiOutlineHomeModern,
  HiOutlineSparkles,
  HiOutlineShoppingBag,
  HiOutlineGlobeAmericas,
  HiOutlineBuildingStorefront,
  HiOutlineArchiveBox,
  HiOutlineScale,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const industries = [
  { icon: HiOutlineBuildingOffice2, label: "Tanneries" },
  { icon: HiOutlineScale, label: "Leather Manufacturers" },
  { icon: HiTruck, label: "Footwear Industry" },
  { icon: HiOutlineHomeModern, label: "Furniture Industry" },
  { icon: HiOutlineWrenchScrewdriver, label: "Automotive Industry" },
  { icon: HiOutlineSparkles, label: "Fashion Industry" },
  { icon: HiOutlineShoppingBag, label: "Leather Goods Manufacturers" },
  { icon: HiOutlineArchiveBox, label: "Importers" },
  { icon: HiOutlineBuildingStorefront, label: "Wholesalers" },
  { icon: HiOutlineGlobeAmericas, label: "Export Companies" },
];

export default function Industries() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-camel/25 via-cream to-camel/25">
      <div className="grain-overlay opacity-[0.3]" />
      <div className="pointer-events-none absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-cocoa/[0.05] blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Industries We Serve</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5 text-cocoa">
              Partnering Across the Leather Value Chain
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 mt-5">
              From tanneries to global export houses, our materials move across
              every stage of the leather value chain.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={(i % 5) * 0.07}>
              <div className="group relative bg-white2 rounded-2xl p-6 text-center shadow-soft hover:shadow-luxury border border-cocoa/[0.05] hover:border-gold/40 transition-all duration-500 ease-lux hover:-translate-y-2 overflow-hidden">
                {/* soft glow that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/[0.08] group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />

                <div className="relative w-16 h-16 mx-auto rounded-full bg-camel/40 flex items-center justify-center text-2xl text-cocoa shadow-sm group-hover:bg-gold group-hover:text-white2 group-hover:scale-110 group-hover:shadow-luxury transition-all duration-500 ease-lux">
                  <ind.icon className="transition-transform duration-500 group-hover:rotate-[8deg]" />
                </div>
                <p className="relative mt-4 text-sm font-alt font-semibold text-charcoal/80 group-hover:text-cocoa transition-colors duration-300">
                  {ind.label}
                </p>
                <div className="relative mx-auto mt-3 h-px w-6 bg-gold/30 group-hover:w-10 group-hover:bg-gold transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}