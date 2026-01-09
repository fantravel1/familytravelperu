'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Camera,
  Sun,
  Clock,
  MapPin,
  Users,
  Star,
  Mountain,
  Sparkles,
  Baby,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface PhotoSpot {
  id: string;
  name: string;
  nameEs: string;
  location: string;
  locationEs: string;
  region: 'cusco' | 'lima' | 'arequipa' | 'puno' | 'amazon' | 'coast';
  description: string;
  descriptionEs: string;
  bestTime: string;
  bestTimeEs: string;
  goldenHour: string;
  goldenHourEs: string;
  familyRating: 1 | 2 | 3 | 4 | 5;
  difficulty: 'easy' | 'moderate' | 'challenging';
  tips: string[];
  tipsEs: string[];
  kidTips: string[];
  kidTipsEs: string[];
  iconic: boolean;
}

const photoSpots: PhotoSpot[] = [
  // Cusco Region
  {
    id: 'machu-picchu-classic',
    name: 'Machu Picchu Classic View',
    nameEs: 'Vista Clásica de Machu Picchu',
    location: 'Machu Picchu',
    locationEs: 'Machu Picchu',
    region: 'cusco',
    description: 'The iconic postcard view from the Guardian House overlooking the entire citadel with Huayna Picchu in the background.',
    descriptionEs: 'La icónica vista de postal desde la Casa del Guardián con vista a toda la ciudadela y Huayna Picchu de fondo.',
    bestTime: 'Early morning (6-8 AM) or late afternoon (3-5 PM)',
    bestTimeEs: 'Temprano en la mañana (6-8 AM) o tarde (3-5 PM)',
    goldenHour: '6:00-7:00 AM for sunrise, 4:30-5:30 PM for golden light',
    goldenHourEs: '6:00-7:00 AM para amanecer, 4:30-5:30 PM para luz dorada',
    familyRating: 4,
    difficulty: 'moderate',
    tips: [
      'Arrive when gates open for fewer crowds',
      'Bring layers - morning can be cold, then hot',
      'Tripods not allowed but monopods are',
      'The walk up to Guardian House takes 10-15 minutes'
    ],
    tipsEs: [
      'Llega cuando abren las puertas para menos gente',
      'Trae capas - la mañana puede ser fría, luego calurosa',
      'Trípodes no permitidos pero monopies sí',
      'La caminata a la Casa del Guardián toma 10-15 minutos'
    ],
    kidTips: [
      'Start with rested kids - this is the highlight!',
      'Bring snacks and water for the wait',
      'Practice llama poses beforehand - they roam the site',
      'Have a family signal for photo time vs explore time'
    ],
    kidTipsEs: [
      '¡Comienza con niños descansados - este es el punto culminante!',
      'Trae snacks y agua para la espera',
      'Practica poses con llamas antes - deambulan por el sitio',
      'Ten una señal familiar para tiempo de fotos vs explorar'
    ],
    iconic: true
  },
  {
    id: 'rainbow-mountain',
    name: 'Rainbow Mountain (Vinicunca)',
    nameEs: 'Montaña de Siete Colores (Vinicunca)',
    location: 'Cusipata, 3 hours from Cusco',
    locationEs: 'Cusipata, 3 horas desde Cusco',
    region: 'cusco',
    description: 'The multicolored striped mountain has become one of Peru\'s most photographed sites. The colors are best on clear, sunny days.',
    descriptionEs: 'La montaña de rayas multicolores se ha convertido en uno de los sitios más fotografiados de Perú. Los colores se ven mejor en días claros y soleados.',
    bestTime: 'March-November (dry season), before noon',
    bestTimeEs: 'Marzo-Noviembre (temporada seca), antes del mediodía',
    goldenHour: '10:00 AM - 12:00 PM for best color visibility',
    goldenHourEs: '10:00 AM - 12:00 PM para mejor visibilidad de colores',
    familyRating: 2,
    difficulty: 'challenging',
    tips: [
      'Altitude is 5,200m - acclimatize first!',
      'Clouds often roll in after noon',
      'Consider horse ride for part of the trek',
      'Bring polarizing filter for vivid colors'
    ],
    tipsEs: [
      '¡La altitud es 5,200m - aclimátate primero!',
      'Las nubes suelen llegar después del mediodía',
      'Considera paseo a caballo para parte del trek',
      'Trae filtro polarizador para colores vívidos'
    ],
    kidTips: [
      'Only recommended for kids 10+ who are fit and acclimatized',
      'Alternative: Palccoyo Rainbow Mountain is easier',
      'Bring altitude sickness medication',
      'Pack extra warm clothes - it\'s freezing at the top'
    ],
    kidTipsEs: [
      'Solo recomendado para niños 10+ que estén en forma y aclimatados',
      'Alternativa: Montaña Arcoíris de Palccoyo es más fácil',
      'Trae medicamento para el mal de altura',
      'Lleva ropa extra abrigada - hace mucho frío en la cima'
    ],
    iconic: true
  },
  {
    id: 'salineras-maras',
    name: 'Salineras de Maras',
    nameEs: 'Salineras de Maras',
    location: 'Sacred Valley, 40km from Cusco',
    locationEs: 'Valle Sagrado, 40km desde Cusco',
    region: 'cusco',
    description: 'Over 3,000 salt pools cascade down the mountainside creating a stunning geometric pattern.',
    descriptionEs: 'Más de 3,000 pozas de sal descienden por la ladera de la montaña creando un impresionante patrón geométrico.',
    bestTime: 'Morning for best light on the white pools',
    bestTimeEs: 'Mañana para mejor luz en las pozas blancas',
    goldenHour: '7:00-9:00 AM or 4:00-5:30 PM',
    goldenHourEs: '7:00-9:00 AM o 4:00-5:30 PM',
    familyRating: 5,
    difficulty: 'easy',
    tips: [
      'Go early to avoid tour groups',
      'The viewing platform offers best overview shot',
      'Walking through pools gives unique angles',
      'Buy salt souvenirs at the bottom'
    ],
    tipsEs: [
      'Ve temprano para evitar grupos de tour',
      'La plataforma de observación ofrece mejor toma panorámica',
      'Caminar por las pozas da ángulos únicos',
      'Compra recuerdos de sal en la parte de abajo'
    ],
    kidTips: [
      'Kids love the geometric patterns',
      'Explain the ancient salt harvesting tradition',
      'Watch footing - paths can be slippery when wet',
      'Great for teaching about evaporation!'
    ],
    kidTipsEs: [
      'A los niños les encantan los patrones geométricos',
      'Explica la tradición ancestral de cosecha de sal',
      'Cuidado con los pasos - los caminos pueden ser resbaladizos',
      '¡Genial para enseñar sobre evaporación!'
    ],
    iconic: true
  },
  {
    id: 'moray-terraces',
    name: 'Moray Agricultural Terraces',
    nameEs: 'Terrazas Agrícolas de Moray',
    location: 'Sacred Valley, near Maras',
    locationEs: 'Valle Sagrado, cerca de Maras',
    region: 'cusco',
    description: 'Mysterious circular Incan terraces that look like ancient amphitheaters carved into the earth.',
    descriptionEs: 'Misteriosas terrazas circulares Incas que parecen antiguos anfiteatros tallados en la tierra.',
    bestTime: 'Midday when sun illuminates all terraces',
    bestTimeEs: 'Mediodía cuando el sol ilumina todas las terrazas',
    goldenHour: '11:00 AM - 2:00 PM for full illumination',
    goldenHourEs: '11:00 AM - 2:00 PM para iluminación completa',
    familyRating: 5,
    difficulty: 'easy',
    tips: [
      'Combine with Maras salt mines visit',
      'Walk down into the terraces for scale photos',
      'Drone photography shows the pattern best',
      'Less crowded in early morning'
    ],
    tipsEs: [
      'Combina con visita a salineras de Maras',
      'Baja a las terrazas para fotos con escala',
      'Fotografía con dron muestra mejor el patrón',
      'Menos gente temprano en la mañana'
    ],
    kidTips: [
      'Kids love running down the terraces (carefully!)',
      'Great for teaching Incan engineering',
      'Temperature changes noticeably at different levels',
      'Easy short visit - won\'t tire out little ones'
    ],
    kidTipsEs: [
      'A los niños les encanta correr por las terrazas (¡con cuidado!)',
      'Genial para enseñar ingeniería Inca',
      'La temperatura cambia notablemente en diferentes niveles',
      'Visita corta fácil - no cansará a los pequeños'
    ],
    iconic: true
  },
  {
    id: 'cusco-plaza',
    name: 'Plaza de Armas, Cusco',
    nameEs: 'Plaza de Armas, Cusco',
    location: 'Cusco City Center',
    locationEs: 'Centro de la Ciudad de Cusco',
    region: 'cusco',
    description: 'The heart of Cusco with the stunning cathedral backdrop and traditional balconies.',
    descriptionEs: 'El corazón de Cusco con la impresionante catedral de fondo y balcones tradicionales.',
    bestTime: 'Blue hour (just before sunrise or after sunset)',
    bestTimeEs: 'Hora azul (justo antes del amanecer o después del atardecer)',
    goldenHour: '5:30-6:00 AM or 6:00-6:30 PM',
    goldenHourEs: '5:30-6:00 AM o 6:00-6:30 PM',
    familyRating: 5,
    difficulty: 'easy',
    tips: [
      'Evening lights create magical atmosphere',
      'Shoot from second-floor restaurant balconies',
      'Sunday morning has traditional flag ceremony',
      'Include local people for authentic feel'
    ],
    tipsEs: [
      'Las luces de la noche crean atmósfera mágica',
      'Dispara desde balcones de restaurantes del segundo piso',
      'Domingo en la mañana tiene ceremonia tradicional de bandera',
      'Incluye gente local para sensación auténtica'
    ],
    kidTips: [
      'Safe area for family photos',
      'Kids can chase pigeons in the plaza',
      'Ice cream shops nearby for bribery',
      'Traditional dressed locals often pose for tips'
    ],
    kidTipsEs: [
      'Área segura para fotos familiares',
      'Los niños pueden perseguir palomas en la plaza',
      'Heladerías cerca para sobornos',
      'Locales vestidos tradicionales suelen posar por propinas'
    ],
    iconic: false
  },
  // Lima Region
  {
    id: 'huacachina',
    name: 'Huacachina Oasis',
    nameEs: 'Oasis de Huacachina',
    location: 'Ica, 4 hours from Lima',
    locationEs: 'Ica, 4 horas desde Lima',
    region: 'coast',
    description: 'A natural oasis surrounded by massive sand dunes - perfect for sunset silhouettes.',
    descriptionEs: 'Un oasis natural rodeado de enormes dunas de arena - perfecto para siluetas al atardecer.',
    bestTime: 'Late afternoon for golden dunes, sunset for silhouettes',
    bestTimeEs: 'Tarde para dunas doradas, atardecer para siluetas',
    goldenHour: '4:30-6:00 PM for sunset on dunes',
    goldenHourEs: '4:30-6:00 PM para atardecer en las dunas',
    familyRating: 4,
    difficulty: 'moderate',
    tips: [
      'Take dune buggy tour for sunset photos',
      'Sandboarding creates fun action shots',
      'Protect camera from sand!',
      'Oasis view from dune top is Instagram-famous'
    ],
    tipsEs: [
      'Toma tour en buggy para fotos del atardecer',
      'Sandboarding crea fotos de acción divertidas',
      '¡Protege la cámara de la arena!',
      'Vista del oasis desde la duna es famosa en Instagram'
    ],
    kidTips: [
      'Kids love sandboarding and dune buggies',
      'Bring goggles to protect eyes from sand',
      'Not suitable for very young children',
      'Book early evening tour when sand is cooler'
    ],
    kidTipsEs: [
      'A los niños les encanta el sandboarding y los buggies',
      'Trae gafas para proteger ojos de la arena',
      'No apto para niños muy pequeños',
      'Reserva tour de tarde cuando la arena está más fresca'
    ],
    iconic: true
  },
  {
    id: 'miraflores-cliffs',
    name: 'Miraflores Cliffs',
    nameEs: 'Acantilados de Miraflores',
    location: 'Lima, Miraflores District',
    locationEs: 'Lima, Distrito de Miraflores',
    region: 'lima',
    description: 'Dramatic coastal cliffs with paragliders, the Pacific Ocean, and Lima\'s skyline.',
    descriptionEs: 'Dramáticos acantilados costeros con parapentes, el Océano Pacífico y el horizonte de Lima.',
    bestTime: 'Sunset for golden light and active paragliders',
    bestTimeEs: 'Atardecer para luz dorada y parapentes activos',
    goldenHour: '5:30-6:30 PM (varies by season)',
    goldenHourEs: '5:30-6:30 PM (varía según temporada)',
    familyRating: 5,
    difficulty: 'easy',
    tips: [
      'Parque del Amor has romantic sculpture backdrop',
      'Include paragliders for dynamic shots',
      'Larcomar mall has great cliff viewing',
      'Walk the Malecón pathway for different angles'
    ],
    tipsEs: [
      'Parque del Amor tiene escultura romántica de fondo',
      'Incluye parapentes para tomas dinámicas',
      'Mall Larcomar tiene gran vista de acantilados',
      'Camina por el Malecón para diferentes ángulos'
    ],
    kidTips: [
      'Safe walkways along the entire cliff',
      'Kids love watching paragliders take off',
      'Playgrounds in several cliff-top parks',
      'Great for evening family strolls'
    ],
    kidTipsEs: [
      'Caminos seguros a lo largo de todo el acantilado',
      'A los niños les encanta ver despegar los parapentes',
      'Parques infantiles en varios parques del acantilado',
      'Genial para paseos familiares nocturnos'
    ],
    iconic: false
  },
  // Puno Region
  {
    id: 'uros-islands',
    name: 'Uros Floating Islands',
    nameEs: 'Islas Flotantes de los Uros',
    location: 'Lake Titicaca, Puno',
    locationEs: 'Lago Titicaca, Puno',
    region: 'puno',
    description: 'Surreal man-made islands of totora reeds with colorful boats and traditional houses.',
    descriptionEs: 'Surrealistas islas artificiales de totora con botes coloridos y casas tradicionales.',
    bestTime: 'Morning for calm waters and best light',
    bestTimeEs: 'Mañana para aguas calmas y mejor luz',
    goldenHour: '7:00-9:00 AM',
    goldenHourEs: '7:00-9:00 AM',
    familyRating: 5,
    difficulty: 'easy',
    tips: [
      'The traditional reed boats are very photogenic',
      'Ask permission before photographing residents',
      'Wear bright colors for contrast against reeds',
      'Blue sky days show the best contrast'
    ],
    tipsEs: [
      'Los botes tradicionales de totora son muy fotogénicos',
      'Pide permiso antes de fotografiar a residentes',
      'Usa colores brillantes para contraste con las totoras',
      'Días de cielo azul muestran el mejor contraste'
    ],
    kidTips: [
      'Kids love bouncing on the spongy reed islands',
      'Boat rides in traditional vessels are exciting',
      'Local children often play with visitors',
      'Explain the unique floating lifestyle'
    ],
    kidTipsEs: [
      'A los niños les encanta brincar en las esponjosas islas de totora',
      'Paseos en bote tradicional son emocionantes',
      'Niños locales suelen jugar con visitantes',
      'Explica el único estilo de vida flotante'
    ],
    iconic: true
  },
  // Arequipa Region
  {
    id: 'colca-canyon',
    name: 'Colca Canyon & Condors',
    nameEs: 'Cañón del Colca y Cóndores',
    location: 'Colca Valley, 3-4 hours from Arequipa',
    locationEs: 'Valle del Colca, 3-4 horas desde Arequipa',
    region: 'arequipa',
    description: 'One of the world\'s deepest canyons with Andean condors soaring on thermal currents.',
    descriptionEs: 'Uno de los cañones más profundos del mundo con cóndores andinos volando en corrientes térmicas.',
    bestTime: '8-10 AM when condors are most active',
    bestTimeEs: '8-10 AM cuando los cóndores están más activos',
    goldenHour: '7:00-10:00 AM for condors, sunset for canyon colors',
    goldenHourEs: '7:00-10:00 AM para cóndores, atardecer para colores del cañón',
    familyRating: 4,
    difficulty: 'moderate',
    tips: [
      'Cruz del Condor is the main viewing point',
      'Bring telephoto lens for condor close-ups',
      'Condors fly closer on cloudy mornings',
      'Stay until at least 10 AM for multiple passes'
    ],
    tipsEs: [
      'Cruz del Cóndor es el punto de observación principal',
      'Trae lente teleobjetivo para primeros planos de cóndores',
      'Los cóndores vuelan más cerca en mañanas nubladas',
      'Quédate hasta al menos las 10 AM para múltiples pasadas'
    ],
    kidTips: [
      'Condor viewing is magical for kids!',
      'Bring binoculars for excited children',
      'Early morning requires overnight in Chivay',
      'Altitude is high - acclimatize first'
    ],
    kidTipsEs: [
      '¡Ver cóndores es mágico para los niños!',
      'Trae binoculares para niños emocionados',
      'Mañana temprano requiere noche en Chivay',
      'La altitud es alta - aclimátate primero'
    ],
    iconic: true
  },
  {
    id: 'arequipa-monastery',
    name: 'Santa Catalina Monastery',
    nameEs: 'Monasterio de Santa Catalina',
    location: 'Arequipa City Center',
    locationEs: 'Centro de la Ciudad de Arequipa',
    region: 'arequipa',
    description: 'A colorful 16th-century monastery city with stunning blue, red, and orange walls.',
    descriptionEs: 'Una colorida ciudad monasterio del siglo XVI con impresionantes paredes azules, rojas y naranjas.',
    bestTime: 'Morning for soft light, or golden hour',
    bestTimeEs: 'Mañana para luz suave, o hora dorada',
    goldenHour: '3:00-5:00 PM when light hits the colored walls',
    goldenHourEs: '3:00-5:00 PM cuando la luz toca las paredes coloridas',
    familyRating: 4,
    difficulty: 'easy',
    tips: [
      'The blue and orange streets are most photogenic',
      'Late afternoon light makes colors pop',
      'Allow 2-3 hours to explore and photograph',
      'Rooftop terrace offers city and volcano views'
    ],
    tipsEs: [
      'Las calles azules y naranjas son las más fotogénicas',
      'La luz de tarde hace que los colores resalten',
      'Permite 2-3 horas para explorar y fotografiar',
      'Terraza del techo ofrece vistas de la ciudad y volcán'
    ],
    kidTips: [
      'Like exploring a mini city within a city',
      'Kids enjoy the maze-like layout',
      'Quiet courtyards good for resting',
      'Cafe inside for refreshments'
    ],
    kidTipsEs: [
      'Como explorar una mini ciudad dentro de una ciudad',
      'A los niños les gusta el diseño tipo laberinto',
      'Patios tranquilos buenos para descansar',
      'Café adentro para refrescos'
    ],
    iconic: true
  },
  // Amazon
  {
    id: 'amazon-lodge',
    name: 'Amazon Jungle Lodge',
    nameEs: 'Lodge de la Selva Amazónica',
    location: 'Puerto Maldonado or Iquitos area',
    locationEs: 'Zona de Puerto Maldonado o Iquitos',
    region: 'amazon',
    description: 'Capture wildlife, river life, and the magical atmosphere of the rainforest.',
    descriptionEs: 'Captura vida silvestre, vida del río y la atmósfera mágica de la selva tropical.',
    bestTime: 'Early morning or late afternoon for wildlife',
    bestTimeEs: 'Temprano en la mañana o tarde para vida silvestre',
    goldenHour: '5:30-7:00 AM and 4:00-6:00 PM',
    goldenHourEs: '5:30-7:00 AM y 4:00-6:00 PM',
    familyRating: 4,
    difficulty: 'moderate',
    tips: [
      'Bring waterproof camera cover for rain/humidity',
      'Fast lens needed for jungle shade',
      'River reflections at sunrise are stunning',
      'Night walks offer unique photo ops'
    ],
    tipsEs: [
      'Trae funda impermeable para cámara por lluvia/humedad',
      'Se necesita lente rápido para sombra de selva',
      'Reflejos del río al amanecer son impresionantes',
      'Caminatas nocturnas ofrecen oportunidades únicas de fotos'
    ],
    kidTips: [
      'Kids love spotting monkeys and macaws',
      'Give kids a disposable camera for their own shots',
      'Patience needed - wildlife doesn\'t pose!',
      'Piranha fishing makes great action photos'
    ],
    kidTipsEs: [
      'A los niños les encanta ver monos y guacamayos',
      'Dale a los niños una cámara desechable para sus propias fotos',
      'Se necesita paciencia - ¡la vida silvestre no posa!',
      'Pesca de pirañas hace geniales fotos de acción'
    ],
    iconic: false
  }
];

const regions = [
  { id: 'all', name: 'All Regions', nameEs: 'Todas las Regiones' },
  { id: 'cusco', name: 'Cusco & Sacred Valley', nameEs: 'Cusco y Valle Sagrado' },
  { id: 'lima', name: 'Lima', nameEs: 'Lima' },
  { id: 'coast', name: 'Coast', nameEs: 'Costa' },
  { id: 'arequipa', name: 'Arequipa', nameEs: 'Arequipa' },
  { id: 'puno', name: 'Lake Titicaca', nameEs: 'Lago Titicaca' },
  { id: 'amazon', name: 'Amazon', nameEs: 'Amazonas' }
];

export default function PhotoSpotsPage() {
  const { locale } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [showIconicOnly, setShowIconicOnly] = useState(false);

  const filteredSpots = photoSpots.filter(spot => {
    if (selectedRegion !== 'all' && spot.region !== selectedRegion) return false;
    if (showIconicOnly && !spot.iconic) return false;
    return true;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'moderate': return 'bg-yellow-100 text-yellow-700';
      case 'challenging': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
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
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Mejores Lugares para Fotos' : 'Best Photo Spots'}
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-6">
              {locale === 'es'
                ? 'Guía familiar para capturar los momentos más memorables en Perú - con consejos para fotografiar con niños.'
                : 'Family-friendly guide to capturing Peru\'s most memorable moments - with tips for photographing with kids.'}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Camera className="h-4 w-4" />
                <span>{photoSpots.length} {locale === 'es' ? 'Lugares' : 'Spots'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Star className="h-4 w-4" />
                <span>{photoSpots.filter(s => s.iconic).length} {locale === 'es' ? 'Icónicos' : 'Iconic'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Baby className="h-4 w-4" />
                <span>{locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Tips Banner */}
      <section className="py-6 bg-white border-b">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Sun className="h-8 w-8 text-peru-gold mx-auto mb-2" />
              <p className="font-semibold text-peru-earth">{locale === 'es' ? 'Hora Dorada' : 'Golden Hour'}</p>
              <p className="text-sm text-gray-600">{locale === 'es' ? '6-7 AM, 5-6 PM' : '6-7 AM, 5-6 PM'}</p>
            </div>
            <div className="p-4">
              <Clock className="h-8 w-8 text-peru-gold mx-auto mb-2" />
              <p className="font-semibold text-peru-earth">{locale === 'es' ? 'Menos Gente' : 'Fewer Crowds'}</p>
              <p className="text-sm text-gray-600">{locale === 'es' ? 'Temprano en la mañana' : 'Early morning'}</p>
            </div>
            <div className="p-4">
              <Mountain className="h-8 w-8 text-peru-gold mx-auto mb-2" />
              <p className="font-semibold text-peru-earth">{locale === 'es' ? 'Temporada Seca' : 'Dry Season'}</p>
              <p className="text-sm text-gray-600">{locale === 'es' ? 'May-Oct mejor' : 'May-Oct best'}</p>
            </div>
            <div className="p-4">
              <Users className="h-8 w-8 text-peru-gold mx-auto mb-2" />
              <p className="font-semibold text-peru-earth">{locale === 'es' ? 'Con Niños' : 'With Kids'}</p>
              <p className="text-sm text-gray-600">{locale === 'es' ? 'Paciencia y snacks' : 'Patience & snacks'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container-peru">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Region Filter */}
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-peru-terracotta text-white'
                      : 'bg-white text-gray-600 hover:bg-peru-sand border border-gray-200'
                  }`}
                >
                  {locale === 'es' ? region.nameEs : region.name}
                </button>
              ))}
            </div>

            {/* Iconic Toggle */}
            <button
              onClick={() => setShowIconicOnly(!showIconicOnly)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                showIconicOnly
                  ? 'bg-peru-gold text-white'
                  : 'bg-white text-gray-600 hover:bg-peru-sand border border-gray-200'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              {locale === 'es' ? 'Solo Icónicos' : 'Iconic Only'}
            </button>
          </div>
        </div>
      </section>

      {/* Photo Spots Grid */}
      <section className="pb-12 lg:pb-16">
        <div className="container-peru">
          <div className="grid gap-6 lg:gap-8">
            {filteredSpots.map((spot) => (
              <div
                key={spot.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {spot.iconic && (
                          <span className="bg-peru-gold text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            {locale === 'es' ? 'Icónico' : 'Iconic'}
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(spot.difficulty)}`}>
                          {getDifficultyLabel(spot.difficulty)}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-peru-earth">
                        {locale === 'es' ? spot.nameEs : spot.name}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{locale === 'es' ? spot.locationEs : spot.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-peru-gold">
                      <Baby className="h-5 w-5" />
                      <span className="font-medium">
                        {'★'.repeat(spot.familyRating)}
                        {'☆'.repeat(5 - spot.familyRating)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6">
                    {locale === 'es' ? spot.descriptionEs : spot.description}
                  </p>

                  {/* Timing Info */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-peru-sand/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-peru-earth font-semibold mb-1">
                        <Clock className="h-4 w-4" />
                        {locale === 'es' ? 'Mejor Hora' : 'Best Time'}
                      </div>
                      <p className="text-sm text-gray-600">
                        {locale === 'es' ? spot.bestTimeEs : spot.bestTime}
                      </p>
                    </div>
                    <div className="bg-peru-gold/10 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-peru-gold font-semibold mb-1">
                        <Sun className="h-4 w-4" />
                        {locale === 'es' ? 'Hora Dorada' : 'Golden Hour'}
                      </div>
                      <p className="text-sm text-gray-600">
                        {locale === 'es' ? spot.goldenHourEs : spot.goldenHour}
                      </p>
                    </div>
                  </div>

                  {/* Tips Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Photography Tips */}
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                        <Camera className="h-5 w-5" />
                        {locale === 'es' ? 'Consejos de Fotografía' : 'Photography Tips'}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'es' ? spot.tipsEs : spot.tips).map((tip, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Family Tips */}
                    <div className="bg-peru-terracotta/10 rounded-xl p-5">
                      <h4 className="font-bold text-peru-terracotta mb-3 flex items-center gap-2">
                        <Baby className="h-5 w-5" />
                        {locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'es' ? spot.kidTipsEs : spot.kidTips).map((tip, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start gap-2 text-sm">
                            <Star className="h-4 w-4 text-peru-gold mt-0.5 flex-shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSpots.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {locale === 'es' ? 'No se encontraron lugares con estos filtros.' : 'No spots found with these filters.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photography Tips Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos para Fotografiar con Niños' : 'Tips for Photographing with Kids'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                1
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Planea el Momento Perfecto' : 'Plan for the Right Moment'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Programa las sesiones de fotos cuando los niños estén descansados y alimentados. La mañana después del desayuno suele ser ideal.'
                  : 'Schedule photo sessions when kids are rested and fed. Morning after breakfast is often ideal.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                2
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Trae Entretenimiento' : 'Bring Entertainment'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Lleva juguetes pequeños, snacks y una tablet cargada para los tiempos de espera. Los niños aburridos = malas fotos.'
                  : 'Pack small toys, snacks, and a charged tablet for waiting times. Bored kids = bad photos.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                3
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Involucra a los Niños' : 'Involve the Kids'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Dale a cada niño una misión fotográfica con su propia cámara. Los mantiene ocupados y crea recuerdos únicos.'
                  : 'Give each kid a photography mission with their own camera. Keeps them busy and creates unique memories.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                4
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Captura lo Natural' : 'Capture Candid Moments'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Las mejores fotos familiares son espontáneas. Captura reacciones naturales a las maravillas de Perú.'
                  : 'The best family photos are candid. Capture natural reactions to Peru\'s wonders.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                5
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Usa Recompensas' : 'Use Rewards'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? '\"Después de la foto, vamos por un helado\" funciona de maravilla. Establece expectativas claras.'
                  : '"After the photo, we\'ll get ice cream" works wonders. Set clear expectations.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <div className="bg-peru-terracotta text-white rounded-full w-10 h-10 flex items-center justify-center mb-4 font-bold">
                6
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Ten Paciencia' : 'Be Patient'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los niños tienen sus momentos. Si no cooperan, sigue adelante y vuelve a intentarlo más tarde.'
                  : 'Kids have their moments. If they\'re not cooperating, move on and try again later.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Gear */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8 text-center">
            {locale === 'es' ? 'Equipo Esencial para Fotografía en Perú' : 'Essential Photography Gear for Peru'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold mb-2">
                {locale === 'es' ? 'Smartphone Moderno' : 'Modern Smartphone'}
              </h3>
              <p className="text-white/80 text-sm">
                {locale === 'es' ? 'Suficiente para la mayoría de fotos familiares' : 'Sufficient for most family photos'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">🔋</div>
              <h3 className="font-bold mb-2">
                {locale === 'es' ? 'Baterías Extra' : 'Extra Batteries'}
              </h3>
              <p className="text-white/80 text-sm">
                {locale === 'es' ? 'El frío de la altura drena baterías rápido' : 'High altitude cold drains batteries fast'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="font-bold mb-2">
                {locale === 'es' ? 'Almacenamiento' : 'Storage'}
              </h3>
              <p className="text-white/80 text-sm">
                {locale === 'es' ? 'Tarjetas SD de respaldo o almacenamiento en la nube' : 'Backup SD cards or cloud storage'}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">☔</div>
              <h3 className="font-bold mb-2">
                {locale === 'es' ? 'Protección' : 'Protection'}
              </h3>
              <p className="text-white/80 text-sm">
                {locale === 'es' ? 'Bolsa impermeable para lluvia inesperada' : 'Waterproof bag for unexpected rain'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
