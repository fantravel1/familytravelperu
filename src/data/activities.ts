// Family activities and experiences data

export interface Activity {
  slug: string;
  name: string;
  nameEs: string;
  type: 'adventure' | 'cultural' | 'nature' | 'culinary' | 'educational' | 'relaxation';
  city: string;
  region: string;
  regionEs: string;
  description: string;
  descriptionEs: string;
  whatToExpect: string;
  whatToExpectEs: string;
  highlights: string[];
  highlightsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  minAge: number;
  maxAge?: number;
  duration: string;
  durationEs: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  priceRange: string;
  priceRangeEs: string;
  bestTime: string;
  bestTimeEs: string;
  includes: string[];
  includesEs: string[];
  tips: string[];
  tipsEs: string[];
  safetyNotes: string[];
  safetyNotesEs: string[];
  relatedActivities: string[];
  providers: { name: string; website?: string; familyFriendly: boolean }[];
}

export const activities: Activity[] = [
  {
    slug: 'amazon-jungle-tour',
    name: 'Amazon Jungle Adventure',
    nameEs: 'Aventura en la Selva Amazónica',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Explore the world\'s largest rainforest with your family on an unforgettable Amazon adventure. From spotting pink dolphins to meeting indigenous communities, the jungle offers endless wonder for curious kids.',
    descriptionEs: 'Explora el bosque tropical más grande del mundo con tu familia en una aventura amazónica inolvidable. Desde avistar delfines rosados hasta conocer comunidades indígenas, la selva ofrece infinitas maravillas para niños curiosos.',
    whatToExpect: 'Multi-day lodge stays with guided excursions into the jungle. Activities include canoe trips, jungle walks, piranha fishing, wildlife spotting, and visits to local communities. Lodges range from rustic to luxury, all with family-friendly options.',
    whatToExpectEs: 'Estadías de varios días en lodges con excursiones guiadas a la selva. Las actividades incluyen paseos en canoa, caminatas en la selva, pesca de pirañas, avistamiento de vida silvestre y visitas a comunidades locales. Los lodges van desde rústicos hasta lujosos, todos con opciones familiares.',
    highlights: [
      'Pink river dolphin sightings',
      'Piranha fishing',
      'Canopy walkways',
      'Night jungle walks',
      'Visit indigenous communities',
      'Spot monkeys, birds, and caimans'
    ],
    highlightsEs: [
      'Avistamiento de delfines rosados',
      'Pesca de pirañas',
      'Pasarelas en las copas de los árboles',
      'Caminatas nocturnas en la selva',
      'Visitar comunidades indígenas',
      'Ver monos, aves y caimanes'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '3-5 days recommended',
    durationEs: '3-5 días recomendados',
    difficulty: 'moderate',
    priceRange: '$150-400 per person/day',
    priceRangeEs: '$150-400 por persona/día',
    bestTime: 'June-October (dry season) best for hiking, December-May (wet season) best for boat trips',
    bestTimeEs: 'Junio-octubre (temporada seca) mejor para caminatas, diciembre-mayo (temporada lluviosa) mejor para paseos en bote',
    includes: [
      'Airport transfers',
      'Boat transportation',
      'All meals at lodge',
      'Guided excursions',
      'Rubber boots and ponchos',
      'English-speaking guides'
    ],
    includesEs: [
      'Traslados del aeropuerto',
      'Transporte en bote',
      'Todas las comidas en el lodge',
      'Excursiones guiadas',
      'Botas de goma y ponchos',
      'Guías de habla inglesa'
    ],
    tips: [
      'Book a lodge with a pool - kids love cooling off',
      'Bring insect repellent with DEET',
      'Long sleeves and pants prevent bug bites',
      'Waterproof bags protect electronics',
      'Binoculars enhance wildlife viewing',
      'Kids love the piranha fishing!'
    ],
    tipsEs: [
      'Reserva un lodge con piscina - a los niños les encanta refrescarse',
      'Trae repelente de insectos con DEET',
      'Mangas largas y pantalones previenen picaduras',
      'Bolsas impermeables protegen electrónicos',
      'Los binoculares mejoran la observación de vida silvestre',
      '¡A los niños les encanta la pesca de pirañas!'
    ],
    safetyNotes: [
      'Yellow fever vaccination required',
      'Malaria prophylaxis recommended',
      'Stay on marked trails',
      'Follow guide instructions at all times',
      'Don\'t swim in rivers without guide approval'
    ],
    safetyNotesEs: [
      'Vacuna contra fiebre amarilla requerida',
      'Profilaxis contra malaria recomendada',
      'Mantente en senderos marcados',
      'Sigue las instrucciones del guía en todo momento',
      'No nades en ríos sin aprobación del guía'
    ],
    relatedActivities: ['river-cruise', 'wildlife-photography'],
    providers: [
      { name: 'Treehouse Lodge', familyFriendly: true },
      { name: 'Amazon Yarapa River Lodge', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true }
    ]
  },
  {
    slug: 'sandboarding-huacachina',
    name: 'Sandboarding & Dune Buggy',
    nameEs: 'Sandboard y Buggy en las Dunas',
    type: 'adventure',
    city: 'huacachina',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Race across towering sand dunes in a thrilling dune buggy, then slide down the slopes on a sandboard. This desert oasis adventure is a highlight for families seeking excitement.',
    descriptionEs: 'Corre a través de imponentes dunas de arena en un emocionante buggy, luego deslízate por las pendientes en un sandboard. Esta aventura en el oasis del desierto es un punto culminante para familias que buscan emoción.',
    whatToExpect: 'A 2-hour tour in powerful dune buggies with multiple stops for sandboarding. Buggies climb high dunes for stunning views before racing down. Sandboarding is done lying down (easier for beginners) or standing (for the adventurous).',
    whatToExpectEs: 'Un tour de 2 horas en poderosos buggies de dunas con múltiples paradas para sandboard. Los buggies suben dunas altas para vistas impresionantes antes de bajar corriendo. El sandboard se hace acostado (más fácil para principiantes) o de pie (para los aventureros).',
    highlights: [
      'Thrilling dune buggy ride',
      'Multiple sandboarding stops',
      'Sunset views over the desert',
      'Desert oasis photography',
      'Adrenaline-pumping fun',
      'Safe for children 6+'
    ],
    highlightsEs: [
      'Emocionante paseo en buggy de dunas',
      'Múltiples paradas de sandboard',
      'Vistas del atardecer sobre el desierto',
      'Fotografía del oasis del desierto',
      'Diversión llena de adrenalina',
      'Seguro para niños de 6+'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'moderate',
    priceRange: '$15-30 per person',
    priceRangeEs: '$15-30 por persona',
    bestTime: 'Late afternoon for sunset tours and cooler temperatures',
    bestTimeEs: 'Tarde para tours al atardecer y temperaturas más frescas',
    includes: [
      'Dune buggy transportation',
      'Sandboard rental',
      'Safety goggles',
      'Experienced driver/guide'
    ],
    includesEs: [
      'Transporte en buggy de dunas',
      'Alquiler de sandboard',
      'Gafas de seguridad',
      'Conductor/guía experimentado'
    ],
    tips: [
      'Sunset tours offer the best light and temperature',
      'Wear closed shoes and clothes you don\'t mind getting sandy',
      'Hold on tight in the buggy - it\'s wild!',
      'Start lying down on the sandboard before trying standing',
      'Bring a bandana to cover nose/mouth from sand',
      'Book directly in Huacachina for best prices'
    ],
    tipsEs: [
      'Los tours al atardecer ofrecen la mejor luz y temperatura',
      'Usa zapatos cerrados y ropa que no te importe ensuciar',
      '¡Agárrate fuerte en el buggy - es salvaje!',
      'Empieza acostado en el sandboard antes de intentar de pie',
      'Trae un pañuelo para cubrir nariz/boca de la arena',
      'Reserva directamente en Huacachina para mejores precios'
    ],
    safetyNotes: [
      'Children must sit with adults in the buggy',
      'Follow all driver safety instructions',
      'Not recommended for those with back problems',
      'Buggies have roll bars and seatbelts'
    ],
    safetyNotesEs: [
      'Los niños deben sentarse con adultos en el buggy',
      'Sigue todas las instrucciones de seguridad del conductor',
      'No recomendado para personas con problemas de espalda',
      'Los buggies tienen barras antivuelco y cinturones'
    ],
    relatedActivities: ['desert-camping', 'pisco-tour'],
    providers: [
      { name: 'Carola Tours', familyFriendly: true },
      { name: 'Desert Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'peruvian-cooking-class',
    name: 'Peruvian Cooking Class',
    nameEs: 'Clase de Cocina Peruana',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn to prepare traditional Peruvian dishes in a hands-on cooking class. Visit local markets, discover exotic ingredients, and create delicious meals your whole family will love.',
    descriptionEs: 'Aprende a preparar platos tradicionales peruanos en una clase de cocina práctica. Visita mercados locales, descubre ingredientes exóticos y crea deliciosas comidas que toda tu familia amará.',
    whatToExpect: 'Most classes start with a market tour to buy fresh ingredients. Then you\'ll learn to make classic dishes like ceviche, causa, lomo saltado, or ají de gallina. Kids get involved with age-appropriate tasks. Enjoy your creations for lunch or dinner.',
    whatToExpectEs: 'La mayoría de las clases comienzan con un tour al mercado para comprar ingredientes frescos. Luego aprenderás a hacer platos clásicos como ceviche, causa, lomo saltado o ají de gallina. Los niños participan con tareas apropiadas para su edad. Disfruta tus creaciones para almuerzo o cena.',
    highlights: [
      'Market tour with exotic fruits',
      'Hands-on cooking experience',
      'Learn about Peruvian ingredients',
      'Make 3-4 traditional dishes',
      'Great for picky eaters to try new foods',
      'Recipe cards to take home'
    ],
    highlightsEs: [
      'Tour al mercado con frutas exóticas',
      'Experiencia de cocina práctica',
      'Aprende sobre ingredientes peruanos',
      'Prepara 3-4 platos tradicionales',
      'Genial para que los quisquillosos prueben nuevos alimentos',
      'Tarjetas de recetas para llevar'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'Morning classes include market visit; any time works',
    bestTimeEs: 'Las clases matutinas incluyen visita al mercado; cualquier hora funciona',
    includes: [
      'Market tour',
      'All ingredients',
      'Cooking instruction',
      'Full meal of your creations',
      'Recipes to take home',
      'Drinks including pisco sour demo'
    ],
    includesEs: [
      'Tour al mercado',
      'Todos los ingredientes',
      'Instrucción de cocina',
      'Comida completa de tus creaciones',
      'Recetas para llevar',
      'Bebidas incluyendo demo de pisco sour'
    ],
    tips: [
      'Book a private class for best family experience',
      'Ask about kid-friendly dishes beforehand',
      'Kids love making alfajores (cookies) for dessert',
      'Classes also available in Lima, Arequipa',
      'Morning classes are less crowded',
      'Vegetarian options usually available'
    ],
    tipsEs: [
      'Reserva una clase privada para mejor experiencia familiar',
      'Pregunta por platos aptos para niños de antemano',
      'A los niños les encanta hacer alfajores para postre',
      'Las clases también disponibles en Lima, Arequipa',
      'Las clases matutinas están menos llenas',
      'Opciones vegetarianas usualmente disponibles'
    ],
    safetyNotes: [
      'Sharp knives handled by adults or supervised older children',
      'Hot surfaces clearly marked',
      'Allergies should be communicated in advance'
    ],
    safetyNotesEs: [
      'Cuchillos afilados manejados por adultos o niños mayores supervisados',
      'Superficies calientes claramente marcadas',
      'Las alergias deben comunicarse con anticipación'
    ],
    relatedActivities: ['chocolate-making', 'market-tour', 'pisco-tasting'],
    providers: [
      { name: 'Cusco Culinary', familyFriendly: true },
      { name: 'Marcelo Batata Cooking Class', familyFriendly: true },
      { name: 'Sky Kitchen', familyFriendly: true }
    ]
  },
  {
    slug: 'llama-trekking',
    name: 'Llama Trekking Adventure',
    nameEs: 'Trekking con Llamas',
    type: 'nature',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Trek through the Andean highlands accompanied by friendly llamas who carry your gear. This gentle adventure is perfect for families, combining hiking with animal interaction in stunning scenery.',
    descriptionEs: 'Camina por las tierras altas andinas acompañado de llamas amigables que cargan tu equipo. Esta suave aventura es perfecta para familias, combinando caminata con interacción con animales en paisajes impresionantes.',
    whatToExpect: 'Meet your llama companions and learn how to lead them. Trek through traditional villages, past Inca ruins, and across beautiful Andean landscapes. Enjoy a picnic lunch with spectacular views. Llamas carry all supplies, making the hike easier for families.',
    whatToExpectEs: 'Conoce a tus compañeros llamas y aprende cómo guiarlos. Camina a través de pueblos tradicionales, pasando ruinas incas y a través de hermosos paisajes andinos. Disfruta un almuerzo picnic con vistas espectaculares. Las llamas cargan todos los suministros, haciendo la caminata más fácil para familias.',
    highlights: [
      'Hands-on llama interaction',
      'Scenic Andean trekking',
      'Visit traditional communities',
      'Picnic lunch with mountain views',
      'Learn about llama care',
      'Perfect for Instagram photos!'
    ],
    highlightsEs: [
      'Interacción práctica con llamas',
      'Trekking escénico andino',
      'Visitar comunidades tradicionales',
      'Almuerzo picnic con vistas de montañas',
      'Aprende sobre el cuidado de llamas',
      '¡Perfecto para fotos de Instagram!'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '4-6 hours (half-day), or 1-2 days (overnight)',
    durationEs: '4-6 horas (medio día), o 1-2 días (con noche)',
    difficulty: 'easy',
    priceRange: '$50-150 per person (half-day)',
    priceRangeEs: '$50-150 por persona (medio día)',
    bestTime: 'Dry season (May-October), morning start best',
    bestTimeEs: 'Temporada seca (mayo-octubre), mejor comenzar en la mañana',
    includes: [
      'Llama companions',
      'Experienced guide',
      'Picnic lunch',
      'Transportation from Cusco/Sacred Valley',
      'Rain ponchos if needed'
    ],
    includesEs: [
      'Compañeros llamas',
      'Guía experimentado',
      'Almuerzo picnic',
      'Transporte desde Cusco/Valle Sagrado',
      'Ponchos de lluvia si es necesario'
    ],
    tips: [
      'Llamas are gentle - kids can lead them with supervision',
      'Bring layers - mountain weather changes quickly',
      'Wear sturdy walking shoes',
      'Sunscreen and hat essential at altitude',
      'Take it slow due to altitude',
      'Ask to feed the llamas for extra fun'
    ],
    tipsEs: [
      'Las llamas son gentiles - los niños pueden guiarlas con supervisión',
      'Trae capas - el clima de montaña cambia rápido',
      'Usa zapatos resistentes para caminar',
      'Protector solar y sombrero esenciales en la altitud',
      'Ve despacio por la altitud',
      'Pide alimentar a las llamas para diversión extra'
    ],
    safetyNotes: [
      'Acclimatize to altitude before the trek',
      'Llamas are docile but don\'t approach from behind',
      'Stay on marked trails',
      'Guide carries first aid kit'
    ],
    safetyNotesEs: [
      'Aclimátate a la altitud antes del trekking',
      'Las llamas son dóciles pero no te acerques por detrás',
      'Mantente en senderos marcados',
      'El guía lleva botiquín de primeros auxilios'
    ],
    relatedActivities: ['horseback-riding', 'mountain-biking', 'textile-workshop'],
    providers: [
      { name: 'Llama Pack', familyFriendly: true },
      { name: 'Awamaki', familyFriendly: true }
    ]
  },
  {
    slug: 'chocolate-making',
    name: 'Chocolate Making Workshop',
    nameEs: 'Taller de Elaboración de Chocolate',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover the journey from cacao bean to chocolate bar in this interactive workshop. Peru is one of the world\'s finest cacao producers, and this hands-on experience lets your family create delicious treats.',
    descriptionEs: 'Descubre el viaje desde el grano de cacao hasta la barra de chocolate en este taller interactivo. Perú es uno de los mejores productores de cacao del mundo, y esta experiencia práctica permite a tu familia crear deliciosos dulces.',
    whatToExpect: 'Learn about cacao\'s history in Peru and how chocolate is made. Roast, grind, and temper cacao beans to create your own chocolate bars and truffles. Great hands-on activity for all ages.',
    whatToExpectEs: 'Aprende sobre la historia del cacao en Perú y cómo se hace el chocolate. Tuesta, muele y tempera granos de cacao para crear tus propias barras de chocolate y trufas. Gran actividad práctica para todas las edades.',
    highlights: [
      'Learn cacao\'s Peruvian history',
      'Roast and grind cacao beans',
      'Make your own chocolate bars',
      'Create truffles with fillings',
      'Taste different cacao varieties',
      'Take home your creations'
    ],
    highlightsEs: [
      'Aprende la historia peruana del cacao',
      'Tuesta y muele granos de cacao',
      'Haz tus propias barras de chocolate',
      'Crea trufas con rellenos',
      'Prueba diferentes variedades de cacao',
      'Llévate tus creaciones'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Anytime - great rainy day activity',
    bestTimeEs: 'Cualquier momento - gran actividad para días lluviosos',
    includes: [
      'All materials and ingredients',
      'Chocolate to eat during class',
      'Your creations to take home',
      'Hot chocolate drink',
      'Certificate of completion'
    ],
    includesEs: [
      'Todos los materiales e ingredientes',
      'Chocolate para comer durante la clase',
      'Tus creaciones para llevar',
      'Bebida de chocolate caliente',
      'Certificado de finalización'
    ],
    tips: [
      'Book early - classes fill up',
      'Great activity for rainy days',
      'Perfect for kids of all ages',
      'Ask about special flavors to add',
      'Combines well with cooking class'
    ],
    tipsEs: [
      'Reserva temprano - las clases se llenan',
      'Gran actividad para días lluviosos',
      'Perfecto para niños de todas las edades',
      'Pregunta por sabores especiales para agregar',
      'Combina bien con clase de cocina'
    ],
    safetyNotes: [
      'No nut-free options - contains cacao',
      'Hot liquids used under supervision'
    ],
    safetyNotesEs: [
      'Sin opciones sin frutos secos - contiene cacao',
      'Líquidos calientes usados bajo supervisión'
    ],
    relatedActivities: ['peruvian-cooking-class', 'market-tour', 'coffee-tasting'],
    providers: [
      { name: 'ChocoMuseo Cusco', familyFriendly: true },
      { name: 'Museo del Chocolate', familyFriendly: true }
    ]
  },
  {
    slug: 'river-rafting',
    name: 'Sacred Valley River Rafting',
    nameEs: 'Rafting en el Río del Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Navigate the exciting rapids of the Urubamba River as it flows through the Sacred Valley. With different difficulty levels available, there\'s a perfect rafting adventure for every family.',
    descriptionEs: 'Navega los emocionantes rápidos del Río Urubamba mientras fluye a través del Valle Sagrado. Con diferentes niveles de dificultad disponibles, hay una aventura de rafting perfecta para cada familia.',
    whatToExpect: 'After safety briefing and gear fitting, paddle through Class II-III rapids (family-friendly sections) or Class III-IV (for experienced families). Guides provide all instruction. Enjoy the stunning canyon scenery between rapids.',
    whatToExpectEs: 'Después de la charla de seguridad y ajuste de equipo, rema a través de rápidos Clase II-III (secciones familiares) o Clase III-IV (para familias experimentadas). Los guías proporcionan toda la instrucción. Disfruta el impresionante paisaje del cañón entre rápidos.',
    highlights: [
      'Navigate exciting rapids',
      'Stunning Sacred Valley scenery',
      'Professional guides and safety gear',
      'Family-friendly Class II-III options',
      'Swimming breaks in calm pools',
      'Adventure through Inca heartland'
    ],
    highlightsEs: [
      'Navega rápidos emocionantes',
      'Impresionante paisaje del Valle Sagrado',
      'Guías profesionales y equipo de seguridad',
      'Opciones familiares Clase II-III',
      'Pausas para nadar en pozas tranquilas',
      'Aventura a través del corazón inca'
    ],
    familyRating: 4,
    minAge: 7,
    duration: 'Half-day (3-4 hours) or full day',
    durationEs: 'Medio día (3-4 horas) o día completo',
    difficulty: 'moderate',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'May-October (dry season) for optimal conditions',
    bestTimeEs: 'Mayo-octubre (temporada seca) para condiciones óptimas',
    includes: [
      'All rafting equipment',
      'Professional guides',
      'Safety gear (helmet, life jacket)',
      'Transportation to/from Cusco',
      'Snacks and water'
    ],
    includesEs: [
      'Todo el equipo de rafting',
      'Guías profesionales',
      'Equipo de seguridad (casco, chaleco salvavidas)',
      'Transporte desde/hacia Cusco',
      'Snacks y agua'
    ],
    tips: [
      'Choose Class II-III for families with younger kids',
      'Wear swimsuit under clothes',
      'Bring change of clothes for after',
      'Waterproof camera or GoPro recommended',
      'Dry season offers best conditions',
      'Half-day is sufficient for first-timers'
    ],
    tipsEs: [
      'Elige Clase II-III para familias con niños pequeños',
      'Usa traje de baño bajo la ropa',
      'Trae cambio de ropa para después',
      'Cámara impermeable o GoPro recomendada',
      'Temporada seca ofrece mejores condiciones',
      'Medio día es suficiente para principiantes'
    ],
    safetyNotes: [
      'All participants must be able to swim',
      'Listen to all guide instructions',
      'Age and weight restrictions apply',
      'Medical conditions must be disclosed'
    ],
    safetyNotesEs: [
      'Todos los participantes deben saber nadar',
      'Escucha todas las instrucciones del guía',
      'Aplican restricciones de edad y peso',
      'Las condiciones médicas deben ser reveladas'
    ],
    relatedActivities: ['zip-lining', 'mountain-biking', 'horseback-riding'],
    providers: [
      { name: 'River Explorers', familyFriendly: true },
      { name: 'Cusco Rafting', familyFriendly: true },
      { name: 'Mayuc', familyFriendly: true }
    ]
  },
  {
    slug: 'textile-workshop',
    name: 'Traditional Textile Workshop',
    nameEs: 'Taller de Textiles Tradicionales',
    type: 'cultural',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn the ancient art of Andean textile making from master weavers. Watch natural dyeing demonstrations, try spinning wool, and create your own small weaving to take home.',
    descriptionEs: 'Aprende el antiguo arte de hacer textiles andinos de maestros tejedores. Observa demostraciones de teñido natural, prueba hilar lana y crea tu propio pequeño tejido para llevar.',
    whatToExpect: 'Visit a weaving cooperative where women preserve traditional techniques. Watch demonstrations of natural dyeing using plants, insects (cochineal), and minerals. Try carding, spinning, and basic weaving. Purchase authentic handmade textiles directly from artisans.',
    whatToExpectEs: 'Visita una cooperativa de tejido donde las mujeres preservan técnicas tradicionales. Observa demostraciones de teñido natural usando plantas, insectos (cochinilla) y minerales. Prueba cardar, hilar y tejido básico. Compra textiles auténticos hechos a mano directamente de artesanos.',
    highlights: [
      'Natural dyeing demonstration',
      'Learn spinning and weaving',
      'Support local artisan women',
      'Create your own small weaving',
      'Learn about Andean symbols',
      'Purchase authentic textiles'
    ],
    highlightsEs: [
      'Demostración de teñido natural',
      'Aprende hilado y tejido',
      'Apoya a mujeres artesanas locales',
      'Crea tu propio pequeño tejido',
      'Aprende sobre símbolos andinos',
      'Compra textiles auténticos'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: '$15-40 per person',
    priceRangeEs: '$15-40 por persona',
    bestTime: 'Morning visits best, any day',
    bestTimeEs: 'Las visitas matutinas son mejores, cualquier día',
    includes: [
      'Demonstrations',
      'Hands-on activities',
      'Small weaving to take home',
      'Coca tea',
      'English explanation'
    ],
    includesEs: [
      'Demostraciones',
      'Actividades prácticas',
      'Pequeño tejido para llevar',
      'Té de coca',
      'Explicación en inglés'
    ],
    tips: [
      'Chinchero and Ollantaytambo have excellent cooperatives',
      'Cash needed for textile purchases',
      'Great for kids who like crafts',
      'Ask about the meaning of symbols',
      'Support fair trade - buy directly from weavers',
      'Combines well with Sacred Valley tour'
    ],
    tipsEs: [
      'Chinchero y Ollantaytambo tienen excelentes cooperativas',
      'Se necesita efectivo para compras de textiles',
      'Genial para niños que les gustan las manualidades',
      'Pregunta por el significado de los símbolos',
      'Apoya el comercio justo - compra directamente de tejedores',
      'Combina bien con tour del Valle Sagrado'
    ],
    safetyNotes: [
      'Cochineal dye demonstration is safe but don\'t touch fresh dye'
    ],
    safetyNotesEs: [
      'La demostración de teñido con cochinilla es segura pero no toques el tinte fresco'
    ],
    relatedActivities: ['llama-trekking', 'pottery-workshop', 'market-tour'],
    providers: [
      { name: 'Centro de Textiles Tradicionales', familyFriendly: true },
      { name: 'Awamaki', familyFriendly: true },
      { name: 'Chinchero Weavers', familyFriendly: true }
    ]
  },
  {
    slug: 'kayaking-titicaca',
    name: 'Lake Titicaca Kayaking',
    nameEs: 'Kayak en el Lago Titicaca',
    type: 'adventure',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Paddle across the world\'s highest navigable lake in stable kayaks. Visit floating islands, explore hidden bays, and experience Lake Titicaca from a unique perspective.',
    descriptionEs: 'Rema a través del lago navegable más alto del mundo en kayaks estables. Visita islas flotantes, explora bahías escondidas y experimenta el Lago Titicaca desde una perspectiva única.',
    whatToExpect: 'Guided kayaking tours in stable sit-on-top or tandem kayaks. Paddle to Uros floating islands, explore the lake\'s blue waters, and enjoy incredible mountain views. Options from 2-hour trips to full-day adventures.',
    whatToExpectEs: 'Tours guiados de kayak en kayaks estables sit-on-top o tándem. Rema a las islas flotantes de los Uros, explora las aguas azules del lago y disfruta increíbles vistas de montañas. Opciones desde viajes de 2 horas hasta aventuras de día completo.',
    highlights: [
      'Paddle to Uros floating islands',
      'World\'s highest navigable lake',
      'Stunning mountain reflections',
      'Tandem kayaks for families',
      'Wildlife sightings',
      'Peaceful lake exploration'
    ],
    highlightsEs: [
      'Rema a las islas flotantes de los Uros',
      'Lago navegable más alto del mundo',
      'Impresionantes reflejos de montañas',
      'Kayaks tándem para familias',
      'Avistamiento de vida silvestre',
      'Exploración pacífica del lago'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '2-6 hours',
    durationEs: '2-6 horas',
    difficulty: 'moderate',
    priceRange: '$40-100 per person',
    priceRangeEs: '$40-100 por persona',
    bestTime: 'Mornings for calmest waters, dry season (May-October)',
    bestTimeEs: 'Mañanas para aguas más calmadas, temporada seca (mayo-octubre)',
    includes: [
      'Kayak and paddle',
      'Life jacket',
      'Guide',
      'Snacks and water',
      'Transportation'
    ],
    includesEs: [
      'Kayak y remo',
      'Chaleco salvavidas',
      'Guía',
      'Snacks y agua',
      'Transporte'
    ],
    tips: [
      'Acclimatize for 1-2 days before paddling at altitude',
      'Mornings have calmest waters',
      'Tandem kayaks easier for families',
      'Bring warm, waterproof layers',
      'Sun protection essential - reflection off water',
      'Go slow - altitude makes exertion harder'
    ],
    tipsEs: [
      'Aclimátate por 1-2 días antes de remar en altitud',
      'Las mañanas tienen aguas más calmadas',
      'Los kayaks tándem son más fáciles para familias',
      'Trae capas abrigadas e impermeables',
      'Protección solar esencial - reflejo del agua',
      'Ve despacio - la altitud dificulta el esfuerzo'
    ],
    safetyNotes: [
      'Must be able to swim',
      'Altitude of 3,800m affects exertion',
      'Weather can change quickly',
      'Guide carries safety equipment'
    ],
    safetyNotesEs: [
      'Debes saber nadar',
      'La altitud de 3,800m afecta el esfuerzo',
      'El clima puede cambiar rápidamente',
      'El guía lleva equipo de seguridad'
    ],
    relatedActivities: ['uros-island-visit', 'taquile-hike', 'boat-cruise'],
    providers: [
      { name: 'Titicaca Explorer', familyFriendly: true },
      { name: 'Edgar Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'zip-lining',
    name: 'Sacred Valley Zip Lining',
    nameEs: 'Tirolesa en el Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Soar through the skies above the Sacred Valley on thrilling zip lines. Multiple cables stretch across stunning canyons with incredible views of Inca ruins and Andean mountains.',
    descriptionEs: 'Vuela por los cielos sobre el Valle Sagrado en emocionantes tirolesas. Múltiples cables atraviesan impresionantes cañones con increíbles vistas de ruinas incas y montañas andinas.',
    whatToExpect: 'Zip line courses in the Sacred Valley feature multiple cables of varying lengths. Safety briefing and all gear provided. Fly over canyons and valleys with views of Ollantaytambo ruins and snow-capped mountains. Some courses include via ferrata (climbing).',
    whatToExpectEs: 'Los cursos de tirolesa en el Valle Sagrado presentan múltiples cables de diferentes longitudes. Charla de seguridad y todo el equipo incluido. Vuela sobre cañones y valles con vistas de las ruinas de Ollantaytambo y montañas nevadas. Algunos cursos incluyen vía ferrata (escalada).',
    highlights: [
      'Multiple zip line cables',
      'Views of Inca ruins',
      'Snow-capped mountain panoramas',
      'Professional safety equipment',
      'Some include via ferrata climbing',
      'Photos/video available'
    ],
    highlightsEs: [
      'Múltiples cables de tirolesa',
      'Vistas de ruinas incas',
      'Panoramas de montañas nevadas',
      'Equipo de seguridad profesional',
      'Algunos incluyen escalada vía ferrata',
      'Fotos/video disponibles'
    ],
    familyRating: 4,
    minAge: 7,
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    difficulty: 'moderate',
    priceRange: '$70-150 per person',
    priceRangeEs: '$70-150 por persona',
    bestTime: 'Dry season (May-October) for clearest views',
    bestTimeEs: 'Temporada seca (mayo-octubre) para vistas más claras',
    includes: [
      'All safety equipment',
      'Professional guides',
      'Safety briefing',
      'Transportation from Cusco',
      'Snacks'
    ],
    includesEs: [
      'Todo el equipo de seguridad',
      'Guías profesionales',
      'Charla de seguridad',
      'Transporte desde Cusco',
      'Snacks'
    ],
    tips: [
      'Weight limits typically 30-115kg',
      'Wear closed-toe shoes',
      'Secure loose items',
      'Bring camera with strap',
      'Book photo package for memories',
      'Morning has best lighting for photos'
    ],
    tipsEs: [
      'Límites de peso típicamente 30-115kg',
      'Usa zapatos cerrados',
      'Asegura objetos sueltos',
      'Trae cámara con correa',
      'Reserva paquete de fotos para recuerdos',
      'La mañana tiene mejor iluminación para fotos'
    ],
    safetyNotes: [
      'Height and weight restrictions apply',
      'Not recommended during storms',
      'Heart conditions or pregnancy prohibit participation',
      'All equipment double-checked'
    ],
    safetyNotesEs: [
      'Aplican restricciones de altura y peso',
      'No recomendado durante tormentas',
      'Condiciones cardíacas o embarazo prohíben participación',
      'Todo el equipo verificado dos veces'
    ],
    relatedActivities: ['river-rafting', 'mountain-biking', 'atv-tour'],
    providers: [
      { name: 'Natura Vive', familyFriendly: true },
      { name: 'Cola de Mono', familyFriendly: true }
    ]
  },
  {
    slug: 'hot-springs-visit',
    name: 'Andean Hot Springs',
    nameEs: 'Aguas Termales Andinas',
    type: 'relaxation',
    city: 'aguas-calientes',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Soak in natural hot springs surrounded by Andean peaks. After hiking Machu Picchu or exploring the highlands, there\'s no better way to relax tired muscles than these thermal pools.',
    descriptionEs: 'Remójate en aguas termales naturales rodeado de picos andinos. Después de caminar por Machu Picchu o explorar las tierras altas, no hay mejor manera de relajar los músculos cansados que estas piscinas termales.',
    whatToExpect: 'Multiple thermal pools at different temperatures fed by natural hot springs. Basic facilities include changing rooms and lockers. Stunning mountain views while you soak. Popular spots include Aguas Calientes (near Machu Picchu), Colca Canyon, and Lares.',
    whatToExpectEs: 'Múltiples piscinas termales a diferentes temperaturas alimentadas por fuentes termales naturales. Las instalaciones básicas incluyen vestidores y casilleros. Impresionantes vistas de montañas mientras te remojas. Los lugares populares incluyen Aguas Calientes (cerca de Machu Picchu), Cañón del Colca y Lares.',
    highlights: [
      'Natural thermal waters',
      'Multiple temperature pools',
      'Stunning mountain views',
      'Perfect post-hike relaxation',
      'Mineral-rich waters',
      'Great for all ages'
    ],
    highlightsEs: [
      'Aguas termales naturales',
      'Múltiples piscinas a diferentes temperaturas',
      'Impresionantes vistas de montañas',
      'Perfecta relajación post-caminata',
      'Aguas ricas en minerales',
      'Genial para todas las edades'
    ],
    familyRating: 5,
    minAge: 0,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    priceRange: '$5-20 entrance',
    priceRangeEs: '$5-20 entrada',
    bestTime: 'Early morning or evening for fewer crowds',
    bestTimeEs: 'Temprano en la mañana o tarde para menos gente',
    includes: [
      'Access to all pools',
      'Changing rooms',
      'Lockers (usually extra)'
    ],
    includesEs: [
      'Acceso a todas las piscinas',
      'Vestidores',
      'Casilleros (usualmente extra)'
    ],
    tips: [
      'Bring swimsuit, towel, and flip-flops',
      'Start in cooler pools, work up to hot',
      'Avoid if children have fever',
      'Evening visits after Machu Picchu are magical',
      'Aguas Calientes pools can get crowded',
      'Colca hot springs are more natural setting'
    ],
    tipsEs: [
      'Trae traje de baño, toalla y sandalias',
      'Empieza en piscinas más frías, avanza a calientes',
      'Evita si los niños tienen fiebre',
      'Las visitas nocturnas después de Machu Picchu son mágicas',
      'Las piscinas de Aguas Calientes pueden llenarse',
      'Las aguas termales de Colca son un entorno más natural'
    ],
    safetyNotes: [
      'Supervise children closely',
      'Hot pools may be too hot for young children',
      'Stay hydrated',
      'Limit time in very hot pools'
    ],
    safetyNotesEs: [
      'Supervisa a los niños de cerca',
      'Las piscinas calientes pueden ser muy calientes para niños pequeños',
      'Mantente hidratado',
      'Limita el tiempo en piscinas muy calientes'
    ],
    relatedActivities: ['machu-picchu-tour', 'colca-canyon-tour', 'spa-treatment'],
    providers: [
      { name: 'Aguas Calientes Hot Springs', familyFriendly: true },
      { name: 'La Calera Hot Springs (Colca)', familyFriendly: true },
      { name: 'Cocalmayo Hot Springs', familyFriendly: true }
    ]
  },
  {
    slug: 'planetarium-cusco',
    name: 'Cusco Planetarium Experience',
    nameEs: 'Experiencia del Planetario Cusco',
    type: 'educational',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the night sky and learn about ancient Inca astronomy at Cusco\'s planetarium. The clear, high-altitude skies make this an unforgettable stargazing experience for the whole family.',
    descriptionEs: 'Explora el cielo nocturno y aprende sobre la astronomía inca antigua en el planetario de Cusco. Los cielos claros de gran altitud hacen de esta una experiencia de observación de estrellas inolvidable para toda la familia.',
    whatToExpect: 'Evening sessions include an indoor presentation about Inca astronomy and constellation mythology, followed by outdoor telescope observation. Guides point out Southern Hemisphere constellations, planets, and the Milky Way.',
    whatToExpectEs: 'Las sesiones nocturnas incluyen una presentación interior sobre astronomía inca y mitología de constelaciones, seguida de observación al aire libre con telescopio. Los guías señalan constelaciones del hemisferio sur, planetas y la Vía Láctea.',
    highlights: [
      'Learn Inca astronomy',
      'Telescope observation',
      'Southern Cross constellation',
      'Milky Way viewing',
      'Interactive presentation',
      'Clear high-altitude skies'
    ],
    highlightsEs: [
      'Aprende astronomía inca',
      'Observación con telescopio',
      'Constelación Cruz del Sur',
      'Vista de la Vía Láctea',
      'Presentación interactiva',
      'Cielos claros de gran altitud'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'easy',
    priceRange: '$25-40 per person',
    priceRangeEs: '$25-40 por persona',
    bestTime: 'Clear nights, new moon best for stargazing',
    bestTimeEs: 'Noches despejadas, luna nueva mejor para observar estrellas',
    includes: [
      'Presentation',
      'Telescope use',
      'Hot drinks',
      'Blankets',
      'Transportation from Cusco center'
    ],
    includesEs: [
      'Presentación',
      'Uso de telescopio',
      'Bebidas calientes',
      'Mantas',
      'Transporte desde el centro de Cusco'
    ],
    tips: [
      'Book for a clear night if possible',
      'Dress very warmly - it\'s cold after dark',
      'New moon offers best stargazing',
      'Ask about the Inca dark constellations',
      'Kids love seeing Saturn\'s rings',
      'Great early evening activity'
    ],
    tipsEs: [
      'Reserva para una noche despejada si es posible',
      'Vístete muy abrigado - hace frío después del anochecer',
      'Luna nueva ofrece mejor observación de estrellas',
      'Pregunta sobre las constelaciones oscuras incas',
      'A los niños les encanta ver los anillos de Saturno',
      'Gran actividad para la tarde temprana'
    ],
    safetyNotes: [
      'Bring warm clothing',
      'Watch footing on uneven ground at night'
    ],
    safetyNotesEs: [
      'Trae ropa abrigada',
      'Cuidado al caminar en terreno irregular de noche'
    ],
    relatedActivities: ['night-tour', 'museum-visit'],
    providers: [
      { name: 'Planetarium Cusco', familyFriendly: true }
    ]
  },
  {
    slug: 'mountain-biking',
    name: 'Sacred Valley Mountain Biking',
    nameEs: 'Bicicleta de Montaña en el Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Coast downhill through the stunning Sacred Valley on well-maintained mountain bikes. With routes for all skill levels, from gentle descents to technical single-track, there\'s an adventure for every family.',
    descriptionEs: 'Desciende por el impresionante Valle Sagrado en bicicletas de montaña bien mantenidas. Con rutas para todos los niveles de habilidad, desde descensos suaves hasta single-track técnicos, hay una aventura para cada familia.',
    whatToExpect: 'Most tours start with transport to high elevation, then coast downhill through villages, past ruins, and across farmland. Bikes, helmets, and guides provided. Routes from 20-60km with varying difficulty. Lunch at local restaurants included.',
    whatToExpectEs: 'La mayoría de los tours comienzan con transporte a gran altitud, luego descienden por pueblos, pasando ruinas y a través de tierras de cultivo. Se proporcionan bicicletas, cascos y guías. Rutas de 20-60km con dificultad variable. Almuerzo en restaurantes locales incluido.',
    highlights: [
      'Mostly downhill routes',
      'Stunning valley views',
      'Pass traditional villages',
      'See Inca ruins en route',
      'Quality mountain bikes',
      'Family-friendly routes available'
    ],
    highlightsEs: [
      'Rutas mayormente cuesta abajo',
      'Impresionantes vistas del valle',
      'Pasa por pueblos tradicionales',
      'Ve ruinas incas en el camino',
      'Bicicletas de montaña de calidad',
      'Rutas familiares disponibles'
    ],
    familyRating: 4,
    minAge: 8,
    duration: 'Half day to full day',
    durationEs: 'Medio día a día completo',
    difficulty: 'moderate',
    priceRange: '$60-120 per person',
    priceRangeEs: '$60-120 por persona',
    bestTime: 'Dry season (May-October)',
    bestTimeEs: 'Temporada seca (mayo-octubre)',
    includes: [
      'Mountain bike and helmet',
      'Gloves',
      'Professional guide',
      'Vehicle support',
      'Lunch',
      'Transportation'
    ],
    includesEs: [
      'Bicicleta de montaña y casco',
      'Guantes',
      'Guía profesional',
      'Vehículo de apoyo',
      'Almuerzo',
      'Transporte'
    ],
    tips: [
      'Request family-friendly route',
      'Kids bikes and tag-alongs available',
      'Maras-Moray route is scenic and easier',
      'Wear padded shorts for comfort',
      'Bring sunglasses for dust',
      'Altitude makes cycling harder - go slow'
    ],
    tipsEs: [
      'Solicita ruta familiar',
      'Bicicletas para niños y tag-alongs disponibles',
      'La ruta Maras-Moray es escénica y más fácil',
      'Usa shorts acolchados para comodidad',
      'Trae gafas de sol para el polvo',
      'La altitud hace el ciclismo más difícil - ve despacio'
    ],
    safetyNotes: [
      'Helmets mandatory',
      'Prior cycling experience recommended',
      'Support vehicle follows group',
      'First aid kit with guide'
    ],
    safetyNotesEs: [
      'Cascos obligatorios',
      'Experiencia previa en ciclismo recomendada',
      'Vehículo de apoyo sigue al grupo',
      'Botiquín de primeros auxilios con el guía'
    ],
    relatedActivities: ['zip-lining', 'river-rafting', 'horseback-riding'],
    providers: [
      { name: 'Peru Bike', familyFriendly: true },
      { name: 'Gravity Peru', familyFriendly: true },
      { name: 'Sacred Valley Biking', familyFriendly: true }
    ]
  },
  {
    slug: 'surfing-lesson',
    name: 'Lima Surfing Lesson',
    nameEs: 'Clase de Surf en Lima',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Catch your first waves on the consistent breaks of Lima\'s Miraflores coast. Peru\'s surf scene is world-class, and beginners of all ages can learn on the gentle waves of Waikiki and La Pampilla beaches.',
    descriptionEs: 'Atrapa tus primeras olas en las consistentes rompientes de la costa de Miraflores en Lima. La escena de surf de Perú es de clase mundial, y principiantes de todas las edades pueden aprender en las suaves olas de las playas Waikiki y La Pampilla.',
    whatToExpect: 'Beginner lessons start with beach instruction covering safety, paddling, and standing technique. Then head into the water with patient instructors who help you catch waves. Wetsuits provided as the Pacific is cool. Most people stand up by their first lesson!',
    whatToExpectEs: 'Las clases para principiantes comienzan con instrucción en la playa cubriendo seguridad, remo y técnica para pararse. Luego entra al agua con instructores pacientes que te ayudan a atrapar olas. Se proporcionan trajes de neopreno ya que el Pacífico es fresco. ¡La mayoría de la gente se para en su primera clase!',
    highlights: [
      'Learn on gentle beginner waves',
      'Patient bilingual instructors',
      'Wetsuit and board included',
      'Stunning Miraflores cliff backdrop',
      'Great for ages 6+',
      'Photos available'
    ],
    highlightsEs: [
      'Aprende en olas suaves para principiantes',
      'Instructores bilingües pacientes',
      'Traje de neopreno y tabla incluidos',
      'Impresionante telón de fondo de acantilados de Miraflores',
      'Genial para mayores de 6 años',
      'Fotos disponibles'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'moderate',
    priceRange: '$40-70 per person',
    priceRangeEs: '$40-70 por persona',
    bestTime: 'Year-round, best waves January-March',
    bestTimeEs: 'Todo el año, mejores olas enero-marzo',
    includes: [
      'Surfboard',
      'Wetsuit',
      'Professional instructor',
      'Beach equipment'
    ],
    includesEs: [
      'Tabla de surf',
      'Traje de neopreno',
      'Instructor profesional',
      'Equipo de playa'
    ],
    tips: [
      'Book early morning for smaller crowds',
      'Eat light before lesson',
      'Bring sunscreen and towel',
      'Waikiki beach best for beginners',
      'Water is cold - wetsuit essential',
      'Ask about family discounts'
    ],
    tipsEs: [
      'Reserva temprano en la mañana para menos gente',
      'Come ligero antes de la clase',
      'Trae protector solar y toalla',
      'Playa Waikiki mejor para principiantes',
      'El agua es fría - traje de neopreno esencial',
      'Pregunta por descuentos familiares'
    ],
    safetyNotes: [
      'Strong swimmers only',
      'Currents can be strong',
      'Stay with instructor at all times',
      'Know your limits'
    ],
    safetyNotesEs: [
      'Solo nadadores fuertes',
      'Las corrientes pueden ser fuertes',
      'Mantente con el instructor en todo momento',
      'Conoce tus límites'
    ],
    relatedActivities: ['paragliding-miraflores', 'stand-up-paddling'],
    providers: [
      { name: 'Pukana Surf School', familyFriendly: true },
      { name: 'Larcomar Surf', familyFriendly: true },
      { name: 'Waikiki Surf School', familyFriendly: true }
    ]
  },
  {
    slug: 'paragliding-miraflores',
    name: 'Miraflores Paragliding',
    nameEs: 'Parapente en Miraflores',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Soar above Lima\'s spectacular coastline in a tandem paragliding flight. Take off from the cliffs of Miraflores and glide over the Pacific Ocean with breathtaking views of the city.',
    descriptionEs: 'Vuela sobre la espectacular costa de Lima en un vuelo de parapente tándem. Despega desde los acantilados de Miraflores y planea sobre el Océano Pacífico con vistas impresionantes de la ciudad.',
    whatToExpect: 'Meet your certified pilot at the launch point on the Miraflores cliffs. Brief safety instruction, then run toward the edge and lift off! Fly for 10-15 minutes over the ocean and beaches. Some pilots perform gentle acrobatics if requested. Land softly on the beach.',
    whatToExpectEs: 'Conoce a tu piloto certificado en el punto de lanzamiento en los acantilados de Miraflores. Breve instrucción de seguridad, luego corre hacia el borde y despega. Vuela por 10-15 minutos sobre el océano y las playas. Algunos pilotos realizan acrobacias suaves si se solicita. Aterriza suavemente en la playa.',
    highlights: [
      'No experience needed - tandem flight',
      'Spectacular Pacific Ocean views',
      'See Lima\'s coastline from above',
      'Professional certified pilots',
      'GoPro footage included with most',
      'Safe and thrilling experience'
    ],
    highlightsEs: [
      'Sin experiencia necesaria - vuelo tándem',
      'Espectaculares vistas del Océano Pacífico',
      'Ve la costa de Lima desde arriba',
      'Pilotos profesionales certificados',
      'Video GoPro incluido con la mayoría',
      'Experiencia segura y emocionante'
    ],
    familyRating: 4,
    minAge: 8,
    maxAge: 70,
    duration: '10-15 minutes flight (1 hour total)',
    durationEs: '10-15 minutos de vuelo (1 hora total)',
    difficulty: 'easy',
    priceRange: '$70-100 per person',
    priceRangeEs: '$70-100 por persona',
    bestTime: 'Year-round, afternoons have best thermals',
    bestTimeEs: 'Todo el año, las tardes tienen mejores térmicas',
    includes: [
      'Tandem flight with certified pilot',
      'All equipment',
      'Safety briefing',
      'Photos/video (most operators)'
    ],
    includesEs: [
      'Vuelo tándem con piloto certificado',
      'Todo el equipo',
      'Charla de seguridad',
      'Fotos/video (la mayoría de operadores)'
    ],
    tips: [
      'Wear closed shoes and comfortable clothes',
      'No loose items - secure everything',
      'Not recommended after heavy meals',
      'Ask for gentle flight if nervous',
      'Morning flights have less wind',
      'Perfect Instagram opportunity!'
    ],
    tipsEs: [
      'Usa zapatos cerrados y ropa cómoda',
      'Sin objetos sueltos - asegura todo',
      'No recomendado después de comidas pesadas',
      'Pide vuelo suave si estás nervioso',
      'Los vuelos matutinos tienen menos viento',
      '¡Perfecta oportunidad para Instagram!'
    ],
    safetyNotes: [
      'Weight limits: 30-100kg typical',
      'Not for pregnant women',
      'Heart conditions prohibit participation',
      'Weather dependent - may reschedule'
    ],
    safetyNotesEs: [
      'Límites de peso: 30-100kg típico',
      'No para mujeres embarazadas',
      'Condiciones cardíacas prohíben participación',
      'Dependiente del clima - puede reprogramarse'
    ],
    relatedActivities: ['surfing-lesson', 'biking-lima'],
    providers: [
      { name: 'Peru Fly', familyFriendly: true },
      { name: 'Aeroxtreme', familyFriendly: true }
    ]
  },
  {
    slug: 'bird-watching-tour',
    name: 'Bird Watching Tour',
    nameEs: 'Tour de Observación de Aves',
    type: 'nature',
    city: 'tambopata',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Peru is one of the world\'s top birding destinations with over 1,800 species. From macaw clay licks to cloud forest hummingbirds, discover incredible avian diversity with expert guides.',
    descriptionEs: 'Perú es uno de los principales destinos de observación de aves del mundo con más de 1,800 especies. Desde collpas de guacamayos hasta colibríes del bosque nublado, descubre increíble diversidad aviar con guías expertos.',
    whatToExpect: 'Early morning departures to catch peak bird activity. Expert guides with spotting scopes identify species by sight and call. Visit clay licks at dawn to see hundreds of parrots and macaws. Canopy towers provide unique perspectives. Kid-friendly guides make it engaging for young birders.',
    whatToExpectEs: 'Salidas temprano en la mañana para captar la actividad máxima de aves. Guías expertos con telescopios identifican especies por vista y canto. Visita collpas al amanecer para ver cientos de loros y guacamayos. Las torres de dosel proporcionan perspectivas únicas. Los guías amigables con niños lo hacen atractivo para jóvenes observadores.',
    highlights: [
      'Macaw and parrot clay licks',
      'Over 500 species in Manu/Tambopata',
      'Expert birding guides',
      'Canopy tower observations',
      'Hummingbird feeders',
      'Photo opportunities'
    ],
    highlightsEs: [
      'Collpas de guacamayos y loros',
      'Más de 500 especies en Manu/Tambopata',
      'Guías expertos en aves',
      'Observaciones desde torres de dosel',
      'Bebederos de colibríes',
      'Oportunidades fotográficas'
    ],
    familyRating: 4,
    minAge: 6,
    duration: 'Half-day to multi-day',
    durationEs: 'Medio día a varios días',
    difficulty: 'easy',
    priceRange: '$50-200 per person/day',
    priceRangeEs: '$50-200 por persona/día',
    bestTime: 'Year-round, dry season (May-October) best',
    bestTimeEs: 'Todo el año, temporada seca (mayo-octubre) mejor',
    includes: [
      'Expert birding guide',
      'Spotting scope use',
      'Bird checklist',
      'Transportation',
      'Breakfast/snacks (full-day tours)'
    ],
    includesEs: [
      'Guía experto en aves',
      'Uso de telescopio',
      'Lista de verificación de aves',
      'Transporte',
      'Desayuno/snacks (tours de día completo)'
    ],
    tips: [
      'Bring binoculars (or ask to borrow)',
      'Wear neutral colors - no bright clothing',
      'Wake early - 5am departures common',
      'Silence is key for spotting',
      'Kids love the clay lick spectacle',
      'Download eBird app to record sightings'
    ],
    tipsEs: [
      'Trae binoculares (o pide prestados)',
      'Usa colores neutros - sin ropa brillante',
      'Despierta temprano - salidas a las 5am comunes',
      'El silencio es clave para avistar',
      'A los niños les encanta el espectáculo de la collpa',
      'Descarga la app eBird para registrar avistamientos'
    ],
    safetyNotes: [
      'Stay on trails',
      'Follow guide instructions',
      'Use insect repellent',
      'Bring water and sun protection'
    ],
    safetyNotesEs: [
      'Mantente en los senderos',
      'Sigue las instrucciones del guía',
      'Usa repelente de insectos',
      'Trae agua y protección solar'
    ],
    relatedActivities: ['amazon-jungle-tour', 'wildlife-photography'],
    providers: [
      { name: 'Rainforest Expeditions', familyFriendly: true },
      { name: 'Manu Wildlife Center', familyFriendly: true },
      { name: 'Kolibri Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'pisco-vineyard-tour',
    name: 'Pisco & Vineyard Tour',
    nameEs: 'Tour de Pisco y Viñedos',
    type: 'culinary',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Discover Peru\'s national drink in the heart of pisco country. Tour vineyards, learn the distillation process, and taste artisanal piscos and wines in the sunny Ica valley.',
    descriptionEs: 'Descubre la bebida nacional de Perú en el corazón del país del pisco. Recorre viñedos, aprende el proceso de destilación y degusta piscos y vinos artesanales en el soleado valle de Ica.',
    whatToExpect: 'Visit traditional haciendas and modern wineries in the Ica valley. Tour grape fields and distilleries. Watch the pisco-making process from grape to bottle. Adults enjoy tastings while kids get fresh grape juice and sometimes chocolate. Many haciendas have gardens and animals for children to explore.',
    whatToExpectEs: 'Visita haciendas tradicionales y bodegas modernas en el valle de Ica. Recorre campos de uva y destilerías. Observa el proceso de elaboración del pisco desde la uva hasta la botella. Los adultos disfrutan degustaciones mientras los niños obtienen jugo de uva fresco y a veces chocolate. Muchas haciendas tienen jardines y animales para que los niños exploren.',
    highlights: [
      'Tour historic haciendas',
      'See the distillation process',
      'Taste premium piscos and wines',
      'Kids get grape juice and treats',
      'Beautiful vineyard scenery',
      'Learn pisco cocktail making'
    ],
    highlightsEs: [
      'Recorre haciendas históricas',
      'Ve el proceso de destilación',
      'Degusta piscos y vinos premium',
      'Los niños obtienen jugo de uva y dulces',
      'Hermoso paisaje de viñedos',
      'Aprende a hacer cócteles de pisco'
    ],
    familyRating: 3,
    minAge: 0,
    duration: 'Half-day (4-5 hours)',
    durationEs: 'Medio día (4-5 horas)',
    difficulty: 'easy',
    priceRange: '$30-60 per person',
    priceRangeEs: '$30-60 por persona',
    bestTime: 'March-April for harvest season, year-round otherwise',
    bestTimeEs: 'Marzo-abril para temporada de cosecha, todo el año de lo contrario',
    includes: [
      'Transportation',
      'Guided tours of 2-3 wineries',
      'Tastings for adults',
      'Juice for children',
      'Pisco sour demonstration'
    ],
    includesEs: [
      'Transporte',
      'Tours guiados de 2-3 bodegas',
      'Degustaciones para adultos',
      'Jugo para niños',
      'Demostración de pisco sour'
    ],
    tips: [
      'Combine with Huacachina visit',
      'Harvest season (March) is most interesting',
      'Designated driver tours available',
      'Buy directly from haciendas for best prices',
      'Tacama and Vista Alegre are family favorites',
      'Bring cash for purchases'
    ],
    tipsEs: [
      'Combina con visita a Huacachina',
      'La temporada de cosecha (marzo) es más interesante',
      'Tours con conductor designado disponibles',
      'Compra directamente de haciendas para mejores precios',
      'Tacama y Vista Alegre son favoritos familiares',
      'Trae efectivo para compras'
    ],
    safetyNotes: [
      'Drink responsibly',
      'Designated driver essential',
      'Stay hydrated in the heat',
      'Keep children supervised around equipment'
    ],
    safetyNotesEs: [
      'Bebe responsablemente',
      'Conductor designado esencial',
      'Mantente hidratado en el calor',
      'Mantén a los niños supervisados cerca del equipo'
    ],
    relatedActivities: ['sandboarding-huacachina', 'peruvian-cooking-class'],
    providers: [
      { name: 'Tacama Winery', familyFriendly: true },
      { name: 'Vista Alegre', familyFriendly: true },
      { name: 'El Catador', familyFriendly: true }
    ]
  },
  {
    slug: 'coffee-farm-tour',
    name: 'Coffee Farm Experience',
    nameEs: 'Experiencia en Finca de Café',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover Peru\'s world-class coffee from bean to cup on a jungle coffee farm tour. Learn about sustainable farming, pick your own beans, and taste the freshest coffee possible.',
    descriptionEs: 'Descubre el café de clase mundial de Perú desde el grano hasta la taza en un tour por una finca de café en la selva. Aprende sobre agricultura sostenible, cosecha tus propios granos y prueba el café más fresco posible.',
    whatToExpect: 'Travel to the cloud forest coffee zone (Quillabamba or Villa Rica). Tour family-owned farms, learn about organic cultivation, pick ripe cherries, and participate in processing. Roast and grind your beans, then taste the results. Kids enjoy the farm animals and chocolate-making often included.',
    whatToExpectEs: 'Viaja a la zona cafetera del bosque nublado (Quillabamba o Villa Rica). Recorre fincas familiares, aprende sobre cultivo orgánico, cosecha cerezas maduras y participa en el procesamiento. Tuesta y muele tus granos, luego prueba los resultados. Los niños disfrutan los animales de la granja y la elaboración de chocolate a menudo incluida.',
    highlights: [
      'Bean-to-cup experience',
      'Pick coffee cherries',
      'Learn roasting and grinding',
      'Support local farmers',
      'Beautiful cloud forest setting',
      'Often combined with chocolate'
    ],
    highlightsEs: [
      'Experiencia del grano a la taza',
      'Cosecha cerezas de café',
      'Aprende tostado y molienda',
      'Apoya a agricultores locales',
      'Hermoso entorno de bosque nublado',
      'A menudo combinado con chocolate'
    ],
    familyRating: 4,
    minAge: 5,
    duration: 'Full day or 2-day trip',
    durationEs: 'Día completo o viaje de 2 días',
    difficulty: 'easy',
    priceRange: '$80-150 per person',
    priceRangeEs: '$80-150 por persona',
    bestTime: 'Harvest season May-September',
    bestTimeEs: 'Temporada de cosecha mayo-septiembre',
    includes: [
      'Transportation from Cusco',
      'Farm tour and activities',
      'Coffee tasting',
      'Lunch',
      'Bag of fresh coffee to take home'
    ],
    includesEs: [
      'Transporte desde Cusco',
      'Tour de la finca y actividades',
      'Degustación de café',
      'Almuerzo',
      'Bolsa de café fresco para llevar'
    ],
    tips: [
      'Harvest season offers best experience',
      'Book day trip or overnight for full experience',
      'Villa Rica is Peru\'s coffee capital',
      'Hot chocolate option for kids',
      'Buy direct from farmers for fair prices',
      'Bring camera for scenic farm photos'
    ],
    tipsEs: [
      'La temporada de cosecha ofrece mejor experiencia',
      'Reserva día completo o con noche para experiencia completa',
      'Villa Rica es la capital cafetera de Perú',
      'Opción de chocolate caliente para niños',
      'Compra directo de agricultores por precios justos',
      'Trae cámara para fotos escénicas de la finca'
    ],
    safetyNotes: [
      'Wear closed shoes for farm walking',
      'Jungle insects - bring repellent',
      'Sun protection needed'
    ],
    safetyNotesEs: [
      'Usa zapatos cerrados para caminar en la finca',
      'Insectos de la selva - trae repelente',
      'Se necesita protección solar'
    ],
    relatedActivities: ['chocolate-making', 'amazon-jungle-tour'],
    providers: [
      { name: 'Sacred Valley Coffee Tours', familyFriendly: true },
      { name: 'Villa Rica Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'larco-museum-visit',
    name: 'Larco Museum Visit',
    nameEs: 'Visita al Museo Larco',
    type: 'educational',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Explore 5,000 years of Peruvian history at this world-renowned museum. The stunning collection of pre-Columbian art, beautiful gardens, and family-friendly activities make it Lima\'s best museum for families.',
    descriptionEs: 'Explora 5,000 años de historia peruana en este museo de renombre mundial. La impresionante colección de arte precolombino, hermosos jardines y actividades familiares lo convierten en el mejor museo de Lima para familias.',
    whatToExpect: 'Tour the chronological galleries showcasing Peru\'s ancient civilizations. See gold and silver treasures, intricate textiles, and the famous erotic pottery (optional gallery). Kids love the visible storage rooms with thousands of artifacts. Beautiful gardens perfect for photos and the on-site restaurant serves excellent food.',
    whatToExpectEs: 'Recorre las galerías cronológicas que muestran las civilizaciones antiguas de Perú. Ve tesoros de oro y plata, textiles intrincados y la famosa cerámica erótica (galería opcional). A los niños les encantan las salas de almacenamiento visibles con miles de artefactos. Hermosos jardines perfectos para fotos y el restaurante en el lugar sirve excelente comida.',
    highlights: [
      'World-class pre-Columbian collection',
      'Gold and silver galleries',
      'Visible storage with 45,000+ pieces',
      'Beautiful colonial gardens',
      'Kid-friendly exhibits',
      'Excellent museum restaurant'
    ],
    highlightsEs: [
      'Colección precolombina de clase mundial',
      'Galerías de oro y plata',
      'Almacenamiento visible con 45,000+ piezas',
      'Hermosos jardines coloniales',
      'Exhibiciones amigables para niños',
      'Excelente restaurante del museo'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$30 adults, children discounted',
    priceRangeEs: '$30 adultos, niños con descuento',
    bestTime: 'Morning for fewer crowds, or night tours available',
    bestTimeEs: 'Mañana para menos gente, o tours nocturnos disponibles',
    includes: [
      'Museum entry',
      'Audio guide available (extra)',
      'Garden access'
    ],
    includesEs: [
      'Entrada al museo',
      'Audioguía disponible (extra)',
      'Acceso al jardín'
    ],
    tips: [
      'Allow 2-3 hours minimum',
      'Reserve restaurant for lunch',
      'Night tours are magical',
      'Skip erotic gallery with young kids',
      'Audio guides help kids engage',
      'Gift shop has quality souvenirs'
    ],
    tipsEs: [
      'Permite 2-3 horas mínimo',
      'Reserva restaurante para almuerzo',
      'Los tours nocturnos son mágicos',
      'Omite la galería erótica con niños pequeños',
      'Las audioguías ayudan a los niños a interactuar',
      'La tienda tiene souvenirs de calidad'
    ],
    safetyNotes: [
      'No touching artifacts',
      'Stay with your group',
      'Photo policy varies by section'
    ],
    safetyNotesEs: [
      'No tocar artefactos',
      'Mantente con tu grupo',
      'La política de fotos varía por sección'
    ],
    relatedActivities: ['gold-museum-visit', 'lima-city-tour'],
    providers: [
      { name: 'Museo Larco', website: 'https://www.museolarco.org', familyFriendly: true }
    ]
  },
  {
    slug: 'market-tour-lima',
    name: 'Lima Market Tour',
    nameEs: 'Tour de Mercados de Lima',
    type: 'culinary',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Dive into Lima\'s vibrant food culture at bustling local markets. Taste exotic fruits, discover native ingredients, and learn how locals shop and eat at markets like Surquillo and San Isidro.',
    descriptionEs: 'Sumérgete en la vibrante cultura gastronómica de Lima en bulliciosos mercados locales. Prueba frutas exóticas, descubre ingredientes nativos y aprende cómo los locales compran y comen en mercados como Surquillo y San Isidro.',
    whatToExpect: 'Guided walking tours through authentic neighborhood markets. Sample unusual fruits (lucuma, cherimoya, camu camu), taste fresh ceviche, try anticuchos (beef heart skewers), and discover ingredients unique to Peru. Guides explain everything and help with vendor interactions. Great for adventurous eaters of all ages.',
    whatToExpectEs: 'Tours guiados a pie por mercados auténticos de barrio. Prueba frutas inusuales (lúcuma, chirimoya, camu camu), degusta ceviche fresco, prueba anticuchos y descubre ingredientes únicos de Perú. Los guías explican todo y ayudan con las interacciones con vendedores. Genial para comedores aventureros de todas las edades.',
    highlights: [
      'Taste 10+ Peruvian fruits',
      'Sample fresh ceviche',
      'Discover native superfoods',
      'Meet local vendors',
      'Learn about Peruvian cuisine',
      'Great food photography'
    ],
    highlightsEs: [
      'Prueba más de 10 frutas peruanas',
      'Degusta ceviche fresco',
      'Descubre superalimentos nativos',
      'Conoce vendedores locales',
      'Aprende sobre cocina peruana',
      'Gran fotografía de comida'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'Morning when markets are busiest and freshest',
    bestTimeEs: 'Mañana cuando los mercados están más llenos y frescos',
    includes: [
      'Bilingual guide',
      'All tastings',
      'Market navigation',
      'Recipe suggestions'
    ],
    includesEs: [
      'Guía bilingüe',
      'Todas las degustaciones',
      'Navegación del mercado',
      'Sugerencias de recetas'
    ],
    tips: [
      'Come hungry!',
      'Bring cash for purchases',
      'Morning tours are best',
      'Ask kids to try one new thing',
      'Surquillo market is most authentic',
      'Combines well with cooking class'
    ],
    tipsEs: [
      '¡Ven con hambre!',
      'Trae efectivo para compras',
      'Los tours matutinos son mejores',
      'Pide a los niños que prueben algo nuevo',
      'El mercado de Surquillo es más auténtico',
      'Combina bien con clase de cocina'
    ],
    safetyNotes: [
      'Watch belongings in crowds',
      'Eat only cooked or peeled foods',
      'Stay with your guide',
      'Allergies should be communicated beforehand'
    ],
    safetyNotesEs: [
      'Cuida tus pertenencias en las multitudes',
      'Come solo alimentos cocidos o pelados',
      'Mantente con tu guía',
      'Las alergias deben comunicarse de antemano'
    ],
    relatedActivities: ['peruvian-cooking-class', 'lima-food-tour'],
    providers: [
      { name: 'Lima Gourmet Company', familyFriendly: true },
      { name: 'Haku Tours', familyFriendly: true },
      { name: 'Urban Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'pottery-workshop',
    name: 'Traditional Pottery Workshop',
    nameEs: 'Taller de Cerámica Tradicional',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn the ancient art of Andean pottery from master artisans. Create your own ceramic piece using traditional techniques passed down through generations in communities like Quinua and Racchi.',
    descriptionEs: 'Aprende el antiguo arte de la cerámica andina de maestros artesanos. Crea tu propia pieza de cerámica usando técnicas tradicionales transmitidas por generaciones en comunidades como Quinua y Racchi.',
    whatToExpect: 'Visit a traditional pottery village and meet artisan families. Learn about pre-Columbian ceramic styles and their symbolism. Get hands-on shaping clay on a wheel or by hand. Decorate your piece with traditional patterns. Pieces are fired and can be shipped home (extra fee) or collected later.',
    whatToExpectEs: 'Visita un pueblo tradicional de cerámica y conoce familias artesanas. Aprende sobre estilos cerámicos precolombinos y su simbolismo. Practica dando forma a la arcilla en un torno o a mano. Decora tu pieza con patrones tradicionales. Las piezas se hornean y pueden enviarse a casa (cargo extra) o recogerse después.',
    highlights: [
      'Meet master artisans',
      'Create your own pottery',
      'Learn ancient techniques',
      'Understand Inca symbolism',
      'Take home your creation',
      'Support local communities'
    ],
    highlightsEs: [
      'Conoce maestros artesanos',
      'Crea tu propia cerámica',
      'Aprende técnicas antiguas',
      'Entiende el simbolismo inca',
      'Llévate tu creación',
      'Apoya comunidades locales'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Anytime, year-round',
    bestTimeEs: 'Cualquier momento, todo el año',
    includes: [
      'All materials',
      'Expert instruction',
      'One finished piece per person',
      'Demonstration',
      'Coca tea'
    ],
    includesEs: [
      'Todos los materiales',
      'Instrucción experta',
      'Una pieza terminada por persona',
      'Demostración',
      'Té de coca'
    ],
    tips: [
      'Quinua near Ayacucho is famous for pottery',
      'Racchi near Cusco offers great workshops',
      'Wear old clothes - it gets messy!',
      'Simple designs work best for beginners',
      'Ask about Inca symbols to include',
      'Allow time for firing if taking home'
    ],
    tipsEs: [
      'Quinua cerca de Ayacucho es famoso por la cerámica',
      'Racchi cerca de Cusco ofrece excelentes talleres',
      '¡Usa ropa vieja - se ensucia!',
      'Los diseños simples funcionan mejor para principiantes',
      'Pregunta sobre símbolos incas para incluir',
      'Permite tiempo para hornear si te lo llevas'
    ],
    safetyNotes: [
      'Clay is non-toxic',
      'Wash hands after handling',
      'Kilns are off-limits to visitors'
    ],
    safetyNotesEs: [
      'La arcilla no es tóxica',
      'Lava las manos después de manipular',
      'Los hornos están fuera del límite para visitantes'
    ],
    relatedActivities: ['textile-workshop', 'market-tour'],
    providers: [
      { name: 'Ceramicas Seminario', familyFriendly: true },
      { name: 'Pablo Seminario Workshop', familyFriendly: true },
      { name: 'Racchi Pottery Center', familyFriendly: true }
    ]
  },
  {
    slug: 'mancora-beach-day',
    name: 'Máncora Beach Experience',
    nameEs: 'Experiencia en la Playa de Máncora',
    type: 'relaxation',
    city: 'mancora',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    description: 'Enjoy Peru\'s best beaches on the sunny northern coast. Máncora offers warm waters perfect for swimming, beginner surf waves, fresh seafood, and a relaxed beach vibe ideal for families.',
    descriptionEs: 'Disfruta las mejores playas de Perú en la soleada costa norte. Máncora ofrece aguas cálidas perfectas para nadar, olas para surfear principiantes, mariscos frescos y un ambiente playero relajado ideal para familias.',
    whatToExpect: 'Warm, swimmable Pacific waters (rare for Peru!), consistent beginner-friendly surf breaks, beachfront restaurants serving fresh ceviche, and optional activities like whale watching (July-October), turtle encounters, and mud baths. Many family-friendly hotels right on the sand.',
    whatToExpectEs: 'Aguas cálidas y nadables del Pacífico (¡raro para Perú!), rompientes consistentes amigables para principiantes, restaurantes frente a la playa sirviendo ceviche fresco y actividades opcionales como avistamiento de ballenas (julio-octubre), encuentros con tortugas y baños de barro. Muchos hoteles familiares justo en la arena.',
    highlights: [
      'Warm swimmable ocean',
      'Beginner surf lessons',
      'Fresh seafood daily',
      'Whale watching (seasonal)',
      'Sea turtle encounters',
      'Relaxed beach atmosphere'
    ],
    highlightsEs: [
      'Océano cálido para nadar',
      'Clases de surf para principiantes',
      'Mariscos frescos diarios',
      'Avistamiento de ballenas (estacional)',
      'Encuentros con tortugas marinas',
      'Atmósfera playera relajada'
    ],
    familyRating: 5,
    minAge: 0,
    duration: 'Multi-day stay recommended',
    durationEs: 'Se recomienda estadía de varios días',
    difficulty: 'easy',
    priceRange: 'Free beach access, activities vary',
    priceRangeEs: 'Acceso a playa gratis, actividades varían',
    bestTime: 'December-April for best weather, July-October for whale watching',
    bestTimeEs: 'Diciembre-abril para mejor clima, julio-octubre para avistamiento de ballenas',
    includes: [
      'Beach access (public)',
      'Activities vary by tour'
    ],
    includesEs: [
      'Acceso a playa (público)',
      'Actividades varían por tour'
    ],
    tips: [
      'Book beachfront accommodations',
      'July-October for humpback whales',
      'Try ceviche at El Muelle',
      'Surf lessons affordable and fun',
      'Mud baths at Pocitas nearby',
      'Easy flight from Lima'
    ],
    tipsEs: [
      'Reserva alojamiento frente a la playa',
      'Julio-octubre para ballenas jorobadas',
      'Prueba el ceviche en El Muelle',
      'Clases de surf económicas y divertidas',
      'Baños de barro en Pocitas cerca',
      'Vuelo fácil desde Lima'
    ],
    safetyNotes: [
      'Lifeguards on main beach',
      'Rip currents exist - ask locals',
      'Strong sun - sunscreen essential',
      'Jellyfish occasional'
    ],
    safetyNotesEs: [
      'Salvavidas en playa principal',
      'Existen corrientes de resaca - pregunta a locales',
      'Sol fuerte - protector solar esencial',
      'Medusas ocasionales'
    ],
    relatedActivities: ['surfing-lesson', 'whale-watching', 'fishing-tour'],
    providers: [
      { name: 'Máncora Surf School', familyFriendly: true },
      { name: 'Pacifico Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'colca-canyon-tour',
    name: 'Colca Canyon & Condor Viewing',
    nameEs: 'Tour al Cañón del Colca y Avistamiento de Cóndores',
    type: 'nature',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Visit one of the world\'s deepest canyons and witness magnificent Andean condors soaring on thermal currents. This iconic Peru experience combines stunning landscapes, traditional villages, and incredible wildlife.',
    descriptionEs: 'Visita uno de los cañones más profundos del mundo y presencia magníficos cóndores andinos planeando en corrientes térmicas. Esta icónica experiencia peruana combina paisajes impresionantes, pueblos tradicionales e increíble vida silvestre.',
    whatToExpect: 'Travel from Arequipa through the altiplano, stopping at viewpoints for vicuña sightings and volcano panoramas. Visit Chivay and traditional villages. Early morning at Cruz del Condor viewpoint offers incredible condor sightings as they rise on thermals. Option to hike into the canyon or visit hot springs.',
    whatToExpectEs: 'Viaja desde Arequipa a través del altiplano, parando en miradores para avistar vicuñas y panoramas de volcanes. Visita Chivay y pueblos tradicionales. La madrugada en el mirador Cruz del Cóndor ofrece increíbles avistamientos de cóndores mientras ascienden en térmicas. Opción de caminar al cañón o visitar aguas termales.',
    highlights: [
      'Andean condor viewing',
      'Spectacular canyon views',
      'Vicuña sightings',
      'Traditional villages',
      'Natural hot springs',
      'Pre-Inca agricultural terraces'
    ],
    highlightsEs: [
      'Avistamiento de cóndores andinos',
      'Vistas espectaculares del cañón',
      'Avistamiento de vicuñas',
      'Pueblos tradicionales',
      'Aguas termales naturales',
      'Terrazas agrícolas preincas'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-day trip recommended',
    durationEs: 'Se recomienda viaje de 2 días',
    difficulty: 'moderate',
    priceRange: '$50-150 per person (2-day tour)',
    priceRangeEs: '$50-150 por persona (tour de 2 días)',
    bestTime: 'Dry season (May-November), mornings for condors',
    bestTimeEs: 'Temporada seca (mayo-noviembre), mañanas para cóndores',
    includes: [
      'Transportation from Arequipa',
      'Guide',
      'Entrance fees',
      'Breakfast (2-day)',
      'Hotel (2-day)'
    ],
    includesEs: [
      'Transporte desde Arequipa',
      'Guía',
      'Entradas',
      'Desayuno (2 días)',
      'Hotel (2 días)'
    ],
    tips: [
      '2-day tour better than rushed 1-day',
      'Bring binoculars for condors',
      'Altitude reaches 4,910m - acclimatize first',
      'Hot springs evening is relaxing',
      'Kids love the vicuñas',
      'Early morning at Cruz del Condor essential'
    ],
    tipsEs: [
      'Tour de 2 días mejor que 1 día apresurado',
      'Trae binoculares para cóndores',
      'La altitud alcanza 4,910m - aclimátate primero',
      'Las aguas termales en la noche son relajantes',
      'A los niños les encantan las vicuñas',
      'Madrugada en Cruz del Cóndor esencial'
    ],
    safetyNotes: [
      'Very high altitude - take it slow',
      'Altitude sickness possible',
      'Sun protection crucial',
      'Stay behind barriers at viewpoints'
    ],
    safetyNotesEs: [
      'Muy alta altitud - ve despacio',
      'Posible mal de altura',
      'Protección solar crucial',
      'Mantente detrás de barreras en miradores'
    ],
    relatedActivities: ['hot-springs-visit', 'trekking', 'llama-trekking'],
    providers: [
      { name: 'Colca Trek', familyFriendly: true },
      { name: 'Pablo Tour', familyFriendly: true },
      { name: 'Naturaleza Activa', familyFriendly: true }
    ]
  },
  {
    slug: 'horseback-riding',
    name: 'Sacred Valley Horseback Riding',
    nameEs: 'Cabalgata en el Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the Sacred Valley on horseback, riding Peruvian Paso horses known for their smooth gait. This gentle adventure takes you through traditional villages, past Inca ruins, and across stunning Andean landscapes.',
    descriptionEs: 'Explora el Valle Sagrado a caballo, montando caballos Paso Peruano conocidos por su paso suave. Esta suave aventura te lleva a través de pueblos tradicionales, pasando ruinas incas y a través de impresionantes paisajes andinos.',
    whatToExpect: 'Meet your Peruvian Paso horse and receive a safety briefing. Rides range from 2-hour scenic trips to full-day adventures. Routes pass through farmland, villages, and often include Inca sites like Moray. Horses are well-trained and suitable for beginners.',
    whatToExpectEs: 'Conoce tu caballo Paso Peruano y recibe una charla de seguridad. Los paseos van desde viajes escénicos de 2 horas hasta aventuras de día completo. Las rutas pasan por tierras de cultivo, pueblos y a menudo incluyen sitios incas como Moray. Los caballos están bien entrenados y son aptos para principiantes.',
    highlights: [
      'Peruvian Paso horses (smooth gait)',
      'Stunning valley scenery',
      'Visit traditional villages',
      'Pass by Inca ruins',
      'Suitable for beginners',
      'Kid-sized horses available'
    ],
    highlightsEs: [
      'Caballos Paso Peruano (paso suave)',
      'Impresionante paisaje del valle',
      'Visitar pueblos tradicionales',
      'Pasar por ruinas incas',
      'Apto para principiantes',
      'Caballos de tamaño para niños disponibles'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-6 hours',
    durationEs: '2-6 horas',
    difficulty: 'easy',
    priceRange: '$50-120 per person',
    priceRangeEs: '$50-120 por persona',
    bestTime: 'Dry season (May-October), morning rides',
    bestTimeEs: 'Temporada seca (mayo-octubre), paseos matutinos',
    includes: [
      'Horse and tack',
      'Helmet',
      'Experienced guide',
      'Safety briefing',
      'Snacks (half-day+)'
    ],
    includesEs: [
      'Caballo y montura',
      'Casco',
      'Guía experimentado',
      'Charla de seguridad',
      'Snacks (medio día+)'
    ],
    tips: [
      'Wear long pants and closed shoes',
      'Bring sun protection',
      'Go slow at altitude',
      'Smaller horses available for kids',
      'Morning rides have best weather',
      'Great combined with Moray/Maras'
    ],
    tipsEs: [
      'Usa pantalones largos y zapatos cerrados',
      'Trae protección solar',
      'Ve despacio en la altitud',
      'Caballos más pequeños disponibles para niños',
      'Los paseos matutinos tienen mejor clima',
      'Genial combinado con Moray/Maras'
    ],
    safetyNotes: [
      'Helmets mandatory for children',
      'Height/weight restrictions may apply',
      'Inform guide of any experience level',
      'First aid kit with guide'
    ],
    safetyNotesEs: [
      'Cascos obligatorios para niños',
      'Pueden aplicar restricciones de altura/peso',
      'Informa al guía de cualquier nivel de experiencia',
      'Botiquín de primeros auxilios con el guía'
    ],
    relatedActivities: ['llama-trekking', 'mountain-biking', 'atv-tour'],
    providers: [
      { name: 'Perol Chico', familyFriendly: true },
      { name: 'Sol y Luna Stables', familyFriendly: true },
      { name: 'Sacred Valley Horses', familyFriendly: true }
    ]
  },
  {
    slug: 'atv-quad-tour',
    name: 'ATV Quad Bike Adventure',
    nameEs: 'Aventura en Cuatrimoto ATV',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Race through the Sacred Valley on all-terrain vehicles, exploring ancient salt mines, Inca ruins, and remote villages inaccessible by regular transport. An adrenaline-pumping way to see the Peruvian highlands.',
    descriptionEs: 'Corre a través del Valle Sagrado en vehículos todo terreno, explorando antiguas salinas, ruinas incas y pueblos remotos inaccesibles por transporte regular. Una forma llena de adrenalina para ver las tierras altas peruanas.',
    whatToExpect: 'After safety training and practice, ride powerful ATVs on dirt trails through the countryside. Popular routes visit Maras salt mines and Moray circular terraces. Double ATVs available for families with young children who ride as passengers.',
    whatToExpectEs: 'Después de entrenamiento de seguridad y práctica, maneja potentes ATVs en senderos de tierra a través del campo. Las rutas populares visitan las salinas de Maras y las terrazas circulares de Moray. ATVs dobles disponibles para familias con niños pequeños que van como pasajeros.',
    highlights: [
      'Thrilling off-road adventure',
      'Visit Maras salt mines',
      'Explore Moray terraces',
      'Stunning mountain scenery',
      'Double ATVs for families',
      'Dusty, muddy fun!'
    ],
    highlightsEs: [
      'Emocionante aventura todo terreno',
      'Visitar salinas de Maras',
      'Explorar terrazas de Moray',
      'Impresionante paisaje de montañas',
      'ATVs dobles para familias',
      '¡Diversión polvorienta y lodosa!'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'moderate',
    priceRange: '$60-100 per person',
    priceRangeEs: '$60-100 por persona',
    bestTime: 'Dry season (May-October) for least mud',
    bestTimeEs: 'Temporada seca (mayo-octubre) para menos lodo',
    includes: [
      'ATV and fuel',
      'Helmet and goggles',
      'Gloves',
      'Guide',
      'Entrance fees to sites'
    ],
    includesEs: [
      'ATV y combustible',
      'Casco y gafas',
      'Guantes',
      'Guía',
      'Entradas a los sitios'
    ],
    tips: [
      'Wear old clothes - you\'ll get dusty/muddy',
      'Drivers need valid license',
      'Kids can ride as passengers',
      'Bandana helpful for dust',
      'Bring camera with strap',
      'Half-day is sufficient'
    ],
    tipsEs: [
      'Usa ropa vieja - te ensuciarás de polvo/lodo',
      'Los conductores necesitan licencia válida',
      'Los niños pueden ir como pasajeros',
      'Pañuelo útil para el polvo',
      'Trae cámara con correa',
      'Medio día es suficiente'
    ],
    safetyNotes: [
      'Valid driver\'s license required',
      'Children ride as passengers only',
      'Follow guide at all times',
      'Terrain can be challenging'
    ],
    safetyNotesEs: [
      'Se requiere licencia de conducir válida',
      'Los niños solo van como pasajeros',
      'Sigue al guía en todo momento',
      'El terreno puede ser desafiante'
    ],
    relatedActivities: ['horseback-riding', 'mountain-biking', 'zip-lining'],
    providers: [
      { name: 'Action Valley', familyFriendly: true },
      { name: 'Moray ATV Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'whale-watching',
    name: 'Humpback Whale Watching',
    nameEs: 'Avistamiento de Ballenas Jorobadas',
    type: 'nature',
    city: 'mancora',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    description: 'Witness majestic humpback whales on their annual migration along Peru\'s northern coast. From July to October, these gentle giants pass close to shore, often breaching and playing with their calves.',
    descriptionEs: 'Presencia majestuosas ballenas jorobadas en su migración anual a lo largo de la costa norte de Perú. De julio a octubre, estos gentiles gigantes pasan cerca de la costa, a menudo saltando y jugando con sus crías.',
    whatToExpect: 'Board a boat from Máncora or Los Órganos for a 2-3 hour ocean excursion. Expert guides spot whales and explain their behavior. Expect to see breaching, tail slapping, and mother-calf pairs. Dolphins often appear too. Calm seas in this region make for comfortable viewing.',
    whatToExpectEs: 'Aborda un bote desde Máncora o Los Órganos para una excursión oceánica de 2-3 horas. Guías expertos avistan ballenas y explican su comportamiento. Espera ver saltos, golpes de cola y parejas madre-cría. Los delfines a menudo aparecen también. Los mares tranquilos en esta región permiten una observación cómoda.',
    highlights: [
      'See breaching humpback whales',
      'Mother and calf pairs',
      'Dolphins often spotted',
      'Expert naturalist guides',
      'Calm, warm waters',
      'Unforgettable wildlife experience'
    ],
    highlightsEs: [
      'Ver ballenas jorobadas saltando',
      'Parejas de madre y cría',
      'Delfines avistados frecuentemente',
      'Guías naturalistas expertos',
      'Aguas cálidas y tranquilas',
      'Experiencia de vida silvestre inolvidable'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'July-October (whale migration season)',
    bestTimeEs: 'Julio-octubre (temporada de migración de ballenas)',
    includes: [
      'Boat trip',
      'Life jackets',
      'Expert guide',
      'Snacks/water',
      'Binoculars available'
    ],
    includesEs: [
      'Viaje en bote',
      'Chalecos salvavidas',
      'Guía experto',
      'Snacks/agua',
      'Binoculares disponibles'
    ],
    tips: [
      'Book for morning - calmer seas',
      'Take motion sickness medication',
      'Bring camera with good zoom',
      'Patience rewarded - whales appear!',
      'Combine with beach vacation',
      'August-September peak season'
    ],
    tipsEs: [
      'Reserva para la mañana - mares más tranquilos',
      'Toma medicación para el mareo',
      'Trae cámara con buen zoom',
      '¡La paciencia es recompensada - las ballenas aparecen!',
      'Combina con vacaciones de playa',
      'Agosto-septiembre temporada alta'
    ],
    safetyNotes: [
      'Life jackets mandatory',
      'Follow captain\'s instructions',
      'Boats don\'t approach too close',
      'Sunscreen essential'
    ],
    safetyNotesEs: [
      'Chalecos salvavidas obligatorios',
      'Sigue las instrucciones del capitán',
      'Los botes no se acercan demasiado',
      'Protector solar esencial'
    ],
    relatedActivities: ['mancora-beach-day', 'surfing-lesson', 'fishing-tour'],
    providers: [
      { name: 'Pacifico Adventures', familyFriendly: true },
      { name: 'Spondylus', familyFriendly: true }
    ]
  },
  {
    slug: 'stand-up-paddleboard',
    name: 'Stand-Up Paddleboarding',
    nameEs: 'Paddleboard de Pie (SUP)',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Glide across the calm waters of Lima\'s coast or Lake Titicaca on a stand-up paddleboard. This accessible water sport is perfect for families and offers unique perspectives on Peru\'s coastline and waterways.',
    descriptionEs: 'Deslízate sobre las aguas tranquilas de la costa de Lima o el Lago Titicaca en un paddleboard de pie. Este deporte acuático accesible es perfecto para familias y ofrece perspectivas únicas de la costa y vías fluviales de Perú.',
    whatToExpect: 'Beginner lessons start on the beach or dock with balance practice. Once comfortable, paddle along the coast or lake shore. In Lima, explore Miraflores bays; at Titicaca, paddle around the floating islands. Wetsuits provided in Lima\'s cooler waters.',
    whatToExpectEs: 'Las clases para principiantes comienzan en la playa o muelle con práctica de equilibrio. Una vez cómodo, rema a lo largo de la costa o la orilla del lago. En Lima, explora las bahías de Miraflores; en Titicaca, rema alrededor de las islas flotantes. Trajes de neopreno proporcionados en las aguas más frías de Lima.',
    highlights: [
      'Easy to learn for all ages',
      'Stunning coastal views',
      'Calm morning waters',
      'Great core workout',
      'Wetsuits provided (Lima)',
      'Also available at Lake Titicaca'
    ],
    highlightsEs: [
      'Fácil de aprender para todas las edades',
      'Impresionantes vistas costeras',
      'Aguas tranquilas en la mañana',
      'Gran ejercicio de core',
      'Trajes de neopreno proporcionados (Lima)',
      'También disponible en el Lago Titicaca'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: '$35-60 per person',
    priceRangeEs: '$35-60 por persona',
    bestTime: 'Morning for calmest conditions, year-round in Lima',
    bestTimeEs: 'Mañana para condiciones más calmadas, todo el año en Lima',
    includes: [
      'Paddleboard and paddle',
      'Life jacket',
      'Wetsuit (Lima)',
      'Instruction',
      'Guided paddle'
    ],
    includesEs: [
      'Paddleboard y remo',
      'Chaleco salvavidas',
      'Traje de neopreno (Lima)',
      'Instrucción',
      'Paseo guiado'
    ],
    tips: [
      'Book early morning for flat water',
      'Easier than surfing for beginners',
      'Kids can sit or kneel at first',
      'Waterproof phone case recommended',
      'Great exercise without realizing',
      'Also available at Paracas, Huanchaco'
    ],
    tipsEs: [
      'Reserva temprano en la mañana para agua plana',
      'Más fácil que surfear para principiantes',
      'Los niños pueden sentarse o arrodillarse al principio',
      'Funda impermeable para teléfono recomendada',
      'Gran ejercicio sin darte cuenta',
      'También disponible en Paracas, Huanchaco'
    ],
    safetyNotes: [
      'Must be able to swim',
      'Life jacket required for children',
      'Stay in designated areas',
      'Watch for boats and surfers'
    ],
    safetyNotesEs: [
      'Debes saber nadar',
      'Chaleco salvavidas requerido para niños',
      'Mantente en áreas designadas',
      'Cuidado con botes y surfistas'
    ],
    relatedActivities: ['surfing-lesson', 'kayaking-titicaca', 'paragliding-miraflores'],
    providers: [
      { name: 'Lima SUP', familyFriendly: true },
      { name: 'Paracas Explorer', familyFriendly: true }
    ]
  },
  {
    slug: 'homestay-experience',
    name: 'Andean Homestay Experience',
    nameEs: 'Experiencia de Hospedaje Familiar Andino',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Live with a local family on Lake Titicaca\'s Amantaní or Taquile islands for an authentic cultural immersion. Share meals, learn traditional crafts, and experience daily life in one of Peru\'s most traditional communities.',
    descriptionEs: 'Vive con una familia local en las islas Amantaní o Taquile del Lago Titicaca para una auténtica inmersión cultural. Comparte comidas, aprende artesanías tradicionales y experimenta la vida diaria en una de las comunidades más tradicionales de Perú.',
    whatToExpect: 'Boat to an island community and meet your host family. Participate in daily activities like cooking, farming, or weaving. Evening may include traditional music and dancing. Sleep in simple but clean rooms. Experience life without cars, wifi, or modern distractions.',
    whatToExpectEs: 'Bote a una comunidad isleña y conoce a tu familia anfitriona. Participa en actividades diarias como cocinar, cultivar o tejer. La noche puede incluir música y baile tradicional. Duerme en habitaciones simples pero limpias. Experimenta la vida sin autos, wifi ni distracciones modernas.',
    highlights: [
      'Authentic cultural immersion',
      'Share meals with local family',
      'Learn weaving and crafts',
      'Traditional music and dance',
      'Stunning lake views',
      'No wifi = real connection'
    ],
    highlightsEs: [
      'Auténtica inmersión cultural',
      'Comparte comidas con familia local',
      'Aprende tejido y artesanías',
      'Música y baile tradicional',
      'Impresionantes vistas del lago',
      'Sin wifi = conexión real'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '1-2 nights',
    durationEs: '1-2 noches',
    difficulty: 'easy',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Dry season (May-October), any time works',
    bestTimeEs: 'Temporada seca (mayo-octubre), cualquier momento funciona',
    includes: [
      'Boat transportation',
      'Home accommodation',
      'All meals',
      'Cultural activities',
      'English-speaking guide'
    ],
    includesEs: [
      'Transporte en bote',
      'Alojamiento en casa',
      'Todas las comidas',
      'Actividades culturales',
      'Guía de habla inglesa'
    ],
    tips: [
      'Bring small gifts for family (school supplies, chocolate)',
      'Accommodation is basic - bring sleeping bag for warmth',
      'Learn some Quechua phrases',
      'Participate actively in activities',
      'Digital detox - embrace no wifi!',
      'Incredible for teaching kids about different cultures'
    ],
    tipsEs: [
      'Trae pequeños regalos para la familia (útiles escolares, chocolate)',
      'El alojamiento es básico - trae saco de dormir para el calor',
      'Aprende algunas frases en quechua',
      'Participa activamente en las actividades',
      '¡Desintoxicación digital - abraza el no wifi!',
      'Increíble para enseñar a los niños sobre diferentes culturas'
    ],
    safetyNotes: [
      'Basic medical kit recommended',
      'Altitude can affect sleep',
      'No electricity in some homes',
      'Dress warmly for cold nights'
    ],
    safetyNotesEs: [
      'Botiquín básico recomendado',
      'La altitud puede afectar el sueño',
      'Sin electricidad en algunas casas',
      'Vístete abrigado para noches frías'
    ],
    relatedActivities: ['kayaking-titicaca', 'textile-workshop'],
    providers: [
      { name: 'All Ways Travel', familyFriendly: true },
      { name: 'Edgar Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'lima-food-tour',
    name: 'Lima Gastronomy Tour',
    nameEs: 'Tour Gastronómico de Lima',
    type: 'culinary',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Discover why Lima is South America\'s culinary capital on a guided food tour. From ceviche to anticuchos, explore diverse neighborhoods while sampling Peru\'s famous cuisine at local favorites.',
    descriptionEs: 'Descubre por qué Lima es la capital culinaria de Sudamérica en un tour gastronómico guiado. Desde ceviche hasta anticuchos, explora diversos barrios mientras pruebas la famosa cocina peruana en locales favoritos.',
    whatToExpect: 'Walking tour through Lima\'s food hotspots, typically Miraflores or Barranco. Stop at 5-8 locations sampling ceviche, causa, anticuchos, picarones, pisco sour, and more. Guides explain the history and cultural significance of each dish. Vegetarian options usually available.',
    whatToExpectEs: 'Tour a pie por los puntos gastronómicos de Lima, típicamente Miraflores o Barranco. Para en 5-8 lugares probando ceviche, causa, anticuchos, picarones, pisco sour y más. Los guías explican la historia e importancia cultural de cada plato. Opciones vegetarianas usualmente disponibles.',
    highlights: [
      'Sample 10+ Peruvian dishes',
      'Visit local favorite spots',
      'Learn food history',
      'Try fresh ceviche',
      'Pisco sour tasting',
      'Explore foodie neighborhoods'
    ],
    highlightsEs: [
      'Prueba más de 10 platos peruanos',
      'Visita lugares favoritos locales',
      'Aprende historia gastronómica',
      'Prueba ceviche fresco',
      'Degustación de pisco sour',
      'Explora barrios gastronómicos'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Lunch or evening tours available',
    bestTimeEs: 'Tours de almuerzo o noche disponibles',
    includes: [
      'All food tastings',
      'Non-alcoholic drinks',
      'Pisco sour for adults',
      'Expert foodie guide',
      'Walking tour'
    ],
    includesEs: [
      'Todas las degustaciones de comida',
      'Bebidas sin alcohol',
      'Pisco sour para adultos',
      'Guía experto en gastronomía',
      'Tour a pie'
    ],
    tips: [
      'Come hungry - lots of food!',
      'Inform of allergies in advance',
      'Evening tours include more variety',
      'Kids love the sweet stops',
      'Vegetarian tours available',
      'Great first-night activity'
    ],
    tipsEs: [
      '¡Ven con hambre - mucha comida!',
      'Informa de alergias con anticipación',
      'Los tours nocturnos incluyen más variedad',
      'A los niños les encantan las paradas dulces',
      'Tours vegetarianos disponibles',
      'Gran actividad para la primera noche'
    ],
    safetyNotes: [
      'Communicate allergies clearly',
      'All restaurants have been vetted',
      'Stick with your group',
      'Comfortable walking shoes needed'
    ],
    safetyNotesEs: [
      'Comunica las alergias claramente',
      'Todos los restaurantes han sido verificados',
      'Quédate con tu grupo',
      'Se necesitan zapatos cómodos para caminar'
    ],
    relatedActivities: ['market-tour-lima', 'peruvian-cooking-class'],
    providers: [
      { name: 'Lima Gourmet Company', familyFriendly: true },
      { name: 'Secret Food Tours', familyFriendly: true },
      { name: 'Urban Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'spanish-immersion',
    name: 'Family Spanish Lessons',
    nameEs: 'Clases de Español para Familias',
    type: 'educational',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn Spanish as a family with private or group lessons tailored to all ages. Combine language learning with cultural activities for an enriching educational experience that enhances your Peru trip.',
    descriptionEs: 'Aprende español en familia con clases privadas o grupales adaptadas a todas las edades. Combina el aprendizaje del idioma con actividades culturales para una experiencia educativa enriquecedora que mejora tu viaje a Perú.',
    whatToExpect: 'Lessons at your accommodation or language school, tailored to family needs. Kids learn through games, songs, and activities. Adults get practical travel Spanish. Combined programs include market visits, cooking classes, and cultural activities to practice skills.',
    whatToExpectEs: 'Clases en tu alojamiento o escuela de idiomas, adaptadas a las necesidades familiares. Los niños aprenden a través de juegos, canciones y actividades. Los adultos obtienen español práctico para viajes. Los programas combinados incluyen visitas al mercado, clases de cocina y actividades culturales para practicar habilidades.',
    highlights: [
      'Private family lessons',
      'Age-appropriate methods',
      'Games and activities for kids',
      'Practical travel vocabulary',
      'Cultural immersion activities',
      'Flexible scheduling'
    ],
    highlightsEs: [
      'Clases familiares privadas',
      'Métodos apropiados para cada edad',
      'Juegos y actividades para niños',
      'Vocabulario práctico de viaje',
      'Actividades de inmersión cultural',
      'Horarios flexibles'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2 hours per lesson',
    durationEs: '2 horas por lección',
    difficulty: 'easy',
    priceRange: '$15-30 per hour per person',
    priceRangeEs: '$15-30 por hora por persona',
    bestTime: 'Any time, morning or afternoon',
    bestTimeEs: 'Cualquier momento, mañana o tarde',
    includes: [
      'Certified teacher',
      'Learning materials',
      'Workbooks',
      'Cultural activities (packages)',
      'Certificate (longer courses)'
    ],
    includesEs: [
      'Profesor certificado',
      'Materiales de aprendizaje',
      'Cuadernos de trabajo',
      'Actividades culturales (paquetes)',
      'Certificado (cursos más largos)'
    ],
    tips: [
      'Even a few lessons enhance your trip',
      'Practice at markets and restaurants',
      'Kids pick up language quickly',
      'Request package with activities',
      'Morning lessons leave afternoons free',
      'Available in Lima, Arequipa too'
    ],
    tipsEs: [
      'Incluso unas pocas lecciones mejoran tu viaje',
      'Practica en mercados y restaurantes',
      'Los niños aprenden el idioma rápidamente',
      'Solicita paquete con actividades',
      'Las clases matutinas dejan las tardes libres',
      'También disponible en Lima, Arequipa'
    ],
    safetyNotes: [
      'Lessons at your accommodation for flexibility',
      'Reputable schools have vetted teachers'
    ],
    safetyNotesEs: [
      'Clases en tu alojamiento para flexibilidad',
      'Las escuelas reputadas tienen profesores verificados'
    ],
    relatedActivities: ['peruvian-cooking-class', 'market-tour-lima', 'homestay-experience'],
    providers: [
      { name: 'Proyecto Peru', familyFriendly: true },
      { name: 'Amauta Spanish School', familyFriendly: true },
      { name: 'Cusco Spanish School', familyFriendly: true }
    ]
  },
  {
    slug: 'train-machu-picchu',
    name: 'Scenic Train to Machu Picchu',
    nameEs: 'Tren Panorámico a Machu Picchu',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'One of the world\'s most spectacular train journeys, winding through the Sacred Valley and along the Urubamba River to Aguas Calientes. Choose from Vistadome with panoramic windows or the luxurious Hiram Bingham experience.',
    descriptionEs: 'Uno de los viajes en tren más espectaculares del mundo, serpenteando por el Valle Sagrado y a lo largo del río Urubamba hasta Aguas Calientes. Elige entre Vistadome con ventanas panorámicas o la experiencia de lujo Hiram Bingham.',
    whatToExpect: 'Board at Ollantaytambo or Poroy station for a scenic journey through changing landscapes. Vistadome offers panoramic windows and light snacks. Hiram Bingham includes gourmet meals, live music, and cocktails. Watch mountains give way to cloud forest as you descend toward Machu Picchu.',
    whatToExpectEs: 'Aborda en la estación de Ollantaytambo o Poroy para un viaje panorámico a través de paisajes cambiantes. Vistadome ofrece ventanas panorámicas y bocadillos ligeros. Hiram Bingham incluye comidas gourmet, música en vivo y cócteles. Observa cómo las montañas dan paso al bosque nublado mientras desciendes hacia Machu Picchu.',
    highlights: [
      'Panoramic mountain views',
      'Sacred Valley scenery',
      'Urubamba River gorge',
      'Glass-ceiling Vistadome cars',
      'Live entertainment on some services',
      'Comfortable family seating'
    ],
    highlightsEs: [
      'Vistas panorámicas de montañas',
      'Paisaje del Valle Sagrado',
      'Cañón del río Urubamba',
      'Vagones Vistadome con techo de vidrio',
      'Entretenimiento en vivo en algunos servicios',
      'Asientos cómodos para familias'
    ],
    familyRating: 5,
    minAge: 0,
    duration: '1.5-4 hours (varies by route)',
    durationEs: '1.5-4 horas (varía según la ruta)',
    difficulty: 'easy',
    priceRange: '$60-500 per person (varies by service)',
    priceRangeEs: '$60-500 por persona (varía según servicio)',
    bestTime: 'Any time, morning trains best for views',
    bestTimeEs: 'Cualquier momento, trenes matutinos mejores para vistas',
    includes: [
      'Scenic train journey',
      'Assigned seating',
      'Snacks/meals (varies by class)',
      'Entertainment (premium services)',
      'Views of Andes and cloud forest'
    ],
    includesEs: [
      'Viaje en tren panorámico',
      'Asientos asignados',
      'Snacks/comidas (varía según clase)',
      'Entretenimiento (servicios premium)',
      'Vistas de los Andes y bosque nublado'
    ],
    tips: [
      'Book months in advance for peak season',
      'Ollantaytambo departure saves 1+ hour',
      'Vistadome excellent value for families',
      'Kids love the glass-ceiling cars',
      'Sit on left side going down for river views',
      'Return trains often have fashion shows!'
    ],
    tipsEs: [
      'Reserva con meses de anticipación para temporada alta',
      'Salida de Ollantaytambo ahorra 1+ hora',
      'Vistadome excelente valor para familias',
      'A los niños les encantan los vagones con techo de vidrio',
      'Siéntate en el lado izquierdo bajando para vistas del río',
      '¡Los trenes de regreso a menudo tienen desfiles de moda!'
    ],
    safetyNotes: [
      'Stay seated while train is moving',
      'Secure luggage on racks',
      'Keep children away from doors',
      'Book official Peru Rail or Inca Rail only'
    ],
    safetyNotesEs: [
      'Mantente sentado mientras el tren está en movimiento',
      'Asegura el equipaje en los portaequipajes',
      'Mantén a los niños alejados de las puertas',
      'Reserva solo con Peru Rail o Inca Rail oficial'
    ],
    relatedActivities: ['machu-picchu-tour', 'sacred-valley-tour'],
    providers: [
      { name: 'Peru Rail', familyFriendly: true },
      { name: 'Inca Rail', familyFriendly: true }
    ]
  },
  {
    slug: 'canopy-walkway-amazon',
    name: 'Amazon Canopy Walkway',
    nameEs: 'Puente Colgante del Amazonas',
    type: 'adventure',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Walk among the treetops on suspended bridges high above the Amazon rainforest floor. This thrilling experience brings you to the canopy level where most wildlife lives, offering unique views of monkeys, birds, and the jungle ecosystem.',
    descriptionEs: 'Camina entre las copas de los árboles en puentes suspendidos muy por encima del suelo de la selva amazónica. Esta emocionante experiencia te lleva al nivel del dosel donde vive la mayoría de la vida silvestre, ofreciendo vistas únicas de monos, aves y el ecosistema de la jungla.',
    whatToExpect: 'Climb a tower to reach walkways suspended 30-40 meters above the forest floor. Cross between giant trees on swaying bridges while spotting wildlife at canopy level. Guides point out birds, monkeys, and unique plants. Most walkways are safe for children but require some bravery!',
    whatToExpectEs: 'Sube una torre para llegar a pasarelas suspendidas 30-40 metros sobre el suelo del bosque. Cruza entre árboles gigantes en puentes oscilantes mientras observas la vida silvestre a nivel del dosel. Los guías señalan aves, monos y plantas únicas. ¡La mayoría de las pasarelas son seguras para niños pero requieren algo de valentía!',
    highlights: [
      '30-40 meter high walkways',
      'Bird\'s-eye jungle views',
      'Wildlife at canopy level',
      'Monkey and bird spotting',
      'Unique photo opportunities',
      'Adventure for all ages'
    ],
    highlightsEs: [
      'Pasarelas a 30-40 metros de altura',
      'Vistas de la jungla a vista de pájaro',
      'Vida silvestre a nivel del dosel',
      'Observación de monos y aves',
      'Oportunidades únicas de fotos',
      'Aventura para todas las edades'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'moderate',
    priceRange: 'Included in lodge stays or $30-50 day trip',
    priceRangeEs: 'Incluido en estadías en lodge o $30-50 excursión de un día',
    bestTime: 'Early morning for wildlife, any season',
    bestTimeEs: 'Temprano en la mañana para vida silvestre, cualquier temporada',
    includes: [
      'Safety equipment',
      'Expert naturalist guide',
      'Wildlife spotting',
      'Access to observation towers',
      'Binoculars (usually)'
    ],
    includesEs: [
      'Equipo de seguridad',
      'Guía naturalista experto',
      'Observación de vida silvestre',
      'Acceso a torres de observación',
      'Binoculares (usualmente)'
    ],
    tips: [
      'Go early morning for most wildlife',
      'Bring binoculars for bird watching',
      'Test nervous children on lower sections first',
      'Hold handrails at all times',
      'Watch for toucans and howler monkeys',
      'The Explorama canopy is world-famous'
    ],
    tipsEs: [
      'Ve temprano en la mañana para más vida silvestre',
      'Trae binoculares para observación de aves',
      'Prueba a niños nerviosos en secciones bajas primero',
      'Sujétate de las barandas en todo momento',
      'Busca tucanes y monos aulladores',
      'El dosel de Explorama es mundialmente famoso'
    ],
    safetyNotes: [
      'Always hold handrails',
      'Maximum weight limits enforced',
      'Not recommended for those with vertigo',
      'Supervise children closely'
    ],
    safetyNotesEs: [
      'Siempre sujétate de las barandas',
      'Se aplican límites de peso máximo',
      'No recomendado para quienes tienen vértigo',
      'Supervisa a los niños de cerca'
    ],
    relatedActivities: ['amazon-jungle-tour', 'bird-watching-amazon'],
    providers: [
      { name: 'Explorama Lodges', familyFriendly: true },
      { name: 'Ceiba Tops', familyFriendly: true }
    ]
  },
  {
    slug: 'piranha-fishing',
    name: 'Piranha Fishing',
    nameEs: 'Pesca de Pirañas',
    type: 'adventure',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Try your hand at catching the Amazon\'s most famous fish! Despite their fearsome reputation, piranha fishing is safe, educational, and exciting for the whole family. Catch-and-release or enjoy your catch for dinner.',
    descriptionEs: 'Intenta atrapar el pez más famoso del Amazonas. A pesar de su temible reputación, la pesca de pirañas es segura, educativa y emocionante para toda la familia. Captura y libera o disfruta tu captura para la cena.',
    whatToExpect: 'Boat to fishing spots in tributaries or lakes. Use simple rod and line with raw meat bait. Guides teach proper technique and handle fish safely. Learn about piranha species, behavior, and their role in the ecosystem. Kids especially love the thrill of catching these toothy fish.',
    whatToExpectEs: 'Bote a puntos de pesca en afluentes o lagos. Usa caña y línea simple con carnada de carne cruda. Los guías enseñan la técnica apropiada y manejan los peces de forma segura. Aprende sobre las especies de pirañas, su comportamiento y su rol en el ecosistema. A los niños les encanta especialmente la emoción de atrapar estos peces con dientes.',
    highlights: [
      'Catch Amazon\'s famous fish',
      'See piranha teeth up close',
      'Learn about jungle ecosystems',
      'Scenic boat ride to fishing spots',
      'Possible catch for dinner',
      'Safe and supervised activity'
    ],
    highlightsEs: [
      'Atrapa el famoso pez del Amazonas',
      'Ve los dientes de pirañas de cerca',
      'Aprende sobre ecosistemas de la jungla',
      'Paseo panorámico en bote a puntos de pesca',
      'Posible captura para la cena',
      'Actividad segura y supervisada'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: 'Usually included in lodge packages',
    priceRangeEs: 'Usualmente incluido en paquetes de lodge',
    bestTime: 'Dry season (May-October) best, dawn or dusk',
    bestTimeEs: 'Temporada seca (mayo-octubre) mejor, amanecer o atardecer',
    includes: [
      'Fishing equipment',
      'Bait',
      'Expert guide',
      'Boat transportation',
      'Safety briefing'
    ],
    includesEs: [
      'Equipo de pesca',
      'Carnada',
      'Guía experto',
      'Transporte en bote',
      'Instrucciones de seguridad'
    ],
    tips: [
      'Kids catch more than adults usually!',
      'Bring snacks and water',
      'Sunset fishing is magical',
      'Don\'t put fingers near piranha mouths',
      'Red-bellied piranhas are most common',
      'Keep caught fish for amazing jungle dinner'
    ],
    tipsEs: [
      '¡Los niños usualmente atrapan más que los adultos!',
      'Trae snacks y agua',
      'La pesca al atardecer es mágica',
      'No pongas los dedos cerca de las bocas de pirañas',
      'Las pirañas de vientre rojo son las más comunes',
      'Guarda los peces atrapados para una increíble cena en la jungla'
    ],
    safetyNotes: [
      'Never touch piranha mouths',
      'Guides handle all fish',
      'Wear sunscreen and hat',
      'Life jackets on boat'
    ],
    safetyNotesEs: [
      'Nunca toques las bocas de pirañas',
      'Los guías manejan todos los peces',
      'Usa protector solar y sombrero',
      'Chalecos salvavidas en el bote'
    ],
    relatedActivities: ['amazon-jungle-tour', 'caiman-spotting'],
    providers: [
      { name: 'Jungle lodges', familyFriendly: true },
      { name: 'Amazon tours', familyFriendly: true }
    ]
  },
  {
    slug: 'yoga-retreat-sacred-valley',
    name: 'Sacred Valley Yoga Retreat',
    nameEs: 'Retiro de Yoga en el Valle Sagrado',
    type: 'relaxation',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Reconnect with nature and yourself at a family-friendly yoga retreat in the mystical Sacred Valley. Programs often include gentle classes suitable for all ages, meditation, and exploration of ancient Andean wellness traditions.',
    descriptionEs: 'Reconéctate con la naturaleza y contigo mismo en un retiro de yoga para familias en el místico Valle Sagrado. Los programas a menudo incluyen clases suaves adecuadas para todas las edades, meditación y exploración de antiguas tradiciones de bienestar andino.',
    whatToExpect: 'Stay at retreat centers with mountain views. Morning and evening yoga sessions, often outdoors. Many retreats offer kids\' programs or family classes. Optional activities include hiking, meditation, massage, and exploring nearby ruins. Healthy organic meals included.',
    whatToExpectEs: 'Alójate en centros de retiro con vistas a las montañas. Sesiones de yoga por la mañana y noche, a menudo al aire libre. Muchos retiros ofrecen programas para niños o clases familiares. Las actividades opcionales incluyen senderismo, meditación, masajes y exploración de ruinas cercanas. Comidas orgánicas saludables incluidas.',
    highlights: [
      'Mountain-view yoga sessions',
      'Family-friendly classes',
      'Organic healthy meals',
      'Meditation and mindfulness',
      'Connection with nature',
      'Andean healing traditions'
    ],
    highlightsEs: [
      'Sesiones de yoga con vista a las montañas',
      'Clases para familias',
      'Comidas orgánicas saludables',
      'Meditación y mindfulness',
      'Conexión con la naturaleza',
      'Tradiciones de sanación andina'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '1 day to 1 week',
    durationEs: '1 día a 1 semana',
    difficulty: 'easy',
    priceRange: '$50-200 per day per person',
    priceRangeEs: '$50-200 por día por persona',
    bestTime: 'Year-round, dry season (May-Oct) ideal',
    bestTimeEs: 'Todo el año, temporada seca (mayo-oct) ideal',
    includes: [
      'Yoga classes',
      'Accommodation',
      'Organic meals',
      'Some activities',
      'Meditation sessions'
    ],
    includesEs: [
      'Clases de yoga',
      'Alojamiento',
      'Comidas orgánicas',
      'Algunas actividades',
      'Sesiones de meditación'
    ],
    tips: [
      'Look for family-specific programs',
      'Lower altitude than Cusco - easier to adapt',
      'Kids yoga classes keep everyone happy',
      'Great way to start or end Peru trip',
      'Book spa treatments in advance',
      'Digital detox enhances experience'
    ],
    tipsEs: [
      'Busca programas específicos para familias',
      'Menor altitud que Cusco - más fácil adaptarse',
      'Las clases de yoga para niños mantienen a todos felices',
      'Gran manera de comenzar o terminar el viaje a Perú',
      'Reserva tratamientos de spa con anticipación',
      'La desintoxicación digital mejora la experiencia'
    ],
    safetyNotes: [
      'Inform of any physical limitations',
      'Altitude still affects some people',
      'Gentle classes suitable for beginners',
      'Certified instructors'
    ],
    safetyNotesEs: [
      'Informa de cualquier limitación física',
      'La altitud aún afecta a algunas personas',
      'Clases suaves adecuadas para principiantes',
      'Instructores certificados'
    ],
    relatedActivities: ['sacred-valley-tour', 'spanish-immersion'],
    providers: [
      { name: 'Willka T\'ika', familyFriendly: true },
      { name: 'Sacred Valley Retreat', familyFriendly: true }
    ]
  },
  {
    slug: 'sandboarding-huacachina',
    name: 'Sandboarding in Huacachina',
    nameEs: 'Sandboard en Huacachina',
    type: 'adventure',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Surf down massive sand dunes surrounding the oasis town of Huacachina on a sandboard. Combined with an exhilarating dune buggy ride, this is one of Peru\'s most thrilling family adventures outside the jungle.',
    descriptionEs: 'Surfea por las enormes dunas de arena que rodean la ciudad oasis de Huacachina en un sandboard. Combinado con un emocionante paseo en buggy por las dunas, esta es una de las aventuras familiares más emocionantes de Perú fuera de la selva.',
    whatToExpect: 'Board a powerful dune buggy for an adrenaline-pumping ride over giant sand dunes. Stop at various dunes to try sandboarding - either standing (harder) or lying down (easier, great for kids). Watch the sunset over the desert landscape. Most tours last 2 hours.',
    whatToExpectEs: 'Sube a un poderoso buggy de dunas para un paseo lleno de adrenalina sobre dunas de arena gigantes. Para en varias dunas para probar el sandboard - ya sea parado (más difícil) o acostado (más fácil, genial para niños). Ve la puesta de sol sobre el paisaje desértico. La mayoría de los tours duran 2 horas.',
    highlights: [
      'Massive sand dunes',
      'Dune buggy thrills',
      'Sandboarding for all levels',
      'Desert sunset views',
      'Oasis town setting',
      'Beginner-friendly options'
    ],
    highlightsEs: [
      'Enormes dunas de arena',
      'Emociones en buggy de dunas',
      'Sandboard para todos los niveles',
      'Vistas del atardecer en el desierto',
      'Entorno de ciudad oasis',
      'Opciones para principiantes'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'easy',
    priceRange: '$15-30 per person',
    priceRangeEs: '$15-30 por persona',
    bestTime: 'Late afternoon for sunset, year-round',
    bestTimeEs: 'Tarde para el atardecer, todo el año',
    includes: [
      'Dune buggy ride',
      'Sandboard equipment',
      'Safety instructions',
      'Multiple dune stops',
      'Sunset viewing'
    ],
    includesEs: [
      'Paseo en buggy de dunas',
      'Equipo de sandboard',
      'Instrucciones de seguridad',
      'Múltiples paradas en dunas',
      'Vista del atardecer'
    ],
    tips: [
      'Go for sunset tours - magical light!',
      'Lying-down boarding is easier for kids',
      'Bring goggles or sunglasses for sand',
      'Hold on tight in the buggy!',
      'Wax your board for more speed',
      'Great day trip from Lima or Paracas'
    ],
    tipsEs: [
      '¡Ve a los tours del atardecer - luz mágica!',
      'El sandboard acostado es más fácil para niños',
      'Trae gafas o lentes de sol para la arena',
      '¡Agárrate fuerte en el buggy!',
      'Encera tu tabla para más velocidad',
      'Gran excursión de un día desde Lima o Paracas'
    ],
    safetyNotes: [
      'Always wear seatbelt in buggy',
      'Start on smaller dunes',
      'Keep mouth closed on slopes',
      'Supervise young children closely'
    ],
    safetyNotesEs: [
      'Siempre usa cinturón en el buggy',
      'Comienza en dunas más pequeñas',
      'Mantén la boca cerrada en las pendientes',
      'Supervisa de cerca a los niños pequeños'
    ],
    relatedActivities: ['paracas-tour', 'nazca-lines-flight'],
    providers: [
      { name: 'Huacachina operators', familyFriendly: true },
      { name: 'Desert Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'caiman-spotting',
    name: 'Night Caiman Spotting',
    nameEs: 'Avistamiento Nocturno de Caimanes',
    type: 'nature',
    city: 'puerto-maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Venture into the Amazon by boat after dark to spot caimans by their glowing red eyes. This thrilling night safari introduces families to the jungle\'s nocturnal world, including frogs, insects, and the prehistoric-looking caimans.',
    descriptionEs: 'Aventúrate en el Amazonas en bote después del anochecer para ver caimanes por sus brillantes ojos rojos. Este emocionante safari nocturno introduce a las familias al mundo nocturno de la selva, incluyendo ranas, insectos y los caimanes de aspecto prehistórico.',
    whatToExpect: 'Board a canoe or small boat as darkness falls. Guides use flashlights to spot caiman eyes glowing red from riverbanks and shallows. May spot black caimans (larger) or spectacled caimans. Also see tarantulas, frogs, and nocturnal birds. Guides may safely catch small caimans for photos.',
    whatToExpectEs: 'Sube a una canoa o bote pequeño cuando cae la oscuridad. Los guías usan linternas para ver los ojos de caimanes brillando rojos desde las orillas y aguas poco profundas. Puede ver caimanes negros (más grandes) o caimanes de anteojos. También ve tarántulas, ranas y aves nocturnas. Los guías pueden atrapar pequeños caimanes de forma segura para fotos.',
    highlights: [
      'See glowing caiman eyes',
      'Thrilling night adventure',
      'Nocturnal wildlife spotting',
      'Quiet boat ride under stars',
      'Close encounters (safely)',
      'Learn about Amazon predators'
    ],
    highlightsEs: [
      'Ve los ojos brillantes de caimanes',
      'Emocionante aventura nocturna',
      'Avistamiento de vida silvestre nocturna',
      'Paseo tranquilo en bote bajo las estrellas',
      'Encuentros cercanos (seguros)',
      'Aprende sobre depredadores del Amazonas'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: 'Usually included in lodge packages',
    priceRangeEs: 'Usualmente incluido en paquetes de lodge',
    bestTime: 'Dry season best (May-Oct), 7-9pm',
    bestTimeEs: 'Mejor temporada seca (mayo-oct), 7-9pm',
    includes: [
      'Boat and guide',
      'Flashlights',
      'Safety equipment',
      'Wildlife interpretation',
      'Return transport'
    ],
    includesEs: [
      'Bote y guía',
      'Linternas',
      'Equipo de seguridad',
      'Interpretación de vida silvestre',
      'Transporte de regreso'
    ],
    tips: [
      'Bring bug spray - lots of insects at night',
      'Red flashlight filters disturb animals less',
      'Stay quiet for best sightings',
      'It\'s safe - caimans avoid humans',
      'Wear long sleeves and pants',
      'Magical introduction to Amazon nights'
    ],
    tipsEs: [
      'Trae repelente de insectos - muchos insectos de noche',
      'Filtros rojos de linterna molestan menos a los animales',
      'Quédate callado para mejores avistamientos',
      'Es seguro - los caimanes evitan a los humanos',
      'Usa mangas y pantalones largos',
      'Mágica introducción a las noches amazónicas'
    ],
    safetyNotes: [
      'Stay in the boat at all times',
      'Guides handle any animals',
      'Wear life jacket',
      'Keep hands inside boat'
    ],
    safetyNotesEs: [
      'Quédate en el bote en todo momento',
      'Los guías manejan cualquier animal',
      'Usa chaleco salvavidas',
      'Mantén las manos dentro del bote'
    ],
    relatedActivities: ['amazon-jungle-tour', 'piranha-fishing'],
    providers: [
      { name: 'Inkaterra', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true }
    ]
  },
  {
    slug: 'llama-trekking',
    name: 'Llama Trekking',
    nameEs: 'Trekking con Llamas',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Trek through the Andean highlands accompanied by friendly llamas who carry your gear. These gentle animals make perfect hiking companions for families, offering a unique cultural experience while exploring remote Inca trails.',
    descriptionEs: 'Camina por las tierras altas andinas acompañado de llamas amigables que cargan tu equipo. Estos gentiles animales son compañeros perfectos de senderismo para familias, ofreciendo una experiencia cultural única mientras exploras senderos Incas remotos.',
    whatToExpect: 'Meet your llama companions at a local farm. Learn to lead and care for them before setting off on scenic trails. Llamas carry packs, leaving you free to enjoy the hike. Routes vary from gentle walks to multi-day treks through stunning Andean landscapes.',
    whatToExpectEs: 'Conoce a tus compañeros llamas en una granja local. Aprende a guiarlas y cuidarlas antes de partir por senderos escénicos. Las llamas cargan los bultos, dejándote libre para disfrutar la caminata. Las rutas varían desde caminatas suaves hasta trekkings de varios días por impresionantes paisajes andinos.',
    highlights: [
      'Trek with friendly llamas',
      'Llamas carry your gear',
      'Stunning Andean scenery',
      'Learn about Andean traditions',
      'Visit local communities',
      'Photo opportunities galore'
    ],
    highlightsEs: [
      'Camina con llamas amigables',
      'Las llamas cargan tu equipo',
      'Impresionantes paisajes andinos',
      'Aprende sobre tradiciones andinas',
      'Visita comunidades locales',
      'Muchas oportunidades de fotos'
    ],
    familyRating: 5,
    minAge: 5,
    duration: 'Half day to multi-day',
    durationEs: 'Medio día a varios días',
    difficulty: 'easy',
    priceRange: '$60-200 per person',
    priceRangeEs: '$60-200 por persona',
    bestTime: 'Dry season (May-October)',
    bestTimeEs: 'Temporada seca (mayo-octubre)',
    includes: [
      'Llama companion',
      'Professional guide',
      'Snacks or meals',
      'Equipment for llama handling',
      'Community visit'
    ],
    includesEs: [
      'Compañero llama',
      'Guía profesional',
      'Snacks o comidas',
      'Equipo para manejar llamas',
      'Visita a comunidad'
    ],
    tips: [
      'Kids love the llamas - very gentle',
      'Shorter treks available for families',
      'Llamas are easier than horses for beginners',
      'Support local communities',
      'Great alternative to strenuous hikes',
      'Amazing photos guaranteed'
    ],
    tipsEs: [
      'A los niños les encantan las llamas - muy gentiles',
      'Caminatas más cortas disponibles para familias',
      'Las llamas son más fáciles que los caballos para principiantes',
      'Apoya a comunidades locales',
      'Gran alternativa a caminatas agotadoras',
      'Fotos increíbles garantizadas'
    ],
    safetyNotes: [
      'Llamas are gentle but respect their space',
      'Altitude precautions still apply',
      'Walk at a comfortable pace',
      'Guides handle llama care'
    ],
    safetyNotesEs: [
      'Las llamas son gentiles pero respeta su espacio',
      'Las precauciones de altitud aún aplican',
      'Camina a un ritmo cómodo',
      'Los guías manejan el cuidado de las llamas'
    ],
    relatedActivities: ['sacred-valley-tour', 'textile-workshop'],
    providers: [
      { name: 'Llama Pack', familyFriendly: true },
      { name: 'Llamapath', familyFriendly: true }
    ]
  },
  {
    slug: 'chocolate-making-cusco',
    name: 'Chocolate Making Workshop',
    nameEs: 'Taller de Elaboración de Chocolate',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn the ancient art of chocolate making using Peruvian cacao in a hands-on workshop. From grinding cacao beans to molding your own chocolate bars, this sweet activity traces chocolate\'s journey from the Amazon to your taste buds.',
    descriptionEs: 'Aprende el antiguo arte de hacer chocolate usando cacao peruano en un taller práctico. Desde moler granos de cacao hasta moldear tus propias barras de chocolate, esta dulce actividad traza el viaje del chocolate desde el Amazonas hasta tu paladar.',
    whatToExpect: 'Visit a chocolate workshop in Cusco. Learn about cacao history and Peru\'s role in chocolate production. Roast and grind cacao beans using traditional methods. Create your own chocolate bars with various flavors. Take home your creations!',
    whatToExpectEs: 'Visita un taller de chocolate en Cusco. Aprende sobre la historia del cacao y el rol de Perú en la producción de chocolate. Tuesta y muele granos de cacao usando métodos tradicionales. Crea tus propias barras de chocolate con varios sabores. ¡Lleva tus creaciones a casa!',
    highlights: [
      'Bean-to-bar chocolate making',
      'Traditional grinding methods',
      'Create your own flavors',
      'Take home your chocolate',
      'Learn about Peruvian cacao',
      'Delicious tastings'
    ],
    highlightsEs: [
      'Elaboración de chocolate del grano a la barra',
      'Métodos tradicionales de molienda',
      'Crea tus propios sabores',
      'Lleva tu chocolate a casa',
      'Aprende sobre el cacao peruano',
      'Deliciosas degustaciones'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$30-50 per person',
    priceRangeEs: '$30-50 por persona',
    bestTime: 'Any time, great for rainy days',
    bestTimeEs: 'Cualquier momento, genial para días lluviosos',
    includes: [
      'All chocolate-making materials',
      'Expert instruction',
      'Tastings',
      'Your own chocolate to take home',
      'Certificate'
    ],
    includesEs: [
      'Todos los materiales para hacer chocolate',
      'Instrucción experta',
      'Degustaciones',
      'Tu propio chocolate para llevar',
      'Certificado'
    ],
    tips: [
      'Book ahead - popular activity',
      'Perfect for a rainy afternoon',
      'Kids love making their own bars',
      'No chocolate experience needed',
      'Vegetarian/vegan options available',
      'Great souvenirs to take home'
    ],
    tipsEs: [
      'Reserva con anticipación - actividad popular',
      'Perfecto para una tarde lluviosa',
      'A los niños les encanta hacer sus propias barras',
      'No se necesita experiencia con chocolate',
      'Opciones vegetarianas/veganas disponibles',
      'Grandes recuerdos para llevar a casa'
    ],
    safetyNotes: [
      'Allergy information collected in advance',
      'Suitable for most dietary needs',
      'Nut-free options available'
    ],
    safetyNotesEs: [
      'Información de alergias recolectada con anticipación',
      'Adecuado para la mayoría de necesidades dietéticas',
      'Opciones sin nueces disponibles'
    ],
    relatedActivities: ['peruvian-cooking-class', 'market-tour-lima'],
    providers: [
      { name: 'ChocoMuseo', familyFriendly: true },
      { name: 'Museo del Cacao', familyFriendly: true }
    ]
  },
  {
    slug: 'river-rafting-urubamba',
    name: 'Urubamba River Rafting',
    nameEs: 'Rafting en el Río Urubamba',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Navigate the rushing waters of the Sacred Valley\'s Urubamba River on an exciting rafting adventure. With rapids ranging from Class II to IV, there are options for families with older children seeking thrills amidst stunning Andean scenery.',
    descriptionEs: 'Navega las aguas del río Urubamba del Valle Sagrado en una emocionante aventura de rafting. Con rápidos que van de Clase II a IV, hay opciones para familias con niños mayores que buscan emociones en medio de impresionantes paisajes andinos.',
    whatToExpect: 'Meet your guides and gear up with helmets, life jackets, and wetsuits. Learn paddling techniques before hitting the river. Navigate exciting rapids while enjoying views of Inca terraces and mountains. End with a riverside snack or lunch.',
    whatToExpectEs: 'Conoce a tus guías y equípate con cascos, chalecos salvavidas y trajes de neopreno. Aprende técnicas de remo antes de entrar al río. Navega emocionantes rápidos mientras disfrutas vistas de terrazas Incas y montañas. Termina con un snack o almuerzo junto al río.',
    highlights: [
      'Class II-IV rapids',
      'Sacred Valley scenery',
      'Professional guides',
      'Inca ruins from the river',
      'Wildlife sightings',
      'Adrenaline rush!'
    ],
    highlightsEs: [
      'Rápidos Clase II-IV',
      'Paisaje del Valle Sagrado',
      'Guías profesionales',
      'Ruinas Incas desde el río',
      'Avistamiento de vida silvestre',
      '¡Descarga de adrenalina!'
    ],
    familyRating: 4,
    minAge: 10,
    duration: 'Half day (3-4 hours)',
    durationEs: 'Medio día (3-4 horas)',
    difficulty: 'moderate',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'May-October (lower water, safer)',
    bestTimeEs: 'Mayo-octubre (agua más baja, más seguro)',
    includes: [
      'All rafting equipment',
      'Professional guide',
      'Safety briefing',
      'Transportation',
      'Snack or lunch',
      'Wetsuit if needed'
    ],
    includesEs: [
      'Todo el equipo de rafting',
      'Guía profesional',
      'Instrucciones de seguridad',
      'Transporte',
      'Snack o almuerzo',
      'Traje de neopreno si es necesario'
    ],
    tips: [
      'Family-friendly Class II sections available',
      'Dry season is safer for beginners',
      'Waterproof camera recommended',
      'Wear swimsuit under clothes',
      'Listen to guide instructions!',
      'Combine with Sacred Valley tour'
    ],
    tipsEs: [
      'Secciones Clase II para familias disponibles',
      'La temporada seca es más segura para principiantes',
      'Cámara impermeable recomendada',
      'Usa traje de baño debajo de la ropa',
      '¡Escucha las instrucciones del guía!',
      'Combina con tour del Valle Sagrado'
    ],
    safetyNotes: [
      'Must be able to swim',
      'Follow all guide instructions',
      'Life jackets mandatory',
      'Higher classes not for beginners'
    ],
    safetyNotesEs: [
      'Debes saber nadar',
      'Sigue todas las instrucciones del guía',
      'Chalecos salvavidas obligatorios',
      'Clases más altas no son para principiantes'
    ],
    relatedActivities: ['sacred-valley-tour', 'zip-line-cusco'],
    providers: [
      { name: 'Apumayo Expediciones', familyFriendly: true },
      { name: 'Eric Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'alpaca-farm-visit',
    name: 'Alpaca Farm Experience',
    nameEs: 'Experiencia en Granja de Alpacas',
    type: 'educational',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Visit a traditional alpaca farm to meet these adorable fluffy animals up close. Learn about alpaca wool production, traditional dyeing techniques, and the importance of these gentle creatures in Andean culture. Perfect for animal-loving families!',
    descriptionEs: 'Visita una granja tradicional de alpacas para conocer a estos adorables animales esponjosos de cerca. Aprende sobre la producción de lana de alpaca, técnicas tradicionales de teñido y la importancia de estas gentiles criaturas en la cultura andina. ¡Perfecto para familias amantes de los animales!',
    whatToExpect: 'Arrive at a working alpaca farm in the Sacred Valley. Meet alpacas, llamas, and sometimes vicuñas. Learn to feed them, learn about different breeds and fiber types. Watch traditional wool processing and natural dyeing. Shop for authentic alpaca products.',
    whatToExpectEs: 'Llega a una granja de alpacas en el Valle Sagrado. Conoce alpacas, llamas y a veces vicuñas. Aprende a alimentarlas, conoce diferentes razas y tipos de fibra. Observa el procesamiento tradicional de lana y teñido natural. Compra productos auténticos de alpaca.',
    highlights: [
      'Meet fluffy alpacas',
      'Feed and pet the animals',
      'Learn about wool production',
      'See natural dyeing process',
      'Shop for alpaca goods',
      'Perfect for kids!'
    ],
    highlightsEs: [
      'Conoce alpacas esponjosas',
      'Alimenta y acaricia a los animales',
      'Aprende sobre producción de lana',
      'Ve el proceso de teñido natural',
      'Compra productos de alpaca',
      '¡Perfecto para niños!'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    priceRange: '$10-30 per person',
    priceRangeEs: '$10-30 por persona',
    bestTime: 'Year-round, morning for active animals',
    bestTimeEs: 'Todo el año, mañana para animales activos',
    includes: [
      'Farm tour',
      'Animal interaction',
      'Wool processing demonstration',
      'Guide explanations',
      'Photo opportunities'
    ],
    includesEs: [
      'Tour de la granja',
      'Interacción con animales',
      'Demostración de procesamiento de lana',
      'Explicaciones del guía',
      'Oportunidades de fotos'
    ],
    tips: [
      'Alpacas are gentle and love being fed',
      'Great for young children',
      'Support local communities by buying products',
      'Baby alpacas extra cute in spring',
      'Combine with Sacred Valley sights',
      'Authentic souvenirs available'
    ],
    tipsEs: [
      'Las alpacas son gentiles y les encanta que las alimenten',
      'Genial para niños pequeños',
      'Apoya comunidades locales comprando productos',
      'Las crías de alpaca son extra lindas en primavera',
      'Combina con sitios del Valle Sagrado',
      'Recuerdos auténticos disponibles'
    ],
    safetyNotes: [
      'Alpacas are gentle but can spit',
      'Supervise small children',
      'Wash hands after feeding'
    ],
    safetyNotesEs: [
      'Las alpacas son gentiles pero pueden escupir',
      'Supervisa a niños pequeños',
      'Lava las manos después de alimentar'
    ],
    relatedActivities: ['textile-workshop', 'llama-trekking'],
    providers: [
      { name: 'Awanakancha', familyFriendly: true },
      { name: 'Centro de Textiles', familyFriendly: true }
    ]
  },
  {
    slug: 'zip-line-cusco',
    name: 'Sacred Valley Zip Line',
    nameEs: 'Tirolesa del Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Soar over the Sacred Valley on exhilarating zip lines with views of Inca terraces, mountains, and the Urubamba River far below. Multiple lines of varying lengths offer thrills for the whole family.',
    descriptionEs: 'Vuela sobre el Valle Sagrado en emocionantes tirolesas con vistas de terrazas Incas, montañas y el río Urubamba muy abajo. Múltiples líneas de diferentes longitudes ofrecen emociones para toda la familia.',
    whatToExpect: 'Safety briefing and equipment fitting at the starting point. Multiple zip lines of varying lengths and heights, connected by short hikes or suspended bridges. Incredible bird\'s-eye views of the Sacred Valley. Professional guides ensure safety throughout.',
    whatToExpectEs: 'Instrucciones de seguridad y ajuste de equipo en el punto de partida. Múltiples tirolesas de diferentes longitudes y alturas, conectadas por caminatas cortas o puentes colgantes. Increíbles vistas aéreas del Valle Sagrado. Guías profesionales aseguran la seguridad durante todo el recorrido.',
    highlights: [
      'Bird\'s-eye valley views',
      'Multiple zip lines',
      'Inca terraces from above',
      'Mountain panoramas',
      'Adrenaline adventure',
      'Safe for families'
    ],
    highlightsEs: [
      'Vistas aéreas del valle',
      'Múltiples tirolesas',
      'Terrazas Incas desde arriba',
      'Panoramas de montañas',
      'Aventura de adrenalina',
      'Seguro para familias'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Dry season (May-October) for best views',
    bestTimeEs: 'Temporada seca (mayo-octubre) para mejores vistas',
    includes: [
      'All safety equipment',
      'Professional guides',
      'Multiple zip lines',
      'Transportation (some operators)',
      'Photos/videos (some operators)'
    ],
    includesEs: [
      'Todo el equipo de seguridad',
      'Guías profesionales',
      'Múltiples tirolesas',
      'Transporte (algunos operadores)',
      'Fotos/videos (algunos operadores)'
    ],
    tips: [
      'Weight and height restrictions apply',
      'Not recommended for fear of heights',
      'Wear closed-toe shoes',
      'Secure loose items',
      'Morning for clearest views',
      'Great photos available for purchase'
    ],
    tipsEs: [
      'Aplican restricciones de peso y altura',
      'No recomendado para miedo a las alturas',
      'Usa zapatos cerrados',
      'Asegura objetos sueltos',
      'Mañana para vistas más claras',
      'Geniales fotos disponibles para comprar'
    ],
    safetyNotes: [
      'Follow all guide instructions',
      'Weight limits strictly enforced',
      'Not suitable for certain health conditions',
      'Helmets mandatory'
    ],
    safetyNotesEs: [
      'Sigue todas las instrucciones del guía',
      'Límites de peso estrictamente aplicados',
      'No adecuado para ciertas condiciones de salud',
      'Cascos obligatorios'
    ],
    relatedActivities: ['river-rafting-urubamba', 'via-ferrata-cusco'],
    providers: [
      { name: 'Natura Vive', familyFriendly: true },
      { name: 'Cola de Mono', familyFriendly: true }
    ]
  },
  {
    slug: 'night-jungle-walk',
    name: 'Night Jungle Walk',
    nameEs: 'Caminata Nocturna en la Selva',
    type: 'nature',
    city: 'puerto-maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Experience the Amazon rainforest after dark when the jungle truly comes alive. With flashlights and expert guides, discover nocturnal creatures like tarantulas, tree frogs, caimans, and glowing eyes in the darkness.',
    descriptionEs: 'Experimenta la selva amazónica después del anochecer cuando la jungla realmente cobra vida. Con linternas y guías expertos, descubre criaturas nocturnas como tarántulas, ranas arbóreas, caimanes y ojos brillantes en la oscuridad.',
    whatToExpect: '1-2 hour guided walks along jungle trails after dinner. Guides use flashlights to spot wildlife and explain nocturnal behaviors. A completely different jungle experience from daytime excursions.',
    whatToExpectEs: 'Caminatas guiadas de 1-2 horas por senderos de selva después de la cena. Los guías usan linternas para avistar fauna y explicar comportamientos nocturnos. Una experiencia de selva completamente diferente a las excursiones diurnas.',
    highlights: [
      'See tarantulas and giant insects',
      'Spot tree frogs and nocturnal birds',
      'Caiman eye-spotting on rivers',
      'Hear the symphony of jungle sounds',
      'Bioluminescent fungi (some areas)',
      'Unique wildlife not seen by day'
    ],
    highlightsEs: [
      'Ver tarántulas e insectos gigantes',
      'Avistar ranas arbóreas y aves nocturnas',
      'Avistamiento de ojos de caimanes en ríos',
      'Escuchar la sinfonía de sonidos de la selva',
      'Hongos bioluminiscentes (algunas áreas)',
      'Fauna única no vista de día'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'moderate',
    priceRange: 'Usually included in lodge packages',
    priceRangeEs: 'Usualmente incluido en paquetes de lodge',
    bestTime: 'Year-round, though dry season (May-Oct) has easier trail conditions',
    bestTimeEs: 'Todo el año, aunque temporada seca (mayo-oct) tiene mejores condiciones de senderos',
    includes: [
      'Expert naturalist guide',
      'Flashlight/headlamp',
      'Rubber boots',
      'Insect repellent',
      'First aid kit'
    ],
    includesEs: [
      'Guía naturalista experto',
      'Linterna/lámpara frontal',
      'Botas de goma',
      'Repelente de insectos',
      'Botiquín de primeros auxilios'
    ],
    tips: [
      'Not too scary for most kids 6+',
      'Wear long pants and sleeves',
      'Stay on the trail',
      'Bring camera with flash/night mode',
      'Embrace the adventure mindset',
      'Ask guides about sounds you hear'
    ],
    tipsEs: [
      'No muy aterrador para la mayoría de niños 6+',
      'Usa pantalones y mangas largas',
      'Mantente en el sendero',
      'Lleva cámara con flash/modo nocturno',
      'Adopta mentalidad de aventura',
      'Pregunta a los guías sobre los sonidos que escuchas'
    ],
    safetyNotes: [
      'Always follow guide instructions',
      'Stay with the group',
      'Wear closed-toe shoes',
      'Avoid touching wildlife',
      'Bring backup light source'
    ],
    safetyNotesEs: [
      'Siempre sigue instrucciones del guía',
      'Mantente con el grupo',
      'Usa zapatos cerrados',
      'Evita tocar la fauna',
      'Lleva fuente de luz de respaldo'
    ],
    relatedActivities: ['amazon-jungle-tour', 'caiman-spotting', 'canopy-walkway'],
    providers: [
      { name: 'Inkaterra', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true }
    ]
  },
  {
    slug: 'horseback-riding-sacred-valley',
    name: 'Sacred Valley Horseback Riding',
    nameEs: 'Cabalgata en el Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the stunning Sacred Valley on horseback, riding Peruvian Paso horses through ancient Inca agricultural terraces, traditional villages, and scenic mountain trails. Perfect for families seeking adventure with incredible views.',
    descriptionEs: 'Explora el impresionante Valle Sagrado a caballo, montando caballos Paso Peruano a través de antiguas terrazas agrícolas Incas, pueblos tradicionales y senderos de montaña escénicos. Perfecto para familias que buscan aventura con vistas increíbles.',
    whatToExpect: 'Rides from 1 hour to full day. Gentle Paso horses suitable for beginners. Routes pass through farmland, Inca sites, and local communities. Guides assist beginners and ensure safety.',
    whatToExpectEs: 'Paseos desde 1 hora hasta día completo. Caballos Paso gentiles adecuados para principiantes. Las rutas pasan por tierras de cultivo, sitios Incas y comunidades locales. Los guías asisten a principiantes y aseguran la seguridad.',
    highlights: [
      'Ride famous Peruvian Paso horses',
      'View Inca archaeological sites',
      'Ride through traditional villages',
      'Spectacular mountain scenery',
      'Suitable for all skill levels',
      'Learn about Andean culture'
    ],
    highlightsEs: [
      'Montar famosos caballos Paso Peruano',
      'Ver sitios arqueológicos Incas',
      'Cabalgar a través de pueblos tradicionales',
      'Espectacular paisaje de montaña',
      'Adecuado para todos los niveles',
      'Aprender sobre cultura andina'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '1-6 hours',
    durationEs: '1-6 horas',
    difficulty: 'easy',
    priceRange: '$30-120 depending on duration',
    priceRangeEs: '$30-120 dependiendo de la duración',
    bestTime: 'April to October for dry trails and clear views',
    bestTimeEs: 'Abril a octubre para senderos secos y vistas claras',
    includes: [
      'Horse and saddle',
      'Helmets for children',
      'Experienced guide',
      'Safety briefing',
      'Water (most operators)'
    ],
    includesEs: [
      'Caballo y montura',
      'Cascos para niños',
      'Guía experimentado',
      'Instrucciones de seguridad',
      'Agua (mayoría de operadores)'
    ],
    tips: [
      'Wear long pants',
      'Closed-toe shoes required',
      'Shorter rides for first-timers',
      'Book morning for cooler weather',
      'Acclimate to altitude first',
      'Sunscreen essential'
    ],
    tipsEs: [
      'Usa pantalones largos',
      'Zapatos cerrados requeridos',
      'Paseos más cortos para primerizos',
      'Reserva en la mañana para clima más fresco',
      'Aclimatarse a la altitud primero',
      'Bloqueador solar esencial'
    ],
    safetyNotes: [
      'Helmets provided and recommended',
      'Listen to guide instructions',
      'Horses matched to rider experience',
      'Altitude affects energy levels'
    ],
    safetyNotesEs: [
      'Cascos proporcionados y recomendados',
      'Escucha instrucciones del guía',
      'Caballos asignados según experiencia del jinete',
      'La altitud afecta niveles de energía'
    ],
    relatedActivities: ['llama-trekking', 'sacred-valley-tour', 'mountain-biking'],
    providers: [
      { name: 'Sol y Luna', familyFriendly: true },
      { name: 'Wayra Ranch', familyFriendly: true }
    ]
  },
  {
    slug: 'stand-up-paddleboarding',
    name: 'Lake Paddleboarding (SUP)',
    nameEs: 'Paddleboarding en Lago (SUP)',
    type: 'adventure',
    city: 'huacachina',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Glide across the emerald waters of Huacachina\'s famous oasis lagoon on a stand-up paddleboard. This calm, beginner-friendly activity offers unique views of surrounding sand dunes and is a refreshing break from desert tours.',
    descriptionEs: 'Deslízate sobre las aguas esmeralda de la famosa laguna oasis de Huacachina en un paddleboard. Esta actividad tranquila y apta para principiantes ofrece vistas únicas de las dunas circundantes y es un descanso refrescante de los tours del desierto.',
    whatToExpect: 'Calm lake paddling with instruction for beginners. Boards provided at lakeside rentals. Best in morning before afternoon winds. Combine with sandboarding and dune buggy tours.',
    whatToExpectEs: 'Remar en lago tranquilo con instrucción para principiantes. Tablas disponibles en alquileres junto al lago. Mejor en la mañana antes de los vientos de la tarde. Combina con sandboarding y tours en buggy.',
    highlights: [
      'Unique oasis setting',
      'Calm, beginner-friendly waters',
      'Great photo opportunities',
      'Cool off from desert heat',
      'View sand dunes from water',
      'Quick to learn'
    ],
    highlightsEs: [
      'Entorno único de oasis',
      'Aguas tranquilas aptas para principiantes',
      'Grandes oportunidades de fotos',
      'Refrescarse del calor del desierto',
      'Ver dunas desde el agua',
      'Rápido de aprender'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '30-60 minutes',
    durationEs: '30-60 minutos',
    difficulty: 'easy',
    priceRange: '$5-10 per hour',
    priceRangeEs: '$5-10 por hora',
    bestTime: 'Year-round, mornings best for calm conditions',
    bestTimeEs: 'Todo el año, mañanas mejores para condiciones tranquilas',
    includes: [
      'Paddleboard',
      'Paddle',
      'Basic instruction',
      'Life vest (some operators)'
    ],
    includesEs: [
      'Paddleboard',
      'Remo',
      'Instrucción básica',
      'Chaleco salvavidas (algunos operadores)'
    ],
    tips: [
      'Go in morning for stillest water',
      'Start on knees before standing',
      'Bring waterproof bag for phone',
      'Wear swimsuit',
      'Combine with sandboarding',
      'Very affordable activity'
    ],
    tipsEs: [
      'Ve en la mañana para agua más tranquila',
      'Empieza de rodillas antes de pararte',
      'Lleva bolsa impermeable para teléfono',
      'Usa traje de baño',
      'Combina con sandboarding',
      'Actividad muy económica'
    ],
    safetyNotes: [
      'Calm lake - minimal risk',
      'Life vests recommended for children',
      'Stay near shore',
      'Watch for other watercraft'
    ],
    safetyNotesEs: [
      'Lago tranquilo - riesgo mínimo',
      'Chalecos salvavidas recomendados para niños',
      'Mantente cerca de la orilla',
      'Cuidado con otras embarcaciones'
    ],
    relatedActivities: ['sandboarding-huacachina', 'dune-buggy', 'kayaking'],
    providers: [
      { name: 'Lakeside rentals', familyFriendly: true },
      { name: 'Banana\'s Adventure', familyFriendly: true }
    ]
  },
  {
    slug: 'butterfly-farm-visit',
    name: 'Amazon Butterfly Farm',
    nameEs: 'Mariposario Amazónico',
    type: 'educational',
    city: 'tarapoto',
    region: 'San Martín Region',
    regionEs: 'Región San Martín',
    description: 'Walk through enclosed gardens filled with hundreds of colorful butterflies at Amazon region butterfly farms. Learn about butterfly life cycles, see caterpillars and cocoons, and have butterflies land on you for magical photos.',
    descriptionEs: 'Camina a través de jardines cerrados llenos de cientos de mariposas coloridas en las granjas de mariposas de la región amazónica. Aprende sobre ciclos de vida de mariposas, ve orugas y capullos, y deja que las mariposas se posen en ti para fotos mágicas.',
    whatToExpect: 'Guided tours through screened gardens. Guides explain metamorphosis and species identification. Best times are sunny mornings when butterflies are most active. Some farms include other insects and small animals.',
    whatToExpectEs: 'Tours guiados a través de jardines con malla. Los guías explican la metamorfosis e identificación de especies. Los mejores momentos son mañanas soleadas cuando las mariposas están más activas. Algunas granjas incluyen otros insectos y animales pequeños.',
    highlights: [
      'Hundreds of free-flying butterflies',
      'See morpho butterflies up close',
      'Learn about metamorphosis',
      'Photo opportunities (butterflies land on you)',
      'Educational for all ages',
      'Climate-controlled gardens'
    ],
    highlightsEs: [
      'Cientos de mariposas volando libremente',
      'Ver mariposas morpho de cerca',
      'Aprender sobre metamorfosis',
      'Oportunidades de fotos (mariposas se posan en ti)',
      'Educativo para todas las edades',
      'Jardines climatizados'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    priceRange: '$5-15',
    priceRangeEs: '$5-15',
    bestTime: 'Sunny mornings for most active butterflies',
    bestTimeEs: 'Mañanas soleadas para mariposas más activas',
    includes: [
      'Guided tour',
      'Entry to all areas',
      'Educational information',
      'Photo opportunities'
    ],
    includesEs: [
      'Tour guiado',
      'Entrada a todas las áreas',
      'Información educativa',
      'Oportunidades de fotos'
    ],
    tips: [
      'Wear bright colors to attract butterflies',
      'Move slowly and quietly',
      'No touching butterflies',
      'Sunny weather is best',
      'Combine with jungle lodge stay',
      'Great for toddlers and young kids'
    ],
    tipsEs: [
      'Usa colores brillantes para atraer mariposas',
      'Muévete lenta y silenciosamente',
      'No toques las mariposas',
      'El clima soleado es mejor',
      'Combina con estadía en lodge de selva',
      'Genial para niños pequeños'
    ],
    safetyNotes: [
      'Very safe activity',
      'Stay on pathways',
      'No flash photography (some farms)',
      'Check for escape doors when entering/exiting'
    ],
    safetyNotesEs: [
      'Actividad muy segura',
      'Mantente en los senderos',
      'Sin fotografía con flash (algunas granjas)',
      'Revisa puertas de escape al entrar/salir'
    ],
    relatedActivities: ['amazon-jungle-tour', 'birdwatching', 'chocolate-making'],
    providers: [
      { name: 'Mariposario Tarapoto', familyFriendly: true },
      { name: 'Various jungle lodges', familyFriendly: true }
    ]
  },
  {
    slug: 'surfing-lessons',
    name: 'Surfing Lessons',
    nameEs: 'Clases de Surf',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Learn to surf on Peru\'s Pacific coast, which offers consistent waves perfect for beginners. Miraflores and Huanchaco beaches provide gentle waves, warm instructors, and family-friendly surf schools with all equipment included.',
    descriptionEs: 'Aprende a surfear en la costa del Pacífico de Perú, que ofrece olas consistentes perfectas para principiantes. Las playas de Miraflores y Huanchaco proporcionan olas suaves, instructores cálidos y escuelas de surf familiares con todo el equipo incluido.',
    whatToExpect: '1-2 hour lessons including beach safety, paddling practice, and standing on the board. Wetsuits and boards provided. Most kids can stand up by end of first lesson.',
    whatToExpectEs: 'Lecciones de 1-2 horas incluyendo seguridad en la playa, práctica de remo y pararse en la tabla. Trajes de neopreno y tablas proporcionados. La mayoría de los niños pueden pararse al final de la primera lección.',
    highlights: [
      'Beginner-friendly waves',
      'All equipment provided',
      'Patient bilingual instructors',
      'Year-round surfing possible',
      'Great Peruvian surf culture',
      'Multiple beach options'
    ],
    highlightsEs: [
      'Olas amigables para principiantes',
      'Todo el equipo proporcionado',
      'Instructores bilingües pacientes',
      'Surf posible todo el año',
      'Gran cultura de surf peruana',
      'Múltiples opciones de playa'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '1-2 hours per lesson',
    durationEs: '1-2 horas por lección',
    difficulty: 'moderate',
    priceRange: '$30-60 per lesson',
    priceRangeEs: '$30-60 por lección',
    bestTime: 'Year-round. Summer (Dec-Mar) has warmer water. Winter has larger waves.',
    bestTimeEs: 'Todo el año. Verano (dic-mar) tiene agua más cálida. Invierno tiene olas más grandes.',
    includes: [
      'Surfboard',
      'Wetsuit',
      'Instructor',
      'Safety briefing',
      'Beach access',
      'Sometimes photos/video'
    ],
    includesEs: [
      'Tabla de surf',
      'Traje de neopreno',
      'Instructor',
      'Instrucciones de seguridad',
      'Acceso a la playa',
      'A veces fotos/video'
    ],
    tips: [
      'Book morning lessons for calmer water',
      'Apply reef-safe sunscreen before',
      'Eat light meal 1-2 hours before',
      'Huanchaco great for beginners',
      'Lima Miraflores very convenient',
      'Kids often learn faster than adults!'
    ],
    tipsEs: [
      'Reserva lecciones matutinas para agua más tranquila',
      'Aplica bloqueador solar reef-safe antes',
      'Come comida ligera 1-2 horas antes',
      'Huanchaco genial para principiantes',
      'Lima Miraflores muy conveniente',
      '¡Los niños a menudo aprenden más rápido que los adultos!'
    ],
    safetyNotes: [
      'Always surf with instructor supervision',
      'Learn rip current awareness',
      'Proper warm-up prevents injuries',
      'Stay in designated areas'
    ],
    safetyNotesEs: [
      'Siempre surfea con supervisión del instructor',
      'Aprende sobre corrientes de resaca',
      'Calentamiento adecuado previene lesiones',
      'Mantente en áreas designadas'
    ],
    relatedActivities: ['stand-up-paddleboarding', 'beach-day', 'kayaking'],
    providers: [
      { name: 'Pukana Surf', familyFriendly: true },
      { name: 'Larcomar Surf School', familyFriendly: true }
    ]
  },
  {
    slug: 'pisco-tasting-tour',
    name: 'Pisco Vineyard & Tasting Tour',
    nameEs: 'Tour de Viñedos y Degustación de Pisco',
    type: 'culinary',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Visit historic pisco distilleries and vineyards in Peru\'s wine country. Learn how Peru\'s national spirit is made, from grape to bottle. Many bodegas offer grape juice for kids and family-friendly tours of the traditional production process.',
    descriptionEs: 'Visita destilerías históricas de pisco y viñedos en la región vinícola de Perú. Aprende cómo se hace el licor nacional de Perú, desde la uva hasta la botella. Muchas bodegas ofrecen jugo de uva para niños y tours familiares del proceso tradicional de producción.',
    whatToExpect: 'Tour historic haciendas, see copper stills, learn about grape varieties, and taste different pisco styles. Kids enjoy seeing the process and often get grape juice tastings. Many bodegas have gardens and peacocks.',
    whatToExpectEs: 'Recorre haciendas históricas, ve alambiques de cobre, aprende sobre variedades de uva y prueba diferentes estilos de pisco. Los niños disfrutan viendo el proceso y a menudo reciben degustaciones de jugo de uva. Muchas bodegas tienen jardines y pavorreales.',
    highlights: [
      'Historic hacienda settings',
      'Traditional copper stills',
      'Grape juice for kids',
      'Pisco sour demonstration',
      'Beautiful vineyard scenery',
      'Cultural education'
    ],
    highlightsEs: [
      'Entornos de haciendas históricas',
      'Alambiques de cobre tradicionales',
      'Jugo de uva para niños',
      'Demostración de pisco sour',
      'Hermoso paisaje de viñedos',
      'Educación cultural'
    ],
    familyRating: 4,
    minAge: 3,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$10-30 per person',
    priceRangeEs: '$10-30 por persona',
    bestTime: 'March (harvest season) is most exciting. Year-round visits possible.',
    bestTimeEs: 'Marzo (temporada de cosecha) es más emocionante. Visitas posibles todo el año.',
    includes: [
      'Guided tour',
      'Pisco tastings (adults)',
      'Grape juice (kids)',
      'History presentation',
      'Garden access',
      'Sometimes lunch options'
    ],
    includesEs: [
      'Tour guiado',
      'Degustaciones de pisco (adultos)',
      'Jugo de uva (niños)',
      'Presentación histórica',
      'Acceso al jardín',
      'A veces opciones de almuerzo'
    ],
    tips: [
      'Combine with Huacachina sandboarding',
      'Vendimia festival in March is amazing',
      'Tacama and Vista Alegre are family-friendly',
      'Book ahead for harvest season',
      'Don\'t drink and drive - use tour',
      'Kids love the peacocks at some bodegas'
    ],
    tipsEs: [
      'Combina con sandboarding en Huacachina',
      'El festival de Vendimia en marzo es increíble',
      'Tacama y Vista Alegre son familiares',
      'Reserva con anticipación para temporada de cosecha',
      'No bebas y conduzcas - usa tour',
      'A los niños les encantan los pavorreales en algunas bodegas'
    ],
    safetyNotes: [
      'Adults only for alcohol tasting',
      'Designated driver or tour recommended',
      'Stay on marked paths in vineyards',
      'Sun protection in outdoor areas'
    ],
    safetyNotesEs: [
      'Solo adultos para degustación de alcohol',
      'Conductor designado o tour recomendado',
      'Mantente en senderos marcados en viñedos',
      'Protección solar en áreas exteriores'
    ],
    relatedActivities: ['sandboarding-huacachina', 'peruvian-cooking-class', 'wine-tasting'],
    providers: [
      { name: 'Tacama Winery', familyFriendly: true },
      { name: 'Vista Alegre', familyFriendly: true }
    ]
  },
  {
    slug: 'textile-weaving-workshop',
    name: 'Traditional Textile Weaving Workshop',
    nameEs: 'Taller de Tejido Tradicional',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn the ancient art of Andean textile weaving from master weavers in Cusco or Sacred Valley communities. Discover how natural dyes are made from plants and insects, and try weaving on a traditional backstrap loom.',
    descriptionEs: 'Aprende el arte antiguo del tejido textil andino de maestras tejedoras en comunidades de Cusco o el Valle Sagrado. Descubre cómo se hacen los tintes naturales de plantas e insectos, e intenta tejer en un telar de cintura tradicional.',
    whatToExpect: 'Interactive workshops where you learn about natural dyes (cochineal, plants), spinning wool, and basic weaving techniques. Take home a small woven piece. Incredible for understanding Andean culture.',
    whatToExpectEs: 'Talleres interactivos donde aprendes sobre tintes naturales (cochinilla, plantas), hilado de lana y técnicas básicas de tejido. Llévate a casa una pequeña pieza tejida. Increíble para entender la cultura andina.',
    highlights: [
      'Learn from master weavers',
      'Natural dye demonstration',
      'Try backstrap loom weaving',
      'Take home your creation',
      'Support local communities',
      'Understand textile symbolism'
    ],
    highlightsEs: [
      'Aprende de maestras tejedoras',
      'Demostración de tintes naturales',
      'Intenta tejer en telar de cintura',
      'Llévate tu creación a casa',
      'Apoya a comunidades locales',
      'Entiende el simbolismo textil'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    difficulty: 'easy',
    priceRange: '$20-60 per person',
    priceRangeEs: '$20-60 por persona',
    bestTime: 'Year-round. Mornings when weavers are freshest.',
    bestTimeEs: 'Todo el año. Mañanas cuando las tejedoras están más frescas.',
    includes: [
      'All materials',
      'Expert instruction',
      'Natural dye demonstration',
      'Small woven item to keep',
      'Community visit',
      'Often includes tea/snack'
    ],
    includesEs: [
      'Todos los materiales',
      'Instrucción experta',
      'Demostración de tintes naturales',
      'Pequeño artículo tejido para llevarse',
      'Visita a la comunidad',
      'A menudo incluye té/bocadillo'
    ],
    tips: [
      'Chinchero has famous weaving tradition',
      'Kids love the cochineal bug dye demo',
      'Buying textiles supports families directly',
      'Ask about symbols and meanings',
      'Great rainy day activity',
      'Photos usually welcome'
    ],
    tipsEs: [
      'Chinchero tiene famosa tradición de tejido',
      'A los niños les encanta la demostración de tinte de cochinilla',
      'Comprar textiles apoya directamente a las familias',
      'Pregunta sobre símbolos y significados',
      'Gran actividad para día lluvioso',
      'Fotos usualmente bienvenidas'
    ],
    safetyNotes: [
      'Very safe activity',
      'Supervision for young children with tools',
      'Some dyes may stain clothing',
      'Altitude considerations in highlands'
    ],
    safetyNotesEs: [
      'Actividad muy segura',
      'Supervisión para niños pequeños con herramientas',
      'Algunos tintes pueden manchar la ropa',
      'Consideraciones de altitud en tierras altas'
    ],
    relatedActivities: ['pottery-class', 'peruvian-cooking-class', 'community-visit'],
    providers: [
      { name: 'Centro de Textiles Tradicionales', familyFriendly: true },
      { name: 'Chinchero weaving cooperatives', familyFriendly: true }
    ]
  },
  {
    slug: 'lake-titicaca-kayaking',
    name: 'Lake Titicaca Kayaking',
    nameEs: 'Kayak en el Lago Titicaca',
    type: 'adventure',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Paddle across the world\'s highest navigable lake in a kayak, exploring the famous floating Uros islands and pristine waters with stunning Andean mountain views. A unique perspective on Lake Titicaca away from motorboat crowds.',
    descriptionEs: 'Rema a través del lago navegable más alto del mundo en kayak, explorando las famosas islas flotantes de los Uros y aguas prístinas con impresionantes vistas de montañas andinas. Una perspectiva única del Lago Titicaca lejos de las multitudes de lanchas.',
    whatToExpect: 'Half-day or full-day kayaking tours. Paddle to Uros floating islands, glide past totora reeds, and enjoy the high-altitude adventure. Guides provide instruction and ensure safety. Double kayaks available for families.',
    whatToExpectEs: 'Tours de kayak de medio día o día completo. Rema hacia las islas flotantes de los Uros, deslízate junto a totoras y disfruta la aventura de alta altitud. Los guías proporcionan instrucción y aseguran la seguridad. Kayaks dobles disponibles para familias.',
    highlights: [
      'World\'s highest navigable lake',
      'Visit Uros floating islands by kayak',
      'Stunning Andean scenery',
      'Peaceful alternative to boats',
      'Wildlife spotting opportunities',
      'Unique adventure experience'
    ],
    highlightsEs: [
      'Lago navegable más alto del mundo',
      'Visita islas flotantes Uros en kayak',
      'Impresionante paisaje andino',
      'Alternativa pacífica a las lanchas',
      'Oportunidades de avistamiento de fauna',
      'Experiencia de aventura única'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '3-6 hours',
    durationEs: '3-6 horas',
    difficulty: 'moderate',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'April to October (dry season) for calmest waters',
    bestTimeEs: 'Abril a octubre (temporada seca) para aguas más tranquilas',
    includes: [
      'Kayak and paddle',
      'Life jacket',
      'Waterproof bags',
      'Experienced guide',
      'Snacks/lunch on longer tours',
      'Hotel pickup (some operators)'
    ],
    includesEs: [
      'Kayak y remo',
      'Chaleco salvavidas',
      'Bolsas impermeables',
      'Guía experimentado',
      'Bocadillos/almuerzo en tours más largos',
      'Recogida en hotel (algunos operadores)'
    ],
    tips: [
      'Acclimate to altitude before kayaking',
      'Bring layers - weather changes fast',
      'Sun protection essential at altitude',
      'Double kayaks great for parent-child',
      'Morning departures for calmest water',
      'More intimate than boat tours'
    ],
    tipsEs: [
      'Aclimatarse a la altitud antes de kayak',
      'Lleva capas - el clima cambia rápido',
      'Protección solar esencial en altitud',
      'Kayaks dobles geniales para padre-hijo',
      'Salidas matutinas para agua más tranquila',
      'Más íntimo que tours en lancha'
    ],
    safetyNotes: [
      'Life jackets mandatory',
      'Altitude affects exertion - pace yourself',
      'Stay with group at all times',
      'Weather can change rapidly',
      'Swimming not recommended (very cold)'
    ],
    safetyNotesEs: [
      'Chalecos salvavidas obligatorios',
      'La altitud afecta el esfuerzo - tómatelo con calma',
      'Mantente con el grupo en todo momento',
      'El clima puede cambiar rápidamente',
      'Nadar no recomendado (muy frío)'
    ],
    relatedActivities: ['stand-up-paddleboarding', 'uros-islands-tour', 'amantani-homestay'],
    providers: [
      { name: 'Titicaca Peru Expeditions', familyFriendly: true },
      { name: 'Edgar Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'paragliding-lima',
    name: 'Lima Coastal Paragliding',
    nameEs: 'Parapente Costero en Lima',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Soar above Lima\'s dramatic coastal cliffs on a tandem paragliding flight over Miraflores. No experience needed - just sit back and enjoy spectacular views of the Pacific Ocean, Lima\'s skyline, and the famous Costa Verde cliffs.',
    descriptionEs: 'Vuela sobre los dramáticos acantilados costeros de Lima en un vuelo de parapente en tándem sobre Miraflores. No se necesita experiencia - solo siéntate y disfruta de espectaculares vistas del Océano Pacífico, el horizonte de Lima y los famosos acantilados de la Costa Verde.',
    whatToExpect: '10-15 minute tandem flights with certified pilots. Launch from Miraflores clifftop parks, glide along the coast, and land on the beach or park. Photos and videos usually included.',
    whatToExpectEs: 'Vuelos en tándem de 10-15 minutos con pilotos certificados. Despega desde los parques en los acantilados de Miraflores, planea a lo largo de la costa y aterriza en la playa o parque. Fotos y videos usualmente incluidos.',
    highlights: [
      'Tandem flight - no experience needed',
      'Stunning Pacific Ocean views',
      'Fly along Costa Verde cliffs',
      'Photos/videos included',
      'Year-round flying conditions',
      'Unique Lima perspective'
    ],
    highlightsEs: [
      'Vuelo en tándem - no se necesita experiencia',
      'Impresionantes vistas del Océano Pacífico',
      'Vuela a lo largo de acantilados de Costa Verde',
      'Fotos/videos incluidos',
      'Condiciones de vuelo todo el año',
      'Perspectiva única de Lima'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '10-15 minutes flight (1 hour total)',
    durationEs: '10-15 minutos de vuelo (1 hora total)',
    difficulty: 'easy',
    priceRange: '$70-100 per flight',
    priceRangeEs: '$70-100 por vuelo',
    bestTime: 'Year-round. Best conditions October-April. Afternoon thermals.',
    bestTimeEs: 'Todo el año. Mejores condiciones octubre-abril. Térmicas de la tarde.',
    includes: [
      'Tandem pilot',
      'All equipment',
      'Safety briefing',
      'Photos/video',
      'Insurance',
      'Beach/park landing'
    ],
    includesEs: [
      'Piloto tándem',
      'Todo el equipo',
      'Instrucciones de seguridad',
      'Fotos/video',
      'Seguro',
      'Aterrizaje en playa/parque'
    ],
    tips: [
      'Book online - operators at park can overcharge',
      'Wear closed-toe shoes',
      'Sunglasses recommended',
      'Dress in layers - cooler in air',
      'Great for older kids and teens',
      'Easily combined with Miraflores sightseeing'
    ],
    tipsEs: [
      'Reserva online - operadores en el parque pueden cobrar de más',
      'Usa zapatos cerrados',
      'Lentes de sol recomendados',
      'Viste en capas - más frío en el aire',
      'Genial para niños mayores y adolescentes',
      'Fácil de combinar con turismo en Miraflores'
    ],
    safetyNotes: [
      'Only fly with licensed operators',
      'Weather can cancel flights',
      'Weight limits apply (usually 90-100kg)',
      'Not recommended for severe fear of heights'
    ],
    safetyNotesEs: [
      'Solo vuela con operadores licenciados',
      'El clima puede cancelar vuelos',
      'Aplican límites de peso (usualmente 90-100kg)',
      'No recomendado para miedo severo a las alturas'
    ],
    relatedActivities: ['surfing-lessons', 'zip-line-sacred-valley', 'sandboarding-huacachina'],
    providers: [
      { name: 'Peru Fly', familyFriendly: true },
      { name: 'Aeroxtreme', familyFriendly: true }
    ]
  },
  {
    slug: 'mountain-biking-sacred-valley',
    name: 'Sacred Valley Mountain Biking',
    nameEs: 'Ciclismo de Montaña en el Valle Sagrado',
    type: 'adventure',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Ride through the spectacular Sacred Valley on mountain bikes, passing Inca ruins, traditional villages, and stunning Andean landscapes. Routes range from gentle downhill rides to challenging single-track trails for all skill levels.',
    descriptionEs: 'Recorre el espectacular Valle Sagrado en bicicletas de montaña, pasando ruinas Incas, pueblos tradicionales e impresionantes paisajes andinos. Las rutas van desde paseos suaves en descenso hasta senderos de single-track desafiantes para todos los niveles.',
    whatToExpect: 'Half-day or full-day guided rides. Most popular is Maras-Moray route (mostly downhill). Quality bikes, helmets, and support vehicle provided. Lunch at local restaurant often included.',
    whatToExpectEs: 'Paseos guiados de medio día o día completo. La más popular es la ruta Maras-Moray (mayormente en descenso). Bicicletas de calidad, cascos y vehículo de apoyo proporcionados. Almuerzo en restaurante local frecuentemente incluido.',
    highlights: [
      'Stunning Sacred Valley scenery',
      'Visit Maras salt mines by bike',
      'Moray circular terraces',
      'Downhill options for beginners',
      'Traditional village encounters',
      'Quality bikes and gear'
    ],
    highlightsEs: [
      'Impresionante paisaje del Valle Sagrado',
      'Visita las salinas de Maras en bicicleta',
      'Terrazas circulares de Moray',
      'Opciones de descenso para principiantes',
      'Encuentros con pueblos tradicionales',
      'Bicicletas y equipo de calidad'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '4-8 hours',
    durationEs: '4-8 horas',
    difficulty: 'moderate',
    priceRange: '$60-150 per person',
    priceRangeEs: '$60-150 por persona',
    bestTime: 'April to October (dry season) for best trail conditions',
    bestTimeEs: 'Abril a octubre (temporada seca) para mejores condiciones de sendero',
    includes: [
      'Quality mountain bike',
      'Helmet and gloves',
      'Professional guide',
      'Support vehicle',
      'Lunch (full day)',
      'Entrance fees'
    ],
    includesEs: [
      'Bicicleta de montaña de calidad',
      'Casco y guantes',
      'Guía profesional',
      'Vehículo de apoyo',
      'Almuerzo (día completo)',
      'Entradas'
    ],
    tips: [
      'Maras-Moray is best for families',
      'Mostly downhill - manageable for kids 8+',
      'Altitude affects stamina - pace yourself',
      'Wear layers - weather changes',
      'Sunscreen and sunglasses essential',
      'Book with reputable company'
    ],
    tipsEs: [
      'Maras-Moray es mejor para familias',
      'Mayormente en bajada - manejable para niños 8+',
      'La altitud afecta la resistencia - tómatelo con calma',
      'Usa capas - el clima cambia',
      'Bloqueador solar y lentes esenciales',
      'Reserva con compañía de buena reputación'
    ],
    safetyNotes: [
      'Helmets mandatory',
      'Follow guide instructions',
      'Support vehicle for emergencies',
      'Altitude affects performance'
    ],
    safetyNotesEs: [
      'Cascos obligatorios',
      'Sigue instrucciones del guía',
      'Vehículo de apoyo para emergencias',
      'La altitud afecta el rendimiento'
    ],
    relatedActivities: ['horseback-riding-sacred-valley', 'zip-line-sacred-valley', 'atv-tour'],
    providers: [
      { name: 'Gravity Peru', familyFriendly: true },
      { name: 'Sacred Rides', familyFriendly: true }
    ]
  },
  {
    slug: 'market-tour-cusco',
    name: 'Cusco Market Food Tour',
    nameEs: 'Tour Gastronómico del Mercado de Cusco',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the vibrant San Pedro Market with a local guide, tasting exotic fruits, fresh juices, local cheeses, and traditional dishes. Learn about Andean ingredients, bargain for souvenirs, and enjoy the sensory explosion of Peru\'s largest traditional market.',
    descriptionEs: 'Explora el vibrante Mercado San Pedro con un guía local, probando frutas exóticas, jugos frescos, quesos locales y platos tradicionales. Aprende sobre ingredientes andinos, regatea por souvenirs y disfruta la explosión sensorial del mercado tradicional más grande de Perú.',
    whatToExpect: '2-3 hour guided tours through market sections. Taste 10-15 different foods and drinks. Learn about ingredients, cooking methods, and Andean culture. Great for adventurous eaters!',
    whatToExpectEs: 'Tours guiados de 2-3 horas a través de secciones del mercado. Prueba 10-15 diferentes comidas y bebidas. Aprende sobre ingredientes, métodos de cocina y cultura andina. ¡Genial para comensales aventureros!',
    highlights: [
      'San Pedro Market exploration',
      '10+ food tastings included',
      'Exotic fruits and juices',
      'Traditional Andean dishes',
      'Local guide insights',
      'Shopping tips and bargaining'
    ],
    highlightsEs: [
      'Exploración del Mercado San Pedro',
      '10+ degustaciones incluidas',
      'Frutas exóticas y jugos',
      'Platos tradicionales andinos',
      'Conocimientos del guía local',
      'Tips de compras y regateo'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Morning (8-11am) when market is busiest and freshest',
    bestTimeEs: 'Mañana (8-11am) cuando el mercado está más lleno y fresco',
    includes: [
      'Local expert guide',
      '10+ food tastings',
      'Fresh juice samples',
      'Market navigation',
      'Cultural explanations',
      'Shopping assistance'
    ],
    includesEs: [
      'Guía local experto',
      '10+ degustaciones de comida',
      'Muestras de jugos frescos',
      'Navegación del mercado',
      'Explicaciones culturales',
      'Asistencia de compras'
    ],
    tips: [
      'Come hungry!',
      'Try lucuma and chirimoya fruits',
      'Fresh juices are incredible',
      'Kids love trying new things',
      'Bring small bills for shopping',
      'Perfect morning activity'
    ],
    tipsEs: [
      '¡Ven con hambre!',
      'Prueba frutas lucuma y chirimoya',
      'Los jugos frescos son increíbles',
      'A los niños les encanta probar cosas nuevas',
      'Lleva billetes pequeños para compras',
      'Actividad perfecta para la mañana'
    ],
    safetyNotes: [
      'Stay with guide in crowded areas',
      'Watch belongings',
      'Inform guide of food allergies',
      'Eat only what guide recommends'
    ],
    safetyNotesEs: [
      'Mantente con el guía en áreas llenas',
      'Cuida tus pertenencias',
      'Informa al guía de alergias alimentarias',
      'Come solo lo que el guía recomienda'
    ],
    relatedActivities: ['peruvian-cooking-class', 'chocolate-making', 'pisco-tasting-tour'],
    providers: [
      { name: 'Cusco Food Tours', familyFriendly: true },
      { name: 'Flavors of Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'pottery-class-cusco',
    name: 'Traditional Pottery Workshop',
    nameEs: 'Taller de Cerámica Tradicional',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn the ancient art of Andean pottery from master ceramicists in Cusco or nearby villages like Raqchi. Work with clay using traditional techniques, create your own piece, and understand the symbolism in Inca and pre-Inca ceramic traditions.',
    descriptionEs: 'Aprende el arte antiguo de la cerámica andina de maestros ceramistas en Cusco o pueblos cercanos como Raqchi. Trabaja con arcilla usando técnicas tradicionales, crea tu propia pieza y entiende el simbolismo en las tradiciones cerámicas Inca y pre-Inca.',
    whatToExpect: 'Hands-on workshop learning to shape clay, understand Andean symbols, and create functional or decorative pieces. Take home your creation (dried or arrange shipping for fired pieces).',
    whatToExpectEs: 'Taller práctico aprendiendo a dar forma a la arcilla, entender símbolos andinos y crear piezas funcionales o decorativas. Llévate tu creación a casa (seca o coordina envío para piezas cocidas).',
    highlights: [
      'Learn from master potters',
      'Hands-on clay work',
      'Understand Andean symbols',
      'Create your own piece',
      'Traditional techniques',
      'Take home your work'
    ],
    highlightsEs: [
      'Aprende de maestros alfareros',
      'Trabajo práctico con arcilla',
      'Entiende símbolos andinos',
      'Crea tu propia pieza',
      'Técnicas tradicionales',
      'Llévate tu trabajo a casa'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$20-50 per person',
    priceRangeEs: '$20-50 por persona',
    bestTime: 'Year-round. Book in advance.',
    bestTimeEs: 'Todo el año. Reserva con anticipación.',
    includes: [
      'All materials',
      'Expert instruction',
      'History and culture lesson',
      'Your finished piece',
      'Often includes tea/snack',
      'Protective apron'
    ],
    includesEs: [
      'Todos los materiales',
      'Instrucción experta',
      'Lección de historia y cultura',
      'Tu pieza terminada',
      'A menudo incluye té/bocadillo',
      'Delantal protector'
    ],
    tips: [
      'Wear old clothes - clay is messy',
      'Kids absolutely love this activity',
      'No artistic skill needed',
      'Raqchi village is famous for pottery',
      'Great rainy day activity',
      'Book small group for best experience'
    ],
    tipsEs: [
      'Usa ropa vieja - la arcilla ensucia',
      'A los niños absolutamente les encanta esta actividad',
      'No se necesita habilidad artística',
      'El pueblo de Raqchi es famoso por su cerámica',
      'Gran actividad para día lluvioso',
      'Reserva grupo pequeño para mejor experiencia'
    ],
    safetyNotes: [
      'Very safe activity',
      'Supervision for young children',
      'Wash hands after',
      'Clay is non-toxic'
    ],
    safetyNotesEs: [
      'Actividad muy segura',
      'Supervisión para niños pequeños',
      'Lávate las manos después',
      'La arcilla no es tóxica'
    ],
    relatedActivities: ['textile-weaving-workshop', 'peruvian-cooking-class', 'chocolate-making'],
    providers: [
      { name: 'Pablo Seminario Workshop', familyFriendly: true },
      { name: 'Raqchi community workshops', familyFriendly: true }
    ]
  },
  {
    slug: 'birdwatching-manu',
    name: 'Birdwatching in Manu',
    nameEs: 'Observación de Aves en Manu',
    type: 'nature',
    city: 'puerto-maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Experience some of the world\'s best birdwatching in Manu National Park, home to over 1,000 bird species. From colorful macaws at clay licks to toucans and hummingbirds, this is a paradise for bird-loving families.',
    descriptionEs: 'Experimenta algunas de las mejores observaciones de aves del mundo en el Parque Nacional del Manu, hogar de más de 1,000 especies de aves. Desde coloridos guacamayos en collpas hasta tucanes y colibríes, es un paraíso para familias amantes de las aves.',
    whatToExpect: 'Early morning expeditions to clay licks where macaws gather, guided forest walks spotting rare species, tower hides for canopy viewing, and dedicated birding guides with spotting scopes. Multi-day stays at eco-lodges maximize sightings.',
    whatToExpectEs: 'Expediciones temprano por la mañana a collpas donde se reúnen los guacamayos, caminatas guiadas por el bosque para avistar especies raras, torres de observación para ver el dosel, y guías especializados con telescopios. Las estadías de varios días en eco-lodges maximizan los avistamientos.',
    highlights: [
      'Macaw clay lick spectacle at dawn',
      'Over 1,000 bird species possible',
      'Colorful toucans and tanagers',
      'Rare harpy eagle sightings',
      'Hummingbird feeders at lodges',
      'Canopy observation towers'
    ],
    highlightsEs: [
      'Espectáculo de collpa de guacamayos al amanecer',
      'Más de 1,000 especies de aves posibles',
      'Coloridos tucanes y tangaras',
      'Avistamientos raros de águila harpía',
      'Comederos de colibríes en los lodges',
      'Torres de observación del dosel'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-5 days recommended',
    durationEs: '3-5 días recomendados',
    difficulty: 'moderate',
    priceRange: '$200-500 per person/day',
    priceRangeEs: '$200-500 por persona/día',
    bestTime: 'May-October (dry season) for best visibility',
    bestTimeEs: 'Mayo-octubre (temporada seca) para mejor visibilidad',
    includes: [
      'Expert birding guides',
      'Spotting scopes and binoculars',
      'Bird checklists',
      'Lodge accommodation',
      'All meals',
      'Transportation from Cusco'
    ],
    includesEs: [
      'Guías expertos en aves',
      'Telescopios y binoculares',
      'Listas de verificación de aves',
      'Alojamiento en lodge',
      'Todas las comidas',
      'Transporte desde Cusco'
    ],
    tips: [
      'Bring your own binoculars for each family member',
      'Kids love the macaw clay lick spectacle',
      'Early mornings are essential - best birds before 8am',
      'Bird ID apps help kids stay engaged',
      'Bring a bird journal for kids to draw and record',
      'Choose lodges with hummingbird feeders'
    ],
    tipsEs: [
      'Trae tus propios binoculares para cada miembro de la familia',
      'A los niños les encanta el espectáculo de la collpa de guacamayos',
      'Las mañanas tempranas son esenciales - mejores aves antes de las 8am',
      'Apps de identificación de aves mantienen a los niños interesados',
      'Trae un diario de aves para que los niños dibujen y registren',
      'Elige lodges con comederos de colibríes'
    ],
    safetyNotes: [
      'Stay quiet on trails',
      'Follow guide instructions',
      'Wear neutral colors',
      'Apply insect repellent',
      'Carry water on walks'
    ],
    safetyNotesEs: [
      'Mantente en silencio en los senderos',
      'Sigue las instrucciones del guía',
      'Usa colores neutros',
      'Aplica repelente de insectos',
      'Lleva agua en las caminatas'
    ],
    relatedActivities: ['amazon-jungle-tour', 'night-jungle-walk', 'tambopata-wildlife'],
    providers: [
      { name: 'Manu Wildlife Center', familyFriendly: true },
      { name: 'Cock of the Rock Lodge', familyFriendly: true },
      { name: 'Manu Paradise Lodge', familyFriendly: true }
    ]
  },
  {
    slug: 'atv-sacred-valley',
    name: 'ATV Adventure in Sacred Valley',
    nameEs: 'Aventura en Cuatrimoto en el Valle Sagrado',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the stunning Sacred Valley landscapes on exciting ATV tours. Ride through Andean villages, past agricultural terraces, and enjoy panoramic mountain views. Perfect for adventure-seeking families with older children.',
    descriptionEs: 'Explora los impresionantes paisajes del Valle Sagrado en emocionantes tours en cuatrimoto. Recorre aldeas andinas, terrazas agrícolas y disfruta de vistas panorámicas de las montañas. Perfecto para familias aventureras con niños mayores.',
    whatToExpect: 'After safety briefing and practice, ride single or double ATVs through scenic trails. Routes pass through traditional villages, beside rivers, and offer stops at viewpoints. Guides lead the way, ensuring safety while maximizing fun.',
    whatToExpectEs: 'Después de una sesión de seguridad y práctica, maneja cuatrimotos individuales o dobles por senderos escénicos. Las rutas pasan por aldeas tradicionales, junto a ríos, y ofrecen paradas en miradores. Los guías lideran el camino, asegurando la seguridad mientras maximizan la diversión.',
    highlights: [
      'Panoramic Sacred Valley views',
      'Visit traditional Andean villages',
      'Cross rivers and streams',
      'Photo stops at scenic viewpoints',
      'Ride through ancient terraces',
      'Optional Maras salt mines visit'
    ],
    highlightsEs: [
      'Vistas panorámicas del Valle Sagrado',
      'Visitar aldeas andinas tradicionales',
      'Cruzar ríos y arroyos',
      'Paradas para fotos en miradores',
      'Recorrer terrazas antiguas',
      'Visita opcional a las salineras de Maras'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    difficulty: 'moderate',
    priceRange: '$60-120 per person',
    priceRangeEs: '$60-120 por persona',
    bestTime: 'April-November (dry season) for best conditions',
    bestTimeEs: 'Abril-noviembre (temporada seca) para mejores condiciones',
    includes: [
      'ATV and fuel',
      'Safety gear (helmet, goggles, gloves)',
      'Experienced guide',
      'Safety briefing and practice',
      'Hotel pickup and drop-off',
      'Water bottle'
    ],
    includesEs: [
      'Cuatrimoto y combustible',
      'Equipo de seguridad (casco, gafas, guantes)',
      'Guía experimentado',
      'Sesión de seguridad y práctica',
      'Recogida y regreso al hotel',
      'Botella de agua'
    ],
    tips: [
      'Kids under 16 ride as passengers with parents',
      'Wear clothes that can get dusty/muddy',
      'Bring sunglasses and sunscreen',
      'Book morning tours for clearer views',
      'Half-day tours better for families',
      'Book double ATVs for smaller children'
    ],
    tipsEs: [
      'Niños menores de 16 van como pasajeros con los padres',
      'Usa ropa que pueda ensuciarse con polvo/barro',
      'Trae gafas de sol y protector solar',
      'Reserva tours matutinos para vistas más claras',
      'Tours de medio día son mejores para familias',
      'Reserva cuatrimotos dobles para niños pequeños'
    ],
    safetyNotes: [
      'Follow guide instructions exactly',
      'Drive at safe speeds',
      'Keep safe distance between vehicles',
      'Wear all provided safety gear',
      'No riding experience needed'
    ],
    safetyNotesEs: [
      'Sigue las instrucciones del guía exactamente',
      'Maneja a velocidades seguras',
      'Mantén distancia segura entre vehículos',
      'Usa todo el equipo de seguridad proporcionado',
      'No se necesita experiencia previa'
    ],
    relatedActivities: ['mountain-biking-sacred-valley', 'horseback-sacred-valley', 'zipline-sacred-valley'],
    providers: [
      { name: 'Action Valley', website: 'https://actionvalley.com', familyFriendly: true },
      { name: 'Sacred Valley ATV Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'whale-watching-mancora',
    name: 'Whale Watching in Máncora',
    nameEs: 'Avistamiento de Ballenas en Máncora',
    type: 'nature',
    city: 'mancora',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    description: 'Witness the majestic humpback whales during their annual migration along Peru\'s northern coast. From July to October, these gentle giants pass through the warm waters near Máncora, offering unforgettable family encounters.',
    descriptionEs: 'Presencia las majestuosas ballenas jorobadas durante su migración anual a lo largo de la costa norte del Perú. De julio a octubre, estos gentiles gigantes pasan por las aguas cálidas cerca de Máncora, ofreciendo encuentros familiares inolvidables.',
    whatToExpect: 'Boat excursions of 2-3 hours take you to whale watching zones. Experienced captains locate pods, allowing close-up views of breaching, tail slapping, and mother-calf pairs. Marine biologists often accompany tours with educational commentary.',
    whatToExpectEs: 'Excursiones en bote de 2-3 horas te llevan a zonas de avistamiento de ballenas. Capitanes experimentados localizan grupos, permitiendo vistas cercanas de saltos, golpes de cola y parejas de madre y cría. Biólogos marinos a menudo acompañan los tours con comentarios educativos.',
    highlights: [
      'Humpback whale breaching',
      'Mother and calf pairs',
      'Tail slapping displays',
      'Sea turtle sightings',
      'Dolphin pods common',
      'Marine biologist guides'
    ],
    highlightsEs: [
      'Saltos de ballenas jorobadas',
      'Parejas de madre y cría',
      'Exhibiciones de golpes de cola',
      'Avistamientos de tortugas marinas',
      'Grupos de delfines comunes',
      'Guías biólogos marinos'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'July-October (whale migration season)',
    bestTimeEs: 'Julio-octubre (temporada de migración de ballenas)',
    includes: [
      'Boat excursion',
      'Life jackets',
      'Experienced captain',
      'Marine biologist guide (some tours)',
      'Drinking water',
      'Sea sickness tablets available'
    ],
    includesEs: [
      'Excursión en bote',
      'Chalecos salvavidas',
      'Capitán experimentado',
      'Guía biólogo marino (algunos tours)',
      'Agua potable',
      'Tabletas para mareo disponibles'
    ],
    tips: [
      'Book July-September for best sightings',
      'Morning tours have calmer seas',
      'Take motion sickness medication 1 hour before',
      'Bring binoculars and cameras with zoom',
      'Dress in layers - ocean can be cool',
      'Be patient - whales don\'t perform on schedule!'
    ],
    tipsEs: [
      'Reserva julio-septiembre para mejores avistamientos',
      'Los tours matutinos tienen mares más calmados',
      'Toma medicamento para mareo 1 hora antes',
      'Trae binoculares y cámaras con zoom',
      'Vístete en capas - el océano puede ser frío',
      '¡Sé paciente - las ballenas no actúan según horario!'
    ],
    safetyNotes: [
      'Wear life jacket at all times',
      'Hold onto rails when standing',
      'Listen to captain instructions',
      'Boats maintain safe distance from whales',
      'Seasickness medication recommended'
    ],
    safetyNotesEs: [
      'Usa chaleco salvavidas en todo momento',
      'Agárrate de las barandas al estar de pie',
      'Escucha las instrucciones del capitán',
      'Los botes mantienen distancia segura de las ballenas',
      'Se recomienda medicamento para mareo'
    ],
    relatedActivities: ['surfing-mancora', 'sea-turtle-encounter', 'beach-day-mancora'],
    providers: [
      { name: 'Máncora Marina Tours', familyFriendly: true },
      { name: 'Pacific Adventures Peru', familyFriendly: true },
      { name: 'Whale Watch Máncora', familyFriendly: true }
    ]
  },
  {
    slug: 'canyoning-lunahuana',
    name: 'Canyoning in Lunahuaná',
    nameEs: 'Cañonismo en Lunahuaná',
    type: 'adventure',
    city: 'lunahuana',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Descend dramatic canyons through rappelling, jumping into pools, and natural water slides. Lunahuaná\'s canyons offer thrilling family adventures with options for different skill levels and ages.',
    descriptionEs: 'Desciende cañones dramáticos a través de rappel, saltos a pozas y toboganes naturales de agua. Los cañones de Lunahuaná ofrecen emocionantes aventuras familiares con opciones para diferentes niveles de habilidad y edades.',
    whatToExpect: 'Equipped with wetsuits and helmets, descend canyon walls using ropes, leap into natural pools, and slide down water-polished rock chutes. Professional guides ensure safety while providing an adrenaline-pumping adventure.',
    whatToExpectEs: 'Equipado con trajes de neopreno y cascos, desciende paredes de cañones usando cuerdas, salta a pozas naturales y deslízate por toboganes de roca pulida por el agua. Guías profesionales aseguran la seguridad mientras proporcionan una aventura llena de adrenalina.',
    highlights: [
      'Rappelling down canyon walls',
      'Jumping into crystal pools',
      'Natural water slides',
      'Swimming in canyon pools',
      'Beautiful canyon scenery',
      'Professional safety equipment'
    ],
    highlightsEs: [
      'Rappel por paredes del cañón',
      'Saltos a pozas cristalinas',
      'Toboganes naturales de agua',
      'Nadar en pozas del cañón',
      'Hermoso paisaje del cañón',
      'Equipo de seguridad profesional'
    ],
    familyRating: 4,
    minAge: 10,
    duration: '3-5 hours',
    durationEs: '3-5 horas',
    difficulty: 'challenging',
    priceRange: '$60-100 per person',
    priceRangeEs: '$60-100 por persona',
    bestTime: 'December-April (summer) for warmer water',
    bestTimeEs: 'Diciembre-abril (verano) para agua más cálida',
    includes: [
      'All technical equipment',
      'Wetsuit, helmet, harness',
      'Professional guides',
      'Safety briefing',
      'Transportation to canyon',
      'Snacks and drinks'
    ],
    includesEs: [
      'Todo el equipo técnico',
      'Traje de neopreno, casco, arnés',
      'Guías profesionales',
      'Sesión de seguridad',
      'Transporte al cañón',
      'Snacks y bebidas'
    ],
    tips: [
      'Choose beginner canyons for first-timers',
      'Bring water shoes that stay on securely',
      'Waterproof camera for amazing photos',
      'Eat light breakfast before activity',
      'Bring dry clothes for after',
      'Book with reputable companies only'
    ],
    tipsEs: [
      'Elige cañones para principiantes si es tu primera vez',
      'Trae zapatos de agua que se ajusten bien',
      'Cámara impermeable para fotos increíbles',
      'Come un desayuno ligero antes de la actividad',
      'Trae ropa seca para después',
      'Reserva solo con compañías de buena reputación'
    ],
    safetyNotes: [
      'Swimming ability required',
      'Follow all guide instructions',
      'Inform of any medical conditions',
      'Jumps are optional',
      'Less challenging routes available'
    ],
    safetyNotesEs: [
      'Se requiere saber nadar',
      'Sigue todas las instrucciones del guía',
      'Informa de cualquier condición médica',
      'Los saltos son opcionales',
      'Hay rutas menos desafiantes disponibles'
    ],
    relatedActivities: ['whitewater-rafting', 'zipline-adventure', 'rock-climbing'],
    providers: [
      { name: 'Lunahuaná Rafting', familyFriendly: true },
      { name: 'Peru Canyoning', familyFriendly: true },
      { name: 'Extreme Peru Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'sandboarding-huacachina',
    name: 'Sandboarding in Huacachina',
    nameEs: 'Sandboard en Huacachina',
    type: 'adventure',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Slide down massive golden sand dunes on a sandboard at Peru\'s adventure oasis. With options from gentle slopes to steep descents, sandboarding is accessible to all ages and makes for exhilarating family fun.',
    descriptionEs: 'Deslízate por masivas dunas de arena dorada en un sandboard en el oasis de aventura de Perú. Con opciones desde pendientes suaves hasta descensos empinados, el sandboard es accesible para todas las edades y es diversión familiar emocionante.',
    whatToExpect: 'After a thrilling dune buggy ride to the top, choose your descent style - standing (harder) or lying down (easier and faster). Guides provide boards and basic instruction. Multiple runs on different dunes included.',
    whatToExpectEs: 'Después de un emocionante paseo en buggy hasta la cima, elige tu estilo de descenso - parado (más difícil) o acostado (más fácil y rápido). Los guías proporcionan tablas e instrucción básica. Múltiples descensos en diferentes dunas incluidos.',
    highlights: [
      'Massive sand dunes up to 100m high',
      'Beginner-friendly lying position',
      'Thrilling standing descents for teens',
      'Combined with dune buggy ride',
      'Spectacular sunset views',
      'No experience needed'
    ],
    highlightsEs: [
      'Masivas dunas de arena de hasta 100m de alto',
      'Posición acostada amigable para principiantes',
      'Emocionantes descensos parados para adolescentes',
      'Combinado con paseo en buggy',
      'Espectaculares vistas al atardecer',
      'No se necesita experiencia'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$15-30 per person (includes buggy)',
    priceRangeEs: '$15-30 por persona (incluye buggy)',
    bestTime: 'Late afternoon for sunset. Year-round activity.',
    bestTimeEs: 'Tarde para atardecer. Actividad todo el año.',
    includes: [
      'Dune buggy transportation',
      'Sandboard rental',
      'Basic instruction',
      'Multiple descents',
      'Water bottle',
      'Hotel pickup (some tours)'
    ],
    includesEs: [
      'Transporte en buggy de dunas',
      'Alquiler de sandboard',
      'Instrucción básica',
      'Múltiples descensos',
      'Botella de agua',
      'Recogida del hotel (algunos tours)'
    ],
    tips: [
      'Wear closed-toe shoes that can get sandy',
      'Lying down is easier and faster!',
      'Protect cameras and phones from sand',
      'Sunscreen and sunglasses essential',
      'Book sunset tour for best photos',
      'Wax your board between runs'
    ],
    tipsEs: [
      'Usa zapatos cerrados que puedan ensuciarse con arena',
      '¡Acostado es más fácil y rápido!',
      'Protege cámaras y teléfonos de la arena',
      'Protector solar y gafas de sol esenciales',
      'Reserva tour al atardecer para mejores fotos',
      'Encera tu tabla entre descensos'
    ],
    safetyNotes: [
      'Start with smaller dunes',
      'Lying position is safer for beginners',
      'Keep distance between riders',
      'Wear provided goggles if windy',
      'Guides supervise all descents'
    ],
    safetyNotesEs: [
      'Empieza con dunas más pequeñas',
      'Posición acostada es más segura para principiantes',
      'Mantén distancia entre los que descienden',
      'Usa las gafas proporcionadas si hay viento',
      'Los guías supervisan todos los descensos'
    ],
    relatedActivities: ['dune-buggy-huacachina', 'desert-camping', 'nazca-flight'],
    providers: [
      { name: 'Huacachina Tours', familyFriendly: true },
      { name: 'Desert Adventures', familyFriendly: true },
      { name: 'Oasis Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'dune-buggy-huacachina',
    name: 'Dune Buggy Adventure in Huacachina',
    nameEs: 'Aventura en Buggy de Dunas en Huacachina',
    type: 'adventure',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Hold on tight for a roller-coaster ride through Peru\'s highest sand dunes! Powerful dune buggies race up and down steep dunes, offering heart-pounding thrills with desert panoramas. A must-do Peru adventure.',
    descriptionEs: '¡Agárrate fuerte para un paseo como montaña rusa a través de las dunas de arena más altas de Perú! Poderosos buggies de dunas corren subiendo y bajando dunas empinadas, ofreciendo emociones con panoramas del desierto. Una aventura imperdible en Perú.',
    whatToExpect: 'Professional drivers navigate custom-built buggies through the dune fields, racing up steep inclines and dropping down sand faces. Tours stop at viewpoints and for sandboarding. Sunset tours are most popular.',
    whatToExpectEs: 'Conductores profesionales navegan buggies hechos a medida a través de los campos de dunas, corriendo por pendientes empinadas y bajando por caras de arena. Los tours paran en miradores y para sandboard. Los tours al atardecer son los más populares.',
    highlights: [
      'Heart-pumping dune rides',
      'Professional experienced drivers',
      'Panoramic desert viewpoints',
      'Combined with sandboarding',
      'Spectacular sunset photo ops',
      'Safe modern vehicles'
    ],
    highlightsEs: [
      'Emocionantes paseos por las dunas',
      'Conductores profesionales experimentados',
      'Miradores panorámicos del desierto',
      'Combinado con sandboard',
      'Espectaculares oportunidades de fotos al atardecer',
      'Vehículos modernos y seguros'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$15-30 per person',
    priceRangeEs: '$15-30 por persona',
    bestTime: 'Late afternoon (4-5pm) for sunset tour. Year-round.',
    bestTimeEs: 'Tarde (4-5pm) para tour al atardecer. Todo el año.',
    includes: [
      'Professional driver',
      'Modern safety-equipped buggy',
      'Multiple dune runs',
      'Photo stops',
      'Sandboard rental',
      'Basic insurance'
    ],
    includesEs: [
      'Conductor profesional',
      'Buggy moderno con equipo de seguridad',
      'Múltiples recorridos por dunas',
      'Paradas para fotos',
      'Alquiler de sandboard',
      'Seguro básico'
    ],
    tips: [
      'Sunset tours have best light',
      'Sit in front for most thrills',
      'Cover camera equipment from sand',
      'Wear bandana for dusty conditions',
      'Book day before in peak season',
      'Combine with sandboarding'
    ],
    tipsEs: [
      'Tours al atardecer tienen mejor luz',
      'Siéntate adelante para más emoción',
      'Cubre el equipo de cámara de la arena',
      'Usa pañuelo para condiciones polvorientas',
      'Reserva el día anterior en temporada alta',
      'Combina con sandboard'
    ],
    safetyNotes: [
      'Seatbelts required at all times',
      'Roll bars on all vehicles',
      'Licensed professional drivers',
      'Young children sit in middle',
      'Motion sickness possible'
    ],
    safetyNotesEs: [
      'Cinturones de seguridad requeridos siempre',
      'Barras antivuelco en todos los vehículos',
      'Conductores profesionales con licencia',
      'Niños pequeños se sientan en el medio',
      'Posible mareo por movimiento'
    ],
    relatedActivities: ['sandboarding-huacachina', 'nazca-flight', 'paracas-tour'],
    providers: [
      { name: 'Huacachina Desert Tours', familyFriendly: true },
      { name: 'Oasis Peru Adventures', familyFriendly: true },
      { name: 'Ica Sand Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'sup-lake-titicaca',
    name: 'Stand-Up Paddleboarding on Lake Titicaca',
    nameEs: 'Stand-Up Paddleboard en el Lago Titicaca',
    type: 'adventure',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Glide across the world\'s highest navigable lake on a stand-up paddleboard. Experience the sacred waters with stunning views of floating islands and snow-capped peaks. A unique way to explore Titicaca\'s beauty.',
    descriptionEs: 'Deslízate por el lago navegable más alto del mundo en un stand-up paddleboard. Experimenta las aguas sagradas con impresionantes vistas de islas flotantes y picos nevados. Una forma única de explorar la belleza del Titicaca.',
    whatToExpect: 'After brief instruction, paddle calm waters near shore or venture to floating islands. Tours often include visits to Uros communities by paddle. Calm morning waters offer the best conditions.',
    whatToExpectEs: 'Después de una breve instrucción, rema por aguas tranquilas cerca de la orilla o aventúrate a las islas flotantes. Los tours a menudo incluyen visitas a comunidades Uros en paddle. Las aguas calmadas de la mañana ofrecen las mejores condiciones.',
    highlights: [
      'Highest altitude SUP in the world',
      'Crystal-clear lake waters',
      'Views of floating islands',
      'Snow-capped mountain backdrop',
      'Calm protected bays',
      'Unique perspective on Titicaca'
    ],
    highlightsEs: [
      'SUP en la altitud más alta del mundo',
      'Aguas cristalinas del lago',
      'Vistas de islas flotantes',
      'Telón de fondo de montañas nevadas',
      'Bahías protegidas y tranquilas',
      'Perspectiva única del Titicaca'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    priceRange: '$40-70 per person',
    priceRangeEs: '$40-70 por persona',
    bestTime: 'Morning for calmest water. April-October (dry season).',
    bestTimeEs: 'Mañana para agua más calma. Abril-octubre (temporada seca).',
    includes: [
      'SUP board and paddle',
      'Life jacket',
      'Brief instruction',
      'Guide accompaniment',
      'Wetsuit (if needed)',
      'Waterproof bag'
    ],
    includesEs: [
      'Tabla SUP y remo',
      'Chaleco salvavidas',
      'Instrucción breve',
      'Acompañamiento de guía',
      'Traje de neopreno (si es necesario)',
      'Bolsa impermeable'
    ],
    tips: [
      'Acclimatize 1-2 days before due to altitude',
      'Morning has calmest waters',
      'Dress in layers - can be cold',
      'Waterproof your camera',
      'Swimming ability required',
      'Great photo opportunity activity'
    ],
    tipsEs: [
      'Aclimátate 1-2 días antes debido a la altitud',
      'La mañana tiene las aguas más calmadas',
      'Vístete en capas - puede hacer frío',
      'Impermeabiliza tu cámara',
      'Se requiere saber nadar',
      'Gran actividad para oportunidades de fotos'
    ],
    safetyNotes: [
      'Altitude affects stamina',
      'Stay in calm protected areas',
      'Wear life jacket at all times',
      'Guide stays nearby',
      'Weather can change quickly'
    ],
    safetyNotesEs: [
      'La altitud afecta la resistencia',
      'Permanece en áreas protegidas y calmadas',
      'Usa chaleco salvavidas en todo momento',
      'El guía permanece cerca',
      'El clima puede cambiar rápidamente'
    ],
    relatedActivities: ['kayaking-titicaca', 'uros-islands-tour', 'boat-tour-titicaca'],
    providers: [
      { name: 'Titicaca SUP Adventures', familyFriendly: true },
      { name: 'Puno Paddle', familyFriendly: true },
      { name: 'Lake Adventures Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'coffee-farm-tour-villa-rica',
    name: 'Coffee Farm Tour in Villa Rica',
    nameEs: 'Tour de Finca de Café en Villa Rica',
    type: 'culinary',
    city: 'oxapampa',
    region: 'Pasco Region',
    regionEs: 'Región Pasco',
    description: 'Discover Peru\'s award-winning coffee at its source in the cloud forests of Villa Rica. This hands-on experience takes families from bean to cup, walking through coffee plantations and learning traditional harvesting.',
    descriptionEs: 'Descubre el café premiado de Perú en su origen en los bosques nubosos de Villa Rica. Esta experiencia práctica lleva a las familias del grano a la taza, caminando por plantaciones de café y aprendiendo la cosecha tradicional.',
    whatToExpect: 'Visit working coffee farms to see plants at various growth stages. Pick ripe cherries, watch processing, learn about roasting, and enjoy a cupping session. Many farms offer lunch with farm-fresh ingredients.',
    whatToExpectEs: 'Visita fincas de café en funcionamiento para ver plantas en varias etapas de crecimiento. Recoge cerezas maduras, observa el procesamiento, aprende sobre el tueste y disfruta de una sesión de catación. Muchas fincas ofrecen almuerzo con ingredientes frescos de la granja.',
    highlights: [
      'Walk through coffee plantations',
      'Pick your own coffee cherries',
      'See bean processing steps',
      'Learn cupping/tasting techniques',
      'Meet local farming families',
      'Beautiful cloud forest setting'
    ],
    highlightsEs: [
      'Camina por plantaciones de café',
      'Recoge tus propias cerezas de café',
      'Ve los pasos de procesamiento del grano',
      'Aprende técnicas de catación',
      'Conoce familias agricultoras locales',
      'Hermoso entorno de bosque nuboso'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Harvest season (April-September) for best experience.',
    bestTimeEs: 'Temporada de cosecha (abril-septiembre) para mejor experiencia.',
    includes: [
      'Farm tour with guide',
      'Coffee tasting session',
      'Farm-fresh lunch (usually)',
      'Bag of local coffee to take home',
      'Transportation within farm',
      'Educational materials'
    ],
    includesEs: [
      'Tour de finca con guía',
      'Sesión de degustación de café',
      'Almuerzo fresco de la granja (usualmente)',
      'Bolsa de café local para llevar',
      'Transporte dentro de la finca',
      'Materiales educativos'
    ],
    tips: [
      'Visit during harvest (Apr-Sep) to pick cherries',
      'Bring rain gear - cloud forest is misty',
      'Try the cascara tea made from coffee fruit',
      'Buy beans direct - freshest possible',
      'Combine with Oxapampa German colony visit',
      'Kids can do chocolate versions at some farms'
    ],
    tipsEs: [
      'Visita durante la cosecha (abr-sep) para recoger cerezas',
      'Lleva ropa para lluvia - el bosque nuboso es brumoso',
      'Prueba el té de cáscara hecho de la fruta del café',
      'Compra granos directamente - lo más fresco posible',
      'Combina con visita a la colonia alemana de Oxapampa',
      'Los niños pueden hacer versiones de chocolate en algunas fincas'
    ],
    safetyNotes: [
      'Wear sturdy walking shoes',
      'Sun and insect protection',
      'Inform of any allergies',
      'Trail walks are easy',
      'Caffeine limits for children at tasting'
    ],
    safetyNotesEs: [
      'Usa zapatos resistentes para caminar',
      'Protección solar y de insectos',
      'Informa de cualquier alergia',
      'Las caminatas por senderos son fáciles',
      'Límites de cafeína para niños en la catación'
    ],
    relatedActivities: ['chocolate-making', 'farm-to-table-lunch', 'cloud-forest-hike'],
    providers: [
      { name: 'Villa Rica Coffee Tours', familyFriendly: true },
      { name: 'Finca Santa Rosa', familyFriendly: true },
      { name: 'Coffee Route Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'hot-springs-aguas-calientes',
    name: 'Hot Springs in Aguas Calientes',
    nameEs: 'Aguas Termales en Aguas Calientes',
    type: 'relaxation',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Soak in natural thermal pools at the base of Machu Picchu mountain. After a day exploring the ruins, these hot springs offer the perfect way to relax tired muscles while surrounded by jungle-clad peaks.',
    descriptionEs: 'Sumérgete en piscinas termales naturales al pie de la montaña Machu Picchu. Después de un día explorando las ruinas, estas aguas termales ofrecen la manera perfecta de relajar los músculos cansados mientras estás rodeado de picos cubiertos de selva.',
    whatToExpect: 'Multiple pools at varying temperatures ranging from warm to hot. Basic changing facilities, lockers, and a small snack bar. Often busy in evenings after Machu Picchu visits. Most relaxing in early morning.',
    whatToExpectEs: 'Múltiples piscinas a diferentes temperaturas que van de templadas a calientes. Instalaciones básicas para cambiarse, casilleros y un pequeño bar de snacks. A menudo concurrido por las noches después de visitas a Machu Picchu. Más relajante temprano en la mañana.',
    highlights: [
      'Natural thermal waters',
      'Mountain jungle setting',
      'Perfect post-Machu Picchu relaxation',
      'Multiple temperature pools',
      'Evening under the stars',
      'Soothe tired hiking muscles'
    ],
    highlightsEs: [
      'Aguas termales naturales',
      'Entorno de selva de montaña',
      'Perfecta relajación post-Machu Picchu',
      'Múltiples piscinas de diferentes temperaturas',
      'Noche bajo las estrellas',
      'Alivia los músculos cansados del senderismo'
    ],
    familyRating: 4,
    minAge: 3,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    priceRange: 'S/20 (~$5) per person',
    priceRangeEs: 'S/20 (~$5) por persona',
    bestTime: 'Early morning for fewer crowds, or evening for stargazing.',
    bestTimeEs: 'Temprano en la mañana para menos multitudes, o noche para ver estrellas.',
    includes: [
      'Pool access',
      'Changing rooms',
      'Lockers (small fee)',
      'Basic facilities',
      'Towel rental available',
      'Snack bar on site'
    ],
    includesEs: [
      'Acceso a piscinas',
      'Vestidores',
      'Casilleros (pequeña tarifa)',
      'Instalaciones básicas',
      'Alquiler de toallas disponible',
      'Bar de snacks en el sitio'
    ],
    tips: [
      'Bring your own towel to save money',
      'Visit early morning for peace',
      'Evening visits are more crowded but magical',
      'Bring water - hot pools dehydrate',
      'Short walk from town center',
      'Great way to end Machu Picchu day'
    ],
    tipsEs: [
      'Trae tu propia toalla para ahorrar dinero',
      'Visita temprano en la mañana para tranquilidad',
      'Las visitas nocturnas son más concurridas pero mágicas',
      'Trae agua - las piscinas calientes deshidratan',
      'Corta caminata desde el centro del pueblo',
      'Gran manera de terminar el día de Machu Picchu'
    ],
    safetyNotes: [
      'Supervise young children closely',
      'Stay hydrated',
      'Don\'t stay too long in hottest pools',
      'Shower before entering pools',
      'Slippery surfaces - be careful'
    ],
    safetyNotesEs: [
      'Supervisa a los niños pequeños de cerca',
      'Mantente hidratado',
      'No te quedes mucho tiempo en las piscinas más calientes',
      'Dúchate antes de entrar a las piscinas',
      'Superficies resbaladizas - ten cuidado'
    ],
    relatedActivities: ['machu-picchu-tour', 'sacred-valley-tour', 'inca-trail'],
    providers: [
      { name: 'Aguas Calientes Municipal Baths', familyFriendly: true }
    ]
  },
  {
    slug: 'llama-trekking-cusco',
    name: 'Llama Trekking in Cusco',
    nameEs: 'Caminata con Llamas en Cusco',
    type: 'nature',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Walk alongside adorable llamas through stunning Andean landscapes. These gentle pack animals have been companions to Andean peoples for millennia, and now families can experience this tradition on scenic highland trails.',
    descriptionEs: 'Camina junto a adorables llamas a través de impresionantes paisajes andinos. Estos gentiles animales de carga han sido compañeros de los pueblos andinos durante milenios, y ahora las familias pueden experimentar esta tradición en senderos escénicos de tierras altas.',
    whatToExpect: 'Meet friendly llamas, learn about their importance in Andean culture, and walk scenic trails with them as companions. Llamas carry supplies while you enjoy the views. Perfect for animal-loving families.',
    whatToExpectEs: 'Conoce llamas amigables, aprende sobre su importancia en la cultura andina, y camina por senderos escénicos con ellas como compañeras. Las llamas cargan los suministros mientras disfrutas las vistas. Perfecto para familias amantes de los animales.',
    highlights: [
      'Walk with friendly llamas',
      'Learn Andean animal traditions',
      'Scenic mountain trails',
      'Photo opportunities with llamas',
      'Light exercise at altitude',
      'Cultural learning experience'
    ],
    highlightsEs: [
      'Camina con llamas amigables',
      'Aprende tradiciones andinas de animales',
      'Senderos escénicos de montaña',
      'Oportunidades de fotos con llamas',
      'Ejercicio ligero en altitud',
      'Experiencia de aprendizaje cultural'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'Morning for best weather. Dry season (May-Oct) preferred.',
    bestTimeEs: 'Mañana para mejor clima. Temporada seca (mayo-oct) preferida.',
    includes: [
      'Llama companion for trek',
      'Experienced guide',
      'Snacks and coca tea',
      'Cultural explanation',
      'Photo opportunities',
      'Transportation to trailhead'
    ],
    includesEs: [
      'Llama compañera para la caminata',
      'Guía experimentado',
      'Snacks y té de coca',
      'Explicación cultural',
      'Oportunidades para fotos',
      'Transporte al inicio del sendero'
    ],
    tips: [
      'Kids absolutely love this activity',
      'Llamas are gentle and easy to walk with',
      'Bring camera for adorable photos',
      'Dress in layers for mountain weather',
      'Don\'t feed llamas without asking',
      'Short treks available for young children'
    ],
    tipsEs: [
      'A los niños absolutamente les encanta esta actividad',
      'Las llamas son gentiles y fáciles para caminar',
      'Trae cámara para fotos adorables',
      'Vístete en capas para clima de montaña',
      'No alimentes a las llamas sin preguntar',
      'Caminatas cortas disponibles para niños pequeños'
    ],
    safetyNotes: [
      'Llamas are gentle but keep safe distance',
      'Don\'t approach from behind',
      'Follow guide instructions',
      'Altitude may affect stamina',
      'Trails are generally easy'
    ],
    safetyNotesEs: [
      'Las llamas son gentiles pero mantén distancia segura',
      'No te acerques por detrás',
      'Sigue las instrucciones del guía',
      'La altitud puede afectar la resistencia',
      'Los senderos son generalmente fáciles'
    ],
    relatedActivities: ['horseback-sacred-valley', 'hiking-rainbow-mountain', 'sacred-valley-tour'],
    providers: [
      { name: 'Llama Pack Project', familyFriendly: true },
      { name: 'Cusco Llama Treks', familyFriendly: true },
      { name: 'Andean Llama Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'stargazing-cusco',
    name: 'Stargazing Tour in Cusco',
    nameEs: 'Tour de Observación de Estrellas en Cusco',
    type: 'educational',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover the Inca understanding of the cosmos on a stargazing tour. High altitude and minimal light pollution reveal spectacular skies, while guides explain Inca astronomy and point out Southern Hemisphere constellations.',
    descriptionEs: 'Descubre la comprensión Inca del cosmos en un tour de observación de estrellas. La alta altitud y la mínima contaminación lumínica revelan cielos espectaculares, mientras los guías explican la astronomía Inca y señalan constelaciones del Hemisferio Sur.',
    whatToExpect: 'Travel to a dark-sky location outside Cusco. Learn about Inca astronomy and their "dark constellations" in the Milky Way. Use telescopes to view planets, nebulae, and star clusters. Hot drinks provided.',
    whatToExpectEs: 'Viaja a una ubicación de cielo oscuro fuera de Cusco. Aprende sobre la astronomía Inca y sus "constelaciones oscuras" en la Vía Láctea. Usa telescopios para ver planetas, nebulosas y cúmulos de estrellas. Bebidas calientes proporcionadas.',
    highlights: [
      'Spectacular high-altitude skies',
      'Learn Inca astronomy',
      'See Southern Hemisphere stars',
      'Professional telescopes',
      'View Milky Way clearly',
      'Educational and magical experience'
    ],
    highlightsEs: [
      'Espectaculares cielos de alta altitud',
      'Aprende astronomía Inca',
      'Ve estrellas del Hemisferio Sur',
      'Telescopios profesionales',
      'Ve la Vía Láctea claramente',
      'Experiencia educativa y mágica'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '3-4 hours (evening)',
    durationEs: '3-4 horas (noche)',
    difficulty: 'easy',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Clear nights during dry season (May-Oct). New moon best.',
    bestTimeEs: 'Noches claras durante temporada seca (mayo-oct). Luna nueva es mejor.',
    includes: [
      'Transportation to dark-sky site',
      'Professional telescopes',
      'Expert astronomy guide',
      'Hot coca tea and snacks',
      'Warm blankets',
      'Astronomy presentation'
    ],
    includesEs: [
      'Transporte a sitio de cielo oscuro',
      'Telescopios profesionales',
      'Guía experto en astronomía',
      'Té de coca caliente y snacks',
      'Mantas abrigadas',
      'Presentación de astronomía'
    ],
    tips: [
      'Dress very warmly - nights are cold!',
      'Check weather forecast before booking',
      'New moon nights are darkest',
      'Kids love using the telescopes',
      'Great way to learn about Inca culture',
      'Photos of Milky Way are possible'
    ],
    tipsEs: [
      '¡Vístete muy abrigado - las noches son frías!',
      'Revisa el pronóstico del tiempo antes de reservar',
      'Las noches de luna nueva son las más oscuras',
      'A los niños les encanta usar los telescopios',
      'Gran manera de aprender sobre la cultura Inca',
      'Es posible tomar fotos de la Vía Láctea'
    ],
    safetyNotes: [
      'Cold temperatures at night',
      'Altitude may affect some visitors',
      'Stay with group in dark',
      'Uneven ground - bring flashlight',
      'Weather-dependent activity'
    ],
    safetyNotesEs: [
      'Temperaturas frías en la noche',
      'La altitud puede afectar a algunos visitantes',
      'Permanece con el grupo en la oscuridad',
      'Terreno irregular - trae linterna',
      'Actividad dependiente del clima'
    ],
    relatedActivities: ['planetarium-cusco', 'sacred-valley-tour', 'cultural-tour-cusco'],
    providers: [
      { name: 'Planetarium Cusco', familyFriendly: true },
      { name: 'Cusco Stargazers', familyFriendly: true },
      { name: 'Andean Sky Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'river-tubing-urubamba',
    name: 'River Tubing on Urubamba River',
    nameEs: 'Tubing en el Río Urubamba',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Float down the sacred Urubamba River on inflatable tubes for a gentle adventure. Easier than rafting, tubing offers families a fun, accessible way to experience the river with Sacred Valley views.',
    descriptionEs: 'Flota por el sagrado Río Urubamba en tubos inflables para una aventura gentil. Más fácil que el rafting, el tubing ofrece a las familias una forma divertida y accesible de experimentar el río con vistas del Valle Sagrado.',
    whatToExpect: 'After safety briefing, float downstream on individual tubes connected together. Guides accompany on kayaks. Sections are Class I-II, gentle enough for beginners. Splash through small rapids and enjoy river scenery.',
    whatToExpectEs: 'Después de la sesión de seguridad, flota río abajo en tubos individuales conectados. Los guías acompañan en kayaks. Las secciones son Clase I-II, lo suficientemente suaves para principiantes. Chapotea a través de pequeños rápidos y disfruta el paisaje del río.',
    highlights: [
      'Gentle family-friendly rapids',
      'Float through Sacred Valley',
      'Easier than whitewater rafting',
      'Beautiful river scenery',
      'Refreshing water fun',
      'Safe for beginners'
    ],
    highlightsEs: [
      'Rápidos gentiles para familias',
      'Flota a través del Valle Sagrado',
      'Más fácil que el rafting en aguas bravas',
      'Hermoso paisaje de río',
      'Diversión refrescante en el agua',
      'Seguro para principiantes'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$30-50 per person',
    priceRangeEs: '$30-50 por persona',
    bestTime: 'Dry season (May-Oct) for calmer waters. Summer for warmer temps.',
    bestTimeEs: 'Temporada seca (mayo-oct) para aguas más calmadas. Verano para temperaturas más cálidas.',
    includes: [
      'Inflatable tube',
      'Life jacket and helmet',
      'Professional guides on kayaks',
      'Safety briefing',
      'Transportation',
      'Dry bags for belongings'
    ],
    includesEs: [
      'Tubo inflable',
      'Chaleco salvavidas y casco',
      'Guías profesionales en kayaks',
      'Sesión de seguridad',
      'Transporte',
      'Bolsas secas para pertenencias'
    ],
    tips: [
      'Wear swimsuit under clothes',
      'Water shoes stay on better than sandals',
      'Bring dry clothes for after',
      'Waterproof camera for photos',
      'Sunscreen is essential',
      'Easier than rafting for younger kids'
    ],
    tipsEs: [
      'Usa traje de baño debajo de la ropa',
      'Los zapatos de agua se mantienen mejor que las sandalias',
      'Trae ropa seca para después',
      'Cámara impermeable para fotos',
      'El protector solar es esencial',
      'Más fácil que el rafting para niños pequeños'
    ],
    safetyNotes: [
      'Swimming ability required',
      'Always wear life jacket',
      'Follow guide instructions',
      'Stay with group',
      'Guides are trained rescuers'
    ],
    safetyNotesEs: [
      'Se requiere saber nadar',
      'Siempre usa chaleco salvavidas',
      'Sigue las instrucciones del guía',
      'Permanece con el grupo',
      'Los guías son rescatistas entrenados'
    ],
    relatedActivities: ['whitewater-rafting', 'kayaking-titicaca', 'sacred-valley-tour'],
    providers: [
      { name: 'Sacred Valley Tubes', familyFriendly: true },
      { name: 'Urubamba River Adventures', familyFriendly: true },
      { name: 'Peru Tube Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'alpaca-farm-visit',
    name: 'Alpaca Farm Visit',
    nameEs: 'Visita a Granja de Alpacas',
    type: 'nature',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Meet adorable alpacas and llamas at family-friendly farms in the Sacred Valley. Learn about these iconic Andean animals, watch wool processing demonstrations, and enjoy hands-on experiences feeding and interacting with the animals.',
    descriptionEs: 'Conoce adorables alpacas y llamas en granjas familiares en el Valle Sagrado. Aprende sobre estos icónicos animales andinos, observa demostraciones de procesamiento de lana, y disfruta experiencias prácticas alimentando e interactuando con los animales.',
    whatToExpect: 'Tours typically include meeting alpacas, llamas, and sometimes vicuñas. Watch wool being spun and dyed using traditional methods. Many farms offer feeding sessions, photo opportunities, and small shops selling alpaca products.',
    whatToExpectEs: 'Los tours típicamente incluyen conocer alpacas, llamas, y a veces vicuñas. Observa la lana siendo hilada y teñida usando métodos tradicionales. Muchas granjas ofrecen sesiones de alimentación, oportunidades para fotos, y pequeñas tiendas vendiendo productos de alpaca.',
    highlights: [
      'Meet friendly alpacas and llamas',
      'Learn about wool processing',
      'Interactive feeding sessions',
      'Natural dyeing demonstrations',
      'Photo opportunities with animals',
      'Support local communities'
    ],
    highlightsEs: [
      'Conoce alpacas y llamas amigables',
      'Aprende sobre el procesamiento de lana',
      'Sesiones interactivas de alimentación',
      'Demostraciones de teñido natural',
      'Oportunidades de fotos con animales',
      'Apoya a las comunidades locales'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    priceRange: '$10-30 per person',
    priceRangeEs: '$10-30 por persona',
    bestTime: 'Morning for more active animals. Year-round activity.',
    bestTimeEs: 'Mañana para animales más activos. Actividad todo el año.',
    includes: [
      'Farm entrance',
      'Guided tour',
      'Feeding session',
      'Weaving demonstration',
      'Photo opportunities',
      'Often includes snacks'
    ],
    includesEs: [
      'Entrada a la granja',
      'Tour guiado',
      'Sesión de alimentación',
      'Demostración de tejido',
      'Oportunidades para fotos',
      'A menudo incluye snacks'
    ],
    tips: [
      'Kids absolutely love this activity',
      'Alpacas are gentler than llamas',
      'Don\'t approach llamas from behind',
      'Bring camera for cute photos',
      'Buy authentic alpaca products here',
      'Great activity for any age'
    ],
    tipsEs: [
      'A los niños absolutamente les encanta esta actividad',
      'Las alpacas son más gentiles que las llamas',
      'No te acerques a las llamas por detrás',
      'Trae cámara para fotos lindas',
      'Compra productos auténticos de alpaca aquí',
      'Gran actividad para cualquier edad'
    ],
    safetyNotes: [
      'Alpacas are gentle - llamas can spit',
      'Don\'t chase or corner animals',
      'Supervise young children',
      'Animals are used to visitors',
      'Follow farm rules'
    ],
    safetyNotesEs: [
      'Las alpacas son gentiles - las llamas pueden escupir',
      'No persigas ni arrincones a los animales',
      'Supervisa a los niños pequeños',
      'Los animales están acostumbrados a los visitantes',
      'Sigue las reglas de la granja'
    ],
    relatedActivities: ['llama-trekking-cusco', 'textile-weaving-workshop', 'sacred-valley-tour'],
    providers: [
      { name: 'Awana Kancha', familyFriendly: true },
      { name: 'Cusco Alpaca Farm', familyFriendly: true },
      { name: 'Sacred Valley Alpacas', familyFriendly: true }
    ]
  },
  {
    slug: 'zipline-sacred-valley',
    name: 'Zip-Line Adventure in Sacred Valley',
    nameEs: 'Aventura en Tirolesa en el Valle Sagrado',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Soar over the Sacred Valley on exhilarating zip-lines with panoramic views of mountains, Inca terraces, and the Urubamba River. Multiple lines of varying lengths provide thrills for the whole family.',
    descriptionEs: 'Vuela sobre el Valle Sagrado en emocionantes tirolesas con vistas panorámicas de montañas, terrazas Incas y el río Urubamba. Múltiples líneas de diferentes longitudes proporcionan emociones para toda la familia.',
    whatToExpect: 'After safety briefing and gear fitting, take multiple zip-line runs over dramatic valley scenery. Courses include several lines of increasing length. Guides accompany throughout. Suitable for beginners with no experience needed.',
    whatToExpectEs: 'Después de la sesión de seguridad y ajuste de equipo, realiza múltiples recorridos en tirolesa sobre el dramático paisaje del valle. Los cursos incluyen varias líneas de longitud creciente. Los guías acompañan durante todo el recorrido. Apto para principiantes sin necesidad de experiencia.',
    highlights: [
      'Spectacular Sacred Valley views',
      'Multiple zip-line runs',
      'Safe, modern equipment',
      'No experience needed',
      'Views of Inca terraces',
      'Adrenaline-pumping fun'
    ],
    highlightsEs: [
      'Espectaculares vistas del Valle Sagrado',
      'Múltiples recorridos en tirolesa',
      'Equipo moderno y seguro',
      'No se necesita experiencia',
      'Vistas de terrazas Incas',
      'Diversión llena de adrenalina'
    ],
    familyRating: 5,
    minAge: 8,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Morning for clearest views. Dry season preferred.',
    bestTimeEs: 'Mañana para vistas más claras. Temporada seca preferida.',
    includes: [
      'All safety equipment',
      'Professional guides',
      'Safety briefing',
      'Multiple zip-line runs',
      'Transportation (some tours)',
      'Photos (some operators)'
    ],
    includesEs: [
      'Todo el equipo de seguridad',
      'Guías profesionales',
      'Sesión de seguridad',
      'Múltiples recorridos en tirolesa',
      'Transporte (algunos tours)',
      'Fotos (algunos operadores)'
    ],
    tips: [
      'Wear comfortable, closed-toe shoes',
      'Tie back long hair',
      'Secure loose items',
      'Book morning for best views',
      'Check weight/age restrictions',
      'Photos available for purchase'
    ],
    tipsEs: [
      'Usa zapatos cómodos y cerrados',
      'Recógete el pelo largo',
      'Asegura los objetos sueltos',
      'Reserva en la mañana para mejores vistas',
      'Revisa restricciones de peso/edad',
      'Fotos disponibles para comprar'
    ],
    safetyNotes: [
      'Modern safety equipment',
      'Weight limits apply (check with operator)',
      'Follow all guide instructions',
      'Not recommended for those with heart conditions',
      'Fully trained guides'
    ],
    safetyNotesEs: [
      'Equipo de seguridad moderno',
      'Aplican límites de peso (consulta con operador)',
      'Sigue todas las instrucciones del guía',
      'No recomendado para personas con condiciones cardíacas',
      'Guías completamente entrenados'
    ],
    relatedActivities: ['atv-sacred-valley', 'mountain-biking-sacred-valley', 'river-tubing-urubamba'],
    providers: [
      { name: 'Action Valley', familyFriendly: true },
      { name: 'Cola de Mono', familyFriendly: true },
      { name: 'Natura Vive', familyFriendly: true }
    ]
  },
  {
    slug: 'kids-cooking-class',
    name: 'Kids Cooking Class in Cusco',
    nameEs: 'Clase de Cocina para Niños en Cusco',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Young chefs learn to make traditional Peruvian dishes in hands-on cooking classes designed for children. From making empanadas to decorating alfajores, these fun sessions teach culinary skills while exploring Peruvian food culture.',
    descriptionEs: 'Los jóvenes chefs aprenden a hacer platos tradicionales peruanos en clases de cocina prácticas diseñadas para niños. Desde hacer empanadas hasta decorar alfajores, estas divertidas sesiones enseñan habilidades culinarias mientras exploran la cultura gastronómica peruana.',
    whatToExpect: 'Age-appropriate cooking activities using safe techniques. Kids make dishes like empanadas, causa, alfajores, or hot chocolate. Sessions include eating what they\'ve made. Parents can participate or watch. Aprons provided.',
    whatToExpectEs: 'Actividades de cocina apropiadas para la edad usando técnicas seguras. Los niños hacen platos como empanadas, causa, alfajores o chocolate caliente. Las sesiones incluyen comer lo que han hecho. Los padres pueden participar u observar. Se proporcionan delantales.',
    highlights: [
      'Hands-on cooking activities',
      'Kid-friendly recipes',
      'Safe, supervised kitchen',
      'Learn about Peruvian food',
      'Eat your creations',
      'Take home recipes'
    ],
    highlightsEs: [
      'Actividades de cocina prácticas',
      'Recetas amigables para niños',
      'Cocina segura y supervisada',
      'Aprende sobre la comida peruana',
      'Come tus creaciones',
      'Llévate las recetas a casa'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$30-60 per child',
    priceRangeEs: '$30-60 por niño',
    bestTime: 'Morning or afternoon sessions available.',
    bestTimeEs: 'Sesiones de mañana o tarde disponibles.',
    includes: [
      'All ingredients',
      'Cooking instruction',
      'Apron and chef hat',
      'Recipes to take home',
      'Meal of dishes prepared',
      'Certificate of completion'
    ],
    includesEs: [
      'Todos los ingredientes',
      'Instrucción de cocina',
      'Delantal y gorro de chef',
      'Recetas para llevar a casa',
      'Comida de los platos preparados',
      'Certificado de finalización'
    ],
    tips: [
      'Book in advance - popular activity',
      'Inform of any food allergies',
      'Kids feel proud of their dishes',
      'Great rainy day activity',
      'Parents can join or relax nearby',
      'Vegetarian options usually available'
    ],
    tipsEs: [
      'Reserva con anticipación - actividad popular',
      'Informa de cualquier alergia alimentaria',
      'Los niños se sienten orgullosos de sus platos',
      'Gran actividad para días lluviosos',
      'Los padres pueden unirse o relajarse cerca',
      'Opciones vegetarianas usualmente disponibles'
    ],
    safetyNotes: [
      'Age-appropriate tasks only',
      'Adult supervision throughout',
      'No sharp knives for young children',
      'Allergy accommodations available',
      'Clean, professional kitchen'
    ],
    safetyNotesEs: [
      'Solo tareas apropiadas para la edad',
      'Supervisión adulta durante todo el tiempo',
      'Sin cuchillos afilados para niños pequeños',
      'Adaptaciones para alergias disponibles',
      'Cocina limpia y profesional'
    ],
    relatedActivities: ['peruvian-cooking-class', 'chocolate-making', 'market-tour-cusco'],
    providers: [
      { name: 'Cusco Culinary Kids', familyFriendly: true },
      { name: 'Little Chefs Peru', familyFriendly: true },
      { name: 'Marcelo Batata Cooking School', familyFriendly: true }
    ]
  },
  {
    slug: 'planetarium-cusco',
    name: 'Cusco Planetarium',
    nameEs: 'Planetario de Cusco',
    type: 'educational',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore Inca astronomy and the southern night sky at Cusco\'s planetarium. Interactive presentations explain how the Incas used constellations for agriculture and ceremonies, followed by telescope viewing on clear nights.',
    descriptionEs: 'Explora la astronomía Inca y el cielo nocturno del sur en el planetario de Cusco. Presentaciones interactivas explican cómo los Incas usaban las constelaciones para la agricultura y ceremonias, seguido de observación con telescopio en noches claras.',
    whatToExpect: 'Indoor planetarium show explaining Inca astronomy and "dark constellations" in the Milky Way. On clear nights, outdoor telescope viewing follows. Bilingual presentations. Hot coca tea served. Warm blankets provided for outdoor viewing.',
    whatToExpectEs: 'Show de planetario interior explicando la astronomía Inca y las "constelaciones oscuras" en la Vía Láctea. En noches claras, sigue observación exterior con telescopio. Presentaciones bilingües. Se sirve té de coca caliente. Mantas abrigadas proporcionadas para observación exterior.',
    highlights: [
      'Learn Inca astronomy',
      'Indoor planetarium show',
      'Outdoor telescope viewing',
      'See Southern Cross constellation',
      'Bilingual presentations',
      'Educational and entertaining'
    ],
    highlightsEs: [
      'Aprende astronomía Inca',
      'Show de planetario interior',
      'Observación exterior con telescopio',
      'Ve la constelación Cruz del Sur',
      'Presentaciones bilingües',
      'Educativo y entretenido'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-2.5 hours',
    durationEs: '2-2.5 horas',
    difficulty: 'easy',
    priceRange: '$35-50 per person',
    priceRangeEs: '$35-50 por persona',
    bestTime: 'Clear nights during dry season (May-Oct). Sessions start after dark.',
    bestTimeEs: 'Noches claras durante temporada seca (mayo-oct). Las sesiones comienzan después del anochecer.',
    includes: [
      'Planetarium show',
      'Telescope viewing (weather permitting)',
      'Hot coca tea',
      'Warm blankets',
      'Bilingual guide',
      'Transportation (usually)'
    ],
    includesEs: [
      'Show de planetario',
      'Observación con telescopio (clima permitting)',
      'Té de coca caliente',
      'Mantas abrigadas',
      'Guía bilingüe',
      'Transporte (usualmente)'
    ],
    tips: [
      'Book clear nights for best experience',
      'Dress very warmly - cold at night',
      'Indoor show still great on cloudy nights',
      'Kids love looking through telescopes',
      'Perfect acclimatization evening activity',
      'Combines education and entertainment'
    ],
    tipsEs: [
      'Reserva noches claras para mejor experiencia',
      'Vístete muy abrigado - frío de noche',
      'El show interior aún es genial en noches nubladas',
      'A los niños les encanta mirar por los telescopios',
      'Perfecta actividad nocturna de aclimatación',
      'Combina educación y entretenimiento'
    ],
    safetyNotes: [
      'Warm clothing essential',
      'Easy walk to viewing area',
      'Indoor option if weather poor',
      'Altitude - take it easy',
      'Hot drinks provided'
    ],
    safetyNotesEs: [
      'Ropa abrigada esencial',
      'Caminata fácil al área de observación',
      'Opción interior si el clima es malo',
      'Altitud - tómalo con calma',
      'Bebidas calientes proporcionadas'
    ],
    relatedActivities: ['stargazing-cusco', 'cusco-city-tour', 'cultural-tour-cusco'],
    providers: [
      { name: 'Planetarium Cusco', familyFriendly: true }
    ]
  },
  {
    slug: 'surfing-lessons-lima',
    name: 'Surfing Lessons in Lima',
    nameEs: 'Clases de Surf en Lima',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Ride the waves at Lima\'s famous surf beaches with family-friendly lessons. Miraflores and Costa Verde offer consistent waves perfect for beginners, while experienced instructors make learning safe and fun for kids and adults alike.',
    descriptionEs: 'Monta las olas en las famosas playas de surf de Lima con clases familiares. Miraflores y Costa Verde ofrecen olas consistentes perfectas para principiantes, mientras instructores experimentados hacen el aprendizaje seguro y divertido para niños y adultos por igual.',
    whatToExpect: 'Lessons begin with beach instruction on technique, safety, and etiquette. Then hit the water with your instructor nearby. Wetsuits provided (water is cool year-round). Most students stand up on their first lesson!',
    whatToExpectEs: 'Las lecciones comienzan con instrucción en la playa sobre técnica, seguridad y etiqueta. Luego al agua con tu instructor cerca. Se proporcionan trajes de neopreno (el agua es fría todo el año). ¡La mayoría de estudiantes se paran en su primera lección!',
    highlights: [
      'Learn to surf with experienced instructors',
      'Consistent beginner-friendly waves',
      'All equipment provided',
      'Beautiful ocean views',
      'Great family activity',
      'Lima\'s iconic surf culture'
    ],
    highlightsEs: [
      'Aprende a surfear con instructores experimentados',
      'Olas consistentes para principiantes',
      'Todo el equipo proporcionado',
      'Hermosas vistas del océano',
      'Gran actividad familiar',
      'Cultura de surf icónica de Lima'
    ],
    familyRating: 4,
    minAge: 7,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'moderate',
    priceRange: '$40-70 per person',
    priceRangeEs: '$40-70 por persona',
    bestTime: 'Year-round. Summer (Dec-Mar) has warmer water. Morning lessons have calmer conditions.',
    bestTimeEs: 'Todo el año. Verano (dic-mar) tiene agua más cálida. Lecciones matutinas tienen condiciones más tranquilas.',
    includes: [
      'Surfboard rental',
      'Wetsuit',
      'Professional instructor',
      'Beach instruction',
      'Water instruction',
      'Safety briefing'
    ],
    includesEs: [
      'Alquiler de tabla de surf',
      'Traje de neopreno',
      'Instructor profesional',
      'Instrucción en playa',
      'Instrucción en agua',
      'Sesión de seguridad'
    ],
    tips: [
      'Book morning lessons for calmer waves',
      'Apply sunscreen before lesson',
      'Eat light breakfast beforehand',
      'Miraflores has best beginner spots',
      'Water is cool - wetsuit essential',
      'Most people stand up first lesson!'
    ],
    tipsEs: [
      'Reserva lecciones matutinas para olas más tranquilas',
      'Aplica protector solar antes de la lección',
      'Come un desayuno ligero antes',
      'Miraflores tiene los mejores spots para principiantes',
      'El agua es fría - traje de neopreno esencial',
      '¡La mayoría se para en la primera lección!'
    ],
    safetyNotes: [
      'Swimming ability required',
      'Instructor stays close in water',
      'Soft-top beginner boards used',
      'Beach has lifeguards',
      'Current awareness taught'
    ],
    safetyNotesEs: [
      'Se requiere saber nadar',
      'El instructor se mantiene cerca en el agua',
      'Se usan tablas de principiante con punta suave',
      'La playa tiene salvavidas',
      'Se enseña conciencia de corrientes'
    ],
    relatedActivities: ['paddleboarding-lima', 'paragliding-miraflores', 'lima-bike-tour'],
    providers: [
      { name: 'Pukana Surf', familyFriendly: true },
      { name: 'Peru Surf Guides', familyFriendly: true },
      { name: 'Focus Surf School', familyFriendly: true }
    ]
  },
  {
    slug: 'pottery-class-cusco',
    name: 'Traditional Pottery Class',
    nameEs: 'Clase de Cerámica Tradicional',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Create your own ceramic art using techniques passed down from Inca times. Family-friendly pottery workshops teach traditional Andean pottery methods, from hand-building to painting with natural pigments.',
    descriptionEs: 'Crea tu propio arte cerámico usando técnicas transmitidas desde tiempos Incas. Talleres de cerámica familiares enseñan métodos tradicionales de cerámica andina, desde construcción a mano hasta pintura con pigmentos naturales.',
    whatToExpect: 'Learn about Inca and pre-Inca pottery traditions. Work with clay to create your own pieces - bowls, cups, or decorative items. Paint with natural earth pigments. Finished pieces can be taken home (some workshops fire and ship).',
    whatToExpectEs: 'Aprende sobre las tradiciones de cerámica Inca y pre-Inca. Trabaja con arcilla para crear tus propias piezas - tazones, tazas u objetos decorativos. Pinta con pigmentos naturales de tierra. Las piezas terminadas se pueden llevar a casa (algunos talleres hornean y envían).',
    highlights: [
      'Hands-on creative activity',
      'Learn ancient techniques',
      'Create your own souvenirs',
      'Work with natural materials',
      'Great for all ages',
      'Support local artisans'
    ],
    highlightsEs: [
      'Actividad creativa práctica',
      'Aprende técnicas antiguas',
      'Crea tus propios recuerdos',
      'Trabaja con materiales naturales',
      'Genial para todas las edades',
      'Apoya a artesanos locales'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Year-round indoor activity. Great for rainy days.',
    bestTimeEs: 'Actividad interior todo el año. Genial para días lluviosos.',
    includes: [
      'All materials and clay',
      'Expert instruction',
      'Your finished piece',
      'History and cultural context',
      'Aprons provided',
      'Snacks (some workshops)'
    ],
    includesEs: [
      'Todos los materiales y arcilla',
      'Instrucción experta',
      'Tu pieza terminada',
      'Historia y contexto cultural',
      'Delantales proporcionados',
      'Snacks (algunos talleres)'
    ],
    tips: [
      'Wear clothes that can get dirty',
      'Book ahead during peak season',
      'Kids love this creative activity',
      'Ask about shipping fired pieces',
      'Perfect rainy day activity',
      'Buy authentic ceramics at workshop'
    ],
    tipsEs: [
      'Usa ropa que pueda ensuciarse',
      'Reserva con anticipación en temporada alta',
      'A los niños les encanta esta actividad creativa',
      'Pregunta sobre envío de piezas horneadas',
      'Perfecta actividad para días lluviosos',
      'Compra cerámicas auténticas en el taller'
    ],
    safetyNotes: [
      'Non-toxic natural materials',
      'Supervised activity',
      'Suitable for young children',
      'No sharp tools used',
      'Clean water for washing hands'
    ],
    safetyNotesEs: [
      'Materiales naturales no tóxicos',
      'Actividad supervisada',
      'Adecuada para niños pequeños',
      'No se usan herramientas afiladas',
      'Agua limpia para lavarse las manos'
    ],
    relatedActivities: ['textile-weaving-workshop', 'kids-cooking-class', 'chocolate-making'],
    providers: [
      { name: 'Cusco Ceramic Studio', familyFriendly: true },
      { name: 'Pablo Seminario Ceramics', familyFriendly: true },
      { name: 'Taller de Ceramica Cusco', familyFriendly: true }
    ]
  },
  {
    slug: 'weaving-workshop-chinchero',
    name: 'Traditional Weaving Workshop in Chinchero',
    nameEs: 'Taller de Tejido Tradicional en Chinchero',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn ancestral Andean weaving techniques from master weavers in the highland village of Chinchero. Watch demonstrations of natural dyeing, spinning, and backstrap loom weaving, then try your hand at this ancient art.',
    descriptionEs: 'Aprende técnicas ancestrales de tejido andino de tejedoras maestras en el pueblo de montaña de Chinchero. Observa demostraciones de teñido natural, hilado y tejido en telar de cintura, luego prueba este arte antiguo.',
    whatToExpect: 'Visit a weaving cooperative in Chinchero. Watch wool being cleaned, spun, dyed with natural plants, and woven on traditional looms. Try weaving simple patterns yourself. Learn about the symbolism in Andean textiles.',
    whatToExpectEs: 'Visita una cooperativa de tejido en Chinchero. Observa la lana siendo limpiada, hilada, teñida con plantas naturales, y tejida en telares tradicionales. Prueba tejer patrones simples tú mismo. Aprende sobre el simbolismo en los textiles andinos.',
    highlights: [
      'Meet master weavers',
      'Learn natural dyeing',
      'Try backstrap loom weaving',
      'See alpaca and sheep wool processed',
      'Understand textile symbolism',
      'Support indigenous women\'s cooperatives'
    ],
    highlightsEs: [
      'Conoce tejedoras maestras',
      'Aprende teñido natural',
      'Prueba el tejido en telar de cintura',
      'Observa el procesamiento de lana de alpaca y oveja',
      'Entiende el simbolismo textil',
      'Apoya cooperativas de mujeres indígenas'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: '$10-25 per person (varies if part of tour)',
    priceRangeEs: '$10-25 por persona (varía si es parte de tour)',
    bestTime: 'Year-round. Often combined with Sacred Valley tour.',
    bestTimeEs: 'Todo el año. A menudo combinado con tour del Valle Sagrado.',
    includes: [
      'Weaving demonstration',
      'Natural dyeing demonstration',
      'Hands-on weaving experience',
      'Cultural explanation',
      'Often includes welcome drink',
      'Option to purchase textiles'
    ],
    includesEs: [
      'Demostración de tejido',
      'Demostración de teñido natural',
      'Experiencia práctica de tejido',
      'Explicación cultural',
      'A menudo incluye bebida de bienvenida',
      'Opción de comprar textiles'
    ],
    tips: [
      'Best combined with Chinchero ruins visit',
      'Textiles here are authentic - not mass produced',
      'Kids enjoy trying the loom',
      'Great photos with colorful dyed wool',
      'Support local women\'s cooperatives',
      'Ask about meaning of patterns'
    ],
    tipsEs: [
      'Mejor combinado con visita a ruinas de Chinchero',
      'Los textiles aquí son auténticos - no producidos en masa',
      'Los niños disfrutan probando el telar',
      'Grandes fotos con lana teñida colorida',
      'Apoya cooperativas locales de mujeres',
      'Pregunta sobre el significado de los patrones'
    ],
    safetyNotes: [
      'Indoor/outdoor activity',
      'No dangerous materials',
      'Gentle activity for all ages',
      'Short drive from Cusco',
      'Altitude may affect some visitors'
    ],
    safetyNotesEs: [
      'Actividad interior/exterior',
      'Sin materiales peligrosos',
      'Actividad gentil para todas las edades',
      'Corto viaje desde Cusco',
      'La altitud puede afectar a algunos visitantes'
    ],
    relatedActivities: ['alpaca-farm-visit', 'pottery-class-cusco', 'sacred-valley-tour'],
    providers: [
      { name: 'Chinchero Weaving Cooperative', familyFriendly: true },
      { name: 'Centro de Textiles Tradicionales del Cusco', familyFriendly: true },
      { name: 'Away Nina Weavers', familyFriendly: true }
    ]
  },
  {
    slug: 'horseback-riding-sacred-valley',
    name: 'Horseback Riding in Sacred Valley',
    nameEs: 'Cabalgata en el Valle Sagrado',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the stunning Sacred Valley on horseback, riding gentle Peruvian Paso horses through ancient landscapes. Routes pass Inca ruins, traditional villages, and scenic viewpoints, offering a unique perspective on the valley below.',
    descriptionEs: 'Explora el impresionante Valle Sagrado a caballo, montando gentiles caballos de Paso Peruano a través de paisajes antiguos. Las rutas pasan por ruinas Incas, pueblos tradicionales y miradores escénicos, ofreciendo una perspectiva única del valle abajo.',
    whatToExpect: 'After safety briefing and matching with suitable horses, ride through the valley with experienced guides. Routes range from beginner-friendly to more challenging terrain. Peruvian Paso horses are known for their smooth gait.',
    whatToExpectEs: 'Después de la sesión de seguridad y asignación de caballos adecuados, cabalga por el valle con guías experimentados. Las rutas van desde terreno para principiantes hasta más desafiante. Los caballos de Paso Peruano son conocidos por su andar suave.',
    highlights: [
      'Ride smooth Peruvian Paso horses',
      'Scenic Sacred Valley views',
      'Pass by Inca ruins',
      'Visit local villages',
      'Suitable for beginners',
      'Family-friendly adventure'
    ],
    highlightsEs: [
      'Monta suaves caballos de Paso Peruano',
      'Vistas escénicas del Valle Sagrado',
      'Pasa por ruinas Incas',
      'Visita pueblos locales',
      'Apto para principiantes',
      'Aventura familiar'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-4 hours',
    durationEs: '2-4 horas',
    difficulty: 'moderate',
    priceRange: '$50-120 per person',
    priceRangeEs: '$50-120 por persona',
    bestTime: 'Dry season (May-October) best. Morning rides avoid afternoon rain.',
    bestTimeEs: 'Temporada seca (mayo-octubre) mejor. Cabalgatas matutinas evitan lluvia de la tarde.',
    includes: [
      'Well-trained horse',
      'Helmets',
      'Experienced guide',
      'Safety briefing',
      'Snacks and water',
      'Transportation (some tours)'
    ],
    includesEs: [
      'Caballo bien entrenado',
      'Cascos',
      'Guía experimentado',
      'Sesión de seguridad',
      'Snacks y agua',
      'Transporte (algunos tours)'
    ],
    tips: [
      'No experience necessary',
      'Wear long pants and closed shoes',
      'Bring sunscreen and hat',
      'Peruvian Pasos have a smooth gait',
      'Book morning to avoid rain',
      'Request ponies for young children'
    ],
    tipsEs: [
      'No se necesita experiencia',
      'Usa pantalones largos y zapatos cerrados',
      'Trae protector solar y sombrero',
      'Los Pasos Peruanos tienen un andar suave',
      'Reserva en la mañana para evitar lluvia',
      'Solicita ponis para niños pequeños'
    ],
    safetyNotes: [
      'Helmets required for all riders',
      'Horses are gentle and well-trained',
      'Guides stay close at all times',
      'Weight limits may apply',
      'Altitude may affect endurance'
    ],
    safetyNotesEs: [
      'Cascos requeridos para todos los jinetes',
      'Los caballos son gentiles y bien entrenados',
      'Los guías se mantienen cerca en todo momento',
      'Pueden aplicar límites de peso',
      'La altitud puede afectar la resistencia'
    ],
    relatedActivities: ['llama-trekking-cusco', 'sacred-valley-tour', 'mountain-biking-sacred-valley'],
    providers: [
      { name: 'Sol y Luna Stables', familyFriendly: true },
      { name: 'Perol Chico Horse Ranch', familyFriendly: true },
      { name: 'Sacred Valley Horses', familyFriendly: true }
    ]
  },
  {
    slug: 'paragliding-miraflores',
    name: 'Paragliding over Miraflores',
    nameEs: 'Parapente sobre Miraflores',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Soar above Lima\'s stunning coastline with tandem paragliding flights from the cliffs of Miraflores. Experience incredible views of the Pacific Ocean, Lima\'s skyline, and the famous Costa Verde while floating peacefully through the air.',
    descriptionEs: 'Vuela sobre la impresionante costa de Lima con vuelos de parapente tándem desde los acantilados de Miraflores. Experimenta vistas increíbles del Océano Pacífico, el horizonte de Lima, y la famosa Costa Verde mientras flotas pacíficamente por el aire.',
    whatToExpect: 'Meet your certified pilot at the Parque del Amor launch site. After a brief safety orientation, run toward the cliff edge and gently lift off. Flights last 10-15 minutes, soaring over beaches and city. Land on the beach or malecón.',
    whatToExpectEs: 'Conoce a tu piloto certificado en el sitio de despegue del Parque del Amor. Después de una breve orientación de seguridad, corre hacia el borde del acantilado y despega suavemente. Los vuelos duran 10-15 minutos, volando sobre playas y ciudad. Aterriza en la playa o el malecón.',
    highlights: [
      'Stunning Pacific Ocean views',
      'Iconic Miraflores coastline',
      'No experience necessary',
      'Professional tandem pilots',
      'Photos and video available',
      'Perfect weather year-round'
    ],
    highlightsEs: [
      'Impresionantes vistas del Océano Pacífico',
      'Icónica costa de Miraflores',
      'No se necesita experiencia',
      'Pilotos tándem profesionales',
      'Fotos y video disponibles',
      'Clima perfecto todo el año'
    ],
    familyRating: 4,
    minAge: 10,
    duration: '10-15 minutes (flight)',
    durationEs: '10-15 minutos (vuelo)',
    difficulty: 'moderate',
    priceRange: '$60-100 per person',
    priceRangeEs: '$60-100 por persona',
    bestTime: 'Year-round. Afternoon thermals provide longer flights. Best on clear days.',
    bestTimeEs: 'Todo el año. Térmicas de la tarde proporcionan vuelos más largos. Mejor en días claros.',
    includes: [
      'Tandem flight with certified pilot',
      'All safety equipment',
      'Safety briefing',
      'GoPro photos/video (usually extra)',
      'Certificate of flight',
      'Beach/malecón landing'
    ],
    includesEs: [
      'Vuelo tándem con piloto certificado',
      'Todo el equipo de seguridad',
      'Sesión de seguridad',
      'Fotos/video GoPro (usualmente extra)',
      'Certificado de vuelo',
      'Aterrizaje en playa/malecón'
    ],
    tips: [
      'Book afternoon for best thermals',
      'Wear comfortable, closed shoes',
      'Don\'t eat heavy meal before',
      'Secure loose items',
      'GoPro video is worth the extra cost',
      'Great activity before sunset'
    ],
    tipsEs: [
      'Reserva en la tarde para mejores térmicas',
      'Usa zapatos cómodos y cerrados',
      'No comas comida pesada antes',
      'Asegura objetos sueltos',
      'Video GoPro vale el costo extra',
      'Gran actividad antes del atardecer'
    ],
    safetyNotes: [
      'All pilots are certified',
      'Modern equipment regularly inspected',
      'Weather-dependent activity',
      'Not recommended for heart conditions',
      'Weight limits typically apply'
    ],
    safetyNotesEs: [
      'Todos los pilotos están certificados',
      'Equipo moderno inspeccionado regularmente',
      'Actividad dependiente del clima',
      'No recomendado para condiciones cardíacas',
      'Típicamente aplican límites de peso'
    ],
    relatedActivities: ['surfing-lessons-lima', 'lima-bike-tour', 'lima-food-tour'],
    providers: [
      { name: 'Peru Fly', familyFriendly: true },
      { name: 'Aerextreme', familyFriendly: true },
      { name: 'Miraflores Paragliding', familyFriendly: true }
    ]
  },
  {
    slug: 'ceviche-making-class',
    name: 'Ceviche Making Class',
    nameEs: 'Clase de Preparación de Ceviche',
    type: 'culinary',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Learn to prepare Peru\'s most famous dish from expert chefs in Lima, the gastronomic capital of South America. From selecting fresh fish to mastering the perfect leche de tigre, these hands-on classes teach you to make authentic ceviche.',
    descriptionEs: 'Aprende a preparar el plato más famoso del Perú de chefs expertos en Lima, la capital gastronómica de Sudamérica. Desde seleccionar pescado fresco hasta dominar la perfecta leche de tigre, estas clases prácticas te enseñan a hacer ceviche auténtico.',
    whatToExpect: 'Visit a local market to select fresh fish and ingredients. Learn about Peruvian seafood and traditional recipes. Prepare classic ceviche, leche de tigre, and accompaniments. Enjoy your creations with a pisco sour.',
    whatToExpectEs: 'Visita un mercado local para seleccionar pescado fresco e ingredientes. Aprende sobre mariscos peruanos y recetas tradicionales. Prepara ceviche clásico, leche de tigre, y acompañamientos. Disfruta tus creaciones con un pisco sour.',
    highlights: [
      'Learn Peru\'s national dish',
      'Market visit for fresh ingredients',
      'Master leche de tigre technique',
      'Expert chef instruction',
      'Eat your creations',
      'Recipes to take home'
    ],
    highlightsEs: [
      'Aprende el plato nacional del Perú',
      'Visita al mercado por ingredientes frescos',
      'Domina la técnica de leche de tigre',
      'Instrucción de chef experto',
      'Come tus creaciones',
      'Recetas para llevar a casa'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$60-120 per person',
    priceRangeEs: '$60-120 por persona',
    bestTime: 'Morning classes often include market visit. Year-round activity.',
    bestTimeEs: 'Clases matutinas a menudo incluyen visita al mercado. Actividad todo el año.',
    includes: [
      'Market visit (some classes)',
      'All ingredients',
      'Professional chef instruction',
      'Ceviche meal you prepare',
      'Pisco sour (adults)',
      'Recipe booklet'
    ],
    includesEs: [
      'Visita al mercado (algunas clases)',
      'Todos los ingredientes',
      'Instrucción de chef profesional',
      'Comida de ceviche que preparas',
      'Pisco sour (adultos)',
      'Folleto de recetas'
    ],
    tips: [
      'Lima is the best place for this class',
      'Morning classes have freshest fish',
      'Kids can help with safe tasks',
      'Book upscale classes for best experience',
      'Learn about sustainable fishing',
      'Try variations like ceviche mixto'
    ],
    tipsEs: [
      'Lima es el mejor lugar para esta clase',
      'Clases matutinas tienen el pescado más fresco',
      'Los niños pueden ayudar con tareas seguras',
      'Reserva clases de alta gama para mejor experiencia',
      'Aprende sobre pesca sostenible',
      'Prueba variaciones como ceviche mixto'
    ],
    safetyNotes: [
      'Fresh, properly handled fish used',
      'Age-appropriate tasks for children',
      'Allergy accommodations available',
      'Professional kitchen environment',
      'Knives handled by adults only'
    ],
    safetyNotesEs: [
      'Se usa pescado fresco y bien manejado',
      'Tareas apropiadas para la edad de niños',
      'Adaptaciones para alergias disponibles',
      'Ambiente de cocina profesional',
      'Cuchillos manejados solo por adultos'
    ],
    relatedActivities: ['peruvian-cooking-class', 'lima-food-tour', 'market-tour-lima'],
    providers: [
      { name: 'Peru Culinary', familyFriendly: true },
      { name: 'Lima Gourmet Company', familyFriendly: true },
      { name: 'Urban Kitchen', familyFriendly: true }
    ]
  },
  {
    slug: 'amazon-canopy-walkway',
    name: 'Amazon Canopy Walkway',
    nameEs: 'Pasarela de Dosel Amazónico',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Walk among the treetops on suspended bridges high above the Amazon rainforest floor. This unique perspective reveals wildlife and plant life invisible from below, including monkeys, sloths, and colorful birds in their natural habitat.',
    descriptionEs: 'Camina entre las copas de los árboles en puentes suspendidos muy por encima del suelo de la selva amazónica. Esta perspectiva única revela vida silvestre y plantas invisibles desde abajo, incluyendo monos, perezosos, y aves coloridas en su hábitat natural.',
    whatToExpect: 'Access the walkway via sturdy stairs and platforms. Walk along suspended bridges 30+ meters above the forest floor. Guides point out wildlife and explain the canopy ecosystem. Some walkways include observation towers.',
    whatToExpectEs: 'Accede a la pasarela por escaleras y plataformas resistentes. Camina por puentes suspendidos a más de 30 metros sobre el suelo del bosque. Los guías señalan vida silvestre y explican el ecosistema del dosel. Algunas pasarelas incluyen torres de observación.',
    highlights: [
      'Walk 30+ meters above ground',
      'Spot monkeys and sloths',
      'Bird watching paradise',
      'Unique rainforest perspective',
      'Safe, sturdy construction',
      'Unforgettable family adventure'
    ],
    highlightsEs: [
      'Camina a más de 30 metros sobre el suelo',
      'Observa monos y perezosos',
      'Paraíso para observación de aves',
      'Perspectiva única de la selva',
      'Construcción segura y resistente',
      'Aventura familiar inolvidable'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'moderate',
    priceRange: 'Included in lodge stays or $20-50',
    priceRangeEs: 'Incluido en estadías en lodges o $20-50',
    bestTime: 'Early morning for most wildlife activity. Year-round.',
    bestTimeEs: 'Temprano en la mañana para mayor actividad de vida silvestre. Todo el año.',
    includes: [
      'Guided canopy walk',
      'Safety briefing',
      'Wildlife spotting',
      'Naturalist guide',
      'Usually part of lodge package',
      'Binoculars (some operators)'
    ],
    includesEs: [
      'Caminata guiada por el dosel',
      'Sesión de seguridad',
      'Avistamiento de vida silvestre',
      'Guía naturalista',
      'Usualmente parte del paquete de lodge',
      'Binoculares (algunos operadores)'
    ],
    tips: [
      'Go early morning for wildlife',
      'Bring binoculars',
      'Wear closed-toe shoes',
      'Not for those afraid of heights',
      'Bridges are safe and sturdy',
      'Great photos from above'
    ],
    tipsEs: [
      'Ve temprano en la mañana para vida silvestre',
      'Trae binoculares',
      'Usa zapatos cerrados',
      'No para quienes temen las alturas',
      'Los puentes son seguros y resistentes',
      'Grandes fotos desde arriba'
    ],
    safetyNotes: [
      'Walkways are professionally maintained',
      'Safety railings throughout',
      'Weight limits may apply per bridge',
      'Not recommended for vertigo sufferers',
      'Follow guide instructions'
    ],
    safetyNotesEs: [
      'Las pasarelas tienen mantenimiento profesional',
      'Barandas de seguridad en todo el recorrido',
      'Pueden aplicar límites de peso por puente',
      'No recomendado para quienes sufren de vértigo',
      'Sigue las instrucciones del guía'
    ],
    relatedActivities: ['amazon-jungle-tour', 'birdwatching-peru', 'piranha-fishing'],
    providers: [
      { name: 'Explorama Canopy Walkway', familyFriendly: true },
      { name: 'Amazon Yarapa River Lodge', familyFriendly: true },
      { name: 'Treehouse Lodge', familyFriendly: true }
    ]
  },
  {
    slug: 'kayaking-lake-titicaca',
    name: 'Kayaking on Lake Titicaca',
    nameEs: 'Kayak en el Lago Titicaca',
    type: 'adventure',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Paddle across the world\'s highest navigable lake in stable kayaks, exploring floating islands, hidden bays, and ancient shorelines. This unique way to experience Lake Titicaca offers close encounters with local culture and stunning Andean scenery.',
    descriptionEs: 'Rema a través del lago navegable más alto del mundo en kayaks estables, explorando islas flotantes, bahías escondidas, y costas antiguas. Esta forma única de experimentar el Lago Titicaca ofrece encuentros cercanos con la cultura local y impresionante paisaje andino.',
    whatToExpect: 'After kayak instruction and safety briefing, paddle along the lake shore or to floating Uros islands. Stable sit-on-top kayaks are easy for beginners. Tours include rest stops, cultural visits, and stunning mountain views.',
    whatToExpectEs: 'Después de instrucción de kayak y sesión de seguridad, rema a lo largo de la orilla del lago o a las islas flotantes Uros. Los kayaks estables sit-on-top son fáciles para principiantes. Los tours incluyen paradas de descanso, visitas culturales, y impresionantes vistas de montañas.',
    highlights: [
      'Paddle world\'s highest navigable lake',
      'Visit floating Uros islands by kayak',
      'Stunning Andean mountain views',
      'Beginner-friendly equipment',
      'Cultural immersion',
      'Unique adventure experience'
    ],
    highlightsEs: [
      'Rema en el lago navegable más alto del mundo',
      'Visita islas flotantes Uros en kayak',
      'Impresionantes vistas de montañas andinas',
      'Equipo para principiantes',
      'Inmersión cultural',
      'Experiencia de aventura única'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '3-6 hours',
    durationEs: '3-6 horas',
    difficulty: 'moderate',
    priceRange: '$50-100 per person',
    priceRangeEs: '$50-100 por persona',
    bestTime: 'Dry season (May-October). Morning for calmer water and better light.',
    bestTimeEs: 'Temporada seca (mayo-octubre). Mañana para agua más tranquila y mejor luz.',
    includes: [
      'Kayak and paddle',
      'Life jacket',
      'Waterproof bag',
      'Kayak instruction',
      'Guided tour',
      'Snacks and water'
    ],
    includesEs: [
      'Kayak y remo',
      'Chaleco salvavidas',
      'Bolsa impermeable',
      'Instrucción de kayak',
      'Tour guiado',
      'Snacks y agua'
    ],
    tips: [
      'High altitude affects stamina',
      'Acclimatize before kayaking',
      'Wear layers - weather changes quickly',
      'Bring sunscreen and hat',
      'Tandem kayaks available for families',
      'Morning tours have calmer water'
    ],
    tipsEs: [
      'La alta altitud afecta la resistencia',
      'Aclimátate antes de hacer kayak',
      'Usa capas - el clima cambia rápido',
      'Trae protector solar y sombrero',
      'Kayaks tándem disponibles para familias',
      'Tours matutinos tienen agua más tranquila'
    ],
    safetyNotes: [
      'Life jackets mandatory',
      'Stable sit-on-top kayaks used',
      'Guides stay close throughout',
      'Swimming ability recommended',
      'Cold water - don\'t fall in!'
    ],
    safetyNotesEs: [
      'Chalecos salvavidas obligatorios',
      'Se usan kayaks sit-on-top estables',
      'Los guías se mantienen cerca durante todo el recorrido',
      'Habilidad de nadar recomendada',
      '¡Agua fría - no te caigas!'
    ],
    relatedActivities: ['uros-floating-islands', 'taquile-island', 'lake-titicaca-tour'],
    providers: [
      { name: 'Titicaca Kayak', familyFriendly: true },
      { name: 'Andes Kayak', familyFriendly: true },
      { name: 'Puno Kayaking', familyFriendly: true }
    ]
  },
  {
    slug: 'pisco-tasting-tour',
    name: 'Pisco Tasting Tour',
    nameEs: 'Tour de Degustación de Pisco',
    type: 'culinary',
    city: 'lima',
    region: 'Lima or Ica Region',
    regionEs: 'Región Lima o Ica',
    description: 'Discover Peru\'s national spirit on a guided pisco tasting experience. Learn about the distillation process, grape varieties, and history of pisco while sampling different styles and learning to make the perfect pisco sour.',
    descriptionEs: 'Descubre el licor nacional del Perú en una experiencia guiada de degustación de pisco. Aprende sobre el proceso de destilación, variedades de uva, e historia del pisco mientras pruebas diferentes estilos y aprendes a hacer el pisco sour perfecto.',
    whatToExpect: 'Visit a pisco distillery or specialty bar. Learn about the 8 grape varieties used in pisco production. Taste different pisco styles (puro, acholado, mosto verde). Learn to make a traditional pisco sour cocktail.',
    whatToExpectEs: 'Visita una destilería de pisco o bar especializado. Aprende sobre las 8 variedades de uva usadas en la producción de pisco. Prueba diferentes estilos de pisco (puro, acholado, mosto verde). Aprende a hacer un coctel tradicional pisco sour.',
    highlights: [
      'Learn pisco history and production',
      'Taste different pisco varieties',
      'Make your own pisco sour',
      'Visit historic bodegas (in Ica)',
      'Expert sommelier guidance',
      'Peruvian appetizers included'
    ],
    highlightsEs: [
      'Aprende historia y producción del pisco',
      'Prueba diferentes variedades de pisco',
      'Haz tu propio pisco sour',
      'Visita bodegas históricas (en Ica)',
      'Guía de sommelier experto',
      'Aperitivos peruanos incluidos'
    ],
    familyRating: 2,
    minAge: 18,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'Year-round. Afternoon or evening sessions.',
    bestTimeEs: 'Todo el año. Sesiones de tarde o noche.',
    includes: [
      'Pisco tastings (multiple varieties)',
      'Pisco sour making class',
      'Expert guide/sommelier',
      'Peruvian snacks',
      'Distillery tour (some)',
      'Cocktail recipes'
    ],
    includesEs: [
      'Degustaciones de pisco (múltiples variedades)',
      'Clase de preparación de pisco sour',
      'Guía experto/sommelier',
      'Snacks peruanos',
      'Tour de destilería (algunos)',
      'Recetas de cocteles'
    ],
    tips: [
      'Adults only activity',
      'Ica has more authentic bodega tours',
      'Lima has upscale tasting experiences',
      'Don\'t drive after tasting',
      'Pace yourself with water',
      'Buy bottles at distillery for best prices'
    ],
    tipsEs: [
      'Actividad solo para adultos',
      'Ica tiene tours de bodega más auténticos',
      'Lima tiene experiencias de degustación de alta gama',
      'No manejes después de la degustación',
      'Tómatelo con calma con agua',
      'Compra botellas en la destilería por mejores precios'
    ],
    safetyNotes: [
      'Drink responsibly',
      'Do not drive after tasting',
      'Pace yourself',
      'Eat the provided snacks',
      'Water provided'
    ],
    safetyNotesEs: [
      'Bebe responsablemente',
      'No manejes después de la degustación',
      'Tómatelo con calma',
      'Come los snacks proporcionados',
      'Agua proporcionada'
    ],
    relatedActivities: ['peruvian-cooking-class', 'lima-food-tour', 'wine-tasting-ica'],
    providers: [
      { name: 'Pisco Museum Lima', familyFriendly: false },
      { name: 'Tacama Vineyard', familyFriendly: false },
      { name: 'BarTour Lima', familyFriendly: false }
    ]
  },
  {
    slug: 'birdwatching-manu',
    name: 'Birdwatching in Manu',
    nameEs: 'Observación de Aves en Manu',
    type: 'nature',
    city: 'cusco',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Experience world-class birdwatching in Manu National Park, home to over 1,000 bird species. From colorful macaws at clay licks to rare Andean cock-of-the-rock, Manu offers unparalleled opportunities for birding enthusiasts and curious families alike.',
    descriptionEs: 'Experimenta observación de aves de clase mundial en el Parque Nacional Manu, hogar de más de 1,000 especies de aves. Desde coloridas guacamayas en colpas hasta el raro gallito de las rocas andino, Manu ofrece oportunidades sin igual para entusiastas de las aves y familias curiosas.',
    whatToExpect: 'Join expert birding guides at prime locations including clay licks, canopy towers, and forest trails. Wake before dawn to witness macaw clay licks. Spot toucans, tanagers, hummingbirds, and the iconic cock-of-the-rock at dawn leks.',
    whatToExpectEs: 'Únete a guías expertos en observación de aves en ubicaciones privilegiadas incluyendo colpas, torres de dosel, y senderos del bosque. Despierta antes del amanecer para presenciar colpas de guacamayas. Observa tucanes, tangaras, colibríes, y el icónico gallito de las rocas en leks al amanecer.',
    highlights: [
      'Over 1,000 bird species',
      'Macaw clay licks',
      'Cock-of-the-rock viewing',
      'Expert naturalist guides',
      'Canopy tower observation',
      'UNESCO Biosphere Reserve'
    ],
    highlightsEs: [
      'Más de 1,000 especies de aves',
      'Colpas de guacamayas',
      'Observación del gallito de las rocas',
      'Guías naturalistas expertos',
      'Observación desde torre de dosel',
      'Reserva de Biosfera UNESCO'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '3-7 days (multi-day expeditions)',
    durationEs: '3-7 días (expediciones de múltiples días)',
    difficulty: 'moderate',
    priceRange: '$200-400 per person per day',
    priceRangeEs: '$200-400 por persona por día',
    bestTime: 'Dry season (May-October) for best access. May-July for macaw clay licks.',
    bestTimeEs: 'Temporada seca (mayo-octubre) para mejor acceso. Mayo-julio para colpas de guacamayas.',
    includes: [
      'Expert birding guides',
      'Binoculars (often)',
      'Bird checklists',
      'Lodge accommodation',
      'All meals',
      'Park permits'
    ],
    includesEs: [
      'Guías expertos en aves',
      'Binoculares (a menudo)',
      'Listas de aves',
      'Alojamiento en lodge',
      'Todas las comidas',
      'Permisos del parque'
    ],
    tips: [
      'Bring quality binoculars',
      'Early mornings are essential',
      'Pack insect repellent',
      'Patience rewards with great sightings',
      'Keep bird checklist',
      'Multi-day trips see more species'
    ],
    tipsEs: [
      'Trae binoculares de calidad',
      'Las madrugadas son esenciales',
      'Empaca repelente de insectos',
      'La paciencia recompensa con grandes avistamientos',
      'Mantén lista de aves',
      'Viajes de múltiples días ven más especies'
    ],
    safetyNotes: [
      'Follow guide instructions',
      'Stay on trails',
      'Mosquito protection essential',
      'Drink treated water only',
      'Jungle conditions vary'
    ],
    safetyNotesEs: [
      'Sigue las instrucciones del guía',
      'Permanece en los senderos',
      'Protección contra mosquitos esencial',
      'Bebe solo agua tratada',
      'Las condiciones de la selva varían'
    ],
    relatedActivities: ['amazon-jungle-tour', 'amazon-canopy-walkway', 'wildlife-photography'],
    providers: [
      { name: 'Manu Wildlife Center', familyFriendly: true },
      { name: 'Cock of the Rock Lodge', familyFriendly: true },
      { name: 'Manu Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'stand-up-paddleboarding-lima',
    name: 'Stand-Up Paddleboarding in Lima',
    nameEs: 'Stand-Up Paddleboarding en Lima',
    type: 'adventure',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Glide across the calm Pacific waters of Lima\'s Costa Verde on a stand-up paddleboard. This beginner-friendly activity offers a fun way for families to enjoy the ocean while taking in views of Miraflores\' dramatic clifftop skyline.',
    descriptionEs: 'Deslízate sobre las tranquilas aguas del Pacífico de la Costa Verde de Lima en una tabla de stand-up paddle. Esta actividad amigable para principiantes ofrece una forma divertida para que las familias disfruten del océano mientras admiran las vistas del dramático horizonte de Miraflores.',
    whatToExpect: 'Start with beach instruction on balance, paddling technique, and safety. Practice in calm waters before venturing further. Suitable for beginners - most stand up within minutes. Wetsuits provided as water is cool year-round.',
    whatToExpectEs: 'Comienza con instrucción en la playa sobre equilibrio, técnica de remado, y seguridad. Practica en aguas tranquilas antes de aventurarte más lejos. Apto para principiantes - la mayoría se para en minutos. Se proporcionan trajes de neopreno ya que el agua es fría todo el año.',
    highlights: [
      'Beginner-friendly activity',
      'Beautiful coastal views',
      'Great core workout',
      'Calm morning waters',
      'All equipment provided',
      'Fun for the whole family'
    ],
    highlightsEs: [
      'Actividad amigable para principiantes',
      'Hermosas vistas costeras',
      'Gran ejercicio para el core',
      'Aguas tranquilas en la mañana',
      'Todo el equipo proporcionado',
      'Diversión para toda la familia'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: '$30-50 per person',
    priceRangeEs: '$30-50 por persona',
    bestTime: 'Year-round. Morning for calmest water. Summer (Dec-Mar) warmer.',
    bestTimeEs: 'Todo el año. Mañana para agua más tranquila. Verano (dic-mar) más cálido.',
    includes: [
      'Paddleboard and paddle',
      'Wetsuit',
      'Instructor',
      'Safety leash',
      'Beach instruction',
      'Water instruction'
    ],
    includesEs: [
      'Tabla de paddle y remo',
      'Traje de neopreno',
      'Instructor',
      'Leash de seguridad',
      'Instrucción en playa',
      'Instrucción en agua'
    ],
    tips: [
      'Morning sessions have calmest water',
      'Easier than surfing for beginners',
      'Great activity for teens',
      'Wear swimsuit under wetsuit',
      'Secure glasses with strap',
      'You will fall in - it\'s part of learning!'
    ],
    tipsEs: [
      'Sesiones matutinas tienen agua más tranquila',
      'Más fácil que el surf para principiantes',
      'Gran actividad para adolescentes',
      'Usa traje de baño debajo del neopreno',
      'Asegura los lentes con correa',
      '¡Te caerás - es parte del aprendizaje!'
    ],
    safetyNotes: [
      'Life jacket available on request',
      'Leash keeps board attached',
      'Instructors stay nearby',
      'Swimming ability helpful',
      'Cool water - wetsuit essential'
    ],
    safetyNotesEs: [
      'Chaleco salvavidas disponible a pedido',
      'Leash mantiene la tabla amarrada',
      'Los instructores se mantienen cerca',
      'Habilidad de nadar útil',
      'Agua fría - traje de neopreno esencial'
    ],
    relatedActivities: ['surfing-lessons-lima', 'kayaking-lima', 'paragliding-miraflores'],
    providers: [
      { name: 'Lima SUP', familyFriendly: true },
      { name: 'Peru Paddle Sports', familyFriendly: true },
      { name: 'Costa Verde SUP', familyFriendly: true }
    ]
  },
  {
    slug: 'piranha-fishing-amazon',
    name: 'Piranha Fishing in the Amazon',
    nameEs: 'Pesca de Pirañas en el Amazonas',
    type: 'adventure',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Try your hand at catching the Amazon\'s most famous fish on a family-friendly fishing excursion. Using simple wooden poles and meat bait, even children can catch these feisty fish while learning about Amazon river ecosystems.',
    descriptionEs: 'Prueba tu suerte atrapando el pez más famoso del Amazonas en una excursión de pesca familiar. Usando simples cañas de madera y carne como carnada, incluso los niños pueden atrapar estos peces aguerridos mientras aprenden sobre los ecosistemas fluviales amazónicos.',
    whatToExpect: 'Travel by boat to productive fishing spots in lagoons or tributaries. Use traditional wooden poles with simple hooks and meat bait. Guides teach technique and share knowledge about piranhas and their role in the ecosystem. Catch-and-release or keep for dinner!',
    whatToExpectEs: 'Viaja en bote a lugares productivos de pesca en lagunas o tributarios. Usa cañas de madera tradicionales con anzuelos simples y carne como carnada. Los guías enseñan la técnica y comparten conocimientos sobre las pirañas y su rol en el ecosistema. ¡Pesca y suelta o quédatelos para la cena!',
    highlights: [
      'Catch real piranhas',
      'Simple, fun technique',
      'Learn about Amazon ecosystem',
      'Suitable for all ages',
      'Boat ride through jungle',
      'Often can eat your catch'
    ],
    highlightsEs: [
      'Atrapa pirañas reales',
      'Técnica simple y divertida',
      'Aprende sobre el ecosistema amazónico',
      'Apto para todas las edades',
      'Paseo en bote por la selva',
      'A menudo puedes comer tu pesca'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: 'Usually included in lodge stay or $20-40',
    priceRangeEs: 'Usualmente incluido en estadía en lodge o $20-40',
    bestTime: 'Year-round. Dry season (June-October) has lower water and better fishing.',
    bestTimeEs: 'Todo el año. Temporada seca (junio-octubre) tiene agua más baja y mejor pesca.',
    includes: [
      'Fishing equipment',
      'Boat transportation',
      'Expert guide',
      'Bait',
      'Safety briefing',
      'Often lunch or snacks'
    ],
    includesEs: [
      'Equipo de pesca',
      'Transporte en bote',
      'Guía experto',
      'Carnada',
      'Sesión de seguridad',
      'A menudo almuerzo o snacks'
    ],
    tips: [
      'Kids absolutely love this activity',
      'Quick, jerky movements attract bites',
      'Piranhas have sharp teeth - handle carefully',
      'Great photos with your catch',
      'Sunset fishing is magical',
      'Fried piranha is delicious!'
    ],
    tipsEs: [
      'A los niños les encanta esta actividad',
      'Movimientos rápidos y bruscos atraen mordidas',
      'Las pirañas tienen dientes afilados - manipula con cuidado',
      'Grandes fotos con tu pesca',
      'La pesca al atardecer es mágica',
      '¡La piraña frita es deliciosa!'
    ],
    safetyNotes: [
      'Guide handles fish with teeth',
      'Children supervised at all times',
      'Life jackets provided',
      'Stay seated in boat',
      'Sharp hooks - be careful'
    ],
    safetyNotesEs: [
      'El guía maneja el pescado con dientes',
      'Niños supervisados en todo momento',
      'Chalecos salvavidas proporcionados',
      'Permanece sentado en el bote',
      'Anzuelos afilados - ten cuidado'
    ],
    relatedActivities: ['amazon-jungle-tour', 'amazon-canopy-walkway', 'caiman-spotting'],
    providers: [
      { name: 'Amazon Yarapa River Lodge', familyFriendly: true },
      { name: 'Explorama Lodges', familyFriendly: true },
      { name: 'Heliconia Lodge', familyFriendly: true }
    ]
  },
  {
    slug: 'caiman-night-spotting',
    name: 'Caiman Night Spotting',
    nameEs: 'Avistamiento Nocturno de Caimanes',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Glide through the Amazon waterways at night searching for caimans by flashlight. Watch their eyes glow red in the darkness as expert guides spot and sometimes carefully catch small caimans for an up-close encounter before releasing them.',
    descriptionEs: 'Deslízate por las vías fluviales del Amazonas de noche buscando caimanes con linterna. Observa sus ojos brillar rojos en la oscuridad mientras guías expertos avistan y a veces atrapan cuidadosamente pequeños caimanes para un encuentro cercano antes de liberarlos.',
    whatToExpect: 'Depart after dark by boat with powerful flashlights. Guides scan the water for the telltale red eye-shine of caimans. When spotted, approach quietly. Guides may catch small caimans for photos and education before releasing. Often see other nocturnal wildlife.',
    whatToExpectEs: 'Sal después del anochecer en bote con linternas potentes. Los guías escanean el agua buscando el característico brillo rojo de los ojos de caimanes. Cuando se avistan, se acercan silenciosamente. Los guías pueden atrapar pequeños caimanes para fotos y educación antes de liberarlos. A menudo ven otra vida silvestre nocturna.',
    highlights: [
      'See caiman eyes glow in dark',
      'Hold small caimans (optional)',
      'Magical night boat ride',
      'See nocturnal wildlife',
      'Exciting adventure for kids',
      'Learn about Amazon predators'
    ],
    highlightsEs: [
      'Ve los ojos de caimanes brillar en la oscuridad',
      'Sostén pequeños caimanes (opcional)',
      'Mágico paseo nocturno en bote',
      'Ve vida silvestre nocturna',
      'Aventura emocionante para niños',
      'Aprende sobre depredadores amazónicos'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: 'Usually included in lodge stay',
    priceRangeEs: 'Usualmente incluido en estadía en lodge',
    bestTime: 'Year-round. Dry season may have more concentrated wildlife.',
    bestTimeEs: 'Todo el año. Temporada seca puede tener vida silvestre más concentrada.',
    includes: [
      'Boat and driver',
      'Expert guide',
      'Flashlights/spotlights',
      'Life jackets',
      'Usually part of lodge package',
      'Insect repellent'
    ],
    includesEs: [
      'Bote y conductor',
      'Guía experto',
      'Linternas/reflectores',
      'Chalecos salvavidas',
      'Usualmente parte del paquete de lodge',
      'Repelente de insectos'
    ],
    tips: [
      'Kids absolutely love this activity',
      'Wear long sleeves for mosquitoes',
      'Bring camera with flash capability',
      'Stay quiet for best sightings',
      'Small caimans are safe to hold',
      'Magical experience for all ages'
    ],
    tipsEs: [
      'A los niños les encanta esta actividad',
      'Usa mangas largas para los mosquitos',
      'Trae cámara con capacidad de flash',
      'Mantén silencio para mejores avistamientos',
      'Los caimanes pequeños son seguros para sostener',
      'Experiencia mágica para todas las edades'
    ],
    safetyNotes: [
      'Only small caimans are handled',
      'Guides are trained professionals',
      'Life jackets provided',
      'Stay seated in boat',
      'Follow guide instructions'
    ],
    safetyNotesEs: [
      'Solo se manejan caimanes pequeños',
      'Los guías son profesionales entrenados',
      'Chalecos salvavidas proporcionados',
      'Permanece sentado en el bote',
      'Sigue las instrucciones del guía'
    ],
    relatedActivities: ['piranha-fishing-amazon', 'amazon-jungle-tour', 'amazon-canopy-walkway'],
    providers: [
      { name: 'Explorama Lodges', familyFriendly: true },
      { name: 'Amazon Yarapa River Lodge', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true }
    ]
  },
  {
    slug: 'chocolate-making-cusco',
    name: 'Chocolate Making Workshop',
    nameEs: 'Taller de Elaboración de Chocolate',
    type: 'culinary',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover the journey from cacao bean to chocolate bar in hands-on workshops using Peru\'s renowned cacao. Learn about Peru\'s chocolate heritage, roast and grind cacao beans, and create your own chocolate to take home.',
    descriptionEs: 'Descubre el viaje del grano de cacao a la barra de chocolate en talleres prácticos usando el reconocido cacao del Perú. Aprende sobre la herencia chocolatera del Perú, tuesta y muele granos de cacao, y crea tu propio chocolate para llevar a casa.',
    whatToExpect: 'Start by learning about Peru\'s cacao-growing regions. Handle raw cacao pods and beans. Roast, peel, and grind beans using traditional methods. Add sugar and flavors to create your own chocolate. Mold and wrap your creations to take home.',
    whatToExpectEs: 'Comienza aprendiendo sobre las regiones productoras de cacao del Perú. Manipula vainas y granos de cacao crudo. Tuesta, pela y muele los granos usando métodos tradicionales. Agrega azúcar y sabores para crear tu propio chocolate. Moldea y envuelve tus creaciones para llevar a casa.',
    highlights: [
      'Bean-to-bar experience',
      'Use traditional grinding methods',
      'Create your own chocolate',
      'Learn about Peruvian cacao',
      'Take home your creations',
      'Great activity for kids'
    ],
    highlightsEs: [
      'Experiencia del grano a la barra',
      'Usa métodos tradicionales de molienda',
      'Crea tu propio chocolate',
      'Aprende sobre el cacao peruano',
      'Llévate tus creaciones a casa',
      'Gran actividad para niños'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-50 per person',
    priceRangeEs: '$25-50 por persona',
    bestTime: 'Year-round indoor activity.',
    bestTimeEs: 'Actividad interior todo el año.',
    includes: [
      'All materials and cacao',
      'Expert instruction',
      'Chocolate tasting',
      'Your chocolate creations',
      'Cacao history lesson',
      'Recipes (some workshops)'
    ],
    includesEs: [
      'Todos los materiales y cacao',
      'Instrucción experta',
      'Degustación de chocolate',
      'Tus creaciones de chocolate',
      'Lección de historia del cacao',
      'Recetas (algunos talleres)'
    ],
    tips: [
      'Kids love grinding the beans',
      'Perfect rainy day activity',
      'Book ahead in peak season',
      'Wear clothes that can get messy',
      'Buy extra chocolate to take home',
      'Great for all ages'
    ],
    tipsEs: [
      'A los niños les encanta moler los granos',
      'Perfecta actividad para días lluviosos',
      'Reserva con anticipación en temporada alta',
      'Usa ropa que pueda ensuciarse',
      'Compra chocolate extra para llevar a casa',
      'Genial para todas las edades'
    ],
    safetyNotes: [
      'Nut-free options usually available',
      'Age-appropriate tasks',
      'Supervised grinding activities',
      'Inform of allergies beforehand',
      'Safe, clean environment'
    ],
    safetyNotesEs: [
      'Opciones sin nueces usualmente disponibles',
      'Tareas apropiadas para la edad',
      'Actividades de molienda supervisadas',
      'Informa de alergias con anticipación',
      'Ambiente seguro y limpio'
    ],
    relatedActivities: ['kids-cooking-class', 'peruvian-cooking-class', 'coffee-farm-tour'],
    providers: [
      { name: 'ChocoMuseo Cusco', familyFriendly: true },
      { name: 'Cusco Chocolate Workshop', familyFriendly: true },
      { name: 'Museo del Cacao', familyFriendly: true }
    ]
  },
  {
    slug: 'ballestas-islands-tour',
    name: 'Ballestas Islands Boat Tour',
    nameEs: 'Tour en Bote a las Islas Ballestas',
    type: 'nature',
    city: 'paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Cruise to the "Galapagos of Peru" to see thousands of sea lions, Humboldt penguins, and seabirds on dramatic rocky islands. This accessible wildlife adventure offers incredible close encounters with marine life just off the Paracas coast.',
    descriptionEs: 'Navega a las "Galápagos del Perú" para ver miles de lobos marinos, pingüinos de Humboldt, y aves marinas en dramáticas islas rocosas. Esta aventura de vida silvestre accesible ofrece increíbles encuentros cercanos con vida marina justo frente a la costa de Paracas.',
    whatToExpect: 'Board speedboats in Paracas harbor for a 2-hour tour. Pass the mysterious Candelabra geoglyph on the peninsula. Circle the islands viewing sea lions, penguins, boobies, pelicans, and cormorants. Boats get close but don\'t land on protected islands.',
    whatToExpectEs: 'Aborda lanchas rápidas en el puerto de Paracas para un tour de 2 horas. Pasa el misterioso geoglifo del Candelabro en la península. Rodea las islas viendo lobos marinos, pingüinos, piqueros, pelícanos, y cormoranes. Los botes se acercan pero no desembarcan en las islas protegidas.',
    highlights: [
      'Thousands of sea lions',
      'Humboldt penguins',
      'Massive seabird colonies',
      'Candelabra geoglyph',
      'Dramatic rock formations',
      'Accessible wildlife experience'
    ],
    highlightsEs: [
      'Miles de lobos marinos',
      'Pingüinos de Humboldt',
      'Masivas colonias de aves marinas',
      'Geoglifo del Candelabro',
      'Dramáticas formaciones rocosas',
      'Experiencia de vida silvestre accesible'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'easy',
    priceRange: '$15-30 per person',
    priceRangeEs: '$15-30 por persona',
    bestTime: 'Year-round. Morning tours have calmer seas. Best wildlife Apr-Nov.',
    bestTimeEs: 'Todo el año. Tours matutinos tienen mar más tranquilo. Mejor vida silvestre abr-nov.',
    includes: [
      'Speedboat tour',
      'Life jacket',
      'Guide narration',
      'Views of Candelabra',
      'Island circuit',
      'Wildlife viewing'
    ],
    includesEs: [
      'Tour en lancha rápida',
      'Chaleco salvavidas',
      'Narración del guía',
      'Vistas del Candelabro',
      'Circuito de las islas',
      'Avistamiento de vida silvestre'
    ],
    tips: [
      'Book 8am tour for calmest water',
      'Bring jacket - wind is cold on boat',
      'Motion sickness pills if prone',
      'Sit in back of boat for less spray',
      'Combine with Paracas Reserve',
      'Smell can be strong - normal!'
    ],
    tipsEs: [
      'Reserva tour de 8am para agua más tranquila',
      'Trae chaqueta - el viento es frío en el bote',
      'Pastillas para mareo si eres propenso',
      'Siéntate atrás del bote para menos salpicaduras',
      'Combina con Reserva de Paracas',
      '¡El olor puede ser fuerte - es normal!'
    ],
    safetyNotes: [
      'Life jackets mandatory',
      'Stay seated while moving',
      'Boats are inspected regularly',
      'Rough seas may cancel tours',
      'Sun protection essential'
    ],
    safetyNotesEs: [
      'Chalecos salvavidas obligatorios',
      'Permanece sentado mientras se mueve',
      'Los botes son inspeccionados regularmente',
      'Mar agitado puede cancelar tours',
      'Protección solar esencial'
    ],
    relatedActivities: ['paracas-reserve-tour', 'whale-watching', 'huacachina-tour'],
    providers: [
      { name: 'Paracas Explorer', familyFriendly: true },
      { name: 'Ballestas Travel', familyFriendly: true },
      { name: 'Paracas Connections', familyFriendly: true }
    ]
  },
  {
    slug: 'night-jungle-walk',
    name: 'Night Jungle Walk',
    nameEs: 'Caminata Nocturna en la Selva',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Experience the Amazon rainforest after dark when a whole different world comes alive. Armed with flashlights, walk jungle trails to discover tarantulas, tree frogs, insects, and nocturnal mammals that hide during the day.',
    descriptionEs: 'Experimenta la selva amazónica después del anochecer cuando un mundo completamente diferente cobra vida. Armados con linternas, camina por senderos de la selva para descubrir tarántulas, ranas arbóreas, insectos, y mamíferos nocturnos que se esconden durante el día.',
    whatToExpect: 'After dark, follow expert guides on jungle trails near your lodge. Use flashlights to spot wildlife - tarantulas in burrows, tree frogs on leaves, sleeping birds, and if lucky, nocturnal mammals. Hear the symphony of jungle sounds.',
    whatToExpectEs: 'Después del anochecer, sigue a guías expertos por senderos de la selva cerca de tu lodge. Usa linternas para avistar vida silvestre - tarántulas en madrigueras, ranas arbóreas en hojas, aves durmiendo, y con suerte, mamíferos nocturnos. Escucha la sinfonía de sonidos de la selva.',
    highlights: [
      'See tarantulas up close',
      'Find colorful tree frogs',
      'Hear jungle night sounds',
      'Spot sleeping birds',
      'Discover nocturnal insects',
      'Thrilling family adventure'
    ],
    highlightsEs: [
      'Ve tarántulas de cerca',
      'Encuentra ranas arbóreas coloridas',
      'Escucha sonidos nocturnos de la selva',
      'Avista aves durmiendo',
      'Descubre insectos nocturnos',
      'Emocionante aventura familiar'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'moderate',
    priceRange: 'Usually included in lodge stay',
    priceRangeEs: 'Usualmente incluido en estadía en lodge',
    bestTime: 'Year-round. Rainy season may have more frogs.',
    bestTimeEs: 'Todo el año. Temporada de lluvias puede tener más ranas.',
    includes: [
      'Expert naturalist guide',
      'Flashlight/headlamp',
      'Rubber boots',
      'Insect repellent',
      'Wildlife spotting',
      'Usually part of lodge package'
    ],
    includesEs: [
      'Guía naturalista experto',
      'Linterna/lámpara de cabeza',
      'Botas de goma',
      'Repelente de insectos',
      'Avistamiento de vida silvestre',
      'Usualmente parte del paquete de lodge'
    ],
    tips: [
      'Wear long pants and closed shoes',
      'Apply insect repellent liberally',
      'Stay close to your guide',
      'Tarantulas are harmless if not touched',
      'Kids find it thrilling not scary',
      'Camera with good flash helpful'
    ],
    tipsEs: [
      'Usa pantalones largos y zapatos cerrados',
      'Aplica repelente de insectos generosamente',
      'Permanece cerca de tu guía',
      'Las tarántulas son inofensivas si no se tocan',
      'Los niños lo encuentran emocionante, no aterrador',
      'Cámara con buen flash útil'
    ],
    safetyNotes: [
      'Stay on marked trails',
      'Follow guide at all times',
      'Don\'t touch wildlife',
      'Watch your footing',
      'Guides carry first aid'
    ],
    safetyNotesEs: [
      'Permanece en senderos marcados',
      'Sigue al guía en todo momento',
      'No toques la vida silvestre',
      'Cuida tus pasos',
      'Los guías llevan primeros auxilios'
    ],
    relatedActivities: ['caiman-night-spotting', 'amazon-jungle-tour', 'amazon-canopy-walkway'],
    providers: [
      { name: 'Explorama Lodges', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true },
      { name: 'Inkaterra Reserva', familyFriendly: true }
    ]
  },
  {
    slug: 'yumbilla-waterfall-trek',
    name: 'Yumbilla Waterfall Trek',
    nameEs: 'Trekking a Catarata Yumbilla',
    type: 'adventure',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    description: 'Trek through cloud forest to one of the world\'s tallest waterfalls at 896 meters. This challenging hike rewards families with spectacular views of the four-tiered cascade surrounded by pristine Amazonian vegetation.',
    descriptionEs: 'Camina a través del bosque nublado hasta una de las cataratas más altas del mundo con 896 metros. Esta caminata desafiante recompensa a las familias con vistas espectaculares de la cascada de cuatro niveles rodeada de vegetación amazónica prístina.',
    whatToExpect: 'Begin with a drive to the village of Cuispes, where local guides lead you through lush cloud forest. The trail passes through farmland before entering dense vegetation with orchids, bromeliads, and hummingbirds. After 2-3 hours of hiking, reach the base of the magnificent cascade where mist creates rainbows on sunny days. Strong hikers can continue to upper viewpoints for even more dramatic perspectives.',
    whatToExpectEs: 'Comienza con un viaje en auto al pueblo de Cuispes, donde guías locales te llevan a través del exuberante bosque nublado. El sendero pasa por tierras de cultivo antes de entrar en densa vegetación con orquídeas, bromelias y colibríes. Después de 2-3 horas de caminata, llegas a la base de la magnífica cascada donde la neblina crea arcoíris en días soleados. Los excursionistas fuertes pueden continuar a miradores superiores para perspectivas aún más dramáticas.',
    highlights: [
      'One of the world\'s tallest waterfalls',
      'Four-tiered cascade totaling 896 meters',
      'Cloud forest biodiversity',
      'Local community guides',
      'Hummingbird sightings common'
    ],
    highlightsEs: [
      'Una de las cataratas más altas del mundo',
      'Cascada de cuatro niveles que totaliza 896 metros',
      'Biodiversidad del bosque nublado',
      'Guías de la comunidad local',
      'Avistamientos de colibríes comunes'
    ],
    familyRating: 3,
    minAge: 10,
    duration: '5-6 hours',
    durationEs: '5-6 horas',
    difficulty: 'challenging',
    priceRange: '$30-50 per person with guide',
    priceRangeEs: '$30-50 por persona con guía',
    bestTime: 'May-October (dry season)',
    bestTimeEs: 'Mayo-Octubre (temporada seca)',
    includes: [
      'Local guide from Cuispes',
      'Trail access fees',
      'Basic lunch sometimes included',
      'Transportation from Chachapoyas optional'
    ],
    includesEs: [
      'Guía local de Cuispes',
      'Tarifas de acceso al sendero',
      'Almuerzo básico a veces incluido',
      'Transporte desde Chachapoyas opcional'
    ],
    tips: [
      'Start early to avoid afternoon clouds',
      'Waterproof gear essential year-round',
      'Bring plenty of water and snacks',
      'Hiking poles helpful on steep sections',
      'Allow extra time for photography',
      'Can combine with Gocta for multi-day trip'
    ],
    tipsEs: [
      'Comienza temprano para evitar nubes de la tarde',
      'Equipo impermeable esencial todo el año',
      'Lleva suficiente agua y bocadillos',
      'Bastones de trekking útiles en secciones empinadas',
      'Deja tiempo extra para fotografía',
      'Se puede combinar con Gocta para viaje de varios días'
    ],
    safetyNotes: [
      'Trail can be slippery when wet',
      'Altitude around 2,400m - acclimatize first',
      'Don\'t approach waterfall base in heavy rain',
      'Inform someone of your hiking plans',
      'Basic fitness required'
    ],
    safetyNotesEs: [
      'El sendero puede ser resbaloso cuando está mojado',
      'Altitud alrededor de 2,400m - aclimatarse primero',
      'No te acerques a la base de la cascada en lluvia fuerte',
      'Informa a alguien de tus planes de caminata',
      'Se requiere condición física básica'
    ],
    relatedActivities: ['gocta-waterfall-hike', 'birdwatching-tour', 'cloud-forest-exploration'],
    providers: [
      { name: 'Cuispes Community Guides', familyFriendly: true },
      { name: 'Vilaya Tours', familyFriendly: true },
      { name: 'Chachapoyas Backpackers', familyFriendly: true }
    ]
  },
  {
    slug: 'pink-river-dolphin-watching',
    name: 'Pink River Dolphin Watching',
    nameEs: 'Avistamiento de Delfines Rosados',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Search for the magical pink river dolphins of the Amazon on a boat excursion through river channels and flooded forests. These unique freshwater dolphins are found only in South American rivers and are a highlight of any Amazon visit.',
    descriptionEs: 'Busca los mágicos delfines rosados del Amazonas en una excursión en bote por canales fluviales y bosques inundados. Estos únicos delfines de agua dulce se encuentran solo en ríos sudamericanos y son un punto destacado de cualquier visita a la Amazonía.',
    whatToExpect: 'Depart early morning by boat to reach areas where dolphins congregate. Your guide knows the best spots where rivers meet and fish are abundant. Watch for the distinctive pink coloring of adults as they surface to breathe. Gray dolphins often accompany them. Lucky visitors may see dolphins bow-riding or approaching the boat curiously. The trip includes birding and wildlife spotting along the riverbanks.',
    whatToExpectEs: 'Parte temprano en la mañana en bote para llegar a áreas donde se congregan los delfines. Tu guía conoce los mejores lugares donde se encuentran los ríos y abundan los peces. Observa la distintiva coloración rosa de los adultos cuando salen a respirar. Los delfines grises a menudo los acompañan. Los visitantes afortunados pueden ver delfines nadando junto a la proa o acercándose curiosamente al bote. El viaje incluye avistamiento de aves y vida silvestre a lo largo de las riberas.',
    highlights: [
      'Rare pink freshwater dolphins',
      'Unique Amazon wildlife',
      'Beautiful river scenery',
      'Birdwatching opportunities',
      'Magical experience for children'
    ],
    highlightsEs: [
      'Raros delfines rosados de agua dulce',
      'Vida silvestre única del Amazonas',
      'Hermoso paisaje fluvial',
      'Oportunidades de avistamiento de aves',
      'Experiencia mágica para niños'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$40-80 per person',
    priceRangeEs: '$40-80 por persona',
    bestTime: 'Year-round, best June-November (low water)',
    bestTimeEs: 'Todo el año, mejor Junio-Noviembre (agua baja)',
    includes: [
      'Expert naturalist guide',
      'Boat transportation',
      'Life jackets',
      'Binoculars available',
      'Water and snacks'
    ],
    includesEs: [
      'Guía naturalista experto',
      'Transporte en bote',
      'Chalecos salvavidas',
      'Binoculares disponibles',
      'Agua y bocadillos'
    ],
    tips: [
      'Early morning best for sightings',
      'Patience rewarded - dolphins are wild',
      'Bring camera with good zoom',
      'Sun protection essential',
      'Quiet approach increases chances',
      'Can be combined with village visits'
    ],
    tipsEs: [
      'Temprano en la mañana es mejor para avistamientos',
      'La paciencia es recompensada - los delfines son salvajes',
      'Lleva cámara con buen zoom',
      'Protección solar esencial',
      'Acercamiento silencioso aumenta las posibilidades',
      'Se puede combinar con visitas a comunidades'
    ],
    safetyNotes: [
      'Stay seated in boat',
      'Life jackets required for children',
      'Don\'t attempt to touch dolphins',
      'Follow guide instructions',
      'Sun exposure can be intense'
    ],
    safetyNotesEs: [
      'Permanece sentado en el bote',
      'Chalecos salvavidas requeridos para niños',
      'No intentes tocar a los delfines',
      'Sigue las instrucciones del guía',
      'La exposición al sol puede ser intensa'
    ],
    relatedActivities: ['amazon-jungle-tour', 'piranha-fishing', 'amazon-canopy-walkway'],
    providers: [
      { name: 'Amazon Dolphin Lodge', familyFriendly: true },
      { name: 'Pacaya Samiria Tours', familyFriendly: true },
      { name: 'Jungle Experiences', familyFriendly: true }
    ]
  },
  {
    slug: 'kuelap-fortress-tour',
    name: 'Kuelap Fortress Guided Tour',
    nameEs: 'Tour Guiado a la Fortaleza de Kuélap',
    type: 'cultural',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    description: 'Explore the magnificent Chachapoya fortress of Kuelap with expert guides who bring this ancient citadel to life. Perched at 3,000 meters, this massive walled city rivals Machu Picchu in scale and predates it by 600 years.',
    descriptionEs: 'Explora la magnífica fortaleza Chachapoya de Kuélap con guías expertos que dan vida a esta antigua ciudadela. Ubicada a 3,000 metros, esta masiva ciudad amurallada rivaliza con Machu Picchu en escala y es 600 años más antigua.',
    whatToExpect: 'Take the cable car up through cloud forest for spectacular views before exploring the fortress. Your guide explains Chachapoya history, architecture, and the mysterious circular buildings. Walk through the narrow defensive entrance, see intricate friezes, and learn about daily life in this cloud warrior city. The site spans 6 hectares with over 400 structures to discover.',
    whatToExpectEs: 'Toma el teleférico a través del bosque nublado para vistas espectaculares antes de explorar la fortaleza. Tu guía explica la historia, arquitectura y los misteriosos edificios circulares de los Chachapoya. Camina por la estrecha entrada defensiva, observa frisos intrincados y aprende sobre la vida diaria en esta ciudad de los guerreros de las nubes. El sitio abarca 6 hectáreas con más de 400 estructuras por descubrir.',
    highlights: [
      'Pre-Incan citadel older than Machu Picchu',
      'Cable car with stunning views',
      'Unique circular architecture',
      'Decorated stone friezes',
      'Cloud forest setting at 3,000m'
    ],
    highlightsEs: [
      'Ciudadela pre-incaica más antigua que Machu Picchu',
      'Teleférico con vistas impresionantes',
      'Arquitectura circular única',
      'Frisos de piedra decorados',
      'Entorno de bosque nublado a 3,000m'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'moderate',
    priceRange: '$60-100 including cable car',
    priceRangeEs: '$60-100 incluyendo teleférico',
    bestTime: 'May-September (dry season)',
    bestTimeEs: 'Mayo-Septiembre (temporada seca)',
    includes: [
      'Professional bilingual guide',
      'Cable car tickets',
      'Site entrance fee',
      'Transportation from Chachapoyas',
      'Sometimes includes lunch'
    ],
    includesEs: [
      'Guía profesional bilingüe',
      'Boletos de teleférico',
      'Entrada al sitio',
      'Transporte desde Chachapoyas',
      'A veces incluye almuerzo'
    ],
    tips: [
      'Book cable car tickets in advance',
      'Arrive early for best weather',
      'Bring warm layers for altitude',
      'Walking shoes with good grip essential',
      'Allow 2-3 hours at the site',
      'Combine with Gocta for full experience'
    ],
    tipsEs: [
      'Reserva boletos de teleférico con anticipación',
      'Llega temprano para mejor clima',
      'Lleva capas abrigadas para la altitud',
      'Zapatos para caminar con buen agarre esenciales',
      'Dedica 2-3 horas en el sitio',
      'Combina con Gocta para experiencia completa'
    ],
    safetyNotes: [
      'Stay on marked paths',
      'Watch step on uneven stones',
      'Altitude may affect some visitors',
      'Don\'t climb on structures',
      'Keep children supervised near walls'
    ],
    safetyNotesEs: [
      'Permanece en senderos marcados',
      'Cuida tus pasos en piedras irregulares',
      'La altitud puede afectar a algunos visitantes',
      'No escales las estructuras',
      'Mantén a los niños supervisados cerca de los muros'
    ],
    relatedActivities: ['yumbilla-waterfall-trek', 'gocta-waterfall-hike', 'chachapoyas-museums'],
    providers: [
      { name: 'Vilaya Tours', familyFriendly: true },
      { name: 'Kuélap Tours', familyFriendly: true },
      { name: 'Amazonas Explorer', familyFriendly: true }
    ]
  },
  {
    slug: 'coffee-farm-tour-amazonas',
    name: 'Coffee Farm Tour Amazonas',
    nameEs: 'Tour de Finca de Café Amazonas',
    type: 'culinary',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    description: 'Visit family-owned coffee farms in the cloud forests of Amazonas region where some of Peru\'s finest beans are grown. Learn the entire process from cherry to cup while supporting sustainable agriculture and local communities.',
    descriptionEs: 'Visita fincas de café familiares en los bosques nublados de la región Amazonas donde se cultivan algunos de los mejores granos del Perú. Aprende todo el proceso desde la cereza hasta la taza mientras apoyas la agricultura sostenible y las comunidades locales.',
    whatToExpect: 'Drive into the lush mountains where coffee thrives at optimal altitude. Walk through shade-grown coffee plantations, picking ripe cherries during harvest season. Learn about organic farming practices, processing methods, and fair trade certification. Try your hand at roasting beans and finally taste freshly brewed coffee with distinct regional flavors. Kids enjoy the farm animals and beautiful scenery.',
    whatToExpectEs: 'Viaja a las exuberantes montañas donde el café prospera a la altitud óptima. Camina por plantaciones de café cultivado a la sombra, recogiendo cerezas maduras durante la temporada de cosecha. Aprende sobre prácticas de agricultura orgánica, métodos de procesamiento y certificación de comercio justo. Prueba tostar granos y finalmente degusta café recién preparado con sabores regionales distintivos. Los niños disfrutan de los animales de la granja y el hermoso paisaje.',
    highlights: [
      'Bean-to-cup coffee experience',
      'Beautiful mountain scenery',
      'Support local families',
      'Learn sustainable farming',
      'Taste award-winning coffee'
    ],
    highlightsEs: [
      'Experiencia de café del grano a la taza',
      'Hermoso paisaje montañoso',
      'Apoya a familias locales',
      'Aprende agricultura sostenible',
      'Degusta café premiado'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$25-45 per person',
    priceRangeEs: '$25-45 por persona',
    bestTime: 'Year-round, harvest April-September',
    bestTimeEs: 'Todo el año, cosecha Abril-Septiembre',
    includes: [
      'Farm tour with local guide',
      'Coffee tasting session',
      'Light snack or lunch',
      'Transportation from Chachapoyas',
      'Bag of fresh coffee to take home'
    ],
    includesEs: [
      'Tour de la finca con guía local',
      'Sesión de degustación de café',
      'Refrigerio ligero o almuerzo',
      'Transporte desde Chachapoyas',
      'Bolsa de café fresco para llevar'
    ],
    tips: [
      'Harvest season most interactive',
      'Hot chocolate available for kids',
      'Bring camera for scenic views',
      'Wear comfortable walking shoes',
      'Buy coffee directly from farmers',
      'Morning visits have better weather'
    ],
    tipsEs: [
      'La temporada de cosecha es más interactiva',
      'Chocolate caliente disponible para niños',
      'Lleva cámara para vistas escénicas',
      'Usa zapatos cómodos para caminar',
      'Compra café directamente de los agricultores',
      'Las visitas matutinas tienen mejor clima'
    ],
    safetyNotes: [
      'Paths can be muddy',
      'Some steep terrain',
      'Moderate altitude around 1,800m',
      'Watch for insects',
      'Sun protection recommended'
    ],
    safetyNotesEs: [
      'Los senderos pueden estar embarrados',
      'Algo de terreno empinado',
      'Altitud moderada alrededor de 1,800m',
      'Cuidado con los insectos',
      'Se recomienda protección solar'
    ],
    relatedActivities: ['chocolate-making-cusco', 'cooking-class', 'community-visits'],
    providers: [
      { name: 'Café Amazonas Tours', familyFriendly: true },
      { name: 'Finca El Limón', familyFriendly: true },
      { name: 'Rodriguez Family Farm', familyFriendly: true }
    ]
  },
  {
    slug: 'manu-wildlife-expedition',
    name: 'Manu Wildlife Expedition',
    nameEs: 'Expedición de Vida Silvestre en Manu',
    type: 'nature',
    city: 'cusco',
    region: 'Cusco/Madre de Dios',
    regionEs: 'Cusco/Madre de Dios',
    description: 'Immerse your family in Earth\'s most biodiverse ecosystem on a multi-day expedition into Manu Biosphere Reserve. Spot giant river otters, macaws at clay licks, monkeys, and over 1,000 bird species in pristine Amazon wilderness.',
    descriptionEs: 'Sumerge a tu familia en el ecosistema con mayor biodiversidad de la Tierra en una expedición de varios días a la Reserva de Biosfera del Manu. Observa nutrias gigantes de río, guacamayos en collpas, monos y más de 1,000 especies de aves en naturaleza amazónica prístina.',
    whatToExpect: 'Begin with a spectacular descent from Andean highlands through cloud forest, watching ecosystems transform. Multi-day trips include stays at rustic lodges, early morning visits to macaw clay licks where hundreds of colorful birds gather, canoe trips on oxbow lakes to find giant otters, night walks for frogs and insects, and guided forest treks. Expert naturalists help spot wildlife and explain the incredible biodiversity.',
    whatToExpectEs: 'Comienza con un descenso espectacular desde las tierras altas andinas a través del bosque nublado, observando cómo se transforman los ecosistemas. Los viajes de varios días incluyen estadías en lodges rústicos, visitas matutinas a collpas de guacamayos donde cientos de aves coloridas se reúnen, viajes en canoa por cochas para encontrar nutrias gigantes, caminatas nocturnas para ranas e insectos, y caminatas guiadas por el bosque. Naturalistas expertos ayudan a avistar vida silvestre y explican la increíble biodiversidad.',
    highlights: [
      'Giant river otter sightings',
      'Macaw clay lick spectacle',
      '13 species of monkeys possible',
      'Cloud forest to jungle transition',
      'World-class birdwatching'
    ],
    highlightsEs: [
      'Avistamientos de nutrias gigantes de río',
      'Espectáculo de collpa de guacamayos',
      '13 especies de monos posibles',
      'Transición de bosque nublado a selva',
      'Observación de aves de clase mundial'
    ],
    familyRating: 3,
    minAge: 8,
    duration: '4-8 days',
    durationEs: '4-8 días',
    difficulty: 'moderate',
    priceRange: '$800-2500 per person all-inclusive',
    priceRangeEs: '$800-2500 por persona todo incluido',
    bestTime: 'May-October (dry season), wildlife visible year-round',
    bestTimeEs: 'Mayo-Octubre (temporada seca), vida silvestre visible todo el año',
    includes: [
      'All transportation from Cusco',
      'Lodge accommodations',
      'All meals',
      'Expert naturalist guides',
      'Rubber boots and rain gear',
      'Park entrance fees'
    ],
    includesEs: [
      'Todo el transporte desde Cusco',
      'Alojamiento en lodges',
      'Todas las comidas',
      'Guías naturalistas expertos',
      'Botas de goma y equipo de lluvia',
      'Tarifas de entrada al parque'
    ],
    tips: [
      'Book 2-3 months in advance',
      'Minimum 4-5 days recommended',
      'Bring quality binoculars',
      'Camera with long zoom lens essential',
      'Pack light layers for varying climates',
      'Yellow fever vaccination required'
    ],
    tipsEs: [
      'Reserva con 2-3 meses de anticipación',
      'Mínimo 4-5 días recomendados',
      'Lleva binoculares de calidad',
      'Cámara con lente de zoom largo esencial',
      'Empaca capas ligeras para climas variados',
      'Vacuna de fiebre amarilla requerida'
    ],
    safetyNotes: [
      'Remote area - basic medical facilities only',
      'Inform operator of any health conditions',
      'Mosquito protection essential',
      'Stay with guide at all times',
      'Not recommended for very young children'
    ],
    safetyNotesEs: [
      'Área remota - solo instalaciones médicas básicas',
      'Informa al operador de cualquier condición de salud',
      'Protección contra mosquitos esencial',
      'Permanece con el guía en todo momento',
      'No recomendado para niños muy pequeños'
    ],
    relatedActivities: ['amazon-jungle-tour', 'birdwatching-manu', 'pink-river-dolphin-watching'],
    providers: [
      { name: 'Manu Wildlife Center', familyFriendly: true },
      { name: 'Manu Nature Tours', familyFriendly: true },
      { name: 'InkaNatura Travel', familyFriendly: true }
    ]
  },
  {
    slug: 'huaca-pucllana-night-tour',
    name: 'Huaca Pucllana Night Tour',
    nameEs: 'Tour Nocturno Huaca Pucllana',
    type: 'cultural',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Experience Lima\'s ancient past under dramatic illumination at Huaca Pucllana. This 1,500-year-old adobe pyramid glows mysteriously against the modern Miraflores skyline, creating an unforgettable introduction to Peru\'s pre-Columbian heritage.',
    descriptionEs: 'Experimenta el pasado antiguo de Lima bajo iluminación dramática en Huaca Pucllana. Esta pirámide de adobe de 1,500 años brilla misteriosamente contra el horizonte moderno de Miraflores, creando una introducción inolvidable al patrimonio precolombino del Perú.',
    whatToExpect: 'As darkness falls, the pyramid transforms with dramatic lighting that highlights its massive adobe brick construction. Expert guides lead small groups through the excavated ceremonial center, explaining Lima and Wari culture, sacrificial rituals, and ongoing archaeological discoveries. See ancient irrigation systems, ceremonial plazas, and the main pyramid where offerings and burials have been found. Afterwards, dine at the acclaimed restaurant overlooking the illuminated ruins.',
    whatToExpectEs: 'Al caer la noche, la pirámide se transforma con iluminación dramática que resalta su masiva construcción de ladrillos de adobe. Guías expertos lideran grupos pequeños a través del centro ceremonial excavado, explicando la cultura Lima y Wari, rituales de sacrificio y descubrimientos arqueológicos en curso. Observa antiguos sistemas de irrigación, plazas ceremoniales y la pirámide principal donde se han encontrado ofrendas y entierros. Después, cena en el aclamado restaurante con vista a las ruinas iluminadas.',
    highlights: [
      'Dramatically lit ancient pyramid',
      'Expert guided tour included',
      'Active excavation site',
      'Unique urban archaeology',
      'World-class restaurant on site'
    ],
    highlightsEs: [
      'Pirámide antigua dramáticamente iluminada',
      'Tour guiado por expertos incluido',
      'Sitio de excavación activa',
      'Arqueología urbana única',
      'Restaurante de clase mundial en el sitio'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '1-1.5 hours (tour only)',
    durationEs: '1-1.5 horas (solo tour)',
    difficulty: 'easy',
    priceRange: '15 soles adults, 7.50 soles children',
    priceRangeEs: '15 soles adultos, 7.50 soles niños',
    bestTime: 'Tours run 7pm-10pm Wednesday-Monday',
    bestTimeEs: 'Tours de 7pm-10pm Miércoles-Lunes',
    includes: [
      'Guided tour in English or Spanish',
      'Site entrance fee',
      'Access to all excavated areas',
      'Small museum visit'
    ],
    includesEs: [
      'Tour guiado en inglés o español',
      'Tarifa de entrada al sitio',
      'Acceso a todas las áreas excavadas',
      'Visita a pequeño museo'
    ],
    tips: [
      'Perfect for jet-lag - late hours',
      'Book dinner reservation separately',
      'Cats living on site delight children',
      'No flash photography',
      'Combine with Miraflores evening stroll',
      'One of Lima\'s best first-night activities'
    ],
    tipsEs: [
      'Perfecto para jet-lag - horarios tardíos',
      'Reserva cena por separado',
      'Gatos que viven en el sitio deleitan a los niños',
      'Sin fotografía con flash',
      'Combina con paseo nocturno por Miraflores',
      'Una de las mejores actividades de primera noche en Lima'
    ],
    safetyNotes: [
      'Paved pathways throughout',
      'Well-lit site',
      'Stay with tour group',
      'Watch step on uneven surfaces',
      'Wheelchair accessible routes available'
    ],
    safetyNotesEs: [
      'Senderos pavimentados en todo el sitio',
      'Sitio bien iluminado',
      'Permanece con el grupo del tour',
      'Cuidado con superficies irregulares',
      'Rutas accesibles para sillas de ruedas disponibles'
    ],
    relatedActivities: ['lima-food-tour', 'miraflores-bike-tour', 'larco-museum-visit'],
    providers: [
      { name: 'Huaca Pucllana Official Tours', familyFriendly: true },
      { name: 'Lima Walking Tours', familyFriendly: true },
      { name: 'Peru Hop', familyFriendly: true }
    ]
  },
  {
    slug: 'titicaca-homestay-experience',
    name: 'Lake Titicaca Homestay Experience',
    nameEs: 'Experiencia de Hospedaje en Lago Titicaca',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Live with an indigenous family on the shores of the world\'s highest navigable lake. This authentic cultural immersion includes traditional meals, textile demonstrations, farming activities, and stargazing at 3,800 meters under some of the clearest skies on Earth.',
    descriptionEs: 'Vive con una familia indígena en las orillas del lago navegable más alto del mundo. Esta auténtica inmersión cultural incluye comidas tradicionales, demostraciones textiles, actividades agrícolas y observación de estrellas a 3,800 metros bajo algunos de los cielos más claros de la Tierra.',
    whatToExpect: 'After crossing Lake Titicaca by boat, arrive at a traditional community on Amantani or Taquile Island. Your host family welcomes you into their adobe home, sharing meals of fresh trout, potatoes, and quinoa. Afternoon activities include learning weaving techniques, helping with farm tasks, or hiking to pre-Inca temples. Evening brings traditional dress-up, music, and dancing under spectacular star-filled skies. Wake to sunrise over the sacred lake.',
    whatToExpectEs: 'Después de cruzar el Lago Titicaca en bote, llegas a una comunidad tradicional en la Isla Amantaní o Taquile. Tu familia anfitriona te da la bienvenida a su casa de adobe, compartiendo comidas de trucha fresca, papas y quinua. Las actividades de la tarde incluyen aprender técnicas de tejido, ayudar con tareas agrícolas o caminar a templos pre-Incas. La noche trae vestimenta tradicional, música y baile bajo espectaculares cielos estrellados. Despierta con el amanecer sobre el lago sagrado.',
    highlights: [
      'Authentic family homestay',
      'Traditional Andean meals',
      'Textile weaving demonstrations',
      'Incredible stargazing',
      'Sacred lake sunrise'
    ],
    highlightsEs: [
      'Estadía familiar auténtica',
      'Comidas andinas tradicionales',
      'Demostraciones de tejido textil',
      'Increíble observación de estrellas',
      'Amanecer sobre el lago sagrado'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '1-2 nights',
    durationEs: '1-2 noches',
    difficulty: 'moderate',
    priceRange: '$80-150 per person including meals',
    priceRangeEs: '$80-150 por persona incluyendo comidas',
    bestTime: 'April-October (dry season), stargazing best May-August',
    bestTimeEs: 'Abril-Octubre (temporada seca), mejor observación de estrellas Mayo-Agosto',
    includes: [
      'Round-trip boat transportation',
      'Homestay accommodation',
      'All meals with family',
      'Cultural activities',
      'Island guide services',
      'Traditional costume rental for dancing'
    ],
    includesEs: [
      'Transporte en bote ida y vuelta',
      'Alojamiento en casa de familia',
      'Todas las comidas con la familia',
      'Actividades culturales',
      'Servicios de guía en la isla',
      'Alquiler de traje tradicional para baile'
    ],
    tips: [
      'Bring headlamp - limited electricity',
      'Pack warm layers - nights cold',
      'Altitude can affect some visitors',
      'Bring small gifts for host family',
      'Learn a few Quechua greetings',
      'Simple accommodations - manage expectations'
    ],
    tipsEs: [
      'Lleva linterna frontal - electricidad limitada',
      'Empaca capas abrigadas - noches frías',
      'La altitud puede afectar a algunos visitantes',
      'Lleva pequeños regalos para la familia anfitriona',
      'Aprende algunos saludos en quechua',
      'Alojamiento simple - maneja expectativas'
    ],
    safetyNotes: [
      'High altitude - acclimatize in Puno first',
      'Boat safety jackets provided',
      'Basic medical facilities only on island',
      'Drink bottled water only',
      'Warm clothing essential'
    ],
    safetyNotesEs: [
      'Alta altitud - aclimatarse en Puno primero',
      'Chalecos de seguridad en bote proporcionados',
      'Solo instalaciones médicas básicas en la isla',
      'Bebe solo agua embotellada',
      'Ropa abrigada esencial'
    ],
    relatedActivities: ['uros-islands-visit', 'lake-titicaca-kayaking', 'taquile-textile-tour'],
    providers: [
      { name: 'All Ways Travel', familyFriendly: true },
      { name: 'Titicaca Peru', familyFriendly: true },
      { name: 'Edgar Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'raqchi-pottery-workshop',
    name: 'Raqchi Pottery Workshop',
    nameEs: 'Taller de Cerámica en Raqchi',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Learn traditional Andean pottery techniques from master artisans in the village of Raqchi, famous for ceramics since Inca times. This hands-on workshop combines ancient temple exploration with creative family fun.',
    descriptionEs: 'Aprende técnicas tradicionales de cerámica andina de maestros artesanos en el pueblo de Raqchi, famoso por su cerámica desde tiempos Incas. Este taller práctico combina exploración de templos antiguos con diversión creativa familiar.',
    whatToExpect: 'Begin with a visit to the impressive Temple of Wiracocha to understand the area\'s Inca heritage. Then join local potters in their home workshops where families have made ceramics for generations. Learn to prepare clay, shape vessels on traditional wheels, and decorate with pre-Columbian designs. Kids love getting hands dirty creating their own pieces. Finish with lunch featuring local cuisine and browse the village artisan market for authentic souvenirs.',
    whatToExpectEs: 'Comienza con una visita al impresionante Templo de Wiracocha para entender el patrimonio Inca del área. Luego únete a alfareros locales en sus talleres caseros donde las familias han hecho cerámica por generaciones. Aprende a preparar arcilla, dar forma a vasijas en tornos tradicionales y decorar con diseños precolombinos. A los niños les encanta ensuciarse las manos creando sus propias piezas. Termina con almuerzo de cocina local y explora el mercado artesanal del pueblo para souvenirs auténticos.',
    highlights: [
      'Hands-on pottery creation',
      'Multi-generational artisan families',
      'Temple of Wiracocha visit included',
      'Traditional village atmosphere',
      'Take home your creation'
    ],
    highlightsEs: [
      'Creación de cerámica práctica',
      'Familias artesanas multigeneracionales',
      'Visita al Templo de Wiracocha incluida',
      'Atmósfera de pueblo tradicional',
      'Llévate tu creación a casa'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$45-75 per person including materials',
    priceRangeEs: '$45-75 por persona incluyendo materiales',
    bestTime: 'Year-round, June festival especially festive',
    bestTimeEs: 'Todo el año, festival de junio especialmente festivo',
    includes: [
      'Temple of Wiracocha entrance',
      'Pottery workshop with master artisan',
      'All materials and clay',
      'Finished piece to take home',
      'Traditional lunch',
      'Transportation from Cusco optional'
    ],
    includesEs: [
      'Entrada al Templo de Wiracocha',
      'Taller de cerámica con maestro artesano',
      'Todos los materiales y arcilla',
      'Pieza terminada para llevar',
      'Almuerzo tradicional',
      'Transporte desde Cusco opcional'
    ],
    tips: [
      'Wear clothes that can get dirty',
      'Great stop on Cusco-Puno route',
      'Buy directly from artisans',
      'Sunday market has most vendors',
      'Ship purchases - fragile to carry',
      'Third Sunday of June has major festival'
    ],
    tipsEs: [
      'Usa ropa que pueda ensuciarse',
      'Excelente parada en ruta Cusco-Puno',
      'Compra directamente de los artesanos',
      'Mercado dominical tiene más vendedores',
      'Envía compras - frágiles para cargar',
      'Tercer domingo de junio tiene festival importante'
    ],
    safetyNotes: [
      'Work with non-toxic natural clay',
      'Supervise children with pottery wheel',
      'Moderate altitude - 3,480m',
      'Wash hands well after workshop',
      'Sun protection recommended'
    ],
    safetyNotesEs: [
      'Trabaja con arcilla natural no tóxica',
      'Supervisa niños con torno de alfarero',
      'Altitud moderada - 3,480m',
      'Lava bien las manos después del taller',
      'Se recomienda protección solar'
    ],
    relatedActivities: ['chinchero-weaving', 'pottery-class', 'cusco-artisan-tour'],
    providers: [
      { name: 'Raqchi Artisan Cooperative', familyFriendly: true },
      { name: 'Cusco Local Tours', familyFriendly: true },
      { name: 'Andean Pottery Experience', familyFriendly: true }
    ]
  },
  {
    slug: 'nazca-lines-flight',
    name: 'Nazca Lines Scenic Flight',
    nameEs: 'Vuelo Escénico sobre Líneas de Nazca',
    type: 'adventure',
    city: 'nazca',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Soar above one of the world\'s greatest archaeological mysteries in a small aircraft. See giant geoglyphs of hummingbirds, monkeys, spiders, and geometric shapes etched into the desert 2,000 years ago by the ancient Nazca civilization.',
    descriptionEs: 'Vuela sobre uno de los mayores misterios arqueológicos del mundo en una avioneta. Observa geoglifos gigantes de colibríes, monos, arañas y formas geométricas grabadas en el desierto hace 2,000 años por la antigua civilización Nazca.',
    whatToExpect: 'After a safety briefing at Nazca\'s small airport, board a Cessna aircraft with large windows on both sides. The pilot flies a figure-eight pattern over major figures, banking to give passengers on each side optimal views. Spot the whale, astronaut, hands, tree, and famous hummingbird among dozens of figures. The flight reveals how these massive drawings, some over 200 meters long, could only be planned and appreciated from above.',
    whatToExpectEs: 'Después de una charla de seguridad en el pequeño aeropuerto de Nazca, aborda una avioneta Cessna con grandes ventanas a ambos lados. El piloto vuela en patrón de ocho sobre las figuras principales, inclinándose para dar a los pasajeros de cada lado vistas óptimas. Observa la ballena, el astronauta, las manos, el árbol y el famoso colibrí entre docenas de figuras. El vuelo revela cómo estos dibujos masivos, algunos de más de 200 metros de largo, solo podían ser planificados y apreciados desde arriba.',
    highlights: [
      'See mysterious ancient geoglyphs',
      'Views of hummingbird, monkey, spider',
      'UNESCO World Heritage Site from above',
      'Unique archaeological perspective',
      'Thrilling small plane experience'
    ],
    highlightsEs: [
      'Ve misteriosos geoglifos antiguos',
      'Vistas del colibrí, mono, araña',
      'Sitio Patrimonio UNESCO desde arriba',
      'Perspectiva arqueológica única',
      'Emocionante experiencia en avioneta'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '30-35 minutes flight time',
    durationEs: '30-35 minutos de vuelo',
    difficulty: 'easy',
    priceRange: '$80-120 USD per person',
    priceRangeEs: '$80-120 USD por persona',
    bestTime: 'Year-round, early morning flights smoothest',
    bestTimeEs: 'Todo el año, vuelos temprano en la mañana más suaves',
    includes: [
      'Round-trip flight over lines',
      'Bilingual pilot narration',
      'Certificate of flight',
      'Airport taxes',
      'Hotel pickup in Nazca available'
    ],
    includesEs: [
      'Vuelo ida y vuelta sobre las líneas',
      'Narración del piloto bilingüe',
      'Certificado de vuelo',
      'Impuestos de aeropuerto',
      'Recogida en hotel en Nazca disponible'
    ],
    tips: [
      'Book morning flights for less turbulence',
      'Eat light breakfast',
      'Take motion sickness medicine if prone',
      'Sit on right side going out',
      'Window seats on both sides',
      'Bring camera but expect some blur'
    ],
    tipsEs: [
      'Reserva vuelos matutinos para menos turbulencia',
      'Desayuna ligero',
      'Toma medicamento para mareos si eres propenso',
      'Siéntate en el lado derecho a la ida',
      'Asientos de ventana en ambos lados',
      'Lleva cámara pero espera algo de desenfoque'
    ],
    safetyNotes: [
      'Only fly with certified operators',
      'Flight may be bumpy - normal',
      'Not recommended if severe motion sickness',
      'Listen to pilot safety instructions',
      'Seatbelt required throughout'
    ],
    safetyNotesEs: [
      'Solo vuela con operadores certificados',
      'El vuelo puede ser turbulento - normal',
      'No recomendado si tienes mareos severos',
      'Escucha instrucciones de seguridad del piloto',
      'Cinturón de seguridad requerido durante todo el vuelo'
    ],
    relatedActivities: ['huacachina-sandboarding', 'paracas-islands-tour', 'nazca-culture-tour'],
    providers: [
      { name: 'Aeroparacas', familyFriendly: true },
      { name: 'AeroNasca', familyFriendly: true },
      { name: 'Movil Air', familyFriendly: true }
    ]
  },
  {
    slug: 'baroque-route-tour',
    name: 'Cusco Baroque Route Tour',
    nameEs: 'Tour Ruta del Barroco Cusco',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover South America\'s finest colonial art on a journey through four spectacular baroque churches in the villages south of Cusco. Each church reveals treasures of gold-leaf altars, murals, and the fascinating blend of indigenous and Spanish religious art.',
    descriptionEs: 'Descubre el mejor arte colonial de Sudamérica en un recorrido por cuatro espectaculares iglesias barrocas en los pueblos al sur de Cusco. Cada iglesia revela tesoros de altares con pan de oro, murales y la fascinante mezcla de arte religioso indígena y español.',
    whatToExpect: 'Begin at the San Juan Bautista Church in Huaro with its vivid murals of heaven and hell. Continue to Canincunca\'s intimate chapel before reaching the crown jewel - Andahuaylillas\' "Sistine Chapel of the Americas" with its breathtaking golden interior. End at Checacupe\'s beautiful church. Expert guides explain the iconography, history, and how indigenous artists incorporated Andean symbolism into Catholic imagery.',
    whatToExpectEs: 'Comienza en la Iglesia de San Juan Bautista en Huaro con sus vívidos murales del cielo y el infierno. Continúa a la íntima capilla de Canincunca antes de llegar a la joya de la corona - la "Capilla Sixtina de las Américas" de Andahuaylillas con su impresionante interior dorado. Termina en la hermosa iglesia de Checacupe. Guías expertos explican la iconografía, historia y cómo los artistas indígenas incorporaron simbolismo andino en imaginería católica.',
    highlights: [
      'Four stunning baroque churches',
      'Sistine Chapel of the Americas',
      'Colonial art masterpieces',
      'Gold-leaf altars and murals',
      'Indigenous-Spanish artistic fusion'
    ],
    highlightsEs: [
      'Cuatro impresionantes iglesias barrocas',
      'Capilla Sixtina de las Américas',
      'Obras maestras del arte colonial',
      'Altares con pan de oro y murales',
      'Fusión artística indígena-española'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$60-90 per person with transport',
    priceRangeEs: '$60-90 por persona con transporte',
    bestTime: 'Year-round, morning tours have best light',
    bestTimeEs: 'Todo el año, tours matutinos tienen mejor luz',
    includes: [
      'Private transportation',
      'Expert bilingual guide',
      'All church entrance fees',
      'Baroque Route ticket',
      'Snacks or light lunch'
    ],
    includesEs: [
      'Transporte privado',
      'Guía experto bilingüe',
      'Todas las entradas a iglesias',
      'Boleto Ruta del Barroco',
      'Bocadillos o almuerzo ligero'
    ],
    tips: [
      'No photography inside churches',
      'Dress respectfully - cover shoulders',
      'Can combine with Raqchi',
      'Morning light best for interiors',
      'Local guides add great context',
      'Good alternative to crowded sites'
    ],
    tipsEs: [
      'Sin fotografía dentro de las iglesias',
      'Viste respetuosamente - cubre hombros',
      'Se puede combinar con Raqchi',
      'Luz matutina mejor para interiores',
      'Guías locales añaden gran contexto',
      'Buena alternativa a sitios concurridos'
    ],
    safetyNotes: [
      'Easy walking on flat surfaces',
      'Churches can be cold - bring layers',
      'Some steps at entrances',
      'Keep voices low inside',
      'Watch children near altars'
    ],
    safetyNotesEs: [
      'Caminata fácil en superficies planas',
      'Iglesias pueden ser frías - lleva capas',
      'Algunos escalones en entradas',
      'Mantén voz baja adentro',
      'Vigila niños cerca de altares'
    ],
    relatedActivities: ['cusco-walking-tour', 'raqchi-pottery-workshop', 'tipon-ruins-visit'],
    providers: [
      { name: 'Cusco Baroque Tours', familyFriendly: true },
      { name: 'Andean Routes', familyFriendly: true },
      { name: 'Peru Cultural Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'pacaya-samiria-expedition',
    name: 'Pacaya-Samiria Wildlife Expedition',
    nameEs: 'Expedición de Fauna en Pacaya-Samiria',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Explore Peru\'s largest protected area by boat, kayak, and foot through flooded Amazon forests. Search for pink dolphins, giant otters, and hundreds of bird species while staying with local communities who have called this wilderness home for generations.',
    descriptionEs: 'Explora el área protegida más grande del Perú en bote, kayak y a pie a través de bosques amazónicos inundados. Busca delfines rosados, nutrias gigantes y cientos de especies de aves mientras te quedas con comunidades locales que han llamado hogar a esta naturaleza por generaciones.',
    whatToExpect: 'Journey by boat from Iquitos into the reserve, entering a world of flooded forests and mirror-like lakes. Paddle kayaks through submerged trees looking for monkeys, sloths, and macaws. Search for pink dolphins at river confluences and giant otters at oxbow lakes. Night excursions reveal caiman, frogs, and nocturnal creatures. Visit ribereño communities to learn traditional fishing and forest knowledge.',
    whatToExpectEs: 'Viaja en bote desde Iquitos hacia la reserva, entrando a un mundo de bosques inundados y lagos como espejos. Rema en kayaks entre árboles sumergidos buscando monos, perezosos y guacamayos. Busca delfines rosados en confluencias de ríos y nutrias gigantes en cochas. Excursiones nocturnas revelan caimanes, ranas y criaturas nocturnas. Visita comunidades ribereñas para aprender pesca tradicional y conocimiento del bosque.',
    highlights: [
      'Pink river dolphin encounters',
      'Giant otter family groups',
      'Flooded forest kayaking',
      'Community-based ecotourism',
      'Spectacular bird diversity'
    ],
    highlightsEs: [
      'Encuentros con delfines rosados de río',
      'Grupos familiares de nutrias gigantes',
      'Kayak en bosque inundado',
      'Ecoturismo comunitario',
      'Espectacular diversidad de aves'
    ],
    familyRating: 3,
    minAge: 8,
    duration: '4-7 days',
    durationEs: '4-7 días',
    difficulty: 'moderate',
    priceRange: '$800-1800 per person all-inclusive',
    priceRangeEs: '$800-1800 por persona todo incluido',
    bestTime: 'High water (Feb-May) for kayaking; low water (Jun-Nov) for wildlife',
    bestTimeEs: 'Agua alta (Feb-May) para kayak; agua baja (Jun-Nov) para fauna',
    includes: [
      'All transportation from Iquitos',
      'Camping or lodge accommodations',
      'All meals',
      'Expert naturalist guides',
      'Kayaks and equipment',
      'Reserve entrance fees'
    ],
    includesEs: [
      'Todo el transporte desde Iquitos',
      'Alojamiento en camping o lodge',
      'Todas las comidas',
      'Guías naturalistas expertos',
      'Kayaks y equipo',
      'Tarifas de entrada a la reserva'
    ],
    tips: [
      'Longer trips maximize wildlife sightings',
      'Choose community-based operators',
      'Bring quality binoculars',
      'Pack light, quick-dry clothing',
      'Insect repellent essential',
      'Patience rewarded with rare sightings'
    ],
    tipsEs: [
      'Viajes más largos maximizan avistamientos',
      'Elige operadores comunitarios',
      'Lleva binoculares de calidad',
      'Empaca ropa ligera de secado rápido',
      'Repelente de insectos esencial',
      'La paciencia es recompensada con avistamientos raros'
    ],
    safetyNotes: [
      'Remote area - basic medical only',
      'Life jackets required on boats',
      'Follow guide instructions always',
      'Protect from sun and insects',
      'Drink only purified water'
    ],
    safetyNotesEs: [
      'Área remota - solo atención médica básica',
      'Chalecos salvavidas requeridos en botes',
      'Sigue instrucciones del guía siempre',
      'Protégete del sol e insectos',
      'Bebe solo agua purificada'
    ],
    relatedActivities: ['amazon-jungle-tour', 'pink-river-dolphin-watching', 'piranha-fishing'],
    providers: [
      { name: 'Pacaya Samiria Amazon Lodge', familyFriendly: true },
      { name: 'Jungle Experiences', familyFriendly: true },
      { name: 'Amazonia Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'caral-ancient-civilization-tour',
    name: 'Caral Ancient Civilization Tour',
    nameEs: 'Tour Civilización Antigua de Caral',
    type: 'educational',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Step back 5,000 years to the oldest city in the Americas, as old as the Egyptian pyramids. Explore monumental temples, circular plazas, and learn about a sophisticated civilization that developed without war, pottery, or writing.',
    descriptionEs: 'Retrocede 5,000 años a la ciudad más antigua de las Américas, tan antigua como las pirámides egipcias. Explora templos monumentales, plazas circulares y aprende sobre una civilización sofisticada que se desarrolló sin guerra, cerámica o escritura.',
    whatToExpect: 'Depart Lima early for the drive through coastal desert and green river valleys to the Supe Valley. Visit the site museum to understand Caral\'s significance before walking among pyramids that predate the Incas by 4,000 years. See the main temple pyramid, sunken circular plazas for ceremonies, residential areas, and learn about their advanced knowledge of astronomy, architecture, and agriculture. The peaceful civilization traded fish for inland goods rather than making war.',
    whatToExpectEs: 'Parte temprano de Lima para el viaje a través del desierto costero y valles verdes de ríos hacia el Valle de Supe. Visita el museo del sitio para entender la importancia de Caral antes de caminar entre pirámides que preceden a los Incas por 4,000 años. Ve la pirámide del templo principal, plazas circulares hundidas para ceremonias, áreas residenciales y aprende sobre su conocimiento avanzado de astronomía, arquitectura y agricultura. La civilización pacífica comerciaba pescado por bienes del interior en lugar de hacer guerra.',
    highlights: [
      'Americas\' oldest known city',
      'UNESCO World Heritage Site',
      '5,000-year-old pyramids',
      'Peaceful civilization story',
      'On-site museum included'
    ],
    highlightsEs: [
      'Ciudad conocida más antigua de América',
      'Sitio Patrimonio de la Humanidad UNESCO',
      'Pirámides de 5,000 años',
      'Historia de civilización pacífica',
      'Museo en sitio incluido'
    ],
    familyRating: 4,
    minAge: 6,
    duration: 'Full day (8-10 hours from Lima)',
    durationEs: 'Día completo (8-10 horas desde Lima)',
    difficulty: 'easy',
    priceRange: '$80-150 per person from Lima',
    priceRangeEs: '$80-150 por persona desde Lima',
    bestTime: 'Year-round, avoid midday heat',
    bestTimeEs: 'Todo el año, evita calor del mediodía',
    includes: [
      'Round-trip transportation from Lima',
      'Professional bilingual guide',
      'Site and museum entrance',
      'Lunch at local restaurant',
      'Water and snacks'
    ],
    includesEs: [
      'Transporte ida y vuelta desde Lima',
      'Guía profesional bilingüe',
      'Entrada al sitio y museo',
      'Almuerzo en restaurante local',
      'Agua y bocadillos'
    ],
    tips: [
      'Start very early from Lima',
      'Bring sun protection - little shade',
      'Comfortable walking shoes essential',
      'Visit museum first for context',
      'Can add Supe beach time',
      'Great educational experience for kids'
    ],
    tipsEs: [
      'Parte muy temprano desde Lima',
      'Lleva protección solar - poca sombra',
      'Zapatos cómodos para caminar esenciales',
      'Visita museo primero para contexto',
      'Puede añadir tiempo en playa de Supe',
      'Gran experiencia educativa para niños'
    ],
    safetyNotes: [
      'Sun exposure intense - protect skin',
      'Bring plenty of water',
      'Some uneven terrain',
      'Stay on marked paths',
      'Long drive - bring entertainment'
    ],
    safetyNotesEs: [
      'Exposición al sol intensa - protege la piel',
      'Lleva suficiente agua',
      'Algo de terreno irregular',
      'Permanece en senderos marcados',
      'Viaje largo - lleva entretenimiento'
    ],
    relatedActivities: ['pachacamac-tour', 'lima-history-tour', 'huaca-pucllana-night-tour'],
    providers: [
      { name: 'Lima Discovery', familyFriendly: true },
      { name: 'Caral Tours', familyFriendly: true },
      { name: 'Peru Cultural Journeys', familyFriendly: true }
    ]
  },
  {
    slug: 'colca-condor-watching',
    name: 'Colca Canyon Condor Watching',
    nameEs: 'Observación de Cóndores en Colca',
    type: 'nature',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Witness the majestic Andean condor soaring on thermal currents at Cruz del Condor viewpoint, one of the best places in the world to see these magnificent birds with wingspans reaching 3 meters.',
    descriptionEs: 'Presencia el majestuoso cóndor andino planeando en corrientes térmicas en el mirador Cruz del Cóndor, uno de los mejores lugares del mundo para ver estas magníficas aves con envergaduras que alcanzan los 3 metros.',
    whatToExpect: 'Arrive at Cruz del Condor viewpoint early morning when thermal currents begin rising from the canyon. As the air warms, condors launch from their roosting spots on cliff faces, riding updrafts to gain altitude. Watch them soar gracefully past the viewpoint, sometimes within meters. Expert guides help spot the birds and explain condor biology, conservation efforts, and Andean mythology surrounding these sacred birds.',
    whatToExpectEs: 'Llega al mirador Cruz del Cóndor temprano en la mañana cuando las corrientes térmicas comienzan a elevarse del cañón. A medida que el aire se calienta, los cóndores se lanzan desde sus lugares de descanso en los acantilados, montando corrientes ascendentes para ganar altura. Obsérvalos planear graciosamente junto al mirador, a veces a metros de distancia. Guías expertos ayudan a avistar las aves y explican la biología del cóndor, esfuerzos de conservación y mitología andina sobre estas aves sagradas.',
    highlights: [
      'World\'s best condor viewing spot',
      'Wingspans up to 3 meters',
      'Dramatic canyon backdrop',
      'Multiple sightings almost guaranteed',
      'Sacred bird of the Andes'
    ],
    highlightsEs: [
      'Mejor lugar del mundo para ver cóndores',
      'Envergaduras de hasta 3 metros',
      'Dramático telón de fondo del cañón',
      'Múltiples avistamientos casi garantizados',
      'Ave sagrada de los Andes'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours at viewpoint',
    durationEs: '2-3 horas en el mirador',
    difficulty: 'easy',
    priceRange: 'Included in Colca tours, or 70 soles boleto turístico',
    priceRangeEs: 'Incluido en tours de Colca, o 70 soles boleto turístico',
    bestTime: 'Year-round, 8-10am optimal viewing time',
    bestTimeEs: 'Todo el año, 8-10am tiempo óptimo de observación',
    includes: [
      'Transportation from Chivay/Arequipa',
      'Naturalist guide',
      'Canyon viewpoint access',
      'Village stops en route',
      'Breakfast or snacks often included'
    ],
    includesEs: [
      'Transporte desde Chivay/Arequipa',
      'Guía naturalista',
      'Acceso al mirador del cañón',
      'Paradas en pueblos en ruta',
      'Desayuno o bocadillos frecuentemente incluidos'
    ],
    tips: [
      'Arrive by 8am - condors most active early',
      'Bring binoculars for close views',
      'Dress warmly - canyon rim is cold',
      'Patience rewarded with multiple sightings',
      'Best viewing June-September',
      'Combine with hot springs afternoon'
    ],
    tipsEs: [
      'Llega para las 8am - cóndores más activos temprano',
      'Lleva binoculares para vistas cercanas',
      'Vístete abrigado - borde del cañón es frío',
      'La paciencia es recompensada con múltiples avistamientos',
      'Mejor observación Junio-Septiembre',
      'Combina con aguas termales en la tarde'
    ],
    safetyNotes: [
      'Stay behind safety barriers',
      'High altitude - 3,400m',
      'Cliff edges can be dangerous',
      'Supervise children carefully',
      'Sun exposure intense at altitude'
    ],
    safetyNotesEs: [
      'Permanece detrás de barreras de seguridad',
      'Alta altitud - 3,400m',
      'Bordes de acantilados pueden ser peligrosos',
      'Supervisa a los niños cuidadosamente',
      'Exposición al sol intensa en altitud'
    ],
    relatedActivities: ['colca-hot-springs', 'colca-trekking', 'arequipa-tour'],
    providers: [
      { name: 'Colca Trek', familyFriendly: true },
      { name: 'Pablo Tour', familyFriendly: true },
      { name: 'Giardino Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'ballestas-islands-boat-tour',
    name: 'Ballestas Islands Boat Tour',
    nameEs: 'Tour en Bote a Islas Ballestas',
    type: 'nature',
    city: 'paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Cruise past rocky islands teeming with sea lions, Humboldt penguins, and thousands of seabirds on Peru\'s most accessible wildlife boat tour. See the mysterious Candelabra geoglyph and experience a marine ecosystem rivaling the Galápagos.',
    descriptionEs: 'Navega junto a islas rocosas rebosantes de lobos marinos, pingüinos de Humboldt y miles de aves marinas en el tour de vida silvestre en bote más accesible del Perú. Ve el misterioso geoglifo del Candelabro y experimenta un ecosistema marino que rivaliza con Galápagos.',
    whatToExpect: 'Board a speedboat at Paracas pier for the 2-hour coastal adventure. First stop is viewing the giant Candelabra figure carved into the coastal hillside. Then circle the Ballestas Islands where sea lions bark from rocky outcrops, penguins waddle on ledges, and thousands of boobies, pelicans, and cormorants fill the air. The nutrient-rich Humboldt Current creates one of the world\'s most productive marine ecosystems.',
    whatToExpectEs: 'Aborda un bote rápido en el muelle de Paracas para la aventura costera de 2 horas. Primera parada es ver la figura gigante del Candelabro tallada en la ladera costera. Luego rodea las Islas Ballestas donde los lobos marinos ladran desde afloramientos rocosos, los pingüinos caminan en salientes, y miles de piqueros, pelícanos y cormoranes llenan el aire. La corriente de Humboldt rica en nutrientes crea uno de los ecosistemas marinos más productivos del mundo.',
    highlights: [
      'Sea lion colonies up close',
      'Humboldt penguins in natural habitat',
      'Thousands of seabirds',
      'Candelabra geoglyph viewing',
      'Accessible wildlife adventure'
    ],
    highlightsEs: [
      'Colonias de lobos marinos de cerca',
      'Pingüinos de Humboldt en hábitat natural',
      'Miles de aves marinas',
      'Vista del geoglifo Candelabro',
      'Aventura de vida silvestre accesible'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'easy',
    priceRange: '$15-25 USD per person',
    priceRangeEs: '$15-25 USD por persona',
    bestTime: 'Year-round, morning tours have calmest seas',
    bestTimeEs: 'Todo el año, tours matutinos tienen mar más calmado',
    includes: [
      'Speedboat tour',
      'Bilingual guide',
      'Life jackets',
      'Candelabra and island viewing',
      'Wildlife narration'
    ],
    includesEs: [
      'Tour en bote rápido',
      'Guía bilingüe',
      'Chalecos salvavidas',
      'Vista del Candelabro e islas',
      'Narración de vida silvestre'
    ],
    tips: [
      'Book 8am tour for best conditions',
      'Bring warm windproof jacket',
      'Sunscreen and sunglasses essential',
      'Take motion sickness medicine if prone',
      'Cannot land on islands',
      'Combine with Paracas Reserve afternoon'
    ],
    tipsEs: [
      'Reserva tour de 8am para mejores condiciones',
      'Lleva chaqueta abrigada cortavientos',
      'Protector solar y lentes de sol esenciales',
      'Toma medicamento para mareos si eres propenso',
      'No se puede desembarcar en islas',
      'Combina con Reserva de Paracas en la tarde'
    ],
    safetyNotes: [
      'Life jackets required for all',
      'Stay seated during boat ride',
      'Spray from waves possible',
      'Hold cameras/phones securely',
      'Follow crew instructions'
    ],
    safetyNotesEs: [
      'Chalecos salvavidas requeridos para todos',
      'Permanece sentado durante el paseo',
      'Posible rocío de las olas',
      'Sostén cámaras/teléfonos de forma segura',
      'Sigue instrucciones de la tripulación'
    ],
    relatedActivities: ['paracas-reserve-tour', 'nazca-lines-flight', 'huacachina-sandboarding'],
    providers: [
      { name: 'Paracas Explorer', familyFriendly: true },
      { name: 'El Chaco Tours', familyFriendly: true },
      { name: 'Ballestas Travel', familyFriendly: true }
    ]
  },
  {
    slug: 'huacachina-sandboarding-buggy',
    name: 'Huacachina Sandboarding & Dune Buggy',
    nameEs: 'Sandboard y Buggy en Huacachina',
    type: 'adventure',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Race over towering desert dunes in powerful buggies then slide down sandy slopes on boards at Peru\'s famous oasis. This adrenaline-pumping adventure ends with a spectacular sunset over the endless desert.',
    descriptionEs: 'Corre sobre imponentes dunas de desierto en poderosos buggies y luego deslízate por pendientes arenosas en tablas en el famoso oasis del Perú. Esta aventura llena de adrenalina termina con un espectacular atardecer sobre el desierto infinito.',
    whatToExpect: 'Climb aboard a powerful dune buggy as your driver races up and over massive sand dunes, creating a roller-coaster experience in the desert. Stop at the highest dunes where guides provide sandboards and instruction. Lie face-down on the board and slide at exhilarating speeds down steep dune faces. Multiple runs at different dunes, culminating with sunset views from the highest point as the desert glows orange and gold.',
    whatToExpectEs: 'Sube a un poderoso buggy de dunas mientras tu conductor corre subiendo y bajando masivas dunas de arena, creando una experiencia de montaña rusa en el desierto. Para en las dunas más altas donde los guías proporcionan tablas de sandboard e instrucción. Acuéstate boca abajo en la tabla y deslízate a velocidades emocionantes por empinadas caras de dunas. Múltiples bajadas en diferentes dunas, culminando con vistas del atardecer desde el punto más alto mientras el desierto brilla naranja y dorado.',
    highlights: [
      'Thrilling dune buggy roller coaster',
      'Sandboarding down giant dunes',
      'Spectacular desert sunset',
      'No experience needed',
      'Unforgettable family adventure'
    ],
    highlightsEs: [
      'Emocionante montaña rusa en buggy de dunas',
      'Sandboard bajando dunas gigantes',
      'Espectacular atardecer en el desierto',
      'No se necesita experiencia',
      'Aventura familiar inolvidable'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$10-30 USD per person',
    priceRangeEs: '$10-30 USD por persona',
    bestTime: 'Year-round, sunset tours most magical',
    bestTimeEs: 'Todo el año, tours al atardecer más mágicos',
    includes: [
      'Dune buggy transport',
      'Sandboard and wax',
      'Safety equipment',
      'Guide/driver',
      'Multiple sandboarding runs',
      'Sunset viewing spot'
    ],
    includesEs: [
      'Transporte en buggy de dunas',
      'Sandboard y cera',
      'Equipo de seguridad',
      'Guía/conductor',
      'Múltiples bajadas de sandboard',
      'Lugar para ver el atardecer'
    ],
    tips: [
      'Sunset tours are most magical',
      'Wear clothes that can get sandy',
      'Bring goggles or close-fitting sunglasses',
      'Hold on tight in the buggy!',
      'Start with small dunes first',
      'Leave valuables at hotel'
    ],
    tipsEs: [
      'Tours al atardecer son más mágicos',
      'Usa ropa que pueda llenarse de arena',
      'Lleva gafas o lentes de sol ajustados',
      '¡Agárrate fuerte en el buggy!',
      'Comienza con dunas pequeñas primero',
      'Deja objetos de valor en el hotel'
    ],
    safetyNotes: [
      'Hold on to buggy handles',
      'Follow sandboarding instructions',
      'Keep mouth closed on dunes',
      'Protect eyes from sand',
      'Stay in designated areas'
    ],
    safetyNotesEs: [
      'Agárrate de las manijas del buggy',
      'Sigue instrucciones de sandboard',
      'Mantén la boca cerrada en las dunas',
      'Protege los ojos de la arena',
      'Permanece en áreas designadas'
    ],
    relatedActivities: ['ballestas-islands-boat-tour', 'paracas-reserve-tour', 'nazca-lines-flight'],
    providers: [
      { name: 'Desert Adventures', familyFriendly: true },
      { name: 'Huacachina Tours', familyFriendly: true },
      { name: 'Oasis Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'colca-hot-springs',
    name: 'Colca Valley Hot Springs',
    nameEs: 'Aguas Termales del Valle del Colca',
    type: 'relaxation',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Soak in natural thermal pools fed by volcanic hot springs while surrounded by Colca Canyon\'s stunning mountain scenery. The perfect way to relax tired muscles after condor watching or canyon hiking.',
    descriptionEs: 'Sumérgete en piscinas termales naturales alimentadas por aguas termales volcánicas mientras estás rodeado por el impresionante paisaje montañoso del Cañón del Colca. La manera perfecta de relajar músculos cansados después de observar cóndores o caminar por el cañón.',
    whatToExpect: 'Visit La Calera hot springs near Chivay with multiple pools at different temperatures. Choose from cooler pools for kids or hotter pools for adults, all with mineral-rich volcanic water said to have therapeutic properties. Stone-lined pools offer views of the surrounding mountains and terraced hillsides. After soaking, enjoy the on-site restaurant or continue exploring traditional villages.',
    whatToExpectEs: 'Visita las aguas termales de La Calera cerca de Chivay con múltiples piscinas a diferentes temperaturas. Elige desde piscinas más frescas para niños o piscinas más calientes para adultos, todas con agua volcánica rica en minerales que se dice tiene propiedades terapéuticas. Las piscinas revestidas de piedra ofrecen vistas de las montañas circundantes y laderas de terrazas. Después de remojarte, disfruta del restaurante en el sitio o continúa explorando pueblos tradicionales.',
    highlights: [
      'Natural volcanic hot springs',
      'Multiple temperature pools',
      'Stunning mountain setting',
      'Therapeutic mineral waters',
      'Perfect post-hiking relaxation'
    ],
    highlightsEs: [
      'Aguas termales volcánicas naturales',
      'Múltiples piscinas a diferentes temperaturas',
      'Impresionante entorno montañoso',
      'Aguas minerales terapéuticas',
      'Perfecta relajación post-caminata'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '1-3 hours',
    durationEs: '1-3 horas',
    difficulty: 'easy',
    priceRange: '15 soles adults, 5 soles children',
    priceRangeEs: '15 soles adultos, 5 soles niños',
    bestTime: 'Year-round, afternoon after condor watching ideal',
    bestTimeEs: 'Todo el año, tarde después de ver cóndores ideal',
    includes: [
      'Hot springs access',
      'Changing rooms',
      'Lockers available',
      'Multiple pool options',
      'Restaurant on site'
    ],
    includesEs: [
      'Acceso a aguas termales',
      'Vestidores',
      'Casilleros disponibles',
      'Múltiples opciones de piscinas',
      'Restaurante en el sitio'
    ],
    tips: [
      'Bring swimsuit and towel',
      'Start in cooler pools to adjust',
      'Early morning less crowded',
      'Perfect after condor watching',
      'Don\'t stay in hot water too long',
      'Rinse off after soaking'
    ],
    tipsEs: [
      'Lleva traje de baño y toalla',
      'Comienza en piscinas más frescas para ajustarte',
      'Temprano en la mañana menos concurrido',
      'Perfecto después de ver cóndores',
      'No te quedes en agua caliente mucho tiempo',
      'Enjuágate después de remojar'
    ],
    safetyNotes: [
      'Supervise children in all pools',
      'Hot pools can cause dizziness',
      'Stay hydrated',
      'Avoid if pregnant or heart conditions',
      'Shower before entering pools'
    ],
    safetyNotesEs: [
      'Supervisa a los niños en todas las piscinas',
      'Piscinas calientes pueden causar mareos',
      'Mantente hidratado',
      'Evita si estás embarazada o tienes condiciones cardíacas',
      'Dúchate antes de entrar a las piscinas'
    ],
    relatedActivities: ['colca-condor-watching', 'colca-trekking', 'arequipa-tour'],
    providers: [
      { name: 'La Calera Hot Springs', familyFriendly: true },
      { name: 'Colca Lodge Spa', familyFriendly: true },
      { name: 'Hotel Eco Inn', familyFriendly: true }
    ]
  },
  {
    slug: 'arequipa-santa-catalina-tour',
    name: 'Arequipa & Santa Catalina Tour',
    nameEs: 'Tour Arequipa y Santa Catalina',
    type: 'cultural',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Discover the White City\'s colonial splendor including the stunning Santa Catalina Monastery, a colorful city-within-a-city where cloistered nuns lived for centuries. Walk the historic streets of this UNESCO World Heritage Site.',
    descriptionEs: 'Descubre el esplendor colonial de la Ciudad Blanca incluyendo el impresionante Monasterio de Santa Catalina, una colorida ciudad-dentro-de-la-ciudad donde monjas de clausura vivieron por siglos. Camina las calles históricas de este Sitio Patrimonio de la Humanidad UNESCO.',
    whatToExpect: 'Begin at Arequipa\'s magnificent Plaza de Armas surrounded by sillar stone buildings and the imposing Cathedral. The highlight is Santa Catalina Monastery - spend 2 hours wandering its maze of cobblestone streets, brightly painted walls, and tranquil cloisters. See original kitchens, cells, and art collections. Continue to the Yanahuara viewpoint for volcano vistas, then explore local markets and sample traditional picanterías.',
    whatToExpectEs: 'Comienza en la magnífica Plaza de Armas de Arequipa rodeada de edificios de piedra sillar y la imponente Catedral. Lo más destacado es el Monasterio de Santa Catalina - pasa 2 horas vagando por su laberinto de calles empedradas, paredes de colores brillantes y claustros tranquilos. Ve cocinas originales, celdas y colecciones de arte. Continúa al mirador de Yanahuara para vistas de volcanes, luego explora mercados locales y prueba picanterías tradicionales.',
    highlights: [
      'Santa Catalina Monastery exploration',
      'UNESCO Historic Center',
      'White sillar architecture',
      'Volcano viewpoints',
      'Traditional Arequipeño cuisine'
    ],
    highlightsEs: [
      'Exploración del Monasterio de Santa Catalina',
      'Centro Histórico UNESCO',
      'Arquitectura de sillar blanco',
      'Miradores de volcanes',
      'Cocina tradicional arequipeña'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$40-70 per person including entrances',
    priceRangeEs: '$40-70 por persona incluyendo entradas',
    bestTime: 'Year-round, morning tours have best light',
    bestTimeEs: 'Todo el año, tours matutinos tienen mejor luz',
    includes: [
      'Professional bilingual guide',
      'Santa Catalina entrance',
      'Cathedral visit',
      'Yanahuara viewpoint',
      'Market visit',
      'Transportation if needed'
    ],
    includesEs: [
      'Guía profesional bilingüe',
      'Entrada a Santa Catalina',
      'Visita a la Catedral',
      'Mirador de Yanahuara',
      'Visita al mercado',
      'Transporte si es necesario'
    ],
    tips: [
      'Wear comfortable walking shoes',
      'Santa Catalina best in morning light',
      'Try rocoto relleno for lunch',
      'Photography allowed at monastery',
      'Lower altitude than Cusco - easier',
      'Great prep day before Colca trip'
    ],
    tipsEs: [
      'Usa zapatos cómodos para caminar',
      'Santa Catalina mejor con luz matutina',
      'Prueba rocoto relleno para almuerzo',
      'Fotografía permitida en el monasterio',
      'Menor altitud que Cusco - más fácil',
      'Gran día de preparación antes de viaje a Colca'
    ],
    safetyNotes: [
      'Easy walking on flat terrain',
      'Sun protection recommended',
      'Stay with group in markets',
      'Watch valuables in crowded areas',
      'Altitude 2,335m - manageable for most'
    ],
    safetyNotesEs: [
      'Caminata fácil en terreno plano',
      'Se recomienda protección solar',
      'Permanece con el grupo en mercados',
      'Cuida tus objetos de valor en áreas concurridas',
      'Altitud 2,335m - manejable para la mayoría'
    ],
    relatedActivities: ['colca-condor-watching', 'arequipa-food-tour', 'juanita-mummy-visit'],
    providers: [
      { name: 'Free Walking Tour Arequipa', familyFriendly: true },
      { name: 'Arequipa Tours', familyFriendly: true },
      { name: 'Colonial Tours Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'mancora-surf-lessons',
    name: 'Máncora Surf Lessons',
    nameEs: 'Clases de Surf en Máncora',
    type: 'adventure',
    city: 'piura',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    description: 'Learn to surf in Peru\'s warmest waters with patient instructors and gentle waves perfect for beginners. Máncora\'s consistent swells and year-round warm temperatures make it the ideal place for families to catch their first waves.',
    descriptionEs: 'Aprende a surfear en las aguas más cálidas del Perú con instructores pacientes y olas suaves perfectas para principiantes. Las olas consistentes de Máncora y temperaturas cálidas todo el año lo hacen el lugar ideal para que las familias atrapen sus primeras olas.',
    whatToExpect: 'Meet your instructor on the beach for a land-based introduction covering safety, paddling technique, and how to pop up on the board. Enter the warm water (no wetsuit needed!) and practice on gentle whitewash waves. Instructors stay in the water providing hands-on guidance, helping you catch waves and stand up. Most beginners are riding waves within the first lesson. Multiple sessions available for progression.',
    whatToExpectEs: 'Conoce a tu instructor en la playa para una introducción en tierra cubriendo seguridad, técnica de remado y cómo pararte en la tabla. Entra al agua cálida (¡no se necesita traje de neopreno!) y practica en olas suaves de espuma. Los instructores permanecen en el agua proporcionando guía práctica, ayudándote a atrapar olas y pararte. La mayoría de principiantes están surfeando olas en la primera lección. Múltiples sesiones disponibles para progresión.',
    highlights: [
      'Warm water - no wetsuit needed',
      'Patient, certified instructors',
      'Gentle beginner-friendly waves',
      'All equipment provided',
      'Year-round consistent conditions'
    ],
    highlightsEs: [
      'Agua cálida - no se necesita traje de neopreno',
      'Instructores certificados y pacientes',
      'Olas suaves amigables para principiantes',
      'Todo el equipo proporcionado',
      'Condiciones consistentes todo el año'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '1.5-2 hours per lesson',
    durationEs: '1.5-2 horas por lección',
    difficulty: 'easy',
    priceRange: '$25-45 per person per lesson',
    priceRangeEs: '$25-45 por persona por lección',
    bestTime: 'Year-round, morning sessions have smaller crowds',
    bestTimeEs: 'Todo el año, sesiones matutinas tienen menos gente',
    includes: [
      'Certified surf instructor',
      'Surfboard and leash',
      'Rash guard if needed',
      'Beach instruction',
      'In-water coaching',
      'Photos sometimes available'
    ],
    includesEs: [
      'Instructor de surf certificado',
      'Tabla de surf y leash',
      'Licra si es necesario',
      'Instrucción en la playa',
      'Coaching en el agua',
      'Fotos a veces disponibles'
    ],
    tips: [
      'Morning lessons less crowded',
      'Apply reef-safe sunscreen before',
      'Eat light breakfast beforehand',
      'Bring water to stay hydrated',
      'Book multiple lessons to progress',
      'Ask about family group rates'
    ],
    tipsEs: [
      'Lecciones matutinas menos concurridas',
      'Aplica protector solar seguro para arrecifes antes',
      'Desayuna ligero antes',
      'Lleva agua para mantenerte hidratado',
      'Reserva múltiples lecciones para progresar',
      'Pregunta por tarifas de grupo familiar'
    ],
    safetyNotes: [
      'Stay in designated lesson area',
      'Listen to instructor at all times',
      'Waves can be stronger than expected',
      'Protect eyes from sun glare',
      'Rest if fatigued'
    ],
    safetyNotesEs: [
      'Permanece en área designada de lección',
      'Escucha al instructor en todo momento',
      'Las olas pueden ser más fuertes de lo esperado',
      'Protege los ojos del resplandor del sol',
      'Descansa si estás fatigado'
    ],
    relatedActivities: ['whale-watching-mancora', 'sea-turtle-snorkeling', 'mancora-beach-day'],
    providers: [
      { name: 'Máncora Surf School', familyFriendly: true },
      { name: 'Laguna Surf Camp', familyFriendly: true },
      { name: 'Wave Hunters Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'ica-pisco-tasting-tour',
    name: 'Ica Pisco & Wine Tasting Tour',
    nameEs: 'Tour de Degustación de Pisco y Vino en Ica',
    type: 'culinary',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Visit traditional bodegas in Peru\'s wine country to discover how pisco, the national spirit, is crafted from grape to glass. Tour historic haciendas, see copper pot stills, and taste award-winning piscos and wines.',
    descriptionEs: 'Visita bodegas tradicionales en la región vinícola del Perú para descubrir cómo el pisco, el espíritu nacional, se elabora desde la uva hasta la copa. Recorre haciendas históricas, ve alambiques de cobre y degusta piscos y vinos premiados.',
    whatToExpect: 'Visit 2-3 traditional bodegas in the Ica Valley, starting with historic haciendas that have produced pisco for centuries. Walk through vineyards, see the old copper pot stills and clay fermentation vessels called tinajas. Learn about different grape varieties and pisco styles (puro, acholado, mosto verde). Taste multiple piscos and wines at each bodega. Kids enjoy fresh grape juice and exploring the beautiful grounds.',
    whatToExpectEs: 'Visita 2-3 bodegas tradicionales en el Valle de Ica, comenzando con haciendas históricas que han producido pisco por siglos. Camina por viñedos, ve los viejos alambiques de cobre y vasijas de arcilla para fermentación llamadas tinajas. Aprende sobre diferentes variedades de uva y estilos de pisco (puro, acholado, mosto verde). Degusta múltiples piscos y vinos en cada bodega. Los niños disfrutan jugo de uva fresco y explorar los hermosos jardines.',
    highlights: [
      'Visit historic pisco bodegas',
      'See traditional distillation process',
      'Taste premium piscos and wines',
      'Learn pisco cocktail making',
      'Beautiful hacienda settings'
    ],
    highlightsEs: [
      'Visita bodegas históricas de pisco',
      'Ve el proceso de destilación tradicional',
      'Degusta piscos y vinos premium',
      'Aprende a preparar cócteles de pisco',
      'Hermosos entornos de hacienda'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$40-70 per person',
    priceRangeEs: '$40-70 por persona',
    bestTime: 'Year-round, March harvest festival most festive',
    bestTimeEs: 'Todo el año, festival de vendimia de Marzo más festivo',
    includes: [
      'Transportation to bodegas',
      'Bilingual guide',
      'Bodega entrance fees',
      'Multiple tastings',
      'Pisco sour demonstration',
      'Grape juice for children'
    ],
    includesEs: [
      'Transporte a bodegas',
      'Guía bilingüe',
      'Entradas a bodegas',
      'Múltiples degustaciones',
      'Demostración de pisco sour',
      'Jugo de uva para niños'
    ],
    tips: [
      'Designate a non-drinking driver',
      'Eat before tasting sessions',
      'Buy pisco directly - best prices',
      'March harvest festival spectacular',
      'Combine with Huacachina same day',
      'Ask about shipping bottles home'
    ],
    tipsEs: [
      'Designa un conductor que no beba',
      'Come antes de las sesiones de degustación',
      'Compra pisco directamente - mejores precios',
      'Festival de vendimia de Marzo espectacular',
      'Combina con Huacachina el mismo día',
      'Pregunta sobre envío de botellas a casa'
    ],
    safetyNotes: [
      'Drink responsibly',
      'Designated driver essential',
      'Sun protection at vineyards',
      'Some uneven walking surfaces',
      'Stay hydrated between tastings'
    ],
    safetyNotesEs: [
      'Bebe responsablemente',
      'Conductor designado esencial',
      'Protección solar en viñedos',
      'Algunas superficies irregulares para caminar',
      'Mantente hidratado entre degustaciones'
    ],
    relatedActivities: ['huacachina-sandboarding-buggy', 'nazca-lines-flight', 'lima-pisco-tour'],
    providers: [
      { name: 'Ica Wine Tours', familyFriendly: true },
      { name: 'Tacama Bodega', familyFriendly: true },
      { name: 'Vista Alegre Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'sea-turtle-snorkeling-organos',
    name: 'Sea Turtle Snorkeling Los Órganos',
    nameEs: 'Snorkel con Tortugas Marinas en Los Órganos',
    type: 'nature',
    city: 'piura',
    region: 'Piura Region',
    regionEs: 'Región Piura',
    description: 'Swim alongside gentle green sea turtles in the warm waters near Máncora. This magical snorkeling experience at El Ñuro pier offers close encounters with resident turtles in their natural habitat.',
    descriptionEs: 'Nada junto a gentiles tortugas marinas verdes en las cálidas aguas cerca de Máncora. Esta mágica experiencia de snorkel en el muelle de El Ñuro ofrece encuentros cercanos con tortugas residentes en su hábitat natural.',
    whatToExpect: 'Travel to the fishing village of El Ñuro, where green sea turtles congregate around the pier attracted by fish scraps from local fishermen. Don snorkel gear and enter the warm water where turtles swim lazily beneath the surface. Watch them gracefully glide past, surfacing to breathe. The turtles are accustomed to snorkelers and often approach curiously. Some tours include boat trips to see more turtles and marine life.',
    whatToExpectEs: 'Viaja al pueblo pesquero de El Ñuro, donde las tortugas marinas verdes se congregan alrededor del muelle atraídas por restos de pescado de los pescadores locales. Ponte equipo de snorkel y entra al agua cálida donde las tortugas nadan perezosamente bajo la superficie. Obsérvalas deslizarse graciosamente, subiendo a respirar. Las tortugas están acostumbradas a los snorkelers y frecuentemente se acercan curiosamente. Algunos tours incluyen paseos en bote para ver más tortugas y vida marina.',
    highlights: [
      'Swim with wild sea turtles',
      'Warm water - no wetsuit needed',
      'Close-up turtle encounters',
      'Easy for all skill levels',
      'Marine conservation experience'
    ],
    highlightsEs: [
      'Nada con tortugas marinas salvajes',
      'Agua cálida - no se necesita traje de neopreno',
      'Encuentros cercanos con tortugas',
      'Fácil para todos los niveles',
      'Experiencia de conservación marina'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$20-40 per person',
    priceRangeEs: '$20-40 por persona',
    bestTime: 'Year-round, morning for calmer waters',
    bestTimeEs: 'Todo el año, mañana para aguas más calmadas',
    includes: [
      'Transportation from Máncora',
      'Snorkel equipment',
      'Life jacket if needed',
      'Guide supervision',
      'Towels sometimes provided'
    ],
    includesEs: [
      'Transporte desde Máncora',
      'Equipo de snorkel',
      'Chaleco salvavidas si es necesario',
      'Supervisión de guía',
      'Toallas a veces proporcionadas'
    ],
    tips: [
      'Don\'t touch the turtles',
      'Reef-safe sunscreen only',
      'Bring underwater camera',
      'Life jackets available for kids',
      'Morning visits less crowded',
      'Respect the wildlife'
    ],
    tipsEs: [
      'No toques las tortugas',
      'Solo protector solar seguro para arrecifes',
      'Lleva cámara subacuática',
      'Chalecos salvavidas disponibles para niños',
      'Visitas matutinas menos concurridas',
      'Respeta la vida silvestre'
    ],
    safetyNotes: [
      'Stay near the pier area',
      'Never touch or chase turtles',
      'Watch for boat traffic',
      'Use life jacket if not confident swimmer',
      'Follow guide instructions'
    ],
    safetyNotesEs: [
      'Permanece cerca del área del muelle',
      'Nunca toques o persigas a las tortugas',
      'Cuidado con el tráfico de botes',
      'Usa chaleco salvavidas si no eres nadador seguro',
      'Sigue instrucciones del guía'
    ],
    relatedActivities: ['mancora-surf-lessons', 'whale-watching-mancora', 'mancora-beach-day'],
    providers: [
      { name: 'Pacifico Adventures', familyFriendly: true },
      { name: 'El Ñuro Tours', familyFriendly: true },
      { name: 'Máncora Sea Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'gocta-falls-hike',
    name: 'Gocta Falls Hiking Adventure',
    nameEs: 'Aventura de Senderismo a Gocta',
    type: 'adventure',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    description: 'Trek through cloud forest to one of the world\'s tallest waterfalls. This moderate hike rewards families with stunning views of the 771-meter cascade, hummingbirds, orchids, and the untouched beauty of northern Peru.',
    descriptionEs: 'Camina a través del bosque nublado hasta una de las cataratas más altas del mundo. Esta caminata moderada recompensa a las familias con impresionantes vistas de la cascada de 771 metros, colibríes, orquídeas y la belleza intacta del norte del Perú.',
    whatToExpect: 'Start from Cocachimba village with a local guide who knows the trails and wildlife. Hike through farmland before entering lush cloud forest alive with bird calls and butterflies. The trail crosses streams and climbs gradually, with viewpoints revealing the massive waterfall ahead. Reach the base of Gocta where mist from the thundering cascade creates rainbows on sunny days. Optional horse rental for part of the trail.',
    whatToExpectEs: 'Comienza desde el pueblo de Cocachimba con un guía local que conoce los senderos y la vida silvestre. Camina a través de tierras de cultivo antes de entrar al exuberante bosque nublado lleno de cantos de aves y mariposas. El sendero cruza arroyos y sube gradualmente, con miradores que revelan la masiva cascada adelante. Llega a la base de Gocta donde la neblina de la estruendosa cascada crea arcoíris en días soleados. Alquiler opcional de caballos para parte del sendero.',
    highlights: [
      'One of world\'s tallest waterfalls',
      'Cloud forest biodiversity',
      'Hummingbirds and orchids',
      'Local community guides',
      'Pristine natural setting'
    ],
    highlightsEs: [
      'Una de las cataratas más altas del mundo',
      'Biodiversidad del bosque nublado',
      'Colibríes y orquídeas',
      'Guías de la comunidad local',
      'Entorno natural prístino'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '5-6 hours round trip',
    durationEs: '5-6 horas ida y vuelta',
    difficulty: 'moderate',
    priceRange: '$30-60 per person with guide',
    priceRangeEs: '$30-60 por persona con guía',
    bestTime: 'May-October (dry season)',
    bestTimeEs: 'Mayo-Octubre (temporada seca)',
    includes: [
      'Local community guide',
      'Trail entrance fees',
      'Horse rental optional extra',
      'Lunch sometimes included',
      'Transportation from Chachapoyas optional'
    ],
    includesEs: [
      'Guía de la comunidad local',
      'Tarifas de entrada al sendero',
      'Alquiler de caballos extra opcional',
      'Almuerzo a veces incluido',
      'Transporte desde Chachapoyas opcional'
    ],
    tips: [
      'Start early for best weather',
      'Waterproof jacket essential',
      'Good hiking shoes required',
      'Bring plenty of water',
      'Binoculars for birdwatching',
      'Can combine upper and lower falls'
    ],
    tipsEs: [
      'Comienza temprano para mejor clima',
      'Chaqueta impermeable esencial',
      'Buenos zapatos de trekking requeridos',
      'Lleva suficiente agua',
      'Binoculares para observación de aves',
      'Puede combinar cataratas superior e inferior'
    ],
    safetyNotes: [
      'Trail can be slippery when wet',
      'Moderate fitness required',
      'Stay on marked trails',
      'Don\'t approach waterfall base in heavy rain',
      'Leeches possible in wet season'
    ],
    safetyNotesEs: [
      'El sendero puede ser resbaloso cuando está mojado',
      'Se requiere condición física moderada',
      'Permanece en senderos marcados',
      'No te acerques a la base de la cascada en lluvia fuerte',
      'Sanguijuelas posibles en temporada de lluvias'
    ],
    relatedActivities: ['kuelap-fortress-tour', 'yumbilla-waterfall-trek', 'chachapoyas-tour'],
    providers: [
      { name: 'Cocachimba Community Guides', familyFriendly: true },
      { name: 'Gocta Andes Lodge', familyFriendly: true },
      { name: 'Vilaya Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'paracas-reserve-tour',
    name: 'Paracas National Reserve Tour',
    nameEs: 'Tour Reserva Nacional de Paracas',
    type: 'nature',
    city: 'paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Explore Peru\'s only coastal protected area where desert cliffs meet the Pacific Ocean. Drive past flamingo lagoons, dramatic viewpoints, and secluded beaches in this otherworldly landscape.',
    descriptionEs: 'Explora la única área protegida costera del Perú donde acantilados desérticos se encuentran con el Océano Pacífico. Conduce junto a lagunas de flamencos, miradores dramáticos y playas aisladas en este paisaje de otro mundo.',
    whatToExpect: 'Tour the Paracas Peninsula by vehicle, stopping at spectacular viewpoints overlooking the Pacific. See the rugged red cliffs at La Catedral (though the rock formation collapsed in 2007). Visit flamingo lagoons where pink birds wade in shallow waters. Stop at Lagunillas beach for fresh seafood lunch with sea lion viewing. Marvel at the contrast of Mars-like desert meeting turquoise ocean.',
    whatToExpectEs: 'Recorre la Península de Paracas en vehículo, deteniéndote en espectaculares miradores sobre el Pacífico. Ve los escarpados acantilados rojos en La Catedral (aunque la formación rocosa colapsó en 2007). Visita lagunas de flamencos donde aves rosadas vadean en aguas poco profundas. Para en playa Lagunillas para almuerzo de mariscos frescos con vista de lobos marinos. Maravíllate con el contraste del desierto como Marte encontrándose con el océano turquesa.',
    highlights: [
      'Dramatic desert-ocean scenery',
      'Flamingo lagoon visits',
      'Sea lion sightings',
      'Fresh seafood lunch option',
      'Spectacular photography'
    ],
    highlightsEs: [
      'Dramático paisaje desierto-océano',
      'Visitas a lagunas de flamencos',
      'Avistamientos de lobos marinos',
      'Opción de almuerzo de mariscos frescos',
      'Fotografía espectacular'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$30-50 per person',
    priceRangeEs: '$30-50 por persona',
    bestTime: 'Year-round, best wildlife June-September',
    bestTimeEs: 'Todo el año, mejor fauna Junio-Septiembre',
    includes: [
      'Transportation in reserve',
      'Guide or driver',
      'Reserve entrance fee',
      'Multiple viewpoint stops',
      'Beach time at Lagunillas'
    ],
    includesEs: [
      'Transporte en la reserva',
      'Guía o conductor',
      'Tarifa de entrada a la reserva',
      'Múltiples paradas en miradores',
      'Tiempo en playa Lagunillas'
    ],
    tips: [
      'Combine with Ballestas morning tour',
      'Bring strong sunscreen - no shade',
      'Wind can be intense - secure hats',
      'Best light for photos late afternoon',
      'Bring cash for lunch at beach',
      'Wear layers - coastal winds cool'
    ],
    tipsEs: [
      'Combina con tour matutino a Ballestas',
      'Lleva protector solar fuerte - sin sombra',
      'El viento puede ser intenso - asegura sombreros',
      'Mejor luz para fotos tarde en la tarde',
      'Lleva efectivo para almuerzo en playa',
      'Usa capas - vientos costeros frescos'
    ],
    safetyNotes: [
      'Stay on marked paths at viewpoints',
      'Cliff edges can be dangerous',
      'Strong sun exposure',
      'Don\'t swim in rough areas',
      'Watch for sea lion areas'
    ],
    safetyNotesEs: [
      'Permanece en senderos marcados en miradores',
      'Bordes de acantilados pueden ser peligrosos',
      'Fuerte exposición al sol',
      'No nades en áreas con oleaje fuerte',
      'Cuidado con áreas de lobos marinos'
    ],
    relatedActivities: ['ballestas-islands-boat-tour', 'huacachina-sandboarding-buggy', 'ica-pisco-tasting-tour'],
    providers: [
      { name: 'Paracas Explorer', familyFriendly: true },
      { name: 'Peru Hop', familyFriendly: true },
      { name: 'Paracas Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'museo-larco-visit',
    name: 'Museo Larco Cultural Visit',
    nameEs: 'Visita Cultural al Museo Larco',
    type: 'educational',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Explore Peru\'s finest museum of pre-Columbian art housed in an 18th-century mansion. Discover gold treasures, intricate textiles, and 5,000 years of ancient civilizations followed by dinner in the beautiful garden restaurant.',
    descriptionEs: 'Explora el mejor museo de arte precolombino del Perú alojado en una mansión del siglo XVIII. Descubre tesoros de oro, textiles intrincados y 5,000 años de civilizaciones antiguas seguido de cena en el hermoso restaurante del jardín.',
    whatToExpect: 'Enter through beautiful colonial gardens into a world of ancient Peruvian civilizations. Chronologically organized galleries trace cultures from Chavín to Inca. Marvel at gold ceremonial objects, intricate Moche portrait pottery, and elaborate textiles. The famous open storage area reveals 45,000 catalogued pieces. Kids love finding animal motifs and expressive faces in the ceramics. Finish with dinner in the magical garden surrounded by flowering plants.',
    whatToExpectEs: 'Entra a través de hermosos jardines coloniales a un mundo de antiguas civilizaciones peruanas. Galerías organizadas cronológicamente trazan culturas desde Chavín hasta Inca. Maravíllate con objetos ceremoniales de oro, intrincadas cerámicas retrato Moche y elaborados textiles. El famoso área de almacenamiento abierto revela 45,000 piezas catalogadas. A los niños les encanta encontrar motivos de animales y caras expresivas en las cerámicas. Termina con cena en el mágico jardín rodeado de plantas con flores.',
    highlights: [
      '5,000 years of Peruvian history',
      'Gold treasures and textiles',
      'Moche portrait ceramics',
      'Beautiful garden setting',
      'Excellent on-site restaurant'
    ],
    highlightsEs: [
      '5,000 años de historia peruana',
      'Tesoros de oro y textiles',
      'Cerámicas retrato Moche',
      'Hermoso entorno de jardín',
      'Excelente restaurante en sitio'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours (museum), +1-2 hours for dinner',
    durationEs: '2-3 horas (museo), +1-2 horas para cena',
    difficulty: 'easy',
    priceRange: '35 soles museum entry, dinner extra',
    priceRangeEs: '35 soles entrada al museo, cena aparte',
    bestTime: 'Year-round, evening visits magical',
    bestTimeEs: 'Todo el año, visitas nocturnas mágicas',
    includes: [
      'Museum entrance',
      'Audio guide available',
      'Access to all galleries',
      'Open storage viewing',
      'Garden access'
    ],
    includesEs: [
      'Entrada al museo',
      'Audioguía disponible',
      'Acceso a todas las galerías',
      'Vista del almacenamiento abierto',
      'Acceso al jardín'
    ],
    tips: [
      'Book dinner reservation in advance',
      'Audio guide highly recommended',
      'Allow 2-3 hours minimum',
      'Erotic gallery can be skipped with kids',
      'Evening garden is magical',
      'Gift shop has quality replicas'
    ],
    tipsEs: [
      'Reserva cena con anticipación',
      'Audioguía altamente recomendada',
      'Dedica mínimo 2-3 horas',
      'Galería erótica se puede omitir con niños',
      'Jardín nocturno es mágico',
      'Tienda tiene réplicas de calidad'
    ],
    safetyNotes: [
      'Wheelchair accessible',
      'Easy walking throughout',
      'Air conditioned galleries',
      'Secure bag storage available',
      'Safe neighborhood'
    ],
    safetyNotesEs: [
      'Accesible para sillas de ruedas',
      'Caminata fácil en todo el lugar',
      'Galerías con aire acondicionado',
      'Almacenamiento seguro de bolsas disponible',
      'Vecindario seguro'
    ],
    relatedActivities: ['huaca-pucllana-night-tour', 'lima-food-tour', 'miraflores-walking-tour'],
    providers: [
      { name: 'Museo Larco Direct', familyFriendly: true },
      { name: 'Lima Cultural Tours', familyFriendly: true },
      { name: 'Peru Hop', familyFriendly: true }
    ]
  },
  {
    slug: 'trujillo-archaeological-tour',
    name: 'Trujillo Archaeological Circuit',
    nameEs: 'Circuito Arqueológico de Trujillo',
    type: 'cultural',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'Discover the Moche and Chimú civilizations at Chan Chan, the world\'s largest adobe city, and the impressive Huacas del Sol y la Luna with their vivid murals. Northern Peru\'s archaeological treasures rival those of Cusco.',
    descriptionEs: 'Descubre las civilizaciones Moche y Chimú en Chan Chan, la ciudad de adobe más grande del mundo, y las impresionantes Huacas del Sol y la Luna con sus vívidos murales. Los tesoros arqueológicos del norte del Perú rivalizan con los de Cusco.',
    whatToExpect: 'Begin at Chan Chan, walking through the Nik An palace complex with its intricate geometric friezes depicting sea life and mythical figures. Continue to the Huaca de la Luna where vibrant multicolored murals of the Moche god Ai Apaec survive on temple walls. Learn about human sacrifice rituals and sophisticated engineering. End in charming Huanchaco village for fresh ceviche watching traditional reed fishing boats.',
    whatToExpectEs: 'Comienza en Chan Chan, caminando por el complejo de palacio Nik An con sus intrincados frisos geométricos que representan vida marina y figuras míticas. Continúa a la Huaca de la Luna donde vibrantes murales multicolores del dios Moche Ai Apaec sobreviven en las paredes del templo. Aprende sobre rituales de sacrificio humano e ingeniería sofisticada. Termina en el encantador pueblo de Huanchaco con ceviche fresco observando tradicionales botes de pesca de totora.',
    highlights: [
      'Chan Chan UNESCO site',
      'Huaca de la Luna murals',
      'Two ancient civilizations',
      'Huanchaco beach village',
      'Traditional reed boats'
    ],
    highlightsEs: [
      'Sitio UNESCO Chan Chan',
      'Murales de Huaca de la Luna',
      'Dos civilizaciones antiguas',
      'Pueblo de playa Huanchaco',
      'Tradicionales botes de totora'
    ],
    familyRating: 4,
    minAge: 5,
    duration: 'Full day (6-8 hours)',
    durationEs: 'Día completo (6-8 horas)',
    difficulty: 'easy',
    priceRange: '$50-80 per person',
    priceRangeEs: '$50-80 por persona',
    bestTime: 'Year-round, December-April warmest',
    bestTimeEs: 'Todo el año, Diciembre-Abril más cálido',
    includes: [
      'Private transportation',
      'Professional guide',
      'Chan Chan entrance',
      'Huaca de la Luna entrance',
      'Site museum visits',
      'Huanchaco beach time'
    ],
    includesEs: [
      'Transporte privado',
      'Guía profesional',
      'Entrada a Chan Chan',
      'Entrada a Huaca de la Luna',
      'Visitas a museos del sitio',
      'Tiempo en playa Huanchaco'
    ],
    tips: [
      'Morning visits avoid heat',
      'Bring sun protection - little shade',
      'Hire guide for full understanding',
      'Try ceviche in Huanchaco',
      'Less crowded than southern sites',
      'Great photography opportunities'
    ],
    tipsEs: [
      'Visitas matutinas evitan el calor',
      'Lleva protección solar - poca sombra',
      'Contrata guía para entendimiento completo',
      'Prueba ceviche en Huanchaco',
      'Menos concurrido que sitios del sur',
      'Grandes oportunidades de fotografía'
    ],
    safetyNotes: [
      'Sun exposure intense - protect skin',
      'Easy walking on flat terrain',
      'Bring plenty of water',
      'Watch for uneven surfaces',
      'Stay on marked paths'
    ],
    safetyNotesEs: [
      'Exposición al sol intensa - protege la piel',
      'Caminata fácil en terreno plano',
      'Lleva suficiente agua',
      'Cuidado con superficies irregulares',
      'Permanece en senderos marcados'
    ],
    relatedActivities: ['sipan-lord-tour', 'tucume-pyramids', 'chiclayo-museums'],
    providers: [
      { name: 'Trujillo Tours', familyFriendly: true },
      { name: 'Chan Chan Tours', familyFriendly: true },
      { name: 'Moche Route', familyFriendly: true }
    ]
  },
  {
    slug: 'cusco-archaeological-circuit',
    name: 'Cusco Archaeological Circuit',
    nameEs: 'Circuito Arqueológico de Cusco',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore four impressive Inca sites surrounding Cusco on this half-day tour: Sacsayhuaman\'s massive fortress walls, Qenqo\'s mysterious ceremonial caves, Puca Pucara\'s red fortress, and Tambomachay\'s flowing ancient fountains. This circuit showcases the engineering brilliance of the Inca Empire while providing stunning panoramic views of Cusco and the surrounding valleys. Perfect for families as an introduction to Inca culture before visiting Machu Picchu.',
    descriptionEs: 'Explora cuatro impresionantes sitios Incas que rodean Cusco en este tour de medio día: las masivas murallas de la fortaleza de Sacsayhuaman, las misteriosas cuevas ceremoniales de Qenqo, la fortaleza roja de Puca Pucara y las antiguas fuentes fluyendo de Tambomachay. Este circuito muestra la brillantez de ingeniería del Imperio Inca mientras proporciona impresionantes vistas panorámicas de Cusco y los valles circundantes. Perfecto para familias como introducción a la cultura Inca antes de visitar Machu Picchu.',
    whatToExpect: 'Hotel pickup in comfortable transport with professional bilingual guide explaining Inca history. Visit four archaeological sites in one tour: Sacsayhuaman, Qenqo, Puca Pucara, and Tambomachay. Approximately 4-5 hours including transport with return to hotel or Cusco main plaza.',
    whatToExpectEs: 'Recojo del hotel en transporte cómodo con guía profesional bilingüe explicando la historia Inca. Visita cuatro sitios arqueológicos en un tour: Sacsayhuaman, Qenqo, Puca Pucara y Tambomachay. Aproximadamente 4-5 horas incluyendo transporte con retorno al hotel o plaza principal de Cusco.',
    highlights: [
      'Sacsayhuaman\'s colossal zigzag fortress walls',
      'Underground chambers and altars at Qenqo',
      'Ancient water fountains still flowing at Tambomachay',
      'Panoramic views of Cusco from multiple viewpoints',
      'Understanding Inca engineering and cosmology'
    ],
    highlightsEs: [
      'Las colosales murallas en zigzag de la fortaleza de Sacsayhuaman',
      'Cámaras subterráneas y altares en Qenqo',
      'Antiguas fuentes de agua aún fluyendo en Tambomachay',
      'Vistas panorámicas de Cusco desde múltiples miradores',
      'Comprender la ingeniería y cosmología Inca'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'moderate',
    priceRange: '$35-60 USD per person',
    priceRangeEs: '$35-60 USD por persona',
    bestTime: 'Morning tours (8-9am start) offer cooler temperatures and fewer crowds',
    bestTimeEs: 'Tours matutinos (inicio 8-9am) ofrecen temperaturas más frescas y menos multitudes',
    includes: [
      'Hotel pickup and drop-off',
      'Professional English/Spanish guide',
      'Private transportation',
      'Entrance fees NOT included (Boleto Turístico required)'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Guía profesional inglés/español',
      'Transporte privado',
      'Entradas NO incluidas (se requiere Boleto Turístico)'
    ],
    tips: [
      'Buy the Boleto Turístico in advance (valid 10 days)',
      'Wear comfortable walking shoes',
      'Bring layers - weather changes quickly at altitude',
      'Allow 2-3 days in Cusco to acclimatize before this tour',
      'Pack water, sunscreen, and snacks'
    ],
    tipsEs: [
      'Compra el Boleto Turístico con anticipación (válido 10 días)',
      'Usa zapatos cómodos para caminar',
      'Trae capas - el clima cambia rápido en altura',
      'Permite 2-3 días en Cusco para aclimatarte antes del tour',
      'Lleva agua, protector solar y bocadillos'
    ],
    safetyNotes: [
      'Altitude ranges from 3,400-3,700m - acclimatize first',
      'Uneven stone paths require sturdy footwear',
      'Stay with your group at all times',
      'Keep children close near cliff edges',
      'Carry altitude sickness medication if needed'
    ],
    safetyNotesEs: [
      'La altitud varía de 3,400-3,700m - aclimátate primero',
      'Los caminos de piedra irregulares requieren calzado resistente',
      'Permanece con tu grupo en todo momento',
      'Mantén a los niños cerca de los bordes de acantilados',
      'Lleva medicación para mal de altura si es necesario'
    ],
    relatedActivities: ['sacred-valley-tour', 'machu-picchu-tour', 'cusco-walking-tour'],
    providers: [
      { name: 'Cusco Native Tours', familyFriendly: true },
      { name: 'Inca Trail Expeditions', familyFriendly: true },
      { name: 'Andean Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'llanganuco-lakes-tour',
    name: 'Llanganuco Lakes & Huascarán Day Tour',
    nameEs: 'Tour Lagunas de Llanganuco y Huascarán',
    type: 'nature',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    description: 'Journey into the heart of Huascarán National Park to discover the breathtaking Llanganuco Lakes, twin turquoise jewels set beneath Peru\'s highest mountain. This full-day adventure combines stunning mountain scenery, easy lakeside walks, optional boat rides, and visits to memorial sites from the 1970 earthquake. Children are captivated by the glacier-fed lakes\' vibrant colors and the ancient queñual forests that line the shores.',
    descriptionEs: 'Viaja al corazón del Parque Nacional Huascarán para descubrir las impresionantes Lagunas de Llanganuco, joyas turquesas gemelas bajo la montaña más alta del Perú. Esta aventura de día completo combina impresionantes paisajes de montaña, caminatas fáciles junto al lago, paseos opcionales en bote y visitas a sitios conmemorativos del terremoto de 1970. Los niños quedan cautivados por los vibrantes colores de los lagos alimentados por glaciares y los antiguos bosques de queñual que bordean las orillas.',
    whatToExpect: 'Early morning hotel pickup from Huaraz followed by a scenic drive through Callejón de Huaylas. Stop at Yungay earthquake memorial before spending time at both Llanganuco lakes with an optional rowboat ride on Lake Chinancocha. Return to Huaraz by late afternoon.',
    whatToExpectEs: 'Recojo temprano del hotel desde Huaraz seguido de un viaje escénico por el Callejón de Huaylas. Parada en el memorial del terremoto de Yungay antes de pasar tiempo en ambas lagunas de Llanganuco con paseo opcional en bote de remos en el Lago Chinancocha. Retorno a Huaraz al final de la tarde.',
    highlights: [
      'Turquoise glacial lakes at 3,850m altitude',
      'Views of Peru\'s highest peak, Mount Huascarán (6,768m)',
      'Rowboat rides on mirror-like lake waters',
      'Endemic queñual forests and Andean wildlife',
      'Yungay memorial - important historical site'
    ],
    highlightsEs: [
      'Lagos glaciares turquesas a 3,850m de altitud',
      'Vistas del pico más alto del Perú, Monte Huascarán (6,768m)',
      'Paseos en bote de remos en aguas cristalinas',
      'Bosques endémicos de queñual y vida silvestre andina',
      'Memorial de Yungay - sitio histórico importante'
    ],
    familyRating: 5,
    minAge: 6,
    duration: 'Full day (8-9 hours)',
    durationEs: 'Día completo (8-9 horas)',
    difficulty: 'moderate',
    priceRange: '$45-70 USD per person',
    priceRangeEs: '$45-70 USD por persona',
    bestTime: 'Dry season (May-September) offers the clearest mountain views',
    bestTimeEs: 'La temporada seca (mayo-septiembre) ofrece las vistas más claras de las montañas',
    includes: [
      'Hotel pickup and drop-off in Huaraz',
      'Transportation in comfortable vehicle',
      'Professional bilingual guide',
      'Park entrance fees',
      'Boxed lunch (on some tours)'
    ],
    includesEs: [
      'Recojo y retorno al hotel en Huaraz',
      'Transporte en vehículo cómodo',
      'Guía profesional bilingüe',
      'Entradas al parque',
      'Almuerzo empacado (en algunos tours)'
    ],
    tips: [
      'Spend at least 2 days acclimatizing in Huaraz first',
      'Bring very warm layers - it gets cold at the lakes',
      'Pack your own snacks and extra water',
      'The rowboat ride is worth the extra 15 soles',
      'Waterproof jacket recommended even in dry season'
    ],
    tipsEs: [
      'Pasa al menos 2 días aclimatándote en Huaraz primero',
      'Trae capas muy abrigadas - hace frío en los lagos',
      'Lleva tus propios bocadillos y agua extra',
      'El paseo en bote vale los 15 soles extra',
      'Se recomienda chaqueta impermeable incluso en temporada seca'
    ],
    safetyNotes: [
      'High altitude (3,850m) - acclimatization essential',
      'Cold temperatures year-round - dress warmly',
      'Stay on marked paths near the lakes',
      'Supervise children near the water',
      'Bring altitude sickness medication'
    ],
    safetyNotesEs: [
      'Gran altitud (3,850m) - aclimatación esencial',
      'Temperaturas frías todo el año - vístete abrigado',
      'Permanece en senderos marcados cerca de los lagos',
      'Supervisa a los niños cerca del agua',
      'Lleva medicación para mal de altura'
    ],
    relatedActivities: ['pastoruri-glacier-tour', 'chavin-tour', 'laguna-69-trek'],
    providers: [
      { name: 'Huaraz Expeditions', familyFriendly: true },
      { name: 'Mountain Adventures', familyFriendly: true },
      { name: 'Cordillera Blanca Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'sipan-lord-tour',
    name: 'Lord of Sipán Discovery Tour',
    nameEs: 'Tour Descubrimiento del Señor de Sipán',
    type: 'cultural',
    city: 'chiclayo',
    region: 'Lambayeque Region',
    regionEs: 'Región Lambayeque',
    description: 'Uncover the treasures of ancient Peru\'s richest tomb on this full-day tour combining the Royal Tombs of Sipán Museum with the actual Huaca Rajada archaeological site where the Lord was discovered. See over 2,000 golden artifacts in the dramatically lit museum, then walk through the excavated pyramids where archaeologists made their groundbreaking discovery in 1987. This tour brings to life the powerful Moche civilization that ruled Peru\'s north coast 1,700 years ago.',
    descriptionEs: 'Descubre los tesoros de la tumba más rica del antiguo Perú en este tour de día completo que combina el Museo Tumbas Reales de Sipán con el sitio arqueológico de Huaca Rajada donde el Señor fue descubierto. Ve más de 2,000 artefactos dorados en el museo dramáticamente iluminado, luego camina por las pirámides excavadas donde los arqueólogos hicieron su descubrimiento revolucionario en 1987. Este tour da vida a la poderosa civilización Moche que gobernó la costa norte del Perú hace 1,700 años.',
    whatToExpect: 'Morning hotel pickup in Chiclayo followed by visit to the Royal Tombs of Sipán Museum in Lambayeque. Lunch at local restaurant before afternoon visit to Huaca Rajada excavation site where the Lord was discovered. Return to Chiclayo by late afternoon.',
    whatToExpectEs: 'Recojo matutino del hotel en Chiclayo seguido de visita al Museo Tumbas Reales de Sipán en Lambayeque. Almuerzo en restaurante local antes de visita por la tarde al sitio de excavación Huaca Rajada donde el Señor fue descubierto. Retorno a Chiclayo al final de la tarde.',
    highlights: [
      'World-famous Royal Tombs of Sipán Museum',
      'Lord of Sipán\'s golden burial regalia',
      'Actual tomb discovery site at Huaca Rajada',
      'Moche warrior priest artifacts',
      'Understanding ancient Peruvian metallurgy'
    ],
    highlightsEs: [
      'Famoso Museo Tumbas Reales de Sipán de fama mundial',
      'Regalia funeraria dorada del Señor de Sipán',
      'Sitio real del descubrimiento de la tumba en Huaca Rajada',
      'Artefactos del sacerdote guerrero Moche',
      'Comprender la antigua metalurgia peruana'
    ],
    familyRating: 5,
    minAge: 5,
    duration: 'Full day (7-8 hours)',
    durationEs: 'Día completo (7-8 horas)',
    difficulty: 'easy',
    priceRange: '$50-80 USD per person',
    priceRangeEs: '$50-80 USD por persona',
    bestTime: 'Year-round destination. Museum is air-conditioned for hot days.',
    bestTimeEs: 'Destino de todo el año. El museo tiene aire acondicionado para días calurosos.',
    includes: [
      'Hotel pickup and drop-off',
      'Private transportation',
      'Professional English/Spanish guide',
      'Museum and site entrance fees',
      'Lunch (on most tours)'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte privado',
      'Guía profesional inglés/español',
      'Entradas al museo y sitio',
      'Almuerzo (en la mayoría de tours)'
    ],
    tips: [
      'No photography inside the museum - leave cameras behind',
      'The museum is kept dark - dramatic but takes adjustment',
      'Kids love the story of the tomb\'s discovery',
      'Visit the museum first while energy is high',
      'Bring sunscreen and hat for the outdoor site'
    ],
    tipsEs: [
      'No se permite fotografía dentro del museo - deja las cámaras',
      'El museo se mantiene oscuro - dramático pero requiere ajuste',
      'A los niños les encanta la historia del descubrimiento de la tumba',
      'Visita el museo primero mientras la energía está alta',
      'Trae protector solar y sombrero para el sitio al aire libre'
    ],
    safetyNotes: [
      'Low altitude coastal site - no acclimatization needed',
      'Hot climate - stay hydrated',
      'Wear comfortable shoes for the archaeological site',
      'Sun protection essential at Huaca Rajada',
      'Some uneven terrain at the pyramid site'
    ],
    safetyNotesEs: [
      'Sitio costero de baja altitud - no necesita aclimatación',
      'Clima caliente - mantente hidratado',
      'Usa zapatos cómodos para el sitio arqueológico',
      'Protección solar esencial en Huaca Rajada',
      'Algo de terreno irregular en el sitio de la pirámide'
    ],
    relatedActivities: ['tucume-pyramids', 'trujillo-archaeological-tour', 'chiclayo-museums'],
    providers: [
      { name: 'Moche Tours Chiclayo', familyFriendly: true },
      { name: 'Sipán Travel', familyFriendly: true },
      { name: 'Lambayeque Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'cajamarca-heritage-tour',
    name: 'Cajamarca Historical Heritage Tour',
    nameEs: 'Tour Patrimonio Histórico de Cajamarca',
    type: 'cultural',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    description: 'Explore the city where the Inca Empire fell on this comprehensive tour of Cajamarca\'s most significant sites. Visit El Cuarto del Rescate (Ransom Room) where Atahualpa was held captive, the colonial churches that arose after the conquest, the ancient Ventanillas de Otuzco necropolis, and the natural hot springs at Baños del Inca. This tour weaves together pre-Inca, Inca, and colonial history in one of Peru\'s most historically significant cities.',
    descriptionEs: 'Explora la ciudad donde cayó el Imperio Inca en este tour completo de los sitios más significativos de Cajamarca. Visita El Cuarto del Rescate donde Atahualpa fue mantenido cautivo, las iglesias coloniales que surgieron después de la conquista, la antigua necrópolis Ventanillas de Otuzco y las aguas termales naturales en Baños del Inca. Este tour entrelaza la historia pre-Inca, Inca y colonial en una de las ciudades históricamente más significativas del Perú.',
    whatToExpect: 'Walking tour of Cajamarca\'s historic center including Atahualpa\'s Ransom Room and colonial churches around the main plaza. Drive to Ventanillas de Otuzco necropolis to see the ancient burial niches, then relax at Baños del Inca hot springs before returning to hotel or city center.',
    whatToExpectEs: 'Tour a pie del centro histórico de Cajamarca incluyendo el Cuarto del Rescate de Atahualpa e iglesias coloniales alrededor de la plaza principal. Viaje a la necrópolis Ventanillas de Otuzco para ver los antiguos nichos funerarios, luego relajación en las aguas termales Baños del Inca antes de retornar al hotel o centro de la ciudad.',
    highlights: [
      'Atahualpa\'s Ransom Room - pivotal moment in history',
      'Stunning colonial architecture and churches',
      'Ancient pre-Inca burial niches at Ventanillas',
      'Natural hot springs used since Inca times',
      'Panoramic views of the Cajamarca valley'
    ],
    highlightsEs: [
      'El Cuarto del Rescate de Atahualpa - momento crucial en la historia',
      'Impresionante arquitectura colonial e iglesias',
      'Antiguos nichos de entierro pre-Incas en Ventanillas',
      'Aguas termales naturales usadas desde tiempos Incas',
      'Vistas panorámicas del valle de Cajamarca'
    ],
    familyRating: 4,
    minAge: 5,
    duration: 'Full day (7-8 hours)',
    durationEs: 'Día completo (7-8 horas)',
    difficulty: 'easy',
    priceRange: '$40-65 USD per person',
    priceRangeEs: '$40-65 USD por persona',
    bestTime: 'Dry season (May-October) for best weather. Mornings for hot springs before crowds.',
    bestTimeEs: 'Temporada seca (mayo-octubre) para mejor clima. Mañanas para aguas termales antes de las multitudes.',
    includes: [
      'Professional bilingual guide',
      'Private transportation to outer sites',
      'Entrance fees to all sites',
      'Hot springs admission',
      'Lunch at local restaurant (most tours)'
    ],
    includesEs: [
      'Guía profesional bilingüe',
      'Transporte privado a sitios externos',
      'Entradas a todos los sitios',
      'Admisión a aguas termales',
      'Almuerzo en restaurante local (mayoría de tours)'
    ],
    tips: [
      'Bring swimsuit and towel for the hot springs',
      'Wear comfortable walking shoes for cobblestones',
      'The Ransom Room story captivates children',
      'Try local queso mantecoso (butter cheese)',
      'Cajamarca is at moderate altitude (2,750m) - take it easy'
    ],
    tipsEs: [
      'Trae traje de baño y toalla para las aguas termales',
      'Usa zapatos cómodos para caminar en empedrado',
      'La historia del Cuarto del Rescate cautiva a los niños',
      'Prueba el queso mantecoso local',
      'Cajamarca está a altitud moderada (2,750m) - tómalo con calma'
    ],
    safetyNotes: [
      'Moderate altitude (2,750m) - lighter than Cusco',
      'Cobblestone streets - watch your step',
      'Hot springs can be very hot - test before entering',
      'Keep valuables secure in busy areas',
      'Sun protection needed at outdoor sites'
    ],
    safetyNotesEs: [
      'Altitud moderada (2,750m) - más ligera que Cusco',
      'Calles empedradas - cuida tus pasos',
      'Las aguas termales pueden estar muy calientes - prueba antes de entrar',
      'Mantén objetos de valor seguros en áreas concurridas',
      'Protección solar necesaria en sitios al aire libre'
    ],
    relatedActivities: ['cumbemayo-tour', 'kuntur-wasi-tour', 'cajamarca-countryside'],
    providers: [
      { name: 'Cajamarca Tours', familyFriendly: true },
      { name: 'Imperio Tours', familyFriendly: true },
      { name: 'Cumbe Mayo Travel', familyFriendly: true }
    ]
  },
  {
    slug: 'huacas-moche-tour',
    name: 'Huacas del Sol y la Luna Tour',
    nameEs: 'Tour Huacas del Sol y la Luna',
    type: 'cultural',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'Discover the spectacular Moche temples on this half-day tour to Huaca de la Luna, where remarkably preserved polychrome murals depict the fierce deity Ai Apaec. Explore five superimposed temples built over 600 years, see views of the massive Huaca del Sol pyramid, and visit the excellent on-site museum. This tour brings to life one of Peru\'s most sophisticated pre-Columbian civilizations through their stunning religious artwork and architecture.',
    descriptionEs: 'Descubre los espectaculares templos Moche en este tour de medio día a la Huaca de la Luna, donde murales policromados notablemente preservados representan al feroz dios Ai Apaec. Explora cinco templos superpuestos construidos durante 600 años, ve vistas de la masiva pirámide Huaca del Sol y visita el excelente museo del sitio. Este tour da vida a una de las civilizaciones precolombinas más sofisticadas del Perú a través de su impresionante arte religioso y arquitectura.',
    whatToExpect: 'Hotel pickup in Trujillo followed by a short drive to the archaeological complex. Mandatory guided tour of Huaca de la Luna reveals colorful murals and explains Moche rituals. Visit the modern museum with artifacts and reconstructions. View the massive Huaca del Sol from a distance. Return to hotel or continue to Huanchaco Beach.',
    whatToExpectEs: 'Recojo del hotel en Trujillo seguido de un corto viaje al complejo arqueológico. Tour guiado obligatorio de la Huaca de la Luna revela murales coloridos y explica los rituales Moche. Visita el museo moderno con artefactos y reconstrucciones. Ve la masiva Huaca del Sol desde la distancia. Retorno al hotel o continúa a la Playa Huanchaco.',
    highlights: [
      'Vivid 1,500-year-old polychrome murals',
      'Expert guide explaining Moche civilization',
      'Five superimposed temple structures',
      'Excellent on-site museum',
      'Views of Huaca del Sol pyramid'
    ],
    highlightsEs: [
      'Vívidos murales policromados de 1,500 años',
      'Guía experto explicando la civilización Moche',
      'Cinco estructuras de templo superpuestas',
      'Excelente museo en el sitio',
      'Vistas de la pirámide Huaca del Sol'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$25-45 USD per person',
    priceRangeEs: '$25-45 USD por persona',
    bestTime: 'Morning tours avoid the afternoon heat. Year-round destination.',
    bestTimeEs: 'Tours matutinos evitan el calor de la tarde. Destino de todo el año.',
    includes: [
      'Hotel pickup and drop-off',
      'Transportation',
      'Professional bilingual guide',
      'Site and museum entrance fees',
      'Mandatory guided tour'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte',
      'Guía profesional bilingüe',
      'Entradas al sitio y museo',
      'Tour guiado obligatorio'
    ],
    tips: [
      'Photography allowed without flash',
      'Bring sunscreen and a hat - limited shade',
      'The murals captivate children with their colors',
      'Combine with Chan Chan for a full day of archaeology',
      'End at Huanchaco Beach for seafood lunch'
    ],
    tipsEs: [
      'Fotografía permitida sin flash',
      'Trae protector solar y sombrero - sombra limitada',
      'Los murales cautivan a los niños con sus colores',
      'Combina con Chan Chan para un día completo de arqueología',
      'Termina en Playa Huanchaco para almuerzo de mariscos'
    ],
    safetyNotes: [
      'Low altitude coastal site - no acclimatization needed',
      'Hot climate - stay hydrated',
      'Wear comfortable walking shoes',
      'Sun protection essential',
      'Stay with your guide on marked paths'
    ],
    safetyNotesEs: [
      'Sitio costero de baja altitud - no necesita aclimatación',
      'Clima caliente - mantente hidratado',
      'Usa zapatos cómodos para caminar',
      'Protección solar esencial',
      'Permanece con tu guía en senderos marcados'
    ],
    relatedActivities: ['trujillo-archaeological-tour', 'huanchaco-beach-day', 'sipan-lord-tour'],
    providers: [
      { name: 'Trujillo Tours', familyFriendly: true },
      { name: 'Moche Tours', familyFriendly: true },
      { name: 'Colonial Tours Trujillo', familyFriendly: true }
    ]
  },
  {
    slug: 'south-valley-tour',
    name: 'Cusco South Valley Tour',
    nameEs: 'Tour Valle Sur de Cusco',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the lesser-known treasures south of Cusco on this half-day tour featuring Tipón\'s remarkable Inca water gardens, the pre-Inca Wari city of Pikillacta, and the stunning Andahuaylillas church known as the "Sistine Chapel of the Americas." This tour offers a refreshing alternative to the crowded Sacred Valley, with fewer tourists and equally impressive sites spanning Wari, Inca, and colonial periods.',
    descriptionEs: 'Explora los tesoros menos conocidos al sur de Cusco en este tour de medio día que presenta los notables jardines de agua Inca de Tipón, la ciudad Wari pre-Inca de Pikillacta y la impresionante iglesia de Andahuaylillas conocida como la "Capilla Sixtina de las Américas". Este tour ofrece una alternativa refrescante al concurrido Valle Sagrado, con menos turistas y sitios igualmente impresionantes que abarcan los períodos Wari, Inca y colonial.',
    whatToExpect: 'Morning hotel pickup followed by drive to Tipón to explore terraced Inca water gardens still functioning after 500 years. Continue to Pikillacta, the vast pre-Inca Wari city with over 700 buildings. End at Andahuaylillas to admire the ornate baroque church interior. Return to Cusco by early afternoon.',
    whatToExpectEs: 'Recojo matutino del hotel seguido de viaje a Tipón para explorar jardines de agua Inca en terrazas que aún funcionan después de 500 años. Continúa a Pikillacta, la vasta ciudad Wari pre-Inca con más de 700 edificios. Termina en Andahuaylillas para admirar el ornamentado interior barroco de la iglesia. Retorno a Cusco a primera hora de la tarde.',
    highlights: [
      'Tipón\'s functioning Inca water channels',
      'Pre-Inca Wari architecture at Pikillacta',
      'Andahuaylillas "Sistine Chapel of the Americas"',
      'Three distinct historical periods in one tour',
      'Fewer crowds than Sacred Valley'
    ],
    highlightsEs: [
      'Canales de agua Inca funcionando en Tipón',
      'Arquitectura Wari pre-Inca en Pikillacta',
      'Andahuaylillas "Capilla Sixtina de las Américas"',
      'Tres períodos históricos distintos en un tour',
      'Menos multitudes que el Valle Sagrado'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$35-55 USD per person',
    priceRangeEs: '$35-55 USD por persona',
    bestTime: 'Morning tours recommended. Dry season (May-October) for best weather.',
    bestTimeEs: 'Se recomiendan tours matutinos. Temporada seca (mayo-octubre) para mejor clima.',
    includes: [
      'Hotel pickup and drop-off',
      'Private transportation',
      'Professional bilingual guide',
      'Entrance fees NOT included (Boleto Turístico + church fee)'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte privado',
      'Guía profesional bilingüe',
      'Entradas NO incluidas (Boleto Turístico + tarifa iglesia)'
    ],
    tips: [
      'Buy the Boleto Turístico for Tipón and Pikillacta',
      'Church fee (10 soles) paid separately at door',
      'Great alternative when Sacred Valley feels too crowded',
      'Explains pre-Inca history often missed by visitors',
      'Dress modestly for the church visit'
    ],
    tipsEs: [
      'Compra el Boleto Turístico para Tipón y Pikillacta',
      'Tarifa de iglesia (10 soles) se paga separadamente en la puerta',
      'Gran alternativa cuando el Valle Sagrado se siente muy concurrido',
      'Explica historia pre-Inca a menudo perdida por visitantes',
      'Vístete modestamente para la visita a la iglesia'
    ],
    safetyNotes: [
      'Lower altitude than Cusco (3,100-3,400m)',
      'Easy walking on mostly flat terrain',
      'Bring layers - temperatures vary',
      'Stay on marked paths at archaeological sites',
      'Church photography may be restricted'
    ],
    safetyNotesEs: [
      'Altitud más baja que Cusco (3,100-3,400m)',
      'Caminar fácil en terreno mayormente plano',
      'Trae capas - las temperaturas varían',
      'Permanece en senderos marcados en sitios arqueológicos',
      'La fotografía en la iglesia puede estar restringida'
    ],
    relatedActivities: ['cusco-archaeological-circuit', 'sacred-valley-tour', 'baroque-route-tour'],
    providers: [
      { name: 'Cusco Native Tours', familyFriendly: true },
      { name: 'South Valley Expeditions', familyFriendly: true },
      { name: 'Andean Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'laguna-69-trek',
    name: 'Laguna 69 Day Trek',
    nameEs: 'Trekking Laguna 69',
    type: 'adventure',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    description: 'Challenge yourself with one of Peru\'s most rewarding day hikes to the stunning turquoise waters of Laguna 69. This demanding 14km round-trip trek takes you through Huascarán National Park, climbing from 3,900m to 4,600m beneath the towering peaks of Chacraraju and Huascarán. The reward is one of the most photogenic alpine lakes in South America, its intense blue-green color caused by glacial minerals. This adventure is for fit, acclimatized families with older children.',
    descriptionEs: 'Desafíate con una de las caminatas de día más gratificantes del Perú hacia las impresionantes aguas turquesas de Laguna 69. Este exigente trekking de 14km ida y vuelta te lleva a través del Parque Nacional Huascarán, subiendo de 3,900m a 4,600m bajo los imponentes picos de Chacraraju y Huascarán. La recompensa es uno de los lagos alpinos más fotogénicos de Sudamérica, su intenso color azul-verde causado por minerales glaciares. Esta aventura es para familias en forma y aclimatadas con niños mayores.',
    whatToExpect: 'Very early departure from Huaraz (5am) for 3-hour drive through Llanganuco valley. Begin hiking at Cebollapampa (3,900m) through queñual forests, alpine meadows, and rocky moraines. Steep final ascent rewards with breathtaking lake views. Time for photos and snacks at the lake before descending. Return to Huaraz by late afternoon.',
    whatToExpectEs: 'Salida muy temprana desde Huaraz (5am) para viaje de 3 horas por el valle de Llanganuco. Comienza la caminata en Cebollapampa (3,900m) a través de bosques de queñual, praderas alpinas y morrenas rocosas. La empinada ascensión final recompensa con impresionantes vistas del lago. Tiempo para fotos y bocadillos en el lago antes de descender. Retorno a Huaraz al final de la tarde.',
    highlights: [
      'Spectacular turquoise glacial lake',
      'Views of Chacraraju (6,112m) and Huascarán',
      'Diverse high-altitude ecosystems',
      'Challenging but achievable adventure',
      'One of Peru\'s most iconic treks'
    ],
    highlightsEs: [
      'Espectacular lago glaciar turquesa',
      'Vistas de Chacraraju (6,112m) y Huascarán',
      'Diversos ecosistemas de gran altitud',
      'Aventura desafiante pero alcanzable',
      'Uno de los trekkings más icónicos del Perú'
    ],
    familyRating: 4,
    minAge: 10,
    duration: 'Full day (10-12 hours total)',
    durationEs: 'Día completo (10-12 horas total)',
    difficulty: 'challenging',
    priceRange: '$35-60 USD per person',
    priceRangeEs: '$35-60 USD por persona',
    bestTime: 'Dry season only (May-September). Clear mornings essential for views.',
    bestTimeEs: 'Solo temporada seca (mayo-septiembre). Mañanas despejadas esenciales para vistas.',
    includes: [
      'Hotel pickup and drop-off',
      'Transportation to trailhead',
      'Professional guide',
      'Park entrance fees',
      'Breakfast and lunch (on most tours)'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte al inicio del sendero',
      'Guía profesional',
      'Entradas al parque',
      'Desayuno y almuerzo (en la mayoría de tours)'
    ],
    tips: [
      'Acclimatize in Huaraz for minimum 3 days before attempting',
      'Bring warm layers, rain gear, sunscreen, and 2+ liters of water',
      'Trekking poles highly recommended',
      'Start early - afternoon clouds and weather common',
      'Not suitable for children under 10 or those not fully acclimatized'
    ],
    tipsEs: [
      'Aclimátate en Huaraz por mínimo 3 días antes de intentarlo',
      'Trae capas abrigadas, ropa de lluvia, protector solar y 2+ litros de agua',
      'Bastones de trekking muy recomendados',
      'Comienza temprano - nubes y clima de tarde común',
      'No apto para niños menores de 10 años o quienes no estén completamente aclimatados'
    ],
    safetyNotes: [
      'Extreme altitude (4,600m) - acclimatization critical',
      'Weather changes rapidly - be prepared',
      'Steep sections require careful footing',
      'No facilities at the lake - carry everything needed',
      'Emergency evacuation is difficult - assess fitness honestly'
    ],
    safetyNotesEs: [
      'Altitud extrema (4,600m) - aclimatación crítica',
      'El clima cambia rápidamente - estate preparado',
      'Secciones empinadas requieren pasos cuidadosos',
      'Sin instalaciones en el lago - carga todo lo necesario',
      'La evacuación de emergencia es difícil - evalúa tu estado físico honestamente'
    ],
    relatedActivities: ['llanganuco-lakes-tour', 'chavin-tour', 'pastoruri-glacier-tour'],
    providers: [
      { name: 'Huaraz Expeditions', familyFriendly: true },
      { name: 'Cordillera Blanca Adventures', familyFriendly: true },
      { name: 'Mountain Kingdom Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'chavin-tour',
    name: 'Chavín de Huántar Archaeological Tour',
    nameEs: 'Tour Arqueológico Chavín de Huántar',
    type: 'cultural',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    description: 'Journey to one of Peru\'s most mysterious archaeological sites, the UNESCO World Heritage Site of Chavín de Huántar. This full-day tour takes you through stunning mountain scenery to explore underground galleries, see the famous Lanzón monolith in its original chamber, and discover intricate stone carvings from a civilization that predates the Incas by over 2,000 years. The flashlight exploration of dark passages creates an Indiana Jones-style adventure that captivates children and adults alike.',
    descriptionEs: 'Viaja a uno de los sitios arqueológicos más misteriosos del Perú, el Patrimonio de la Humanidad UNESCO de Chavín de Huántar. Este tour de día completo te lleva a través de impresionantes paisajes de montaña para explorar galerías subterráneas, ver el famoso monolito Lanzón en su cámara original y descubrir intrincados grabados en piedra de una civilización que precede a los Incas por más de 2,000 años. La exploración con linterna de pasajes oscuros crea una aventura estilo Indiana Jones que cautiva a niños y adultos por igual.',
    whatToExpect: 'Early morning departure from Huaraz for scenic 3-hour drive through Huascarán National Park, passing Querococha Lake and the Kawish tunnel. Explore Chavín\'s underground galleries with flashlights, see the Lanzón monolith, and visit the excellent museum. Lunch in Chavín village before return journey. Arrive back in Huaraz by late afternoon.',
    whatToExpectEs: 'Salida temprana desde Huaraz para viaje escénico de 3 horas a través del Parque Nacional Huascarán, pasando el Lago Querococha y el túnel Kawish. Explora las galerías subterráneas de Chavín con linternas, ve el monolito Lanzón y visita el excelente museo. Almuerzo en el pueblo de Chavín antes del viaje de regreso. Llegada a Huaraz al final de la tarde.',
    highlights: [
      'UNESCO World Heritage archaeological site',
      'Explore underground galleries with flashlights',
      'See the Lanzón monolith in original location',
      'Scenic drive through Huascarán National Park',
      'Pre-Inca history spanning 3,000 years'
    ],
    highlightsEs: [
      'Sitio arqueológico Patrimonio de la Humanidad UNESCO',
      'Explora galerías subterráneas con linternas',
      'Ve el monolito Lanzón en ubicación original',
      'Viaje escénico a través del Parque Nacional Huascarán',
      'Historia pre-Inca que abarca 3,000 años'
    ],
    familyRating: 5,
    minAge: 6,
    duration: 'Full day (9-10 hours)',
    durationEs: 'Día completo (9-10 horas)',
    difficulty: 'moderate',
    priceRange: '$40-65 USD per person',
    priceRangeEs: '$40-65 USD por persona',
    bestTime: 'Dry season (May-October) for best road conditions and views.',
    bestTimeEs: 'Temporada seca (mayo-octubre) para mejores condiciones de carretera y vistas.',
    includes: [
      'Hotel pickup and drop-off',
      'Transportation through scenic route',
      'Professional bilingual guide',
      'Site and museum entrance fees',
      'Lunch in Chavín (most tours)'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte por ruta escénica',
      'Guía profesional bilingüe',
      'Entradas al sitio y museo',
      'Almuerzo en Chavín (mayoría de tours)'
    ],
    tips: [
      'Bring your own flashlight for the tunnels',
      'Prepare children for dark, narrow passages',
      'Visit the museum first to understand what you\'ll see',
      'Lower altitude (3,177m) than Huaraz - easier breathing',
      'The scenic drive is half the experience'
    ],
    tipsEs: [
      'Trae tu propia linterna para los túneles',
      'Prepara a los niños para pasajes oscuros y estrechos',
      'Visita el museo primero para entender lo que verás',
      'Altitud más baja (3,177m) que Huaraz - respiración más fácil',
      'El viaje escénico es la mitad de la experiencia'
    ],
    safetyNotes: [
      'Tunnels can feel claustrophobic',
      'Watch your head in low passages',
      'Stay with your guide at all times',
      'Road has some steep sections',
      'Dress in layers for temperature changes'
    ],
    safetyNotesEs: [
      'Los túneles pueden sentirse claustrofóbicos',
      'Cuida tu cabeza en pasajes bajos',
      'Permanece con tu guía en todo momento',
      'La carretera tiene algunas secciones empinadas',
      'Vístete en capas para cambios de temperatura'
    ],
    relatedActivities: ['laguna-69-trek', 'llanganuco-lakes-tour', 'pastoruri-glacier-tour'],
    providers: [
      { name: 'Chavín Tours', familyFriendly: true },
      { name: 'Huaraz Expeditions', familyFriendly: true },
      { name: 'Andean Kingdom', familyFriendly: true }
    ]
  },
  {
    slug: 'moray-maras-tour',
    name: 'Moray & Maras Salt Mines Tour',
    nameEs: 'Tour Moray y Salineras de Maras',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover two of the Sacred Valley\'s most unique attractions on this half-day tour combining the enigmatic circular terraces of Moray with the spectacular Maras Salt Mines. At Moray, explore the Inca\'s agricultural laboratory where different microclimates allowed experimentation with crops. Then descend into the valley of over 3,000 white and pink salt ponds that have been harvested since pre-Inca times. This tour offers a fascinating contrast of ancient science and living tradition.',
    descriptionEs: 'Descubre dos de las atracciones más únicas del Valle Sagrado en este tour de medio día que combina las enigmáticas terrazas circulares de Moray con las espectaculares Salineras de Maras. En Moray, explora el laboratorio agrícola Inca donde diferentes microclimas permitían experimentación con cultivos. Luego desciende al valle de más de 3,000 pozas de sal blanca y rosa que han sido cosechadas desde tiempos pre-Incas. Este tour ofrece un fascinante contraste de ciencia antigua y tradición viva.',
    whatToExpect: 'Morning pickup from Cusco hotel followed by scenic drive through Chinchero area. First stop at Moray to explore the circular agricultural terraces and learn about Inca engineering. Continue to Maras Salt Mines for walking tour through the 3,000+ terraced ponds. Opportunity to buy artisanal pink salt. Return to Cusco by early afternoon.',
    whatToExpectEs: 'Recojo matutino del hotel en Cusco seguido de viaje escénico por el área de Chinchero. Primera parada en Moray para explorar las terrazas agrícolas circulares y aprender sobre ingeniería Inca. Continúa a las Salineras de Maras para tour a pie por las más de 3,000 pozas en terrazas. Oportunidad de comprar sal rosa artesanal. Retorno a Cusco a primera hora de la tarde.',
    highlights: [
      'Moray\'s circular Inca agricultural terraces',
      'Over 3,000 terraced salt evaporation ponds',
      'Learn about Inca agricultural science',
      'Buy artisanal pink salt directly',
      'Stunning Sacred Valley scenery'
    ],
    highlightsEs: [
      'Terrazas agrícolas circulares Incas de Moray',
      'Más de 3,000 pozas de evaporación de sal en terrazas',
      'Aprende sobre ciencia agrícola Inca',
      'Compra sal rosa artesanal directamente',
      'Impresionante paisaje del Valle Sagrado'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'moderate',
    priceRange: '$35-55 USD per person',
    priceRangeEs: '$35-55 USD por persona',
    bestTime: 'Dry season (May-October) for best road conditions and active salt production.',
    bestTimeEs: 'Temporada seca (mayo-octubre) para mejores condiciones de carretera y producción de sal activa.',
    includes: [
      'Hotel pickup and drop-off',
      'Private transportation',
      'Professional bilingual guide',
      'Moray entrance (Boleto Turístico required)',
      'Maras entrance fee'
    ],
    includesEs: [
      'Recojo y retorno al hotel',
      'Transporte privado',
      'Guía profesional bilingüe',
      'Entrada a Moray (se requiere Boleto Turístico)',
      'Tarifa de entrada a Maras'
    ],
    tips: [
      'Buy the Boleto Turístico in advance for Moray',
      'Wear sturdy shoes with grip for the salt mines',
      'Bring cash to buy salt from local families',
      'Morning departures have better light for photos',
      'Can combine with Chinchero for full-day tour'
    ],
    tipsEs: [
      'Compra el Boleto Turístico con anticipación para Moray',
      'Usa zapatos resistentes con agarre para las salineras',
      'Trae efectivo para comprar sal de familias locales',
      'Salidas matutinas tienen mejor luz para fotos',
      'Puede combinarse con Chinchero para tour de día completo'
    ],
    safetyNotes: [
      'Altitude at Moray reaches 3,500m',
      'Salt mine paths can be slippery',
      'Some steep sections at both sites',
      'Sun protection essential',
      'Watch children near salt pond edges'
    ],
    safetyNotesEs: [
      'La altitud en Moray alcanza 3,500m',
      'Los caminos de las salineras pueden ser resbaladizos',
      'Algunas secciones empinadas en ambos sitios',
      'Protección solar esencial',
      'Vigila a los niños cerca de los bordes de las pozas de sal'
    ],
    relatedActivities: ['sacred-valley-tour', 'chinchero-weaving', 'south-valley-tour'],
    providers: [
      { name: 'Sacred Valley Tours', familyFriendly: true },
      { name: 'Cusco Native Tours', familyFriendly: true },
      { name: 'Maras Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'chinchero-weaving-experience',
    name: 'Chinchero Weaving & Culture Experience',
    nameEs: 'Experiencia de Tejido y Cultura en Chinchero',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Immerse your family in living Andean culture with this hands-on weaving experience in the traditional village of Chinchero. Visit a local weaving cooperative where Quechua-speaking women demonstrate the entire textile process - from shearing alpacas to spinning yarn, creating natural dyes from plants and insects, and weaving intricate patterns on backstrap looms. Children can try their hand at weaving while learning about the symbolism hidden in traditional designs. The experience also includes exploring Inca ruins and the colonial church.',
    descriptionEs: 'Sumerge a tu familia en la cultura andina viva con esta experiencia práctica de tejido en el pueblo tradicional de Chinchero. Visita una cooperativa de tejido local donde mujeres quechuahablantes demuestran todo el proceso textil - desde esquilar alpacas hasta hilar lana, crear tintes naturales de plantas e insectos, y tejer patrones intrincados en telares de cintura. Los niños pueden probar a tejer mientras aprenden sobre el simbolismo oculto en los diseños tradicionales. La experiencia también incluye explorar ruinas Incas y la iglesia colonial.',
    whatToExpect: 'Arrival at Chinchero weaving cooperative where local women in traditional dress welcome you. Watch demonstrations of alpaca shearing, wool washing, natural dyeing using cochineal and plants, and backstrap loom weaving. Hands-on opportunity for children and adults to try weaving. Visit Chinchero\'s Inca ruins and colonial church. Browse and purchase authentic textiles directly from the weavers.',
    whatToExpectEs: 'Llegada a la cooperativa de tejido de Chinchero donde mujeres locales en vestimenta tradicional te dan la bienvenida. Observa demostraciones de esquila de alpaca, lavado de lana, teñido natural usando cochinilla y plantas, y tejido en telar de cintura. Oportunidad práctica para niños y adultos de probar a tejer. Visita las ruinas Incas de Chinchero y la iglesia colonial. Explora y compra textiles auténticos directamente de las tejedoras.',
    highlights: [
      'Interactive weaving demonstration',
      'Kids can try weaving on backstrap looms',
      'Learn about natural dyes from cochineal and plants',
      'Meet Quechua-speaking weavers',
      'Support local women\'s cooperatives'
    ],
    highlightsEs: [
      'Demostración interactiva de tejido',
      'Los niños pueden probar a tejer en telares de cintura',
      'Aprende sobre tintes naturales de cochinilla y plantas',
      'Conoce tejedoras quechuahablantes',
      'Apoya cooperativas locales de mujeres'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$25-45 USD per person (some tours include transport)',
    priceRangeEs: '$25-45 USD por persona (algunos tours incluyen transporte)',
    bestTime: 'Year-round activity. Sunday combines with the traditional market.',
    bestTimeEs: 'Actividad de todo el año. El domingo combina con el mercado tradicional.',
    includes: [
      'Weaving demonstration and hands-on experience',
      'Natural dye demonstration',
      'Visit to Inca ruins (Boleto Turístico required)',
      'Time at weaving cooperative',
      'Transport (on most tours)'
    ],
    includesEs: [
      'Demostración de tejido y experiencia práctica',
      'Demostración de tintes naturales',
      'Visita a ruinas Incas (se requiere Boleto Turístico)',
      'Tiempo en cooperativa de tejido',
      'Transporte (en la mayoría de tours)'
    ],
    tips: [
      'Bring cash to buy textiles - prices are fair and support families',
      'Children genuinely enjoy trying to weave',
      'Ask about the meaning of patterns - each has symbolism',
      'Visit on Sunday to combine with the market',
      'The natural dye demonstration is surprisingly engaging'
    ],
    tipsEs: [
      'Trae efectivo para comprar textiles - los precios son justos y apoyan familias',
      'Los niños genuinamente disfrutan tratando de tejer',
      'Pregunta sobre el significado de los patrones - cada uno tiene simbolismo',
      'Visita el domingo para combinar con el mercado',
      'La demostración de tintes naturales es sorprendentemente interesante'
    ],
    safetyNotes: [
      'Chinchero is at 3,762m - higher than Cusco',
      'Allow time for altitude adjustment',
      'Easy walking throughout',
      'Dress warmly - it can be cold',
      'Respect requests about photography'
    ],
    safetyNotesEs: [
      'Chinchero está a 3,762m - más alto que Cusco',
      'Permite tiempo para ajuste de altitud',
      'Caminata fácil en todo el recorrido',
      'Vístete abrigado - puede hacer frío',
      'Respeta las solicitudes sobre fotografía'
    ],
    relatedActivities: ['moray-maras-tour', 'sacred-valley-tour', 'cusco-textile-tour'],
    providers: [
      { name: 'Chinchero Weavers Cooperative', familyFriendly: true },
      { name: 'Awamaki', familyFriendly: true },
      { name: 'Centro de Textiles Tradicionales', familyFriendly: true }
    ]
  },
  {
    slug: 'rainbow-mountain-trek',
    name: 'Rainbow Mountain (Vinicunca) Trek',
    nameEs: 'Trekking Montaña de Colores (Vinicunca)',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Trek to one of Peru\'s most spectacular natural wonders - Rainbow Mountain (Vinicunca), where mineral deposits have painted the mountainside in vivid stripes of red, yellow, green, and turquoise. This challenging high-altitude hike reaches 5,200m, making it one of the highest treks accessible as a day trip. The otherworldly colors against the Andean landscape create an unforgettable sight. This adventure is only suitable for well-acclimatized families with fit older children who can handle extreme altitude.',
    descriptionEs: 'Camina hacia una de las maravillas naturales más espectaculares del Perú - la Montaña de Colores (Vinicunca), donde los depósitos minerales han pintado la ladera de la montaña en vívidas franjas de rojo, amarillo, verde y turquesa. Esta desafiante caminata de gran altitud alcanza 5,200m, convirtiéndola en uno de los trekkings más altos accesibles como excursión de un día. Los colores de otro mundo contra el paisaje andino crean una vista inolvidable. Esta aventura solo es adecuada para familias bien aclimatadas con niños mayores en forma que puedan manejar altitud extrema.',
    whatToExpect: 'Very early departure from Cusco (3-4am) for 3-hour drive to trailhead at Qesiuno. Begin hiking from 4,700m through high-altitude grasslands with grazing alpacas. Gradual then steep ascent to Rainbow Mountain viewpoint at 5,200m. Time for photos before descending. Optional Red Valley extension. Lunch included. Return to Cusco by late afternoon.',
    whatToExpectEs: 'Salida muy temprana desde Cusco (3-4am) para viaje de 3 horas al inicio del sendero en Qesiuno. Comienza la caminata desde 4,700m a través de pastizales de gran altitud con alpacas pastando. Ascenso gradual luego empinado al mirador de la Montaña de Colores a 5,200m. Tiempo para fotos antes de descender. Extensión opcional al Valle Rojo. Almuerzo incluido. Retorno a Cusco al final de la tarde.',
    highlights: [
      'Multicolored striped mountain at 5,200m',
      'Surreal mineral-painted landscape',
      'High Andean scenery with alpacas',
      'One of Peru\'s most photographed sites',
      'Optional Red Valley extension'
    ],
    highlightsEs: [
      'Montaña de rayas multicolores a 5,200m',
      'Paisaje surrealista pintado por minerales',
      'Paisaje alto andino con alpacas',
      'Uno de los sitios más fotografiados del Perú',
      'Extensión opcional al Valle Rojo'
    ],
    familyRating: 3,
    minAge: 12,
    duration: 'Full day (12-14 hours)',
    durationEs: 'Día completo (12-14 horas)',
    difficulty: 'challenging',
    priceRange: '$40-80 USD per person',
    priceRangeEs: '$40-80 USD por persona',
    bestTime: 'Dry season (April-October) essential. June-August offers clearest skies.',
    bestTimeEs: 'Temporada seca (abril-octubre) esencial. Junio-agosto ofrece cielos más despejados.',
    includes: [
      'Hotel pickup and drop-off (very early)',
      'Transportation to trailhead',
      'Breakfast and lunch',
      'Professional guide',
      'Oxygen tank and first aid kit'
    ],
    includesEs: [
      'Recojo y retorno al hotel (muy temprano)',
      'Transporte al inicio del sendero',
      'Desayuno y almuerzo',
      'Guía profesional',
      'Tanque de oxígeno y botiquín de primeros auxilios'
    ],
    tips: [
      'Acclimatize in Cusco for minimum 3-4 days',
      'Consider taking altitude sickness medication',
      'Horse rental available for those struggling (extra cost)',
      'Bring very warm layers - it\'s freezing at the top',
      'Only attempt if your family is fit and fully acclimatized'
    ],
    tipsEs: [
      'Aclimátate en Cusco por mínimo 3-4 días',
      'Considera tomar medicación para mal de altura',
      'Alquiler de caballos disponible para quienes lo necesiten (costo extra)',
      'Trae capas muy abrigadas - hace mucho frío en la cima',
      'Solo intenta si tu familia está en forma y completamente aclimatada'
    ],
    safetyNotes: [
      'Extreme altitude (5,200m) - serious acclimatization required',
      'Not recommended for children under 12',
      'Turn back if anyone shows altitude sickness symptoms',
      'Weather can change rapidly',
      'Horse option available if struggling'
    ],
    safetyNotesEs: [
      'Altitud extrema (5,200m) - se requiere aclimatación seria',
      'No recomendado para niños menores de 12 años',
      'Regresa si alguien muestra síntomas de mal de altura',
      'El clima puede cambiar rápidamente',
      'Opción de caballo disponible si tienes dificultades'
    ],
    relatedActivities: ['ausangate-trek', 'laguna-69-trek', 'cusco-archaeological-circuit'],
    providers: [
      { name: 'Rainbow Mountain Expeditions', familyFriendly: true },
      { name: 'Cusco Native Tours', familyFriendly: true },
      { name: 'Vinicunca Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'sechin-archaeological-tour',
    name: 'Sechín Archaeological Site Tour',
    nameEs: 'Tour Sitio Arqueológico Sechín',
    type: 'cultural',
    city: 'casma',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    description: 'Journey back 3,600 years to one of Peru\'s most ancient and mysterious archaeological sites at Sechín. This tour explores the remarkable temple complex featuring over 300 carved stone warriors and dramatic depictions of battle, sacrifice, and victory that predate Egypt\'s pyramids. The site offers a rare glimpse into Peru\'s pre-ceramic past and the violent origins of Andean civilization. The excellent on-site museum provides context with artifacts and reconstructions. Best suited for families with older children interested in ancient history.',
    descriptionEs: 'Viaja 3,600 años atrás a uno de los sitios arqueológicos más antiguos y misteriosos del Perú en Sechín. Este tour explora el notable complejo de templos con más de 300 guerreros tallados en piedra y dramáticas representaciones de batalla, sacrificio y victoria que son anteriores a las pirámides de Egipto. El sitio ofrece una rara mirada al pasado pre-cerámico del Perú y los violentos orígenes de la civilización andina. El excelente museo en el sitio proporciona contexto con artefactos y reconstrucciones. Más adecuado para familias con niños mayores interesados en historia antigua.',
    whatToExpect: 'Arrival at Sechín Archaeological Complex outside Casma. Visit the museum first to understand the site\'s history and see original artifacts. Guided tour of the temple exterior walls with their dramatic warrior carvings. Learn about the Sechín culture and their violent depictions. Time for photos and questions. The compact site allows thorough exploration in under 2 hours.',
    whatToExpectEs: 'Llegada al Complejo Arqueológico Sechín fuera de Casma. Visita el museo primero para entender la historia del sitio y ver artefactos originales. Tour guiado por las paredes exteriores del templo con sus dramáticos grabados de guerreros. Aprende sobre la cultura Sechín y sus representaciones violentas. Tiempo para fotos y preguntas. El sitio compacto permite exploración completa en menos de 2 horas.',
    highlights: [
      '3,600-year-old carved stone warriors',
      'One of the oldest monuments in the Americas',
      'Dramatic depictions of ancient warfare',
      'Excellent on-site museum',
      'Off the tourist trail'
    ],
    highlightsEs: [
      'Guerreros tallados en piedra de 3,600 años',
      'Uno de los monumentos más antiguos de las Américas',
      'Dramáticas representaciones de guerra antigua',
      'Excelente museo en el sitio',
      'Fuera del circuito turístico'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    priceRange: 'Entrance only: 11 soles. Tours from Huaraz: $60-90 USD',
    priceRangeEs: 'Solo entrada: 11 soles. Tours desde Huaraz: $60-90 USD',
    bestTime: 'Year-round coastal destination. Morning visits avoid afternoon heat.',
    bestTimeEs: 'Destino costero de todo el año. Visitas matutinas evitan el calor de la tarde.',
    includes: [
      'Site and museum entrance',
      'Professional guide (on tours)',
      'Transportation (from Huaraz tours)',
      'Some tours include Casma lunch'
    ],
    includesEs: [
      'Entrada al sitio y museo',
      'Guía profesional (en tours)',
      'Transporte (tours desde Huaraz)',
      'Algunos tours incluyen almuerzo en Casma'
    ],
    tips: [
      'The violent imagery may not suit young children',
      'Visit the museum first to understand context',
      'Can be combined with day trip from Huaraz',
      'Casma has good seafood restaurants for lunch',
      'Photography allowed throughout'
    ],
    tipsEs: [
      'Las imágenes violentas pueden no ser adecuadas para niños pequeños',
      'Visita el museo primero para entender el contexto',
      'Puede combinarse con excursión de un día desde Huaraz',
      'Casma tiene buenos restaurantes de mariscos para almuerzo',
      'Fotografía permitida en todo el sitio'
    ],
    safetyNotes: [
      'Low altitude coastal site - no acclimatization needed',
      'Hot climate - bring water and sun protection',
      'Easy flat walking throughout',
      'Some graphic imagery of violence',
      'Limited shade at the site'
    ],
    safetyNotesEs: [
      'Sitio costero de baja altitud - no necesita aclimatación',
      'Clima caliente - trae agua y protección solar',
      'Caminata fácil y plana en todo el recorrido',
      'Algunas imágenes gráficas de violencia',
      'Sombra limitada en el sitio'
    ],
    relatedActivities: ['chavin-tour', 'caral-tour', 'trujillo-archaeological-tour'],
    providers: [
      { name: 'Huaraz Day Tours', familyFriendly: true },
      { name: 'Casma Tours', familyFriendly: true },
      { name: 'Ancient Peru Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'tipon-water-engineering-tour',
    name: 'Tipón Water Engineering Tour',
    nameEs: 'Tour de Ingeniería Hidráulica de Tipón',
    type: 'educational',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Discover the engineering genius of the Incas at Tipón, one of the most impressive hydraulic complexes in South America. This educational tour focuses on understanding how the Incas mastered water management, creating sophisticated irrigation systems, fountains, and aqueducts that continue to function perfectly after 500+ years. An excellent STEM-focused experience for curious families.',
    descriptionEs: 'Descubre el genio de la ingeniería de los Incas en Tipón, uno de los complejos hidráulicos más impresionantes de Sudamérica. Este tour educativo se enfoca en entender cómo los Incas dominaron el manejo del agua, creando sistemas de irrigación sofisticados, fuentes y acueductos que continúan funcionando perfectamente después de más de 500 años. Una excelente experiencia enfocada en STEM para familias curiosas.',
    whatToExpect: 'Your expert guide will meet you at the site entrance, beginning with an overview of Inca engineering principles. Walk through the terraced complex as your guide demonstrates how water flows through precisely calculated channels. Children can participate in interactive experiments measuring water flow rates and observing pressure dynamics. Visit the ceremonial fountains where water still cascades exactly as the Incas designed. Your guide explains how they achieved perfect water distribution without modern tools. Explore the agricultural terraces and learn how micro-climates were created for different crops. The tour includes time for hands-on exploration with water channels and optional sketching activities for young engineers. End at the upper viewpoint overlooking the entire hydraulic system.',
    whatToExpectEs: 'Tu guía experto te encontrará en la entrada del sitio, comenzando con una visión general de los principios de ingeniería Inca. Camina por el complejo de terrazas mientras tu guía demuestra cómo el agua fluye a través de canales calculados con precisión. Los niños pueden participar en experimentos interactivos midiendo tasas de flujo de agua y observando dinámicas de presión. Visita las fuentes ceremoniales donde el agua aún cae exactamente como los Incas lo diseñaron. Tu guía explica cómo lograron una distribución perfecta del agua sin herramientas modernas. Explora las terrazas agrícolas y aprende cómo se crearon microclimas para diferentes cultivos. El tour incluye tiempo para exploración práctica con canales de agua y actividades opcionales de dibujo para jóvenes ingenieros. Termina en el mirador superior con vista a todo el sistema hidráulico.',
    highlights: [
      'See 500-year-old water systems still functioning perfectly',
      'Interactive STEM activities for children',
      'Learn ancient engineering principles',
      'Walk through spectacular terraced gardens',
      'Visit ceremonial fountains',
      'Understand Inca agricultural innovation',
      'Fewer crowds than main Cusco sites'
    ],
    highlightsEs: [
      'Ver sistemas de agua de 500 años aún funcionando perfectamente',
      'Actividades STEM interactivas para niños',
      'Aprender principios de ingeniería antigua',
      'Caminar por espectaculares jardines en terrazas',
      'Visitar fuentes ceremoniales',
      'Entender la innovación agrícola Inca',
      'Menos multitudes que los sitios principales de Cusco'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$40-70 per person',
    priceRangeEs: '$40-70 por persona',
    bestTime: 'Year-round. Morning visits have best light for photography. Avoid rainy season afternoons.',
    bestTimeEs: 'Todo el año. Visitas matutinas tienen mejor luz para fotografía. Evitar tardes en temporada de lluvias.',
    includes: [
      'Site entrance fee',
      'Specialized engineering-focused guide',
      'Transportation from Cusco',
      'Interactive activity materials',
      'Water and snacks'
    ],
    includesEs: [
      'Entrada al sitio',
      'Guía especializado enfocado en ingeniería',
      'Transporte desde Cusco',
      'Materiales para actividades interactivas',
      'Agua y snacks'
    ],
    tips: [
      'Ask for guides who specialize in engineering explanations',
      'Bring a notebook for children to sketch the water systems',
      'Combine with Pikillacta for a full South Valley day',
      'The local restaurant serves excellent cuy (guinea pig)',
      'Less crowded in afternoons but morning light is better'
    ],
    tipsEs: [
      'Pide guías especializados en explicaciones de ingeniería',
      'Trae un cuaderno para que los niños dibujen los sistemas de agua',
      'Combina con Pikillacta para un día completo del Valle Sur',
      'El restaurante local sirve excelente cuy',
      'Menos concurrido en las tardes pero la luz matutina es mejor'
    ],
    safetyNotes: [
      'Altitude 3,500m - acclimatize in Cusco first',
      'Paths can be slippery when wet',
      'Stay on designated walkways',
      'Sun protection essential',
      'Water channels are shallow but supervise young children'
    ],
    safetyNotesEs: [
      'Altitud 3,500m - aclimatarse en Cusco primero',
      'Caminos pueden ser resbaladizos cuando están mojados',
      'Permanecer en senderos designados',
      'Protección solar esencial',
      'Canales de agua son poco profundos pero supervisar niños pequeños'
    ],
    relatedActivities: ['south-valley-tour', 'cusco-archaeological-circuit', 'moray-maras-tour'],
    providers: [
      { name: 'Cusco Engineering Tours', familyFriendly: true },
      { name: 'South Valley Expeditions', familyFriendly: true },
      { name: 'Educational Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'cusco-temples-circuit',
    name: 'Cusco Temples & Ceremonial Sites Circuit',
    nameEs: 'Circuito de Templos y Sitios Ceremoniales de Cusco',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Explore the mysterious ceremonial sites surrounding Cusco on this half-day tour visiting Qenqo, Puca Pucara, and Tambomachay. These sites reveal the spiritual world of the Incas, from underground ritual chambers to fortress lookouts and sacred bathing temples. Perfect for families who want to understand Inca cosmology and spirituality beyond the major archaeological sites.',
    descriptionEs: 'Explora los misteriosos sitios ceremoniales que rodean Cusco en este tour de medio día visitando Qenqo, Puca Pucara y Tambomachay. Estos sitios revelan el mundo espiritual de los Incas, desde cámaras rituales subterráneas hasta miradores de fortalezas y templos de baño sagrados. Perfecto para familias que quieren entender la cosmología y espiritualidad Inca más allá de los principales sitios arqueológicos.',
    whatToExpect: 'Begin at Qenqo, where your guide leads you through the carved limestone labyrinth. Descend into the underground chamber where Inca priests performed mummification ceremonies - a fascinating but not scary experience for children. Marvel at the zigzag channels carved into rock for chicha offerings. Continue to Puca Pucara, the Red Fortress, which served as a checkpoint and tambo (rest stop) on Inca roads. Climb to the watchtower for panoramic views of the valley. Children enjoy exploring the multiple levels and imagining themselves as Inca lookouts. End at Tambomachay, the bath of the Inca, where crystal-clear water still flows through perfectly engineered channels into ceremonial bathing pools. Learn about ritual purification and the sacred importance of water in Inca religion.',
    whatToExpectEs: 'Comienza en Qenqo, donde tu guía te lleva a través del laberinto de piedra caliza tallada. Desciende a la cámara subterránea donde los sacerdotes Incas realizaban ceremonias de momificación - una experiencia fascinante pero no aterradora para niños. Maravíllate con los canales en zigzag tallados en roca para ofrendas de chicha. Continúa a Puca Pucara, la Fortaleza Roja, que servía como punto de control y tambo (lugar de descanso) en los caminos Incas. Sube a la torre de vigilancia para vistas panorámicas del valle. Los niños disfrutan explorando los múltiples niveles e imaginándose como vigías Incas. Termina en Tambomachay, el baño del Inca, donde agua cristalina aún fluye a través de canales perfectamente diseñados hacia piscinas de baño ceremoniales. Aprende sobre purificación ritual y la importancia sagrada del agua en la religión Inca.',
    highlights: [
      'Explore underground ritual chambers at Qenqo',
      'Climb the Red Fortress watchtower',
      'See sacred bathing pools still flowing',
      'Learn about Inca mummification practices',
      'Panoramic valley views from Puca Pucara',
      'Understand Inca religious beliefs',
      'Less crowded than Sacsayhuaman'
    ],
    highlightsEs: [
      'Explorar cámaras rituales subterráneas en Qenqo',
      'Subir la torre de vigilancia de la Fortaleza Roja',
      'Ver piscinas de baño sagradas aún fluyendo',
      'Aprender sobre prácticas de momificación Inca',
      'Vistas panorámicas del valle desde Puca Pucara',
      'Entender creencias religiosas Incas',
      'Menos concurrido que Sacsayhuaman'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$50-80 per person',
    priceRangeEs: '$50-80 por persona',
    bestTime: 'Year-round. Morning starts recommended. April-October dry season ideal.',
    bestTimeEs: 'Todo el año. Se recomiendan salidas matutinas. Temporada seca abril-octubre ideal.',
    includes: [
      'All site entrance fees',
      'Professional bilingual guide',
      'Private transportation',
      'Water and snacks',
      'Hotel pickup and dropoff'
    ],
    includesEs: [
      'Todas las entradas a sitios',
      'Guía bilingüe profesional',
      'Transporte privado',
      'Agua y snacks',
      'Recogida y regreso al hotel'
    ],
    tips: [
      'Can combine with Sacsayhuaman for full-day circuit',
      'Bring flashlight for underground chamber at Qenqo',
      'These sites are covered by Boleto Turístico',
      'Morning light best for photography',
      'Dress in layers - weather changes quickly'
    ],
    tipsEs: [
      'Puede combinarse con Sacsayhuaman para circuito de día completo',
      'Trae linterna para cámara subterránea en Qenqo',
      'Estos sitios están cubiertos por el Boleto Turístico',
      'Luz matutina mejor para fotografía',
      'Vístete en capas - el clima cambia rápidamente'
    ],
    safetyNotes: [
      'Altitude 3,700m - acclimatize first',
      'Underground chamber at Qenqo has low ceilings',
      'Some climbing required at Puca Pucara',
      'Supervise children on fortress walls',
      'Sturdy footwear recommended'
    ],
    safetyNotesEs: [
      'Altitud 3,700m - aclimatarse primero',
      'Cámara subterránea en Qenqo tiene techos bajos',
      'Se requiere algo de escalada en Puca Pucara',
      'Supervisar niños en muros de fortaleza',
      'Calzado resistente recomendado'
    ],
    relatedActivities: ['cusco-archaeological-circuit', 'sacsayhuaman-tour', 'cusco-city-tour'],
    providers: [
      { name: 'Cusco Sacred Sites', familyFriendly: true },
      { name: 'Inca Ceremonial Tours', familyFriendly: true },
      { name: 'Andean Mysticism Explorers', familyFriendly: true }
    ]
  },
  {
    slug: 'huanchaco-surf-totora',
    name: 'Huanchaco Surf & Caballitos de Totora Experience',
    nameEs: 'Experiencia de Surf y Caballitos de Totora en Huanchaco',
    type: 'adventure',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'Experience the unique maritime culture of Huanchaco, where fishermen have paddled reed boats called caballitos de totora for over 3,000 years. This family-friendly beach day combines ancient traditions with modern surfing, offering caballito rides, surf lessons, and coastal exploration. The perfect blend of cultural immersion and beach fun on Peru\'s sunny northern coast.',
    descriptionEs: 'Experimenta la cultura marítima única de Huanchaco, donde los pescadores han remado botes de caña llamados caballitos de totora por más de 3,000 años. Este día de playa familiar combina tradiciones antiguas con surf moderno, ofreciendo paseos en caballito, clases de surf y exploración costera. La combinación perfecta de inmersión cultural y diversión playera en la soleada costa norte de Perú.',
    whatToExpect: 'Arrive at Huanchaco pier where local fishermen demonstrate caballito de totora construction and paddling techniques. Children and adults can try balancing on these remarkable reed boats, learning how fishermen have used them since pre-Inca times. After the caballito experience, move to the beach for family surf lessons. Huanchaco\'s gentle waves are ideal for beginners of all ages. Professional instructors provide boards, wetsuits, and patient guidance. Break for fresh ceviche at a beachfront restaurant, watching fishermen return with their catch. Spend the afternoon exploring the pier, visiting the totora reed beds where boats are still made traditionally, or relaxing on the beach. Watch the spectacular sunset as fishermen paddle their caballitos across golden waters.',
    whatToExpectEs: 'Llega al muelle de Huanchaco donde pescadores locales demuestran la construcción y técnicas de remo de caballitos de totora. Niños y adultos pueden intentar balancearse en estos notables botes de caña, aprendiendo cómo los pescadores los han usado desde tiempos pre-Incas. Después de la experiencia del caballito, muévete a la playa para clases de surf familiar. Las olas suaves de Huanchaco son ideales para principiantes de todas las edades. Instructores profesionales proporcionan tablas, trajes de neopreno y guía paciente. Descansa con ceviche fresco en un restaurante frente al mar, observando a los pescadores regresar con su captura. Pasa la tarde explorando el muelle, visitando los juncales de totora donde los botes aún se hacen tradicionalmente, o relajándote en la playa. Observa el espectacular atardecer mientras los pescadores reman sus caballitos sobre aguas doradas.',
    highlights: [
      'Ride authentic 3,000-year-old reed boats',
      'Learn to surf on beginner-friendly waves',
      'Meet local fishermen preserving ancient traditions',
      'Fresh seafood lunch at beachfront restaurants',
      'Watch traditional totora boat-building',
      'Spectacular Pacific Ocean sunsets',
      'UNESCO-recognized cultural heritage'
    ],
    highlightsEs: [
      'Montar auténticos botes de caña de 3,000 años',
      'Aprender a surfear en olas amigables para principiantes',
      'Conocer pescadores locales que preservan tradiciones antiguas',
      'Almuerzo de mariscos frescos en restaurantes frente al mar',
      'Observar construcción tradicional de botes de totora',
      'Espectaculares atardeceres sobre el Océano Pacífico',
      'Patrimonio cultural reconocido por UNESCO'
    ],
    familyRating: 5,
    minAge: 4,
    duration: 'Full day (6-8 hours)',
    durationEs: 'Día completo (6-8 horas)',
    difficulty: 'easy',
    priceRange: '$60-100 per person',
    priceRangeEs: '$60-100 por persona',
    bestTime: 'Year-round. December-March warmest for swimming. Mornings best for calm seas.',
    bestTimeEs: 'Todo el año. Diciembre-marzo más cálido para nadar. Mañanas mejores para mar tranquilo.',
    includes: [
      'Caballito de totora experience',
      'Surf lesson with equipment',
      'Wetsuit rental',
      'Fresh seafood lunch',
      'Transportation from Trujillo'
    ],
    includesEs: [
      'Experiencia de caballito de totora',
      'Clase de surf con equipo',
      'Alquiler de traje de neopreno',
      'Almuerzo de mariscos frescos',
      'Transporte desde Trujillo'
    ],
    tips: [
      'Bring swimsuit, towel, and change of clothes',
      'Apply reef-safe sunscreen before activities',
      'Morning surf lessons have smaller crowds',
      'Try the ceviche at Restaurant Big Ben',
      'Sunset caballito rides are magical'
    ],
    tipsEs: [
      'Trae traje de baño, toalla y ropa de cambio',
      'Aplica protector solar amigable con arrecifes antes de las actividades',
      'Clases de surf matutinas tienen menos multitudes',
      'Prueba el ceviche en Restaurant Big Ben',
      'Paseos en caballito al atardecer son mágicos'
    ],
    safetyNotes: [
      'Professional surf instructors supervise all water activities',
      'Life jackets available for caballito rides',
      'Calm waves ideal for beginners',
      'Stay in designated swimming areas',
      'Rip currents rare but heed lifeguard warnings'
    ],
    safetyNotesEs: [
      'Instructores de surf profesionales supervisan todas las actividades acuáticas',
      'Chalecos salvavidas disponibles para paseos en caballito',
      'Olas tranquilas ideales para principiantes',
      'Permanecer en áreas de natación designadas',
      'Corrientes de resaca raras pero atender advertencias de salvavidas'
    ],
    relatedActivities: ['trujillo-archaeological-tour', 'huacas-moche-tour', 'chiclayo-heritage-tour'],
    providers: [
      { name: 'Huanchaco Surf School', familyFriendly: true },
      { name: 'Caballitos de Totora Tours', familyFriendly: true },
      { name: 'North Peru Adventures', familyFriendly: true }
    ]
  },
  {
    slug: 'lima-craft-beer-tour',
    name: 'Lima Craft Beer & Artisan Food Tour',
    nameEs: 'Tour de Cerveza Artesanal y Comida Artesana de Lima',
    type: 'culinary',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Discover Lima\'s booming craft beer scene on this family-friendly culinary adventure through the trendy neighborhoods of Barranco and Miraflores. While adults sample Peru\'s best microbrews, kids enjoy artisan sodas, fresh juices, and Peruvian street snacks. Visit local breweries, learn about the brewing process, and pair craft beers with innovative Peruvian cuisine. A unique urban food experience showcasing Lima\'s modern gastronomic revolution.',
    descriptionEs: 'Descubre la floreciente escena de cerveza artesanal de Lima en esta aventura culinaria familiar por los barrios de moda de Barranco y Miraflores. Mientras los adultos prueban las mejores microcervecerías de Perú, los niños disfrutan de sodas artesanales, jugos frescos y snacks callejeros peruanos. Visita cervecerías locales, aprende sobre el proceso de elaboración y maridaje de cervezas artesanales con cocina peruana innovadora. Una experiencia urbana de comida única que muestra la revolución gastronómica moderna de Lima.',
    whatToExpect: 'Meet your foodie guide in Barranco\'s bohemian plaza, beginning with an overview of Peru\'s craft beer revolution. Walk through colorful streets to the first microbrewery, where the brewmaster explains the process while adults taste and kids get house-made ginger ale or chicha morada. Continue through street art-lined alleys to a gastropub famous for pairing local beers with Peruvian fusion tapas - anticuchos, causa, and ceviche bites. Kids have their own menu of mini portions and fresh fruit smoothies. Visit a bottle shop showcasing Peru\'s best labels, with educational displays about ingredients including native Peruvian grains. Take the scenic walk along the oceanfront to Miraflores, stopping at an artisan market for churros and picarones. End at a rooftop brewpub overlooking the Pacific, where adults enjoy sunset beers while kids play in the family area with ocean views.',
    whatToExpectEs: 'Encuentra a tu guía gastronómico en la plaza bohemia de Barranco, comenzando con una visión general de la revolución de la cerveza artesanal de Perú. Camina por calles coloridas a la primera microcervecería, donde el maestro cervecero explica el proceso mientras los adultos prueban y los niños reciben ginger ale casero o chicha morada. Continúa por callejones llenos de arte callejero a un gastropub famoso por maridar cervezas locales con tapas de fusión peruana - anticuchos, causa y bocados de ceviche. Los niños tienen su propio menú de porciones mini y smoothies de fruta fresca. Visita una tienda de botellas que muestra las mejores etiquetas de Perú, con exhibiciones educativas sobre ingredientes incluyendo granos nativos peruanos. Haz la caminata escénica por el frente oceánico a Miraflores, parando en un mercado artesanal para churros y picarones. Termina en un brewpub en azotea con vista al Pacífico, donde los adultos disfrutan cervezas al atardecer mientras los niños juegan en el área familiar con vistas al océano.',
    highlights: [
      'Visit 3-4 craft breweries and brewpubs',
      'Learn the brewing process from brewmasters',
      'Pair craft beers with Peruvian fusion cuisine',
      'Kids enjoy artisan sodas and fresh juices',
      'Walk through Barranco\'s street art scene',
      'Scenic oceanfront walk to Miraflores',
      'Rooftop sunset views over the Pacific'
    ],
    highlightsEs: [
      'Visitar 3-4 cervecerías artesanales y brewpubs',
      'Aprender el proceso de elaboración de maestros cerveceros',
      'Maridar cervezas artesanales con cocina de fusión peruana',
      'Niños disfrutan sodas artesanales y jugos frescos',
      'Caminar por la escena de arte callejero de Barranco',
      'Caminata escénica por el frente oceánico a Miraflores',
      'Vistas del atardecer desde azotea sobre el Pacífico'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$75-120 per person',
    priceRangeEs: '$75-120 por persona',
    bestTime: 'Year-round. Evening tours best for sunset rooftop finale. Fridays and Saturdays most lively.',
    bestTimeEs: 'Todo el año. Tours vespertinos mejores para final en azotea al atardecer. Viernes y sábados más animados.',
    includes: [
      'Professional foodie guide',
      'All food tastings (6-8 stops)',
      'Beer flights for adults (4-5 breweries)',
      'Artisan drinks for children',
      'Brewery tour and education',
      'Churros and picarones dessert'
    ],
    includesEs: [
      'Guía gastronómico profesional',
      'Todas las degustaciones de comida (6-8 paradas)',
      'Vuelos de cerveza para adultos (4-5 cervecerías)',
      'Bebidas artesanales para niños',
      'Tour de cervecería y educación',
      'Postre de churros y picarones'
    ],
    tips: [
      'Wear comfortable walking shoes',
      'Evening tours have best atmosphere',
      'Ask about quinoa and amaranth-based beers',
      'Book Fridays for live music in Barranco',
      'Designate a photographer - the street art is amazing'
    ],
    tipsEs: [
      'Usa zapatos cómodos para caminar',
      'Tours vespertinos tienen mejor ambiente',
      'Pregunta por cervezas a base de quinoa y amaranto',
      'Reserva viernes para música en vivo en Barranco',
      'Designa un fotógrafo - el arte callejero es increíble'
    ],
    safetyNotes: [
      'Easy flat walking throughout',
      'Supervised brewery tours',
      'Coastal walk has guardrails',
      'Stay with group in busy areas',
      'Responsible drinking encouraged'
    ],
    safetyNotesEs: [
      'Caminata fácil y plana en todo el recorrido',
      'Tours de cervecería supervisados',
      'Caminata costera tiene barandas',
      'Permanecer con el grupo en áreas concurridas',
      'Se fomenta el consumo responsable'
    ],
    relatedActivities: ['lima-food-tour', 'lima-cooking-class', 'miraflores-street-food'],
    providers: [
      { name: 'Lima Craft Beer Tours', familyFriendly: true },
      { name: 'Urban Food Adventures', familyFriendly: true },
      { name: 'Barranco Gastro Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'baroque-route-tour',
    name: 'Baroque Route Art & Architecture Tour',
    nameEs: 'Tour de Arte y Arquitectura de la Ruta Barroca',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Journey through southern Cusco\'s magnificent colonial churches on the Baroque Route, featuring some of the finest examples of Andean baroque art in the Americas. Visit the stunning Andahuaylillas Church, known as the "Sistine Chapel of the Americas," along with other artistic treasures in Huaro and Canincunca. This art-focused tour reveals the unique fusion of Spanish religious traditions with indigenous Andean creativity that defines Peru\'s colonial heritage.',
    descriptionEs: 'Viaja por las magníficas iglesias coloniales del sur de Cusco en la Ruta Barroca, presentando algunos de los mejores ejemplos de arte barroco andino en las Américas. Visita la impresionante Iglesia de Andahuaylillas, conocida como la "Capilla Sixtina de las Américas", junto con otros tesoros artísticos en Huaro y Canincunca. Este tour enfocado en arte revela la fusión única de tradiciones religiosas españolas con la creatividad andina indígena que define el patrimonio colonial de Perú.',
    whatToExpect: 'Begin with pickup from your Cusco hotel for the scenic drive along the South Valley road. First stop is the charming village of Andahuaylillas, where you\'ll visit the Church of San Pedro - prepare to be amazed as the modest exterior opens to reveal floor-to-ceiling baroque masterpieces. Your art historian guide explains the symbolism, pointing out indigenous elements hidden within European religious imagery. Children receive activity sheets to find specific details in the murals. Continue to Huaro to see the "Chapel of the Last Judgment" with its dramatic depictions of heaven and hell. Visit Canincunca\'s unique open-air chapel. Throughout, learn about the Cuzqueña school of painting and the mestizo artists who created these works. Return via charming villages with stops for photos of the countryside.',
    whatToExpectEs: 'Comienza con recogida de tu hotel en Cusco para el viaje escénico por la carretera del Valle Sur. Primera parada es el encantador pueblo de Andahuaylillas, donde visitarás la Iglesia de San Pedro - prepárate para asombrarte cuando el modesto exterior se abre para revelar obras maestras barrocas del piso al techo. Tu guía historiador del arte explica el simbolismo, señalando elementos indígenas escondidos dentro de la imaginería religiosa europea. Los niños reciben hojas de actividades para encontrar detalles específicos en los murales. Continúa a Huaro para ver la "Capilla del Juicio Final" con sus dramáticas representaciones del cielo y el infierno. Visita la capilla única al aire libre de Canincunca. A lo largo del tour, aprende sobre la escuela de pintura Cuzqueña y los artistas mestizos que crearon estas obras. Regreso por pueblos encantadores con paradas para fotos del campo.',
    highlights: [
      'Visit the "Sistine Chapel of the Americas"',
      'See priceless baroque murals and gold altars',
      'Learn about indigenous-Spanish artistic fusion',
      'Explore charming colonial villages',
      'Family-friendly art scavenger hunt activities',
      'Hear 400-year-old organ music demonstrations',
      'Beautiful South Valley countryside views'
    ],
    highlightsEs: [
      'Visitar la "Capilla Sixtina de las Américas"',
      'Ver murales barrocos invaluables y altares dorados',
      'Aprender sobre la fusión artística indígena-española',
      'Explorar encantadores pueblos coloniales',
      'Actividades de búsqueda del tesoro artístico para familias',
      'Escuchar demostraciones de música de órgano de 400 años',
      'Hermosas vistas del campo del Valle Sur'
    ],
    familyRating: 4,
    minAge: 5,
    duration: 'Half day (4-5 hours)',
    durationEs: 'Medio día (4-5 horas)',
    difficulty: 'easy',
    priceRange: '$45-75 per person',
    priceRangeEs: '$45-75 por persona',
    bestTime: 'Year-round. Morning tours have best light for viewing artwork.',
    bestTimeEs: 'Todo el año. Tours matutinos tienen mejor luz para ver obras de arte.',
    includes: [
      'Hotel pickup and dropoff',
      'Art historian guide',
      'All church entrance fees',
      'Activity booklets for children',
      'Bottled water'
    ],
    includesEs: [
      'Recogida y regreso al hotel',
      'Guía historiador del arte',
      'Todas las entradas a iglesias',
      'Cuadernillos de actividades para niños',
      'Agua embotellada'
    ],
    tips: [
      'Dress respectfully - churches are active places of worship',
      'Photography not allowed inside most churches',
      'Combine with Raqchi for full day South Valley experience',
      'Morning light is best for interior viewing',
      'Small donations to churches appreciated'
    ],
    tipsEs: [
      'Vístete respetuosamente - las iglesias son lugares de culto activos',
      'Fotografía no permitida dentro de la mayoría de las iglesias',
      'Combina con Raqchi para experiencia de día completo del Valle Sur',
      'Luz matutina es mejor para ver interiores',
      'Pequeñas donaciones a las iglesias apreciadas'
    ],
    safetyNotes: [
      'Easy walking throughout',
      'Churches have stone floors - can be cool inside',
      'Lower altitude than Cusco - no altitude concerns',
      'Well-maintained villages and sites',
      'Supervised visits'
    ],
    safetyNotesEs: [
      'Caminata fácil en todo el recorrido',
      'Las iglesias tienen pisos de piedra - puede ser fresco adentro',
      'Menor altitud que Cusco - sin preocupaciones de altitud',
      'Pueblos y sitios bien mantenidos',
      'Visitas supervisadas'
    ],
    relatedActivities: ['south-valley-tour', 'cusco-city-tour', 'tipon-water-engineering-tour'],
    providers: [
      { name: 'Baroque Art Tours Peru', familyFriendly: true },
      { name: 'South Valley Expeditions', familyFriendly: true },
      { name: 'Cusco Art & History Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'raqchi-community-experience',
    name: 'Raqchi Community & Temple Experience',
    nameEs: 'Experiencia Comunitaria y del Templo de Raqchi',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Combine archaeology with authentic community interaction at Raqchi, home to the largest Inca roofed structure ever built. This immersive experience includes exploring the Temple of Wiracocha and its 200+ circular storehouses, followed by hands-on time with local artisans learning traditional ceramic techniques. Share a meal prepared by community members and support sustainable tourism that directly benefits this welcoming Andean village.',
    descriptionEs: 'Combina arqueología con interacción comunitaria auténtica en Raqchi, hogar de la estructura techada Inca más grande jamás construida. Esta experiencia inmersiva incluye explorar el Templo de Wiracocha y sus más de 200 almacenes circulares, seguido de tiempo práctico con artesanos locales aprendiendo técnicas tradicionales de cerámica. Comparte una comida preparada por miembros de la comunidad y apoya el turismo sustentable que beneficia directamente a este acogedor pueblo andino.',
    whatToExpect: 'Your guide meets you in Cusco for the scenic drive south through the Vilcanota Valley. Arrive at Raqchi to explore the impressive Temple of Wiracocha, where the central wall once supported South America\'s largest thatched roof. Children love exploring the circular qolqas (storehouses) and searching for resident llamas and alpacas. After the archaeological tour, join local artisans for a pottery workshop. Using the same clay their ancestors used, you\'ll learn to make a small ceramic piece to take home. Gather for lunch at the community restaurant, enjoying traditional dishes like quinoa soup, cuy al horno, or vegetarian options prepared with local ingredients. Browse the artisan market for authentic ceramics made using pre-Columbian techniques. Return to Cusco with your handmade souvenir.',
    whatToExpectEs: 'Tu guía te encuentra en Cusco para el viaje escénico al sur a través del Valle Vilcanota. Llega a Raqchi para explorar el impresionante Templo de Wiracocha, donde el muro central una vez soportó el techo de paja más grande de Sudamérica. A los niños les encanta explorar las qolqas circulares (almacenes) y buscar las llamas y alpacas residentes. Después del tour arqueológico, únete a artesanos locales para un taller de cerámica. Usando la misma arcilla que usaron sus ancestros, aprenderás a hacer una pequeña pieza de cerámica para llevar a casa. Reúnete para almorzar en el restaurante comunitario, disfrutando platos tradicionales como sopa de quinoa, cuy al horno u opciones vegetarianas preparadas con ingredientes locales. Explora el mercado artesanal para cerámicas auténticas hechas usando técnicas precolombinas. Regresa a Cusco con tu recuerdo hecho a mano.',
    highlights: [
      'Explore largest Inca roofed temple structure',
      'See 200+ ancient circular storehouses',
      'Hands-on pottery workshop with local artisans',
      'Traditional Andean community lunch',
      'Meet llamas and alpacas',
      'Support sustainable community tourism',
      'Take home your own ceramic creation'
    ],
    highlightsEs: [
      'Explorar la estructura de templo techado Inca más grande',
      'Ver más de 200 almacenes circulares antiguos',
      'Taller de cerámica práctico con artesanos locales',
      'Almuerzo tradicional de comunidad andina',
      'Conocer llamas y alpacas',
      'Apoyar turismo comunitario sustentable',
      'Llevarte tu propia creación de cerámica a casa'
    ],
    familyRating: 5,
    minAge: 4,
    duration: 'Full day (7-8 hours)',
    durationEs: 'Día completo (7-8 horas)',
    difficulty: 'easy',
    priceRange: '$65-95 per person',
    priceRangeEs: '$65-95 por persona',
    bestTime: 'Year-round. June for annual ceramics festival. April-October dry season best.',
    bestTimeEs: 'Todo el año. Junio para festival anual de cerámica. Temporada seca abril-octubre mejor.',
    includes: [
      'Transportation from Cusco',
      'Professional bilingual guide',
      'Site entrance fees',
      'Pottery workshop with materials',
      'Traditional community lunch',
      'Take-home ceramic piece'
    ],
    includesEs: [
      'Transporte desde Cusco',
      'Guía bilingüe profesional',
      'Entradas al sitio',
      'Taller de cerámica con materiales',
      'Almuerzo tradicional comunitario',
      'Pieza de cerámica para llevar a casa'
    ],
    tips: [
      'Book the June ceramics festival tour for extra activities',
      'Bring soles for artisan market purchases',
      'Kids love feeding the llamas (ask guide)',
      'Can combine with Andahuaylillas Baroque Route',
      'Community homestays available for overnight experiences'
    ],
    tipsEs: [
      'Reserva el tour del festival de cerámica de junio para actividades extra',
      'Trae soles para compras en el mercado artesanal',
      'A los niños les encanta alimentar a las llamas (pregunta al guía)',
      'Puede combinarse con la Ruta Barroca de Andahuaylillas',
      'Homestays comunitarios disponibles para experiencias de noche'
    ],
    safetyNotes: [
      'Easy terrain at archaeological site',
      'Altitude 3,500m - acclimatize in Cusco first',
      'Pottery workshop supervised for children',
      'Gentle llamas and alpacas',
      'Community is welcoming and safe'
    ],
    safetyNotesEs: [
      'Terreno fácil en el sitio arqueológico',
      'Altitud 3,500m - aclimatarse en Cusco primero',
      'Taller de cerámica supervisado para niños',
      'Llamas y alpacas dóciles',
      'La comunidad es acogedora y segura'
    ],
    relatedActivities: ['baroque-route-tour', 'south-valley-tour', 'tipon-water-engineering-tour'],
    providers: [
      { name: 'Raqchi Community Tourism', familyFriendly: true },
      { name: 'South Valley Expeditions', familyFriendly: true },
      { name: 'Responsible Travel Peru', familyFriendly: true }
    ]
  },
  {
    slug: 'waqrapukara-adventure-trek',
    name: 'Waqrapukara Adventure Trek',
    nameEs: 'Trek de Aventura a Waqrapukara',
    type: 'adventure',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'Trek to one of Peru\'s most spectacular and least-visited archaeological sites - Waqrapukara, the "Horn Fortress." This challenging adventure rewards active families with breathtaking views of dramatic rock spires rising above a deep canyon, an ancient Inca ceremonial site that receives fewer than 20 visitors per day, and the thrill of authentic discovery. For families with older children seeking adventure beyond the typical tourist trail.',
    descriptionEs: 'Camina a uno de los sitios arqueológicos más espectaculares y menos visitados de Perú - Waqrapukara, la "Fortaleza del Cuerno". Esta aventura desafiante recompensa a familias activas con vistas impresionantes de agujas rocosas dramáticas elevándose sobre un cañón profundo, un sitio ceremonial Inca antiguo que recibe menos de 20 visitantes por día, y la emoción del descubrimiento auténtico. Para familias con niños mayores que buscan aventura más allá del camino turístico típico.',
    whatToExpect: 'Depart Cusco very early (4am) for the 4-hour drive through the remote Acomayo province, watching the sunrise over Andean peaks. Your guide provides breakfast at a local family\'s home before beginning the trek from Sangarara village. The 2-3 hour hike follows ancient paths through puna grasslands, with opportunities to spot Andean condors, viscachas, and high-altitude birds. As you approach, the twin horn-like rock spires come dramatically into view. Explore the pre-Inca and Inca ceremonial platforms, temples, and carved stone features while your guide explains the site\'s astronomical significance. Enjoy a packed lunch with spectacular canyon views. The return trek feels easier with the stunning scenery behind you. Return to Cusco by evening, filled with the satisfaction of having discovered a Peru few tourists ever see.',
    whatToExpectEs: 'Sal de Cusco muy temprano (4am) para el viaje de 4 horas a través de la remota provincia de Acomayo, observando el amanecer sobre los picos andinos. Tu guía proporciona desayuno en la casa de una familia local antes de comenzar el trek desde el pueblo de Sangarara. La caminata de 2-3 horas sigue senderos antiguos a través de pastizales de puna, con oportunidades para avistar cóndores andinos, vizcachas y aves de alta altitud. Al acercarte, las agujas rocosas gemelas en forma de cuerno aparecen dramáticamente a la vista. Explora las plataformas ceremoniales pre-Incas e Incas, templos y características de piedra tallada mientras tu guía explica la importancia astronómica del sitio. Disfruta un almuerzo empacado con espectaculares vistas del cañón. El trek de regreso se siente más fácil con el impresionante paisaje detrás de ti. Regresa a Cusco por la noche, lleno de la satisfacción de haber descubierto un Perú que pocos turistas ven.',
    highlights: [
      'One of Peru\'s most dramatic archaeological sites',
      'Fewer than 20 visitors per day',
      'Spectacular twin rock spire formations',
      'Authentic adventure and discovery experience',
      'Possible condor and wildlife sightings',
      'Stunning canyon and mountain panoramas',
      'Support remote community tourism'
    ],
    highlightsEs: [
      'Uno de los sitios arqueológicos más dramáticos de Perú',
      'Menos de 20 visitantes por día',
      'Espectaculares formaciones de agujas rocosas gemelas',
      'Experiencia auténtica de aventura y descubrimiento',
      'Posibles avistamientos de cóndores y fauna',
      'Impresionantes panoramas de cañón y montañas',
      'Apoyar turismo de comunidades remotas'
    ],
    familyRating: 3,
    minAge: 10,
    duration: 'Full day (12-14 hours from Cusco)',
    durationEs: 'Día completo (12-14 horas desde Cusco)',
    difficulty: 'challenging',
    priceRange: '$95-150 per person',
    priceRangeEs: '$95-150 por persona',
    bestTime: 'April-October dry season only. June-August clearest weather.',
    bestTimeEs: 'Solo temporada seca abril-octubre. Junio-agosto clima más despejado.',
    includes: [
      'Round-trip transportation from Cusco',
      'Professional guide with first aid training',
      'Breakfast at local family home',
      'Packed trail lunch and snacks',
      'Community entrance fees',
      'Trekking poles available'
    ],
    includesEs: [
      'Transporte ida y vuelta desde Cusco',
      'Guía profesional con entrenamiento de primeros auxilios',
      'Desayuno en casa de familia local',
      'Almuerzo empacado y snacks para el sendero',
      'Entradas comunitarias',
      'Bastones de trekking disponibles'
    ],
    tips: [
      'Acclimatize at least 3 days in Cusco first',
      'Start early to maximize daylight hours',
      'Bring warm layers - weather changes fast at 4,300m',
      'Overnight camping option available for photographers',
      'Book several days in advance - small group sizes only'
    ],
    tipsEs: [
      'Aclimatarse al menos 3 días en Cusco primero',
      'Comenzar temprano para maximizar horas de luz',
      'Traer capas abrigadas - el clima cambia rápido a 4,300m',
      'Opción de camping disponible para fotógrafos',
      'Reservar con varios días de anticipación - solo grupos pequeños'
    ],
    safetyNotes: [
      'High altitude trek (4,300m) - acclimatization essential',
      'Guide carries first aid and emergency equipment',
      'Weather can change rapidly - rain gear required',
      'Trek difficulty is moderate but altitude is challenging',
      'Not suitable for those with heart or respiratory conditions'
    ],
    safetyNotesEs: [
      'Trek de alta altitud (4,300m) - aclimatación esencial',
      'Guía lleva primeros auxilios y equipo de emergencia',
      'El clima puede cambiar rápidamente - ropa impermeable requerida',
      'Dificultad del trek es moderada pero la altitud es desafiante',
      'No apto para personas con condiciones cardíacas o respiratorias'
    ],
    relatedActivities: ['rainbow-mountain-trek', 'laguna-69-trek', 'ausangate-trek'],
    providers: [
      { name: 'Waqrapukara Adventures', familyFriendly: false },
      { name: 'Off-the-Beaten-Path Peru', familyFriendly: true },
      { name: 'Adventure Cusco', familyFriendly: true }
    ]
  },
  {
    slug: 'palomino-islands-swim',
    name: 'Palomino Islands Sea Lion Swim Adventure',
    nameEs: 'Aventura de Nado con Lobos Marinos en Islas Palomino',
    type: 'nature',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Get up close with wild South American sea lions at the Palomino Islands, just 45 minutes from Lima. This unforgettable wildlife adventure offers the rare opportunity to swim alongside curious, playful sea lions in their natural ocean habitat, while also observing Humboldt penguins, countless seabirds, and possibly dolphins. One of Lima\'s best-kept secrets and a highlight for wildlife-loving families.',
    descriptionEs: 'Acércate a los lobos marinos sudamericanos salvajes en las Islas Palomino, a solo 45 minutos de Lima. Esta inolvidable aventura de vida silvestre ofrece la rara oportunidad de nadar junto a lobos marinos curiosos y juguetones en su hábitat oceánico natural, mientras también observas pingüinos de Humboldt, innumerables aves marinas y posiblemente delfines. Uno de los secretos mejor guardados de Lima y un destacado para familias amantes de la vida silvestre.',
    whatToExpect: 'Meet at La Punta pier in Callao, where you\'ll board a specially equipped boat with an experienced crew. During the 45-minute voyage, spot Humboldt penguins on rocky outcrops and learn about the rich Humboldt Current ecosystem. Approaching the main island, the sight and sound of thousands of sea lions is awe-inspiring. For swimmers, the crew helps you into your wetsuit before entering the water. The sea lions, particularly the curious young ones, approach swimmers playfully - an absolutely magical experience. Non-swimmers can observe from the boat, getting equally amazing views and photos. Seabirds wheel overhead in massive numbers. Dolphins are frequently spotted on the return journey. Hot chocolate and snacks await as you cruise back to the mainland, filled with incredible wildlife memories.',
    whatToExpectEs: 'Encuéntrate en el muelle de La Punta en Callao, donde abordarás un bote especialmente equipado con una tripulación experimentada. Durante el viaje de 45 minutos, observa pingüinos de Humboldt en afloramientos rocosos y aprende sobre el rico ecosistema de la Corriente de Humboldt. Al acercarte a la isla principal, la vista y el sonido de miles de lobos marinos es impresionante. Para los nadadores, la tripulación te ayuda a ponerte tu traje de neopreno antes de entrar al agua. Los lobos marinos, particularmente los jóvenes curiosos, se acercan a los nadadores juguetonamente - una experiencia absolutamente mágica. Los no nadadores pueden observar desde el bote, obteniendo vistas y fotos igualmente increíbles. Las aves marinas vuelan sobre ti en números masivos. Los delfines se ven frecuentemente en el viaje de regreso. Chocolate caliente y snacks te esperan mientras navegas de regreso al continente, lleno de increíbles recuerdos de vida silvestre.',
    highlights: [
      'Swim with wild sea lions in their natural habitat',
      'See Humboldt penguins up close',
      'Colony of 8,000+ sea lions',
      'Massive seabird colonies',
      'Possible dolphin sightings',
      'Professional crew and safety equipment',
      'Only 45 minutes from central Lima'
    ],
    highlightsEs: [
      'Nadar con lobos marinos salvajes en su hábitat natural',
      'Ver pingüinos de Humboldt de cerca',
      'Colonia de más de 8,000 lobos marinos',
      'Masivas colonias de aves marinas',
      'Posibles avistamientos de delfines',
      'Tripulación profesional y equipo de seguridad',
      'Solo 45 minutos del centro de Lima'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$55-85 per person',
    priceRangeEs: '$55-85 por persona',
    bestTime: 'Year-round. December-March warmest water. July-September most sea lion pups.',
    bestTimeEs: 'Todo el año. Diciembre-marzo agua más cálida. Julio-septiembre más crías de lobos marinos.',
    includes: [
      'Boat transportation to islands',
      'Wetsuit and snorkeling gear',
      'Experienced bilingual crew',
      'Safety briefing and supervision',
      'Hot drinks and snacks on return',
      'Hotel pickup option available'
    ],
    includesEs: [
      'Transporte en bote a las islas',
      'Traje de neopreno y equipo de snorkel',
      'Tripulación bilingüe experimentada',
      'Charla de seguridad y supervisión',
      'Bebidas calientes y snacks en el regreso',
      'Opción de recogida en hotel disponible'
    ],
    tips: [
      'Swimming is optional - boat viewing is excellent',
      'Water is cold (15-18°C) - wetsuits essential',
      'Morning tours typically have calmer seas',
      'Bring binoculars for birdwatching',
      'Motion sickness medication if you\'re sensitive',
      'Waterproof camera recommended'
    ],
    tipsEs: [
      'Nadar es opcional - la vista desde el bote es excelente',
      'El agua es fría (15-18°C) - trajes de neopreno esenciales',
      'Tours matutinos típicamente tienen mares más tranquilos',
      'Trae binoculares para observación de aves',
      'Medicamento para mareo si eres sensible',
      'Cámara impermeable recomendada'
    ],
    safetyNotes: [
      'Professional crew with rescue training',
      'Life jackets and wetsuits provided',
      'Non-swimmers can stay on boat',
      'Sea lions are wild but generally docile with swimmers',
      'Weather conditions checked before departure'
    ],
    safetyNotesEs: [
      'Tripulación profesional con entrenamiento de rescate',
      'Chalecos salvavidas y trajes de neopreno proporcionados',
      'No nadadores pueden quedarse en el bote',
      'Lobos marinos son salvajes pero generalmente dóciles con nadadores',
      'Condiciones climáticas verificadas antes de la salida'
    ],
    relatedActivities: ['ballestas-islands-tour', 'paracas-reserve-tour', 'lima-coastal-tour'],
    providers: [
      { name: 'Palomino Islands Tours', familyFriendly: true },
      { name: 'Lima Wildlife Adventures', familyFriendly: true },
      { name: 'Callao Sea Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'lake-titicaca-islands-tour',
    name: 'Lake Titicaca Islands Full Day Tour',
    nameEs: 'Tour de Día Completo a las Islas del Lago Titicaca',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Experience the world\'s highest navigable lake and its remarkable island communities on this full-day adventure from Puno. Visit the extraordinary Uros Floating Islands, built entirely from totora reeds, then continue to Taquile Island where UNESCO-recognized textile traditions have been preserved for generations. This tour combines unique cultural encounters, stunning Andean lake scenery, and a traditional island lunch for an unforgettable family experience.',
    descriptionEs: 'Experimenta el lago navegable más alto del mundo y sus notables comunidades isleñas en esta aventura de día completo desde Puno. Visita las extraordinarias Islas Flotantes de los Uros, construidas enteramente de cañas de totora, luego continúa a la Isla Taquile donde tradiciones textiles reconocidas por UNESCO han sido preservadas por generaciones. Este tour combina encuentros culturales únicos, impresionantes paisajes del lago andino y un almuerzo tradicional isleño para una experiencia familiar inolvidable.',
    whatToExpect: 'Board a comfortable boat at Puno port for the journey across Lake Titicaca\'s startlingly blue waters. Your first stop is the Uros Floating Islands, where children are amazed to walk on spongy reed surfaces that give slightly underfoot. A Uros family demonstrates how they build and maintain their islands from totora reeds, and kids can help add new layers. Optional short rides on traditional reed boats are available. Continue across the lake to Taquile Island - the approach reveals dramatic terraced hillsides rising from the water. Climb the 533 stone steps (take your time at this altitude) to the charming village plaza. Watch men skillfully knitting traditional chullos and women weaving colorful textiles. Enjoy a simple but delicious traditional lunch of quinoa soup and lake trout. Browse the textile cooperative for authentic handmade goods before the return journey as the afternoon light turns the mountains gold.',
    whatToExpectEs: 'Aborda un bote cómodo en el puerto de Puno para el viaje a través de las aguas sorprendentemente azules del Lago Titicaca. Tu primera parada son las Islas Flotantes de los Uros, donde los niños se asombran de caminar sobre superficies de caña esponjosas que ceden ligeramente bajo los pies. Una familia Uros demuestra cómo construyen y mantienen sus islas de cañas de totora, y los niños pueden ayudar a añadir nuevas capas. Paseos cortos opcionales en botes tradicionales de caña están disponibles. Continúa a través del lago a la Isla Taquile - la aproximación revela dramáticas laderas en terrazas elevándose desde el agua. Sube los 533 escalones de piedra (tómate tu tiempo a esta altitud) hasta la encantadora plaza del pueblo. Observa a hombres tejiendo hábilmente chullos tradicionales y mujeres tejiendo textiles coloridos. Disfruta un almuerzo tradicional simple pero delicioso de sopa de quinoa y trucha del lago. Explora la cooperativa textil para artículos auténticos hechos a mano antes del viaje de regreso mientras la luz de la tarde tiñe las montañas de oro.',
    highlights: [
      'Walk on unique floating reed islands',
      'Learn how Uros families build island homes',
      'See UNESCO-recognized textile traditions',
      'Traditional Taquileña lunch included',
      'Stunning Lake Titicaca panoramas',
      'Ride traditional totora reed boats',
      'Support local island communities'
    ],
    highlightsEs: [
      'Caminar sobre islas flotantes de caña únicas',
      'Aprender cómo las familias Uros construyen hogares en la isla',
      'Ver tradiciones textiles reconocidas por UNESCO',
      'Almuerzo tradicional Taquileño incluido',
      'Impresionantes panoramas del Lago Titicaca',
      'Navegar en botes tradicionales de caña de totora',
      'Apoyar comunidades isleñas locales'
    ],
    familyRating: 5,
    minAge: 4,
    duration: 'Full day (8-9 hours)',
    durationEs: 'Día completo (8-9 horas)',
    difficulty: 'moderate',
    priceRange: '$35-60 per person',
    priceRangeEs: '$35-60 por persona',
    bestTime: 'Year-round. April-October dry season has clearest weather. Morning departures have calmest waters.',
    bestTimeEs: 'Todo el año. Temporada seca abril-octubre tiene clima más despejado. Salidas matutinas tienen aguas más tranquilas.',
    includes: [
      'Round-trip boat transport',
      'Bilingual guide',
      'Uros community fee',
      'Taquile entrance fee',
      'Traditional lunch on Taquile',
      'Hotel pickup (most tours)'
    ],
    includesEs: [
      'Transporte en bote ida y vuelta',
      'Guía bilingüe',
      'Tarifa comunitaria Uros',
      'Entrada a Taquile',
      'Almuerzo tradicional en Taquile',
      'Recogida del hotel (mayoría de tours)'
    ],
    tips: [
      'Acclimatize in Puno at least one day before',
      'Bring warm layers - lake winds can be cold',
      'Take the Taquile climb slowly at 3,950m altitude',
      'Cash for handicrafts and optional reed boat rides',
      'Sun protection essential at this altitude'
    ],
    tipsEs: [
      'Aclimatarse en Puno al menos un día antes',
      'Trae capas abrigadas - los vientos del lago pueden ser fríos',
      'Sube a Taquile lentamente a 3,950m de altitud',
      'Efectivo para artesanías y paseos opcionales en bote de caña',
      'Protección solar esencial a esta altitud'
    ],
    safetyNotes: [
      'High altitude (3,812-3,950m) - acclimatization essential',
      'Boats have life jackets and safety equipment',
      'Taquile climb is steep but well-maintained steps',
      'Sun exposure intense - UV protection needed',
      'Cold water - no swimming recommended'
    ],
    safetyNotesEs: [
      'Alta altitud (3,812-3,950m) - aclimatación esencial',
      'Botes tienen chalecos salvavidas y equipo de seguridad',
      'Subida a Taquile es empinada pero escalones bien mantenidos',
      'Exposición solar intensa - protección UV necesaria',
      'Agua fría - no se recomienda nadar'
    ],
    relatedActivities: ['puno-cultural-tour', 'sillustani-tour', 'titicaca-homestay'],
    providers: [
      { name: 'Titicaca Explorer', familyFriendly: true },
      { name: 'Puno Tours', familyFriendly: true },
      { name: 'All Ways Travel', familyFriendly: true }
    ]
  },
  {
    slug: 'nazca-lines-flight',
    name: 'Nazca Lines Overflight Experience',
    nameEs: 'Experiencia de Sobrevuelo de las Líneas de Nazca',
    type: 'adventure',
    city: 'nazca',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Soar above one of archaeology\'s greatest mysteries on this thrilling flight over the Nazca Lines. These enormous ancient geoglyphs - some over 300 meters across - can only be truly appreciated from the air, where the famous hummingbird, monkey, spider, and dozens of other designs reveal themselves across the desert canvas. A bucket-list experience that combines aerial adventure with ancient archaeological wonder.',
    descriptionEs: 'Sobrevuela uno de los mayores misterios de la arqueología en este emocionante vuelo sobre las Líneas de Nazca. Estos enormes geoglifos antiguos - algunos de más de 300 metros de ancho - solo pueden apreciarse verdaderamente desde el aire, donde el famoso colibrí, mono, araña y docenas de otros diseños se revelan a través del lienzo del desierto. Una experiencia de lista de deseos que combina aventura aérea con maravilla arqueológica antigua.',
    whatToExpect: 'Arrive at Nazca Airport for your pre-flight briefing, where pilots explain the route and which figures you\'ll see from each side of the aircraft. Board a small Cessna aircraft (typically 6-12 passengers) and take off over the coastal desert. The pilot banks the aircraft left and right to give passengers on both sides clear views of each figure. Watch for the famous hummingbird, with its perfectly proportioned beak and wings. Marvel at the monkey with its curled tail, the spider, the whale, and the mysterious astronaut. Your pilot and guide point out each figure as it appears below. After viewing 12-14 major geoglyphs over 30-35 minutes, return to the airport buzzing with excitement over what you\'ve witnessed. Consider visiting the Maria Reiche museum and observation tower afterward to understand the woman who dedicated her life to protecting these lines.',
    whatToExpectEs: 'Llega al Aeropuerto de Nazca para tu charla pre-vuelo, donde los pilotos explican la ruta y qué figuras verás desde cada lado de la aeronave. Aborda una pequeña aeronave Cessna (típicamente 6-12 pasajeros) y despega sobre el desierto costero. El piloto inclina la aeronave a izquierda y derecha para dar a los pasajeros de ambos lados vistas claras de cada figura. Busca el famoso colibrí, con su pico y alas perfectamente proporcionados. Maravíllate con el mono de cola enroscada, la araña, la ballena y el misterioso astronauta. Tu piloto y guía señalan cada figura mientras aparece abajo. Después de ver 12-14 geoglifos principales durante 30-35 minutos, regresa al aeropuerto emocionado por lo que has presenciado. Considera visitar el museo Maria Reiche y la torre de observación después para entender a la mujer que dedicó su vida a proteger estas líneas.',
    highlights: [
      'See 12-14 major Nazca Line figures',
      'Famous hummingbird, monkey, and spider',
      'UNESCO World Heritage Site',
      'Unique aerial perspective',
      'Professional experienced pilots',
      'One of world\'s great archaeological mysteries',
      'Certificate of flight completion'
    ],
    highlightsEs: [
      'Ver 12-14 figuras principales de las Líneas de Nazca',
      'Famoso colibrí, mono y araña',
      'Sitio Patrimonio de la Humanidad UNESCO',
      'Perspectiva aérea única',
      'Pilotos profesionales experimentados',
      'Uno de los grandes misterios arqueológicos del mundo',
      'Certificado de finalización de vuelo'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '30-35 minutes flight (2-3 hours total experience)',
    durationEs: '30-35 minutos de vuelo (2-3 horas experiencia total)',
    difficulty: 'easy',
    priceRange: '$80-120 per person',
    priceRangeEs: '$80-120 por persona',
    bestTime: 'Year-round. Morning flights (8-10am) have least turbulence. Avoid midday heat.',
    bestTimeEs: 'Todo el año. Vuelos matutinos (8-10am) tienen menos turbulencia. Evitar calor del mediodía.',
    includes: [
      'Nazca Lines overflight',
      'Pre-flight safety briefing',
      'Airport taxes and fees',
      'Certificate of completion',
      'Some tours include hotel pickup'
    ],
    includesEs: [
      'Sobrevuelo de las Líneas de Nazca',
      'Charla de seguridad pre-vuelo',
      'Impuestos y tarifas de aeropuerto',
      'Certificado de finalización',
      'Algunos tours incluyen recogida del hotel'
    ],
    tips: [
      'Take motion sickness medication 30 minutes before flight',
      'Avoid large meals before flying',
      'Window seats standard on small aircraft',
      'Morning flights have smoother conditions',
      'Bring camera with good zoom lens'
    ],
    tipsEs: [
      'Toma medicamento para mareo 30 minutos antes del vuelo',
      'Evita comidas grandes antes de volar',
      'Asientos de ventana estándar en aeronaves pequeñas',
      'Vuelos matutinos tienen condiciones más suaves',
      'Trae cámara con buena lente zoom'
    ],
    safetyNotes: [
      'All flights operated by certified pilots',
      'Aircraft undergo regular safety inspections',
      'Motion sickness common due to banking turns',
      'Weather conditions checked before all flights',
      'Weight limits apply for aircraft balance'
    ],
    safetyNotesEs: [
      'Todos los vuelos operados por pilotos certificados',
      'Aeronaves se someten a inspecciones de seguridad regulares',
      'Mareo común debido a giros inclinados',
      'Condiciones climáticas verificadas antes de todos los vuelos',
      'Límites de peso aplican para balance de aeronave'
    ],
    relatedActivities: ['nazca-archaeology-tour', 'huacachina-adventure', 'paracas-reserve-tour'],
    providers: [
      { name: 'Aero Nazca', familyFriendly: true },
      { name: 'Nazca Flights', familyFriendly: true },
      { name: 'AeroParacas', familyFriendly: true }
    ]
  },
  {
    slug: 'titicaca-homestay',
    name: 'Lake Titicaca Overnight Homestay Experience',
    nameEs: 'Experiencia de Homestay en el Lago Titicaca',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Go beyond day tourism with an overnight homestay on Amantaní or Taquile Island, experiencing authentic Andean island life with a local family. Share traditional meals, learn about ancient customs, participate in evening activities, and witness spectacular sunsets and sunrises over Lake Titicaca. This immersive experience offers families a profound connection with indigenous culture and the chance to support sustainable community tourism.',
    descriptionEs: 'Ve más allá del turismo de día con un homestay de una noche en la Isla Amantaní o Taquile, experimentando vida isleña andina auténtica con una familia local. Comparte comidas tradicionales, aprende sobre costumbres antiguas, participa en actividades nocturnas y presencia espectaculares atardeceres y amaneceres sobre el Lago Titicaca. Esta experiencia inmersiva ofrece a las familias una conexión profunda con la cultura indígena y la oportunidad de apoyar turismo comunitario sustentable.',
    whatToExpect: 'Travel by boat across Lake Titicaca, visiting the Uros Floating Islands en route before continuing to Amantaní or Taquile Island. Upon arrival, meet your host family who will welcome you into their adobe home. The community assigns families on a rotating basis to ensure fair distribution of tourism benefits. Settle into your simple but clean room and join your family for lunch featuring local potatoes, quinoa, and lake fish. Spend the afternoon exploring the island, visiting pre-Inca temple sites, or learning traditional activities from your hosts. Watch the sunset from a hilltop temple with fellow travelers. Evening brings traditional music and dancing in the community hall - families often dress guests in traditional clothing to join the festivities. After a home-cooked dinner by candlelight (electricity is limited), sleep under brilliantly clear Andean skies. Wake to sunrise over the lake before breakfast and the journey home.',
    whatToExpectEs: 'Viaja en bote a través del Lago Titicaca, visitando las Islas Flotantes de los Uros en el camino antes de continuar a la Isla Amantaní o Taquile. Al llegar, conoce a tu familia anfitriona que te dará la bienvenida a su hogar de adobe. La comunidad asigna familias en rotación para asegurar distribución justa de beneficios del turismo. Instálate en tu habitación simple pero limpia y únete a tu familia para el almuerzo con papas locales, quinoa y pescado del lago. Pasa la tarde explorando la isla, visitando sitios de templos pre-Incas, o aprendiendo actividades tradicionales de tus anfitriones. Observa el atardecer desde un templo en la colina con otros viajeros. La noche trae música y baile tradicional en el salón comunitario - las familias a menudo visten a los huéspedes con ropa tradicional para unirse a las festividades. Después de una cena casera a la luz de las velas (la electricidad es limitada), duerme bajo cielos andinos brillantemente claros. Despierta al amanecer sobre el lago antes del desayuno y el viaje de regreso.',
    highlights: [
      'Stay overnight with indigenous island family',
      'Experience authentic Andean island life',
      'Spectacular sunset and sunrise over the lake',
      'Traditional music and dance evening',
      'Learn local customs and traditions',
      'Home-cooked traditional meals',
      'Support sustainable community tourism'
    ],
    highlightsEs: [
      'Quedarse una noche con familia isleña indígena',
      'Experimentar vida isleña andina auténtica',
      'Espectacular atardecer y amanecer sobre el lago',
      'Noche de música y baile tradicional',
      'Aprender costumbres y tradiciones locales',
      'Comidas tradicionales caseras',
      'Apoyar turismo comunitario sustentable'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2 days / 1 night',
    durationEs: '2 días / 1 noche',
    difficulty: 'moderate',
    priceRange: '$55-90 per person',
    priceRangeEs: '$55-90 por persona',
    bestTime: 'Year-round. April-October dry season for clearest skies and sunsets.',
    bestTimeEs: 'Todo el año. Temporada seca abril-octubre para cielos más claros y atardeceres.',
    includes: [
      'Boat transport both days',
      'Homestay accommodation',
      'All meals (lunch, dinner, breakfast)',
      'Community fees',
      'Traditional evening activities',
      'Guide services'
    ],
    includesEs: [
      'Transporte en bote ambos días',
      'Alojamiento en homestay',
      'Todas las comidas (almuerzo, cena, desayuno)',
      'Tarifas comunitarias',
      'Actividades tradicionales nocturnas',
      'Servicios de guía'
    ],
    tips: [
      'Bring warm clothes - island nights are cold',
      'Pack flashlight for evening walks',
      'Basic accommodations - sleeping bags available',
      'Bring small gifts for host family children',
      'Cash for handicrafts - no ATMs on islands'
    ],
    tipsEs: [
      'Trae ropa abrigada - las noches en la isla son frías',
      'Empaca linterna para caminatas nocturnas',
      'Alojamiento básico - bolsas de dormir disponibles',
      'Trae pequeños regalos para niños de la familia anfitriona',
      'Efectivo para artesanías - sin cajeros en las islas'
    ],
    safetyNotes: [
      'High altitude (3,900m) - acclimatize before',
      'Basic but safe accommodations',
      'Cold nights - extra blankets provided',
      'Limited electricity and modern amenities',
      'Boat travel supervised by experienced crews'
    ],
    safetyNotesEs: [
      'Alta altitud (3,900m) - aclimatarse antes',
      'Alojamiento básico pero seguro',
      'Noches frías - mantas extra proporcionadas',
      'Electricidad y amenidades modernas limitadas',
      'Viaje en bote supervisado por tripulaciones experimentadas'
    ],
    relatedActivities: ['lake-titicaca-islands-tour', 'sillustani-tour', 'puno-cultural-tour'],
    providers: [
      { name: 'Titicaca Responsible Tourism', familyFriendly: true },
      { name: 'All Ways Travel', familyFriendly: true },
      { name: 'Puno Homestay Network', familyFriendly: true }
    ]
  },
  {
    slug: 'caral-archaeology-tour',
    name: 'Caral Ancient City Archaeological Tour',
    nameEs: 'Tour Arqueológico a la Ciudad Antigua de Caral',
    type: 'educational',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Journey to the oldest city in the Americas on this educational day trip from Lima. Caral\'s 5,000-year-old pyramids are contemporary with ancient Egypt, yet remained unknown until 1996. This UNESCO World Heritage Site offers families a mind-expanding experience exploring a sophisticated civilization that developed peacefully, without evidence of warfare. Walk among massive pyramids, sunken plazas, and ongoing archaeological excavations that continue to rewrite the history of the New World.',
    descriptionEs: 'Viaja a la ciudad más antigua de las Américas en esta excursión educativa de un día desde Lima. Las pirámides de 5,000 años de Caral son contemporáneas con el antiguo Egipto, pero permanecieron desconocidas hasta 1996. Este Sitio Patrimonio de la Humanidad UNESCO ofrece a las familias una experiencia que expande la mente explorando una civilización sofisticada que se desarrolló pacíficamente, sin evidencia de guerra. Camina entre pirámides masivas, plazas hundidas y excavaciones arqueológicas en curso que continúan reescribiendo la historia del Nuevo Mundo.',
    whatToExpect: 'Depart Lima early morning for the scenic 3-4 hour drive north through coastal desert landscapes. Stop at Supe valley viewpoints overlooking the Pacific Ocean. Arrive at Caral Visitor Center for a brief museum visit introducing the Norte Chico civilization. Join a mandatory guided tour (included) through the 66-hectare site. Your expert guide explains how this 5,000-year-old city predates even the invention of pottery. Marvel at the Pyramid Mayor rising 18 meters, one of six major pyramid complexes. Descend into sunken circular plazas used for ceremonies. See the Altar of Sacred Fire and evidence of sophisticated astronomical observation. Learn about the peaceful society that developed here without weapons or defensive walls. Enjoy lunch at the on-site cafeteria or local restaurant before the return journey. Optional stop at Supe beach for a dip in the Pacific.',
    whatToExpectEs: 'Sal de Lima temprano en la mañana para el viaje escénico de 3-4 horas al norte a través de paisajes de desierto costero. Para en miradores del valle de Supe con vista al Océano Pacífico. Llega al Centro de Visitantes de Caral para una breve visita al museo introduciendo la civilización Norte Chico. Únete a un tour guiado obligatorio (incluido) a través del sitio de 66 hectáreas. Tu guía experto explica cómo esta ciudad de 5,000 años es anterior incluso a la invención de la cerámica. Maravíllate con la Pirámide Mayor de 18 metros, uno de seis complejos piramidales mayores. Desciende a plazas circulares hundidas usadas para ceremonias. Ve el Altar del Fuego Sagrado y evidencia de observación astronómica sofisticada. Aprende sobre la sociedad pacífica que se desarrolló aquí sin armas ni muros defensivos. Disfruta el almuerzo en la cafetería del sitio o restaurante local antes del viaje de regreso. Parada opcional en la playa de Supe para un chapuzón en el Pacífico.',
    highlights: [
      'Oldest city in the Americas (5,000 years old)',
      'Contemporary with Egyptian pyramids',
      'UNESCO World Heritage Site',
      'Six major pyramid complexes',
      'Evidence of peaceful ancient civilization',
      'Ongoing archaeological discoveries',
      'Expert guided tour included'
    ],
    highlightsEs: [
      'Ciudad más antigua de las Américas (5,000 años)',
      'Contemporánea con las pirámides egipcias',
      'Sitio Patrimonio de la Humanidad UNESCO',
      'Seis complejos piramidales mayores',
      'Evidencia de civilización antigua pacífica',
      'Descubrimientos arqueológicos en curso',
      'Tour guiado experto incluido'
    ],
    familyRating: 4,
    minAge: 6,
    duration: 'Full day (10-12 hours from Lima)',
    durationEs: 'Día completo (10-12 horas desde Lima)',
    difficulty: 'easy',
    priceRange: '$85-130 per person',
    priceRangeEs: '$85-130 por persona',
    bestTime: 'Year-round. Coastal desert climate. Morning arrivals avoid afternoon heat.',
    bestTimeEs: 'Todo el año. Clima de desierto costero. Llegadas matutinas evitan calor de la tarde.',
    includes: [
      'Round-trip transport from Lima',
      'Professional bilingual guide',
      'Caral entrance fee',
      'Mandatory site guided tour',
      'Lunch (most tours)',
      'Water and snacks'
    ],
    includesEs: [
      'Transporte ida y vuelta desde Lima',
      'Guía bilingüe profesional',
      'Entrada a Caral',
      'Tour guiado obligatorio del sitio',
      'Almuerzo (mayoría de tours)',
      'Agua y snacks'
    ],
    tips: [
      'Bring sun protection - no shade at the site',
      'Comfortable walking shoes essential',
      'Excellent educational experience for school-age kids',
      'Combine with Supe beach for afternoon swim',
      'Bring cash for optional purchases'
    ],
    tipsEs: [
      'Trae protección solar - sin sombra en el sitio',
      'Zapatos cómodos para caminar esenciales',
      'Excelente experiencia educativa para niños en edad escolar',
      'Combina con playa de Supe para nado en la tarde',
      'Trae efectivo para compras opcionales'
    ],
    safetyNotes: [
      'Low altitude coastal site - no acclimatization needed',
      'Hot desert climate - hydration essential',
      'Easy flat walking throughout site',
      'Stay on designated paths',
      'Guided tours ensure safe exploration'
    ],
    safetyNotesEs: [
      'Sitio costero de baja altitud - no necesita aclimatación',
      'Clima de desierto caliente - hidratación esencial',
      'Caminata fácil y plana en todo el sitio',
      'Permanecer en senderos designados',
      'Tours guiados aseguran exploración segura'
    ],
    relatedActivities: ['pachacamac-tour', 'lima-museum-tour', 'lima-archaeological-sites'],
    providers: [
      { name: 'Peru Archaeological Tours', familyFriendly: true },
      { name: 'Lima Discovery', familyFriendly: true },
      { name: 'Ancient Peru Expeditions', familyFriendly: true }
    ]
  },
  {
    slug: 'sillustani-tour',
    name: 'Sillustani Burial Towers Tour',
    nameEs: 'Tour a las Torres Funerarias de Sillustani',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Visit one of Peru\'s most photogenic archaeological sites on this half-day tour to Sillustani, where mysterious circular burial towers called chullpas rise against the dramatic backdrop of Lake Umayo. Learn about pre-Inca and Inca funerary traditions, spot wild vicuñas on the windswept peninsula, and capture stunning photographs of these engineering marvels. Perfect for combining with a Lake Titicaca islands tour for a full day of Puno region highlights.',
    descriptionEs: 'Visita uno de los sitios arqueológicos más fotogénicos de Perú en este tour de medio día a Sillustani, donde misteriosas torres funerarias circulares llamadas chullpas se alzan contra el dramático telón de fondo del Lago Umayo. Aprende sobre tradiciones funerarias pre-Incas e Incas, avista vicuñas salvajes en la península azotada por el viento y captura fotografías impresionantes de estas maravillas de la ingeniería. Perfecto para combinar con un tour a las islas del Lago Titicaca para un día completo de lo mejor de la región de Puno.',
    whatToExpect: 'Depart Puno in the early afternoon for the scenic 45-minute drive through the altiplano, passing traditional Aymara communities and grazing alpacas. Arrive at Sillustani as the afternoon light begins to warm the ancient stone towers. Your guide explains how the Colla people built these remarkable structures wider at the top than the base, defying conventional engineering. Explore the various chullpas, learning how they housed mummified nobility with their grave goods for the afterlife. Watch for wild vicuñas that often graze near the towers. Walk the peninsula trail for spectacular views across Lake Umayo. Visit the small museum displaying artifacts and learn about the Spanish looting that occurred in colonial times. Return to Puno as the golden hour light creates magical photo opportunities with the towers silhouetted against the lake.',
    whatToExpectEs: 'Sal de Puno temprano por la tarde para el viaje escénico de 45 minutos a través del altiplano, pasando comunidades tradicionales Aymara y alpacas pastando. Llega a Sillustani cuando la luz de la tarde comienza a calentar las antiguas torres de piedra. Tu guía explica cómo el pueblo Colla construyó estas notables estructuras más anchas en la parte superior que en la base, desafiando la ingeniería convencional. Explora las varias chullpas, aprendiendo cómo albergaban a la nobleza momificada con sus objetos funerarios para la otra vida. Busca vicuñas salvajes que frecuentemente pastan cerca de las torres. Camina por el sendero de la península para vistas espectaculares del Lago Umayo. Visita el pequeño museo que exhibe artefactos y aprende sobre el saqueo español que ocurrió en tiempos coloniales. Regresa a Puno mientras la luz de la hora dorada crea oportunidades fotográficas mágicas con las torres silueteadas contra el lago.',
    highlights: [
      'See dramatic pre-Inca burial towers',
      'Stunning Lake Umayo backdrop',
      'Spot wild vicuñas grazing',
      'Golden hour photography opportunities',
      'Learn about ancient burial practices',
      'Visit local Aymara communities',
      'Small museum with artifacts'
    ],
    highlightsEs: [
      'Ver dramáticas torres funerarias pre-Incas',
      'Impresionante telón de fondo del Lago Umayo',
      'Avistar vicuñas salvajes pastando',
      'Oportunidades de fotografía de hora dorada',
      'Aprender sobre prácticas funerarias antiguas',
      'Visitar comunidades locales Aymara',
      'Pequeño museo con artefactos'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$25-45 per person',
    priceRangeEs: '$25-45 por persona',
    bestTime: 'Year-round. Afternoon tours (2-3pm departure) have best photography light.',
    bestTimeEs: 'Todo el año. Tours de tarde (salida 2-3pm) tienen mejor luz para fotografía.',
    includes: [
      'Hotel pickup and dropoff',
      'Private transportation',
      'Professional bilingual guide',
      'Site entrance fee',
      'Museum visit'
    ],
    includesEs: [
      'Recogida y regreso al hotel',
      'Transporte privado',
      'Guía bilingüe profesional',
      'Entrada al sitio',
      'Visita al museo'
    ],
    tips: [
      'Afternoon tours have best light for photos',
      'Dress in warm layers - site is very windy',
      'Combine with morning Lake Titicaca tour',
      'Bring snacks - no food services at site',
      'Local families sell handicrafts at entrance'
    ],
    tipsEs: [
      'Tours de tarde tienen mejor luz para fotos',
      'Vístete en capas abrigadas - el sitio es muy ventoso',
      'Combina con tour matutino del Lago Titicaca',
      'Trae snacks - sin servicios de comida en el sitio',
      'Familias locales venden artesanías en la entrada'
    ],
    safetyNotes: [
      'High altitude (3,840m) - acclimatize first',
      'Very windy conditions common',
      'Uneven terrain - sturdy footwear recommended',
      'No railings near cliff edges - supervise children',
      'Sun protection essential at altitude'
    ],
    safetyNotesEs: [
      'Alta altitud (3,840m) - aclimatarse primero',
      'Condiciones muy ventosas comunes',
      'Terreno irregular - calzado resistente recomendado',
      'Sin barandas cerca de bordes de acantilados - supervisar niños',
      'Protección solar esencial a esta altitud'
    ],
    relatedActivities: ['lake-titicaca-islands-tour', 'titicaca-homestay', 'puno-cultural-tour'],
    providers: [
      { name: 'Puno Travel Tours', familyFriendly: true },
      { name: 'All Ways Travel', familyFriendly: true },
      { name: 'Titicaca Explorer', familyFriendly: true }
    ]
  },
  {
    slug: 'pachacamac-tour',
    name: 'Pachacamac Archaeological Tour',
    nameEs: 'Tour Arqueológico a Pachacamac',
    type: 'cultural',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Explore Lima\'s most important archaeological site on this half-day tour to Pachacamac, the ancient pilgrimage center that drew worshippers for nearly 2,000 years. Walk among massive adobe pyramids, visit the excellent on-site museum, and learn how multiple civilizations - Lima, Wari, Ychsma, and Inca - left their mark on this sacred site. An easy escape from Lima\'s bustle that reveals Peru\'s rich pre-Columbian coastal heritage.',
    descriptionEs: 'Explora el sitio arqueológico más importante de Lima en este tour de medio día a Pachacamac, el antiguo centro de peregrinación que atrajo adoradores por casi 2,000 años. Camina entre masivas pirámides de adobe, visita el excelente museo en el sitio y aprende cómo múltiples civilizaciones - Lima, Wari, Ychsma e Inca - dejaron su marca en este sitio sagrado. Un escape fácil del bullicio de Lima que revela el rico patrimonio costero precolombino de Perú.',
    whatToExpect: 'Your guide picks you up from your Lima hotel for the 40-minute drive south through coastal desert landscapes. Begin at the modern Pachacamac Museum, where exhibits introduce the site\'s fascinating multi-layered history and display remarkable artifacts including the famous Pachacamac Idol. Continue into the 600-hectare archaeological complex, visiting the Inca Temple of the Sun with its commanding views to the Pacific Ocean. Explore the Acllawasi (house of chosen women) and Painted Temple with its colorful murals. Walk through the main plaza where pilgrims once gathered seeking prophecies from the oracle. Your guide brings the site to life with stories of its various occupations and the Spanish conquistadors who arrived in 1533. Optionally rent bicycles to cover more ground. Return to Lima with a deeper understanding of Peru\'s coastal civilizations.',
    whatToExpectEs: 'Tu guía te recoge de tu hotel en Lima para el viaje de 40 minutos al sur a través de paisajes de desierto costero. Comienza en el moderno Museo Pachacamac, donde exhibiciones introducen la fascinante historia multicapa del sitio y exhiben notables artefactos incluyendo el famoso Ídolo de Pachacamac. Continúa al complejo arqueológico de 600 hectáreas, visitando el Templo del Sol Inca con sus vistas dominantes al Océano Pacífico. Explora el Acllawasi (casa de mujeres escogidas) y el Templo Pintado con sus murales coloridos. Camina por la plaza principal donde peregrinos una vez se reunían buscando profecías del oráculo. Tu guía da vida al sitio con historias de sus varias ocupaciones y los conquistadores españoles que llegaron en 1533. Opcionalmente alquila bicicletas para cubrir más terreno. Regresa a Lima con una comprensión más profunda de las civilizaciones costeras de Perú.',
    highlights: [
      'Major pilgrimage site for 2,000 years',
      'Excellent modern museum',
      'Multiple civilizations represented',
      'Inca Temple of the Sun',
      'Pacific Ocean views',
      'Only 40 minutes from Lima',
      'Optional bicycle exploration'
    ],
    highlightsEs: [
      'Importante sitio de peregrinación por 2,000 años',
      'Excelente museo moderno',
      'Múltiples civilizaciones representadas',
      'Templo del Sol Inca',
      'Vistas al Océano Pacífico',
      'Solo 40 minutos de Lima',
      'Exploración opcional en bicicleta'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '4-5 hours',
    durationEs: '4-5 horas',
    difficulty: 'easy',
    priceRange: '$45-70 per person',
    priceRangeEs: '$45-70 por persona',
    bestTime: 'Year-round. Summer (December-March) has clearer skies. Morning tours avoid afternoon heat.',
    bestTimeEs: 'Todo el año. Verano (diciembre-marzo) tiene cielos más claros. Tours matutinos evitan calor de la tarde.',
    includes: [
      'Hotel pickup and dropoff',
      'Private transportation',
      'Professional bilingual guide',
      'Site and museum entrance',
      'Bottled water'
    ],
    includesEs: [
      'Recogida y regreso al hotel',
      'Transporte privado',
      'Guía bilingüe profesional',
      'Entrada al sitio y museo',
      'Agua embotellada'
    ],
    tips: [
      'Start with museum for context before exploring',
      'Bring sun protection - limited shade at site',
      'Comfortable walking shoes essential',
      'Bicycle rental available for covering large site',
      'Combine with southern Lima beaches afterward'
    ],
    tipsEs: [
      'Comienza con museo para contexto antes de explorar',
      'Trae protección solar - sombra limitada en el sitio',
      'Zapatos cómodos para caminar esenciales',
      'Alquiler de bicicletas disponible para cubrir gran sitio',
      'Combina con playas del sur de Lima después'
    ],
    safetyNotes: [
      'Low altitude - no acclimatization needed',
      'Hot in summer - hydration important',
      'Easy flat walking throughout',
      'Stay on designated paths',
      'Some areas still under excavation'
    ],
    safetyNotesEs: [
      'Baja altitud - no necesita aclimatación',
      'Caliente en verano - hidratación importante',
      'Caminata fácil y plana en todo el recorrido',
      'Permanecer en senderos designados',
      'Algunas áreas aún bajo excavación'
    ],
    relatedActivities: ['caral-archaeology-tour', 'lima-museum-tour', 'lima-food-tour'],
    providers: [
      { name: 'Lima Discovery', familyFriendly: true },
      { name: 'Peru Archaeological Tours', familyFriendly: true },
      { name: 'Lima Day Tours', familyFriendly: true }
    ]
  },
  {
    slug: 'tambopata-amazon-adventure',
    name: 'Tambopata Amazon Family Adventure',
    nameEs: 'Aventura Amazónica Familiar en Tambopata',
    type: 'nature',
    city: 'puerto-maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'Immerse your family in one of Earth\'s most biodiverse ecosystems on this unforgettable Tambopata rainforest adventure. From watching hundreds of macaws gather at clay licks to spotting giant river otters on oxbow lakes, from piranha fishing to night walks searching for caimans, this jungle experience delivers once-in-a-lifetime wildlife encounters. Based at comfortable eco-lodges deep in the reserve, families discover the magic of the Amazon guided by expert naturalists.',
    descriptionEs: 'Sumerge a tu familia en uno de los ecosistemas más biodiversos de la Tierra en esta inolvidable aventura en la selva de Tambopata. Desde observar cientos de guacamayos reunirse en colpas hasta avistar nutrias gigantes de río en lagos de herradura, desde pescar pirañas hasta caminatas nocturnas buscando caimanes, esta experiencia en la selva ofrece encuentros con vida silvestre únicos en la vida. Basados en cómodos eco-lodges en lo profundo de la reserva, las familias descubren la magia de la Amazonía guiados por naturalistas expertos.',
    whatToExpect: 'Fly into Puerto Maldonado and transfer by motorized canoe deep into the Tambopata Reserve (1-5 hours depending on lodge location). Settle into your comfortable jungle lodge, elevated on stilts with screened rooms and rainforest views. Each day brings new adventures: Early morning macaw clay lick excursions reveal hundreds of colorful parrots gathering to eat mineral-rich clay. Canoe to oxbow lakes searching for giant river otters, the world\'s largest otter species. Walk canopy bridges and platforms high above the forest floor for a bird\'s-eye view. Try piranha fishing (catch and release) - kids love the excitement. Night walks with spotlights reveal caimans, frogs, spiders, and nocturnal mammals. Visit indigenous communities to learn traditional jungle skills. Between excursions, relax at the lodge, spot monkeys from the hammock deck, and listen to the symphony of the rainforest.',
    whatToExpectEs: 'Vuela a Puerto Maldonado y transfiere en canoa motorizada profundamente en la Reserva Tambopata (1-5 horas dependiendo de la ubicación del lodge). Instálate en tu cómodo lodge de selva, elevado sobre pilotes con habitaciones con mallas y vistas a la selva. Cada día trae nuevas aventuras: Excursiones matutinas a colpas de guacamayos revelan cientos de coloridos loros reuniéndose para comer arcilla rica en minerales. Navega en canoa a lagos de herradura buscando nutrias gigantes de río, la especie de nutria más grande del mundo. Camina por puentes y plataformas de dosel muy arriba del suelo del bosque para una vista a ojo de pájaro. Prueba pescar pirañas (captura y suelta) - a los niños les encanta la emoción. Caminatas nocturnas con linternas revelan caimanes, ranas, arañas y mamíferos nocturnos. Visita comunidades indígenas para aprender habilidades tradicionales de la selva. Entre excursiones, relájate en el lodge, avista monos desde la terraza de hamacas y escucha la sinfonía de la selva.',
    highlights: [
      'World-famous macaw clay licks',
      'Giant river otter sightings',
      'Piranha fishing excursions',
      'Canopy walkways and platforms',
      'Night wildlife walks',
      'Indigenous community visits',
      'Expert naturalist guides'
    ],
    highlightsEs: [
      'Colpas de guacamayos mundialmente famosas',
      'Avistamientos de nutrias gigantes de río',
      'Excursiones de pesca de pirañas',
      'Pasarelas y plataformas de dosel',
      'Caminatas nocturnas de fauna',
      'Visitas a comunidades indígenas',
      'Guías naturalistas expertos'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '3-5 days recommended',
    durationEs: '3-5 días recomendados',
    difficulty: 'moderate',
    priceRange: '$400-800 per person (3-4 day all-inclusive)',
    priceRangeEs: '$400-800 por persona (3-4 días todo incluido)',
    bestTime: 'Year-round. Dry season (May-October) easier travel. Wet season sees more wildlife activity.',
    bestTimeEs: 'Todo el año. Temporada seca (mayo-octubre) viaje más fácil. Temporada húmeda tiene más actividad de fauna.',
    includes: [
      'Puerto Maldonado transfers',
      'Jungle lodge accommodation',
      'All meals and water',
      'Expert naturalist guides',
      'All excursions and activities',
      'Rubber boots and rain ponchos'
    ],
    includesEs: [
      'Traslados en Puerto Maldonado',
      'Alojamiento en lodge de selva',
      'Todas las comidas y agua',
      'Guías naturalistas expertos',
      'Todas las excursiones y actividades',
      'Botas de goma y ponchos de lluvia'
    ],
    tips: [
      'Book well in advance for dry season',
      'Pack light, breathable clothing',
      'Bring binoculars and camera with good zoom',
      'Insect repellent with DEET essential',
      'Deeper lodges see more wildlife'
    ],
    tipsEs: [
      'Reserva con anticipación para temporada seca',
      'Empaca ropa ligera y transpirable',
      'Trae binoculares y cámara con buen zoom',
      'Repelente de insectos con DEET esencial',
      'Lodges más profundos ven más fauna'
    ],
    safetyNotes: [
      'Low altitude - no acclimatization needed',
      'Lodges have basic medical supplies',
      'Always follow guide instructions',
      'Insect-borne diseases - prophylaxis recommended',
      'Wildlife is wild - maintain safe distances'
    ],
    safetyNotesEs: [
      'Baja altitud - no necesita aclimatación',
      'Lodges tienen suministros médicos básicos',
      'Siempre seguir instrucciones del guía',
      'Enfermedades transmitidas por insectos - profilaxis recomendada',
      'La fauna es salvaje - mantener distancias seguras'
    ],
    relatedActivities: ['sandoval-lake-tour', 'amazon-canopy-walk', 'indigenous-community-visit'],
    providers: [
      { name: 'Inkaterra Reserva Amazonica', familyFriendly: true },
      { name: 'Refugio Amazonas', familyFriendly: true },
      { name: 'Tambopata Research Center', familyFriendly: true }
    ]
  },
  {
    slug: 'puno-cultural-tour',
    name: 'Puno City Cultural Walking Tour',
    nameEs: 'Tour Cultural a Pie por la Ciudad de Puno',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'Discover the vibrant cultural capital of Peru\'s altiplano on this walking tour through Puno\'s colonial streets and bustling markets. Known as the "Folklore Capital of Peru," Puno maintains rich traditions of music, dance, and costume that come alive during numerous festivals throughout the year. This introduction to high-altitude Andean life prepares families for deeper exploration of the Lake Titicaca region.',
    descriptionEs: 'Descubre la vibrante capital cultural del altiplano peruano en este tour a pie por las calles coloniales y mercados bulliciosos de Puno. Conocida como la "Capital del Folklore de Perú," Puno mantiene ricas tradiciones de música, baile y vestimenta que cobran vida durante numerosos festivales a lo largo del año. Esta introducción a la vida andina de alta altitud prepara a las familias para una exploración más profunda de la región del Lago Titicaca.',
    whatToExpect: 'Meet your guide at the central Plaza de Armas, dominated by the baroque Cathedral of Puno with its ornate stone facade. Learn about Puno\'s history as a silver mining center and its evolution into Peru\'s folklore capital. Walk through colonial streets admiring traditional architecture and hearing stories of the city\'s festivals - particularly the famous Virgen de la Candelaria celebration. Visit the Carlos Dreyer Museum to see pre-Columbian artifacts from the Lake Titicaca region. Explore the colorful Central Market where vendors sell everything from medicinal herbs to traditional clothing. Watch artisans at work in nearby workshops. Stop at a local coffee shop to try coca tea and learn how locals manage the altitude. End at the Mirador Condor with panoramic views over the city and glimpses of Lake Titicaca in the distance. Your guide shares tips for your upcoming Lake Titicaca adventures.',
    whatToExpectEs: 'Encuentra a tu guía en la Plaza de Armas central, dominada por la barroca Catedral de Puno con su ornamentada fachada de piedra. Aprende sobre la historia de Puno como centro minero de plata y su evolución a capital del folklore de Perú. Camina por calles coloniales admirando arquitectura tradicional y escuchando historias de los festivales de la ciudad - particularmente la famosa celebración de la Virgen de la Candelaria. Visita el Museo Carlos Dreyer para ver artefactos precolombinos de la región del Lago Titicaca. Explora el colorido Mercado Central donde vendedores venden desde hierbas medicinales hasta ropa tradicional. Observa artesanos trabajando en talleres cercanos. Para en una cafetería local para probar té de coca y aprende cómo los locales manejan la altitud. Termina en el Mirador Cóndor con vistas panorámicas de la ciudad y vistazos del Lago Titicaca en la distancia. Tu guía comparte consejos para tus próximas aventuras en el Lago Titicaca.',
    highlights: [
      'Baroque Cathedral of Puno',
      'Carlos Dreyer Museum',
      'Colorful central market',
      'Traditional artisan workshops',
      'Learn about folklore traditions',
      'Panoramic city viewpoint',
      'Coca tea experience'
    ],
    highlightsEs: [
      'Catedral barroca de Puno',
      'Museo Carlos Dreyer',
      'Colorido mercado central',
      'Talleres artesanales tradicionales',
      'Aprender sobre tradiciones folklóricas',
      'Mirador panorámico de la ciudad',
      'Experiencia de té de coca'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'easy',
    priceRange: '$25-45 per person',
    priceRangeEs: '$25-45 por persona',
    bestTime: 'Year-round. February for Candelaria Festival. April-October dry season best.',
    bestTimeEs: 'Todo el año. Febrero para Festival de la Candelaria. Temporada seca abril-octubre mejor.',
    includes: [
      'Professional local guide',
      'Museum entrance fees',
      'Coca tea',
      'Small snack',
      'Market tastings'
    ],
    includesEs: [
      'Guía local profesional',
      'Entradas a museos',
      'Té de coca',
      'Pequeño snack',
      'Degustaciones en el mercado'
    ],
    tips: [
      'Schedule for first day to acclimatize gently',
      'Walk slowly - altitude is challenging',
      'Coca tea helps with altitude symptoms',
      'Mornings less crowded at market',
      'February Candelaria Festival is spectacular'
    ],
    tipsEs: [
      'Programa para el primer día para aclimatarte gentilmente',
      'Camina despacio - la altitud es desafiante',
      'Té de coca ayuda con síntomas de altitud',
      'Mañanas menos concurridas en el mercado',
      'Festival de la Candelaria en febrero es espectacular'
    ],
    safetyNotes: [
      'Very high altitude (3,830m) - acclimatize slowly',
      'Take breaks as needed',
      'Stay hydrated',
      'Watch belongings in market crowds',
      'Easy flat walking throughout'
    ],
    safetyNotesEs: [
      'Altitud muy alta (3,830m) - aclimatarse lentamente',
      'Toma descansos según necesidad',
      'Mantente hidratado',
      'Cuida pertenencias en multitudes del mercado',
      'Caminata fácil y plana en todo el recorrido'
    ],
    relatedActivities: ['lake-titicaca-islands-tour', 'sillustani-tour', 'titicaca-homestay'],
    providers: [
      { name: 'Puno City Tours', familyFriendly: true },
      { name: 'All Ways Travel', familyFriendly: true },
      { name: 'Local Puno Guides', familyFriendly: true }
    ]
  },
  {
    slug: 'santa-catalina-monastery-tour',
    name: 'Santa Catalina Monastery Guided Tour',
    nameEs: 'Tour Guiado por el Monasterio de Santa Catalina',
    type: 'cultural',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Step into a preserved 16th-century city-within-a-city at the stunning Santa Catalina Monastery, one of Peru\'s most important colonial religious sites. This UNESCO-caliber complex covers 20,000 square meters of winding streets, plazas, and beautifully restored cloisters painted in vivid terracotta, blue, and white. For over 400 years, Dominican nuns lived in complete seclusion here, creating a unique world that families can now explore with expert guides.',
    descriptionEs: 'Entra en una ciudad dentro de una ciudad preservada del siglo XVI en el impresionante Monasterio de Santa Catalina, uno de los sitios religiosos coloniales más importantes de Perú. Este complejo de calibre UNESCO cubre 20,000 metros cuadrados de calles sinuosas, plazas y claustros bellamente restaurados pintados en vivos colores terracota, azul y blanco. Por más de 400 años, monjas dominicas vivieron aquí en completa reclusión, creando un mundo único que las familias ahora pueden explorar con guías expertos.',
    whatToExpect: 'Enter through the main portal into a world frozen in time. Your guide leads you through narrow cobblestone streets named after Spanish cities, explaining how wealthy Spanish families sent their second daughters here with rich dowries. Visit the Orange Tree Cloister, the first area novices experienced, with its peaceful garden and ancient trees. Explore the communal kitchen with original clay ovens and copper pots that fed hundreds of nuns. Walk through the Large Cloister with its distinctive terracotta walls and see the communal laundry area with stone channels. Visit a restored cell showing how nuns lived with their servants and fine furnishings. See the art gallery with colonial religious paintings. Climb to rooftop terraces for stunning views of the monastery\'s colorful domes against the backdrop of snow-capped Misti volcano. Children love the maze-like layout and vibrant colors.',
    whatToExpectEs: 'Entra por el portal principal a un mundo congelado en el tiempo. Tu guía te lleva por estrechas calles empedradas con nombres de ciudades españolas, explicando cómo familias españolas adineradas enviaban a sus segundas hijas aquí con ricas dotes. Visita el Claustro de los Naranjos, la primera área que experimentaban las novicias, con su jardín pacífico y árboles antiguos. Explora la cocina comunal con hornos de arcilla originales y ollas de cobre que alimentaban a cientos de monjas. Camina por el Claustro Grande con sus distintivas paredes terracota y ve el área de lavandería comunal con canales de piedra. Visita una celda restaurada mostrando cómo vivían las monjas con sus sirvientas y finos muebles. Ve la galería de arte con pinturas religiosas coloniales. Sube a terrazas en la azotea para vistas impresionantes de las coloridas cúpulas del monasterio contra el fondo del volcán nevado Misti. A los niños les encanta el diseño laberíntico y los colores vibrantes.',
    highlights: [
      'Vivid terracotta and blue streets',
      'Orange Tree Cloister gardens',
      'Original colonial kitchens',
      'Restored nun cells with furnishings',
      'Colonial religious art gallery',
      'Rooftop volcano views',
      'Maze-like exploration for children'
    ],
    highlightsEs: [
      'Calles de vivos colores terracota y azul',
      'Jardines del Claustro de los Naranjos',
      'Cocinas coloniales originales',
      'Celdas de monjas restauradas con muebles',
      'Galería de arte religioso colonial',
      'Vistas de volcanes desde la azotea',
      'Exploración laberíntica para niños'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    priceRange: '$15-35 per person',
    priceRangeEs: '$15-35 por persona',
    bestTime: 'Year-round. Morning light best for photography. Evening tours available with atmospheric lighting.',
    bestTimeEs: 'Todo el año. Luz matutina mejor para fotografía. Tours nocturnos disponibles con iluminación atmosférica.',
    includes: [
      'Professional bilingual guide',
      'Entrance fees',
      'Access to all open areas',
      'Art gallery visit',
      'Photo opportunities'
    ],
    includesEs: [
      'Guía profesional bilingüe',
      'Entradas incluidas',
      'Acceso a todas las áreas abiertas',
      'Visita a galería de arte',
      'Oportunidades fotográficas'
    ],
    tips: [
      'Book evening tours for magical lighting',
      'Comfortable walking shoes essential',
      'Photography allowed throughout',
      'Small café inside for refreshments',
      'Adjacent gift shop has quality crafts'
    ],
    tipsEs: [
      'Reserva tours nocturnos para iluminación mágica',
      'Zapatos cómodos para caminar esenciales',
      'Fotografía permitida en todo el lugar',
      'Pequeño café adentro para refrigerios',
      'Tienda de regalos adyacente tiene artesanías de calidad'
    ],
    safetyNotes: [
      'Flat, easy walking on cobblestones',
      'Some narrow passages - watch small children',
      'Moderate altitude (2,335m) - minimal impact',
      'Shaded areas available for rest',
      'Accessible routes available'
    ],
    safetyNotesEs: [
      'Caminata plana y fácil sobre adoquines',
      'Algunos pasajes estrechos - vigilar niños pequeños',
      'Altitud moderada (2,335m) - impacto mínimo',
      'Áreas sombreadas disponibles para descanso',
      'Rutas accesibles disponibles'
    ],
    relatedActivities: ['arequipa-city-tour', 'colca-canyon-tour', 'sillar-quarries-tour'],
    providers: [
      { name: 'Santa Catalina Official Tours', familyFriendly: true },
      { name: 'Arequipa Walking Tours', familyFriendly: true },
      { name: 'Peru Traditions', familyFriendly: true }
    ]
  },
  {
    slug: 'iquitos-amazon-adventure',
    name: 'Iquitos Amazon Rainforest Family Adventure',
    nameEs: 'Aventura Familiar en la Selva Amazónica de Iquitos',
    type: 'nature',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'Experience the world\'s largest rainforest from Peru\'s Amazon gateway city of Iquitos, the largest city on Earth unreachable by road. This unique adventure combines wildlife watching, indigenous community visits, and river exploration in the Northern Amazon, where the biodiversity differs from the southern Tambopata region. Pink river dolphins, giant water lilies, and exotic birds await families ready for an unforgettable jungle experience.',
    descriptionEs: 'Experimenta la selva tropical más grande del mundo desde la ciudad puerta de entrada al Amazonas de Perú, Iquitos, la ciudad más grande de la Tierra inalcanzable por carretera. Esta aventura única combina observación de fauna, visitas a comunidades indígenas y exploración fluvial en el Amazonas Norte, donde la biodiversidad difiere de la región sureña de Tambopata. Delfines rosados de río, nenúfares gigantes y aves exóticas esperan a las familias listas para una experiencia selvática inolvidable.',
    whatToExpect: 'Arrive in Iquitos by air and transfer by boat to your jungle lodge along the Amazon or its tributaries. Settle into comfortable accommodations designed for families with screened rooms and river views. Take your first canoe excursion at sunset when wildlife is most active, watching for pink and grey dolphins playing in the river. The next morning, wake early for birdwatching - the Northern Amazon hosts different species than the south, including unique tanagers and antbirds. Visit a local village to learn how indigenous communities live sustainably in the forest, with children participating in traditional crafts. Navigate through flooded forest during high-water season or walk jungle trails during low water. Fish for piranha (catch and release for families) and learn about medicinal plants used for centuries by shamans. Night excursions reveal caimans, tarantulas, and nocturnal monkeys. Visit the famous Victoria Regia giant water lily ponds.',
    whatToExpectEs: 'Llega a Iquitos por aire y traslado en bote a tu lodge en la selva a lo largo del Amazonas o sus tributarios. Instálate en alojamientos cómodos diseñados para familias con habitaciones con mallas y vistas al río. Toma tu primera excursión en canoa al atardecer cuando la fauna está más activa, observando delfines rosados y grises jugando en el río. A la mañana siguiente, despierta temprano para observación de aves - el Amazonas Norte alberga especies diferentes al sur, incluyendo tangaras y hormigueros únicos. Visita un pueblo local para aprender cómo las comunidades indígenas viven sustentablemente en el bosque, con niños participando en artesanías tradicionales. Navega por el bosque inundado durante temporada de aguas altas o camina senderos de la selva durante aguas bajas. Pesca pirañas (atrapar y liberar para familias) y aprende sobre plantas medicinales usadas por siglos por chamanes. Excursiones nocturnas revelan caimanes, tarántulas y monos nocturnos. Visita los famosos estanques de nenúfares gigantes Victoria Regia.',
    highlights: [
      'Pink river dolphin watching',
      'Giant Victoria Regia water lilies',
      'Indigenous community cultural visit',
      'Piranha fishing experience',
      'Night wildlife excursions',
      'Unique Northern Amazon species',
      'Canoe through flooded forest'
    ],
    highlightsEs: [
      'Observación de delfines rosados de río',
      'Nenúfares gigantes Victoria Regia',
      'Visita cultural a comunidad indígena',
      'Experiencia de pesca de pirañas',
      'Excursiones nocturnas de fauna',
      'Especies únicas del Amazonas Norte',
      'Canoa por bosque inundado'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '3-5 days',
    durationEs: '3-5 días',
    difficulty: 'moderate',
    priceRange: '$400-800 per person multi-day',
    priceRangeEs: '$400-800 por persona multi-día',
    bestTime: 'Year-round. December-May high water for flooded forest. June-November low water for trails.',
    bestTimeEs: 'Todo el año. Diciembre-mayo aguas altas para bosque inundado. Junio-noviembre aguas bajas para senderos.',
    includes: [
      'Round-trip boat transfers from Iquitos',
      'Lodge accommodation',
      'All meals',
      'Expert naturalist guides',
      'All excursions and activities',
      'Rubber boots and rain ponchos'
    ],
    includesEs: [
      'Traslados en bote ida y vuelta desde Iquitos',
      'Alojamiento en lodge',
      'Todas las comidas',
      'Guías naturalistas expertos',
      'Todas las excursiones y actividades',
      'Botas de goma y ponchos de lluvia'
    ],
    tips: [
      'Fly from Lima - no roads to Iquitos',
      'Pack light, breathable, long clothing',
      'Insect repellent with DEET essential',
      'Binoculars greatly enhance wildlife viewing',
      'High-water season best for dolphin encounters'
    ],
    tipsEs: [
      'Vuela desde Lima - no hay carreteras a Iquitos',
      'Empaca ropa ligera, transpirable y larga',
      'Repelente de insectos con DEET esencial',
      'Binoculares mejoran mucho la observación de fauna',
      'Temporada de aguas altas mejor para encuentros con delfines'
    ],
    safetyNotes: [
      'Low altitude - no acclimatization needed',
      'Lodges have medical supplies and radios',
      'Always follow guide instructions',
      'Insect-borne disease prophylaxis recommended',
      'Safe swimming areas designated by guides'
    ],
    safetyNotesEs: [
      'Baja altitud - no necesita aclimatación',
      'Lodges tienen suministros médicos y radios',
      'Siempre seguir instrucciones del guía',
      'Profilaxis para enfermedades transmitidas por insectos recomendada',
      'Áreas de nado seguras designadas por guías'
    ],
    relatedActivities: ['tambopata-amazon-adventure', 'amazon-canopy-walk', 'pacaya-samiria-expedition'],
    providers: [
      { name: 'Ceiba Tops Lodge', familyFriendly: true },
      { name: 'Explorama Lodges', familyFriendly: true },
      { name: 'Amazon Yarapa River Lodge', familyFriendly: true }
    ]
  },
  {
    slug: 'salinas-aguada-blanca-safari',
    name: 'Salinas y Aguada Blanca Vicuña Safari',
    nameEs: 'Safari de Vicuñas en Salinas y Aguada Blanca',
    type: 'nature',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    description: 'Embark on an unforgettable wildlife safari through Peru\'s stunning Salinas y Aguada Blanca National Reserve, home to the highest concentration of wild vicuñas in the country. This high-altitude adventure traverses otherworldly volcanic landscapes, pristine salt flats, and altiplano grasslands where herds of these elegant camelids roam freely alongside Andean flamingos, giant coots, and soaring condors.',
    descriptionEs: 'Emprende un safari de fauna inolvidable a través de la impresionante Reserva Nacional Salinas y Aguada Blanca de Perú, hogar de la mayor concentración de vicuñas salvajes del país. Esta aventura de alta altitud atraviesa paisajes volcánicos de otro mundo, salares prístinos y pastizales del altiplano donde manadas de estos elegantes camélidos deambulan libremente junto a flamencos andinos, gallaretas gigantes y cóndores sobrevolando.',
    whatToExpect: 'Depart Arequipa early morning, ascending through terraced farmland as the imposing Misti volcano dominates the horizon. Enter the reserve through Pampa Cañahuas, where your first vicuña sightings occur - these golden-fleeced wild relatives of the llama graze in herds, their wool once reserved exclusively for Inca royalty. Stop at designated viewpoints where vicuñas have grown accustomed to vehicles, allowing excellent photography opportunities. Continue to the Tocra wetlands, a high-altitude lagoon system where three species of flamingo feed in the shallow waters alongside rare Andean avocets and puna ibis. Watch for Andean condors soaring above the volcanic peaks. Drive through landscapes of pumice stone formations and volcanic cones before reaching Salinas Lagoon at 4,300 meters, its white salt-encrusted shores contrasting with flamingo pink reflections. Visit the vicuña counting stations and learn about conservation efforts. Optional stop at El Misti or Chachani volcano viewpoints for the adventurous.',
    whatToExpectEs: 'Parte de Arequipa temprano en la mañana, ascendiendo por tierras de cultivo en terrazas mientras el imponente volcán Misti domina el horizonte. Entra a la reserva por Pampa Cañahuas, donde ocurren tus primeros avistamientos de vicuñas - estos parientes salvajes de la llama con vellón dorado pastan en manadas, su lana una vez reservada exclusivamente para la realeza Inca. Para en miradores designados donde las vicuñas se han acostumbrado a los vehículos, permitiendo excelentes oportunidades fotográficas. Continúa a los humedales de Tocra, un sistema de lagunas de alta altitud donde tres especies de flamencos se alimentan en aguas poco profundas junto a raras avocetas andinas e ibis de la puna. Observa cóndores andinos sobrevolando los picos volcánicos. Conduce a través de paisajes de formaciones de piedra pómez y conos volcánicos antes de llegar a la Laguna de Salinas a 4,300 metros, sus orillas blancas incrustadas de sal contrastando con reflejos rosados de flamencos. Visita las estaciones de conteo de vicuñas y aprende sobre esfuerzos de conservación. Parada opcional en miradores de El Misti o Chachani para los aventureros.',
    highlights: [
      'Wild vicuña herds up close',
      'Three flamingo species at Tocra',
      'Volcanic landscapes and salt flats',
      'Andean condor sightings',
      'Salinas Lagoon reflections',
      'Conservation station visits',
      'Photography paradise'
    ],
    highlightsEs: [
      'Manadas de vicuñas salvajes de cerca',
      'Tres especies de flamencos en Tocra',
      'Paisajes volcánicos y salares',
      'Avistamientos de cóndores andinos',
      'Reflejos de la Laguna de Salinas',
      'Visitas a estaciones de conservación',
      'Paraíso fotográfico'
    ],
    familyRating: 4,
    minAge: 6,
    duration: 'Full day (8-10 hours)',
    durationEs: 'Día completo (8-10 horas)',
    difficulty: 'moderate',
    priceRange: '$60-120 per person',
    priceRangeEs: '$60-120 por persona',
    bestTime: 'Year-round. April-November dry season best. Early mornings for best wildlife activity.',
    bestTimeEs: 'Todo el año. Temporada seca abril-noviembre mejor. Temprano en la mañana para mejor actividad de fauna.',
    includes: [
      'Transportation from Arequipa',
      'Professional naturalist guide',
      'Reserve entrance fees',
      'Binoculars for wildlife viewing',
      'Box lunch and hot drinks',
      'Oxygen for emergencies'
    ],
    includesEs: [
      'Transporte desde Arequipa',
      'Guía naturalista profesional',
      'Entradas a la reserva',
      'Binoculares para observación de fauna',
      'Almuerzo empacado y bebidas calientes',
      'Oxígeno para emergencias'
    ],
    tips: [
      'Acclimatize in Arequipa 1-2 days first',
      'Dress in layers - temperatures vary greatly',
      'Bring warm hat, gloves, sunscreen',
      'Telephoto lens recommended',
      'Coca tea/candy helps with altitude'
    ],
    tipsEs: [
      'Aclimatarse en Arequipa 1-2 días primero',
      'Vestirse en capas - temperaturas varían mucho',
      'Trae gorro cálido, guantes, protector solar',
      'Lente telefoto recomendado',
      'Té/caramelos de coca ayudan con la altitud'
    ],
    safetyNotes: [
      'Very high altitude (3,900-4,500m) - acclimatize first',
      'Stay with vehicle - wild terrain',
      'Weather changes rapidly - be prepared',
      'Limited facilities - use restrooms in Arequipa',
      'Children under 6 may struggle with altitude'
    ],
    safetyNotesEs: [
      'Altitud muy alta (3,900-4,500m) - aclimatarse primero',
      'Quedarse con el vehículo - terreno salvaje',
      'Clima cambia rápidamente - estar preparado',
      'Instalaciones limitadas - usar baños en Arequipa',
      'Niños menores de 6 pueden tener dificultad con la altitud'
    ],
    relatedActivities: ['colca-canyon-tour', 'arequipa-city-tour', 'misti-volcano-hike'],
    providers: [
      { name: 'Colca Trek', familyFriendly: true },
      { name: 'Pablo Tour', familyFriendly: true },
      { name: 'Naturaleza Arequipa', familyFriendly: true }
    ]
  },
  {
    slug: 'punta-sal-beach-experience',
    name: 'Punta Sal Beach Family Relaxation',
    nameEs: 'Relajación Familiar en Playa Punta Sal',
    type: 'relaxation',
    city: 'tumbes',
    region: 'Tumbes Region',
    regionEs: 'Región Tumbes',
    description: 'Discover Peru\'s finest tropical beach destination at Punta Sal, where warm Pacific waters, golden sands, and year-round sunshine create the perfect family beach escape. Located in Peru\'s northernmost region near the Ecuador border, Punta Sal offers Caribbean-like conditions without leaving Peru - calm turquoise waters ideal for children, excellent seafood, and a relaxed atmosphere that lets families unwind after adventure-filled Peru travels.',
    descriptionEs: 'Descubre el mejor destino de playa tropical de Perú en Punta Sal, donde aguas cálidas del Pacífico, arenas doradas y sol durante todo el año crean el escape de playa familiar perfecto. Ubicado en la región más norteña de Perú cerca de la frontera con Ecuador, Punta Sal ofrece condiciones similares al Caribe sin salir de Perú - aguas turquesas tranquilas ideales para niños, excelente mariscos y un ambiente relajado que permite a las familias descansar después de viajes llenos de aventura por Perú.',
    whatToExpect: 'Arrive at your beachfront resort and settle into accommodations steps from the sand. The beach stretches for kilometers with consistently calm, warm waters perfect for swimming and playing. Children can safely wade in shallow areas while parents relax on loungers under palapas. Morning activities might include kayaking, paddleboarding, or snorkeling around rocky points where tropical fish gather. Book a morning boat trip to swim with sea turtles and spot rays gliding through crystal waters. Afternoons are for building sandcastles, beach games, and enjoying fresh ceviche at oceanfront restaurants. During whale season (July-October), take excursions to witness humpback whales breaching offshore - an unforgettable family experience. Sunset brings spectacular colors over the Pacific. Evening dining features the freshest seafood in Peru - langoustines, black clam ceviche, and grilled catch of the day. The warm evenings allow beach bonfires and stargazing far from city lights.',
    whatToExpectEs: 'Llega a tu resort frente al mar e instálate en alojamientos a pasos de la arena. La playa se extiende por kilómetros con aguas consistentemente tranquilas y cálidas perfectas para nadar y jugar. Los niños pueden vadear con seguridad en áreas poco profundas mientras los padres se relajan en tumbonas bajo palapas. Las actividades matutinas pueden incluir kayak, paddleboard o snorkel alrededor de puntas rocosas donde se reúnen peces tropicales. Reserva un viaje en bote por la mañana para nadar con tortugas marinas y ver rayas deslizándose por aguas cristalinas. Las tardes son para construir castillos de arena, juegos de playa y disfrutar ceviche fresco en restaurantes frente al mar. Durante la temporada de ballenas (julio-octubre), toma excursiones para presenciar ballenas jorobadas saltando mar adentro - una experiencia familiar inolvidable. El atardecer trae colores espectaculares sobre el Pacífico. La cena nocturna presenta los mariscos más frescos de Perú - langostinos, ceviche de conchas negras y pescado a la parrilla del día. Las noches cálidas permiten fogatas en la playa y observación de estrellas lejos de las luces de la ciudad.',
    highlights: [
      'Warm, calm swimming waters year-round',
      'Sea turtle swimming encounters',
      'Whale watching (July-October)',
      'Fresh seafood dining',
      'Kayaking and paddleboarding',
      'Beach bonfires and stargazing',
      'Perfect family beach conditions'
    ],
    highlightsEs: [
      'Aguas cálidas y tranquilas para nadar todo el año',
      'Encuentros nadando con tortugas marinas',
      'Avistamiento de ballenas (julio-octubre)',
      'Cenas de mariscos frescos',
      'Kayak y paddleboard',
      'Fogatas en la playa y observación de estrellas',
      'Condiciones de playa perfectas para familias'
    ],
    familyRating: 5,
    minAge: 0,
    duration: '2-5 days',
    durationEs: '2-5 días',
    difficulty: 'easy',
    priceRange: '$150-400 per night resort',
    priceRangeEs: '$150-400 por noche resort',
    bestTime: 'Year-round warm. December-April warmest water. July-October whale season. Avoid January-March occasional rain.',
    bestTimeEs: 'Cálido todo el año. Diciembre-abril agua más cálida. Julio-octubre temporada de ballenas. Evitar enero-marzo lluvia ocasional.',
    includes: [
      'Beach access and loungers',
      'Non-motorized water sports',
      'Resort pools and facilities',
      'Activities vary by resort',
      'Most include breakfast'
    ],
    includesEs: [
      'Acceso a playa y tumbonas',
      'Deportes acuáticos no motorizados',
      'Piscinas e instalaciones del resort',
      'Actividades varían por resort',
      'La mayoría incluye desayuno'
    ],
    tips: [
      'Fly to Tumbes, transfer 1 hour south',
      'Book whale watching in advance July-October',
      'Bring reef-safe sunscreen',
      'Exchange money in Tumbes - limited ATMs',
      'Reserve resorts well ahead for holidays'
    ],
    tipsEs: [
      'Vuela a Tumbes, traslado 1 hora al sur',
      'Reserva avistamiento de ballenas con anticipación julio-octubre',
      'Trae protector solar seguro para arrecifes',
      'Cambia dinero en Tumbes - cajeros limitados',
      'Reserva resorts con anticipación para feriados'
    ],
    safetyNotes: [
      'Sea level - no altitude concerns',
      'Calm waters - still supervise children',
      'Strong sun - reapply sunscreen frequently',
      'Jellyfish occasionally present - ask locals',
      'Resort areas very safe'
    ],
    safetyNotesEs: [
      'Nivel del mar - sin preocupaciones de altitud',
      'Aguas tranquilas - aún supervisar niños',
      'Sol fuerte - reaplicar protector solar frecuentemente',
      'Medusas ocasionalmente presentes - preguntar a locales',
      'Áreas de resort muy seguras'
    ],
    relatedActivities: ['mancora-beach-surf', 'tumbes-mangroves-tour', 'cabo-blanco-fishing'],
    providers: [
      { name: 'DCO Suites Lounge & Spa', familyFriendly: true },
      { name: 'Punta Sal Suites & Bungalows', familyFriendly: true },
      { name: 'Hotel Caballito de Mar', familyFriendly: true }
    ]
  }
];

// Helper functions
export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find(activity => activity.slug === slug);
}

export function getAllActivitySlugs(): string[] {
  return activities.map(activity => activity.slug);
}

export function getActivitiesByCity(citySlug: string): Activity[] {
  return activities.filter(activity => activity.city === citySlug);
}

export function getActivitiesByType(type: Activity['type']): Activity[] {
  return activities.filter(activity => activity.type === type);
}

export function getFamilyFriendlyActivities(minRating: number = 4): Activity[] {
  return activities.filter(activity => activity.familyRating >= minRating);
}
