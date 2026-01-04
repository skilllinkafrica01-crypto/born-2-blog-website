import { MainLayout } from "@/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  User, 
  MessageSquare, 
  Calendar, 
  ArrowLeft,
  Inbox,
  Eye,
  Trash2
} from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import SEOHead from "@/components/SEOHead";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
}

const ContactViewsPage = () => {
  const { toast } = useToast();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load contact submissions. Make sure you're logged in as admin.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .delete()
        .eq("id", id);

      if (error) throw error;

      setSubmissions(submissions.filter(s => s.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
      
      toast({
        title: "Deleted",
        description: "Contact submission has been removed.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete submission.",
        variant: "destructive",
      });
    }
  };

  if (selectedSubmission) {
    return (
      <MainLayout fullWidth>
        <SEOHead 
          title="Contact Details - Born to Blog Admin"
          description="View contact submission details"
        />
        <div className="min-h-screen py-6 px-2 md:px-4">
          <div className="w-full max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedSubmission(null)}
              className="mb-6 gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Submissions
            </Button>

            <Card className="bg-card border-border">
              <CardHeader className="border-b border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-heading mb-2">
                      {selectedSubmission.subject}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(selectedSubmission.created_at), "PPP 'at' p")}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDelete(selectedSubmission.id)}
                    className="gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Contact Info */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="font-semibold">{selectedSubmission.name}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a 
                          href={`mailto:${selectedSubmission.email}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {selectedSubmission.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <h3 className="font-heading font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    Message
                  </h3>
                  <div className="p-6 rounded-xl bg-secondary/30 border border-border">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">
                      {selectedSubmission.message}
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                  <Button asChild className="gap-2">
                    <a href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}>
                      <Mail className="h-4 w-4" />
                      Reply via Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout fullWidth>
      <SEOHead 
        title="Contact Submissions - Born to Blog Admin"
        description="View and manage contact form submissions"
      />
      <div className="min-h-screen py-6 px-2 md:px-4">
        <div className="w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Inbox className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Contact <span className="text-gradient">Submissions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              View and manage all contact form submissions from your website visitors.
            </p>
            <Badge variant="secondary" className="mt-4">
              {submissions.length} Total Submissions
            </Badge>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}

          {/* Empty State */}
          {!loading && submissions.length === 0 && (
            <Card className="bg-card border-border max-w-md mx-auto">
              <CardContent className="p-12 text-center">
                <Inbox className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">No Submissions Yet</h3>
                <p className="text-muted-foreground text-sm">
                  Contact submissions will appear here once visitors submit the contact form.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Submissions Grid */}
          {!loading && submissions.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {submissions.map((submission) => (
                <Card 
                  key={submission.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(submission.created_at), "MMM d")}
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                      {submission.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-1">
                      {submission.email}
                    </p>
                    
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm font-medium text-foreground mb-1 line-clamp-1">
                        {submission.subject}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {submission.message}
                      </p>
                    </div>

                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full mt-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactViewsPage;
