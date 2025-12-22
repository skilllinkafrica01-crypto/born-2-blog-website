import { Users } from "lucide-react";

// Team members data - admin can edit this array to add/remove members
const teamMembers = [
  {
    name: "H.E. Sahr Memphis",
    role: "Founder & CEO",
    image: "/placeholder.svg",
  },
  {
    name: "Team Member 2",
    role: "Social Media Manager",
    image: "/placeholder.svg",
  },
  {
    name: "Team Member 3",
    role: "Content Creator",
    image: "/placeholder.svg",
  },
  {
    name: "Team Member 4",
    role: "Graphic Designer",
    image: "/placeholder.svg",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
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
            Our Team
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Meet The <span className="text-gradient">Crew</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals behind Born to Blog who make the magic happen.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 card-3d overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Icon placeholder for missing images */}
                {member.image === "/placeholder.svg" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-primary/50" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 text-center">
                <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                  {member.name}
                </h3>
                <p className="text-primary text-xs sm:text-sm mt-1 truncate">
                  {member.role}
                </p>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </div>
          ))}
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
