const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-xs">P</span>
        </div>
        <span className="text-foreground font-bold">Pothole <span className="text-primary">AI</span></span>
      </div>

      <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>

      <p className="text-xs text-muted-foreground">© 2026 Pothole AI. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
