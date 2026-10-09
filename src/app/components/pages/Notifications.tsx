import { GenericPage } from '../system/generic-page';

export function Notifications() {
  return (
    <GenericPage
      eyebrow="SIGNAL CENTER"
      title="Signal Center"
      subtitle="Unified alert intelligence for reminders, recommendations, and critical growth cues."
      transitionLabel="Signal Pulse"
      accent="#FF9D00"
      metrics={['12 New Signals', '2 Priority', 'Digest Ready', 'Noise Low']}
      sections={[
        { id: 'priority', title: 'Priority Alerts', detail: 'Urgent nudges requiring immediate action.' },
        { id: 'routine', title: 'Routine Signals', detail: 'Daily habit, mission, and reflection reminders.' },
        { id: 'intelligence', title: 'Intelligence Updates', detail: 'Model-driven insight and forecast notifications.' },
        { id: 'preferences', title: 'Signal Preferences', detail: 'Channel, cadence, and category controls.' },
      ]}
    />
  );
}
