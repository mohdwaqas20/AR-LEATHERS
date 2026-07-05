import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { ScrollProgress, BackToTop, WhatsAppButton } from "./components/FloatingUI";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import AllProducts from "./pages/AllProducts";

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="font-body">
      <Loader show={loading} />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}