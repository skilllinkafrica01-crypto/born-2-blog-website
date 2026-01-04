import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Moon, Globe, Eye, Shield, Trash2 } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoplay, setAutoplay] = useState(false);

  return (
    <MainLayout fullWidth>
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full max-w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-gradient">Settings</span>
            </h1>
            <p className="text-muted-foreground">
              Customize your Born to Blog experience
            </p>
          </div>

          <div className="space-y-6">
            {/* Appearance */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Moon className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-heading font-bold">Appearance</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Theme</Label>
                      <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                    </div>
                    <Select value={theme} onValueChange={(value: "light" | "dark" | "system") => setTheme(value)}>
                      <SelectTrigger className="w-32 bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Bell className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-heading font-bold">Notifications</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Push Notifications</Label>
                      <p className="text-sm text-muted-foreground">Get notified about breaking news</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Email Notifications</Label>
                      <p className="text-sm text-muted-foreground">Receive daily newsletter</p>
                    </div>
                    <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reading Preferences */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-heading font-bold">Reading Preferences</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Autoplay Videos</Label>
                      <p className="text-sm text-muted-foreground">Automatically play videos in articles</p>
                    </div>
                    <Switch checked={autoplay} onCheckedChange={setAutoplay} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Text Size</Label>
                      <p className="text-sm text-muted-foreground">Adjust article text size</p>
                    </div>
                    <Select defaultValue="medium">
                      <SelectTrigger className="w-32 bg-background">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        <SelectItem value="small">Small</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="large">Large</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Language */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-heading font-bold">Language & Region</h2>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Language</Label>
                    <p className="text-sm text-muted-foreground">Choose your preferred language</p>
                  </div>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-32 bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="kri">Krio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Privacy */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-heading font-bold">Privacy & Data</h2>
                </div>

                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start gap-2">
                    <Shield className="h-4 w-4" />
                    Manage Cookie Preferences
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                    Clear Reading History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
