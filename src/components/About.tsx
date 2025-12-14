import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "Empowering businesses to thrive in the digital age through strategic content creation and social media excellence.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description: "To be the leading force in transforming how brands connect, engage, and grow their online communities.",
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
  return (
    <section id="about" className="py-24 relative overflow-hidden">
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
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
            At <span className="text-primary font-semibold">Born to Blog (B2B)</span>, we're more than just a social media agency — 
            we're your partners in digital growth. Founded with a passion for storytelling and a deep understanding of 
            the digital landscape, we help businesses of all sizes achieve their online goals.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of creative strategists, content creators, and social media experts work tirelessly to craft 
            compelling narratives that resonate with your audience and drive real results.
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

        {/* CEO Quote */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="relative p-8 rounded-3xl bg-gradient-card border border-border">
            <div className="absolute -top-4 left-8 text-6xl text-primary/30 font-serif">"</div>
            <blockquote className="text-lg sm:text-xl text-foreground italic leading-relaxed mb-4 pl-8">
              Our success is measured by the viral moments we create for our clients. Every brand has a story worth sharing.
            </blockquote>
            <cite className="flex items-center gap-4 not-italic pl-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">AD</span>
              </div>
              <div>
                <div className="font-semibold text-foreground">Abdulmalik Dahiru</div>
                <div className="text-sm text-muted-foreground">Founder & CEO, B2B</div>
              </div>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
