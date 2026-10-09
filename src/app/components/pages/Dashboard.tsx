import { GenericPage } from '../system/generic-page';

export function Dashboard() {
  return (
    <GenericPage
      eyebrow="LIFE COMMAND CENTER"
      title="Life Command Center"
      subtitle="Mood, goals, habits, and learning are mapped as one connected operating intelligence."
      transitionLabel="System Initialization"
      accent="#D4FF00"
      metrics={['87 Life Score', 'High Focus', '83% Habit Sync', '+12 Weekly Lift']}
      sections={[
        { id: 'ai-brief', title: 'AI Brief', detail: 'Realtime synthesis from your latest mood, mission, and memory activity.', value: 'Live' },
        { id: 'life-score', title: 'Life Score', detail: 'Cross-domain score blending emotional stability, consistency, and progress.', value: '87' },
        { id: 'mood-overview', title: 'Mood Overview', detail: 'Emotion pulse with trigger-aware recommendations.', value: 'Stable' },
        { id: 'goals', title: 'Goals', detail: 'Mission objectives linked to habits and timeline checkpoints.' },
        { id: 'habits', title: 'Habits', detail: 'Consistency and reliability streams with friction detection.' },
        { id: 'learning', title: 'Learning', detail: 'Current learning path momentum and next best actions.' },
        { id: 'recommendations', title: 'Recommendations', detail: 'Contextual books, audio, cinema, and skill suggestions.' },
        { id: 'explore', title: 'Explore', detail: 'Quick traversal to secondary domains through command pathways.' },
      ]}
      primaryAction={{ label: 'Open Neural Link', to: '/app/chat' }}
      secondaryAction={{ label: 'View Timeline Nexus', to: '/app/history' }}
    />
  );
}
