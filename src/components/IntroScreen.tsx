import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"brand" | "tagline" | "exit">("brand");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(onComplete, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
        style={{ background: "#0a0c12" }}
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-overlay pointer-events-none" />

        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.06)_0%,_transparent_60%)]" />

        {/* Horizontal accent line */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(74,222,128,0.3), rgba(230,126,34,0.2), transparent)" }}
          initial={{ width: 0 }}
          animate={{ width: "60vw" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Brand */}
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Logo mark */}
          <motion.div
            className="mb-8 flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="logo-mark" />
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.45) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            DOMICOACHING
          </motion.h1>

          <motion.p
            className="mt-5 text-xs sm:text-sm tracking-[0.25em] uppercase"
            style={{ fontFamily: "var(--font-mono)", color: "var(--ink-3)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Online Fitness Coaching
          </motion.p>

          {/* Tagline */}
          <motion.p
            className="mt-8 text-sm sm:text-base font-light tracking-wide"
            style={{ color: "var(--ink-2)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={phase === "tagline" || phase === "exit" ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6 }}
          >
            Built for those who want more.
          </motion.p>
        </motion.div>

        {/* Bottom line */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={phase === "tagline" || phase === "exit" ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-px h-8" style={{ background: "linear-gradient(to bottom, var(--ink-4), transparent)" }} />
        </motion.div>

        {/* Progress bar at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: "rgba(255,255,255,0.04)" }}>
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg, var(--accent), var(--secondary-accent))" }}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.4, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroScreen;
