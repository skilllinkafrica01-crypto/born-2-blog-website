import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 Strategies to Boost Your Social Media Engagement",
    excerpt: "Discover proven tactics that will transform your social media presence and drive meaningful interactions with your audience.",
    category: "Social Media",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
  {
    title: "The Art of Storytelling in Content Marketing",
    excerpt: "Learn how compelling narratives can transform your brand's message and create lasting connections with your customers.",
    category: "Content Strategy",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
  },
  {
    title: "2025 Digital Marketing Trends You Can't Ignore",
    excerpt: "Stay ahead of the curve with our comprehensive guide to the most impactful marketing trends shaping the coming year.",
    category: "Trends",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            Our Blog
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our expert articles on digital marketing, content strategy, and social media trends.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className="group relative rounded-2xl bg-gradient-card border border-border hover:border-primary/50 overflow-hidden transition-all duration-500 card-3d"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <button className="flex items-center gap-2 text-primary font-medium text-sm group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline-glow" size="lg" className="group">
            View All Articles
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
