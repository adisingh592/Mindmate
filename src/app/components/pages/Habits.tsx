import { TrendingUp, Award, Flame, Sparkles } from 'lucide-react';

export function Habits() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-emerald-500/30 selection:text-white">
      {/* Decorative leaf details/glow */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Small Steps. Organic Growth.</h1>
          <p className="text-slate-400 font-light text-sm">
            Nurture your consistency heatmap and watch your living habits branch out.
          </p>
        </div>

        {/* Staggered Habit River Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Habit Tracker (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Streak Stats */}
            <div className="grid sm:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 shadow-lg flex flex-col justify-between h-32">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400">Current Streak</span>
                  <Flame className="w-5 h-5 text-emerald-400 animate-pulse" />
                </div>
                <div className="text-3xl font-black text-white font-mono">7 Days</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-colors flex flex-col justify-between h-32">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Longest Streak</span>
                <div className="text-3xl font-black text-white font-mono">28 Days</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-colors flex flex-col justify-between h-32">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Consistency</span>
                <div className="text-3xl font-black text-white font-mono">83%</div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:border-slate-800 transition-colors flex flex-col justify-between h-32">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Reliability</span>
                <div className="text-3xl font-black text-white font-mono">91%</div>
              </div>
            </div>

            {/* Active Habits list */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Active Sprouts</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </h2>

              <div className="space-y-4">
                {habits.map((habit, i) => (
                  <div key={i} className="group p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">{habit.name}</h3>
                        <p className="text-xs text-slate-500 font-mono mt-0.5">{habit.time}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 block">Streak</span>
                        <span className="text-lg font-black text-emerald-400 font-mono">{habit.streak} days</span>
                      </div>
                    </div>

                    {/* Horizontal day circles */}
                    <div className="flex items-center gap-2">
                      {Array.from({ length: 7 }).map((_, j) => (
                        <div
                          key={j}
                          className={`flex-1 h-8 rounded-xl transition-all duration-300 ${
                            j < habit.completedDays 
                              ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/20 border border-emerald-400/20' 
                              : 'bg-slate-950 border border-slate-900'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono text-right mt-2">Interval ─ Last 7 intervals</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consistency Heatmap */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800/80 shadow-2xl overflow-hidden">
              <h2 className="text-lg font-bold text-white mb-6 tracking-tight">Growth Grid</h2>
              <div className="overflow-x-auto">
                <div className="inline-grid grid-rows-7 gap-1">
                  {Array.from({ length: 7 }).map((_, row) => (
                    <div key={row} className="flex gap-1">
                      {Array.from({ length: 40 }).map((_, col) => {
                        const intensity = Math.random();
                        return (
                          <div
                            key={col}
                            className={`w-3 h-3 rounded-sm transition-colors ${
                              intensity > 0.8 ? 'bg-emerald-500 shadow-sm shadow-emerald-500/30' :
                              intensity > 0.5 ? 'bg-emerald-600/70' :
                              intensity > 0.3 ? 'bg-emerald-700/40' :
                              intensity > 0.1 ? 'bg-teal-900/30' :
                              'bg-slate-950 border border-slate-900/50'
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Side Panel: Living Vine Visual Focus Area Placeholder (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent pointer-events-none" />
              
              {/* Star grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">Living Vine</span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Your Streak Canopy</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Streaks branch out organically as you complete habits.</p>
              </div>

              {/* Graphic Vine Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Stem */}
                  <path d="M50 190 Q40 130 60 90 T40 20" stroke="#059669" strokeWidth="1.5" className="opacity-40" />
                  <path d="M50 190 Q40 130 60 90" stroke="#10B981" strokeWidth="2" strokeDasharray="3 3" />
                  
                  {/* Glowing leaf nodes */}
                  <circle cx="53" cy="140" r="3" fill="#34D399" className="animate-pulse" />
                  <circle cx="45" cy="95" r="4.5" fill="#10B981" />
                  <circle cx="58" cy="50" r="3" fill="#059669" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-emerald-400">CANOPY GENERATOR ACTIVE</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Vine Orbit Area</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <p className="text-[10px] font-mono text-slate-400 leading-normal">
                  Habit canopy grows 12% faster when routines are completed before 10 AM.
                </p>
              </div>
            </div>

            {/* Achievements row */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-4">
              <h4 className="text-sm font-bold text-white tracking-tight">Streaks Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/50 border border-slate-900">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-white">{achievement.title}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

const habits = [
  { name: 'Morning Meditation', time: '7:00 AM', streak: 7, completedDays: 7 },
  { name: 'Read for 30 minutes', time: '9:00 PM', streak: 5, completedDays: 6 },
  { name: 'Physical Exercises', time: '6:00 AM', streak: 4, completedDays: 5 },
  { name: 'Conscious Journaling', time: '10:00 PM', streak: 3, completedDays: 4 },
];

const achievements = [
  { title: '7-Day Streak Canopy', description: 'Completed a full week canopy' },
  { title: 'Consistency Pioneer', description: 'Maintained 3 sprout lines for 30 days' },
  { title: 'Golden Hour Sprout', description: 'Completed morning routine 20 days consecutively' },
];
