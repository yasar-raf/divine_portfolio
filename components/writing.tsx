'use client';

import { motion } from 'framer-motion';

const artifacts = [
  {
    title: 'Kalvi Vanoli',
    kind: 'Podcast',
    desc: 'Tamil-language education podcast launched as part of the Karur fellowship.',
    href: '#',
  },
  {
    title: 'Karur District E-Magazine',
    kind: 'Editorial',
    desc: 'Showcased creative contributions from students and teachers across every block in Karur.',
    href: '#',
  },
  {
    title: 'District Dashboard',
    kind: 'Looker Studio',
    desc: 'Real-time district-level dashboard for monthly review meetings with Education Officers.',
    href: '#',
  },
  {
    title: 'Yennal Mudiyum Scheme',
    kind: 'Program report',
    desc: 'Foundational literacy and numeracy initiative for Grades 4 — 8 across Karur.',
    href: '#',
  },
  {
    title: 'District Profile',
    kind: 'Document',
    desc: 'Comprehensive student, teacher, and scheme data for educational planning and administration.',
    href: '#',
  },
  {
    title: 'Blog',
    kind: 'Writing',
    desc: 'Notes on policy, product management, and the public sector.',
    href: '#',
  },
];

export function Writing() {
  return (
    <section id="writing" className="rule-top py-20 md:py-28">
      <div className="container-x">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3 tabular">
            Writing & artifacts
          </div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            What I've made <span className="italic">on the side</span>.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {artifacts.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.href}
              target="_blank"
              rel="noopener"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group bg-bg p-8 hover:bg-ink hover:text-bg transition-colors flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-sienna group-hover:text-sienna-soft mb-3 tabular">
                  {a.kind}
                </div>
                <h3 className="font-serif text-2xl mb-3 leading-tight">{a.title}</h3>
                <p className="text-sm text-ink/65 group-hover:text-bg/65 leading-relaxed">
                  {a.desc}
                </p>
              </div>
              <div className="mt-6 text-xs uppercase tracking-wider opacity-60 group-hover:opacity-100">
                Open ↗
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
