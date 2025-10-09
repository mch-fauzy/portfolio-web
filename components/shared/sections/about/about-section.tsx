import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { availability } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border/60 bg-background/70">
      <Container className="grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="space-y-6">
          <SectionBadge
            eyebrow="About"
            title="Engineer focused on resilient platforms"
            description="I partner with product, ops, and infra teams to translate evolving requirements into maintainable backend or frontend solutions. I enjoy aligning constraints, keeping feedback loops short, and documenting decisions so teams can move faster with confidence."
          />
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              My toolkit spans TypeScript, React, Golang, NestJS, Next.js, relational databases, message-driven patterns, and more. Lately I’ve paired secure access control at the JIIPE special economic zone with a project monitoring platform that connects React dashboards to Golang services.
            </p>
            <p>
              Beyond feature delivery, I invest in developer experience—strengthening API contracts, shaping reusable UI patterns, and documenting decisions so teams can move faster without fire drills.
            </p>
          </div>
        </div>
        <aside className="space-y-4 rounded-3xl border border-border bg-card/60 p-8 backdrop-blur">
          <h3 className="text-xl font-semibold text-foreground">Availability</h3>
          <p className="text-base leading-relaxed text-muted-foreground">
            {availability.note}
          </p>
        </aside>
      </Container>
    </section>
  );
}
