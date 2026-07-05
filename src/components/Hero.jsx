import { motion } from "framer-motion";
import * as ReactCountUp from "react-countup";
const CountUp = ReactCountUp.default?.default ?? ReactCountUp.default;
import { useInView } from "react-intersection-observer";
import { HiOutlineArrowRight, HiOutlineGlobeAlt, HiOutlineShieldCheck } from "react-icons/hi";
import hide from "../assets/sample-product.jpg";

const stats = [
  { value: 45, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 300, suffix: "+", label: "Export Shipments" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#EEE2D1" }}>
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #F5EFE6 0%, #EEE2D1 45%, #E4D3B8 100%)" }} />
        <div className="grain-overlay" />
      </div>

      {/* Floating decorative rings */}
      <motion.div
        className="absolute top-24 right-[6%] w-56 h-56 rounded-full border border-gold/20 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-[4%] w-32 h-32 rounded-full border border-camel/40 hidden lg:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      />
      <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] rounded-full opacity-25 hidden lg:block blur-3xl" style={{ background: "radial-gradient(circle, rgba(182,140,69,0.35) 0%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 hidden lg:block blur-3xl" style={{ background: "radial-gradient(circle, rgba(52,39,31,0.25) 0%, transparent 70%)" }} />

      <div className="container-x relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.15fr,0.85fr] gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="eyebrow"
            >
              Indian Leather Manufacturer & Exporter
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 font-display text-cocoa text-[2.2rem] leading-[1.15] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.2rem] md:leading-[1.08] break-words"
            >
              Premium Leather Manufacturing <span className="block sm:inline">&</span>{" "}
              <span className="italic text-gold relative inline-block">
                Global Export
                <motion.svg
                  viewBox="0 0 200 14"
                  className="absolute -bottom-2 left-0 w-full h-3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 1.2, ease: "easeInOut" }}
                >
                  <motion.path d="M2,10 C60,2 140,2 198,9" fill="none" stroke="#B68C45" strokeWidth="3" strokeLinecap="round" />
                </motion.svg>
              </span>{" "}
              <span className="block">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-7 max-w-xl text-cocoa/65 text-base md:text-lg leading-relaxed font-body"
            >
              AR LEATHERS is a trusted Indian manufacturer, exporter, and sourcing partner
              delivering premium Finished Leather, Wet Blue Leather, Crust Leather, and
              carefully sourced raw hides & skins to customers across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                Explore Products <HiOutlineArrowRight />
              </a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                Contact Us
              </a>
              <a href="#global" onClick={(e) => { e.preventDefault(); document.getElementById("global")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-outline">
                Export Worldwide
              </a>
            </motion.div>

            <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl border-t border-cocoa/15 pt-9">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  <div className="font-display text-3xl md:text-4xl text-gold">
                    {inView && <CountUp end={s.value} duration={2.2} />}
                    {s.suffix}
                  </div>
                  <div className="text-cocoa/50 text-xs mt-1 tracking-wide uppercase font-alt">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: visual showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Glow behind the card */}
            <div className="absolute -inset-8 rounded-[2.5rem] opacity-40 blur-3xl" style={{ background: "radial-gradient(circle, rgba(182,140,69,0.4) 0%, transparent 70%)" }} />

            {/* Main image card */}
            <motion.div
              className="relative rounded-[2rem] overflow-hidden shadow-luxury border border-gold/20"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={hide}
                alt="Premium finished leather hide"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(52,39,31,0) 40%, rgba(52,39,31,0.55) 100%)" }} />

              {/* Stitch accent line */}
              <div className="absolute top-6 left-6 right-6 stitch-line opacity-60" />

              {/* Bottom caption on image */}
              <div className="absolute bottom-6 left-6 right-6 text-sandalwood">
                <p className="font-alt text-xs tracking-[0.25em] uppercase text-camel"></p>
                <p className="font-display text-2xl mt-1"></p>
              </div>
            </motion.div>

            {/* Floating quality badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -left-8 bottom-14 card-glass rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-11 h-11 rounded-full bg-cocoa flex items-center justify-center text-camel text-xl shrink-0"
              >
                <HiOutlineShieldCheck />
              </motion.div>
              <div>
                <p className="font-display text-lg text-cocoa leading-none">100%</p>
                <p className="text-cocoa/55 text-[11px] uppercase tracking-wide font-alt mt-1">Quality Assured</p>
              </div>
            </motion.div>

            {/* Floating export badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -right-6 top-10 card-glass rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="w-11 h-11 rounded-full bg-gold flex items-center justify-center text-sandalwood text-xl shrink-0"
              >
                <HiOutlineGlobeAlt />
              </motion.div>
              <div>
                <p className="font-display text-lg text-cocoa leading-none">10+</p>
                <p className="text-cocoa/55 text-[11px] uppercase tracking-wide font-alt mt-1">Countries Served</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}