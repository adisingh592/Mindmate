import { Book, Bookmark, Lightbulb, Quote, Library, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

export function Books() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-amber-500/30 selection:text-white">
      {/* Background warm blurs */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Sanctuary Library</span>
              <Library className="w-6 h-6 text-amber-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Nurture cognitive depth with curated books, academic insights, and personal lessons.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-amber-450 uppercase self-start md:self-auto">
            SHELVES: COMPILING
          </span>
        </div>

        {/* Daily Quote - Serif Serenity Box */}
        <div className="relative group p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800/80 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl" />
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500 block">Today's Wisdom</span>
              <blockquote className="text-lg md:text-xl font-light text-slate-100 italic leading-relaxed font-serif">
                "You are what you read. Feed your conscious mind with deliberate, high-quality inputs."
              </blockquote>
              <cite className="text-xs text-amber-450 font-mono block not-italic">— James Clear ── ATOMIC FOCUS</cite>
            </div>
          </div>
        </div>

        {/* Library Shell Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Main Shelf (3 Columns) */}
          <div className="lg:col-span-3 space-y-10">
            {/* Reading Now */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Reading Now</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {currentBooks.map((book, i) => (
                  <div key={i} className="group p-6 rounded-[2rem] bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-amber-500/20 transition-all duration-300">
                    <div className="flex gap-6">
                      <div className="w-20 h-28 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md flex-shrink-0 flex items-center justify-center font-bold text-white group-hover:scale-105 transition-transform duration-300">
                        {book.title[0]}
                      </div>
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-base font-bold text-white tracking-tight">{book.title}</h3>
                          <p className="text-xs text-slate-400 font-light mt-0.5">{book.author}</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-slate-500">Progress</span>
                            <span className="font-bold text-white">{book.progress}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-950 p-0.5 border border-slate-900 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
                              style={{ width: `${book.progress}%` }}
                            />
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-slate-500">
                          Page {book.currentPage} of {book.totalPages}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Shelf */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Curated Recommendations</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendedBooks.map((book, i) => (
                  <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-850 hover:bg-slate-900/60 hover:border-amber-500/10 transition-all duration-300 cursor-pointer">
                    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-amber-500/50" />
                    </div>
                    <h4 className="font-bold text-white text-sm tracking-tight mb-1 group-hover:text-amber-300 transition-colors">{book.title}</h4>
                    <p className="text-xs text-slate-400 font-light mb-3">{book.author}</p>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                      <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                      {book.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Lessons row */}
            <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
              <h3 className="text-base font-bold text-white tracking-tight flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-amber-450" />
                <span>Knowledge Sparks</span>
              </h3>
              <div className="space-y-4">
                {lessons.map((lesson, i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-900 text-xs leading-relaxed font-light">
                    <span className="font-bold text-amber-300 block mb-1 font-mono uppercase text-[10px]">From: {lesson.book}</span>
                    <p className="text-slate-350">{lesson.lesson}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Future Knowledge Pillars Visual Focus Area (1 Column) */}
          <div className="space-y-8">
            <div className="relative group p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 flex flex-col justify-between h-[520px] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent pointer-events-none" />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Library className="w-5 h-5 text-amber-400" />
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-400">Knowledge Pillars</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight">Your Reading Foundations</h3>
                <p className="text-xs text-slate-500 font-light mt-1">Isometric pillars representing completed reading metrics.</p>
              </div>

              {/* Graphic Columns Simulation */}
              <div className="relative w-full h-64 border border-dashed border-slate-850 rounded-2xl flex items-center justify-center p-4">
                <svg className="absolute inset-0 w-full h-full text-slate-800" viewBox="0 0 100 200" fill="none">
                  {/* Pillar 1 */}
                  <rect x="25" y="80" width="16" height="80" fill="none" stroke="currentColor" strokeWidth="1" />
                  <polygon points="25,80 33,70 49,70 41,80" fill="none" stroke="currentColor" strokeWidth="1" />
                  {/* Pillar 2 */}
                  <rect x="55" y="50" width="16" height="110" fill="none" stroke="#F59E0B" strokeWidth="1" className="opacity-40" />
                  <polygon points="55,50 63,40 79,40 71,50" fill="none" stroke="#F59E0B" strokeWidth="1" className="opacity-45" />
                  <circle cx="67" cy="40" r="3" fill="#FB923C" className="animate-pulse" />
                </svg>
                <div className="relative text-center z-10">
                  <span className="text-[10px] font-mono text-amber-400">PILLARS METRIC ONLINE</span>
                  <p className="text-[9px] text-slate-500 font-mono mt-0.5">3D Library Orbit Area</p>
                </div>
              </div>

              {/* Reading Stats */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-900 space-y-3 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between">
                  <span>Books Completed</span>
                  <span className="font-bold text-white">12 Books</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Pages Read</span>
                  <span className="font-bold text-white">3,847 Pages</span>
                </div>
                <div className="flex justify-between">
                  <span>Library streak</span>
                  <span className="font-bold text-amber-450">14 Days</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

const currentBooks = [
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    progress: 67,
    currentPage: 201,
    totalPages: 300,
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    progress: 34,
    currentPage: 153,
    totalPages: 450,
  },
];

const recommendedBooks = [
  { title: 'The Power of Now', author: 'Eckhart Tolle', category: 'Mindfulness' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History' },
  { title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction' },
  { title: 'Range', author: 'David Epstein', category: 'Learning' },
];

const lessons = [
  { book: 'Atomic Habits', lesson: 'Small habits compound over time to create remarkable results' },
  { book: 'Deep Work', lesson: 'Focused attention is becoming increasingly rare and valuable' },
  { book: 'Mindset', lesson: 'A growth mindset sees challenges as opportunities to learn' },
];
