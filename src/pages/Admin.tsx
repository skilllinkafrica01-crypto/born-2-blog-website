import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { 
  Plus, RefreshCw, LogOut, Trash2, Edit, Eye, EyeOff, 
  Search, ArrowLeft, Newspaper, Globe, AlertTriangle
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Article {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: string;
  author: string;
  image_url: string | null;
  source_url: string | null;
  source_name: string | null;
  published_at: string;
  is_published: boolean;
  is_featured: boolean;
}

const categories = [
  "Sierra Leone",
  "World News",
  "Politics",
  "Business",
  "Technology",
  "Sports",
  "Entertainment",
  "Health",
];

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchingNews, setFetchingNews] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Sierra Leone",
    author: "B2B News",
    image_url: "",
    source_url: "",
    is_published: true,
    is_featured: false,
  });

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchArticles();
      
      // Set up realtime subscription
      const channel = supabase
        .channel('articles-changes')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'articles' },
          () => {
            fetchArticles();
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [user]);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Error fetching articles:", error);
      toast.error("Failed to fetch articles");
    } else {
      setArticles(data || []);
    }
  };

  const fetchNewsFromAPI = async () => {
    setFetchingNews(true);
    try {
      const { data, error } = await supabase.functions.invoke("fetch-news", {
        body: { query: "Sierra Leone", category: "general" },
      });

      if (error) throw error;
      toast.success(`Fetched ${data.articlesProcessed} news articles!`);
      fetchArticles();
    } catch (error: any) {
      console.error("Error fetching news:", error);
      toast.error("Failed to fetch news: " + error.message);
    } finally {
      setFetchingNews(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAdmin) {
      toast.error("You don't have permission to manage articles");
      return;
    }

    try {
      if (editingArticle) {
        const { error } = await supabase
          .from("articles")
          .update(formData)
          .eq("id", editingArticle.id);

        if (error) throw error;
        toast.success("Article updated successfully!");
      } else {
        const { error } = await supabase
          .from("articles")
          .insert([{ ...formData, published_at: new Date().toISOString() }]);

        if (error) throw error;
        toast.success("Article created successfully!");
      }

      setIsDialogOpen(false);
      resetForm();
      fetchArticles();
    } catch (error: any) {
      console.error("Error saving article:", error);
      toast.error("Failed to save article: " + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) {
      toast.error("You don't have permission to delete articles");
      return;
    }

    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const { error } = await supabase.from("articles").delete().eq("id", id);
      if (error) throw error;
      toast.success("Article deleted!");
      fetchArticles();
    } catch (error: any) {
      console.error("Error deleting article:", error);
      toast.error("Failed to delete article");
    }
  };

  const togglePublish = async (article: Article) => {
    if (!isAdmin) {
      toast.error("You don't have permission to modify articles");
      return;
    }

    try {
      const { error } = await supabase
        .from("articles")
        .update({ is_published: !article.is_published })
        .eq("id", article.id);

      if (error) throw error;
      toast.success(article.is_published ? "Article unpublished" : "Article published");
      fetchArticles();
    } catch (error: any) {
      console.error("Error toggling publish:", error);
      toast.error("Failed to update article");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "Sierra Leone",
      author: "B2B News",
      image_url: "",
      source_url: "",
      is_published: true,
      is_featured: false,
    });
    setEditingArticle(null);
  };

  const openEditDialog = (article: Article) => {
    setEditingArticle(article);
    setFormData({
      title: article.title,
      excerpt: article.excerpt || "",
      content: article.content || "",
      category: article.category,
      author: article.author,
      image_url: article.image_url || "",
      source_url: article.source_url || "",
      is_published: article.is_published,
      is_featured: article.is_featured,
    });
    setIsDialogOpen(true);
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              <ArrowLeft size={18} className="mr-2" />
              Back
            </Button>
            <h1 className="font-heading text-xl font-bold text-gradient">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:block">{user?.email}</span>
            {isAdmin && (
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Admin</span>
            )}
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!isAdmin && (
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="text-destructive shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Limited Access</h3>
              <p className="text-muted-foreground text-sm mt-1">
                You don't have admin privileges. Contact the site administrator to get access.
              </p>
            </div>
          </div>
        )}

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={fetchNewsFromAPI}
              disabled={fetchingNews || !isAdmin}
              className="gap-2"
            >
              <RefreshCw size={18} className={fetchingNews ? "animate-spin" : ""} />
              <Globe size={18} />
              Fetch News
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) resetForm();
            }}>
              <DialogTrigger asChild>
                <Button variant="hero" disabled={!isAdmin} className="gap-2">
                  <Plus size={18} />
                  Add Article
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingArticle ? "Edit Article" : "Create New Article"}
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="author">Author</Label>
                      <Input
                        id="author"
                        value={formData.author}
                        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={6}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image_url">Image URL</Label>
                    <Input
                      id="image_url"
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="source_url">Source URL</Label>
                    <Input
                      id="source_url"
                      type="url"
                      value={formData.source_url}
                      onChange={(e) => setFormData({ ...formData, source_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.is_published}
                        onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">Published</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.is_featured}
                        onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                        className="rounded border-border"
                      />
                      <span className="text-sm">Featured</span>
                    </label>
                  </div>
                  <div className="flex justify-end gap-3 pt-4">
                    <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="hero">
                      {editingArticle ? "Update" : "Create"}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Newspaper className="text-primary" size={24} />
              <div>
                <p className="text-2xl font-bold text-foreground">{articles.length}</p>
                <p className="text-sm text-muted-foreground">Total Articles</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Eye className="text-green-500" size={24} />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {articles.filter((a) => a.is_published).length}
                </p>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Globe className="text-blue-500" size={24} />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {articles.filter((a) => a.category === "Sierra Leone").length}
                </p>
                <p className="text-sm text-muted-foreground">Sierra Leone</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <Globe className="text-purple-500" size={24} />
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {articles.filter((a) => a.category === "World News").length}
                </p>
                <p className="text-sm text-muted-foreground">World News</p>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium text-muted-foreground">Title</th>
                  <th className="text-left p-4 font-medium text-muted-foreground hidden md:table-cell">Category</th>
                  <th className="text-left p-4 font-medium text-muted-foreground hidden lg:table-cell">Date</th>
                  <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                  <th className="text-right p-4 font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredArticles.map((article) => (
                  <tr key={article.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {article.image_url && (
                          <img
                            src={article.image_url}
                            alt=""
                            className="w-12 h-12 rounded-lg object-cover hidden sm:block"
                          />
                        )}
                        <div>
                          <p className="font-medium text-foreground line-clamp-1">{article.title}</p>
                          <p className="text-xs text-muted-foreground">{article.source_name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground hidden lg:table-cell">
                      {new Date(article.published_at).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        article.is_published 
                          ? "bg-green-500/20 text-green-500" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {article.is_published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => togglePublish(article)}
                          disabled={!isAdmin}
                          title={article.is_published ? "Unpublish" : "Publish"}
                        >
                          {article.is_published ? <EyeOff size={16} /> : <Eye size={16} />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openEditDialog(article)}
                          disabled={!isAdmin}
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(article.id)}
                          disabled={!isAdmin}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {filteredArticles.length === 0 && (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-muted-foreground">
                      No articles found. Click "Fetch News" to get started!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
