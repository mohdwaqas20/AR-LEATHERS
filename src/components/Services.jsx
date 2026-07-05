import {
  HiOutlineBeaker,
  HiOutlineSquares2X2,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineChartBarSquare,
  HiOutlineCubeTransparent,
  HiOutlineDocumentText,
  HiOutlineTruck,
  HiOutlineWrenchScrewdriver,
  HiOutlineClock,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const services = [
  { icon: HiOutlineBeaker, title: "Finished Leather Manufacturing", text: "Full-process leather finished to international standards." },
  { icon: HiOutlineCubeTransparent, title: "Wet Blue Leather Manufacturing", text: "Consistently chrome-tanned hides for tannery input." },
  { icon: HiOutlineSquares2X2, title: "Crust Leather Manufacturing", text: "Semi-finished leather ready for final finishing." },
  { icon: HiOutlineMagnifyingGlassCircle, title: "Raw Hide Sourcing", text: "Premium raw hides & skins sourced across India." },
  { icon: HiOutlineWrenchScrewdriver, title: "Custom Product Development", text: "Products tailored to exact buyer specifications." },
  { icon: HiOutlineAdjustmentsHorizontal, title: "Quality Inspection & Grading", text: "Rigorous grading before every shipment." },
  { icon: HiOutlineChartBarSquare, title: "Bulk Supply", text: "Reliable, large-volume fulfilment for tanneries & traders." },
  { icon: HiOutlineDocumentText, title: "Export Documentation", text: "Complete, compliant paperwork for smooth customs clearance." },
  { icon: HiOutlineTruck, title: "Worldwide Logistics", text: "End-to-end shipping coordination to global destinations." },
  { icon: HiOutlineClock, title: "Long-Term Supply Contracts", text: "Dependable, ongoing partnerships built on trust." },
];

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream via-white2 to-cream">
      <div className="grain-overlay opacity-[0.35]" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-camel/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Our Services</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-cocoa text-4xl md:text-[2.75rem] mt-5">
              End-to-End Leather Solutions
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 mt-5">
              A complete suite of manufacturing, sourcing, and export services built
              around reliability, quality, and long-term partnership.
            </p>
          </Reveal>
        </div>

        {(() => {
          const mainServices = services.slice(0, 8);
          const lastRow = services.slice(8);

          const renderCard = (s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08}>
              <div className="group relative rounded-2xl p-7 bg-white2/60 hover:bg-white2 border border-transparent hover:border-gold/20 transition-all duration-500 ease-lux hover:-translate-y-1.5 overflow-hidden h-full hover:shadow-soft w-full">
                <span className="absolute top-6 right-7 font-display text-3xl text-cocoa/[0.06] group-hover:text-gold/20 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative w-12 h-12 rounded-xl bg-gold/12 text-gold flex items-center justify-center text-2xl mb-5 group-hover:bg-gold group-hover:text-white2 group-hover:scale-110 transition-all duration-400">
                  <s.icon />
                </div>
                <h3 className="relative font-display text-lg text-cocoa">{s.title}</h3>
                <p className="relative text-charcoal/55 text-sm mt-2 leading-relaxed">{s.text}</p>
                <div className="relative mt-4 h-px w-8 bg-gold/40 group-hover:w-14 transition-all duration-500" />
              </div>
            </Reveal>
          );

          return (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {mainServices.map((s, i) => renderCard(s, i))}
              </div>

              {lastRow.length > 0 && (
                <div className="flex flex-wrap justify-center gap-6 mt-6">
                  {lastRow.map((s, i) => (
                    <div key={s.title} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]">
                      {renderCard(s, mainServices.length + i)}
                    </div>
                  ))}
                </div>
              )}
            </>
          );
        })()}
      </div>
    </section>
  );
}