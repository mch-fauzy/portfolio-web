import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { experience } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/60 bg-background">
      <Container className="flex flex-col gap-12 py-20">
        <SectionBadge
          eyebrow="Experience"
          title="Delivering complex integrations with confidence"
          description="From logistics checkpoints to payroll automation, I build the foundations that let teams launch features quickly, stay compliant, and keep data flowing between systems."
        />
        <div className="space-y-8">
          {experience.map((item) => {
            const metaParts = [
              item.company,
              <span key="employment" className="font-medium text-primary/70">
                {item.employmentType}
              </span>,
              item.location,
            ];

            return (
              <Card key={`${item.company}-${item.period}`} className="overflow-hidden">
                <CardHeader className="grid gap-2 border-b border-border/80 bg-card/60 sm:grid-cols-[1.2fr_1fr] sm:items-center">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl">{item.role}</CardTitle>
                    <CardDescription className="text-base text-muted-foreground">
                      {metaParts.reduce<React.ReactNode[]>((acc, part, index) => {
                        if (index > 0) {
                          acc.push(
                            <span key={`separator-${index}`} aria-hidden className="mx-2">
                              ·
                            </span>
                          );
                        }
                        acc.push(
                          typeof part === "string" ? <span key={`part-${index}`}>{part}</span> : part
                        );
                        return acc;
                      }, [])}
                    </CardDescription>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground sm:text-right">
                    {item.period}
                  </p>
                </CardHeader>
                <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_1fr]">
                  <div className="space-y-4">
                    <p className="text-base text-muted-foreground">{item.summary}</p>
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-muted-foreground">
                      {item.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-border px-3 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
