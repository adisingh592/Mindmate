import { GenericPage } from '../system/generic-page';

export function Profile() {
  return (
    <GenericPage
      eyebrow="IDENTITY CORE"
      title="Identity Core"
      subtitle="Your personal growth identity graph combining achievements, traits, and strategic goals."
      transitionLabel="Identity Formation"
      accent="#00FFC6"
      metrics={['Level 12', '24,387 XP', '3 Key Traits', 'Upward Arc']}
      sections={[
        { id: 'profile', title: 'Profile', detail: 'Core identity metadata and personal signal baseline.' },
        { id: 'goals', title: 'Goals', detail: 'Long horizon ambition map and active objective clusters.' },
        { id: 'achievements', title: 'Achievements', detail: 'Milestone unlock ledger with impact weights.' },
        { id: 'insights', title: 'Personality Insights', detail: 'Trait intelligence built from your reflection and behavior.' },
        { id: 'summary', title: 'Growth Summary', detail: 'High-level synthesis of your current growth season.' },
      ]}
    />
  );
}
