export interface DayPlan {
  day: number;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  locations: string[];
  activities: string[];
  activitiesEs: string[];
  meals?: string;
  accommodation?: string;
}

export interface Itinerary {
  id: string;
  slug: string;
  duration: number;
  title: string;
  titleEs: string;
  subtitle: string;
  subtitleEs: string;
  description: string;
  descriptionEs: string;
  theme: 'classic' | 'adventure' | 'cultural' | 'beach' | 'amazon' | 'highlands' | 'food' | 'wildlife' | 'historical';
  difficulty: 'easy' | 'moderate' | 'active';
  price: number;
  image: string;
  highlights: string[];
  highlightsEs: string[];
  includes: string[];
  includesEs: string[];
  notIncludes: string[];
  notIncludesEs: string[];
  bestFor: string[];
  bestForEs: string[];
  minAge: number;
  groupSize: string;
  startLocation: string;
  endLocation: string;
  dayByDay: DayPlan[];
  featured?: boolean;
}

export const itineraries: Itinerary[] = [
  // 5-DAY ITINERARIES
  {
    id: '5-day-classic-cusco',
    slug: '5-day-classic-cusco-machu-picchu',
    duration: 5,
    title: 'Classic Cusco & Machu Picchu',
    titleEs: 'Cusco Clásico y Machu Picchu',
    subtitle: 'The essential Peru family experience',
    subtitleEs: 'La experiencia familiar esencial de Perú',
    description: 'Perfect introduction to Peru for families. Explore the ancient Inca capital, visit the Sacred Valley, and marvel at the wonder of Machu Picchu. This carefully paced itinerary allows time for altitude acclimatization.',
    descriptionEs: 'Introducción perfecta a Perú para familias. Explora la antigua capital Inca, visita el Valle Sagrado y maravíllate con Machu Picchu. Este itinerario cuidadosamente diseñado permite tiempo para la aclimatación a la altura.',
    theme: 'classic',
    difficulty: 'easy',
    price: 1299,
    image: '/images/itineraries/machu-picchu-family.jpg',
    highlights: [
      'Guided tour of Machu Picchu',
      'Sacred Valley exploration',
      'Cusco city walking tour',
      'Traditional weaving demonstration',
      'Alpaca farm visit'
    ],
    highlightsEs: [
      'Tour guiado de Machu Picchu',
      'Exploración del Valle Sagrado',
      'Tour a pie por la ciudad de Cusco',
      'Demostración de tejido tradicional',
      'Visita a granja de alpacas'
    ],
    includes: [
      '4 nights accommodation',
      'Daily breakfast',
      'Private transportation',
      'English-speaking guide',
      'All entrance fees',
      'Train tickets to Machu Picchu'
    ],
    includesEs: [
      '4 noches de alojamiento',
      'Desayuno diario',
      'Transporte privado',
      'Guía de habla inglesa',
      'Todas las entradas',
      'Boletos de tren a Machu Picchu'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Personal expenses', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Gastos personales', 'Propinas'],
    bestFor: ['First-time visitors', 'Families with young children', 'History lovers'],
    bestForEs: ['Visitantes primerizos', 'Familias con niños pequeños', 'Amantes de la historia'],
    minAge: 4,
    groupSize: '2-8',
    startLocation: 'Cusco',
    endLocation: 'Cusco',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Arrival in Cusco',
        titleEs: 'Llegada a Cusco',
        description: 'Welcome to Cusco! Transfer to your family-friendly hotel and rest to acclimatize to the altitude (3,400m). Optional gentle walking tour of Plaza de Armas.',
        descriptionEs: 'Bienvenidos a Cusco! Traslado a su hotel familiar y descanso para aclimatarse a la altura (3,400m). Tour a pie opcional por la Plaza de Armas.',
        locations: ['Cusco Airport', 'Plaza de Armas'],
        activities: ['Airport pickup', 'Hotel check-in', 'Optional city stroll'],
        activitiesEs: ['Recogida en aeropuerto', 'Check-in en hotel', 'Paseo opcional por la ciudad'],
        meals: 'Dinner',
        accommodation: 'Family hotel in Cusco'
      },
      {
        day: 2,
        title: 'Sacred Valley Adventure',
        titleEs: 'Aventura en el Valle Sagrado',
        description: 'Descend to the Sacred Valley (lower altitude, easier for families). Visit Pisac market, explore Ollantaytambo fortress, and enjoy an alpaca farm.',
        descriptionEs: 'Desciende al Valle Sagrado (menor altura, más fácil para familias). Visita el mercado de Pisac, explora la fortaleza de Ollantaytambo y disfruta de una granja de alpacas.',
        locations: ['Pisac', 'Ollantaytambo', 'Urubamba'],
        activities: ['Pisac market visit', 'Ollantaytambo ruins', 'Alpaca farm', 'Traditional lunch'],
        activitiesEs: ['Visita al mercado de Pisac', 'Ruinas de Ollantaytambo', 'Granja de alpacas', 'Almuerzo tradicional'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Sacred Valley hotel'
      },
      {
        day: 3,
        title: 'Machu Picchu Wonder',
        titleEs: 'Maravilla de Machu Picchu',
        description: 'Early train to Aguas Calientes, then bus up to Machu Picchu. Guided tour of the citadel with kid-friendly explanations. Return to Cusco in the evening.',
        descriptionEs: 'Tren temprano a Aguas Calientes, luego bus hasta Machu Picchu. Tour guiado de la ciudadela con explicaciones para niños. Regreso a Cusco por la noche.',
        locations: ['Ollantaytambo', 'Aguas Calientes', 'Machu Picchu'],
        activities: ['Scenic train ride', 'Machu Picchu guided tour', 'Photo opportunities', 'Train return'],
        activitiesEs: ['Viaje en tren panorámico', 'Tour guiado de Machu Picchu', 'Oportunidades de fotos', 'Regreso en tren'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Family hotel in Cusco'
      },
      {
        day: 4,
        title: 'Cusco City Exploration',
        titleEs: 'Exploración de la Ciudad de Cusco',
        description: 'Morning walking tour of Cusco including the Cathedral, Qorikancha temple, and San Pedro Market. Afternoon chocolate-making workshop for families.',
        descriptionEs: 'Tour matutino a pie por Cusco incluyendo la Catedral, templo de Qorikancha y Mercado de San Pedro. Taller de chocolate para familias por la tarde.',
        locations: ['Cusco Historic Center', 'San Pedro Market'],
        activities: ['Cathedral visit', 'Qorikancha temple', 'Market tour', 'Chocolate workshop'],
        activitiesEs: ['Visita a la Catedral', 'Templo de Qorikancha', 'Tour del mercado', 'Taller de chocolate'],
        meals: 'Breakfast',
        accommodation: 'Family hotel in Cusco'
      },
      {
        day: 5,
        title: 'Departure Day',
        titleEs: 'Día de Partida',
        description: 'Free morning for last-minute shopping or exploration. Transfer to Cusco airport for your onward journey.',
        descriptionEs: 'Mañana libre para compras de último momento o exploración. Traslado al aeropuerto de Cusco para su siguiente destino.',
        locations: ['Cusco', 'Cusco Airport'],
        activities: ['Free time', 'Airport transfer'],
        activitiesEs: ['Tiempo libre', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: '5-day-lima-paracas',
    slug: '5-day-lima-paracas-beach-adventure',
    duration: 5,
    title: 'Lima & Paracas Beach Adventure',
    titleEs: 'Aventura en Lima y Playas de Paracas',
    subtitle: 'Coastal Peru with wildlife encounters',
    subtitleEs: 'Costa peruana con encuentros con vida silvestre',
    description: 'Explore Lima\'s highlights and escape to the stunning Paracas coast. Perfect for families who love beaches, wildlife, and don\'t want high altitude.',
    descriptionEs: 'Explora lo mejor de Lima y escapa a la impresionante costa de Paracas. Perfecto para familias que aman las playas, la vida silvestre y no quieren altura.',
    theme: 'beach',
    difficulty: 'easy',
    price: 899,
    image: '/images/itineraries/paracas-ballestas.jpg',
    highlights: [
      'Ballestas Islands boat tour',
      'Paracas National Reserve',
      'Lima food tour',
      'Huacachina oasis visit',
      'Sandboarding adventure'
    ],
    highlightsEs: [
      'Tour en bote a Islas Ballestas',
      'Reserva Nacional de Paracas',
      'Tour gastronómico en Lima',
      'Visita al oasis de Huacachina',
      'Aventura de sandboard'
    ],
    includes: [
      '4 nights accommodation',
      'Daily breakfast',
      'Private transportation',
      'English-speaking guide',
      'Boat tour to Ballestas Islands'
    ],
    includesEs: [
      '4 noches de alojamiento',
      'Desayuno diario',
      'Transporte privado',
      'Guía de habla inglesa',
      'Tour en bote a Islas Ballestas'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Lunches and dinners', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Almuerzos y cenas', 'Propinas'],
    bestFor: ['Beach lovers', 'Wildlife enthusiasts', 'Families avoiding altitude'],
    bestForEs: ['Amantes de la playa', 'Entusiastas de la vida silvestre', 'Familias evitando la altura'],
    minAge: 3,
    groupSize: '2-10',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Welcome to Lima',
        titleEs: 'Bienvenidos a Lima',
        description: 'Arrive in Lima and transfer to Miraflores. Explore the Malecón boardwalk and watch paragliders over the Pacific.',
        descriptionEs: 'Llegada a Lima y traslado a Miraflores. Explora el Malecón y observa parapentistas sobre el Pacífico.',
        locations: ['Lima Airport', 'Miraflores'],
        activities: ['Airport pickup', 'Malecón walk', 'Sunset viewing'],
        activitiesEs: ['Recogida en aeropuerto', 'Paseo por el Malecón', 'Vista del atardecer'],
        meals: 'Dinner',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 2,
        title: 'Lima City Tour',
        titleEs: 'Tour por Lima',
        description: 'Morning visit to the historic center, including Plaza Mayor and catacombs. Afternoon food tour in Miraflores with kid-friendly tastings.',
        descriptionEs: 'Visita matutina al centro histórico, incluyendo Plaza Mayor y catacumbas. Tour gastronómico por la tarde en Miraflores con degustaciones para niños.',
        locations: ['Lima Historic Center', 'Miraflores'],
        activities: ['Historic center tour', 'Catacombs visit', 'Food tour'],
        activitiesEs: ['Tour del centro histórico', 'Visita a catacumbas', 'Tour gastronómico'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 3,
        title: 'Journey to Paracas',
        titleEs: 'Viaje a Paracas',
        description: 'Drive south along the Pan-American Highway to Paracas. Stop at Huacachina oasis for sandboarding and dune buggy rides.',
        descriptionEs: 'Viaje al sur por la Carretera Panamericana hasta Paracas. Parada en el oasis de Huacachina para sandboard y paseos en buggy.',
        locations: ['Huacachina', 'Paracas'],
        activities: ['Scenic drive', 'Sandboarding', 'Dune buggy', 'Beach time'],
        activitiesEs: ['Viaje panorámico', 'Sandboard', 'Buggy en dunas', 'Tiempo en la playa'],
        meals: 'Breakfast',
        accommodation: 'Beach hotel in Paracas'
      },
      {
        day: 4,
        title: 'Ballestas Islands & Reserve',
        titleEs: 'Islas Ballestas y Reserva',
        description: 'Morning boat tour to Ballestas Islands to see sea lions, penguins, and seabirds. Afternoon explore Paracas National Reserve.',
        descriptionEs: 'Tour en bote por la mañana a las Islas Ballestas para ver lobos marinos, pingüinos y aves marinas. Por la tarde explora la Reserva Nacional de Paracas.',
        locations: ['Ballestas Islands', 'Paracas National Reserve'],
        activities: ['Boat tour', 'Wildlife viewing', 'Red Beach visit', 'Reserve exploration'],
        activitiesEs: ['Tour en bote', 'Observación de vida silvestre', 'Visita a Playa Roja', 'Exploración de la reserva'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Beach hotel in Paracas'
      },
      {
        day: 5,
        title: 'Return to Lima',
        titleEs: 'Regreso a Lima',
        description: 'Leisurely morning in Paracas. Drive back to Lima for your departure flight.',
        descriptionEs: 'Mañana tranquila en Paracas. Regreso a Lima para su vuelo de salida.',
        locations: ['Paracas', 'Lima Airport'],
        activities: ['Beach time', 'Return drive', 'Airport transfer'],
        activitiesEs: ['Tiempo en la playa', 'Viaje de regreso', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },

  // 7-DAY ITINERARIES
  {
    id: '7-day-peru-highlights',
    slug: '7-day-peru-family-highlights',
    duration: 7,
    title: 'Peru Family Highlights',
    titleEs: 'Destacados de Perú en Familia',
    subtitle: 'Lima, Cusco & Machu Picchu adventure',
    subtitleEs: 'Aventura por Lima, Cusco y Machu Picchu',
    description: 'The perfect week in Peru! Combine the vibrant capital Lima with the ancient wonders of Cusco and Machu Picchu. Ideal pacing for families with children.',
    descriptionEs: 'La semana perfecta en Perú! Combina la vibrante capital Lima con las maravillas antiguas de Cusco y Machu Picchu. Ritmo ideal para familias con niños.',
    theme: 'classic',
    difficulty: 'easy',
    price: 1899,
    image: '/images/itineraries/peru-highlights.jpg',
    highlights: [
      'Lima city tour with food tasting',
      'Cusco historic walking tour',
      'Sacred Valley full-day exploration',
      'Machu Picchu guided visit',
      'Traditional cooking class'
    ],
    highlightsEs: [
      'Tour por Lima con degustación',
      'Tour a pie por Cusco histórico',
      'Exploración de día completo del Valle Sagrado',
      'Visita guiada a Machu Picchu',
      'Clase de cocina tradicional'
    ],
    includes: [
      '6 nights accommodation',
      'Daily breakfast',
      'All transportation including flights Lima-Cusco',
      'English-speaking guides',
      'All entrance fees',
      'Train to Machu Picchu'
    ],
    includesEs: [
      '6 noches de alojamiento',
      'Desayuno diario',
      'Todo el transporte incluyendo vuelos Lima-Cusco',
      'Guías de habla inglesa',
      'Todas las entradas',
      'Tren a Machu Picchu'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Lunches and dinners unless specified', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Almuerzos y cenas no especificados', 'Propinas'],
    bestFor: ['First-time Peru visitors', 'Families with children 5+', 'Culture and history enthusiasts'],
    bestForEs: ['Visitantes primerizos a Perú', 'Familias con niños mayores de 5', 'Entusiastas de la cultura e historia'],
    minAge: 5,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Arrival in Lima',
        titleEs: 'Llegada a Lima',
        description: 'Welcome to Peru! Airport pickup and transfer to your hotel in the trendy Miraflores district.',
        descriptionEs: 'Bienvenidos a Perú! Recogida en el aeropuerto y traslado a su hotel en el moderno distrito de Miraflores.',
        locations: ['Lima Airport', 'Miraflores'],
        activities: ['Airport pickup', 'Hotel check-in', 'Rest and explore'],
        activitiesEs: ['Recogida en aeropuerto', 'Check-in en hotel', 'Descanso y exploración'],
        meals: 'Welcome dinner',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 2,
        title: 'Discover Lima',
        titleEs: 'Descubre Lima',
        description: 'Full day exploring Lima: historic center in the morning, Larco Museum, and evening food tour.',
        descriptionEs: 'Día completo explorando Lima: centro histórico por la mañana, Museo Larco, y tour gastronómico por la noche.',
        locations: ['Lima Historic Center', 'Larco Museum', 'Barranco'],
        activities: ['Historic center tour', 'Museum visit', 'Food tour'],
        activitiesEs: ['Tour del centro histórico', 'Visita al museo', 'Tour gastronómico'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 3,
        title: 'Fly to Cusco',
        titleEs: 'Vuelo a Cusco',
        description: 'Morning flight to Cusco. Gentle afternoon acclimatization with a walking tour and coca tea.',
        descriptionEs: 'Vuelo matutino a Cusco. Tarde suave de aclimatación con tour a pie y té de coca.',
        locations: ['Lima', 'Cusco'],
        activities: ['Flight', 'Gentle walking tour', 'Acclimatization'],
        activitiesEs: ['Vuelo', 'Tour suave a pie', 'Aclimatación'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 4,
        title: 'Sacred Valley',
        titleEs: 'Valle Sagrado',
        description: 'Full day in the Sacred Valley. Visit Pisac ruins and market, Moray, and Maras salt mines.',
        descriptionEs: 'Día completo en el Valle Sagrado. Visita ruinas y mercado de Pisac, Moray y salineras de Maras.',
        locations: ['Pisac', 'Moray', 'Maras', 'Urubamba'],
        activities: ['Pisac market', 'Archaeological sites', 'Salt mines', 'Traditional lunch'],
        activitiesEs: ['Mercado de Pisac', 'Sitios arqueológicos', 'Salineras', 'Almuerzo tradicional'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Sacred Valley'
      },
      {
        day: 5,
        title: 'Machu Picchu',
        titleEs: 'Machu Picchu',
        description: 'The highlight! Train to Aguas Calientes, guided tour of Machu Picchu, return to Cusco.',
        descriptionEs: 'El punto culminante! Tren a Aguas Calientes, tour guiado de Machu Picchu, regreso a Cusco.',
        locations: ['Ollantaytambo', 'Machu Picchu', 'Cusco'],
        activities: ['Train journey', 'Machu Picchu tour', 'Citadel exploration'],
        activitiesEs: ['Viaje en tren', 'Tour de Machu Picchu', 'Exploración de la ciudadela'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 6,
        title: 'Cusco Exploration',
        titleEs: 'Exploración de Cusco',
        description: 'Morning Cusco city tour. Afternoon Peruvian cooking class perfect for families.',
        descriptionEs: 'Tour matutino por la ciudad de Cusco. Clase de cocina peruana por la tarde, perfecta para familias.',
        locations: ['Cusco'],
        activities: ['City tour', 'Market visit', 'Cooking class'],
        activitiesEs: ['Tour de la ciudad', 'Visita al mercado', 'Clase de cocina'],
        meals: 'Breakfast, Lunch (from cooking class)',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 7,
        title: 'Return Home',
        titleEs: 'Regreso a Casa',
        description: 'Morning flight back to Lima and connect with your international departure.',
        descriptionEs: 'Vuelo matutino de regreso a Lima y conexión con su vuelo internacional.',
        locations: ['Cusco', 'Lima'],
        activities: ['Flight', 'Airport transfer'],
        activitiesEs: ['Vuelo', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: '7-day-amazon-adventure',
    slug: '7-day-amazon-jungle-family-adventure',
    duration: 7,
    title: 'Amazon Jungle Family Adventure',
    titleEs: 'Aventura Familiar en la Selva Amazónica',
    subtitle: 'Wildlife encounters in the rainforest',
    subtitleEs: 'Encuentros con vida silvestre en la selva',
    description: 'An unforgettable week exploring the Peruvian Amazon. Stay in an eco-lodge, spot wildlife, meet indigenous communities, and learn about rainforest conservation.',
    descriptionEs: 'Una semana inolvidable explorando la Amazonía peruana. Hospédate en un eco-lodge, observa vida silvestre, conoce comunidades indígenas y aprende sobre conservación.',
    theme: 'amazon',
    difficulty: 'moderate',
    price: 2299,
    image: '/images/itineraries/amazon-family.jpg',
    highlights: [
      'Eco-lodge stay in the jungle',
      'Night jungle walks',
      'Piranha fishing',
      'Indigenous community visit',
      'Canopy walkway experience',
      'Pink river dolphin spotting'
    ],
    highlightsEs: [
      'Estadía en eco-lodge en la selva',
      'Caminatas nocturnas en la selva',
      'Pesca de pirañas',
      'Visita a comunidad indígena',
      'Experiencia en puente colgante',
      'Avistamiento de delfines rosados'
    ],
    includes: [
      '6 nights accommodation (2 Lima, 4 jungle lodge)',
      'All meals at jungle lodge',
      'Flights Lima-Iquitos/Puerto Maldonado',
      'All jungle excursions',
      'Expert naturalist guides',
      'Rubber boots and rain ponchos'
    ],
    includesEs: [
      '6 noches de alojamiento (2 Lima, 4 en lodge)',
      'Todas las comidas en el lodge',
      'Vuelos Lima-Iquitos/Puerto Maldonado',
      'Todas las excursiones en la selva',
      'Guías naturalistas expertos',
      'Botas de goma y ponchos'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Alcoholic beverages', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Bebidas alcohólicas', 'Propinas'],
    bestFor: ['Nature-loving families', 'Adventure seekers', 'Wildlife enthusiasts'],
    bestForEs: ['Familias amantes de la naturaleza', 'Buscadores de aventura', 'Entusiastas de la vida silvestre'],
    minAge: 6,
    groupSize: '2-12',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: [
      {
        day: 1,
        title: 'Arrival in Lima',
        titleEs: 'Llegada a Lima',
        description: 'Welcome to Peru! Rest in Lima before your Amazon adventure.',
        descriptionEs: 'Bienvenidos a Perú! Descanso en Lima antes de tu aventura amazónica.',
        locations: ['Lima'],
        activities: ['Airport pickup', 'Hotel rest'],
        activitiesEs: ['Recogida en aeropuerto', 'Descanso en hotel'],
        meals: 'Dinner',
        accommodation: 'Hotel in Lima'
      },
      {
        day: 2,
        title: 'Fly to the Amazon',
        titleEs: 'Vuelo a la Amazonía',
        description: 'Morning flight to the jungle. Boat ride to your eco-lodge. Afternoon jungle walk.',
        descriptionEs: 'Vuelo matutino a la selva. Paseo en bote a tu eco-lodge. Caminata por la selva por la tarde.',
        locations: ['Puerto Maldonado', 'Tambopata'],
        activities: ['Flight', 'Boat journey', 'Jungle walk', 'Lodge orientation'],
        activitiesEs: ['Vuelo', 'Viaje en bote', 'Caminata en la selva', 'Orientación en el lodge'],
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Jungle eco-lodge'
      },
      {
        day: 3,
        title: 'Rainforest Exploration',
        titleEs: 'Exploración de la Selva',
        description: 'Early morning birdwatching. Canopy walkway experience. Night walk to see nocturnal wildlife.',
        descriptionEs: 'Observación de aves temprano. Experiencia en puente colgante. Caminata nocturna para ver vida silvestre nocturna.',
        locations: ['Tambopata Reserve'],
        activities: ['Birdwatching', 'Canopy walk', 'Night walk'],
        activitiesEs: ['Observación de aves', 'Caminata en canopy', 'Caminata nocturna'],
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Jungle eco-lodge'
      },
      {
        day: 4,
        title: 'Lake Excursion',
        titleEs: 'Excursión al Lago',
        description: 'Canoe trip on oxbow lake. Spot giant otters, caimans, and monkeys. Piranha fishing!',
        descriptionEs: 'Paseo en canoa por lago. Avista nutrias gigantes, caimanes y monos. Pesca de pirañas!',
        locations: ['Sandoval Lake'],
        activities: ['Canoe trip', 'Wildlife spotting', 'Piranha fishing'],
        activitiesEs: ['Paseo en canoa', 'Avistamiento de fauna', 'Pesca de pirañas'],
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Jungle eco-lodge'
      },
      {
        day: 5,
        title: 'Indigenous Community',
        titleEs: 'Comunidad Indígena',
        description: 'Visit a local indigenous community. Learn about traditional medicine, crafts, and sustainable living.',
        descriptionEs: 'Visita a comunidad indígena local. Aprende sobre medicina tradicional, artesanías y vida sostenible.',
        locations: ['Native Community'],
        activities: ['Community visit', 'Cultural exchange', 'Craft workshop'],
        activitiesEs: ['Visita a comunidad', 'Intercambio cultural', 'Taller de artesanías'],
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Jungle eco-lodge'
      },
      {
        day: 6,
        title: 'Return to Lima',
        titleEs: 'Regreso a Lima',
        description: 'Morning wildlife walk. Return boat journey and flight back to Lima.',
        descriptionEs: 'Caminata matutina de vida silvestre. Regreso en bote y vuelo de regreso a Lima.',
        locations: ['Tambopata', 'Lima'],
        activities: ['Morning walk', 'Boat journey', 'Flight'],
        activitiesEs: ['Caminata matutina', 'Viaje en bote', 'Vuelo'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Lima'
      },
      {
        day: 7,
        title: 'Departure',
        titleEs: 'Partida',
        description: 'Transfer to Lima airport for your international departure.',
        descriptionEs: 'Traslado al aeropuerto de Lima para tu vuelo internacional.',
        locations: ['Lima'],
        activities: ['Airport transfer'],
        activitiesEs: ['Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },

  // 10-DAY ITINERARY
  {
    id: '10-day-complete-peru',
    slug: '10-day-complete-peru-family-experience',
    duration: 10,
    title: 'Complete Peru Family Experience',
    titleEs: 'Experiencia Completa de Perú en Familia',
    subtitle: 'Lima, Cusco, Machu Picchu & Lake Titicaca',
    subtitleEs: 'Lima, Cusco, Machu Picchu y Lago Titicaca',
    description: 'The ultimate Peru family adventure! Experience coastal Lima, the Inca heartland, and the magical Lake Titicaca. Perfect combination of culture, history, and natural wonders.',
    descriptionEs: 'La aventura familiar definitiva en Perú! Experimenta la costa de Lima, el corazón Inca y el mágico Lago Titicaca. Combinación perfecta de cultura, historia y maravillas naturales.',
    theme: 'classic',
    difficulty: 'moderate',
    price: 2799,
    image: '/images/itineraries/complete-peru.jpg',
    highlights: [
      'Lima gastronomy experience',
      'Sacred Valley exploration',
      'Machu Picchu sunrise',
      'Lake Titicaca floating islands',
      'Homestay with local family',
      'Traditional textile workshop'
    ],
    highlightsEs: [
      'Experiencia gastronómica en Lima',
      'Exploración del Valle Sagrado',
      'Amanecer en Machu Picchu',
      'Islas flotantes del Lago Titicaca',
      'Estadía con familia local',
      'Taller de textiles tradicionales'
    ],
    includes: [
      '9 nights accommodation',
      'Daily breakfast, select lunches',
      'All domestic flights',
      'Private transportation',
      'Expert guides throughout',
      'All entrance fees and activities'
    ],
    includesEs: [
      '9 noches de alojamiento',
      'Desayuno diario, almuerzos selectos',
      'Todos los vuelos domésticos',
      'Transporte privado',
      'Guías expertos durante todo el viaje',
      'Todas las entradas y actividades'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Some meals', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Algunas comidas', 'Propinas'],
    bestFor: ['Families wanting comprehensive Peru experience', 'Children 8+', 'Active families'],
    bestForEs: ['Familias que quieren experiencia completa', 'Niños mayores de 8', 'Familias activas'],
    minAge: 8,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Welcome to Lima',
        titleEs: 'Bienvenidos a Lima',
        description: 'Arrive in Lima, transfer to Miraflores. Evening welcome dinner at a top restaurant.',
        descriptionEs: 'Llegada a Lima, traslado a Miraflores. Cena de bienvenida en restaurante de primera.',
        locations: ['Lima'],
        activities: ['Arrival', 'Welcome dinner'],
        activitiesEs: ['Llegada', 'Cena de bienvenida'],
        meals: 'Dinner',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 2,
        title: 'Lima Discovery',
        titleEs: 'Descubrimiento de Lima',
        description: 'Historic center tour, Larco Museum visit, and evening food tour.',
        descriptionEs: 'Tour del centro histórico, visita al Museo Larco y tour gastronómico nocturno.',
        locations: ['Lima Historic Center', 'Miraflores'],
        activities: ['City tour', 'Museum', 'Food tour'],
        activitiesEs: ['Tour de ciudad', 'Museo', 'Tour gastronómico'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 3,
        title: 'Fly to Cusco',
        titleEs: 'Vuelo a Cusco',
        description: 'Fly to Cusco. Gentle acclimatization afternoon with walking tour.',
        descriptionEs: 'Vuelo a Cusco. Tarde de aclimatación suave con tour a pie.',
        locations: ['Lima', 'Cusco'],
        activities: ['Flight', 'Walking tour', 'Acclimatize'],
        activitiesEs: ['Vuelo', 'Tour a pie', 'Aclimatación'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 4,
        title: 'Sacred Valley',
        titleEs: 'Valle Sagrado',
        description: 'Full day exploring Sacred Valley: Pisac, Moray, Maras salt mines.',
        descriptionEs: 'Día completo explorando el Valle Sagrado: Pisac, Moray, salineras de Maras.',
        locations: ['Sacred Valley'],
        activities: ['Pisac', 'Moray', 'Maras', 'Traditional lunch'],
        activitiesEs: ['Pisac', 'Moray', 'Maras', 'Almuerzo tradicional'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Sacred Valley'
      },
      {
        day: 5,
        title: 'Machu Picchu',
        titleEs: 'Machu Picchu',
        description: 'Early train, guided Machu Picchu tour, evening return to Cusco.',
        descriptionEs: 'Tren temprano, tour guiado de Machu Picchu, regreso nocturno a Cusco.',
        locations: ['Machu Picchu'],
        activities: ['Train', 'Guided tour', 'Exploration'],
        activitiesEs: ['Tren', 'Tour guiado', 'Exploración'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 6,
        title: 'Cusco Exploration',
        titleEs: 'Exploración de Cusco',
        description: 'Morning city tour. Afternoon cooking class with market visit.',
        descriptionEs: 'Tour matutino por la ciudad. Clase de cocina por la tarde con visita al mercado.',
        locations: ['Cusco'],
        activities: ['City tour', 'Market', 'Cooking class'],
        activitiesEs: ['Tour de ciudad', 'Mercado', 'Clase de cocina'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Cusco'
      },
      {
        day: 7,
        title: 'Journey to Puno',
        titleEs: 'Viaje a Puno',
        description: 'Scenic bus journey to Puno with stops at Raqchi temple and Andahuaylillas church.',
        descriptionEs: 'Viaje panorámico en bus a Puno con paradas en el templo de Raqchi e iglesia de Andahuaylillas.',
        locations: ['Cusco to Puno route'],
        activities: ['Scenic journey', 'Temple visits', 'Church visit'],
        activitiesEs: ['Viaje panorámico', 'Visitas a templos', 'Visita a iglesia'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Puno'
      },
      {
        day: 8,
        title: 'Lake Titicaca',
        titleEs: 'Lago Titicaca',
        description: 'Visit Uros floating islands and Taquile Island. Experience local culture.',
        descriptionEs: 'Visita a las islas flotantes de los Uros e Isla Taquile. Experimenta la cultura local.',
        locations: ['Lake Titicaca'],
        activities: ['Uros islands', 'Taquile', 'Local lunch'],
        activitiesEs: ['Islas Uros', 'Taquile', 'Almuerzo local'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Puno'
      },
      {
        day: 9,
        title: 'Return to Lima',
        titleEs: 'Regreso a Lima',
        description: 'Morning flight from Juliaca to Lima. Free afternoon in Miraflores.',
        descriptionEs: 'Vuelo matutino de Juliaca a Lima. Tarde libre en Miraflores.',
        locations: ['Puno', 'Lima'],
        activities: ['Flight', 'Free time', 'Shopping'],
        activitiesEs: ['Vuelo', 'Tiempo libre', 'Compras'],
        meals: 'Breakfast',
        accommodation: 'Hotel in Lima'
      },
      {
        day: 10,
        title: 'Departure',
        titleEs: 'Partida',
        description: 'Transfer to Lima airport for your international departure.',
        descriptionEs: 'Traslado al aeropuerto de Lima para tu vuelo internacional.',
        locations: ['Lima'],
        activities: ['Airport transfer'],
        activitiesEs: ['Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },

  // 14-DAY ITINERARY
  {
    id: '14-day-grand-peru',
    slug: '14-day-grand-peru-family-adventure',
    duration: 14,
    title: 'Grand Peru Family Adventure',
    titleEs: 'Gran Aventura Familiar en Perú',
    subtitle: 'Coast, Highlands & Amazon in one epic journey',
    subtitleEs: 'Costa, Sierra y Selva en un viaje épico',
    description: 'The most comprehensive Peru family experience! Two weeks covering Lima, Arequipa, Colca Canyon, Cusco, Machu Picchu, and the Amazon rainforest.',
    descriptionEs: 'La experiencia familiar más completa en Perú! Dos semanas cubriendo Lima, Arequipa, Cañón del Colca, Cusco, Machu Picchu y la selva amazónica.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 4299,
    image: '/images/itineraries/grand-peru.jpg',
    highlights: [
      'Condor watching at Colca Canyon',
      'White City of Arequipa',
      'Sacred Valley adventures',
      'Machu Picchu exploration',
      'Amazon jungle lodge stay',
      'Lima culinary experience'
    ],
    highlightsEs: [
      'Observación de cóndores en Colca',
      'Ciudad Blanca de Arequipa',
      'Aventuras en el Valle Sagrado',
      'Exploración de Machu Picchu',
      'Estadía en lodge en la Amazonía',
      'Experiencia culinaria en Lima'
    ],
    includes: [
      '13 nights accommodation',
      'Daily breakfast, select meals',
      'All domestic flights',
      'Private transportation',
      'Expert guides',
      'All entrance fees'
    ],
    includesEs: [
      '13 noches de alojamiento',
      'Desayuno diario, comidas selectas',
      'Todos los vuelos domésticos',
      'Transporte privado',
      'Guías expertos',
      'Todas las entradas'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Some meals', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Algunas comidas', 'Propinas'],
    bestFor: ['Adventurous families', 'Children 10+', 'Those wanting to see it all'],
    bestForEs: ['Familias aventureras', 'Niños mayores de 10', 'Quienes quieren verlo todo'],
    minAge: 10,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      { day: 1, title: 'Arrival in Lima', titleEs: 'Llegada a Lima', description: 'Welcome to Peru! Transfer to hotel.', descriptionEs: 'Bienvenidos a Perú! Traslado al hotel.', locations: ['Lima'], activities: ['Arrival'], activitiesEs: ['Llegada'], meals: 'Dinner', accommodation: 'Lima hotel' },
      { day: 2, title: 'Lima Exploration', titleEs: 'Exploración de Lima', description: 'City tour and food experience.', descriptionEs: 'Tour de ciudad y experiencia gastronómica.', locations: ['Lima'], activities: ['City tour', 'Food tour'], activitiesEs: ['Tour de ciudad', 'Tour gastronómico'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 3, title: 'Fly to Arequipa', titleEs: 'Vuelo a Arequipa', description: 'Flight to the White City.', descriptionEs: 'Vuelo a la Ciudad Blanca.', locations: ['Arequipa'], activities: ['Flight', 'City tour'], activitiesEs: ['Vuelo', 'Tour de ciudad'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      { day: 4, title: 'Colca Canyon', titleEs: 'Cañón del Colca', description: 'Drive to Colca, see condors!', descriptionEs: 'Viaje a Colca, ver cóndores!', locations: ['Colca'], activities: ['Scenic drive', 'Condor watching'], activitiesEs: ['Viaje panorámico', 'Observación de cóndores'], meals: 'Breakfast, Lunch', accommodation: 'Colca lodge' },
      { day: 5, title: 'Colca to Puno', titleEs: 'Colca a Puno', description: 'Journey to Lake Titicaca.', descriptionEs: 'Viaje al Lago Titicaca.', locations: ['Puno'], activities: ['Scenic drive'], activitiesEs: ['Viaje panorámico'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 6, title: 'Lake Titicaca', titleEs: 'Lago Titicaca', description: 'Uros and Taquile islands.', descriptionEs: 'Islas Uros y Taquile.', locations: ['Lake Titicaca'], activities: ['Island visits'], activitiesEs: ['Visitas a islas'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 7, title: 'Puno to Cusco', titleEs: 'Puno a Cusco', description: 'Scenic train or bus journey.', descriptionEs: 'Viaje panorámico en tren o bus.', locations: ['Cusco'], activities: ['Journey', 'Acclimatize'], activitiesEs: ['Viaje', 'Aclimatación'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      { day: 8, title: 'Sacred Valley', titleEs: 'Valle Sagrado', description: 'Full day Sacred Valley.', descriptionEs: 'Día completo Valle Sagrado.', locations: ['Sacred Valley'], activities: ['Exploration'], activitiesEs: ['Exploración'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley' },
      { day: 9, title: 'Machu Picchu', titleEs: 'Machu Picchu', description: 'The wonder of the world!', descriptionEs: 'La maravilla del mundo!', locations: ['Machu Picchu'], activities: ['Train', 'Tour'], activitiesEs: ['Tren', 'Tour'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 10, title: 'Cusco Day', titleEs: 'Día en Cusco', description: 'City exploration and cooking.', descriptionEs: 'Exploración de la ciudad y cocina.', locations: ['Cusco'], activities: ['City tour', 'Cooking'], activitiesEs: ['Tour de ciudad', 'Cocina'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 11, title: 'Fly to Amazon', titleEs: 'Vuelo a la Amazonía', description: 'Flight to Puerto Maldonado.', descriptionEs: 'Vuelo a Puerto Maldonado.', locations: ['Amazon'], activities: ['Flight', 'Jungle walk'], activitiesEs: ['Vuelo', 'Caminata en selva'], meals: 'All meals', accommodation: 'Jungle lodge' },
      { day: 12, title: 'Amazon Adventure', titleEs: 'Aventura Amazónica', description: 'Full day jungle activities.', descriptionEs: 'Día completo de actividades en la selva.', locations: ['Amazon'], activities: ['Wildlife', 'Canopy'], activitiesEs: ['Vida silvestre', 'Canopy'], meals: 'All meals', accommodation: 'Jungle lodge' },
      { day: 13, title: 'Amazon to Lima', titleEs: 'Amazonía a Lima', description: 'Return flight to Lima.', descriptionEs: 'Vuelo de regreso a Lima.', locations: ['Lima'], activities: ['Flight', 'Free time'], activitiesEs: ['Vuelo', 'Tiempo libre'], meals: 'Breakfast, Lunch', accommodation: 'Lima hotel' },
      { day: 14, title: 'Departure', titleEs: 'Partida', description: 'Farewell Peru!', descriptionEs: 'Adiós Perú!', locations: ['Lima'], activities: ['Departure'], activitiesEs: ['Partida'], meals: 'Breakfast' }
    ]
  },

  // 15-DAY ITINERARY
  {
    id: '15-day-ultimate-peru',
    slug: '15-day-ultimate-peru-family-expedition',
    duration: 15,
    title: 'Ultimate Peru Family Expedition',
    titleEs: 'Expedición Familiar Definitiva en Perú',
    subtitle: 'The complete Peru experience for adventurous families',
    subtitleEs: 'La experiencia completa de Perú para familias aventureras',
    description: 'Our most comprehensive itinerary covering all of Peru\'s highlights with extra time for immersive experiences and relaxation.',
    descriptionEs: 'Nuestro itinerario más completo cubriendo todos los destacados de Perú con tiempo extra para experiencias inmersivas y relajación.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 4699,
    image: '/images/itineraries/ultimate-peru.jpg',
    highlights: ['Everything from 14-day plus beach time', 'Paracas wildlife', 'Nazca Lines flight option'],
    highlightsEs: ['Todo del itinerario de 14 días más tiempo en playa', 'Vida silvestre de Paracas', 'Opción de vuelo sobre Líneas de Nazca'],
    includes: ['14 nights accommodation', 'Most meals', 'All flights', 'Private transport', 'Expert guides'],
    includesEs: ['14 noches de alojamiento', 'Mayoría de comidas', 'Todos los vuelos', 'Transporte privado', 'Guías expertos'],
    notIncludes: ['International flights', 'Insurance', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro', 'Propinas'],
    bestFor: ['Families with 2+ weeks', 'Active adventurers'],
    bestForEs: ['Familias con 2+ semanas', 'Aventureros activos'],
    minAge: 8,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: [
      { day: 1, title: 'Arrival Lima', titleEs: 'Llegada Lima', description: 'Welcome!', descriptionEs: 'Bienvenidos!', locations: ['Lima'], activities: ['Arrival'], activitiesEs: ['Llegada'], meals: 'Dinner', accommodation: 'Lima' },
      { day: 2, title: 'Lima', titleEs: 'Lima', description: 'City exploration', descriptionEs: 'Exploración de la ciudad', locations: ['Lima'], activities: ['Tour'], activitiesEs: ['Tour'], meals: 'Breakfast', accommodation: 'Lima' },
      { day: 3, title: 'Paracas', titleEs: 'Paracas', description: 'Coast adventure', descriptionEs: 'Aventura costera', locations: ['Paracas'], activities: ['Drive', 'Beach'], activitiesEs: ['Viaje', 'Playa'], meals: 'Breakfast', accommodation: 'Paracas' },
      { day: 4, title: 'Ballestas', titleEs: 'Ballestas', description: 'Wildlife tour', descriptionEs: 'Tour de vida silvestre', locations: ['Ballestas'], activities: ['Boat tour'], activitiesEs: ['Tour en bote'], meals: 'Breakfast', accommodation: 'Paracas' },
      { day: 5, title: 'Arequipa', titleEs: 'Arequipa', description: 'Fly to White City', descriptionEs: 'Vuelo a Ciudad Blanca', locations: ['Arequipa'], activities: ['Flight', 'Tour'], activitiesEs: ['Vuelo', 'Tour'], meals: 'Breakfast', accommodation: 'Arequipa' },
      { day: 6, title: 'Colca', titleEs: 'Colca', description: 'Canyon adventure', descriptionEs: 'Aventura en el cañón', locations: ['Colca'], activities: ['Condors'], activitiesEs: ['Cóndores'], meals: 'Breakfast, Lunch', accommodation: 'Colca' },
      { day: 7, title: 'Puno', titleEs: 'Puno', description: 'Lake Titicaca', descriptionEs: 'Lago Titicaca', locations: ['Puno'], activities: ['Journey'], activitiesEs: ['Viaje'], meals: 'Breakfast', accommodation: 'Puno' },
      { day: 8, title: 'Titicaca', titleEs: 'Titicaca', description: 'Island visits', descriptionEs: 'Visitas a islas', locations: ['Lake Titicaca'], activities: ['Islands'], activitiesEs: ['Islas'], meals: 'Breakfast, Lunch', accommodation: 'Puno' },
      { day: 9, title: 'Cusco', titleEs: 'Cusco', description: 'Travel to Cusco', descriptionEs: 'Viaje a Cusco', locations: ['Cusco'], activities: ['Journey'], activitiesEs: ['Viaje'], meals: 'Breakfast', accommodation: 'Cusco' },
      { day: 10, title: 'Sacred Valley', titleEs: 'Valle Sagrado', description: 'Valley exploration', descriptionEs: 'Exploración del valle', locations: ['Sacred Valley'], activities: ['Explore'], activitiesEs: ['Explorar'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley' },
      { day: 11, title: 'Machu Picchu', titleEs: 'Machu Picchu', description: 'Wonder of the world', descriptionEs: 'Maravilla del mundo', locations: ['Machu Picchu'], activities: ['Tour'], activitiesEs: ['Tour'], meals: 'Breakfast, Lunch', accommodation: 'Cusco' },
      { day: 12, title: 'Cusco Free', titleEs: 'Cusco Libre', description: 'Explore at leisure', descriptionEs: 'Explorar a tu ritmo', locations: ['Cusco'], activities: ['Free day'], activitiesEs: ['Día libre'], meals: 'Breakfast', accommodation: 'Cusco' },
      { day: 13, title: 'Amazon', titleEs: 'Amazonía', description: 'Jungle adventure', descriptionEs: 'Aventura en la selva', locations: ['Amazon'], activities: ['Flight', 'Lodge'], activitiesEs: ['Vuelo', 'Lodge'], meals: 'All meals', accommodation: 'Jungle lodge' },
      { day: 14, title: 'Amazon Day 2', titleEs: 'Amazonía Día 2', description: 'Wildlife activities', descriptionEs: 'Actividades de vida silvestre', locations: ['Amazon'], activities: ['Excursions'], activitiesEs: ['Excursiones'], meals: 'All meals', accommodation: 'Jungle lodge' },
      { day: 15, title: 'Departure', titleEs: 'Partida', description: 'Return home', descriptionEs: 'Regreso a casa', locations: ['Lima'], activities: ['Flights'], activitiesEs: ['Vuelos'], meals: 'Breakfast' }
    ]
  },

  // 20-DAY ITINERARY
  {
    id: '20-day-peru-immersion',
    slug: '20-day-peru-family-immersion',
    duration: 20,
    title: 'Peru Family Immersion',
    titleEs: 'Inmersión Familiar en Perú',
    subtitle: 'Deep dive into Peruvian culture and nature',
    subtitleEs: 'Inmersión profunda en la cultura y naturaleza peruana',
    description: 'Three weeks of incredible Peru experiences. From coast to highlands to jungle, with time for genuine cultural connections.',
    descriptionEs: 'Tres semanas de experiencias increíbles en Perú. Desde la costa hasta la sierra y la selva, con tiempo para conexiones culturales genuinas.',
    theme: 'cultural',
    difficulty: 'moderate',
    price: 5999,
    image: '/images/itineraries/peru-immersion.jpg',
    highlights: ['Extended Amazon stay', 'Community homestays', 'Northern Peru treasures', 'Cooking classes', 'Textile workshops'],
    highlightsEs: ['Estadía extendida en Amazonía', 'Estadías con familias locales', 'Tesoros del norte de Perú', 'Clases de cocina', 'Talleres de textiles'],
    includes: ['19 nights accommodation', 'Most meals', 'All transport', 'Guides', 'All activities'],
    includesEs: ['19 noches de alojamiento', 'Mayoría de comidas', 'Todo el transporte', 'Guías', 'Todas las actividades'],
    notIncludes: ['International flights', 'Insurance', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro', 'Propinas'],
    bestFor: ['Families with extended time', 'Cultural immersion seekers'],
    bestForEs: ['Familias con tiempo extendido', 'Buscadores de inmersión cultural'],
    minAge: 8,
    groupSize: '2-6',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: Array.from({ length: 20 }, (_, i) => ({
      day: i + 1,
      title: `Day ${i + 1}`,
      titleEs: `Día ${i + 1}`,
      description: 'Amazing Peru experience',
      descriptionEs: 'Experiencia increíble en Perú',
      locations: ['Peru'],
      activities: ['Adventure'],
      activitiesEs: ['Aventura'],
      meals: 'Included',
      accommodation: 'Quality hotels'
    }))
  },

  // 21-DAY ITINERARY
  {
    id: '21-day-grand-expedition',
    slug: '21-day-grand-peru-expedition',
    duration: 21,
    title: 'Grand Peru Expedition',
    titleEs: 'Gran Expedición por Perú',
    subtitle: 'Three weeks of discovery',
    subtitleEs: 'Tres semanas de descubrimiento',
    description: 'The most comprehensive Peru journey. North to south, coast to jungle, ancient to modern.',
    descriptionEs: 'El viaje más completo por Perú. De norte a sur, de costa a selva, de lo antiguo a lo moderno.',
    theme: 'adventure',
    difficulty: 'active',
    price: 6499,
    image: '/images/itineraries/grand-expedition.jpg',
    highlights: ['Chan Chan ruins', 'Huacachina oasis', 'Complete southern circuit', 'Extended Amazon', 'Beach relaxation'],
    highlightsEs: ['Ruinas de Chan Chan', 'Oasis de Huacachina', 'Circuito sur completo', 'Amazonía extendida', 'Relajación en playa'],
    includes: ['20 nights', 'Meals', 'Flights', 'Transport', 'Guides', 'Activities'],
    includesEs: ['20 noches', 'Comidas', 'Vuelos', 'Transporte', 'Guías', 'Actividades'],
    notIncludes: ['International flights', 'Insurance'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro'],
    bestFor: ['Ultimate Peru seekers', 'Active families'],
    bestForEs: ['Buscadores del Perú definitivo', 'Familias activas'],
    minAge: 10,
    groupSize: '2-6',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: Array.from({ length: 21 }, (_, i) => ({
      day: i + 1,
      title: `Day ${i + 1}`,
      titleEs: `Día ${i + 1}`,
      description: 'Epic Peru adventure',
      descriptionEs: 'Aventura épica en Perú',
      locations: ['Peru'],
      activities: ['Exploration'],
      activitiesEs: ['Exploración'],
      meals: 'Included',
      accommodation: 'Premium hotels'
    }))
  },

  // 28-DAY ITINERARY
  {
    id: '28-day-complete-immersion',
    slug: '28-day-complete-peru-immersion',
    duration: 28,
    title: 'Complete Peru Immersion',
    titleEs: 'Inmersión Completa en Perú',
    subtitle: 'A month of unforgettable experiences',
    subtitleEs: 'Un mes de experiencias inolvidables',
    description: 'The ultimate month-long Peru family adventure. Every region, every highlight, with time to truly connect.',
    descriptionEs: 'La aventura familiar definitiva de un mes en Perú. Cada región, cada destacado, con tiempo para conectar verdaderamente.',
    theme: 'cultural',
    difficulty: 'moderate',
    price: 8999,
    image: '/images/itineraries/complete-immersion.jpg',
    highlights: ['All Peru regions', 'Multiple Amazon experiences', 'Northern archaeology', 'Beach time', 'Homestays', 'Workshops'],
    highlightsEs: ['Todas las regiones', 'Múltiples experiencias amazónicas', 'Arqueología del norte', 'Tiempo en playa', 'Estadías familiares', 'Talleres'],
    includes: ['27 nights', 'Most meals', 'All transport', 'Guides', 'Activities'],
    includesEs: ['27 noches', 'Mayoría de comidas', 'Todo transporte', 'Guías', 'Actividades'],
    notIncludes: ['International flights', 'Insurance'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro'],
    bestFor: ['Sabbatical families', 'Deep immersion seekers'],
    bestForEs: ['Familias en año sabático', 'Buscadores de inmersión profunda'],
    minAge: 6,
    groupSize: '2-6',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: Array.from({ length: 28 }, (_, i) => ({
      day: i + 1,
      title: `Day ${i + 1}`,
      titleEs: `Día ${i + 1}`,
      description: 'Immersive Peru',
      descriptionEs: 'Perú inmersivo',
      locations: ['Peru'],
      activities: ['Experience'],
      activitiesEs: ['Experiencia'],
      meals: 'Included'
    }))
  },

  // 31-DAY ITINERARY
  {
    id: '31-day-ultimate-journey',
    slug: '31-day-ultimate-peru-journey',
    duration: 31,
    title: 'Ultimate Peru Journey',
    titleEs: 'Viaje Definitivo por Perú',
    subtitle: 'The complete month-long family odyssey',
    subtitleEs: 'La odisea familiar completa de un mes',
    description: 'Our most extensive offering. A full month exploring every corner of Peru at a relaxed family pace.',
    descriptionEs: 'Nuestra oferta más extensa. Un mes completo explorando cada rincón de Perú a un ritmo familiar relajado.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 9999,
    image: '/images/itineraries/ultimate-journey.jpg',
    highlights: ['Complete Peru coverage', 'Rest days included', 'All experiences', 'Maximum flexibility'],
    highlightsEs: ['Cobertura completa de Perú', 'Días de descanso incluidos', 'Todas las experiencias', 'Máxima flexibilidad'],
    includes: ['30 nights', 'All meals', 'Everything'],
    includesEs: ['30 noches', 'Todas las comidas', 'Todo incluido'],
    notIncludes: ['International flights'],
    notIncludesEs: ['Vuelos internacionales'],
    bestFor: ['Extended travel families', 'Complete Peru experience'],
    bestForEs: ['Familias en viaje extendido', 'Experiencia completa de Perú'],
    minAge: 5,
    groupSize: '2-6',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: false,
    dayByDay: Array.from({ length: 31 }, (_, i) => ({
      day: i + 1,
      title: `Day ${i + 1}`,
      titleEs: `Día ${i + 1}`,
      description: 'Ultimate Peru',
      descriptionEs: 'Perú definitivo',
      locations: ['Peru'],
      activities: ['Adventure'],
      activitiesEs: ['Aventura'],
      meals: 'All included'
    }))
  }
];

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find(i => i.slug === slug);
}

export function getItinerariesByDuration(days: number): Itinerary[] {
  return itineraries.filter(i => i.duration === days);
}

export function getFeaturedItineraries(): Itinerary[] {
  return itineraries.filter(i => i.featured);
}

export function getAllDurations(): number[] {
  return [...new Set(itineraries.map(i => i.duration))].sort((a, b) => a - b);
}
