import { GenericPage } from '../system/generic-page';

export function VoiceCompanion() {
  return (
    <GenericPage
      eyebrow="AUDIO INTELLIGENCE"
      title="Audio Intelligence"
      subtitle="Voice-powered emotional and reflective interaction with memory-aware transcription."
      transitionLabel="Voice Activation"
      accent="#00FFC6"
      metrics={['Mic Ready', 'Voice Stable', 'Emotion Detect On', 'Latency 90ms']}
      sections={[
        { id: 'chat', title: 'Voice Chat', detail: 'Hands-free conversation channel for live support.' },
        { id: 'reflection', title: 'Voice Reflection', detail: 'Guided spoken reflections transformed into insights.' },
        { id: 'journal', title: 'Voice Journal', detail: 'Audio-first journaling pipeline with transcript archival.' },
        { id: 'emotion', title: 'Emotion Detection', detail: 'Tone and cadence analysis for emotional state hints.' },
      ]}
    />
  );
}
