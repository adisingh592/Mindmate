import { Plus, Calendar, Clock, Flag, Trophy, Milestone, Compass } from 'lucide-react';

export function Planner() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-indigo-500/30 selection:text-white">
      {/* Decorative timeline background line */}
      <div className="absolute top-[20%] left-10 lg:left-[calc(66%+32px)] w-0.5 h-[70%] bg-gradient-to-b from-blue-500/20 via-cyan-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Mountain Peak Visual Focus Area Header */}
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          
          <div className="relative z-10 space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Milestone className="w-3.5 h-3.5" />
              <span>Intention Pipeline</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Turn Intentions into Action</h1>
            <p className="text-slate-400 font-light text-sm">
              Climb your daily mountain peak step-by-step. Break tasks into manageable efforts.
            </p>
          </div>

          {/* Wireframe Mountain Peak Placeholder */}
          <div className="relative w-72 h-40 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-slate-700 transition-colors">
            {/* Background glowing peak lines */}
            <svg className="absolute inset-0 w-full h-full text-slate-800" xmlns="http://www.w3.org/2000/svg">
              <path d="M 36 160 L 120 40 L 192 120 L 252 80 L 288 160 Z" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 80 160 L 160 60 L 220 140 Z" fill="none" stroke="#3B82F6" strokeWidth="1.5" className="opacity-30" />
              <circle cx="120" cy="40" r="3" fill="#06B6D4" className="animate-pulse" />
              <circle cx="252" cy="80" r="2.5" fill="#3B82F6" />
            </svg>
            <div className="relative text-center z-10 space-y-1">
              <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-500 uppercase">3D Mountain Peak</span>
              <p className="text-[9px] font-mono text-cyan-400/80">COMPASS ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Two-Column Mountain Journey Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Daily Tasks Timeline (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Today's Ascent Path</h2>
                <p className="text-xs text-slate-400 mt-1 font-mono">MAY 24, 2026 ── CLIMB RATE: 75%</p>
              </div>
              <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Milestone
              </button>
            </div>

            <div className="space-y-6">
              {tasks.map((task, i) => (
                <div
                  key={i}
                  className="group relative p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-slate-800 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      readOnly
                      className="mt-1.5 w-5 h-5 rounded bg-slate-850 border-slate-700 checked:bg-blue-500 checked:border-blue-500 focus:ring-0 focus:ring-offset-0"
                    />
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className={`text-lg font-bold text-white tracking-tight ${task.completed ? 'line-through opacity-40' : ''}`}>
                          {task.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-1.5">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-400" />
                            {task.deadline}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-cyan-400" />
                            {task.effort} effort
                          </div>
                          <div className="flex items-center gap-1">
                            <Flag className="w-3.5 h-3.5 text-teal-400" />
                            {task.importance}/10 Priority
                          </div>
                        </div>
                      </div>

                      {task.subtasks && (
                        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 space-y-3">
                          {task.subtasks.map((subtask, j) => (
                            <div key={j} className="flex items-center gap-3 text-xs">
                              <input type="checkbox" checked={subtask.completed} readOnly className="w-4 h-4 rounded bg-slate-900 border-slate-800 checked:bg-teal-500 focus:ring-0" />
                              <span className={`font-light ${subtask.completed ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                                {subtask.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Progress Bar with elevated glowing details */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-slate-400 font-light">Milestone Progress</span>
                          <span className="font-bold text-white">{task.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-900">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md shadow-blue-500/50"
                            style={{ width: `${task.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-semibold uppercase tracking-wider ${
                      task.status === 'In Progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      task.status === 'Completed' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' :
                      'bg-slate-800 text-slate-500'
                    }`}>
                      {task.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Summary and Roadmap Column (1 Column) */}
          <div className="space-y-8">
            
            {/* Ascent Summary Card */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800/80 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl" />
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-blue-400 animate-bounce-slow" />
                <span>Ascent Progress</span>
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-400 font-light">Overall Height Climbed</span>
                    <span className="font-bold text-white">65%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[65%]" />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-900 space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Milestones</span>
                    <span className="font-bold text-white">3 Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Summit Completed</span>
                    <span className="font-bold text-teal-400">1 Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Remaining Summit Effort</span>
                    <span className="font-bold text-blue-400">6.5 Hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Summit Suggestions */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-tr from-blue-950/40 via-cyan-950/20 to-transparent border border-blue-900/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Compass className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-tight">AI Navigation Advice</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 text-xs text-slate-300 leading-relaxed font-light">
                  ✦ Tackle the React Module first: your creative and analytical summit logs peak before 3 PM.
                </div>
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900 text-xs text-slate-300 leading-relaxed font-light">
                  ✦ Reserve meditation as a cooling wind block directly after 6 PM course sessions.
                </div>
              </div>
            </div>

            {/* Staggered Week Ascent View */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850">
              <h3 className="text-lg font-bold text-white mb-4 tracking-tight">Weekly Peak Load</h3>
              <div className="space-y-2.5">
                {weekDays.map((day, i) => (
                  <div key={i} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/40 hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all font-mono text-xs">
                    <span className="text-slate-300 font-light">{day.name}</span>
                    <span className="font-bold text-slate-400">{day.tasks} steps</span>
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

const tasks = [
  {
    title: 'Complete React Course Module 4',
    deadline: 'Today, 4:00 PM',
    effort: 'High',
    importance: 9,
    progress: 75,
    status: 'In Progress',
    completed: false,
    subtasks: [
      { title: 'Watch lecture videos', completed: true },
      { title: 'Complete coding exercises', completed: true },
      { title: 'Build practice project', completed: false },
    ],
  },
  {
    title: 'Design Portfolio Homepage',
    deadline: 'Tomorrow',
    effort: 'Medium',
    importance: 8,
    progress: 40,
    status: 'In Progress',
    completed: false,
  },
  {
    title: 'Meditation Session',
    deadline: 'Today, 6:00 PM',
    effort: 'Low',
    importance: 7,
    progress: 100,
    status: 'Completed',
    completed: true,
  },
];

const weekDays = [
  { name: 'Monday', tasks: 4 },
  { name: 'Tuesday', tasks: 6 },
  { name: 'Wednesday', tasks: 3 },
  { name: 'Thursday', tasks: 5 },
  { name: 'Friday', tasks: 4 },
  { name: 'Saturday', tasks: 2 },
  { name: 'Sunday', tasks: 1 },
];
