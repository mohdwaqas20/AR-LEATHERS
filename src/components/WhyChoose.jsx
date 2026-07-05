import {
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt,
  HiOutlineCurrencyDollar,
  HiOutlineArrowPathRoundedSquare,
  HiOutlineUserGroup,
  HiOutlineBolt,
  HiOutlineTruck,
  HiOutlineHandRaised,
  HiOutlineHeart,
  HiOutlineCheckBadge,
} from "react-icons/hi2";
import Reveal from "./Reveal";

const items = [
  { icon: HiOutlineCheckBadge, title: "Premium Quality", text: "Consistently graded products meeting international benchmarks." },
  { icon: HiOutlineShieldCheck, title: "Strict Quality Control", text: "Multi-stage inspection from sourcing to shipment." },
  { icon: HiOutlineCurrencyDollar, title: "Competitive Pricing", text: "Transparent, fair pricing across all order volumes." },
  { icon: HiOutlineArrowPathRoundedSquare, title: "Reliable Supply Chain", text: "An established, dependable network across India." },
  { icon: HiOutlineUserGroup, title: "Professional Export Team", text: "Experienced staff managing every export detail." },
  { icon: HiOutlineBolt, title: "Fast, Timely Delivery", text: "Committed shipment schedules you can plan around." },
  { icon: HiOutlineTruck, title: "Worldwide Shipping", text: "Logistics coordination to destinations across the globe." },
  { icon: HiOutlineHandRaised, title: "Long-Term Partnerships", text: "Built on transparency, trust, and consistency." },
  { icon: HiOutlineHeart, title: "Customer-Centric Service", text: "Every order handled with individual attention." },
  { icon: HiOutlineGlobeAlt, title: "International Standards", text: "Processes aligned with global compliance requirements." },
];

export default function WhyChoose() {
  return (
    <section className="section-pad bg-sandalwood">
      <div className="container-x">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <div className="lg:sticky lg:top-32">
            <Reveal><span className="eyebrow">Why Choose Us</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5">
                Quality You Can Trust. Delivered Worldwide.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-charcoal/60 mt-5 leading-relaxed">
                Our mission is to become one of India's most trusted exporters of
                leather and raw hides — delivering superior quality, reliable
                service, and sustainable business partnerships worldwide.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 2) * 0.1}>
                <div className="flex gap-4 p-5 rounded-2xl hover:bg-camel/30 transition-colors duration-400">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-cocoa text-goldLight flex items-center justify-center text-xl">
                    <it.icon />
                  </div>
                  <div>
                    <h3 className="font-alt font-semibold text-charcoal">{it.title}</h3>
                    <p className="text-charcoal/55 text-sm mt-1 leading-relaxed">{it.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
