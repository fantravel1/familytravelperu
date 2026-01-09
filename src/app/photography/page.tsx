'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Camera,
  Sun,
  Mountain,
  MapPin,
  Clock,
  Baby,
  Smartphone,
  AlertTriangle,
  Check,
  Star,
  Eye,
  Compass
} from 'lucide-react';

interface PhotoSpot {
  id: string;
  name: string;
  nameEs: string;
  location: string;
  locationEs: string;
  description: string;
  descriptionEs: string;
  bestTime: string;
  bestTimeEs: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  kidFriendly: boolean;
  tips: string[];
  tipsEs: string[];
}

interface GearItem {
  name: string;
  nameEs: string;
  essential: boolean;
  description: string;
  descriptionEs: string;
  familyTip: string;
  familyTipEs: string;
}

const photoSpots: PhotoSpot[] = [
  {
    id: 'machu-picchu-sunrise',
    name: 'Machu Picchu Classic View',
    nameEs: 'Vista Clásica de Machu Picchu',
    location: 'Machu Picchu',
    locationEs: 'Machu Picchu',
    description: 'The iconic postcard view from the Guardian House lookout point.',
    descriptionEs: 'La icónica vista de postal desde el mirador de la Casa del Guardián.',
    bestTime: 'First hour after gates open (6-7 AM) or late afternoon (3-4 PM)',
    bestTimeEs: 'Primera hora después de abrir (6-7 AM) o tarde (3-4 PM)',
    difficulty: 'moderate',
    kidFriendly: true,
    tips: [
      'Arrive early to avoid crowds in your shots',
      'Bring a wide-angle lens for the full citadel',
      'Morning mist can add dramatic atmosphere'
    ],
    tipsEs: [
      'Llega temprano para evitar multitudes en tus fotos',
      'Trae un lente gran angular para la ciudadela completa',
      'La neblina matutina puede agregar atmósfera dramática'
    ]
  },
  {
    id: 'rainbow-mountain',
    name: 'Rainbow Mountain (Vinicunca)',
    nameEs: 'Montaña de Colores (Vinicunca)',
    location: 'Cusco Region',
    locationEs: 'Región Cusco',
    description: 'Stunning striped mountain with vibrant natural colors.',
    descriptionEs: 'Impresionante montaña rayada con colores naturales vibrantes.',
    bestTime: 'Mid-morning (9-11 AM) when clouds typically clear',
    bestTimeEs: 'Media mañana (9-11 AM) cuando las nubes suelen despejarse',
    difficulty: 'challenging',
    kidFriendly: false,
    tips: [
      'Use a polarizing filter to enhance colors',
      'Altitude 5,200m - not recommended for young children',
      'Weather changes rapidly - be prepared'
    ],
    tipsEs: [
      'Usa un filtro polarizador para realzar los colores',
      'Altitud 5,200m - no recomendado para niños pequeños',
      'El clima cambia rápidamente - prepárate'
    ]
  },
  {
    id: 'cusco-plaza',
    name: 'Plaza de Armas, Cusco',
    nameEs: 'Plaza de Armas, Cusco',
    location: 'Cusco',
    locationEs: 'Cusco',
    description: 'Beautiful colonial architecture with mountain backdrop.',
    descriptionEs: 'Hermosa arquitectura colonial con telón de fondo de montañas.',
    bestTime: 'Golden hour (6-7 AM or 5-6 PM)',
    bestTimeEs: 'Hora dorada (6-7 AM o 5-6 PM)',
    difficulty: 'easy',
    kidFriendly: true,
    tips: [
      'Cathedral facade is best lit in early morning',
      'Night shots of illuminated buildings are stunning',
      'Include llamas that often roam the plaza'
    ],
    tipsEs: [
      'La fachada de la Catedral se ilumina mejor en la mañana',
      'Las fotos nocturnas de edificios iluminados son impresionantes',
      'Incluye las llamas que suelen pasear por la plaza'
    ]
  },
  {
    id: 'sacred-valley',
    name: 'Moray Terraces',
    nameEs: 'Terrazas de Moray',
    location: 'Sacred Valley',
    locationEs: 'Valle Sagrado',
    description: 'Concentric circular Inca terraces creating unique patterns.',
    descriptionEs: 'Terrazas incas circulares concéntricas creando patrones únicos.',
    bestTime: 'Late afternoon for dramatic shadows',
    bestTimeEs: 'Tarde para sombras dramáticas',
    difficulty: 'easy',
    kidFriendly: true,
    tips: [
      'Drone photography creates amazing geometric shots',
      'Walk around for different angles',
      'Kids love exploring the terraces'
    ],
    tipsEs: [
      'La fotografía con drone crea tomas geométricas increíbles',
      'Camina alrededor para diferentes ángulos',
      'A los niños les encanta explorar las terrazas'
    ]
  },
  {
    id: 'lake-titicaca',
    name: 'Uros Floating Islands',
    nameEs: 'Islas Flotantes de los Uros',
    location: 'Puno',
    locationEs: 'Puno',
    description: 'Unique reed islands with colorful traditional boats.',
    descriptionEs: 'Islas de totora únicas con botes tradicionales coloridos.',
    bestTime: 'Mid-morning when light is soft',
    bestTimeEs: 'Media mañana cuando la luz es suave',
    difficulty: 'easy',
    kidFriendly: true,
    tips: [
      'Ask permission before photographing locals',
      'Bright colors of traditional dress photograph beautifully',
      'Include the reed boats for context'
    ],
    tipsEs: [
      'Pide permiso antes de fotografiar a los locales',
      'Los colores brillantes del traje tradicional fotografían hermosamente',
      'Incluye los botes de totora para contexto'
    ]
  },
  {
    id: 'nazca-lines',
    name: 'Nazca Lines',
    nameEs: 'Líneas de Nazca',
    location: 'Nazca',
    locationEs: 'Nazca',
    description: 'Ancient geoglyphs visible from observation tower or flight.',
    descriptionEs: 'Geoglifos antiguos visibles desde torre de observación o vuelo.',
    bestTime: 'Morning flights have clearer skies',
    bestTimeEs: 'Los vuelos matutinos tienen cielos más despejados',
    difficulty: 'moderate',
    kidFriendly: true,
    tips: [
      'Flight provides best views but can cause motion sickness',
      'Use fast shutter speed from moving plane',
      'Tower shows 2 figures - good for families avoiding flights'
    ],
    tipsEs: [
      'El vuelo ofrece mejores vistas pero puede causar mareo',
      'Usa velocidad de obturación rápida desde el avión en movimiento',
      'La torre muestra 2 figuras - buena opción para familias que evitan vuelos'
    ]
  },
  {
    id: 'lima-miraflores',
    name: 'Miraflores Malecón',
    nameEs: 'Malecón de Miraflores',
    location: 'Lima',
    locationEs: 'Lima',
    description: 'Dramatic Pacific Ocean cliffs with paragliders.',
    descriptionEs: 'Acantilados dramáticos del Océano Pacífico con parapentistas.',
    bestTime: 'Sunset for golden colors over the ocean',
    bestTimeEs: 'Atardecer para colores dorados sobre el océano',
    difficulty: 'easy',
    kidFriendly: true,
    tips: [
      'Include paragliders for scale and interest',
      'Parque del Amor has great sculpture photo ops',
      'Safe, flat area perfect for families'
    ],
    tipsEs: [
      'Incluye parapentistas para escala e interés',
      'El Parque del Amor tiene grandes oportunidades para fotos',
      'Área segura y plana perfecta para familias'
    ]
  },
  {
    id: 'colca-canyon',
    name: 'Cruz del Condor',
    nameEs: 'Cruz del Cóndor',
    location: 'Arequipa Region',
    locationEs: 'Región Arequipa',
    description: 'Condors soaring over one of the world\'s deepest canyons.',
    descriptionEs: 'Cóndores volando sobre uno de los cañones más profundos del mundo.',
    bestTime: 'Early morning (8-10 AM) for condor activity',
    bestTimeEs: 'Temprano en la mañana (8-10 AM) para actividad de cóndores',
    difficulty: 'moderate',
    kidFriendly: true,
    tips: [
      'Telephoto lens essential for condor shots',
      'Arrive early to secure viewing spot',
      'Be patient - condors appear in waves'
    ],
    tipsEs: [
      'Lente telefoto esencial para fotos de cóndores',
      'Llega temprano para asegurar un punto de observación',
      'Sé paciente - los cóndores aparecen en oleadas'
    ]
  }
];

const gearItems: GearItem[] = [
  {
    name: 'Smartphone with good camera',
    nameEs: 'Smartphone con buena cámara',
    essential: true,
    description: 'Modern smartphones take excellent photos and are easy to carry.',
    descriptionEs: 'Los smartphones modernos toman excelentes fotos y son fáciles de llevar.',
    familyTip: 'Keep it in a waterproof pouch for rain and humidity.',
    familyTipEs: 'Guárdalo en una funda impermeable para lluvia y humedad.'
  },
  {
    name: 'Extra batteries/power bank',
    nameEs: 'Baterías extra/cargador portátil',
    essential: true,
    description: 'Cold at altitude drains batteries faster. Always have backup.',
    descriptionEs: 'El frío en altura drena las baterías más rápido. Siempre ten respaldo.',
    familyTip: 'Charge everything the night before - Peruvian days start early!',
    familyTipEs: '¡Carga todo la noche anterior - los días peruanos empiezan temprano!'
  },
  {
    name: 'Wide-angle lens',
    nameEs: 'Lente gran angular',
    essential: false,
    description: 'Essential for capturing vast landscapes and archaeological sites.',
    descriptionEs: 'Esencial para capturar vastos paisajes y sitios arqueológicos.',
    familyTip: 'Great for fitting the whole family into shots with scenic backgrounds.',
    familyTipEs: 'Ideal para incluir a toda la familia en fotos con fondos escénicos.'
  },
  {
    name: 'Telephoto/zoom lens',
    nameEs: 'Lente telefoto/zoom',
    essential: false,
    description: 'Perfect for wildlife and distant mountain shots.',
    descriptionEs: 'Perfecto para vida silvestre y montañas distantes.',
    familyTip: 'Useful for candid shots of kids exploring without interrupting them.',
    familyTipEs: 'Útil para fotos espontáneas de niños explorando sin interrumpirlos.'
  },
  {
    name: 'Polarizing filter',
    nameEs: 'Filtro polarizador',
    essential: false,
    description: 'Reduces glare and enhances blue skies and colors.',
    descriptionEs: 'Reduce el brillo y realza cielos azules y colores.',
    familyTip: 'Makes Rainbow Mountain colors pop in photos.',
    familyTipEs: 'Hace que los colores de la Montaña de Colores resalten en fotos.'
  },
  {
    name: 'Memory cards (plenty!)',
    nameEs: 'Tarjetas de memoria (¡muchas!)',
    essential: true,
    description: 'You\'ll take more photos than you expect. Bring extras.',
    descriptionEs: 'Tomarás más fotos de las que esperas. Trae extras.',
    familyTip: 'Let kids have their own card to review their photos each night.',
    familyTipEs: 'Deja que los niños tengan su propia tarjeta para revisar sus fotos cada noche.'
  },
  {
    name: 'Lightweight tripod',
    nameEs: 'Trípode ligero',
    essential: false,
    description: 'Essential for low-light and family group shots.',
    descriptionEs: 'Esencial para poca luz y fotos grupales familiares.',
    familyTip: 'Compact travel tripods work great for family selfies.',
    familyTipEs: 'Los trípodes compactos de viaje funcionan muy bien para selfies familiares.'
  },
  {
    name: 'Camera rain cover',
    nameEs: 'Cubierta de lluvia para cámara',
    essential: true,
    description: 'Weather in Peru changes quickly, especially in the mountains.',
    descriptionEs: 'El clima en Perú cambia rápidamente, especialmente en las montañas.',
    familyTip: 'A plastic bag works in emergencies!',
    familyTipEs: '¡Una bolsa de plástico funciona en emergencias!'
  }
];

const goldenHours = [
  { region: 'Lima (Coast)', regionEs: 'Lima (Costa)', sunrise: '5:45-6:30 AM', sunset: '6:00-6:30 PM' },
  { region: 'Cusco (Highlands)', regionEs: 'Cusco (Sierra)', sunrise: '5:30-6:15 AM', sunset: '5:45-6:15 PM' },
  { region: 'Amazon (Jungle)', regionEs: 'Amazonas (Selva)', sunrise: '5:45-6:30 AM', sunset: '5:30-6:00 PM' },
  { region: 'Arequipa', regionEs: 'Arequipa', sunrise: '5:30-6:15 AM', sunset: '5:45-6:15 PM' }
];

export default function PhotographyPage() {
  const { locale } = useI18n();
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null);
  const [showKidFriendlyOnly, setShowKidFriendlyOnly] = useState(false);

  const filteredSpots = showKidFriendlyOnly
    ? photoSpots.filter(spot => spot.kidFriendly)
    : photoSpots;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'moderate': return 'bg-yellow-100 text-yellow-800';
      case 'challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    if (locale === 'es') {
      switch (difficulty) {
        case 'easy': return 'Fácil';
        case 'moderate': return 'Moderado';
        case 'challenging': return 'Desafiante';
        default: return difficulty;
      }
    }
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="h-8 w-8" />
              <span className="text-peru-gold font-semibold">
                {locale === 'es' ? 'Guía de Fotografía' : 'Photography Guide'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Captura la Magia del Perú'
                : 'Capture Peru\'s Magic'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Los mejores lugares para fotos, consejos de equipo y técnicas de fotografía familiar para crear recuerdos inolvidables.'
                : 'Best photo spots, gear tips, and family photography techniques to create unforgettable memories.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips Banner */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Sun className="h-8 w-8 text-peru-gold mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Hora Dorada' : 'Golden Hour'}
              </span>
              <span className="text-xs text-gray-500">5:30-6:30 AM/PM</span>
            </div>
            <div className="flex flex-col items-center">
              <Mountain className="h-8 w-8 text-peru-terracotta mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Clima Variable' : 'Variable Weather'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Siempre preparado' : 'Always prepared'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Baby className="h-8 w-8 text-peru-earth mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Fotos con Niños' : 'Kid Photos'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Paciencia es clave' : 'Patience is key'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Pide Permiso' : 'Ask Permission'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Para fotos de locales' : 'For local portraits'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Best Photo Spots */}
      <section className="py-16">
        <div className="container-peru">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Mejores Lugares para Fotos' : 'Best Photo Spots'}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Lugares imprescindibles para fotos familiares increíbles'
                  : 'Must-visit locations for amazing family photos'}
              </p>
            </div>
            <label className="flex items-center space-x-2 mt-4 md:mt-0 cursor-pointer">
              <input
                type="checkbox"
                checked={showKidFriendlyOnly}
                onChange={(e) => setShowKidFriendlyOnly(e.target.checked)}
                className="rounded text-peru-terracotta focus:ring-peru-terracotta"
              />
              <span className="text-sm text-gray-700">
                {locale === 'es' ? 'Solo apto para niños' : 'Kid-friendly only'}
              </span>
            </label>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpots.map((spot) => (
              <div
                key={spot.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer ${
                  selectedSpot === spot.id ? 'ring-2 ring-peru-terracotta' : ''
                }`}
                onClick={() => setSelectedSpot(selectedSpot === spot.id ? null : spot.id)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-peru-earth">
                        {locale === 'es' ? spot.nameEs : spot.name}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {locale === 'es' ? spot.locationEs : spot.location}
                      </div>
                    </div>
                    {spot.kidFriendly && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {locale === 'es' ? 'Niños' : 'Kids'} ✓
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm mb-4">
                    {locale === 'es' ? spot.descriptionEs : spot.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-peru-gold mr-1" />
                      <span className="text-gray-600">
                        {locale === 'es' ? spot.bestTimeEs : spot.bestTime}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(spot.difficulty)}`}>
                      {getDifficultyLabel(spot.difficulty)}
                    </span>
                  </div>

                  {selectedSpot === spot.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-peru-earth mb-2">
                        {locale === 'es' ? 'Consejos de Fotografía:' : 'Photography Tips:'}
                      </p>
                      <ul className="space-y-2">
                        {(locale === 'es' ? spot.tipsEs : spot.tips).map((tip, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <Camera className="h-4 w-4 text-peru-terracotta mr-2 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden Hour Times */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container-peru">
          <div className="text-center mb-10">
            <Sun className="h-12 w-12 text-peru-gold mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? 'Horas Doradas por Región' : 'Golden Hour by Region'}
            </h2>
            <p className="text-gray-600">
              {locale === 'es'
                ? 'Los mejores momentos para luz perfecta de fotografía'
                : 'Best times for perfect photography lighting'}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-peru-sand/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-peru-earth font-semibold">
                      {locale === 'es' ? 'Región' : 'Region'}
                    </th>
                    <th className="px-6 py-4 text-center text-peru-earth font-semibold">
                      {locale === 'es' ? 'Amanecer' : 'Sunrise'}
                    </th>
                    <th className="px-6 py-4 text-center text-peru-earth font-semibold">
                      {locale === 'es' ? 'Atardecer' : 'Sunset'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {goldenHours.map((item, idx) => (
                    <tr key={idx} className="hover:bg-peru-sand/20">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {locale === 'es' ? item.regionEs : item.region}
                      </td>
                      <td className="px-6 py-4 text-center text-amber-600">
                        {item.sunrise}
                      </td>
                      <td className="px-6 py-4 text-center text-orange-600">
                        {item.sunset}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              {locale === 'es'
                ? '* Los tiempos varían según la temporada. Estos son promedios para junio-agosto.'
                : '* Times vary by season. These are averages for June-August.'}
            </p>
          </div>
        </div>
      </section>

      {/* Gear Checklist */}
      <section className="py-16">
        <div className="container-peru">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? 'Lista de Equipo Fotográfico' : 'Photography Gear Checklist'}
            </h2>
            <p className="text-gray-600">
              {locale === 'es'
                ? 'Lo que necesitas para capturar tu aventura familiar'
                : 'What you need to capture your family adventure'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gearItems.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 shadow-md ${
                  item.essential ? 'border-l-4 border-peru-terracotta' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-peru-earth">
                    {locale === 'es' ? item.nameEs : item.name}
                  </h3>
                  {item.essential && (
                    <span className="bg-peru-terracotta text-white text-xs px-2 py-1 rounded-full">
                      {locale === 'es' ? 'Esencial' : 'Essential'}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {locale === 'es' ? item.descriptionEs : item.description}
                </p>
                <div className="flex items-start bg-peru-sand/30 rounded-lg p-3">
                  <Star className="h-4 w-4 text-peru-gold mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-peru-earth">
                    <strong>{locale === 'es' ? 'Para familias:' : 'Family tip:'}</strong>{' '}
                    {locale === 'es' ? item.familyTipEs : item.familyTip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Photography Tips */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Baby className="h-12 w-12 text-peru-terracotta mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Fotografiando Niños en Perú' : 'Photographing Kids in Peru'}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Consejos para capturar momentos auténticos con tus hijos'
                  : 'Tips for capturing authentic moments with your children'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Eye className="h-5 w-5 mr-2 text-peru-gold" />
                  {locale === 'es' ? 'En la Altitud' : 'At Altitude'}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === 'es'
                      ? 'Los niños se cansan rápido - toma fotos temprano en el día'
                      : 'Kids tire quickly - take photos early in the day',
                    locale === 'es'
                      ? 'Trae snacks para mantener el ánimo durante sesiones de fotos'
                      : 'Bring snacks to keep spirits high during photo sessions',
                    locale === 'es'
                      ? 'Deja que descansen después de subir antes de tomar fotos'
                      : 'Let them rest after climbs before taking photos',
                    locale === 'es'
                      ? 'El aire seco puede causar labios agrietados - ten bálsamo listo'
                      : 'Dry air can cause chapped lips - have balm ready for photos'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Compass className="h-5 w-5 mr-2 text-peru-gold" />
                  {locale === 'es' ? 'Momentos Auténticos' : 'Candid Moments'}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === 'es'
                      ? 'Deja que exploren y captura su asombro natural'
                      : 'Let them explore and capture their natural wonder',
                    locale === 'es'
                      ? 'Las interacciones con llamas y alpacas hacen fotos memorables'
                      : 'Interactions with llamas and alpacas make memorable shots',
                    locale === 'es'
                      ? 'Pídeles que te cuenten sobre lo que ven mientras fotografías'
                      : 'Ask them to tell you about what they see while you shoot',
                    locale === 'es'
                      ? 'Déjalos usar la cámara también - les encanta ser fotógrafos'
                      : 'Let them use the camera too - they love being photographers'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-peru-gold" />
                  {locale === 'es' ? 'Consejos Técnicos' : 'Technical Tips'}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === 'es'
                      ? 'Usa modo ráfaga para capturar el momento perfecto'
                      : 'Use burst mode to capture the perfect moment',
                    locale === 'es'
                      ? 'Baja a su nivel para mejores perspectivas'
                      : 'Get down to their level for better perspectives',
                    locale === 'es'
                      ? 'Modo retrato difumina fondos ocupados de turistas'
                      : 'Portrait mode blurs busy tourist backgrounds',
                    locale === 'es'
                      ? 'Sombra abierta evita ojos entrecerrados por el sol'
                      : 'Open shade prevents squinting in bright sun'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-peru-gold" />
                  {locale === 'es' ? 'Prepara la Toma' : 'Setting Up Shots'}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === 'es'
                      ? 'Dale a cada niño un "trabajo" - busca colores, formas, animales'
                      : 'Give each child a "job" - spot colors, shapes, animals',
                    locale === 'es'
                      ? 'Haz juegos de fotos - quien encuentra la llama más graciosa'
                      : 'Make photo games - who finds the funniest llama',
                    locale === 'es'
                      ? 'Trae un pequeño juguete favorito para fotos creativas'
                      : 'Bring a small favorite toy for creative shots',
                    locale === 'es'
                      ? 'Programa descansos para fotos para que no se vuelva agotador'
                      : 'Schedule photo breaks so it doesn\'t become tiring'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drone Regulations */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
                    {locale === 'es' ? 'Regulaciones de Drones en Perú' : 'Drone Regulations in Peru'}
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      {locale === 'es'
                        ? 'Perú tiene regulaciones estrictas sobre el uso de drones. Aquí está lo que necesitas saber:'
                        : 'Peru has strict regulations on drone usage. Here\'s what you need to know:'}
                    </p>
                    <ul className="space-y-2">
                      {[
                        locale === 'es'
                          ? 'Los drones están PROHIBIDOS en todos los sitios arqueológicos incluyendo Machu Picchu'
                          : 'Drones are PROHIBITED at all archaeological sites including Machu Picchu',
                        locale === 'es'
                          ? 'Se requiere registro con la autoridad de aviación civil (DGAC) para drones >250g'
                          : 'Registration with civil aviation authority (DGAC) required for drones >250g',
                        locale === 'es'
                          ? 'Prohibido volar sobre multitudes, cerca de aeropuertos, o sobre edificios gubernamentales'
                          : 'Flying over crowds, near airports, or government buildings is forbidden',
                        locale === 'es'
                          ? 'Altura máxima de vuelo: 120 metros'
                          : 'Maximum flight height: 120 meters',
                        locale === 'es'
                          ? 'Siempre mantén línea visual con tu drone'
                          : 'Always maintain line of sight with your drone'
                      ].map((rule, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          {rule}
                        </li>
                      ))}
                    </ul>
                    <p className="bg-white p-4 rounded-lg border border-amber-200">
                      <strong>{locale === 'es' ? 'Consejo:' : 'Tip:'}</strong>{' '}
                      {locale === 'es'
                        ? 'Considera reservar un tour con licencia de drone para tomas aéreas legales de lugares permitidos como el Valle Sagrado.'
                        : 'Consider booking a licensed drone tour for legal aerial shots of permitted locations like the Sacred Valley.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Photography Etiquette */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">
              {locale === 'es' ? 'Etiqueta Fotográfica Cultural' : 'Cultural Photography Etiquette'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🙏</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {locale === 'es' ? 'Siempre Pide Permiso' : 'Always Ask Permission'}
                </h3>
                <p className="text-white/80 text-sm">
                  {locale === 'es'
                    ? 'Pide antes de fotografiar a locales. Muchos apreciarán una pequeña propina.'
                    : 'Ask before photographing locals. Many will appreciate a small tip.'}
                </p>
              </div>
              <div>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⛪</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {locale === 'es' ? 'Respeta Espacios Sagrados' : 'Respect Sacred Spaces'}
                </h3>
                <p className="text-white/80 text-sm">
                  {locale === 'es'
                    ? 'Algunas iglesias y sitios prohíben fotos. Busca señales o pregunta.'
                    : 'Some churches and sites prohibit photos. Look for signs or ask.'}
                </p>
              </div>
              <div>
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🦙</span>
                </div>
                <h3 className="font-bold text-lg mb-2">
                  {locale === 'es' ? 'Fotos con Animales' : 'Animal Photos'}
                </h3>
                <p className="text-white/80 text-sm">
                  {locale === 'es'
                    ? 'Las llamas "de postal" suelen pedir propina. Acuerda el precio antes.'
                    : '"Postcard" llamas usually expect a tip. Agree on price first.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
