import { Target, Heart, Lightbulb, Users, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empowering youth and businesses to rise to their full digital potential through strategic storytelling and online visibility.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To turn ordinary brands into online stars by combining data-driven marketing with creative excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving our strategies to stay ahead of trends and deliver cutting-edge solutions for our clients.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships and fostering meaningful connections between brands and their audiences.",
  },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Who We <span className="text-gradient">Are</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Founded on March 23, 2020</span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            <span className="text-primary font-semibold">Born to Blog (B2B)</span> is a creative digital and social media agency 
            dedicated to helping brands grow through strategic storytelling, content, and online visibility. 
            We turn ordinary brands into online stars by combining data-driven marketing with creative excellence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Based in <span className="text-foreground font-medium">Freetown, Sierra Leone</span>, our team of creative strategists, 
            content creators, and social media experts work tirelessly to craft compelling narratives that resonate 
            with your audience and drive real results.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative p-6 rounded-2xl glass border border-border hover:border-primary/50 transition-all duration-500 card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
        </div>

        {/* Founder Quote */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-card border border-border">
            <div className="absolute -top-4 left-8 text-6xl text-primary/30 font-serif">"</div>
            <blockquote className="text-lg sm:text-xl text-foreground italic leading-relaxed mb-4 pl-8">
              I founded Born to Blog to empower youth and businesses to rise to their full digital potential. Every brand has a story worth sharing.
            </blockquote>
            <cite className="flex items-center gap-4 not-italic pl-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">SM</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">H.E. Sahr Memphis</div>
                <div className="text-sm text-muted-foreground">Founder & CEO, Born to Blog</div>
              </div>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
