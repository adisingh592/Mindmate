import { GenericPage } from '../system/generic-page';

export function Books() {
  return (
    <GenericPage
      eyebrow="KNOWLEDGE VAULT"
      title="Knowledge Vault"
      subtitle="Reading intelligence operating layer with recommendations, highlights, and retained lessons."
      transitionLabel="Vault Unlock"
      accent="#C084FC"
      metrics={['3 Reading Now', '12 Highlights', '4 Notes', 'Retention 84%']}
      sections={[
        { id: 'reading-now', title: 'Reading Now', detail: 'Active reading stack and progress state.' },
        { id: 'recommendations', title: 'Recommendations', detail: 'AI-curated books by current growth context.' },
        { id: 'highlights', title: 'Highlights', detail: 'Important excerpts with semantic linkage.' },
        { id: 'notes', title: 'Notes', detail: 'Personal synthesis and interpretation records.' },
        { id: 'lessons', title: 'Key Lessons', detail: 'Actionable knowledge extracted into life systems.' },
      ]}
      primaryAction={{ label: 'Open Deep Reading', to: '/app/books/reader/current' }}
    />
  );
}
