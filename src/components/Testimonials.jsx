import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { HiStar } from "react-icons/hi";
import Reveal from "./Reveal";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mehmet Aydın",
    company: "Aydın Deri Sanayi",
    country: "🇹🇷 Turkey",
    text: "AR Leathers has been a dependable sourcing partner for our tannery. Consistent grading and on-time shipments every single order.",
  },
  {
    name: "Li Wei",
    company: "Wei Leather Imports",
    country: "🇨🇳 China",
    text: "The quality of the wet blue hides matches exactly what was specified. Communication throughout the export process was excellent.",
  },
  {
    name: "Giulia Romano",
    company: "Romano Pelletteria",
    country: "🇮🇹 Italy",
    text: "Working with AR Leathers feels like working with an Italian tannery — attention to detail and genuine craftsmanship values.",
  },
  {
    name: "Ahmed Al Farsi",
    company: "Al Farsi Trading LLC",
    country: "🇦🇪 UAE",
    text: "Reliable supply chain and transparent pricing. We've built a long-term relationship over several years of bulk orders.",
  },
  {
    name: "James Whitfield",
    company: "Whitfield Hides Co.",
    country: "🇺🇸 USA",
    text: "Professional export documentation and a team that responds quickly to every inquiry. Highly recommended partner.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-sandalwood">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal><span className="eyebrow mx-auto before:hidden justify-center">Client Testimonials</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="heading-serif text-4xl md:text-[2.75rem] mt-5">
              Trusted by Partners Across the Globe
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
            className="!pb-14"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="bg-amberlux/25 rounded-3xl p-8 h-full flex flex-col shadow-soft">
                  <div className="flex gap-1 text-gold mb-4">
                    {Array.from({ length: 5 }).map((_, i) => <HiStar key={i} />)}
                  </div>
                  <p className="text-charcoal/70 leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-6 pt-6 border-t border-cocoa/10">
                    <p className="font-display text-charcoal">{t.name}</p>
                    <p className="text-xs text-charcoal/50 mt-1 font-alt">{t.company} · {t.country}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
