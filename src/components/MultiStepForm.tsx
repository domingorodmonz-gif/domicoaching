import { useState } from "react";

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

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    name: "",
    goal: "",
    duration: "",
    obstacle: "",
    commitment: "",
    startTimeline: "",
    lookingFor: "",
    readyToInvest: "",
    whatsapp: "",
    email: "",
    instagram: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));

  const handleSelect = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
    setTimeout(next, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // 1. Enviar a Formspree (como antes)
      const response = await fetch("https://formspree.io/f/meelpppj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers)
      });

      // 2. Enviar a n8n para captura en CRM
      fetch("https://lithely-camailed-brielle.ngrok-free.dev/webhook/lead-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          ig_handle: answers.instagram || "",
          email: answers.email,
          goal: answers.goal,
          training_history: answers.duration,
          obstacle: answers.obstacle,
          commitment: answers.commitment,
          start_timeline: answers.startTimeline,
          looking_for: answers.lookingFor,
          ready_to_invest: answers.readyToInvest,
          whatsapp: answers.whatsapp
        })
      }).catch(() => {});

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form.");
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="font-heading text-xl mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Application received
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
          Thank you for applying. I personally review every application. If it looks like a good
          fit, I'll reach out shortly via WhatsApp or email with the next step.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Progress */}
      <div className="px-6 pt-6 pb-2">
        <div className="items-center justify-between mb-2 flex flex-row">
          <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            Step {step} of {TOTAL_STEPS}
          </span>
        </div>
        <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 pt-4">
        {/* Step 1 */}
        {step === 1 && (
          <StepWrapper question="What is your main goal?">
            {goalOptions.map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                selected={answers.goal === opt}
                onClick={() => handleSelect("goal", opt)}
              />
            ))}
          </StepWrapper>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <StepWrapper question="How long have you been trying to achieve this goal?">
            <TextInput
              value={answers.duration}
              onChange={(v) => setAnswers((p) => ({ ...p, duration: v }))}
              placeholder="e.g. 6 months, 2 years..."
              onNext={next}
            />
          </StepWrapper>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <StepWrapper question="What do you feel is currently holding you back?">
            <TextInput
              value={answers.obstacle}
              onChange={(v) => setAnswers((p) => ({ ...p, obstacle: v }))}
              placeholder="Be honest — there's no wrong answer."
              onNext={next}
            />
          </StepWrapper>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <StepWrapper question="How committed are you to improving your fitness and nutrition?">
            {commitmentOptions.map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                selected={answers.commitment === opt}
                onClick={() => handleSelect("commitment", opt)}
              />
            ))}
          </StepWrapper>
        )}

        {/* Step 5 */}
        {step === 5 && (
          <StepWrapper question="How soon are you looking to start?">
            {startOptions.map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                selected={answers.startTimeline === opt}
                onClick={() => handleSelect("startTimeline", opt)}
              />
            ))}
          </StepWrapper>
        )}

        {/* Step 6 */}
        {step === 6 && (
          <StepWrapper question="What are you looking for right now?">
            {lookingForOptions.map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                selected={answers.lookingFor === opt}
                onClick={() => handleSelect("lookingFor", opt)}
              />
            ))}
          </StepWrapper>
        )}

        {/* Step 7 */}
        {step === 7 && (
          <StepWrapper question="Are you ready to invest in coaching if it feels like the right fit?">
            {investOptions.map((opt) => (
              <OptionButton
                key={opt}
                label={opt}
                selected={answers.readyToInvest === opt}
                onClick={() => handleSelect("readyToInvest", opt)}
              />
            ))}
          </StepWrapper>
        )}

        {/* Step 8 */}
        {step === 8 && (
          <StepWrapper question="Last step — where can I reach you?">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                required
                value={answers.name}
                onChange={(e) => setAnswers((p) => ({ ...p, name: e.target.value }))}
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <input
                type="text"
                required
                value={answers.whatsapp}
                onChange={(e) => setAnswers((p) => ({ ...p, whatsapp: e.target.value }))}
                placeholder="WhatsApp number"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <input
                type="email"
                required
                value={answers.email}
                onChange={(e) => setAnswers((p) => ({ ...p, email: e.target.value }))}
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <input
                type="text"
                value={answers.instagram}
                onChange={(e) => setAnswers((p) => ({ ...p, instagram: e.target.value }))}
                placeholder="Instagram username (optional)"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>
            </form>
          </StepWrapper>
        )}
      </div>
    </div>
  );
};

const StepWrapper = ({
  question,
  children
}: {
  question: string;
  children: React.ReactNode;
}) => (
  <div className="animate-fade-in">
    <h3
      className="text-lg text-foreground mb-5 leading-snug font-sans font-bold"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      {question}
    </h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const OptionButton = ({
  label,
  selected,
  onClick
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
      selected
        ? "border-primary bg-primary/5 text-primary"
        : "border-border bg-background text-foreground hover:border-primary/40"
    }`}
  >
    {label}
  </button>
);

const TextInput = ({
  value,
  onChange,
  placeholder,
  onNext
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  onNext: () => void;
}) => (
  <div className="space-y-4">
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
    />

    <button
      type="button"
      onClick={onNext}
      disabled={!value.trim()}
      className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Continue
    </button>
  </div>
);

export default MultiStepForm;
