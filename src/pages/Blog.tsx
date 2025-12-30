import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
  "All",
  "SEO Strategy",
  "Content Marketing",
  "Social Media",
  "Analytics",
  "Brand Building",
  "Technical SEO",
];

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Strategies That Will Dominate 2024",
    excerpt: "Discover the latest SEO trends and techniques that will help your content rank higher and reach more audiences this year.",
    category: "SEO Strategy",
    author: "Sarah Johnson",
    date: "Dec 28, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Art of Storytelling in Content Marketing",
    excerpt: "Learn how to craft compelling narratives that resonate with your audience and drive meaningful engagement.",
    category: "Content Marketing",
    author: "Michael Chen",
    date: "Dec 25, 2024",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building a Personal Brand That Stands Out",
    excerpt: "Your personal brand is your digital fingerprint. Here's how to create one that truly represents your unique voice.",
    category: "Brand Building",
    author: "Emily Rodriguez",
    date: "Dec 22, 2024",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&h=500&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Mastering Instagram Reels for Business Growth",
    excerpt: "Short-form video content is king. Learn how to leverage Instagram Reels to grow your business exponentially.",
    category: "Social Media",
    author: "Alex Thompson",
    date: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    readTime: "5 min read",
  },
  {
    id: 5,
    title: "Google Analytics 4: A Complete Guide",
    excerpt: "Everything you need to know about GA4 and how to use it to make data-driven decisions for your content strategy.",
    category: "Analytics",
    author: "David Park",
    date: "Dec 18, 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Core Web Vitals: Optimizing for Speed",
    excerpt: "Technical SEO matters more than ever. Learn how to optimize your site's performance for better rankings.",
    category: "Technical SEO",
    author: "Lisa Wang",
    date: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "Creating Viral LinkedIn Content",
    excerpt: "Unlock the secrets to creating LinkedIn posts that get thousands of views and drive professional connections.",
    category: "Social Media",
    author: "Sarah Johnson",
    date: "Dec 12, 2024",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=800&h=500&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "The Psychology Behind Click-Worthy Headlines",
    excerpt: "Learn the psychological triggers that make readers click and how to craft headlines that convert.",
    category: "Content Marketing",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
    readTime: "7 min read",
  },
  {
    id: 9,
    title: "Local SEO: Dominating Your Market",
    excerpt: "A comprehensive guide to local SEO strategies that will help your business stand out in local search results.",
    category: "SEO Strategy",
    author: "Emily Rodriguez",
    date: "Dec 8, 2024",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?w=800&h=500&fit=crop",
    readTime: "8 min read",
  },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-xl border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="font-heading text-xl font-bold text-gradient">B2B Blog</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Insights & <span className="text-gradient">Inspiration</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Expert tips, strategies, and stories to help you master the art of blogging and digital content creation.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-lg bg-card border-border rounded-full shadow-card"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-orange-glow transition-all duration-500 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        <Tag size={12} className="mr-1" />
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter and get the latest blogging tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full"
            />
            <Button variant="hero" className="rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Born to Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
