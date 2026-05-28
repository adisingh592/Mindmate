import { Film, Play, Heart, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router';

export function Movies() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-rose-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-rose-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Sanctuary Cinema</span>
              <Film className="w-6 h-6 text-rose-400 animate-pulse" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Immerse yourself in stories that inspire, teach, and catalog character growth loops.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-rose-455 uppercase self-start md:self-auto">
            CINEMA: COMPILING
          </span>
        </div>

        {/* Cinematic recommended catalog */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Inspirational Screenings</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedMovies.map((movie, i) => (
              <div key={i} className="group rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-rose-500/20 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                <div className="relative aspect-[2/3] bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20 flex items-center justify-center">
                  <Film className="w-12 h-12 text-rose-500/30" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300" />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-bold text-white text-sm tracking-tight group-hover:text-rose-300 transition-colors">{movie.title}</h4>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span className="uppercase">{movie.genre}</span>
                    <span>{movie.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mood-Based Categories */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <span>Emotional Genres</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moodMovies.map((category, i) => (
              <div key={i} className={`group p-8 rounded-[2.5rem] bg-gradient-to-br ${category.color} text-white cursor-pointer hover:shadow-2xl transition-all duration-300`}>
                <Film className="w-8 h-8 mb-6 text-white group-hover:rotate-6 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{category.mood}</h3>
                <p className="text-xs opacity-80 leading-relaxed font-light mb-4">{category.description}</p>
                <div className="text-[10px] font-mono opacity-60 uppercase">{category.count} MOVIES LOADED</div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column split details */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Watchlist & History (2 Columns) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-rose-400" />
                <h3 className="text-base font-bold text-white tracking-tight">Your Cinema Watchlist</h3>
              </div>
              <div className="space-y-3.5">
                {watchlist.map((movie, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900">
                    <div className="w-12 h-16 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-500/40 flex-shrink-0">
                      <Film className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-white tracking-tight">{movie.title}</h4>
                      <p className="text-[10px] font-mono text-slate-500 uppercase mt-0.5">{movie.genre}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-400" />
                <h3 className="text-base font-bold text-white tracking-tight">Recently Watched</h3>
              </div>
              <div className="space-y-3.5">
                {recentlyWatched.map((movie, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/60 border border-slate-900">
                    <div className="w-12 h-16 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-500/40 flex-shrink-0">
                      <Film className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <h4 className="font-bold text-xs text-white tracking-tight">{movie.title}</h4>
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 uppercase">
                        <span>{movie.genre}</span>
                        <span>{movie.watchedDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Future Cinema Portal Visual Focus Area (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[380px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Film className="w-5 h-5 text-rose-400" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Cinema Portal</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Your Theater portal</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Sleek visual portal representing your theatrical character-growth insight rate.</p>
              </div>

              {/* Graphic Portal Simulation */}
              <div className="relative w-full h-40 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 100" fill="none">
                  {/* Concentric rings */}
                  <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="28" stroke="#F43F5E" strokeWidth="1" className="opacity-30 animate-pulse" />
                  <polygon points="50,22 75,65 25,65" fill="none" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[9px] font-mono text-rose-455">PORTAL SHIELD ON</span>
                  <p className="text-[8px] text-slate-500 font-mono mt-0.5">3D Portal Orbit Area</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Movie Insights Card */}
        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-rose-950/40 via-orange-950/20 to-transparent border border-rose-900/30">
          <div className="flex items-start gap-6">
            <Sparkles className="w-6 h-6 text-rose-400 flex-shrink-0 animate-pulse" />
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">Philosophical Cinema Insights</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {movieInsights.map((insight, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-slate-950/60 border border-slate-900 text-xs font-light space-y-3">
                    <span className="font-bold text-rose-300 font-mono uppercase text-[10px]">{insight.movie}</span>
                    <p className="text-slate-350 leading-relaxed italic">"{insight.lesson}"</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {insight.themes.map((theme, j) => (
                        <span key={j} className="px-2 py-0.5 rounded bg-slate-900 text-[9px] font-mono text-slate-400">
                          {theme}
                        </span>
                      ))}
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

const recommendedMovies = [
  { title: 'The Pursuit of Happyness', genre: 'Drama', duration: '117 min' },
  { title: 'Good Will Hunting', genre: 'Drama', duration: '126 min' },
  { title: 'The Secret Life of Walter Mitty', genre: 'Adventure', duration: '114 min' },
  { title: 'Soul', genre: 'Animation', duration: '100 min' },
];

const moodMovies = [
  {
    mood: 'Inspiration',
    description: 'Stories of triumph and perseverance',
    count: 24,
    color: 'from-rose-500 to-orange-500',
  },
  {
    mood: 'Relaxation',
    description: 'Light-hearted and feel-good films',
    count: 18,
    color: 'from-red-500 to-rose-600',
  },
  {
    mood: 'Learning',
    description: 'Thought-provoking documentaries',
    count: 15,
    color: 'from-orange-500 to-yellow-600',
  },
];

const watchlist = [
  { title: 'The Social Dilemma', genre: 'Documentary' },
  { title: 'Inception', genre: 'Sci-Fi' },
  { title: 'Interstellar', genre: 'Sci-Fi' },
];

const recentlyWatched = [
  { title: 'The Pursuit of Happyness', genre: 'Drama', watchedDate: '2 days ago' },
  { title: 'Soul', genre: 'Animation', watchedDate: '5 days ago' },
];

const movieInsights = [
  {
    movie: 'The Pursuit of Happyness',
    lesson: 'Never give up on your dreams, no matter how difficult the circumstances',
    themes: ['Perseverance', 'Family', 'Hope'],
  },
  {
    movie: 'Soul',
    lesson: 'True purpose comes from the joy of living, not just achievement',
    themes: ['Purpose', 'Passion', 'Life'],
  },
];
