import { Section } from "@/components/Section";
import profile from "@/data/profile";
import { StaggerList, StaggerItem } from "@/components/animations";

export function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications">
      <StaggerList as="ul">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.certifications.map((c) => (
            <StaggerItem key={`${c.name}-${c.issuer}`}>
              <li className="rounded-xl border-2 border-primary/20 bg-gradient-to-br from-card-bg to-background p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <div className="text-base font-bold text-foreground/90">{c.name}</div>
                <div className="text-sm text-primary font-medium mt-1">{c.issuer}</div>
                <div className="text-xs text-foreground/60 mt-2">
                  {c.issued ? c.issued : null}
                  {c.credentialId ? (c.issued ? " · " : "") + `ID: ${c.credentialId}` : null}
                </div>
                {c.href ? (
                  <a className="mt-3 inline-block text-sm underline underline-offset-4 hover:no-underline text-primary font-medium" href={c.href} target="_blank">
                    See credential ↗
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


