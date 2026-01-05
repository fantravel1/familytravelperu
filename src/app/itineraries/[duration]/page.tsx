'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getItinerariesByDuration, getAllDurations } from '@/data/itineraries';
import { MapPin, Clock, Users, ArrowLeft } from 'lucide-react';

export default function DurationPage({ params }: { params: { duration: string } }) {
  const { t, locale } = useI18n();

  const daysMatch = params.duration.match(/^(\d+)-day$/);
  const days = daysMatch ? parseInt(daysMatch[1]) : 0;

  const filteredItineraries = getItinerariesByDuration(days);
  const allDurations = getAllDurations();

  if (!days || filteredItineraries.length === 0) {
    return (
      <div className="container-peru py-24 text-center">
        <h1 className="text-3xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? 'Itinerarios no encontrados' : 'Itineraries not found'}
        </h1>
        <Link href="/itineraries/" className="btn-primary">
          {t('itineraries.back_to_all')}
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-white">
          <Link
            href="/itineraries/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('itineraries.back_to_all')}
          </Link>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {days} {locale === 'es' ? 'Días en Perú' : 'Days in Peru'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {locale === 'es'
              ? `Descubre nuestros itinerarios familiares de ${days} días diseñados para crear recuerdos inolvidables.`
              : `Discover our ${days}-day family itineraries designed to create unforgettable memories.`}
          </p>
        </div>
      </section>

      {/* Duration Quick Links */}
      <section className="py-6 bg-peru-sand">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-2">
            {allDurations.map((d) => (
              <Link
                key={d}
                href={`/itineraries/${d}-day/`}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  d === days
                    ? 'bg-peru-gold text-white'
                    : 'bg-white text-peru-earth hover:bg-peru-gold hover:text-white'
                }`}
              >
                {d} {t('itineraries.days')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <div className="mb-6 text-gray-600">
            {filteredItineraries.length} {locale === 'es' ? 'itinerarios de' : 'itineraries of'} {days} {t('itineraries.days')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItineraries.map((itinerary) => (
              <article key={itinerary.id} className="card group">
                <div className="relative h-48 bg-gradient-to-br from-peru-gold to-peru-terracotta">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-white/50" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="badge-gold">
                      {itinerary.duration} {t('itineraries.days')}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="badge bg-white text-peru-earth">
                      {t(`themes.${itinerary.theme}`)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-peru-earth mb-2 group-hover:text-peru-terracotta transition-colors">
                    {locale === 'es' ? itinerary.titleEs : itinerary.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {locale === 'es' ? itinerary.subtitleEs : itinerary.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {t(`difficulty.${itinerary.difficulty}`)}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {locale === 'es' ? `Min ${itinerary.minAge} años` : `Min age ${itinerary.minAge}`}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-500">{t('common.from')}</span>
                      <span className="text-2xl font-bold text-peru-gold ml-1">${itinerary.price}</span>
                    </div>
                    <Link
                      href={`/itineraries/${itinerary.slug}/`}
                      className="btn-primary text-sm"
                    >
                      {t('itineraries.view_details')}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-peru-sand">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
            {locale === 'es' ? '¿No encuentras lo que buscas?' : "Can't find what you're looking for?"}
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Podemos crear un itinerario personalizado perfecto para tu familia.'
              : 'We can create a custom itinerary perfect for your family.'}
          </p>
          <Link href="/contact/" className="btn-primary">
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  const durations = getAllDurations();
  return durations.map((days) => ({
    duration: `${days}-day`,
  }));
}
