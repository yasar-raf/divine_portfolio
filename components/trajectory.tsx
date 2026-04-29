'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2015 — 2019',
    title: 'Chemical engineering at Anna University',
    body: 'Trained as an engineer. Learned to think in flows, mass balances, and constraints. CGPA 8.26.',
  },
  {
    year: '2019 — 2020',
    title: 'Civil services preparation',
    body: 'A year at Shankar IAS Academy studying General Studies and Political Science. Public administration became a vocation, not a fallback.',
  },
  {
    year: '2022',
    title: 'Project Associate, CSIR–NEERI',
    body: 'Six months tracking antibiotic-resistant bacteria in urban sewage across four Indian cities. First time using data to argue for policy change.',
  },
  {
    year: '2022 — 2024',
    title: 'Education Fellow, Madhi Foundation × TN Govt',
    body: 'Embedded in Karur district under the District Collector. Five programs from dropouts to literacy to anaemia. Learned how policy actually lands.',
  },
  {
    year: '2025 — present',
    title: 'Product Manager, TN EMIS',
    body: 'Building the software backbone of the Tamil Nadu school system. Thirteen products, every government school, every teacher.',
  },
];

export function Trajectory() {
  return (
    <section id="trajectory" className="rule-top py-20 md:py-28 bg-ink/[0.015]">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3 tabular">
              Trajectory
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">
              Engineering, <br />
              <span className="italic">in service of</span> <br />
              public goods.
            </h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-rule"
            >
              <Image
                src="/photos/trajectory-rashtrapati.jpeg"
                alt="Antony Divine Raj at Rashtrapati Bhavan, Delhi"
                fill
                sizes="(max-width: 1024px) 80vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-bg text-xs uppercase tracking-[0.18em] tabular">
                Rashtrapati Bhavan · Delhi
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8 space-y-10 lg:pt-2">
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/85 max-w-prose">
              I came to product through a long detour — chemistry, then policy, then
              fellowship, then state capacity. The thread is{' '}
              <em className="text-sienna">systems thinking applied to public goods</em>:
              how do you build software that a government can actually run, that a
              teacher in a Karur classroom can actually use?
            </p>

            <div className="space-y-8 rule-top pt-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 gap-4 md:gap-6"
                >
                  <div className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.16em] text-muted tabular pt-1">
                    {m.year}
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-serif text-xl md:text-2xl mb-2">{m.title}</h3>
                    <p className="text-ink/70 leading-relaxed max-w-prose">{m.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
