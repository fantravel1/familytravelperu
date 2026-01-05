'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { itineraries, getAllDurations } from '@/data/itineraries';
import { MapPin, Clock, Users, Filter, X } from 'lucide-react';

export default function ItinerariesPage() {
  const { t, locale } = useI18n();
  const durations = getAllDurations();

  const [selectedDuration, setSelectedDuration] = useState<number | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const themes = ['classic', 'adventure', 'cultural', 'beach', 'amazon', 'highlands', 'food', 'wildlife', 'historical'];
  const difficulties = ['easy', 'moderate', 'active'];

  const filteredItineraries = itineraries.filter(itinerary => {
    if (selectedDuration && itinerary.duration !== selectedDuration) return false;
    if (selectedTheme && itinerary.theme !== selectedTheme) return false;
    if (selectedDifficulty && itinerary.difficulty !== selectedDifficulty) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedDuration(null);
    setSelectedTheme(null);
    setSelectedDifficulty(null);
  };

  const hasActiveFilters = selectedDuration || selectedTheme || selectedDifficulty;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('itineraries.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('itineraries.subtitle')}
          </p>
        </div>
      </section>

      {/* Duration Quick Links */}
      <section className="py-6 bg-peru-sand sticky top-16 lg:top-20 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedDuration(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                !selectedDuration
                  ? 'bg-peru-gold text-white'
                  : 'bg-white text-peru-earth hover:bg-peru-gold hover:text-white'
              }`}
            >
              {t('itineraries.all')}
            </button>
            {durations.map((days) => (
              <button
                key={days}
                onClick={() => setSelectedDuration(days === selectedDuration ? null : days)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedDuration === days
                    ? 'bg-peru-gold text-white'
                    : 'bg-white text-peru-earth hover:bg-peru-gold hover:text-white'
                }`}
              >
                {days} {t('itineraries.days')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <div className="lg:flex lg:gap-8">
            {/* Filters - Mobile Toggle */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border rounded-lg"
              >
                <Filter className="w-5 h-5" />
                {locale === 'es' ? 'Filtros' : 'Filters'}
                {hasActiveFilters && (
                  <span className="bg-peru-gold text-white text-xs px-2 py-0.5 rounded-full">
                    {[selectedDuration, selectedTheme, selectedDifficulty].filter(Boolean).length}
                  </span>
                )}
              </button>
            </div>

            {/* Filters Sidebar */}
            <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-40">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-peru-earth">
                    {locale === 'es' ? 'Filtros' : 'Filters'}
                  </h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-peru-terracotta hover:underline"
                    >
                      {locale === 'es' ? 'Limpiar' : 'Clear'}
                    </button>
                  )}
                </div>

                {/* Theme Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">{t('itineraries.filter_theme')}</h4>
                  <div className="space-y-2">
                    {themes.map((theme) => (
                      <button
                        key={theme}
                        onClick={() => setSelectedTheme(theme === selectedTheme ? null : theme)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedTheme === theme
                            ? 'bg-peru-gold text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {t(`themes.${theme}`)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-3">{t('itineraries.filter_difficulty')}</h4>
                  <div className="space-y-2">
                    {difficulties.map((diff) => (
                      <button
                        key={diff}
                        onClick={() => setSelectedDifficulty(diff === selectedDifficulty ? null : diff)}
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedDifficulty === diff
                            ? 'bg-peru-gold text-white'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {t(`difficulty.${diff}`)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Itineraries Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="mb-6 text-gray-600">
                {filteredItineraries.length} {locale === 'es' ? 'itinerarios encontrados' : 'itineraries found'}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItineraries.map((itinerary) => (
                  <article key={itinerary.id} className="card group">
                    <div className="relative h-48 bg-gradient-to-br from-peru-gold to-peru-terracotta">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin className="w-16 h-16 text-white/50" />
                      </div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="badge-gold">
                          {itinerary.duration} {t('itineraries.days')}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="badge bg-white text-peru-earth">
                          {t(`themes.${itinerary.theme}`)}
                        </span>
                      </div>
                      {itinerary.featured && (
                        <div className="absolute bottom-4 left-4">
                          <span className="badge bg-peru-jungle text-white">
                            {locale === 'es' ? 'Destacado' : 'Featured'}
                          </span>
                        </div>
                      )}
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
                          <span className="text-sm text-gray-500">/{t('common.per_person')}</span>
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

              {filteredItineraries.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">
                    {locale === 'es'
                      ? 'No se encontraron itinerarios con los filtros seleccionados.'
                      : 'No itineraries found with the selected filters.'}
                  </p>
                  <button onClick={clearFilters} className="btn-secondary">
                    {locale === 'es' ? 'Limpiar Filtros' : 'Clear Filters'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
