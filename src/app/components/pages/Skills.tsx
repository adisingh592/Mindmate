import { Lightbulb, TrendingUp, Book, Play, Compass, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Skills() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-teal-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Skill Roadmap</span>
              <Compass className="w-6 h-6 text-teal-400 animate-spin-slow" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Chart your personal cognitive evolution. Unlock progressive paths and track lessons.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-teal-400 uppercase self-start md:self-auto">
            ROADMAP: ACTIVE
          </span>
        </div>

        {/* Motivational Card */}
        <div className="relative group p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl" />
          <div className="flex items-center gap-4">
            <Lightbulb className="w-10 h-10 text-teal-400 flex-shrink-0 animate-bounce-slow" />
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 block">Growth Mantra</span>
              <h2 className="text-xl font-bold text-white mb-1">Keep learning, keep compounding.</h2>
              <p className="text-slate-400 font-light text-xs">Every cognitive peak was conquered step-by-step. Your path branches out here.</p>
            </div>
          </div>
        </div>

        {/* Skill Paths Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main List (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Active Paths */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Your Active Paths</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {learningPaths.map((path, i) => (
                  <Link
                    key={i}
                    to={`/app/skills/${path.id}`}
                    className="group p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-teal-500/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="flex gap-6 items-start mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${path.color} flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                        <path.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-base font-bold text-white tracking-tight">{path.title}</h3>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">{path.description}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-500">Progress</span>
                          <span className="font-bold text-white">{path.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${path.color}`}
                            style={{ width: `${path.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
                        <span>{path.lessons} LESSONS</span>
                        <span>{path.duration} TOTAL</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Skills */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Explore Suggested Path Modules</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedSkills.map((skill, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-teal-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between h-44">
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                        <Lightbulb className="w-5 h-5 text-teal-400" />
                      </div>
                      <h4 className="font-bold text-white text-xs tracking-tight mb-1 group-hover:text-teal-300 transition-colors">{skill.title}</h4>
                      <p className="text-[10px] text-slate-400 font-light leading-relaxed">{skill.description}</p>
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 uppercase mt-4 tracking-wider">{skill.duration}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Skill Tree Visual Focus Area (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-teal-400" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Skill Tree</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Your Knowledge Canopy</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Branching nodes mapping completed courses and masteries.</p>
              </div>

              {/* Graphic Columns Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Stem and branches */}
                  <path d="M50 190 Q50 110 50 40" stroke="currentColor" strokeWidth="1" />
                  <path d="M50 130 Q30 90 20 80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M50 100 Q70 70 80 60" stroke="#14B8A6" strokeWidth="1.5" className="opacity-40" />
                  {/* Nodes */}
                  <circle cx="50" cy="40" r="3.5" fill="#06B6D4" className="animate-pulse" />
                  <circle cx="20" cy="80" r="2.5" fill="#14B8A6" />
                  <circle cx="80" cy="60" r="3" fill="#2DD4BF" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-teal-400">TREE INDEX CONNECTED</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Skill Tree Orbit Area</p>
                </div>
              </div>

              {/* Stats */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between">
                  <span>Tracked Path sprouts</span>
                  <span className="font-bold text-white">4 active</span>
                </div>
                <div className="flex justify-between">
                  <span>Lessons Unlocked</span>
                  <span className="font-bold text-white">47 completed</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Study time</span>
                  <span className="font-bold text-teal-450">124 hours</span>
                </div>
              </div>
            </div>

            {/* AI Suggestions Card */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-tr from-teal-950/40 via-cyan-950/20 to-transparent border border-teal-900/30">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
                </div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-400">Peehu Guidance</h3>
              </div>
              <div className="space-y-3 font-light text-xs text-slate-350">
                <p>✦ Focus on Advanced React Module: early study logs show +22% higher retention before noon.</p>
                <p>✦ Unlocking Public Speaking will compound your portfolio home summit path.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const learningPaths = [
  {
    id: 'react-advanced',
    title: 'Advanced React Patterns',
    description: 'Master modern React development with hooks, context, and performance optimization',
    progress: 65,
    lessons: 24,
    duration: '8 hours',
    icon: Play,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'typescript',
    title: 'TypeScript Fundamentals',
    description: 'Learn type-safe JavaScript development with TypeScript',
    progress: 40,
    lessons: 18,
    duration: '6 hours',
    icon: Book,
    color: 'from-purple-500 to-pink-500',
  },
];

const recommendedSkills = [
  {
    title: 'UI/UX Design Principles',
    description: 'Learn the fundamentals of user interface and experience design',
    duration: '10 hours',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Build a strong foundation in computer science fundamentals',
    duration: '15 hours',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Public Speaking Mastery',
    description: 'Develop confidence and skills in presenting and communicating',
    duration: '5 hours',
    color: 'from-indigo-500 to-purple-500',
  },
];
