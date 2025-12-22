import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@borntoblog?_t=ZM-90lVmL5j05D&_r=1", icon: "T" },
  { label: "Facebook", href: "https://www.facebook.com/Born2Blog.SL", icon: "F" },
  { label: "Instagram", href: "https://www.instagram.com/born_to_blog_?igsh=MXZqYnh4ZW54dmVxYQ==", icon: "I" },
  { label: "X", href: "https://x.com/born2blog232", icon: "X" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <a
                  href="mailto:borntoblog232@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-muted-foreground">Email</div>
                    <div className="font-medium text-foreground text-sm sm:text-base truncate">borntoblog232@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:+23274116569"
                  className="flex items-center gap-3 sm:gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Phone</div>
                    <div className="font-medium text-foreground text-sm sm:text-base">+232 74-116569</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Headquarters</div>
                    <div className="font-medium text-foreground text-sm sm:text-base">Freetown, Sierra Leone</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 text-muted-foreground">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Availability</div>
                    <div className="font-medium text-foreground text-sm sm:text-base">Open 24/7</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
                <div className="text-sm text-muted-foreground mb-4">Follow us</div>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 font-medium"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-gradient-card border border-border">
            <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full group">
                Send Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
