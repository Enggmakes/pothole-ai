import { Download, Apple } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const DownloadSection = () => (
  <section id="download" className="section-padding">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="glass-strong rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-box">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Download <span className="gradient-text">Pothole AI</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Start scanning roads and contributing to safer infrastructure today. Available on Android.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Enggmakes/pothole-ai-showcase22/releases/download/apk/pothole_app.apk"
              download
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all text-base"
            >
              <Download size={20} />
              Download for Android
            </a>
            <div className="inline-flex items-center justify-center gap-3 glass px-8 py-4 rounded-2xl font-semibold text-muted-foreground cursor-default">
              <Apple size={20} />
              iOS — Coming Soon
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default DownloadSection;
