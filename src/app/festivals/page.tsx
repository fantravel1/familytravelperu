'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Calendar,
  MapPin,
  Music,
  PartyPopper,
  Baby,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  Star,
  AlertTriangle,
  Camera
} from 'lucide-react';

interface Festival {
  id: string;
  name: string;
  nameEs: string;
  month: number;
  dates: string;
  datesEs: string;
  location: string;
  locationEs: string;
  description: string;
  descriptionEs: string;
  kidFriendly: boolean;
  kidRating: 1 | 2 | 3;
  highlights: string[];
  highlightsEs: string[];
  tips: string[];
  tipsEs: string[];
  crowdLevel: 'low' | 'medium' | 'high';
}

const festivals: Festival[] = [
  {
    id: 'carnaval',
    name: 'Carnaval',
    nameEs: 'Carnaval',
    month: 2,
    dates: 'February (varies)',
    datesEs: 'Febrero (varía)',
    location: 'Nationwide, especially Cajamarca, Puno, Ayacucho',
    locationEs: 'Todo el país, especialmente Cajamarca, Puno, Ayacucho',
    description: 'Peru\'s biggest party! Water fights, colorful parades, and dancing fill the streets for several days.',
    descriptionEs: '¡La fiesta más grande de Perú! Guerras de agua, desfiles coloridos y baile llenan las calles por varios días.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Water balloon fights in the streets',
      'Colorful costumes and masks',
      'Traditional music and dancing',
      'Yunza tree ceremony'
    ],
    highlightsEs: [
      'Guerras de globos de agua en las calles',
      'Disfraces y máscaras coloridas',
      'Música y baile tradicional',
      'Ceremonia del árbol de yunza'
    ],
    tips: [
      'Bring waterproof bags for electronics',
      'Wear clothes that can get wet',
      'Cajamarca has the biggest celebration'
    ],
    tipsEs: [
      'Trae bolsas impermeables para electrónicos',
      'Usa ropa que pueda mojarse',
      'Cajamarca tiene la celebración más grande'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'semana-santa',
    name: 'Semana Santa (Holy Week)',
    nameEs: 'Semana Santa',
    month: 3,
    dates: 'March/April (varies)',
    datesEs: 'Marzo/Abril (varía)',
    location: 'Ayacucho, Cusco, Arequipa',
    locationEs: 'Ayacucho, Cusco, Arequipa',
    description: 'Solemn religious processions with elaborate floats, carpets of flowers, and traditional ceremonies.',
    descriptionEs: 'Procesiones religiosas solemnes con carrozas elaboradas, alfombras de flores y ceremonias tradicionales.',
    kidFriendly: true,
    kidRating: 2,
    highlights: [
      'Flower carpet displays (alfombras)',
      'Candlelit night processions',
      'Traditional foods',
      'Church ceremonies'
    ],
    highlightsEs: [
      'Exhibiciones de alfombras de flores',
      'Procesiones nocturnas con velas',
      'Comidas tradicionales',
      'Ceremonias religiosas'
    ],
    tips: [
      'Ayacucho has Peru\'s most famous celebration',
      'Book accommodation months in advance',
      'Dress modestly for church events'
    ],
    tipsEs: [
      'Ayacucho tiene la celebración más famosa de Perú',
      'Reserva alojamiento con meses de anticipación',
      'Vístete modestamente para eventos religiosos'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'inti-raymi',
    name: 'Inti Raymi (Festival of the Sun)',
    nameEs: 'Inti Raymi (Festival del Sol)',
    month: 6,
    dates: 'June 24',
    datesEs: '24 de Junio',
    location: 'Cusco (Sacsayhuamán)',
    locationEs: 'Cusco (Sacsayhuamán)',
    description: 'Ancient Inca celebration of the winter solstice. Massive theatrical reenactment at Sacsayhuamán.',
    descriptionEs: 'Antigua celebración inca del solsticio de invierno. Representación teatral masiva en Sacsayhuamán.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Colorful Inca costumes',
      'Theatrical ceremonies',
      'Music and dancing',
      'Historical reenactments'
    ],
    highlightsEs: [
      'Coloridos trajes incas',
      'Ceremonias teatrales',
      'Música y baile',
      'Representaciones históricas'
    ],
    tips: [
      'Buy tickets in advance for Sacsayhuamán seating',
      'Free celebrations in Plaza de Armas',
      'Bring warm clothes - it\'s winter!'
    ],
    tipsEs: [
      'Compra boletos con anticipación para asientos en Sacsayhuamán',
      'Celebraciones gratuitas en la Plaza de Armas',
      '¡Trae ropa abrigada - es invierno!'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'virgin-carmen',
    name: 'Virgen del Carmen',
    nameEs: 'Virgen del Carmen',
    month: 7,
    dates: 'July 15-18',
    datesEs: '15-18 de Julio',
    location: 'Paucartambo (near Cusco)',
    locationEs: 'Paucartambo (cerca de Cusco)',
    description: 'Spectacular masked dances, colorful costumes, and religious processions in a picturesque village.',
    descriptionEs: 'Espectaculares danzas con máscaras, trajes coloridos y procesiones religiosas en un pintoresco pueblo.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Elaborate masks and costumes',
      'Traditional dances (Qhapaq Negro, Saqra)',
      'Devils vs angels performances',
      'Fireworks'
    ],
    highlightsEs: [
      'Máscaras y trajes elaborados',
      'Danzas tradicionales (Qhapaq Negro, Saqra)',
      'Presentaciones de diablos vs ángeles',
      'Fuegos artificiales'
    ],
    tips: [
      '3-hour drive from Cusco',
      'Accommodation is very limited - book early',
      'Dress warmly for cold mountain nights'
    ],
    tipsEs: [
      '3 horas en auto desde Cusco',
      'El alojamiento es muy limitado - reserva temprano',
      'Vístete abrigado para las frías noches de montaña'
    ],
    crowdLevel: 'medium'
  },
  {
    id: 'fiestas-patrias',
    name: 'Fiestas Patrias (Independence Day)',
    nameEs: 'Fiestas Patrias',
    month: 7,
    dates: 'July 28-29',
    datesEs: '28-29 de Julio',
    location: 'Nationwide',
    locationEs: 'Todo el país',
    description: 'Peru\'s Independence Day celebrations with parades, fireworks, and patriotic festivities.',
    descriptionEs: 'Celebraciones del Día de la Independencia de Perú con desfiles, fuegos artificiales y festividades patrióticas.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Military parades',
      'Traditional food fairs',
      'Fireworks displays',
      'Flag-waving celebrations'
    ],
    highlightsEs: [
      'Desfiles militares',
      'Ferias de comida tradicional',
      'Espectáculos de fuegos artificiales',
      'Celebraciones con banderas'
    ],
    tips: [
      'Many businesses close for the long weekend',
      'Book transportation and hotels early',
      'Great time for traditional food'
    ],
    tipsEs: [
      'Muchos negocios cierran por el fin de semana largo',
      'Reserva transporte y hoteles temprano',
      'Gran momento para comida tradicional'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'qoyllur-riti',
    name: 'Qoyllur Rit\'i',
    nameEs: 'Qoyllur Rit\'i',
    month: 5,
    dates: 'May/June (before Corpus Christi)',
    datesEs: 'Mayo/Junio (antes de Corpus Christi)',
    location: 'Sinakara Valley (near Cusco)',
    locationEs: 'Valle de Sinakara (cerca de Cusco)',
    description: 'Ancient pilgrimage to a glacier at 4,700m. Combines Catholic and Andean traditions.',
    descriptionEs: 'Antigua peregrinación a un glaciar a 4,700m. Combina tradiciones católicas y andinas.',
    kidFriendly: false,
    kidRating: 1,
    highlights: [
      'Pilgrimage to glacier',
      'Traditional dancers from across Peru',
      'Unique blend of religions',
      'Stunning mountain scenery'
    ],
    highlightsEs: [
      'Peregrinación al glaciar',
      'Bailarines tradicionales de todo Perú',
      'Mezcla única de religiones',
      'Paisaje de montaña impresionante'
    ],
    tips: [
      'Extreme altitude - not for children',
      'Cold conditions, primitive camping',
      'Requires good physical condition'
    ],
    tipsEs: [
      'Altitud extrema - no para niños',
      'Condiciones frías, campamento primitivo',
      'Requiere buena condición física'
    ],
    crowdLevel: 'medium'
  },
  {
    id: 'mistura',
    name: 'Mistura Food Festival',
    nameEs: 'Festival Gastronómico Mistura',
    month: 9,
    dates: 'September (varies)',
    datesEs: 'Septiembre (varía)',
    location: 'Lima',
    locationEs: 'Lima',
    description: 'Latin America\'s biggest food festival celebrating Peru\'s incredible culinary diversity.',
    descriptionEs: 'El festival gastronómico más grande de Latinoamérica celebrando la increíble diversidad culinaria de Perú.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Dishes from across Peru',
      'Celebrity chef demonstrations',
      'Street food market',
      'Cooking workshops'
    ],
    highlightsEs: [
      'Platos de todo el Perú',
      'Demostraciones de chefs famosos',
      'Mercado de comida callejera',
      'Talleres de cocina'
    ],
    tips: [
      'Buy tickets online in advance',
      'Go on weekdays to avoid biggest crowds',
      'Bring cash for food stalls'
    ],
    tipsEs: [
      'Compra boletos en línea por adelantado',
      'Ve entre semana para evitar las mayores multitudes',
      'Trae efectivo para los puestos de comida'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'senor-muruhuay',
    name: 'Lord of Muruhuay',
    nameEs: 'Señor de Muruhuay',
    month: 5,
    dates: 'May (month-long)',
    datesEs: 'Mayo (todo el mes)',
    location: 'Tarma, Junín',
    locationEs: 'Tarma, Junín',
    description: 'Beautiful celebration featuring incredible flower carpets and religious processions.',
    descriptionEs: 'Hermosa celebración con increíbles alfombras de flores y procesiones religiosas.',
    kidFriendly: true,
    kidRating: 2,
    highlights: [
      'Stunning flower carpet displays',
      'Religious processions',
      'Traditional dances',
      'Local gastronomy'
    ],
    highlightsEs: [
      'Impresionantes alfombras de flores',
      'Procesiones religiosas',
      'Danzas tradicionales',
      'Gastronomía local'
    ],
    tips: [
      'Tarma is known as "City of Flowers"',
      '8 hours from Lima',
      'Mild climate compared to other highlands'
    ],
    tipsEs: [
      'Tarma es conocida como "Ciudad de las Flores"',
      '8 horas desde Lima',
      'Clima templado comparado con otras zonas de sierra'
    ],
    crowdLevel: 'medium'
  },
  {
    id: 'candelaria',
    name: 'Virgen de la Candelaria',
    nameEs: 'Virgen de la Candelaria',
    month: 2,
    dates: 'February 2-11',
    datesEs: '2-11 de Febrero',
    location: 'Puno',
    locationEs: 'Puno',
    description: 'One of South America\'s largest folkloric festivals with thousands of dancers and musicians.',
    descriptionEs: 'Uno de los festivales folclóricos más grandes de Sudamérica con miles de bailarines y músicos.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Over 40,000 dancers',
      'Elaborate devil masks (diablada)',
      'Brass band competitions',
      'Colorful parades'
    ],
    highlightsEs: [
      'Más de 40,000 bailarines',
      'Elaboradas máscaras de diablos (diablada)',
      'Competencias de bandas de bronce',
      'Desfiles coloridos'
    ],
    tips: [
      'UNESCO Intangible Cultural Heritage',
      'Book accommodation 6+ months ahead',
      'Altitude in Puno is high (3,800m)'
    ],
    tipsEs: [
      'Patrimonio Cultural Inmaterial de UNESCO',
      'Reserva alojamiento con 6+ meses de anticipación',
      'La altitud en Puno es alta (3,800m)'
    ],
    crowdLevel: 'high'
  },
  {
    id: 'todos-santos',
    name: 'Todos Santos (Day of the Dead)',
    nameEs: 'Todos Santos (Día de los Muertos)',
    month: 11,
    dates: 'November 1-2',
    datesEs: '1-2 de Noviembre',
    location: 'Nationwide, especially highlands',
    locationEs: 'Todo el país, especialmente la sierra',
    description: 'Families honor deceased loved ones with cemetery visits, special foods, and traditions.',
    descriptionEs: 'Las familias honran a sus seres queridos fallecidos con visitas al cementerio, comidas especiales y tradiciones.',
    kidFriendly: true,
    kidRating: 2,
    highlights: [
      'Cemetery decorations',
      'Traditional bread (pan de muerto)',
      'Family gatherings',
      'Colorful offerings'
    ],
    highlightsEs: [
      'Decoraciones de cementerios',
      'Pan tradicional (pan de muerto)',
      'Reuniones familiares',
      'Ofrendas coloridas'
    ],
    tips: [
      'Respectful observation of cemetery visits welcome',
      'Try traditional "guagua" bread',
      'Quieter than Mexican Día de los Muertos'
    ],
    tipsEs: [
      'Observación respetuosa de visitas al cementerio es bienvenida',
      'Prueba el pan tradicional "guagua"',
      'Más tranquilo que el Día de los Muertos mexicano'
    ],
    crowdLevel: 'low'
  },
  {
    id: 'christmas',
    name: 'Santuranticuy Christmas Market',
    nameEs: 'Mercado de Santuranticuy',
    month: 12,
    dates: 'December 24',
    datesEs: '24 de Diciembre',
    location: 'Cusco (Plaza de Armas)',
    locationEs: 'Cusco (Plaza de Armas)',
    description: 'Peru\'s largest Christmas market selling nativity figures, crafts, and traditional items.',
    descriptionEs: 'El mercado navideño más grande de Perú vendiendo figuras de nacimiento, artesanías y artículos tradicionales.',
    kidFriendly: true,
    kidRating: 3,
    highlights: [
      'Handmade nativity figures',
      'Traditional crafts',
      'Hot chocolate and treats',
      'Festive atmosphere'
    ],
    highlightsEs: [
      'Figuras de nacimiento hechas a mano',
      'Artesanías tradicionales',
      'Chocolate caliente y dulces',
      'Ambiente festivo'
    ],
    tips: [
      'Market runs from early morning',
      'Great for unique souvenirs',
      'Combine with Christmas Eve mass at Cathedral'
    ],
    tipsEs: [
      'El mercado empieza desde temprano en la mañana',
      'Ideal para souvenirs únicos',
      'Combina con misa de Nochebuena en la Catedral'
    ],
    crowdLevel: 'medium'
  }
];

const months = [
  { num: 1, en: 'January', es: 'Enero', season: 'wet' },
  { num: 2, en: 'February', es: 'Febrero', season: 'wet' },
  { num: 3, en: 'March', es: 'Marzo', season: 'wet' },
  { num: 4, en: 'April', es: 'Abril', season: 'shoulder' },
  { num: 5, en: 'May', es: 'Mayo', season: 'dry' },
  { num: 6, en: 'June', es: 'Junio', season: 'dry' },
  { num: 7, en: 'July', es: 'Julio', season: 'dry' },
  { num: 8, en: 'August', es: 'Agosto', season: 'dry' },
  { num: 9, en: 'September', es: 'Septiembre', season: 'dry' },
  { num: 10, en: 'October', es: 'Octubre', season: 'shoulder' },
  { num: 11, en: 'November', es: 'Noviembre', season: 'wet' },
  { num: 12, en: 'December', es: 'Diciembre', season: 'wet' }
];

export default function FestivalsPage() {
  const { locale } = useI18n();
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [showKidFriendlyOnly, setShowKidFriendlyOnly] = useState(false);

  const filteredFestivals = festivals.filter(f => {
    if (selectedMonth && f.month !== selectedMonth) return false;
    if (showKidFriendlyOnly && !f.kidFriendly) return false;
    return true;
  });

  const getSeasonIcon = (season: string) => {
    switch (season) {
      case 'wet': return <Snowflake className="h-4 w-4 text-blue-500" />;
      case 'dry': return <Sun className="h-4 w-4 text-yellow-500" />;
      case 'shoulder': return <Leaf className="h-4 w-4 text-green-500" />;
      default: return null;
    }
  };

  const getCrowdColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCrowdLabel = (level: string) => {
    if (locale === 'es') {
      switch (level) {
        case 'low': return 'Poca gente';
        case 'medium': return 'Moderado';
        case 'high': return 'Muy concurrido';
        default: return level;
      }
    }
    switch (level) {
      case 'low': return 'Low crowds';
      case 'medium': return 'Moderate';
      case 'high': return 'Very crowded';
      default: return level;
    }
  };

  const getKidRatingStars = (rating: number) => {
    return Array(3).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-purple-700 to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <PartyPopper className="h-8 w-8" />
              <span className="text-purple-200 font-semibold">
                {locale === 'es' ? 'Festivales y Celebraciones' : 'Festivals & Celebrations'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Calendario de Festivales de Perú'
                : 'Peru Festival Calendar'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Descubre las vibrantes celebraciones de Perú durante todo el año. Planifica tu viaje familiar alrededor de estos eventos únicos.'
                : 'Discover Peru\'s vibrant celebrations throughout the year. Plan your family trip around these unique events.'}
            </p>
          </div>
        </div>
      </section>

      {/* Month Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container-peru">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Month Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedMonth(null)}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  selectedMonth === null
                    ? 'bg-peru-terracotta text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {locale === 'es' ? 'Todos' : 'All'}
              </button>
              {months.map((month) => (
                <button
                  key={month.num}
                  onClick={() => setSelectedMonth(month.num)}
                  className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-all ${
                    selectedMonth === month.num
                      ? 'bg-peru-terracotta text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getSeasonIcon(month.season)}
                  <span>{locale === 'es' ? month.es.substring(0, 3) : month.en.substring(0, 3)}</span>
                </button>
              ))}
            </div>

            {/* Kid-friendly Filter */}
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showKidFriendlyOnly}
                onChange={(e) => setShowKidFriendlyOnly(e.target.checked)}
                className="rounded text-peru-terracotta focus:ring-peru-terracotta"
              />
              <span className="text-sm text-gray-700 flex items-center">
                <Baby className="h-4 w-4 mr-1" />
                {locale === 'es' ? 'Solo apto para niños' : 'Kid-friendly only'}
              </span>
            </label>
          </div>
        </div>
      </section>

      {/* Festival List */}
      <section className="py-12">
        <div className="container-peru">
          {filteredFestivals.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {locale === 'es'
                  ? 'No hay festivales que coincidan con tus filtros.'
                  : 'No festivals match your filters.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredFestivals.map((festival) => (
                <div
                  key={festival.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="bg-gradient-to-r from-peru-earth to-peru-terracotta p-4 text-white">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold">
                          {locale === 'es' ? festival.nameEs : festival.name}
                        </h3>
                        <p className="text-white/80 text-sm flex items-center mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {locale === 'es' ? festival.datesEs : festival.dates}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getCrowdColor(festival.crowdLevel)}`}>
                          {getCrowdLabel(festival.crowdLevel)}
                        </span>
                        {festival.kidFriendly && (
                          <div className="flex items-center bg-white/20 rounded-full px-2 py-1">
                            <Baby className="h-3 w-3 mr-1" />
                            <div className="flex">{getKidRatingStars(festival.kidRating)}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4 mr-1 text-peru-terracotta" />
                      {locale === 'es' ? festival.locationEs : festival.location}
                    </div>

                    <p className="text-gray-700 mb-4">
                      {locale === 'es' ? festival.descriptionEs : festival.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-peru-earth text-sm mb-2 flex items-center">
                        <Star className="h-4 w-4 mr-1 text-peru-gold" />
                        {locale === 'es' ? 'Destacados' : 'Highlights'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {(locale === 'es' ? festival.highlightsEs : festival.highlights).map((h, idx) => (
                          <span key={idx} className="text-xs bg-peru-sand/50 text-peru-earth px-2 py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                      <h4 className="font-semibold text-peru-earth text-sm mb-2 flex items-center">
                        <Camera className="h-4 w-4 mr-1 text-peru-gold" />
                        {locale === 'es' ? 'Consejos' : 'Tips'}
                      </h4>
                      <ul className="space-y-1">
                        {(locale === 'es' ? festival.tipsEs : festival.tips).map((tip, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className="text-peru-terracotta mr-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Family Festival Tips */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Consejos para Familias en Festivales' : 'Festival Tips for Families'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Baby className="h-5 w-5 mr-2 text-peru-terracotta" />
                  {locale === 'es' ? 'Preparación' : 'Preparation'}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    locale === 'es' ? 'Reserva alojamiento con meses de anticipación para festivales grandes' : 'Book accommodation months ahead for major festivals',
                    locale === 'es' ? 'Explica a los niños qué esperar - algunas máscaras pueden asustar' : 'Explain to kids what to expect - some masks can be scary',
                    locale === 'es' ? 'Empaca tapones para oídos - los festivales peruanos son RUIDOSOS' : 'Pack ear plugs - Peruvian festivals are LOUD',
                    locale === 'es' ? 'Trae capas de ropa - el clima puede cambiar rápidamente' : 'Bring layers - weather can change quickly'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Music className="h-4 w-4 text-peru-gold mr-2 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
                  {locale === 'es' ? 'Seguridad' : 'Safety'}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    locale === 'es' ? 'Mantén a los niños cerca en multitudes - considera arneses para niños pequeños' : 'Keep kids close in crowds - consider harnesses for toddlers',
                    locale === 'es' ? 'Establece un punto de encuentro en caso de separarse' : 'Establish a meeting point in case you get separated',
                    locale === 'es' ? 'Ten cuidado con los fuegos artificiales - pueden lanzarse al nivel de la calle' : 'Be cautious of fireworks - they may be set off at street level',
                    locale === 'es' ? 'Lleva efectivo en lugar de mostrar objetos de valor' : 'Carry cash rather than displaying valuables'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Legend */}
      <section className="py-8 bg-white">
        <div className="container-peru">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-center font-semibold text-peru-earth mb-4">
              {locale === 'es' ? 'Leyenda de Temporadas' : 'Season Legend'}
            </h3>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                <span>{locale === 'es' ? 'Temporada Seca (May-Oct)' : 'Dry Season (May-Oct)'}</span>
              </div>
              <div className="flex items-center">
                <Snowflake className="h-4 w-4 text-blue-500 mr-2" />
                <span>{locale === 'es' ? 'Temporada de Lluvias (Nov-Mar)' : 'Wet Season (Nov-Mar)'}</span>
              </div>
              <div className="flex items-center">
                <Leaf className="h-4 w-4 text-green-500 mr-2" />
                <span>{locale === 'es' ? 'Transición' : 'Shoulder'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
