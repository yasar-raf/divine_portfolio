'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stats = [
  { value: '5,00,000', label: 'teachers reached' },
  { value: '1,20,00,000', label: 'students impacted' },
  { value: '13', label: 'products shipped' },
  { value: '4', label: 'years' },
];

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.2em] text-muted mb-6 tabular"
            >
              Product Manager · Chennai, India
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-serif text-display"
            >
              Antony <br className="hidden sm:inline" />
              <span className="italic">Divine</span> Raj<span className="text-sienna">.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-prose text-lg md:text-xl text-ink/80 leading-relaxed"
            >
              I build software that runs the Tamil Nadu school system — and write about
              how policy meets product. Currently shipping at{' '}
              <span className="text-ink font-medium">TN EMIS</span>, where my work reaches
              every government school in the state.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="px-5 py-3 rounded-full bg-ink text-bg hover:bg-sienna transition-colors text-sm uppercase tracking-wider"
              >
                View work →
              </a>
              <a
                href="/divine-raj-resume.pdf"
                target="_blank"
                rel="noopener"
                className="px-5 py-3 rounded-full border border-ink/20 hover:border-ink hover:bg-ink/5 transition-colors text-sm uppercase tracking-wider"
              >
                Download resume
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-rule"
            >
              <Image
                src="/photos/hero-india-gate.jpeg"
                alt="Antony Divine Raj at India Gate, Delhi"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container-x mt-20 md:mt-28"
      >
        <div className="rule-top pt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <div className="font-serif text-stat text-ink tabular">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
