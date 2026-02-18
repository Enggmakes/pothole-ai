import { Brain, MapPin, FileSpreadsheet } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  { icon: Brain, title: "YOLO AI Model", desc: "Uses state-of-the-art YOLO object detection to identify potholes and road damage with high accuracy in real-time." },
  { icon: MapPin, title: "GPS Geo-Tagging", desc: "Every detection is automatically tagged with precise GPS coordinates for accurate location tracking and mapping." },
  { icon: FileSpreadsheet, title: "Live Data Logging", desc: "Detection data is logged to Google Sheets in real-time, enabling instant analytics and reporting for road authorities." },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">About the App</p>
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          Smarter Roads Start With <span className="gradient-text">AI</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Pothole AI transforms your smartphone into a road safety tool. Using advanced computer vision, it detects road damage instantly, logs precise locations, and builds actionable data for safer communities.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 h-full hover:glow-border transition-all duration-300 group">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
