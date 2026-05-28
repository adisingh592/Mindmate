import { Sun, Moon, Bell, Lock, User, Download, Sparkles, Sliders } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function Settings() {
  const [reminders, setReminders] = useState(true);
  const [aiSuggestions, setAiSuggestions] = useState(true);
  const [habitAlerts, setHabitAlerts] = useState(true);
  const [achievementAlerts, setAchievementAlerts] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 overflow-hidden relative selection:bg-slate-500/30 selection:text-white">
      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-900 pb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
              <span>Settings</span>
              <Sliders className="w-5.5 h-5.5 text-slate-400" />
            </h1>
            <p className="text-slate-400 font-light text-sm mt-1">Configure your personal companion preferences, notification channels, and privacy nodes.</p>
          </div>
          <span className="px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 uppercase self-start md:self-auto">
            SYSTEM: CONFIGURING
          </span>
        </div>

        {/* Clean, Functional, Minimalist Settings Stack */}
        <div className="space-y-8 max-w-3xl">
          
          {/* Theme Section */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <Sun className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">Interface Theme</h3>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg">
                Light
              </button>
              <button className="flex-1 py-3.5 rounded-xl bg-slate-900 border border-transparent text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
                Dark
              </button>
              <button className="flex-1 py-3.5 rounded-xl bg-slate-900 border border-transparent text-xs font-mono font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
                Auto
              </button>
            </div>
          </div>

          {/* Notifications Toggle Stack */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">Notification Channels</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4.5 rounded-xl bg-slate-950/60 border border-slate-900">
                <div>
                  <div className="font-bold text-xs text-white">Daily Reflections Reminders</div>
                  <div className="text-[10px] text-slate-500 font-light mt-0.5">Gentle checks for journal, meditation, and reflection intervals.</div>
                </div>
                <button
                  onClick={() => setReminders(!reminders)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${
                    reminders ? 'bg-slate-400' : 'bg-slate-850'
                  }`}
                >
                  <div className={`w-4 h-4 bg-slate-950 rounded-full transition-transform ${
                    reminders ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4.5 rounded-xl bg-slate-950/60 border border-slate-900">
                <div>
                  <div className="font-bold text-xs text-white">Proactive AI Suggestions</div>
                  <div className="text-[10px] text-slate-500 font-light mt-0.5">Allow AI Companion to trigger suggested planner intervals and books.</div>
                </div>
                <button
                  onClick={() => setAiSuggestions(!aiSuggestions)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${
                    aiSuggestions ? 'bg-slate-400' : 'bg-slate-850'
                  }`}
                >
                  <div className={`w-4 h-4 bg-slate-950 rounded-full transition-transform ${
                    aiSuggestions ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <div className="flex items-center justify-between p-4.5 rounded-xl bg-slate-950/60 border border-slate-900">
                <div>
                  <div className="font-bold text-xs text-white">Active Habit Streaks Alerts</div>
                  <div className="text-[10px] text-slate-500 font-light mt-0.5">Nudges when streaking modules approach deadlines.</div>
                </div>
                <button
                  onClick={() => setHabitAlerts(!habitAlerts)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${
                    habitAlerts ? 'bg-slate-400' : 'bg-slate-850'
                  }`}
                >
                  <div className={`w-4 h-4 bg-slate-950 rounded-full transition-transform ${
                    habitAlerts ? 'translate-x-6' : 'translate-x-1'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy Nodes */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">Security & Privacy</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4.5 rounded-xl bg-slate-950/60 border border-slate-900 flex justify-between items-center text-xs">
                <div>
                  <div className="font-bold text-white">Local End-to-End Encryption</div>
                  <p className="text-[10px] text-slate-550 font-light mt-0.5">Your reflections and files are protected inside local sandbox variables.</p>
                </div>
                <span className="text-emerald-400 font-mono font-bold">SECURE</span>
              </div>
            </div>
          </div>

          {/* AI Settings */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">AI Personality Configuration</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4.5 rounded-xl bg-slate-950/60 border border-slate-900 space-y-2">
                <label className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500">Active Coach Mode</label>
                <select className="w-full p-3.5 rounded-xl bg-slate-900 border border-slate-800 outline-none text-xs font-mono text-slate-300">
                  <option>Supportive Friend</option>
                  <option>Motivational Coach</option>
                  <option>Wise Mentor</option>
                  <option>Reflective Guide</option>
                </select>
              </div>
            </div>
          </div>

          {/* Account Utilities */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">Account Management</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/app/profile" className="p-4 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all text-center">
                UPDATE PROFILE DETAILS
              </Link>
              <button className="p-4 rounded-xl bg-slate-950 border border-slate-900 hover:border-slate-800 text-xs font-mono font-semibold text-slate-400 hover:text-white transition-all text-center">
                MANAGE BILLING SUBSCRIPTION
              </button>
            </div>
          </div>

          {/* Data Export */}
          <div className="p-8 rounded-[2rem] bg-slate-900/40 border border-slate-850 space-y-6">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-slate-400" />
              <h3 className="text-base font-bold text-white tracking-tight">Export Workspace Logs</h3>
            </div>
            <p className="text-xs text-slate-450 font-light leading-relaxed">
              Export and download all local storage entries, reflection cycles, streaking heatmaps, and learning roadmaps into a clean JSON structure.
            </p>
            <button className="px-6 py-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider transition-all">
              Export Sandbox data
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
