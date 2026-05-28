import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Book,
  Brain,
  ChevronRight,
  Film,
  Heart,
  Lightbulb,
  Music,
  Sparkles,
  Target,
  TrendingUp,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { fadeUp, springTransition, staggerContainer, viewportOnce } from '@/lib/motion';
import { Progress } from '../ui/progress';

const LifeSolarSystem = lazy(() =>
  import('../three/LifeSolarSystem').then((m) => ({ default: m.LifeSolarSystem })),
);

const exploreItems = [
  { label: 'Books', emoji: '📚', path: '/app/books', accent: 'hover:border-blue-500/40' },
  { label: 'Skills', emoji: '🎓', path: '/app/skills', accent: 'hover:border-purple-500/40' },
  { label: 'Music', emoji: '🎵', path: '/app/music', accent: 'hover:border-emerald-500/40' },
  { label: 'Movies', emoji: '🎬', path: '/app/movies', accent: 'hover:border-orange-500/40' },
  { label: 'Mood Hub', emoji: '😊', path: '/app/mood', accent: 'hover:border-pink-500/40' },
  { label: 'Journal', emoji: '📔', path: '/app/journal', accent: 'hover:border-violet-500/40' },
  { label: 'Growth', emoji: '🎮', path: '/app/gamification', accent: 'hover:border-indigo-500/40' },
];

const recommendations = [
  { icon: Book, title: 'Atomic Habits', subtitle: 'James Clear', type: 'Book', color: 'text-cyan-400' },
  { icon: Lightbulb, title: 'Mindful Focus', subtitle: '8 lessons', type: 'Skill', color: 'text-purple-400' },
  { icon: Music, title: 'Deep Flow', subtitle: '2h playlist', type: 'Music', color: 'text-emerald-400' },
  { icon: Film, title: 'Soulful Cinema', subtitle: 'Curated pick', type: 'Movie', color: 'text-orange-400' },
];

const habits = [
  { name: 'Morning meditation', progress: 85, streak: 7 },
  { name: 'Evening journal', progress: 72, streak: 5 },
  { name: 'Skill practice', progress: 45, streak: 3 },
];

function FloatingPanel({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ ...springTransition, delay }}
      whileHover={reduce ? undefined : { y: -4, transition: springTransition }}
      className={`rounded-[1.75rem] border border-slate-800/70 bg-slate-900/50 p-6 shadow-lg backdrop-blur-xl transition-colors hover:border-indigo-500/25 hover:bg-slate-900/70 md:p-7 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Dashboard() {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 p-4 text-slate-100 selection:bg-indigo-500/30 selection:text-white md:p-8">
      <div className="pointer-events-none absolute top-1/4 left-0 h-[500px] w-[500px] rounded-full bg-indigo-600/5 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[120px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl space-y-8"
        initial={reduce ? false : 'hidden'}
        animate="visible"
        variants={staggerContainer}
      >
        {/* Header */}
        <motion.div variants={fadeUp} transition={springTransition} className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400/80">Dashboard</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Good evening, friend</h1>
            <p className="mt-1 text-sm font-light text-slate-400">Your life at a glance — floating layers of clarity.</p>
          </div>
          <span className="w-fit rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2 text-xs font-mono text-indigo-300">
            Mon · May 25
          </span>
        </motion.div>

        {/* Life Solar System — center */}
        <motion.div variants={fadeUp} transition={springTransition}>
          <Suspense
            fallback={
              <div className="flex h-80 items-center justify-center rounded-[2.5rem] border border-slate-800/80 bg-slate-900/60">
                <div className="h-12 w-12 animate-pulse rounded-full bg-indigo-500/20" />
              </div>
            }
          >
            <LifeSolarSystem />
          </Suspense>
          <p className="mt-3 text-center text-[10px] font-mono uppercase tracking-widest text-slate-500">
            Hover orbit nodes · Mood · Goals · Habits · Learning · Journal
          </p>
        </motion.div>

        {/* AI Brief — full width */}
        <FloatingPanel delay={0.05} className="relative overflow-hidden border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-slate-900/60 to-cyan-950/30">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="flex flex-col gap-5 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10">
              <Sparkles className="h-7 w-7 text-indigo-400" />
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-white md:text-2xl">AI Brief</h2>
                <span className="rounded-lg bg-cyan-500/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-cyan-400">
                  Personalized
                </span>
              </div>
              <p className="text-sm font-light leading-relaxed text-slate-300">
                You&apos;re on a 7-day meditation streak. Focus peaks 6–8 PM—ideal for deep work. Journal consistency is up 15% this week. Peehu suggests a reflective entry before bed.
              </p>
              <div className="flex flex-wrap gap-2">
                {['3 planner tasks', '2 book picks', 'High focus state'].map((tag) => (
                  <span key={tag} className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-mono text-indigo-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FloatingPanel>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <StatCard icon={Brain} label="Life Score" value="87" hint="+5 this week" accent="indigo" />
          <StatCard icon={Heart} label="Mood Overview" value="Focused" hint="Logged 2h ago" accent="cyan" />
          <StatCard icon={Target} label="Goal Progress" value="68%" hint="On schedule" accent="violet" />
          <StatCard icon={TrendingUp} label="Habit Progress" value="7 days" hint="Meditation streak" accent="blue" />
        </motion.div>

        {/* Middle grid: weekly + habits + insights */}
        <div className="grid gap-6 lg:grid-cols-3">
          <FloatingPanel delay={0.1} className="lg:col-span-2">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-bold text-white">
                <Calendar className="h-5 w-5 text-indigo-400" />
                Weekly Summary
              </h3>
              <span className="text-xs text-slate-500">May 19 – 25</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-7">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                <div key={`${day}-${i}`} className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-500">{day}</span>
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-indigo-500/80 to-cyan-500/40"
                    style={{ height: `${48 + [20, 35, 28, 55, 40, 62, 45][i]}px` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs font-light text-slate-400">
              Most active day: Saturday · 28 completed micro-actions
            </p>
          </FloatingPanel>

          <FloatingPanel delay={0.15}>
            <h3 className="mb-5 text-lg font-bold text-white">Habit Progress</h3>
            <div className="space-y-5">
              {habits.map((h) => (
                <div key={h.name}>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="text-slate-300">{h.name}</span>
                    <span className="font-mono text-cyan-400">{h.streak}d streak</span>
                  </div>
                  <Progress value={h.progress} className="h-2 bg-slate-800" />
                </div>
              ))}
            </div>
          </FloatingPanel>
        </div>

        {/* AI Insights + Recommendations */}
        <div className="grid gap-6 lg:grid-cols-2">
          <FloatingPanel delay={0.12}>
            <h3 className="mb-5 text-lg font-bold text-white">AI Insights</h3>
            <div className="space-y-4">
              <InsightBlock
                emoji="💡"
                text="Focus peaks after short meditation. Stack a 10-min session before deep work tonight."
              />
              <InsightBlock
                emoji="📊"
                text="Journal consistency up 15%. Your reflective cadence is becoming a strength."
              />
              <InsightBlock
                emoji="🎯"
                text="Goal 'React mastery' is 68% complete—on pace for your June target."
              />
            </div>
          </FloatingPanel>

          <FloatingPanel delay={0.14}>
            <h3 className="mb-5 text-lg font-bold text-white">Recommendations</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {recommendations.map((rec) => (
                <motion.div
                  key={rec.title}
                  whileHover={reduce ? undefined : { scale: 1.02 }}
                  className="cursor-pointer rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 transition-colors hover:border-indigo-500/30"
                >
                  <rec.icon className={`mb-3 h-5 w-5 ${rec.color}`} />
                  <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500">{rec.type}</p>
                  <p className="text-sm font-bold text-white">{rec.title}</p>
                  <p className="text-xs text-slate-400">{rec.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </FloatingPanel>
        </div>

        {/* Mood overview card */}
        <FloatingPanel delay={0.08}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="mb-2 text-lg font-bold text-white">Mood Overview</h3>
              <p className="text-sm font-light text-slate-400">7-day emotional landscape — calm with focused peaks.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Calm', 'Focused', 'Energized', 'Reflective', 'Focused', 'Calm', 'Grateful'].map((mood, i) => (
                <span
                  key={`${mood}-${i}`}
                  className={`rounded-xl border px-3 py-2 text-xs font-medium ${
                    i === 6
                      ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300'
                      : 'border-slate-800 bg-slate-950/80 text-slate-400'
                  }`}
                >
                  {mood}
                </span>
              ))}
            </div>
          </div>
        </FloatingPanel>

        {/* Explore */}
        <FloatingPanel delay={0.16}>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-white">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            Explore
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {exploreItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex h-28 flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 transition-all hover:-translate-y-1 hover:bg-slate-900/80 hover:shadow-lg hover:shadow-indigo-500/5 ${item.accent}`}
              >
                <span className="text-2xl transition-transform group-hover:scale-110">{item.emoji}</span>
                <div>
                  <span className="flex items-center gap-0.5 text-sm font-bold text-white">
                    {item.label}
                    <ChevronRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:opacity-100" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </FloatingPanel>

        {/* Today's focus */}
        <FloatingPanel delay={0.18}>
          <h3 className="mb-5 text-lg font-bold text-white">Today&apos;s Focus</h3>
          <div className="space-y-3">
            {[
              { title: 'Complete React Module 4', time: '2:00 PM', done: false },
              { title: 'Meditation session', time: '6:00 PM', done: true },
              { title: 'Evening journal', time: '9:00 PM', done: false },
            ].map((task) => (
              <div
                key={task.title}
                className="flex items-center justify-between rounded-2xl border border-slate-900 bg-slate-950/60 p-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`h-5 w-5 ${task.done ? 'text-emerald-400' : 'text-slate-600'}`}
                  />
                  <div>
                    <p className={`text-sm font-semibold ${task.done ? 'text-slate-500 line-through' : 'text-white'}`}>
                      {task.title}
                    </p>
                    <p className="text-xs text-slate-500">{task.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FloatingPanel>
      </motion.div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent,
}: {
  icon: typeof Brain;
  label: string;
  value: string;
  hint: string;
  accent: 'indigo' | 'cyan' | 'violet' | 'blue';
}) {
  const reduce = useReducedMotion();
  const accentMap = {
    indigo: { icon: 'text-indigo-400', border: 'hover:border-indigo-500/40' },
    cyan: { icon: 'text-cyan-400', border: 'hover:border-cyan-500/40' },
    violet: { icon: 'text-violet-400', border: 'hover:border-violet-500/40' },
    blue: { icon: 'text-blue-400', border: 'hover:border-blue-500/40' },
  };
  const { icon: iconClass, border } = accentMap[accent];

  return (
    <motion.div
      variants={fadeUp}
      transition={springTransition}
      whileHover={reduce ? undefined : { y: -4, transition: springTransition }}
      className={`rounded-[1.75rem] border border-slate-800/70 bg-slate-900/50 p-6 shadow-lg backdrop-blur-xl transition-colors hover:bg-slate-900/70 ${border}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-slate-500">
          {label}
        </span>
        <Icon className={`h-5 w-5 ${iconClass}`} />
      </div>
      <div className="text-3xl font-black tracking-tight text-white md:text-4xl">{value}</div>
      <p className="mt-1 text-[10px] font-medium text-emerald-400/90">{hint}</p>
    </motion.div>
  );
}

function InsightBlock({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="rounded-2xl border border-indigo-500/15 bg-indigo-500/5 p-4 text-xs font-light leading-relaxed text-slate-300">
      <span className="mr-2">{emoji}</span>
      {text}
    </div>
  );
}
