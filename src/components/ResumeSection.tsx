import { Section } from "@/components/Section";
import profile from "@/data/profile";

export function ResumeSection() {
  const resumeLink = profile.links.resume;

  if (!resumeLink) {
    return null;
  }

  return (
    <Section id="resume" title="Resume">
      <div className="rounded-lg border border-foreground/10 p-5 sm:p-6">
        <p className="text-sm text-foreground/80">
          View my latest resume for detailed experience, projects, and achievements.
        </p>
        <div className="mt-4">
          <a
            className="inline-flex items-center rounded-full border border-foreground/20 px-5 py-2 text-sm hover:bg-foreground/5"
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
          >
            Open Resume ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
