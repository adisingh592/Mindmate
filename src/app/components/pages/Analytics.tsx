import { GenericPage } from '../system/generic-page';

export function Analytics() {
  return (
    <GenericPage
      eyebrow="SYSTEM INTELLIGENCE"
      title="System Intelligence"
      subtitle="Connected intelligence maps across life score, mood, habits, learning, productivity, and forecasting."
      transitionLabel="System Analysis"
      accent="#FFFFFF"
      metrics={['Life Score 87', 'Mood Stable', 'Habit +12%', 'Forecast Positive']}
      sections={[
        { id: 'life-score', title: 'Life Score', detail: 'Composite cross-domain progress index.' },
        { id: 'mood-analytics', title: 'Mood Analytics', detail: 'Emotional trend and trigger analysis stream.' },
        { id: 'habit-analytics', title: 'Habit Analytics', detail: 'Consistency and reliability behavior intelligence.' },
        { id: 'learning-analytics', title: 'Learning Analytics', detail: 'Path depth, retention, and progression quality.' },
        { id: 'productivity-analytics', title: 'Productivity Analytics', detail: 'Focus windows and task efficiency correlation.' },
        { id: 'forecast', title: 'Forecast', detail: 'Near-term prediction from current rhythm signatures.' },
      ]}
    />
  );
}
