import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageSquare, User, Send } from "lucide-react";
import { z } from "zod";

const commentSchema = z.object({
  author_name: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  author_email: z.string().trim().email("Invalid email address").max(100, "Email must be less than 100 characters").optional().or(z.literal("")),
  content: z.string().trim().min(3, "Comment must be at least 3 characters").max(500, "Comment must be less than 500 characters"),
});

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface ArticleCommentsProps {
  articleId: string;
  articleTitle: string;
}

const ArticleComments = ({ articleId, articleTitle }: ArticleCommentsProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    author_name: "",
    author_email: "",
    content: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      fetchComments();

      const channel = supabase
        .channel(`comments-${articleId}`)
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'comments', filter: `article_id=eq.${articleId}` },
          () => {
            fetchComments();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [isOpen, articleId]);

  const fetchComments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("comments")
      .select("id, author_name, content, created_at")
      .eq("article_id", articleId)
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching comments:", error);
    } else {
      setComments(data || []);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = commentSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("comments").insert([
        {
          article_id: articleId,
          author_name: result.data.author_name,
          author_email: result.data.author_email || null,
          content: result.data.content,
        },
      ]);

      if (error) throw error;

      toast.success("Comment posted successfully!");
      setFormData({ author_name: "", author_email: "", content: "" });
      fetchComments();
    } catch (error: any) {
      console.error("Error posting comment:", error);
      toast.error("Failed to post comment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="mt-4 pt-4 border-t border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <MessageSquare size={16} />
        <span>{comments.length > 0 ? `${comments.length} Comments` : "Add Comment"}</span>
      </button>

      {isOpen && (
        <div className="mt-4 space-y-4 animate-fade-in">
          {/* Comment Form */}
          <form onSubmit={handleSubmit} className="space-y-3 p-4 bg-muted/30 rounded-lg">
            <h4 className="font-medium text-sm text-foreground">Leave a comment</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Input
                  placeholder="Your name *"
                  value={formData.author_name}
                  onChange={(e) => setFormData({ ...formData, author_name: e.target.value })}
                  className="text-sm"
                  maxLength={50}
                />
                {errors.author_name && (
                  <p className="text-xs text-destructive mt-1">{errors.author_name}</p>
                )}
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.author_email}
                  onChange={(e) => setFormData({ ...formData, author_email: e.target.value })}
                  className="text-sm"
                  maxLength={100}
                />
                {errors.author_email && (
                  <p className="text-xs text-destructive mt-1">{errors.author_email}</p>
                )}
              </div>
            </div>
            <div>
              <Textarea
                placeholder="Write your comment..."
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                className="text-sm resize-none"
                rows={3}
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.content && (
                  <p className="text-xs text-destructive">{errors.content}</p>
                )}
                <span className="text-xs text-muted-foreground ml-auto">
                  {formData.content.length}/500
                </span>
              </div>
            </div>
            <Button type="submit" size="sm" disabled={submitting} className="gap-2">
              <Send size={14} />
              {submitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>

          {/* Comments List */}
          {loading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
            </div>
          ) : comments.length > 0 ? (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="p-3 bg-card rounded-lg border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <User size={14} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{comment.author_name}</p>
                      <p className="text-xs text-muted-foreground">{formatDate(comment.created_at)}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{comment.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-4">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ArticleComments;
