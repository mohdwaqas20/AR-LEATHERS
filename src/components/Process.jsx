import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineBeaker,
  HiOutlineCog6Tooth,
  HiOutlineSparkles,
  HiOutlineArchiveBox,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineTruck,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const steps = [
  { icon: HiOutlineMagnifyingGlass, title: "Raw Material Selection", text: "Sourcing hides & skins through our trusted supplier network across India." },
  { icon: HiOutlineClipboardDocumentCheck, title: "Quality Inspection", text: "Every batch graded for size, grain, and curing standard before processing." },
  { icon: HiOutlineBeaker, title: "Processing & Tanning", text: "Controlled tanning to Wet Blue stage under monitored conditions." },
  { icon: HiOutlineCog6Tooth, title: "Leather Treatment", text: "Retanning and crusting to prepare the base for final finishing." },
  { icon: HiOutlineSparkles, title: "Finishing", text: "Dyeing, buffing, and coating to the required finish and colour." },
  { icon: HiOutlineArchiveBox, title: "Final Inspection & Packaging", text: "Export-grade packaging following a final quality check." },
  { icon: HiOutlineTruck, title: "Export Preparation", text: "Documentation, certification, and logistics coordination." },
  { icon: HiOutlineGlobeAsiaAustralia, title: "Worldwide Export", text: "Shipped to tanneries and manufacturers across the globe." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream via-white2 to-cream">
      <div className="pointer-events-none absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-camel/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="grain-overlay opacity-[0.35]" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Manufacturing & Sourcing</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5 text-cocoa">
              From Raw Hide to Global Shipment
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 mt-5">
              A carefully controlled process spanning procurement, manufacturing,
              quality inspection, and worldwide logistics.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gold/20" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.1}>
                <div className="group relative flex flex-col items-start bg-white2/60 hover:bg-white2 border border-transparent hover:border-gold/20 rounded-2xl p-5 -m-5 transition-all duration-400 hover:shadow-soft">
                  <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-cocoa text-goldLight flex items-center justify-center text-2xl shadow-soft mb-5 group-hover:scale-110 group-hover:bg-gold group-hover:text-white2 transition-all duration-400">
                    <s.icon />
                  </div>
                  <span className="text-xs font-alt tracking-widest text-gold mb-1">
                    STEP {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg text-cocoa">{s.title}</h3>
                  <p className="text-charcoal/55 text-sm mt-2 leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}