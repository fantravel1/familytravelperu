'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { Menu, X, ChevronDown, MapPin } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t, locale } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isItinerariesOpen, setIsItinerariesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const itineraryDurations = [3, 5, 7, 10, 14, 21, 30, 60];

  const resources = [
    { href: '/when-to-visit/', label: locale === 'es' ? 'Cuándo Visitar' : 'When to Visit' },
    { href: '/budget/', label: locale === 'es' ? 'Calculadora de Presupuesto' : 'Budget Calculator' },
    { href: '/packing/', label: locale === 'es' ? 'Listas de Equipaje' : 'Packing Lists' },
    { href: '/transportation/', label: locale === 'es' ? 'Guía de Transporte' : 'Transportation' },
    { href: '/photo-spots/', label: locale === 'es' ? 'Lugares para Fotos' : 'Photo Spots' },
    { href: '/food-guide/', label: locale === 'es' ? 'Guía de Comida' : 'Food Guide' },
    { href: '/altitude-guide/', label: locale === 'es' ? 'Guía de Altitud' : 'Altitude Guide' },
    { href: '/culture-guide/', label: locale === 'es' ? 'Cultura y Costumbres' : 'Culture Guide' },
    { href: '/safety/', label: locale === 'es' ? 'Guía de Seguridad' : 'Safety Guide' },
    { href: '/faq/', label: locale === 'es' ? 'Preguntas Frecuentes' : 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-peru">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-peru-terracotta" />
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-display font-bold text-peru-earth">
                Family Travel
              </span>
              <span className="text-xs lg:text-sm font-semibold text-peru-gold -mt-1">
                PERU
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              {t('nav.home')}
            </Link>

            {/* Itineraries Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center space-x-1"
                onMouseEnter={() => setIsItinerariesOpen(true)}
                onMouseLeave={() => setIsItinerariesOpen(false)}
              >
                <span>{t('nav.itineraries')}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-4 transition-all duration-200 ${
                  isItinerariesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsItinerariesOpen(true)}
                onMouseLeave={() => setIsItinerariesOpen(false)}
              >
                <Link
                  href="/itineraries/"
                  className="block px-4 py-2 text-gray-700 hover:bg-peru-sand hover:text-peru-earth transition-colors"
                >
                  {t('itineraries.all')} {t('nav.itineraries')}
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t('itineraries.filter_duration')}
                </p>
                {itineraryDurations.map((days) => (
                  <Link
                    key={days}
                    href={`/itineraries/${days}-day/`}
                    className="block px-4 py-2 text-gray-700 hover:bg-peru-sand hover:text-peru-earth transition-colors"
                  >
                    {days} {t('itineraries.days')}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/destinations/" className="nav-link">
              {t('nav.destinations')}
            </Link>
            <Link href="/planning/" className="nav-link">
              {t('nav.planning')}
            </Link>
            <Link href="/travel-info/" className="nav-link">
              {t('nav.travel_info')}
            </Link>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                className="nav-link flex items-center space-x-1"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <span>{locale === 'es' ? 'Recursos' : 'Resources'}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                  isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                {resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-peru-sand hover:text-peru-earth transition-colors"
                  >
                    {resource.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/about/" className="nav-link">
              {t('nav.about')}
            </Link>
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link href="/contact/" className="btn-primary text-sm">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-peru-terracotta"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                href="/itineraries/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.itineraries')}
              </Link>
              <div className="pl-4 flex flex-col space-y-2">
                {itineraryDurations.map((days) => (
                  <Link
                    key={days}
                    href={`/itineraries/${days}-day/`}
                    className="text-sm text-gray-600 hover:text-peru-terracotta py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {days} {t('itineraries.days')}
                  </Link>
                ))}
              </div>
              <Link
                href="/destinations/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.destinations')}
              </Link>
              <Link
                href="/planning/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.planning')}
              </Link>
              <Link
                href="/travel-info/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.travel_info')}
              </Link>
              <div className="py-2">
                <span className="nav-link font-semibold">
                  {locale === 'es' ? 'Recursos' : 'Resources'}
                </span>
                <div className="pl-4 flex flex-col space-y-2 mt-2">
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="text-sm text-gray-600 hover:text-peru-terracotta py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {resource.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/about/"
                className="nav-link py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <LanguageSwitcher />
                <Link
                  href="/contact/"
                  className="btn-primary text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
