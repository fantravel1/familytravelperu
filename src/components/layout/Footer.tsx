'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  Twitter
} from 'lucide-react';

export default function Footer() {
  const { t, locale } = useI18n();
  const currentYear = new Date().getFullYear();

  const itineraryLinks = [
    { days: 5, label: `5 ${t('itineraries.days')}` },
    { days: 7, label: `7 ${t('itineraries.days')}` },
    { days: 10, label: `10 ${t('itineraries.days')}` },
    { days: 14, label: `14 ${t('itineraries.days')}` },
    { days: 21, label: `21 ${t('itineraries.days')}` },
  ];

  const destinationLinks = [
    { slug: 'lima', label: 'Lima' },
    { slug: 'cusco', label: 'Cusco' },
    { slug: 'machu-picchu', label: 'Machu Picchu' },
    { slug: 'sacred-valley', label: t('destinations.sacred_valley') },
    { slug: 'amazon', label: t('destinations.amazon') },
  ];

  return (
    <footer className="bg-peru-earth text-white">
      {/* Main Footer */}
      <div className="container-peru py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-peru-gold" />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white">
                  Family Travel
                </span>
                <span className="text-sm font-semibold text-peru-gold -mt-1">
                  PERU
                </span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6">{t('footer.tagline')}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-peru-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-peru-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-peru-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-peru-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Itineraries Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-peru-gold">
              {t('nav.itineraries')}
            </h3>
            <ul className="space-y-2">
              {itineraryLinks.map((link) => (
                <li key={link.days}>
                  <Link
                    href={`/itineraries/${link.days}-day/`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/itineraries/"
                  className="text-peru-gold hover:text-white transition-colors font-medium"
                >
                  {t('footer.view_all')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-peru-gold">
              {t('nav.destinations')}
            </h3>
            <ul className="space-y-2">
              {destinationLinks.map((link) => (
                <li key={link.slug}>
                  <Link
                    href={`/destinations/${link.slug}/`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/destinations/"
                  className="text-peru-gold hover:text-white transition-colors font-medium"
                >
                  {t('footer.view_all')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-peru-gold">
              {t('footer.connect')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@familytravelperu.com"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>hello@familytravelperu.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+51999999999"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+51 999 999 999</span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact/" className="btn-gold text-sm">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-peru py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Family Travel Peru. {t('footer.copyright').replace('© 2024 Family Travel Peru. ', '')}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                href="/terms/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
