import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Brain, Heart, Sparkles, Database, Target, Music, BookOpen } from 'lucide-react';

export function FloatingPortal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredCard(null);
  };

  // Scroll Parallax Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[min(540px,75vh)] w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-slate-800/80 bg-gradient-to-br from-slate-900/95 to-slate-950/95 shadow-2xl shadow-indigo-950/40"
    >
      {/* Dynamic Grid Background with mouse parallax */}
      <motion.div
        style={{ x: translateX, y: translateY }}
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5" />

      {/* Floating Decorative Rings */}
      <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full border border-indigo-500/5" />
      <div className="pointer-events-none absolute h-[440px] w-[440px] rounded-full border border-cyan-500/5 border-dashed animate-[spin_120s_linear_infinite]" />

      {/* Connection Lines (SVG) */}
      <svg className="absolute inset-0 h-full w-full pointer-events-none">
        {/* Animated paths from center to cards */}
        <AnimatedConnectionLine fromX="50%" fromY="50%" toX="20%" toY="22%" color="#6366F1" duration={3} />
        <AnimatedConnectionLine fromX="50%" fromY="50%" toX="80%" toY="25%" color="#EC4899" duration={3.5} />
        <AnimatedConnectionLine fromX="50%" fromY="50%" toX="18%" toY="78%" color="#06B6D4" duration={4} />
        <AnimatedConnectionLine fromX="50%" fromY="50%" toX="82%" toY="75%" color="#10B981" duration={2.8} />
      </svg>

      {/* Parallax Container */}
      <motion.div
        style={{ x: translateX, y: translateY, rotate: scrollRotate, scale: scrollScale }}
        className="relative flex h-full w-full items-center justify-center"
      >
        {/* ==================== CENTRAL GLOWING CORE ==================== */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 20px 2px rgba(99,102,241,0.2)',
              '0 0 40px 10px rgba(99,102,241,0.4)',
              '0 0 20px 2px rgba(99,102,241,0.2)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border border-indigo-500/40 bg-gradient-to-br from-[#6366F1] to-[#3B82F6] text-white shadow-xl hover:scale-105"
        >
          <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl animate-ping opacity-75" />
          <div className="flex flex-col items-center justify-center">
            <Sparkles className="h-8 w-8 text-white animate-[pulse_2s_infinite]" />
            <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-indigo-100">PEEHU</span>
          </div>
        </motion.div>

        {/* ==================== CARD 1: EMOTIONAL REFLECTION ==================== */}
        <PortalCard
          x="20%"
          y="22%"
          title="Emotional IQ"
          icon={<Heart className="h-4 w-4 text-pink-400" />}
          activeColor="border-pink-500/40"
          isHovered={hoveredCard === 'emotional'}
          onHover={() => setHoveredCard('emotional')}
          onLeave={() => setHoveredCard(null)}
        >
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400">Current Mood</span>
              <span className="text-[10px] font-medium text-pink-400">Peaceful</span>
            </div>
            {/* Visualizer Waves */}
            <div className="flex items-end justify-center gap-1 h-6">
              {[0.4, 0.9, 0.6, 0.3, 0.8, 0.5, 0.7, 0.4].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
                  transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-full bg-gradient-to-t from-pink-500 to-rose-400"
                />
              ))}
            </div>
          </div>
        </PortalCard>

        {/* ==================== CARD 2: MEMORY SANCTUARY ==================== */}
        <PortalCard
          x="80%"
          y="25%"
          title="Memory Vault"
          icon={<Database className="h-4 w-4 text-indigo-400" />}
          activeColor="border-indigo-500/40"
          isHovered={hoveredCard === 'memory'}
          onHover={() => setHoveredCard('memory')}
          onLeave={() => setHoveredCard(null)}
        >
          <div className="space-y-2">
            <div className="rounded-lg bg-slate-950/50 p-1.5 border border-slate-800/60">
              <p className="text-[9px] text-slate-300 font-light leading-tight">
                "Felt peaceful and creative while designing this."
              </p>
              <span className="text-[8px] text-indigo-400 font-mono">2h ago · Reflection</span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[8px] text-slate-500">Persistent memory active</span>
            </div>
          </div>
        </PortalCard>

        {/* ==================== CARD 3: GROWTH CANVAS ==================== */}
        <PortalCard
          x="18%"
          y="78%"
          title="Growth Canvas"
          icon={<Target className="h-4 w-4 text-cyan-400" />}
          activeColor="border-cyan-500/40"
          isHovered={hoveredCard === 'growth'}
          onHover={() => setHoveredCard('growth')}
          onLeave={() => setHoveredCard(null)}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Daily Goals</span>
              <span className="font-mono text-cyan-400">2/3 Done</span>
            </div>
            <div className="relative h-2 w-full rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "66%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
              />
            </div>
            <div className="flex justify-between text-[8px] text-slate-500">
              <span>Meditation</span>
              <span className="text-emerald-400">Streak: 7d</span>
            </div>
          </div>
        </PortalCard>

        {/* ==================== CARD 4: RECOMMENDATIONS ==================== */}
        <PortalCard
          x="82%"
          y="75%"
          title="AI Curations"
          icon={<Sparkles className="h-4 w-4 text-emerald-400" />}
          activeColor="border-emerald-500/40"
          isHovered={hoveredCard === 'curations'}
          onHover={() => setHoveredCard('curations')}
          onLeave={() => setHoveredCard(null)}
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Music className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-white truncate w-24">Deep Flow Beats</p>
                <p className="text-[8px] text-slate-400">Ambient Curation</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <BookOpen className="h-3.5 w-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-white truncate w-24">Atomic Habits</p>
                <p className="text-[8px] text-slate-400">Book Recommendation</p>
              </div>
            </div>
          </div>
        </PortalCard>
      </motion.div>
    </div>
  );
}

// ==================== COMPONENT: PORTAL CARD ====================
type PortalCardProps = {
  x: string;
  y: string;
  title: string;
  icon: React.ReactNode;
  activeColor: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  children: React.ReactNode;
};

function PortalCard({
  x,
  y,
  title,
  icon,
  activeColor,
  isHovered,
  onHover,
  onLeave,
  children,
}: PortalCardProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translate(-50%, -50%)',
      }}
      animate={
        isHovered
          ? { scale: 1.05, y: "-52%", zIndex: 30 }
          : { scale: 1, y: "-50%", zIndex: 10 }
      }
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      className={`w-[170px] cursor-pointer rounded-2xl border ${
        isHovered ? activeColor : 'border-slate-800/80'
      } bg-slate-900/80 p-3.5 shadow-lg backdrop-blur-xl transition-all hover:bg-slate-900/95`}
    >
      <div className="mb-2 flex items-center justify-between border-b border-slate-800/50 pb-1.5">
        <span className="text-[10px] font-bold tracking-tight text-white">{title}</span>
        {icon}
      </div>
      {children}
    </motion.div>
  );
}

// ==================== COMPONENT: ANIMATED SVG CONNECTION LINE ====================
type ConnectionLineProps = {
  fromX: string;
  fromY: string;
  toX: string;
  toY: string;
  color: string;
  duration: number;
};

function AnimatedConnectionLine({ fromX, fromY, toX, toY, color, duration }: ConnectionLineProps) {
  const lineRef = useRef<SVGLineElement>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setPathLength(lineRef.current.getTotalLength());
    }
  }, []);

  return (
    <>
      {/* Background static dashed line */}
      <line
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke={color}
        strokeOpacity={0.08}
        strokeWidth={1.5}
        strokeDasharray="4, 4"
      />
      {/* Animated glowing packet line */}
      <motion.line
        ref={lineRef}
        x1={fromX}
        y1={fromY}
        x2={toX}
        y2={toY}
        stroke={`url(#glowGrad-${color.replace('#', '')})`}
        strokeWidth={2}
        strokeOpacity={0.6}
        initial={{ strokeDasharray: "8, 120", strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: [-128, 0] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <defs>
        <linearGradient id={`glowGrad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity={0} />
          <stop offset="50%" stopColor={color} stopOpacity={1} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
    </>
  );
}
