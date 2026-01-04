import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail } from "lucide-react";

// Updated: Only one team member with an image path provided
const teamMembers = [
  {
    name: "Mohamed Kamara",
    role: "Founder & CEO",
    bio: "Award-winning journalist with over 15 years of experience in media. Passionate about bringing quality journalism to Sierra Leone.",
    image: "/team/mohamed-kamara.jpg", // Add your image path here
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
              Meet Our <span className="text-gradient">Founder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The visionary behind Born to Blog, committed to bringing you the best news 
              and content.
            </p>
          </div>

          {/* Team Grid - Centered for one person */}
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="max-w-sm w-full bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 text-center">
                  {/* Image/Avatar Section */}
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-2 border-primary/20">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-9 w-9">
                      <Mail className="h-5 w-5" />
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
