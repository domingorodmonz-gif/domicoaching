import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MultiStepForm from "../components/MultiStepForm";
import IntroScreen from "../components/IntroScreen";
import ScrollReveal from "../components/ScrollReveal";

const features = [
  { icon: "⚛", title: "Personalized training plan", desc: "Built around your schedule, experience, and goals.", tag: "Custom" },
  { icon: "★", title: "Customized nutrition guidance", desc: "Flexible macro strategies that fit your lifestyle.", tag: "Nutrition" },
  { icon: "↻", title: "Weekly check-ins", desc: "Consistent feedback to keep you progressing.", tag: "Tracking" },
  { icon: "◉", title: "Ongoing accountability", desc: "Support between sessions, whenever you need it.", tag: "24/7" },
  { icon: "⇧", title: "Access to my custom training app", desc: "Track everything in one place — workouts, progress, and communication.", tag: "App" },
];

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <motion.div
        className="min-h-screen"
        style={{ background: "var(--bg)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {/* Grid overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] grid-overlay" />

        {/* Radial glows */}
        <div className="fixed inset-0 pointer-events-none z-[1]">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,222,128,0.05)_0%,_transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(230,126,34,0.04)_0%,_transparent_60%)]" />
        </div>

        {/* Top chrome / navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-5">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="logo-mark" />
              <div className="flex items-baseline" style={{ fontFamily: "var(--font-heading)", fontSize: "14px", letterSpacing: "0.18em", textTransform: "uppercase" as const }}>
                <span className="font-bold" style={{ color: "var(--ink)" }}>DOMI</span>
                <span className="font-medium" style={{ color: "var(--ink-3)" }}>COACHING</span>
              </div>
            </motion.div>
            <motion.a
              href="https://www.instagram.com/domingomonzonx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
              style={{ border: "1px solid var(--line-2)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="currentColor" style={{ color: "var(--ink-3)" }} viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </motion.a>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative w-full lg:min-h-screen flex items-center pt-20 lg:pt-0">
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
            {/* Mobile Image */}
            <motion.div
              className="lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8"
              style={{ border: "1px solid var(--line)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                alt="Professional fitness coaching"
                className="w-full h-full object-cover object-[50%_10%]"
                loading="eager"
                src="/lovable-uploads/95a9de59-16e0-4ee0-8487-35464cda8d8c.png"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left — Image (desktop) */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative aspect-[3/4] max-h-[680px] rounded-2xl overflow-hidden group" style={{ border: "1px solid var(--line)" }}>
                  <img
                    alt="Professional fitness coaching"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="eager"
                    src="/lovable-uploads/95a9de59-16e0-4ee0-8487-35464cda8d8c.png"
                  />
                  {/* Floating badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 backdrop-blur-md rounded-xl px-5 py-3"
                    style={{
                      background: "rgba(22,26,37,0.85)",
                      border: "1px solid var(--line-2)",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] mb-0.5" style={{ color: "var(--ink-3)" }}>Results-based</p>
                    <p className="text-sm font-semibold" style={{ color: "var(--ink)" }}>1:1 Premium Coaching</p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right — Form */}
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="mb-8">
                  <motion.div
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
                    style={{ border: "1px solid var(--line-2)", background: "rgba(255,255,255,0.02)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <span className="pulse-dot" />
                    <span className="font-mono text-[11px] tracking-[0.14em] uppercase" style={{ color: "var(--ink-2)" }}>
                      Now accepting applications
                    </span>
                  </motion.div>

                  <h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-4"
                    style={{
                      fontFamily: "var(--font-heading)",
                      background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    1:1 Online<br />Fitness Coaching
                  </h1>
                  <p className="text-base leading-relaxed max-w-md" style={{ color: "var(--ink-2)" }}>
                    Answer a few questions to see if this coaching is the right fit for you.
                  </p>
                </div>

                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <MultiStepForm />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quote Banner */}
        <section className="relative py-24 overflow-hidden" style={{ background: "var(--bg-2)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(74,222,128,0.04)_0%,_transparent_60%)]" />
          <ScrollReveal>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <div className="w-12 h-px mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)", opacity: 0.4 }} />
              <p
                className="text-3xl sm:text-4xl lg:text-5xl font-bold italic leading-tight"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                "Comfort is the enemy of who you want to become"
              </p>
              <div className="w-12 h-px mx-auto mt-8" style={{ background: "linear-gradient(90deg, transparent, var(--secondary-accent), transparent)", opacity: 0.3 }} />
            </div>
          </ScrollReveal>
        </section>

        {/* What's Included */}
        <section className="py-24 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-14">
                <div className="eyebrow flex items-center gap-4 mb-5">
                  <span className="block w-8 h-px" style={{ background: "var(--ink-4)" }} />
                  Everything you get
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--ink)",
                  }}
                >
                  What's Included.
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 0.08}>
                  <div
                    className="group relative rounded-2xl p-7 flex flex-col gap-4 transition-all duration-300 overflow-hidden h-full"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid var(--line)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                    }}
                  >
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-40 transition-opacity" style={{ background: "linear-gradient(90deg, transparent, var(--accent), transparent)" }} />

                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
                      style={{
                        background: "rgba(74,222,128,0.08)",
                        border: "1px solid rgba(74,222,128,0.2)",
                        color: "var(--train-2)",
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-base mb-1.5" style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>{f.desc}</p>
                    </div>
                    <span
                      className="mt-auto self-start font-mono text-[10px] tracking-[0.14em] uppercase px-3 py-1.5 rounded-full"
                      style={{
                        border: "1px solid var(--line-2)",
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {f.tag}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About — Section 1 */}
        <section className="py-24" style={{ background: "var(--bg-2)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-14">
                <div className="eyebrow flex items-center gap-4 mb-5">
                  <span className="block w-8 h-px" style={{ background: "var(--ink-4)" }} />
                  The approach
                </div>
                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}
                >
                  Why choose<br />online coaching?
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
              <ScrollReveal>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)" }}>
                  <img
                    alt="DomiCoaching founder"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700"
                    loading="lazy"
                    src="/lovable-uploads/774e2402-ee95-4cd5-a624-92aa4122dfc9.jpg"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="flex flex-col gap-6">
                  <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line" style={{ color: "var(--ink-2)" }}>
{`Most people don't fail because they lack discipline.
They fail because they lack structure.

Random routines. Inconsistent habits. Short bursts of motivation followed by frustration.
It's not a willpower problem, it's a clarity problem.

1:1 coaching removes the noise.

Everything is built around your life, your schedule, and your capacity.
No extremes. No unnecessary complexity. No wasted effort.

Just a clear, structured path, with real accountability.`}
                  </p>
                  <div
                    className="pl-5 text-sm italic leading-relaxed"
                    style={{
                      borderLeft: "3px solid var(--accent)",
                      color: "var(--ink-2)",
                    }}
                  >
                    "The real question isn't whether this works. It's whether you're ready to stop operating below your standard."
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About — Section 2 */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
              <ScrollReveal>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)" }}>
                  <img alt="Before — inicio del proceso" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/732dd686-10dd-47c5-a11f-a37403156248.jpg" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden" style={{ border: "1px solid var(--line)" }}>
                  <img alt="After — +3 años de entrenamiento natural" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/2c27cf38-fa9e-48b8-b905-4bbefab67b01.jpg" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex items-center h-full">
                  <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    I offer all kinds of workouts for all kinds of people: whether you're just getting started or have been in the gym for years. After more than three years training 100% natural, I've learned countless training styles, push/pull/legs, upper/lower, bro splits, full body, strength-focused blocks, and put together tons of easy recipes that actually fit into a real routine. I've also made a thousand mistakes along the way so you don't have to. All that experience, every lesson and every error, is what I now use to help you reach your goals faster, smarter, and always naturally.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="logo-mark" style={{ width: 20, height: 20 }} />
              <span className="font-mono text-[11px] tracking-[0.22em] uppercase" style={{ color: "var(--ink-3)", borderLeft: "1px solid var(--line-2)", paddingLeft: 16 }}>
                Online Fitness Coaching
              </span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center" style={{ color: "var(--ink-3)" }}>
              <a href="/terms.html" className="hover:underline transition-colors" style={{ color: "var(--ink-3)" }}>Website Terms</a>
              <a href="/privacy.html" className="hover:underline transition-colors" style={{ color: "var(--ink-3)" }}>Privacy Policy</a>
            </div>
            <p className="mt-6 text-xs" style={{ color: "var(--ink-4)" }}>
              &copy; {new Date().getFullYear()} DomiCoaching. All rights reserved.
            </p>
          </div>
        </footer>

        {/* Floating CTA */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 px-6 py-3 rounded-full font-semibold text-sm shadow-lg z-50 transition-all"
          style={{
            background: "var(--accent)",
            color: "var(--bg)",
            boxShadow: "0 0 24px rgba(74,222,128,0.25)",
          }}
        >
          APPLY NOW
        </motion.button>
      </motion.div>
    </>
  );
};

export default Index;
