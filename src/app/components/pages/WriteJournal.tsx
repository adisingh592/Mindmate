import { Sparkles, Save, Feather, HelpCircle, Compass } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function WriteJournal() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mood, setMood] = useState('');

  const moods = ['Happy', 'Calm', 'Thoughtful', 'Excited', 'Stressed', 'Sad'];
  const prompts = [
    'What made you smile today?',
    'What are you grateful for?',
    'What challenged you today?',
    'What did you learn?',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-purple-500/30 selection:text-white">
      {/* Decorative ambient spots */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Write Sanctuary Log</span>
              <Feather className="w-6 h-6 text-purple-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Let your creative expression flow onto an infinite digital canvas.</p>
          </div>
          <Link
            to="/app/journal"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            ← BACK TO SANCTUARY
          </Link>
        </div>

        {/* Distraction-Free Canvas Panel */}
        <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl p-8 space-y-8">
          
          {/* Main Title Input */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Type your log title..."
            className="w-full text-3xl font-extrabold bg-transparent border-b border-transparent focus:border-purple-500/30 outline-none pb-4 text-white placeholder-slate-600 transition-colors"
          />

          {/* Mood Selector - Beautiful Segmented Nodes */}
          <div className="space-y-3">
            <label className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">How are you feeling right now?</label>
            <div className="flex flex-wrap gap-2">
              {moods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    mood === m
                      ? 'bg-gradient-to-br from-[#A78BFA] to-[#C084FC] text-white shadow-lg shadow-purple-500/20'
                      : 'bg-slate-950 border border-slate-900 text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Text Area */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing your thoughts freely, without limit or distraction..."
            className="w-full min-h-[380px] bg-transparent outline-none resize-none text-sm font-light text-slate-200 placeholder-slate-600 leading-relaxed py-2"
          />

          {/* Canvas Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-900">
            <div className="text-xs font-mono text-slate-500">
              {content.split(/\s+/).filter(Boolean).length} WORDS WRITTEN
            </div>
            <button className="px-6 py-3.5 rounded-2xl bg-gradient-to-br from-[#A78BFA] to-[#C084FC] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Log
            </button>
          </div>
        </div>

        {/* Asymmetrical Prompt Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Reflection Prompts */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-purple-400 animate-spin-slow" />
              <h3 className="text-sm font-bold text-white tracking-tight">Daily Reflection Prompts</h3>
            </div>
            <div className="space-y-2.5">
              {prompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setContent(prompt + "\n\n" + content)}
                  className="w-full text-left p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-xs text-slate-400 hover:text-white transition-all leading-normal"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* AI Prompts */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
              <h3 className="text-sm font-bold text-white tracking-tight">Peehu AI Prompt Guidance</h3>
            </div>
            <div className="space-y-2.5">
              <button className="w-full text-left p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-xs text-slate-400 hover:text-white transition-all flex items-center justify-between">
                <span>Explore subconscious stress</span>
                <HelpCircle className="w-4 h-4 text-purple-400" />
              </button>
              <button className="w-full text-left p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-xs text-slate-400 hover:text-white transition-all flex items-center justify-between">
                <span>Suggest mindfulness writing path</span>
                <HelpCircle className="w-4 h-4 text-purple-400" />
              </button>
              <button className="w-full text-left p-4 rounded-xl bg-slate-950/60 border border-slate-900 hover:border-slate-800 text-xs text-slate-400 hover:text-white transition-all flex items-center justify-between">
                <span>Analyze this entry's emotional score</span>
                <HelpCircle className="w-4 h-4 text-purple-400" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
