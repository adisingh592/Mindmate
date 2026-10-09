import { GenericPage } from '../system/generic-page';

export function Skills() {
  return (
    <GenericPage
      eyebrow="SKILL MATRIX"
      title="Skill Matrix"
      subtitle="A skill-tree operating map with learning graph logic, path recommendations, and mastery trajectory."
      transitionLabel="Skill Evolution"
      accent="#22C55E"
      metrics={['4 Paths Active', '47 Nodes', '124h Logged', 'Next Unlock 2d']}
      sections={[
        { id: 'skills', title: 'Skills', detail: 'Core capability nodes with current mastery level.' },
        { id: 'paths', title: 'Learning Paths', detail: 'Progressive learning arcs grouped by outcome.' },
        { id: 'progress', title: 'Progress', detail: 'Node-by-node completion and retention progress.' },
        { id: 'recommendations', title: 'Recommendations', detail: 'Adaptive next-step suggestions from your current matrix.' },
      ]}
      primaryAction={{ label: 'Open Mastery Studio', to: '/app/skills/react-advanced' }}
    />
  );
}
