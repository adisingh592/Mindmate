import { GenericPage } from '../system/generic-page';

export function WriteJournal() {
  return (
    <GenericPage
      eyebrow="CREATIVE CANVAS"
      title="Creative Canvas"
      subtitle="Write in a distraction-light narrative layer with mood context, tags, and reflection prompts."
      transitionLabel="Canvas Expansion"
      accent="#FF4D8D"
      metrics={['Draft Active', 'Mood Tagged', '4 Prompts Ready', 'Auto Save On']}
      sections={[
        { id: 'writing-area', title: 'Writing Area', detail: 'Primary expressive canvas optimized for long-form reflection.' },
        { id: 'mood-selection', title: 'Mood Selection', detail: 'Emotional context tagging for archive intelligence.' },
        { id: 'tags', title: 'Tags', detail: 'Semantic anchors to reconnect future thoughts and patterns.' },
        { id: 'prompts', title: 'Reflection Prompts', detail: 'Guided prompts generated from recent memory and mood trends.' },
      ]}
      primaryAction={{ label: 'Back Memory Archive', to: '/app/journal' }}
      secondaryAction={{ label: 'Open Mind Space', to: '/app/journal/reflection' }}
    />
  );
}
