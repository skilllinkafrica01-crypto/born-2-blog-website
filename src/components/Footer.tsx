import { Heart } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Born to Blog"
              className="w-12 h-12 rounded-full object-cover shadow-orange-glow"
            />
            <div>
              <div className="font-heading font-bold text-lg">
                <span className="text-gradient">Born to Blog</span>
              </div>
              <div className="text-sm text-muted-foreground">Top Notch Social Media Agency</div>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center">
            <p className="text-primary font-semibold italic">
              "We Make Businesses GO VIRAL!"
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} B2B. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </footer>
  );
};

export default Footer;
