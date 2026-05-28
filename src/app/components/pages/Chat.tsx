import { Send, Sparkles, Clock, ToggleLeft, ToggleRight, Sparkle, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export function Chat() {
  const [message, setMessage] = useState('');
  const [activeMode, setActiveMode] = useState('Friend');
  const [memoryToggle, setMemoryToggle] = useState(true);

  const modes = ['Friend', 'Coach', 'Mentor', 'Reflective Guide'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 relative overflow-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Background Memory Constellation - Absolute Visual Focus Area */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Constellation lines and dots */}
        <div className="absolute top-20 left-12 w-2 h-2 bg-indigo-400/40 rounded-full blur-[1px]" />
        <div className="absolute top-48 left-40 w-3 h-3 bg-purple-400/30 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-36 left-80 w-1.5 h-1.5 bg-indigo-300/40 rounded-full" />
        <svg className="absolute top-0 left-0 w-full h-[60%] opacity-20 text-slate-800" xmlns="http://www.w3.org/2000/svg">
          <line x1="48" y1="80" x2="160" y2="192" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="160" y1="192" x2="320" y2="144" stroke="currentColor" strokeWidth="1" />
          <line x1="320" y1="144" x2="480" y2="280" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="160" cy="192" r="3" fill="#818CF8" />
          <circle cx="320" cy="144" r="2" fill="#8B5CF6" />
          <circle cx="480" cy="280" r="4" fill="#A78BFA" className="animate-pulse" />
        </svg>

        <div className="absolute top-10 right-20 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/5 to-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <span>Sanctuary Chat</span>
              <MessageSquare className="w-6 h-6 text-indigo-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">A space where your thoughts are truly understood.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-purple-400">
              SECURE SYNCED
            </span>
          </div>
        </div>

        {/* AI Modes - Sleek Segmented Selection */}
        <div className="flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md max-w-xl">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-3 font-mono">Modes:</span>
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-tight transition-all duration-300 ${
                activeMode === mode
                  ? 'bg-gradient-to-r from-[#818CF8] to-[#8B5CF6] text-white shadow-lg shadow-indigo-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-850'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Chat Container - Premium Glassmorphism */}
        <div className="rounded-[2.5rem] bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 shadow-2xl backdrop-blur-xl overflow-hidden relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          
          {/* Chat Messages */}
          <div className="h-[480px] overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[75%] p-5 rounded-[1.8rem] shadow-xl ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-tr from-[#818CF8] to-[#8B5CF6] text-white rounded-tr-sm'
                      : 'bg-slate-900/90 border border-slate-800/80 text-slate-100 rounded-tl-sm'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Peehu Sakhi</span>
                    </div>
                  )}
                  <p className="text-sm font-light leading-relaxed">{msg.content}</p>
                  <div className="mt-3 text-[10px] opacity-60 text-right font-mono">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Suggested Prompts */}
          <div className="px-8 py-5 border-t border-slate-900 bg-slate-950/50">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono mb-3">Suggested Path Prompts</div>
            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => setMessage(prompt)}
                  className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-850 hover:border-slate-700 hover:bg-slate-900 text-xs font-medium text-slate-300 hover:text-white transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-slate-900 bg-slate-950/90">
            <div className="flex items-center gap-4">
              <div className="flex-1 px-5 py-4 rounded-2xl bg-slate-900/50 border border-slate-800/80 focus-within:border-indigo-500/50 focus-within:bg-slate-900/90 transition-all duration-300">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share whatever is on your mind, I am here..."
                  className="w-full bg-transparent resize-none outline-none text-sm font-light text-slate-100 placeholder-slate-500 focus:ring-0 focus:border-0 h-10 py-1"
                />
              </div>
              <button 
                onClick={() => {
                  if(!message.trim()) return;
                  setMessage('');
                }}
                className="p-4 rounded-2xl bg-gradient-to-br from-[#818CF8] to-[#8B5CF6] text-white hover:shadow-lg hover:shadow-indigo-500/25 active:scale-95 transition-all duration-300 flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Info - Transformed into Asymmetrical Grid Row */}
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Memory View</span>
              <button onClick={() => setMemoryToggle(!memoryToggle)} className="text-indigo-400">
                {memoryToggle ? <ToggleRight className="w-8 h-8" /> : <ToggleLeft className="w-8 h-8" />}
              </button>
            </div>
            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Show memory nodes mapped from previous journaling loops.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col justify-between h-40">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Recent Topics</span>
              <Clock className="w-4 h-4 text-purple-400" />
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-1 rounded bg-slate-950 text-[10px] text-slate-400 font-mono">Career prioritization</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-[10px] text-slate-400 font-mono">Breathing cycles</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-[10px] text-slate-400 font-mono">Habits alignment</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-transparent border border-indigo-900/30 flex flex-col justify-between h-40">
            <div className="flex items-center gap-2">
              <Sparkle className="w-4 h-4 text-indigo-400 animate-spin-slow" />
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest font-mono">Capabilities</span>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[10px] font-mono text-slate-300">
              <div>✦ Goal support</div>
              <div>✦ Calm presence</div>
              <div>✦ Cognitive logs</div>
              <div>✦ Growth engine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const messages = [
  {
    sender: 'ai',
    content: "Hi! How are you feeling today? I noticed you haven't journaled in a couple of days. Would you like to talk about what's been going on?",
    time: '10:30 AM',
  },
  {
    sender: 'user',
    content: "Hey! I've been feeling a bit overwhelmed with work. Lots of deadlines coming up and I'm not sure how to prioritize.",
    time: '10:32 AM',
  },
  {
    sender: 'ai',
    content: "I understand that feeling. Let's break this down together. Can you tell me about your top 3 most urgent deadlines? We can work on creating a realistic plan that won't leave you burned out.",
    time: '10:33 AM',
  },
];

const suggestedPrompts = [
  'Help me reflect on my week',
  'Suggest a book for my mood',
  'Create a study plan',
  'Morning motivation',
];
