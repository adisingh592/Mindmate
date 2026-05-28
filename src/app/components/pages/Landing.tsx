import { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Brain,
  Calendar,
  ChevronRight,
  Compass,
  Database,
  Heart,
  HelpCircle,
  Layers,
  LineChart,
  Sparkles,
  Wand2,
  Zap,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { ThemeToggle } from '../ThemeToggle';
import { GlassCard, Section, SectionHeader } from '../landing/Section';
import { fadeUp, springTransition, staggerContainer, viewportOnce } from '@/lib/motion';

const FloatingPortal = lazy(() =>
  import('../three/FloatingPortal').then((m) => ({ default: m.FloatingPortal })),
);

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#ecosystem', label: 'Ecosystem' },
  { href: '#testimonials', label: 'Stories' },
  { href: '#faq', label: 'FAQ' },
];

const featureSections = [
  {
    id: 'emotional-intelligence',
    icon: Brain,
    title: 'Emotional Intelligence',
    description:
      'Understand mood patterns, emotional triggers, and inner shifts through gentle AI-guided reflection—not cold analytics.',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    iconColor: 'text-indigo-400',
  },
  {
    id: 'memory-system',
    icon: Database,
    title: 'Memory System',
    description:
      'A persistent sanctuary for your thoughts. Peehu remembers context across journaling, chat, and life events so growth feels continuous.',
    gradient: 'from-violet-500/20 to-purple-500/20',
    iconColor: 'text-violet-400',
  },
  {
    id: 'growth-ecosystem',
    icon: Layers,
    title: 'Growth Ecosystem',
    description:
      'Goals, habits, skills, and reflection woven into one living system—designed like an editorial magazine, not a spreadsheet.',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    id: 'recommendation-engine',
    icon: Wand2,
    title: 'Recommendation Engine',
    description:
      'Books, music, films, and learning paths curated from your mood, energy, and ambitions—always context-aware.',
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-400',
  },
  {
    id: 'life-timeline',
    icon: Calendar,
    title: 'Life Timeline',
    description:
      'See your evolution as a narrative arc. Milestones, moods, and breakthroughs mapped across a beautiful chronological canvas.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    iconColor: 'text-blue-400',
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Designer',
    quote:
      'Peehu Sakhi feels like Linear met Headspace. The portal alone convinced me this is next-generation wellness software.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Engineering Lead',
    quote:
      'Finally an AI companion that respects emotional nuance. The memory system makes every conversation feel continuous.',
  },
  {
    name: 'Priya Sharma',
    role: 'Wellness Coach',
    quote:
      'My clients love the Life Solar System on the dashboard—it turns abstract goals into something tangible and beautiful.',
  },
];

const faqItems = [
  {
    q: 'What makes Peehu Sakhi different from other AI apps?',
    a: 'Peehu is built as a life companion—not a chatbot. It combines emotional intelligence, memory, planning, and curated recommendations in one premium ecosystem.',
  },
  {
    q: 'Is my journal and mood data private?',
    a: 'Yes. Your reflections are treated as sacred. Peehu is designed with privacy-first architecture and transparent data controls.',
  },
  {
    q: 'Do I need technical skills to use it?',
    a: 'Not at all. The interface is editorial and intuitive—crafted for calm daily use on mobile and desktop.',
  },
  {
    q: 'How does the recommendation engine work?',
    a: 'It learns from your mood logs, goals, habits, and interests to suggest books, music, films, and skills that match your current season of life.',
  },
];

export function Landing() {
  const reduce = useReducedMotion();

  return (
    <div className="theme-landing min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[180px]" />
        <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <motion.nav
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springTransition, delay: 0.1 }}
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 px-2 md:top-6"
      >
        <div className="flex items-center justify-between rounded-[2rem] border border-slate-800/80 bg-slate-900/60 px-5 py-3 shadow-2xl shadow-slate-950/50 backdrop-blur-2xl md:px-8 md:py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#3B82F6] shadow-lg shadow-indigo-500/30">
              <Compass className="h-5 w-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-lg font-bold tracking-tight text-transparent">
              Peehu Sakhi
            </span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />
            <Link to="/app" className="hidden text-sm font-medium text-slate-400 hover:text-white sm:inline">
              Login
            </Link>
            <Link
              to="/app"
              className="rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-[1.02] active:scale-[0.98] md:px-6 md:py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative px-4 pb-20 pt-32 md:px-6 md:pb-28 md:pt-44">
        <motion.div
          className="relative z-10 mx-auto max-w-6xl text-center"
          initial={reduce ? false : 'hidden'}
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeUp}
            transition={springTransition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Your AI Companion for Life.
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={springTransition}
            className="mb-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
          >
            Grow with clarity.
            <br />
            <span className="bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent">
              Live with intention.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={springTransition}
            className="mx-auto mb-10 max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-xl"
          >
            Peehu Sakhi merges emotional intelligence, memory, and curated growth into one serene companion—crafted with premium startup quality.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={springTransition}
            className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/app"
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#6366F1] to-[#3B82F6] px-8 py-4 font-bold text-white shadow-xl shadow-indigo-500/25 transition-all hover:shadow-indigo-500/40"
            >
              Start Your Journey
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#about"
              className="rounded-2xl border border-slate-800 bg-slate-900/80 px-8 py-4 font-semibold text-slate-300 backdrop-blur-sm transition-colors hover:border-slate-700 hover:text-white"
            >
              Explore Features
            </a>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ ...springTransition, delay: 0.15 }} className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-3xl" />
            <Suspense
              fallback={
                <div className="flex h-[min(420px,60vh)] w-full items-center justify-center rounded-[2.5rem] border border-slate-800/80 bg-slate-900/80">
                  <div className="h-16 w-16 animate-pulse rounded-full bg-indigo-500/20" />
                </div>
              }
            >
              <FloatingPortal />
            </Suspense>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Peehu Sakhi */}
      <Section id="about" className="relative border-t border-slate-900 px-4 py-24 md:px-6 md:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="What is Peehu Sakhi?"
            subtitle="Not another productivity app—a personal growth ecosystem with emotional depth, persistent memory, and editorial design quality."
          />
          <motion.div
            variants={staggerContainer}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: Heart,
                title: 'Companion-first',
                text: 'Conversations that feel human—warm, contextual, and aligned with how you actually feel today.',
              },
              {
                icon: LineChart,
                title: 'Growth-aware',
                text: 'Track mood, goals, and habits as interconnected signals—not isolated metrics on a dashboard.',
              },
              {
                icon: Zap,
                title: 'Always evolving',
                text: 'Your Life Timeline and Memory System ensure Peehu grows alongside you, year after year.',
              },
            ].map((item) => (
              <GlassCard key={item.title}>
                <item.icon className={`mb-5 h-8 w-8 ${item.title === 'Companion-first' ? 'text-rose-400' : item.title === 'Growth-aware' ? 'text-cyan-400' : 'text-indigo-400'}`} />
                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm font-light leading-relaxed text-slate-400">{item.text}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Feature sections */}
      <Section id="ecosystem" className="relative border-t border-slate-900 bg-slate-950/80 px-4 py-24 md:px-6 md:py-36">
        <div className="mx-auto max-w-6xl space-y-20">
          <SectionHeader
            title="Built for the whole you"
            subtitle="Five interconnected pillars—each designed with glass depth, floating layouts, and calm premium whitespace."
          />
          <div className="space-y-8">
            {featureSections.map((feature, index) => (
              <motion.article
                key={feature.id}
                id={feature.id}
                initial={reduce ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={springTransition}
                whileHover={reduce ? undefined : { scale: 1.01 }}
                className={`flex flex-col gap-8 rounded-[2.5rem] border border-slate-800/60 bg-gradient-to-br ${feature.gradient} p-8 backdrop-blur-xl md:flex-row md:items-center md:p-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/60">
                  <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{feature.title}</h3>
                  <p className="max-w-2xl text-sm font-light leading-relaxed text-slate-300 md:text-base">
                    {feature.description}
                  </p>
                </div>
                <ChevronRight className="hidden h-6 w-6 text-slate-600 md:block" />
              </motion.article>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="relative border-t border-slate-900 px-4 py-24 md:px-6 md:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Stories from the journey"
            subtitle="Real voices from people who chose a companion over another checklist app."
          />
          <motion.div
            variants={staggerContainer}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <GlassCard key={t.name}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#06B6D4] text-sm font-bold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-sm font-light italic leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="relative border-t border-slate-900 px-4 py-24 md:px-6 md:py-36">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            title="Frequently asked questions"
            subtitle="Everything you need to know before beginning your journey with Peehu."
          />
          <motion.div variants={fadeUp} transition={springTransition}>
            <Accordion type="single" collapsible className="rounded-[2rem] border border-slate-800/80 bg-slate-900/40 px-6 backdrop-blur-xl">
              {faqItems.map((item, i) => (
                <AccordionItem key={item.q} value={`faq-${i}`} className="border-slate-800/60">
                  <AccordionTrigger className="text-left text-white hover:no-underline">
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle className="h-4 w-4 shrink-0 text-indigo-400" />
                      {item.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm font-light leading-relaxed text-slate-400">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative overflow-hidden border-t border-slate-900 px-4 py-28 md:px-6 md:py-40">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-cyan-500/10" />
        <motion.div variants={fadeUp} transition={springTransition} className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-black leading-tight text-white md:text-6xl">
            Ready to meet your
            <br />
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
              AI companion?
            </span>
          </h2>
          <p className="mb-10 text-lg font-light text-slate-400">
            Your AI Companion for Life. Start free—no credit card, no noise.
          </p>
          <Link
            to="/app"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#6366F1] via-[#3B82F6] to-[#06B6D4] px-10 py-5 text-base font-bold text-white shadow-2xl shadow-indigo-500/30 transition-transform hover:scale-[1.02]"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </Section>

      <footer className="border-t border-slate-900 px-4 py-12 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#3B82F6]">
              <Compass className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold text-white">Peehu Sakhi</span>
          </div>
          <p className="text-center text-xs font-light text-slate-500">
            © 2026 Peehu Sakhi · Your AI Companion for Life.
          </p>
        </div>
      </footer>
    </div>
  );
}
