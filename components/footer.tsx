export function Footer() {
  return (
    <footer className="rule-top mt-32">
      <div className="container-x py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted tabular">
        <div>© {new Date().getFullYear()} Antony Divine Raj L</div>
        <div className="flex gap-6">
          <a
            href="mailto:divinerajifs@gmail.com"
            className="link-underline hover:text-ink transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/divine-raj-372745249/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="/divine-raj-resume.pdf"
            target="_blank"
            rel="noopener"
            className="link-underline hover:text-ink transition-colors"
          >
            Resume PDF
          </a>
        </div>
      </div>
    </footer>
  );
}
