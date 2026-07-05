import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from "../assets/navbar.png";

const links = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Products", to: "products" },
  { label: "Services", to: "services" },
  { label: "Process", to: "process" },
  { label: "Global Reach", to: "global" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-lux ${
          scrolled
            ? "bg-sandalwood/90 backdrop-blur-xl shadow-soft py-3"
            : "bg-sandalwood/60 backdrop-blur-sm py-6"
        }`}
      >
        <nav className="container-x flex items-center justify-between">
          <button onClick={() => goTo("home")} className="flex items-center gap-3">
            <img src={logo} alt="AR Leathers" className="h-10 md:h-12 w-auto" />
          </button>

          <div className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <button
                key={l.to}
                onClick={() => goTo(l.to)}
                className="text-[13px] tracking-[0.12em] uppercase font-alt font-medium text-cocoa hover:text-gold transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => goTo("contact")} className="hidden lg:inline-flex btn-primary !py-3 !px-6 text-xs">
            Get a Quote
          </button>

          <button className="lg:hidden text-cocoa text-2xl" onClick={() => setOpen(true)} aria-label="Open menu">
            <HiOutlineMenu />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#DDC5A2" }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between container-x pt-6">
              <img src={logo} alt="AR Leathers" className="h-10 w-auto" />
              <button className="text-cocoa text-3xl" onClick={() => setOpen(false)} aria-label="Close menu">
                <HiOutlineX />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-6 container-x">
              {links.map((l, i) => (
                <motion.button
                  key={l.to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  onClick={() => goTo(l.to)}
                  className="text-3xl font-display text-cocoa hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
