import { 
  PenTool, 
  Share2, 
  BarChart3, 
  Megaphone, 
  Camera, 
  Palette,
  Check
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling blog posts, articles, and copy that captivates your audience",
    features: ["Blog Writing", "Copywriting", "SEO Content", "Email Campaigns"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic management across all major social platforms",
    features: ["Daily Posting", "Community Management", "Engagement Strategy", "Analytics"],
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description: "Data-driven insights to optimize your digital presence",
    features: ["Performance Tracking", "Audience Insights", "ROI Reports", "Competitor Analysis"],
  },
  {
    icon: Megaphone,
    title: "Brand Strategy",
    description: "Build a memorable brand identity that stands out",
    features: ["Brand Voice", "Messaging", "Positioning", "Guidelines"],
  },
  {
    icon: Camera,
    title: "Visual Content",
    description: "Eye-catching graphics and videos that stop the scroll",
    features: ["Graphics Design", "Video Production", "Reels & Stories", "Thumbnails"],
  },
  {
    icon: Palette,
    title: "Creative Campaigns",
    description: "Viral-worthy campaigns that drive engagement and conversions",
    features: ["Campaign Strategy", "Influencer Outreach", "Paid Ads", "A/B Testing"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed to elevate your brand and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-3d overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
