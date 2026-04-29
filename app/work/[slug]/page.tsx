import Link from 'next/link';
import { notFound } from 'next/navigation';
import { fullCaseStudies } from '@/lib/work-content';
import { caseStudies } from '@/lib/work';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return Object.keys(fullCaseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = fullCaseStudies[slug];
  if (!cs) return {};
  return {
    title: `${cs.title} — Antony Divine Raj`,
    description: cs.tagline,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = fullCaseStudies[slug];
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <article>
      <header className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="container-x">
          <Link
            href="/#work"
            className="text-xs uppercase tracking-[0.2em] text-muted hover:text-sienna transition-colors tabular"
          >
            ← All work
          </Link>
          <div className="mt-10 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted tabular mb-6">
                <span>{cs.role}</span>
                <span className="w-1 h-1 rounded-full bg-rule" />
                <span>{cs.org}</span>
                <span className="w-1 h-1 rounded-full bg-rule" />
                <span>{cs.period}</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl tracking-tight leading-[0.98]">
                {cs.title}
                <span className="text-sienna">.</span>
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-ink/80 max-w-prose leading-snug">
                {cs.tagline}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="rule-top py-12 md:py-16 bg-ink/[0.02]">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-y-8 gap-x-6">
            {cs.outcome_stat.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div className="font-serif text-stat tabular">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <nav className="text-xs uppercase tracking-[0.18em] text-muted tabular space-y-2">
              <div className="text-ink/40">On this page</div>
              {cs.sections.map((s) => (
                <a
                  key={s.heading}
                  href={`#${s.heading.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block hover:text-sienna transition-colors"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-9 space-y-14">
            {cs.sections.map((s) => (
              <section
                key={s.heading}
                id={s.heading.toLowerCase().replace(/\s+/g, '-')}
                className="rule-top pt-8"
              >
                <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight">
                  {s.heading}
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-ink/85 max-w-prose">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {s.list && (
                    <ul className="space-y-3 mt-6">
                      {s.list.map((item, i) => (
                        <li key={i} className="flex gap-4">
                          <span className="font-serif text-sienna text-xl shrink-0 leading-tight">
                            ·
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            {cs.artifacts.length > 0 && (
              <section className="rule-top pt-8">
                <h2 className="font-serif text-3xl md:text-4xl mb-6 tracking-tight">
                  Artifacts
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {cs.artifacts.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noopener"
                      className="group flex items-center justify-between border border-rule hover:border-ink p-4 transition-colors"
                    >
                      <span className="text-sm">{a.label}</span>
                      <span className="text-sienna group-hover:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <section className="rule-top">
        <Link
          href={`/work/${next.slug}`}
          className="group block py-16 md:py-24 hover:bg-ink hover:text-bg transition-colors"
        >
          <div className="container-x flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted group-hover:text-sienna-soft mb-3 tabular">
                Next case study
              </div>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight group-hover:text-bg">
                {next.title}
                <span className="text-sienna">.</span>
              </h2>
            </div>
            <span className="font-serif text-2xl group-hover:translate-x-2 transition-transform">
              →
            </span>
          </div>
        </Link>
      </section>
    </article>
  );
}
