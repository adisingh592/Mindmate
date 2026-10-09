import type { LifeSection } from './life-os';
import { LifeOSPage, buildMetrics } from './life-os';

interface GenericPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  transitionLabel: string;
  accent: string;
  metrics: [string, string, string, string];
  sections: LifeSection[];
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
}

export function GenericPage(props: GenericPageProps) {
  return (
    <LifeOSPage
      eyebrow={props.eyebrow}
      title={props.title}
      subtitle={props.subtitle}
      transitionLabel={props.transitionLabel}
      accent={props.accent}
      metrics={buildMetrics(...props.metrics)}
      sections={props.sections}
      primaryAction={props.primaryAction}
      secondaryAction={props.secondaryAction}
    />
  );
}
