import * as ReactCountUp from "react-countup";
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;
import { useInView } from "react-intersection-observer";
import { PiHandshake, PiPackage, PiCertificate } from "react-icons/pi";
import Reveal from "./Reveal";
import aboutVideo from "../assets/about.MOV";

const counters = [
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 300, suffix: "+", label: "Export Shipments" },
];

const leatherTypes = ["Finished Leather", "Wet Blue Leather", "Crust Leather"];

const trustPoints = [
  { icon: PiCertificate, label: "Consistent Quality" },
  { icon: PiPackage, label: "Competitive Pricing" },
  { icon: PiHandshake, label: "Timely Delivery" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-gradient-to-b from-cream via-white2 to-cream">
      <div className="pointer-events-none absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-camel/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="grain-overlay opacity-[0.35]" />

      <div className="container-x grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative">
        {/* Media column */}
        <Reveal className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
            {/* offset frame accent */}
            <div className="hidden md:block absolute -top-5 -left-5 w-full h-full border border-gold/40 rounded-[1.75rem]" />

            <div className="relative rounded-[1.5rem] overflow-hidden shadow-luxury aspect-[4/5] ring-1 ring-cocoa/10">
              <video
                src={aboutVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ filter: "contrast(1.18) saturate(1.08) brightness(0.9)" }}
              />
              {/* tonal wash to unify the footage with the palette */}
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-cocoa/20 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />

              <div className="absolute top-4 left-4 md:top-5 md:left-5 inline-flex items-center gap-2 bg-cream/90 backdrop-blur px-3.5 py-1.5 rounded-full shadow-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-alt font-semibold text-cocoa">
                  Est. Craftsmanship
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-display italic text-cream text-lg md:text-xl leading-snug drop-shadow-sm">
                  AR Leathers
                </p>
                <div className="w-10 h-[1.5px] bg-gold mt-2" />
              </div>
            </div>

            <div className="absolute -bottom-7 -right-5 md:-bottom-8 md:-right-8 bg-cocoa text-cream rounded-2xl p-5 md:p-6 shadow-luxury w-40 md:w-48">
              <div className="font-display text-3xl md:text-4xl text-gold leading-none">
                {inView && <CountUp end={45} duration={2} />}+
              </div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-wide text-cream/70 mt-2 font-alt leading-snug">
                Years Serving Global Tanneries
              </p>
            </div>
          </div>
        </Reveal>

        {/* Content column */}
        <div className="order-1 lg:order-2" ref={ref}>
          <Reveal>
            <span className="eyebrow">About AR Leathers</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] leading-[1.15] mt-5 text-cocoa">
              Indian Craftsmanship, Trusted by Buyers Worldwide
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-charcoal/70 leading-relaxed">
              AR LEATHERS is a leading Indian manufacturer, exporter, and sourcing partner
              for high-quality leather and raw materials, serving tanneries, leather
              manufacturers, importers, wholesalers, and brands worldwide.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              With extensive industry experience and a strong procurement network, our
              commitment to quality, consistency, competitive pricing, and timely delivery
              has made us a trusted partner in the global leather industry.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap gap-2.5 mt-7">
              {leatherTypes.map((t) => (
                <span
                  key={t}
                  className="text-xs md:text-[13px] font-alt font-semibold tracking-wide text-cocoa bg-white2 border border-gold/25 shadow-sm rounded-full px-4 py-2 hover:border-gold/50 hover:shadow-soft transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="text-gold text-base" />
                  </span>
                  <span className="text-sm font-alt font-medium text-cocoa/80">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="grid grid-cols-2 gap-12 md:gap-16 mt-10 pt-9 border-t border-gold/20">
              {counters.map((c) => (
                <div key={c.label} className="flex flex-col items-start">
                  <div className="font-display text-5xl md:text-6xl text-gold font-bold leading-none">
                    {inView && <CountUp end={c.value} duration={2.5} />}
                    <span className="text-4xl md:text-5xl">{c.suffix}</span>
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-cocoa/60 mt-4 font-alt font-semibold">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}