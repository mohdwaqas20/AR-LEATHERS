import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowUpRight, HiOutlineArrowRight, HiOutlineArrowLeft } from "react-icons/hi2";
import { products } from "../data/products";
import Reveal from "../components/Reveal";

export default function AllProducts() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = useMemo(() => {
    const set = new Set(products.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-28 pb-24 bg-sandalwood relative overflow-hidden min-h-screen">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-camel/20 blur-3xl" />

      <div className="container-x relative">
        <nav className="text-xs text-charcoal/50 font-alt flex items-center gap-2 mb-8">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-charcoal">All Products</span>
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-alt text-charcoal/60 hover:text-gold transition-colors mb-6"
        >
          <HiOutlineArrowLeft /> Back
        </button>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <Reveal><span className="eyebrow">Full Catalogue</span></Reveal>
            <Reveal delay={0.1}>
              <h1 className="heading-serif text-4xl md:text-[2.75rem] mt-5 max-w-xl">
                All Leather &amp; Raw Materials
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 max-w-sm">
              Browse our complete range — {products.length} products across raw hides,
              wet blue, crust, finished leather, and custom development.
            </p>
          </Reveal>
        </div>

        {/* Category filters */}
        <Reveal delay={0.25}>
          <div className="flex flex-wrap gap-2.5 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-5 py-2.5 rounded-full text-xs font-alt font-semibold uppercase tracking-wide transition-all duration-300 ${
                  activeCategory === c
                    ? "bg-cocoa text-white2 shadow-luxury"
                    : "bg-white2 text-charcoal/60 hover:text-gold border border-cocoa/[0.08]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.06}>
              <Link
                to={`/products/${p.slug}`}
                className="group relative block bg-white2 rounded-3xl overflow-hidden border border-cocoa/[0.06] shadow-soft hover:shadow-luxury transition-all duration-500 ease-lux hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-lux group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 bg-white2/90 backdrop-blur text-cocoa text-[10px] tracking-wide uppercase font-alt font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    {p.category}
                  </span>
                  <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gold text-white2 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-luxury">
                    <HiOutlineArrowUpRight />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-charcoal group-hover:text-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-charcoal/55 text-sm mt-2 leading-relaxed">{p.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-alt font-semibold uppercase tracking-wide text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details <HiOutlineArrowRight />
                  </span>
                </div>
                <div className="absolute inset-0 rounded-3xl ring-1 ring-gold/0 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none" />
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-charcoal/50 py-20">No products found in this category.</p>
        )}

        {/* Inquiry CTA */}
        <Reveal>
          <div className="mt-20 bg-gradient-to-br from-cream to-camel/40 rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cocoa">Can&apos;t find what you&apos;re looking for?</h3>
              <p className="text-cocoa/60 mt-2">Share your requirement and our export team will get back with pricing and lead time.</p>
            </div>
            <button onClick={() => navigate("/#contact")} className="btn-primary shrink-0">
              Send Inquiry <HiOutlineArrowRight />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}