import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Mohamed Kamara",
    image: "/public/team.jpg", // Replace with your actual image path
  },
];

const TeamPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Single Edge-to-Edge Image Card */}
          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <Card key={index} className="w-full max-w-5xl bg-card border-border overflow-hidden border-none shadow-xl">
                <CardContent className="p-0">
                  <div className="w-full h-[400px] md:h-[600px] relative">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                        <span className="text-6xl font-bold text-primary">
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join CTA Section */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-card border-border">
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
