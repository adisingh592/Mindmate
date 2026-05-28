import { useEffect, useState } from 'react';

export type PerformanceProfile = {
  isMobile: boolean;
  reducedMotion: boolean;
  lowQuality: boolean;
};

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>({
    isMobile: false,
    reducedMotion: false,
    lowQuality: false,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');

    const update = () => {
      const isMobile = mobileQuery.matches;
      const reducedMotion = motionQuery.matches;
      setProfile({
        isMobile,
        reducedMotion,
        lowQuality: isMobile || reducedMotion,
      });
    };

    update();
    motionQuery.addEventListener('change', update);
    mobileQuery.addEventListener('change', update);
    return () => {
      motionQuery.removeEventListener('change', update);
      mobileQuery.removeEventListener('change', update);
    };
  }, []);

  return profile;
}
