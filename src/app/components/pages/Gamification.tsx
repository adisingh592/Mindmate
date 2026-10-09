import { GenericPage } from '../system/generic-page';

export function Gamification() {
  return (
    <GenericPage
      eyebrow="GROWTH JOURNEY"
      title="Growth Journey"
      subtitle="Motivational progression engine that turns consistency and missions into visible advancement."
      transitionLabel="Achievement Unlock"
      accent="#FFB800"
      metrics={['24,387 XP', 'Level 12', '3 Challenges', '2 Unlocks Pending']}
      sections={[
        { id: 'xp', title: 'XP', detail: 'Experience accumulation from habits, missions, and reflection.' },
        { id: 'levels', title: 'Levels', detail: 'Growth stage progression with threshold milestones.' },
        { id: 'challenges', title: 'Challenges', detail: 'Short-cycle performance quests for momentum.' },
        { id: 'achievements', title: 'Achievements', detail: 'Unlocked badges tied to durable behavior change.' },
      ]}
    />
  );
}
