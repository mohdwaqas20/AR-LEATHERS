import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import Process from "../components/Process";
import QualityControl from "../components/QualityControl";
import Industries from "../components/Industries";
import GlobalExport from "../components/GlobalExport";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChoose />
      <Process />
      <QualityControl />
      <Industries />
      <GlobalExport />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
}