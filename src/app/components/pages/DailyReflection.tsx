import { CheckCircle2, Sparkles, Moon, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export function DailyReflection() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-cyan-500/30 selection:text-white">
      {/* Decorative starry particles and lunar glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-650/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/app/journal"
            className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>BACK TO JOURNAL</span>
          </Link>
          <span className="px-3.5 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-cyan-400">
            REFLECTION CYCLE: OPEN
          </span>
        </div>

        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Pause. Reflect. Grow.</h1>
          <p className="text-slate-450 font-light text-sm max-w-lg mx-auto">
            A silent mindfulness breathing space. Explore today's lessons beneath the reflection moon.
          </p>
        </div>

        {/* Visual Focus Area: Future Reflection Moon Placeholder */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-[2.5rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
          
          <div className="h-56 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 backdrop-blur-xl flex items-center justify-center p-8 relative overflow-hidden">
            {/* Embedded lunar circles */}
            <div className="absolute w-[180px] h-[180px] rounded-full border border-slate-800/60" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-cyan-500/10 animate-spin-slow" />

            <div className="relative text-center z-10 space-y-3">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center relative shadow-lg animate-pulse">
                <Moon className="w-7 h-7 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">3D Reflection Moon</h3>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono mt-0.5">Atmospheric Moon Phase Orbit Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Guided Flow Questions */}
        <div className="space-y-6">
          {reflectionQuestions.map((question, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-cyan-500/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-850 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">{question.title}</h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">{question.prompt}</p>
                  </div>
                  <textarea
                    placeholder="Write your thoughts here..."
                    className="w-full p-4 rounded-2xl bg-slate-950/60 border border-slate-900 text-sm font-light text-slate-200 placeholder-slate-600 outline-none resize-none min-h-[100px] focus:border-cyan-500/40 transition-colors"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Reflection Insights Card */}
        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-950/40 via-purple-950/20 to-transparent border border-cyan-900/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h4 className="font-bold text-cyan-300 text-xs uppercase tracking-wider font-mono">Peehu Sakhi AI Guidance</h4>
          </div>
          <p className="text-xs text-slate-350 leading-relaxed font-light italic">
            "We compile your guided reflection notes into emotional metrics inside the Mood Hub, mapping long-term cognitive peace levels."
          </p>
        </div>

        {/* Action Button */}
        <button className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all">
          Complete Reflection
        </button>

      </div>
    </div>
  );
}

const reflectionQuestions = [
  { title: 'Mood Check-In', prompt: 'How are you feeling right now?' },
  { title: 'Wins', prompt: 'What went well today? What are you proud of?' },
  { title: 'Challenges', prompt: 'What challenges did you face? How did you handle them?' },
  { title: 'Gratitude', prompt: 'What are you grateful for today?' },
  { title: 'Lessons', prompt: 'What did you learn today?' },
  { title: 'Tomorrow Intentions', prompt: 'What do you want to focus on tomorrow?' },
];
