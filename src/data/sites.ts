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
