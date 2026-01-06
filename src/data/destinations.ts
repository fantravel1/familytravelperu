export interface Destination {
  id: string;
  slug: string;
  name: string;
  nameEs: string;
  region: 'coast' | 'highlands' | 'amazon' | 'north';
  tagline: string;
  taglineEs: string;
  description: string;
  descriptionEs: string;
  elevation?: string;
  bestTime: string;
  bestTimeEs: string;
  highlights: string[];
  highlightsEs: string[];
  activities: string[];
  activitiesEs: string[];
  familyTips: string[];
  familyTipsEs: string[];
  climate: string;
  climateEs: string;
  image: string;
  featured: boolean;
}

export const destinations: Destination[] = [
  // HIGHLANDS
  {
    id: 'machu-picchu',
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    nameEs: 'Machu Picchu',
    region: 'highlands',
    tagline: 'The 15th-century Inca citadel and one of the New Seven Wonders',
    taglineEs: 'La ciudadela Inca del siglo XV y una de las Nuevas Siete Maravillas',
    description: 'Machu Picchu sits 2,430m above sea level and features about 200 structures for religious, astronomical and agricultural use. Its terraces and temples blend harmoniously with the Andean landscape, making it one of the New Seven Wonders of the World. The citadel was built in the 15th century during the height of the Inca Empire and abandoned during the Spanish conquest.',
    descriptionEs: 'Machu Picchu está a 2.430m sobre el nivel del mar y cuenta con unas 200 estructuras para uso religioso, astronómico y agrícola. Sus terrazas y templos se mezclan armoniosamente con el paisaje andino, haciéndola una de las Nuevas Siete Maravillas del Mundo.',
    elevation: '2,430m (7,972 ft)',
    bestTime: 'May to September (dry season)',
    bestTimeEs: 'Mayo a Septiembre (temporada seca)',
    highlights: [
      'Temple of the Sun and Intihuatana stone',
      'Terraces with panoramic mountain views',
      'Huayna Picchu hike for adventurous families',
      'Sun Gate (Intipunku) sunrise',
      'Agricultural sector demonstrations'
    ],
    highlightsEs: [
      'Templo del Sol y piedra Intihuatana',
      'Terrazas con vistas panorámicas',
      'Caminata a Huayna Picchu para familias aventureras',
      'Amanecer desde la Puerta del Sol',
      'Demostraciones del sector agrícola'
    ],
    activities: [
      'Guided citadel tours',
      'Huayna Picchu climb',
      'Montana Machu Picchu hike',
      'Sun Gate trek',
      'Photography tours'
    ],
    activitiesEs: [
      'Tours guiados de la ciudadela',
      'Subida a Huayna Picchu',
      'Caminata a Montaña Machu Picchu',
      'Trek a la Puerta del Sol',
      'Tours fotográficos'
    ],
    familyTips: [
      'Book tickets at least 2-3 months in advance',
      'Consider staying overnight in Aguas Calientes',
      'Arrive early to avoid crowds',
      'Lower altitude than Cusco - easier for acclimatization',
      'Bring snacks and water - none sold inside'
    ],
    familyTipsEs: [
      'Reserva boletos con 2-3 meses de anticipación',
      'Considera quedarte en Aguas Calientes',
      'Llega temprano para evitar multitudes',
      'Menor altitud que Cusco - más fácil para aclimatación',
      'Lleva snacks y agua - no se venden adentro'
    ],
    climate: 'Subtropical highland climate. Temperatures range from 12°C to 24°C year-round.',
    climateEs: 'Clima subtropical de montaña. Temperaturas entre 12°C y 24°C todo el año.',
    image: '/images/destinations/machu-picchu.jpg',
    featured: true
  },
  {
    id: 'cusco',
    slug: 'cusco',
    name: 'Cusco',
    nameEs: 'Cusco',
    region: 'highlands',
    tagline: 'The ancient Inca capital and gateway to Machu Picchu',
    taglineEs: 'La antigua capital Inca y puerta de entrada a Machu Picchu',
    description: 'Cusco sits at 11,152 ft (3,399 m) above sea level and was the historic capital of the Inca Empire. Today it blends Inca foundations with colonial Spanish architecture. The Plaza de Armas is surrounded by churches and restaurants, while the surrounding hills hold archaeological treasures like Sacsayhuamán.',
    descriptionEs: 'Cusco está a 3.399m sobre el nivel del mar y fue la capital histórica del Imperio Inca. Hoy combina cimientos Incas con arquitectura colonial española. La Plaza de Armas está rodeada de iglesias y restaurantes.',
    elevation: '3,399m (11,152 ft)',
    bestTime: 'May to September (dry season)',
    bestTimeEs: 'Mayo a Septiembre (temporada seca)',
    highlights: [
      'Plaza de Armas and Cathedral',
      'Qorikancha (Temple of the Sun)',
      'San Pedro Market',
      'Sacsayhuamán fortress',
      'San Blas artisan neighborhood'
    ],
    highlightsEs: [
      'Plaza de Armas y Catedral',
      'Qorikancha (Templo del Sol)',
      'Mercado de San Pedro',
      'Fortaleza de Sacsayhuamán',
      'Barrio artesanal de San Blas'
    ],
    activities: [
      'Walking city tours',
      'Cooking classes',
      'Chocolate making workshops',
      'Museum visits',
      'Traditional music shows'
    ],
    activitiesEs: [
      'Tours a pie por la ciudad',
      'Clases de cocina',
      'Talleres de chocolate',
      'Visitas a museos',
      'Shows de música tradicional'
    ],
    familyTips: [
      'Spend 2-3 days acclimatizing before Machu Picchu',
      'Drink coca tea to help with altitude',
      'Take it easy on first day - no strenuous activity',
      'San Pedro Market is great for local food experiences',
      'Consider staying in Sacred Valley first (lower altitude)'
    ],
    familyTipsEs: [
      'Pasa 2-3 días aclimatándote antes de Machu Picchu',
      'Bebe té de coca para ayudar con la altura',
      'Tómalo con calma el primer día',
      'El Mercado San Pedro es genial para experiencias gastronómicas',
      'Considera quedarte primero en el Valle Sagrado'
    ],
    climate: 'Cool and dry. Days 15-24°C, nights 0-7°C. Rainy October-April.',
    climateEs: 'Fresco y seco. Días 15-24°C, noches 0-7°C. Lluvioso octubre-abril.',
    image: '/images/destinations/cusco.jpg',
    featured: true
  },
  {
    id: 'sacred-valley',
    slug: 'sacred-valley',
    name: 'Sacred Valley',
    nameEs: 'Valle Sagrado',
    region: 'highlands',
    tagline: 'Family-friendly villages with markets, ruins, and easier altitude',
    taglineEs: 'Pueblos familiares con mercados, ruinas y altitud más fácil',
    description: 'The Sacred Valley stretches between Pisac and Ollantaytambo, offering family-friendly villages with markets, weaving demonstrations and Inca ruins. The valley\'s moderate altitude (9,000-11,000 ft) is easier to manage than Cusco, making it an ideal base for families to acclimatize before visiting higher elevations.',
    descriptionEs: 'El Valle Sagrado se extiende entre Pisac y Ollantaytambo, ofreciendo pueblos familiares con mercados, demostraciones de tejido y ruinas Incas. La altitud moderada del valle lo hace una base ideal para familias.',
    elevation: '2,750-3,350m (9,000-11,000 ft)',
    bestTime: 'Year-round, best May-September',
    bestTimeEs: 'Todo el año, mejor mayo-septiembre',
    highlights: [
      'Pisac market and ruins',
      'Ollantaytambo fortress',
      'Maras salt mines',
      'Moray agricultural terraces',
      'Chinchero weaving communities'
    ],
    highlightsEs: [
      'Mercado y ruinas de Pisac',
      'Fortaleza de Ollantaytambo',
      'Salineras de Maras',
      'Terrazas agrícolas de Moray',
      'Comunidades de tejido de Chinchero'
    ],
    activities: [
      'Market visits',
      'Weaving workshops',
      'Farm visits and cooking',
      'Horseback riding',
      'Mountain biking'
    ],
    activitiesEs: [
      'Visitas a mercados',
      'Talleres de tejido',
      'Visitas a granjas y cocina',
      'Paseos a caballo',
      'Ciclismo de montaña'
    ],
    familyTips: [
      'Lower altitude makes acclimatization easier',
      'Stay 2-3 days before visiting Machu Picchu',
      'Pisac Sunday market is the most vibrant',
      'Many family-friendly haciendas and hotels',
      'Great base for day trips'
    ],
    familyTipsEs: [
      'La menor altitud facilita la aclimatación',
      'Quédate 2-3 días antes de visitar Machu Picchu',
      'El mercado dominical de Pisac es el más vibrante',
      'Muchas haciendas y hoteles familiares',
      'Excelente base para excursiones'
    ],
    climate: 'Similar to Cusco but slightly warmer. Pleasant year-round.',
    climateEs: 'Similar a Cusco pero ligeramente más cálido. Agradable todo el año.',
    image: '/images/destinations/sacred-valley.jpg',
    featured: true
  },
  {
    id: 'lake-titicaca',
    slug: 'lake-titicaca',
    name: 'Lake Titicaca',
    nameEs: 'Lago Titicaca',
    region: 'highlands',
    tagline: 'South America\'s largest lake with floating islands and ancient traditions',
    taglineEs: 'El lago más grande de Sudamérica con islas flotantes y tradiciones antiguas',
    description: 'Straddling Peru and Bolivia, Lake Titicaca is South America\'s largest lake and the world\'s highest navigable body of water at 3,812m. The Uros floating islands are made of totora reeds, and communities maintain traditions dating back 500 years. Taquile Island preserves Inca textile techniques recognized by UNESCO.',
    descriptionEs: 'Compartido entre Perú y Bolivia, el Lago Titicaca es el lago más grande de Sudamérica y el cuerpo de agua navegable más alto del mundo. Las islas flotantes de los Uros están hechas de totora.',
    elevation: '3,812m (12,507 ft)',
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a Octubre (temporada seca)',
    highlights: [
      'Uros floating islands',
      'Taquile Island textiles (UNESCO)',
      'Amantani Island homestays',
      'Sillustani funerary towers',
      'Traditional boat rides'
    ],
    highlightsEs: [
      'Islas flotantes de los Uros',
      'Textiles de Isla Taquile (UNESCO)',
      'Estadías familiares en Amantani',
      'Torres funerarias de Sillustani',
      'Paseos en bote tradicional'
    ],
    activities: [
      'Island hopping tours',
      'Homestay experiences',
      'Textile weaving lessons',
      'Kayaking',
      'Fishing with locals'
    ],
    activitiesEs: [
      'Tours de isla en isla',
      'Experiencias de homestay',
      'Lecciones de tejido',
      'Kayak',
      'Pesca con locales'
    ],
    familyTips: [
      'High altitude - acclimatize in Cusco first',
      'Homestays offer authentic cultural immersion',
      'Dress in warm layers - cold at night',
      'Boats can be basic - bring motion sickness remedies',
      'Great for older children interested in culture'
    ],
    familyTipsEs: [
      'Alta altitud - aclimátate en Cusco primero',
      'Los homestays ofrecen inmersión cultural auténtica',
      'Vístete en capas - frío de noche',
      'Los botes pueden ser básicos',
      'Ideal para niños mayores interesados en cultura'
    ],
    climate: 'Cold and dry. Days 10-18°C, nights can drop below freezing.',
    climateEs: 'Frío y seco. Días 10-18°C, noches pueden bajar de 0°C.',
    image: '/images/destinations/lake-titicaca.jpg',
    featured: true
  },
  {
    id: 'arequipa',
    slug: 'arequipa',
    name: 'Arequipa',
    nameEs: 'Arequipa',
    region: 'highlands',
    tagline: 'The White City with colonial splendor and volcanic landscapes',
    taglineEs: 'La Ciudad Blanca con esplendor colonial y paisajes volcánicos',
    description: 'Built in white and pink sillar (volcanic rock), Arequipa\'s UNESCO-listed historic center blends European and indigenous architectural styles. Robust walls, archways and Baroque facades were adapted to seismic conditions. The area includes the stunning Monastery of Santa Catalina and numerous casonas (mansions).',
    descriptionEs: 'Construida en sillar blanco y rosa (roca volcánica), el centro histórico de Arequipa, declarado Patrimonio de la Humanidad, mezcla estilos arquitectónicos europeos e indígenas.',
    elevation: '2,335m (7,661 ft)',
    bestTime: 'Year-round, mild and sunny',
    bestTimeEs: 'Todo el año, templado y soleado',
    highlights: [
      'Santa Catalina Monastery',
      'Plaza de Armas',
      'Juanita Mummy Museum',
      'Yanahuara viewpoint',
      'Sillar quarries tour'
    ],
    highlightsEs: [
      'Monasterio de Santa Catalina',
      'Plaza de Armas',
      'Museo de la Momia Juanita',
      'Mirador de Yanahuara',
      'Tour a canteras de sillar'
    ],
    activities: [
      'Colonial architecture walks',
      'Cooking classes',
      'Spanish lessons',
      'Day trips to Colca',
      'Chocolate workshops'
    ],
    activitiesEs: [
      'Caminatas por arquitectura colonial',
      'Clases de cocina',
      'Clases de español',
      'Excursiones a Colca',
      'Talleres de chocolate'
    ],
    familyTips: [
      'Lower altitude than Cusco - good for acclimatization',
      'Santa Catalina is like a city within a city',
      'Try local dishes: rocoto relleno, queso helado',
      'Great base for Colca Canyon',
      'Many excellent restaurants'
    ],
    familyTipsEs: [
      'Menor altitud que Cusco - bueno para aclimatación',
      'Santa Catalina es como una ciudad dentro de una ciudad',
      'Prueba platos locales: rocoto relleno, queso helado',
      'Excelente base para el Cañón del Colca',
      'Muchos restaurantes excelentes'
    ],
    climate: 'Sunny and dry year-round. Days 20-25°C, nights 10-15°C.',
    climateEs: 'Soleado y seco todo el año. Días 20-25°C, noches 10-15°C.',
    image: '/images/destinations/arequipa.jpg',
    featured: true
  },
  {
    id: 'colca-canyon',
    slug: 'colca-canyon',
    name: 'Colca Canyon',
    nameEs: 'Cañón del Colca',
    region: 'highlands',
    tagline: 'One of the world\'s deepest canyons with majestic Andean condors',
    taglineEs: 'Uno de los cañones más profundos del mundo con majestuosos cóndores andinos',
    description: 'One of the world\'s deepest canyons (up to 3,270m), Colca offers dramatic scenery, pre-Inca terraces and the chance to spot Andean condors at Cruz del Condor viewpoint. The surrounding villages maintain traditional agriculture and colorful local dress.',
    descriptionEs: 'Uno de los cañones más profundos del mundo (hasta 3.270m), Colca ofrece paisajes dramáticos, terrazas pre-Incas y la oportunidad de ver cóndores andinos en el mirador Cruz del Cóndor.',
    elevation: '3,400-4,800m (11,150-15,750 ft)',
    bestTime: 'May to November (dry season)',
    bestTimeEs: 'Mayo a Noviembre (temporada seca)',
    highlights: [
      'Cruz del Condor viewpoint',
      'Andean condor sightings',
      'Pre-Inca agricultural terraces',
      'Hot springs in Chivay',
      'Traditional villages'
    ],
    highlightsEs: [
      'Mirador Cruz del Cóndor',
      'Avistamiento de cóndores andinos',
      'Terrazas agrícolas pre-Incas',
      'Aguas termales en Chivay',
      'Pueblos tradicionales'
    ],
    activities: [
      'Condor watching',
      'Canyon hiking',
      'Hot springs soaking',
      'Village visits',
      'Photography'
    ],
    activitiesEs: [
      'Observación de cóndores',
      'Senderismo en el cañón',
      'Baño en aguas termales',
      'Visitas a pueblos',
      'Fotografía'
    ],
    familyTips: [
      'Arrive early at Cruz del Condor (6-8 AM best)',
      'Condors most active May-December',
      'High altitude - acclimatize first',
      'Hot springs great for relaxation',
      '2-day trips allow deeper exploration'
    ],
    familyTipsEs: [
      'Llega temprano a Cruz del Cóndor (mejor 6-8 AM)',
      'Cóndores más activos mayo-diciembre',
      'Alta altitud - aclimátate primero',
      'Aguas termales excelentes para relajación',
      'Viajes de 2 días permiten exploración más profunda'
    ],
    climate: 'Cool and dry. Large temperature variation between day and night.',
    climateEs: 'Fresco y seco. Gran variación de temperatura entre día y noche.',
    image: '/images/destinations/colca-canyon.jpg',
    featured: false
  },
  {
    id: 'huaraz',
    slug: 'huaraz',
    name: 'Huaraz & Cordillera Blanca',
    nameEs: 'Huaraz y Cordillera Blanca',
    region: 'highlands',
    tagline: 'Trekking paradise between snowy peaks and turquoise lakes',
    taglineEs: 'Paraíso de trekking entre picos nevados y lagos turquesas',
    description: 'A haven for trekkers, Huaraz sits at 3,052m between the snowy Cordillera Blanca and the drier Cordillera Negra. The dry season (May-September) offers clear weather ideal for climbs, while rainy season brings lush landscapes. Must-see destinations include Laguna 69 and Llanganuco lakes.',
    descriptionEs: 'Un paraíso para excursionistas, Huaraz está a 3.052m entre la nevada Cordillera Blanca y la más seca Cordillera Negra. La temporada seca ofrece clima claro ideal para escaladas.',
    elevation: '3,052m (10,013 ft)',
    bestTime: 'May to September (dry season)',
    bestTimeEs: 'Mayo a Septiembre (temporada seca)',
    highlights: [
      'Laguna 69 trek',
      'Llanganuco lakes',
      'Chavín de Huantar ruins',
      'Huascarán National Park',
      'Santa Cruz trek'
    ],
    highlightsEs: [
      'Trek a Laguna 69',
      'Lagunas de Llanganuco',
      'Ruinas de Chavín de Huantar',
      'Parque Nacional Huascarán',
      'Trek Santa Cruz'
    ],
    activities: [
      'Day hikes to alpine lakes',
      'Multi-day treks',
      'Archaeological site visits',
      'Mountain climbing',
      'Photography'
    ],
    activitiesEs: [
      'Caminatas de día a lagos alpinos',
      'Treks de varios días',
      'Visitas a sitios arqueológicos',
      'Montañismo',
      'Fotografía'
    ],
    familyTips: [
      'Acclimatization essential (2+ days)',
      'Laguna 69 is challenging - for active families',
      'Try local cuisine: picante de cuy, charqui',
      'Rainy season can cause landslides',
      'Hire certified guides for treks'
    ],
    familyTipsEs: [
      'Aclimatación esencial (2+ días)',
      'Laguna 69 es desafiante - para familias activas',
      'Prueba cocina local: picante de cuy, charqui',
      'Temporada de lluvias puede causar deslizamientos',
      'Contrata guías certificados para treks'
    ],
    climate: 'Dry season May-September. Days sunny, nights cold. Rain October-April.',
    climateEs: 'Temporada seca mayo-septiembre. Días soleados, noches frías.',
    image: '/images/destinations/huaraz.jpg',
    featured: false
  },

  // COAST
  {
    id: 'lima',
    slug: 'lima',
    name: 'Lima',
    nameEs: 'Lima',
    region: 'coast',
    tagline: 'Peru\'s vibrant capital and culinary capital of South America',
    taglineEs: 'La vibrante capital de Perú y capital culinaria de Sudamérica',
    description: 'Lima is a city of striking contrasts, from its UNESCO-listed colonial center to the trendy Miraflores and bohemian Barranco districts. As the gastronomic capital of South America, Lima offers world-class ceviche, lomo saltado, and innovative fusion cuisine. Most international flights arrive here.',
    descriptionEs: 'Lima es una ciudad de contrastes sorprendentes, desde su centro colonial declarado Patrimonio de la Humanidad hasta los modernos distritos de Miraflores y Barranco. Como capital gastronómica de Sudamérica, Lima ofrece ceviche de clase mundial.',
    elevation: '154m (505 ft)',
    bestTime: 'December to April (summer)',
    bestTimeEs: 'Diciembre a Abril (verano)',
    highlights: [
      'Miraflores boardwalk (Malecón)',
      'Historic center and Plaza Mayor',
      'Larco Museum',
      'Barranco arts district',
      'World-class restaurants'
    ],
    highlightsEs: [
      'Malecón de Miraflores',
      'Centro histórico y Plaza Mayor',
      'Museo Larco',
      'Distrito artístico de Barranco',
      'Restaurantes de clase mundial'
    ],
    activities: [
      'Food tours and cooking classes',
      'Museum visits',
      'Paragliding over the coast',
      'Surfing lessons',
      'Historic center walking tours'
    ],
    activitiesEs: [
      'Tours gastronómicos y clases de cocina',
      'Visitas a museos',
      'Parapente sobre la costa',
      'Clases de surf',
      'Tours a pie por el centro histórico'
    ],
    familyTips: [
      'Sea level - no altitude concerns',
      'Great starting point for acclimatization',
      'Parque Kennedy in Miraflores is family-friendly',
      'Magic Water Circuit for evening entertainment',
      'Many kid-friendly restaurants'
    ],
    familyTipsEs: [
      'Nivel del mar - sin preocupaciones de altitud',
      'Excelente punto de partida para aclimatación',
      'Parque Kennedy en Miraflores es familiar',
      'Circuito Mágico del Agua para entretenimiento nocturno',
      'Muchos restaurantes aptos para niños'
    ],
    climate: 'Mild year-round. Summer (Dec-Apr) warm and humid. Winter (May-Nov) overcast.',
    climateEs: 'Templado todo el año. Verano cálido y húmedo. Invierno nublado.',
    image: '/images/destinations/lima.jpg',
    featured: true
  },
  {
    id: 'paracas',
    slug: 'paracas',
    name: 'Paracas & Ballestas Islands',
    nameEs: 'Paracas e Islas Ballestas',
    region: 'coast',
    tagline: 'Desert meets ocean with incredible wildlife encounters',
    taglineEs: 'El desierto encuentra el océano con increíbles encuentros con vida silvestre',
    description: 'Paracas National Reserve protects desert dunes and rich marine ecosystems where sea lions, Humboldt penguins and thousands of birds thrive. Boat tours to the Ballestas Islands pass the El Candelabro geoglyph and provide close-up wildlife encounters. Warm, dry weather year-round with virtually no rainfall.',
    descriptionEs: 'La Reserva Nacional de Paracas protege dunas desérticas y ricos ecosistemas marinos donde prosperan lobos marinos, pingüinos de Humboldt y miles de aves.',
    elevation: '0m (Sea level)',
    bestTime: 'Year-round (warm and dry)',
    bestTimeEs: 'Todo el año (cálido y seco)',
    highlights: [
      'Ballestas Islands boat tour',
      'Sea lions and Humboldt penguins',
      'El Candelabro geoglyph',
      'Paracas National Reserve',
      'Red Beach'
    ],
    highlightsEs: [
      'Tour en bote a Islas Ballestas',
      'Lobos marinos y pingüinos de Humboldt',
      'Geoglifo El Candelabro',
      'Reserva Nacional de Paracas',
      'Playa Roja'
    ],
    activities: [
      'Wildlife boat tours',
      'Desert reserve exploration',
      'Beach time',
      'Seafood dining',
      'Pisco vineyard visits'
    ],
    activitiesEs: [
      'Tours de vida silvestre en bote',
      'Exploración de la reserva',
      'Tiempo en la playa',
      'Degustación de mariscos',
      'Visitas a viñedos de pisco'
    ],
    familyTips: [
      'Sea level - perfect for altitude-free days',
      'Boats leave early morning - book in advance',
      'Bring sunscreen and hat',
      'Fresh seafood is excellent here',
      'Combine with Huacachina in one trip'
    ],
    familyTipsEs: [
      'Nivel del mar - perfecto para días sin altitud',
      'Los botes salen temprano - reserva con anticipación',
      'Lleva bloqueador solar y sombrero',
      'Los mariscos frescos son excelentes aquí',
      'Combina con Huacachina en un viaje'
    ],
    climate: 'Warm and dry year-round. Summer (Dec-Mar) around 27°C, winter about 18°C.',
    climateEs: 'Cálido y seco todo el año. Verano alrededor de 27°C, invierno unos 18°C.',
    image: '/images/destinations/paracas.jpg',
    featured: true
  },
  {
    id: 'huacachina',
    slug: 'huacachina',
    name: 'Huacachina Oasis',
    nameEs: 'Oasis de Huacachina',
    region: 'coast',
    tagline: 'South America\'s only natural desert oasis with thrilling dune adventures',
    taglineEs: 'El único oasis natural de Sudamérica con emocionantes aventuras en dunas',
    description: 'Located 300 km south of Lima, Huacachina is South America\'s only natural desert oasis. Visitors sandboard down 100m dunes and ride dune buggies. New safety regulations and lagoon restoration projects (2025 update) ensure responsible tourism. Budget range is roughly $25-40/day for budget to $100+ for luxury.',
    descriptionEs: 'Ubicado a 300 km al sur de Lima, Huacachina es el único oasis natural de Sudamérica. Los visitantes hacen sandboard bajando dunas de 100m y pasean en buggies.',
    elevation: '406m (1,332 ft)',
    bestTime: 'Year-round',
    bestTimeEs: 'Todo el año',
    highlights: [
      'Sandboarding on massive dunes',
      'Dune buggy adventures',
      'Sunset over the desert',
      'Natural lagoon',
      'Desert photography'
    ],
    highlightsEs: [
      'Sandboard en dunas masivas',
      'Aventuras en buggy',
      'Atardecer sobre el desierto',
      'Laguna natural',
      'Fotografía del desierto'
    ],
    activities: [
      'Sandboarding',
      'Dune buggy rides',
      'Swimming in oasis',
      'Sunset watching',
      'Photography tours'
    ],
    activitiesEs: [
      'Sandboard',
      'Paseos en buggy',
      'Nadar en el oasis',
      'Ver atardeceres',
      'Tours fotográficos'
    ],
    familyTips: [
      'Minimum age for sandboarding varies by operator',
      'Book sunset tours for best experience',
      'Hold onto your belongings in buggies',
      'Bring goggles for sand protection',
      'Can be combined with Paracas day trip'
    ],
    familyTipsEs: [
      'Edad mínima para sandboard varía por operador',
      'Reserva tours al atardecer para mejor experiencia',
      'Sostén tus pertenencias en los buggies',
      'Lleva gafas para protección de arena',
      'Puede combinarse con excursión a Paracas'
    ],
    climate: 'Hot and dry year-round. Summer (Dec-Mar) very hot, milder in winter.',
    climateEs: 'Caliente y seco todo el año. Verano muy caliente, más suave en invierno.',
    image: '/images/destinations/huacachina.jpg',
    featured: false
  },
  {
    id: 'nazca',
    slug: 'nazca',
    name: 'Nazca Lines',
    nameEs: 'Líneas de Nazca',
    region: 'coast',
    tagline: 'Mysterious ancient geoglyphs etched into the desert',
    taglineEs: 'Misteriosos geoglifos antiguos grabados en el desierto',
    description: 'These geoglyphs, etched into the desert between 500 BC and AD 500, cover around 450 km² and depict animals, plants and geometric figures. Scholars believe they had ritual or astronomical purposes. Flights from Paracas or Nazca reveal the mysterious shapes including the hummingbird, spider, and monkey.',
    descriptionEs: 'Estos geoglifos, grabados en el desierto entre 500 AC y 500 DC, cubren unos 450 km² y representan animales, plantas y figuras geométricas. Los estudiosos creen que tenían propósitos rituales o astronómicos.',
    elevation: '520m (1,706 ft)',
    bestTime: 'Year-round (best visibility June-November)',
    bestTimeEs: 'Todo el año (mejor visibilidad junio-noviembre)',
    highlights: [
      'Scenic flights over the lines',
      'The Hummingbird geoglyph',
      'The Spider and Monkey figures',
      'Chauchilla Cemetery',
      'Maria Reiche Museum'
    ],
    highlightsEs: [
      'Vuelos panorámicos sobre las líneas',
      'El geoglifo del Colibrí',
      'Las figuras de la Araña y el Mono',
      'Cementerio de Chauchilla',
      'Museo María Reiche'
    ],
    activities: [
      'Scenic flights',
      'Viewing tower visits',
      'Archaeological museum tours',
      'Chauchilla Cemetery tour',
      'Aqueduct visits'
    ],
    activitiesEs: [
      'Vuelos panorámicos',
      'Visitas a torre de observación',
      'Tours de museo arqueológico',
      'Tour al Cementerio Chauchilla',
      'Visitas a acueductos'
    ],
    familyTips: [
      'Flights can cause motion sickness',
      'Children under 3 may not enjoy flights',
      'Book flights for calm morning hours',
      'Viewing tower offers ground-level alternative',
      'Flights depart from Nazca or Pisco/Paracas'
    ],
    familyTipsEs: [
      'Los vuelos pueden causar mareos',
      'Niños menores de 3 años pueden no disfrutar',
      'Reserva vuelos para horas tranquilas de la mañana',
      'La torre ofrece alternativa desde tierra',
      'Los vuelos salen de Nazca o Pisco/Paracas'
    ],
    climate: 'Hot and extremely dry year-round. Very sunny.',
    climateEs: 'Caliente y extremadamente seco todo el año. Muy soleado.',
    image: '/images/destinations/nazca.jpg',
    featured: false
  },
  {
    id: 'mancora',
    slug: 'mancora',
    name: 'Máncora Beach',
    nameEs: 'Playa Máncora',
    region: 'coast',
    tagline: 'Peru\'s premier beach destination with year-round warm waters',
    taglineEs: 'El principal destino de playa de Perú con aguas cálidas todo el año',
    description: 'Máncora experiences a tropical climate influenced by cold and warm ocean currents. Temperatures peak at around 30.8°C in March and drop to about 15.5°C in September, meaning it\'s beach-friendly almost all year. Popular for surfing, kitesurfing, and relaxation.',
    descriptionEs: 'Máncora tiene un clima tropical influenciado por corrientes oceánicas frías y cálidas. Las temperaturas alcanzan unos 30.8°C en marzo y bajan a unos 15.5°C en septiembre, siendo amigable para la playa casi todo el año.',
    elevation: '0m (Sea level)',
    bestTime: 'December to April (warmest)',
    bestTimeEs: 'Diciembre a Abril (más cálido)',
    highlights: [
      'Warm sandy beaches',
      'Surfing and kitesurfing',
      'Fresh seafood',
      'Relaxed atmosphere',
      'Whale watching (seasonal)'
    ],
    highlightsEs: [
      'Playas de arena cálida',
      'Surf y kitesurf',
      'Mariscos frescos',
      'Atmósfera relajada',
      'Avistamiento de ballenas (estacional)'
    ],
    activities: [
      'Surfing lessons',
      'Beach relaxation',
      'Kitesurfing',
      'Snorkeling',
      'Yoga retreats'
    ],
    activitiesEs: [
      'Clases de surf',
      'Relajación en playa',
      'Kitesurf',
      'Snorkel',
      'Retiros de yoga'
    ],
    familyTips: [
      'Great end-of-trip beach break',
      'Many family-friendly resorts',
      'Surf schools welcome beginners',
      'Northern Peru - can combine with archaeological sites',
      'Warm waters year-round'
    ],
    familyTipsEs: [
      'Excelente descanso de playa al final del viaje',
      'Muchos resorts familiares',
      'Escuelas de surf dan la bienvenida a principiantes',
      'Norte de Perú - puede combinarse con sitios arqueológicos',
      'Aguas cálidas todo el año'
    ],
    climate: 'Tropical. Peak 30.8°C in March, low 15.5°C in September.',
    climateEs: 'Tropical. Máximo 30.8°C en marzo, mínimo 15.5°C en septiembre.',
    image: '/images/destinations/mancora.jpg',
    featured: false
  },

  // AMAZON
  {
    id: 'amazon',
    slug: 'amazon',
    name: 'Amazon Rainforest',
    nameEs: 'Selva Amazónica',
    region: 'amazon',
    tagline: 'The world\'s greatest biodiversity awaits in Peru\'s Amazon',
    taglineEs: 'La mayor biodiversidad del mundo espera en la Amazonía peruana',
    description: 'The Amazon rainforest covers more than half of Peru and hosts some of the world\'s greatest biodiversity. Access points include Iquitos (northern Amazon) and Puerto Maldonado (southern Amazon/Tambopata). Choose between luxury cruises, eco-lodges, and community stays.',
    descriptionEs: 'La selva amazónica cubre más de la mitad de Perú y alberga parte de la mayor biodiversidad del mundo. Los puntos de acceso incluyen Iquitos (Amazonía norte) y Puerto Maldonado (Amazonía sur/Tambopata).',
    elevation: '100-300m (328-984 ft)',
    bestTime: 'June to November (dry season for hiking)',
    bestTimeEs: 'Junio a Noviembre (temporada seca para caminatas)',
    highlights: [
      'Pink river dolphins',
      'Macaw clay licks',
      'Giant river otters',
      'Canopy walkways',
      'Indigenous community visits'
    ],
    highlightsEs: [
      'Delfines rosados',
      'Collpas de guacamayos',
      'Nutrias gigantes',
      'Puentes de canopy',
      'Visitas a comunidades indígenas'
    ],
    activities: [
      'Wildlife spotting',
      'Canoe excursions',
      'Piranha fishing',
      'Night jungle walks',
      'Birdwatching'
    ],
    activitiesEs: [
      'Avistamiento de fauna',
      'Excursiones en canoa',
      'Pesca de pirañas',
      'Caminatas nocturnas',
      'Observación de aves'
    ],
    familyTips: [
      'Hot and humid - pack light, breathable clothing',
      'Yellow fever vaccination recommended',
      'Strong insect repellent essential',
      'Minimum age varies by lodge (usually 5-6)',
      'Rubber boots usually provided by lodges'
    ],
    familyTipsEs: [
      'Caliente y húmedo - empaca ropa ligera',
      'Vacuna de fiebre amarilla recomendada',
      'Repelente de insectos fuerte esencial',
      'Edad mínima varía por lodge (usualmente 5-6)',
      'Botas de goma usualmente provistas por lodges'
    ],
    climate: 'Hot and humid year-round. High-water Dec-May, low-water Jun-Nov.',
    climateEs: 'Caliente y húmedo todo el año. Aguas altas dic-may, aguas bajas jun-nov.',
    image: '/images/destinations/amazon.jpg',
    featured: true
  },
  {
    id: 'iquitos',
    slug: 'iquitos',
    name: 'Iquitos',
    nameEs: 'Iquitos',
    region: 'amazon',
    tagline: 'Gateway to the northern Amazon, accessible only by boat or plane',
    taglineEs: 'Puerta de entrada a la Amazonía norte, accesible solo por bote o avión',
    description: 'The gateway city to the northern Amazon is accessible only by boat or plane. The region\'s high-water season (December-May) makes some areas harder to reach, while the low-water season (June-November) offers better hiking and wildlife viewing. Lodging ranges from luxury jungle lodges to eco-friendly options.',
    descriptionEs: 'La ciudad puerta de entrada a la Amazonía norte es accesible solo por bote o avión. La temporada de aguas altas (diciembre-mayo) dificulta el acceso, mientras que la temporada de aguas bajas ofrece mejor senderismo.',
    elevation: '106m (348 ft)',
    bestTime: 'June to November (dry/low-water season)',
    bestTimeEs: 'Junio a Noviembre (temporada seca/aguas bajas)',
    highlights: [
      'Pacaya Samiria National Reserve',
      'Pink river dolphins',
      'Amazon River cruises',
      'Belén floating market',
      'Indigenous communities'
    ],
    highlightsEs: [
      'Reserva Nacional Pacaya Samiria',
      'Delfines rosados',
      'Cruceros por el río Amazonas',
      'Mercado flotante de Belén',
      'Comunidades indígenas'
    ],
    activities: [
      'River cruises',
      'Dolphin watching',
      'Community visits',
      'Canopy walkways',
      'Swimming with dolphins'
    ],
    activitiesEs: [
      'Cruceros por el río',
      'Avistamiento de delfines',
      'Visitas a comunidades',
      'Puentes de canopy',
      'Nadar con delfines'
    ],
    familyTips: [
      'Only reachable by air or river',
      'High-water season (Dec-May) means more canoeing',
      'Low-water season (Jun-Nov) better for hiking',
      'Luxury cruises like Aqua Expeditions available',
      'Pacaya Samiria is Peru\'s largest reserve'
    ],
    familyTipsEs: [
      'Solo accesible por aire o río',
      'Temporada de aguas altas significa más canoa',
      'Temporada de aguas bajas mejor para caminatas',
      'Cruceros de lujo como Aqua Expeditions disponibles',
      'Pacaya Samiria es la reserva más grande de Perú'
    ],
    climate: 'Hot and humid year-round. Average 26-32°C. Two seasons based on water levels.',
    climateEs: 'Caliente y húmedo todo el año. Promedio 26-32°C. Dos temporadas según niveles de agua.',
    image: '/images/destinations/iquitos.jpg',
    featured: false
  },
  {
    id: 'tambopata',
    slug: 'tambopata',
    name: 'Tambopata National Reserve',
    nameEs: 'Reserva Nacional Tambopata',
    region: 'amazon',
    tagline: 'World-class wildlife in Peru\'s southern Amazon',
    taglineEs: 'Vida silvestre de clase mundial en la Amazonía sur de Perú',
    description: 'In Peru\'s Madre de Dios region, this reserve protects palm swamps, wetlands and forests. It supports 632 bird species, 169 mammals, 103 reptiles, 103 amphibians and 1,200 butterflies. Visitors can canoe on Lake Sandoval, hike to observation towers and watch macaws at clay licks.',
    descriptionEs: 'En la región Madre de Dios de Perú, esta reserva protege pantanos de palmeras, humedales y bosques. Alberga 632 especies de aves, 169 mamíferos, 103 reptiles y 1,200 mariposas.',
    elevation: '200m (656 ft)',
    bestTime: 'May to October (dry season)',
    bestTimeEs: 'Mayo a Octubre (temporada seca)',
    highlights: [
      'Macaw clay licks',
      'Lake Sandoval (giant otters)',
      'Canopy observation towers',
      '632 bird species',
      'Night wildlife walks'
    ],
    highlightsEs: [
      'Collpas de guacamayos',
      'Lago Sandoval (nutrias gigantes)',
      'Torres de observación de canopy',
      '632 especies de aves',
      'Caminatas nocturnas de fauna'
    ],
    activities: [
      'Macaw clay lick visits',
      'Lake canoeing',
      'Canopy tower climbing',
      'Night walks',
      'Birding expeditions'
    ],
    activitiesEs: [
      'Visitas a collpas de guacamayos',
      'Canoa en lagos',
      'Subida a torres de canopy',
      'Caminatas nocturnas',
      'Expediciones de observación de aves'
    ],
    familyTips: [
      'Fly into Puerto Maldonado',
      'Clay licks most active early morning',
      'Lake Sandoval has giant river otters',
      'Many family-oriented lodges available',
      'Shorter flight from Cusco than to Iquitos'
    ],
    familyTipsEs: [
      'Vuela a Puerto Maldonado',
      'Collpas más activas temprano en la mañana',
      'Lago Sandoval tiene nutrias gigantes',
      'Muchos lodges orientados a familias',
      'Vuelo más corto desde Cusco que a Iquitos'
    ],
    climate: 'Hot and humid. Dry season May-October best for wildlife.',
    climateEs: 'Caliente y húmedo. Temporada seca mayo-octubre mejor para fauna.',
    image: '/images/destinations/tambopata.jpg',
    featured: false
  },

  // NORTHERN PERU
  {
    id: 'kuelap',
    slug: 'kuelap',
    name: 'Kuelap',
    nameEs: 'Kuélap',
    region: 'north',
    tagline: 'The pre-Inca fortress in the clouds with towering stone walls',
    taglineEs: 'La fortaleza pre-Inca en las nubes con imponentes muros de piedra',
    description: 'Built by the Chachapoyas culture between 900-1100 CE, the pre-Inca fortress of Kuelap sits at 3,000m and covers six hectares with stone walls up to 60 ft high and roughly 450 homes. The dry season (May-September) is best for visiting, and a cable car from Nuevo Tingo makes access easier.',
    descriptionEs: 'Construida por la cultura Chachapoyas entre 900-1100 DC, la fortaleza pre-Inca de Kuélap está a 3.000m y cubre seis hectáreas con muros de piedra de hasta 18m de alto y unas 450 casas.',
    elevation: '3,000m (9,843 ft)',
    bestTime: 'May to September (dry season)',
    bestTimeEs: 'Mayo a Septiembre (temporada seca)',
    highlights: [
      'Massive stone walls (60 ft high)',
      '450 circular dwellings',
      'Cable car ride (20 minutes)',
      'Cloud forest setting',
      'Pre-Inca Chachapoyas culture'
    ],
    highlightsEs: [
      'Enormes muros de piedra (18m de alto)',
      '450 viviendas circulares',
      'Viaje en teleférico (20 minutos)',
      'Entorno de bosque nuboso',
      'Cultura Chachapoyas pre-Inca'
    ],
    activities: [
      'Fortress exploration',
      'Cable car ride',
      'Archaeological tours',
      'Cloud forest walks',
      'Photography'
    ],
    activitiesEs: [
      'Exploración de la fortaleza',
      'Viaje en teleférico',
      'Tours arqueológicos',
      'Caminatas en bosque nuboso',
      'Fotografía'
    ],
    familyTips: [
      'Cable car makes access easy for families',
      '20-minute cable car ride with stunning views',
      'Less crowded than Machu Picchu',
      'Combine with Gocta Falls',
      'Northern Peru off the beaten path'
    ],
    familyTipsEs: [
      'El teleférico facilita el acceso para familias',
      'Viaje de 20 minutos con vistas impresionantes',
      'Menos concurrido que Machu Picchu',
      'Combina con Cataratas Gocta',
      'Norte de Perú fuera de lo común'
    ],
    climate: 'Cool and often misty. Dry season May-September best.',
    climateEs: 'Fresco y frecuentemente brumoso. Temporada seca mayo-septiembre mejor.',
    image: '/images/destinations/kuelap.jpg',
    featured: false
  },
  {
    id: 'trujillo',
    slug: 'trujillo',
    name: 'Trujillo & Chan Chan',
    nameEs: 'Trujillo y Chan Chan',
    region: 'north',
    tagline: 'Colonial charm meets ancient Chimú civilization',
    taglineEs: 'El encanto colonial se encuentra con la antigua civilización Chimú',
    description: 'Trujillo offers access to Chan Chan, the world\'s largest adobe city and capital of the Chimú Empire, along with the colorful Moche temples of Huaca del Sol y de la Luna with their polychrome friezes. The nearby beach town of Huanchaco features traditional reed fishing boats.',
    descriptionEs: 'Trujillo ofrece acceso a Chan Chan, la ciudad de adobe más grande del mundo y capital del Imperio Chimú, junto con los coloridos templos Moche de Huaca del Sol y de la Luna.',
    elevation: '34m (112 ft)',
    bestTime: 'Year-round (mild climate)',
    bestTimeEs: 'Todo el año (clima templado)',
    highlights: [
      'Chan Chan adobe city (UNESCO)',
      'Huaca del Sol y de la Luna',
      'Colonial Plaza de Armas',
      'Huanchaco beach and reed boats',
      'Moche archaeological sites'
    ],
    highlightsEs: [
      'Ciudad de adobe Chan Chan (UNESCO)',
      'Huaca del Sol y de la Luna',
      'Plaza de Armas colonial',
      'Playa Huanchaco y botes de totora',
      'Sitios arqueológicos Moche'
    ],
    activities: [
      'Archaeological site visits',
      'Colonial city walks',
      'Beach time in Huanchaco',
      'Surfing lessons',
      'Museum tours'
    ],
    activitiesEs: [
      'Visitas a sitios arqueológicos',
      'Paseos por ciudad colonial',
      'Tiempo en playa Huanchaco',
      'Clases de surf',
      'Tours de museos'
    ],
    familyTips: [
      'Sea level - no altitude issues',
      'Chan Chan can be hot - bring water/hat',
      'Huanchaco great for beach break',
      'Combine with Chiclayo for full north circuit',
      'Local ceviche is excellent'
    ],
    familyTipsEs: [
      'Nivel del mar - sin problemas de altitud',
      'Chan Chan puede ser caliente - lleva agua/sombrero',
      'Huanchaco excelente para descanso en playa',
      'Combina con Chiclayo para circuito norte completo',
      'El ceviche local es excelente'
    ],
    climate: 'Mild and dry year-round. Warm in summer, pleasant in winter.',
    climateEs: 'Templado y seco todo el año. Cálido en verano, agradable en invierno.',
    image: '/images/destinations/trujillo.jpg',
    featured: false
  },
  {
    id: 'chiclayo',
    slug: 'chiclayo',
    name: 'Chiclayo & Lord of Sipán',
    nameEs: 'Chiclayo y Señor de Sipán',
    region: 'north',
    tagline: 'Royal Moche tombs and archaeological treasures',
    taglineEs: 'Tumbas reales Moche y tesoros arqueológicos',
    description: 'Excavations at Huaca Rajada revealed the Lord of Sipán burial, where the leader was adorned with gold, silver, turquoise and Spondylus shell ornaments. The tomb contained sacrificed companions and llamas and is now displayed at the Museo Tumbas Reales de Sipán, one of South America\'s finest museums.',
    descriptionEs: 'Las excavaciones en Huaca Rajada revelaron el entierro del Señor de Sipán, donde el líder estaba adornado con ornamentos de oro, plata, turquesa y conchas Spondylus.',
    elevation: '27m (89 ft)',
    bestTime: 'Year-round',
    bestTimeEs: 'Todo el año',
    highlights: [
      'Museo Tumbas Reales de Sipán',
      'Huaca Rajada excavation site',
      'Túcume pyramids',
      'Sicán National Museum',
      'Bruning Archaeological Museum'
    ],
    highlightsEs: [
      'Museo Tumbas Reales de Sipán',
      'Sitio de excavación Huaca Rajada',
      'Pirámides de Túcume',
      'Museo Nacional Sicán',
      'Museo Arqueológico Bruning'
    ],
    activities: [
      'Museum visits',
      'Archaeological site tours',
      'Pyramid exploration',
      'Cultural history learning',
      'Local market visits'
    ],
    activitiesEs: [
      'Visitas a museos',
      'Tours de sitios arqueológicos',
      'Exploración de pirámides',
      'Aprendizaje de historia cultural',
      'Visitas a mercados locales'
    ],
    familyTips: [
      'Museums are excellent for children',
      'Lord of Sipán treasures rival King Tut',
      'Combine with Trujillo for full north circuit',
      'Sea level - easy climate',
      'Gateway to Kuelap and Chachapoyas'
    ],
    familyTipsEs: [
      'Los museos son excelentes para niños',
      'Tesoros del Señor de Sipán rivalizan con Tutankamón',
      'Combina con Trujillo para circuito norte completo',
      'Nivel del mar - clima fácil',
      'Puerta de entrada a Kuélap y Chachapoyas'
    ],
    climate: 'Warm and dry year-round. Desert coast climate.',
    climateEs: 'Cálido y seco todo el año. Clima de costa desértica.',
    image: '/images/destinations/chiclayo.jpg',
    featured: false
  },
  {
    id: 'chachapoyas',
    slug: 'chachapoyas',
    name: 'Chachapoyas & Gocta Falls',
    nameEs: 'Chachapoyas y Cataratas Gocta',
    region: 'north',
    tagline: 'Cloud forest waterfalls and ancient cliff tombs',
    taglineEs: 'Cascadas de bosque nuboso y tumbas antiguas en acantilados',
    description: 'The Chachapoyas region offers dramatic cloud forests, towering waterfalls, and mysterious archaeological sites. Gocta Falls, one of the world\'s tallest, plunges through pristine cloud forest. The Karajía cliff sarcophagi and Quiocta caves add to the region\'s mystique.',
    descriptionEs: 'La región Chachapoyas ofrece dramáticos bosques nubosos, altas cascadas y misteriosos sitios arqueológicos. Las Cataratas Gocta, una de las más altas del mundo, se precipitan a través de bosque nuboso prístino.',
    elevation: '2,335m (7,661 ft)',
    bestTime: 'May to September (dry season)',
    bestTimeEs: 'Mayo a Septiembre (temporada seca)',
    highlights: [
      'Gocta Falls (one of world\'s tallest)',
      'Karajía cliff sarcophagi',
      'Quiocta caves',
      'Leymebamba mummy museum',
      'Cloud forest biodiversity'
    ],
    highlightsEs: [
      'Cataratas Gocta (una de las más altas)',
      'Sarcófagos de Karajía',
      'Cuevas de Quiocta',
      'Museo de momias de Leymebamba',
      'Biodiversidad del bosque nuboso'
    ],
    activities: [
      'Waterfall hikes',
      'Cave exploration',
      'Birdwatching',
      'Archaeological tours',
      'Cloud forest walks'
    ],
    activitiesEs: [
      'Caminatas a cascadas',
      'Exploración de cuevas',
      'Observación de aves',
      'Tours arqueológicos',
      'Caminatas en bosque nuboso'
    ],
    familyTips: [
      'Gocta hike is moderate (2-3 hours each way)',
      'Often combined with Kuelap',
      'Off the beaten path - fewer tourists',
      'Flights to Jaén or Tarapoto',
      'Leymebamba mummy museum fascinating for kids'
    ],
    familyTipsEs: [
      'Caminata a Gocta es moderada (2-3 horas cada lado)',
      'Frecuentemente combinada con Kuélap',
      'Fuera de lo común - menos turistas',
      'Vuelos a Jaén o Tarapoto',
      'Museo de momias de Leymebamba fascinante para niños'
    ],
    climate: 'Cool and humid. Cloud forest climate. Best May-September.',
    climateEs: 'Fresco y húmedo. Clima de bosque nuboso. Mejor mayo-septiembre.',
    image: '/images/destinations/chachapoyas.jpg',
    featured: false
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter(d => d.region === region);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter(d => d.featured);
}

export function getAllRegions(): string[] {
  return Array.from(new Set(destinations.map(d => d.region)));
}
