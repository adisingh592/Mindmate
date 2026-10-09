import { GenericPage } from '../system/generic-page';

export function Chat() {
  return (
    <GenericPage
      eyebrow="NEURAL LINK"
      title="Neural Link"
      subtitle="Conversation intelligence with memory traces, thought relationships, and context-aware modes."
      transitionLabel="Neural Link"
      accent="#00FFC6"
      metrics={['Realtime Sync', '4 AI Modes', 'Memory Connected', 'Low Latency']}
      sections={[
        { id: 'conversation', title: 'Conversation', detail: 'Primary dialogue stream with reflective and coaching modes.', value: 'Active' },
        { id: 'memory-panel', title: 'Memory Panel', detail: 'Linked recall from journal, mood history, and mission data.' },
        { id: 'ai-modes', title: 'AI Modes', detail: 'Friend, Coach, Mentor, and Reflective Guide operational profiles.' },
        { id: 'recent-topics', title: 'Recent Topics', detail: 'Conversation clusters to quickly continue unfinished thinking.' },
        { id: 'suggestions', title: 'Suggestions', detail: 'Prompt starters generated from current emotional and task context.' },
      ]}
      primaryAction={{ label: 'Go Mission Control', to: '/app/planner' }}
      secondaryAction={{ label: 'Open Memory Archive', to: '/app/journal' }}
    />
  );
}
