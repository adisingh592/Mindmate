import { type ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

type VisibilityGateProps = {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  minHeight?: string | number;
};

export function VisibilityGate({
  children,
  fallback = null,
  className,
  minHeight = 320,
}: VisibilityGateProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: '160px', threshold: 0.05 });

  return (
    <div ref={ref} className={className} style={{ minHeight }}>
      {inView ? children : fallback}
    </div>
  );
}
