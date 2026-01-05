'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { itineraries } from '@/data/itineraries';
import { MapPin, ArrowLeft, ChevronRight, CheckCircle, Star } from 'lucide-react';

const destinationsData: Record<string, {
  name: string;
  nameEs: string;
  region: string;
  regionEs: string;
  description: string;
  descriptionEs: string;
  longDescription: string;
  longDescriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyTips: string[];
  familyTipsEs: string[];
  bestTime: string;
  bestTimeEs: string;
  altitude?: string;
}> = {
  'lima': {
    name: 'Lima',
    nameEs: 'Lima',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Peru\'s vibrant capital city',
    descriptionEs: 'La vibrante capital de Perú',
    longDescription: 'Lima is a fascinating blend of colonial grandeur, modern innovation, and world-class cuisine. As the gastronomic capital of South America, it offers incredible food experiences for families. The Miraflores district provides safe, beautiful parks and coastal walks, while the historic center showcases stunning architecture.',
    longDescriptionEs: 'Lima es una fascinante mezcla de grandeza colonial, innovación moderna y cocina de clase mundial. Como capital gastronómica de Sudamérica, ofrece increíbles experiencias culinarias para familias. El distrito de Miraflores brinda parques seguros y hermosos paseos costeros, mientras el centro histórico muestra impresionante arquitectura.',
    highlights: ['Miraflores Parks', 'Larco Museum', 'Historic Center', 'Food Tours', 'Parque Kennedy', 'Magic Water Circuit'],
    highlightsEs: ['Parques de Miraflores', 'Museo Larco', 'Centro Histórico', 'Tours Gastronómicos', 'Parque Kennedy', 'Circuito Mágico del Agua'],
    familyTips: ['Visit the Magic Water Circuit at night', 'Take a bike tour along the Malecón', 'Try a family-friendly cooking class', 'Visit the cats at Parque Kennedy'],
    familyTipsEs: ['Visita el Circuito Mágico del Agua de noche', 'Haz un tour en bicicleta por el Malecón', 'Toma una clase de cocina familiar', 'Visita los gatos del Parque Kennedy'],
    bestTime: 'December to April (summer)',
    bestTimeEs: 'Diciembre a abril (verano)',
  },
  'cusco': {
    name: 'Cusco',
    nameEs: 'Cusco',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The ancient Inca capital',
    descriptionEs: 'La antigua capital Inca',
    longDescription: 'Cusco is the historic heart of the Inca Empire and gateway to Machu Picchu. This UNESCO World Heritage city offers incredible history at every turn. The cobblestone streets reveal Inca foundations beneath colonial buildings, and the vibrant markets and museums bring the past to life for children.',
    longDescriptionEs: 'Cusco es el corazón histórico del Imperio Inca y puerta de entrada a Machu Picchu. Esta ciudad Patrimonio de la Humanidad de la UNESCO ofrece increíble historia en cada esquina. Las calles empedradas revelan cimientos incas bajo edificios coloniales, y los vibrantes mercados y museos traen el pasado a la vida para los niños.',
    highlights: ['Plaza de Armas', 'San Pedro Market', 'Sacsayhuaman', 'Chocolate Making', 'Alpaca Visits', 'Walking Tours'],
    highlightsEs: ['Plaza de Armas', 'Mercado San Pedro', 'Sacsayhuaman', 'Hacer Chocolate', 'Visitas a Alpacas', 'Tours a Pie'],
    familyTips: ['Allow 2-3 days to acclimatize', 'Drink coca tea', 'Stay hydrated', 'Take it slow the first day', 'Book a chocolate workshop'],
    familyTipsEs: ['Permite 2-3 días para aclimatarse', 'Toma té de coca', 'Mantente hidratado', 'Tómalo con calma el primer día', 'Reserva un taller de chocolate'],
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a octubre (temporada seca)',
    altitude: '3,400m (11,150ft)',
  },
  'machu-picchu': {
    name: 'Machu Picchu',
    nameEs: 'Machu Picchu',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'Wonder of the World',
    descriptionEs: 'Maravilla del Mundo',
    longDescription: 'Machu Picchu is the bucket-list destination for every Peru visitor. This 15th-century Inca citadel sits dramatically between mountain peaks, shrouded in mystery and beauty. The train journey through the Sacred Valley is an adventure in itself, and the ruins captivate visitors of all ages.',
    longDescriptionEs: 'Machu Picchu es el destino obligado para todo visitante de Perú. Esta ciudadela Inca del siglo XV se asienta dramáticamente entre picos montañosos, envuelta en misterio y belleza. El viaje en tren por el Valle Sagrado es una aventura en sí, y las ruinas cautivan a visitantes de todas las edades.',
    highlights: ['Citadel Tour', 'Train Journey', 'Sun Gate', 'Inca Bridge', 'Aguas Calientes', 'Guided Tours'],
    highlightsEs: ['Tour de la Ciudadela', 'Viaje en Tren', 'Puerta del Sol', 'Puente Inca', 'Aguas Calientes', 'Tours Guiados'],
    familyTips: ['Book tickets well in advance', 'Bring rain gear', 'Wear comfortable shoes', 'Start early to avoid crowds', 'Bring snacks and water'],
    familyTipsEs: ['Reserva boletos con anticipación', 'Trae ropa para lluvia', 'Usa zapatos cómodos', 'Comienza temprano para evitar multitudes', 'Trae snacks y agua'],
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a octubre (temporada seca)',
    altitude: '2,430m (7,970ft)',
  },
  'sacred-valley': {
    name: 'Sacred Valley',
    nameEs: 'Valle Sagrado',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'Beautiful Andean valley',
    descriptionEs: 'Hermoso valle andino',
    longDescription: 'The Sacred Valley of the Incas stretches between Cusco and Machu Picchu, offering stunning scenery and incredible archaeological sites at a lower altitude. This is the perfect place for families to explore Inca ruins, visit traditional villages, and experience Andean culture.',
    longDescriptionEs: 'El Valle Sagrado de los Incas se extiende entre Cusco y Machu Picchu, ofreciendo paisajes impresionantes e increíbles sitios arqueológicos a menor altitud. Es el lugar perfecto para que las familias exploren ruinas incas, visiten pueblos tradicionales y experimenten la cultura andina.',
    highlights: ['Ollantaytambo', 'Pisac Market', 'Moray', 'Maras Salt Mines', 'Alpaca Farms', 'Weaving Demonstrations'],
    highlightsEs: ['Ollantaytambo', 'Mercado de Pisac', 'Moray', 'Salineras de Maras', 'Granjas de Alpacas', 'Demostraciones de Tejido'],
    familyTips: ['Spend at least one night here', 'Visit Pisac market on Sunday', 'Lower altitude helps with acclimatization', 'Great alpaca interactions'],
    familyTipsEs: ['Pasa al menos una noche aquí', 'Visita el mercado de Pisac el domingo', 'La menor altitud ayuda con la aclimatación', 'Grandes interacciones con alpacas'],
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a octubre (temporada seca)',
    altitude: '2,800m (9,200ft)',
  },
  'amazon': {
    name: 'Amazon Rainforest',
    nameEs: 'Selva Amazónica',
    region: 'Jungle',
    regionEs: 'Selva',
    description: 'Wildlife paradise',
    descriptionEs: 'Paraíso de vida silvestre',
    longDescription: 'The Peruvian Amazon is one of the most biodiverse places on Earth. From Puerto Maldonado to Iquitos, eco-lodges offer immersive jungle experiences perfect for adventurous families. Spot monkeys, caimans, macaws, and maybe even pink river dolphins!',
    longDescriptionEs: 'La Amazonía peruana es uno de los lugares más biodiversos del planeta. Desde Puerto Maldonado hasta Iquitos, los eco-lodges ofrecen experiencias inmersivas en la selva perfectas para familias aventureras. ¡Observa monos, caimanes, guacamayos y quizás hasta delfines rosados!',
    highlights: ['Wildlife Spotting', 'Canopy Walks', 'Night Jungle Walks', 'Piranha Fishing', 'Indigenous Communities', 'Pink Dolphins'],
    highlightsEs: ['Avistamiento de Fauna', 'Caminatas en Canopy', 'Caminatas Nocturnas', 'Pesca de Pirañas', 'Comunidades Indígenas', 'Delfines Rosados'],
    familyTips: ['Choose a family-friendly lodge', 'Bring insect repellent', 'Pack light, quick-dry clothing', 'Best for kids 6+'],
    familyTipsEs: ['Elige un lodge familiar', 'Trae repelente de insectos', 'Empaca ropa ligera de secado rápido', 'Mejor para niños mayores de 6'],
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a octubre (temporada seca)',
  },
  'lake-titicaca': {
    name: 'Lake Titicaca',
    nameEs: 'Lago Titicaca',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'Highest navigable lake',
    descriptionEs: 'Lago navegable más alto',
    longDescription: 'Lake Titicaca is the world\'s highest navigable lake and holds deep cultural significance. The unique Uros floating islands, made entirely of reeds, fascinate children and adults alike. Visiting Taquile Island offers insight into traditional Andean life.',
    longDescriptionEs: 'El Lago Titicaca es el lago navegable más alto del mundo y tiene profunda significancia cultural. Las únicas islas flotantes de los Uros, hechas completamente de totora, fascinan a niños y adultos por igual. Visitar la Isla Taquile ofrece perspectivas de la vida tradicional andina.',
    highlights: ['Uros Floating Islands', 'Taquile Island', 'Amantani Homestay', 'Puno City', 'Boat Tours', 'Traditional Textiles'],
    highlightsEs: ['Islas Flotantes de los Uros', 'Isla Taquile', 'Estadía en Amantaní', 'Ciudad de Puno', 'Tours en Bote', 'Textiles Tradicionales'],
    familyTips: ['Dress warmly - it\'s cold!', 'Allow time to acclimatize', 'Consider a homestay experience', 'Buy handmade crafts'],
    familyTipsEs: ['Vístete abrigado - ¡hace frío!', 'Permite tiempo para aclimatarse', 'Considera una experiencia de homestay', 'Compra artesanías hechas a mano'],
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a octubre (temporada seca)',
    altitude: '3,812m (12,507ft)',
  },
  'arequipa': {
    name: 'Arequipa',
    nameEs: 'Arequipa',
    region: 'Highlands',
    regionEs: 'Sierra',
    description: 'The White City',
    descriptionEs: 'La Ciudad Blanca',
    longDescription: 'Arequipa is Peru\'s second-largest city and is known as the "White City" for its beautiful colonial buildings made of white volcanic stone. Surrounded by volcanoes and close to the stunning Colca Canyon, it offers culture and adventure.',
    longDescriptionEs: 'Arequipa es la segunda ciudad más grande de Perú y es conocida como la "Ciudad Blanca" por sus hermosos edificios coloniales hechos de piedra volcánica blanca. Rodeada de volcanes y cerca del impresionante Cañón del Colca, ofrece cultura y aventura.',
    highlights: ['Santa Catalina Monastery', 'Colca Canyon', 'Condor Watching', 'Local Cuisine', 'Plaza de Armas', 'Yanahuara Viewpoint'],
    highlightsEs: ['Monasterio Santa Catalina', 'Cañón del Colca', 'Observación de Cóndores', 'Cocina Local', 'Plaza de Armas', 'Mirador de Yanahuara'],
    familyTips: ['Great food scene', 'Visit Colca for condors', 'Lower altitude than Cusco', 'Beautiful colonial center'],
    familyTipsEs: ['Gran escena gastronómica', 'Visita Colca para ver cóndores', 'Menor altitud que Cusco', 'Hermoso centro colonial'],
    bestTime: 'May to November',
    bestTimeEs: 'Mayo a noviembre',
    altitude: '2,335m (7,660ft)',
  },
  'paracas': {
    name: 'Paracas',
    nameEs: 'Paracas',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Coastal wildlife reserve',
    descriptionEs: 'Reserva costera de vida silvestre',
    longDescription: 'Paracas is a coastal desert reserve known for its dramatic landscapes and incredible marine wildlife. The Ballestas Islands boat tour is a highlight, offering sightings of sea lions, penguins, and thousands of seabirds.',
    longDescriptionEs: 'Paracas es una reserva desértica costera conocida por sus dramáticos paisajes e increíble vida marina. El tour en bote a las Islas Ballestas es un punto destacado, ofreciendo avistamientos de lobos marinos, pingüinos y miles de aves marinas.',
    highlights: ['Ballestas Islands', 'National Reserve', 'Red Beach', 'Sea Lions', 'Penguins', 'Boat Tours'],
    highlightsEs: ['Islas Ballestas', 'Reserva Nacional', 'Playa Roja', 'Lobos Marinos', 'Pingüinos', 'Tours en Bote'],
    familyTips: ['No altitude issues!', 'Combine with Huacachina', 'Easy day trip from Lima', 'Bring sunscreen and hat'],
    familyTipsEs: ['¡Sin problemas de altitud!', 'Combina con Huacachina', 'Fácil excursión de un día desde Lima', 'Trae protector solar y sombrero'],
    bestTime: 'Year-round',
    bestTimeEs: 'Todo el año',
  },
  'huacachina': {
    name: 'Huacachina',
    nameEs: 'Huacachina',
    region: 'Coast',
    regionEs: 'Costa',
    description: 'Desert oasis adventure',
    descriptionEs: 'Aventura en oasis del desierto',
    longDescription: 'Huacachina is a magical desert oasis surrounded by towering sand dunes. This tiny village built around a natural lagoon offers thrilling sandboarding and dune buggy adventures that kids and adults love.',
    longDescriptionEs: 'Huacachina es un mágico oasis en el desierto rodeado de imponentes dunas de arena. Este pequeño pueblo construido alrededor de una laguna natural ofrece emocionantes aventuras de sandboard y buggy que niños y adultos adoran.',
    highlights: ['Sandboarding', 'Dune Buggy', 'Sunset Views', 'Oasis Lake', 'Photography', 'Adventure Sports'],
    highlightsEs: ['Sandboard', 'Buggy en Dunas', 'Vistas del Atardecer', 'Laguna del Oasis', 'Fotografía', 'Deportes de Aventura'],
    familyTips: ['Best at sunset', 'Great for older kids', 'Hold on tight in the buggy!', 'Bring a bandana for sand'],
    familyTipsEs: ['Mejor al atardecer', 'Genial para niños mayores', '¡Agárrate fuerte en el buggy!', 'Trae una bandana para la arena'],
    bestTime: 'Year-round',
    bestTimeEs: 'Todo el año',
  },
};

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const { t, locale } = useI18n();
  const destination = destinationsData[params.slug];

  if (!destination) {
    return (
      <div className="container-peru py-24 text-center">
        <h1 className="text-3xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? 'Destino no encontrado' : 'Destination not found'}
        </h1>
        <Link href="/destinations/" className="btn-primary">
          {locale === 'es' ? '← Volver a Destinos' : '← Back to Destinations'}
        </Link>
      </div>
    );
  }

  const relatedItineraries = itineraries.filter(i =>
    i.dayByDay.some(d => d.locations.some(l =>
      l.toLowerCase().includes(params.slug.replace('-', ' '))
    ))
  ).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru">
          <Link
            href="/destinations/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {locale === 'es' ? '← Volver a Destinos' : '← Back to Destinations'}
          </Link>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="badge bg-white/20 text-white">
              {locale === 'es' ? destination.regionEs : destination.region}
            </span>
            {destination.altitude && (
              <span className="badge bg-white/20 text-white">
                {destination.altitude}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
            {locale === 'es' ? destination.nameEs : destination.name}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {locale === 'es' ? destination.descriptionEs : destination.description}
          </p>
        </div>
      </section>

      <div className="container-peru py-12 lg:py-16">
        <div className="lg:flex lg:gap-12">
          {/* Main Content */}
          <div className="lg:flex-1">
            {/* Description */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {locale === 'es' ? destination.longDescriptionEs : destination.longDescription}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                {locale === 'es' ? 'Destacados' : 'Highlights'}
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(locale === 'es' ? destination.highlightsEs : destination.highlights).map((h, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-peru-sand/50 rounded-lg">
                    <Star className="w-5 h-5 text-peru-gold flex-shrink-0" />
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Family Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                {locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}
              </h2>
              <div className="bg-peru-jungle/10 rounded-xl p-6">
                <ul className="space-y-3">
                  {(locale === 'es' ? destination.familyTipsEs : destination.familyTips).map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-peru-jungle flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Related Itineraries */}
            {relatedItineraries.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                  {locale === 'es' ? 'Itinerarios que Incluyen' : 'Itineraries Including'} {locale === 'es' ? destination.nameEs : destination.name}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedItineraries.map((it) => (
                    <Link
                      key={it.id}
                      href={`/itineraries/${it.slug}/`}
                      className="card p-4 hover:shadow-lg"
                    >
                      <span className="badge-gold text-xs mb-2">
                        {it.duration} {t('itineraries.days')}
                      </span>
                      <h3 className="font-display font-bold text-peru-earth">
                        {locale === 'es' ? it.titleEs : it.title}
                      </h3>
                      <div className="mt-2 text-peru-gold font-bold">${it.price}</div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0 mt-12 lg:mt-0">
            <div className="sticky top-40 space-y-6">
              {/* Quick Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-display font-bold text-peru-earth mb-4">
                  {locale === 'es' ? 'Información Rápida' : 'Quick Info'}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500">{locale === 'es' ? 'Región' : 'Region'}</div>
                    <div className="font-medium">{locale === 'es' ? destination.regionEs : destination.region}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{locale === 'es' ? 'Mejor Época' : 'Best Time'}</div>
                    <div className="font-medium">{locale === 'es' ? destination.bestTimeEs : destination.bestTime}</div>
                  </div>
                  {destination.altitude && (
                    <div>
                      <div className="text-sm text-gray-500">{locale === 'es' ? 'Altitud' : 'Altitude'}</div>
                      <div className="font-medium">{destination.altitude}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-peru-earth rounded-xl p-6 text-white text-center">
                <h3 className="font-display font-bold text-xl mb-2">
                  {locale === 'es' ? '¿Listo para visitar?' : 'Ready to visit?'}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {locale === 'es'
                    ? 'Explora nuestros itinerarios que incluyen este destino.'
                    : 'Explore our itineraries that include this destination.'}
                </p>
                <Link href="/itineraries/" className="w-full btn-gold block">
                  {t('hero.cta')}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(destinationsData).map((slug) => ({ slug }));
}
