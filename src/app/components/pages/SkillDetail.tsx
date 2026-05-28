import { Play, FileText, CheckCircle2, Sparkles, Trophy, BookOpen, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export function SkillDetail() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-teal-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-teal-650/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <Link
              to="/app/skills"
              className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-350 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>BACK TO ROADMAP</span>
            </Link>
            <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Learning Studio</span>
              <BookOpen className="w-5.5 h-5.5 text-teal-400" />
            </h1>
            <p className="text-slate-400 font-light text-xs mt-0.5">Master modern web abstractions and complex programming frameworks.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-850 text-[10px] font-mono text-teal-400 uppercase">
            STUDIO: ACTIVE
          </span>
        </div>

        {/* Master Banner */}
        <div className="relative group p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-blue-500/5 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="px-2.5 py-1 rounded-lg bg-teal-500/10 border border-teal-500/20 text-[10px] font-mono font-bold text-teal-450 uppercase">
                Active Mastery Course
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Advanced React Patterns</h2>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                Master modern React development with custom hooks, complex context architectures, and fine-tuned performance structures.
              </p>
            </div>

            <div className="space-y-4 p-6 rounded-2xl bg-slate-950/60 border border-slate-900">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-500">Overall Mastery Progress</span>
                  <span className="font-bold text-teal-400">65%</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-900 p-0.5 border border-slate-850 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-blue-500" style={{ width: '65%' }} />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-slate-500">
                <span>24 LESSONS</span>
                <span>•</span>
                <span>8 HOURS</span>
                <span>•</span>
                <span>16 COMPLETED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Studio Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Lessons & Assignments (2 Columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Lessons List */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">Lessons Checklist</h3>
              <div className="space-y-4">
                {lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl border transition-all duration-350 ${
                      lesson.completed
                        ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300'
                        : 'bg-slate-950/80 border-slate-900 hover:border-slate-800 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        lesson.completed ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-900 text-slate-550'
                      }`}>
                        {lesson.completed ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm tracking-tight text-white">{lesson.title}</h4>
                        <div className="text-[10px] font-mono text-slate-500 mt-0.5">{lesson.duration} ── LECTURE MODULE</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assignments Card */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight">Practice Assignments</h3>
              <div className="space-y-4">
                {assignments.map((assignment, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 space-y-3">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-sm text-white tracking-tight">{assignment.title}</h4>
                      <span className={`px-2.5 py-0.5 rounded-lg text-[9px] font-mono font-semibold uppercase tracking-wider ${
                        assignment.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {assignment.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">{assignment.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel Studio Tools (1 Column) */}
          <div className="space-y-6">
            {/* Quick Progress */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6 font-mono text-xs">
              <h3 className="text-sm font-bold text-white tracking-tight uppercase text-slate-550 font-mono">Your Studio Stats</h3>
              <div className="space-y-3.5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Completed Lessons</span>
                  <span className="font-bold text-white">16 / 24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Solved Assignments</span>
                  <span className="font-bold text-white">3 / 6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Study Time</span>
                  <span className="font-bold text-teal-450">5.2 Hours</span>
                </div>
              </div>
            </div>

            {/* Sticky Notes Area */}
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-400" />
                <h3 className="text-sm font-bold text-white tracking-tight">Studio Scratch Notes</h3>
              </div>
              <textarea
                placeholder="Jot down notes while learning patterns..."
                className="w-full p-4 rounded-2xl bg-slate-950/60 border border-slate-900 text-xs font-light text-slate-200 placeholder-slate-650 outline-none resize-none min-h-[160px]"
              />
            </div>

            {/* AI Coach Card */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-teal-950/40 via-blue-950/20 to-transparent border border-teal-900/30 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
                <h3 className="text-xs font-bold text-white font-mono uppercase tracking-widest">Peehu Coach</h3>
              </div>
              <div className="space-y-3 text-xs font-light text-slate-350 leading-relaxed">
                <p>✦ You are doing great! Completing custom hook assignments will unlock the 75% Mastery badge.</p>
                <p>✦ Newport advises taking a 5-minute offline breath block right after this video session.</p>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-4 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-teal-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
              Continue Learning
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

const lessons = [
  { title: 'Introduction to Hooks', duration: '15 min', completed: true },
  { title: 'useState and useEffect', duration: '20 min', completed: true },
  { title: 'Custom Hooks', duration: '25 min', completed: true },
  { title: 'useContext and Context API', duration: '30 min', completed: false },
  { title: 'Performance Optimization', duration: '35 min', completed: false },
];

const assignments = [
  { title: 'Build a Counter with Hooks', description: 'Create a simple counter using useState', status: 'Completed' },
  { title: 'Create Custom Hook', description: 'Build a custom hook for data fetching', status: 'In Progress' },
  { title: 'Optimize Component', description: 'Use memo and useMemo to optimize performance', status: 'Not Started' },
];
