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
              <li className="rounded-md border border-foreground/10 p-4">
                <div className="text-sm font-medium">{c.name}</div>
                <div className="text-xs text-foreground/70">{c.issuer}</div>
                <div className="text-xs text-foreground/60 mt-1">
                  {c.issued ? c.issued : null}
                  {c.credentialId ? (c.issued ? " · " : "") + `ID: ${c.credentialId}` : null}
                </div>
                {c.href ? (
                  <a className="mt-2 inline-block text-xs underline underline-offset-4" href={c.href} target="_blank">
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


