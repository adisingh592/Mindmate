import { Music as MusicIcon, Heart, Play, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Music() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-pink-500/30 selection:text-white">
      {/* Background soft blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-pink-650/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Emotion Soundscapes</span>
              <MusicIcon className="w-6 h-6 text-pink-400 animate-pulse" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Harmonize your emotional cycles with flowing rhythms curated by conscious triggers.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-pink-400 uppercase self-start md:self-auto">
            SOUND: STREAMING
          </span>
        </div>

        {/* Music Insight Card */}
        <div className="relative group p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl" />
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 flex-shrink-0 animate-spin-slow">
              <MusicIcon className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 block">Acoustic Insights</span>
              <h2 className="text-xl font-bold text-white mb-1">Align with your cognitive frequencies.</h2>
              <p className="text-slate-400 font-light text-xs">Audio tracks matching your emotional state can boost focus by 34% and dissolve stress by 48%.</p>
            </div>
          </div>
        </div>

        {/* Music flow layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Playlists (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Mood-Based Playlists */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Mood-Based Playlists</span>
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {moodPlaylists.map((playlist, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-pink-500/20 hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <div className={`w-full aspect-square rounded-xl bg-gradient-to-br ${playlist.color} mb-4 flex items-center justify-center relative overflow-hidden`}>
                      <MusicIcon className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                        <Play className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-sm tracking-tight mb-1 group-hover:text-pink-300 transition-colors">{playlist.name}</h4>
                    <p className="text-xs text-slate-450 mb-2 font-mono uppercase tracking-widest">{playlist.mood}</p>
                    <div className="text-[10px] text-slate-500 font-mono">{playlist.tracks} TRACKS</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus & Relax split */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
                <h3 className="text-base font-bold text-white tracking-tight">Focus Channels</h3>
                <div className="space-y-3.5">
                  {focusPlaylists.map((playlist, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-pink-400">
                          <MusicIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs tracking-tight">{playlist.name}</div>
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5">{playlist.duration} ── LO-FI FLOW</div>
                        </div>
                      </div>
                      <Play className="w-4 h-4 text-pink-400" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
                <h3 className="text-base font-bold text-white tracking-tight">Relaxation Wave</h3>
                <div className="space-y-3.5">
                  {relaxPlaylists.map((playlist, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-emerald-400">
                          <MusicIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-bold text-white text-xs tracking-tight">{playlist.name}</div>
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5">{playlist.duration} ── WAVEFLOW</div>
                        </div>
                      </div>
                      <Play className="w-4 h-4 text-emerald-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Future Sound Ribbon Visual Focus Area (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MusicIcon className="w-5 h-5 text-pink-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Sound Ribbon</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Dynamic Audio Wave</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Flowing music waveforms responding directly to emotional index rate.</p>
              </div>

              {/* Graphic Wave Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Waveforms */}
                  <path d="M10 100 C30 60 40 140 60 80 T90 100" stroke="currentColor" strokeWidth="1" />
                  <path d="M10 100 C30 80 40 120 60 90 T90 100" stroke="#EC4899" strokeWidth="1.5" className="opacity-40 animate-pulse" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-pink-400">WAVE DYNAMICS ACTIVE</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Wave Ribbon Orbit Area</p>
                </div>
              </div>

              {/* Listening Stats */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between font-light">
                  <span>Listening time</span>
                  <span className="font-bold text-white">48 hours</span>
                </div>
                <div className="flex justify-between font-light">
                  <span>Playlists synced</span>
                  <span className="font-bold text-white">24 channels</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const moodPlaylists = [
  { name: 'Happy Vibes', mood: 'Joyful', tracks: 32, color: 'from-yellow-500 to-orange-500' },
  { name: 'Calm & Peaceful', mood: 'Relaxed', tracks: 28, color: 'from-blue-500 to-cyan-500' },
  { name: 'Deep Focus Flow', mood: 'Focused', tracks: 45, color: 'from-purple-500 to-pink-500' },
  { name: 'Energize waves', mood: 'Excited', tracks: 38, color: 'from-red-500 to-rose-500' },
];

const focusPlaylists = [
  { name: 'Deep Work Flow', duration: '3 hours' },
  { name: 'Coding Session', duration: '2.5 hours' },
  { name: 'Study Beats', duration: '4 hours' },
];

const relaxPlaylists = [
  { name: 'Evening Wind Down', duration: '1 hour' },
  { name: 'Meditation Sounds', duration: '45 min' },
  { name: 'Sleep Music', duration: '2 hours' },
];
