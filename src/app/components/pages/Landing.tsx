import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const sections = [
  'Hero',
  'Why Peehu Sakhi',
  'Emotional Intelligence',
  'Memory Engine',
  'Growth Ecosystem',
  'Recommendation Engine',
  'Life Timeline',
  'Testimonials',
  'FAQ',
  'Final CTA',
];

export function Landing() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] px-4 pb-20 pt-8 text-[#F5F5F5]">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515] p-6 md:p-10">
          <div className="absolute inset-0 opacity-25">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#D4FF0020,transparent_40%),radial-gradient(circle_at_80%_70%,#D4FF0018,transparent_35%)]" />
          </div>
          <div className="relative z-10 flex flex-col gap-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4FF00]">Portal Entry</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Peehu Sakhi</h1>
            <p className="max-w-3xl text-lg text-[#A3A3A3] md:text-2xl">Your AI Companion for Life</p>
            <p className="max-w-3xl text-sm text-[#A3A3A3] md:text-base">
              Understand your emotions, build habits, achieve goals, learn continuously, and grow with an AI companion that remembers your journey.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/app" className="inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]">
                Start Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#life-map" className="rounded-full border border-[#D4FF0066] px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-[#D4FF00]">
                Learn More
              </a>
            </div>
          </div>
        </header>

        <section id="life-map" className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.article
              key={section}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.03 }}
              className="rounded-2xl border border-white/10 bg-[#151515] p-5"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#A3A3A3]">Layer {String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-2 text-lg font-medium">{section}</h2>
              <p className="mt-2 text-sm text-[#A3A3A3]">
                Structured as a connected neural module in the Peehu Sakhi universe.
              </p>
            </motion.article>
          ))}
        </section>
      </div>
    </div>
  );
}
