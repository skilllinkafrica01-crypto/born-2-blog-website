import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <MainLayout fullWidth>
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full max-w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Born to Blog ("we", "our", or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website and use our mobile application.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in various ways:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Personal Data: Name, email address, and contact information you voluntarily provide.</li>
                  <li>Usage Data: Information about how you access and use our platform.</li>
                  <li>Device Data: Device type, operating system, and browser information.</li>
                  <li>Cookies: Small data files stored on your device.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for various purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent, and address technical issues</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The security of your data is important to us. We use commercially acceptable means 
                  to protect your personal information, but no method of transmission over the Internet 
                  or electronic storage is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">5. Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may employ third-party companies to facilitate our service, provide service on our 
                  behalf, perform service-related services, or assist us in analyzing how our service is used.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">7. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at 
                  privacy@borntoblog.com or through our Contact page.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
