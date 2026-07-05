import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight, HiOutlineArrowRight } from "react-icons/hi2";
import Reveal from "./Reveal";
import { products } from "../data/products";

const FEATURED_COUNT = 6;

export default function Products() {
  const featured = products.slice(0, FEATURED_COUNT);
  const remaining = products.length - FEATURED_COUNT;

  return (
    <section id="products" className="section-pad bg-sandalwood relative overflow-hidden">
      {/* ambient background accents to match Industries section */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-camel/20 blur-3xl" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal><span className="eyebrow">Our Products</span></Reveal>
            <Reveal delay={0.1}>
              <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5 max-w-xl">
                A Complete Range of Leather & Raw Materials
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-charcoal/60 max-w-sm">
              From finished leather to raw hides and skins, every product is graded,
              inspected, and prepared to international export standards.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/products/${p.slug}`}
                className="group relative block bg-white2 rounded-3xl overflow-hidden border border-cocoa/[0.06] shadow-soft hover:shadow-luxury transition-all duration-500 ease-lux hover:-translate-y-1.5"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.images[0]}
                    alt={p.name}
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

        {remaining > 0 && (
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col items-center text-center">
              <p className="text-charcoal/50 text-sm font-alt mb-5">
                +{remaining} more product{remaining > 1 ? "s" : ""} across raw hides, wet blue, crust &amp; custom leather
              </p>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 bg-cocoa text-white2 font-alt font-medium text-sm tracking-wide px-8 py-4 rounded-full shadow-luxury hover:bg-gold transition-all duration-400 hover:-translate-y-0.5"
              >
                View All Products
                <HiOutlineArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}