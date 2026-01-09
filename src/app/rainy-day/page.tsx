'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  CloudRain,
  MapPin,
  Baby,
  Clock,
  DollarSign,
  Star,
  Building2,
  Palette,
  UtensilsCrossed,
  Music,
  Gamepad2,
  BookOpen,
  Theater,
  Coffee
} from 'lucide-react';

interface RainyDayActivity {
  id: string;
  name: string;
  nameEs: string;
  city: string;
  cityEs: string;
  category: 'museum' | 'food' | 'entertainment' | 'shopping' | 'cultural';
  description: string;
  descriptionEs: string;
  ageRange: string;
  ageRangeEs: string;
  duration: string;
  durationEs: string;
  cost: 'free' | 'budget' | 'moderate' | 'expensive';
  highlights: string[];
  highlightsEs: string[];
  kidRating: 1 | 2 | 3;
}

const activities: RainyDayActivity[] = [
  {
    id: 'larco-museum',
    name: 'Larco Museum',
    nameEs: 'Museo Larco',
    city: 'Lima',
    cityEs: 'Lima',
    category: 'museum',
    description: 'World-class pre-Columbian art museum with beautiful gardens and a great café.',
    descriptionEs: 'Museo de arte precolombino de clase mundial con hermosos jardines y un gran café.',
    ageRange: 'All ages',
    ageRangeEs: 'Todas las edades',
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    cost: 'moderate',
    highlights: [
      'Stunning gold and silver collection',
      'Kid-friendly treasure hunts available',
      'Beautiful garden restaurant',
      'Free audio guides for kids'
    ],
    highlightsEs: [
      'Impresionante colección de oro y plata',
      'Búsquedas del tesoro para niños disponibles',
      'Hermoso restaurante con jardín',
      'Audioguías gratuitas para niños'
    ],
    kidRating: 3
  },
  {
    id: 'chocomuseo',
    name: 'ChocoMuseo',
    nameEs: 'ChocoMuseo',
    city: 'Cusco / Lima',
    cityEs: 'Cusco / Lima',
    category: 'food',
    description: 'Hands-on chocolate-making workshops where kids create their own treats.',
    descriptionEs: 'Talleres prácticos de elaboración de chocolate donde los niños crean sus propias golosinas.',
    ageRange: 'Ages 4+',
    ageRangeEs: 'Mayores de 4 años',
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    cost: 'moderate',
    highlights: [
      'Make your own chocolate bars',
      'Learn about cacao history',
      'Taste Peruvian chocolate varieties',
      'Take home your creations'
    ],
    highlightsEs: [
      'Haz tus propias barras de chocolate',
      'Aprende sobre la historia del cacao',
      'Prueba variedades de chocolate peruano',
      'Llévate tus creaciones a casa'
    ],
    kidRating: 3
  },
  {
    id: 'planetarium-cusco',
    name: 'Planetarium Cusco',
    nameEs: 'Planetario Cusco',
    city: 'Cusco',
    cityEs: 'Cusco',
    category: 'entertainment',
    description: 'Learn about Inca astronomy and observe the southern sky.',
    descriptionEs: 'Aprende sobre la astronomía inca y observa el cielo del sur.',
    ageRange: 'Ages 5+',
    ageRangeEs: 'Mayores de 5 años',
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    cost: 'moderate',
    highlights: [
      'Inca constellation stories',
      'Interactive shows',
      'Telescope viewing (weather permitting)',
      'English and Spanish shows'
    ],
    highlightsEs: [
      'Historias de constelaciones incas',
      'Shows interactivos',
      'Observación con telescopio (si el clima lo permite)',
      'Shows en inglés y español'
    ],
    kidRating: 2
  },
  {
    id: 'mac-lima',
    name: 'MAC Lima (Contemporary Art)',
    nameEs: 'MAC Lima (Arte Contemporáneo)',
    city: 'Lima',
    cityEs: 'Lima',
    category: 'museum',
    description: 'Modern art museum with colorful, engaging exhibitions.',
    descriptionEs: 'Museo de arte moderno con exhibiciones coloridas y atractivas.',
    ageRange: 'Ages 6+',
    ageRangeEs: 'Mayores de 6 años',
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    cost: 'budget',
    highlights: [
      'Interactive art installations',
      'Ocean-view location',
      'Rotating exhibitions',
      'Small and manageable for kids'
    ],
    highlightsEs: [
      'Instalaciones de arte interactivas',
      'Ubicación con vista al mar',
      'Exhibiciones rotativas',
      'Pequeño y manejable para niños'
    ],
    kidRating: 2
  },
  {
    id: 'cooking-class',
    name: 'Family Cooking Class',
    nameEs: 'Clase de Cocina Familiar',
    city: 'Lima / Cusco',
    cityEs: 'Lima / Cusco',
    category: 'food',
    description: 'Learn to make Peruvian dishes together as a family.',
    descriptionEs: 'Aprende a hacer platos peruanos juntos como familia.',
    ageRange: 'Ages 6+',
    ageRangeEs: 'Mayores de 6 años',
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    cost: 'expensive',
    highlights: [
      'Market visit included',
      'Make ceviche, causa, alfajores',
      'Eat what you cook',
      'Family-friendly classes available'
    ],
    highlightsEs: [
      'Visita al mercado incluida',
      'Prepara ceviche, causa, alfajores',
      'Come lo que cocinas',
      'Clases familiares disponibles'
    ],
    kidRating: 3
  },
  {
    id: 'museo-del-nino',
    name: 'MALI Children\'s Museum',
    nameEs: 'Museo del Niño MALI',
    city: 'Lima',
    cityEs: 'Lima',
    category: 'museum',
    description: 'Interactive children\'s section at Lima\'s main art museum.',
    descriptionEs: 'Sección infantil interactiva en el principal museo de arte de Lima.',
    ageRange: 'Ages 3-10',
    ageRangeEs: 'Edades 3-10',
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    cost: 'budget',
    highlights: [
      'Hands-on art activities',
      'Craft workshops on weekends',
      'Beautiful park location',
      'Café with kids menu'
    ],
    highlightsEs: [
      'Actividades de arte prácticas',
      'Talleres de manualidades los fines de semana',
      'Hermosa ubicación en parque',
      'Café con menú para niños'
    ],
    kidRating: 3
  },
  {
    id: 'cinema',
    name: 'Watch a Movie',
    nameEs: 'Ver una Película',
    city: 'Any major city',
    cityEs: 'Cualquier ciudad grande',
    category: 'entertainment',
    description: 'Peruvian cinemas are modern with comfortable seats and affordable prices.',
    descriptionEs: 'Los cines peruanos son modernos con asientos cómodos y precios accesibles.',
    ageRange: 'All ages',
    ageRangeEs: 'Todas las edades',
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    cost: 'budget',
    highlights: [
      'Movies often in English with subtitles',
      'Great popcorn and local snacks',
      'VIP theaters available',
      'Much cheaper than home!'
    ],
    highlightsEs: [
      'Películas a menudo en inglés con subtítulos',
      'Grandes palomitas y snacks locales',
      'Salas VIP disponibles',
      '¡Mucho más barato que en casa!'
    ],
    kidRating: 3
  },
  {
    id: 'inka-museum',
    name: 'Inka Museum',
    nameEs: 'Museo Inka',
    city: 'Cusco',
    cityEs: 'Cusco',
    category: 'museum',
    description: 'Comprehensive museum about Inca civilization with mummies and artifacts.',
    descriptionEs: 'Museo completo sobre la civilización inca con momias y artefactos.',
    ageRange: 'Ages 5+',
    ageRangeEs: 'Mayores de 5 años',
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    cost: 'budget',
    highlights: [
      'Real Inca mummies',
      'Textiles and ceramics',
      'Colonial building',
      'Great for Machu Picchu prep'
    ],
    highlightsEs: [
      'Momias incas reales',
      'Textiles y cerámicas',
      'Edificio colonial',
      'Ideal para prepararse para Machu Picchu'
    ],
    kidRating: 2
  },
  {
    id: 'san-pedro-market',
    name: 'Explore San Pedro Market',
    nameEs: 'Explorar Mercado San Pedro',
    city: 'Cusco',
    cityEs: 'Cusco',
    category: 'cultural',
    description: 'Wander through Cusco\'s main market trying local fruits, juices, and snacks.',
    descriptionEs: 'Pasea por el mercado principal de Cusco probando frutas locales, jugos y snacks.',
    ageRange: 'All ages',
    ageRangeEs: 'Todas las edades',
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    cost: 'budget',
    highlights: [
      'Amazing fresh fruit juices',
      'Try exotic fruits',
      'Covered from rain',
      'Cultural experience'
    ],
    highlightsEs: [
      'Increíbles jugos de frutas frescas',
      'Prueba frutas exóticas',
      'Cubierto de la lluvia',
      'Experiencia cultural'
    ],
    kidRating: 3
  },
  {
    id: 'board-game-cafe',
    name: 'Board Game Café',
    nameEs: 'Café de Juegos de Mesa',
    city: 'Lima / Cusco',
    cityEs: 'Lima / Cusco',
    category: 'entertainment',
    description: 'Cafés with hundreds of board games to play while enjoying hot drinks.',
    descriptionEs: 'Cafés con cientos de juegos de mesa para jugar mientras disfrutas bebidas calientes.',
    ageRange: 'Ages 4+',
    ageRangeEs: 'Mayores de 4 años',
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    cost: 'budget',
    highlights: [
      'Huge game selection',
      'Hot chocolate and snacks',
      'Cozy atmosphere',
      'Great for family bonding'
    ],
    highlightsEs: [
      'Gran selección de juegos',
      'Chocolate caliente y snacks',
      'Atmósfera acogedora',
      'Ideal para unión familiar'
    ],
    kidRating: 3
  },
  {
    id: 'pisco-museum',
    name: 'Pisco Museum (for parents!)',
    nameEs: 'Museo del Pisco (¡para padres!)',
    city: 'Lima / Cusco',
    cityEs: 'Lima / Cusco',
    category: 'cultural',
    description: 'Adults learn about pisco while kids enjoy mocktails and snacks.',
    descriptionEs: 'Los adultos aprenden sobre pisco mientras los niños disfrutan mocktails y snacks.',
    ageRange: 'Adults (kids welcome)',
    ageRangeEs: 'Adultos (niños bienvenidos)',
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    cost: 'moderate',
    highlights: [
      'Pisco tasting for adults',
      'Virgin pisco sour for kids',
      'Snacks included',
      'Educational and fun'
    ],
    highlightsEs: [
      'Degustación de pisco para adultos',
      'Pisco sour virgen para niños',
      'Snacks incluidos',
      'Educativo y divertido'
    ],
    kidRating: 2
  },
  {
    id: 'mall-playground',
    name: 'Shopping Mall Play Areas',
    nameEs: 'Áreas de Juego en Centros Comerciales',
    city: 'Lima / Cusco / Arequipa',
    cityEs: 'Lima / Cusco / Arequipa',
    category: 'entertainment',
    description: 'Modern malls have excellent indoor playgrounds and activities.',
    descriptionEs: 'Los centros comerciales modernos tienen excelentes parques infantiles y actividades.',
    ageRange: 'Ages 2-12',
    ageRangeEs: 'Edades 2-12',
    duration: '1-3 hours',
    durationEs: '1-3 horas',
    cost: 'budget',
    highlights: [
      'Soft play areas',
      'Trampolines and climbing',
      'Video arcades',
      'Food courts nearby'
    ],
    highlightsEs: [
      'Áreas de juego suave',
      'Trampolines y escalada',
      'Arcades de videojuegos',
      'Patios de comida cercanos'
    ],
    kidRating: 3
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'museum': return <Building2 className="h-5 w-5" />;
    case 'food': return <UtensilsCrossed className="h-5 w-5" />;
    case 'entertainment': return <Gamepad2 className="h-5 w-5" />;
    case 'shopping': return <Coffee className="h-5 w-5" />;
    case 'cultural': return <Music className="h-5 w-5" />;
    default: return <Star className="h-5 w-5" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'museum': return 'bg-blue-100 text-blue-800';
    case 'food': return 'bg-orange-100 text-orange-800';
    case 'entertainment': return 'bg-purple-100 text-purple-800';
    case 'shopping': return 'bg-green-100 text-green-800';
    case 'cultural': return 'bg-pink-100 text-pink-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getCostLabel = (cost: string, locale: string) => {
  const labels = {
    free: { en: 'Free', es: 'Gratis' },
    budget: { en: '$', es: '$' },
    moderate: { en: '$$', es: '$$' },
    expensive: { en: '$$$', es: '$$$' }
  };
  return labels[cost as keyof typeof labels]?.[locale === 'es' ? 'es' : 'en'] || cost;
};

export default function RainyDayPage() {
  const { locale } = useI18n();
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const cities = ['all', 'Lima', 'Cusco', 'Other'];
  const categories = ['all', 'museum', 'food', 'entertainment', 'cultural'];

  const filteredActivities = activities.filter(activity => {
    const cityMatch = selectedCity === 'all' ||
      (selectedCity === 'Other'
        ? !activity.city.includes('Lima') && !activity.city.includes('Cusco')
        : activity.city.includes(selectedCity));
    const categoryMatch = selectedCategory === 'all' || activity.category === selectedCategory;
    return cityMatch && categoryMatch;
  });

  const getCategoryLabel = (cat: string) => {
    if (locale === 'es') {
      const labels: Record<string, string> = {
        all: 'Todos',
        museum: 'Museos',
        food: 'Comida',
        entertainment: 'Entretenimiento',
        cultural: 'Cultural'
      };
      return labels[cat] || cat;
    }
    const labels: Record<string, string> = {
      all: 'All',
      museum: 'Museums',
      food: 'Food',
      entertainment: 'Entertainment',
      cultural: 'Cultural'
    };
    return labels[cat] || cat;
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
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-slate-600 to-slate-800 text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <CloudRain className="h-8 w-8" />
              <span className="text-slate-300 font-semibold">
                {locale === 'es' ? 'Días de Lluvia' : 'Rainy Days'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Actividades para Días de Lluvia'
                : 'Rainy Day Activities'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'La lluvia no tiene que arruinar tu día. Descubre actividades bajo techo divertidas para toda la familia.'
                : 'Rain doesn\'t have to ruin your day. Discover fun indoor activities for the whole family.'}
            </p>
          </div>
        </div>
      </section>

      {/* Rainy Season Info */}
      <section className="bg-blue-50 py-6">
        <div className="container-peru">
          <div className="flex items-center justify-center space-x-4">
            <CloudRain className="h-6 w-6 text-blue-600" />
            <p className="text-blue-800 text-center">
              {locale === 'es'
                ? 'La temporada de lluvias en Perú es de noviembre a marzo, especialmente en la sierra y selva. ¡Siempre ten un plan B!'
                : 'Peru\'s rainy season is November to March, especially in the highlands and jungle. Always have a Plan B!'}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* City Filter */}
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div className="flex gap-2">
                {cities.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedCity === city
                        ? 'bg-peru-terracotta text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {city === 'all'
                      ? (locale === 'es' ? 'Todas' : 'All')
                      : city === 'Other'
                      ? (locale === 'es' ? 'Otras' : 'Other')
                      : city}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-6 w-px bg-gray-300" />

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCategory === cat
                      ? 'bg-peru-earth text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12">
        <div className="container-peru">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <CloudRain className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">
                {locale === 'es'
                  ? 'No hay actividades que coincidan con tus filtros.'
                  : 'No activities match your filters.'}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-peru-earth text-lg">
                          {locale === 'es' ? activity.nameEs : activity.name}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {locale === 'es' ? activity.cityEs : activity.city}
                        </p>
                      </div>
                      <span className={`flex items-center space-x-1 text-xs px-2 py-1 rounded-full ${getCategoryColor(activity.category)}`}>
                        {getCategoryIcon(activity.category)}
                        <span>{getCategoryLabel(activity.category)}</span>
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {locale === 'es' ? activity.descriptionEs : activity.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        <Baby className="h-3 w-3 mr-1" />
                        {locale === 'es' ? activity.ageRangeEs : activity.ageRange}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        <Clock className="h-3 w-3 mr-1" />
                        {locale === 'es' ? activity.durationEs : activity.duration}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        <DollarSign className="h-3 w-3 mr-1" />
                        {getCostLabel(activity.cost, locale)}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-500">
                          {locale === 'es' ? 'Destacados:' : 'Highlights:'}
                        </span>
                        <div className="flex items-center">
                          <Baby className="h-3 w-3 mr-1 text-gray-400" />
                          {getKidRatingStars(activity.kidRating)}
                        </div>
                      </div>
                      <ul className="space-y-1">
                        {(locale === 'es' ? activity.highlightsEs : activity.highlights).slice(0, 3).map((h, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-start">
                            <span className="text-peru-gold mr-1">•</span>
                            {h}
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

      {/* Quick Tips */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos para Días de Lluvia' : 'Rainy Day Tips'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-peru-sand/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-peru-terracotta" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Lleva Actividades' : 'Bring Activities'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Libros para colorear, cartas y juegos portátiles para el hotel.'
                  : 'Coloring books, cards, and portable games for the hotel.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-peru-sand/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-6 w-6 text-peru-terracotta" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Café del Día' : 'Café Day'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Los cafés peruanos son acogedores. Perfecto para chocolate caliente y juegos.'
                  : 'Peruvian cafés are cozy. Perfect for hot chocolate and games.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-peru-sand/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-peru-terracotta" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Día de Diario' : 'Journal Day'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Los niños pueden dibujar y escribir sobre sus aventuras.'
                  : 'Kids can draw and write about their adventures.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="bg-peru-sand/50 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Theater className="h-6 w-6 text-peru-terracotta" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Hotel con Piscina' : 'Pool Hotel'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Muchos hoteles tienen piscinas climatizadas - ¡diversión garantizada!'
                  : 'Many hotels have heated pools - guaranteed fun!'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Note */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto text-center">
            <CloudRain className="h-12 w-12 mx-auto mb-4 text-peru-gold" />
            <h2 className="text-2xl font-display font-bold mb-4">
              {locale === 'es'
                ? 'Recuerda: La Lluvia es Parte de la Aventura'
                : 'Remember: Rain is Part of the Adventure'}
            </h2>
            <p className="text-white/90">
              {locale === 'es'
                ? 'Algunas de las mejores memorias familiares se crean cuando los planes cambian. La lluvia te da la oportunidad de explorar lugares que de otra forma podrías pasar por alto, y de disfrutar momentos tranquilos juntos.'
                : 'Some of the best family memories are made when plans change. Rain gives you the chance to explore places you might otherwise skip, and to enjoy quiet moments together.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
