import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WritingSection } from "@/components/WritingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <WritingSection />
      <Footer />
    </div>
  );
}
