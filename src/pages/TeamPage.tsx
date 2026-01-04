import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Mohamed Kamara",
    role: "Founder & CEO",
    bio: "Award-winning journalist with over 15 years of experience in media. Passionate about bringing quality journalism to Sierra Leone.",
    image: null,
  },
  {
    name: "Fatmata Sesay",
    role: "Editor-in-Chief",
    bio: "Former BBC correspondent with expertise in investigative journalism. Leads our editorial team with vision and integrity.",
    image: null,
  },
  {
    name: "Ibrahim Conteh",
    role: "Head of Digital",
    bio: "Tech enthusiast driving our digital transformation. Expert in web development and digital marketing strategies.",
    image: null,
  },
  {
    name: "Aminata Bangura",
    role: "Senior Reporter",
    bio: "Covers politics and governance. Known for her insightful analysis and in-depth coverage of national affairs.",
    image: null,
  },
  {
    name: "David Koroma",
    role: "Sports Editor",
    bio: "Passionate sports journalist covering local and international sports. Brings exciting coverage to sports enthusiasts.",
    image: null,
  },
  {
    name: "Mariama Jalloh",
    role: "Features Writer",
    bio: "Creates compelling human interest stories and cultural features that resonate with our diverse readership.",
    image: null,
  },
  {
    name: "Abu Bakarr Mansaray",
    role: "Photographer",
    bio: "Award-winning photojournalist capturing powerful images that tell stories beyond words.",
    image: null,
  },
  {
    name: "Isata Williams",
    role: "Social Media Manager",
    bio: "Manages our social media presence and community engagement. Expert in digital communication strategies.",
    image: null,
  },
];

const TeamPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A dedicated group of professionals committed to bringing you the best news 
              and content. Meet the people behind Born to Blog.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join CTA */}
          <Card className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-card border-border">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Want to Join Our Team?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for journalism 
                and storytelling. Check out our open positions.
              </p>
              <Button size="lg">View Open Positions</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamPage;
