import { GenericPage } from '../system/generic-page';

export function History() {
  return (
    <GenericPage
      eyebrow="TIMELINE NEXUS"
      title="Timeline Nexus"
      subtitle="Interactive temporal navigation across mood, habits, goals, reading, and learning evolution."
      transitionLabel="Temporal Navigation"
      accent="#9CA3AF"
      metrics={['127 Entries', '42 Milestones', '18 Weeks', 'Trend Rising']}
      sections={[
        { id: 'mood-history', title: 'Mood History', detail: 'Emotion timeline and seasonal shifts.' },
        { id: 'habit-history', title: 'Habit History', detail: 'Consistency path and streak breaks.' },
        { id: 'goal-history', title: 'Goal History', detail: 'Completed and deferred objective traces.' },
        { id: 'reading-history', title: 'Reading History', detail: 'Books, highlights, and completion chronology.' },
        { id: 'learning-history', title: 'Learning History', detail: 'Skill expansion timeline with path pivots.' },
      ]}
    />
  );
}
