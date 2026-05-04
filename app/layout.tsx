import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Antony Divine Raj — Product Manager',
  description:
    'Product manager building public-good tech at scale. Currently shipping at TN EMIS, reaching 5 lakh teachers and 1.23 crore students.',
  metadataBase: new URL('https://divine-portfolio-pm.vercel.app'),
  openGraph: {
    title: 'Antony Divine Raj — Product Manager',
    description:
      'Product manager building public-good tech at scale. 5 lakh teachers · 1.23 crore students · 13 products shipped.',
    type: 'website',
    images: ['/photos/hero-india-gate.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antony Divine Raj — Product Manager',
    description: 'Public-good tech at scale.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
