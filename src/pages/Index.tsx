import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { MainLayout } from "@/layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout fullWidth>
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
