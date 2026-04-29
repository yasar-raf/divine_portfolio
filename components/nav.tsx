import Link from 'next/link';

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bg/75 border-b border-rule/60">
      <div className="container-x flex items-center justify-between h-14">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Divine Raj<span className="text-sienna">.</span>
        </Link>
        <nav className="flex items-center gap-7 text-sm tabular">
          <a href="/#work" className="link-underline text-ink/70 hover:text-ink transition-colors">
            Work
          </a>
          <a href="/#trajectory" className="link-underline text-ink/70 hover:text-ink transition-colors">
            Trajectory
          </a>
          <a href="/#writing" className="link-underline text-ink/70 hover:text-ink transition-colors hidden sm:inline">
            Writing
          </a>
          <a
            href="/divine-raj-resume.pdf"
            target="_blank"
            rel="noopener"
            className="px-3 py-1.5 rounded-full bg-ink text-bg hover:bg-sienna transition-colors text-xs uppercase tracking-wider"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
