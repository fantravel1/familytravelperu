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
