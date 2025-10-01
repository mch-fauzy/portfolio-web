export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly target?: "_blank" | "_self";
  readonly rel?: string;
  readonly icon: string;
}

export interface Metric {
  readonly label: string;
  readonly value: string;
  readonly description: string;
}

export interface ExperienceItem {
  readonly company: string;
  readonly role: string;
  readonly employmentType: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly achievements: readonly string[];
  readonly tech: readonly string[];
}

export interface ProjectItem {
  readonly name: string;
  readonly description: string;
  readonly impact: string;
  readonly stack: readonly string[];
  readonly href?: string;
}

export interface SkillCategory {
  readonly category: string;
  readonly items: readonly string[];
}

export interface Availability {
  readonly note: string;
}

export interface Contact {
  readonly email: string;
  readonly location: string;
}
