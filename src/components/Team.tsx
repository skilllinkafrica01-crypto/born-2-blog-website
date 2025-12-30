import ceoPhoto from "@/assets/ceo-photo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ceo = {
  name: "H.E. Sahr Memphis",
  role: "Founder & CEO",
  image: ceoPhoto,
};

const Team = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="team" 
      ref={ref}
      className={`py-24 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Leadership
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Meet The <span className="text-gradient">Founder</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary leader behind Born to Blog who makes the magic happen.
          </p>
        </div>

        {/* CEO Card - Centered */}
        <div className="flex justify-center max-w-md mx-auto">
          <div className="group relative rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-3d overflow-hidden w-full">
            {/* Image Container */}
            <div className="aspect-square relative overflow-hidden">
              <img
                src={ceo.image}
                alt={ceo.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {ceo.name}
              </h3>
              <p className="text-primary text-sm sm:text-base mt-2">
                {ceo.role}
              </p>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                A visionary digital leader who founded Born to Blog on March 23, 2020 to empower youth and businesses to rise in their full digital potential.
              </p>
            </div>

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to join our creative team?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
