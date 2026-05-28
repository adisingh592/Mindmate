import { useState } from 'react';
import { Plus, Search, Calendar, Smile, X, Sparkles, BookOpen, Clock, Heart, BookMarked } from 'lucide-react';
import { Link } from 'react-router';

interface JournalEntry {
  title: string;
  date: string;
  mood: string;
  preview: string;
  content: string;
  tags: string[];
  aiReflection: string;
  moodEmoji: string;
}

export function JournalHome() {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = entries.filter((entry) => {
    const query = searchQuery.toLowerCase();
    return (
      entry.title.toLowerCase().includes(query) ||
      entry.preview.toLowerCase().includes(query) ||
      entry.content.toLowerCase().includes(query) ||
      entry.tags.some((t) => t.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-purple-500/30 selection:text-white">
      {/* Background soft blurs */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>Your Thought Sanctuary</span>
              <BookMarked className="w-6 h-6 text-purple-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Capture insights, embrace serenity, and look back on your personal evolutionary path.</p>
          </div>
          <Link
            to="/app/journal/write"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            New Entry
          </Link>
        </div>

        {/* Level 2 Sub-navigation */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-850 max-w-fit backdrop-blur-md">
          <Link
            to="/app/journal"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-bold text-xs shadow-sm transition-all"
          >
            🧾 Journal Sanctuary
          </Link>
          <Link
            to="/app/journal/write"
            className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 font-bold text-xs transition-all"
          >
            ✍️ Write Journal
          </Link>
          <Link
            to="/app/journal/reflection"
            className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-850 font-bold text-xs transition-all"
          >
            🧘 Daily Reflection
          </Link>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Life Feed List (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            {filteredEntries.map((entry, i) => (
              <div
                key={i}
                onClick={() => setSelectedEntry(entry)}
                className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-purple-500/20 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">{entry.title}</h3>
                    <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-1">
                      <span>{entry.date}</span>
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-900 font-medium text-[10px] text-purple-400 uppercase">
                        <span>{entry.moodEmoji}</span>
                        <span>{entry.mood}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-350 text-sm font-light leading-relaxed mb-6 line-clamp-3">{entry.preview}</p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-450 hover:text-purple-300 hover:border-purple-500/25 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel: Memory Lake and Tools (1 Column) */}
          <div className="space-y-8">
            
            {/* Search Box */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex items-center gap-3">
              <Search className="w-4 h-4 text-purple-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sanctuary logs..."
                className="flex-1 bg-transparent outline-none text-xs text-slate-200 placeholder-slate-500 font-light"
              />
            </div>

            {/* Visual Focus Area: Memory Lake Placeholder */}
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[360px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Memory Lake</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Your Reflection Water</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Interactive water ripples reflecting your cognitive stability score.</p>
              </div>

              {/* Graphic Lake Simulation */}
              <div className="relative w-full h-40 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 100" fill="none">
                  {/* Concentric ripples */}
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="35" stroke="#8B5CF6" strokeWidth="1" className="opacity-30 animate-pulse" />
                  {/* Floating thoughts nodes */}
                  <circle cx="28" cy="35" r="3" fill="#A78BFA" />
                  <circle cx="70" cy="65" r="2" fill="#8B5CF6" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[9px] font-mono text-purple-400">RIPPLE FIELD SECURE</span>
                  <p className="text-[8px] text-slate-500 font-mono mt-0.5">3D Memory Lake Orbit</p>
                </div>
              </div>
            </div>

            {/* Staggered Writing Statistics Card */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono text-slate-400">Reflection Stats</h3>
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-light">Total Entries</span>
                  <span className="font-bold text-white">47 Logs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-light">Active Interval</span>
                  <span className="font-bold text-purple-400">12 Logs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-light">Log Streak</span>
                  <span className="font-bold text-emerald-400">5 Days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 font-light">Avg Length</span>
                  <span className="font-bold text-white">287 Words</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Journal Entry Details Modal - Premium Overhaul */}
      {selectedEntry && (
        <div className="fixed inset-0 bg-background/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-800/80 rounded-[2.5rem] p-8 shadow-2xl relative flex flex-col gap-6 overflow-hidden max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Background blur accents */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="flex justify-between items-start relative z-10">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase font-mono">Sanctuary Log</span>
                </div>
                <h2 className="text-2xl font-bold text-white leading-tight">{selectedEntry.title}</h2>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {selectedEntry.date}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-slate-850 font-medium text-[10px] text-purple-400 uppercase">
                    <span>{selectedEntry.moodEmoji}</span>
                    <span>{selectedEntry.mood}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedEntry(null)}
                className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <hr className="border-slate-850 relative z-10" />

            {/* Modal Content */}
            <div className="overflow-y-auto text-slate-200 leading-relaxed text-sm font-light space-y-5 relative z-10 pr-2">
              {selectedEntry.content.split('\n\n').map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              <div className="flex flex-wrap gap-2 pt-2">
                {selectedEntry.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 rounded bg-slate-950 border border-slate-850 text-xs font-mono text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* AI Insights Card */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-950/40 via-indigo-950/20 to-transparent border border-purple-900/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <h4 className="font-semibold text-purple-300 text-xs uppercase tracking-wider font-mono">Peehu Sakhi AI Insights</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light italic">
                  "{selectedEntry.aiReflection}"
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end gap-3 mt-4 relative z-10">
              <button
                onClick={() => setSelectedEntry(null)}
                className="px-5 py-3 rounded-2xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white font-bold text-xs transition-all"
              >
                Close Log
              </button>
              <Link
                to="/app/journal/write"
                className="px-5 py-3 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold text-xs uppercase tracking-wider hover:shadow-lg shadow-purple-500/20 transition-all flex items-center gap-1.5"
              >
                ✍️ Edit Log
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const entries: JournalEntry[] = [
  {
    title: 'A Productive Day',
    date: 'May 24, 2026',
    mood: 'Happy',
    moodEmoji: '😊',
    preview: 'Today was one of those days where everything just clicked. I finally finished the React module I\'ve been working on, and it feels amazing. The concepts are starting to make sense...',
    content: 'Today was one of those days where everything just clicked. I finally finished the React module I\'ve been working on, and it feels amazing. The concepts are starting to make sense, and I\'m feeling very confident in my coding abilities.\n\nI started the morning early, brewed a perfect cup of coffee, and immediately dove into the material. The hands-on coding exercises really helped solidify the knowledge. I also kept my distraction levels extremely low—turned off social media notifications and used a Pomodoro timer for focus blocks.\n\nIn the afternoon, I completed a 20-minute guided meditation session, which refreshed my cognitive bandwidth. Pair that with an evening journaling session, and it completes a truly outstanding day of self-development. Excited to take this momentum into tomorrow!',
    tags: ['productivity', 'learning', 'coding'],
    aiReflection: 'It is fantastic to celebrate your achievements! Acknowledge this positive focus energy and let it fuel your upcoming tasks. Keep shining!',
  },
  {
    title: 'Reflections on Growth',
    date: 'May 23, 2026',
    mood: 'Thoughtful',
    moodEmoji: '🤔',
    preview: 'Been thinking a lot about how far I\'ve come in the past few months. The habit tracking has really helped me stay consistent with meditation and exercise...',
    content: 'Been thinking a lot about how far I\'ve come in the past few months. The habit tracking has really helped me stay consistent with meditation and exercise. Looking back at old logs from a year ago, my mindset has completely shifted.\n\nI used to be extremely reactive, letting stress dictate my entire day. Now, with dedicated habits like morning mindfulness, structured goal settings, and reflective journaling, I feel in the driver seat of my emotional well-being.\n\nGrowth is slow, often imperceptible on a day-to-day basis, but looking over a 6-month timescale, the cumulative compound effect of minor daily adjustments is absolutely massive. Gratitude is the theme of today.',
    tags: ['reflection', 'growth', 'habits'],
    aiReflection: 'Reflective thinking is a superpower. Connecting your habits like meditation to daily gains accelerates your self-growth. Keep up the high self-awareness!',
  },
  {
    title: 'Overwhelmed but Optimistic',
    date: 'May 22, 2026',
    mood: 'Mixed',
    moodEmoji: '😐',
    preview: 'Work has been intense this week. Multiple deadlines converging, and I\'m feeling the pressure. But I\'m trying to stay optimistic and break things down into smaller steps...',
    content: 'Work has been intense this week. Multiple deadlines converging, and I\'m feeling the pressure. But I\'m trying to stay optimistic and break things down into smaller steps.\n\nI felt a wave of anxiety this afternoon looking at the project tracker. There are so many moving parts, and some dependencies are out of my hands. However, instead of panic, I took a step back. I scheduled brief alignments with team members to resolve blockers, restructured my task dashboard, and prioritized the absolute essentials.\n\nAlthough the workload remains high, having a clear sequential checklist makes it feel manageable. I am proud of how I am handling the pressure compared to my old self.',
    tags: ['work', 'stress', 'planning'],
    aiReflection: 'Embracing pressure with optimism is the hallmark of emotional resilience. Remember to pause, take deep breaths, and tackle one small action at a time.',
  },
];
