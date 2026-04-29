'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="rule-top py-20 md:py-28 bg-ink text-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/photos/contact-india-gate.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.2em] text-sienna-soft mb-4 tabular">
              Let's talk
            </div>
            <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
              Working on something <em>at the edge</em> of policy and product?
            </h2>
            <p className="mt-8 text-lg md:text-xl text-bg/75 max-w-prose leading-relaxed">
              I'm open to conversations with Indian product teams, foundations, and
              government partners. The bigger the system, the more interested I am.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <a
                href="mailto:divinerajifs@gmail.com"
                className="block border-t border-bg/30 pt-4 hover:border-sienna-soft transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-bg/55 mb-1 tabular">
                  Email
                </div>
                <div className="text-bg group-hover:text-sienna-soft tabular">
                  divinerajifs@gmail.com
                </div>
              </a>
              <a
                href="tel:+918667544962"
                className="block border-t border-bg/30 pt-4 hover:border-sienna-soft transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-bg/55 mb-1 tabular">
                  Phone
                </div>
                <div className="text-bg tabular">+91 86675 44962</div>
              </a>
              <a
                href="https://www.linkedin.com/in/antony-divine-raj"
                target="_blank"
                rel="noopener"
                className="block border-t border-bg/30 pt-4 hover:border-sienna-soft transition-colors"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-bg/55 mb-1 tabular">
                  LinkedIn
                </div>
                <div className="text-bg">in/antony-divine-raj</div>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:pl-10"
          >
            <div className="border-l border-bg/20 pl-6">
              <div className="text-xs uppercase tracking-[0.18em] text-bg/55 mb-3 tabular">
                Reference
              </div>
              <div className="font-serif text-xl mb-1">Mr. Mahesh</div>
              <div className="text-sm text-bg/70 mb-3">
                Chief Technical Officer
                <br />
                TN EMIS · School Education Department
              </div>
              <a
                href="mailto:cto@tnschools.gov.in"
                className="text-sm text-sienna-soft link-underline tabular"
              >
                cto@tnschools.gov.in
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
