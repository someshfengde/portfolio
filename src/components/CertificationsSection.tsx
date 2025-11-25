import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";
import { FaAward, FaArrowRight } from "react-icons/fa6";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications" subtitle="Professional credentials and achievements">
      <StaggerList as="ul">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.certifications.map((c) => (
            <StaggerItem key={`${c.name}-${c.issuer}`}>
              <li className="hover-card rounded-2xl p-5 group h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all shrink-0">
                    <FaAward className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-foreground/90 group-hover:text-primary transition-colors">
                      {c.name}
                    </div>
                    <div className="text-sm text-foreground/60 mt-1">{c.issuer}</div>
                    {(c.issued || c.credentialId) && (
                      <div className="text-xs text-foreground/40 mt-2">
                        {c.issued ? c.issued : null}
                        {c.credentialId ? (c.issued ? " · " : "") + `ID: ${c.credentialId}` : null}
                      </div>
                    )}
                  </div>
                </div>
                {c.href ? (
                  <a 
                    className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors self-end" 
                    href={c.href} 
                    target="_blank"
                  >
                    View credential
                    <FaArrowRight className="text-xs" />
                  </a>
                ) : null}
              </li>
            </StaggerItem>
          ))}
        </div>
      </StaggerList>
    </Section>
  );
}


