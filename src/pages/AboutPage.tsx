import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";

const values = [
  { icon: Target, title: "Accuracy", description: "We prioritize factual reporting and thorough fact-checking." },
  { icon: Eye, title: "Transparency", description: "We're open about our sources and methods." },
  { icon: Heart, title: "Integrity", description: "We maintain the highest ethical standards." },
  { icon: Award, title: "Excellence", description: "We strive for quality in everything we publish." },
];

const stats = [
  { value: "1M+", label: "Monthly Readers" },
  { value: "500+", label: "Articles Published" },
  { value: "50+", label: "Contributors" },
  { value: "10+", label: "Countries Reached" },
];

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-gradient">Born to Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a dedicated team of journalists and content creators committed to bringing you 
              the most accurate and timely news from Sierra Leone and around the world.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, reliable, and comprehensive news coverage that empowers 
                  citizens to make informed decisions and participate actively in their communities. 
                  We believe in the power of journalism to drive positive change.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and influential news platform in West Africa, 
                  known for our commitment to truth, innovation in storytelling, and dedication 
                  to serving our readers with excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-2xl border border-border">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Story */}
          <Card className="bg-gradient-to-br from-card to-muted/30 border-border">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Born to Blog was founded with a simple yet powerful vision: to create a platform 
                  where quality journalism meets accessibility. In a world flooded with information, 
                  we saw the need for a trusted source that Sierra Leoneans could rely on.
                </p>
                <p>
                  What started as a small blog has grown into a comprehensive news platform, 
                  reaching readers across the globe. Our team of dedicated journalists works 
                  tirelessly to bring you stories that matter, from local community events to 
                  global developments.
                </p>
                <p>
                  Today, we continue to innovate and expand, always keeping our readers at the 
                  heart of everything we do. We're not just reporting news – we're building a 
                  community of informed, engaged citizens.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
