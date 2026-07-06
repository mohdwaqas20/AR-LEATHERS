import { useState } from "react";
import { HiOutlinePhone, HiOutlineEnvelope, HiOutlineMapPin, HiOutlinePaperAirplane } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "./Reveal";

const WHATSAPP_NUMBER = "918922010767";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", country: "", product: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text =
      `*New Export Inquiry — AR Leathers*\n\n` +
      `👤 *Name:* ${form.name}\n` +
      `🏢 *Company:* ${form.company || "N/A"}\n` +
      `📧 *Email:* ${form.email}\n` +
      `🌍 *Country:* ${form.country || "N/A"}\n` +
      `📦 *Product of Interest:* ${form.product || "N/A"}\n` +
      `💬 *Message:* ${form.message || "N/A"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noreferrer");
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad bg-sandalwood relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cocoa/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">

          {/* ── Left column ── */}
          <div>
            <Reveal>
              <span className="eyebrow">Contact Us</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5 leading-tight">
                Let&rsquo;s Start a<br />Partnership
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-charcoal/60 mt-5 leading-relaxed max-w-sm">
                Reach out for pricing, samples, or export documentation. Our team
                typically responds within one business day.
              </p>
            </Reveal>

            {/* Contact details */}
            <div className="mt-10 space-y-5">
              <Reveal delay={0.25}>
                <a href="tel:+917871777608" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-2xl bg-camel/40 flex items-center justify-center text-cocoa text-xl group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    <HiOutlinePhone />
                  </span>
                  <div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-widest font-alt">Phone</p>
                    <p className="font-alt text-charcoal font-medium">+91 7871777608</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.3}>
                <a href="mailto:arleathergoods27@gmail.com" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-2xl bg-camel/40 flex items-center justify-center text-cocoa text-xl group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                    <HiOutlineEnvelope />
                  </span>
                  <div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-widest font-alt">Email</p>
                    <p className="font-alt text-charcoal font-medium">arleathergoods27@gmail.com</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={0.35}>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-2xl bg-camel/40 flex items-center justify-center text-cocoa text-xl">
                    <HiOutlineMapPin />
                  </span>
                  <div>
                    <p className="text-xs text-charcoal/50 uppercase tracking-widest font-alt">Location</p>
                    <p className="font-alt text-charcoal font-medium">India</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* WhatsApp CTA */}
            <Reveal delay={0.45}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 mt-10 px-6 py-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors duration-300"
              >
                <FaWhatsapp className="text-2xl text-[#25D366]" />
                <div>
                  <p className="text-xs text-charcoal/50 font-alt uppercase tracking-widest">Quick chat</p>
                  <p className="text-sm font-alt font-semibold">Chat with us on WhatsApp</p>
                </div>
              </a>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={0.5}>
              <div className="mt-10 pt-8 border-t border-cocoa/10 grid grid-cols-3 gap-4">
                {[
                  { num: "24h", label: "Response Time" },
                  { num: "45+", label: "Years of Experience" },
                  { num: "10+", label: "Countries" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <p className="heading-serif text-2xl text-cocoa">{item.num}</p>
                    <p className="text-xs text-charcoal/50 font-alt uppercase tracking-wide mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ── Right column — Form ── */}
          <Reveal delay={0.15}>
            <div className="card-glass rounded-3xl p-8 md:p-10 shadow-xl shadow-cocoa/5">
              {/* Form header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="font-display text-2xl text-charcoal">Export Inquiry</h3>
                  <p className="text-charcoal/50 text-sm mt-1">Fill in the details and we'll reply via WhatsApp.</p>
                </div>
                <span className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] text-xl flex-shrink-0">
                  <FaWhatsapp />
                </span>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">
                      Full Name <span className="text-gold">*</span>
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      type="text"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">
                      Email <span className="text-gold">*</span>
                    </label>
                    <input
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">Country</label>
                    <input
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      type="text"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all"
                    />
                  </div>

                  {/* Product */}
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">Product of Interest</label>
                    <input
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      type="text"
                      placeholder="e.g. Wet Blue Leather, Raw Cow Hides"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-charcoal/50 font-alt">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, quantities, or any questions…"
                      className="mt-2 w-full bg-white/60 border border-cocoa/15 rounded-xl px-4 py-3 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-gold focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary w-full mt-7 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  {sent ? "Opening WhatsApp…" : "Send via WhatsApp"}
                  <HiOutlinePaperAirplane className="rotate-45" />
                </button>

                {sent && (
                  <p className="text-xs text-[#25D366] mt-3 text-center font-alt">
                    ✓ WhatsApp opened with your inquiry details. We'll respond shortly!
                  </p>
                )}

                <p className="text-xs text-charcoal/30 text-center mt-4 font-alt">
                  Your details will be sent directly to our export team via WhatsApp.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}