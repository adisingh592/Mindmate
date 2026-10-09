import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router';

export interface LifeSection {
  id: string;
  title: string;
  detail: string;
  value?: string;
}

export interface LifeMetric {
  label: string;
  value: string;
}

interface LifeOSPageProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  transitionLabel: string;
  accent: string;
  metrics: LifeMetric[];
  sections: LifeSection[];
  primaryAction?: { label: string; to: string };
  secondaryAction?: { label: string; to: string };
  children?: React.ReactNode;
}

function pulseLineStyle(accent: string) {
  return { boxShadow: `0 0 24px ${accent}40` };
}

export function LifeOSPage({
  eyebrow,
  title,
  subtitle,
  transitionLabel,
  accent,
  metrics,
  sections,
  primaryAction,
  secondaryAction,
  children,
}: LifeOSPageProps) {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-[#0A0A0A] px-4 pb-28 pt-6 text-[#F5F5F5] md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-6 md:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.05),transparent_45%)]" />
          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#A3A3A3]">{eyebrow}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h1>
              <p className="mt-3 max-w-2xl text-sm text-[#A3A3A3] md:text-base">{subtitle}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.2em]"
                style={{ borderColor: `${accent}55`, color: accent }}
              >
                {transitionLabel}
              </span>
              {secondaryAction ? <ActionLink action={secondaryAction} accent={accent} /> : null}
              {primaryAction ? <ActionLink action={primaryAction} accent={accent} filled /> : null}
            </div>
          </div>
          <div className="relative z-10 mt-7 h-px w-full bg-white/10">
            <div className="h-px w-40" style={{ backgroundColor: accent, ...pulseLineStyle(accent) }} />
          </div>
        </motion.div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <section key={metric.label} className="rounded-2xl border border-white/10 bg-[#151515] p-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">{metric.value}</p>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-12">
          <section className="rounded-3xl border border-white/10 bg-[#151515] p-5 lg:col-span-8">
            <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-[#A3A3A3]">System Graph</p>
            <div className="space-y-3">
              {sections.map((section, index) => (
                <article
                  key={section.id}
                  className="rounded-2xl border border-white/10 bg-[#1E1E1E] p-4 transition-colors hover:border-white/20"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#A3A3A3]">
                        Node {String(index + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-1 text-base font-medium">{section.title}</h3>
                      <p className="mt-2 text-sm text-[#A3A3A3]">{section.detail}</p>
                    </div>
                    {section.value ? (
                      <span
                        className="rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]"
                        style={{ borderColor: `${accent}55`, color: accent }}
                      >
                        {section.value}
                      </span>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="rounded-3xl border border-white/10 bg-[#151515] p-5 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#A3A3A3]">Signal Rail</p>
            <div className="mt-4 space-y-3">
              {sections.slice(0, 5).map((section, index) => (
                <div key={section.id} className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: accent }} />
                  <div>
                    <p className="text-xs font-medium">{section.title}</p>
                    <p className="text-xs text-[#A3A3A3]">Flow {index + 1}: active</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </div>
  );
}

function ActionLink({
  action,
  accent,
  filled = false,
}: {
  action: { label: string; to: string };
  accent: string;
  filled?: boolean;
}) {
  return (
    <Link
      to={action.to}
      className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs uppercase tracking-[0.17em] transition-colors"
      style={{
        borderColor: `${accent}77`,
        color: filled ? '#0A0A0A' : accent,
        backgroundColor: filled ? accent : 'transparent',
      }}
    >
      {action.label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
}

export function buildMetrics(
  metric1: string,
  metric2: string,
  metric3: string,
  metric4: string,
): LifeMetric[] {
  return [
    { label: 'Signal', value: metric1 },
    { label: 'Momentum', value: metric2 },
    { label: 'Stability', value: metric3 },
    { label: 'Forecast', value: metric4 },
  ];
}

export function iconAsNode(
  icon: LucideIcon,
  title: string,
  detail: string,
  value?: string,
): LifeSection {
  return { id: `${title}-${icon.displayName ?? 'icon'}`, title, detail, value };
}
