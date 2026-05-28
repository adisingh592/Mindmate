import { useState } from 'react';
import { TrendingUp, Brain, Target, Book, Zap, Smile, Calendar, Award, Clock, Sparkles, CheckCircle2, Layout, Database } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

type TabId = 'all' | 'mood' | 'habits' | 'learning' | 'productivity';

interface TabItem {
  id: TabId;
  label: string;
  emoji: string;
  icon: any;
}

const tabs: TabItem[] = [
  { id: 'all', label: 'All Intelligence', emoji: '📊', icon: TrendingUp },
  { id: 'mood', label: 'Emotion Hub', emoji: '😊', icon: Smile },
  { id: 'habits', label: 'Streaks Analytics', emoji: '🎯', icon: Target },
  { id: 'learning', label: 'Cognitive Growth', emoji: '🎓', icon: Book },
  { id: 'productivity', label: 'Focus Metrics', emoji: '⚡', icon: Zap },
];

export function Analytics() {
  const [activeTab, setActiveTab] = useState<TabId>('all');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-blue-500/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Cognitive Intelligence</span>
              <Database className="w-6 h-6 text-blue-400 animate-pulse" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Review complex cognitive insights, habit completion forecasts, and neural emotion charts.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-blue-400 uppercase tracking-widest self-start md:self-auto">
            METRICS: DEEP SYNCED
          </span>
        </div>

        {/* Level 2 Sub-navigation tabs */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-850 max-w-fit backdrop-blur-md">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-850'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Analytics Panels (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            {activeTab === 'all' && (
              <div className="space-y-10 animate-in fade-in duration-300">
                {/* Summary Cards */}
                <div className="grid sm:grid-cols-4 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg flex flex-col justify-between h-36">
                    <Brain className="w-6 h-6 text-white" />
                    <div>
                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider opacity-80">Life Score</div>
                      <div className="text-3xl font-black font-mono">87</div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-36">
                    <Target className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Goal Completion</div>
                      <div className="text-3xl font-black font-mono text-white">68%</div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-36">
                    <Book className="w-6 h-6 text-cyan-400" />
                    <div>
                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Learning Hours</div>
                      <div className="text-3xl font-black font-mono text-white">24h</div>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-36">
                    <Zap className="w-6 h-6 text-teal-400 animate-pulse" />
                    <div>
                      <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Productivity</div>
                      <div className="text-3xl font-black font-mono text-white">91%</div>
                    </div>
                  </div>
                </div>

                {/* Charts Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                    <h3 className="text-sm font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                      <Smile className="w-4 h-4 text-blue-400" />
                      <span>Mood Cycles</span>
                    </h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={moodData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                        <XAxis dataKey="day" stroke="#64748B" fontSize={10} fontStyle="mono" />
                        <YAxis stroke="#64748B" fontSize={10} fontStyle="mono" />
                        <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '1rem', color: '#fff' }} />
                        <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} dot={{ fill: '#3B82F6', r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                    <h3 className="text-sm font-bold text-white mb-6 tracking-tight flex items-center gap-2">
                      <Target className="w-4 h-4 text-cyan-400" />
                      <span>Habit Streams</span>
                    </h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={habitData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                        <XAxis dataKey="habit" stroke="#64748B" fontSize={10} fontStyle="mono" />
                        <YAxis stroke="#64748B" fontSize={10} fontStyle="mono" />
                        <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155', borderRadius: '1rem', color: '#fff' }} />
                        <Bar dataKey="completion" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Staggered Insights */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-4">
                    <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono text-slate-450">Key Growth Indicators</h3>
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 text-xs text-slate-350 leading-relaxed font-light">
                        💡 Focus efficiency reaches maximum level inside evening deeper work blocks.
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 text-xs text-slate-350 leading-relaxed font-light">
                        🧘 Streaks consistency leaps up by 34% immediately following regular meditation.
                      </div>
                    </div>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 flex flex-col justify-between">
                    <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono text-slate-450">Cognitive Forecast</h3>
                    <div className="space-y-2 text-xs font-mono text-slate-300">
                      <div>✓ On pace to finish 3 active books</div>
                      <div>✓ Unlocking 100 deep learning hours</div>
                      <div>✓ Streak reliability rate maintaining 90%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'mood' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Avg Mood Score</div>
                    <div className="text-3xl font-black text-blue-400 font-mono mt-1">7.6 / 10</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Primary Logged</div>
                    <div className="text-3xl font-black text-cyan-400 font-mono mt-1">Focused 😊</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Stress Rate</div>
                    <div className="text-3xl font-black text-teal-400 font-mono mt-1">Low 🧘</div>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                  <h3 className="text-sm font-bold text-white mb-6">Detailed Mood Area Timeline</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={moodData}>
                      <defs>
                        <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                      <XAxis dataKey="day" stroke="#64748B" fontSize={10} fontStyle="mono" />
                      <YAxis stroke="#64748B" fontSize={10} fontStyle="mono" />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155' }} />
                      <Area type="monotone" dataKey="score" stroke="#3B82F6" fillOpacity={1} fill="url(#colorMood)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'habits' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                  <h3 className="text-sm font-bold text-white mb-6">Habit Completion Rates</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={habitData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                      <XAxis dataKey="habit" stroke="#64748B" fontSize={10} />
                      <YAxis stroke="#64748B" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155' }} />
                      <Bar dataKey="completion" fill="#06B6D4" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'learning' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                  <h3 className="text-sm font-bold text-white mb-6">Learning Hours per Skill sprouted</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={learningHoursData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                      <XAxis dataKey="skill" stroke="#64748B" fontSize={10} />
                      <YAxis stroke="#64748B" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155' }} />
                      <Bar dataKey="hours" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'productivity' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850">
                  <h3 className="text-sm font-bold text-white mb-6">Focus Efficiency Timeline</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={productivityData}>
                      <defs>
                        <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                      <XAxis dataKey="day" stroke="#64748B" fontSize={10} />
                      <YAxis stroke="#64748B" fontSize={10} />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '1px solid #334155' }} />
                      <Area type="monotone" dataKey="completed" stroke="#06B6D4" fillOpacity={1} fill="url(#colorProd)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

          </div>

          {/* Right Panel: Data Monolith Visual Focus Area Placeholder (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Data Monolith</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Intelligence Pedestal</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Deep dimensional logs generated by local companion analysis.</p>
              </div>

              {/* Graphic Monolith Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Isometric column */}
                  <polygon points="50,40 80,60 50,80 20,60" fill="none" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,80 80,60 80,160 50,180" fill="none" stroke="currentColor" strokeWidth="1" />
                  <polygon points="50,80 20,60 20,160 50,180" fill="none" stroke="#2563EB" strokeWidth="1.5" className="opacity-45" />
                  <circle cx="50" cy="40" r="3.5" fill="#06B6D4" className="animate-pulse" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-blue-400">MONOLITH LINK CONNECTED</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Monolith Orbit Area</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <p className="text-[10px] font-mono text-slate-400 leading-normal">
                  Data index updates instantly on journal log cycles.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const moodData = [
  { day: 'Mon', score: 7 },
  { day: 'Tue', score: 8 },
  { day: 'Wed', score: 6 },
  { day: 'Thu', score: 9 },
  { day: 'Fri', score: 8 },
  { day: 'Sat', score: 9 },
  { day: 'Sun', score: 7 },
];

const habitData = [
  { habit: 'Meditation', completion: 100 },
  { habit: 'Exercise', completion: 86 },
  { habit: 'Reading', completion: 71 },
  { habit: 'Journal', completion: 57 },
];

const learningHoursData = [
  { skill: 'React', hours: 12.5 },
  { skill: 'Tailwind CSS', hours: 7.2 },
  { skill: 'UI/UX Design', hours: 4.8 },
];

const productivityData = [
  { day: 'Mon', completed: 3 },
  { day: 'Tue', completed: 4 },
  { day: 'Wed', completed: 2 },
  { day: 'Thu', completed: 5 },
  { day: 'Fri', completed: 4 },
  { day: 'Sat', completed: 6 },
  { day: 'Sun', completed: 3 },
];
