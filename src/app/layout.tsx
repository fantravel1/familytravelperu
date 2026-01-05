import type { Metadata } from 'next';
import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Family Travel Peru - Ultimate Guide to Traveling Peru with Kids',
    template: '%s | Family Travel Peru',
  },
  description: 'Plan your perfect family adventure in Peru. Discover kid-friendly itineraries from 5 to 31 days, featuring Machu Picchu, Amazon rainforest, Lima, Cusco, and more.',
  keywords: 'Peru family travel, travel Peru with kids, Peru itinerary, Machu Picchu with children, family vacation Peru, Peru travel guide, Lima with kids, Cusco family trip, Amazon jungle family, Sacred Valley tour',
  authors: [{ name: 'Family Travel Peru' }],
  creator: 'Family Travel Peru',
  publisher: 'Family Travel Peru',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://familytravelperu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Family Travel Peru - Ultimate Guide to Traveling Peru with Kids',
    description: 'Plan your perfect family adventure in Peru. Discover kid-friendly itineraries from 5 to 31 days.',
    url: 'https://familytravelperu.com',
    siteName: 'Family Travel Peru',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Family Travel Peru - Discover Peru with Your Family',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Travel Peru - Ultimate Guide to Traveling Peru with Kids',
    description: 'Plan your perfect family adventure in Peru.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <I18nProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
