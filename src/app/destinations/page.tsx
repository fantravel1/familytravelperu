'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { MapPin, ChevronRight } from 'lucide-react';

const destinations = [
  {
    slug: 'lima',
    name: 'Lima',
    nameEs: 'Lima',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Peru\'s vibrant capital city, world-renowned for its gastronomy and rich colonial history.',
    descriptionEs: 'La vibrante capital de Perú, mundialmente reconocida por su gastronomía y rica historia colonial.',
    highlights: ['Miraflores', 'Historic Center', 'Larco Museum', 'Food Scene'],
    highlightsEs: ['Miraflores', 'Centro Histórico', 'Museo Larco', 'Escena Gastronómica'],
    familyFriendly: true,
  },
  {
    slug: 'cusco',
    name: 'Cusco',
    nameEs: 'Cusco',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The ancient Inca capital and gateway to Machu Picchu, filled with history at every corner.',
    descriptionEs: 'La antigua capital Inca y puerta de entrada a Machu Picchu, llena de historia en cada esquina.',
    highlights: ['Plaza de Armas', 'San Pedro Market', 'Sacsayhuaman', 'Chocolate Museums'],
    highlightsEs: ['Plaza de Armas', 'Mercado San Pedro', 'Sacsayhuaman', 'Museos del Chocolate'],
    familyFriendly: true,
  },
  {
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    nameEs: 'Machu Picchu',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The iconic Inca citadel and one of the New Seven Wonders of the World.',
    descriptionEs: 'La icónica ciudadela Inca y una de las Nuevas Siete Maravillas del Mundo.',
    highlights: ['Citadel Tour', 'Train Journey', 'Aguas Calientes', 'Sun Gate'],
    highlightsEs: ['Tour de la Ciudadela', 'Viaje en Tren', 'Aguas Calientes', 'Puerta del Sol'],
    familyFriendly: true,
  },
  {
    slug: 'sacred-valley',
    name: 'Sacred Valley',
    nameEs: 'Valle Sagrado',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'Beautiful Andean valley with ancient ruins, traditional villages, and lower altitude than Cusco.',
    descriptionEs: 'Hermoso valle andino con ruinas antiguas, pueblos tradicionales y menor altitud que Cusco.',
    highlights: ['Ollantaytambo', 'Pisac', 'Moray', 'Maras Salt Mines'],
    highlightsEs: ['Ollantaytambo', 'Pisac', 'Moray', 'Salineras de Maras'],
    familyFriendly: true,
  },
  {
    slug: 'amazon',
    name: 'Amazon Rainforest',
    nameEs: 'Selva Amazónica',
    region: 'Jungle',
    regionEs: 'Selva',
    description: 'Incredible biodiversity and wildlife encounters in the world\'s largest rainforest.',
    descriptionEs: 'Increíble biodiversidad y encuentros con vida silvestre en la selva tropical más grande del mundo.',
    highlights: ['Wildlife Spotting', 'Jungle Lodges', 'Canopy Walks', 'Indigenous Communities'],
    highlightsEs: ['Avistamiento de Fauna', 'Lodges en la Selva', 'Caminatas en Canopy', 'Comunidades Indígenas'],
    familyFriendly: true,
  },
  {
    slug: 'lake-titicaca',
    name: 'Lake Titicaca',
    nameEs: 'Lago Titicaca',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The highest navigable lake in the world, home to the unique Uros floating islands.',
    descriptionEs: 'El lago navegable más alto del mundo, hogar de las únicas islas flotantes de los Uros.',
    highlights: ['Uros Islands', 'Taquile', 'Puno', 'Homestays'],
    highlightsEs: ['Islas Uros', 'Taquile', 'Puno', 'Estadías Familiares'],
    familyFriendly: true,
  },
  {
    slug: 'arequipa',
    name: 'Arequipa',
    nameEs: 'Arequipa',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The beautiful "White City" surrounded by volcanoes, gateway to Colca Canyon.',
    descriptionEs: 'La hermosa "Ciudad Blanca" rodeada de volcanes, puerta de entrada al Cañón del Colca.',
    highlights: ['Santa Catalina Monastery', 'Colca Canyon', 'Condor Watching', 'Local Cuisine'],
    highlightsEs: ['Monasterio Santa Catalina', 'Cañón del Colca', 'Observación de Cóndores', 'Cocina Local'],
    familyFriendly: true,
  },
  {
    slug: 'paracas',
    name: 'Paracas',
    nameEs: 'Paracas',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Coastal reserve with incredible marine wildlife and the famous Ballestas Islands.',
    descriptionEs: 'Reserva costera con increíble vida marina y las famosas Islas Ballestas.',
    highlights: ['Ballestas Islands', 'National Reserve', 'Sea Lions', 'Penguins'],
    highlightsEs: ['Islas Ballestas', 'Reserva Nacional', 'Lobos Marinos', 'Pingüinos'],
    familyFriendly: true,
  },
  {
    slug: 'huacachina',
    name: 'Huacachina',
    nameEs: 'Huacachina',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'A stunning desert oasis famous for sandboarding and dune buggy adventures.',
    descriptionEs: 'Un impresionante oasis en el desierto famoso por sandboard y aventuras en buggy.',
    highlights: ['Sandboarding', 'Dune Buggy', 'Sunset Views', 'Oasis Lake'],
    highlightsEs: ['Sandboard', 'Buggy en Dunas', 'Vistas del Atardecer', 'Laguna del Oasis'],
    familyFriendly: true,
  },
  {
    slug: 'nazca',
    name: 'Nazca Lines',
    nameEs: 'Líneas de Nazca',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Mysterious ancient geoglyphs best viewed from the air.',
    descriptionEs: 'Misteriosos geoglifos antiguos mejor vistos desde el aire.',
    highlights: ['Scenic Flights', 'Observation Tower', 'Chauchilla Cemetery', 'Aqueducts'],
    highlightsEs: ['Vuelos Panorámicos', 'Torre de Observación', 'Cementerio Chauchilla', 'Acueductos'],
    familyFriendly: false,
  },
  {
    slug: 'mancora',
    name: 'Mancora',
    nameEs: 'Máncora',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Peru\'s premier beach destination with warm waters year-round.',
    descriptionEs: 'El principal destino de playa de Perú con aguas cálidas todo el año.',
    highlights: ['Beaches', 'Surfing', 'Whale Watching', 'Seafood'],
    highlightsEs: ['Playas', 'Surf', 'Avistamiento de Ballenas', 'Mariscos'],
    familyFriendly: true,
  },
  {
    slug: 'trujillo',
    name: 'Trujillo',
    nameEs: 'Trujillo',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Gateway to ancient Chan Chan and the fascinating Moche civilization ruins.',
    descriptionEs: 'Puerta de entrada al antiguo Chan Chan y las fascinantes ruinas de la civilización Moche.',
    highlights: ['Chan Chan', 'Huacas del Sol y Luna', 'Colonial Center', 'Huanchaco Beach'],
    highlightsEs: ['Chan Chan', 'Huacas del Sol y Luna', 'Centro Colonial', 'Playa Huanchaco'],
    familyFriendly: true,
  },
];

export default function DestinationsPage() {
  const { t, locale } = useI18n();

  const regions = [
    { id: 'Coast', name: locale === 'es' ? 'Costa' : 'Coast' },
    { id: 'Highlands', name: locale === 'es' ? 'Sierra' : 'Highlands' },
    { id: 'Jungle', name: locale === 'es' ? 'Selva' : 'Jungle' },
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

      {/* Destinations by Region */}
      {regions.map((region) => {
        const regionDestinations = destinations.filter(d => d.region === region.id);
        if (regionDestinations.length === 0) return null;

        return (
          <section key={region.id} className="py-12 lg:py-16 odd:bg-white even:bg-peru-sand/30">
            <div className="container-peru">
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-8">
                {region.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionDestinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    href={`/destinations/${dest.slug}/`}
                    className="card group overflow-hidden"
                  >
                    <div className="relative h-48 bg-gradient-to-br from-peru-gold to-peru-terracotta">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MapPin className="w-16 h-16 text-white/50" />
                      </div>
                      {dest.familyFriendly && (
                        <div className="absolute top-4 right-4">
                          <span className="badge bg-peru-jungle text-white text-xs">
                            {t('features.kid_friendly')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-peru-earth mb-2 group-hover:text-peru-terracotta transition-colors">
                        {locale === 'es' ? dest.nameEs : dest.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {locale === 'es' ? dest.descriptionEs : dest.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(locale === 'es' ? dest.highlightsEs : dest.highlights).slice(0, 3).map((h, i) => (
                          <span key={i} className="text-xs bg-peru-sand px-2 py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-peru-terracotta font-medium">
                        {t('common.learn_more')}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
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
