'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { getDestinationBySlug, destinations } from '@/data/destinations';
import {
  MapPin,
  Mountain,
  Calendar,
  Cloud,
  Star,
  Activity,
  Users,
  ArrowLeft,
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export default function DestinationContent({ slug }: { slug: string }) {
  const { locale } = useI18n();

  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="min-h-screen bg-peru-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-peru-brown mb-4">
            {locale === 'es' ? 'Destino no encontrado' : 'Destination Not Found'}
          </h1>
          <Link href="/destinations" className="btn-gold">
            {locale === 'es' ? 'Ver todos los destinos' : 'View All Destinations'}
          </Link>
        </div>
      </div>
    );
  }

  const name = locale === 'es' ? destination.nameEs : destination.name;
  const tagline = locale === 'es' ? destination.taglineEs : destination.tagline;
  const description = locale === 'es' ? destination.descriptionEs : destination.description;
  const bestTime = locale === 'es' ? destination.bestTimeEs : destination.bestTime;
  const highlights = locale === 'es' ? destination.highlightsEs : destination.highlights;
  const activities = locale === 'es' ? destination.activitiesEs : destination.activities;
  const familyTips = locale === 'es' ? destination.familyTipsEs : destination.familyTips;
  const climate = locale === 'es' ? destination.climateEs : destination.climate;

  const regionLabels = {
    coast: locale === 'es' ? 'Costa' : 'Coast',
    highlands: locale === 'es' ? 'Sierra' : 'Highlands',
    amazon: locale === 'es' ? 'Amazonía' : 'Amazon',
    north: locale === 'es' ? 'Norte' : 'Northern Peru'
  };

  const regionColors = {
    coast: 'bg-blue-100 text-blue-800',
    highlands: 'bg-amber-100 text-amber-800',
    amazon: 'bg-green-100 text-green-800',
    north: 'bg-purple-100 text-purple-800'
  };

  return (
    <main className="min-h-screen bg-peru-sand">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-peru-brown">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${destination.image})`,
            backgroundColor: '#8B4513'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="container-peru relative h-full flex flex-col justify-end pb-12">
          <Link
            href="/destinations"
            className="absolute top-8 left-4 md:left-0 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {locale === 'es' ? 'Todos los destinos' : 'All Destinations'}
          </Link>

          <div className="space-y-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${regionColors[destination.region]}`}>
              {regionLabels[destination.region]}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{name}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{tagline}</p>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white border-b border-peru-terracotta/20">
        <div className="container-peru py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destination.elevation && (
              <div className="flex items-center gap-3">
                <Mountain className="w-6 h-6 text-peru-terracotta" />
                <div>
                  <p className="text-sm text-gray-500">{locale === 'es' ? 'Elevación' : 'Elevation'}</p>
                  <p className="font-semibold text-peru-brown">{destination.elevation}</p>
                </div>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-peru-terracotta" />
              <div>
                <p className="text-sm text-gray-500">{locale === 'es' ? 'Mejor época' : 'Best Time'}</p>
                <p className="font-semibold text-peru-brown">{bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-peru-terracotta" />
              <div>
                <p className="text-sm text-gray-500">{locale === 'es' ? 'Región' : 'Region'}</p>
                <p className="font-semibold text-peru-brown">{regionLabels[destination.region]}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Cloud className="w-6 h-6 text-peru-terracotta" />
              <div>
                <p className="text-sm text-gray-500">{locale === 'es' ? 'Clima' : 'Climate'}</p>
                <p className="font-semibold text-peru-brown text-sm">{climate.split('.')[0]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-peru py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <div>
              <h2 className="section-title mb-6">
                {locale === 'es' ? 'Sobre' : 'About'} {name}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="section-title mb-6 flex items-center gap-3">
                <Star className="w-6 h-6 text-peru-gold" />
                {locale === 'es' ? 'Puntos Destacados' : 'Highlights'}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h2 className="section-title mb-6 flex items-center gap-3">
                <Activity className="w-6 h-6 text-peru-terracotta" />
                {locale === 'es' ? 'Actividades' : 'Activities'}
              </h2>
              <div className="flex flex-wrap gap-3">
                {activities.map((activity, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-peru-terracotta/10 text-peru-brown rounded-full"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Climate Details */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-peru-brown mb-3 flex items-center gap-2">
                <Cloud className="w-5 h-5" />
                {locale === 'es' ? 'Clima y Tiempo' : 'Weather & Climate'}
              </h3>
              <p className="text-gray-700">{climate}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Family Tips Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-peru-brown mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-peru-terracotta" />
                {locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}
              </h3>
              <ul className="space-y-3">
                {familyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-peru-terracotta to-peru-brown rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-bold text-xl mb-3">
                {locale === 'es' ? `¿Listo para visitar ${name}?` : `Ready to visit ${name}?`}
              </h3>
              <p className="text-white/90 mb-6 text-sm">
                {locale === 'es'
                  ? 'Encontremos el itinerario perfecto para tu familia.'
                  : 'Let us help you find the perfect itinerary for your family.'
                }
              </p>
              <Link
                href="/itineraries"
                className="block w-full bg-peru-gold text-peru-brown font-semibold py-3 px-6 rounded-lg text-center hover:bg-peru-gold/90 transition-colors"
              >
                {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
              </Link>
              <Link
                href="/contact"
                className="block w-full mt-3 bg-white/20 text-white font-semibold py-3 px-6 rounded-lg text-center hover:bg-white/30 transition-colors"
              >
                {locale === 'es' ? 'Contáctanos' : 'Contact Us'}
              </Link>
            </div>

            {/* Related Destinations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-peru-brown mb-4">
                {locale === 'es' ? 'Destinos Relacionados' : 'Related Destinations'}
              </h3>
              <div className="space-y-3">
                {destinations
                  .filter(d => d.region === destination.region && d.slug !== destination.slug)
                  .slice(0, 3)
                  .map((related) => (
                    <Link
                      key={related.slug}
                      href={`/destinations/${related.slug}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-peru-sand transition-colors"
                    >
                      <div
                        className="w-12 h-12 rounded-lg bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${related.image})`,
                          backgroundColor: '#D2B48C'
                        }}
                      />
                      <div>
                        <p className="font-medium text-peru-brown">
                          {locale === 'es' ? related.nameEs : related.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {locale === 'es' ? related.taglineEs.slice(0, 40) : related.tagline.slice(0, 40)}...
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-peru-brown py-16">
        <div className="container-peru text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale === 'es'
              ? `Incluye ${name} en tu aventura`
              : `Include ${name} in your adventure`
            }
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Nuestros itinerarios familiares están diseñados para experiencias memorables en cada destino.'
              : 'Our family itineraries are designed for memorable experiences at every destination.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraries" className="btn-gold">
              {locale === 'es' ? 'Explorar Itinerarios' : 'Explore Itineraries'}
            </Link>
            <Link href="/destinations" className="btn-primary bg-white/20 hover:bg-white/30">
              {locale === 'es' ? 'Más Destinos' : 'More Destinations'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
