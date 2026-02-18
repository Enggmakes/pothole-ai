import { Camera, Brain, MapPin, Database } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  { icon: Camera, step: "01", title: "Scan the Road", desc: "Point your phone's camera at the road surface while driving or walking." },
  { icon: Brain, step: "02", title: "AI Detects Potholes", desc: "The YOLO model processes frames in real-time to identify road damage." },
  { icon: MapPin, step: "03", title: "GPS Stores Location", desc: "Each detection is tagged with precise GPS coordinates automatically." },
  { icon: Database, step: "04", title: "Data Logged", desc: "Results are pushed to Google Sheets for analytics and reporting." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Simple. <span className="gradient-text">Powerful.</span>
        </h2>
      </AnimatedSection>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-10">
          {steps.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.15}>
              <div className="flex gap-6 items-start">
                <div className="relative z-10 h-12 w-12 md:h-16 md:w-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 glow-box">
                  <s.icon size={24} className="text-primary" />
                </div>
                <div>
                  <span className="text-primary font-mono text-xs font-semibold">Step {s.step}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
