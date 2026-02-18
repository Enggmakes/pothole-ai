import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">AI-Powered Detection</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-foreground">Pothole</span>
              <br />
              <span className="gradient-text glow-text">AI</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-4 font-light">
              AI-Powered Road Safety Detection
            </p>
            <p className="text-sm md:text-base text-muted-foreground/70 max-w-md mb-8">
              Detect, locate, and report road damage in real-time using advanced YOLO AI models and GPS technology. Making roads safer, one scan at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all glow-box"
              >
                <Download size={18} />
                Download for Android
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 glass hover:bg-card/60 px-7 py-3.5 rounded-xl font-semibold text-foreground transition-all"
              >
                <Play size={18} />
                See How It Works
              </a>
            </div>

            <div className="flex items-center gap-8 mt-10">
              <div>
                <p className="text-2xl font-bold text-foreground">99%</p>
                <p className="text-xs text-muted-foreground">Detection Rate</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">Real-Time</p>
                <p className="text-xs text-muted-foreground">GPS Logging</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold text-foreground">Free</p>
                <p className="text-xs text-muted-foreground">Open Source</p>
              </div>
            </div>
          </motion.div>

          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={appMockup}
                alt="Pothole AI App Preview"
                className="relative w-72 md:w-80 animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
