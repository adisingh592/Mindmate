import { GenericPage } from '../system/generic-page';

export function JournalHome() {
  return (
    <GenericPage
      eyebrow="MEMORY ARCHIVE"
      title="Memory Archive"
      subtitle="Timeline archive for entries, mood history, highlights, and intelligent search."
      transitionLabel="Archive Reconstruction"
      accent="#FF4D8D"
      metrics={['127 Entries', '8 Highlights', 'Search Fast', 'Mood Linked']}
      sections={[
        { id: 'entries', title: 'Entries', detail: 'Chronological personal records with context connections.' },
        { id: 'calendar', title: 'Calendar', detail: 'Date-indexed archive navigation.' },
        { id: 'mood', title: 'Mood History', detail: 'Emotional trend correlation across entries.' },
        { id: 'highlights', title: 'Highlights', detail: 'Pinned key moments and breakthrough fragments.' },
        { id: 'search', title: 'Search', detail: 'Semantic retrieval across archived reflections.' },
      ]}
      primaryAction={{ label: 'Write Entry', to: '/app/journal/write' }}
      secondaryAction={{ label: 'Mind Space', to: '/app/journal/reflection' }}
    />
  );
}
