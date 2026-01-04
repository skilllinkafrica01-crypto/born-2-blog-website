import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Smartphone, Shield, Zap, Wifi, Bell, Star, Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized performance for smooth experience" },
  { icon: Wifi, title: "Offline Mode", description: "Read articles without internet connection" },
  { icon: Bell, title: "Push Notifications", description: "Get notified about breaking news" },
  { icon: Shield, title: "Secure", description: "Your data is encrypted and protected" },
];

const screenshots = [
  { title: "Home Screen", description: "Beautiful news feed with latest articles" },
  { title: "Article View", description: "Clean, distraction-free reading experience" },
  { title: "Categories", description: "Browse news by topics that interest you" },
  { title: "Offline Reading", description: "Save articles for later reading" },
];

const DownloadPage = () => {
  const handleDownload = () => {
    window.open("/app/born-to-blog.apk", "_blank");
  };

  return (
    <MainLayout fullWidth>
      <SEOHead 
        title="Download Our App - Born to Blog (B2B)"
        description="Download the Born to Blog mobile app for Android. Stay updated with the latest news from Sierra Leone with offline reading, push notifications, and more."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Android App</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Get the <span className="text-gradient">B2B App</span>
                </h1>
                
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Stay updated with the latest news from Sierra Leone and around the world. 
                  Download our mobile app for the best reading experience.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={handleDownload} 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6"
                  >
                    <Download className="h-5 w-5" />
                    Download APK
                  </Button>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <span className="text-sm">4.8 Rating</span>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Free to use
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    No ads
                  </span>
                  <span className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    Regular updates
                  </span>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative flex justify-center">
                <div className="relative w-64 h-[500px] bg-card rounded-[3rem] border-4 border-muted p-2 shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-muted rounded-full" />
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">B2B</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Born to Blog</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 blur-xl rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Download Our App?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience news like never before with features designed for the modern reader.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                App Screenshots
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a peek at the beautiful interface designed for optimal reading.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {screenshots.map((screenshot, index) => (
                <div key={index} className="group">
                  <div className="aspect-[9/16] bg-gradient-to-br from-card to-muted rounded-2xl border border-border overflow-hidden mb-4 group-hover:border-primary/50 transition-colors">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-3" />
                        <div className="space-y-2">
                          <div className="h-2 bg-muted-foreground/20 rounded w-20 mx-auto" />
                          <div className="h-2 bg-muted-foreground/20 rounded w-16 mx-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-center">{screenshot.title}</h3>
                  <p className="text-sm text-muted-foreground text-center">{screenshot.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Download the Born to Blog app now and never miss an important story.
            </p>
            <Button 
              onClick={handleDownload} 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg px-8 py-6"
            >
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              Version 1.0.0 • 15 MB • Android 6.0+
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default DownloadPage;
