import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, PenTool, Camera, TrendingUp, Megaphone, Palette, Briefcase, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement and brand awareness across all major platforms.",
    features: ["Platform Strategy", "Audience Targeting", "Engagement Growth", "Performance Analytics"],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Compelling content that captivates your audience and tells your brand's unique story.",
    features: ["Blog Posts & Articles", "Video Scripts", "Social Media Content", "Copywriting"],
  },
  {
    icon: Camera,
    title: "Event Coverage",
    description: "Professional coverage for your events across all digital platforms with live updates.",
    features: ["Live Coverage", "Photo & Video", "Social Media Updates", "Post-Event Content"],
  },
  {
    icon: TrendingUp,
    title: "Page Growth",
    description: "Grow your social media following with proven strategies and data-driven tactics.",
    features: ["Follower Growth", "Engagement Boost", "Content Optimization", "Audience Analytics"],
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
    features: ["Digital Strategy", "Brand Management", "Process Optimization", "Business Consulting"],
  },
];

const ServicesPage = () => {
  return (
    <MainLayout fullWidth>
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full max-w-full">
          {/* Hero */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand,
              grow your audience, and accelerate your business success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-card border-border">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your digital marketing goals. 
                Contact us today for a free consultation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
