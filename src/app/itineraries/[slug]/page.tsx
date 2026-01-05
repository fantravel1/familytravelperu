'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getItineraryBySlug, itineraries } from '@/data/itineraries';
import {
  MapPin, Clock, Users, Calendar, CheckCircle,
  XCircle, ChevronRight, ArrowLeft, Star
} from 'lucide-react';

export default function ItineraryDetailPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useI18n();
  const itinerary = getItineraryBySlug(params.slug);

  if (!itinerary) {
    return (
      <div className="container-peru py-24 text-center">
        <h1 className="text-3xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? 'Itinerario no encontrado' : 'Itinerary not found'}
        </h1>
        <Link href="/itineraries/" className="btn-primary">
          {t('itineraries.back_to_all')}
        </Link>
      </div>
    );
  }

  const similarItineraries = itineraries
    .filter(i => i.id !== itinerary.id && (i.duration === itinerary.duration || i.theme === itinerary.theme))
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru">
          <Link
            href="/itineraries/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('itineraries.back_to_all')}
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="badge bg-peru-gold text-white">
              {itinerary.duration} {t('itineraries.days')}
            </span>
            <span className="badge bg-white/20 text-white">
              {t(`themes.${itinerary.theme}`)}
            </span>
            <span className="badge bg-white/20 text-white">
              {t(`difficulty.${itinerary.difficulty}`)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            {locale === 'es' ? itinerary.titleEs : itinerary.title}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {locale === 'es' ? itinerary.subtitleEs : itinerary.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b py-4 sticky top-16 lg:top-20 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2 text-peru-gold" />
                {itinerary.duration} {t('itineraries.days')}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2 text-peru-gold" />
                {locale === 'es' ? `Min ${itinerary.minAge} años` : `Min age ${itinerary.minAge}`}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-peru-gold" />
                {itinerary.startLocation} → {itinerary.endLocation}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <span className="text-sm text-gray-500">{t('common.from')}</span>
                <span className="text-2xl font-bold text-peru-gold ml-1">${itinerary.price}</span>
              </div>
              <button className="btn-primary">
                {t('itineraries.book_now')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container-peru py-12 lg:py-16">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <div className="lg:flex-1">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
                {t('itineraries.overview')}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {locale === 'es' ? itinerary.descriptionEs : itinerary.description}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
                {t('itineraries.highlights')}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(locale === 'es' ? itinerary.highlightsEs : itinerary.highlights).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-peru-sand/50 rounded-lg">
                    <Star className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day by Day */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                {t('itineraries.day_by_day')}
              </h2>
              <div className="space-y-4">
                {itinerary.dayByDay.map((day) => (
                  <div key={day.day} className="border rounded-xl overflow-hidden">
                    <div className="bg-peru-sand/50 px-6 py-4 flex items-center gap-4">
                      <div className="w-12 h-12 bg-peru-gold rounded-full flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                      <div>
                        <div className="text-sm text-peru-terracotta font-medium">
                          {t('itineraries.day')} {day.day}
                        </div>
                        <h3 className="text-lg font-display font-bold text-peru-earth">
                          {locale === 'es' ? day.titleEs : day.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        {locale === 'es' ? day.descriptionEs : day.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {day.locations.map((loc, i) => (
                          <span key={i} className="badge bg-peru-ocean/10 text-peru-ocean">
                            <MapPin className="w-3 h-3 mr-1" />
                            {loc}
                          </span>
                        ))}
                      </div>
                      {day.meals && (
                        <div className="mt-3 text-sm text-gray-500">
                          <strong>{locale === 'es' ? 'Comidas:' : 'Meals:'}</strong> {day.meals}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-40 space-y-6">
              {/* Includes */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-display font-bold text-peru-earth mb-4">
                  {t('common.included')}
                </h3>
                <ul className="space-y-2">
                  {(locale === 'es' ? itinerary.includesEs : itinerary.includes).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-peru-jungle flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Includes */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-display font-bold text-peru-earth mb-4">
                  {t('common.not_included')}
                </h3>
                <ul className="space-y-2">
                  {(locale === 'es' ? itinerary.notIncludesEs : itinerary.notIncludes).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best For */}
              <div className="bg-peru-sand rounded-xl p-6">
                <h3 className="font-display font-bold text-peru-earth mb-4">
                  {t('itineraries.best_for')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'es' ? itinerary.bestForEs : itinerary.bestFor).map((item, i) => (
                    <span key={i} className="badge-gold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-peru-earth rounded-xl p-6 text-white text-center">
                <div className="text-3xl font-bold mb-2">${itinerary.price}</div>
                <div className="text-white/80 mb-4">{t('common.per_person')}</div>
                <button className="w-full btn-gold">
                  {t('itineraries.book_now')}
                </button>
                <button className="w-full mt-3 text-white/80 hover:text-white text-sm">
                  {t('common.get_quote')}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Similar Itineraries */}
      {similarItineraries.length > 0 && (
        <section className="py-12 bg-peru-sand">
          <div className="container-peru">
            <h2 className="text-2xl font-display font-bold text-peru-earth mb-8">
              {t('itineraries.similar')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {similarItineraries.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/itineraries/${sim.slug}/`}
                  className="card p-6 hover:shadow-xl"
                >
                  <span className="badge-gold mb-3">
                    {sim.duration} {t('itineraries.days')}
                  </span>
                  <h3 className="font-display font-bold text-peru-earth mb-2">
                    {locale === 'es' ? sim.titleEs : sim.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {locale === 'es' ? sim.subtitleEs : sim.subtitle}
                  </p>
                  <div className="text-peru-gold font-bold">${sim.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function generateStaticParams() {
  return itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));
}
