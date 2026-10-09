import { GenericPage } from '../system/generic-page';

export function Habits() {
  return (
    <GenericPage
      eyebrow="GROWTH NETWORK"
      title="Growth Network"
      subtitle="Habit nodes are linked into a living consistency network with relationship-aware reinforcement."
      transitionLabel="Network Expansion"
      accent="#A3E635"
      metrics={['7 Day Streak', '83% Consistency', '91% Reliability', '3 Achievements']}
      sections={[
        { id: 'habit-list', title: 'Habit List', detail: 'Active growth nodes with relationship dependencies.' },
        { id: 'streaks', title: 'Streaks', detail: 'Continuous completion chains and break-risk detection.' },
        { id: 'consistency', title: 'Consistency Score', detail: 'Frequency-weighted measure across all active habits.', value: '83%' },
        { id: 'reliability', title: 'Reliability Score', detail: 'Time-window reliability based on expected cadence.', value: '91%' },
        { id: 'heatmap', title: 'Heatmap', detail: 'Temporal density map of habit execution quality.' },
        { id: 'achievements', title: 'Achievements', detail: 'Milestone unlocks tied to sustained behavioral loops.' },
      ]}
    />
  );
}
