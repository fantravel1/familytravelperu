// Archaeological sites, natural wonders, and attractions data

export interface Site {
  slug: string;
  name: string;
  nameEs: string;
  type: 'archaeological' | 'natural' | 'cultural' | 'museum';
  city: string;
  region: string;
  regionEs: string;
  altitude?: number;
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
  entranceFee: string;
  entranceFeeEs: string;
  bestTime: string;
  bestTimeEs: string;
  tips: string[];
  tipsEs: string[];
  nearbyAttractions: string[];
  relatedSites: string[];
  gettingThere: string;
  gettingThereEs: string;
  facilities: string[];
  facilitiesEs: string[];
}

export const sites: Site[] = [
  {
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    nameEs: 'Machu Picchu',
    type: 'archaeological',
    city: 'aguas-calientes',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2430,
    description: 'The legendary "Lost City of the Incas" is one of the world\'s most iconic archaeological sites. Perched dramatically on a mountain ridge above the Urubamba Valley, Machu Picchu is a masterpiece of engineering and a bucket-list destination for travelers worldwide.',
    descriptionEs: 'La legendaria "Ciudad Perdida de los Incas" es uno de los sitios arqueológicos más icónicos del mundo. Ubicado dramáticamente en una cresta montañosa sobre el Valle del Urubamba, Machu Picchu es una obra maestra de ingeniería y un destino imperdible para viajeros de todo el mundo.',
    history: 'Built around 1450 AD during the reign of Inca emperor Pachacuti, Machu Picchu was likely a royal estate and sacred religious site. It was abandoned during the Spanish Conquest and remained hidden for centuries until Hiram Bingham brought it to international attention in 1911.',
    historyEs: 'Construido alrededor de 1450 DC durante el reinado del emperador inca Pachacuti, Machu Picchu fue probablemente una hacienda real y un sitio religioso sagrado. Fue abandonado durante la Conquista española y permaneció oculto por siglos hasta que Hiram Bingham lo dio a conocer internacionalmente en 1911.',
    highlights: [
      'Temple of the Sun - precision astronomy',
      'Intihuatana stone - ritual stone',
      'Room of Three Windows',
      'Agricultural terraces',
      'Stunning mountain views',
      'Llamas roaming the site'
    ],
    highlightsEs: [
      'Templo del Sol - astronomía de precisión',
      'Piedra Intihuatana - piedra ritual',
      'Sala de las Tres Ventanas',
      'Terrazas agrícolas',
      'Impresionantes vistas de montañas',
      'Llamas paseando por el sitio'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '3-5 hours',
    durationEs: '3-5 horas',
    difficulty: 'moderate',
    entranceFee: 'Adults ~$50, Children 3-17 ~$30 (prices vary by circuit)',
    entranceFeeEs: 'Adultos ~$50, Niños 3-17 ~$30 (precios varían por circuito)',
    bestTime: 'Early morning (6am entry) or late afternoon for fewer crowds',
    bestTimeEs: 'Temprano en la mañana (entrada 6am) o tarde para menos multitudes',
    tips: [
      'Book tickets at least 2-3 months in advance',
      'Hire a guide to understand the history',
      'Bring rain gear - weather changes quickly',
      'Pack snacks and water - none sold inside',
      'Passport required for entry and stamp',
      'New circuits limit which areas you can visit'
    ],
    tipsEs: [
      'Reserva boletos con al menos 2-3 meses de anticipación',
      'Contrata un guía para entender la historia',
      'Trae impermeable - el clima cambia rápido',
      'Empaca snacks y agua - no se venden adentro',
      'Pasaporte requerido para entrada y sello',
      'Nuevos circuitos limitan qué áreas puedes visitar'
    ],
    nearbyAttractions: ['huayna-picchu', 'sun-gate', 'inca-bridge'],
    relatedSites: ['ollantaytambo', 'sacsayhuaman', 'pisac'],
    gettingThere: 'Train from Cusco/Ollantaytambo to Aguas Calientes, then bus (25 min) or hike up. Alternatively, hike the Inca Trail (4 days) or alternative treks.',
    gettingThereEs: 'Tren desde Cusco/Ollantaytambo a Aguas Calientes, luego bus (25 min) o subir caminando. Alternativamente, camina el Camino Inca (4 días) o trekkings alternativos.',
    facilities: [
      'Restrooms at entrance only',
      'Bag storage available',
      'No food or drinks inside',
      'No strollers allowed'
    ],
    facilitiesEs: [
      'Baños solo en la entrada',
      'Guardaequipaje disponible',
      'No comida ni bebidas adentro',
      'No se permiten cochecitos'
    ]
  },
  {
    slug: 'sacsayhuaman',
    name: 'Sacsayhuamán',
    nameEs: 'Sacsayhuamán',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3700,
    description: 'This massive fortress on the outskirts of Cusco features some of the most impressive stonework in the Americas. The zigzag walls made of enormous boulders - some weighing over 100 tons - continue to baffle engineers as to how they were moved and fitted together.',
    descriptionEs: 'Esta masiva fortaleza en las afueras de Cusco presenta algunos de los trabajos en piedra más impresionantes de las Américas. Las paredes en zigzag hechas de enormes rocas - algunas pesando más de 100 toneladas - continúan desconcertando a los ingenieros sobre cómo fueron movidas y ensambladas.',
    history: 'Built in the 15th century, Sacsayhuamán took over 60 years to construct and required a workforce of more than 20,000 laborers. It served as a fortress, religious center, and location for Inti Raymi ceremonies.',
    historyEs: 'Construido en el siglo XV, Sacsayhuamán tomó más de 60 años en construirse y requirió una fuerza laboral de más de 20,000 trabajadores. Sirvió como fortaleza, centro religioso y ubicación para ceremonias del Inti Raymi.',
    highlights: [
      'Massive zigzag walls',
      'Incredible stone fitting',
      'Panoramic views of Cusco',
      'Annual Inti Raymi celebration',
      'Slides carved into rock',
      'Wide open spaces for kids to explore'
    ],
    highlightsEs: [
      'Masivas paredes en zigzag',
      'Increíble ensamblaje de piedras',
      'Vistas panorámicas de Cusco',
      'Celebración anual del Inti Raymi',
      'Toboganes tallados en roca',
      'Amplios espacios abiertos para que los niños exploren'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Morning for best light, or sunset for golden hour photos',
    bestTimeEs: 'Mañana para mejor luz, o atardecer para fotos de hora dorada',
    tips: [
      'Can walk from Cusco (uphill, 30-45 min) or take taxi',
      'Included in Cusco Tourist Ticket - buy this first',
      'Great for kids - lots of space to run',
      'Rock slides (rodaderos) are fun for children',
      'Bring water and sunscreen - altitude is high',
      'June 24 Inti Raymi ceremony is spectacular'
    ],
    tipsEs: [
      'Puedes caminar desde Cusco (subida, 30-45 min) o tomar taxi',
      'Incluido en el Boleto Turístico de Cusco - cómpralo primero',
      'Genial para niños - mucho espacio para correr',
      'Los toboganes de roca (rodaderos) son divertidos para niños',
      'Trae agua y protector solar - la altitud es alta',
      'La ceremonia del Inti Raymi el 24 de junio es espectacular'
    ],
    nearbyAttractions: ['qenqo', 'tambomachay', 'puca-pucara'],
    relatedSites: ['machu-picchu', 'ollantaytambo', 'pisac'],
    gettingThere: '15 minute taxi from Cusco\'s Plaza de Armas, or 30-45 minute uphill walk.',
    gettingThereEs: '15 minutos en taxi desde la Plaza de Armas de Cusco, o 30-45 minutos de caminata cuesta arriba.',
    facilities: [
      'Restrooms available',
      'Vendors sell snacks and drinks',
      'No shade - bring sun protection'
    ],
    facilitiesEs: [
      'Baños disponibles',
      'Vendedores venden snacks y bebidas',
      'Sin sombra - trae protección solar'
    ]
  },
  {
    slug: 'ollantaytambo',
    name: 'Ollantaytambo',
    nameEs: 'Ollantaytambo',
    type: 'archaeological',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2792,
    description: 'This "Living Inca Town" is the best-preserved example of Inca urban planning. The town layout and irrigation systems remain intact, while the impressive fortress ruins tower above. It\'s also the main departure point for Machu Picchu trains.',
    descriptionEs: 'Este "Pueblo Inca Viviente" es el mejor ejemplo preservado de planificación urbana inca. El diseño del pueblo y los sistemas de irrigación permanecen intactos, mientras que las impresionantes ruinas de la fortaleza se elevan arriba. También es el punto principal de partida para trenes a Machu Picchu.',
    history: 'Ollantaytambo served as both a temple and fortress during the Inca Empire. It was here that Manco Inca successfully resisted Spanish forces in 1536, in one of the few Inca military victories against the conquistadors.',
    historyEs: 'Ollantaytambo sirvió como templo y fortaleza durante el Imperio Inca. Fue aquí donde Manco Inca resistió exitosamente a las fuerzas españolas en 1536, en una de las pocas victorias militares incas contra los conquistadores.',
    highlights: [
      'Massive stone terraces',
      'Temple of the Sun with monolithic stones',
      'Original Inca streets and canals',
      'Pinkuylluna granaries on the hillside',
      'Wall of the Six Monoliths',
      'Train station for Machu Picchu'
    ],
    highlightsEs: [
      'Masivas terrazas de piedra',
      'Templo del Sol con piedras monolíticas',
      'Calles y canales incas originales',
      'Graneros de Pinkuylluna en la ladera',
      'Muro de los Seis Monolitos',
      'Estación de tren para Machu Picchu'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Morning to avoid afternoon clouds and for best light',
    bestTimeEs: 'Mañana para evitar nubes de la tarde y para mejor luz',
    tips: [
      'Stay here instead of Cusco for easier altitude adjustment',
      'Climb the terraces for incredible views',
      'The town itself is worth exploring',
      'Great base for Machu Picchu - trains leave from here',
      'Wear good shoes - the steps are steep and uneven'
    ],
    tipsEs: [
      'Quédate aquí en lugar de Cusco para una adaptación más fácil a la altitud',
      'Sube las terrazas para vistas increíbles',
      'El pueblo en sí vale la pena explorar',
      'Gran base para Machu Picchu - los trenes salen de aquí',
      'Usa buenos zapatos - los escalones son empinados y desiguales'
    ],
    nearbyAttractions: ['moray', 'maras-salt-mines', 'chinchero'],
    relatedSites: ['machu-picchu', 'pisac', 'sacsayhuaman'],
    gettingThere: '1.5 hours by car or bus from Cusco. Colectivos run frequently from Cusco.',
    gettingThereEs: '1.5 horas en auto o bus desde Cusco. Los colectivos salen frecuentemente desde Cusco.',
    facilities: [
      'Restrooms at entrance',
      'Town has many restaurants and shops',
      'Hotels and hostels available',
      'Train station nearby'
    ],
    facilitiesEs: [
      'Baños en la entrada',
      'El pueblo tiene muchos restaurantes y tiendas',
      'Hoteles y hostales disponibles',
      'Estación de tren cercana'
    ]
  },
  {
    slug: 'pisac',
    name: 'Pisac',
    nameEs: 'Pisac',
    type: 'archaeological',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3300,
    description: 'Perched high above the Sacred Valley, Pisac offers both stunning Inca ruins and one of Peru\'s most famous traditional markets. The terraced hillsides, religious temples, and military fortifications make it a must-visit destination.',
    descriptionEs: 'Ubicado en lo alto del Valle Sagrado, Pisac ofrece tanto impresionantes ruinas incas como uno de los mercados tradicionales más famosos de Perú. Las laderas con terrazas, templos religiosos y fortificaciones militares lo hacen un destino imperdible.',
    history: 'Pisac was an important settlement that controlled the route from the Inca Empire into the Amazon jungle. The ruins include military, religious, and agricultural sectors, with the Intihuatana temple as its spiritual center.',
    historyEs: 'Pisac fue un asentamiento importante que controlaba la ruta del Imperio Inca hacia la selva amazónica. Las ruinas incluyen sectores militares, religiosos y agrícolas, con el templo Intihuatana como su centro espiritual.',
    highlights: [
      'Extensive terraced hillsides',
      'Intihuatana ceremonial area',
      'Famous Sunday market',
      'Largest known Inca cemetery',
      'Stunning valley views',
      'Artisan workshops'
    ],
    highlightsEs: [
      'Extensas laderas con terrazas',
      'Área ceremonial del Intihuatana',
      'Famoso mercado dominical',
      'El cementerio inca más grande conocido',
      'Impresionantes vistas del valle',
      'Talleres de artesanos'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours (ruins) + 1-2 hours (market)',
    durationEs: '2-3 horas (ruinas) + 1-2 horas (mercado)',
    difficulty: 'moderate',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Sunday for the market, any day for the ruins',
    bestTimeEs: 'Domingo para el mercado, cualquier día para las ruinas',
    tips: [
      'Sunday market is huge but very crowded',
      'Market also operates Tuesday and Thursday',
      'Drive up to ruins entrance, walk down through the site',
      'Combine with Moray and Maras in one day',
      'Bring cash for market purchases'
    ],
    tipsEs: [
      'El mercado dominical es enorme pero muy concurrido',
      'El mercado también opera martes y jueves',
      'Sube en auto a la entrada de las ruinas, baja caminando por el sitio',
      'Combina con Moray y Maras en un día',
      'Trae efectivo para compras en el mercado'
    ],
    nearbyAttractions: ['moray', 'maras-salt-mines', 'ollantaytambo'],
    relatedSites: ['sacsayhuaman', 'ollantaytambo', 'chinchero'],
    gettingThere: '45 minutes by car or bus from Cusco. Colectivos run regularly.',
    gettingThereEs: '45 minutos en auto o bus desde Cusco. Los colectivos salen regularmente.',
    facilities: [
      'Restrooms at multiple points',
      'Town has restaurants and cafes',
      'Market has food stalls'
    ],
    facilitiesEs: [
      'Baños en múltiples puntos',
      'El pueblo tiene restaurantes y cafés',
      'El mercado tiene puestos de comida'
    ]
  },
  {
    slug: 'moray',
    name: 'Moray',
    nameEs: 'Moray',
    type: 'archaeological',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3500,
    description: 'The mysterious circular terraces of Moray are unlike anything else in Peru. These concentric depressions created different microclimates, possibly serving as an ancient agricultural research station where the Incas experimented with crops.',
    descriptionEs: 'Las misteriosas terrazas circulares de Moray son únicas en Perú. Estas depresiones concéntricas creaban diferentes microclimas, posiblemente sirviendo como una estación de investigación agrícola antigua donde los incas experimentaban con cultivos.',
    history: 'Archaeologists believe Moray was an Inca agricultural laboratory. The different levels create temperature variations of up to 15°C, allowing the Incas to simulate different ecological zones and test which crops would grow best in various conditions.',
    historyEs: 'Los arqueólogos creen que Moray fue un laboratorio agrícola inca. Los diferentes niveles crean variaciones de temperatura de hasta 15°C, permitiendo a los incas simular diferentes zonas ecológicas y probar qué cultivos crecerían mejor en varias condiciones.',
    highlights: [
      'Unique circular terraces',
      'Ancient agricultural engineering',
      'Three major depressions to explore',
      'Incredible geometry',
      'Great for photos',
      'Mystical atmosphere'
    ],
    highlightsEs: [
      'Terrazas circulares únicas',
      'Ingeniería agrícola antigua',
      'Tres depresiones principales para explorar',
      'Geometría increíble',
      'Genial para fotos',
      'Atmósfera mística'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    difficulty: 'easy',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Morning for best light and fewer people',
    bestTimeEs: 'Mañana para mejor luz y menos gente',
    tips: [
      'Combine with Maras Salt Mines in one visit',
      'Kids love the unusual geometric shapes',
      'Drone photography creates amazing shots (if permitted)',
      'It\'s smaller than expected - don\'t over-schedule',
      'Bike tours from Sacred Valley include Moray'
    ],
    tipsEs: [
      'Combina con las Salineras de Maras en una visita',
      'A los niños les encantan las formas geométricas inusuales',
      'La fotografía con drone crea tomas increíbles (si está permitido)',
      'Es más pequeño de lo esperado - no sobrecargues tu agenda',
      'Tours en bicicleta desde el Valle Sagrado incluyen Moray'
    ],
    nearbyAttractions: ['maras-salt-mines', 'chinchero', 'ollantaytambo'],
    relatedSites: ['pisac', 'ollantaytambo', 'sacsayhuaman'],
    gettingThere: '1 hour from Cusco by car. Often combined with Maras Salt Mines in tours.',
    gettingThereEs: '1 hora desde Cusco en auto. A menudo combinado con las Salineras de Maras en tours.',
    facilities: [
      'Basic restrooms at entrance',
      'Small vendor stalls',
      'No restaurants on site'
    ],
    facilitiesEs: [
      'Baños básicos en la entrada',
      'Pequeños puestos de vendedores',
      'Sin restaurantes en el sitio'
    ]
  },
  {
    slug: 'maras-salt-mines',
    name: 'Maras Salt Mines (Salineras)',
    nameEs: 'Salineras de Maras',
    type: 'cultural',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3380,
    description: 'Thousands of salt evaporation ponds cascade down the mountainside in a stunning display of ancient engineering. These pre-Inca salt mines are still in use today, producing pink salt harvested by local families using traditional methods.',
    descriptionEs: 'Miles de estanques de evaporación de sal caen en cascada por la ladera de la montaña en una impresionante muestra de ingeniería antigua. Estas minas de sal pre-incas todavía están en uso hoy, produciendo sal rosada cosechada por familias locales usando métodos tradicionales.',
    history: 'The salt mines have been in continuous use for over 500 years. A natural salt spring feeds the terraced pools, and as the water evaporates, salt crystals are left behind. Local families inherit and maintain individual pools.',
    historyEs: 'Las minas de sal han estado en uso continuo por más de 500 años. Un manantial de sal natural alimenta los estanques en terrazas, y a medida que el agua se evapora, quedan cristales de sal. Las familias locales heredan y mantienen estanques individuales.',
    highlights: [
      'Over 3,000 salt pools',
      'Stunning visual spectacle',
      'Working salt production',
      'Pink salt to purchase',
      'Incredible photo opportunities',
      'Unique in the world'
    ],
    highlightsEs: [
      'Más de 3,000 pozas de sal',
      'Espectáculo visual impresionante',
      'Producción de sal en funcionamiento',
      'Sal rosada para comprar',
      'Increíbles oportunidades fotográficas',
      'Único en el mundo'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    difficulty: 'easy',
    entranceFee: 'S/10 (~$3) - separate from Tourist Ticket',
    entranceFeeEs: 'S/10 (~$3) - separado del Boleto Turístico',
    bestTime: 'Afternoon for best light on the pools',
    bestTimeEs: 'Tarde para mejor luz en los estanques',
    tips: [
      'The contrast is stunning on sunny days',
      'Buy salt from local vendors to support the community',
      'Best combined with Moray in a half-day trip',
      'Not on the Tourist Ticket - separate entrance',
      'Walking paths can be slippery when wet'
    ],
    tipsEs: [
      'El contraste es impresionante en días soleados',
      'Compra sal de vendedores locales para apoyar a la comunidad',
      'Mejor combinado con Moray en un viaje de medio día',
      'No está en el Boleto Turístico - entrada separada',
      'Los caminos pueden ser resbaladizos cuando están mojados'
    ],
    nearbyAttractions: ['moray', 'chinchero', 'ollantaytambo'],
    relatedSites: ['moray', 'pisac', 'ollantaytambo'],
    gettingThere: '1 hour from Cusco. Usually visited with Moray on a Sacred Valley tour.',
    gettingThereEs: '1 hora desde Cusco. Usualmente visitado con Moray en un tour del Valle Sagrado.',
    facilities: [
      'Restrooms at entrance',
      'Local vendors selling salt products',
      'Small café'
    ],
    facilitiesEs: [
      'Baños en la entrada',
      'Vendedores locales vendiendo productos de sal',
      'Pequeño café'
    ]
  },
  {
    slug: 'rainbow-mountain',
    name: 'Rainbow Mountain (Vinicunca)',
    nameEs: 'Montaña de Colores (Vinicunca)',
    type: 'natural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 5200,
    description: 'One of Peru\'s most Instagram-famous destinations, Rainbow Mountain features stunning natural striations of color created by mineral deposits. The demanding hike to 5,200m rewards visitors with an otherworldly landscape of reds, yellows, and turquoise.',
    descriptionEs: 'Uno de los destinos más famosos de Instagram en Perú, la Montaña de Colores presenta impresionantes estrías naturales de color creadas por depósitos minerales. La exigente caminata a 5,200m recompensa a los visitantes con un paisaje de otro mundo de rojos, amarillos y turquesas.',
    history: 'Rainbow Mountain was only "discovered" for tourism in 2015 when climate change melted the snow that had covered it. The colorful bands are created by different mineral deposits - iron (red), sulfur (yellow), and copper (turquoise).',
    historyEs: 'La Montaña de Colores solo fue "descubierta" para el turismo en 2015 cuando el cambio climático derritió la nieve que la cubría. Las bandas coloridas son creadas por diferentes depósitos minerales - hierro (rojo), azufre (amarillo) y cobre (turquesa).',
    highlights: [
      'Vibrant rainbow-colored striations',
      'High Andean landscapes',
      'Alpacas and llamas',
      'Incredible photo opportunities',
      'Red Valley alternative route',
      'Once-in-a-lifetime experience'
    ],
    highlightsEs: [
      'Vibrantes estrías color arcoíris',
      'Paisajes altoandinos',
      'Alpacas y llamas',
      'Increíbles oportunidades fotográficas',
      'Ruta alternativa del Valle Rojo',
      'Experiencia única en la vida'
    ],
    familyRating: 2,
    minAge: 12,
    duration: 'Full day (3-4 hour hike + transport)',
    durationEs: 'Día completo (3-4 horas de caminata + transporte)',
    difficulty: 'challenging',
    entranceFee: 'S/10 (~$3) + tour cost (~$30-80)',
    entranceFeeEs: 'S/10 (~$3) + costo del tour (~$30-80)',
    bestTime: 'Dry season (April-October), early morning',
    bestTimeEs: 'Temporada seca (abril-octubre), temprano en la mañana',
    tips: [
      'NOT recommended for young children due to extreme altitude',
      'Acclimatize in Cusco for 2-3 days first',
      'Bring warm layers, rain gear, sun protection',
      'Altitude sickness is common - bring medication',
      'Horse rental available for those who struggle',
      'Colors are best on sunny days'
    ],
    tipsEs: [
      'NO recomendado para niños pequeños debido a la altitud extrema',
      'Aclimátate en Cusco por 2-3 días primero',
      'Trae capas abrigadas, impermeable, protección solar',
      'El mal de altura es común - trae medicamento',
      'Alquiler de caballos disponible para quienes tengan dificultad',
      'Los colores son mejores en días soleados'
    ],
    nearbyAttractions: ['ausangate', 'red-valley'],
    relatedSites: ['machu-picchu', 'sacsayhuaman'],
    gettingThere: '3-hour drive from Cusco to trailhead, then 2-hour hike to summit.',
    gettingThereEs: '3 horas en auto desde Cusco al inicio del sendero, luego 2 horas de caminata a la cumbre.',
    facilities: [
      'Basic facilities at trailhead',
      'No facilities on the trail',
      'Vendors sell snacks and drinks'
    ],
    facilitiesEs: [
      'Instalaciones básicas en el inicio del sendero',
      'Sin instalaciones en el camino',
      'Vendedores venden snacks y bebidas'
    ]
  },
  {
    slug: 'colca-canyon',
    name: 'Colca Canyon',
    nameEs: 'Cañón del Colca',
    type: 'natural',
    city: 'arequipa',
    region: 'Arequipa Region',
    regionEs: 'Región Arequipa',
    altitude: 3400,
    description: 'One of the world\'s deepest canyons, Colca is twice as deep as the Grand Canyon. Famous for its soaring Andean condors, traditional villages, and stunning landscapes, it\'s a highlight of southern Peru.',
    descriptionEs: 'Uno de los cañones más profundos del mundo, Colca es dos veces más profundo que el Gran Cañón. Famoso por sus majestuosos cóndores andinos, pueblos tradicionales e impresionantes paisajes, es un destino destacado del sur de Perú.',
    history: 'The canyon has been inhabited for over 2,000 years. The pre-Inca Collagua and Cabana peoples created the impressive agricultural terraces still visible today. Spanish missionaries built the beautiful colonial churches in the valley towns.',
    historyEs: 'El cañón ha sido habitado por más de 2,000 años. Los pueblos pre-incas Collagua y Cabana crearon las impresionantes terrazas agrícolas aún visibles hoy. Los misioneros españoles construyeron las hermosas iglesias coloniales en los pueblos del valle.',
    highlights: [
      'Andean condors at Cruz del Condor',
      'Traditional villages (Chivay, Yanque)',
      'Incredible canyon views',
      'Hot springs (La Calera)',
      'Agricultural terraces',
      'Stargazing opportunities'
    ],
    highlightsEs: [
      'Cóndores andinos en Cruz del Cóndor',
      'Pueblos tradicionales (Chivay, Yanque)',
      'Increíbles vistas del cañón',
      'Aguas termales (La Calera)',
      'Terrazas agrícolas',
      'Oportunidades para observar estrellas'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-3 days recommended',
    durationEs: '2-3 días recomendados',
    difficulty: 'moderate',
    entranceFee: 'S/70 (~$20) Tourist Ticket',
    entranceFeeEs: 'S/70 (~$20) Boleto Turístico',
    bestTime: 'May-October for best condor viewing (8-10am)',
    bestTimeEs: 'Mayo-octubre para mejor avistamiento de cóndores (8-10am)',
    tips: [
      'Take a 2-day tour, not a day trip - too exhausting',
      'Arrive at Cruz del Condor before 8am for condors',
      'The hot springs are perfect after a long day',
      'Bring binoculars for condor watching',
      'Altitude is high - acclimatize first',
      'Some hiking is required at Cruz del Condor viewpoint'
    ],
    tipsEs: [
      'Toma un tour de 2 días, no de un día - muy agotador',
      'Llega a Cruz del Cóndor antes de las 8am para los cóndores',
      'Las aguas termales son perfectas después de un día largo',
      'Trae binoculares para observar cóndores',
      'La altitud es alta - aclimátate primero',
      'Se requiere algo de caminata en el mirador Cruz del Cóndor'
    ],
    nearbyAttractions: ['la-calera-hot-springs', 'yanque', 'chivay'],
    relatedSites: ['arequipa-city', 'lake-titicaca'],
    gettingThere: '3-4 hours from Arequipa by bus or car. Tours depart daily.',
    gettingThereEs: '3-4 horas desde Arequipa en bus o auto. Los tours salen diariamente.',
    facilities: [
      'Hotels in Chivay and Yanque',
      'Restaurants in valley towns',
      'Viewpoints with basic facilities'
    ],
    facilitiesEs: [
      'Hoteles en Chivay y Yanque',
      'Restaurantes en pueblos del valle',
      'Miradores con instalaciones básicas'
    ]
  },
  {
    slug: 'lake-titicaca',
    name: 'Lake Titicaca',
    nameEs: 'Lago Titicaca',
    type: 'natural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3812,
    description: 'The highest navigable lake in the world straddles Peru and Bolivia. This mystical body of water was sacred to the Incas, who believed the sun god was born here. Its famous floating islands and traditional communities offer unique cultural experiences.',
    descriptionEs: 'El lago navegable más alto del mundo está entre Perú y Bolivia. Este cuerpo de agua místico era sagrado para los incas, quienes creían que el dios sol nació aquí. Sus famosas islas flotantes y comunidades tradicionales ofrecen experiencias culturales únicas.',
    history: 'According to Inca mythology, the creator god Viracocha emerged from Lake Titicaca to create the sun, moon, and stars. The lake has been inhabited for thousands of years by the Uros, Quechua, and Aymara peoples.',
    historyEs: 'Según la mitología inca, el dios creador Viracocha emergió del Lago Titicaca para crear el sol, la luna y las estrellas. El lago ha sido habitado por miles de años por los pueblos Uros, Quechua y Aymara.',
    highlights: [
      'Uros Floating Islands',
      'Taquile Island',
      'Amantaní Island homestays',
      'Traditional textiles',
      'Stunning blue waters',
      'Dramatic mountain backdrop'
    ],
    highlightsEs: [
      'Islas Flotantes de los Uros',
      'Isla Taquile',
      'Estadías con familias en Isla Amantaní',
      'Textiles tradicionales',
      'Impresionantes aguas azules',
      'Dramático telón de fondo de montañas'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '1-2 days',
    durationEs: '1-2 días',
    difficulty: 'easy',
    entranceFee: 'Uros S/15, Taquile S/10, Amantaní S/10',
    entranceFeeEs: 'Uros S/15, Taquile S/10, Amantaní S/10',
    bestTime: 'May-October (dry season), mornings for calmest waters',
    bestTimeEs: 'Mayo-octubre (temporada seca), mañanas para aguas más calmadas',
    tips: [
      'Kids love walking on the bouncy reed islands',
      'Consider an overnight on Amantaní for cultural immersion',
      'Bring warm clothes - it\'s cold on the water',
      'Altitude is very high - acclimatize first',
      'Ask permission before photographing locals',
      'Uros islands closest to Puno are most touristy'
    ],
    tipsEs: [
      'A los niños les encanta caminar en las rebotantes islas de totora',
      'Considera una noche en Amantaní para inmersión cultural',
      'Trae ropa abrigada - hace frío en el agua',
      'La altitud es muy alta - aclimátate primero',
      'Pide permiso antes de fotografiar a los locales',
      'Las islas Uros más cercanas a Puno son las más turísticas'
    ],
    nearbyAttractions: ['uros-islands', 'taquile-island', 'amantani-island', 'sillustani'],
    relatedSites: ['colca-canyon', 'cusco-city'],
    gettingThere: 'Puno is the main gateway. Boats depart from Puno port for island tours.',
    gettingThereEs: 'Puno es la puerta principal. Los botes salen del puerto de Puno para tours a las islas.',
    facilities: [
      'Boats have basic facilities',
      'Islands have restrooms',
      'Homestays on Amantaní and Taquile',
      'Restaurants on Taquile'
    ],
    facilitiesEs: [
      'Los botes tienen instalaciones básicas',
      'Las islas tienen baños',
      'Estadías con familias en Amantaní y Taquile',
      'Restaurantes en Taquile'
    ]
  },
  {
    slug: 'ballestas-islands',
    name: 'Ballestas Islands',
    nameEs: 'Islas Ballestas',
    type: 'natural',
    city: 'paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 0,
    description: 'Often called the "Poor Man\'s Galápagos," these rocky islands teem with wildlife including sea lions, Humboldt penguins, and thousands of seabirds. A boat tour around the islands is one of Peru\'s best wildlife experiences.',
    descriptionEs: 'A menudo llamadas las "Galápagos del Pobre", estas islas rocosas están llenas de vida silvestre incluyendo lobos marinos, pingüinos de Humboldt y miles de aves marinas. Un tour en bote alrededor de las islas es una de las mejores experiencias de vida silvestre de Perú.',
    history: 'The islands have been protected since 1975 as part of the Paracas National Reserve. They were historically mined for guano (bird droppings used as fertilizer), which created Peru\'s "Guano Era" wealth in the 19th century.',
    historyEs: 'Las islas han sido protegidas desde 1975 como parte de la Reserva Nacional de Paracas. Históricamente fueron explotadas por guano (excremento de aves usado como fertilizante), lo que creó la riqueza de la "Era del Guano" en Perú en el siglo XIX.',
    highlights: [
      'Sea lion colonies',
      'Humboldt penguins',
      'Thousands of seabirds',
      'Candelabra geoglyph',
      'Dramatic rock formations',
      'Close wildlife encounters'
    ],
    highlightsEs: [
      'Colonias de lobos marinos',
      'Pingüinos de Humboldt',
      'Miles de aves marinas',
      'Geoglifo del Candelabro',
      'Dramáticas formaciones rocosas',
      'Encuentros cercanos con vida silvestre'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2-2.5 hours',
    durationEs: '2-2.5 horas',
    difficulty: 'easy',
    entranceFee: 'S/22 reserve fee + boat tour (~$20-30)',
    entranceFeeEs: 'S/22 tarifa de reserva + tour en bote (~$20-30)',
    bestTime: 'Morning tours (8am) have calmest seas and most active wildlife',
    bestTimeEs: 'Tours matutinos (8am) tienen mares más calmados y vida silvestre más activa',
    tips: [
      'Book morning tours - afternoon can be windy and rough',
      'Sit in the middle of the boat if prone to seasickness',
      'Bring layers - it\'s cold and windy on the water',
      'Binoculars enhance the experience',
      'Birds may "decorate" you - wear a hat!',
      'Combine with Paracas Reserve for a full day'
    ],
    tipsEs: [
      'Reserva tours matutinos - la tarde puede ser ventosa y agitada',
      'Siéntate en el medio del bote si eres propenso al mareo',
      'Trae capas - hace frío y viento en el agua',
      'Los binoculares mejoran la experiencia',
      '¡Las aves pueden "decorarte" - usa un sombrero!',
      'Combina con la Reserva de Paracas para un día completo'
    ],
    nearbyAttractions: ['paracas-reserve', 'candelabra', 'red-beach'],
    relatedSites: ['huacachina', 'nazca-lines'],
    gettingThere: 'Boats depart from Paracas pier. Tours leave at 8am and 10am typically.',
    gettingThereEs: 'Los botes salen del muelle de Paracas. Los tours salen típicamente a las 8am y 10am.',
    facilities: [
      'No landing on islands - boat tour only',
      'Restrooms at pier',
      'Life jackets provided'
    ],
    facilitiesEs: [
      'No se desembarca en las islas - solo tour en bote',
      'Baños en el muelle',
      'Chalecos salvavidas proporcionados'
    ]
  },
  {
    slug: 'chan-chan',
    name: 'Chan Chan',
    nameEs: 'Chan Chan',
    type: 'archaeological',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    altitude: 20,
    description: 'The largest adobe city in the world and capital of the Chimú Empire, Chan Chan was home to 60,000 people at its peak. This UNESCO World Heritage Site features intricate mud reliefs, ceremonial plazas, and royal palaces.',
    descriptionEs: 'La ciudad de adobe más grande del mundo y capital del Imperio Chimú, Chan Chan albergó a 60,000 personas en su apogeo. Este Patrimonio de la Humanidad de la UNESCO presenta intrincados relieves de barro, plazas ceremoniales y palacios reales.',
    history: 'Chan Chan was the capital of the Chimú Empire from around 850-1470 AD until conquered by the Incas. At 20 square kilometers, it was the largest city in pre-Columbian South America. The city had nine royal compounds, each built for a different ruler.',
    historyEs: 'Chan Chan fue la capital del Imperio Chimú desde aproximadamente 850-1470 DC hasta que fue conquistada por los incas. Con 20 kilómetros cuadrados, fue la ciudad más grande de la Sudamérica precolombina. La ciudad tenía nueve complejos reales, cada uno construido para un gobernante diferente.',
    highlights: [
      'Intricate mud reliefs',
      'Nik An (Tschudi) Palace',
      'Ceremonial plazas',
      'Walk-in wells (huachaques)',
      'UNESCO World Heritage Site',
      'Less crowded than Machu Picchu'
    ],
    highlightsEs: [
      'Intrincados relieves de barro',
      'Palacio Nik An (Tschudi)',
      'Plazas ceremoniales',
      'Pozos de acceso (huachaques)',
      'Patrimonio de la Humanidad UNESCO',
      'Menos concurrido que Machu Picchu'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'S/10 (~$3)',
    entranceFeeEs: 'S/10 (~$3)',
    bestTime: 'Morning or late afternoon for best light on the reliefs',
    bestTimeEs: 'Mañana o tarde para mejor luz en los relieves',
    tips: [
      'Hire a guide to understand the complex history',
      'Only Nik An palace is fully excavated and open',
      'Bring sun protection - there\'s little shade',
      'Combine with Huaca del Sol y Luna in one day',
      'Photography is excellent in golden hour light',
      'Don\'t touch the fragile adobe walls'
    ],
    tipsEs: [
      'Contrata un guía para entender la compleja historia',
      'Solo el palacio Nik An está completamente excavado y abierto',
      'Trae protección solar - hay poca sombra',
      'Combina con Huaca del Sol y Luna en un día',
      'La fotografía es excelente con luz de hora dorada',
      'No toques las frágiles paredes de adobe'
    ],
    nearbyAttractions: ['huaca-sol-luna', 'huanchaco', 'trujillo-centro'],
    relatedSites: ['sipan', 'tucume', 'caral'],
    gettingThere: '15 minutes from Trujillo by taxi. Regular combis also available.',
    gettingThereEs: '15 minutos desde Trujillo en taxi. También hay combis regulares disponibles.',
    facilities: [
      'Restrooms at entrance',
      'Small museum on site',
      'Gift shop'
    ],
    facilitiesEs: [
      'Baños en la entrada',
      'Pequeño museo en el sitio',
      'Tienda de regalos'
    ]
  },
  {
    slug: 'nazca-lines',
    name: 'Nazca Lines',
    nameEs: 'Líneas de Nazca',
    type: 'archaeological',
    city: 'nazca',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 500,
    description: 'The mysterious Nazca Lines are massive geoglyphs etched into the desert floor, depicting animals, plants, and geometric shapes. Best seen from the air, these ancient designs have puzzled researchers for decades and remain one of archaeology\'s greatest mysteries.',
    descriptionEs: 'Las misteriosas Líneas de Nazca son geoglifos masivos grabados en el suelo del desierto, representando animales, plantas y formas geométricas. Mejor vistas desde el aire, estos diseños antiguos han desconcertado a los investigadores por décadas y siguen siendo uno de los mayores misterios de la arqueología.',
    history: 'Created between 500 BC and 500 AD by the Nazca culture, the lines were made by removing red pebbles to reveal the lighter ground beneath. Their purpose remains debated - theories include astronomical calendars, ritual pathways, and water-related ceremonies.',
    historyEs: 'Creadas entre 500 AC y 500 DC por la cultura Nazca, las líneas fueron hechas removiendo guijarros rojos para revelar el suelo más claro debajo. Su propósito sigue siendo debatido - las teorías incluyen calendarios astronómicos, senderos rituales y ceremonias relacionadas con el agua.',
    highlights: [
      'The Hummingbird',
      'The Monkey',
      'The Condor',
      'The Spider',
      'The Astronaut',
      'Geometric patterns'
    ],
    highlightsEs: [
      'El Colibrí',
      'El Mono',
      'El Cóndor',
      'La Araña',
      'El Astronauta',
      'Patrones geométricos'
    ],
    familyRating: 3,
    minAge: 6,
    duration: '30-35 minute flight',
    durationEs: '30-35 minutos de vuelo',
    difficulty: 'easy',
    entranceFee: 'Flights ~$80-120 per person + airport tax',
    entranceFeeEs: 'Vuelos ~$80-120 por persona + impuesto de aeropuerto',
    bestTime: 'Early morning (7-9am) for clearest skies and calmest air',
    bestTimeEs: 'Temprano en la mañana (7-9am) para cielos más claros y aire más calmado',
    tips: [
      'Motion sickness is common - take medication beforehand',
      'Light breakfast only before flying',
      'Sit on both sides - plane banks for each side',
      'Observation tower shows 2 figures if you can\'t fly',
      'Book reputable companies only - safety is paramount',
      'Combine with Huacachina for a 2-day trip'
    ],
    tipsEs: [
      'El mareo es común - toma medicamento antes',
      'Solo desayuno ligero antes de volar',
      'Siéntate en ambos lados - el avión se inclina para cada lado',
      'La torre de observación muestra 2 figuras si no puedes volar',
      'Reserva solo con compañías confiables - la seguridad es primordial',
      'Combina con Huacachina para un viaje de 2 días'
    ],
    nearbyAttractions: ['chauchilla', 'cantalloc-aqueducts', 'cahuachi'],
    relatedSites: ['palpa-lines', 'huacachina', 'paracas'],
    gettingThere: '7 hours from Lima, 9 hours from Arequipa by bus. Flights depart from Nazca airport.',
    gettingThereEs: '7 horas desde Lima, 9 horas desde Arequipa en bus. Los vuelos salen del aeropuerto de Nazca.',
    facilities: [
      'Nazca airport has basic facilities',
      'Observation tower has restrooms',
      'Multiple tour operators in town'
    ],
    facilitiesEs: [
      'El aeropuerto de Nazca tiene instalaciones básicas',
      'La torre de observación tiene baños',
      'Múltiples operadores de tours en el pueblo'
    ]
  },
  {
    slug: 'kuelap',
    name: 'Kuelap Fortress',
    nameEs: 'Fortaleza de Kuelap',
    type: 'archaeological',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 3000,
    description: 'Often called the "Machu Picchu of the North," Kuelap is a massive stone fortress built by the Chachapoya cloud warriors. With walls up to 20 meters high and over 400 buildings, this pre-Inca citadel rivals Machu Picchu in grandeur but sees a fraction of the visitors.',
    descriptionEs: 'A menudo llamada el "Machu Picchu del Norte", Kuelap es una fortaleza masiva de piedra construida por los guerreros de las nubes Chachapoya. Con paredes de hasta 20 metros de alto y más de 400 edificios, esta ciudadela pre-inca rivaliza con Machu Picchu en grandeza pero recibe una fracción de los visitantes.',
    history: 'Built between 500-1500 AD by the Chachapoya civilization, Kuelap predates Machu Picchu by almost 1000 years. The Chachapoya were known as "Warriors of the Clouds" and successfully resisted Inca conquest until 1470.',
    historyEs: 'Construida entre 500-1500 DC por la civilización Chachapoya, Kuelap es casi 1000 años más antigua que Machu Picchu. Los Chachapoya eran conocidos como "Guerreros de las Nubes" y resistieron exitosamente la conquista inca hasta 1470.',
    highlights: [
      'Massive 20-meter walls',
      'Over 400 circular buildings',
      'Unique funnel-shaped entrances',
      'Cloud forest setting',
      'Cable car access',
      'Far fewer tourists than Machu Picchu'
    ],
    highlightsEs: [
      'Masivas paredes de 20 metros',
      'Más de 400 edificios circulares',
      'Únicas entradas en forma de embudo',
      'Entorno de bosque nuboso',
      'Acceso por teleférico',
      'Muchos menos turistas que Machu Picchu'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'moderate',
    entranceFee: 'S/30 (~$8) adults, S/15 children + cable car S/31',
    entranceFeeEs: 'S/30 (~$8) adultos, S/15 niños + teleférico S/31',
    bestTime: 'May-October (dry season) for clearest views',
    bestTimeEs: 'Mayo-octubre (temporada seca) para vistas más claras',
    tips: [
      'The cable car makes access much easier for families',
      'Bring rain gear - weather changes quickly in cloud forest',
      'Wear sturdy shoes for uneven terrain',
      'Less crowded than Machu Picchu - more exploration time',
      'Combine with Gocta waterfall for a full Chachapoyas experience'
    ],
    tipsEs: [
      'El teleférico hace el acceso mucho más fácil para familias',
      'Trae impermeable - el clima cambia rápido en el bosque nuboso',
      'Usa zapatos resistentes para terreno irregular',
      'Menos concurrido que Machu Picchu - más tiempo para explorar',
      'Combina con la catarata de Gocta para una experiencia completa de Chachapoyas'
    ],
    nearbyAttractions: ['gocta-waterfall', 'karajia', 'revash'],
    relatedSites: ['machu-picchu', 'chan-chan', 'caral'],
    gettingThere: 'Cable car from Nuevo Tingo (1.5 hours from Chachapoyas). Alternative hiking trail available.',
    gettingThereEs: 'Teleférico desde Nuevo Tingo (1.5 horas desde Chachapoyas). Sendero alternativo para caminar disponible.',
    facilities: [
      'Restrooms at cable car stations',
      'Small cafeteria at top',
      'Guides available',
      'No facilities inside the site'
    ],
    facilitiesEs: [
      'Baños en estaciones del teleférico',
      'Pequeña cafetería arriba',
      'Guías disponibles',
      'Sin instalaciones dentro del sitio'
    ]
  },
  {
    slug: 'huaca-sol-luna',
    name: 'Huaca del Sol y de la Luna',
    nameEs: 'Huaca del Sol y de la Luna',
    type: 'archaeological',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    altitude: 60,
    description: 'The Temples of the Sun and Moon were the religious and administrative centers of the Moche civilization. The Temple of the Moon features incredibly preserved polychrome murals depicting the fearsome deity Ai-Apaec.',
    descriptionEs: 'Los Templos del Sol y la Luna fueron los centros religiosos y administrativos de la civilización Moche. El Templo de la Luna presenta murales policromados increíblemente preservados que representan a la temible deidad Ai-Apaec.',
    history: 'Built between 100-700 AD by the Moche civilization, these temples were the capital of Moche culture. The Temple of the Moon was continuously modified over centuries, with each new layer of murals covering the last.',
    historyEs: 'Construidos entre 100-700 DC por la civilización Moche, estos templos fueron la capital de la cultura Moche. El Templo de la Luna fue continuamente modificado durante siglos, con cada nueva capa de murales cubriendo la anterior.',
    highlights: [
      'Vivid polychrome murals',
      'Ai-Apaec deity depictions',
      'Multiple construction layers',
      'On-site museum',
      'Less crowded than Chan Chan',
      'Insight into Moche civilization'
    ],
    highlightsEs: [
      'Vívidos murales policromados',
      'Representaciones de la deidad Ai-Apaec',
      'Múltiples capas de construcción',
      'Museo en el sitio',
      'Menos concurrido que Chan Chan',
      'Visión de la civilización Moche'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'S/15 (~$4) adults, S/5 children',
    entranceFeeEs: 'S/15 (~$4) adultos, S/5 niños',
    bestTime: 'Morning for best light on murals',
    bestTimeEs: 'Mañana para mejor luz en los murales',
    tips: [
      'Hire a guide to understand the complex iconography',
      'The murals are stunning - kids love the colorful images',
      'Combine with Chan Chan for a full day of archaeology',
      'Visit the small museum first for context',
      'Bring sun protection - limited shade'
    ],
    tipsEs: [
      'Contrata un guía para entender la compleja iconografía',
      'Los murales son impresionantes - a los niños les encantan las coloridas imágenes',
      'Combina con Chan Chan para un día completo de arqueología',
      'Visita primero el pequeño museo para contexto',
      'Trae protección solar - sombra limitada'
    ],
    nearbyAttractions: ['chan-chan', 'huanchaco', 'trujillo-centro'],
    relatedSites: ['chan-chan', 'sipan', 'tucume'],
    gettingThere: '8km south of Trujillo, 15-minute taxi ride.',
    gettingThereEs: '8km al sur de Trujillo, 15 minutos en taxi.',
    facilities: [
      'Small museum on site',
      'Restrooms',
      'Gift shop',
      'Guides available'
    ],
    facilitiesEs: [
      'Pequeño museo en el sitio',
      'Baños',
      'Tienda de regalos',
      'Guías disponibles'
    ]
  },
  {
    slug: 'sipan',
    name: 'Huaca Rajada - Lord of Sipán',
    nameEs: 'Huaca Rajada - Señor de Sipán',
    type: 'archaeological',
    city: 'chiclayo',
    region: 'Lambayeque Region',
    regionEs: 'Región Lambayeque',
    altitude: 50,
    description: 'The discovery of the Lord of Sipán tomb in 1987 was compared to finding King Tutankhamun. This Moche royal burial site revealed incredible gold artifacts and provided unprecedented insight into ancient Peruvian civilization.',
    descriptionEs: 'El descubrimiento de la tumba del Señor de Sipán en 1987 fue comparado con encontrar al Rey Tutankamón. Este sitio de entierro real Moche reveló increíbles artefactos de oro y proporcionó una visión sin precedentes de la antigua civilización peruana.',
    history: 'Discovered in 1987 by archaeologist Walter Alva, the tomb of the Lord of Sipán dates to around 200 AD. The untouched burial contained gold, silver, and copper ornaments, plus sacrificed attendants.',
    historyEs: 'Descubierta en 1987 por el arqueólogo Walter Alva, la tumba del Señor de Sipán data de alrededor del 200 DC. El entierro intacto contenía ornamentos de oro, plata y cobre, además de sirvientes sacrificados.',
    highlights: [
      'Original excavation site',
      'Multiple royal tombs discovered',
      'Replica tombs on display',
      'World-class Royal Tombs Museum nearby',
      'One of greatest archaeological finds',
      'Less touristy than southern Peru'
    ],
    highlightsEs: [
      'Sitio de excavación original',
      'Múltiples tumbas reales descubiertas',
      'Réplicas de tumbas en exhibición',
      'Museo Tumbas Reales de clase mundial cercano',
      'Uno de los mayores hallazgos arqueológicos',
      'Menos turístico que el sur de Perú'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '1.5-2 hours (site) + 2 hours (museum)',
    durationEs: '1.5-2 horas (sitio) + 2 horas (museo)',
    difficulty: 'easy',
    entranceFee: 'Huaca S/10, Royal Tombs Museum S/15',
    entranceFeeEs: 'Huaca S/10, Museo Tumbas Reales S/15',
    bestTime: 'Any time - desert climate',
    bestTimeEs: 'Cualquier momento - clima desértico',
    tips: [
      'Visit both the huaca AND the Royal Tombs Museum in Lambayeque',
      'The museum is world-class and air-conditioned',
      'Kids fascinated by the gold and treasure story',
      'Hire a guide to understand the significance',
      'Less crowded than Cusco sites'
    ],
    tipsEs: [
      'Visita tanto la huaca COMO el Museo Tumbas Reales en Lambayeque',
      'El museo es de clase mundial y tiene aire acondicionado',
      'Los niños quedan fascinados por la historia del oro y el tesoro',
      'Contrata un guía para entender la importancia',
      'Menos concurrido que los sitios de Cusco'
    ],
    nearbyAttractions: ['tucume', 'bruning-museum', 'pimentel'],
    relatedSites: ['huaca-sol-luna', 'chan-chan', 'tucume'],
    gettingThere: '35km east of Chiclayo, 45-minute drive.',
    gettingThereEs: '35km al este de Chiclayo, 45 minutos en auto.',
    facilities: [
      'Small site museum',
      'Restrooms',
      'Guides available',
      'Parking'
    ],
    facilitiesEs: [
      'Pequeño museo del sitio',
      'Baños',
      'Guías disponibles',
      'Estacionamiento'
    ]
  },
  {
    slug: 'uros-islands',
    name: 'Uros Floating Islands',
    nameEs: 'Islas Flotantes de los Uros',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3812,
    description: 'The Uros people have lived on floating islands made of totora reeds for centuries. Walking on these bouncy, man-made islands and learning about this unique lifestyle is one of Peru\'s most memorable family experiences.',
    descriptionEs: 'El pueblo Uros ha vivido en islas flotantes hechas de totora durante siglos. Caminar sobre estas esponjosas islas artificiales y aprender sobre este estilo de vida único es una de las experiencias familiares más memorables de Perú.',
    history: 'The Uros people originally created their floating islands to escape conflict with the Inca and Colla peoples. Today, about 2,000 Uros live on roughly 100 floating islands, maintaining traditions while adapting to tourism.',
    historyEs: 'El pueblo Uros originalmente creó sus islas flotantes para escapar del conflicto con los pueblos Inca y Colla. Hoy, alrededor de 2,000 Uros viven en aproximadamente 100 islas flotantes, manteniendo tradiciones mientras se adaptan al turismo.',
    highlights: [
      'Walk on bouncy reed islands',
      'Traditional totora reed construction',
      'Reed boat rides',
      'Meet local Uros families',
      'Buy handmade crafts',
      'Incredible photo opportunities'
    ],
    highlightsEs: [
      'Camina sobre esponjosas islas de totora',
      'Construcción tradicional de totora',
      'Paseos en botes de totora',
      'Conoce familias Uros locales',
      'Compra artesanías hechas a mano',
      'Increíbles oportunidades fotográficas'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'S/15 (~$4) per person',
    entranceFeeEs: 'S/15 (~$4) por persona',
    bestTime: 'Morning for best light and fewer crowds',
    bestTimeEs: 'Mañana para mejor luz y menos gente',
    tips: [
      'Kids love the bouncy feeling of walking on reeds',
      'Take a reed boat ride - it\'s included in most tours',
      'Buy crafts to support the community',
      'Ask permission before taking photos of people',
      'Islands closest to Puno are most touristy',
      'Can combine with Taquile for full day'
    ],
    tipsEs: [
      'A los niños les encanta la sensación esponjosa de caminar sobre totora',
      'Toma un paseo en bote de totora - está incluido en la mayoría de tours',
      'Compra artesanías para apoyar a la comunidad',
      'Pide permiso antes de tomar fotos de personas',
      'Las islas más cercanas a Puno son las más turísticas',
      'Se puede combinar con Taquile para un día completo'
    ],
    nearbyAttractions: ['taquile-island', 'amantani-island', 'sillustani'],
    relatedSites: ['taquile-island', 'lake-titicaca'],
    gettingThere: '30-45 minute boat ride from Puno port. Tours depart daily.',
    gettingThereEs: '30-45 minutos en bote desde el puerto de Puno. Tours salen diariamente.',
    facilities: [
      'Basic toilets on some islands',
      'Handicraft stalls',
      'Some islands have restaurants',
      'No ATMs'
    ],
    facilitiesEs: [
      'Baños básicos en algunas islas',
      'Puestos de artesanías',
      'Algunas islas tienen restaurantes',
      'Sin cajeros automáticos'
    ]
  },
  {
    slug: 'taquile-island',
    name: 'Taquile Island',
    nameEs: 'Isla Taquile',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3950,
    description: 'A beautiful island in Lake Titicaca where traditional Quechua culture thrives. Famous for its intricate textiles made by men, Taquile offers stunning lake views, pre-Inca ruins, and an authentic glimpse into Andean community life.',
    descriptionEs: 'Una hermosa isla en el Lago Titicaca donde prospera la cultura quechua tradicional. Famosa por sus intrincados textiles hechos por hombres, Taquile ofrece impresionantes vistas del lago, ruinas pre-incas y una auténtica mirada a la vida comunitaria andina.',
    history: 'The island has been inhabited for thousands of years, with ruins dating to pre-Inca times. The textile traditions were recognized by UNESCO as Intangible Cultural Heritage in 2005. Men do all the knitting, learning from age 8.',
    historyEs: 'La isla ha sido habitada por miles de años, con ruinas que datan de tiempos pre-incas. Las tradiciones textiles fueron reconocidas por UNESCO como Patrimonio Cultural Inmaterial en 2005. Los hombres hacen todo el tejido, aprendiendo desde los 8 años.',
    highlights: [
      'UNESCO-recognized textile traditions',
      'Stunning lake panoramas',
      'Traditional Quechua culture',
      'Pre-Inca ruins',
      'Men knitting intricate textiles',
      'Community-run tourism'
    ],
    highlightsEs: [
      'Tradiciones textiles reconocidas por UNESCO',
      'Impresionantes panoramas del lago',
      'Cultura quechua tradicional',
      'Ruinas pre-incas',
      'Hombres tejiendo intrincados textiles',
      'Turismo comunitario'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '4-5 hours (half day) or overnight',
    durationEs: '4-5 horas (medio día) o noche',
    difficulty: 'moderate',
    entranceFee: 'S/10 (~$3) per person',
    entranceFeeEs: 'S/10 (~$3) por persona',
    bestTime: 'May-October for best weather',
    bestTimeEs: 'Mayo-octubre para mejor clima',
    tips: [
      'The hike from the port to the village is steep (500+ steps)',
      'Take it slowly due to altitude',
      'Buy textiles directly from the weavers',
      'Lunch in local restaurants with lake views',
      'Can combine with Uros in one day',
      'Overnight homestays available'
    ],
    tipsEs: [
      'La caminata desde el puerto al pueblo es empinada (500+ escalones)',
      'Ve despacio por la altitud',
      'Compra textiles directamente de los tejedores',
      'Almuerza en restaurantes locales con vistas al lago',
      'Se puede combinar con Uros en un día',
      'Estadías con familias disponibles para pernoctar'
    ],
    nearbyAttractions: ['uros-islands', 'amantani-island', 'lake-titicaca'],
    relatedSites: ['uros-islands', 'amantani-island'],
    gettingThere: '3-hour boat ride from Puno (usually combined with Uros visit).',
    gettingThereEs: '3 horas en bote desde Puno (usualmente combinado con visita a Uros).',
    facilities: [
      'Basic restaurants',
      'Simple restrooms',
      'Handicraft shops',
      'Basic homestay accommodation'
    ],
    facilitiesEs: [
      'Restaurantes básicos',
      'Baños simples',
      'Tiendas de artesanías',
      'Alojamiento básico con familias'
    ]
  },
  {
    slug: 'huayna-picchu',
    name: 'Huayna Picchu',
    nameEs: 'Huayna Picchu',
    type: 'archaeological',
    city: 'aguas-calientes',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2720,
    description: 'The iconic peak that towers behind Machu Picchu, Huayna Picchu offers a challenging climb rewarded with breathtaking aerial views of the citadel. Ancient temples and terraces cling to its steep slopes.',
    descriptionEs: 'El icónico pico que se eleva detrás de Machu Picchu, Huayna Picchu ofrece una escalada desafiante recompensada con impresionantes vistas aéreas de la ciudadela. Templos antiguos y terrazas se aferran a sus empinadas laderas.',
    history: 'Huayna Picchu served as a lookout point and site for astronomical observations during Inca times. The Temple of the Moon is located in a cave on the mountain\'s north face.',
    historyEs: 'Huayna Picchu sirvió como punto de observación y sitio para observaciones astronómicas durante tiempos incas. El Templo de la Luna está ubicado en una cueva en la cara norte de la montaña.',
    highlights: [
      'Bird\'s-eye view of Machu Picchu',
      'Ancient Inca temples',
      'Temple of the Moon (cave temple)',
      'Thrilling steep climb',
      'Limited daily visitors',
      'Ultimate photo opportunity'
    ],
    highlightsEs: [
      'Vista aérea de Machu Picchu',
      'Templos incas antiguos',
      'Templo de la Luna (templo en cueva)',
      'Emocionante escalada empinada',
      'Visitantes diarios limitados',
      'Oportunidad fotográfica definitiva'
    ],
    familyRating: 2,
    minAge: 12,
    duration: '2-3 hours (add to Machu Picchu visit)',
    durationEs: '2-3 horas (agregar a visita de Machu Picchu)',
    difficulty: 'challenging',
    entranceFee: 'Included in Machu Picchu + Huayna Picchu ticket (~$75)',
    entranceFeeEs: 'Incluido en boleto Machu Picchu + Huayna Picchu (~$75)',
    bestTime: 'First entry time (7am) for clearer views',
    bestTimeEs: 'Primera hora de entrada (7am) para vistas más claras',
    tips: [
      'NOT recommended for young children - very steep and exposed',
      'Only 400 visitors per day - book months ahead',
      'The climb has steep steps and requires hands',
      'Acrophobia (fear of heights) is a real concern',
      'Temple of the Moon adds 1-2 hours extra',
      'Rain makes the trail dangerous'
    ],
    tipsEs: [
      'NO recomendado para niños pequeños - muy empinado y expuesto',
      'Solo 400 visitantes por día - reserva con meses de anticipación',
      'La escalada tiene escalones empinados y requiere usar las manos',
      'La acrofobia (miedo a las alturas) es una preocupación real',
      'El Templo de la Luna agrega 1-2 horas extra',
      'La lluvia hace el sendero peligroso'
    ],
    nearbyAttractions: ['machu-picchu', 'sun-gate', 'inca-bridge'],
    relatedSites: ['machu-picchu', 'machu-picchu-mountain'],
    gettingThere: 'Access from within Machu Picchu citadel. Must have specific ticket.',
    gettingThereEs: 'Acceso desde dentro de la ciudadela de Machu Picchu. Debe tener boleto específico.',
    facilities: [
      'Sign-in book at entrance',
      'No facilities on the mountain',
      'Use Machu Picchu restrooms before climbing'
    ],
    facilitiesEs: [
      'Libro de registro en la entrada',
      'Sin instalaciones en la montaña',
      'Usa los baños de Machu Picchu antes de subir'
    ]
  },
  {
    slug: 'sun-gate',
    name: 'Inti Punku (Sun Gate)',
    nameEs: 'Inti Punku (Puerta del Sol)',
    type: 'archaeological',
    city: 'aguas-calientes',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 2720,
    description: 'The ancient entrance to Machu Picchu on the Inca Trail, the Sun Gate rewards hikers with the iconic first view of the citadel. A moderate uphill hike from Machu Picchu makes this achievable for many families.',
    descriptionEs: 'La antigua entrada a Machu Picchu en el Camino Inca, la Puerta del Sol recompensa a los excursionistas con la icónica primera vista de la ciudadela. Una caminata moderada cuesta arriba desde Machu Picchu hace esto alcanzable para muchas familias.',
    history: 'Inti Punku was the main entrance for pilgrims arriving at Machu Picchu via the Inca Trail. The structure is aligned so that the sun rises through it during the winter solstice (June 21).',
    historyEs: 'Inti Punku era la entrada principal para peregrinos que llegaban a Machu Picchu por el Camino Inca. La estructura está alineada para que el sol salga a través de ella durante el solsticio de invierno (21 de junio).',
    highlights: [
      'Classic postcard view of Machu Picchu',
      'End point of the Inca Trail',
      'Well-preserved Inca structure',
      'Solstice alignment',
      'Less crowded than main citadel',
      'Easier than Huayna Picchu'
    ],
    highlightsEs: [
      'Vista clásica de postal de Machu Picchu',
      'Punto final del Camino Inca',
      'Estructura inca bien preservada',
      'Alineamiento del solsticio',
      'Menos concurrido que la ciudadela principal',
      'Más fácil que Huayna Picchu'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '1.5-2 hours round trip from citadel',
    durationEs: '1.5-2 horas ida y vuelta desde la ciudadela',
    difficulty: 'moderate',
    entranceFee: 'Included in Machu Picchu entry ticket',
    entranceFeeEs: 'Incluido en boleto de entrada a Machu Picchu',
    bestTime: 'Early morning for best light and fewer people',
    bestTimeEs: 'Temprano en la mañana para mejor luz y menos gente',
    tips: [
      'More achievable for families than Huayna Picchu',
      'About 1 hour uphill walk from the citadel',
      'The path is clear but has steep sections',
      'Bring water and snacks',
      'Rest frequently due to altitude',
      'The view back to Machu Picchu is incredible'
    ],
    tipsEs: [
      'Más alcanzable para familias que Huayna Picchu',
      'Aproximadamente 1 hora de caminata cuesta arriba desde la ciudadela',
      'El camino es claro pero tiene secciones empinadas',
      'Trae agua y snacks',
      'Descansa frecuentemente por la altitud',
      'La vista de regreso a Machu Picchu es increíble'
    ],
    nearbyAttractions: ['machu-picchu', 'huayna-picchu', 'inca-bridge'],
    relatedSites: ['machu-picchu', 'huayna-picchu'],
    gettingThere: 'Walk from within Machu Picchu citadel, following signs to Inti Punku.',
    gettingThereEs: 'Camina desde dentro de la ciudadela de Machu Picchu, siguiendo señales hacia Inti Punku.',
    facilities: [
      'No facilities on the trail',
      'Use Machu Picchu restrooms before hiking',
      'Bring your own water and food'
    ],
    facilitiesEs: [
      'Sin instalaciones en el sendero',
      'Usa los baños de Machu Picchu antes de caminar',
      'Trae tu propia agua y comida'
    ]
  },
  {
    slug: 'tambomachay',
    name: 'Tambomachay (Inca Baths)',
    nameEs: 'Tambomachay (Baños del Inca)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3765,
    description: 'A sacred Inca site dedicated to water worship, Tambomachay features impressive fountains fed by natural springs that still flow today. The hydraulic engineering demonstrates the Inca mastery of water management.',
    descriptionEs: 'Un sitio inca sagrado dedicado al culto al agua, Tambomachay presenta impresionantes fuentes alimentadas por manantiales naturales que aún fluyen hoy. La ingeniería hidráulica demuestra el dominio inca del manejo del agua.',
    history: 'Tambomachay was likely a royal retreat and ceremonial bathing site for Inca nobility. The site showcases the religious importance of water in Inca culture and their advanced engineering skills.',
    historyEs: 'Tambomachay fue probablemente un retiro real y sitio de baño ceremonial para la nobleza inca. El sitio muestra la importancia religiosa del agua en la cultura inca y sus avanzadas habilidades de ingeniería.',
    highlights: [
      'Perfectly functioning ancient fountains',
      'Inca hydraulic engineering',
      'Beautiful stone masonry',
      'Part of Cusco circuit tour',
      'Peaceful atmosphere',
      'Natural spring water'
    ],
    highlightsEs: [
      'Fuentes antiguas funcionando perfectamente',
      'Ingeniería hidráulica inca',
      'Hermosa mampostería de piedra',
      'Parte del circuito turístico de Cusco',
      'Atmósfera pacífica',
      'Agua de manantial natural'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '30-45 minutes',
    durationEs: '30-45 minutos',
    difficulty: 'easy',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Morning for best light',
    bestTimeEs: 'Mañana para mejor luz',
    tips: [
      'Usually visited as part of the 4-ruins circuit',
      'Kids love seeing water still flowing through Inca channels',
      'Combine with Sacsayhuamán, Qenqo, and Puca Pucara',
      'The site is small - don\'t over-schedule',
      'Local vendors sell crafts nearby'
    ],
    tipsEs: [
      'Usualmente visitado como parte del circuito de 4 ruinas',
      'A los niños les encanta ver el agua aún fluyendo por canales incas',
      'Combina con Sacsayhuamán, Qenqo y Puca Pucara',
      'El sitio es pequeño - no llenes demasiado tu agenda',
      'Vendedores locales venden artesanías cerca'
    ],
    nearbyAttractions: ['qenqo', 'sacsayhuaman', 'puca-pucara'],
    relatedSites: ['sacsayhuaman', 'qenqo', 'tipón'],
    gettingThere: '8km from Cusco, 20-minute drive. Part of the northern ruins circuit.',
    gettingThereEs: '8km desde Cusco, 20 minutos en auto. Parte del circuito de ruinas del norte.',
    facilities: [
      'Basic restrooms nearby',
      'Vendors selling snacks',
      'Parking available'
    ],
    facilitiesEs: [
      'Baños básicos cerca',
      'Vendedores vendiendo snacks',
      'Estacionamiento disponible'
    ]
  },
  {
    slug: 'qenqo',
    name: 'Q\'enqo',
    nameEs: 'Q\'enqo',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3680,
    description: 'A fascinating ceremonial site carved from a massive limestone outcrop, Q\'enqo features zigzag channels (its name means "labyrinth" in Quechua), underground caves, and an amphitheater. Kids love exploring the mysterious passageways.',
    descriptionEs: 'Un fascinante sitio ceremonial tallado en un masivo afloramiento de piedra caliza, Q\'enqo presenta canales en zigzag (su nombre significa "laberinto" en quechua), cuevas subterráneas y un anfiteatro. A los niños les encanta explorar los misteriosos pasadizos.',
    history: 'Q\'enqo was an important huaca (sacred place) used for ceremonies including mummification and astronomical observations. The zigzag channels were used to pour chicha (corn beer) during rituals.',
    historyEs: 'Q\'enqo fue una importante huaca (lugar sagrado) usada para ceremonias incluyendo momificación y observaciones astronómicas. Los canales en zigzag se usaban para verter chicha (cerveza de maíz) durante rituales.',
    highlights: [
      'Underground caves and tunnels',
      'Zigzag carved channels',
      'Natural rock amphitheater',
      'Altar and ceremonial stone',
      'Fun exploration for kids',
      'Part of Cusco circuit'
    ],
    highlightsEs: [
      'Cuevas y túneles subterráneos',
      'Canales tallados en zigzag',
      'Anfiteatro natural de roca',
      'Altar y piedra ceremonial',
      'Exploración divertida para niños',
      'Parte del circuito de Cusco'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '30-45 minutes',
    durationEs: '30-45 minutos',
    difficulty: 'easy',
    entranceFee: 'Included in Cusco Tourist Ticket (~$40)',
    entranceFeeEs: 'Incluido en el Boleto Turístico de Cusco (~$40)',
    bestTime: 'Any time - partially shaded',
    bestTimeEs: 'Cualquier momento - parcialmente sombreado',
    tips: [
      'Kids love exploring the cave passages',
      'Bring a flashlight for the underground areas',
      'Watch your head in low passages',
      'Combine with other nearby ruins',
      'The carvings are mysterious and spark imagination',
      'Less crowded than Sacsayhuamán'
    ],
    tipsEs: [
      'A los niños les encanta explorar los pasajes de las cuevas',
      'Trae una linterna para las áreas subterráneas',
      'Cuidado con tu cabeza en pasajes bajos',
      'Combina con otras ruinas cercanas',
      'Los tallados son misteriosos y despiertan la imaginación',
      'Menos concurrido que Sacsayhuamán'
    ],
    nearbyAttractions: ['sacsayhuaman', 'tambomachay', 'puca-pucara'],
    relatedSites: ['sacsayhuaman', 'tambomachay'],
    gettingThere: '4km from Cusco\'s Plaza de Armas. Can walk from Sacsayhuamán.',
    gettingThereEs: '4km desde la Plaza de Armas de Cusco. Se puede caminar desde Sacsayhuamán.',
    facilities: [
      'Basic facilities nearby',
      'Vendors selling crafts',
      'Part of circuit with other sites'
    ],
    facilitiesEs: [
      'Instalaciones básicas cerca',
      'Vendedores vendiendo artesanías',
      'Parte del circuito con otros sitios'
    ]
  },
  {
    slug: 'gocta-waterfall',
    name: 'Gocta Waterfall',
    nameEs: 'Catarata de Gocta',
    type: 'natural',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 1771,
    description: 'One of the world\'s tallest waterfalls at 771 meters (2,530 feet), Gocta was only "discovered" by the outside world in 2005. The dramatic two-tier cascade plunges through lush cloud forest, accessible via a rewarding jungle hike.',
    descriptionEs: 'Una de las cataratas más altas del mundo con 771 metros (2,530 pies), Gocta solo fue "descubierta" por el mundo exterior en 2005. La dramática cascada de dos niveles se precipita a través de un exuberante bosque nuboso, accesible mediante una gratificante caminata por la selva.',
    history: 'Local villagers kept Gocta secret for centuries, fearing a curse. German researcher Stefan Ziemendorff brought it to international attention in 2005, making it one of the world\'s most recently "discovered" major waterfalls.',
    historyEs: 'Los aldeanos locales mantuvieron Gocta en secreto durante siglos, temiendo una maldición. El investigador alemán Stefan Ziemendorff la dio a conocer internacionalmente en 2005, convirtiéndola en una de las cascadas importantes más recientemente "descubiertas" del mundo.',
    highlights: [
      '771m tall - one of world\'s highest',
      'Two-tier dramatic cascade',
      'Cloud forest scenery',
      'Bird watching opportunities',
      'Refreshing pool at base',
      'Recently discovered wonder'
    ],
    highlightsEs: [
      '771m de altura - una de las más altas del mundo',
      'Dramática cascada de dos niveles',
      'Paisaje de bosque nuboso',
      'Oportunidades de observación de aves',
      'Refrescante poza en la base',
      'Maravilla recientemente descubierta'
    ],
    familyRating: 4,
    minAge: 8,
    duration: '4-5 hours (round trip hike)',
    durationEs: '4-5 horas (caminata ida y vuelta)',
    difficulty: 'moderate',
    entranceFee: 'S/10 (~$3) entrance + local guide (~$30)',
    entranceFeeEs: 'S/10 (~$3) entrada + guía local (~$30)',
    bestTime: 'May-September (dry season) for best visibility',
    bestTimeEs: 'Mayo-septiembre (temporada seca) para mejor visibilidad',
    tips: [
      'The hike is 5km each way - suitable for active families',
      'Hire a local guide from the village',
      'Bring waterproof layer - cloud forest is misty',
      'The pool at the base is cold but refreshing',
      'Can visit upper or lower falls - lower is longer hike',
      'Bring lunch and plenty of water'
    ],
    tipsEs: [
      'La caminata es de 5km en cada dirección - apta para familias activas',
      'Contrata un guía local del pueblo',
      'Trae capa impermeable - el bosque nuboso es brumoso',
      'La poza en la base es fría pero refrescante',
      'Se puede visitar cascada superior o inferior - la inferior es caminata más larga',
      'Trae almuerzo y mucha agua'
    ],
    nearbyAttractions: ['kuelap', 'karajia', 'revash'],
    relatedSites: ['kuelap', 'colca-canyon'],
    gettingThere: '1 hour from Chachapoyas to Cocachimba village, then hike.',
    gettingThereEs: '1 hora desde Chachapoyas al pueblo de Cocachimba, luego caminata.',
    facilities: [
      'Simple restaurants in village',
      'Local guides available',
      'Basic restrooms at trailhead',
      'No facilities on trail'
    ],
    facilitiesEs: [
      'Restaurantes simples en el pueblo',
      'Guías locales disponibles',
      'Baños básicos en el inicio del sendero',
      'Sin instalaciones en el sendero'
    ]
  },
  {
    slug: 'caral',
    name: 'Caral - Sacred City',
    nameEs: 'Caral - Ciudad Sagrada',
    type: 'archaeological',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 350,
    description: 'The oldest city in the Americas, Caral dates back 5,000 years - contemporary with ancient Egypt. This UNESCO World Heritage Site features six pyramids and reveals a sophisticated civilization that developed without pottery or writing.',
    descriptionEs: 'La ciudad más antigua de las Américas, Caral data de hace 5,000 años - contemporánea del antiguo Egipto. Este Patrimonio de la Humanidad de la UNESCO presenta seis pirámides y revela una civilización sofisticada que se desarrolló sin cerámica ni escritura.',
    history: 'Caral flourished between 3000-1800 BC, making it older than the Egyptian pyramids at Giza. The Norte Chico civilization built the complex without knowledge of pottery or writing, yet developed advanced agriculture and architecture.',
    historyEs: 'Caral floreció entre 3000-1800 AC, haciéndola más antigua que las pirámides egipcias de Giza. La civilización de Norte Chico construyó el complejo sin conocimiento de cerámica ni escritura, pero desarrolló agricultura y arquitectura avanzadas.',
    highlights: [
      '5,000 years old - oldest in Americas',
      'Six pyramid complexes',
      'Contemporary with ancient Egypt',
      'UNESCO World Heritage Site',
      'Amphitheater and plazas',
      'Off-the-beaten-path experience'
    ],
    highlightsEs: [
      '5,000 años de antigüedad - la más antigua de las Américas',
      'Seis complejos piramidales',
      'Contemporánea del antiguo Egipto',
      'Patrimonio de la Humanidad UNESCO',
      'Anfiteatro y plazas',
      'Experiencia fuera de lo común'
    ],
    familyRating: 3,
    minAge: 7,
    duration: '2-3 hours (plus travel)',
    durationEs: '2-3 horas (más viaje)',
    difficulty: 'easy',
    entranceFee: 'S/11 (~$3) adults, S/5 children',
    entranceFeeEs: 'S/11 (~$3) adultos, S/5 niños',
    bestTime: 'Year-round (desert climate)',
    bestTimeEs: 'Todo el año (clima desértico)',
    tips: [
      'Hire a guide to understand the significance',
      'Bring water and sun protection - no shade',
      'The remoteness is part of the experience',
      'Kids can grasp "older than pyramids"',
      'Can be done as Lima day trip but it\'s far',
      'Combine with beach town of Huacho'
    ],
    tipsEs: [
      'Contrata un guía para entender la importancia',
      'Trae agua y protección solar - sin sombra',
      'La lejanía es parte de la experiencia',
      'Los niños pueden entender "más antiguo que las pirámides"',
      'Se puede hacer como excursión de un día desde Lima pero está lejos',
      'Combina con el pueblo costero de Huacho'
    ],
    nearbyAttractions: ['bandurria', 'huacho', 'lomas-de-lachay'],
    relatedSites: ['pachacamac', 'chan-chan', 'sipan'],
    gettingThere: '4 hours north of Lima by car. Tours available from Lima.',
    gettingThereEs: '4 horas al norte de Lima en auto. Tours disponibles desde Lima.',
    facilities: [
      'Small visitor center',
      'Restrooms',
      'Parking',
      'Guides available',
      'No food on site'
    ],
    facilitiesEs: [
      'Pequeño centro de visitantes',
      'Baños',
      'Estacionamiento',
      'Guías disponibles',
      'Sin comida en el sitio'
    ]
  },
  {
    slug: 'pachacamac',
    name: 'Pachacamac',
    nameEs: 'Pachacámac',
    type: 'archaeological',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 75,
    description: 'One of Peru\'s most important pilgrimage centers for over 1,000 years, Pachacamac was a massive ceremonial complex dedicated to the creator god of the same name. Located just south of Lima, it offers an easy introduction to pre-Columbian Peru.',
    descriptionEs: 'Uno de los centros de peregrinación más importantes de Perú por más de 1,000 años, Pachacámac fue un masivo complejo ceremonial dedicado al dios creador del mismo nombre. Ubicado al sur de Lima, ofrece una fácil introducción al Perú precolombino.',
    history: 'Inhabited since 200 AD, Pachacamac was an oracle site revered by successive cultures including the Lima, Wari, and Inca. The Spanish found it still active in 1533, when pilgrims came from across the Andes seeking prophecies. The Incas built their Temple of the Sun here, integrating rather than destroying the existing religious complex.',
    historyEs: 'Habitado desde 200 DC, Pachacámac fue un sitio de oráculo venerado por culturas sucesivas incluyendo Lima, Wari e Inca. Los españoles lo encontraron aún activo en 1533, cuando peregrinos venían de todos los Andes buscando profecías. Los Incas construyeron su Templo del Sol aquí, integrando en lugar de destruir el complejo religioso existente.',
    highlights: [
      'Temple of the Sun',
      'Painted Temple (oldest structure)',
      'Excellent on-site museum',
      'Ocean views from pyramids',
      'Ancient pilgrimage routes',
      'Well-preserved adobes'
    ],
    highlightsEs: [
      'Templo del Sol',
      'Templo Pintado (estructura más antigua)',
      'Excelente museo en el sitio',
      'Vistas al océano desde las pirámides',
      'Antiguas rutas de peregrinación',
      'Adobes bien conservados'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$5, Children half price',
    entranceFeeEs: 'Adultos ~$5, Niños mitad de precio',
    bestTime: 'Morning before heat, year-round',
    bestTimeEs: 'Mañana antes del calor, todo el año',
    tips: [
      'Start at the excellent museum',
      'Rent a bike to cover the large site',
      'Combine with beach lunch at Lurín',
      'Less crowded than Machu Picchu',
      'Great Lima day trip option',
      'Bring sun protection - no shade'
    ],
    tipsEs: [
      'Empieza en el excelente museo',
      'Alquila una bicicleta para cubrir el gran sitio',
      'Combina con almuerzo en la playa de Lurín',
      'Menos lleno que Machu Picchu',
      'Gran opción de excursión de un día desde Lima',
      'Trae protección solar - sin sombra'
    ],
    nearbyAttractions: ['lurin-beach', 'mamacona'],
    relatedSites: ['huaca-pucllana', 'caral', 'chan-chan'],
    gettingThere: '45 minutes south of Lima center. Taxi or tour recommended.',
    gettingThereEs: '45 minutos al sur del centro de Lima. Taxi o tour recomendado.',
    facilities: [
      'Modern museum',
      'Restrooms',
      'Bike rentals',
      'Cafeteria',
      'Guides available',
      'Parking'
    ],
    facilitiesEs: [
      'Museo moderno',
      'Baños',
      'Alquiler de bicicletas',
      'Cafetería',
      'Guías disponibles',
      'Estacionamiento'
    ]
  },
  {
    slug: 'huaca-pucllana',
    name: 'Huaca Pucllana',
    nameEs: 'Huaca Pucllana',
    type: 'archaeological',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 120,
    description: 'A massive adobe pyramid in the heart of trendy Miraflores, Huaca Pucllana offers a unique contrast between ancient and modern Lima. Night tours with dramatic lighting make this one of Lima\'s most memorable cultural experiences.',
    descriptionEs: 'Una enorme pirámide de adobe en el corazón del moderno Miraflores, Huaca Pucllana ofrece un contraste único entre la Lima antigua y moderna. Los tours nocturnos con iluminación dramática hacen de esta una de las experiencias culturales más memorables de Lima.',
    history: 'Built by the Lima culture between 200-700 AD, this ceremonial center was constructed using millions of handmade adobe bricks arranged in a distinctive "bookshelf" pattern for earthquake resistance. The Wari culture later used it as a cemetery. Remarkably, it survived surrounded by modern development.',
    historyEs: 'Construido por la cultura Lima entre 200-700 DC, este centro ceremonial fue construido usando millones de ladrillos de adobe hechos a mano arreglados en un distintivo patrón de "librero" para resistencia sísmica. La cultura Wari lo usó después como cementerio. Notablemente, sobrevivió rodeado de desarrollo moderno.',
    highlights: [
      'Night tours with dramatic lighting',
      'Ancient pyramid meets modern city',
      'On-site gourmet restaurant',
      'Small museum with artifacts',
      'Resident colony of cats',
      'Unique "bookshelf" brick pattern'
    ],
    highlightsEs: [
      'Tours nocturnos con iluminación dramática',
      'Pirámide antigua encuentra ciudad moderna',
      'Restaurante gourmet en el sitio',
      'Pequeño museo con artefactos',
      'Colonia residente de gatos',
      'Patrón único de ladrillos en "librero"'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$5, Children ~$2.50',
    entranceFeeEs: 'Adultos ~$5, Niños ~$2.50',
    bestTime: 'Night tours (7pm-10pm) are magical',
    bestTimeEs: 'Tours nocturnos (7pm-10pm) son mágicos',
    tips: [
      'Night tour is highly recommended',
      'Book dinner at the restaurant after',
      'Walking distance from Miraflores hotels',
      'Great for jet-lagged first evening',
      'Flat and accessible',
      'Kids love spotting the resident cats'
    ],
    tipsEs: [
      'Tour nocturno es altamente recomendado',
      'Reserva cena en el restaurante después',
      'A distancia caminable de hoteles de Miraflores',
      'Genial para la primera noche con jet lag',
      'Plano y accesible',
      'A los niños les encanta buscar los gatos residentes'
    ],
    nearbyAttractions: ['parque-kennedy', 'larcomar', 'malecon'],
    relatedSites: ['pachacamac', 'caral'],
    gettingThere: 'Central Miraflores. Walking distance from most hotels, or short taxi.',
    gettingThereEs: 'Centro de Miraflores. A distancia caminable de la mayoría de hoteles, o taxi corto.',
    facilities: [
      'Small museum',
      'Restrooms',
      'Gourmet restaurant',
      'Gift shop',
      'Wheelchair accessible paths',
      'Guides included in tour'
    ],
    facilitiesEs: [
      'Pequeño museo',
      'Baños',
      'Restaurante gourmet',
      'Tienda de regalos',
      'Caminos accesibles para sillas de ruedas',
      'Guías incluidos en el tour'
    ]
  },
  {
    slug: 'chavin-de-huantar',
    name: 'Chavín de Huántar',
    nameEs: 'Chavín de Huántar',
    type: 'archaeological',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 3177,
    description: 'A UNESCO World Heritage Site and one of Peru\'s most important pre-Inca monuments, Chavín de Huántar was the religious center of the Chavín culture (1500-300 BC). The underground galleries and carved stone monuments create a mysterious, unforgettable experience.',
    descriptionEs: 'Patrimonio Mundial de la UNESCO y uno de los monumentos preincas más importantes de Perú, Chavín de Huántar fue el centro religioso de la cultura Chavín (1500-300 AC). Las galerías subterráneas y monumentos de piedra tallada crean una experiencia misteriosa e inolvidable.',
    history: 'Chavín was a major pilgrimage center for over 1,000 years, where priest-shamans used psychedelic San Pedro cactus to commune with the gods. The iconic Lanzón monolith depicting a fanged deity still stands in its underground chamber. The culture\'s art style influenced civilizations across ancient Peru.',
    historyEs: 'Chavín fue un importante centro de peregrinación por más de 1,000 años, donde sacerdotes-chamanes usaban el cactus psicodélico San Pedro para comunicarse con los dioses. El icónico monolito Lanzón representando una deidad con colmillos aún permanece en su cámara subterránea. El estilo artístico de la cultura influyó civilizaciones en todo el Perú antiguo.',
    highlights: [
      'Underground labyrinth galleries',
      'Lanzón monolith (4.5m stone deity)',
      'Circular sunken plaza',
      'Carved Tello Obelisk',
      'Excellent on-site museum',
      'Dramatic mountain setting'
    ],
    highlightsEs: [
      'Galerías laberínticas subterráneas',
      'Monolito Lanzón (deidad de piedra de 4.5m)',
      'Plaza circular hundida',
      'Obelisco Tello tallado',
      'Excelente museo en el sitio',
      'Escenario dramático de montañas'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    entranceFee: 'Adults ~$5, Children half price',
    entranceFeeEs: 'Adultos ~$5, Niños mitad de precio',
    bestTime: 'Dry season (May-October), morning visits',
    bestTimeEs: 'Temporada seca (mayo-octubre), visitas matutinas',
    tips: [
      'Underground galleries can be tight - claustrophobes beware',
      'Visit the modern museum first for context',
      'Full-day tour from Huaraz recommended',
      'The journey through mountains is spectacular',
      'Older kids fascinated by the mystery',
      'Flashlight helpful for galleries'
    ],
    tipsEs: [
      'Las galerías subterráneas pueden ser estrechas - cuidado claustrofóbicos',
      'Visita el museo moderno primero para contexto',
      'Tour de día completo desde Huaraz recomendado',
      'El viaje por las montañas es espectacular',
      'Niños mayores fascinados por el misterio',
      'Linterna útil para las galerías'
    ],
    nearbyAttractions: ['querococha-lake', 'huantar-town'],
    relatedSites: ['sechin', 'caral', 'kotosh'],
    gettingThere: '4-hour tour from Huaraz through Kawish tunnel.',
    gettingThereEs: 'Tour de 4 horas desde Huaraz a través del túnel Kawish.',
    facilities: [
      'Modern museum',
      'Restrooms',
      'Guides available',
      'Parking',
      'Small cafes nearby',
      'Good signage'
    ],
    facilitiesEs: [
      'Museo moderno',
      'Baños',
      'Guías disponibles',
      'Estacionamiento',
      'Pequeños cafés cerca',
      'Buena señalización'
    ]
  },
  {
    slug: 'laguna-69',
    name: 'Laguna 69',
    nameEs: 'Laguna 69',
    type: 'natural',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 4604,
    description: 'Peru\'s most famous day hike leads to a stunning turquoise glacial lake surrounded by snow-capped peaks. The challenging trek rewards hikers with one of South America\'s most beautiful alpine lakes, fed by glacial meltwater from Chacraraju peak.',
    descriptionEs: 'La caminata de un día más famosa de Perú lleva a una impresionante laguna glacial turquesa rodeada de picos nevados. La desafiante caminata recompensa a los excursionistas con una de las lagunas alpinas más hermosas de Sudamérica, alimentada por agua de deshielo glacial del pico Chacraraju.',
    history: 'Part of Huascarán National Park (UNESCO World Heritage Site since 1985), Laguna 69 gets its name from the park\'s lake inventory system. The Cordillera Blanca contains the highest tropical mountain range in the world and over 700 glaciers, though these are rapidly shrinking due to climate change.',
    historyEs: 'Parte del Parque Nacional Huascarán (Patrimonio Mundial de la UNESCO desde 1985), Laguna 69 obtiene su nombre del sistema de inventario de lagunas del parque. La Cordillera Blanca contiene la cordillera tropical más alta del mundo y más de 700 glaciares, aunque estos se están reduciendo rápidamente debido al cambio climático.',
    highlights: [
      'Stunning turquoise lake color',
      'Glacier and mountain views',
      'Huascarán National Park',
      'Challenging but rewarding hike',
      'Waterfalls along the trail',
      'Alpine meadows and wildlife'
    ],
    highlightsEs: [
      'Impresionante color turquesa de la laguna',
      'Vistas de glaciares y montañas',
      'Parque Nacional Huascarán',
      'Caminata desafiante pero gratificante',
      'Cascadas a lo largo del sendero',
      'Praderas alpinas y vida silvestre'
    ],
    familyRating: 2,
    minAge: 10,
    duration: '6-8 hours (full day)',
    durationEs: '6-8 horas (día completo)',
    difficulty: 'challenging',
    entranceFee: 'Park entrance ~$10',
    entranceFeeEs: 'Entrada al parque ~$10',
    bestTime: 'Dry season (May-September), start early',
    bestTimeEs: 'Temporada seca (mayo-septiembre), comenzar temprano',
    tips: [
      'Acclimatize in Huaraz 2-3 days first',
      'Start very early (5am departure)',
      'Bring layers - weather changes fast',
      'Pack plenty of water and snacks',
      'Not suitable for young children',
      'Consider Llanganuco lakes for easier option'
    ],
    tipsEs: [
      'Aclimátate en Huaraz 2-3 días primero',
      'Comienza muy temprano (salida 5am)',
      'Trae capas - el clima cambia rápido',
      'Empaca mucha agua y snacks',
      'No apto para niños pequeños',
      'Considera las lagunas de Llanganuco para opción más fácil'
    ],
    nearbyAttractions: ['llanganuco-lakes', 'huascaran', 'pisco-base-camp'],
    relatedSites: ['pastoruri-glacier', 'rainbow-mountain'],
    gettingThere: '3-hour drive from Huaraz plus 3-hour hike each way.',
    gettingThereEs: '3 horas en auto desde Huaraz más 3 horas de caminata en cada dirección.',
    facilities: [
      'Basic parking at trailhead',
      'Basic restrooms',
      'No facilities on trail',
      'Pack out all trash',
      'Guides available'
    ],
    facilitiesEs: [
      'Estacionamiento básico en el inicio del sendero',
      'Baños básicos',
      'Sin instalaciones en el sendero',
      'Saca toda tu basura',
      'Guías disponibles'
    ]
  },
  {
    slug: 'choquequirao',
    name: 'Choquequirao',
    nameEs: 'Choquequirao',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3050,
    description: 'Known as the "Sister City" of Machu Picchu, Choquequirao is a spectacular Inca citadel accessible only by a challenging multi-day trek. Much larger than Machu Picchu and only 30% excavated, it offers an authentic, uncrowded alternative for adventurous families.',
    descriptionEs: 'Conocida como la "Ciudad Hermana" de Machu Picchu, Choquequirao es una espectacular ciudadela inca accesible solo por una desafiante caminata de varios días. Mucho más grande que Machu Picchu y solo 30% excavada, ofrece una alternativa auténtica y sin multitudes para familias aventureras.',
    history: 'Built during the reign of Túpac Inca Yupanqui (1471-1493), Choquequirao served as a royal estate and possibly as a refuge during the Spanish Conquest. Its remote location protected it from conquistadors and later looters. Archaeological work continues to reveal new structures and the famous llama terraces.',
    historyEs: 'Construido durante el reinado de Túpac Inca Yupanqui (1471-1493), Choquequirao sirvió como hacienda real y posiblemente como refugio durante la Conquista española. Su ubicación remota lo protegió de conquistadores y saqueadores posteriores. El trabajo arqueológico continúa revelando nuevas estructuras y las famosas terrazas de llamas.',
    highlights: [
      'Spectacular Inca terraces',
      'Famous llama stone mosaics',
      'Remote wilderness setting',
      'Minimal crowds (50 visitors/day)',
      'Larger than Machu Picchu',
      'Multi-day trekking adventure'
    ],
    highlightsEs: [
      'Espectaculares terrazas incas',
      'Famosos mosaicos de piedra de llamas',
      'Entorno silvestre remoto',
      'Mínimas multitudes (50 visitantes/día)',
      'Más grande que Machu Picchu',
      'Aventura de trekking de varios días'
    ],
    familyRating: 2,
    minAge: 12,
    duration: '4-5 days trek',
    durationEs: 'Trek de 4-5 días',
    difficulty: 'challenging',
    entranceFee: 'S/60 (~$17)',
    entranceFeeEs: 'S/60 (~$17)',
    bestTime: 'Dry season (May-October) essential',
    bestTimeEs: 'Temporada seca (mayo-octubre) esencial',
    tips: [
      'Only for fit, experienced hiking families',
      'Book with reputable trekking company',
      'Mules can carry heavy gear',
      'Altitude and steep descents challenging',
      'Carry plenty of water - hot climate',
      'Future cable car may make access easier'
    ],
    tipsEs: [
      'Solo para familias en forma con experiencia en senderismo',
      'Reserva con compañía de trekking reputada',
      'Las mulas pueden cargar equipo pesado',
      'Altitud y descensos empinados desafiantes',
      'Lleva mucha agua - clima caliente',
      'Futuro teleférico puede facilitar el acceso'
    ],
    nearbyAttractions: ['apurimac-canyon'],
    relatedSites: ['machu-picchu', 'vilcabamba', 'espiritu-pampa'],
    gettingThere: '4-day trek from Cachora, near Cusco.',
    gettingThereEs: 'Trek de 4 días desde Cachora, cerca de Cusco.',
    facilities: [
      'Basic campsites',
      'Simple restrooms',
      'No running water',
      'Pack all food and gear',
      'Rangers on site'
    ],
    facilitiesEs: [
      'Campamentos básicos',
      'Baños simples',
      'Sin agua corriente',
      'Empaca toda la comida y equipo',
      'Guardaparques en el sitio'
    ]
  },
  {
    slug: 'sillustani',
    name: 'Sillustani Burial Towers',
    nameEs: 'Chullpas de Sillustani',
    type: 'archaeological',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3880,
    description: 'Mysterious burial towers called chullpas rise from a peninsula on Lake Umayo near Puno. Built by the Colla people before the Incas, these cylindrical stone tombs are larger at the top than the bottom, a unique architectural style found nowhere else.',
    descriptionEs: 'Misteriosas torres funerarias llamadas chullpas se elevan desde una península en el Lago Umayo cerca de Puno. Construidas por el pueblo Colla antes de los Incas, estas tumbas cilíndricas de piedra son más grandes arriba que abajo, un estilo arquitectónico único que no se encuentra en ningún otro lugar.',
    history: 'The Colla people (1200-1450 AD) built these tombs to house their nobility facing east toward the rising sun. When the Incas conquered the region, they added their own chullpas with superior stonework. Spanish chroniclers found some towers still being used for burials in the 1500s.',
    historyEs: 'El pueblo Colla (1200-1450 DC) construyó estas tumbas para albergar a su nobleza mirando al este hacia el sol naciente. Cuando los Incas conquistaron la región, agregaron sus propias chullpas con trabajo de piedra superior. Los cronistas españoles encontraron algunas torres aún siendo usadas para entierros en el 1500.',
    highlights: [
      'Unique burial tower architecture',
      'Lake Umayo setting',
      'Pre-Inca and Inca stonework comparison',
      'Wild viscacha (rabbit-like rodents)',
      'Sunset views spectacular',
      'Easy Puno day trip'
    ],
    highlightsEs: [
      'Arquitectura única de torres funerarias',
      'Entorno del Lago Umayo',
      'Comparación de trabajo de piedra preinca e inca',
      'Viscachas salvajes (roedores tipo conejo)',
      'Vistas del atardecer espectaculares',
      'Fácil excursión de un día desde Puno'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'S/15 (~$4)',
    entranceFeeEs: 'S/15 (~$4)',
    bestTime: 'Afternoon for best light, sunset tours magical',
    bestTimeEs: 'Tarde para mejor luz, tours al atardecer mágicos',
    tips: [
      'Combine with Puno city tour',
      'Sunset visits are spectacular',
      'Kids love spotting viscachas',
      'Bring warm layers - windy',
      'Short walk from parking',
      'Easy side trip before/after Titicaca'
    ],
    tipsEs: [
      'Combina con tour de la ciudad de Puno',
      'Las visitas al atardecer son espectaculares',
      'A los niños les encanta buscar viscachas',
      'Trae capas abrigadas - ventoso',
      'Caminata corta desde el estacionamiento',
      'Fácil parada antes/después del Titicaca'
    ],
    nearbyAttractions: ['lake-umayo', 'puno-city', 'lake-titicaca'],
    relatedSites: ['uros-islands', 'taquile-island', 'cutimbo'],
    gettingThere: '45 minutes from Puno. Tours available or taxi.',
    gettingThereEs: '45 minutos desde Puno. Tours disponibles o taxi.',
    facilities: [
      'Visitor center',
      'Restrooms',
      'Small museum',
      'Parking',
      'Craft vendors',
      'Guides available'
    ],
    facilitiesEs: [
      'Centro de visitantes',
      'Baños',
      'Pequeño museo',
      'Estacionamiento',
      'Vendedores de artesanías',
      'Guías disponibles'
    ]
  },
  {
    slug: 'ventanillas-de-otuzco',
    name: 'Ventanillas de Otuzco',
    nameEs: 'Ventanillas de Otuzco',
    type: 'archaeological',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    altitude: 2850,
    description: 'Hundreds of square niches carved into volcanic rock hillsides form an ancient cemetery used by the Cajamarca culture. Known as the "Windows of Otuzco," these funeral niches create a haunting landscape on the outskirts of Cajamarca city.',
    descriptionEs: 'Cientos de nichos cuadrados tallados en laderas de roca volcánica forman un antiguo cementerio usado por la cultura Cajamarca. Conocidas como las "Ventanillas de Otuzco," estos nichos funerarios crean un paisaje fascinante en las afueras de la ciudad de Cajamarca.',
    history: 'Created by the Cajamarca culture (200 AD - 1400 AD), these niches held mummified remains of noble families. The small rectangular openings face east to greet the rising sun. The nearby larger site of Combayo has even more impressive niches carved deeper into the cliff face.',
    historyEs: 'Creadas por la cultura Cajamarca (200 DC - 1400 DC), estos nichos albergaban restos momificados de familias nobles. Las pequeñas aberturas rectangulares miran al este para saludar al sol naciente. El sitio más grande cercano de Combayo tiene nichos aún más impresionantes tallados más profundo en la cara del acantilado.',
    highlights: [
      'Unique cliff-carved cemetery',
      'Hundreds of funeral niches',
      'Easy walk from road',
      'Views over Cajamarca valley',
      'Off-the-beaten-path experience',
      'Combine with Baños del Inca'
    ],
    highlightsEs: [
      'Cementerio único tallado en acantilado',
      'Cientos de nichos funerarios',
      'Caminata fácil desde la carretera',
      'Vistas sobre el valle de Cajamarca',
      'Experiencia fuera del circuito turístico',
      'Combina con Baños del Inca'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    entranceFee: 'S/5 (~$1.50)',
    entranceFeeEs: 'S/5 (~$1.50)',
    bestTime: 'Morning for best light, year-round',
    bestTimeEs: 'Mañana para mejor luz, todo el año',
    tips: [
      'Combine with Baños del Inca hot springs',
      'Short and easy for all ages',
      'Local guides explain the history',
      'Less touristy than main Cajamarca sites',
      'Visit Combayo for larger site',
      'Great photography spot'
    ],
    tipsEs: [
      'Combina con aguas termales Baños del Inca',
      'Corto y fácil para todas las edades',
      'Los guías locales explican la historia',
      'Menos turístico que los sitios principales de Cajamarca',
      'Visita Combayo para un sitio más grande',
      'Gran lugar para fotografía'
    ],
    nearbyAttractions: ['banos-del-inca', 'cajamarca-plaza', 'cumbemayo'],
    relatedSites: ['cumbemayo', 'kuntur-wasi'],
    gettingThere: '8km from Cajamarca center. Taxi or colectivo.',
    gettingThereEs: '8km del centro de Cajamarca. Taxi o colectivo.',
    facilities: [
      'Small parking area',
      'Basic restrooms',
      'Local guides',
      'Craft vendors occasionally'
    ],
    facilitiesEs: [
      'Pequeña área de estacionamiento',
      'Baños básicos',
      'Guías locales',
      'Vendedores de artesanías ocasionalmente'
    ]
  },
  {
    slug: 'el-brujo',
    name: 'El Brujo & Lady of Cao',
    nameEs: 'El Brujo y la Señora de Cao',
    type: 'archaeological',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    altitude: 20,
    description: 'One of Peru\'s most important archaeological discoveries, El Brujo is home to the Lady of Cao - a tattooed female Moche ruler whose mummy was discovered in 2006. The excellent museum showcases her remarkably preserved remains and challenges assumptions about ancient gender roles.',
    descriptionEs: 'Uno de los descubrimientos arqueológicos más importantes de Perú, El Brujo es hogar de la Señora de Cao - una gobernante Moche tatuada cuya momia fue descubierta en 2006. El excelente museo exhibe sus restos notablemente preservados y desafía suposiciones sobre roles de género antiguos.',
    history: 'The Moche culture (100-700 AD) built the Huaca Cao Viejo pyramid here, covering it with elaborate murals of warriors, prisoners, and rituals. The 2006 discovery of the Lady of Cao proved that women could hold the highest positions of power in Moche society - she was buried with full warrior regalia.',
    historyEs: 'La cultura Moche (100-700 DC) construyó la pirámide Huaca Cao Viejo aquí, cubriéndola con elaborados murales de guerreros, prisioneros y rituales. El descubrimiento en 2006 de la Señora de Cao probó que las mujeres podían ocupar las posiciones más altas de poder en la sociedad Moche - fue enterrada con toda la vestimenta de guerrero.',
    highlights: [
      'Lady of Cao mummy and museum',
      'Preserved Moche murals',
      'World-class archaeological museum',
      'Evidence of female rulers',
      'Tattoos visible on mummy',
      'Less crowded than Chan Chan'
    ],
    highlightsEs: [
      'Momia y museo de la Señora de Cao',
      'Murales Moche preservados',
      'Museo arqueológico de clase mundial',
      'Evidencia de gobernantas femeninas',
      'Tatuajes visibles en la momia',
      'Menos lleno que Chan Chan'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$4, includes museum',
    entranceFeeEs: 'Adultos ~$4, incluye museo',
    bestTime: 'Morning before heat, year-round',
    bestTimeEs: 'Mañana antes del calor, todo el año',
    tips: [
      'The museum alone is worth the trip',
      'Hire a guide to understand the significance',
      'Less visited than Huaca Sol/Luna',
      'Combine with Chan Chan for full day',
      'Air-conditioned museum is a relief',
      'Fascinating for kids interested in mummies'
    ],
    tipsEs: [
      'El museo solo vale el viaje',
      'Contrata un guía para entender la importancia',
      'Menos visitado que Huaca Sol/Luna',
      'Combina con Chan Chan para día completo',
      'El museo con aire acondicionado es un alivio',
      'Fascinante para niños interesados en momias'
    ],
    nearbyAttractions: ['magdalena-de-cao', 'chicama-beach'],
    relatedSites: ['huaca-sol-luna', 'sipan', 'chan-chan'],
    gettingThere: '1 hour north of Trujillo. Tour or taxi.',
    gettingThereEs: '1 hora al norte de Trujillo. Tour o taxi.',
    facilities: [
      'Excellent museum',
      'Air-conditioned exhibits',
      'Restrooms',
      'Cafeteria',
      'Parking',
      'Gift shop'
    ],
    facilitiesEs: [
      'Excelente museo',
      'Exhibiciones con aire acondicionado',
      'Baños',
      'Cafetería',
      'Estacionamiento',
      'Tienda de regalos'
    ]
  },
  {
    slug: 'pastoruri-glacier',
    name: 'Pastoruri Glacier',
    nameEs: 'Glaciar Pastoruri',
    type: 'natural',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 5000,
    description: 'Once a popular skiing destination, Pastoruri Glacier is now a sobering reminder of climate change. Despite shrinking dramatically, it remains an accessible high-altitude experience where families can touch glacial ice and learn about environmental issues firsthand.',
    descriptionEs: 'Antes un destino popular de esquí, el Glaciar Pastoruri es ahora un recordatorio aleccionador del cambio climático. A pesar de encogerse dramáticamente, sigue siendo una experiencia accesible de alta altitud donde las familias pueden tocar hielo glacial y aprender sobre temas ambientales de primera mano.',
    history: 'Pastoruri was once a thriving ski resort with year-round snow. Climate change has caused it to lose 40% of its mass since 1995. In 2010, Peru declared it no longer a glacier scientifically. Today it serves as an open-air classroom about global warming.',
    historyEs: 'Pastoruri fue una vez un próspero resort de esquí con nieve todo el año. El cambio climático ha causado que pierda 40% de su masa desde 1995. En 2010, Perú declaró que científicamente ya no era un glaciar. Hoy sirve como un aula al aire libre sobre el calentamiento global.',
    highlights: [
      'Touch ancient glacial ice',
      'Climate change education',
      'Puya raimondi plants (world\'s largest bromeliad)',
      'High-altitude landscapes',
      'Easy-to-moderate walking path',
      'Stunning mountain scenery'
    ],
    highlightsEs: [
      'Tocar hielo glacial antiguo',
      'Educación sobre cambio climático',
      'Plantas Puya raimondi (la bromelia más grande del mundo)',
      'Paisajes de alta altitud',
      'Sendero de caminata fácil a moderado',
      'Impresionante paisaje montañoso'
    ],
    familyRating: 3,
    minAge: 8,
    duration: 'Full day (6-7 hours from Huaraz)',
    durationEs: 'Día completo (6-7 horas desde Huaraz)',
    difficulty: 'moderate',
    entranceFee: 'Huascarán National Park fee ~$3',
    entranceFeeEs: 'Entrada al Parque Nacional Huascarán ~$3',
    bestTime: 'May-September dry season, morning departure',
    bestTimeEs: 'Mayo-Septiembre temporada seca, salida en la mañana',
    tips: [
      'Acclimatize in Huaraz for 2-3 days first',
      'Bring warm layers - it\'s cold at 5000m',
      'Walk slowly at altitude',
      'Bring coca leaves or altitude medication',
      'The Puya raimondi forest is a highlight',
      'Educational opportunity about climate change'
    ],
    tipsEs: [
      'Aclimatarse en Huaraz por 2-3 días primero',
      'Llevar capas abrigadas - hace frío a 5000m',
      'Caminar lento en la altitud',
      'Llevar hojas de coca o medicación para la altura',
      'El bosque de Puya raimondi es un punto destacado',
      'Oportunidad educativa sobre el cambio climático'
    ],
    nearbyAttractions: ['puya-raimondi-forest', 'huaraz-town'],
    relatedSites: ['laguna-69', 'chavin-de-huantar'],
    gettingThere: 'Tour from Huaraz (70km, 2 hours). Must go with organized tour.',
    gettingThereEs: 'Tour desde Huaraz (70km, 2 horas). Debe ir con tour organizado.',
    facilities: [
      'Basic restrooms at parking',
      'No restaurants - bring lunch',
      'Tour includes transportation',
      'Marked trail',
      'Park rangers'
    ],
    facilitiesEs: [
      'Baños básicos en estacionamiento',
      'Sin restaurantes - llevar almuerzo',
      'Tour incluye transporte',
      'Sendero marcado',
      'Guardaparques'
    ]
  },
  {
    slug: 'llanganuco-lakes',
    name: 'Llanganuco Lakes',
    nameEs: 'Lagunas de Llanganuco',
    type: 'natural',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 3850,
    description: 'Two stunning turquoise lakes nestled in a glacial valley beneath snow-capped peaks. Llanganuco offers dramatic Andean scenery without the extreme altitude of other Cordillera Blanca destinations, making it ideal for families with children.',
    descriptionEs: 'Dos impresionantes lagos turquesa anidados en un valle glacial bajo picos nevados. Llanganuco ofrece paisajes dramáticos de los Andes sin la altitud extrema de otros destinos de la Cordillera Blanca, haciéndolo ideal para familias con niños.',
    history: 'These glacial lakes - Chinancocha (female lake) and Orconcocha (male lake) - were formed by retreating glaciers thousands of years ago. They lie within Huascarán National Park, a UNESCO World Heritage Site, and are fed by meltwater from Peru\'s highest peak, Huascarán.',
    historyEs: 'Estos lagos glaciales - Chinancocha (lago hembra) y Orconcocha (lago macho) - fueron formados por glaciares en retroceso hace miles de años. Se encuentran dentro del Parque Nacional Huascarán, Patrimonio Mundial de la UNESCO, y son alimentados por agua de deshielo del pico más alto de Perú, Huascarán.',
    highlights: [
      'Turquoise glacial waters',
      'Views of Huascarán (6768m)',
      'Rowboat rides on Chinancocha',
      'Queñual forest walks',
      'Lower altitude than Laguna 69',
      'Picnic spots by the lakes'
    ],
    highlightsEs: [
      'Aguas glaciales turquesa',
      'Vistas del Huascarán (6768m)',
      'Paseos en bote en Chinancocha',
      'Caminatas por bosques de queñual',
      'Menor altitud que Laguna 69',
      'Lugares de picnic junto a los lagos'
    ],
    familyRating: 5,
    minAge: 4,
    duration: 'Half day (4-5 hours from Huaraz)',
    durationEs: 'Medio día (4-5 horas desde Huaraz)',
    difficulty: 'easy',
    entranceFee: 'Huascarán National Park fee ~$3',
    entranceFeeEs: 'Entrada al Parque Nacional Huascarán ~$3',
    bestTime: 'May-September dry season, morning for best views',
    bestTimeEs: 'Mayo-Septiembre temporada seca, mañana para mejores vistas',
    tips: [
      'Much easier than Laguna 69 for families',
      'Rowboat rides are fun for kids',
      'Pack a picnic lunch',
      'Still need altitude acclimatization',
      'Arrive early to avoid afternoon clouds',
      'Great photography in morning light'
    ],
    tipsEs: [
      'Mucho más fácil que Laguna 69 para familias',
      'Los paseos en bote son divertidos para niños',
      'Llevar almuerzo de picnic',
      'Aún necesita aclimatación a la altura',
      'Llegar temprano para evitar nubes de la tarde',
      'Gran fotografía con luz de la mañana'
    ],
    nearbyAttractions: ['yungay-memorial', 'huascarán-base'],
    relatedSites: ['laguna-69', 'pastoruri-glacier'],
    gettingThere: 'Tour or taxi from Huaraz (80km, 1.5 hours). Can combine with Laguna 69.',
    gettingThereEs: 'Tour o taxi desde Huaraz (80km, 1.5 horas). Se puede combinar con Laguna 69.',
    facilities: [
      'Restrooms at parking area',
      'Rowboat rentals',
      'Food vendors',
      'Parking',
      'Walking paths'
    ],
    facilitiesEs: [
      'Baños en área de estacionamiento',
      'Alquiler de botes',
      'Vendedores de comida',
      'Estacionamiento',
      'Senderos para caminar'
    ]
  },
  {
    slug: 'sechin',
    name: 'Sechín Archaeological Complex',
    nameEs: 'Complejo Arqueológico de Sechín',
    type: 'archaeological',
    city: 'casma',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 90,
    description: 'One of Peru\'s oldest and most dramatic archaeological sites, Sechín features a temple decorated with over 400 carved stone warriors and dismembered body parts. Dating back 3,600 years, it\'s older than many Egyptian pyramids and tells a violent but fascinating story.',
    descriptionEs: 'Uno de los sitios arqueológicos más antiguos y dramáticos de Perú, Sechín presenta un templo decorado con más de 400 guerreros de piedra tallada y partes del cuerpo desmembradas. Con 3,600 años de antigüedad, es más antiguo que muchas pirámides egipcias y cuenta una historia violenta pero fascinante.',
    history: 'Built around 1600 BC by the Sechín culture, this temple predates the Chavín civilization. The graphic carvings likely depict a great battle or ritual sacrifice. The site was first excavated in 1937 by Peruvian archaeologist Julio C. Tello.',
    historyEs: 'Construido alrededor de 1600 AC por la cultura Sechín, este templo es anterior a la civilización Chavín. Los tallados gráficos probablemente representan una gran batalla o sacrificio ritual. El sitio fue excavado por primera vez en 1937 por el arqueólogo peruano Julio C. Tello.',
    highlights: [
      'Over 400 carved warrior stones',
      'One of Peru\'s oldest monuments',
      'Dramatic battle/sacrifice scenes',
      'Small but excellent museum',
      'Off the tourist trail',
      'Low altitude, easy visit'
    ],
    highlightsEs: [
      'Más de 400 piedras de guerreros talladas',
      'Uno de los monumentos más antiguos de Perú',
      'Escenas dramáticas de batalla/sacrificio',
      'Museo pequeño pero excelente',
      'Fuera del circuito turístico',
      'Baja altitud, visita fácil'
    ],
    familyRating: 3,
    minAge: 8,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$3, children ~$1',
    entranceFeeEs: 'Adultos ~$3, niños ~$1',
    bestTime: 'Year-round, morning to avoid heat',
    bestTimeEs: 'Todo el año, mañana para evitar el calor',
    tips: [
      'Content is violent - prepare sensitive children',
      'Great for kids interested in ancient history',
      'Hire the site guide for context',
      'Combine with beach time in Casma',
      'Good stopover between Lima and Trujillo',
      'Photography allowed'
    ],
    tipsEs: [
      'El contenido es violento - preparar niños sensibles',
      'Genial para niños interesados en historia antigua',
      'Contratar el guía del sitio para contexto',
      'Combinar con tiempo de playa en Casma',
      'Buena parada entre Lima y Trujillo',
      'Se permite fotografía'
    ],
    nearbyAttractions: ['tortugas-beach', 'casma-town'],
    relatedSites: ['chavin-de-huantar', 'chan-chan'],
    gettingThere: '5km from Casma, taxi or mototaxi. Casma is 370km north of Lima.',
    gettingThereEs: '5km de Casma, taxi o mototaxi. Casma está 370km al norte de Lima.',
    facilities: [
      'Site museum',
      'Restrooms',
      'Parking',
      'Site guides available',
      'Shaded areas'
    ],
    facilitiesEs: [
      'Museo del sitio',
      'Baños',
      'Estacionamiento',
      'Guías disponibles',
      'Áreas con sombra'
    ]
  },
  {
    slug: 'banos-del-inca',
    name: 'Baños del Inca',
    nameEs: 'Baños del Inca',
    type: 'natural',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    altitude: 2667,
    description: 'Historic hot springs where Inca emperor Atahualpa was relaxing when Spanish conquistadors arrived in 1532. Today these therapeutic thermal waters offer families a unique blend of history and relaxation, with private and public pools at various temperatures.',
    descriptionEs: 'Aguas termales históricas donde el emperador Inca Atahualpa estaba descansando cuando los conquistadores españoles llegaron en 1532. Hoy estas aguas termales terapéuticas ofrecen a las familias una mezcla única de historia y relajación, con piscinas privadas y públicas a varias temperaturas.',
    history: 'These springs have been used for thousands of years. Most famously, Atahualpa was bathing here when Spanish conquistador Francisco Pizarro arrived in Cajamarca in November 1532. The springs remain one of Peru\'s most important thermal destinations.',
    historyEs: 'Estos manantiales han sido usados por miles de años. Más famosamente, Atahualpa estaba bañándose aquí cuando el conquistador español Francisco Pizarro llegó a Cajamarca en noviembre de 1532. Los manantiales siguen siendo uno de los destinos termales más importantes de Perú.',
    highlights: [
      'Bathe where Atahualpa bathed',
      'Therapeutic hot spring waters',
      'Private and public pools',
      'Water temperatures 70-78°C at source',
      'Beautiful garden setting',
      'Inca-era channels still visible'
    ],
    highlightsEs: [
      'Bañarse donde se bañó Atahualpa',
      'Aguas termales terapéuticas',
      'Piscinas privadas y públicas',
      'Temperaturas del agua 70-78°C en la fuente',
      'Hermoso entorno de jardín',
      'Canales de la era Inca aún visibles'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Public pools ~$1, private rooms ~$5-10',
    entranceFeeEs: 'Piscinas públicas ~$1, habitaciones privadas ~$5-10',
    bestTime: 'Year-round, early morning or late afternoon',
    bestTimeEs: 'Todo el año, temprano en la mañana o tarde',
    tips: [
      'Book private pools for families',
      'Water is very hot - test before entering',
      'Bring swimsuits and towels',
      'Don\'t stay too long - heat can be exhausting',
      'Weekends are very crowded',
      'Great way to relax after exploring Cajamarca'
    ],
    tipsEs: [
      'Reservar piscinas privadas para familias',
      'El agua está muy caliente - probar antes de entrar',
      'Llevar trajes de baño y toallas',
      'No quedarse mucho tiempo - el calor puede ser agotador',
      'Los fines de semana están muy llenos',
      'Gran manera de relajarse después de explorar Cajamarca'
    ],
    nearbyAttractions: ['cajamarca-center', 'cumbe-mayo'],
    relatedSites: ['ventanillas-de-otuzco', 'cumbe-mayo'],
    gettingThere: '6km from Cajamarca center. Taxi, colectivo, or walk.',
    gettingThereEs: '6km del centro de Cajamarca. Taxi, colectivo, o caminando.',
    facilities: [
      'Multiple pool types',
      'Changing rooms',
      'Lockers',
      'Restaurants nearby',
      'Spa services',
      'Parking'
    ],
    facilitiesEs: [
      'Múltiples tipos de piscinas',
      'Vestidores',
      'Casilleros',
      'Restaurantes cercanos',
      'Servicios de spa',
      'Estacionamiento'
    ]
  },
  {
    slug: 'mali-museum',
    name: 'MALI - Lima Art Museum',
    nameEs: 'MALI - Museo de Arte de Lima',
    type: 'museum',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 154,
    description: 'Peru\'s premier art museum houses 3,000 years of artistic heritage in a beautiful 19th-century palace. MALI offers families an excellent introduction to Peruvian culture through pre-Columbian art, colonial paintings, and contemporary works, plus a wonderful children\'s program.',
    descriptionEs: 'El museo de arte más importante de Perú alberga 3,000 años de patrimonio artístico en un hermoso palacio del siglo XIX. MALI ofrece a las familias una excelente introducción a la cultura peruana a través del arte precolombino, pinturas coloniales y obras contemporáneas, más un maravilloso programa para niños.',
    history: 'Housed in the Palacio de la Exposición, built in 1872 for Peru\'s first international exposition, MALI was founded in 1961. The collection spans from pre-Columbian textiles and ceramics to contemporary Peruvian art, representing the country\'s full artistic heritage.',
    historyEs: 'Ubicado en el Palacio de la Exposición, construido en 1872 para la primera exposición internacional de Perú, MALI fue fundado en 1961. La colección abarca desde textiles y cerámicas precolombinas hasta arte peruano contemporáneo, representando todo el patrimonio artístico del país.',
    highlights: [
      '3,000 years of Peruvian art',
      'Beautiful 19th-century palace',
      'Pre-Columbian textiles',
      'Children\'s educational programs',
      'Sculpture garden',
      'Café and bookshop'
    ],
    highlightsEs: [
      '3,000 años de arte peruano',
      'Hermoso palacio del siglo XIX',
      'Textiles precolombinos',
      'Programas educativos para niños',
      'Jardín de esculturas',
      'Café y librería'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$10, children ~$2, family rates available',
    entranceFeeEs: 'Adultos ~$10, niños ~$2, tarifas familiares disponibles',
    bestTime: 'Any day, weekday mornings less crowded',
    bestTimeEs: 'Cualquier día, mañanas entre semana menos llenas',
    tips: [
      'Check for children\'s workshops',
      'The park outside is great for kids to run',
      'Excellent café for lunch',
      'Audio guides available in English',
      'Free admission first Sunday of month',
      'Can combine with nearby parks'
    ],
    tipsEs: [
      'Revisar talleres para niños',
      'El parque afuera es genial para que corran los niños',
      'Excelente café para almorzar',
      'Audioguías disponibles en inglés',
      'Entrada gratuita el primer domingo del mes',
      'Se puede combinar con parques cercanos'
    ],
    nearbyAttractions: ['parque-exposicion', 'centro-historico-lima'],
    relatedSites: ['larco-museum', 'museo-oro'],
    gettingThere: 'In Parque de la Exposición near Plaza Grau. Taxi or walking distance from Miraflores.',
    gettingThereEs: 'En el Parque de la Exposición cerca de Plaza Grau. Taxi o caminando desde Miraflores.',
    facilities: [
      'Air conditioning',
      'Café restaurant',
      'Bookshop',
      'Audio guides',
      'Wheelchair accessible',
      'Children\'s activities'
    ],
    facilitiesEs: [
      'Aire acondicionado',
      'Café restaurante',
      'Librería',
      'Audioguías',
      'Accesible en silla de ruedas',
      'Actividades para niños'
    ]
  },
  {
    slug: 'museo-oro',
    name: 'Gold Museum (Museo de Oro)',
    nameEs: 'Museo de Oro del Perú',
    type: 'museum',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 154,
    description: 'A dazzling private collection of pre-Columbian gold artifacts, ceremonial objects, and an extensive arms collection. Kids are fascinated by the golden treasures, mummies, and ancient weapons that span thousands of years of Peruvian history.',
    descriptionEs: 'Una deslumbrante colección privada de artefactos de oro precolombinos, objetos ceremoniales y una extensa colección de armas. Los niños están fascinados por los tesoros dorados, momias y armas antiguas que abarcan miles de años de historia peruana.',
    history: 'Founded by collector Miguel Mujica Gallo, the museum opened in 1968. While some pieces\' authenticity has been questioned, the collection remains impressive and includes thousands of gold objects, textiles, ceramics, and one of the world\'s largest private arms collections.',
    historyEs: 'Fundado por el coleccionista Miguel Mujica Gallo, el museo abrió en 1968. Aunque la autenticidad de algunas piezas ha sido cuestionada, la colección sigue siendo impresionante e incluye miles de objetos de oro, textiles, cerámicas y una de las colecciones privadas de armas más grandes del mundo.',
    highlights: [
      'Thousands of gold artifacts',
      'Ancient weapons collection',
      'Ceremonial masks and crowns',
      'Mummies and textiles',
      'Underground vault setting',
      'Interactive for kids'
    ],
    highlightsEs: [
      'Miles de artefactos de oro',
      'Colección de armas antiguas',
      'Máscaras y coronas ceremoniales',
      'Momias y textiles',
      'Ambiente de bóveda subterránea',
      'Interactivo para niños'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2 hours',
    durationEs: '2 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$11, children ~$4',
    entranceFeeEs: 'Adultos ~$11, niños ~$4',
    bestTime: 'Any day, afternoons often quieter',
    bestTimeEs: 'Cualquier día, las tardes suelen ser más tranquilas',
    tips: [
      'Great for kids who love treasure/pirates',
      'The weapons museum appeals to all ages',
      'Some replicas mixed with originals',
      'Located in residential Monterrico',
      'Good rainy day activity',
      'Combine with lunch in Miraflores'
    ],
    tipsEs: [
      'Genial para niños que aman tesoros/piratas',
      'El museo de armas atrae a todas las edades',
      'Algunas réplicas mezcladas con originales',
      'Ubicado en residencial Monterrico',
      'Buena actividad para día lluvioso',
      'Combinar con almuerzo en Miraflores'
    ],
    nearbyAttractions: ['jockey-plaza-mall', 'monterrico-neighborhood'],
    relatedSites: ['larco-museum', 'mali-museum'],
    gettingThere: 'Monterrico district, 30 min taxi from Miraflores. No public transit nearby.',
    gettingThereEs: 'Distrito de Monterrico, 30 min en taxi desde Miraflores. Sin transporte público cercano.',
    facilities: [
      'Air conditioning',
      'Restrooms',
      'Small gift shop',
      'Parking',
      'Guided tours available'
    ],
    facilitiesEs: [
      'Aire acondicionado',
      'Baños',
      'Pequeña tienda de regalos',
      'Estacionamiento',
      'Tours guiados disponibles'
    ]
  },
  {
    slug: 'kuelap',
    name: 'Kuélap Fortress',
    nameEs: 'Fortaleza de Kuélap',
    type: 'archaeological',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 3000,
    description: 'The "Machu Picchu of the North" is a massive stone fortress built by the Chachapoya cloud warriors. Perched atop a mountain ridge with over 400 circular buildings, this impressive site predates the Incas and rivals Machu Picchu in scale.',
    descriptionEs: 'El "Machu Picchu del Norte" es una fortaleza de piedra masiva construida por los guerreros de la nube Chachapoya. Situado en la cima de una cresta montañosa con más de 400 edificios circulares, este impresionante sitio es anterior a los Incas y rivaliza con Machu Picchu en escala.',
    history: 'Built by the Chachapoya culture between 500-1500 AD, Kuélap served as a fortress and city. The Chachapoyas, known as "Warriors of the Clouds," resisted Inca conquest longer than any other culture. The site was largely forgotten until 1843.',
    historyEs: 'Construido por la cultura Chachapoya entre 500-1500 DC, Kuélap sirvió como fortaleza y ciudad. Los Chachapoyas, conocidos como "Guerreros de las Nubes," resistieron la conquista Inca más tiempo que cualquier otra cultura. El sitio fue olvidado hasta 1843.',
    highlights: [
      'Massive 20-meter high walls',
      '400+ circular stone buildings',
      'Cable car access (teleférico)',
      'Cloud forest setting',
      'Less crowded than Machu Picchu',
      'Fascinating Chachapoya culture'
    ],
    highlightsEs: [
      'Murallas masivas de 20 metros de alto',
      'Más de 400 edificios circulares de piedra',
      'Acceso por teleférico',
      'Entorno de bosque nublado',
      'Menos lleno que Machu Picchu',
      'Fascinante cultura Chachapoya'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '4-5 hours (plus cable car)',
    durationEs: '4-5 horas (más teleférico)',
    difficulty: 'moderate',
    entranceFee: 'Site ~$6, Cable car ~$20 round trip',
    entranceFeeEs: 'Sitio ~$6, Teleférico ~$20 ida y vuelta',
    bestTime: 'May-September dry season, morning for views',
    bestTimeEs: 'Mayo-septiembre temporada seca, mañana para vistas',
    tips: [
      'Take the teleférico (cable car) - it\'s spectacular',
      'Allow full day from Chachapoyas',
      'Wear sturdy shoes for uneven paths',
      'Bring rain jacket - cloud forest weather',
      'Less strenuous than Machu Picchu',
      'Combine with Gocta Waterfall'
    ],
    tipsEs: [
      'Toma el teleférico - es espectacular',
      'Permite un día completo desde Chachapoyas',
      'Usa zapatos resistentes para caminos irregulares',
      'Trae chaqueta de lluvia - clima de bosque nublado',
      'Menos agotador que Machu Picchu',
      'Combina con la Catarata de Gocta'
    ],
    nearbyAttractions: ['gocta-waterfall', 'karajia-sarcophagi'],
    relatedSites: ['machu-picchu', 'chavin-de-huantar'],
    gettingThere: 'Cable car from Tingo Nuevo (1.5 hours from Chachapoyas). Or 3-hour hike.',
    gettingThereEs: 'Teleférico desde Tingo Nuevo (1.5 horas de Chachapoyas). O caminata de 3 horas.',
    facilities: [
      'Cable car station',
      'Visitor center',
      'Restrooms',
      'Basic cafeteria',
      'Site guides available',
      'Parking'
    ],
    facilitiesEs: [
      'Estación de teleférico',
      'Centro de visitantes',
      'Baños',
      'Cafetería básica',
      'Guías del sitio disponibles',
      'Estacionamiento'
    ]
  },
  {
    slug: 'gocta-waterfall',
    name: 'Gocta Waterfall',
    nameEs: 'Catarata de Gocta',
    type: 'natural',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 1800,
    description: 'One of the world\'s tallest waterfalls at 771 meters, Gocta remained unknown to outsiders until 2005. The two-tiered cascade plunges through pristine cloud forest, offering families a spectacular hiking adventure to its misty base.',
    descriptionEs: 'Una de las cascadas más altas del mundo con 771 metros, Gocta permaneció desconocida para los foráneos hasta 2005. La cascada de dos niveles cae a través de bosque nublado prístino, ofreciendo a las familias una aventura de senderismo espectacular hasta su brumosa base.',
    history: 'Local villagers had always known about Gocta but kept it secret, believing a mermaid lived in its pool who would curse anyone who revealed its location. German researcher Stefan Ziemendorff measured it in 2005, introducing it to the world.',
    historyEs: 'Los aldeanos locales siempre habían conocido Gocta pero lo mantuvieron en secreto, creyendo que una sirena vivía en su poza que maldeciría a quien revelara su ubicación. El investigador alemán Stefan Ziemendorff lo midió en 2005, presentándolo al mundo.',
    highlights: [
      'One of world\'s tallest waterfalls',
      '771 meters in two tiers',
      'Cloud forest hiking trail',
      'Swimming at the base',
      'Bird watching opportunities',
      'Undiscovered until 2005!'
    ],
    highlightsEs: [
      'Una de las cascadas más altas del mundo',
      '771 metros en dos niveles',
      'Sendero de senderismo en bosque nublado',
      'Nadar en la base',
      'Oportunidades de observación de aves',
      '¡No descubierta hasta 2005!'
    ],
    familyRating: 4,
    minAge: 7,
    duration: '5-6 hours round trip hike',
    durationEs: '5-6 horas caminata ida y vuelta',
    difficulty: 'moderate',
    entranceFee: '~$3 per person',
    entranceFeeEs: '~$3 por persona',
    bestTime: 'May-October dry season for clearest views',
    bestTimeEs: 'Mayo-octubre temporada seca para vistas más claras',
    tips: [
      'Two routes: Cocachimba (shorter) or San Pablo',
      'Hire local guide - supports community',
      'Bring swimsuit for base pool',
      'Start early to avoid afternoon mist',
      'Trail is well-maintained but steep sections',
      'Watch for cock-of-the-rock birds!'
    ],
    tipsEs: [
      'Dos rutas: Cocachimba (más corta) o San Pablo',
      'Contrata guía local - apoya a la comunidad',
      'Trae traje de baño para la poza base',
      'Comienza temprano para evitar niebla de la tarde',
      'El sendero está bien mantenido pero hay secciones empinadas',
      '¡Busca gallitos de las rocas!'
    ],
    nearbyAttractions: ['kuelap', 'cocachimba-village'],
    relatedSites: ['kuelap', 'laguna-69'],
    gettingThere: 'Drive to Cocachimba (1 hour from Chachapoyas), then hike 2.5 hours.',
    gettingThereEs: 'Maneja a Cocachimba (1 hora de Chachapoyas), luego caminata de 2.5 horas.',
    facilities: [
      'Trail entrance station',
      'Local guides for hire',
      'Basic refreshments in villages',
      'Restrooms at trailhead',
      'Lodges in Cocachimba'
    ],
    facilitiesEs: [
      'Estación de entrada al sendero',
      'Guías locales para contratar',
      'Refrescos básicos en los pueblos',
      'Baños en el inicio del sendero',
      'Lodges en Cocachimba'
    ]
  },
  {
    slug: 'rainbow-mountain',
    name: 'Rainbow Mountain (Vinicunca)',
    nameEs: 'Montaña de Siete Colores (Vinicunca)',
    type: 'natural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 5200,
    description: 'This stunning striped mountain displays layers of red, yellow, green, and turquoise created by mineral deposits over millions of years. Revealed by melting glaciers, Rainbow Mountain has become one of Peru\'s most photographed destinations.',
    descriptionEs: 'Esta impresionante montaña rayada muestra capas de rojo, amarillo, verde y turquesa creadas por depósitos minerales durante millones de años. Revelada por glaciares que se derriten, la Montaña Arcoíris se ha convertido en uno de los destinos más fotografiados de Perú.',
    history: 'Rainbow Mountain was hidden under glaciers until climate change revealed its colorful stripes in recent years. The colors come from mineral deposits: iron oxides (reds and yellows), chlorite (greens), and goethite (browns). It was virtually unknown until 2015.',
    historyEs: 'La Montaña Arcoíris estaba escondida bajo glaciares hasta que el cambio climático reveló sus rayas coloridas en años recientes. Los colores vienen de depósitos minerales: óxidos de hierro (rojos y amarillos), clorita (verdes) y goethita (marrones). Era virtualmente desconocida hasta 2015.',
    highlights: [
      'Spectacular rainbow-striped mountain',
      'Red Valley nearby (less crowded)',
      'High-altitude Andean scenery',
      'Alpaca and llama sightings',
      'Stunning photography opportunity',
      'Bucket-list destination'
    ],
    highlightsEs: [
      'Espectacular montaña de rayas arcoíris',
      'Valle Rojo cercano (menos lleno)',
      'Paisaje andino de alta altitud',
      'Avistamiento de alpacas y llamas',
      'Impresionante oportunidad fotográfica',
      'Destino de lista de deseos'
    ],
    familyRating: 2,
    minAge: 12,
    duration: 'Full day (12-14 hours from Cusco)',
    durationEs: 'Día completo (12-14 horas desde Cusco)',
    difficulty: 'challenging',
    entranceFee: '~$3 entrance, tours $30-100',
    entranceFeeEs: '~$3 entrada, tours $30-100',
    bestTime: 'May-September dry season, arrive 7-8am',
    bestTimeEs: 'Mayo-septiembre temporada seca, llegar 7-8am',
    tips: [
      'EXTREME altitude (5200m) - not for young children',
      'Acclimatize in Cusco 3+ days first',
      'Start very early to avoid crowds',
      'Horse rental available for those who struggle',
      'Bring coca leaves/altitude medication',
      'Alternative: Palccoyo is easier and less crowded'
    ],
    tipsEs: [
      'Altitud EXTREMA (5200m) - no para niños pequeños',
      'Aclimatarse en Cusco 3+ días primero',
      'Comenzar muy temprano para evitar multitudes',
      'Alquiler de caballos disponible para quienes tengan dificultad',
      'Llevar hojas de coca/medicación para la altitud',
      'Alternativa: Palccoyo es más fácil y menos lleno'
    ],
    nearbyAttractions: ['red-valley', 'ausangate'],
    relatedSites: ['ausangate-trek', 'machu-picchu'],
    gettingThere: 'Tour from Cusco (3 hours drive, then 1.5-hour hike). Must book tour.',
    gettingThereEs: 'Tour desde Cusco (3 horas de manejo, luego caminata de 1.5 horas). Debe reservar tour.',
    facilities: [
      'Basic restrooms at parking',
      'Hot drink vendors',
      'Horse rentals',
      'Basic snacks for sale',
      'No restaurants - bring food'
    ],
    facilitiesEs: [
      'Baños básicos en estacionamiento',
      'Vendedores de bebidas calientes',
      'Alquiler de caballos',
      'Snacks básicos a la venta',
      'Sin restaurantes - trae comida'
    ]
  },
  {
    slug: 'cumbe-mayo',
    name: 'Cumbe Mayo',
    nameEs: 'Cumbe Mayo',
    type: 'archaeological',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    altitude: 3500,
    description: 'A surreal landscape of eroded rock formations and ancient aqueducts, Cumbe Mayo features a 3,000-year-old water channel carved through rock by pre-Inca engineers. The site feels like walking on another planet.',
    descriptionEs: 'Un paisaje surrealista de formaciones rocosas erosionadas y acueductos antiguos, Cumbe Mayo presenta un canal de agua de 3,000 años tallado en roca por ingenieros pre-Incas. El sitio se siente como caminar en otro planeta.',
    history: 'The aqueduct at Cumbe Mayo was built around 1000 BC, making it one of the oldest engineering works in the Americas. It diverts water from the Pacific to Atlantic watershed across the Andes divide. Petroglyphs and caves add to the mystery.',
    historyEs: 'El acueducto de Cumbe Mayo fue construido alrededor del 1000 AC, haciéndolo una de las obras de ingeniería más antiguas de las Américas. Desvía agua de la cuenca del Pacífico a la del Atlántico a través de la divisoria de los Andes. Petroglifos y cuevas añaden al misterio.',
    highlights: [
      'Otherworldly rock formations',
      '3,000-year-old aqueduct',
      'Ancient petroglyphs',
      'Sacred caves',
      'Stunning highland landscape',
      'Off-the-beaten-path experience'
    ],
    highlightsEs: [
      'Formaciones rocosas de otro mundo',
      'Acueducto de 3,000 años',
      'Petroglifos antiguos',
      'Cuevas sagradas',
      'Impresionante paisaje de tierras altas',
      'Experiencia fuera del circuito turístico'
    ],
    familyRating: 4,
    minAge: 6,
    duration: 'Half day (3-4 hours)',
    durationEs: 'Medio día (3-4 horas)',
    difficulty: 'easy',
    entranceFee: '~$2 per person',
    entranceFeeEs: '~$2 por persona',
    bestTime: 'May-October dry season, morning best',
    bestTimeEs: 'Mayo-octubre temporada seca, mañana mejor',
    tips: [
      'Hire local guide to understand the site',
      'Rock formations spark kids\' imagination',
      'Combine with Baños del Inca',
      'Bring warm layers - highland weather',
      'Walk through the "Bosque de Piedras"',
      'Photography is spectacular'
    ],
    tipsEs: [
      'Contrata guía local para entender el sitio',
      'Las formaciones rocosas despiertan la imaginación de los niños',
      'Combina con Baños del Inca',
      'Trae capas abrigadas - clima de tierras altas',
      'Camina por el "Bosque de Piedras"',
      'La fotografía es espectacular'
    ],
    nearbyAttractions: ['banos-del-inca', 'ventanillas-de-otuzco'],
    relatedSites: ['chavin-de-huantar', 'ventanillas-de-otuzco'],
    gettingThere: '20km from Cajamarca. Tour or taxi (45 minutes).',
    gettingThereEs: '20km de Cajamarca. Tour o taxi (45 minutos).',
    facilities: [
      'Basic restrooms',
      'Local guides',
      'Parking',
      'No food facilities - bring snacks',
      'Marked paths'
    ],
    facilitiesEs: [
      'Baños básicos',
      'Guías locales',
      'Estacionamiento',
      'Sin instalaciones de comida - trae snacks',
      'Senderos marcados'
    ]
  },
  {
    slug: 'karajia-sarcophagi',
    name: 'Karajía Sarcophagi',
    nameEs: 'Sarcófagos de Karajía',
    type: 'archaeological',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 2700,
    description: 'Perched impossibly high on a cliff face, these eerie 2-meter tall sarcophagi contain Chachapoya mummies. The clay figures with skull headdresses watch over the valley, a haunting and unforgettable sight for adventurous families.',
    descriptionEs: 'Colocados imposiblemente alto en un acantilado, estos espeluznantes sarcófagos de 2 metros de alto contienen momias Chachapoya. Las figuras de arcilla con tocados de cráneo vigilan el valle, una vista inquietante e inolvidable para familias aventureras.',
    history: 'The Chachapoya people placed their dead in these clay sarcophagi between 1000-1500 AD, setting them in inaccessible cliff niches to protect them from enemies and tomb robbers. Each sarcophagus held a mummified body in fetal position.',
    historyEs: 'El pueblo Chachapoya colocó a sus muertos en estos sarcófagos de arcilla entre 1000-1500 DC, situándolos en nichos de acantilados inaccesibles para protegerlos de enemigos y saqueadores de tumbas. Cada sarcófago contenía un cuerpo momificado en posición fetal.',
    highlights: [
      'Unique cliff-side sarcophagi',
      'Mysterious Chachapoya culture',
      'Scenic mountain drive',
      'Off-the-beaten-path adventure',
      'Photography from viewpoint',
      'Combine with Kuélap visit'
    ],
    highlightsEs: [
      'Sarcófagos únicos en acantilado',
      'Misteriosa cultura Chachapoya',
      'Manejo escénico por montañas',
      'Aventura fuera del circuito turístico',
      'Fotografía desde el mirador',
      'Combina con visita a Kuélap'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-4 hours from Chachapoyas',
    durationEs: '3-4 horas desde Chachapoyas',
    difficulty: 'easy',
    entranceFee: '~$2 per person',
    entranceFeeEs: '~$2 por persona',
    bestTime: 'Year-round, morning for better light',
    bestTimeEs: 'Todo el año, mañana para mejor luz',
    tips: [
      'Short hike (30 min) to viewpoint',
      'Binoculars help see details',
      'Fascinating for kids interested in mummies',
      'Local guides explain the culture',
      'Visit Quiocta Cave nearby',
      'Not scary - educational and mysterious'
    ],
    tipsEs: [
      'Caminata corta (30 min) al mirador',
      'Binoculares ayudan a ver detalles',
      'Fascinante para niños interesados en momias',
      'Los guías locales explican la cultura',
      'Visita la Cueva Quiocta cercana',
      'No es tenebroso - educativo y misterioso'
    ],
    nearbyAttractions: ['quiocta-cave', 'chachapoyas-town'],
    relatedSites: ['kuelap', 'revash'],
    gettingThere: '2 hours from Chachapoyas by car, then 30-min hike.',
    gettingThereEs: '2 horas de Chachapoyas en auto, luego caminata de 30 min.',
    facilities: [
      'Viewpoint platform',
      'Basic restrooms',
      'Local guides',
      'Small community shops',
      'Parking'
    ],
    facilitiesEs: [
      'Plataforma de mirador',
      'Baños básicos',
      'Guías locales',
      'Pequeñas tiendas comunitarias',
      'Estacionamiento'
    ]
  },
  {
    slug: 'manu-national-park',
    name: 'Manu National Park',
    nameEs: 'Parque Nacional del Manu',
    type: 'natural',
    city: 'cusco',
    region: 'Madre de Dios / Cusco Regions',
    regionEs: 'Regiones Madre de Dios / Cusco',
    altitude: 400,
    description: 'One of the most biodiverse places on Earth, Manu encompasses cloud forest, lowland jungle, and Andean highlands. This UNESCO World Heritage Site protects giant otters, jaguars, harpy eagles, and over 1,000 bird species in pristine Amazon rainforest.',
    descriptionEs: 'Uno de los lugares con más biodiversidad en la Tierra, Manu abarca bosque nublado, selva baja y tierras altas andinas. Este Patrimonio Mundial de la UNESCO protege nutrias gigantes, jaguares, águilas arpías y más de 1,000 especies de aves en selva amazónica prístina.',
    history: 'Established in 1973, Manu protects 1.5 million hectares across multiple ecological zones. It contains one of the few uncontacted indigenous groups in the world and has been a UNESCO World Heritage Site since 1987.',
    historyEs: 'Establecido en 1973, Manu protege 1.5 millones de hectáreas a través de múltiples zonas ecológicas. Contiene uno de los pocos grupos indígenas no contactados del mundo y ha sido Patrimonio Mundial de la UNESCO desde 1987.',
    highlights: [
      'World-class biodiversity',
      'Giant river otter spotting',
      'Macaw clay licks',
      'Cloud forest to lowland jungle',
      'Pristine Amazon experience',
      'Indigenous communities'
    ],
    highlightsEs: [
      'Biodiversidad de clase mundial',
      'Avistamiento de nutrias gigantes',
      'Colpas de guacamayos',
      'Bosque nublado a selva baja',
      'Experiencia amazónica prístina',
      'Comunidades indígenas'
    ],
    familyRating: 3,
    minAge: 8,
    duration: '5-8 days minimum',
    durationEs: '5-8 días mínimo',
    difficulty: 'moderate',
    entranceFee: 'Included in lodge/tour packages',
    entranceFeeEs: 'Incluido en paquetes de lodge/tour',
    bestTime: 'May-October dry season for best wildlife',
    bestTimeEs: 'Mayo-octubre temporada seca para mejor vida silvestre',
    tips: [
      'Multi-day expedition required',
      'Book with authorized operators only',
      'Lodges are comfortable but remote',
      'Vaccinations required (yellow fever)',
      'Not for very young children',
      'Ultimate Amazon experience'
    ],
    tipsEs: [
      'Se requiere expedición de varios días',
      'Reserva solo con operadores autorizados',
      'Los lodges son cómodos pero remotos',
      'Vacunas requeridas (fiebre amarilla)',
      'No para niños muy pequeños',
      'La experiencia amazónica definitiva'
    ],
    nearbyAttractions: ['manu-biosphere', 'cock-rock-lodge'],
    relatedSites: ['tambopata', 'amazon-iquitos'],
    gettingThere: 'Multi-day journey from Cusco through cloud forest. All arrangements through authorized tour operators.',
    gettingThereEs: 'Viaje de varios días desde Cusco a través del bosque nublado. Todos los arreglos a través de operadores turísticos autorizados.',
    facilities: [
      'Eco-lodges',
      'Expert naturalist guides',
      'Boat transportation',
      'All meals included',
      'Research stations',
      'Wildlife observation towers'
    ],
    facilitiesEs: [
      'Eco-lodges',
      'Guías naturalistas expertos',
      'Transporte en bote',
      'Todas las comidas incluidas',
      'Estaciones de investigación',
      'Torres de observación de vida silvestre'
    ]
  },
  {
    slug: 'circuito-magico-agua',
    name: 'Circuito Mágico del Agua',
    nameEs: 'Circuito Mágico del Agua',
    type: 'museum',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 154,
    description: 'A spectacular water park featuring 13 illuminated fountains, including the world\'s tallest fountain in a public park. After dark, the fountains dance to music with dazzling light shows - a magical evening experience for families that\'s uniquely Peruvian.',
    descriptionEs: 'Un espectacular parque de agua con 13 fuentes iluminadas, incluyendo la fuente más alta del mundo en un parque público. Después del anochecer, las fuentes bailan con música y deslumbrantes shows de luces - una experiencia nocturna mágica para familias que es únicamente peruana.',
    history: 'Opened in 2007 in the Parque de la Reserva, the Circuito Mágico del Agua holds a Guinness World Record for the largest fountain complex in a public park. The main fountain shoots water 80 meters high, and the park combines modern entertainment with Lima\'s beautiful historic surroundings.',
    historyEs: 'Inaugurado en 2007 en el Parque de la Reserva, el Circuito Mágico del Agua tiene un Récord Mundial Guinness por el complejo de fuentes más grande en un parque público. La fuente principal dispara agua a 80 metros de altura, y el parque combina entretenimiento moderno con los hermosos alrededores históricos de Lima.',
    highlights: [
      '13 spectacular fountains',
      'World record tallest fountain (80m)',
      'Nightly music and light shows',
      'Walk-through tunnel of water',
      'Interactive fountains for kids',
      'Laser and hologram shows'
    ],
    highlightsEs: [
      '13 fuentes espectaculares',
      'Fuente más alta del mundo (80m) récord',
      'Shows nocturnos de música y luces',
      'Túnel de agua para caminar',
      'Fuentes interactivas para niños',
      'Shows de láser y hologramas'
    ],
    familyRating: 5,
    minAge: 2,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$1.50, children ~$0.50',
    entranceFeeEs: 'Adultos ~$1.50, niños ~$0.50',
    bestTime: 'Go at dusk (6-7pm) to see fountains in daylight AND illuminated',
    bestTimeEs: 'Ve al atardecer (6-7pm) para ver las fuentes de día Y iluminadas',
    tips: [
      'Go at sunset to see both day and night shows',
      'Bring towels - kids WILL get wet at interactive fountains',
      'Light show starts after dark (~7pm)',
      'Incredibly affordable family entertainment',
      'Easy to reach by taxi or Metropolitano',
      'Combine with nearby MALI museum'
    ],
    tipsEs: [
      'Ve al atardecer para ver shows de día y noche',
      'Trae toallas - los niños SE MOJARÁN en las fuentes interactivas',
      'El show de luces comienza después del anochecer (~7pm)',
      'Entretenimiento familiar increíblemente económico',
      'Fácil de llegar en taxi o Metropolitano',
      'Combina con el museo MALI cercano'
    ],
    nearbyAttractions: ['mali-museum', 'centro-historico-lima'],
    relatedSites: ['mali-museum', 'parque-kennedy'],
    gettingThere: 'Parque de la Reserva, near Plaza Grau. Taxi, Uber, or Metropolitano (Estadio station).',
    gettingThereEs: 'Parque de la Reserva, cerca de Plaza Grau. Taxi, Uber, o Metropolitano (estación Estadio).',
    facilities: [
      'Restrooms',
      'Snack vendors',
      'Seating areas',
      'Wheelchair accessible',
      'Baby changing',
      'Photo opportunities everywhere'
    ],
    facilitiesEs: [
      'Baños',
      'Vendedores de snacks',
      'Áreas de asientos',
      'Accesible en silla de ruedas',
      'Cambiador de bebés',
      'Oportunidades de fotos en todas partes'
    ]
  },
  {
    slug: 'parque-leyendas',
    name: 'Parque de las Leyendas (Lima Zoo)',
    nameEs: 'Parque de las Leyendas',
    type: 'natural',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 60,
    description: 'Lima\'s beloved zoo combines animal exhibits with pre-Columbian ruins and botanical gardens across three ecological zones: coast, highlands, and jungle. Kids love the petting zoo, playground, and paddle boats while learning about Peru\'s incredible biodiversity.',
    descriptionEs: 'El querido zoológico de Lima combina exhibiciones de animales con ruinas precolombinas y jardines botánicos a través de tres zonas ecológicas: costa, sierra y selva. A los niños les encanta el zoológico de contacto, el área de juegos y los botes a pedal mientras aprenden sobre la increíble biodiversidad del Perú.',
    history: 'Opened in 1964, the zoo sits on land that was once the pre-Inca Maranga culture capital. The 247-acre park contains numerous huacas (pyramids) among its animal exhibits. With over 1,500 animals and 215 species, it\'s one of the largest zoos in Latin America.',
    historyEs: 'Inaugurado en 1964, el zoológico se encuentra en tierras que fueron la capital de la cultura pre-Inca Maranga. El parque de 100 hectáreas contiene numerosas huacas (pirámides) entre sus exhibiciones de animales. Con más de 1,500 animales y 215 especies, es uno de los zoológicos más grandes de Latinoamérica.',
    highlights: [
      'Three zones: Coast, Highlands, Jungle',
      'Pre-Columbian pyramids within zoo',
      'Peruvian animals: llamas, condors, jaguars',
      'Interactive petting zoo',
      'Paddle boats and playgrounds',
      'Botanical gardens'
    ],
    highlightsEs: [
      'Tres zonas: Costa, Sierra, Selva',
      'Pirámides precolombinas dentro del zoológico',
      'Animales peruanos: llamas, cóndores, jaguares',
      'Zoológico de contacto interactivo',
      'Botes a pedal y áreas de juegos',
      'Jardines botánicos'
    ],
    familyRating: 5,
    minAge: 1,
    duration: '3-5 hours',
    durationEs: '3-5 horas',
    difficulty: 'easy',
    entranceFee: 'Adults ~$5, children ~$2',
    entranceFeeEs: 'Adultos ~$5, niños ~$2',
    bestTime: 'Morning (9-11am) when animals are most active. Avoid midday heat.',
    bestTimeEs: 'Mañana (9-11am) cuando los animales están más activos. Evita el calor del mediodía.',
    tips: [
      'It\'s huge - rent a cart or bring stroller',
      'Morning is best for active animals',
      'Pack snacks and water',
      'Don\'t miss the Peruvian species section',
      'Huaca ruins are fascinating bonus',
      'Weekdays are less crowded'
    ],
    tipsEs: [
      'Es enorme - alquila un carrito o trae cochecito',
      'La mañana es mejor para animales activos',
      'Empaca snacks y agua',
      'No te pierdas la sección de especies peruanas',
      'Las ruinas de huacas son un bonus fascinante',
      'Entre semana está menos lleno'
    ],
    nearbyAttractions: ['san-miguel-mall', 'la-marina-lighthouse'],
    relatedSites: ['pachacamac', 'huaca-pucllana'],
    gettingThere: 'San Miguel district. Taxi or Uber from Miraflores (~20 min). Large parking area.',
    gettingThereEs: 'Distrito de San Miguel. Taxi o Uber desde Miraflores (~20 min). Gran área de estacionamiento.',
    facilities: [
      'Multiple restaurants',
      'Clean restrooms throughout',
      'Cart/wheelchair rental',
      'Gift shops',
      'Paddle boat rental',
      'Playground areas',
      'Picnic areas'
    ],
    facilitiesEs: [
      'Múltiples restaurantes',
      'Baños limpios en todo el parque',
      'Alquiler de carritos/sillas de ruedas',
      'Tiendas de regalos',
      'Alquiler de botes a pedal',
      'Áreas de juegos',
      'Áreas de picnic'
    ]
  },
  {
    slug: 'chinchero',
    name: 'Chinchero',
    nameEs: 'Chinchero',
    type: 'archaeological',
    city: 'sacred-valley',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3762,
    description: 'A living Inca town where time seems to stand still, Chinchero combines spectacular Inca ruins with a colonial church built on Inca foundations, a famous Sunday market, and world-renowned traditional weaving. Watch master weavers demonstrate ancient techniques passed down for generations.',
    descriptionEs: 'Un pueblo Inca viviente donde el tiempo parece detenerse, Chinchero combina espectaculares ruinas Incas con una iglesia colonial construida sobre cimientos Incas, un famoso mercado dominical y tejido tradicional de renombre mundial. Observa a maestras tejedoras demostrar técnicas antiguas transmitidas por generaciones.',
    history: 'Chinchero was the royal estate of Inca Tupac Yupanqui and features impressive agricultural terraces and ceremonial spaces. When the Spanish arrived, they built a church directly on the Inca palace foundation - a powerful symbol of conquest still visible today. The town has preserved its weaving traditions for over 500 years.',
    historyEs: 'Chinchero fue la propiedad real del Inca Túpac Yupanqui y presenta impresionantes terrazas agrícolas y espacios ceremoniales. Cuando llegaron los españoles, construyeron una iglesia directamente sobre los cimientos del palacio Inca - un poderoso símbolo de conquista aún visible hoy. El pueblo ha preservado sus tradiciones textiles por más de 500 años.',
    highlights: [
      'Inca ruins and terraces',
      'Colonial church on Inca foundations',
      'Famous Sunday market',
      'Traditional weaving demonstrations',
      'Natural dye techniques',
      'Stunning mountain views'
    ],
    highlightsEs: [
      'Ruinas y terrazas Incas',
      'Iglesia colonial sobre cimientos Incas',
      'Famoso mercado dominical',
      'Demostraciones de tejido tradicional',
      'Técnicas de teñido natural',
      'Impresionantes vistas de montañas'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Included in Boleto Turístico (~$20) or single entry ~$3',
    entranceFeeEs: 'Incluido en Boleto Turístico (~$20) o entrada simple ~$3',
    bestTime: 'Sunday for market, any day for ruins and weaving',
    bestTimeEs: 'Domingo para el mercado, cualquier día para ruinas y tejido',
    tips: [
      'Sunday market is unmissable!',
      'Weaving demonstrations are fascinating for kids',
      'Let kids try using a backstrap loom',
      'Higher altitude than Cusco - acclimatize first',
      'Buy authentic textiles directly from weavers',
      'Visit the church for Inca-Spanish history lesson'
    ],
    tipsEs: [
      '¡El mercado del domingo es imperdible!',
      'Las demostraciones de tejido son fascinantes para los niños',
      'Deja que los niños intenten usar un telar de cintura',
      'Mayor altitud que Cusco - aclimátate primero',
      'Compra textiles auténticos directamente de las tejedoras',
      'Visita la iglesia para una lección de historia Inca-española'
    ],
    nearbyAttractions: ['moray', 'maras-salt-mines', 'sacred-valley'],
    relatedSites: ['moray', 'maras-salt-mines', 'ollantaytambo'],
    gettingThere: '30km from Cusco (45 min), on the way to Sacred Valley. Included in most Sacred Valley tours.',
    gettingThereEs: '30km de Cusco (45 min), camino al Valle Sagrado. Incluido en la mayoría de tours del Valle Sagrado.',
    facilities: [
      'Restrooms',
      'Small restaurants',
      'Weaving cooperatives',
      'Market stalls (Sunday)',
      'Parking',
      'Local guides available'
    ],
    facilitiesEs: [
      'Baños',
      'Pequeños restaurantes',
      'Cooperativas de tejido',
      'Puestos de mercado (domingo)',
      'Estacionamiento',
      'Guías locales disponibles'
    ]
  },
  {
    slug: 'tambopata-reserve',
    name: 'Tambopata National Reserve',
    nameEs: 'Reserva Nacional Tambopata',
    type: 'natural',
    city: 'puerto-maldonado',
    region: 'Madre de Dios Region',
    regionEs: 'Región Madre de Dios',
    description: 'One of the most biodiverse places on Earth, Tambopata protects pristine Amazon rainforest with incredible wildlife including macaws, giant otters, caimans, and monkeys. Family-friendly lodges offer immersive jungle experiences with expert naturalist guides.',
    descriptionEs: 'Uno de los lugares más biodiversos de la Tierra, Tambopata protege bosque amazónico prístino con increíble fauna incluyendo guacamayos, nutrias gigantes, caimanes y monos. Lodges familiares ofrecen experiencias inmersivas de selva con guías naturalistas expertos.',
    history: 'Established in 1990 and expanded in 2000 to cover 274,690 hectares, protecting lowland Amazon rainforest and connecting with Bahuaja-Sonene National Park.',
    historyEs: 'Establecida en 1990 y expandida en 2000 para cubrir 274,690 hectáreas, protegiendo bosque amazónico de tierras bajas y conectando con el Parque Nacional Bahuaja-Sonene.',
    highlights: [
      'Famous macaw clay licks (colpas)',
      'Giant river otter sightings',
      'Canopy towers and walkways',
      'Night jungle walks',
      'Lake Sandoval oxbow lake',
      'Incredible bird diversity (600+ species)'
    ],
    highlightsEs: [
      'Famosas collpas de guacamayos',
      'Avistamiento de nutrias gigantes',
      'Torres y pasarelas de dosel',
      'Caminatas nocturnas en la selva',
      'Lago Sandoval (lago de herradura)',
      'Increíble diversidad de aves (600+ especies)'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '3-5 days',
    durationEs: '3-5 días',
    difficulty: 'moderate',
    entranceFee: 'Included in lodge packages (lodges $150-500/night)',
    entranceFeeEs: 'Incluido en paquetes de lodge (lodges $150-500/noche)',
    bestTime: 'May to October (dry season) for best wildlife viewing',
    bestTimeEs: 'Mayo a octubre (temporada seca) para mejor avistamiento de fauna',
    tips: [
      'Book 3-4 nights minimum for best experience',
      'Wake early for macaw clay licks (5:30am)',
      'Bring binoculars and camera with zoom',
      'Rubber boots provided by lodges',
      'Insect repellent is essential',
      'Some lodges have minimum age requirements'
    ],
    tipsEs: [
      'Reserva 3-4 noches mínimo para mejor experiencia',
      'Despierta temprano para collpas de guacamayos (5:30am)',
      'Lleva binoculares y cámara con zoom',
      'Los lodges proporcionan botas de goma',
      'El repelente de insectos es esencial',
      'Algunos lodges tienen requisitos de edad mínima'
    ],
    nearbyAttractions: ['lake-sandoval', 'colpa-chuncho', 'monkey-island'],
    relatedSites: ['manu-national-park', 'amazon-jungle'],
    gettingThere: 'Fly to Puerto Maldonado (30 min from Lima), then boat transfer to lodges (1-3 hours).',
    gettingThereEs: 'Vuela a Puerto Maldonado (30 min desde Lima), luego traslado en bote a los lodges (1-3 horas).',
    facilities: [
      'Full-service jungle lodges',
      'Naturalist guides included',
      'All meals included',
      'Canopy walkways',
      'Observation towers',
      'Some lodges have pools'
    ],
    facilitiesEs: [
      'Lodges de selva con servicio completo',
      'Guías naturalistas incluidos',
      'Todas las comidas incluidas',
      'Pasarelas de dosel',
      'Torres de observación',
      'Algunos lodges tienen piscinas'
    ]
  },
  {
    slug: 'amantani-island',
    name: 'Amantaní Island',
    nameEs: 'Isla Amantaní',
    type: 'cultural',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'A beautiful island on Lake Titicaca where visitors can experience authentic Quechua homestays with local families. With no cars or hotels, Amantaní offers a glimpse into traditional Andean life, with ancient temples, terraced hills, and warm community hospitality.',
    descriptionEs: 'Una hermosa isla en el Lago Titicaca donde los visitantes pueden experimentar auténticas estadías con familias Quechuas locales. Sin autos ni hoteles, Amantaní ofrece una visión de la vida andina tradicional, con templos antiguos, cerros aterrazados y cálida hospitalidad comunitaria.',
    history: 'Inhabited for over 4,000 years, Amantaní has pre-Inca temples dedicated to Pachamama (Mother Earth) and Pachatata (Father Earth) on its twin peaks.',
    historyEs: 'Habitada por más de 4,000 años, Amantaní tiene templos pre-Incas dedicados a Pachamama (Madre Tierra) y Pachatata (Padre Tierra) en sus picos gemelos.',
    highlights: [
      'Authentic homestay with local families',
      'Pachamama and Pachatata temples',
      'Traditional dress-up evening',
      'Stunning lake views from hilltops',
      'No cars, hotels, or tourism',
      'Traditional textile weaving'
    ],
    highlightsEs: [
      'Estadía auténtica con familias locales',
      'Templos Pachamama y Pachatata',
      'Noche de vestimenta tradicional',
      'Impresionantes vistas del lago desde los cerros',
      'Sin autos, hoteles ni turismo masivo',
      'Tejido de textiles tradicionales'
    ],
    familyRating: 5,
    minAge: 6,
    duration: '1-2 nights (overnight required)',
    durationEs: '1-2 noches (pernocte requerido)',
    difficulty: 'moderate',
    altitude: 3817,
    entranceFee: 'Community fee ~$3, homestay ~$15-25/person including meals',
    entranceFeeEs: 'Tarifa comunitaria ~$3, estadía ~$15-25/persona incluyendo comidas',
    bestTime: 'April to October for clear skies and calm lake',
    bestTimeEs: 'Abril a octubre para cielos despejados y lago tranquilo',
    tips: [
      'Bring small gifts for host families (school supplies, fruit)',
      'Pack warm clothes - nights are cold',
      'Flashlight essential (limited electricity)',
      'Embrace simple accommodations',
      'Hike to temples for sunset - magical!',
      'Learn basic Quechua greetings'
    ],
    tipsEs: [
      'Lleva pequeños regalos para familias anfitrionas (útiles escolares, fruta)',
      'Empaca ropa abrigada - las noches son frías',
      'Linterna esencial (electricidad limitada)',
      'Acepta alojamientos simples',
      'Camina a los templos para el atardecer - ¡mágico!',
      'Aprende saludos básicos en Quechua'
    ],
    nearbyAttractions: ['taquile-island', 'uros-floating-islands', 'lake-titicaca'],
    relatedSites: ['taquile-island', 'uros-floating-islands'],
    gettingThere: '4-hour boat ride from Puno. Usually combined with Uros and Taquile in 2-day tours.',
    gettingThereEs: '4 horas en bote desde Puno. Usualmente combinado con Uros y Taquile en tours de 2 días.',
    facilities: [
      'Basic homestay accommodations',
      'Shared meals with families',
      'Community meeting hall',
      'Small shops',
      'Basic restrooms',
      'No ATMs or internet'
    ],
    facilitiesEs: [
      'Alojamiento básico en casas familiares',
      'Comidas compartidas con familias',
      'Salón de reuniones comunitario',
      'Pequeñas tiendas',
      'Baños básicos',
      'Sin cajeros ni internet'
    ]
  },
  {
    slug: 'chan-chan',
    name: 'Chan Chan',
    nameEs: 'Chan Chan',
    type: 'archaeological',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'The largest adobe city in the ancient world and capital of the Chimú Empire. This UNESCO World Heritage Site features elaborate mud-brick palaces, plazas, and walls decorated with intricate geometric patterns. A must-see for families interested in pre-Inca civilizations.',
    descriptionEs: 'La ciudad de adobe más grande del mundo antiguo y capital del Imperio Chimú. Este Sitio Patrimonio Mundial de UNESCO presenta elaborados palacios de barro, plazas y muros decorados con intrincados patrones geométricos. Imperdible para familias interesadas en civilizaciones pre-Incas.',
    history: 'Built around 850 AD, Chan Chan was capital of the Chimú Kingdom until conquered by the Incas in 1470. At its peak, 60,000 people lived here.',
    historyEs: 'Construida alrededor del 850 d.C., Chan Chan fue capital del Reino Chimú hasta ser conquistada por los Incas en 1470. En su apogeo, 60,000 personas vivían aquí.',
    highlights: [
      'UNESCO World Heritage Site',
      'Elaborate adobe friezes',
      'Nik An (Tschudi Palace) complex',
      'Ancient water management systems',
      'Geometric animal patterns',
      'On-site museum'
    ],
    highlightsEs: [
      'Sitio Patrimonio Mundial UNESCO',
      'Elaborados frisos de adobe',
      'Complejo Nik An (Palacio Tschudi)',
      'Sistemas antiguos de manejo de agua',
      'Patrones geométricos de animales',
      'Museo en el sitio'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: '~$4 adults, ~$1 children',
    entranceFeeEs: '~$4 adultos, ~$1 niños',
    bestTime: 'Morning for cooler temperatures and better photos',
    bestTimeEs: 'Mañana para temperaturas más frescas y mejores fotos',
    tips: [
      'Hire a guide to understand the history',
      'Visit museum first for context',
      'Bring sun protection - little shade',
      'Combine with Huacas del Sol y Luna',
      'Look for pelican and fish patterns',
      'Photography is allowed'
    ],
    tipsEs: [
      'Contrata guía para entender la historia',
      'Visita el museo primero para contexto',
      'Lleva protección solar - poca sombra',
      'Combina con Huacas del Sol y Luna',
      'Busca patrones de pelícanos y peces',
      'Fotografía está permitida'
    ],
    nearbyAttractions: ['huaca-sol-luna', 'trujillo-centro', 'huanchaco'],
    relatedSites: ['huaca-sol-luna', 'tucume', 'sipan'],
    gettingThere: '5km from Trujillo center (15 min by taxi). On route to Huanchaco beach.',
    gettingThereEs: '5km del centro de Trujillo (15 min en taxi). Camino a playa Huanchaco.',
    facilities: [
      'Site museum',
      'Restrooms',
      'Parking',
      'Guide services',
      'Gift shop',
      'Wheelchair accessible (main areas)'
    ],
    facilitiesEs: [
      'Museo del sitio',
      'Baños',
      'Estacionamiento',
      'Servicios de guía',
      'Tienda de recuerdos',
      'Accesible en silla de ruedas (áreas principales)'
    ]
  },
  {
    slug: 'pachacamac',
    name: 'Pachacamac',
    nameEs: 'Pachacamac',
    type: 'archaeological',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'An important pre-Columbian pilgrimage center just 40 minutes from Lima\'s center. For 1,500 years, people traveled here to consult the famous oracle. The extensive ruins include pyramids, temples, and a modern museum with excellent exhibits.',
    descriptionEs: 'Un importante centro de peregrinación precolombino a solo 40 minutos del centro de Lima. Durante 1,500 años, personas viajaban aquí para consultar el famoso oráculo. Las extensas ruinas incluyen pirámides, templos y un museo moderno con excelentes exhibiciones.',
    history: 'A sacred site from 200 AD, later incorporated by the Wari and Inca empires. The oracle of Pachacamac was one of the most important in the ancient Andes.',
    historyEs: 'Un sitio sagrado desde el 200 d.C., luego incorporado por los imperios Wari e Inca. El oráculo de Pachacamac fue uno de los más importantes en los Andes antiguos.',
    highlights: [
      'Temple of the Sun',
      'Painted Temple (oldest structure)',
      'Pilgrims\' plaza',
      'Modern on-site museum',
      'Pacific Ocean views',
      'Easy day trip from Lima'
    ],
    highlightsEs: [
      'Templo del Sol',
      'Templo Pintado (estructura más antigua)',
      'Plaza de peregrinos',
      'Museo moderno en el sitio',
      'Vistas al Océano Pacífico',
      'Fácil excursión de un día desde Lima'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: '~$5 adults, ~$1 children, includes museum',
    entranceFeeEs: '~$5 adultos, ~$1 niños, incluye museo',
    bestTime: 'Morning to avoid afternoon heat and crowds',
    bestTimeEs: 'Mañana para evitar calor y multitudes de la tarde',
    tips: [
      'Start at the museum for context',
      'Rent bicycles to cover the large site',
      'Bring water and sun protection',
      'Allow extra time for the museum',
      'Great alternative to Machu Picchu crowds',
      'Combine with Barranco or Chorrillos visit'
    ],
    tipsEs: [
      'Empieza en el museo para contexto',
      'Alquila bicicletas para cubrir el gran sitio',
      'Lleva agua y protección solar',
      'Permite tiempo extra para el museo',
      'Gran alternativa a las multitudes de Machu Picchu',
      'Combina con visita a Barranco o Chorrillos'
    ],
    nearbyAttractions: ['lima-beaches', 'barranco', 'chorrillos'],
    relatedSites: ['huaca-pucllana', 'circuito-magico-agua', 'parque-leyendas'],
    gettingThere: '31km south of Lima center (40 min by taxi/tour). Public bus from Barranco possible.',
    gettingThereEs: '31km al sur del centro de Lima (40 min en taxi/tour). Bus público desde Barranco posible.',
    facilities: [
      'Modern museum',
      'Bicycle rentals',
      'Restrooms',
      'Cafe',
      'Gift shop',
      'Parking'
    ],
    facilitiesEs: [
      'Museo moderno',
      'Alquiler de bicicletas',
      'Baños',
      'Cafetería',
      'Tienda de recuerdos',
      'Estacionamiento'
    ]
  },
  {
    slug: 'huaca-de-la-luna',
    name: 'Huaca de la Luna (Temple of the Moon)',
    nameEs: 'Huaca de la Luna (Templo de la Luna)',
    type: 'archaeological',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'One of Peru\'s most impressive Moche archaeological sites, the Temple of the Moon features extraordinary polychrome murals depicting the deity Ai Apaec. Unlike many sites, the vivid colors of 1,500-year-old murals are remarkably preserved.',
    descriptionEs: 'Uno de los sitios arqueológicos Moche más impresionantes de Perú, el Templo de la Luna presenta extraordinarios murales policromados que representan a la deidad Ai Apaec. A diferencia de muchos sitios, los colores vívidos de murales de 1,500 años están notablemente preservados.',
    history: 'Built by the Moche civilization (100-800 AD), the temple was constructed in layers over 600 years. Human sacrifices occurred here. Excavations continue to reveal new murals and artifacts.',
    historyEs: 'Construido por la civilización Moche (100-800 d.C.), el templo fue construido en capas durante 600 años. Aquí ocurrieron sacrificios humanos. Las excavaciones continúan revelando nuevos murales y artefactos.',
    highlights: [
      'Preserved polychrome murals',
      'Deity Ai Apaec imagery',
      'Ongoing archaeological excavations',
      'Excellent on-site museum',
      'View of Huaca del Sol nearby',
      'Less crowded than Chan Chan'
    ],
    highlightsEs: [
      'Murales policromados preservados',
      'Imágenes de la deidad Ai Apaec',
      'Excavaciones arqueológicas en curso',
      'Excelente museo en el sitio',
      'Vista de Huaca del Sol cercana',
      'Menos lleno que Chan Chan'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: '~$4 adults, ~$1 children, includes guided tour',
    entranceFeeEs: '~$4 adultos, ~$1 niños, incluye tour guiado',
    bestTime: 'Morning for best light on murals',
    bestTimeEs: 'Mañana para mejor luz en los murales',
    tips: [
      'Guided tours mandatory and excellent',
      'Combine with Chan Chan for full day',
      'Colors are truly amazing',
      'Explain sacrifice history age-appropriately',
      'Museum gives great context first',
      'Photo-friendly site'
    ],
    tipsEs: [
      'Tours guiados obligatorios y excelentes',
      'Combina con Chan Chan para día completo',
      'Los colores son verdaderamente increíbles',
      'Explica la historia de sacrificios apropiadamente según la edad',
      'El museo da gran contexto primero',
      'Sitio amigable para fotos'
    ],
    nearbyAttractions: ['chan-chan', 'huanchaco', 'trujillo-centro'],
    relatedSites: ['chan-chan', 'sipan', 'tucume'],
    gettingThere: '8km from Trujillo center (20 min by taxi). Often combined with Chan Chan tours.',
    gettingThereEs: '8km del centro de Trujillo (20 min en taxi). Frecuentemente combinado con tours a Chan Chan.',
    facilities: [
      'Excellent museum',
      'Restrooms',
      'Parking',
      'Guided tours included',
      'Gift shop',
      'Shaded viewing areas'
    ],
    facilitiesEs: [
      'Excelente museo',
      'Baños',
      'Estacionamiento',
      'Tours guiados incluidos',
      'Tienda de recuerdos',
      'Áreas de observación con sombra'
    ]
  },
  {
    slug: 'ventanillas-de-otuzco',
    name: 'Ventanillas de Otuzco',
    nameEs: 'Ventanillas de Otuzco',
    type: 'archaeological',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    description: 'An ancient pre-Inca necropolis carved into volcanic rock hillsides, featuring hundreds of square niches that look like windows. These 3,000-year-old burial chambers create a hauntingly beautiful landscape that fascinates visitors of all ages.',
    descriptionEs: 'Una antigua necrópolis pre-Inca tallada en laderas de roca volcánica, con cientos de nichos cuadrados que parecen ventanas. Estas cámaras funerarias de 3,000 años crean un paisaje inquietantemente hermoso que fascina a visitantes de todas las edades.',
    history: 'Created by the Cajamarca culture (1500 BC - 1500 AD), these niches held mummified remains of important individuals. The name means "little windows" in Spanish.',
    historyEs: 'Creadas por la cultura Cajamarca (1500 a.C. - 1500 d.C.), estos nichos contenían restos momificados de individuos importantes. El nombre significa "pequeñas ventanas" en español.',
    highlights: [
      'Hundreds of carved burial niches',
      'Unique "window" appearance',
      'Beautiful countryside setting',
      'Pre-Inca history lesson',
      'Short visit - easy for kids',
      'Combine with Cajamarca city'
    ],
    highlightsEs: [
      'Cientos de nichos funerarios tallados',
      'Apariencia única de "ventanas"',
      'Hermoso entorno campestre',
      'Lección de historia pre-Inca',
      'Visita corta - fácil para niños',
      'Combina con ciudad de Cajamarca'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '1 hour',
    durationEs: '1 hora',
    difficulty: 'easy',
    altitude: 2850,
    entranceFee: '~$1.50',
    entranceFeeEs: '~$1.50',
    bestTime: 'Morning for best light and photos',
    bestTimeEs: 'Mañana para mejor luz y fotos',
    tips: [
      'Quick visit - great for short attention spans',
      'Explain burial customs age-appropriately',
      'Combine with Baños del Inca',
      'Count the windows with kids!',
      'Wear sun protection',
      'Local guides available'
    ],
    tipsEs: [
      'Visita rápida - genial para períodos de atención cortos',
      'Explica costumbres funerarias apropiadamente según la edad',
      'Combina con Baños del Inca',
      '¡Cuenta las ventanas con los niños!',
      'Usa protección solar',
      'Guías locales disponibles'
    ],
    nearbyAttractions: ['banos-del-inca', 'cumbe-mayo', 'cajamarca-centro'],
    relatedSites: ['cumbe-mayo', 'revash', 'sillustani'],
    gettingThere: '8km from Cajamarca (15 min by taxi or combi). Easy half-day trip.',
    gettingThereEs: '8km de Cajamarca (15 min en taxi o combi). Fácil viaje de medio día.',
    facilities: [
      'Basic restrooms',
      'Small parking area',
      'Local vendors',
      'Viewing platforms',
      'No formal museum'
    ],
    facilitiesEs: [
      'Baños básicos',
      'Pequeña área de estacionamiento',
      'Vendedores locales',
      'Plataformas de observación',
      'Sin museo formal'
    ]
  },
  {
    slug: 'caral',
    name: 'Caral (Sacred City)',
    nameEs: 'Caral (Ciudad Sagrada)',
    type: 'archaeological',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'The oldest city in the Americas, Caral dates back 5,000 years - contemporary with Egyptian pyramids. This UNESCO World Heritage Site features six pyramids and reveals a sophisticated civilization that had no warfare or weapons.',
    descriptionEs: 'La ciudad más antigua de las Américas, Caral data de hace 5,000 años - contemporánea con las pirámides egipcias. Este Sitio Patrimonio Mundial UNESCO presenta seis pirámides y revela una civilización sofisticada que no tenía guerras ni armas.',
    history: 'Built around 2600 BC, Caral was a thriving city of 3,000 people. Remarkably, no evidence of warfare has been found - they developed through trade and religion, not conquest.',
    historyEs: 'Construida alrededor del 2600 a.C., Caral fue una ciudad próspera de 3,000 personas. Notablemente, no se ha encontrado evidencia de guerras - se desarrollaron a través del comercio y la religión, no la conquista.',
    highlights: [
      'Oldest city in Americas',
      'UNESCO World Heritage Site',
      'Six pyramidal structures',
      'Peaceful civilization history',
      'Ancient amphitheater',
      'No evidence of warfare'
    ],
    highlightsEs: [
      'Ciudad más antigua de las Américas',
      'Sitio Patrimonio Mundial UNESCO',
      'Seis estructuras piramidales',
      'Historia de civilización pacífica',
      'Anfiteatro antiguo',
      'Sin evidencia de guerras'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-4 hours (including travel)',
    durationEs: '3-4 horas (incluyendo viaje)',
    difficulty: 'easy',
    entranceFee: '~$4 adults, ~$1 children',
    entranceFeeEs: '~$4 adultos, ~$1 niños',
    bestTime: 'Year-round, mornings for cooler temperatures',
    bestTimeEs: 'Todo el año, mañanas para temperaturas más frescas',
    tips: [
      'Fascinating "no war" history for kids',
      'Bring plenty of water - desert climate',
      'Sun protection essential',
      'Guided tours recommended',
      'Combine with beach visit at Huacho',
      'Long day trip from Lima (4+ hours)'
    ],
    tipsEs: [
      'Fascinante historia de "sin guerras" para niños',
      'Lleva bastante agua - clima desértico',
      'Protección solar esencial',
      'Tours guiados recomendados',
      'Combina con visita a playa en Huacho',
      'Viaje largo de día desde Lima (4+ horas)'
    ],
    nearbyAttractions: ['huacho-beach', 'supe-valley'],
    relatedSites: ['pachacamac', 'chan-chan', 'sechin'],
    gettingThere: '182km north of Lima (3-4 hours by car). Day tours available from Lima. No public transport to site.',
    gettingThereEs: '182km al norte de Lima (3-4 horas en auto). Tours de día disponibles desde Lima. Sin transporte público al sitio.',
    facilities: [
      'Visitor center',
      'Restrooms',
      'Parking',
      'Guided tours',
      'Small museum',
      'Limited shade - bring hat'
    ],
    facilitiesEs: [
      'Centro de visitantes',
      'Baños',
      'Estacionamiento',
      'Tours guiados',
      'Pequeño museo',
      'Sombra limitada - lleva sombrero'
    ]
  },
  {
    slug: 'revash',
    name: 'Revash Mausoleums',
    nameEs: 'Mausoleos de Revash',
    type: 'archaeological',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    description: 'Colorful house-shaped tombs painted red and cream, perched dramatically on cliff faces in the cloud forest. Built by the Chachapoyas culture, these 600-year-old mausoleums are among Peru\'s most photogenic archaeological sites.',
    descriptionEs: 'Tumbas coloridas en forma de casas pintadas de rojo y crema, ubicadas dramáticamente en acantilados en el bosque nublado. Construidos por la cultura Chachapoyas, estos mausoleos de 600 años son de los sitios arqueológicos más fotogénicos de Perú.',
    history: 'Built by the Chachapoyas culture (800-1475 AD), these cliff tombs housed mummified remains of important individuals. The houses represent the continuation of life after death.',
    historyEs: 'Construidos por la cultura Chachapoyas (800-1475 d.C.), estas tumbas en acantilados albergaban restos momificados de individuos importantes. Las casas representan la continuación de la vida después de la muerte.',
    highlights: [
      'Colorful cliff-side tombs',
      'Dramatic cloud forest setting',
      'House-shaped mausoleums',
      'Less visited than Kuélap',
      'Beautiful hiking approach',
      'Photography paradise'
    ],
    highlightsEs: [
      'Tumbas coloridas en acantilados',
      'Dramático entorno de bosque nublado',
      'Mausoleos en forma de casa',
      'Menos visitado que Kuélap',
      'Hermosa aproximación de caminata',
      'Paraíso de fotografía'
    ],
    familyRating: 3,
    minAge: 7,
    duration: 'Half day (3-4 hours including hike)',
    durationEs: 'Medio día (3-4 horas incluyendo caminata)',
    difficulty: 'moderate',
    altitude: 2800,
    entranceFee: '~$3',
    entranceFeeEs: '~$3',
    bestTime: 'May to October for driest conditions',
    bestTimeEs: 'Mayo a octubre para condiciones más secas',
    tips: [
      'Moderate hike required (30-45 min)',
      'Bring binoculars for best views',
      'Not accessible for young children',
      'Combine with Kuélap visit',
      'Rain jacket recommended',
      'Local guide helpful for history'
    ],
    tipsEs: [
      'Se requiere caminata moderada (30-45 min)',
      'Lleva binoculares para mejores vistas',
      'No accesible para niños pequeños',
      'Combina con visita a Kuélap',
      'Chaqueta de lluvia recomendada',
      'Guía local útil para la historia'
    ],
    nearbyAttractions: ['kuelap', 'gocta-waterfall', 'karajia'],
    relatedSites: ['karajia', 'kuelap', 'ventanillas-de-otuzco'],
    gettingThere: '60km south of Chachapoyas. Take transport to Santo Tomás village, then 30-45 min hike.',
    gettingThereEs: '60km al sur de Chachapoyas. Toma transporte al pueblo de Santo Tomás, luego caminata de 30-45 min.',
    facilities: [
      'Basic trailhead facilities',
      'Local guides in village',
      'No restrooms at site',
      'Village restaurants',
      'Bring water and snacks'
    ],
    facilitiesEs: [
      'Instalaciones básicas en inicio del sendero',
      'Guías locales en el pueblo',
      'Sin baños en el sitio',
      'Restaurantes en el pueblo',
      'Lleva agua y bocadillos'
    ]
  },
  {
    slug: 'sipan',
    name: 'Lord of Sipán Royal Tombs',
    nameEs: 'Tumbas Reales del Señor de Sipán',
    type: 'archaeological',
    city: 'chiclayo',
    region: 'Lambayeque Region',
    regionEs: 'Región Lambayeque',
    description: 'One of the most important archaeological discoveries in the Americas - the intact tomb of a Moche warrior-priest discovered in 1987. The museum displays stunning gold, silver, and copper artifacts that rival King Tut\'s treasures.',
    descriptionEs: 'Uno de los descubrimientos arqueológicos más importantes de las Américas - la tumba intacta de un sacerdote-guerrero Moche descubierta en 1987. El museo exhibe impresionantes artefactos de oro, plata y cobre que rivalizan con los tesoros del Rey Tut.',
    history: 'The Lord of Sipán ruled the Moche around 250 AD. His tomb was found undisturbed with incredible treasures, providing unprecedented insight into Moche civilization and burial practices.',
    historyEs: 'El Señor de Sipán gobernó a los Moche alrededor del 250 d.C. Su tumba fue encontrada intacta con increíbles tesoros, proporcionando una visión sin precedentes de la civilización Moche y sus prácticas funerarias.',
    highlights: [
      'Peru\'s "King Tut" discovery',
      'Stunning gold artifacts',
      'World-class museum',
      'Intact royal burial goods',
      'Moche warrior regalia',
      'Archaeological excavation site'
    ],
    highlightsEs: [
      'Descubrimiento del "Rey Tut" de Perú',
      'Impresionantes artefactos de oro',
      'Museo de clase mundial',
      'Bienes funerarios reales intactos',
      'Vestimenta de guerrero Moche',
      'Sitio de excavación arqueológica'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: '~$4 adults, ~$1 children',
    entranceFeeEs: '~$4 adultos, ~$1 niños',
    bestTime: 'Year-round. Morning for fewer crowds.',
    bestTimeEs: 'Todo el año. Mañana para menos multitudes.',
    tips: [
      'Museum is air-conditioned - great for hot days',
      'Audio guides available in English',
      'Allow 2+ hours for full experience',
      'Photography not allowed inside',
      'Combine with Túcume pyramids',
      'Kids love the treasure story'
    ],
    tipsEs: [
      'El museo tiene aire acondicionado - genial para días calurosos',
      'Audio guías disponibles en inglés',
      'Permite 2+ horas para experiencia completa',
      'Fotografía no permitida adentro',
      'Combina con las pirámides de Túcume',
      'A los niños les encanta la historia del tesoro'
    ],
    nearbyAttractions: ['tucume', 'bruning-museum', 'chiclayo-centro'],
    relatedSites: ['tucume', 'huaca-de-la-luna', 'chan-chan'],
    gettingThere: 'In Lambayeque town, 11km from Chiclayo center (20 min by taxi).',
    gettingThereEs: 'En el pueblo de Lambayeque, 11km del centro de Chiclayo (20 min en taxi).',
    facilities: [
      'Modern museum building',
      'Air conditioning',
      'Restrooms',
      'Gift shop',
      'Cafeteria',
      'Parking'
    ],
    facilitiesEs: [
      'Edificio de museo moderno',
      'Aire acondicionado',
      'Baños',
      'Tienda de recuerdos',
      'Cafetería',
      'Estacionamiento'
    ]
  },
  {
    slug: 'tucume',
    name: 'Túcume Pyramids (Valley of the Pyramids)',
    nameEs: 'Pirámides de Túcume (Valle de las Pirámides)',
    type: 'archaeological',
    city: 'chiclayo',
    region: 'Lambayeque Region',
    regionEs: 'Región Lambayeque',
    description: 'An awe-inspiring complex of 26 adobe pyramids spread across a desert valley, one of the largest such complexes in the Americas. The site spans 1,000 years of history from the Lambayeque to Chimú to Inca cultures.',
    descriptionEs: 'Un impresionante complejo de 26 pirámides de adobe dispersas en un valle desértico, uno de los complejos más grandes de su tipo en las Américas. El sitio abarca 1,000 años de historia desde las culturas Lambayeque hasta Chimú hasta Inca.',
    history: 'Founded around 1000 AD by the Lambayeque (Sicán) culture, later occupied by the Chimú and finally the Incas. Thor Heyerdahl led major excavations in the 1990s.',
    historyEs: 'Fundado alrededor del 1000 d.C. por la cultura Lambayeque (Sicán), luego ocupado por los Chimú y finalmente los Incas. Thor Heyerdahl lideró importantes excavaciones en los años 1990.',
    highlights: [
      '26 adobe pyramids',
      'Largest pyramid complex in Peru',
      'Cerro Purgatorio viewpoint',
      'Site museum',
      'Thor Heyerdahl connection',
      'Less crowded than other sites'
    ],
    highlightsEs: [
      '26 pirámides de adobe',
      'El complejo de pirámides más grande de Perú',
      'Mirador Cerro Purgatorio',
      'Museo del sitio',
      'Conexión con Thor Heyerdahl',
      'Menos lleno que otros sitios'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    entranceFee: '~$3 adults, ~$1 children',
    entranceFeeEs: '~$3 adultos, ~$1 niños',
    bestTime: 'Early morning to avoid midday heat',
    bestTimeEs: 'Temprano en la mañana para evitar el calor del mediodía',
    tips: [
      'Climb Cerro Purgatorio for panoramic views',
      'Bring sun protection - very little shade',
      'Best combined with Sipán museum',
      'Guide recommended for history context',
      'Water essential',
      'Great for counting pyramids with kids'
    ],
    tipsEs: [
      'Sube al Cerro Purgatorio para vistas panorámicas',
      'Lleva protección solar - muy poca sombra',
      'Mejor combinado con museo de Sipán',
      'Guía recomendado para contexto histórico',
      'Agua esencial',
      'Genial para contar pirámides con niños'
    ],
    nearbyAttractions: ['sipan', 'ferrenafe', 'museo-sican'],
    relatedSites: ['sipan', 'chan-chan', 'caral'],
    gettingThere: '33km from Chiclayo (45 min by taxi or tour). Limited public transport.',
    gettingThereEs: '33km de Chiclayo (45 min en taxi o tour). Transporte público limitado.',
    facilities: [
      'Site museum',
      'Restrooms',
      'Parking',
      'Local guides',
      'Small shops',
      'Viewpoint trail'
    ],
    facilitiesEs: [
      'Museo del sitio',
      'Baños',
      'Estacionamiento',
      'Guías locales',
      'Pequeñas tiendas',
      'Sendero al mirador'
    ]
  },
  {
    slug: 'laguna-69',
    name: 'Laguna 69',
    nameEs: 'Laguna 69',
    type: 'natural',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    description: 'One of Peru\'s most stunning glacier lakes, famous for its impossibly turquoise waters surrounded by snow-capped peaks. The challenging but rewarding hike in Huascarán National Park is a bucket-list experience for adventure-loving families.',
    descriptionEs: 'Uno de los lagos glaciales más impresionantes de Perú, famoso por sus aguas imposiblemente turquesas rodeadas de picos nevados. La caminata desafiante pero gratificante en el Parque Nacional Huascarán es una experiencia imperdible para familias amantes de la aventura.',
    history: 'Named simply for being the 69th lake catalogued in the Cordillera Blanca. Located within UNESCO-listed Huascarán National Park, beneath Chacraraju peak (6,112m).',
    historyEs: 'Nombrada simplemente por ser el lago número 69 catalogado en la Cordillera Blanca. Ubicada dentro del Parque Nacional Huascarán declarado Patrimonio de la Humanidad por UNESCO, bajo el pico Chacraraju (6,112m).',
    highlights: [
      'Stunning turquoise glacial lake',
      'Huascarán National Park (UNESCO)',
      'Snow-capped mountain views',
      'Rewarding high-altitude hike',
      'Pristine Andean landscape',
      'Bucket-list destination'
    ],
    highlightsEs: [
      'Impresionante lago glacial turquesa',
      'Parque Nacional Huascarán (UNESCO)',
      'Vistas de montañas nevadas',
      'Gratificante caminata de alta altitud',
      'Paisaje andino prístino',
      'Destino de lista de deseos'
    ],
    familyRating: 3,
    minAge: 10,
    duration: 'Full day (6-7 hours hiking)',
    durationEs: 'Día completo (6-7 horas caminando)',
    difficulty: 'challenging',
    altitude: 4604,
    entranceFee: 'Park entry ~$3, tours $25-40',
    entranceFeeEs: 'Entrada al parque ~$3, tours $25-40',
    bestTime: 'May to September (dry season) for clearest views',
    bestTimeEs: 'Mayo a septiembre (temporada seca) para vistas más claras',
    tips: [
      'Only for fit, altitude-acclimated families',
      'Minimum 2-3 days in Huaraz first',
      'Start very early (5-6am)',
      'Bring layers - weather changes fast',
      'Coca tea helps with altitude',
      'Bring lunch and plenty of water'
    ],
    tipsEs: [
      'Solo para familias en forma y aclimatadas a la altitud',
      'Mínimo 2-3 días en Huaraz primero',
      'Empieza muy temprano (5-6am)',
      'Lleva capas - el clima cambia rápido',
      'Té de coca ayuda con la altitud',
      'Lleva almuerzo y mucha agua'
    ],
    nearbyAttractions: ['llanganuco-lakes', 'huascaran', 'chavin-de-huantar'],
    relatedSites: ['llanganuco-lakes', 'pastoruri-glacier', 'rainbow-mountain'],
    gettingThere: '3-hour drive from Huaraz to trailhead. Day tours include transport. Then 3-hour hike up, 2 hours down.',
    gettingThereEs: '3 horas en auto de Huaraz al inicio del sendero. Tours de día incluyen transporte. Luego 3 horas de subida, 2 horas de bajada.',
    facilities: [
      'Park entrance station',
      'Basic restrooms at trailhead',
      'No facilities on trail',
      'No food/water sold on route',
      'Bring everything you need'
    ],
    facilitiesEs: [
      'Estación de entrada al parque',
      'Baños básicos en inicio del sendero',
      'Sin instalaciones en el sendero',
      'No se vende comida/agua en la ruta',
      'Lleva todo lo que necesites'
    ]
  },
  {
    slug: 'huanchaco',
    name: 'Huanchaco Beach & Caballitos de Totora',
    nameEs: 'Playa Huanchaco y Caballitos de Totora',
    type: 'cultural',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'A charming fishing village where fishermen still use traditional totora reed boats (caballitos de totora), unchanged for 3,000 years. Watch surfers and fishermen share the waves, eat fresh ceviche, and learn about this living maritime tradition.',
    descriptionEs: 'Un encantador pueblo pesquero donde los pescadores aún usan botes tradicionales de totora (caballitos de totora), sin cambios por 3,000 años. Observa surfistas y pescadores compartiendo las olas, come ceviche fresco y aprende sobre esta tradición marítima viva.',
    history: 'The caballito de totora tradition dates back over 3,000 years to the Moche and Chimú cultures. UNESCO has recognized this as an intangible cultural heritage.',
    historyEs: 'La tradición del caballito de totora data de más de 3,000 años a las culturas Moche y Chimú. UNESCO ha reconocido esto como patrimonio cultural inmaterial.',
    highlights: [
      'Ancient totora reed boats',
      'Active fishing tradition',
      'Great surfing beach',
      'Fresh seafood restaurants',
      'Sunset watching',
      'Relaxed beach town vibe'
    ],
    highlightsEs: [
      'Antiguos botes de totora',
      'Tradición pesquera activa',
      'Gran playa para surfear',
      'Restaurantes de mariscos frescos',
      'Observación del atardecer',
      'Ambiente relajado de pueblo de playa'
    ],
    familyRating: 5,
    minAge: 1,
    duration: 'Half day to full day',
    durationEs: 'Medio día a día completo',
    difficulty: 'easy',
    entranceFee: 'Free (beach access)',
    entranceFeeEs: 'Gratis (acceso a la playa)',
    bestTime: 'Year-round. Summer (Dec-Mar) for swimming. Mornings to see fishermen.',
    bestTimeEs: 'Todo el año. Verano (dic-mar) para nadar. Mañanas para ver pescadores.',
    tips: [
      'Arrive early morning to see fishermen return',
      'Try a caballito de totora ride ($5-10)',
      'Ceviche here is exceptional',
      'Great surf lessons for families',
      'Pier has best sunset views',
      'Combine with Chan Chan visit'
    ],
    tipsEs: [
      'Llega temprano en la mañana para ver pescadores regresar',
      'Prueba un paseo en caballito de totora ($5-10)',
      'El ceviche aquí es excepcional',
      'Geniales clases de surf para familias',
      'El muelle tiene las mejores vistas del atardecer',
      'Combina con visita a Chan Chan'
    ],
    nearbyAttractions: ['chan-chan', 'huaca-de-la-luna', 'trujillo-centro'],
    relatedSites: ['chan-chan', 'huaca-de-la-luna', 'mancora'],
    gettingThere: '12km from Trujillo center (20 min by taxi or frequent combis).',
    gettingThereEs: '12km del centro de Trujillo (20 min en taxi o combis frecuentes).',
    facilities: [
      'Beach with lifeguards (summer)',
      'Many restaurants',
      'Surf shops and rentals',
      'Public restrooms',
      'Parking',
      'ATMs in town'
    ],
    facilitiesEs: [
      'Playa con salvavidas (verano)',
      'Muchos restaurantes',
      'Tiendas de surf y alquileres',
      'Baños públicos',
      'Estacionamiento',
      'Cajeros en el pueblo'
    ]
  },
  {
    slug: 'ballestas-islands',
    name: 'Ballestas Islands',
    nameEs: 'Islas Ballestas',
    type: 'natural',
    city: 'paracas',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Known as the "Poor Man\'s Galápagos," these rocky islands are home to thousands of sea lions, Humboldt penguins, and seabirds. Boat tours get remarkably close to wildlife, making it one of Peru\'s best family wildlife experiences.',
    descriptionEs: 'Conocidas como las "Galápagos del Pobre," estas islas rocosas son hogar de miles de lobos marinos, pingüinos de Humboldt y aves marinas. Los tours en bote se acercan notablemente a la fauna, haciéndola una de las mejores experiencias de vida silvestre familiar de Perú.',
    history: 'The islands have been protected since 1975 as part of the Paracas National Reserve. Guano (bird droppings) was historically harvested here and remains visible covering the rocks.',
    historyEs: 'Las islas han sido protegidas desde 1975 como parte de la Reserva Nacional de Paracas. El guano (excrementos de aves) fue históricamente cosechado aquí y permanece visible cubriendo las rocas.',
    highlights: [
      'Thousands of sea lions',
      'Humboldt penguins',
      'Massive bird colonies',
      'El Candelabro geoglyph',
      'Close wildlife encounters',
      'Affordable wildlife experience'
    ],
    highlightsEs: [
      'Miles de lobos marinos',
      'Pingüinos de Humboldt',
      'Colonias masivas de aves',
      'Geoglifo El Candelabro',
      'Encuentros cercanos con fauna',
      'Experiencia de vida silvestre económica'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2 hours (boat tour)',
    durationEs: '2 horas (tour en bote)',
    difficulty: 'easy',
    entranceFee: '$15-25 per person (tour price)',
    entranceFeeEs: '$15-25 por persona (precio del tour)',
    bestTime: 'Year-round. June-September for whale sightings nearby.',
    bestTimeEs: 'Todo el año. Junio-septiembre para avistamiento de ballenas cercano.',
    tips: [
      'Book early morning tours (less wind)',
      'Bring motion sickness medicine if prone',
      'Wear layers - ocean is cold',
      'Binoculars enhance experience',
      'Watch for El Candelabro on way out',
      'Combine with Paracas Reserve visit'
    ],
    tipsEs: [
      'Reserva tours temprano en la mañana (menos viento)',
      'Lleva medicina para mareo si eres propenso',
      'Usa capas - el océano es frío',
      'Binoculares mejoran la experiencia',
      'Observa El Candelabro en el camino',
      'Combina con visita a Reserva de Paracas'
    ],
    nearbyAttractions: ['paracas-reserve', 'el-candelabro', 'lagunillas-beach'],
    relatedSites: ['paracas-reserve', 'nazca-lines', 'huacachina'],
    gettingThere: 'Boats depart from Paracas pier (El Chaco). Paracas is 3.5 hours from Lima by bus.',
    gettingThereEs: 'Los botes salen del muelle de Paracas (El Chaco). Paracas está a 3.5 horas de Lima en bus.',
    facilities: [
      'Tour boats with life jackets',
      'Restrooms at pier',
      'Restaurants in Paracas',
      'Tour agencies',
      'Parking at pier',
      'Some boats have covered areas'
    ],
    facilitiesEs: [
      'Botes de tour con chalecos salvavidas',
      'Baños en el muelle',
      'Restaurantes en Paracas',
      'Agencias de tour',
      'Estacionamiento en el muelle',
      'Algunos botes tienen áreas cubiertas'
    ]
  },
  {
    slug: 'raqchi',
    name: 'Raqchi (Temple of Wiracocha)',
    nameEs: 'Raqchi (Templo de Wiracocha)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'An impressive Inca temple complex featuring the largest known Inca roofed building - the Temple of Wiracocha with walls reaching 12 meters high. The site also includes qolqas (storehouses), fountains, and a traditional pottery-making village.',
    descriptionEs: 'Un impresionante complejo de templos Incas que presenta el edificio techado Inca conocido más grande - el Templo de Wiracocha con paredes que alcanzan 12 metros de altura. El sitio también incluye qolqas (almacenes), fuentes y un pueblo de alfarería tradicional.',
    history: 'Built during the reign of Inca Wiracocha (1400s), the temple was dedicated to the creator god Wiracocha. The site served as an important administrative and religious center on the road to Lake Titicaca.',
    historyEs: 'Construido durante el reinado del Inca Wiracocha (1400s), el templo fue dedicado al dios creador Wiracocha. El sitio sirvió como un importante centro administrativo y religioso en el camino al Lago Titicaca.',
    highlights: [
      'Massive Temple of Wiracocha',
      '12-meter high walls',
      '200+ circular qolqas (storehouses)',
      'Traditional pottery village',
      'Less crowded than main sites',
      'On route to Puno'
    ],
    highlightsEs: [
      'Masivo Templo de Wiracocha',
      'Paredes de 12 metros de altura',
      '200+ qolqas circulares (almacenes)',
      'Pueblo de alfarería tradicional',
      'Menos lleno que sitios principales',
      'En ruta a Puno'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    altitude: 3480,
    entranceFee: '~$3 or included in Boleto Turístico',
    entranceFeeEs: '~$3 o incluido en Boleto Turístico',
    bestTime: 'Year-round. Sundays for local market.',
    bestTimeEs: 'Todo el año. Domingos para mercado local.',
    tips: [
      'Visit the pottery workshops',
      'Less touristy than Sacred Valley sites',
      'Great stop between Cusco and Puno',
      'Sunday market is colorful',
      'Kids can try pottery making',
      'Lower altitude than Cusco - easier breathing'
    ],
    tipsEs: [
      'Visita los talleres de alfarería',
      'Menos turístico que sitios del Valle Sagrado',
      'Gran parada entre Cusco y Puno',
      'El mercado del domingo es colorido',
      'Los niños pueden intentar hacer cerámica',
      'Menor altitud que Cusco - respiración más fácil'
    ],
    nearbyAttractions: ['andahuaylillas', 'la-raya-pass', 'puno'],
    relatedSites: ['ollantaytambo', 'pikillacta', 'sacsayhuaman'],
    gettingThere: '110km southeast of Cusco (2 hours). On the Cusco-Puno route. Tours available or stop on bus journey.',
    gettingThereEs: '110km al sureste de Cusco (2 horas). En la ruta Cusco-Puno. Tours disponibles o parada en viaje de bus.',
    facilities: [
      'Visitor entrance',
      'Restrooms',
      'Pottery workshops',
      'Local guides',
      'Small restaurants',
      'Artisan market'
    ],
    facilitiesEs: [
      'Entrada de visitantes',
      'Baños',
      'Talleres de alfarería',
      'Guías locales',
      'Pequeños restaurantes',
      'Mercado artesanal'
    ]
  },
  {
    slug: 'pikillacta',
    name: 'Pikillacta (Wari Ruins)',
    nameEs: 'Pikillacta (Ruinas Wari)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'The largest pre-Inca city in the Cusco region, built by the Wari Empire 600 years before the Incas. This vast urban complex of over 700 buildings offers a fascinating look at the civilization that preceded and influenced the Incas.',
    descriptionEs: 'La ciudad pre-Inca más grande de la región de Cusco, construida por el Imperio Wari 600 años antes de los Incas. Este vasto complejo urbano de más de 700 edificios ofrece una fascinante mirada a la civilización que precedió e influyó a los Incas.',
    history: 'Built between 550-1100 AD by the Wari civilization, this was a major administrative center housing up to 10,000 people. The Wari Empire controlled much of Peru before the Inca.',
    historyEs: 'Construido entre 550-1100 d.C. por la civilización Wari, este fue un importante centro administrativo que albergaba hasta 10,000 personas. El Imperio Wari controló gran parte de Perú antes de los Incas.',
    highlights: [
      'Pre-Inca Wari civilization',
      '700+ ancient buildings',
      'Massive stone walls',
      'Less visited gem',
      'Combined with Andahuaylillas',
      'Different from Inca architecture'
    ],
    highlightsEs: [
      'Civilización Wari pre-Inca',
      '700+ edificios antiguos',
      'Paredes de piedra masivas',
      'Joya menos visitada',
      'Combinado con Andahuaylillas',
      'Diferente de arquitectura Inca'
    ],
    familyRating: 3,
    minAge: 6,
    duration: '1-2 hours',
    durationEs: '1-2 horas',
    difficulty: 'easy',
    altitude: 3250,
    entranceFee: 'Included in Boleto Turístico or ~$5',
    entranceFeeEs: 'Incluido en Boleto Turístico o ~$5',
    bestTime: 'Year-round. Morning for best light.',
    bestTimeEs: 'Todo el año. Mañana para mejor luz.',
    tips: [
      'Combine with Andahuaylillas (Sistine Chapel of Americas)',
      'Guide helps explain Wari history',
      'Wear sun protection - exposed site',
      'Fascinating for history-loving families',
      'Less crowded than Inca sites',
      'Good half-day trip from Cusco'
    ],
    tipsEs: [
      'Combina con Andahuaylillas (Capilla Sixtina de las Américas)',
      'El guía ayuda a explicar historia Wari',
      'Usa protección solar - sitio expuesto',
      'Fascinante para familias amantes de la historia',
      'Menos lleno que sitios Incas',
      'Buen viaje de medio día desde Cusco'
    ],
    nearbyAttractions: ['andahuaylillas', 'tipon', 'raqchi'],
    relatedSites: ['raqchi', 'tiwanaku', 'wari-ruins-ayacucho'],
    gettingThere: '30km south of Cusco (40 min). Part of South Valley tour. Combis run from Cusco.',
    gettingThereEs: '30km al sur de Cusco (40 min). Parte del tour del Valle Sur. Combis salen de Cusco.',
    facilities: [
      'Entrance station',
      'Basic restrooms',
      'Parking',
      'Local guides',
      'No food vendors',
      'Bring water and snacks'
    ],
    facilitiesEs: [
      'Estación de entrada',
      'Baños básicos',
      'Estacionamiento',
      'Guías locales',
      'Sin vendedores de comida',
      'Lleva agua y bocadillos'
    ]
  },
  {
    slug: 'nazca-lines-mirador',
    name: 'Nazca Lines Viewing Tower (Mirador)',
    nameEs: 'Torre de Observación de Líneas de Nazca (Mirador)',
    type: 'archaeological',
    city: 'nazca',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'A metal observation tower on the Pan-American Highway offering ground-level views of two Nazca geoglyphs - the Hands and the Tree. A budget-friendly alternative to scenic flights for families with young children or limited budgets.',
    descriptionEs: 'Una torre de observación de metal en la Carretera Panamericana que ofrece vistas a nivel del suelo de dos geoglifos de Nazca - las Manos y el Árbol. Una alternativa económica a los vuelos escénicos para familias con niños pequeños o presupuestos limitados.',
    history: 'The Nazca Lines were created between 500 BC and 500 AD by the Nazca culture. This tower was built to provide accessible viewing without disturbing the fragile desert surface.',
    historyEs: 'Las Líneas de Nazca fueron creadas entre 500 a.C. y 500 d.C. por la cultura Nazca. Esta torre fue construida para proporcionar observación accesible sin perturbar la frágil superficie del desierto.',
    highlights: [
      'See Nazca Lines without flying',
      'Budget-friendly option',
      'View Hands and Tree geoglyphs',
      'Good for families with young kids',
      'Quick stop on Pan-American Highway',
      'Educational introduction to lines'
    ],
    highlightsEs: [
      'Ver Líneas de Nazca sin volar',
      'Opción económica',
      'Ver geoglifos de Manos y Árbol',
      'Bueno para familias con niños pequeños',
      'Parada rápida en Carretera Panamericana',
      'Introducción educativa a las líneas'
    ],
    familyRating: 4,
    minAge: 3,
    duration: '30 minutes',
    durationEs: '30 minutos',
    difficulty: 'easy',
    entranceFee: '~$1',
    entranceFeeEs: '~$1',
    bestTime: 'Morning or late afternoon for best light and visibility',
    bestTimeEs: 'Mañana o tarde para mejor luz y visibilidad',
    tips: [
      'Only see 2 of 70+ figures here',
      'For full experience, flights are best',
      'Good alternative for motion-sick family members',
      'Very hot - bring water and sun protection',
      'Maria Reiche museum nearby',
      'Combine with Chauchilla Cemetery'
    ],
    tipsEs: [
      'Solo se ven 2 de más de 70 figuras aquí',
      'Para experiencia completa, los vuelos son mejores',
      'Buena alternativa para familiares con mareo',
      'Muy caluroso - lleva agua y protección solar',
      'Museo Maria Reiche cercano',
      'Combina con Cementerio Chauchilla'
    ],
    nearbyAttractions: ['maria-reiche-museum', 'chauchilla-cemetery', 'nazca-centro'],
    relatedSites: ['nazca-lines-flight', 'cahuachi', 'palpa-lines'],
    gettingThere: 'On Pan-American Highway, 20km north of Nazca town. Any bus can stop here.',
    gettingThereEs: 'En Carretera Panamericana, 20km al norte del pueblo de Nazca. Cualquier bus puede parar aquí.',
    facilities: [
      'Observation tower',
      'Small museum area',
      'Basic restrooms',
      'Souvenir vendors',
      'Parking',
      'No shade - bring protection'
    ],
    facilitiesEs: [
      'Torre de observación',
      'Pequeña área de museo',
      'Baños básicos',
      'Vendedores de souvenirs',
      'Estacionamiento',
      'Sin sombra - lleva protección'
    ]
  },
  {
    slug: 'kuelap',
    name: 'Kuélap Fortress',
    nameEs: 'Fortaleza de Kuélap',
    type: 'archaeological',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 3000,
    description: 'The "Machu Picchu of the North" - a massive pre-Inca fortress built by the Chachapoya cloud warriors. With walls up to 20 meters high and over 400 circular stone houses, Kuélap offers a less crowded but equally impressive archaeological experience.',
    descriptionEs: 'El "Machu Picchu del Norte" - una masiva fortaleza pre-inca construida por los guerreros de las nubes Chachapoya. Con muros de hasta 20 metros de alto y más de 400 casas circulares de piedra, Kuélap ofrece una experiencia arqueológica igualmente impresionante pero menos concurrida.',
    history: 'Built by the Chachapoya civilization between 500-1500 AD, Kuélap served as a fortified citadel high in the cloud forests. The Chachapoya, known as "Warriors of the Clouds," resisted Inca expansion until the 1470s. The site was rediscovered in 1843 and has been under excavation since.',
    historyEs: 'Construido por la civilización Chachapoya entre 500-1500 d.C., Kuélap sirvió como ciudadela fortificada en lo alto de los bosques nubosos. Los Chachapoya, conocidos como "Guerreros de las Nubes," resistieron la expansión Inca hasta la década de 1470. El sitio fue redescubierto en 1843 y ha estado bajo excavación desde entonces.',
    highlights: [
      'Massive 20-meter stone walls',
      'Over 400 circular buildings',
      'New cable car access (2017)',
      'Cloud forest setting',
      'Less crowded than Machu Picchu',
      'Mysterious Chachapoya culture'
    ],
    highlightsEs: [
      'Masivos muros de piedra de 20 metros',
      'Más de 400 edificios circulares',
      'Nuevo acceso por teleférico (2017)',
      'Entorno de bosque nuboso',
      'Menos concurrido que Machu Picchu',
      'Misteriosa cultura Chachapoya'
    ],
    familyRating: 5,
    minAge: 5,
    duration: '3-4 hours',
    durationEs: '3-4 horas',
    difficulty: 'moderate',
    entranceFee: 'S/30 (~$8) + S/20 cable car',
    entranceFeeEs: 'S/30 (~$8) + S/20 teleférico',
    bestTime: 'May-September (dry season). Morning for clearer views.',
    bestTimeEs: 'Mayo-septiembre (temporada seca). Mañana para vistas más claras.',
    tips: [
      'Take the cable car - spectacular views!',
      'Arrive early for clearer skies',
      'Bring rain gear even in dry season',
      'Kids love exploring the circular houses',
      'Less altitude than Cusco sites',
      'Allow full day from Chachapoyas'
    ],
    tipsEs: [
      '¡Toma el teleférico - vistas espectaculares!',
      'Llega temprano para cielos más claros',
      'Lleva ropa para lluvia incluso en temporada seca',
      'A los niños les encanta explorar las casas circulares',
      'Menos altitud que los sitios de Cusco',
      'Permite un día completo desde Chachapoyas'
    ],
    nearbyAttractions: ['gocta-falls', 'karajia', 'revash'],
    relatedSites: ['machu-picchu', 'gran-pajaten', 'chachapoya-museums'],
    gettingThere: 'Cable car from Nuevo Tingo (20 min ride) or 4-hour trek. Day trip from Chachapoyas.',
    gettingThereEs: 'Teleférico desde Nuevo Tingo (20 min) o caminata de 4 horas. Excursión de un día desde Chachapoyas.',
    facilities: [
      'Modern cable car system',
      'Visitor center',
      'Restrooms',
      'Small cafeteria',
      'Guides available',
      'Parking at cable car station'
    ],
    facilitiesEs: [
      'Sistema moderno de teleférico',
      'Centro de visitantes',
      'Baños',
      'Pequeña cafetería',
      'Guías disponibles',
      'Estacionamiento en estación de teleférico'
    ]
  },
  {
    slug: 'gocta-falls',
    name: 'Gocta Waterfall',
    nameEs: 'Catarata de Gocta',
    type: 'natural',
    city: 'chachapoyas',
    region: 'Amazonas Region',
    regionEs: 'Región Amazonas',
    altitude: 1771,
    description: 'One of the world\'s tallest waterfalls at 771 meters, Gocta remained unknown to the outside world until 2005. The spectacular two-tiered cascade plunges through pristine cloud forest, making for an unforgettable family hiking adventure.',
    descriptionEs: 'Una de las cataratas más altas del mundo con 771 metros, Gocta permaneció desconocida para el mundo exterior hasta 2005. La espectacular cascada de dos niveles cae a través de un bosque nuboso prístino, creando una inolvidable aventura familiar de senderismo.',
    history: 'Local people knew of the waterfall for centuries but kept it secret, believing a mermaid guarded its waters. German researcher Stefan Ziemendorff "discovered" it in 2005 and measured its height, bringing it to international attention as one of the world\'s tallest waterfalls.',
    historyEs: 'La gente local conocía la cascada durante siglos pero la mantuvo en secreto, creyendo que una sirena guardaba sus aguas. El investigador alemán Stefan Ziemendorff la "descubrió" en 2005 y midió su altura, atrayendo la atención internacional como una de las cataratas más altas del mundo.',
    highlights: [
      'One of world\'s tallest waterfalls',
      'Pristine cloud forest hike',
      'Two-tier waterfall system',
      'Rich birdlife including cock-of-the-rock',
      'Swimming pool at base',
      'Relatively undiscovered'
    ],
    highlightsEs: [
      'Una de las cataratas más altas del mundo',
      'Caminata por bosque nuboso prístino',
      'Sistema de cascada de dos niveles',
      'Rica vida de aves incluyendo gallito de las rocas',
      'Poza para nadar en la base',
      'Relativamente poco descubierta'
    ],
    familyRating: 4,
    minAge: 7,
    duration: '5-6 hours (full hike)',
    durationEs: '5-6 horas (caminata completa)',
    difficulty: 'moderate',
    entranceFee: 'S/10 (~$3)',
    entranceFeeEs: 'S/10 (~$3)',
    bestTime: 'May-September for drier trails. Early morning for bird watching.',
    bestTimeEs: 'Mayo-septiembre para senderos más secos. Temprano en la mañana para observación de aves.',
    tips: [
      'Two routes: from Cocachimba (easier) or San Pablo (harder)',
      'Bring swimsuit for pool at base',
      'Start early to avoid afternoon clouds',
      'Hiking poles very helpful',
      'Pack lunch and plenty of water',
      'Local guides enhance the experience'
    ],
    tipsEs: [
      'Dos rutas: desde Cocachimba (más fácil) o San Pablo (más difícil)',
      'Lleva traje de baño para la poza en la base',
      'Empieza temprano para evitar nubes de la tarde',
      'Bastones de senderismo muy útiles',
      'Lleva almuerzo y mucha agua',
      'Guías locales mejoran la experiencia'
    ],
    nearbyAttractions: ['kuelap', 'cocachimba-village', 'yumbilla-falls'],
    relatedSites: ['yumbilla-falls', 'chinata-falls', 'cloud-forest-trails'],
    gettingThere: 'Drive to Cocachimba village (1 hour from Chachapoyas), then 2-hour hike to base.',
    gettingThereEs: 'Conducir al pueblo de Cocachimba (1 hora desde Chachapoyas), luego caminata de 2 horas a la base.',
    facilities: [
      'Trail entrance station',
      'Basic restrooms at trailhead',
      'Local guides for hire',
      'Small shops in villages',
      'Lodges near trailhead',
      'Horse rental available'
    ],
    facilitiesEs: [
      'Estación de entrada al sendero',
      'Baños básicos en el inicio del sendero',
      'Guías locales disponibles',
      'Pequeñas tiendas en los pueblos',
      'Lodges cerca del inicio del sendero',
      'Alquiler de caballos disponible'
    ]
  },
  {
    slug: 'huacachina-oasis',
    name: 'Huacachina Oasis',
    nameEs: 'Oasis de Huacachina',
    type: 'natural',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    altitude: 406,
    description: 'A magical desert oasis surrounded by towering sand dunes, Huacachina is Peru\'s adventure playground. Families love the thrilling dune buggy rides and sandboarding, while the palm-fringed lagoon offers a surreal photo opportunity.',
    descriptionEs: 'Un mágico oasis del desierto rodeado de imponentes dunas de arena, Huacachina es el parque de aventuras de Perú. Las familias adoran los emocionantes paseos en buggy y el sandboard, mientras la laguna bordeada de palmeras ofrece una oportunidad fotográfica surrealista.',
    history: 'Legend says the lagoon formed when a princess fled from a hunter, her tears creating the lake and her green cloak becoming the surrounding palm trees. Once a retreat for Peruvian elite, Huacachina became an adventure tourism hub in the 1990s.',
    historyEs: 'La leyenda dice que la laguna se formó cuando una princesa huyó de un cazador, sus lágrimas crearon el lago y su capa verde se convirtió en las palmeras circundantes. Antes un retiro para la élite peruana, Huacachina se convirtió en un centro de turismo de aventura en los años 90.',
    highlights: [
      'Stunning desert oasis lagoon',
      'Massive sand dunes',
      'Dune buggy adventures',
      'Sandboarding for all levels',
      'Spectacular desert sunsets',
      'Unique photo opportunities'
    ],
    highlightsEs: [
      'Impresionante laguna del oasis desértico',
      'Masivas dunas de arena',
      'Aventuras en buggy de dunas',
      'Sandboard para todos los niveles',
      'Espectaculares atardeceres del desierto',
      'Oportunidades únicas para fotos'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '2-3 hours for activities, overnight recommended',
    durationEs: '2-3 horas para actividades, se recomienda pernoctar',
    difficulty: 'easy',
    entranceFee: 'Free entry. Activities ~$15-30',
    entranceFeeEs: 'Entrada gratuita. Actividades ~$15-30',
    bestTime: 'Late afternoon for sunset tours. Year-round destination.',
    bestTimeEs: 'Tarde para tours al atardecer. Destino todo el año.',
    tips: [
      'Book sunset dune buggy tour',
      'Sandboarding is beginner-friendly',
      'Protect cameras from sand',
      'Bring sunglasses and sunscreen',
      'Stay overnight for full experience',
      'Combine with Nazca Lines trip'
    ],
    tipsEs: [
      'Reserva tour en buggy al atardecer',
      'El sandboard es amigable para principiantes',
      'Protege las cámaras de la arena',
      'Lleva gafas de sol y protector solar',
      'Quédate una noche para experiencia completa',
      'Combina con viaje a Líneas de Nazca'
    ],
    nearbyAttractions: ['ica-wineries', 'nazca-lines', 'paracas'],
    relatedSites: ['ballestas-islands', 'paracas-reserve', 'nazca-lines-mirador'],
    gettingThere: '5 minutes from Ica city center. 4 hours from Lima by bus.',
    gettingThereEs: '5 minutos del centro de Ica. 4 horas desde Lima en bus.',
    facilities: [
      'Hotels and hostels around lagoon',
      'Multiple restaurants and bars',
      'Tour operators',
      'Equipment rental',
      'Souvenir shops',
      'ATMs nearby in Ica'
    ],
    facilitiesEs: [
      'Hoteles y hostales alrededor de la laguna',
      'Múltiples restaurantes y bares',
      'Operadores turísticos',
      'Alquiler de equipos',
      'Tiendas de souvenirs',
      'Cajeros automáticos cercanos en Ica'
    ]
  },
  {
    slug: 'sillustani',
    name: 'Sillustani Funerary Towers',
    nameEs: 'Torres Funerarias de Sillustani',
    type: 'archaeological',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    altitude: 3890,
    description: 'A mysterious pre-Inca burial ground featuring tall cylindrical stone towers called chullpas, set dramatically on a peninsula overlooking Lake Umayo. The engineering and setting make this one of Peru\'s most atmospheric archaeological sites.',
    descriptionEs: 'Un misterioso cementerio pre-inca con altas torres cilíndricas de piedra llamadas chullpas, ubicadas dramáticamente en una península con vista al Lago Umayo. La ingeniería y el entorno hacen de este uno de los sitios arqueológicos más atmosféricos de Perú.',
    history: 'Built by the Colla people before Inca conquest, these burial towers (chullpas) held the remains of nobility in fetal position. The Incas later expanded the site but the Colla craftsmanship is considered superior. Many towers were looted by Spanish conquistadors.',
    historyEs: 'Construidas por el pueblo Colla antes de la conquista Inca, estas torres funerarias (chullpas) contenían los restos de la nobleza en posición fetal. Los Incas expandieron el sitio más tarde pero la artesanía Colla es considerada superior. Muchas torres fueron saqueadas por los conquistadores españoles.',
    highlights: [
      'Unique chullpa burial towers',
      'Stunning Lake Umayo views',
      'Pre-Inca Colla culture',
      'Impressive stone engineering',
      'Peaceful peninsula setting',
      'Alpacas grazing nearby'
    ],
    highlightsEs: [
      'Únicas torres funerarias chullpas',
      'Impresionantes vistas del Lago Umayo',
      'Cultura Colla pre-inca',
      'Impresionante ingeniería en piedra',
      'Tranquilo entorno de península',
      'Alpacas pastando cerca'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    entranceFee: 'S/15 (~$4)',
    entranceFeeEs: 'S/15 (~$4)',
    bestTime: 'Afternoon for best light on towers. Dry season (May-Oct) preferred.',
    bestTimeEs: 'Tarde para mejor luz en las torres. Temporada seca (mayo-oct) preferida.',
    tips: [
      'Usually combined with Lake Titicaca tour',
      'Afternoon light best for photos',
      'Watch for alpacas - great photo ops',
      'Dress warmly - windy location',
      'Local guides tell fascinating stories',
      'Less crowded than Titicaca islands'
    ],
    tipsEs: [
      'Usualmente combinado con tour al Lago Titicaca',
      'Luz de la tarde mejor para fotos',
      'Busca alpacas - buenas oportunidades de fotos',
      'Vístete abrigado - ubicación ventosa',
      'Guías locales cuentan historias fascinantes',
      'Menos concurrido que las islas del Titicaca'
    ],
    nearbyAttractions: ['lake-titicaca', 'uros-islands', 'taquile-island'],
    relatedSites: ['cutimbo', 'lake-umayo', 'puno-museums'],
    gettingThere: '35km from Puno (45 min). Usually visited as half-day tour.',
    gettingThereEs: '35km desde Puno (45 min). Usualmente visitado como tour de medio día.',
    facilities: [
      'Entrance station with information',
      'Basic restrooms',
      'Small site museum',
      'Souvenir vendors',
      'Parking area',
      'Guides available'
    ],
    facilitiesEs: [
      'Estación de entrada con información',
      'Baños básicos',
      'Pequeño museo del sitio',
      'Vendedores de souvenirs',
      'Área de estacionamiento',
      'Guías disponibles'
    ]
  },
  {
    slug: 'moray-terraces',
    name: 'Moray Agricultural Terraces',
    nameEs: 'Terrazas Agrícolas de Moray',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3500,
    description: 'Mysterious circular terraces descending into natural sinkholes, Moray was an Inca agricultural laboratory. Each level creates a different microclimate, allowing the Incas to experiment with crops. The geometric perfection amazes visitors of all ages.',
    descriptionEs: 'Misteriosas terrazas circulares que descienden en depresiones naturales, Moray fue un laboratorio agrícola Inca. Cada nivel crea un microclima diferente, permitiendo a los Incas experimentar con cultivos. La perfección geométrica asombra a visitantes de todas las edades.',
    history: 'Built around 1500 AD, Moray served as an agricultural research station where Incas tested crop varieties at different altitudes and temperatures. The temperature difference between top and bottom terraces can reach 15°C, simulating various growing conditions.',
    historyEs: 'Construido alrededor de 1500 d.C., Moray sirvió como estación de investigación agrícola donde los Incas probaban variedades de cultivos a diferentes altitudes y temperaturas. La diferencia de temperatura entre las terrazas superiores e inferiores puede alcanzar 15°C, simulando varias condiciones de cultivo.',
    highlights: [
      'Stunning circular terrace design',
      'Ancient agricultural laboratory',
      'Unique microclimate system',
      'Perfect geometric construction',
      'Spectacular photo opportunities',
      'Less crowded than main sites'
    ],
    highlightsEs: [
      'Impresionante diseño de terrazas circulares',
      'Antiguo laboratorio agrícola',
      'Sistema único de microclimas',
      'Construcción geométrica perfecta',
      'Espectaculares oportunidades para fotos',
      'Menos concurrido que sitios principales'
    ],
    familyRating: 5,
    minAge: 4,
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Morning for best light. Dry season (May-Oct) preferred.',
    bestTimeEs: 'Mañana para mejor luz. Temporada seca (mayo-oct) preferida.',
    tips: [
      'Combine with Maras salt mines nearby',
      'Great for drone photography (if permitted)',
      'Kids love the UFO-landing-site appearance',
      'Walking down into terraces is easy',
      'Buy Boleto Turístico in Cusco first',
      'Best visited on Sacred Valley tour'
    ],
    tipsEs: [
      'Combina con las salineras de Maras cercanas',
      'Genial para fotografía con dron (si está permitido)',
      'A los niños les encanta la apariencia de sitio de aterrizaje OVNI',
      'Caminar hacia abajo en las terrazas es fácil',
      'Compra Boleto Turístico en Cusco primero',
      'Mejor visitado en tour del Valle Sagrado'
    ],
    nearbyAttractions: ['maras-salt-mines', 'chinchero', 'ollantaytambo'],
    relatedSites: ['pisac-ruins', 'ollantaytambo-fortress', 'tipon'],
    gettingThere: '50km from Cusco (1.5 hours). Usually combined with Maras on Sacred Valley tours.',
    gettingThereEs: '50km desde Cusco (1.5 horas). Usualmente combinado con Maras en tours del Valle Sagrado.',
    facilities: [
      'Entrance station',
      'Basic restrooms',
      'Small parking area',
      'Local vendors',
      'Guides available',
      'No restaurants on site'
    ],
    facilitiesEs: [
      'Estación de entrada',
      'Baños básicos',
      'Pequeña área de estacionamiento',
      'Vendedores locales',
      'Guías disponibles',
      'Sin restaurantes en el sitio'
    ]
  },
  {
    slug: 'chinchero',
    name: 'Chinchero Archaeological Site & Market',
    nameEs: 'Sitio Arqueológico y Mercado de Chinchero',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3762,
    description: 'A living Andean village combining Inca ruins, a colonial church built on Inca foundations, and a famous Sunday market. Families love the weaving demonstrations where women in traditional dress show ancient textile techniques.',
    descriptionEs: 'Un pueblo andino vivo que combina ruinas Incas, una iglesia colonial construida sobre cimientos Incas, y un famoso mercado dominical. Las familias adoran las demostraciones de tejido donde mujeres en traje tradicional muestran técnicas textiles antiguas.',
    history: 'Chinchero was the royal estate of Inca Tupac Yupanqui. After the Spanish conquest, a church was built atop the Inca palace foundations, creating a unique blend of cultures. The village has maintained traditional weaving practices for centuries.',
    historyEs: 'Chinchero fue la hacienda real del Inca Túpac Yupanqui. Después de la conquista española, se construyó una iglesia sobre los cimientos del palacio Inca, creando una mezcla única de culturas. El pueblo ha mantenido prácticas tradicionales de tejido durante siglos.',
    highlights: [
      'Traditional weaving demonstrations',
      'Inca ruins with colonial church',
      'Famous Sunday market',
      'Stunning mountain views',
      'Living Andean culture',
      'Natural dye workshops'
    ],
    highlightsEs: [
      'Demostraciones de tejido tradicional',
      'Ruinas Incas con iglesia colonial',
      'Famoso mercado dominical',
      'Impresionantes vistas de montañas',
      'Cultura andina viva',
      'Talleres de tintes naturales'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Sunday for famous market. Year-round destination.',
    bestTimeEs: 'Domingo para el famoso mercado. Destino todo el año.',
    tips: [
      'Visit on Sunday for the colorful market',
      'Weaving demonstrations are interactive',
      'Kids can try weaving and dyeing',
      'Buy authentic textiles direct from weavers',
      'Higher altitude - acclimatize first',
      'Combine with Moray and Maras'
    ],
    tipsEs: [
      'Visita el domingo para el colorido mercado',
      'Las demostraciones de tejido son interactivas',
      'Los niños pueden probar tejer y teñir',
      'Compra textiles auténticos directamente de tejedoras',
      'Mayor altitud - aclimátate primero',
      'Combina con Moray y Maras'
    ],
    nearbyAttractions: ['moray-terraces', 'maras-salt-mines', 'urubamba'],
    relatedSites: ['ollantaytambo-fortress', 'pisac-ruins', 'cusco-centro'],
    gettingThere: '30km from Cusco (45 min). On the road to Sacred Valley.',
    gettingThereEs: '30km desde Cusco (45 min). En el camino al Valle Sagrado.',
    facilities: [
      'Restrooms in town',
      'Multiple restaurants',
      'Market stalls',
      'Weaving cooperatives',
      'Parking area',
      'Church open for visits'
    ],
    facilitiesEs: [
      'Baños en el pueblo',
      'Múltiples restaurantes',
      'Puestos de mercado',
      'Cooperativas de tejido',
      'Área de estacionamiento',
      'Iglesia abierta para visitas'
    ]
  },
  {
    slug: 'pisac-ruins',
    name: 'Pisac Archaeological Site',
    nameEs: 'Sitio Arqueológico de Pisac',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3400,
    description: 'Spectacular Inca ruins perched high above the Sacred Valley, featuring agricultural terraces, temples, and the largest known Inca cemetery. The site offers breathtaking views and a fascinating glimpse into Inca engineering.',
    descriptionEs: 'Espectaculares ruinas Incas ubicadas en lo alto sobre el Valle Sagrado, con terrazas agrícolas, templos y el cementerio Inca más grande conocido. El sitio ofrece vistas impresionantes y una fascinante visión de la ingeniería Inca.',
    history: 'Pisac was a major Inca administrative and religious center controlling access to the Sacred Valley. The hillside contains thousands of tomb holes in the cliffs, once holding mummies of important figures until looted by Spanish conquistadors.',
    historyEs: 'Pisac fue un importante centro administrativo y religioso Inca que controlaba el acceso al Valle Sagrado. La ladera contiene miles de agujeros de tumbas en los acantilados, que una vez contenían momias de figuras importantes hasta que fueron saqueados por los conquistadores españoles.',
    highlights: [
      'Dramatic mountain-top location',
      'Massive agricultural terraces',
      'Intihuatana sun temple',
      'Largest Inca cemetery',
      'Spectacular valley views',
      'Well-preserved ruins'
    ],
    highlightsEs: [
      'Dramática ubicación en la cima de la montaña',
      'Masivas terrazas agrícolas',
      'Templo del sol Intihuatana',
      'Mayor cementerio Inca',
      'Espectaculares vistas del valle',
      'Ruinas bien conservadas'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Morning for cooler hiking. Dry season preferred.',
    bestTimeEs: 'Mañana para caminata más fresca. Temporada seca preferida.',
    tips: [
      'Drive to upper entrance for easier visit',
      'Lower sections are strenuous climbs',
      'Combine with Pisac town market',
      'Bring water and sun protection',
      'Allow time for altitude adjustment',
      'Hire guide for full history'
    ],
    tipsEs: [
      'Conduce a la entrada superior para visita más fácil',
      'Las secciones inferiores son subidas extenuantes',
      'Combina con el mercado del pueblo de Pisac',
      'Lleva agua y protección solar',
      'Permite tiempo para ajuste de altitud',
      'Contrata guía para historia completa'
    ],
    nearbyAttractions: ['pisac-market', 'urubamba-valley', 'ollantaytambo'],
    relatedSites: ['ollantaytambo-fortress', 'moray-terraces', 'sacsayhuaman'],
    gettingThere: '33km from Cusco (1 hour). Taxis or Sacred Valley tours.',
    gettingThereEs: '33km desde Cusco (1 hora). Taxis o tours del Valle Sagrado.',
    facilities: [
      'Upper and lower entrances',
      'Basic restrooms',
      'Guides at entrance',
      'Small vendors',
      'Parking areas',
      'Pisac town nearby for services'
    ],
    facilitiesEs: [
      'Entradas superior e inferior',
      'Baños básicos',
      'Guías en la entrada',
      'Pequeños vendedores',
      'Áreas de estacionamiento',
      'Pueblo de Pisac cercano para servicios'
    ]
  },
  {
    slug: 'tipon',
    name: 'Tipon Water Temple',
    nameEs: 'Templo del Agua de Tipón',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3560,
    description: 'A masterpiece of Inca hydraulic engineering, Tipon features beautifully preserved terraces with sophisticated water channels and fountains still flowing after 500 years. Less visited than other sites, it offers a peaceful experience.',
    descriptionEs: 'Una obra maestra de la ingeniería hidráulica Inca, Tipón presenta terrazas bellamente conservadas con sofisticados canales de agua y fuentes que aún fluyen después de 500 años. Menos visitado que otros sitios, ofrece una experiencia tranquila.',
    history: 'Believed to be a royal garden of Inca Wiracocha, Tipon showcases the Incas\' mastery of water management. The complex irrigation system, including underground aqueducts, demonstrates advanced engineering that still functions perfectly today.',
    historyEs: 'Se cree que fue un jardín real del Inca Wiracocha, Tipón muestra el dominio Inca del manejo del agua. El complejo sistema de irrigación, incluyendo acueductos subterráneos, demuestra ingeniería avanzada que aún funciona perfectamente hoy.',
    highlights: [
      'Working 500-year-old fountains',
      'Sophisticated water channels',
      'Beautiful terraced gardens',
      'Peaceful, uncrowded site',
      'Excellent preservation',
      'Demonstration of Inca engineering'
    ],
    highlightsEs: [
      'Fuentes de 500 años funcionando',
      'Sofisticados canales de agua',
      'Hermosos jardines en terrazas',
      'Sitio tranquilo y poco concurrido',
      'Excelente preservación',
      'Demostración de ingeniería Inca'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '1.5-2 hours',
    durationEs: '1.5-2 horas',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Any time of day. Year-round destination.',
    bestTimeEs: 'Cualquier hora del día. Destino todo el año.',
    tips: [
      'Kids love watching the water flow',
      'Much less crowded than main sites',
      'Great for teaching about engineering',
      'Combine with nearby cuy (guinea pig) restaurants',
      'Easy walking on flat terraces',
      'Peaceful alternative to busy sites'
    ],
    tipsEs: [
      'A los niños les encanta ver el flujo del agua',
      'Mucho menos concurrido que sitios principales',
      'Genial para enseñar sobre ingeniería',
      'Combina con restaurantes de cuy cercanos',
      'Caminata fácil en terrazas planas',
      'Alternativa tranquila a sitios concurridos'
    ],
    nearbyAttractions: ['pikillacta', 'andahuaylillas-church', 'cusco'],
    relatedSites: ['moray-terraces', 'ollantaytambo-fortress', 'tambomachay'],
    gettingThere: '23km from Cusco (40 min) on road to Puno. Taxi or tour.',
    gettingThereEs: '23km desde Cusco (40 min) en carretera a Puno. Taxi o tour.',
    facilities: [
      'Entrance station',
      'Basic restrooms',
      'Small parking area',
      'Guides available',
      'Cuy restaurants nearby',
      'Peaceful grounds'
    ],
    facilitiesEs: [
      'Estación de entrada',
      'Baños básicos',
      'Pequeña área de estacionamiento',
      'Guías disponibles',
      'Restaurantes de cuy cercanos',
      'Terrenos tranquilos'
    ]
  },
  {
    slug: 'maras-salt-mines',
    name: 'Maras Salt Mines (Salineras)',
    nameEs: 'Salineras de Maras',
    type: 'cultural',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3380,
    description: 'Thousands of terraced salt pools cascade down the mountainside, creating one of Peru\'s most photogenic sites. Families have harvested salt here since pre-Inca times using the same traditional methods still practiced today.',
    descriptionEs: 'Miles de pozas de sal en terrazas caen en cascada por la ladera de la montaña, creando uno de los sitios más fotogénicos de Perú. Las familias han cosechado sal aquí desde tiempos pre-Incas usando los mismos métodos tradicionales que aún se practican hoy.',
    history: 'For over 500 years, local families have owned and worked individual salt pools fed by a natural underground spring. The saline water evaporates, leaving pink-tinged salt rich in minerals. Each family passes their pools down through generations.',
    historyEs: 'Durante más de 500 años, las familias locales han sido dueñas y han trabajado pozas de sal individuales alimentadas por un manantial subterráneo natural. El agua salina se evapora, dejando sal rosada rica en minerales. Cada familia pasa sus pozas de generación en generación.',
    highlights: [
      'Over 3,000 salt pools',
      'Pre-Inca salt harvesting tradition',
      'Stunning geometric patterns',
      'Working community operation',
      'Pink mineral-rich salt',
      'Incredible photo opportunities'
    ],
    highlightsEs: [
      'Más de 3,000 pozas de sal',
      'Tradición pre-Inca de cosecha de sal',
      'Impresionantes patrones geométricos',
      'Operación comunitaria activa',
      'Sal rosa rica en minerales',
      'Increíbles oportunidades para fotos'
    ],
    familyRating: 5,
    minAge: 3,
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    difficulty: 'easy',
    entranceFee: 'S/10 (~$3)',
    entranceFeeEs: 'S/10 (~$3)',
    bestTime: 'Dry season (May-Oct) for best colors. Morning for fewer crowds.',
    bestTimeEs: 'Temporada seca (mayo-oct) para mejores colores. Mañana para menos multitudes.',
    tips: [
      'Buy local salt as souvenir - it\'s delicious!',
      'Combine with Moray terraces nearby',
      'Don\'t walk on the salt pools',
      'White clothing shows pink salt beautifully',
      'Morning light is best for photos',
      'Community-run - your fee helps locals'
    ],
    tipsEs: [
      '¡Compra sal local como souvenir - es deliciosa!',
      'Combina con las terrazas de Moray cercanas',
      'No camines sobre las pozas de sal',
      'La ropa blanca muestra la sal rosa hermosamente',
      'La luz de la mañana es mejor para fotos',
      'Administrado por la comunidad - tu tarifa ayuda a los locales'
    ],
    nearbyAttractions: ['moray-terraces', 'chinchero', 'urubamba'],
    relatedSites: ['moray-terraces', 'ollantaytambo-fortress', 'chinchero'],
    gettingThere: '40km from Cusco (1.5 hours). Usually combined with Moray on tours.',
    gettingThereEs: '40km desde Cusco (1.5 horas). Usualmente combinado con Moray en tours.',
    facilities: [
      'Entrance station',
      'Walking paths through pools',
      'Salt shop',
      'Basic restrooms',
      'Parking area',
      'Local guides available'
    ],
    facilitiesEs: [
      'Estación de entrada',
      'Caminos peatonales a través de las pozas',
      'Tienda de sal',
      'Baños básicos',
      'Área de estacionamiento',
      'Guías locales disponibles'
    ]
  },
  {
    slug: 'tambomachay',
    name: 'Tambomachay (Inca Baths)',
    nameEs: 'Tambomachay (Baños del Inca)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3765,
    description: 'An elegant Inca site dedicated to water worship, featuring aqueducts and cascading fountains that still flow perfectly after 500 years. Often called the "Bath of the Inca," it showcases remarkable hydraulic engineering.',
    descriptionEs: 'Un elegante sitio Inca dedicado al culto del agua, con acueductos y fuentes en cascada que aún fluyen perfectamente después de 500 años. A menudo llamado el "Baño del Inca," muestra una notable ingeniería hidráulica.',
    history: 'Tambomachay was a sacred site for water worship and possibly a spa for Inca royalty. The sophisticated system channels water from a natural spring through stone channels and fountains, demonstrating Inca mastery of hydraulics.',
    historyEs: 'Tambomachay fue un sitio sagrado para el culto del agua y posiblemente un spa para la realeza Inca. El sofisticado sistema canaliza agua de un manantial natural a través de canales de piedra y fuentes, demostrando el dominio Inca de la hidráulica.',
    highlights: [
      'Working ancient fountains',
      'Sacred water worship site',
      'Impressive Inca stonework',
      'Natural spring source',
      'Peaceful setting',
      'Close to Cusco'
    ],
    highlightsEs: [
      'Fuentes antiguas funcionando',
      'Sitio sagrado de culto al agua',
      'Impresionante trabajo en piedra Inca',
      'Fuente de manantial natural',
      'Entorno tranquilo',
      'Cerca de Cusco'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '30-45 minutes',
    durationEs: '30-45 minutos',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Morning or afternoon. Year-round.',
    bestTimeEs: 'Mañana o tarde. Todo el año.',
    tips: [
      'Usually combined with Puca Pucara, Qenqo, Sacsayhuaman',
      'Kids enjoy the flowing water',
      'Small site - doesn\'t take long',
      'Buy Boleto Turístico for all Cusco sites',
      'Guides explain water worship traditions',
      'Good for acclimatization - short, easy visit'
    ],
    tipsEs: [
      'Usualmente combinado con Puca Pucara, Qenqo, Sacsayhuaman',
      'A los niños les gusta el agua que fluye',
      'Sitio pequeño - no toma mucho tiempo',
      'Compra Boleto Turístico para todos los sitios de Cusco',
      'Los guías explican las tradiciones del culto al agua',
      'Bueno para aclimatación - visita corta y fácil'
    ],
    nearbyAttractions: ['puca-pucara', 'qenqo', 'sacsayhuaman'],
    relatedSites: ['tipon', 'ollantaytambo-fortress', 'sacsayhuaman'],
    gettingThere: '8km from Cusco (20 min). Taxi or city tour circuit.',
    gettingThereEs: '8km desde Cusco (20 min). Taxi o circuito de tour de la ciudad.',
    facilities: [
      'Small entrance area',
      'Basic restrooms nearby',
      'Vendors outside',
      'Limited parking',
      'Guides available',
      'Connected to nearby sites'
    ],
    facilitiesEs: [
      'Pequeña área de entrada',
      'Baños básicos cercanos',
      'Vendedores afuera',
      'Estacionamiento limitado',
      'Guías disponibles',
      'Conectado a sitios cercanos'
    ]
  },
  {
    slug: 'qenqo',
    name: 'Qenqo (Q\'enqo)',
    nameEs: 'Qenqo (Q\'enqo)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3600,
    description: 'A mysterious carved rock shrine with zigzag channels, underground chambers, and an amphitheater. Qenqo means "labyrinth" in Quechua, and this enigmatic site was likely used for Inca ceremonies and possibly mummification.',
    descriptionEs: 'Un misterioso santuario de roca tallada con canales en zigzag, cámaras subterráneas y un anfiteatro. Qenqo significa "laberinto" en quechua, y este enigmático sitio probablemente se usaba para ceremonias Incas y posiblemente momificación.',
    history: 'Qenqo was an important huaca (sacred site) where Incas performed rituals. The zigzag channels may have been used to pour chicha (corn beer) as offerings. Underground caves might have been used for mummification of nobles.',
    historyEs: 'Qenqo fue una importante huaca (sitio sagrado) donde los Incas realizaban rituales. Los canales en zigzag pueden haber sido usados para verter chicha (cerveza de maíz) como ofrendas. Las cuevas subterráneas pueden haber sido usadas para la momificación de nobles.',
    highlights: [
      'Mysterious carved rock formations',
      'Underground ceremonial chambers',
      'Zigzag ritual channels',
      'Natural amphitheater',
      'Ancient sacrificial altar',
      'Enigmatic purpose intrigues visitors'
    ],
    highlightsEs: [
      'Misteriosas formaciones de roca tallada',
      'Cámaras ceremoniales subterráneas',
      'Canales rituales en zigzag',
      'Anfiteatro natural',
      'Antiguo altar de sacrificios',
      'Propósito enigmático intriga a los visitantes'
    ],
    familyRating: 4,
    minAge: 5,
    duration: '30-45 minutes',
    durationEs: '30-45 minutos',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Any time. Usually visited on Cusco city tour.',
    bestTimeEs: 'Cualquier hora. Usualmente visitado en tour de la ciudad de Cusco.',
    tips: [
      'Kids love exploring the cave tunnels',
      'Guide essential to understand mysteries',
      'Part of Cusco city tour circuit',
      'Small site but fascinating',
      'Watch your head in low tunnels',
      'Combine with Sacsayhuaman nearby'
    ],
    tipsEs: [
      'A los niños les encanta explorar los túneles de la cueva',
      'Guía esencial para entender los misterios',
      'Parte del circuito de tour de la ciudad de Cusco',
      'Sitio pequeño pero fascinante',
      'Cuida tu cabeza en túneles bajos',
      'Combina con Sacsayhuaman cercano'
    ],
    nearbyAttractions: ['sacsayhuaman', 'puca-pucara', 'tambomachay'],
    relatedSites: ['sacsayhuaman', 'tambomachay', 'cusco-centro'],
    gettingThere: '4km from Cusco Plaza (10 min). Walking distance from Sacsayhuaman.',
    gettingThereEs: '4km desde la Plaza de Cusco (10 min). A distancia caminable de Sacsayhuaman.',
    facilities: [
      'Entrance checkpoint',
      'Open-air site',
      'Vendors nearby',
      'Limited facilities',
      'Guides available',
      'Near other sites'
    ],
    facilitiesEs: [
      'Punto de control de entrada',
      'Sitio al aire libre',
      'Vendedores cercanos',
      'Instalaciones limitadas',
      'Guías disponibles',
      'Cerca de otros sitios'
    ]
  },
  {
    slug: 'puca-pucara',
    name: 'Puca Pucara (Red Fortress)',
    nameEs: 'Puca Pucara (Fortaleza Roja)',
    type: 'archaeological',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    altitude: 3750,
    description: 'A pink-hued Inca military outpost commanding views of the surrounding valleys. Puca Pucara ("Red Fortress") served as a checkpoint, hunting lodge, and possibly a rest stop for Inca royalty traveling to Tambomachay.',
    descriptionEs: 'Un puesto militar Inca de tonos rosados que domina vistas de los valles circundantes. Puca Pucara ("Fortaleza Roja") sirvió como punto de control, pabellón de caza, y posiblemente una parada de descanso para la realeza Inca viajando a Tambomachay.',
    history: 'Built as a military garrison and tambo (rest stop), Puca Pucara protected the road to the sacred site of Tambomachay. The reddish color comes from the local limestone that turns pink in certain light.',
    historyEs: 'Construido como guarnición militar y tambo (parada de descanso), Puca Pucara protegía el camino al sitio sagrado de Tambomachay. El color rojizo proviene de la piedra caliza local que se vuelve rosa con cierta luz.',
    highlights: [
      'Panoramic valley views',
      'Pink-tinged stone walls',
      'Military architecture',
      'Strategic hilltop location',
      'Less crowded than main sites',
      'Beautiful at sunset'
    ],
    highlightsEs: [
      'Vistas panorámicas del valle',
      'Muros de piedra de tonos rosados',
      'Arquitectura militar',
      'Ubicación estratégica en la colina',
      'Menos concurrido que sitios principales',
      'Hermoso al atardecer'
    ],
    familyRating: 3,
    minAge: 5,
    duration: '20-30 minutes',
    durationEs: '20-30 minutos',
    difficulty: 'easy',
    entranceFee: 'Boleto Turístico (~$20 for 10-site pass)',
    entranceFeeEs: 'Boleto Turístico (~$20 para pase de 10 sitios)',
    bestTime: 'Late afternoon for pink glow on stones. Sunset is magical.',
    bestTimeEs: 'Tarde para el brillo rosado en las piedras. El atardecer es mágico.',
    tips: [
      'Quick stop - often combined with Tambomachay',
      'Great viewpoint for photos',
      'Smallest of the Cusco circuit sites',
      'Best light is late afternoon',
      'Good for teaching about Inca roads',
      'Can walk here from Tambomachay'
    ],
    tipsEs: [
      'Parada rápida - a menudo combinada con Tambomachay',
      'Gran mirador para fotos',
      'El más pequeño de los sitios del circuito de Cusco',
      'La mejor luz es por la tarde',
      'Bueno para enseñar sobre los caminos Incas',
      'Se puede caminar aquí desde Tambomachay'
    ],
    nearbyAttractions: ['tambomachay', 'qenqo', 'sacsayhuaman'],
    relatedSites: ['tambomachay', 'sacsayhuaman', 'qenqo'],
    gettingThere: '7km from Cusco (15 min). Adjacent to Tambomachay.',
    gettingThereEs: '7km desde Cusco (15 min). Adyacente a Tambomachay.',
    facilities: [
      'Open site',
      'No restrooms on site',
      'Vendors nearby',
      'Roadside parking',
      'Guides available',
      'Walking path to Tambomachay'
    ],
    facilitiesEs: [
      'Sitio abierto',
      'Sin baños en el sitio',
      'Vendedores cercanos',
      'Estacionamiento al lado de la carretera',
      'Guías disponibles',
      'Camino peatonal a Tambomachay'
    ]
  },
  {
    slug: 'chavin-de-huantar',
    name: 'Chavín de Huántar',
    nameEs: 'Chavín de Huántar',
    type: 'archaeological',
    city: 'huaraz',
    region: 'Ancash Region',
    regionEs: 'Región Áncash',
    altitude: 3177,
    description: 'A UNESCO World Heritage Site and one of the oldest and most important pre-Columbian sites in Peru. This ancient ceremonial center was the spiritual and political heart of the Chavín culture (1200-400 BC), featuring underground galleries, intricate stone carvings, and mysterious labyrinths.',
    descriptionEs: 'Patrimonio de la Humanidad por UNESCO y uno de los sitios precolombinos más antiguos e importantes del Perú. Este antiguo centro ceremonial fue el corazón espiritual y político de la cultura Chavín (1200-400 AC), con galerías subterráneas, intrincadas esculturas de piedra y misteriosos laberintos.',
    history: 'The Chavín culture flourished from 1200-400 BC, predating the Inca by over a millennium. The site served as an oracle and pilgrimage center, where religious leaders used elaborate underground passages and acoustic effects to create mystical experiences for visitors.',
    historyEs: 'La cultura Chavín floreció desde 1200-400 AC, precediendo a los Incas por más de un milenio. El sitio sirvió como oráculo y centro de peregrinación, donde líderes religiosos usaban elaborados pasajes subterráneos y efectos acústicos para crear experiencias místicas para los visitantes.',
    highlights: [
      'Lanzón monolith - 4.5m stone deity',
      'Underground galleries and labyrinths',
      'Cabezas clavas (tenon heads)',
      'Old and New Temple structures',
      'Tello Obelisk carvings',
      'Acoustic engineering mysteries'
    ],
    highlightsEs: [
      'Monolito Lanzón - deidad de piedra de 4.5m',
      'Galerías y laberintos subterráneos',
      'Cabezas clavas',
      'Estructuras del Templo Viejo y Nuevo',
      'Grabados del Obelisco Tello',
      'Misterios de ingeniería acústica'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '2-3 hours',
    durationEs: '2-3 horas',
    difficulty: 'moderate',
    entranceFee: 'Adults S/15, Students S/8',
    entranceFeeEs: 'Adultos S/15, Estudiantes S/8',
    bestTime: 'Dry season (May-October). Morning visits best before afternoon clouds.',
    bestTimeEs: 'Temporada seca (mayo-octubre). Visitas matutinas mejor antes de nubes de la tarde.',
    tips: [
      'Underground galleries may trigger claustrophobia',
      'Bring flashlight for tunnels',
      'Museum has key artifacts removed from site',
      'Guide essential for understanding symbolism',
      'Combine with trek in Cordillera Blanca',
      'Dress in layers - temperature varies'
    ],
    tipsEs: [
      'Galerías subterráneas pueden provocar claustrofobia',
      'Trae linterna para los túneles',
      'El museo tiene artefactos clave removidos del sitio',
      'Guía esencial para entender el simbolismo',
      'Combina con trekking en la Cordillera Blanca',
      'Vístete en capas - temperatura varía'
    ],
    nearbyAttractions: ['cordillera-blanca', 'huaraz'],
    relatedSites: ['sechin', 'caral', 'chan-chan'],
    gettingThere: '110km from Huaraz (3 hours by car). Tours available from Huaraz.',
    gettingThereEs: '110km desde Huaraz (3 horas en carro). Tours disponibles desde Huaraz.',
    facilities: [
      'Site museum',
      'Restrooms at entrance',
      'Guides available',
      'Parking area',
      'Small vendors nearby',
      'Visitor information center'
    ],
    facilitiesEs: [
      'Museo de sitio',
      'Baños en la entrada',
      'Guías disponibles',
      'Área de estacionamiento',
      'Pequeños vendedores cercanos',
      'Centro de información al visitante'
    ]
  },
  {
    slug: 'ventanillas-de-otuzco',
    name: 'Ventanillas de Otuzco',
    nameEs: 'Ventanillas de Otuzco',
    type: 'archaeological',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    altitude: 2850,
    description: 'An ancient pre-Inca necropolis featuring hundreds of rectangular funeral niches carved into volcanic rock cliffs. These "little windows" were used by the Cajamarca culture as tombs, creating a haunting honeycomb pattern across the hillside that fascinates visitors of all ages.',
    descriptionEs: 'Una antigua necrópolis pre-Inca con cientos de nichos funerarios rectangulares tallados en acantilados de roca volcánica. Estas "ventanillas" fueron usadas por la cultura Cajamarca como tumbas, creando un fascinante patrón de panal en la ladera que fascina a visitantes de todas las edades.',
    history: 'Created by the Cajamarca culture between 300-800 AD, these cliff tombs held the remains of important members of society. The niches were carved with simple tools and originally contained mummy bundles with offerings. Spanish conquistadors looted many tombs, but the site remains an impressive testament to ancient funerary practices.',
    historyEs: 'Creadas por la cultura Cajamarca entre 300-800 DC, estas tumbas en acantilados contenían los restos de miembros importantes de la sociedad. Los nichos fueron tallados con herramientas simples y originalmente contenían fardos de momias con ofrendas. Los conquistadores españoles saquearon muchas tumbas, pero el sitio sigue siendo un impresionante testimonio de las prácticas funerarias antiguas.',
    highlights: [
      'Hundreds of carved niches',
      'Unique honeycomb cliff face',
      'Valley viewpoints',
      'Peaceful rural setting',
      'Great for photography',
      'Easy to explore with kids'
    ],
    highlightsEs: [
      'Cientos de nichos tallados',
      'Cara de acantilado único tipo panal',
      'Miradores del valle',
      'Entorno rural tranquilo',
      'Excelente para fotografía',
      'Fácil de explorar con niños'
    ],
    familyRating: 4,
    minAge: 4,
    duration: '1-1.5 hours',
    durationEs: '1-1.5 horas',
    difficulty: 'easy',
    entranceFee: 'S/5',
    entranceFeeEs: 'S/5',
    bestTime: 'Morning light illuminates the niches best. Dry season (May-October) ideal.',
    bestTimeEs: 'La luz de la mañana ilumina mejor los nichos. Temporada seca (mayo-octubre) ideal.',
    tips: [
      'Combine with Cumbe Mayo day trip',
      'Great introduction to ancient Peru',
      'Easy walk from parking to site',
      'Best photos in morning light',
      'Compare with Ventanillas de Combayo',
      'Respect this sacred burial site'
    ],
    tipsEs: [
      'Combina con excursión de día a Cumbe Mayo',
      'Gran introducción al Perú antiguo',
      'Caminata fácil desde estacionamiento al sitio',
      'Mejores fotos con luz de la mañana',
      'Compara con Ventanillas de Combayo',
      'Respeta este sitio sagrado de entierro'
    ],
    nearbyAttractions: ['cumbe-mayo', 'banos-del-inca', 'cajamarca-plaza'],
    relatedSites: ['kuelap', 'chan-chan', 'sipan'],
    gettingThere: '8km from Cajamarca (20 minutes). Taxi or colectivo from city center.',
    gettingThereEs: '8km desde Cajamarca (20 minutos). Taxi o colectivo desde el centro de la ciudad.',
    facilities: [
      'Parking area',
      'Basic restrooms',
      'Local guides',
      'Walkways',
      'Information signs',
      'Artisan vendors'
    ],
    facilitiesEs: [
      'Área de estacionamiento',
      'Baños básicos',
      'Guías locales',
      'Senderos',
      'Señalización informativa',
      'Vendedores artesanos'
    ]
  },
  {
    slug: 'huayllay-stone-forest',
    name: 'Huayllay Stone Forest',
    nameEs: 'Bosque de Piedras de Huayllay',
    type: 'natural',
    city: 'cerro-de-pasco',
    region: 'Pasco Region',
    regionEs: 'Región Pasco',
    altitude: 4310,
    description: 'One of the world\'s largest and most spectacular geological gardens, featuring thousands of massive rock formations sculpted by millions of years of wind and rain. These natural stone sculptures resemble animals, faces, and fantastic creatures, sparking children\'s imaginations in this otherworldly high-altitude landscape.',
    descriptionEs: 'Uno de los jardines geológicos más grandes y espectaculares del mundo, con miles de formaciones rocosas masivas esculpidas por millones de años de viento y lluvia. Estas esculturas de piedra natural se asemejan a animales, caras y criaturas fantásticas, encendiendo la imaginación de los niños en este paisaje de gran altitud de otro mundo.',
    history: 'Formed over 60 million years ago from volcanic rock, these limestone formations were shaped by erosion into over 4,000 distinct sculptures spread across 6,815 hectares. Local peoples considered this a sacred place, and cave paintings dating back thousands of years can still be found among the rocks.',
    historyEs: 'Formadas hace más de 60 millones de años de roca volcánica, estas formaciones de piedra caliza fueron moldeadas por la erosión en más de 4,000 esculturas distintas repartidas en 6,815 hectáreas. Los pueblos locales consideraban este un lugar sagrado, y pinturas rupestres de miles de años aún pueden encontrarse entre las rocas.',
    highlights: [
      'Elephant rock formation',
      'Cobra and turtle shapes',
      'Ancient cave paintings',
      'Alpacas grazing among stones',
      'Unique high-altitude landscape',
      'Natural playground for kids'
    ],
    highlightsEs: [
      'Formación rocosa del elefante',
      'Formas de cobra y tortuga',
      'Pinturas rupestres antiguas',
      'Alpacas pastando entre las piedras',
      'Paisaje único de gran altitud',
      'Patio de juegos natural para niños'
    ],
    familyRating: 4,
    minAge: 6,
    duration: '3-5 hours',
    durationEs: '3-5 horas',
    difficulty: 'moderate',
    entranceFee: 'S/10',
    entranceFeeEs: 'S/10',
    bestTime: 'Dry season (April-November). Morning for best light and less wind.',
    bestTimeEs: 'Temporada seca (abril-noviembre). Mañana para mejor luz y menos viento.',
    tips: [
      'High altitude - acclimatize first',
      'Bring warm layers - cold even in summer',
      'Play spot-the-shapes with kids',
      'Hire local guide to find best formations',
      'Pack picnic - no food vendors',
      'Wear sturdy hiking shoes'
    ],
    tipsEs: [
      'Gran altitud - aclimatarse primero',
      'Trae capas abrigadas - frío incluso en verano',
      'Juega a encontrar formas con los niños',
      'Contrata guía local para encontrar mejores formaciones',
      'Lleva picnic - no hay vendedores de comida',
      'Usa zapatos de trekking resistentes'
    ],
    nearbyAttractions: ['cerro-de-pasco', 'junin-lake'],
    relatedSites: ['marcahuasi', 'siete-colores'],
    gettingThere: '35km from Cerro de Pasco. 4WD recommended for final stretch.',
    gettingThereEs: '35km desde Cerro de Pasco. 4x4 recomendado para el tramo final.',
    facilities: [
      'Marked trails',
      'Basic visitor center',
      'No restrooms inside park',
      'Parking area',
      'Local guides at entrance',
      'Camping permitted'
    ],
    facilitiesEs: [
      'Senderos marcados',
      'Centro de visitantes básico',
      'Sin baños dentro del parque',
      'Área de estacionamiento',
      'Guías locales en la entrada',
      'Camping permitido'
    ]
  },
  {
    slug: 'marcahuasi',
    name: 'Marcahuasi Stone Forest',
    nameEs: 'Meseta de Marcahuasi',
    type: 'natural',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    altitude: 4000,
    description: 'A mystical plateau east of Lima covered with enormous stone formations that some believe were carved by an ancient civilization. Whether natural or man-made, these mysterious rocks resembling faces, animals, and monuments create an unforgettable adventure for families willing to make the trek.',
    descriptionEs: 'Una meseta mística al este de Lima cubierta de enormes formaciones de piedra que algunos creen fueron talladas por una civilización antigua. Ya sean naturales o hechas por el hombre, estas misteriosas rocas que se asemejan a caras, animales y monumentos crean una aventura inolvidable para familias dispuestas a hacer el trekking.',
    history: 'Made famous by researcher Daniel Ruzo in the 1950s, who believed the formations were carved by an ancient Masma civilization. While geologists say they are natural granite formations shaped by erosion, the debate adds mystery. The area was sacred to pre-Inca peoples who left offerings and built structures on the plateau.',
    historyEs: 'Hecho famoso por el investigador Daniel Ruzo en los años 1950, quien creía que las formaciones fueron talladas por una antigua civilización Masma. Mientras los geólogos dicen que son formaciones naturales de granito moldeadas por erosión, el debate añade misterio. El área era sagrada para los pueblos pre-Incas que dejaron ofrendas y construyeron estructuras en la meseta.',
    highlights: [
      'Monument to Humanity rock',
      'Face profiles and animal shapes',
      'Spectacular sunrise/sunset views',
      'Camping under stars',
      'Energy vortex legends',
      'Challenging family adventure'
    ],
    highlightsEs: [
      'Roca Monumento a la Humanidad',
      'Perfiles de caras y formas de animales',
      'Espectaculares vistas del amanecer/atardecer',
      'Camping bajo las estrellas',
      'Leyendas de vórtices de energía',
      'Aventura familiar desafiante'
    ],
    familyRating: 3,
    minAge: 8,
    duration: '2 days (overnight recommended)',
    durationEs: '2 días (pernoctar recomendado)',
    difficulty: 'challenging',
    entranceFee: 'S/5',
    entranceFeeEs: 'S/5',
    bestTime: 'Dry season (May-October). Full moon visits popular for mystical experiences.',
    bestTimeEs: 'Temporada seca (mayo-octubre). Visitas de luna llena populares para experiencias místicas.',
    tips: [
      'Requires 4-hour uphill hike from San Pedro',
      'Bring camping gear - no lodging above',
      'Extreme temperature changes day/night',
      'Pack all food and water',
      'Altitude affects children differently',
      'Hire local guide for safety'
    ],
    tipsEs: [
      'Requiere caminata cuesta arriba de 4 horas desde San Pedro',
      'Trae equipo de camping - no hay alojamiento arriba',
      'Cambios extremos de temperatura día/noche',
      'Lleva toda la comida y agua',
      'La altitud afecta a los niños diferente',
      'Contrata guía local por seguridad'
    ],
    nearbyAttractions: ['san-pedro-de-casta', 'lima'],
    relatedSites: ['huayllay-stone-forest', 'pachacamac'],
    gettingThere: '80km from Lima to San Pedro de Casta village, then 4-hour hike to plateau.',
    gettingThereEs: '80km desde Lima al pueblo de San Pedro de Casta, luego caminata de 4 horas a la meseta.',
    facilities: [
      'Basic camping areas',
      'No restrooms on plateau',
      'Guides in San Pedro de Casta',
      'Horse/mule hire possible',
      'Village has basic stores',
      'No services on plateau'
    ],
    facilitiesEs: [
      'Áreas de camping básicas',
      'Sin baños en la meseta',
      'Guías en San Pedro de Casta',
      'Posible alquiler de caballos/mulas',
      'El pueblo tiene tiendas básicas',
      'Sin servicios en la meseta'
    ]
  }
];

// Helper functions
export function getSiteBySlug(slug: string): Site | undefined {
  return sites.find(site => site.slug === slug);
}

export function getAllSiteSlugs(): string[] {
  return sites.map(site => site.slug);
}

export function getSitesByCity(citySlug: string): Site[] {
  return sites.filter(site => site.city === citySlug);
}

export function getSitesByType(type: Site['type']): Site[] {
  return sites.filter(site => site.type === type);
}
