import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Brain, Heart, Target, Flame, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

type OrbitNode = {
  id: string;
  label: string;
  emoji: string;
  icon: React.ReactNode;
  color: string;
  glow: string;
  angle: number; // initial position in degrees
  radius: number; // distance from center in px
  path: string;
  stats: {
    title: string;
    value: string;
    details: string;
  };
};

export function LifeSolarSystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const reduce = useReducedMotion();

  // Scroll rotation effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const orbitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  const nodes: OrbitNode[] = [
    {
      id: 'mood',
      label: 'Mood Hub',
      emoji: '😊',
      icon: <Heart className="h-4 w-4 text-pink-400" />,
      color: 'from-pink-500 to-rose-400',
      glow: 'rgba(236,72,153,0.3)',
      angle: -40,
      radius: 125,
      path: '/app/mood',
      stats: { title: 'Mood Overview', value: 'Focused & Calm', details: 'Logged 2 hours ago' },
    },
    {
      id: 'goals',
      label: 'Goals',
      emoji: '🎯',
      icon: <Target className="h-4 w-4 text-violet-400" />,
      color: 'from-violet-500 to-purple-400',
      glow: 'rgba(139,92,246,0.3)',
      angle: 35,
      radius: 110,
      path: '/app/gamification',
      stats: { title: 'React Mastery', value: '68% Completed', details: 'On pace for June target' },
    },
    {
      id: 'habits',
      label: 'Habits',
      emoji: '🔥',
      icon: <Flame className="h-4 w-4 text-amber-400" />,
      color: 'from-amber-500 to-orange-400',
      glow: 'rgba(245,158,11,0.3)',
      angle: 120,
      radius: 135,
      path: '/app/gamification',
      stats: { title: 'Meditation', value: '7-Day Streak', details: 'Next session at 6:00 PM' },
    },
    {
      id: 'learning',
      label: 'Learning',
      emoji: '🎓',
      icon: <Brain className="h-4 w-4 text-cyan-400" />,
      color: 'from-cyan-500 to-blue-400',
      glow: 'rgba(6,182,212,0.3)',
      angle: -150,
      radius: 115,
      path: '/app/skills',
      stats: { title: 'Mindful Focus', value: '8 Lessons Completed', details: 'Next up: Emotional Agility' },
    },
    {
      id: 'journal',
      label: 'Journal',
      emoji: '📔',
      icon: <BookOpen className="h-4 w-4 text-emerald-400" />,
      color: 'from-emerald-500 to-teal-400',
      glow: 'rgba(16,185,129,0.3)',
      angle: -105,
      radius: 130,
      path: '/app/journal',
      stats: { title: 'Reflective Cadence', value: 'Consistency +15%', details: 'Peehu suggests a night entry' },
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/90 to-slate-950/90 shadow-xl backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Orbit Rings (SVG Background) */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        <circle cx="50%" cy="50%" r={90} fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth={1} />
        <circle cx="50%" cy="50%" r={115} fill="none" stroke="rgba(6,182,212,0.05)" strokeWidth={1.5} strokeDasharray="3, 3" />
        <circle cx="50%" cy="50%" r={130} fill="none" stroke="rgba(139,92,246,0.04)" strokeWidth={1} />
      </svg>

      {/* Core Center Node: Focus / Self */}
      <motion.div
        style={{ scale: orbitScale }}
        animate={{
          boxShadow: [
            '0 0 15px 1px rgba(99,102,241,0.15)',
            '0 0 30px 6px rgba(6,182,212,0.3)',
            '0 0 15px 1px rgba(99,102,241,0.15)',
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex h-20 w-20 cursor-pointer flex-col items-center justify-center rounded-full border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl"
      >
        <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-md" />
        <CheckCircle className="h-6 w-6 text-cyan-400 animate-[pulse_3s_infinite]" />
        <span className="mt-1 text-[8px] font-mono uppercase tracking-widest text-slate-400">MY LIFE</span>
      </motion.div>

      {/* Orbit Nodes */}
      <motion.div
        style={{ rotate: reduce ? 0 : orbitRotation }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {nodes.map((node) => {
          // Calculate polar coordinates for position
          const rad = (node.angle * Math.PI) / 180;
          const left = `calc(50% + ${Math.cos(rad) * node.radius}px)`;
          const top = `calc(50% + ${Math.sin(rad) * node.radius}px)`;

          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              style={{
                position: 'absolute',
                left,
                top,
                transform: 'translate(-50%, -50%)',
              }}
              className="z-20"
            >
              {/* Outer Glow Ring */}
              <motion.div
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                animate={
                  isHovered
                    ? { scale: 1.15, boxShadow: `0 0 20px 6px ${node.glow}` }
                    : { scale: [1, 1.04, 1] }
                }
                transition={{
                  scale: { type: 'spring', damping: 15, stiffness: 300 },
                  default: { duration: 3 + node.radius * 0.01, repeat: Infinity, ease: 'easeInOut' }
                }}
                className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-slate-800 bg-slate-900 shadow-md backdrop-blur-xl hover:border-slate-700`}
              >
                <div className="text-xl select-none">{node.emoji}</div>
              </motion.div>

              {/* Hover Stats Card */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 18, stiffness: 200 }}
                  style={{
                    position: 'absolute',
                    left: node.angle > -90 && node.angle < 90 ? '60px' : '-220px',
                    top: '-40px',
                  }}
                  className="w-48 rounded-xl border border-slate-800 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-md"
                >
                  <div className="mb-1.5 flex items-center gap-1.5 border-b border-slate-900 pb-1">
                    {node.icon}
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">{node.label}</span>
                  </div>
                  <p className="text-[11px] font-semibold text-slate-100">{node.stats.title}</p>
                  <p className="text-[12px] font-black text-cyan-400 mt-0.5">{node.stats.value}</p>
                  <p className="text-[9px] text-slate-500 font-light mt-1">{node.stats.details}</p>
                  
                  <Link
                    to={node.path}
                    className="mt-2 flex items-center justify-between rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 px-2 py-1 text-[9px] font-semibold text-indigo-300 transition-colors"
                  >
                    Manage Category
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
