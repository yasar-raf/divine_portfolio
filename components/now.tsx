'use client';

import { motion } from 'framer-motion';

export function Now() {
  return (
    <section id="now" className="py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sienna animate-ping opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sienna" />
              </span>
              Now
            </div>
          </div>
          <div className="md:col-span-9">
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink/90">
              Shipping the <em>Vocational Education Module</em> at TN EMIS — connecting
              vocational students to MSME industries across Tamil Nadu. Pursuing M.A.
              Political Science alongside the day job. Reading on state capacity and
              education policy. Writing at the intersection of policy and product.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
