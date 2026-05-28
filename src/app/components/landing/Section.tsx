import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';
import { fadeUp, springTransition, staggerContainer, viewportOnce } from '@/lib/motion';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Section({ id, children, className = '', delay = 0 }: SectionProps) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView={reduce ? undefined : 'visible'}
      viewport={viewportOnce}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: {
  title: string;
  subtitle: string;
  align?: 'center' | 'left';
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      transition={springTransition}
      className={`mb-16 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function GlassCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      transition={springTransition}
      whileHover={reduce ? undefined : { y: -6, transition: springTransition }}
      className={`group relative overflow-hidden rounded-[2rem] border border-slate-800/60 bg-slate-900/40 p-8 backdrop-blur-xl transition-colors hover:border-indigo-500/30 hover:bg-slate-900/60 md:p-10 ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:bg-indigo-500/10" />
      {children}
    </motion.div>
  );
}
