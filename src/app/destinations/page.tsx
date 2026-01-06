'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  MapPin,
  Mountain,
  Waves,
  TreePine,
  Compass,
  Sun,
  ChevronRight
} from 'lucide-react';
import { destinations, getFeaturedDestinations } from '@/data/destinations';

// Map region to icon
const getRegionIcon = (region: string) => {
  switch (region) {
    case 'highlands':
      return Mountain;
    case 'coast':
      return Waves;
    case 'amazon':
      return TreePine;
    case 'north':
      return Compass;
    default:
      return MapPin;
  }
};

export default function DestinationsPage() {
  const { t, locale } = useI18n();
  const featuredDestinations = getFeaturedDestinations();

  const regions = [
    { id: 'coast', name: locale === 'es' ? 'Costa' : 'Coast', icon: Waves },
    { id: 'highlands', name: locale === 'es' ? 'Sierra' : 'Highlands', icon: Mountain },
    { id: 'amazon', name: locale === 'es' ? 'Selva' : 'Amazon', icon: TreePine },
    { id: 'north', name: locale === 'es' ? 'Norte' : 'North', icon: Compass },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('destinations.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Destinations */}
      {featuredDestinations.length > 0 && (
        <section className="py-12 lg:py-16 bg-peru-sand/30">
          <div className="container-peru">
            <h2 className="section-title text-center mb-8">
              {locale === 'es' ? 'Destinos Destacados' : 'Featured Destinations'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredDestinations.map((dest) => {
                const RegionIcon = getRegionIcon(dest.region);
                return (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}/`}
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-peru-gold to-peru-terracotta">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RegionIcon className="w-16 h-16 text-white/50" />
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="badge bg-peru-jungle text-white text-xs">
                          {locale === 'es' ? '★ Destacado' : '★ Featured'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="badge text-xs">
                          {locale === 'es'
                            ? regions.find(r => r.id === dest.region)?.name
                            : regions.find(r => r.id === dest.region)?.name}
                        </span>
                        {dest.elevation && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Mountain className="w-3 h-3" />
                            {dest.elevation}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-display font-bold text-peru-earth mb-2 group-hover:text-peru-terracotta transition-colors">
                        {locale === 'es' ? dest.nameEs : dest.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 italic">
                        {locale === 'es' ? dest.taglineEs : dest.tagline}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                        <Sun className="w-3 h-3" />
                        <span>{locale === 'es' ? dest.bestTimeEs : dest.bestTime}</span>
                      </div>
                      <div className="flex items-center text-peru-terracotta font-medium">
                        {t('common.learn_more')}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Destinations by Region */}
      {regions.map((region) => {
        const regionDestinations = destinations.filter(d => d.region === region.id);
        if (regionDestinations.length === 0) return null;
        const RegionIcon = region.icon;

        return (
          <section key={region.id} className="py-12 lg:py-16 odd:bg-white even:bg-peru-sand/30">
            <div className="container-peru">
              <div className="flex items-center gap-3 mb-8">
                <RegionIcon className="w-8 h-8 text-peru-terracotta" />
                <h2 className="text-3xl font-display font-bold text-peru-earth">
                  {region.name}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionDestinations.map((dest) => {
                  const DestRegionIcon = getRegionIcon(dest.region);
                  return (
                    <Link
                      key={dest.slug}
                      href={`/destinations/${dest.slug}/`}
                      className="card group overflow-hidden"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-peru-gold to-peru-terracotta">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <DestRegionIcon className="w-16 h-16 text-white/50" />
                        </div>
                        {dest.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="badge bg-peru-jungle text-white text-xs">
                              {locale === 'es' ? '★ Destacado' : '★ Featured'}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="badge text-xs">
                            {region.name}
                          </span>
                          {dest.elevation && (
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Mountain className="w-3 h-3" />
                              {dest.elevation}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-display font-bold text-peru-earth mb-2 group-hover:text-peru-terracotta transition-colors">
                          {locale === 'es' ? dest.nameEs : dest.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3 italic">
                          {locale === 'es' ? dest.taglineEs : dest.tagline}
                        </p>
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-4">
                          <Sun className="w-3 h-3" />
                          <span>{locale === 'es' ? dest.bestTimeEs : dest.bestTime}</span>
                        </div>
                        <div className="flex items-center text-peru-terracotta font-medium">
                          {t('common.learn_more')}
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Listo para explorar?' : 'Ready to explore?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Descubre nuestros itinerarios familiares que combinan los mejores destinos de Perú.'
              : 'Discover our family itineraries that combine the best destinations in Peru.'}
          </p>
          <Link href="/itineraries/" className="btn-gold">
            {t('hero.cta')}
          </Link>
        </div>
      </section>
    </>
  );
}
