import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircle, Mail, Phone, FileQuestion, Search } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I submit a news tip?",
    answer: "You can submit news tips through our contact form, email us directly at tips@borntoblog.com, or use our anonymous tip line. We take all submissions seriously and maintain source confidentiality.",
  },
  {
    question: "Can I republish your articles?",
    answer: "Our content is protected by copyright. For republishing rights or syndication inquiries, please contact our licensing team at licensing@borntoblog.com.",
  },
  {
    question: "How do I download the mobile app?",
    answer: "You can download our Android app from the Download page on our website. Simply navigate to the Download section and click the download button to get the APK file.",
  },
  {
    question: "How can I advertise on Born to Blog?",
    answer: "We offer various advertising options including banner ads, sponsored content, and newsletter sponsorships. Contact our advertising team at ads@borntoblog.com for rates and availability.",
  },
  {
    question: "Do you offer internships?",
    answer: "Yes! We offer internship programs for aspiring journalists and media professionals. Check our Team page for current opportunities or send your resume to careers@borntoblog.com.",
  },
  {
    question: "How do I cancel my newsletter subscription?",
    answer: "You can unsubscribe from our newsletter by clicking the 'Unsubscribe' link at the bottom of any email, or by managing your preferences in your account settings.",
  },
];

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout fullWidth>
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full max-w-full">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Help & <span className="text-gradient">Support</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support team.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg bg-card"
            />
          </div>

          {/* Quick Contact */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Live Chat</h3>
                <p className="text-sm text-muted-foreground">Chat with support</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email Support</h3>
                <p className="text-sm text-muted-foreground">support@b2b.com</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Phone Support</h3>
                <p className="text-sm text-muted-foreground">+232 76 123 4567</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileQuestion className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold">Frequently Asked Questions</h2>
              </div>
              
              {filteredFaqs.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-center text-muted-foreground py-8">
                  No results found. Try a different search term.
                </p>
              )}
            </CardContent>
          </Card>

          {/* Still Need Help */}
          <Card className="mt-8 bg-gradient-to-r from-primary/10 via-primary/5 to-card border-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold mb-3">Still Need Help?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <Button size="lg">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupportPage;
