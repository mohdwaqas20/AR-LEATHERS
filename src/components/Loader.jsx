import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-sandalwood"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }}
        >
          <div className="flex flex-col items-center">
            <motion.img
              src={logo}
              alt="AR Leathers"
              className="w-28 md:w-36"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              className="mt-6 h-[2px] w-40 bg-camel/40 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gold"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
            <motion.p
              className="mt-4 text-[11px] tracking-[0.35em] uppercase text-cocoa/60 font-alt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Crafted from Heritage
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
