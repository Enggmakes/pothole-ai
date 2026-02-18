import { Map, LayoutDashboard, Layers } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const visions = [
  { icon: Map, title: "Pothole Heatmaps", desc: "Visualize road damage density across cities with interactive heatmap overlays." },
  { icon: LayoutDashboard, title: "Safety Dashboards", desc: "Comprehensive road safety dashboards for municipalities and government agencies." },
  { icon: Layers, title: "Multi-Model Detection", desc: "Expand beyond potholes — plant overgrowth, traffic sign damage, and more." },
];

const FutureVisionSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Roadmap</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Future <span className="gradient-text">Vision</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto mt-3">
          We're building toward a comprehensive road intelligence platform.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {visions.map((v, i) => (
          <AnimatedSection key={v.title} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 h-full text-center hover:glow-border transition-all duration-300 group">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 mx-auto group-hover:bg-primary/20 transition-colors">
                <v.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FutureVisionSection;
