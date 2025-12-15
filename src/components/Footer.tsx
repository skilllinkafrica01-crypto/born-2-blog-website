import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "T", href: "#" },
    { name: "F", href: "#" },
    { name: "I", href: "#" },
    { name: "X", href: "#" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Born to Blog"
                className="w-14 h-14 rounded-full object-cover shadow-orange-glow"
              />
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">
                  Born to Blog
                </h3>
                <p className="text-primary text-sm">Top Notch</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering youth and businesses to rise to their full digital potential since 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-heading font-bold text-lg text-foreground mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +232 74-116569
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                borntoblog232@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Freetown, Sierra Leone
              </li>
            </ul>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-4">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {currentYear} Born to Blog. All rights reserved. Founded by H.E. Sahr Memphis.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
