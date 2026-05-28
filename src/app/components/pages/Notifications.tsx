import { Bell, CheckCircle2, Sparkles, Trophy, Target } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Notifications() {
  const [filter, setFilter] = useState<'all' | 'reminders' | 'suggestions' | 'achievements'>('all');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-orange-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Inbox Alerts</span>
              <Bell className="w-5.5 h-5.5 text-orange-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Gentle nudges, AI suggestions, and unlocked streak rewards.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-orange-400 uppercase">
            STATUS: MONITORING
          </span>
        </div>

        {/* Lightweight Segmented Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-850 backdrop-blur-md">
            {(['all', 'reminders', 'suggestions', 'achievements'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === t
                    ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <button className="text-xs font-mono font-semibold uppercase text-orange-400 hover:text-orange-300 transition-colors self-start sm:self-auto">
            Mark all as read
          </button>
        </div>

        {/* Alerts Activity Stream */}
        <div className="space-y-4">
          {notifications
            .filter((n) => filter === 'all' || n.category === filter)
            .map((notification, i) => (
              <div
                key={i}
                className={`group p-6 rounded-[2rem] border transition-all duration-300 ${
                  notification.read
                    ? 'bg-slate-900/20 border-slate-900/80 hover:bg-slate-900/30'
                    : 'bg-slate-900/50 border-orange-500/20 shadow-lg hover:bg-slate-900/70 hover:border-orange-500/40'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3.5 rounded-2xl bg-slate-950 border border-slate-850 text-slate-350 flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                    <notification.icon className="w-5.5 h-5.5 text-orange-400" />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-sm text-white tracking-tight">{notification.title}</h3>
                        <p className="text-xs text-slate-400 font-light mt-0.5 leading-relaxed">{notification.message}</p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-orange-400 animate-ping flex-shrink-0 mt-2" />
                      )}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500">{notification.time} ── INBOX ALERTS</div>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
}

const notifications = [
  {
    icon: Trophy,
    title: 'Achievement Unlocked!',
    message: 'You\'ve completed a 7-day meditation streak. Keep it up!',
    time: '10 minutes ago',
    read: false,
    category: 'achievements',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'AI Suggestion',
    message: 'Based on your mood, we recommend the book "The Power of Now" by Eckhart Tolle',
    time: '2 hours ago',
    read: false,
    category: 'suggestions',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Bell,
    title: 'Daily Reminder',
    message: 'Time for your evening journal entry. Reflect on your day.',
    time: '3 hours ago',
    read: true,
    category: 'reminders',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Goal Progress',
    message: 'You\'re 65% through your React course. Just 8 lessons to go!',
    time: '1 day ago',
    read: true,
    category: 'reminders',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CheckCircle2,
    title: 'Habit Completed',
    message: 'Great job! You completed your morning meditation.',
    time: '1 day ago',
    read: true,
    category: 'reminders',
    color: 'from-indigo-500 to-purple-500',
  },
];
