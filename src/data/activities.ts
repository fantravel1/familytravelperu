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
