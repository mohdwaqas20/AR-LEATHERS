import {
  HiOutlineMagnifyingGlass,
  HiOutlineChartBar,
  HiOutlineBeaker,
  HiOutlineSwatch,
  HiOutlineArchiveBox,
  HiOutlineClipboardDocumentCheck,
  HiOutlineGlobeAsiaAustralia,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const points = [
  { icon: HiOutlineMagnifyingGlass, title: "Raw Material Inspection", text: "Every hide and skin checked at intake for size, texture, and condition." },
  { icon: HiOutlineChartBar, title: "Grading", text: "Consistent A / B / C grading applied across all product lines." },
  { icon: HiOutlineBeaker, title: "Moisture Testing", text: "Controlled moisture levels to preserve quality through transit." },
  { icon: HiOutlineSwatch, title: "Leather Selection", text: "Careful selection for grain, colour, and finish consistency." },
  { icon: HiOutlineArchiveBox, title: "Packaging Standards", text: "Export-grade packing that protects product integrity." },
  { icon: HiOutlineClipboardDocumentCheck, title: "Export Inspection", text: "Final pre-shipment review against buyer specifications." },
  { icon: HiOutlineGlobeAsiaAustralia, title: "International Compliance", text: "Documentation aligned with global import requirements." },
];

export default function QualityControl() {
  return (
    <section className="section-pad relative overflow-hidden" style={{ backgroundColor: "#EEE2D1" }}>
      <div className="grain-overlay" />
      {/* Decorative warm gradient blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(221,197,162,0.6) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(182,140,69,0.2) 0%, transparent 70%)" }} />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Quality Control</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-cocoa text-4xl md:text-[2.75rem] mt-5">
              Every Shipment, Rigorously Verified
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-cocoa/55 mt-5 leading-relaxed">
              Our quality system spans every stage — from raw material intake through to export clearance.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.08}>
              <div className="bg-sandalwood/70 border border-gold/25 rounded-2xl p-6 h-full shadow-soft hover:shadow-luxury hover:-translate-y-1 transition-all duration-500 ease-lux">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                  <p.icon className="text-2xl text-gold" />
                </div>
                <h3 className="font-display text-cocoa text-lg">{p.title}</h3>
                <p className="text-cocoa/55 text-sm mt-2 leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
