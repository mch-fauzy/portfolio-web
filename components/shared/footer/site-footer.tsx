import Link from "next/link";
import { Container } from "@/components/shared/container/container";
import { socialLinks } from "@/lib/portfolio-data";
import type { SiteFooterProps } from "@/types/components";

export function SiteFooter({ brandName }: SiteFooterProps) {
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-foreground">{brandName}</p>
          <p>© {new Date().getFullYear()} Crafted with Next.js, Tailwind CSS, and shadcn UI.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
