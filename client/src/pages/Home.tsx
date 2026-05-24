/* ============================================================
   DESIGN: Deep Ocean Protocol — Home Page
   Full single-page portfolio for Mohsin Azam
   Sections: Hero → About → Metrics → Experience → Projects → Skills → Footer
   ============================================================ */
import AnimatedPageBackground from "@/components/AnimatedPageBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MetricsBanner from "@/components/MetricsBanner";

import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedPageBackground />
      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MetricsBanner />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
      <ScrollToTop />
      </div>
    </div>
  );
}
