import { Building2, ShieldCheck, LineChart, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { icon: Building2, title: "Municipal Road Mapping", desc: "Helps local governments identify and prioritize road repairs efficiently." },
  { icon: ShieldCheck, title: "Accident Prevention", desc: "Early detection of hazardous road conditions prevents vehicle damage and injuries." },
  { icon: LineChart, title: "Smart City Analytics", desc: "Generates actionable data for smart city infrastructure planning and budgeting." },
  { icon: Users, title: "Crowdsourced Monitoring", desc: "Every user contributes to a growing database of road conditions nationwide." },
];

const BenefitsSection = () => (
  <section id="benefits" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Impact</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Benefits to <span className="gradient-text">Society</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <AnimatedSection key={b.title} delay={i * 0.12}>
            <div className="glass rounded-2xl p-8 h-full hover:glow-border transition-all duration-300 group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <b.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
