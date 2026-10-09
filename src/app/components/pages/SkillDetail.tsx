import { GenericPage } from '../system/generic-page';

export function SkillDetail() {
  return (
    <GenericPage
      eyebrow="MASTERY STUDIO"
      title="Mastery Studio"
      subtitle="Deep path view for one skill with progression layers, session notes, and unlock strategy."
      transitionLabel="Path Reveal"
      accent="#22C55E"
      metrics={['65% Complete', '12 Lessons Left', 'Retention 82%', 'Focus High']}
      sections={[
        { id: 'current-path', title: 'Current Path', detail: 'Detailed node path from fundamentals to advanced outcomes.' },
        { id: 'sessions', title: 'Session History', detail: 'Recent study sessions with performance annotation.' },
        { id: 'gaps', title: 'Knowledge Gaps', detail: 'Low-confidence modules requiring reinforcement.' },
        { id: 'next', title: 'Next Steps', detail: 'Immediate mastery actions selected by adaptive engine.' },
      ]}
      secondaryAction={{ label: 'Back Skill Matrix', to: '/app/skills' }}
    />
  );
}
