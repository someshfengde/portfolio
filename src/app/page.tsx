import { Hero } from "@/components/Hero";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WritingSection } from "@/components/WritingSection";
import { ResumeSection } from "@/components/ResumeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <div className="section-divider mx-auto max-w-5xl" />
      <ProjectsSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <ExperienceSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <SkillsSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <CertificationsSection />
      <div className="section-divider mx-auto max-w-5xl" />
      <WritingSection />
      <ResumeSection />
      <Footer />
    </div>
  );
}
