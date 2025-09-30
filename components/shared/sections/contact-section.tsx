import Link from "next/link";
import { Container } from "@/components/shared/container/container";
import { SectionBadge } from "@/components/shared/sections/section-badge";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border/60 bg-background/70">
      <Container className="flex flex-col gap-10 py-20">
        <SectionBadge
          eyebrow="Contact"
          title="Let’s build dependable software together"
          description="I’m happy to explore collaboration, contract work, or pairing on architecture decisions."
          align="center"
        />
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-base text-muted-foreground">
            Based in {contact.location}. Available for remote-friendly collaboration across time zones.
          </p>
          <Button
            asChild
            size="lg"
            variant="default"
            className="rounded-full px-6 shadow-[0_12px_40px_-15px_rgba(82,118,234,0.7)]"
          >
            <Link href={`mailto:${contact.email}`}>
              Email me
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
