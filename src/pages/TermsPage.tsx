import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-8 md:p-12">
              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Born to Blog, you accept and agree to be bound by the terms 
                  and provisions of this agreement. If you do not agree to abide by these terms, 
                  please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Permission is granted to temporarily access the materials on Born to Blog's website 
                  for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">3. User Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Users may submit comments and other content. By submitting content, you grant 
                  Born to Blog a non-exclusive, royalty-free license to use, reproduce, modify, 
                  and distribute such content in connection with our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">4. Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Post false, inaccurate, or misleading content</li>
                  <li>Engage in harassment or abusive behavior</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated systems to access the service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">5. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on Born to Blog's website are provided on an 'as is' basis. 
                  Born to Blog makes no warranties, expressed or implied, and hereby disclaims 
                  all other warranties including, without limitation, implied warranties of 
                  merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">6. Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall Born to Blog or its suppliers be liable for any damages 
                  arising out of the use or inability to use the materials on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-bold mb-4">7. Revisions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Born to Blog may revise these terms of service at any time without notice. 
                  By using this website, you agree to be bound by the current version of these 
                  terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Questions about the Terms of Service should be sent to us at legal@borntoblog.com.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
