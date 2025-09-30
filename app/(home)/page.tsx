import { AboutSection } from "@/components/shared/sections/about-section";
import { ContactSection } from "@/components/shared/sections/contact-section";
import { ExperienceSection } from "@/components/shared/sections/experience-section";
import { HeroSection } from "@/components/shared/sections/hero-section";
import { ProjectsSection } from "@/components/shared/sections/projects-section";
import { SkillsSection } from "@/components/shared/sections/skills-section";
import { SiteFooter } from "@/components/shared/footer/site-footer";
import { SiteHeader } from "@/components/shared/header/site-header";
import { BackToTop } from "@/components/shared/navigation/back-to-top";
import { appConfig } from "@/configs/config";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] z-[-1] h-[480px] bg-[radial-gradient(circle_at_top,_rgba(82,118,234,0.18),_transparent_60%)]" />
      <SiteHeader brandName={appConfig.headerName} />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter brandName={appConfig.footerName} />
      <BackToTop />
    </div>
  );
}
