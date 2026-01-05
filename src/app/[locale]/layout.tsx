import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | Family Travel Peru`,
    },
    description: t('description'),
    keywords: t('keywords'),
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
      languages: {
        en: '/en',
        es: '/es',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://familytravelperu.com',
      siteName: 'Family Travel Peru',
      locale: locale === 'es' ? 'es_PE' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Family Travel Peru - Discover Peru with Your Family',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.jpg'],
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
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
