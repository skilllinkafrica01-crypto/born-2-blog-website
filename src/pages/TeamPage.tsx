import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Mail } from "lucide-react";

// Updated to a single member with an image path
const teamMembers = [
  {
    name: "Mohamed Kamara",
    role: "Founder & CEO",
    bio: "Award-winning journalist with over 15 years of experience in media. Passionate about bringing quality journalism to Sierra Leone. Dedicated to providing a platform for authentic stories that shape the future of our nation.",
    image: "/team/mohamed-kamara.jpg", // Replace with your actual image URL
  },
];

const TeamPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Meet Our <span className="text-gradient">Founder</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Leading with vision and integrity to bring you the best news and content.
            </p>
          </div>

          {/* Single Wide Edge-to-Edge Member Card */}
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="w-full max-w-5xl bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0"> {/* Removed padding for edge-to-edge image */}
                  <div className="flex flex-col md:flex-row items-center">
                    
                    {/* Image Section - Takes up 40% of the wide card */}
                    <div className="w-full md:w-2/5 h-[300px] md:h-[400px] relative overflow-hidden">
                      {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                          <span className="text-6xl font-bold text-primary">
                            {member.name.split(" ").map(n => n[0]).join("")}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Text Section - Takes up 60% of the wide card */}
                    <div className="w-full md:w-3/5 p-8 md:p-12 text-left">
                      <div className="mb-6">
                        <h3 className="font-heading font-bold text-3xl md:text-4xl mb-2">{member.name}</h3>
                        <p className="text-primary text-lg font-medium">{member.role}</p>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-primary/20 hover:bg-primary hover:text-white">
                          <Twitter className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-primary/20 hover:bg-primary hover:text-white">
                          <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full border-primary/20 hover:bg-primary hover:text-white">
                          <Mail className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>

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
