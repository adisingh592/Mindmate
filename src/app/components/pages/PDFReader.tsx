import { GenericPage } from '../system/generic-page';

export function PDFReader() {
  return (
    <GenericPage
      eyebrow="DEEP READING"
      title="Deep Reading"
      subtitle="Focused reading environment for long-form documents with context capture and note sync."
      transitionLabel="Page Slide"
      accent="#C084FC"
      metrics={['Reader Open', 'Focus High', '2 Notes Drafted', 'Sync Online']}
      sections={[
        { id: 'document', title: 'Document Layer', detail: 'Primary readable canvas for active text.' },
        { id: 'annotations', title: 'Annotations', detail: 'Inline markups and reflective notes.' },
        { id: 'highlights', title: 'Highlights', detail: 'Important text segments for later recall.' },
        { id: 'insights', title: 'Insight Extraction', detail: 'Lessons transformed into actionable entries.' },
      ]}
      secondaryAction={{ label: 'Back Knowledge Vault', to: '/app/books' }}
    />
  );
}
