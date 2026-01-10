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
