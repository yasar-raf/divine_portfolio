import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x py-32 md:py-48">
      <div className="font-serif text-display">
        404<span className="text-sienna">.</span>
      </div>
      <p className="mt-6 text-lg text-muted max-w-prose">
        That page does not exist. Some artifacts live elsewhere — try the{' '}
        <Link href="/#work" className="text-sienna link-underline">
          work
        </Link>{' '}
        section, or head{' '}
        <Link href="/" className="text-sienna link-underline">
          home
        </Link>
        .
      </p>
    </section>
  );
}
