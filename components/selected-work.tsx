'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { caseStudies } from '@/lib/work';

export function SelectedWork() {
  return (
    <section id="work" className="rule-top py-20 md:py-28">
      <div className="container-x">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3 tabular">
              Selected work · 2022 — present
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
              Three projects, <span className="italic text-sienna">at scale</span>.
            </h2>
          </div>
          <div className="hidden md:block max-w-xs text-sm text-muted leading-relaxed">
            Thirteen products shipped across two years. These three carry the most weight
            — and the most users.
          </div>
        </div>

        <div className="space-y-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
            >
              <Link
                href={`/work/${cs.slug}`}
                className="group block border border-rule hover:border-ink transition-colors"
              >
                <div className="grid md:grid-cols-12 gap-0">
                  <div
                    className={`md:col-span-4 aspect-[16/10] md:aspect-auto bg-gradient-to-br ${cs.cover_color} flex items-end p-8 text-bg relative overflow-hidden`}
                  >
                    <div className="absolute top-6 right-6 font-serif text-3xl tabular opacity-60">
                      {cs.cover_label}
                    </div>
                    <div className="font-serif text-2xl md:text-3xl italic leading-tight">
                      {cs.one_liner}
                    </div>
                  </div>
                  <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted tabular mb-4">
                        <span>{cs.role}</span>
                        <span className="w-1 h-1 rounded-full bg-rule" />
                        <span>{cs.org}</span>
                        <span className="w-1 h-1 rounded-full bg-rule" />
                        <span>{cs.period}</span>
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 group-hover:text-sienna transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-ink/75 leading-relaxed max-w-prose">
                        {cs.outcome}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm uppercase tracking-wider text-ink/60 group-hover:text-sienna transition-colors">
                      Read case study
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
