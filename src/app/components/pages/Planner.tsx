import { GenericPage } from '../system/generic-page';

export function Planner() {
  return (
    <GenericPage
      eyebrow="MISSION CONTROL"
      title="Mission Control"
      subtitle="Every task is modeled as a mission with objective depth, weighted progress, and workload clarity."
      transitionLabel="Mission Briefing"
      accent="#FF6B00"
      metrics={['6 Active Missions', '74% Progress', '2.8h Workload', 'Priority Stable']}
      sections={[
        { id: 'tasks', title: 'Mission', detail: 'Core mission list with strategic ordering and urgency mapping.' },
        { id: 'subtasks', title: 'Objectives', detail: 'Nested objective graph for execution checkpoints.' },
        { id: 'importance', title: 'Priority', detail: 'Impact-weighted score to route attention at the right time.' },
        { id: 'effort', title: 'Effort', detail: 'Estimated energy and time profile for each objective.' },
        { id: 'progress', title: 'Progress', detail: 'Weighted progression based on objective significance.', value: '74%' },
        { id: 'remaining', title: 'Remaining Workload', detail: 'Projected effort left to complete current mission cycle.' },
      ]}
      primaryAction={{ label: 'Open Growth Network', to: '/app/habits' }}
      secondaryAction={{ label: 'Back Command Center', to: '/app' }}
    />
  );
}
