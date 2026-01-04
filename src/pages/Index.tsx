import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <MainLayout fullWidth>
      <SEOHead 
        title="Born to Blog (B2B) - Top Notch Social Media Agency"
        description="Born to Blog (B2B) is a top-notch social media agency helping brands grow their online presence with creative content strategies and expert blogging services."
      />
      <Preloader />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <BlogSection />
        <Contact />
      </main>
      <Footer />
    </MainLayout>
  );
};

export default Index;
