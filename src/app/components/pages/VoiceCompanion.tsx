import { Mic, Volume2, FileAudio, Heart, Sparkles, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export function VoiceCompanion() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-cyan-500/30 selection:text-white">
      {/* Background futuristic orbits and glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            to="/app"
            className="flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-slate-350 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>BACK TO DASHBOARD</span>
          </Link>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
            VOICE LINK: CONNECTED
          </span>
        </div>

        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">Speak Freely. I am Listening.</h1>
          <p className="text-slate-400 font-light text-sm max-w-md mx-auto">
            Experience real-time speech guidance inside a secure digital sanctuary.
          </p>
        </div>

        {/* Visual Focus Area: 3D Audio Aura Voice Orb */}
        <div className="relative group flex justify-center py-10">
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 rounded-full blur-[100px] opacity-80" />
          
          <div className="relative w-80 h-80 rounded-full border border-slate-850 bg-slate-900/60 backdrop-blur-2xl flex items-center justify-center p-8 shadow-2xl">
            {/* Concentric glowing rings */}
            <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-dashed border-purple-500/15 animate-spin-reverse" />
            
            <button className="relative w-44 h-44 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl shadow-cyan-500/20 group">
              <Mic className="w-16 h-16 text-white group-hover:scale-105 transition-transform" />
              {/* Outer ping */}
              <div className="absolute -inset-4 rounded-full border border-cyan-400/20 animate-ping pointer-events-none" />
            </button>
          </div>
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-slate-450 font-mono">TAP TO START COMPANION SPEECH</p>
          <div className="flex justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-cyan-300">
              AUDIO CHANNEL ACTIVE
            </span>
          </div>
        </div>

        {/* Feature Split Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Features */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight">Voice Channels</h3>
            <div className="space-y-4">
              {voiceFeatures.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4.5 rounded-xl bg-slate-950/60 border border-slate-900">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white">{feature.title}</h4>
                    <p className="text-[10px] text-slate-450 font-light mt-0.5 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <h3 className="text-base font-bold text-white tracking-tight">Preserved Voice Notes</h3>
            <div className="space-y-3.5">
              {voiceNotes.map((note, i) => (
                <div key={i} className="p-4.5 rounded-xl bg-slate-950/60 border border-slate-900 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{note.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{note.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 transition-colors">
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <div className="flex-1 h-1.5 rounded-full bg-slate-900 p-0.5 border border-slate-850 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Emotion Detection Insights */}
        <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-950/40 via-purple-950/20 to-transparent border border-cyan-900/30">
          <div className="flex items-start gap-6">
            <Sparkles className="w-6 h-6 text-cyan-400 flex-shrink-0 animate-pulse" />
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">Acoustic Emotion Detection</h3>
              <p className="text-xs text-slate-450 font-light leading-relaxed">
                Peehu AI analyzes speech frequencies, measuring cognitive stability indexes to guide emotional charts inside the Mood Hub.
              </p>
              <div className="flex flex-wrap gap-2">
                {emotions.map((emotion, i) => (
                  <span key={i} className="px-3 py-1 rounded bg-slate-950 border border-slate-900 text-[10px] font-mono text-slate-450 hover:text-cyan-455 transition-colors">
                    {emotion}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const voiceFeatures = [
  {
    icon: Mic,
    title: 'Voice Companion',
    description: 'Have natural, real-time conversations with Peehu Sakhi.',
  },
  {
    icon: FileAudio,
    title: 'Acoustic Journaling',
    description: 'Record your logs using fluid voice notes.',
  },
  {
    icon: Heart,
    title: 'Guided Speech Reflection',
    description: 'Complete daily reflection loops hands-free.',
  },
];

const voiceNotes = [
  { title: 'Morning Reflection Log', duration: '3:42', date: 'Today, 8:30 AM' },
  { title: 'Expedition Thoughts', duration: '5:18', date: 'Yesterday, 2:45 PM' },
  { title: 'Evening Gratitude Journal', duration: '2:21', date: '2 days ago' },
];

const emotions = ['Joy', 'Calm', 'Excitement', 'Thoughtful', 'Stress', 'Sadness', 'Confidence'];
