'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getFeaturedItineraries, getAllDurations } from '@/data/itineraries';
import {
  MapPin, Calendar, Users, Shield, Heart, Star,
  ChevronRight, Mountain, TreePine, Waves, Camera,
  Clock, CheckCircle
} from 'lucide-react';

export default function HomePage() {
  const { t, locale } = useI18n();
  const featuredItineraries = getFeaturedItineraries();
  const durations = getAllDurations();

  const whyPeruFeatures = [
    {
      icon: Mountain,
      title: locale === 'es' ? 'Maravillas Antiguas' : 'Ancient Wonders',
      description: locale === 'es'
        ? 'Machu Picchu, Valle Sagrado y más de 5000 años de historia para explorar'
        : 'Machu Picchu, Sacred Valley, and over 5000 years of history to explore'
    },
    {
      icon: TreePine,
      title: locale === 'es' ? 'Aventura Amazónica' : 'Amazon Adventure',
      description: locale === 'es'
        ? 'Encuentros con vida silvestre y experiencias en la selva tropical'
        : 'Wildlife encounters and rainforest experiences unlike anywhere else'
    },
    {
      icon: Waves,
      title: locale === 'es' ? 'Costa y Playas' : 'Coast & Beaches',
      description: locale === 'es'
        ? 'Desde lobos marinos en Paracas hasta las dunas de Huacachina'
        : 'From sea lions in Paracas to the sand dunes of Huacachina'
    },
    {
      icon: Camera,
      title: locale === 'es' ? 'Cultura Rica' : 'Rich Culture',
      description: locale === 'es'
        ? 'Comunidades andinas vibrantes, textiles y tradiciones culinarias'
        : 'Vibrant Andean communities, textiles, and culinary traditions'
    }
  ];

  const trustFeatures = [
    { icon: Shield, text: t('features.safe') },
    { icon: Users, text: t('features.family_tested') },
    { icon: Heart, text: t('features.kid_friendly') },
    { icon: Star, text: t('features.local_experts') },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-peru-earth via-peru-terracotta to-peru-gold">
        <div className="absolute inset-0 bg-black/40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/hero-machu-picchu.jpg')" }}
        ></div>
        <div className="container-peru relative z-10 py-20">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {trustFeatures.map((feature, index) => (
                <span key={index} className="badge bg-white/20 text-white backdrop-blur-sm">
                  <feature.icon className="w-4 h-4 mr-1" />
                  {feature.text}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/itineraries/" className="btn-gold text-lg px-8 py-4">
                {t('hero.cta')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/planning/" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-peru-earth text-lg px-8 py-4">
                {t('hero.secondary_cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Duration Quick Links */}
      <section className="py-8 bg-peru-sand">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-3">
            {durations.map((days) => (
              <Link
                key={days}
                href={`/itineraries/${days}-day/`}
                className="px-4 py-2 bg-white rounded-full text-peru-earth font-medium hover:bg-peru-gold hover:text-white transition-colors shadow-sm"
              >
                {days} {t('itineraries.days')}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.featured_title')}</h2>
            <p className="section-subtitle">{t('home.featured_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItineraries.slice(0, 6).map((itinerary) => (
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {t(`difficulty.${itinerary.difficulty}`)}
                    </div>
                    <span className="text-peru-gold font-bold">
                      ${itinerary.price}
                    </span>
                  </div>
                  <Link
                    href={`/itineraries/${itinerary.slug}/`}
                    className="mt-4 w-full btn-primary text-center block"
                  >
                    {t('itineraries.view_details')}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/itineraries/" className="btn-secondary">
              {t('home.all_itineraries')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Peru */}
      <section className="py-16 lg:py-24 bg-peru-sand bg-pattern-inca">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.why_title')}</h2>
            <p className="section-subtitle">{t('home.why_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPeruFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-peru-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-peru-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="section-title">{t('home.destinations_title')}</h2>
            <p className="section-subtitle">{t('home.destinations_subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { slug: 'machu-picchu', name: 'Machu Picchu' },
              { slug: 'cusco', name: 'Cusco' },
              { slug: 'lima', name: 'Lima' },
              { slug: 'sacred-valley', name: locale === 'es' ? 'Valle Sagrado' : 'Sacred Valley' },
              { slug: 'amazon', name: locale === 'es' ? 'Amazonía' : 'Amazon' },
              { slug: 'lake-titicaca', name: locale === 'es' ? 'Lago Titicaca' : 'Lake Titicaca' },
            ].map((dest) => (
              <Link
                key={dest.slug}
                href={`/destinations/${dest.slug}/`}
                className="group relative h-32 rounded-xl overflow-hidden bg-gradient-to-br from-peru-earth to-peru-terracotta"
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-display font-bold text-center px-2">
                    {dest.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/destinations/" className="btn-secondary">
              {t('footer.view_all')}
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              {t('home.newsletter_title')}
            </h2>
            <p className="text-white/80 mb-8">
              {t('home.newsletter_subtitle')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('home.newsletter_placeholder')}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-peru-gold outline-none"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                {t('home.newsletter_button')}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-t">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-peru-gold">500+</div>
              <div className="text-gray-600">{locale === 'es' ? 'Familias Felices' : 'Happy Families'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-peru-gold">15+</div>
              <div className="text-gray-600">{locale === 'es' ? 'Años de Experiencia' : 'Years Experience'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-peru-gold">4.9</div>
              <div className="text-gray-600">{locale === 'es' ? 'Calificación Promedio' : 'Average Rating'}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-peru-gold">24/7</div>
              <div className="text-gray-600">{locale === 'es' ? 'Soporte' : 'Support'}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
