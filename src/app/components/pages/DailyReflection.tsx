import { GenericPage } from '../system/generic-page';

export function DailyReflection() {
  return (
    <GenericPage
      eyebrow="MIND SPACE"
      title="Mind Space"
      subtitle="Structured reflective loop for emotional clarity, gratitude, growth, and tomorrow intention."
      transitionLabel="Mind Scan"
      accent="#FACC15"
      metrics={['Check-in Done', '2 Wins', '1 Lesson', 'Intent Clear']}
      sections={[
        { id: 'mood', title: 'Mood Check-in', detail: 'Current emotional state and baseline awareness.' },
        { id: 'gratitude', title: 'Gratitude', detail: 'Signals of appreciation to stabilize perspective.' },
        { id: 'wins', title: 'Wins', detail: 'Meaningful progress moments captured today.' },
        { id: 'challenges', title: 'Challenges', detail: 'Friction points and obstacle framing.' },
        { id: 'lessons', title: 'Lessons', detail: 'Extracted insight from lived experience.' },
        { id: 'tomorrow', title: 'Tomorrow Intentions', detail: 'Focused commitments for next cycle.' },
      ]}
      secondaryAction={{ label: 'Back Archive', to: '/app/journal' }}
    />
  );
}
