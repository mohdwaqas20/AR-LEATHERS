import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import Reveal from "./Reveal";

const faqs = [
  { q: "What quality standards do your leather products meet?", a: "All products are graded and inspected against international quality benchmarks, with documentation provided for every export shipment." },
  { q: "What is your export process?", a: "Once an order is confirmed, we handle grading, quality inspection, packaging, export documentation, and logistics coordination through to the destination port." },
  { q: "Is there a minimum order quantity?", a: "Minimum order quantities vary by product. Please contact our export team with your requirement for a tailored quote." },
  { q: "Can products be customised?", a: "Yes, we offer customisation in thickness, finish, colour, and grading for finished, wet blue, and crust leather, subject to feasibility and order volume." },
  { q: "How long does shipping take?", a: "Lead times depend on product type, order volume, and destination. Our team provides an estimated schedule at the time of order confirmation." },
  { q: "What is the typical lead time for production?", a: "Lead time varies by product and quantity; we share a confirmed production and shipment timeline once your order is finalised." },
  { q: "How are products packaged for export?", a: "We use export-grade packaging suited to each product type, designed to preserve quality and comply with international shipping requirements." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-cream via-white2 to-cream">
      <div className="grain-overlay opacity-[0.35]" />
      <div className="pointer-events-none absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full bg-camel/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x max-w-3xl relative">
        <div className="text-center mb-14">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">FAQ</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5 text-cocoa">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 mt-5">
              Answers to the questions we hear most from tanneries, manufacturers,
              and buyers sourcing with us.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div
                className={`group bg-white2 rounded-2xl border transition-all duration-400 overflow-hidden ${
                  open === i ? "border-gold/40 shadow-luxury" : "border-cocoa/[0.06] shadow-soft hover:border-gold/25 hover:shadow-luxury"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className={`font-alt font-semibold transition-colors duration-300 ${open === i ? "text-gold" : "text-cocoa"}`}>
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-400 ${
                      open === i ? "bg-gold text-white2 rotate-180" : "bg-gold/10 text-gold group-hover:bg-gold/20"
                    }`}
                  >
                    {open === i ? <HiOutlineMinus /> : <HiOutlinePlus />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6">
                        <div className="h-px w-full bg-gold/15 mb-4" />
                        <p className="text-charcoal/60 leading-relaxed">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}