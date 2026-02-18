import { ScanSearch, MapPinned, Activity, BarChart3, ZoomIn, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  { icon: ScanSearch, title: "AI Pothole Detection", desc: "YOLO-powered real-time detection identifies potholes with precision." },
  { icon: MapPinned, title: "GPS Location Tagging", desc: "Automatic geo-tagging pins every detection on the map." },
  { icon: Activity, title: "Real-Time Reporting", desc: "Instant live reporting as you scan roads on the go." },
  { icon: BarChart3, title: "Road Damage Analytics", desc: "Aggregate data for insightful road condition analysis." },
  { icon: ZoomIn, title: "Pinch Zoom Camera", desc: "Intuitive pinch-to-zoom for detailed road surface inspection." },
  { icon: Sparkles, title: "Clean Glass UI", desc: "Premium glassmorphism interface for a modern experience." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          Built for <span className="gradient-text">Impact</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <AnimatedSection key={f.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-7 h-full hover:glow-border transition-all duration-300 group cursor-default">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
