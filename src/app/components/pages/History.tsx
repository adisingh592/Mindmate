import { Calendar, BookOpen, Heart, Target, Music, Film, Clock, Timeline } from 'lucide-react';
import { Link } from 'react-router';

export function History() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-slate-500/30 selection:text-white">
      {/* Background soft blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-slate-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Memory Archive</span>
              <Clock className="w-6 h-6 text-slate-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Review your preserved thoughts, milestone achievements, and growth paths.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase self-start md:self-auto">
            ARCHIVE: SYNCHRONIZED
          </span>
        </div>

        {/* Time River Visual Focus Area */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-700/5 rounded-[2.5rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <div className="h-60 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 backdrop-blur-xl flex items-center justify-center p-8 relative overflow-hidden">
            {/* Concentric waves */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-slate-800/60 animate-spin-slow" />
            <svg className="absolute inset-x-0 w-full h-12 text-slate-800 pointer-events-none opacity-40" viewBox="0 0 100 20" fill="none">
              <path d="M0 10 Q25 0 50 10 T100 10" stroke="currentColor" strokeWidth="1" />
              <path d="M0 10 Q25 20 50 10 T100 10" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
            <div className="relative text-center z-10">
              <span className="text-[10px] font-mono text-slate-400">SUMMIT TIME STREAM ONLINE</span>
              <h3 className="text-base font-bold text-white mt-1">3D Time River</h3>
              <p className="text-[9px] text-slate-500 font-mono mt-0.5">Horizontal Flow timeline Orbit Area</p>
            </div>
          </div>
        </div>

        {/* Progressive timeline details */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-slate-800 via-slate-905 to-transparent pointer-events-none" />

          <div className="space-y-8">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-16 sm:pl-24">
                {/* Node dot */}
                <div className="absolute left-5 top-7 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-800 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400 animate-pulse" />
                </div>

                <div className="group p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-slate-800 transition-all duration-300 shadow-xl">
                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className={`p-4 rounded-2xl bg-slate-950 border border-slate-850 text-slate-350 flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                      <event.icon className="w-6 h-6 text-slate-400" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h3 className="text-base font-bold text-white tracking-tight group-hover:text-slate-300 transition-colors">{event.title}</h3>
                          <span className="text-[10px] font-mono text-slate-500 uppercase">{event.date}</span>
                        </div>
                        <p className="text-xs text-slate-450 font-light mt-1.5 leading-relaxed">{event.description}</p>
                      </div>

                      {event.tags && (
                        <div className="flex flex-wrap gap-1.5">
                          {event.tags.map((tag, j) => (
                            <span key={j} className="px-2.5 py-0.5 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-500">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const timelineEvents = [
  {
    icon: BookOpen,
    title: 'Completed "Atomic Habits"',
    description: 'Finished reading this transformative book about habit formation',
    date: 'Today',
    tags: ['book', 'learning'],
  },
  {
    icon: Target,
    title: 'Achieved 7-Day Meditation Streak',
    description: 'Successfully maintained daily meditation practice for a full week',
    date: 'Yesterday',
    tags: ['habit', 'milestone'],
  },
  {
    icon: Heart,
    title: 'Mood: Focused & Productive',
    description: 'Logged highest productivity score of the month',
    date: '2 days ago',
    tags: ['mood', 'productivity'],
  },
  {
    icon: BookOpen,
    title: 'Journal Entry: Reflections on Growth',
    description: 'Deep reflection on personal development journey',
    date: '3 days ago',
    tags: ['journal', 'reflection'],
  },
  {
    icon: Film,
    title: 'Watched "The Pursuit of Happyness"',
    description: 'Inspiring story about perseverance and determination',
    date: '4 days ago',
    tags: ['movie', 'inspiration'],
  },
  {
    icon: Music,
    title: 'Created Focus Flow Playlist',
    description: 'Curated music collection for deep work sessions',
    date: '5 days ago',
    tags: ['music', 'productivity'],
  },
];
