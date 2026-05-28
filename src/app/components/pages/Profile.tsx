import { useState } from 'react';
import { Link } from 'react-router';
import { User, Trophy, Target, TrendingUp, Heart, Book, Shield, CreditCard, Mail, KeyRound, Check, Award, Compass, Sparkles } from 'lucide-react';

interface Goal {
  title: string;
  progress: number;
}

interface Achievement {
  title: string;
  date: string;
}

export function Profile() {
  const [profileSubTab, setProfileSubTab] = useState<'overview' | 'account'>('overview');
  const [isSaved, setIsSaved] = useState(false);
  const [username, setUsername] = useState('Friend');
  const [email, setEmail] = useState('friend@peehusakhi.com');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-violet-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Your Identity Shield</span>
              <User className="w-6 h-6 text-violet-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Review your personal evolution index, personality logs, and account credentials.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-violet-400 uppercase self-start md:self-auto">
            IDENTITY: SYNCHRONIZED
          </span>
        </div>

        {/* Level 2 Sub-navigation menu */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-slate-900/60 border border-slate-850 max-w-fit backdrop-blur-md">
          <button
            onClick={() => setProfileSubTab('overview')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              profileSubTab === 'overview'
                ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-850'
            }`}
          >
            👤 Profile Overview
          </button>
          <button
            onClick={() => setProfileSubTab('account')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              profileSubTab === 'account'
                ? 'bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-850'
            }`}
          >
            ⚙️ Account Settings
          </button>
        </div>

        {/* Tab Content */}
        {profileSubTab === 'overview' ? (
          <div className="space-y-10 animate-in fade-in duration-300">
            
            {/* Identity Summary Card */}
            <div className="relative group p-10 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <div className="w-20 h-20 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform duration-300">
                  <User className="w-10 h-10" />
                </div>
                <div className="text-center sm:text-left space-y-2">
                  <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome, {username}</h2>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Level 12 ── Joined 147 days ago</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-900 text-center">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Life Score</div>
                  <div className="font-bold text-white font-mono text-sm mt-0.5">87</div>
                </div>
                <div className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-900 text-center">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Total XP</div>
                  <div className="font-bold text-white font-mono text-sm mt-0.5">24,387</div>
                </div>
              </div>
            </div>

            {/* Asymmetrical Grid Details */}
            <div className="grid lg:grid-cols-4 gap-8">
              
              {/* Goals & Achievements (3 Columns) */}
              <div className="lg:col-span-3 space-y-10">
                {/* Goals */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Expedition Goals</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    {goals.map((goal, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 transition-all duration-300 space-y-4">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-400 font-light truncate mr-2">{goal.title}</span>
                          <span className="font-bold text-violet-400">{goal.progress}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500" style={{ width: `${goal.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Achievements */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Key Achievements</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {topAchievements.map((achievement, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center text-violet-400 flex-shrink-0">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xs text-white tracking-tight">{achievement.title}</h4>
                          <span className="text-[9px] font-mono text-slate-500 uppercase block mt-0.5">{achievement.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personality Traits */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>Personality Insights</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  </h2>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {personalityTraits.map((trait, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 transition-all duration-300 text-center space-y-4">
                        <div className="w-14 h-14 mx-auto rounded-full bg-slate-950 border border-slate-850 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform duration-300">
                          <trait.icon className="w-6 h-6 animate-pulse" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-sm tracking-tight">{trait.title}</h4>
                          <p className="text-[11px] text-slate-450 font-light mt-1 leading-relaxed">{trait.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel: Future Identity Helix Visual Focus Area (1 Column) */}
              <div className="space-y-8">
                <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent pointer-events-none" />
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Compass className="w-5 h-5 text-violet-400 animate-spin-slow" />
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Identity Helix</span>
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">Your Identity Shield</h3>
                    <p className="text-xs text-slate-500 font-light mt-1">Isometric central glass spiral container displaying core traits.</p>
                  </div>

                  {/* Graphic Spiral Simulation */}
                  <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                    <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                      {/* Double helix curves */}
                      <path d="M30 30 Q50 60 30 90 T30 150" stroke="currentColor" strokeWidth="1" />
                      <path d="M70 30 Q50 60 70 90 T70 150" stroke="#7C3AED" strokeWidth="1.5" className="opacity-40 animate-pulse" />
                      <line x1="32" y1="60" x2="68" y2="60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                      <circle cx="50" cy="90" r="3" fill="#A78BFA" />
                    </svg>
                    <div className="relative text-center z-10">
                      <span className="text-[10px] font-mono text-violet-400">HELIX INDEX CONNECTED</span>
                      <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Helix Orbit Area</p>
                    </div>
                  </div>

                  {/* Streaks stats */}
                  <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 space-y-2.5 font-mono text-[10px] text-slate-450">
                    <div className="flex justify-between items-center">
                      <span>Expedition Duration</span>
                      <span className="font-bold text-white">147 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Streak levels</span>
                      <span className="font-bold text-violet-400">14 days</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Account Settings Layout */}
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Left Column Credentials */}
              <div className="md:col-span-2 space-y-6">
                <form onSubmit={handleSave} className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-5 relative">
                  <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                    <User className="w-5 h-5 text-violet-400" />
                    <span>Personal Credentials</span>
                  </h3>
                  
                  {isSaved && (
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold flex items-center gap-2 animate-in slide-in-from-top-2 duration-200">
                      <Check className="w-4 h-4" />
                      <span>Account details updated successfully!</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Username</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 p-3.5 pl-11 rounded-xl outline-none focus:border-violet-500 text-slate-100 text-sm font-light transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-900 p-3.5 pl-11 rounded-xl outline-none focus:border-violet-500 text-slate-100 text-sm font-light transition-all"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-violet-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Save Credentials
                  </button>
                </form>

                <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-5">
                  <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
                    <KeyRound className="w-5 h-5 text-violet-400" />
                    <span>Security & Access</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 rounded-xl bg-slate-950/60 border border-slate-900">
                      <div>
                        <div className="text-xs font-bold text-white">Update Password</div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">Last updated 3 months ago</div>
                      </div>
                      <button className="px-4 py-2 border border-slate-800 hover:bg-slate-800 rounded-xl text-xs font-semibold text-slate-350 transition-all">
                        Change
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column subscription plan */}
              <div className="space-y-6">
                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-violet-950/40 via-purple-950/20 to-transparent border border-violet-900/30 flex flex-col justify-between h-80 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-violet-500/10 rounded-full blur-xl pointer-events-none" />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-violet-400 animate-pulse" />
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Expedition Plan</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">Peehu Sakhi Plus</h4>
                      <p className="text-xs text-slate-500 mt-1 font-light">Premium Membership Registered</p>
                    </div>
                    <ul className="space-y-2 text-xs font-light text-slate-400 mt-2">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-violet-400" />
                        <span>Infinite offline libraries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-violet-400" />
                        <span>Advanced cognitive analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-900/50 text-[9px] text-slate-500 font-mono">
                    Next billing date: **Dec 24, 2026** ($9.99/mo)
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}

const goals: Goal[] = [
  { title: 'Read 20 books this year', progress: 60 },
  { title: 'Learn Advanced React', progress: 65 },
  { title: 'Meditate daily for 90 days', progress: 23 },
];

const topAchievements: Achievement[] = [
  { title: '7-Day Meditation Streak', date: 'Unlocked today' },
  { title: 'Book Enthusiast', date: 'Unlocked 2 days ago' },
  { title: 'Habit Master', date: 'Unlocked 1 week ago' },
];

const personalityTraits = [
  {
    icon: Heart,
    title: 'Reflective',
    description: 'You enjoy deep introspection and self-awareness',
  },
  {
    icon: Book,
    title: 'Learner',
    description: 'You have a strong desire to continuously learn and grow',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Minded',
    description: 'You embrace challenges as opportunities',
  },
];
