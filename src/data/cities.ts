// Comprehensive Peru destinations data for individual pages

export interface City {
  slug: string;
  name: string;
  nameEs: string;
  region: string;
  regionEs: string;
  altitude: number;
  population: string;
  description: string;
  descriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  bestMonths: number[];
  minDays: number;
  nearbyAttractions: string[]; // slugs
  relatedCities: string[]; // slugs
  activities: string[]; // slugs
  heroImage?: string;
  climate: string;
  climateEs: string;
  gettingThere: string;
  gettingThereEs: string;
  familyTips: string[];
  familyTipsEs: string[];
  restaurants: { name: string; type: string; kidFriendly: boolean }[];
  hotels: { name: string; type: string; priceRange: string }[];
}

export interface Site {
  slug: string;
  name: string;
  nameEs: string;
  type: 'archaeological' | 'natural' | 'cultural' | 'museum';
  city: string; // city slug
  region: string;
  regionEs: string;
  description: string;
  descriptionEs: string;
  history: string;
  historyEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  minAge: number;
  duration: string;
  durationEs: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  altitude?: number;
  entranceFee: string;
  bestTime: string;
  bestTimeEs: string;
  tips: string[];
  tipsEs: string[];
  nearbyAttractions: string[];
  relatedSites: string[];
}

export interface Activity {
  slug: string;
  name: string;
  nameEs: string;
  category: 'adventure' | 'cultural' | 'nature' | 'food' | 'family' | 'relaxation';
  cities: string[]; // city slugs where available
  description: string;
  descriptionEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  minAge: number;
  duration: string;
  durationEs: string;
  priceRange: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  bestMonths: number[];
  whatToExpect: string[];
  whatToExpectEs: string[];
  tips: string[];
  tipsEs: string[];
  relatedActivities: string[];
}

export interface Festival {
  slug: string;
  name: string;
  nameEs: string;
  city: string; // city slug
  region: string;
  regionEs: string;
  month: number;
  dates: string;
  datesEs: string;
  description: string;
  descriptionEs: string;
  history: string;
  historyEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  crowdLevel: 'low' | 'medium' | 'high';
  whatToExpect: string[];
  whatToExpectEs: string[];
  tips: string[];
  tipsEs: string[];
  relatedFestivals: string[];
}

// ============ CITIES DATA ============

export const cities: City[] = [
  {
    slug: 'lima',
    name: 'Lima',
    nameEs: 'Lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 154,
    population: '10+ million',
    description: 'Peru\'s vibrant capital city combines colonial history, world-class cuisine, and Pacific Ocean beaches. As the gastronomic capital of South America, Lima offers families incredible food experiences alongside fascinating museums and beautiful parks.',
    descriptionEs: 'La vibrante capital de Perú combina historia colonial, gastronomía de clase mundial y playas del Océano Pacífico. Como capital gastronómica de Sudamérica, Lima ofrece a las familias experiencias culinarias increíbles junto con museos fascinantes y hermosos parques.',
    highlights: [
      'World-famous food scene with kid-friendly options',
      'Miraflores oceanfront parks and playgrounds',
      'Larco Museum with pre-Columbian treasures',
      'Historic downtown and Plaza Mayor',
      'Paragliding over the Pacific cliffs'
    ],
    highlightsEs: [
      'Escena gastronómica mundialmente famosa con opciones para niños',
      'Parques y juegos frente al mar en Miraflores',
      'Museo Larco con tesoros precolombinos',
      'Centro histórico y Plaza Mayor',
      'Parapente sobre los acantilados del Pacífico'
    ],
    familyRating: 5,
    bestMonths: [12, 1, 2, 3, 4],
    minDays: 2,
    nearbyAttractions: ['pachacamac', 'caral', 'paracas'],
    relatedCities: ['cusco', 'arequipa', 'paracas'],
    activities: ['food-tour', 'cooking-class', 'paragliding', 'surfing'],
    climate: 'Mild year-round with coastal fog (garúa) May-November. Warm and sunny December-April.',
    climateEs: 'Templado todo el año con niebla costera (garúa) mayo-noviembre. Cálido y soleado diciembre-abril.',
    gettingThere: 'Jorge Chávez International Airport (LIM) is the main gateway to Peru. Located 45 minutes from Miraflores.',
    gettingThereEs: 'El Aeropuerto Internacional Jorge Chávez (LIM) es la puerta principal a Perú. Ubicado a 45 minutos de Miraflores.',
    familyTips: [
      'Stay in Miraflores for the best family-friendly area',
      'Kennedy Park has cats and a small playground',
      'Take the Metropolitano bus for an easy city experience',
      'Larcomar mall has ocean views and family dining',
      'Book food tours that include kids'
    ],
    familyTipsEs: [
      'Quédate en Miraflores para la mejor zona familiar',
      'El Parque Kennedy tiene gatos y un pequeño parque infantil',
      'Toma el Metropolitano para una experiencia urbana fácil',
      'El centro comercial Larcomar tiene vistas al mar y restaurantes familiares',
      'Reserva tours gastronómicos que incluyan niños'
    ],
    restaurants: [
      { name: 'La Mar', type: 'Cevichería', kidFriendly: true },
      { name: 'Tanta', type: 'Peruvian', kidFriendly: true },
      { name: 'Mangos', type: 'International', kidFriendly: true },
      { name: 'El Mercado', type: 'Seafood', kidFriendly: true },
      { name: 'Panchita', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'JW Marriott Lima', type: 'Luxury', priceRange: '$$$' },
      { name: 'Belmond Miraflores Park', type: 'Luxury', priceRange: '$$$' },
      { name: 'Casa Andina Premium', type: 'Mid-range', priceRange: '$$' },
      { name: 'Ibis Larco', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'cusco',
    name: 'Cusco',
    nameEs: 'Cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3400,
    population: '430,000',
    description: 'The ancient capital of the Inca Empire is a UNESCO World Heritage Site filled with stunning colonial architecture built on Inca foundations. Cusco is the gateway to Machu Picchu and the Sacred Valley, making it the heart of any Peru family adventure.',
    descriptionEs: 'La antigua capital del Imperio Inca es Patrimonio de la Humanidad de la UNESCO, llena de impresionante arquitectura colonial construida sobre cimientos incas. Cusco es la puerta de entrada a Machu Picchu y el Valle Sagrado, convirtiéndolo en el corazón de cualquier aventura familiar en Perú.',
    highlights: [
      'Plaza de Armas with colonial architecture',
      'San Pedro Market for local experiences',
      'Sacsayhuamán fortress ruins',
      'Gateway to Machu Picchu',
      'Traditional weaving demonstrations'
    ],
    highlightsEs: [
      'Plaza de Armas con arquitectura colonial',
      'Mercado de San Pedro para experiencias locales',
      'Ruinas de la fortaleza de Sacsayhuamán',
      'Puerta de entrada a Machu Picchu',
      'Demostraciones de tejido tradicional'
    ],
    familyRating: 5,
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    minDays: 3,
    nearbyAttractions: ['sacsayhuaman', 'qenqo', 'tambomachay', 'machu-picchu'],
    relatedCities: ['sacred-valley', 'aguas-calientes', 'puno'],
    activities: ['city-walking-tour', 'cooking-class', 'chocolate-workshop', 'weaving-class'],
    climate: 'Dry season April-October with cold nights. Rainy season November-March with afternoon showers.',
    climateEs: 'Temporada seca abril-octubre con noches frías. Temporada de lluvias noviembre-marzo con lluvias por la tarde.',
    gettingThere: 'Alejandro Velasco Astete Airport (CUZ) has daily flights from Lima (1 hour). Also accessible by bus or train.',
    gettingThereEs: 'El Aeropuerto Alejandro Velasco Astete (CUZ) tiene vuelos diarios desde Lima (1 hora). También accesible en bus o tren.',
    familyTips: [
      'Arrive and rest first day to acclimatize to altitude',
      'Drink coca tea to help with altitude sickness',
      'Book afternoon flights to give bodies time to adjust',
      'Plaza de Armas has llamas for photos',
      'San Blas neighborhood is charming for walking'
    ],
    familyTipsEs: [
      'Llega y descansa el primer día para aclimatarte a la altitud',
      'Bebe té de coca para ayudar con el mal de altura',
      'Reserva vuelos por la tarde para dar tiempo al cuerpo de ajustarse',
      'La Plaza de Armas tiene llamas para fotos',
      'El barrio de San Blas es encantador para caminar'
    ],
    restaurants: [
      { name: 'Chicha', type: 'Peruvian', kidFriendly: true },
      { name: 'Cicciolina', type: 'International', kidFriendly: true },
      { name: 'Jack\'s Café', type: 'Breakfast', kidFriendly: true },
      { name: 'Green Point', type: 'Vegetarian', kidFriendly: true },
      { name: 'Pachapapa', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Belmond Hotel Monasterio', type: 'Luxury', priceRange: '$$$' },
      { name: 'Palacio del Inka', type: 'Luxury', priceRange: '$$$' },
      { name: 'Casa Andina Premium', type: 'Mid-range', priceRange: '$$' },
      { name: 'Selina Cusco', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'sacred-valley',
    name: 'Sacred Valley',
    nameEs: 'Valle Sagrado',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2800,
    population: 'Various towns',
    description: 'The Sacred Valley of the Incas stretches between Cusco and Machu Picchu, featuring stunning Andean scenery, ancient ruins, traditional villages, and a lower altitude that\'s easier on families. It\'s an essential stop for experiencing authentic Andean culture.',
    descriptionEs: 'El Valle Sagrado de los Incas se extiende entre Cusco y Machu Picchu, con impresionantes paisajes andinos, ruinas antiguas, pueblos tradicionales y una altitud más baja que es más fácil para las familias. Es una parada esencial para experimentar la cultura andina auténtica.',
    highlights: [
      'Ollantaytambo fortress and living Inca town',
      'Pisac ruins and famous market',
      'Moray circular terraces',
      'Maras salt mines',
      'Traditional Andean communities'
    ],
    highlightsEs: [
      'Fortaleza de Ollantaytambo y pueblo inca viviente',
      'Ruinas de Pisac y famoso mercado',
      'Terrazas circulares de Moray',
      'Salineras de Maras',
      'Comunidades andinas tradicionales'
    ],
    familyRating: 5,
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    minDays: 2,
    nearbyAttractions: ['ollantaytambo', 'pisac', 'moray', 'maras-salt-mines', 'chinchero'],
    relatedCities: ['cusco', 'aguas-calientes'],
    activities: ['horseback-riding', 'zip-lining', 'river-rafting', 'mountain-biking', 'weaving-class'],
    climate: 'Similar to Cusco but slightly warmer due to lower altitude. Dry season April-October is best.',
    climateEs: 'Similar a Cusco pero ligeramente más cálido por la menor altitud. La temporada seca abril-octubre es mejor.',
    gettingThere: '1-2 hour drive from Cusco. Many tours include valley visits. Can also take local colectivos.',
    gettingThereEs: '1-2 horas en auto desde Cusco. Muchos tours incluyen visitas al valle. También se pueden tomar colectivos locales.',
    familyTips: [
      'Consider staying here instead of Cusco for easier altitude adjustment',
      'Sunday Pisac market is huge but crowded',
      'Book a family-friendly hacienda for an authentic experience',
      'Combine Moray and Maras salt mines in one visit',
      'Ollantaytambo is the best base for Machu Picchu train'
    ],
    familyTipsEs: [
      'Considera quedarte aquí en lugar de Cusco para una adaptación más fácil a la altitud',
      'El mercado de Pisac del domingo es enorme pero concurrido',
      'Reserva una hacienda familiar para una experiencia auténtica',
      'Combina Moray y las salineras de Maras en una visita',
      'Ollantaytambo es la mejor base para el tren a Machu Picchu'
    ],
    restaurants: [
      { name: 'El Huacatay', type: 'Peruvian', kidFriendly: true },
      { name: 'Chuncho', type: 'Peruvian', kidFriendly: true },
      { name: 'Tres Keros', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Belmond Rio Sagrado', type: 'Luxury', priceRange: '$$$' },
      { name: 'Tambo del Inka', type: 'Luxury', priceRange: '$$$' },
      { name: 'Sol y Luna', type: 'Mid-range', priceRange: '$$' },
      { name: 'Pakaritampu', type: 'Mid-range', priceRange: '$$' }
    ]
  },
  {
    slug: 'aguas-calientes',
    name: 'Aguas Calientes',
    nameEs: 'Aguas Calientes',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2040,
    population: '5,000',
    description: 'Also known as Machu Picchu Pueblo, this small town at the base of Machu Picchu is the gateway to the famous citadel. While primarily a transit point, it offers hot springs, markets, and the chance to explore the ruins at sunrise.',
    descriptionEs: 'También conocido como Machu Picchu Pueblo, este pequeño pueblo en la base de Machu Picchu es la puerta de entrada a la famosa ciudadela. Aunque es principalmente un punto de tránsito, ofrece aguas termales, mercados y la oportunidad de explorar las ruinas al amanecer.',
    highlights: [
      'Gateway to Machu Picchu',
      'Hot springs (aguas calientes)',
      'Artisan market',
      'Scenic train journey',
      'Manuel Chávez Ballón Museum'
    ],
    highlightsEs: [
      'Puerta de entrada a Machu Picchu',
      'Aguas termales',
      'Mercado artesanal',
      'Viaje escénico en tren',
      'Museo Manuel Chávez Ballón'
    ],
    familyRating: 4,
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    minDays: 1,
    nearbyAttractions: ['machu-picchu', 'huayna-picchu', 'sun-gate'],
    relatedCities: ['cusco', 'sacred-valley'],
    activities: ['hot-springs', 'machu-picchu-visit', 'hiking'],
    climate: 'Warmer and more humid than Cusco due to lower altitude and jungle location. Rain possible year-round.',
    climateEs: 'Más cálido y húmedo que Cusco debido a la menor altitud y ubicación selvática. Lluvia posible todo el año.',
    gettingThere: 'Only accessible by train from Ollantaytambo or Poroy (near Cusco), or by hiking the Inca Trail.',
    gettingThereEs: 'Solo accesible en tren desde Ollantaytambo o Poroy (cerca de Cusco), o caminando el Camino Inca.',
    familyTips: [
      'Stay overnight to visit Machu Picchu at sunrise',
      'Book train tickets well in advance',
      'The hot springs are fun after a day at the ruins',
      'Bring cash - ATMs are limited',
      'Restaurant prices are higher here than elsewhere'
    ],
    familyTipsEs: [
      'Quédate una noche para visitar Machu Picchu al amanecer',
      'Reserva boletos de tren con mucha anticipación',
      'Las aguas termales son divertidas después de un día en las ruinas',
      'Trae efectivo - los cajeros automáticos son limitados',
      'Los precios de restaurantes son más altos aquí que en otros lugares'
    ],
    restaurants: [
      { name: 'Indio Feliz', type: 'French-Peruvian', kidFriendly: true },
      { name: 'El Mapi Restaurant', type: 'Buffet', kidFriendly: true },
      { name: 'Toto\'s House', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Belmond Sanctuary Lodge', type: 'Luxury', priceRange: '$$$' },
      { name: 'Inkaterra Machu Picchu', type: 'Luxury', priceRange: '$$$' },
      { name: 'El Mapi by Inkaterra', type: 'Mid-range', priceRange: '$$' },
      { name: 'Casa del Sol', type: 'Mid-range', priceRange: '$$' }
    ]
  },
  {
    slug: 'arequipa',
    name: 'Arequipa',
    nameEs: 'Arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    altitude: 2335,
    population: '1 million',
    description: 'Known as the "White City" for its stunning colonial architecture built from white volcanic stone, Arequipa sits beneath three volcanoes. It\'s the gateway to Colca Canyon and offers a perfect blend of culture, cuisine, and adventure for families.',
    descriptionEs: 'Conocida como la "Ciudad Blanca" por su impresionante arquitectura colonial construida con piedra volcánica blanca, Arequipa se encuentra bajo tres volcanes. Es la puerta de entrada al Cañón del Colca y ofrece una mezcla perfecta de cultura, gastronomía y aventura para familias.',
    highlights: [
      'Santa Catalina Monastery',
      'Plaza de Armas and Cathedral',
      'Gateway to Colca Canyon',
      'Juanita the Ice Maiden mummy',
      'Delicious regional cuisine'
    ],
    highlightsEs: [
      'Monasterio de Santa Catalina',
      'Plaza de Armas y Catedral',
      'Puerta de entrada al Cañón del Colca',
      'Momia Juanita la Doncella de Hielo',
      'Deliciosa cocina regional'
    ],
    familyRating: 4,
    bestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    minDays: 2,
    nearbyAttractions: ['colca-canyon', 'misti-volcano', 'salinas-aguada-blanca'],
    relatedCities: ['puno', 'cusco'],
    activities: ['city-walking-tour', 'cooking-class', 'canyon-trekking', 'hot-springs'],
    climate: 'Sunny and dry most of the year. Mild temperatures. Occasional rain December-March.',
    climateEs: 'Soleado y seco la mayor parte del año. Temperaturas templadas. Lluvias ocasionales diciembre-marzo.',
    gettingThere: 'Rodríguez Ballón Airport has daily flights from Lima (1.5 hours). Also accessible by bus from Lima, Cusco, or Puno.',
    gettingThereEs: 'El Aeropuerto Rodríguez Ballón tiene vuelos diarios desde Lima (1.5 horas). También accesible en bus desde Lima, Cusco o Puno.',
    familyTips: [
      'Santa Catalina Monastery is like a city within a city - kids love exploring',
      'The altitude is lower than Cusco, making it easier for acclimatization',
      'Try rocoto relleno (stuffed pepper) - get mild version for kids',
      'Yanahuara viewpoint has great volcano views',
      'Book 2-day Colca Canyon trips rather than day trips'
    ],
    familyTipsEs: [
      'El Monasterio de Santa Catalina es como una ciudad dentro de otra - a los niños les encanta explorar',
      'La altitud es más baja que Cusco, facilitando la aclimatación',
      'Prueba el rocoto relleno - pide versión suave para niños',
      'El mirador de Yanahuara tiene excelentes vistas de los volcanes',
      'Reserva viajes de 2 días al Cañón del Colca en lugar de viajes de un día'
    ],
    restaurants: [
      { name: 'Zig Zag', type: 'Peruvian', kidFriendly: true },
      { name: 'La Nueva Palomino', type: 'Peruvian', kidFriendly: true },
      { name: 'Chicha', type: 'Peruvian', kidFriendly: true },
      { name: 'Crepisimo', type: 'Crepes', kidFriendly: true }
    ],
    hotels: [
      { name: 'Casa Andina Premium', type: 'Mid-range', priceRange: '$$' },
      { name: 'Libertador Arequipa', type: 'Luxury', priceRange: '$$$' },
      { name: 'Katari Hotel', type: 'Mid-range', priceRange: '$$' },
      { name: 'Hotel Fundador', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'puno',
    name: 'Puno',
    nameEs: 'Puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3830,
    population: '150,000',
    description: 'Perched on the shores of Lake Titicaca, Puno is known as Peru\'s folklore capital. This high-altitude city is the gateway to the mystical lake, floating islands, and ancient Aymara culture that has survived for millennia.',
    descriptionEs: 'Situada en las orillas del Lago Titicaca, Puno es conocida como la capital del folclore peruano. Esta ciudad de gran altitud es la puerta de entrada al místico lago, las islas flotantes y la antigua cultura aymara que ha sobrevivido por milenios.',
    highlights: [
      'Lake Titicaca boat tours',
      'Uros Floating Islands',
      'Taquile Island',
      'Sillustani funeral towers',
      'Folklore festivals and dances'
    ],
    highlightsEs: [
      'Tours en barco por el Lago Titicaca',
      'Islas Flotantes de los Uros',
      'Isla Taquile',
      'Torres funerarias de Sillustani',
      'Festivales y danzas folclóricas'
    ],
    familyRating: 4,
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    minDays: 2,
    nearbyAttractions: ['uros-islands', 'taquile-island', 'amantani-island', 'sillustani'],
    relatedCities: ['cusco', 'arequipa', 'copacabana'],
    activities: ['boat-tour', 'homestay', 'kayaking', 'cultural-experience'],
    climate: 'High altitude with cold nights year-round. Dry season April-October. Can be very cold June-August.',
    climateEs: 'Gran altitud con noches frías todo el año. Temporada seca abril-octubre. Puede ser muy frío junio-agosto.',
    gettingThere: 'Inca Manco Cápac Airport has limited flights from Lima. Most visitors arrive by bus from Cusco (6-7 hours) or Arequipa (5 hours).',
    gettingThereEs: 'El Aeropuerto Inca Manco Cápac tiene vuelos limitados desde Lima. La mayoría de visitantes llegan en bus desde Cusco (6-7 horas) o Arequipa (5 horas).',
    familyTips: [
      'This is the highest major destination - take altitude seriously',
      'Uros islands are amazing for kids - walking on reeds!',
      'Consider an overnight homestay on Amantaní Island',
      'Bring warm layers - it gets very cold',
      'February\'s Candelaria festival is incredible but crowded'
    ],
    familyTipsEs: [
      'Este es el destino principal más alto - toma la altitud en serio',
      'Las islas de los Uros son increíbles para niños - ¡caminar sobre totora!',
      'Considera una estadía con familias en la Isla Amantaní',
      'Trae capas abrigadas - hace mucho frío',
      'El festival de la Candelaria en febrero es increíble pero concurrido'
    ],
    restaurants: [
      { name: 'La Casona', type: 'Peruvian', kidFriendly: true },
      { name: 'Mojsa Restaurant', type: 'Peruvian', kidFriendly: true },
      { name: 'Balcones de Puno', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Titilaka', type: 'Luxury', priceRange: '$$$' },
      { name: 'Libertador Lago Titicaca', type: 'Luxury', priceRange: '$$$' },
      { name: 'Casa Andina Premium', type: 'Mid-range', priceRange: '$$' },
      { name: 'Hotel Hacienda Puno', type: 'Mid-range', priceRange: '$$' }
    ]
  },
  {
    slug: 'iquitos',
    name: 'Iquitos',
    nameEs: 'Iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    altitude: 104,
    population: '500,000',
    description: 'The largest city in the world unreachable by road, Iquitos is the gateway to the Peruvian Amazon. This jungle city offers families an incredible opportunity to experience rainforest wildlife, indigenous cultures, and the mighty Amazon River.',
    descriptionEs: 'La ciudad más grande del mundo inaccesible por carretera, Iquitos es la puerta de entrada a la Amazonía peruana. Esta ciudad selvática ofrece a las familias una oportunidad increíble de experimentar la vida silvestre de la selva, culturas indígenas y el poderoso Río Amazonas.',
    highlights: [
      'Amazon River and tributaries',
      'Jungle lodges and wildlife',
      'Pink river dolphins',
      'Indigenous communities',
      'Belén floating market'
    ],
    highlightsEs: [
      'Río Amazonas y tributarios',
      'Lodges de selva y vida silvestre',
      'Delfines rosados',
      'Comunidades indígenas',
      'Mercado flotante de Belén'
    ],
    familyRating: 4,
    bestMonths: [5, 6, 7, 8, 9, 10],
    minDays: 3,
    nearbyAttractions: ['pacaya-samiria', 'amazon-river', 'rescue-centers'],
    relatedCities: ['lima', 'tarapoto'],
    activities: ['jungle-lodge', 'wildlife-spotting', 'piranha-fishing', 'night-safari', 'canopy-walk'],
    climate: 'Hot and humid year-round (25-35°C). Rainy season December-May. Dry season June-November is best for wildlife.',
    climateEs: 'Caliente y húmedo todo el año (25-35°C). Temporada de lluvias diciembre-mayo. Temporada seca junio-noviembre es mejor para vida silvestre.',
    gettingThere: 'Francisco Secada Vignetta Airport has daily flights from Lima (2 hours). No road access.',
    gettingThereEs: 'El Aeropuerto Francisco Secada Vignetta tiene vuelos diarios desde Lima (2 horas). Sin acceso por carretera.',
    familyTips: [
      'Book a jungle lodge rather than staying in the city',
      'Pack insect repellent and long sleeves',
      'Pink dolphins are amazing for kids',
      'Piranha fishing is safe and fun for families',
      'Choose lodges with family-friendly programs'
    ],
    familyTipsEs: [
      'Reserva un lodge de selva en lugar de quedarte en la ciudad',
      'Empaca repelente de insectos y mangas largas',
      'Los delfines rosados son increíbles para niños',
      'La pesca de pirañas es segura y divertida para familias',
      'Elige lodges con programas familiares'
    ],
    restaurants: [
      { name: 'Al Frío y al Fuego', type: 'Amazonian', kidFriendly: true },
      { name: 'Fitzcarraldo', type: 'International', kidFriendly: true },
      { name: 'Amazon Bistro', type: 'Amazonian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Delfin Amazon Cruises', type: 'Luxury', priceRange: '$$$' },
      { name: 'Treehouse Lodge', type: 'Eco-lodge', priceRange: '$$$' },
      { name: 'Heliconia Lodge', type: 'Mid-range', priceRange: '$$' },
      { name: 'Muyuna Lodge', type: 'Mid-range', priceRange: '$$' }
    ]
  },
  {
    slug: 'nazca',
    name: 'Nazca',
    nameEs: 'Nazca',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 520,
    population: '30,000',
    description: 'Home to the mysterious Nazca Lines, this desert town offers one of the world\'s great archaeological mysteries. The enormous geoglyphs, best seen from the air, have puzzled scientists for decades and captivate visitors of all ages.',
    descriptionEs: 'Hogar de las misteriosas Líneas de Nazca, este pueblo desértico ofrece uno de los grandes misterios arqueológicos del mundo. Los enormes geoglifos, mejor vistos desde el aire, han desconcertado a los científicos por décadas y cautivan a visitantes de todas las edades.',
    highlights: [
      'Nazca Lines flight',
      'Observation tower',
      'Chauchilla Cemetery',
      'Cantalloc Aqueducts',
      'Maria Reiche Museum'
    ],
    highlightsEs: [
      'Vuelo sobre las Líneas de Nazca',
      'Torre de observación',
      'Cementerio de Chauchilla',
      'Acueductos de Cantalloc',
      'Museo María Reiche'
    ],
    familyRating: 3,
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    minDays: 1,
    nearbyAttractions: ['nazca-lines', 'chauchilla', 'cantalloc', 'palpa-lines'],
    relatedCities: ['ica', 'paracas', 'arequipa'],
    activities: ['scenic-flight', 'archaeology-tour', 'sandboarding'],
    climate: 'Desert climate - hot and dry year-round. Very sunny with little to no rain.',
    climateEs: 'Clima desértico - caliente y seco todo el año. Muy soleado con poca o ninguna lluvia.',
    gettingThere: 'Most visitors come by bus from Lima (7 hours) or Arequipa (9 hours). Small airport for Nazca Lines flights.',
    gettingThereEs: 'La mayoría de visitantes llegan en bus desde Lima (7 horas) o Arequipa (9 horas). Pequeño aeropuerto para vuelos sobre las Líneas de Nazca.',
    familyTips: [
      'Flight can cause motion sickness - consider medication',
      'Observation tower shows 2 figures if kids can\'t fly',
      'Early morning flights have clearer skies',
      'Chauchilla Cemetery has real mummies - check if appropriate',
      'Combine with Huacachina for a 2-day desert adventure'
    ],
    familyTipsEs: [
      'El vuelo puede causar mareo - considera medicamento',
      'La torre de observación muestra 2 figuras si los niños no pueden volar',
      'Los vuelos temprano en la mañana tienen cielos más claros',
      'El Cementerio de Chauchilla tiene momias reales - verifica si es apropiado',
      'Combina con Huacachina para una aventura de 2 días en el desierto'
    ],
    restaurants: [
      { name: 'La Encantada', type: 'Peruvian', kidFriendly: true },
      { name: 'El Portón', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Hotel Cantayo', type: 'Mid-range', priceRange: '$$' },
      { name: 'DM Hoteles Nasca', type: 'Mid-range', priceRange: '$$' },
      { name: 'Nazca Lines Hotel', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'huacachina',
    name: 'Huacachina',
    nameEs: 'Huacachina',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 406,
    population: '100',
    description: 'A magical desert oasis surrounded by towering sand dunes, Huacachina looks like something from a dream. This tiny village built around a natural lagoon is one of Peru\'s most photogenic spots and a playground for adventure seekers.',
    descriptionEs: 'Un oasis mágico en el desierto rodeado de imponentes dunas de arena, Huacachina parece algo de un sueño. Este pequeño pueblo construido alrededor de una laguna natural es uno de los lugares más fotogénicos de Perú y un patio de juegos para buscadores de aventura.',
    highlights: [
      'Sandboarding on massive dunes',
      'Dune buggy rides',
      'Sunset over the oasis',
      'Paddle boats on the lagoon',
      'Desert stargazing'
    ],
    highlightsEs: [
      'Sandboard en dunas masivas',
      'Paseos en buggy',
      'Atardecer sobre el oasis',
      'Botes a pedal en la laguna',
      'Observación de estrellas en el desierto'
    ],
    familyRating: 5,
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    minDays: 1,
    nearbyAttractions: ['ica-wineries', 'nazca-lines', 'paracas'],
    relatedCities: ['ica', 'nazca', 'paracas'],
    activities: ['sandboarding', 'dune-buggy', 'paddleboating'],
    climate: 'Desert climate - hot days, cool nights. Sunny year-round with virtually no rain.',
    climateEs: 'Clima desértico - días calientes, noches frescas. Soleado todo el año con prácticamente nada de lluvia.',
    gettingThere: '5km from Ica city, 4 hours from Lima by bus. Easy taxi ride from Ica.',
    gettingThereEs: '5km de la ciudad de Ica, 4 horas desde Lima en bus. Fácil viaje en taxi desde Ica.',
    familyTips: [
      'Sunset dune buggy tours are the highlight',
      'Sandboarding can be done lying down (easier for kids)',
      'Bring sunscreen and sunglasses - it\'s very bright',
      'The oasis is small - one night is enough',
      'Book buggy tours from established operators for safety'
    ],
    familyTipsEs: [
      'Los tours de buggy al atardecer son lo mejor',
      'El sandboard se puede hacer acostado (más fácil para niños)',
      'Trae protector solar y gafas de sol - es muy brillante',
      'El oasis es pequeño - una noche es suficiente',
      'Reserva tours de buggy con operadores establecidos por seguridad'
    ],
    restaurants: [
      { name: 'Huacachina to Go', type: 'International', kidFriendly: true },
      { name: 'Wild Olive', type: 'Mediterranean', kidFriendly: true }
    ],
    hotels: [
      { name: 'Hotel Viñas Queirolo', type: 'Mid-range', priceRange: '$$' },
      { name: 'Hostería Suiza', type: 'Mid-range', priceRange: '$$' },
      { name: 'Desert Nights', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'paracas',
    name: 'Paracas',
    nameEs: 'Paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 5,
    population: '5,000',
    description: 'A coastal desert paradise, Paracas is the gateway to the Ballestas Islands and the stunning Paracas National Reserve. Often called "Peru\'s Galápagos," this area teems with marine wildlife including sea lions, penguins, and countless seabirds.',
    descriptionEs: 'Un paraíso costero desértico, Paracas es la puerta de entrada a las Islas Ballestas y la impresionante Reserva Nacional de Paracas. A menudo llamada "las Galápagos de Perú", esta área está llena de vida marina incluyendo lobos marinos, pingüinos e innumerables aves marinas.',
    highlights: [
      'Ballestas Islands boat tour',
      'Paracas National Reserve',
      'Sea lions and Humboldt penguins',
      'Red Beach (Playa Roja)',
      'Seafood restaurants'
    ],
    highlightsEs: [
      'Tour en bote a las Islas Ballestas',
      'Reserva Nacional de Paracas',
      'Lobos marinos y pingüinos de Humboldt',
      'Playa Roja',
      'Restaurantes de mariscos'
    ],
    familyRating: 5,
    bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    minDays: 1,
    nearbyAttractions: ['ballestas-islands', 'paracas-reserve', 'candelabra'],
    relatedCities: ['ica', 'huacachina', 'lima'],
    activities: ['boat-tour', 'wildlife-watching', 'beach', 'kayaking'],
    climate: 'Desert coastal climate - sunny and dry year-round. Can be windy, especially afternoons.',
    climateEs: 'Clima costero desértico - soleado y seco todo el año. Puede ser ventoso, especialmente por las tardes.',
    gettingThere: '3.5 hours from Lima by bus. Easy day trip or overnight from Lima.',
    gettingThereEs: '3.5 horas desde Lima en bus. Fácil viaje de un día o noche desde Lima.',
    familyTips: [
      'Morning Ballestas tours have calmer seas',
      'Bring layers - boats can be cold and windy',
      'Kids love seeing sea lions up close',
      'Combine with Huacachina for a 2-day coastal adventure',
      'The reserve has dramatic red and yellow cliffs'
    ],
    familyTipsEs: [
      'Los tours matutinos a Ballestas tienen mares más calmados',
      'Trae capas - los botes pueden ser fríos y ventosos',
      'A los niños les encanta ver lobos marinos de cerca',
      'Combina con Huacachina para una aventura costera de 2 días',
      'La reserva tiene dramáticos acantilados rojos y amarillos'
    ],
    restaurants: [
      { name: 'El Chorrito', type: 'Seafood', kidFriendly: true },
      { name: 'Punta del Mar', type: 'Seafood', kidFriendly: true }
    ],
    hotels: [
      { name: 'Hotel Paracas', type: 'Luxury', priceRange: '$$$' },
      { name: 'DoubleTree by Hilton', type: 'Mid-range', priceRange: '$$' },
      { name: 'Kokopelli', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'mancora',
    name: 'Máncora',
    nameEs: 'Máncora',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    altitude: 7,
    population: '12,000',
    description: 'Peru\'s top beach destination offers warm waters year-round, perfect waves for surfing, and a laid-back tropical vibe. This northern beach town is ideal for families seeking sun, sand, and a slower pace after highland adventures.',
    descriptionEs: 'El principal destino de playa de Perú ofrece aguas cálidas todo el año, olas perfectas para surfear y un ambiente tropical relajado. Este pueblo de playa norteño es ideal para familias que buscan sol, arena y un ritmo más lento después de aventuras en las tierras altas.',
    highlights: [
      'Year-round warm water beaches',
      'Surfing lessons for all levels',
      'Whale watching (seasonal)',
      'Sea turtle nesting sites',
      'Mud baths and hot springs'
    ],
    highlightsEs: [
      'Playas de agua cálida todo el año',
      'Clases de surf para todos los niveles',
      'Avistamiento de ballenas (temporal)',
      'Sitios de anidación de tortugas marinas',
      'Baños de barro y aguas termales'
    ],
    familyRating: 5,
    bestMonths: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    minDays: 2,
    nearbyAttractions: ['punta-sal', 'los-organos', 'cabo-blanco'],
    relatedCities: ['piura', 'tumbes', 'chiclayo'],
    activities: ['surfing', 'swimming', 'whale-watching', 'fishing', 'kitesurfing'],
    climate: 'Tropical - warm and sunny year-round. Best beach weather December-April. Whale season July-October.',
    climateEs: 'Tropical - cálido y soleado todo el año. Mejor clima de playa diciembre-abril. Temporada de ballenas julio-octubre.',
    gettingThere: 'Fly to Piura or Tumbes, then 2-3 hours by car. Overnight bus from Lima (16 hours).',
    gettingThereEs: 'Vuela a Piura o Tumbes, luego 2-3 horas en auto. Bus nocturno desde Lima (16 horas).',
    familyTips: [
      'Water is warm enough for swimming year-round',
      'Los Órganos beach is calmer for young children',
      'Book surf lessons - it\'s easy for beginners',
      'Visit sea turtle sanctuary at El Ñuro',
      'Great to add at the end of a Peru trip'
    ],
    familyTipsEs: [
      'El agua es lo suficientemente cálida para nadar todo el año',
      'La playa de Los Órganos es más tranquila para niños pequeños',
      'Reserva clases de surf - es fácil para principiantes',
      'Visita el santuario de tortugas marinas en El Ñuro',
      'Genial para agregar al final de un viaje a Perú'
    ],
    restaurants: [
      { name: 'Angela\'s Place', type: 'International', kidFriendly: true },
      { name: 'La Sirena d\'Juan', type: 'Seafood', kidFriendly: true },
      { name: 'El Tuno', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Arennas Máncora', type: 'Luxury', priceRange: '$$$' },
      { name: 'DCO Suites', type: 'Mid-range', priceRange: '$$' },
      { name: 'Loki del Mar', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'trujillo',
    name: 'Trujillo',
    nameEs: 'Trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    altitude: 34,
    population: '800,000',
    description: 'Peru\'s third-largest city is a treasure trove of pre-Columbian history. Home to the adobe cities of Chan Chan and the Temples of the Sun and Moon, Trujillo offers families an uncrowded alternative to explore Peru\'s ancient civilizations.',
    descriptionEs: 'La tercera ciudad más grande de Perú es un tesoro de historia precolombina. Hogar de las ciudades de adobe de Chan Chan y los Templos del Sol y la Luna, Trujillo ofrece a las familias una alternativa menos concurrida para explorar las civilizaciones antiguas de Perú.',
    highlights: [
      'Chan Chan adobe city (UNESCO)',
      'Temples of the Sun and Moon',
      'Huanchaco beach and reed boats',
      'Colonial architecture',
      'Marinera dance performances'
    ],
    highlightsEs: [
      'Ciudad de adobe Chan Chan (UNESCO)',
      'Templos del Sol y la Luna',
      'Playa de Huanchaco y caballitos de totora',
      'Arquitectura colonial',
      'Presentaciones de marinera'
    ],
    familyRating: 4,
    bestMonths: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    minDays: 2,
    nearbyAttractions: ['chan-chan', 'huaca-sol-luna', 'huanchaco', 'el-brujo'],
    relatedCities: ['chiclayo', 'lima', 'cajamarca'],
    activities: ['archaeology-tour', 'surfing', 'cultural-experience', 'beach'],
    climate: 'Coastal desert - mild and dry year-round. Slightly cooler June-November.',
    climateEs: 'Desierto costero - templado y seco todo el año. Ligeramente más fresco junio-noviembre.',
    gettingThere: 'Capitán FAP Carlos Martínez Airport has daily flights from Lima (1 hour). Also accessible by bus (8 hours).',
    gettingThereEs: 'El Aeropuerto Capitán FAP Carlos Martínez tiene vuelos diarios desde Lima (1 hora). También accesible en bus (8 horas).',
    familyTips: [
      'Chan Chan is the largest adobe city in the world',
      'Huanchaco is perfect for surf lessons',
      'See fishermen on traditional reed boats (caballitos)',
      'Less touristy than Cusco - more authentic experience',
      'January\'s Marinera Festival is spectacular'
    ],
    familyTipsEs: [
      'Chan Chan es la ciudad de adobe más grande del mundo',
      'Huanchaco es perfecto para clases de surf',
      'Ve pescadores en caballitos de totora tradicionales',
      'Menos turístico que Cusco - experiencia más auténtica',
      'El Festival de la Marinera en enero es espectacular'
    ],
    restaurants: [
      { name: 'Restaurant Mochica', type: 'Peruvian', kidFriendly: true },
      { name: 'El Celler de Cler', type: 'International', kidFriendly: true },
      { name: 'Big Ben', type: 'Seafood', kidFriendly: true }
    ],
    hotels: [
      { name: 'Casa Andina Premium', type: 'Mid-range', priceRange: '$$' },
      { name: 'Costa del Sol Wyndham', type: 'Mid-range', priceRange: '$$' },
      { name: 'Hotel Libertador', type: 'Luxury', priceRange: '$$$' }
    ]
  },
  {
    slug: 'chiclayo',
    name: 'Chiclayo',
    nameEs: 'Chiclayo',
    region: 'Lambayeque Region',
    regionEs: 'Región Lambayeque',
    altitude: 29,
    population: '600,000',
    description: 'Known as the "City of Friendship," Chiclayo is the gateway to some of Peru\'s most important archaeological discoveries. The Lord of Sipán tomb and the Royal Tombs Museum offer an incredible look at pre-Inca civilizations.',
    descriptionEs: 'Conocida como la "Ciudad de la Amistad", Chiclayo es la puerta de entrada a algunos de los descubrimientos arqueológicos más importantes de Perú. La tumba del Señor de Sipán y el Museo Tumbas Reales ofrecen una mirada increíble a las civilizaciones pre-incas.',
    highlights: [
      'Royal Tombs of Sipán Museum',
      'Huaca Rajada (Lord of Sipán site)',
      'Túcume pyramids',
      'Bruning Archaeological Museum',
      'Traditional markets'
    ],
    highlightsEs: [
      'Museo Tumbas Reales de Sipán',
      'Huaca Rajada (sitio del Señor de Sipán)',
      'Pirámides de Túcume',
      'Museo Arqueológico Brüning',
      'Mercados tradicionales'
    ],
    familyRating: 3,
    bestMonths: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    minDays: 2,
    nearbyAttractions: ['sipan', 'tucume', 'bruning-museum', 'pimentel'],
    relatedCities: ['trujillo', 'piura', 'cajamarca'],
    activities: ['archaeology-tour', 'museum-visit', 'beach', 'market-tour'],
    climate: 'Coastal desert - warm and dry year-round. Can be very hot December-March.',
    climateEs: 'Desierto costero - cálido y seco todo el año. Puede ser muy caluroso diciembre-marzo.',
    gettingThere: 'José Abelardo Quiñones Airport has daily flights from Lima (1.5 hours). Also accessible by bus.',
    gettingThereEs: 'El Aeropuerto José Abelardo Quiñones tiene vuelos diarios desde Lima (1.5 horas). También accesible en bus.',
    familyTips: [
      'The Sipán Museum is world-class and engaging for kids',
      'Túcume has 26 pyramids to explore',
      'King Fisher (Rey Pescador) figure is fascinating for children',
      'Pimentel beach is nearby for relaxation',
      'Mercado Modelo is great for local food'
    ],
    familyTipsEs: [
      'El Museo de Sipán es de clase mundial y atractivo para niños',
      'Túcume tiene 26 pirámides para explorar',
      'La figura del Señor de Sipán es fascinante para los niños',
      'La playa de Pimentel está cerca para relajarse',
      'El Mercado Modelo es genial para comida local'
    ],
    restaurants: [
      { name: 'Fiesta Chiclayo', type: 'Peruvian', kidFriendly: true },
      { name: 'El Rancho', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Casa Andina Select', type: 'Mid-range', priceRange: '$$' },
      { name: 'Costa del Sol Wyndham', type: 'Mid-range', priceRange: '$$' },
      { name: 'Win Meier', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'ayacucho',
    name: 'Ayacucho',
    nameEs: 'Ayacucho',
    region: 'Ayacucho Region',
    regionEs: 'Región Ayacucho',
    altitude: 2761,
    population: '180,000',
    description: 'Known for having 33 churches (one for each year of Christ\'s life), Ayacucho is Peru\'s religious heartland. The city hosts the country\'s most spectacular Semana Santa (Holy Week) celebrations and is famous for its artisan crafts, especially retablos.',
    descriptionEs: 'Conocida por tener 33 iglesias (una por cada año de la vida de Cristo), Ayacucho es el corazón religioso de Perú. La ciudad alberga las celebraciones de Semana Santa más espectaculares del país y es famosa por sus artesanías, especialmente los retablos.',
    highlights: [
      '33 colonial churches',
      'Semana Santa celebrations',
      'Retablo folk art workshops',
      'Wari archaeological site',
      'Pampa de Ayacucho battlefield'
    ],
    highlightsEs: [
      '33 iglesias coloniales',
      'Celebraciones de Semana Santa',
      'Talleres de arte popular de retablos',
      'Sitio arqueológico Wari',
      'Campo de batalla Pampa de Ayacucho'
    ],
    familyRating: 4,
    bestMonths: [3, 4, 5, 6, 7, 8, 9, 10],
    minDays: 2,
    nearbyAttractions: ['wari-ruins', 'quinua', 'vilcashuaman'],
    relatedCities: ['cusco', 'lima', 'arequipa'],
    activities: ['church-tour', 'craft-workshop', 'archaeology-tour', 'cultural-experience'],
    climate: 'Highland climate with dry season April-October. Pleasant temperatures year-round but cold nights.',
    climateEs: 'Clima de sierra con temporada seca abril-octubre. Temperaturas agradables todo el año pero noches frías.',
    gettingThere: 'Alfredo Mendívil Airport has daily flights from Lima (1 hour). Also accessible by bus (9 hours) through scenic mountain roads.',
    gettingThereEs: 'El Aeropuerto Alfredo Mendívil tiene vuelos diarios desde Lima (1 hora). También accesible en bus (9 horas) por caminos de montaña escénicos.',
    familyTips: [
      'Semana Santa in March/April is incredible but book months ahead',
      'Kids love watching retablo artisans work',
      'The churches are beautiful but 33 is a lot - pick favorites',
      'Wari ruins predate the Incas - great history lesson',
      'Try the local dish puca picante'
    ],
    familyTipsEs: [
      'Semana Santa en marzo/abril es increíble pero reserva con meses de anticipación',
      'A los niños les encanta ver a los artesanos de retablos trabajar',
      'Las iglesias son hermosas pero 33 son muchas - elige tus favoritas',
      'Las ruinas Wari son anteriores a los Incas - gran lección de historia',
      'Prueba el plato local puca picante'
    ],
    restaurants: [
      { name: 'Mia Pizza', type: 'Italian', kidFriendly: true },
      { name: 'La Casona', type: 'Peruvian', kidFriendly: true },
      { name: 'Sukre', type: 'Cafe', kidFriendly: true }
    ],
    hotels: [
      { name: 'DM Hoteles Ayacucho', type: 'Mid-range', priceRange: '$$' },
      { name: 'Hotel Santa Rosa', type: 'Mid-range', priceRange: '$$' },
      { name: 'Via Via Cafe', type: 'Budget', priceRange: '$' }
    ]
  },
  {
    slug: 'cajamarca',
    name: 'Cajamarca',
    nameEs: 'Cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    altitude: 2750,
    population: '250,000',
    description: 'The site where the Inca Empire fell, Cajamarca is where Atahualpa was captured by the Spanish in 1532. Today this charming highland city is known for its colonial architecture, dairy products, and Peru\'s most famous Carnival celebration.',
    descriptionEs: 'El sitio donde cayó el Imperio Inca, Cajamarca es donde Atahualpa fue capturado por los españoles en 1532. Hoy esta encantadora ciudad de sierra es conocida por su arquitectura colonial, productos lácteos y la celebración de Carnaval más famosa de Perú.',
    highlights: [
      'El Cuarto del Rescate (Ransom Room)',
      'Carnival celebrations (February)',
      'Ventanillas de Otuzco',
      'Baños del Inca hot springs',
      'Dairy farms and cheese'
    ],
    highlightsEs: [
      'El Cuarto del Rescate',
      'Celebraciones de Carnaval (febrero)',
      'Ventanillas de Otuzco',
      'Baños del Inca aguas termales',
      'Granjas lecheras y queso'
    ],
    familyRating: 4,
    bestMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    minDays: 2,
    nearbyAttractions: ['banos-del-inca', 'ventanillas-otuzco', 'cumbe-mayo', 'kuntur-wasi'],
    relatedCities: ['trujillo', 'chiclayo', 'chachapoyas'],
    activities: ['hot-springs', 'archaeology-tour', 'carnival', 'farm-visit', 'cultural-experience'],
    climate: 'Highland climate - mild days, cool nights. Rainy season December-March. Carnival in February.',
    climateEs: 'Clima de sierra - días templados, noches frescas. Temporada de lluvias diciembre-marzo. Carnaval en febrero.',
    gettingThere: 'Armando Revoredo Airport has daily flights from Lima (1.5 hours). Also accessible by bus from Trujillo (6 hours) or Lima (14 hours).',
    gettingThereEs: 'El Aeropuerto Armando Revoredo tiene vuelos diarios desde Lima (1.5 horas). También accesible en bus desde Trujillo (6 horas) o Lima (14 horas).',
    familyTips: [
      'Carnival water fights are epic - bring water guns and spare clothes!',
      'Baños del Inca hot springs are perfect for families',
      'The Ransom Room tells an incredible story kids will remember',
      'Try the famous cheese and manjar blanco',
      'Ventanillas de Otuzco (ancient niches) are fascinating'
    ],
    familyTipsEs: [
      '¡Las guerras de agua del Carnaval son épicas - trae pistolas de agua y ropa de repuesto!',
      'Las aguas termales de Baños del Inca son perfectas para familias',
      'El Cuarto del Rescate cuenta una historia increíble que los niños recordarán',
      'Prueba el famoso queso y manjar blanco',
      'Las Ventanillas de Otuzco (nichos antiguos) son fascinantes'
    ],
    restaurants: [
      { name: 'El Batán', type: 'Peruvian', kidFriendly: true },
      { name: 'Heladería Holanda', type: 'Ice Cream', kidFriendly: true },
      { name: 'Salas', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Costa del Sol Wyndham', type: 'Mid-range', priceRange: '$$' },
      { name: 'El Portal del Marqués', type: 'Mid-range', priceRange: '$$' },
      { name: 'Laguna Seca', type: 'Resort', priceRange: '$$$' }
    ]
  },
  {
    slug: 'puerto-maldonado',
    name: 'Puerto Maldonado',
    nameEs: 'Puerto Maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    altitude: 256,
    population: '75,000',
    description: 'Gateway to Peru\'s most biodiverse Amazon region, Puerto Maldonado offers easier access to jungle lodges than Iquitos. Located near Tambopata National Reserve and Manu Biosphere Reserve, this is one of the best places on Earth to see wildlife.',
    descriptionEs: 'Puerta de entrada a la región amazónica más biodiversa de Perú, Puerto Maldonado ofrece acceso más fácil a lodges de selva que Iquitos. Ubicado cerca de la Reserva Nacional Tambopata y la Reserva de Biosfera del Manu, este es uno de los mejores lugares del mundo para ver vida silvestre.',
    highlights: [
      'Tambopata National Reserve',
      'Macaw clay licks',
      'Giant river otters',
      'Sandoval Lake',
      'Canopy towers and walkways'
    ],
    highlightsEs: [
      'Reserva Nacional Tambopata',
      'Collpas de guacamayos',
      'Nutrias gigantes de río',
      'Lago Sandoval',
      'Torres y pasarelas de dosel'
    ],
    familyRating: 5,
    bestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
    minDays: 3,
    nearbyAttractions: ['tambopata-reserve', 'sandoval-lake', 'manu-reserve', 'monkey-island'],
    relatedCities: ['cusco', 'iquitos', 'lima'],
    activities: ['jungle-lodge', 'wildlife-spotting', 'canopy-walk', 'night-safari', 'kayaking'],
    climate: 'Tropical - hot and humid year-round. Dry season May-October is best. Rainy season November-April has higher water levels.',
    climateEs: 'Tropical - caliente y húmedo todo el año. Temporada seca mayo-octubre es mejor. Temporada de lluvias noviembre-abril tiene niveles de agua más altos.',
    gettingThere: 'Padre Aldamiz Airport has daily flights from Lima (1.5 hours) and Cusco (30 minutes). Much easier access than Iquitos.',
    gettingThereEs: 'El Aeropuerto Padre Aldamiz tiene vuelos diarios desde Lima (1.5 horas) y Cusco (30 minutos). Acceso mucho más fácil que Iquitos.',
    familyTips: [
      'Fly from Cusco for an easy add-on to your highlands trip',
      'Macaw clay licks at dawn are unforgettable',
      'Giant otters in Sandoval Lake are amazing for kids',
      'Choose lodges with family programs and shorter boat rides',
      'Canopy walkways are thrilling but have height requirements'
    ],
    familyTipsEs: [
      'Vuela desde Cusco para un fácil complemento a tu viaje por las tierras altas',
      'Las collpas de guacamayos al amanecer son inolvidables',
      'Las nutrias gigantes en el Lago Sandoval son increíbles para niños',
      'Elige lodges con programas familiares y viajes en bote más cortos',
      'Las pasarelas de dosel son emocionantes pero tienen requisitos de altura'
    ],
    restaurants: [
      { name: 'Burgos Restaurant', type: 'Peruvian', kidFriendly: true },
      { name: 'El Caimán', type: 'Amazonian', kidFriendly: true },
      { name: 'Gustitos del Cura', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Inkaterra Reserva Amazonica', type: 'Luxury', priceRange: '$$$' },
      { name: 'Refugio Amazonas', type: 'Eco-lodge', priceRange: '$$$' },
      { name: 'Posada Amazonas', type: 'Mid-range', priceRange: '$$' },
      { name: 'Corto Maltes Lodge', type: 'Mid-range', priceRange: '$$' }
    ]
  },
  {
    slug: 'chachapoyas',
    name: 'Chachapoyas',
    nameEs: 'Chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 2335,
    population: '30,000',
    description: 'Capital of Peru\'s Amazonas region (not the jungle!), Chachapoyas is the gateway to Kuelap, the "Machu Picchu of the North." This off-the-beaten-path destination offers stunning cloud forest scenery, ancient ruins, and authentic Peruvian culture.',
    descriptionEs: 'Capital de la región Amazonas de Perú (¡no la selva!), Chachapoyas es la puerta de entrada a Kuelap, el "Machu Picchu del Norte". Este destino fuera de lo común ofrece impresionantes paisajes de bosque nuboso, ruinas antiguas y cultura peruana auténtica.',
    highlights: [
      'Kuelap fortress (pre-Inca)',
      'Gocta Waterfall (771m)',
      'Karajía cliff tombs',
      'Revash mausoleums',
      'Cable car to Kuelap'
    ],
    highlightsEs: [
      'Fortaleza de Kuelap (pre-Inca)',
      'Catarata de Gocta (771m)',
      'Sarcófagos de Karajía',
      'Mausoleos de Revash',
      'Teleférico a Kuelap'
    ],
    familyRating: 4,
    bestMonths: [4, 5, 6, 7, 8, 9, 10],
    minDays: 3,
    nearbyAttractions: ['kuelap', 'gocta-waterfall', 'karajia', 'revash', 'leymebamba-museum'],
    relatedCities: ['cajamarca', 'tarapoto', 'chiclayo'],
    activities: ['archaeology-tour', 'waterfall-hike', 'cable-car', 'bird-watching', 'cultural-experience'],
    climate: 'Cloud forest climate - mild year-round with frequent mist and rain. Dry season May-October is best.',
    climateEs: 'Clima de bosque nuboso - templado todo el año con neblina y lluvia frecuente. Temporada seca mayo-octubre es mejor.',
    gettingThere: 'Chachapoyas Airport has limited flights from Lima. Most visitors fly to Jaén or Tarapoto then drive (4-6 hours). Adventurous route from Cajamarca.',
    gettingThereEs: 'El Aeropuerto de Chachapoyas tiene vuelos limitados desde Lima. La mayoría de visitantes vuelan a Jaén o Tarapoto y luego manejan (4-6 horas). Ruta aventurera desde Cajamarca.',
    familyTips: [
      'The cable car to Kuelap makes it much easier for families',
      'Gocta waterfall hike is doable for active kids (age 8+)',
      'Karajía sarcophagi are like nothing else in Peru',
      'Less touristy than Cusco - more authentic experience',
      'Roads are winding - pack motion sickness medication'
    ],
    familyTipsEs: [
      'El teleférico a Kuelap lo hace mucho más fácil para familias',
      'La caminata a la catarata de Gocta es posible para niños activos (8+ años)',
      'Los sarcófagos de Karajía son únicos en Perú',
      'Menos turístico que Cusco - experiencia más auténtica',
      'Los caminos son sinuosos - empaca medicamento para el mareo'
    ],
    restaurants: [
      { name: 'Café Fusiones', type: 'Cafe', kidFriendly: true },
      { name: 'El Tejado', type: 'Peruvian', kidFriendly: true },
      { name: 'La Tushpa', type: 'Peruvian', kidFriendly: true }
    ],
    hotels: [
      { name: 'Gocta Andes Lodge', type: 'Eco-lodge', priceRange: '$$$' },
      { name: 'La Casona Monsante', type: 'Mid-range', priceRange: '$$' },
      { name: 'Chachapoyas Backpackers', type: 'Budget', priceRange: '$' }
    ]
  }
];

// Helper function to get city by slug
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

// Helper function to get all city slugs
export function getAllCitySlugs(): string[] {
  return cities.map(city => city.slug);
}
