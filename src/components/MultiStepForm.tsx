import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_STEPS = 8;

const goalOptions = ["Lose fat", "Build muscle", "Improve lifestyle & habits"];
const commitmentOptions = [
  "Yes, I'm ready to invest in myself",
  "Interested but not sure yet",
  "Just exploring options"
];
const startOptions = ["ASAP", "Within 2-4 weeks", "Just exploring"];
const lookingForOptions = [
  "Just information",
  "A clear plan",
  "1:1 coaching and accountability"
];
const investOptions = ["Yes", "Possibly", "Not right now"];

const formatWhatsApp = (raw: string): string => {
  let digits = raw.replace(/[^\d+]/g, "");
  if (!digits.startsWith("+")) {
    digits = "+" + digits.replace(/\+/g, "");
  }
  return digits;
};

const isValidWhatsApp = (value: string): boolean => {
  const cleaned = value.replace(/[\s\-()]/g, "");
  return /^\+\d{7,15}$/.test(cleaned);
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState({
    name: "",
    goal: "",
    duration: "",
    obstacle: "",
    commitment: "",
    startTimeline: "",
    lookingFor: "",
    readyToInvest: "",
    whatsapp: "+",
    email: "",
    instagram: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [whatsappError, setWhatsappError] = useState("");

  const next = () => { setDirection(1); setStep((s) => Math.min(s + 1, TOTAL_STEPS)); };
  const prev = () => { setDirection(-1); setStep((s) => Math.max(s - 1, 1)); };

  const handleSelect = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(next, 300);
  };

  const handleWhatsAppChange = (raw: string) => {
    const formatted = formatWhatsApp(raw);
    setAnswers((p) => ({ ...p, whatsapp: formatted }));
    if (whatsappError && isValidWhatsApp(formatted)) setWhatsappError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidWhatsApp(answers.whatsapp)) {
      setWhatsappError("Enter your full number with country code (e.g. +34 612 345 678)");
      return;
    }
    try {
      const response = await fetch("https://formspree.io/f/meelpppj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers)
      });
      fetch("https://lithely-camailed-brielle.ngrok-free.dev/webhook/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name, ig_handle: answers.instagram || "", email: answers.email,
          goal: answers.goal, training_history: answers.duration, obstacle: answers.obstacle,
          commitment: answers.commitment, start_timeline: answers.startTimeline,
          looking_for: answers.lookingFor, ready_to_invest: answers.readyToInvest, whatsapp: answers.whatsapp
        })
      }).catch(() => {});
      if (response.ok) setSubmitted(true);
      else alert("Something went wrong. Please try again.");
    } catch (error) { console.error(error); alert("Error submitting form."); }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.25)" }}
        >
          <svg className="w-7 h-7" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-bold mb-3" style={{ color: "var(--ink)" }}>Application received</h3>
          <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: "var(--ink-2)" }}>
            I personally review every application. If it looks like a good fit, I'll reach out shortly via WhatsApp or email.
          </p>
          <div
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-full"
            style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "var(--accent)" }}
          >
            <span>⇧</span> You'll get access to my custom training app
          </div>
        </motion.div>
      </div>
    );
  }

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
  };

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[rgba(74,222,128,0.3)]";
  const inputStyle = { background: "var(--bg)", border: "1px solid var(--line-2)", color: "var(--ink)" };

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase" style={{ color: "var(--ink-3)" }}>
            Step {step} of {TOTAL_STEPS}
          </span>
          {step > 1 && (
            <button onClick={prev} className="font-mono text-[11px] tracking-[0.08em] uppercase flex items-center gap-1 transition-colors" style={{ color: "var(--ink-3)" }}>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>
        <div className="w-full h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, var(--accent), var(--secondary-accent, #e67e22))" }}
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <div className="p-6 pt-4 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {step === 1 && (
              <StepWrapper question="What is your main goal?">
                {goalOptions.map((opt) => <OptionButton key={opt} label={opt} selected={answers.goal === opt} onClick={() => handleSelect("goal", opt)} />)}
              </StepWrapper>
            )}
            {step === 2 && (
              <StepWrapper question="How long have you been trying to achieve this goal?">
                <TextInput value={answers.duration} onChange={(v) => setAnswers((p) => ({ ...p, duration: v }))} placeholder="e.g. 6 months, 2 years..." onNext={next} />
              </StepWrapper>
            )}
            {step === 3 && (
              <StepWrapper question="What do you feel is currently holding you back?">
                <TextInput value={answers.obstacle} onChange={(v) => setAnswers((p) => ({ ...p, obstacle: v }))} placeholder="Be honest — there's no wrong answer." onNext={next} />
              </StepWrapper>
            )}
            {step === 4 && (
              <StepWrapper question="How committed are you to improving your fitness and nutrition?">
                {commitmentOptions.map((opt) => <OptionButton key={opt} label={opt} selected={answers.commitment === opt} onClick={() => handleSelect("commitment", opt)} />)}
              </StepWrapper>
            )}
            {step === 5 && (
              <StepWrapper question="How soon are you looking to start?">
                {startOptions.map((opt) => <OptionButton key={opt} label={opt} selected={answers.startTimeline === opt} onClick={() => handleSelect("startTimeline", opt)} />)}
              </StepWrapper>
            )}
            {step === 6 && (
              <StepWrapper question="What are you looking for right now?">
                {lookingForOptions.map((opt) => <OptionButton key={opt} label={opt} selected={answers.lookingFor === opt} onClick={() => handleSelect("lookingFor", opt)} />)}
              </StepWrapper>
            )}
            {step === 7 && (
              <StepWrapper question="Are you ready to invest in coaching if it feels like the right fit?">
                {investOptions.map((opt) => <OptionButton key={opt} label={opt} selected={answers.readyToInvest === opt} onClick={() => handleSelect("readyToInvest", opt)} />)}
              </StepWrapper>
            )}
            {step === 8 && (
              <StepWrapper question="Last step — where can I reach you?">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" required value={answers.name} onChange={(e) => setAnswers((p) => ({ ...p, name: e.target.value }))} placeholder="Full name" className={inputClass} style={inputStyle} />
                  <div>
                    <input
                      type="tel" required value={answers.whatsapp}
                      onChange={(e) => handleWhatsAppChange(e.target.value)}
                      placeholder="+34 612 345 678"
                      className={inputClass}
                      style={{ ...inputStyle, borderColor: whatsappError ? "rgba(248,113,113,0.5)" : "var(--line-2)" }}
                    />
                    {whatsappError && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-xs mt-1.5 ml-1" style={{ color: "#f87171" }}>
                        {whatsappError}
                      </motion.p>
                    )}
                    <p className="font-mono text-[10px] mt-1.5 ml-1 tracking-wide" style={{ color: "var(--ink-4)" }}>
                      Include country code (e.g. +34, +1, +44)
                    </p>
                  </div>
                  <input type="email" required value={answers.email} onChange={(e) => setAnswers((p) => ({ ...p, email: e.target.value }))} placeholder="Email address" className={inputClass} style={inputStyle} />
                  <input type="text" value={answers.instagram} onChange={(e) => setAnswers((p) => ({ ...p, instagram: e.target.value }))} placeholder="Instagram username (optional)" className={inputClass} style={inputStyle} />
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all active:scale-[0.98]"
                    style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 16px rgba(74,222,128,0.2)" }}
                  >
                    Submit Application
                  </button>
                </form>
              </StepWrapper>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const StepWrapper = ({ question, children }: { question: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-bold mb-5 leading-snug tracking-tight" style={{ fontFamily: "var(--font-heading)", color: "var(--ink)" }}>
      {question}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <motion.button
    type="button"
    onClick={onClick}
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    className="w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200"
    style={{
      background: selected ? "rgba(74,222,128,0.06)" : "var(--bg)",
      border: selected ? "1px solid rgba(74,222,128,0.35)" : "1px solid var(--line-2)",
      color: selected ? "var(--accent)" : "var(--ink)",
    }}
  >
    {label}
  </motion.button>
);

const TextInput = ({ value, onChange, placeholder, onNext }: { value: string; onChange: (v: string) => void; placeholder: string; onNext: () => void }) => (
  <div className="space-y-4">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[rgba(74,222,128,0.3)]"
      style={{ background: "var(--bg)", border: "1px solid var(--line-2)", color: "var(--ink)" }}
    />
    <button
      type="button"
      onClick={onNext}
      disabled={!value.trim()}
      className="w-full py-3 rounded-xl font-medium text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      style={{ background: "var(--accent)", color: "var(--bg)" }}
    >
      Continue
    </button>
  </div>
);

export default MultiStepForm;
