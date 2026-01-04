import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Coffee, Star, Award, Users, Zap } from "lucide-react";
import { useState } from "react";

const donationTiers = [
  { amount: 5, label: "Supporter", icon: Coffee, description: "Buy us a coffee" },
  { amount: 25, label: "Champion", icon: Star, description: "Support our journalism" },
  { amount: 50, label: "Patron", icon: Award, description: "Make a real impact" },
  { amount: 100, label: "Benefactor", icon: Zap, description: "Transform our mission" },
];

const impactStats = [
  { value: "500+", label: "Articles Published" },
  { value: "1M+", label: "Readers Reached" },
  { value: "50+", label: "Communities Served" },
  { value: "24/7", label: "News Coverage" },
];

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonate = () => {
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    alert(`Thank you for your donation of $${amount}! This feature will be integrated with a payment processor.`);
  };

  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Support <span className="text-gradient">Independent Journalism</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your donation helps us continue delivering quality, unbiased news to Sierra Leone and beyond. 
              Every contribution makes a difference.
            </p>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-xl border border-border">
                <div className="text-2xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Donation Form */}
          <Card className="bg-card border-border mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">Choose Your Contribution</h2>
              
              {/* Preset Amounts */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {donationTiers.map((tier, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedAmount(tier.amount);
                      setCustomAmount("");
                    }}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 text-center ${
                      selectedAmount === tier.amount && !customAmount
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <tier.icon className={`h-8 w-8 mx-auto mb-3 ${
                      selectedAmount === tier.amount && !customAmount ? "text-primary" : "text-muted-foreground"
                    }`} />
                    <div className="text-2xl font-bold mb-1">${tier.amount}</div>
                    <div className="text-sm font-medium">{tier.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{tier.description}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Or enter a custom amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="pl-8 bg-background"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                onClick={handleDonate} 
                size="lg" 
                className="w-full gap-2"
                disabled={!selectedAmount && !customAmount}
              >
                <Heart className="h-5 w-5" />
                Donate ${customAmount || selectedAmount || 0}
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Your donation is secure and encrypted. We accept all major payment methods.
              </p>
            </CardContent>
          </Card>

          {/* Why Donate */}
          <Card className="bg-gradient-to-br from-card to-muted/30 border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Where Your Money Goes</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Investigative Journalism</h3>
                  <p className="text-sm text-muted-foreground">
                    Fund in-depth investigations that hold power accountable and expose important stories.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Community Coverage</h3>
                  <p className="text-sm text-muted-foreground">
                    Support coverage of local communities often overlooked by mainstream media.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technology & Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Invest in tools and training to produce better journalism and reach more readers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default DonatePage;
