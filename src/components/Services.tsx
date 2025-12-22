import { 
  Share2, 
  Megaphone, 
  TrendingUp, 
  Video, 
  PenTool, 
  Briefcase,
  Palette,
  Check
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement and brand awareness",
    features: ["Platform Strategy", "Audience Targeting", "Engagement Growth", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Online Promotion",
    description: "Amplify your brand's reach with targeted online promotional campaigns",
    features: ["Paid Advertising", "Organic Reach", "Influencer Outreach", "Brand Awareness"],
  },
  {
    icon: TrendingUp,
    title: "Page Growth",
    description: "Grow your social media following with proven strategies and tactics",
    features: ["Follower Growth", "Engagement Boost", "Content Optimization", "Analytics"],
  },
  {
    icon: Video,
    title: "Event Coverage",
    description: "Professional coverage for your events across all digital platforms",
    features: ["Live Coverage", "Photo/Video", "Social Updates", "Post-Event Content"],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that captivates your audience and tells your story",
    features: ["Blog Posts", "Copywriting", "Video Scripts", "Social Content"],
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Complete digital business management to streamline your operations",
    features: ["Digital Strategy", "Brand Management", "Process Optimization", "Consulting"],
  },
  {
    icon: Palette,
    title: "Graphic Designs",
    description: "Eye-catching visuals that make your brand stand out from the crowd",
    features: ["Brand Identity", "Social Graphics", "Marketing Materials", "UI/UX Design"],
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-3d overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
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
