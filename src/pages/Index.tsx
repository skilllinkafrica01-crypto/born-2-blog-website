import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
