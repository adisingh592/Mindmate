import { Trophy, Star, Award, Target, Zap, ShieldAlert, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router';

export function Gamification() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-amber-500/30 selection:text-white">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Growth Adventure</span>
              <Trophy className="w-6 h-6 text-amber-400 animate-bounce-slow" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Conquer milestones, level up your conscious focus blocks, and unlock hero relics.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-amber-400 uppercase self-start md:self-auto">
            EXPEDITION: ACTIVE
          </span>
        </div>

        {/* Level Stats Segment */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg flex flex-col justify-between h-36">
            <Star className="w-6 h-6 text-white" />
            <div>
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider opacity-80">Total XP Gathered</div>
              <div className="text-3xl font-black font-mono">24,387</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-36">
            <Trophy className="w-6 h-6 text-amber-400" />
            <div>
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Current Expedition Level</div>
              <div className="text-3xl font-black font-mono text-white">Lvl 12</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-36">
            <Award className="w-6 h-6 text-orange-400 animate-pulse" />
            <div>
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Unlocked Achievements</div>
              <div className="text-3xl font-black font-mono text-white">47 / 120</div>
            </div>
          </div>
        </div>

        {/* Level Progress Slider */}
        <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Next Summit Rank: LEVEL 13</span>
            <span className="font-bold text-white">687 XP remaining</span>
          </div>
          <div className="h-2 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 w-[68%]" />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>24,387 XP CURRENT</span>
            <span>25,000 XP REQUIRED</span>
          </div>
        </div>

        {/* Two-Column Adventure Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Quest Logs (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Active Quests */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Active Quest Line</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </h2>

              <div className="space-y-4">
                {challenges.map((challenge, i) => (
                  <div key={i} className="group p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-base font-bold text-white tracking-tight">{challenge.title}</h3>
                        <p className="text-xs text-slate-400 font-light mt-0.5">{challenge.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-slate-500 block uppercase">Reward</span>
                        <span className="text-sm font-black text-amber-400 font-mono">+{challenge.reward} XP</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-slate-500">Milestones reached</span>
                        <span className="font-bold text-white">{challenge.current} / {challenge.target}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                          style={{ width: `${(challenge.current / challenge.target) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements unlocked */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Expedition Achievements</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                {achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border transition-all duration-350 ${
                      achievement.unlocked
                        ? 'bg-amber-500/5 border-amber-500/20 opacity-100'
                        : 'bg-slate-950/40 border-slate-900 opacity-40'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white'
                        : 'bg-slate-900 text-slate-500'
                    }`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-xs tracking-tight mb-1">{achievement.title}</h4>
                    <p className="text-[10px] text-slate-450 font-light leading-relaxed mb-3">{achievement.description}</p>
                    <div className="flex items-center gap-1.5 text-[9px] font-mono text-amber-400">
                      <Zap className="w-3.5 h-3.5" />
                      <span>+{achievement.xp} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Future Hero Relic Visual Focus Area (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-amber-400 animate-spin-slow" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Hero Relic</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Your Expedition Relics</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Sleek altar displays displaying unlocked focus artifacts.</p>
              </div>

              {/* Graphic Altar Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Altar */}
                  <polygon points="20,150 80,150 70,170 30,170" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="50" y1="150" x2="50" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Floating Relic orb */}
                  <circle cx="50" cy="70" r="12" stroke="#EAB308" strokeWidth="1.5" className="opacity-40 animate-pulse" />
                  <polygon points="50,60 58,70 50,80 42,70" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-amber-400">ALTAR SYNC ACTIVE</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Relic Orbit Area</p>
                </div>
              </div>

              {/* Journey Milestones */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between items-center">
                  <span>Adventurer Milestone</span>
                  <span className="font-bold text-amber-450 uppercase">LEVEL 10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Master Rank Peak</span>
                  <span className="font-bold text-slate-500 uppercase">LEVEL 20 LOCKED</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const achievements = [
  { title: 'First Steps Sprout', description: 'Complete your first journal entry', xp: 100, unlocked: true },
  { title: 'Week Summit Master', description: 'Maintain a 7-day streak', xp: 250, unlocked: true },
  { title: 'Habit Canopy Legend', description: 'Complete all habits for 30 days', xp: 500, unlocked: false },
  { title: 'Library Book Worm', description: 'Read 10 books', xp: 300, unlocked: true },
  { title: 'Reflection Guru', description: 'Complete 50 daily reflections', xp: 400, unlocked: false },
  { title: 'Cognitive Legend', description: 'Complete 5 skill courses', xp: 600, unlocked: false },
];

const challenges = [
  { title: '30-Day Meditation Challenge', description: 'Meditate for 30 consecutive days', current: 7, target: 30, reward: 500 },
  { title: 'Book Club', description: 'Read 5 books this month', current: 2, target: 5, reward: 300 },
  { title: 'Journal Journey', description: 'Write 20 journal entries', current: 12, target: 20, reward: 250 },
];
