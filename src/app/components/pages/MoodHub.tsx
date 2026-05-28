import { Heart, TrendingUp, Book, Music, Film, Lightbulb, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export function MoodHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-cyan-500/30 selection:text-white">
      {/* Background futuristic orbits and emotional resonance glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header Breadcrumbs */}
        <div className="flex items-center justify-between">
          <Link
            to="/app"
            className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-350 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>BACK TO DASHBOARD</span>
          </Link>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
            EMOTIONAL INTEL ACTIVE
          </span>
        </div>

        {/* Hero Section */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent">
            Understand How You Feel.
          </h1>
          <p className="text-slate-400 font-light text-sm">
            Peehu Sakhi maps your daily biometric vibrations and verbal sentiments into an ever-evolving emotional landscape.
          </p>
        </div>

        {/* Visual Focus Area: 3D Emotion Sphere Placeholder inside futuristic Orbital Dial */}
        <div className="relative group flex justify-center py-6">
          {/* Blurred backing glow */}
          <div className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-full blur-[100px] opacity-80" />
          
          <div className="relative w-full max-w-2xl h-[420px] rounded-[2.5rem] border border-slate-850 bg-slate-900/40 backdrop-blur-2xl flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden">
            {/* Ambient grid background overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
            
            {/* Concentric orbital rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-500/5 animate-spin-slow" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-purple-500/10 animate-spin-reverse" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-cyan-500/15" />
            <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-purple-500/20 animate-spin-slow" />
            
            {/* Orbiting particles */}
            <div className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 top-1/4 left-1/3 animate-ping" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 bottom-1/4 right-1/3" />
            <div className="absolute w-1 h-1 rounded-full bg-cyan-300 top-1/2 right-1/4" />
            
            {/* Premium 3D Emotion Sphere core */}
            <div className="relative w-48 h-48 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 group cursor-pointer">
              {/* Pulsing outer glowing glass layer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-transparent border border-cyan-400/30 shadow-2xl backdrop-blur-md animate-pulse" />
              
              {/* Inner glowing cores */}
              <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-cyan-400/40 to-purple-600/40 blur-md animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="absolute w-28 h-28 rounded-full bg-gradient-to-bl from-teal-400/60 to-purple-500/60 shadow-inner flex items-center justify-center border border-white/20">
                <Heart className="w-12 h-12 text-white animate-pulse" />
              </div>
              
              {/* Floating tech label */}
              <div className="absolute -bottom-2.5 px-3.5 py-1 rounded-full bg-slate-950/95 border border-cyan-500/40 text-[9px] font-mono text-cyan-300 tracking-wider shadow-lg">
                3D EMOTION SPHERE
              </div>
            </div>
            
            {/* Dial stats around orbit */}
            <div className="absolute bottom-8 left-8 text-left space-y-1">
              <div className="text-[10px] font-mono text-slate-500">EQUILIBRIUM</div>
              <div className="text-sm font-bold text-white tracking-tight">87.4%</div>
            </div>
            
            <div className="absolute bottom-8 right-8 text-right space-y-1">
              <div className="text-[10px] font-mono text-slate-500">DOMINANT STATE</div>
              <div className="text-sm font-bold text-cyan-300 tracking-tight">Focused Mind</div>
            </div>
            
            <div className="absolute top-8 left-8 text-left space-y-1">
              <div className="text-[10px] font-mono text-slate-500">ENERGY INDEX</div>
              <div className="text-sm font-bold text-purple-400 tracking-tight">High Resonance</div>
            </div>

            <div className="absolute top-8 right-8 text-right space-y-1">
              <div className="text-[10px] font-mono text-slate-500">VOCAL SENTIMENT</div>
              <div className="text-sm font-bold text-emerald-400 tracking-tight">Highly Positive</div>
            </div>
          </div>
        </div>

        {/* Asymmetrical High-Fidelity Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">CURRENT STATE</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-3xl font-black text-white tracking-tight">Focused</div>
              <div className="text-[10px] font-mono text-slate-500">LOGGED 2 HOURS AGO VIA VOICE</div>
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 relative overflow-hidden group hover:border-purple-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-purple-400">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">7-DAY MOMENTUM</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-3xl font-black text-cyan-400 tracking-tight">+12.4%</div>
              <div className="text-[10px] font-mono text-slate-500">OVERALL COGNITIVE HARMONY</div>
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 relative overflow-hidden group hover:border-pink-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl group-hover:bg-pink-500/10 transition-all" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-pink-400">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-400 tracking-wider">DOMINANT MOOD</span>
            </div>
            <div className="space-y-1.5">
              <div className="text-3xl font-black text-white tracking-tight">Calm</div>
              <div className="text-[10px] font-mono text-slate-500">32% OF TOTAL ARCHIVED SENTIMENT</div>
            </div>
          </div>
        </div>

        {/* 30-Day Timeline with Beautiful Visual Scaling */}
        <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Mood Timeline</h3>
              <p className="text-slate-400 text-xs font-light">Granular sentiment tracking across the past 30 days.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Happy', 'Calm', 'Focused', 'Excited', 'Stressed', 'Thoughtful'].map((mood, idx) => {
                const colors = [
                  'bg-amber-400',
                  'bg-cyan-400',
                  'bg-purple-400',
                  'bg-rose-400',
                  'bg-orange-400',
                  'bg-emerald-400',
                ];
                return (
                  <div key={idx} className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <span className={`w-2.5 h-2.5 rounded-full ${colors[idx]}`} />
                    <span>{mood}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 lg:grid-cols-15 gap-2.5 pt-2">
            {Array.from({ length: 30 }).map((_, i) => {
              const moods = ['Happy', 'Calm', 'Focused', 'Excited', 'Stressed', 'Thoughtful'];
              const gradientColors = [
                'from-amber-400 to-yellow-500',
                'from-cyan-400 to-blue-500',
                'from-purple-400 to-indigo-500',
                'from-rose-400 to-pink-500',
                'from-orange-400 to-amber-500',
                'from-emerald-400 to-teal-500',
              ];
              const heightClasses = ['h-16', 'h-20', 'h-24', 'h-28', 'h-32'];
              const randomIndex = (i * 3 + 2) % moods.length;
              const randomHeight = heightClasses[(i * 7) % heightClasses.length];
              return (
                <div key={i} className="flex flex-col items-center gap-2 group cursor-help">
                  <div className="w-full flex items-end h-32 bg-slate-950/60 rounded-xl border border-slate-900 overflow-hidden p-1">
                    <div
                      className={`w-full ${randomHeight} rounded-lg bg-gradient-to-t ${gradientColors[randomIndex]} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                      title={`${moods[randomIndex]} on Day ${i + 1}`}
                    />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-350 transition-colors">{i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Heatmap Section */}
        <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">Chronological Intensity</h3>
              <p className="text-slate-400 text-xs font-light">Biometric sentiment density mapping throughout each week segment.</p>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
              <span>LOW</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded bg-slate-950 border border-slate-900" />
                <div className="w-3 h-3 rounded bg-cyan-950/60" />
                <div className="w-3 h-3 rounded bg-cyan-900/60" />
                <div className="w-3 h-3 rounded bg-cyan-600/40" />
                <div className="w-3 h-3 rounded bg-cyan-400" />
              </div>
              <span>HIGH SENTIMENT</span>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 pt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
              <div key={i} className="space-y-3">
                <div className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-wider">{day}</div>
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => {
                    const intensity = ((i * 3 + j * 7) % 10) / 10;
                    let bgClass = 'bg-slate-950 border border-slate-900';
                    if (intensity > 0.8) bgClass = 'bg-gradient-to-br from-cyan-400 to-teal-500';
                    else if (intensity > 0.5) bgClass = 'bg-cyan-500/40 border border-cyan-500/20';
                    else if (intensity > 0.3) bgClass = 'bg-purple-500/30 border border-purple-500/20';
                    else if (intensity > 0.1) bgClass = 'bg-slate-900/80 border border-slate-850';
                    
                    return (
                      <div
                        key={j}
                        className={`h-12 rounded-xl transition-all duration-300 hover:scale-[1.03] cursor-pointer ${bgClass}`}
                        title={`Segment ${j + 1}: ${Math.floor(intensity * 100)}% Resonant`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cognitive Triggers logs */}
        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-950/20 via-purple-950/10 to-transparent border border-slate-850 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Cognitive Triggers</h3>
            <p className="text-slate-400 text-xs font-light">Root activities that influence your overall energetic resonance.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Positive Resonance Catalyst
              </h4>
              <div className="space-y-3">
                {positiveTriggering.map((trigger, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/50 border border-emerald-950/30 hover:border-emerald-500/20 transition-all duration-300 group">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="font-bold text-xs text-white group-hover:text-emerald-300 transition-colors">{trigger.activity}</div>
                        <div className="text-[10px] text-slate-400 font-light mt-1">{trigger.impact}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[8px] font-mono uppercase">
                        STABILIZER
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                Attentional Drain Watchlist
              </h4>
              <div className="space-y-3">
                {negativeTriggering.map((trigger, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-950/50 border border-rose-950/30 hover:border-rose-500/20 transition-all duration-300 group">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="font-bold text-xs text-white group-hover:text-rose-350 transition-colors">{trigger.activity}</div>
                        <div className="text-[10px] text-slate-400 font-light mt-1">{trigger.impact}</div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 text-[8px] font-mono uppercase">
                        VOLATILITY
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mood-based recommendations */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Prescribed Alignment Paths</h3>
            <p className="text-slate-400 text-xs font-light">Custom curated experiences to nourish your current focused state.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <MoodRecommendation
              icon={Book}
              title="The Power of Now"
              subtitle="Mindfulness"
              type="Book"
              color="from-cyan-500 to-blue-500"
            />
            <MoodRecommendation
              icon={Music}
              title="Calm & Peaceful"
              subtitle="28 tracks"
              type="Playlist"
              color="from-teal-400 to-emerald-500"
            />
            <MoodRecommendation
              icon={Film}
              title="Soul"
              subtitle="Animation"
              type="Movie"
              color="from-purple-500 to-pink-500"
            />
            <MoodRecommendation
              icon={Lightbulb}
              title="Meditation Basics"
              subtitle="12 lessons"
              type="Skill"
              color="from-amber-400 to-orange-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

function MoodRecommendation({ icon: Icon, title, subtitle, type, color }: any) {
  return (
    <div className="p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:border-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer relative overflow-hidden group flex flex-col justify-between h-48">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform" />
      
      <div className="space-y-4">
        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">{type}</div>
          <h4 className="font-bold text-sm text-white mt-1 group-hover:text-cyan-300 transition-colors">{title}</h4>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 font-light mt-2">{subtitle}</p>
    </div>
  );
}

const positiveTriggering = [
  { activity: 'Morning meditation', impact: 'Increases calm by 45%' },
  { activity: 'Evening journaling', impact: 'Improves clarity by 38%' },
  { activity: 'Reading before bed', impact: 'Enhances relaxation by 52%' },
];

const negativeTriggering = [
  { activity: 'Late night work', impact: 'Increases stress by 34%' },
  { activity: 'Skipping breakfast', impact: 'Reduces energy by 28%' },
  { activity: 'Social media browsing', impact: 'Decreases focus by 41%' },
];
