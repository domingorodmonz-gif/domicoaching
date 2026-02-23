import MultiStepForm from "../components/MultiStepForm";
import heroImage from "../assets/hero-fitness.jpg";

const features = [
{ title: "Personalized training plan", desc: "Built around your schedule, experience, and goals." },
{ title: "Customized nutrition guidance", desc: "Flexible strategies that fit your lifestyle." },
{ title: "Weekly check-ins", desc: "Consistent feedback to keep you progressing." },
{ title: "Ongoing accountability", desc: "Support between sessions, whenever you need it." }];



const Index = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="w-full lg:min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
          {/* Mobile Image */}
          <div className="lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8">
            <img
              alt="Professional fitness coaching"
              className="w-full h-full object-cover object-[50%_10%]"
              loading="eager"
              src="/lovable-uploads/95a9de59-16e0-4ee0-8487-35464cda8d8c.png" />

          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left — Image (desktop) */}
            <div className="hidden lg:block">
              <div className="relative aspect-[3/4] max-h-[680px] rounded-2xl overflow-hidden">
                <img
                  alt="Professional fitness coaching"
                  className="w-full h-full object-cover"
                  loading="eager"
                  src="/lovable-uploads/95a9de59-16e0-4ee0-8487-35464cda8d8c.png" />

              </div>
            </div>

            {/* Right — Form */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
                  DomiCoaching
                </p>
                <h1
                  className="text-4xl sm:text-5xl leading-[1.1] text-foreground mb-4 font-sans font-bold lg:text-6xl"
                  style={{ fontFamily: "var(--font-heading)" }}>
                  1:1 Online Fitness Coaching
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Answer a few questions to see if this coaching is the right fit for you.
                </p>
              </div>

              <div className="border border-border rounded-2xl bg-card shadow-sm overflow-hidden">
                <MultiStepForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-3xl sm:text-4xl lg:text-5xl font-bold italic text-primary-foreground leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}>"Comfort is the enemy of who you want to become"


          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl text-foreground mb-14 text-center"
            style={{ fontFamily: "var(--font-heading)" }}>
            What's Included
          </h2>
          <div className="flex flex-col gap-6">
            {features.map((f, i) =>
            <div key={f.title} className="flex items-center gap-6 bg-card rounded-2xl p-6 border border-border shadow-sm">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center text-xl font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-base mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About — Section 1 */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-14"
            style={{ fontFamily: "var(--font-heading)" }}>
            Why choose<br />online coaching?
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
            <div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img

                  alt="DomiCoaching founder"
                  className="w-full h-full object-cover"
                  loading="lazy" src="/lovable-uploads/774e2402-ee95-4cd5-a624-92aa4122dfc9.jpg" />

              </div>
            </div>
            <div className="flex items-end">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">Most people don’t fail because they lack discipline.
They fail because they lack structure.

Random routines. Inconsistent habits. Short bursts of motivation followed by frustration.
It’s not a willpower problem, it’s a clarity problem.

1:1 coaching removes the noise.

Everything is built around your life, your schedule, and your capacity.
No extremes. No unnecessary complexity. No wasted effort.

Just a clear, structured path, with real accountability.

The real question isn’t whether this works.
It’s whether you’re ready to stop operating below your standard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About — Section 2 */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            <div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img alt="Before — inicio del proceso" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/732dd686-10dd-47c5-a11f-a37403156248.jpg" />
              </div>
            </div>
            <div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img alt="After — +3 años de entrenamiento natural" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/2c27cf38-fa9e-48b8-b905-4bbefab67b01.jpg" />
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                I offer all kinds of workouts for all kinds of people: whether you're just getting started or have been in the gym for years. After more than three years training 100% natural, I've learned countless training styles, push/pull/legs, upper/lower, bro splits, full body, strength-focused blocks, and put together tons of easy recipes that actually fit into a real routine. I've also made a thousand mistakes along the way so you don't have to. All that experience, every lesson and every error, is what I now use to help you reach your goals faster, smarter, and always naturally.
              





              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a href="https://www.instagram.com/domingomnzon/" target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-background/30 hover:bg-background/10 transition-colors mb-6"
          aria-label="Instagram">

            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C16.67.014 16.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <div className="flex flex-col gap-2 text-sm text-background/70 items-center">

  	<a href="/terms.html" className="hover:underline">Website Terms</a>
      <a href="/privacy.html" className="hover:underline">Privacy Policy</a>
    </div>

    <p className="mt-6 text-xs text-background/60">
      © {new Date().getFullYear()} DomiCoaching. All rights reserved.
    </p>
  </div>
</footer>

      {/* Floating CTA */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:opacity-90 transition-opacity z-50">

        START NOW
      </button>
    </div>);
};

export default Index;