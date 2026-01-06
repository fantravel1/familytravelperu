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
  // 3-DAY ITINERARIES
  {
    id: '3-day-culture-coast',
    slug: '3-day-lima-culture-coast',
    duration: 3,
    title: 'Lima Culture & Coast',
    titleEs: 'Lima Cultura y Costa',
    subtitle: 'A weekend taste of Peru\'s vibrant capital',
    subtitleEs: 'Un fin de semana saboreando la vibrante capital de Perú',
    description: 'Perfect for families with limited time or as a Lima extension. Explore world-class museums, incredible food, and the beautiful Miraflores coastline. No altitude concerns!',
    descriptionEs: 'Perfecto para familias con tiempo limitado o como extensión en Lima. Explora museos de clase mundial, comida increíble y la hermosa costa de Miraflores. Sin preocupaciones de altura!',
    theme: 'cultural',
    difficulty: 'easy',
    price: 599,
    image: '/images/itineraries/lima-culture.jpg',
    highlights: [
      'Larco Museum pre-Columbian treasures',
      'Lima food tour with tastings',
      'Miraflores Malecón sunset walk',
      'San Pedro Market exploration',
      'Huaca Pucllana archaeological site'
    ],
    highlightsEs: [
      'Tesoros precolombinos del Museo Larco',
      'Tour gastronómico con degustaciones',
      'Caminata al atardecer por el Malecón de Miraflores',
      'Exploración del Mercado San Pedro',
      'Sitio arqueológico Huaca Pucllana'
    ],
    includes: ['2 nights accommodation', 'Daily breakfast', 'Private transportation', 'English-speaking guide', 'Museum entrance fees'],
    includesEs: ['2 noches de alojamiento', 'Desayuno diario', 'Transporte privado', 'Guía de habla inglesa', 'Entradas a museos'],
    notIncludes: ['International flights', 'Travel insurance', 'Lunches and dinners', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Almuerzos y cenas', 'Propinas'],
    bestFor: ['Weekend visitors', 'Food lovers', 'Families avoiding altitude', 'First-time Peru visitors'],
    bestForEs: ['Visitantes de fin de semana', 'Amantes de la gastronomía', 'Familias evitando la altura', 'Visitantes primerizos'],
    minAge: 3,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Welcome to Lima',
        titleEs: 'Bienvenidos a Lima',
        description: 'Arrive in Lima and settle into your Miraflores hotel. Afternoon visit to the stunning Larco Museum with its incredible pre-Columbian gold collection. Evening Malecón walk with ocean views.',
        descriptionEs: 'Llegada a Lima y acomodo en su hotel de Miraflores. Visita por la tarde al impresionante Museo Larco con su increíble colección de oro precolombino. Caminata nocturna por el Malecón con vistas al océano.',
        locations: ['Lima Airport', 'Miraflores', 'Larco Museum'],
        activities: ['Airport pickup', 'Museum tour', 'Malecón sunset walk'],
        activitiesEs: ['Recogida en aeropuerto', 'Tour del museo', 'Caminata al atardecer por el Malecón'],
        meals: 'Welcome dinner',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 2,
        title: 'Lima Food & History',
        titleEs: 'Gastronomía e Historia de Lima',
        description: 'Morning walking tour of Lima\'s Historic Center: Plaza Mayor, San Francisco Catacombs, and colonial architecture. Afternoon food tour through Miraflores and Barranco with tastings of ceviche, anticuchos, and pisco sour.',
        descriptionEs: 'Tour matutino a pie por el Centro Histórico de Lima: Plaza Mayor, Catacumbas de San Francisco y arquitectura colonial. Tour gastronómico por la tarde por Miraflores y Barranco con degustaciones de ceviche, anticuchos y pisco sour.',
        locations: ['Lima Historic Center', 'Miraflores', 'Barranco'],
        activities: ['Historic center tour', 'Catacombs visit', 'Food tour with tastings'],
        activitiesEs: ['Tour del centro histórico', 'Visita a catacumbas', 'Tour gastronómico con degustaciones'],
        meals: 'Breakfast, lunch tastings',
        accommodation: 'Hotel in Miraflores'
      },
      {
        day: 3,
        title: 'Miraflores & Departure',
        titleEs: 'Miraflores y Partida',
        description: 'Morning visit to Huaca Pucllana, a pre-Inca pyramid right in Miraflores. Time for shopping at Indian Market or Larcomar. Transfer to airport for departure.',
        descriptionEs: 'Visita matutina a Huaca Pucllana, una pirámide pre-inca en pleno Miraflores. Tiempo para compras en el Mercado Indio o Larcomar. Traslado al aeropuerto para la partida.',
        locations: ['Huaca Pucllana', 'Miraflores', 'Lima Airport'],
        activities: ['Archaeological site', 'Shopping time', 'Airport transfer'],
        activitiesEs: ['Sitio arqueológico', 'Tiempo de compras', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: '3-day-sacred-valley-luxury',
    slug: '3-day-luxury-sacred-valley',
    duration: 3,
    title: 'Luxury Sacred Valley Escape',
    titleEs: 'Escape de Lujo al Valle Sagrado',
    subtitle: 'Premium family experience in Peru\'s heartland',
    subtitleEs: 'Experiencia familiar premium en el corazón del Perú',
    description: 'A luxurious long weekend in the Sacred Valley with a quick Machu Picchu visit. Stay at premium hotels, enjoy gourmet dining, and experience the best of Inca heritage.',
    descriptionEs: 'Un lujoso fin de semana largo en el Valle Sagrado con una visita rápida a Machu Picchu. Hospédese en hoteles premium, disfrute de cenas gourmet y experimente lo mejor de la herencia Inca.',
    theme: 'classic',
    difficulty: 'easy',
    price: 1299,
    image: '/images/itineraries/sacred-valley-luxury.jpg',
    highlights: [
      'Luxury Sacred Valley accommodation',
      'Private Machu Picchu tour',
      'Gourmet Peruvian dining',
      'Exclusive alpaca experience',
      'VIP train journey'
    ],
    highlightsEs: [
      'Alojamiento de lujo en el Valle Sagrado',
      'Tour privado a Machu Picchu',
      'Cena gourmet peruana',
      'Experiencia exclusiva con alpacas',
      'Viaje en tren VIP'
    ],
    includes: ['2 nights luxury accommodation', 'All meals', 'Private VIP train', 'Private guide', 'All entrance fees'],
    includesEs: ['2 noches alojamiento de lujo', 'Todas las comidas', 'Tren VIP privado', 'Guía privado', 'Todas las entradas'],
    notIncludes: ['Flights to Cusco', 'International flights', 'Travel insurance', 'Tips'],
    notIncludesEs: ['Vuelos a Cusco', 'Vuelos internacionales', 'Seguro de viaje', 'Propinas'],
    bestFor: ['Luxury travelers', 'Time-constrained families', 'Special celebrations', 'Comfort seekers'],
    bestForEs: ['Viajeros de lujo', 'Familias con poco tiempo', 'Celebraciones especiales', 'Buscadores de confort'],
    minAge: 4,
    groupSize: '2-6',
    startLocation: 'Cusco',
    endLocation: 'Cusco',
    featured: true,
    dayByDay: [
      {
        day: 1,
        title: 'Arrive Sacred Valley',
        titleEs: 'Llegada al Valle Sagrado',
        description: 'Arrive in Cusco and transfer directly to Sacred Valley (lower altitude for easier acclimatization). Check into your luxury hotel. Afternoon gentle exploration with alpaca visit and weaving demonstration.',
        descriptionEs: 'Llegada a Cusco y traslado directo al Valle Sagrado (menor altitud para mejor aclimatación). Check-in en su hotel de lujo. Tarde de exploración suave con visita a alpacas y demostración de tejido.',
        locations: ['Cusco Airport', 'Sacred Valley'],
        activities: ['Airport pickup', 'Luxury hotel check-in', 'Alpaca farm', 'Weaving demo'],
        activitiesEs: ['Recogida en aeropuerto', 'Check-in hotel de lujo', 'Granja de alpacas', 'Demostración de tejido'],
        meals: 'Gourmet dinner',
        accommodation: 'Luxury Sacred Valley hotel'
      },
      {
        day: 2,
        title: 'Machu Picchu VIP',
        titleEs: 'Machu Picchu VIP',
        description: 'Early VIP train from Ollantaytambo to Aguas Calientes. Private guided tour of Machu Picchu with special access times. Gourmet lunch at Sanctuary Lodge. Return by train for evening spa time.',
        descriptionEs: 'Tren VIP temprano desde Ollantaytambo a Aguas Calientes. Tour guiado privado de Machu Picchu con horarios de acceso especiales. Almuerzo gourmet en Sanctuary Lodge. Regreso en tren para tiempo de spa.',
        locations: ['Ollantaytambo', 'Machu Picchu', 'Aguas Calientes'],
        activities: ['VIP train', 'Private Machu Picchu tour', 'Gourmet lunch', 'Spa time'],
        activitiesEs: ['Tren VIP', 'Tour privado Machu Picchu', 'Almuerzo gourmet', 'Tiempo de spa'],
        meals: 'Breakfast, Gourmet lunch, Dinner',
        accommodation: 'Luxury Sacred Valley hotel'
      },
      {
        day: 3,
        title: 'Sacred Valley & Departure',
        titleEs: 'Valle Sagrado y Partida',
        description: 'Leisurely morning with optional spa treatment. Visit Moray circular terraces and Maras salt mines. Late afternoon transfer to Cusco airport.',
        descriptionEs: 'Mañana tranquila con tratamiento de spa opcional. Visita a las terrazas circulares de Moray y salineras de Maras. Traslado al aeropuerto de Cusco por la tarde.',
        locations: ['Sacred Valley', 'Moray', 'Maras', 'Cusco Airport'],
        activities: ['Spa optional', 'Moray terraces', 'Maras salt mines', 'Airport transfer'],
        activitiesEs: ['Spa opcional', 'Terrazas de Moray', 'Salineras de Maras', 'Traslado al aeropuerto'],
        meals: 'Breakfast, Lunch'
      }
    ]
  },
  {
    id: '3-day-ancient-civilizations',
    slug: '3-day-ancient-civilizations-north',
    duration: 3,
    title: 'Ancient Civilizations of the North',
    titleEs: 'Civilizaciones Antiguas del Norte',
    subtitle: 'Discover Peru\'s pre-Inca treasures',
    subtitleEs: 'Descubre los tesoros pre-Incas del Perú',
    description: 'Explore the remarkable archaeological sites of northern Peru. Visit Chan Chan, the largest adobe city in the world, and the royal tombs of Sipán. Perfect for history-loving families.',
    descriptionEs: 'Explora los notables sitios arqueológicos del norte de Perú. Visita Chan Chan, la ciudad de adobe más grande del mundo, y las tumbas reales de Sipán. Perfecto para familias amantes de la historia.',
    theme: 'historical',
    difficulty: 'easy',
    price: 699,
    image: '/images/itineraries/north-peru.jpg',
    highlights: [
      'Chan Chan adobe citadel',
      'Lord of Sipán royal tombs',
      'Huaca del Sol y la Luna',
      'Chiclayo museums',
      'Traditional northern cuisine'
    ],
    highlightsEs: [
      'Ciudadela de adobe Chan Chan',
      'Tumbas reales del Señor de Sipán',
      'Huaca del Sol y la Luna',
      'Museos de Chiclayo',
      'Gastronomía tradicional del norte'
    ],
    includes: ['2 nights accommodation', 'Daily breakfast', 'Private transportation', 'Expert archaeologist guide', 'All entrance fees'],
    includesEs: ['2 noches de alojamiento', 'Desayuno diario', 'Transporte privado', 'Guía arqueólogo experto', 'Todas las entradas'],
    notIncludes: ['Flights to Trujillo/Chiclayo', 'International flights', 'Lunches and dinners', 'Tips'],
    notIncludesEs: ['Vuelos a Trujillo/Chiclayo', 'Vuelos internacionales', 'Almuerzos y cenas', 'Propinas'],
    bestFor: ['History enthusiasts', 'Off-the-beaten-path seekers', 'Archaeology fans', 'Educational trips'],
    bestForEs: ['Entusiastas de la historia', 'Buscadores de rutas alternativas', 'Fanáticos de la arqueología', 'Viajes educativos'],
    minAge: 6,
    groupSize: '2-8',
    startLocation: 'Trujillo',
    endLocation: 'Chiclayo',
    featured: false,
    dayByDay: [
      {
        day: 1,
        title: 'Trujillo & Chan Chan',
        titleEs: 'Trujillo y Chan Chan',
        description: 'Arrive in Trujillo and explore the colonial city center. Afternoon visit to Chan Chan, the largest pre-Columbian city in South America and UNESCO World Heritage Site.',
        descriptionEs: 'Llegada a Trujillo y exploración del centro colonial. Visita por la tarde a Chan Chan, la ciudad precolombina más grande de Sudamérica y Patrimonio de la Humanidad.',
        locations: ['Trujillo', 'Chan Chan'],
        activities: ['City tour', 'Chan Chan exploration', 'Colonial architecture'],
        activitiesEs: ['Tour de ciudad', 'Exploración de Chan Chan', 'Arquitectura colonial'],
        meals: 'Dinner',
        accommodation: 'Hotel in Trujillo'
      },
      {
        day: 2,
        title: 'Huacas & Journey North',
        titleEs: 'Huacas y Viaje al Norte',
        description: 'Morning visit to Huaca del Sol y la Luna (Temple of the Sun and Moon) with spectacular Moche murals. Drive north to Chiclayo with stops at local markets.',
        descriptionEs: 'Visita matutina a Huaca del Sol y la Luna con espectaculares murales Moche. Viaje al norte hacia Chiclayo con paradas en mercados locales.',
        locations: ['Huaca del Sol', 'Huaca de la Luna', 'Chiclayo'],
        activities: ['Temple visit', 'Moche art appreciation', 'Scenic drive'],
        activitiesEs: ['Visita al templo', 'Apreciación del arte Moche', 'Viaje panorámico'],
        meals: 'Breakfast, Lunch',
        accommodation: 'Hotel in Chiclayo'
      },
      {
        day: 3,
        title: 'Lord of Sipán & Departure',
        titleEs: 'Señor de Sipán y Partida',
        description: 'Visit the spectacular Royal Tombs of Sipán Museum, one of Peru\'s most important archaeological discoveries. Explore the actual tomb site at Huaca Rajada. Transfer to Chiclayo airport.',
        descriptionEs: 'Visita al espectacular Museo Tumbas Reales de Sipán, uno de los descubrimientos arqueológicos más importantes del Perú. Explora el sitio de la tumba en Huaca Rajada. Traslado al aeropuerto de Chiclayo.',
        locations: ['Royal Tombs Museum', 'Huaca Rajada', 'Chiclayo Airport'],
        activities: ['Museum visit', 'Archaeological site', 'Airport transfer'],
        activitiesEs: ['Visita al museo', 'Sitio arqueológico', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: '3-day-amazon-intro',
    slug: '3-day-amazon-jungle-adventure',
    duration: 3,
    title: 'Amazon Jungle Introduction',
    titleEs: 'Introducción a la Selva Amazónica',
    subtitle: 'A taste of the rainforest for families with limited time',
    subtitleEs: 'Una probada de la selva tropical para familias con tiempo limitado',
    description: 'Experience the magic of the Amazon in just 3 days. Perfect for families wanting to add a jungle adventure to their Peru trip without extensive travel. Based at a comfortable eco-lodge near Puerto Maldonado, this itinerary includes wildlife spotting, jungle walks, and hands-on rainforest activities.',
    descriptionEs: 'Experimenta la magia del Amazonas en solo 3 días. Perfecto para familias que quieren agregar una aventura en la selva a su viaje a Perú sin viajes extensos. Basado en un cómodo eco-lodge cerca de Puerto Maldonado, este itinerario incluye avistamiento de fauna, caminatas en la selva y actividades prácticas en la selva tropical.',
    theme: 'amazon',
    difficulty: 'easy',
    price: 799,
    image: '/images/itineraries/amazon-intro.jpg',
    highlights: [
      'Stay at family-friendly jungle lodge',
      'Spot monkeys, macaws, and caimans',
      'Night jungle walk with naturalist guide',
      'Visit local indigenous community',
      'Piranha fishing experience'
    ],
    highlightsEs: [
      'Estadía en lodge de selva familiar',
      'Avista monos, guacamayos y caimanes',
      'Caminata nocturna con guía naturalista',
      'Visita a comunidad indígena local',
      'Experiencia de pesca de pirañas'
    ],
    includes: [
      'Airport transfers in Puerto Maldonado',
      '2 nights at jungle eco-lodge',
      'All meals at lodge',
      'English-speaking naturalist guide',
      'All activities as listed',
      'Rubber boots and rain ponchos'
    ],
    includesEs: [
      'Traslados del aeropuerto en Puerto Maldonado',
      '2 noches en eco-lodge de selva',
      'Todas las comidas en el lodge',
      'Guía naturalista de habla inglesa',
      'Todas las actividades listadas',
      'Botas de goma y ponchos de lluvia'
    ],
    notIncludes: [
      'Flights to/from Puerto Maldonado',
      'Travel insurance',
      'Personal expenses',
      'Tips for guides'
    ],
    notIncludesEs: [
      'Vuelos hacia/desde Puerto Maldonado',
      'Seguro de viaje',
      'Gastos personales',
      'Propinas para guías'
    ],
    bestFor: ['Nature lovers', 'Wildlife enthusiasts', 'Adventurous families', 'Ages 5+'],
    bestForEs: ['Amantes de la naturaleza', 'Entusiastas de la fauna', 'Familias aventureras', 'Mayores de 5 años'],
    minAge: 5,
    groupSize: '6-12 people',
    startLocation: 'Puerto Maldonado',
    endLocation: 'Puerto Maldonado',
    dayByDay: [
      {
        day: 1,
        title: 'Jungle Arrival & First Explorations',
        titleEs: 'Llegada a la Selva y Primeras Exploraciones',
        description: 'Fly into Puerto Maldonado and boat upriver to your jungle lodge. After settling in and a delicious lunch, take an introductory jungle walk to learn about the rainforest ecosystem. Evening caiman spotting on the river.',
        descriptionEs: 'Vuela a Puerto Maldonado y navega río arriba hasta tu lodge de selva. Después de instalarte y un delicioso almuerzo, realiza una caminata introductoria en la selva para aprender sobre el ecosistema. Avistamiento de caimanes en la noche.',
        locations: ['Puerto Maldonado', 'Tambopata River', 'Jungle Lodge'],
        activities: ['River boat transfer', 'Jungle walk', 'Caiman spotting'],
        activitiesEs: ['Traslado en bote', 'Caminata en la selva', 'Avistamiento de caimanes'],
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Full Day of Adventure',
        titleEs: 'Día Completo de Aventura',
        description: 'Early morning bird watching when wildlife is most active. After breakfast, visit an indigenous community to learn traditional crafts. Afternoon piranha fishing - catch and release. Night walk to spot nocturnal creatures like tarantulas and frogs.',
        descriptionEs: 'Observación de aves temprano cuando la fauna está más activa. Después del desayuno, visita una comunidad indígena para aprender artesanías tradicionales. Pesca de pirañas por la tarde. Caminata nocturna para ver criaturas nocturnas.',
        locations: ['Jungle trails', 'Indigenous community', 'Oxbow lake'],
        activities: ['Bird watching', 'Community visit', 'Piranha fishing', 'Night walk'],
        activitiesEs: ['Observación de aves', 'Visita a comunidad', 'Pesca de pirañas', 'Caminata nocturna'],
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Macaw Clay Lick & Departure',
        titleEs: 'Collpa de Guacamayos y Partida',
        description: 'Optional early morning visit to a parrot clay lick to see dozens of colorful birds. Final jungle walk before breakfast. Boat back to Puerto Maldonado for your departure flight.',
        descriptionEs: 'Visita opcional temprano a una collpa de loros para ver docenas de aves coloridas. Última caminata antes del desayuno. Bote de regreso a Puerto Maldonado para tu vuelo de salida.',
        locations: ['Clay lick', 'Jungle Lodge', 'Puerto Maldonado Airport'],
        activities: ['Clay lick visit', 'Final jungle walk', 'Airport transfer'],
        activitiesEs: ['Visita a collpa', 'Última caminata', 'Traslado al aeropuerto'],
        meals: 'Breakfast'
      }
    ]
  },
  {
    id: '3-day-lake-titicaca',
    slug: '3-day-lake-titicaca-puno',
    duration: 3,
    title: 'Lake Titicaca Discovery',
    titleEs: 'Descubrimiento del Lago Titicaca',
    subtitle: 'Explore the world\'s highest navigable lake and its unique cultures',
    subtitleEs: 'Explora el lago navegable más alto del mundo y sus culturas únicas',
    description: 'Discover the mystical Lake Titicaca, shared by Peru and Bolivia, and meet the communities who have called it home for centuries. Visit the famous floating Uros islands and stay overnight with a local family on Amantani Island for an authentic cultural immersion.',
    descriptionEs: 'Descubre el místico Lago Titicaca, compartido por Perú y Bolivia, y conoce las comunidades que lo han llamado hogar por siglos. Visita las famosas islas flotantes de los Uros y quédate una noche con una familia local en la Isla Amantaní para una inmersión cultural auténtica.',
    theme: 'cultural',
    difficulty: 'moderate',
    price: 549,
    image: '/images/itineraries/lake-titicaca.jpg',
    highlights: [
      'Visit the floating Uros reed islands',
      'Overnight homestay on Amantani Island',
      'Traditional weaving demonstration',
      'Sunset views over the lake',
      'Learn about ancient Aymara culture'
    ],
    highlightsEs: [
      'Visita las islas flotantes de los Uros',
      'Estadía con familia en Isla Amantaní',
      'Demostración de tejido tradicional',
      'Vistas del atardecer sobre el lago',
      'Aprende sobre la antigua cultura Aymara'
    ],
    includes: [
      'Hotel in Puno (1 night)',
      'Homestay on Amantani Island (1 night)',
      'All boat transportation',
      'English-speaking guide',
      'Meals as specified',
      'Community contributions'
    ],
    includesEs: [
      'Hotel en Puno (1 noche)',
      'Estadía con familia en Amantaní (1 noche)',
      'Todo el transporte en bote',
      'Guía de habla inglesa',
      'Comidas especificadas',
      'Contribuciones a la comunidad'
    ],
    notIncludes: [
      'Flights to/from Juliaca',
      'Travel insurance',
      'Personal expenses',
      'Tips'
    ],
    notIncludesEs: [
      'Vuelos hacia/desde Juliaca',
      'Seguro de viaje',
      'Gastos personales',
      'Propinas'
    ],
    bestFor: ['Cultural immersion', 'Unique experiences', 'Families with older kids', 'Photography'],
    bestForEs: ['Inmersión cultural', 'Experiencias únicas', 'Familias con niños mayores', 'Fotografía'],
    minAge: 8,
    groupSize: '4-16 people',
    startLocation: 'Puno',
    endLocation: 'Puno',
    dayByDay: [
      {
        day: 1,
        title: 'Arrival & Uros Floating Islands',
        titleEs: 'Llegada e Islas Flotantes de los Uros',
        description: 'Arrive in Puno and transfer to your lakeside hotel. After lunch, boat to the incredible Uros Floating Islands, constructed entirely of totora reeds. Learn how islanders build and maintain their unique homes. Return to Puno for dinner.',
        descriptionEs: 'Llega a Puno y traslado a tu hotel junto al lago. Después del almuerzo, navega a las increíbles Islas Flotantes de los Uros, construidas enteramente de totora. Aprende cómo los isleños construyen y mantienen sus hogares únicos.',
        locations: ['Puno', 'Uros Islands', 'Lake Titicaca'],
        activities: ['Hotel check-in', 'Uros Islands visit', 'Cultural demonstration'],
        activitiesEs: ['Check-in hotel', 'Visita Islas Uros', 'Demostración cultural'],
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Amantani Island Homestay',
        titleEs: 'Estadía con Familia en Amantaní',
        description: 'Morning boat ride to Amantani Island (3.5 hours). Meet your host family and settle into their traditional home. Hike to the island\'s sacred temples for spectacular sunset views. Evening dinner with your family and traditional music.',
        descriptionEs: 'Navegación matutina a la Isla Amantaní (3.5 horas). Conoce a tu familia anfitriona e instálate en su hogar tradicional. Caminata a los templos sagrados de la isla para vistas espectaculares del atardecer. Cena con tu familia y música tradicional.',
        locations: ['Lake Titicaca', 'Amantani Island', 'Pachatata Temple'],
        activities: ['Boat journey', 'Homestay', 'Temple hike', 'Cultural dinner'],
        activitiesEs: ['Viaje en bote', 'Estadía con familia', 'Caminata al templo', 'Cena cultural'],
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Taquile Island & Return',
        titleEs: 'Isla Taquile y Retorno',
        description: 'Say goodbye to your host family and boat to Taquile Island, famous for textile traditions recognized by UNESCO. Watch weavers at work and enjoy lunch with lake views. Return to Puno by mid-afternoon.',
        descriptionEs: 'Despídete de tu familia anfitriona y navega a la Isla Taquile, famosa por tradiciones textiles reconocidas por UNESCO. Observa tejedores trabajando y disfruta almuerzo con vistas al lago. Regreso a Puno a media tarde.',
        locations: ['Amantani Island', 'Taquile Island', 'Puno'],
        activities: ['Island farewell', 'Weaving demonstration', 'Scenic lunch', 'Return boat'],
        activitiesEs: ['Despedida de la isla', 'Demostración de tejido', 'Almuerzo panorámico', 'Bote de regreso'],
        meals: 'Breakfast, Lunch'
      }
    ]
  },
  {
    id: '3-day-arequipa-colca',
    slug: '3-day-arequipa-colca-canyon',
    duration: 3,
    title: 'Arequipa & Colca Canyon',
    titleEs: 'Arequipa y Cañón del Colca',
    subtitle: 'White city architecture and condor watching adventure',
    subtitleEs: 'Arquitectura de la ciudad blanca y avistamiento de cóndores',
    description: 'Combine the colonial splendor of Arequipa with the dramatic landscapes of Colca Canyon - one of the world\'s deepest canyons. Watch Andean condors soar overhead and explore traditional villages. Perfect for families seeking a mix of culture and nature.',
    descriptionEs: 'Combina el esplendor colonial de Arequipa con los paisajes dramáticos del Cañón del Colca - uno de los cañones más profundos del mundo. Observa cóndores andinos volar y explora pueblos tradicionales. Perfecto para familias buscando una mezcla de cultura y naturaleza.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 649,
    image: '/images/itineraries/colca-canyon.jpg',
    highlights: [
      'Explore Arequipa\'s stunning Santa Catalina Monastery',
      'Watch condors at Cruz del Condor viewpoint',
      'Visit traditional Colca Valley villages',
      'See pre-Inca terraces and hot springs',
      'Photography at dramatic canyon viewpoints'
    ],
    highlightsEs: [
      'Explora el impresionante Monasterio de Santa Catalina',
      'Observa cóndores en el mirador Cruz del Cóndor',
      'Visita pueblos tradicionales del Valle del Colca',
      'Ve terrazas pre-incas y aguas termales',
      'Fotografía en miradores dramáticos del cañón'
    ],
    includes: [
      'Hotel in Arequipa (1 night)',
      'Hotel in Colca (1 night)',
      'Private transportation',
      'English-speaking guide',
      'Entrance fees',
      'Breakfasts'
    ],
    includesEs: [
      'Hotel en Arequipa (1 noche)',
      'Hotel en Colca (1 noche)',
      'Transporte privado',
      'Guía de habla inglesa',
      'Entradas',
      'Desayunos'
    ],
    notIncludes: [
      'Flights to/from Arequipa',
      'Lunches and dinners',
      'Hot springs entrance',
      'Tips'
    ],
    notIncludesEs: [
      'Vuelos hacia/desde Arequipa',
      'Almuerzos y cenas',
      'Entrada a aguas termales',
      'Propinas'
    ],
    bestFor: ['Nature enthusiasts', 'Birdwatchers', 'Adventure seekers', 'Families with older kids'],
    bestForEs: ['Entusiastas de la naturaleza', 'Observadores de aves', 'Buscadores de aventura', 'Familias con niños mayores'],
    minAge: 7,
    groupSize: '2-8 people',
    startLocation: 'Arequipa',
    endLocation: 'Arequipa',
    dayByDay: [
      {
        day: 1,
        title: 'Discover Arequipa',
        titleEs: 'Descubre Arequipa',
        description: 'Explore the "White City" with its stunning sillar architecture. Visit the Plaza de Armas, the ornate Cathedral, and the Santa Catalina Monastery - a city within a city. Free time to explore markets and try local cuisine like rocoto relleno.',
        descriptionEs: 'Explora la "Ciudad Blanca" con su impresionante arquitectura de sillar. Visita la Plaza de Armas, la ornamentada Catedral y el Monasterio de Santa Catalina - una ciudad dentro de la ciudad. Tiempo libre para explorar mercados y probar cocina local.',
        locations: ['Plaza de Armas', 'Santa Catalina Monastery', 'Arequipa Historic Center'],
        activities: ['City walking tour', 'Monastery visit', 'Free exploration'],
        activitiesEs: ['Tour a pie por la ciudad', 'Visita al monasterio', 'Exploración libre'],
        meals: 'Breakfast'
      },
      {
        day: 2,
        title: 'Journey to Colca Canyon',
        titleEs: 'Viaje al Cañón del Colca',
        description: 'Early departure through stunning highland scenery. Stop at the highest point (4,910m) for vicuña spotting. Descend into Colca Valley, visiting traditional villages with pre-Inca terraces. Afternoon at leisure with optional hot springs visit.',
        descriptionEs: 'Salida temprano a través de paisajes impresionantes de altura. Parada en el punto más alto (4,910m) para avistar vicuñas. Descenso al Valle del Colca, visitando pueblos tradicionales con terrazas pre-incas. Tarde libre con visita opcional a aguas termales.',
        locations: ['Pata Pampa Pass', 'Chivay', 'Colca Valley'],
        activities: ['Scenic drive', 'Wildlife spotting', 'Village visits', 'Optional hot springs'],
        activitiesEs: ['Viaje escénico', 'Avistamiento de fauna', 'Visitas a pueblos', 'Aguas termales opcionales'],
        meals: 'Breakfast'
      },
      {
        day: 3,
        title: 'Condors & Return',
        titleEs: 'Cóndores y Retorno',
        description: 'Very early departure to Cruz del Condor viewpoint for the best chance to see majestic Andean condors riding thermal currents. Stop at canyon viewpoints for photos. Visit the charming town of Maca before returning to Arequipa.',
        descriptionEs: 'Salida muy temprano al mirador Cruz del Cóndor para la mejor oportunidad de ver majestuosos cóndores andinos surfeando corrientes térmicas. Paradas en miradores del cañón para fotos. Visita al encantador pueblo de Maca antes de regresar a Arequipa.',
        locations: ['Cruz del Condor', 'Canyon viewpoints', 'Maca', 'Arequipa'],
        activities: ['Condor watching', 'Photography', 'Village visit', 'Return drive'],
        activitiesEs: ['Observación de cóndores', 'Fotografía', 'Visita a pueblo', 'Viaje de regreso'],
        meals: 'Breakfast'
      }
    ]
  },

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

  // 30-DAY COMPREHENSIVE ITINERARY
  {
    id: '30-day-coast-to-cloud',
    slug: '30-day-peru-coast-to-cloud-forest',
    duration: 30,
    title: 'Peru: Coast to Cloud Forest',
    titleEs: 'Perú: De la Costa al Bosque Nublado',
    subtitle: 'A month-long journey through all of Peru\'s ecosystems',
    subtitleEs: 'Un viaje de un mes por todos los ecosistemas del Perú',
    description: 'The definitive month-long Peru experience. From Pacific beaches to Amazon rainforest, from coastal deserts to Andean peaks. This comprehensive itinerary includes Lima, Paracas, Nazca, Arequipa, Colca Canyon, Puno, Lake Titicaca, Cusco, Sacred Valley, Machu Picchu, and the Amazon jungle.',
    descriptionEs: 'La experiencia definitiva de un mes en Perú. Desde playas del Pacífico hasta la selva amazónica, desde desiertos costeros hasta picos andinos. Este itinerario completo incluye Lima, Paracas, Nazca, Arequipa, Cañón del Colca, Puno, Lago Titicaca, Cusco, Valle Sagrado, Machu Picchu y la selva amazónica.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 8499,
    image: '/images/itineraries/coast-to-cloud.jpg',
    highlights: [
      'Complete coastal circuit: Lima, Paracas, Nazca',
      'Condor watching at Colca Canyon',
      'Lake Titicaca island experiences',
      'Extended Sacred Valley exploration',
      'Two-day Machu Picchu experience',
      'Four-night Amazon jungle immersion',
      'Northern Peru archaeological sites',
      'Multiple cooking classes and food tours'
    ],
    highlightsEs: [
      'Circuito costero completo: Lima, Paracas, Nazca',
      'Observación de cóndores en el Cañón del Colca',
      'Experiencias en las islas del Lago Titicaca',
      'Exploración extendida del Valle Sagrado',
      'Experiencia de dos días en Machu Picchu',
      'Inmersión de cuatro noches en la selva amazónica',
      'Sitios arqueológicos del norte de Perú',
      'Múltiples clases de cocina y tours gastronómicos'
    ],
    includes: [
      '29 nights accommodation (mix of luxury, boutique, eco-lodges)',
      'Daily breakfast, most lunches and dinners',
      'All domestic flights (5 flights included)',
      'All ground transportation',
      'Expert guides throughout',
      'All entrance fees and activities',
      'Train tickets to Machu Picchu'
    ],
    includesEs: [
      '29 noches de alojamiento (mezcla de lujo, boutique, eco-lodges)',
      'Desayuno diario, mayoría de almuerzos y cenas',
      'Todos los vuelos domésticos (5 vuelos incluidos)',
      'Todo el transporte terrestre',
      'Guías expertos durante todo el viaje',
      'Todas las entradas y actividades',
      'Boletos de tren a Machu Picchu'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Alcoholic beverages', 'Tips'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Bebidas alcohólicas', 'Propinas'],
    bestFor: ['Extended vacation families', 'Complete Peru experience seekers', 'Multi-generational travel'],
    bestForEs: ['Familias con vacaciones extendidas', 'Buscadores de experiencia completa', 'Viajes multigeneracionales'],
    minAge: 6,
    groupSize: '2-8',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      { day: 1, title: 'Welcome to Lima', titleEs: 'Bienvenidos a Lima', description: 'Arrive Lima, transfer to Miraflores hotel. Evening welcome dinner.', descriptionEs: 'Llegada a Lima, traslado al hotel en Miraflores. Cena de bienvenida.', locations: ['Lima'], activities: ['Arrival', 'Welcome dinner'], activitiesEs: ['Llegada', 'Cena de bienvenida'], meals: 'Dinner', accommodation: 'Miraflores hotel' },
      { day: 2, title: 'Lima Exploration', titleEs: 'Exploración de Lima', description: 'Historic center, Larco Museum, evening food tour.', descriptionEs: 'Centro histórico, Museo Larco, tour gastronómico nocturno.', locations: ['Lima'], activities: ['City tour', 'Museum', 'Food tour'], activitiesEs: ['Tour de ciudad', 'Museo', 'Tour gastronómico'], meals: 'Breakfast', accommodation: 'Miraflores hotel' },
      { day: 3, title: 'Lima to Paracas', titleEs: 'Lima a Paracas', description: 'Drive south, stop at Huacachina for sandboarding.', descriptionEs: 'Viaje al sur, parada en Huacachina para sandboard.', locations: ['Huacachina', 'Paracas'], activities: ['Scenic drive', 'Sandboarding', 'Dune buggy'], activitiesEs: ['Viaje panorámico', 'Sandboard', 'Buggy'], meals: 'Breakfast', accommodation: 'Paracas beach hotel' },
      { day: 4, title: 'Ballestas & Reserve', titleEs: 'Ballestas y Reserva', description: 'Ballestas Islands boat tour, Paracas National Reserve.', descriptionEs: 'Tour en bote a Islas Ballestas, Reserva Nacional de Paracas.', locations: ['Ballestas Islands', 'Paracas Reserve'], activities: ['Boat tour', 'Wildlife', 'Reserve exploration'], activitiesEs: ['Tour en bote', 'Vida silvestre', 'Exploración de reserva'], meals: 'Breakfast, Lunch', accommodation: 'Paracas beach hotel' },
      { day: 5, title: 'Nazca Lines', titleEs: 'Líneas de Nazca', description: 'Drive to Nazca, optional flight over the lines.', descriptionEs: 'Viaje a Nazca, vuelo opcional sobre las líneas.', locations: ['Nazca'], activities: ['Scenic drive', 'Optional overflight', 'Museum'], activitiesEs: ['Viaje panorámico', 'Sobrevuelo opcional', 'Museo'], meals: 'Breakfast', accommodation: 'Nazca hotel' },
      { day: 6, title: 'To Arequipa', titleEs: 'A Arequipa', description: 'Fly to Arequipa, the White City. Afternoon city tour.', descriptionEs: 'Vuelo a Arequipa, la Ciudad Blanca. Tour de ciudad por la tarde.', locations: ['Arequipa'], activities: ['Flight', 'City tour', 'Santa Catalina Monastery'], activitiesEs: ['Vuelo', 'Tour de ciudad', 'Monasterio de Santa Catalina'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      { day: 7, title: 'Arequipa Free Day', titleEs: 'Día Libre en Arequipa', description: 'Free day to explore markets, museums, or relax.', descriptionEs: 'Día libre para explorar mercados, museos o relajarse.', locations: ['Arequipa'], activities: ['Free exploration', 'Optional activities'], activitiesEs: ['Exploración libre', 'Actividades opcionales'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      { day: 8, title: 'To Colca Canyon', titleEs: 'Al Cañón del Colca', description: 'Scenic drive to Colca, vicuña sightings, hot springs.', descriptionEs: 'Viaje panorámico a Colca, avistamiento de vicuñas, aguas termales.', locations: ['Colca Valley'], activities: ['Scenic drive', 'Vicuñas', 'Hot springs'], activitiesEs: ['Viaje panorámico', 'Vicuñas', 'Aguas termales'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Colca lodge' },
      { day: 9, title: 'Colca Condors', titleEs: 'Cóndores del Colca', description: 'Early morning condor watching at Cruz del Condor.', descriptionEs: 'Observación de cóndores temprano en Cruz del Cóndor.', locations: ['Cruz del Condor', 'Colca Canyon'], activities: ['Condor watching', 'Canyon viewpoints', 'Village visits'], activitiesEs: ['Observación de cóndores', 'Miradores del cañón', 'Visitas a pueblos'], meals: 'Breakfast, Lunch', accommodation: 'Colca lodge' },
      { day: 10, title: 'Colca to Puno', titleEs: 'Colca a Puno', description: 'High altitude drive to Puno via altiplano landscapes.', descriptionEs: 'Viaje de altura a Puno por paisajes del altiplano.', locations: ['Altiplano', 'Puno'], activities: ['Scenic drive', 'Flamingos', 'High altitude landscapes'], activitiesEs: ['Viaje panorámico', 'Flamencos', 'Paisajes de altura'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 11, title: 'Uros & Taquile', titleEs: 'Uros y Taquile', description: 'Full day Lake Titicaca: Uros floating islands and Taquile.', descriptionEs: 'Día completo en Lago Titicaca: islas flotantes Uros y Taquile.', locations: ['Lake Titicaca', 'Uros', 'Taquile'], activities: ['Boat tour', 'Floating islands', 'Island hiking'], activitiesEs: ['Tour en bote', 'Islas flotantes', 'Caminata en isla'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 12, title: 'Puno to Cusco', titleEs: 'Puno a Cusco', description: 'Scenic tourist bus with stops at Raqchi, La Raya, Andahuaylillas.', descriptionEs: 'Bus turístico panorámico con paradas en Raqchi, La Raya, Andahuaylillas.', locations: ['Altiplano route', 'Cusco'], activities: ['Tourist bus', 'Archaeological sites', 'Church visit'], activitiesEs: ['Bus turístico', 'Sitios arqueológicos', 'Visita a iglesia'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 13, title: 'Cusco Acclimatization', titleEs: 'Aclimatación en Cusco', description: 'Gentle city walking tour, San Pedro Market, chocolate workshop.', descriptionEs: 'Tour suave a pie por la ciudad, Mercado San Pedro, taller de chocolate.', locations: ['Cusco'], activities: ['Walking tour', 'Market visit', 'Chocolate workshop'], activitiesEs: ['Tour a pie', 'Visita al mercado', 'Taller de chocolate'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      { day: 14, title: 'Cusco City Tour', titleEs: 'Tour de la Ciudad de Cusco', description: 'Sacsayhuaman, Qorikancha, Cathedral, artisan neighborhoods.', descriptionEs: 'Sacsayhuamán, Qorikancha, Catedral, barrios artesanales.', locations: ['Cusco'], activities: ['Archaeological sites', 'Temple', 'Cathedral'], activitiesEs: ['Sitios arqueológicos', 'Templo', 'Catedral'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      { day: 15, title: 'Sacred Valley Day 1', titleEs: 'Valle Sagrado Día 1', description: 'Pisac ruins and market, Urubamba valley, weaving community.', descriptionEs: 'Ruinas y mercado de Pisac, valle de Urubamba, comunidad de tejedores.', locations: ['Pisac', 'Sacred Valley'], activities: ['Ruins', 'Market', 'Weaving'], activitiesEs: ['Ruinas', 'Mercado', 'Tejido'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley hotel' },
      { day: 16, title: 'Sacred Valley Day 2', titleEs: 'Valle Sagrado Día 2', description: 'Moray terraces, Maras salt mines, Ollantaytambo fortress.', descriptionEs: 'Terrazas de Moray, salineras de Maras, fortaleza de Ollantaytambo.', locations: ['Moray', 'Maras', 'Ollantaytambo'], activities: ['Terraces', 'Salt mines', 'Fortress'], activitiesEs: ['Terrazas', 'Salineras', 'Fortaleza'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley hotel' },
      { day: 17, title: 'Machu Picchu Day 1', titleEs: 'Machu Picchu Día 1', description: 'Train to Aguas Calientes, afternoon Machu Picchu visit.', descriptionEs: 'Tren a Aguas Calientes, visita a Machu Picchu por la tarde.', locations: ['Machu Picchu', 'Aguas Calientes'], activities: ['Train journey', 'Citadel visit'], activitiesEs: ['Viaje en tren', 'Visita a la ciudadela'], meals: 'Breakfast, Lunch', accommodation: 'Aguas Calientes hotel' },
      { day: 18, title: 'Machu Picchu Day 2', titleEs: 'Machu Picchu Día 2', description: 'Sunrise at Machu Picchu, Huayna Picchu optional, return to Cusco.', descriptionEs: 'Amanecer en Machu Picchu, Huayna Picchu opcional, regreso a Cusco.', locations: ['Machu Picchu', 'Cusco'], activities: ['Sunrise visit', 'Optional hike', 'Train return'], activitiesEs: ['Visita al amanecer', 'Caminata opcional', 'Regreso en tren'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 19, title: 'Cusco Cooking Class', titleEs: 'Clase de Cocina en Cusco', description: 'Market visit and Peruvian cooking class, free afternoon.', descriptionEs: 'Visita al mercado y clase de cocina peruana, tarde libre.', locations: ['Cusco'], activities: ['Market tour', 'Cooking class', 'Free time'], activitiesEs: ['Tour del mercado', 'Clase de cocina', 'Tiempo libre'], meals: 'Breakfast, Lunch from class', accommodation: 'Cusco hotel' },
      { day: 20, title: 'Fly to Amazon', titleEs: 'Vuelo a la Amazonía', description: 'Fly to Puerto Maldonado, boat to jungle lodge, first excursion.', descriptionEs: 'Vuelo a Puerto Maldonado, bote al lodge, primera excursión.', locations: ['Puerto Maldonado', 'Tambopata'], activities: ['Flight', 'Boat journey', 'Jungle walk'], activitiesEs: ['Vuelo', 'Viaje en bote', 'Caminata en selva'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Jungle eco-lodge' },
      { day: 21, title: 'Amazon Day 1', titleEs: 'Amazonía Día 1', description: 'Dawn birdwatching, canopy walkway, night excursion.', descriptionEs: 'Observación de aves al amanecer, puente colgante, excursión nocturna.', locations: ['Tambopata Reserve'], activities: ['Birdwatching', 'Canopy walk', 'Night walk'], activitiesEs: ['Observación de aves', 'Caminata en canopy', 'Caminata nocturna'], meals: 'All meals', accommodation: 'Jungle eco-lodge' },
      { day: 22, title: 'Amazon Day 2', titleEs: 'Amazonía Día 2', description: 'Oxbow lake exploration, giant otters, piranha fishing.', descriptionEs: 'Exploración de lago, nutrias gigantes, pesca de pirañas.', locations: ['Sandoval Lake'], activities: ['Lake excursion', 'Wildlife', 'Fishing'], activitiesEs: ['Excursión al lago', 'Vida silvestre', 'Pesca'], meals: 'All meals', accommodation: 'Jungle eco-lodge' },
      { day: 23, title: 'Amazon Day 3', titleEs: 'Amazonía Día 3', description: 'Indigenous community visit, medicinal plants, cultural exchange.', descriptionEs: 'Visita a comunidad indígena, plantas medicinales, intercambio cultural.', locations: ['Native community'], activities: ['Community visit', 'Cultural exchange', 'Crafts'], activitiesEs: ['Visita a comunidad', 'Intercambio cultural', 'Artesanías'], meals: 'All meals', accommodation: 'Jungle eco-lodge' },
      { day: 24, title: 'Amazon to Lima', titleEs: 'Amazonía a Lima', description: 'Morning jungle activity, return boat, fly to Lima.', descriptionEs: 'Actividad matutina en la selva, regreso en bote, vuelo a Lima.', locations: ['Tambopata', 'Lima'], activities: ['Morning walk', 'Flight'], activitiesEs: ['Caminata matutina', 'Vuelo'], meals: 'Breakfast, Lunch', accommodation: 'Lima hotel' },
      { day: 25, title: 'Fly to Trujillo', titleEs: 'Vuelo a Trujillo', description: 'Fly to northern Peru, Chan Chan adobe city tour.', descriptionEs: 'Vuelo al norte de Perú, tour a la ciudad de adobe de Chan Chan.', locations: ['Trujillo', 'Chan Chan'], activities: ['Flight', 'Chan Chan tour'], activitiesEs: ['Vuelo', 'Tour de Chan Chan'], meals: 'Breakfast', accommodation: 'Trujillo hotel' },
      { day: 26, title: 'Huacas del Sol y Luna', titleEs: 'Huacas del Sol y Luna', description: 'Visit Moche temples, Huanchaco beach town.', descriptionEs: 'Visita a templos Moche, pueblo playero de Huanchaco.', locations: ['Huaca del Sol', 'Huanchaco'], activities: ['Temple tour', 'Beach', 'Seafood lunch'], activitiesEs: ['Tour del templo', 'Playa', 'Almuerzo de mariscos'], meals: 'Breakfast, Lunch', accommodation: 'Trujillo hotel' },
      { day: 27, title: 'To Chiclayo', titleEs: 'A Chiclayo', description: 'Drive to Chiclayo, Royal Tombs of Sipán Museum.', descriptionEs: 'Viaje a Chiclayo, Museo Tumbas Reales de Sipán.', locations: ['Chiclayo', 'Sipán'], activities: ['Scenic drive', 'Museum'], activitiesEs: ['Viaje panorámico', 'Museo'], meals: 'Breakfast', accommodation: 'Chiclayo hotel' },
      { day: 28, title: 'Tucume Pyramids', titleEs: 'Pirámides de Túcume', description: 'Visit Túcume pyramids, Bruning Museum, fly to Lima.', descriptionEs: 'Visita a pirámides de Túcume, Museo Brüning, vuelo a Lima.', locations: ['Tucume', 'Lima'], activities: ['Pyramids', 'Museum', 'Flight'], activitiesEs: ['Pirámides', 'Museo', 'Vuelo'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 29, title: 'Lima Final Day', titleEs: 'Último Día en Lima', description: 'Free morning, farewell lunch, last-minute shopping.', descriptionEs: 'Mañana libre, almuerzo de despedida, compras de último momento.', locations: ['Lima'], activities: ['Free time', 'Farewell lunch', 'Shopping'], activitiesEs: ['Tiempo libre', 'Almuerzo de despedida', 'Compras'], meals: 'Breakfast, Farewell lunch', accommodation: 'Lima hotel' },
      { day: 30, title: 'Departure', titleEs: 'Partida', description: 'Transfer to Lima airport for your international departure.', descriptionEs: 'Traslado al aeropuerto de Lima para su vuelo internacional.', locations: ['Lima Airport'], activities: ['Airport transfer'], activitiesEs: ['Traslado al aeropuerto'], meals: 'Breakfast' }
    ]
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
  },

  // 60-DAY COMPREHENSIVE SUMMER ODYSSEY
  {
    id: '60-day-summer-odyssey',
    slug: '60-day-comprehensive-summer-odyssey',
    duration: 60,
    title: 'Comprehensive Summer Odyssey',
    titleEs: 'Odisea de Verano Completa',
    subtitle: 'The ultimate two-month Peru family adventure',
    subtitleEs: 'La aventura familiar definitiva de dos meses en Perú',
    description: 'The most comprehensive Peru experience possible. Spend two incredible months exploring every corner of Peru at a relaxed, family-friendly pace. This once-in-a-lifetime journey covers the entire coast, all highland regions, multiple Amazon experiences, northern archaeological wonders, and includes rest days for genuine immersion.',
    descriptionEs: 'La experiencia más completa de Perú posible. Pasa dos meses increíbles explorando cada rincón del Perú a un ritmo relajado y familiar. Este viaje único en la vida cubre toda la costa, todas las regiones de sierra, múltiples experiencias amazónicas, maravillas arqueológicas del norte, e incluye días de descanso para una inmersión genuina.',
    theme: 'adventure',
    difficulty: 'moderate',
    price: 15999,
    image: '/images/itineraries/summer-odyssey.jpg',
    highlights: [
      'Complete coastal exploration: Lima to Máncora beaches',
      'Extended Amazon: Tambopata AND Iquitos experiences',
      'Full Andean circuit: Cusco, Puno, Arequipa, Huaraz',
      'Northern treasures: Chan Chan, Sipán, Kuélap',
      'Multiple Machu Picchu visits including sunrise',
      'Community homestays and cultural immersion',
      'Cooking classes in every region',
      'Adventure activities: sandboarding, zip-lining, rafting',
      'Wildlife watching: condors, dolphins, jaguars, penguins',
      'Rest days built in for family recovery'
    ],
    highlightsEs: [
      'Exploración costera completa: Lima a playas de Máncora',
      'Amazonía extendida: experiencias en Tambopata E Iquitos',
      'Circuito andino completo: Cusco, Puno, Arequipa, Huaraz',
      'Tesoros del norte: Chan Chan, Sipán, Kuélap',
      'Múltiples visitas a Machu Picchu incluyendo amanecer',
      'Estadías con familias locales e inmersión cultural',
      'Clases de cocina en cada región',
      'Actividades de aventura: sandboard, tirolesa, rafting',
      'Observación de fauna: cóndores, delfines, jaguares, pingüinos',
      'Días de descanso integrados para recuperación familiar'
    ],
    includes: [
      '59 nights accommodation (luxury, boutique, eco-lodges, homestays)',
      'All meals throughout the journey',
      'All domestic flights (8 flights)',
      'All ground transportation',
      'Expert guides in every region',
      'All entrance fees and activities',
      'Multiple train journeys',
      '24/7 support throughout'
    ],
    includesEs: [
      '59 noches de alojamiento (lujo, boutique, eco-lodges, estadías familiares)',
      'Todas las comidas durante el viaje',
      'Todos los vuelos domésticos (8 vuelos)',
      'Todo el transporte terrestre',
      'Guías expertos en cada región',
      'Todas las entradas y actividades',
      'Múltiples viajes en tren',
      'Soporte 24/7 durante todo el viaje'
    ],
    notIncludes: ['International flights', 'Travel insurance', 'Alcoholic beverages', 'Personal expenses'],
    notIncludesEs: ['Vuelos internacionales', 'Seguro de viaje', 'Bebidas alcohólicas', 'Gastos personales'],
    bestFor: ['Sabbatical families', 'Extended summer vacation', 'Gap year travel', 'Multi-generational adventures'],
    bestForEs: ['Familias en año sabático', 'Vacaciones de verano extendidas', 'Viaje de año sabático', 'Aventuras multigeneracionales'],
    minAge: 5,
    groupSize: '2-6',
    startLocation: 'Lima',
    endLocation: 'Lima',
    featured: true,
    dayByDay: [
      // Week 1-2: Lima & Southern Coast
      { day: 1, title: 'Welcome to Peru', titleEs: 'Bienvenidos a Perú', description: 'Arrive Lima, settle into Miraflores apartment.', descriptionEs: 'Llegada a Lima, acomodo en apartamento de Miraflores.', locations: ['Lima'], activities: ['Arrival', 'Rest'], activitiesEs: ['Llegada', 'Descanso'], meals: 'Welcome dinner', accommodation: 'Lima apartment' },
      { day: 2, title: 'Lima Discovery', titleEs: 'Descubrimiento de Lima', description: 'Historic center, catacombs, Plaza Mayor.', descriptionEs: 'Centro histórico, catacumbas, Plaza Mayor.', locations: ['Lima Historic Center'], activities: ['Walking tour'], activitiesEs: ['Tour a pie'], meals: 'Breakfast', accommodation: 'Lima apartment' },
      { day: 3, title: 'Lima Museums', titleEs: 'Museos de Lima', description: 'Larco Museum, MALI, evening food tour.', descriptionEs: 'Museo Larco, MALI, tour gastronómico nocturno.', locations: ['Miraflores', 'Barranco'], activities: ['Museums', 'Food tour'], activitiesEs: ['Museos', 'Tour gastronómico'], meals: 'Breakfast', accommodation: 'Lima apartment' },
      { day: 4, title: 'Lima Cooking', titleEs: 'Cocina Limeña', description: 'Market visit and cooking class, beach time.', descriptionEs: 'Visita al mercado y clase de cocina, tiempo en la playa.', locations: ['Lima'], activities: ['Cooking class', 'Beach'], activitiesEs: ['Clase de cocina', 'Playa'], meals: 'Breakfast, Lunch', accommodation: 'Lima apartment' },
      { day: 5, title: 'To Paracas', titleEs: 'A Paracas', description: 'Drive south, Huacachina sandboarding.', descriptionEs: 'Viaje al sur, sandboard en Huacachina.', locations: ['Huacachina', 'Paracas'], activities: ['Sandboarding', 'Dune buggy'], activitiesEs: ['Sandboard', 'Buggy'], meals: 'Breakfast', accommodation: 'Paracas resort' },
      { day: 6, title: 'Ballestas Islands', titleEs: 'Islas Ballestas', description: 'Wildlife boat tour, penguins, sea lions.', descriptionEs: 'Tour de vida silvestre, pingüinos, lobos marinos.', locations: ['Ballestas'], activities: ['Boat tour', 'Wildlife'], activitiesEs: ['Tour en bote', 'Vida silvestre'], meals: 'Breakfast, Lunch', accommodation: 'Paracas resort' },
      { day: 7, title: 'Paracas Reserve', titleEs: 'Reserva de Paracas', description: 'National Reserve exploration, beach day.', descriptionEs: 'Exploración de la Reserva Nacional, día de playa.', locations: ['Paracas Reserve'], activities: ['Reserve tour', 'Beach'], activitiesEs: ['Tour de reserva', 'Playa'], meals: 'Breakfast', accommodation: 'Paracas resort' },
      { day: 8, title: 'Nazca Lines', titleEs: 'Líneas de Nazca', description: 'Drive to Nazca, optional overflight.', descriptionEs: 'Viaje a Nazca, sobrevuelo opcional.', locations: ['Nazca'], activities: ['Travel', 'Overflight optional'], activitiesEs: ['Viaje', 'Sobrevuelo opcional'], meals: 'Breakfast', accommodation: 'Nazca hotel' },
      { day: 9, title: 'Nazca Exploration', titleEs: 'Exploración de Nazca', description: 'Chauchilla cemetery, aqueducts, museum.', descriptionEs: 'Cementerio de Chauchilla, acueductos, museo.', locations: ['Nazca'], activities: ['Archaeological sites'], activitiesEs: ['Sitios arqueológicos'], meals: 'Breakfast', accommodation: 'Nazca hotel' },
      { day: 10, title: 'To Arequipa', titleEs: 'A Arequipa', description: 'Fly to Arequipa, settle in White City.', descriptionEs: 'Vuelo a Arequipa, acomodo en la Ciudad Blanca.', locations: ['Arequipa'], activities: ['Flight', 'Rest'], activitiesEs: ['Vuelo', 'Descanso'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      // Week 3: Arequipa & Colca
      { day: 11, title: 'Arequipa Discovery', titleEs: 'Descubrimiento de Arequipa', description: 'City tour, Santa Catalina Monastery.', descriptionEs: 'Tour de ciudad, Monasterio de Santa Catalina.', locations: ['Arequipa'], activities: ['City tour', 'Monastery'], activitiesEs: ['Tour de ciudad', 'Monasterio'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      { day: 12, title: 'Arequipa Free Day', titleEs: 'Día Libre en Arequipa', description: 'Markets, museums, or relax at your pace.', descriptionEs: 'Mercados, museos, o relajarse a su ritmo.', locations: ['Arequipa'], activities: ['Free exploration'], activitiesEs: ['Exploración libre'], meals: 'Breakfast', accommodation: 'Arequipa hotel' },
      { day: 13, title: 'To Colca Canyon', titleEs: 'Al Cañón del Colca', description: 'Scenic drive, vicuñas, hot springs.', descriptionEs: 'Viaje panorámico, vicuñas, aguas termales.', locations: ['Colca Valley'], activities: ['Scenic drive', 'Hot springs'], activitiesEs: ['Viaje panorámico', 'Aguas termales'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Colca lodge' },
      { day: 14, title: 'Colca Condors', titleEs: 'Cóndores del Colca', description: 'Cruz del Condor, canyon viewpoints.', descriptionEs: 'Cruz del Cóndor, miradores del cañón.', locations: ['Cruz del Condor'], activities: ['Condor watching', 'Hiking'], activitiesEs: ['Observación de cóndores', 'Caminata'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Colca lodge' },
      // Week 4: Lake Titicaca
      { day: 15, title: 'Colca to Puno', titleEs: 'Colca a Puno', description: 'High altitude drive, flamingos, altiplano.', descriptionEs: 'Viaje de altura, flamencos, altiplano.', locations: ['Puno'], activities: ['Scenic drive'], activitiesEs: ['Viaje panorámico'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 16, title: 'Uros Islands', titleEs: 'Islas Uros', description: 'Floating islands of the Uros people.', descriptionEs: 'Islas flotantes del pueblo Uros.', locations: ['Lake Titicaca'], activities: ['Boat tour', 'Cultural visit'], activitiesEs: ['Tour en bote', 'Visita cultural'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 17, title: 'Taquile Island', titleEs: 'Isla Taquile', description: 'Full day on Taquile, traditional textiles.', descriptionEs: 'Día completo en Taquile, textiles tradicionales.', locations: ['Taquile'], activities: ['Island visit', 'Hiking'], activitiesEs: ['Visita a isla', 'Caminata'], meals: 'Breakfast, Lunch', accommodation: 'Puno hotel' },
      { day: 18, title: 'Amantani Homestay', titleEs: 'Estadía en Amantaní', description: 'Overnight with local family on Amantani.', descriptionEs: 'Noche con familia local en Amantaní.', locations: ['Amantani Island'], activities: ['Homestay', 'Cultural exchange'], activitiesEs: ['Estadía familiar', 'Intercambio cultural'], meals: 'All meals', accommodation: 'Amantani homestay' },
      { day: 19, title: 'Return to Puno', titleEs: 'Regreso a Puno', description: 'Morning on Amantani, return to Puno.', descriptionEs: 'Mañana en Amantaní, regreso a Puno.', locations: ['Puno'], activities: ['Sunrise', 'Boat return'], activitiesEs: ['Amanecer', 'Regreso en bote'], meals: 'Breakfast', accommodation: 'Puno hotel' },
      { day: 20, title: 'Puno to Cusco', titleEs: 'Puno a Cusco', description: 'Tourist bus with archaeological stops.', descriptionEs: 'Bus turístico con paradas arqueológicas.', locations: ['Cusco'], activities: ['Tourist bus', 'Site visits'], activitiesEs: ['Bus turístico', 'Visitas a sitios'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 21, title: 'Cusco Rest Day', titleEs: 'Día de Descanso en Cusco', description: 'Acclimatize, gentle exploration.', descriptionEs: 'Aclimatación, exploración suave.', locations: ['Cusco'], activities: ['Rest', 'Light walking'], activitiesEs: ['Descanso', 'Caminata ligera'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      // Week 5-6: Cusco & Sacred Valley
      { day: 22, title: 'Cusco City Tour', titleEs: 'Tour de Cusco', description: 'Sacsayhuaman, Qorikancha, Cathedral.', descriptionEs: 'Sacsayhuamán, Qorikancha, Catedral.', locations: ['Cusco'], activities: ['City tour'], activitiesEs: ['Tour de ciudad'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      { day: 23, title: 'Cusco Markets', titleEs: 'Mercados de Cusco', description: 'San Pedro Market, cooking class.', descriptionEs: 'Mercado San Pedro, clase de cocina.', locations: ['Cusco'], activities: ['Market', 'Cooking'], activitiesEs: ['Mercado', 'Cocina'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      { day: 24, title: 'Chinchero & Moray', titleEs: 'Chinchero y Moray', description: 'Weaving community, circular terraces.', descriptionEs: 'Comunidad de tejedores, terrazas circulares.', locations: ['Chinchero', 'Moray'], activities: ['Weaving', 'Archaeological site'], activitiesEs: ['Tejido', 'Sitio arqueológico'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley hotel' },
      { day: 25, title: 'Maras & Pisac', titleEs: 'Maras y Pisac', description: 'Salt mines, Pisac ruins and market.', descriptionEs: 'Salineras, ruinas y mercado de Pisac.', locations: ['Maras', 'Pisac'], activities: ['Salt mines', 'Ruins', 'Market'], activitiesEs: ['Salineras', 'Ruinas', 'Mercado'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley hotel' },
      { day: 26, title: 'Ollantaytambo', titleEs: 'Ollantaytambo', description: 'Fortress exploration, living Inca town.', descriptionEs: 'Exploración de fortaleza, pueblo inca vivo.', locations: ['Ollantaytambo'], activities: ['Ruins', 'Town walk'], activitiesEs: ['Ruinas', 'Caminata por el pueblo'], meals: 'Breakfast, Lunch', accommodation: 'Sacred Valley hotel' },
      { day: 27, title: 'Machu Picchu Day 1', titleEs: 'Machu Picchu Día 1', description: 'Train to Aguas Calientes, afternoon citadel.', descriptionEs: 'Tren a Aguas Calientes, ciudadela por la tarde.', locations: ['Machu Picchu'], activities: ['Train', 'Citadel visit'], activitiesEs: ['Tren', 'Visita a ciudadela'], meals: 'Breakfast, Lunch', accommodation: 'Aguas Calientes hotel' },
      { day: 28, title: 'Machu Picchu Day 2', titleEs: 'Machu Picchu Día 2', description: 'Sunrise visit, Huayna Picchu optional.', descriptionEs: 'Visita al amanecer, Huayna Picchu opcional.', locations: ['Machu Picchu'], activities: ['Sunrise', 'Optional hike'], activitiesEs: ['Amanecer', 'Caminata opcional'], meals: 'Breakfast, Lunch', accommodation: 'Cusco hotel' },
      // Week 7: Amazon Tambopata
      { day: 29, title: 'Cusco Free Day', titleEs: 'Día Libre en Cusco', description: 'Rest, explore, shop at your pace.', descriptionEs: 'Descanso, exploración, compras a su ritmo.', locations: ['Cusco'], activities: ['Free day'], activitiesEs: ['Día libre'], meals: 'Breakfast', accommodation: 'Cusco hotel' },
      { day: 30, title: 'Fly to Tambopata', titleEs: 'Vuelo a Tambopata', description: 'Flight to Puerto Maldonado, boat to lodge.', descriptionEs: 'Vuelo a Puerto Maldonado, bote al lodge.', locations: ['Tambopata'], activities: ['Flight', 'Boat', 'Jungle walk'], activitiesEs: ['Vuelo', 'Bote', 'Caminata en selva'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Tambopata lodge' },
      { day: 31, title: 'Amazon Day 1', titleEs: 'Amazonía Día 1', description: 'Canopy walkway, birdwatching, night walk.', descriptionEs: 'Puente colgante, observación de aves, caminata nocturna.', locations: ['Tambopata Reserve'], activities: ['Canopy', 'Birding', 'Night walk'], activitiesEs: ['Canopy', 'Avistamiento', 'Caminata nocturna'], meals: 'All meals', accommodation: 'Tambopata lodge' },
      { day: 32, title: 'Amazon Day 2', titleEs: 'Amazonía Día 2', description: 'Oxbow lake, giant otters, caiman spotting.', descriptionEs: 'Lago, nutrias gigantes, avistamiento de caimanes.', locations: ['Sandoval Lake'], activities: ['Lake excursion', 'Wildlife'], activitiesEs: ['Excursión al lago', 'Vida silvestre'], meals: 'All meals', accommodation: 'Tambopata lodge' },
      { day: 33, title: 'Amazon Day 3', titleEs: 'Amazonía Día 3', description: 'Clay lick, macaws, medicinal plants.', descriptionEs: 'Collpa, guacamayos, plantas medicinales.', locations: ['Tambopata'], activities: ['Macaw clay lick', 'Botanical walk'], activitiesEs: ['Collpa de guacamayos', 'Caminata botánica'], meals: 'All meals', accommodation: 'Tambopata lodge' },
      { day: 34, title: 'Amazon Day 4', titleEs: 'Amazonía Día 4', description: 'Indigenous community, piranha fishing.', descriptionEs: 'Comunidad indígena, pesca de pirañas.', locations: ['Native community'], activities: ['Community visit', 'Fishing'], activitiesEs: ['Visita a comunidad', 'Pesca'], meals: 'All meals', accommodation: 'Tambopata lodge' },
      { day: 35, title: 'Return to Lima', titleEs: 'Regreso a Lima', description: 'Morning activity, fly to Lima.', descriptionEs: 'Actividad matutina, vuelo a Lima.', locations: ['Lima'], activities: ['Morning walk', 'Flight'], activitiesEs: ['Caminata matutina', 'Vuelo'], meals: 'Breakfast, Lunch', accommodation: 'Lima hotel' },
      // Week 8: Northern Coast
      { day: 36, title: 'Lima Rest', titleEs: 'Descanso en Lima', description: 'Free day to rest and recharge.', descriptionEs: 'Día libre para descansar y recargar.', locations: ['Lima'], activities: ['Rest'], activitiesEs: ['Descanso'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 37, title: 'Fly to Trujillo', titleEs: 'Vuelo a Trujillo', description: 'Flight north, afternoon city tour.', descriptionEs: 'Vuelo al norte, tour de ciudad por la tarde.', locations: ['Trujillo'], activities: ['Flight', 'City tour'], activitiesEs: ['Vuelo', 'Tour de ciudad'], meals: 'Breakfast', accommodation: 'Trujillo hotel' },
      { day: 38, title: 'Chan Chan', titleEs: 'Chan Chan', description: 'Largest adobe city in the Americas.', descriptionEs: 'La ciudad de adobe más grande de las Américas.', locations: ['Chan Chan'], activities: ['Archaeological tour'], activitiesEs: ['Tour arqueológico'], meals: 'Breakfast', accommodation: 'Trujillo hotel' },
      { day: 39, title: 'Huacas & Beach', titleEs: 'Huacas y Playa', description: 'Huaca del Sol y Luna, Huanchaco beach.', descriptionEs: 'Huaca del Sol y Luna, playa Huanchaco.', locations: ['Huaca del Sol', 'Huanchaco'], activities: ['Temples', 'Beach'], activitiesEs: ['Templos', 'Playa'], meals: 'Breakfast, Lunch', accommodation: 'Trujillo hotel' },
      { day: 40, title: 'To Chiclayo', titleEs: 'A Chiclayo', description: 'Drive to Chiclayo, Royal Tombs Museum.', descriptionEs: 'Viaje a Chiclayo, Museo Tumbas Reales.', locations: ['Chiclayo'], activities: ['Travel', 'Museum'], activitiesEs: ['Viaje', 'Museo'], meals: 'Breakfast', accommodation: 'Chiclayo hotel' },
      { day: 41, title: 'Sipán & Túcume', titleEs: 'Sipán y Túcume', description: 'Lord of Sipán site, Túcume pyramids.', descriptionEs: 'Sitio del Señor de Sipán, pirámides de Túcume.', locations: ['Sipán', 'Túcume'], activities: ['Archaeological sites'], activitiesEs: ['Sitios arqueológicos'], meals: 'Breakfast', accommodation: 'Chiclayo hotel' },
      { day: 42, title: 'To Chachapoyas', titleEs: 'A Chachapoyas', description: 'Scenic drive into cloud forest region.', descriptionEs: 'Viaje panorámico a la región del bosque nublado.', locations: ['Chachapoyas'], activities: ['Scenic drive'], activitiesEs: ['Viaje panorámico'], meals: 'Breakfast', accommodation: 'Chachapoyas hotel' },
      // Week 9: Northern Highlands & Iquitos
      { day: 43, title: 'Kuélap Fortress', titleEs: 'Fortaleza de Kuélap', description: 'Cable car to the cloud city fortress.', descriptionEs: 'Teleférico a la fortaleza en las nubes.', locations: ['Kuélap'], activities: ['Cable car', 'Fortress tour'], activitiesEs: ['Teleférico', 'Tour de fortaleza'], meals: 'Breakfast, Lunch', accommodation: 'Chachapoyas hotel' },
      { day: 44, title: 'Gocta Waterfall', titleEs: 'Catarata Gocta', description: 'Hike to one of the world\'s tallest waterfalls.', descriptionEs: 'Caminata a una de las cataratas más altas del mundo.', locations: ['Gocta'], activities: ['Hiking', 'Waterfall'], activitiesEs: ['Caminata', 'Catarata'], meals: 'Breakfast, Lunch', accommodation: 'Chachapoyas hotel' },
      { day: 45, title: 'Sarcophagi of Karajía', titleEs: 'Sarcófagos de Karajía', description: 'Ancient cliff-side burial sites.', descriptionEs: 'Sitios de entierro antiguos en acantilados.', locations: ['Karajía'], activities: ['Archaeological site', 'Hiking'], activitiesEs: ['Sitio arqueológico', 'Caminata'], meals: 'Breakfast', accommodation: 'Chachapoyas hotel' },
      { day: 46, title: 'Fly to Iquitos', titleEs: 'Vuelo a Iquitos', description: 'Fly via Lima to Amazon\'s largest city.', descriptionEs: 'Vuelo vía Lima a la ciudad más grande de la Amazonía.', locations: ['Iquitos'], activities: ['Flights', 'City exploration'], activitiesEs: ['Vuelos', 'Exploración de ciudad'], meals: 'Breakfast', accommodation: 'Iquitos hotel' },
      { day: 47, title: 'Amazon Iquitos Day 1', titleEs: 'Amazonía Iquitos Día 1', description: 'Boat to lodge on Amazon tributaries.', descriptionEs: 'Bote al lodge en afluentes del Amazonas.', locations: ['Iquitos jungle'], activities: ['Boat journey', 'Lodge arrival'], activitiesEs: ['Viaje en bote', 'Llegada al lodge'], meals: 'Breakfast, Lunch, Dinner', accommodation: 'Iquitos jungle lodge' },
      { day: 48, title: 'Amazon Iquitos Day 2', titleEs: 'Amazonía Iquitos Día 2', description: 'Pink dolphin watching, village visit.', descriptionEs: 'Avistamiento de delfines rosados, visita a pueblo.', locations: ['Amazon River'], activities: ['Dolphins', 'Village'], activitiesEs: ['Delfines', 'Pueblo'], meals: 'All meals', accommodation: 'Iquitos jungle lodge' },
      { day: 49, title: 'Amazon Iquitos Day 3', titleEs: 'Amazonía Iquitos Día 3', description: 'Jaguar search, night caiman spotting.', descriptionEs: 'Búsqueda de jaguares, avistamiento nocturno de caimanes.', locations: ['Pacaya-Samiria'], activities: ['Wildlife tracking', 'Night excursion'], activitiesEs: ['Rastreo de fauna', 'Excursión nocturna'], meals: 'All meals', accommodation: 'Iquitos jungle lodge' },
      // Week 10: Huaraz & Cordillera Blanca
      { day: 50, title: 'Return to Lima', titleEs: 'Regreso a Lima', description: 'Fly back to Lima, rest day.', descriptionEs: 'Vuelo de regreso a Lima, día de descanso.', locations: ['Lima'], activities: ['Flight', 'Rest'], activitiesEs: ['Vuelo', 'Descanso'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 51, title: 'To Huaraz', titleEs: 'A Huaraz', description: 'Drive to Cordillera Blanca, acclimatize.', descriptionEs: 'Viaje a la Cordillera Blanca, aclimatación.', locations: ['Huaraz'], activities: ['Scenic drive'], activitiesEs: ['Viaje panorámico'], meals: 'Breakfast', accommodation: 'Huaraz hotel' },
      { day: 52, title: 'Huaraz Acclimatization', titleEs: 'Aclimatación en Huaraz', description: 'Gentle walks, market visit, rest.', descriptionEs: 'Caminatas suaves, visita al mercado, descanso.', locations: ['Huaraz'], activities: ['Light activity'], activitiesEs: ['Actividad ligera'], meals: 'Breakfast', accommodation: 'Huaraz hotel' },
      { day: 53, title: 'Laguna 69', titleEs: 'Laguna 69', description: 'Trek to stunning turquoise glacial lake.', descriptionEs: 'Caminata a impresionante laguna glacial turquesa.', locations: ['Huascarán National Park'], activities: ['Hiking', 'Lake visit'], activitiesEs: ['Caminata', 'Visita a laguna'], meals: 'Breakfast, Lunch', accommodation: 'Huaraz hotel' },
      { day: 54, title: 'Chavín de Huántar', titleEs: 'Chavín de Huántar', description: 'Ancient temple, UNESCO World Heritage.', descriptionEs: 'Templo antiguo, Patrimonio de la Humanidad.', locations: ['Chavín'], activities: ['Archaeological site'], activitiesEs: ['Sitio arqueológico'], meals: 'Breakfast, Lunch', accommodation: 'Huaraz hotel' },
      { day: 55, title: 'Llanganuco Lakes', titleEs: 'Lagunas de Llanganuco', description: 'Beautiful mountain lakes, easy walks.', descriptionEs: 'Hermosas lagunas de montaña, caminatas fáciles.', locations: ['Llanganuco'], activities: ['Lake visit', 'Nature walks'], activitiesEs: ['Visita a lagunas', 'Caminatas'], meals: 'Breakfast, Lunch', accommodation: 'Huaraz hotel' },
      { day: 56, title: 'Return to Lima', titleEs: 'Regreso a Lima', description: 'Drive back to Lima.', descriptionEs: 'Viaje de regreso a Lima.', locations: ['Lima'], activities: ['Travel'], activitiesEs: ['Viaje'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      // Final Days
      { day: 57, title: 'Lima Beach Day', titleEs: 'Día de Playa en Lima', description: 'Relax at the coast, final shopping.', descriptionEs: 'Relajación en la costa, compras finales.', locations: ['Lima'], activities: ['Beach', 'Shopping'], activitiesEs: ['Playa', 'Compras'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 58, title: 'Lima Exploration', titleEs: 'Exploración de Lima', description: 'Revisit favorites, Barranco art walk.', descriptionEs: 'Revisitar favoritos, caminata de arte en Barranco.', locations: ['Lima', 'Barranco'], activities: ['Free exploration', 'Art walk'], activitiesEs: ['Exploración libre', 'Caminata de arte'], meals: 'Breakfast', accommodation: 'Lima hotel' },
      { day: 59, title: 'Farewell Day', titleEs: 'Día de Despedida', description: 'Final memories, farewell dinner.', descriptionEs: 'Últimos recuerdos, cena de despedida.', locations: ['Lima'], activities: ['Free time', 'Farewell dinner'], activitiesEs: ['Tiempo libre', 'Cena de despedida'], meals: 'Breakfast, Farewell dinner', accommodation: 'Lima hotel' },
      { day: 60, title: 'Departure', titleEs: 'Partida', description: 'Transfer to airport, farewell Peru!', descriptionEs: 'Traslado al aeropuerto, adiós Perú!', locations: ['Lima Airport'], activities: ['Airport transfer'], activitiesEs: ['Traslado al aeropuerto'], meals: 'Breakfast' }
    ]
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
  return Array.from(new Set(itineraries.map(i => i.duration))).sort((a, b) => a - b);
}
