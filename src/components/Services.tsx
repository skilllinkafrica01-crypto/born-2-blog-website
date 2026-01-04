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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement and brand awareness across all major platforms.",
    features: ["Platform Strategy", "Audience Targeting", "Engagement Growth", "Analytics"],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that captivates your audience and tells your brand's unique story.",
    features: ["Blog Posts", "Video Scripts", "Social Content", "Copywriting"],
  },
  {
    icon: Video,
    title: "Event Coverage",
    description: "Professional coverage for your events across all digital platforms with live updates.",
    features: ["Live Coverage", "Photo/Video", "Social Updates", "Post-Event Content"],
  },
  {
    icon: TrendingUp,
    title: "Page Growth",
    description: "Grow your social media following with proven strategies and data-driven tactics.",
    features: ["Follower Growth", "Engagement Boost", "Content Optimization", "Analytics"],
  },
  {
    icon: Megaphone,
    title: "Online Promotion",
    description: "Amplify your brand's reach with targeted online promotional campaigns that convert.",
    features: ["Paid Advertising", "Organic Reach", "Influencer Outreach", "Brand Awareness"],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Eye-catching visuals that make your brand stand out from the competition.",
    features: ["Brand Identity", "Social Graphics", "Marketing Materials", "UI/UX Design"],
  },
  {
    icon: Briefcase,
    title: "Business Management",
    description: "Complete digital business management to streamline your operations and maximize efficiency.",
    features: ["Digital Strategy", "Brand Management", "Process Optimization", "Consulting"],
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-3d overflow-hidden transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        transitionDuration: "600ms"
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-glow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      {/* Icon with bounce animation on hover */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:animate-pulse" />
      </div>

      {/* Content */}
      <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
        {service.description}
      </p>

      {/* Features with staggered animation */}
      <ul className="space-y-2">
        {service.features.map((feature, featureIndex) => (
          <li 
            key={feature} 
            className={`flex items-center gap-2 text-sm text-muted-foreground transform transition-all duration-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: `${(index * 100) + (featureIndex * 50) + 200}ms` }}
          >
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span className="group-hover:text-foreground transition-colors duration-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      
      {/* Bottom shadow on hover */}
      <div className="absolute -bottom-2 left-4 right-4 h-8 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="services" 
      ref={ref}
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            Our Services
          </span>
          <h2 className={`font-heading text-4xl sm:text-5xl font-bold mb-6 transform transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}>
            What We <span className="text-gradient">Offer</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 transform transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`} />
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transform transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Comprehensive digital marketing solutions designed to elevate your brand and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
