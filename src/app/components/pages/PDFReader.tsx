import { Highlighter, MessageSquare, Sparkles, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function PDFReader() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-slate-550/30 selection:text-white">
      {/* Ambient background spot */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-slate-700/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link
                to="/app/books"
                className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-350 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>BACK TO BOOKS</span>
              </Link>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Deep Workspace</span>
              <FileText className="w-5.5 h-5.5 text-slate-450" />
            </h1>
            <p className="text-slate-400 font-light text-xs mt-0.5">Read deeply. Isolate from distractions. Synthesize key notes.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-850 text-[10px] font-mono text-slate-450 uppercase">
            READER MODE: MAX ACTIVE
          </span>
        </div>

        {/* Reader Split Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main PDF View Panel (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 min-h-[580px] flex items-center justify-center relative overflow-hidden">
              {/* Star grid overlay simulating study page */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
              
              <div className="relative text-center max-w-md space-y-4 z-10">
                <div className="w-16 h-16 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 mx-auto">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight">PDF Viewer Canvas</h3>
                  <p className="text-xs text-slate-500 font-light">Deliberate study workspace displaying atomic habits module.</p>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-900/60 border border-slate-850 backdrop-blur-md">
              <button className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-900 text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-900 transition-all flex items-center gap-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>PREV</span>
              </button>
              <span className="text-xs font-mono font-bold text-slate-400">PAGE 42 OF 300</span>
              <button className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-900 text-xs font-mono text-slate-400 hover:text-white hover:bg-slate-900 transition-all flex items-center gap-1">
                <span>NEXT</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Panel Study Tools (1 Column) */}
          <div className="space-y-6">
            {/* Highlights Card */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <Highlighter className="w-4.5 h-4.5 text-amber-450" />
                <span>Highlights Registry</span>
              </h3>
              <div className="space-y-3.5">
                {highlights.map((highlight, i) => (
                  <div key={i} className="p-4 rounded-xl bg-amber-500/5 border-l-2 border-amber-450 text-xs leading-relaxed font-light text-slate-350">
                    <p className="mb-2 italic">"{highlight.text}"</p>
                    <span className="text-[10px] font-mono text-slate-500">PAGE {highlight.page}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes Card */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
                <MessageSquare className="w-4.5 h-4.5 text-blue-400" />
                <span>Personal Notes</span>
              </h3>
              <div className="space-y-3.5">
                {notes.map((note, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 text-xs leading-relaxed font-light text-slate-350">
                    <p className="mb-2">"{note.text}"</p>
                    <span className="text-[10px] font-mono text-slate-500">PAGE {note.page}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Summary */}
            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4.5 h-4.5 text-slate-400 animate-pulse" />
                <h3 className="text-xs font-bold text-white tracking-tight font-mono uppercase">AI Companion Summary</h3>
              </div>
              <p className="text-xs text-slate-350 leading-relaxed font-light font-sans">
                This segment introduces atomic actions, analyzing their compound rate over long intervals. Newport emphasizes visual isolation to unlock peak cognitive depth.
              </p>
            </div>

            {/* Action Button */}
            <button className="w-full py-4 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-850 border border-slate-800 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/30 hover:scale-[1.01] active:scale-[0.99] transition-all">
              Generate Flashcards
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

const highlights = [
  { text: 'Deep work is the ability to focus without distraction on a cognitively demanding task.', page: 42 },
  { text: 'The ability to perform deep work is becoming increasingly rare and valuable.', page: 45 },
];

const notes = [
  { text: 'Important concept - need to implement this in my daily routine', page: 42 },
  { text: 'Reminds me of Cal Newport\'s other work on digital minimalism', page: 43 },
];
