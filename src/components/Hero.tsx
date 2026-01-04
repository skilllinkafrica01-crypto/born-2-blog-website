import { ArrowRight, Sparkles, Zap, TrendingUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orb */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl animate-float opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-primary/20 to-transparent blur-3xl animate-float-delayed opacity-50" />
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full animate-float shadow-orange-glow" />
        <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-primary/60 rotate-45 animate-float-delayed" />
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/40 rounded-full animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Top Notch Social Media Agency</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-black mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Born to</span>
              <br />
              <span className="text-gradient">Blog</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <span className="font-semibold text-foreground">"We Make Businesses GO VIRAL!"</span>
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Transform your digital presence with our expert social media marketing, content creation, and business management solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link to="/services">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Explore Services
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/download">
                <Button variant="outline-glow" size="xl" className="w-full sm:w-auto gap-2">
                  <Play className="w-4 h-4" />
                  Download App
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.45s" }}>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                Contact Us
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                Read Blog
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                About Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              {[
                { value: "500+", label: "Clients" },
                { value: "10M+", label: "Reach" },
                { value: "98%", label: "Success" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Logo Display */}
          <div className="relative flex justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative perspective-1000">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-orange-500 to-primary animate-spin-slow opacity-30 blur-xl scale-110" />
              
              {/* Main logo container with 3D effect */}
              <div className="relative transform-3d hover:rotate-y-12 transition-transform duration-700 group">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-glow" />
                  
                  {/* Inner glow */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-2xl" />
                  
                  {/* Logo image */}
                  <img
                    src={logo}
                    alt="Born to Blog - B2B"
                    className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] rounded-full object-cover shadow-3d transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating icons around logo */}
                  <div className="absolute -top-4 right-8 p-3 rounded-xl glass animate-float shadow-card">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute -bottom-2 left-4 p-3 rounded-xl glass animate-float-delayed shadow-card">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="absolute top-1/2 -right-6 p-3 rounded-xl glass animate-float shadow-card">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
