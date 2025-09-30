import type { HTMLAttributes, ReactNode } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export interface SectionBadgeProps {
  readonly eyebrow: string;
  readonly title: string;
  readonly description?: ReactNode;
  readonly align?: "left" | "center";
  readonly className?: string;
}

export interface SiteHeaderProps {
  readonly brandName: string;
}

export interface SiteFooterProps {
  readonly brandName: string;
}
