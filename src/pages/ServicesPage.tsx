import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, Camera, Megaphone, BarChart, Globe, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Professional content creation for blogs, websites, and publications. Our experienced writers deliver engaging, SEO-optimized content.",
    features: ["Blog Posts", "Articles", "Website Copy", "Press Releases"],
  },
  {
    icon: Camera,
    title: "Photography",
    description: "High-quality photography services for events, portraits, and commercial use. Capture your moments with professional expertise.",
    features: ["Event Coverage", "Portrait Sessions", "Product Photography", "Editorial Shoots"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your online presence and reach your target audience effectively.",
    features: ["Social Media Management", "Email Campaigns", "PPC Advertising", "Content Marketing"],
  },
  {
    icon: BarChart,
    title: "Media Analytics",
    description: "Data-driven insights to understand your audience and optimize your content strategy for maximum impact.",
    features: ["Audience Analysis", "Performance Reports", "Trend Analysis", "ROI Tracking"],
  },
  {
    icon: Globe,
    title: "News Syndication",
    description: "Distribute your stories across multiple platforms and reach a wider audience through our syndication network.",
    features: ["Multi-platform Distribution", "Content Licensing", "Partner Networks", "Global Reach"],
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional video content creation from concept to final edit. Perfect for documentaries, interviews, and promotional content.",
    features: ["Documentary Films", "Interviews", "Promotional Videos", "Live Streaming"],
  },
];

const ServicesPage = () => {
  return (
    <MainLayout fullWidth>
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full max-w-full">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From content creation to digital marketing, we offer a comprehensive suite of 
              media services to help you tell your story and reach your audience.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your media goals. 
                Contact us today for a free consultation.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
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
