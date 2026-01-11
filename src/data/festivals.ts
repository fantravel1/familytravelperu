// Peruvian festivals and celebrations data

export interface Festival {
  slug: string;
  name: string;
  nameEs: string;
  date: string;
  dateEs: string;
  month: number;
  duration: string;
  durationEs: string;
  city: string;
  region: string;
  regionEs: string;
  description: string;
  descriptionEs: string;
  history: string;
  historyEs: string;
  highlights: string[];
  highlightsEs: string[];
  activities: string[];
  activitiesEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  crowdLevel: 'low' | 'moderate' | 'high' | 'very high';
  familyTips: string[];
  familyTipsEs: string[];
  whatToWear: string;
  whatToWearEs: string;
  foodToTry: string[];
  foodToTryEs: string[];
  practicalInfo: string;
  practicalInfoEs: string;
  relatedFestivals: string[];
}

export const festivals: Festival[] = [
  {
    slug: 'inti-raymi',
    name: 'Inti Raymi - Festival of the Sun',
    nameEs: 'Inti Raymi - Festival del Sol',
    date: 'June 24',
    dateEs: '24 de junio',
    month: 6,
    duration: '1 day (celebrations throughout June)',
    durationEs: '1 día (celebraciones durante todo junio)',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'The most spectacular Inca celebration, Inti Raymi honors the sun god and marks the winter solstice. This colorful reenactment at Sacsayhuamán draws thousands with elaborate costumes, music, and ancient rituals performed in Quechua.',
    descriptionEs: 'La celebración inca más espectacular, Inti Raymi honra al dios sol y marca el solsticio de invierno. Esta colorida representación en Sacsayhuamán atrae a miles con elaborados trajes, música y rituales antiguos realizados en quechua.',
    history: 'Inti Raymi was the most important Inca festival, banned by the Spanish in 1572. It was revived in 1944 based on historical accounts by Inca Garcilaso de la Vega. Today it\'s Peru\'s second-largest festival after Carnival.',
    historyEs: 'Inti Raymi fue el festival inca más importante, prohibido por los españoles en 1572. Fue revivido en 1944 basándose en relatos históricos de Inca Garcilaso de la Vega. Hoy es el segundo festival más grande de Perú después del Carnaval.',
    highlights: [
      'Elaborate Inca costumes and regalia',
      'Dramatic ceremony at Sacsayhuamán',
      'Procession from Qorikancha to the fortress',
      'Traditional music and dance',
      'Symbolic llama sacrifice (simulated)',
      'Thousands of participants in traditional dress'
    ],
    highlightsEs: [
      'Elaborados trajes y atuendos incas',
      'Dramática ceremonia en Sacsayhuamán',
      'Procesión desde Qorikancha hasta la fortaleza',
      'Música y danza tradicional',
      'Sacrificio simbólico de llama (simulado)',
      'Miles de participantes en traje tradicional'
    ],
    activities: [
      'Watch the main ceremony at Sacsayhuamán',
      'Attend the procession through Cusco',
      'Explore the Plaza de Armas festivities',
      'Try traditional festival foods',
      'Join street celebrations',
      'Visit the pre-Inti Raymi events in June'
    ],
    activitiesEs: [
      'Ver la ceremonia principal en Sacsayhuamán',
      'Asistir a la procesión por Cusco',
      'Explorar las festividades de la Plaza de Armas',
      'Probar comidas tradicionales del festival',
      'Unirse a las celebraciones callejeras',
      'Visitar los eventos previos al Inti Raymi en junio'
    ],
    familyRating: 5,
    crowdLevel: 'very high',
    familyTips: [
      'Buy tickets months in advance for grandstand seats',
      'Arrive very early to secure a good viewing spot',
      'Bring snacks and water - it\'s a long event',
      'Explain the ceremony to kids beforehand',
      'Dress warmly - it\'s cold at 3,700m in June',
      'Free areas exist but arrive by 8am',
      'Kids love the colorful costumes and music',
      'Consider a private guide to explain the rituals'
    ],
    familyTipsEs: [
      'Compra boletos con meses de anticipación para asientos en tribuna',
      'Llega muy temprano para asegurar un buen lugar',
      'Trae snacks y agua - es un evento largo',
      'Explica la ceremonia a los niños de antemano',
      'Vístete abrigado - hace frío a 3,700m en junio',
      'Existen áreas gratuitas pero llega a las 8am',
      'A los niños les encantan los coloridos trajes y la música',
      'Considera un guía privado para explicar los rituales'
    ],
    whatToWear: 'Warm layers (it\'s winter at high altitude), comfortable shoes for walking, hat and sunglasses.',
    whatToWearEs: 'Capas abrigadas (es invierno en alta altitud), zapatos cómodos para caminar, sombrero y gafas de sol.',
    foodToTry: [
      'Chicharrón (fried pork)',
      'Choclo con queso (corn with cheese)',
      'Anticuchos (beef heart skewers)',
      'Chicha de jora (corn beer)',
      'Empanadas'
    ],
    foodToTryEs: [
      'Chicharrón (cerdo frito)',
      'Choclo con queso',
      'Anticuchos (brochetas de corazón de res)',
      'Chicha de jora (cerveza de maíz)',
      'Empanadas'
    ],
    practicalInfo: 'Main ceremony at Sacsayhuamán runs 1-4pm. Paid seats $100-250. Hotels book up months ahead. The celebration actually spans several days with events at Qorikancha, Plaza de Armas, and ending at Sacsayhuamán.',
    practicalInfoEs: 'La ceremonia principal en Sacsayhuamán es de 1-4pm. Asientos pagados $100-250. Los hoteles se llenan con meses de anticipación. La celebración abarca varios días con eventos en Qorikancha, Plaza de Armas, y terminando en Sacsayhuamán.',
    relatedFestivals: ['qoyllur-riti', 'corpus-christi']
  },
  {
    slug: 'qoyllur-riti',
    name: 'Qoyllur Rit\'i - Star Snow Festival',
    nameEs: 'Qoyllur Rit\'i - Festival de la Estrella de Nieve',
    date: 'May/June (varies with lunar calendar)',
    dateEs: 'Mayo/junio (varía con el calendario lunar)',
    month: 5,
    duration: '3-4 days',
    durationEs: '3-4 días',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'A mystical pilgrimage to the glaciers of Mount Ausangate, Qoyllur Rit\'i blends Catholic and Andean beliefs. Tens of thousands trek to 4,700m to worship an image of Christ and honor the Apus (mountain spirits).',
    descriptionEs: 'Una peregrinación mística a los glaciares del Monte Ausangate, Qoyllur Rit\'i mezcla creencias católicas y andinas. Decenas de miles caminan a 4,700m para adorar una imagen de Cristo y honrar a los Apus (espíritus de las montañas).',
    history: 'Legend says the Christ Child appeared to a shepherd boy in the 1780s. The image of Christ painted on a rock became a pilgrimage site. UNESCO recognized it as Intangible Cultural Heritage in 2011.',
    historyEs: 'La leyenda dice que el Niño Jesús se apareció a un pastorcito en los años 1780. La imagen de Cristo pintada en una roca se convirtió en lugar de peregrinación. UNESCO la reconoció como Patrimonio Cultural Inmaterial en 2011.',
    highlights: [
      'Spectacular glacier setting',
      'Traditional "Ukuku" bear dancers',
      'Procession carrying blocks of ice',
      'All-night dancing and music',
      'Syncretism of Andean and Catholic traditions',
      'One of Peru\'s most authentic festivals'
    ],
    highlightsEs: [
      'Espectacular entorno glaciar',
      'Bailarines tradicionales "Ukuku"',
      'Procesión cargando bloques de hielo',
      'Baile y música toda la noche',
      'Sincretismo de tradiciones andinas y católicas',
      'Uno de los festivales más auténticos de Perú'
    ],
    activities: [
      'Trek to the sanctuary',
      'Watch traditional dances',
      'Attend midnight mass',
      'Observe sunrise over the glacier',
      'Experience authentic Andean culture',
      'Camp among pilgrims'
    ],
    activitiesEs: [
      'Caminar al santuario',
      'Ver danzas tradicionales',
      'Asistir a misa de medianoche',
      'Observar el amanecer sobre el glaciar',
      'Experimentar cultura andina auténtica',
      'Acampar entre peregrinos'
    ],
    familyRating: 2,
    crowdLevel: 'high',
    familyTips: [
      'NOT recommended for young children due to extreme altitude and cold',
      'Only for experienced, well-acclimated families',
      'Teens may enjoy this unique experience with preparation',
      'Join an organized group for safety',
      'Sub-zero temperatures at night',
      'No facilities - must be fully self-sufficient',
      'Consider visiting just for the day processions in Cusco'
    ],
    familyTipsEs: [
      'NO recomendado para niños pequeños debido a la altitud extrema y el frío',
      'Solo para familias experimentadas y bien aclimatadas',
      'Los adolescentes pueden disfrutar esta experiencia única con preparación',
      'Únete a un grupo organizado por seguridad',
      'Temperaturas bajo cero en la noche',
      'Sin instalaciones - debes ser completamente autosuficiente',
      'Considera visitar solo las procesiones del día en Cusco'
    ],
    whatToWear: 'Extreme cold weather gear - thermal layers, down jacket, waterproof outer layer, warm hat, gloves, sturdy hiking boots.',
    whatToWearEs: 'Equipo para clima extremadamente frío - capas térmicas, chaqueta de plumas, capa exterior impermeable, gorro abrigado, guantes, botas resistentes de trekking.',
    foodToTry: [
      'Warm soups sold by vendors',
      'Hot mate (herbal tea)',
      'Bread and cheese',
      'Hot chocolate'
    ],
    foodToTryEs: [
      'Sopas calientes vendidas por vendedores',
      'Mate caliente (té de hierbas)',
      'Pan y queso',
      'Chocolate caliente'
    ],
    practicalInfo: 'Trek of 8km uphill to 4,700m. Held 58 days after Easter. Temperatures drop to -15°C at night. Basic camping only. Most tour agencies in Cusco offer organized trips.',
    practicalInfoEs: 'Caminata de 8km cuesta arriba hasta 4,700m. Se celebra 58 días después de Pascua. Las temperaturas bajan a -15°C en la noche. Solo camping básico. La mayoría de agencias de tours en Cusco ofrecen viajes organizados.',
    relatedFestivals: ['inti-raymi', 'corpus-christi']
  },
  {
    slug: 'virgen-candelaria',
    name: 'Virgen de la Candelaria',
    nameEs: 'Virgen de la Candelaria',
    date: 'February 2-11',
    dateEs: '2-11 de febrero',
    month: 2,
    duration: '10 days',
    durationEs: '10 días',
    city: 'puno',
    region: 'Puno Region',
    regionEs: 'Región Puno',
    description: 'The largest folkloric festival in South America features over 200 dance groups and 40,000 musicians and dancers. The elaborate costumes, energetic dances, and non-stop celebrations make Puno the "Folkloric Capital of Peru."',
    descriptionEs: 'El festival folclórico más grande de Sudamérica presenta más de 200 grupos de danza y 40,000 músicos y bailarines. Los elaborados trajes, las danzas energéticas y las celebraciones sin parar hacen de Puno la "Capital Folclórica de Perú."',
    history: 'The festival blends veneration of the Virgin Mary with pre-Hispanic Aymara traditions. The Virgin of Candelaria has been Puno\'s patron saint since the 17th century when she was credited with protecting the city.',
    historyEs: 'El festival mezcla la veneración de la Virgen María con tradiciones aymaras prehispánicas. La Virgen de la Candelaria ha sido la santa patrona de Puno desde el siglo XVII cuando se le acreditó proteger la ciudad.',
    highlights: [
      'Spectacular dance costumes and masks',
      'Diablada (devil dance)',
      'Morenada (slave dance)',
      'Non-stop music and parades',
      'Dance competitions',
      'Street food and festivities'
    ],
    highlightsEs: [
      'Espectaculares trajes y máscaras de danza',
      'Diablada (danza del diablo)',
      'Morenada (danza de los esclavos)',
      'Música y desfiles sin parar',
      'Competencias de danza',
      'Comida callejera y festividades'
    ],
    activities: [
      'Watch the main parade on February 2',
      'Attend dance competitions',
      'Photograph incredible costumes',
      'Join street celebrations',
      'Try festival foods',
      'Visit Lake Titicaca between events'
    ],
    activitiesEs: [
      'Ver el desfile principal el 2 de febrero',
      'Asistir a competencias de danza',
      'Fotografiar increíbles trajes',
      'Unirse a celebraciones callejeras',
      'Probar comidas del festival',
      'Visitar el Lago Titicaca entre eventos'
    ],
    familyRating: 5,
    crowdLevel: 'very high',
    familyTips: [
      'Book accommodation months in advance',
      'Kids love the colorful devil costumes',
      'Best viewing from paid grandstand seats',
      'The music and energy is electric',
      'Keep children close in crowds',
      'Bring ear protection - music is loud!',
      'February 2 main procession is the highlight',
      'Street parties continue late into night'
    ],
    familyTipsEs: [
      'Reserva alojamiento con meses de anticipación',
      'A los niños les encantan los coloridos trajes de diablos',
      'Mejor vista desde asientos pagados en tribuna',
      'La música y la energía son eléctricas',
      'Mantén a los niños cerca en las multitudes',
      '¡Trae protección para los oídos - la música es fuerte!',
      'La procesión principal del 2 de febrero es el punto culminante',
      'Las fiestas callejeras continúan hasta tarde'
    ],
    whatToWear: 'Warm layers (it\'s cold at altitude), comfortable walking shoes, hat for sun.',
    whatToWearEs: 'Capas abrigadas (hace frío en altitud), zapatos cómodos para caminar, sombrero para el sol.',
    foodToTry: [
      'Trucha frita (fried trout)',
      'Cancacho (roasted lamb)',
      'Quinoa soup',
      'Chicharrón de cerdo',
      'Api con pastel (corn drink with pastry)'
    ],
    foodToTryEs: [
      'Trucha frita',
      'Cancacho (cordero asado)',
      'Sopa de quinua',
      'Chicharrón de cerdo',
      'Api con pastel (bebida de maíz con pastelería)'
    ],
    practicalInfo: 'Main events are February 2 (Virgin\'s day), February 10-11 (dance competitions). Over 150,000 visitors come to Puno. Hotels charge premium prices. The festival is UNESCO Intangible Cultural Heritage.',
    practicalInfoEs: 'Los eventos principales son el 2 de febrero (día de la Virgen), 10-11 de febrero (competencias de danza). Más de 150,000 visitantes llegan a Puno. Los hoteles cobran precios premium. El festival es Patrimonio Cultural Inmaterial de la UNESCO.',
    relatedFestivals: ['inti-raymi', 'carnaval-cajamarca']
  },
  {
    slug: 'carnaval-cajamarca',
    name: 'Carnival of Cajamarca',
    nameEs: 'Carnaval de Cajamarca',
    date: 'February/March (before Lent)',
    dateEs: 'Febrero/marzo (antes de Cuaresma)',
    month: 2,
    duration: '5-7 days',
    durationEs: '5-7 días',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    description: 'Peru\'s most famous Carnival celebration features water fights, parades, and the coronation of the Carnival King "Ño Carnavalón." Everyone gets wet! The colorful festivities are a highlight for families who don\'t mind getting soaked.',
    descriptionEs: 'La celebración de Carnaval más famosa de Perú presenta guerras de agua, desfiles y la coronación del Rey del Carnaval "Ño Carnavalón." ¡Todos se mojan! Las coloridas festividades son un punto culminante para familias que no les importa mojarse.',
    history: 'Cajamarca\'s Carnival blends Spanish Catholic traditions with indigenous customs. The figure of Ño Carnavalón represents joy and excess before the fasting of Lent. The tradition dates back to colonial times.',
    historyEs: 'El Carnaval de Cajamarca mezcla tradiciones católicas españolas con costumbres indígenas. La figura de Ño Carnavalón representa la alegría y el exceso antes del ayuno de Cuaresma. La tradición data de tiempos coloniales.',
    highlights: [
      'Epic water fights throughout the city',
      'Coronation of Ño Carnavalón',
      'Colorful parades and floats',
      'Traditional unsha dance around painted tree',
      'Burial of Ño Carnavalón at the end',
      'Non-stop music and dancing'
    ],
    highlightsEs: [
      'Épicas guerras de agua por toda la ciudad',
      'Coronación de Ño Carnavalón',
      'Coloridos desfiles y carrozas',
      'Danza tradicional de la unsha alrededor del árbol pintado',
      'Entierro de Ño Carnavalón al final',
      'Música y baile sin parar'
    ],
    activities: [
      'Join the water fights',
      'Watch the grand parades',
      'Dance around the unsha tree',
      'Attend the Ño Carnavalón coronation',
      'Try carnival foods',
      'Participate in neighborhood contests'
    ],
    activitiesEs: [
      'Unirse a las guerras de agua',
      'Ver los grandes desfiles',
      'Bailar alrededor del árbol unsha',
      'Asistir a la coronación de Ño Carnavalón',
      'Probar comidas de carnaval',
      'Participar en concursos de barrio'
    ],
    familyRating: 5,
    crowdLevel: 'high',
    familyTips: [
      'Embrace getting wet - it\'s part of the fun!',
      'Bring water guns and balloons for kids',
      'Pack spare dry clothes',
      'Use waterproof bags for phones/cameras',
      'Kids absolutely love the water fights',
      'Avoid balconies if you don\'t want to be drenched',
      'Waterproof poncho recommended',
      'Book accommodation well in advance'
    ],
    familyTipsEs: [
      '¡Acepta mojarte - es parte de la diversión!',
      'Trae pistolas de agua y globos para los niños',
      'Empaca ropa seca de repuesto',
      'Usa bolsas impermeables para teléfonos/cámaras',
      'A los niños les encantan las guerras de agua',
      'Evita los balcones si no quieres empaparte',
      'Poncho impermeable recomendado',
      'Reserva alojamiento con mucha anticipación'
    ],
    whatToWear: 'Old clothes that can get wet, waterproof layer, sandals or water shoes, waterproof bag for valuables.',
    whatToWearEs: 'Ropa vieja que pueda mojarse, capa impermeable, sandalias o zapatos de agua, bolsa impermeable para objetos de valor.',
    foodToTry: [
      'Humitas (corn tamales)',
      'Caldo verde (green soup)',
      'Chicharrones',
      'Carnival sweets',
      'Chicha de jora'
    ],
    foodToTryEs: [
      'Humitas (tamales de maíz)',
      'Caldo verde (sopa verde)',
      'Chicharrones',
      'Dulces de carnaval',
      'Chicha de jora'
    ],
    practicalInfo: 'Held the week before Ash Wednesday. Sunday parade is the main event. The city gets very crowded. Water fights happen everywhere - be prepared to get soaked!',
    practicalInfoEs: 'Se celebra la semana antes del Miércoles de Ceniza. El desfile del domingo es el evento principal. La ciudad se llena mucho. Las guerras de agua ocurren en todas partes - ¡prepárate para empaparte!',
    relatedFestivals: ['virgen-candelaria', 'senor-cautivo']
  },
  {
    slug: 'senor-de-los-milagros',
    name: 'Lord of Miracles Procession',
    nameEs: 'Procesión del Señor de los Milagros',
    date: 'October (multiple processions)',
    dateEs: 'Octubre (múltiples procesiones)',
    month: 10,
    duration: 'Throughout October',
    durationEs: 'Durante todo octubre',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'The largest religious procession in South America honors a 17th-century painting of Christ that survived earthquakes. Millions of purple-clad devotees fill Lima\'s streets for this deeply moving celebration.',
    descriptionEs: 'La procesión religiosa más grande de Sudamérica honra una pintura del siglo XVII de Cristo que sobrevivió terremotos. Millones de devotos vestidos de púrpura llenan las calles de Lima para esta celebración profundamente conmovedora.',
    history: 'In 1655, a slave painted an image of Christ on an adobe wall. Though earthquakes destroyed surrounding buildings, the image remained intact. It has been venerated as miraculous ever since, and Lima\'s patron saint.',
    historyEs: 'En 1655, un esclavo pintó una imagen de Cristo en una pared de adobe. Aunque los terremotos destruyeron los edificios circundantes, la imagen permaneció intacta. Ha sido venerada como milagrosa desde entonces, y es el santo patrón de Lima.',
    highlights: [
      'Massive purple-clad crowds',
      'Elaborate religious floats',
      'Traditional hymns and prayers',
      'Incredibly ornate litter bearing the image',
      'Devotional atmosphere',
      'October specialty foods'
    ],
    highlightsEs: [
      'Masivas multitudes vestidas de púrpura',
      'Elaboradas carrozas religiosas',
      'Himnos y oraciones tradicionales',
      'Anda increíblemente ornamentada llevando la imagen',
      'Atmósfera devocional',
      'Comidas especiales de octubre'
    ],
    activities: [
      'Join the procession route',
      'Visit Las Nazarenas church',
      'Try turrón de Doña Pepa',
      'Watch from balconies',
      'Wear purple in solidarity',
      'Experience Lima\'s devotional culture'
    ],
    activitiesEs: [
      'Unirse a la ruta de la procesión',
      'Visitar la iglesia de Las Nazarenas',
      'Probar turrón de Doña Pepa',
      'Mirar desde los balcones',
      'Vestir púrpura en solidaridad',
      'Experimentar la cultura devocional de Lima'
    ],
    familyRating: 4,
    crowdLevel: 'very high',
    familyTips: [
      'October 18 and 28 are the main procession days',
      'Arrive early for good viewing spots',
      'Keep children close - crowds are intense',
      'Many families watch from restaurants/balconies',
      'Buy turrón de Doña Pepa for kids',
      'Wear purple to blend in',
      'The atmosphere is reverent - respect it',
      'Evening procession is particularly moving'
    ],
    familyTipsEs: [
      '18 y 28 de octubre son los días de procesión principales',
      'Llega temprano para buenos lugares de observación',
      'Mantén a los niños cerca - las multitudes son intensas',
      'Muchas familias miran desde restaurantes/balcones',
      'Compra turrón de Doña Pepa para los niños',
      'Viste púrpura para integrarte',
      'La atmósfera es reverente - respétala',
      'La procesión nocturna es particularmente conmovedora'
    ],
    whatToWear: 'Purple clothing (traditional), comfortable walking shoes.',
    whatToWearEs: 'Ropa púrpura (tradicional), zapatos cómodos para caminar.',
    foodToTry: [
      'Turrón de Doña Pepa (traditional nougat candy)',
      'Mazamorra morada (purple corn pudding)',
      'Anticuchos',
      'Picarones (sweet potato doughnuts)'
    ],
    foodToTryEs: [
      'Turrón de Doña Pepa (dulce de turrón tradicional)',
      'Mazamorra morada (pudín de maíz morado)',
      'Anticuchos',
      'Picarones (donas de camote)'
    ],
    practicalInfo: 'Main processions October 18, 19, and 28. Las Nazarenas church in central Lima is the starting point. The litter weighs 2 tons and is carried by 24 men. Millions participate throughout the month.',
    practicalInfoEs: 'Procesiones principales el 18, 19 y 28 de octubre. La iglesia de Las Nazarenas en el centro de Lima es el punto de partida. El anda pesa 2 toneladas y es cargada por 24 hombres. Millones participan durante todo el mes.',
    relatedFestivals: ['semana-santa-ayacucho', 'corpus-christi']
  },
  {
    slug: 'semana-santa-ayacucho',
    name: 'Semana Santa in Ayacucho',
    nameEs: 'Semana Santa en Ayacucho',
    date: 'Holy Week (March/April)',
    dateEs: 'Semana Santa (marzo/abril)',
    month: 3,
    duration: '10 days',
    durationEs: '10 días',
    city: 'ayacucho',
    region: 'Ayacucho Region',
    regionEs: 'Región Ayacucho',
    description: 'Peru\'s most famous Holy Week celebration combines solemn religious processions with colorful festivities. Ayacucho\'s 33 colonial churches provide a stunning backdrop for this deeply spiritual and culturally rich event.',
    descriptionEs: 'La celebración de Semana Santa más famosa de Perú combina solemnes procesiones religiosas con coloridas festividades. Las 33 iglesias coloniales de Ayacucho proporcionan un impresionante telón de fondo para este evento profundamente espiritual y culturalmente rico.',
    history: 'Ayacucho\'s Semana Santa dates to the colonial era and reflects deep Catholic traditions mixed with Andean culture. The city\'s 33 churches (one for each year of Christ\'s life) make it a center of religious architecture.',
    historyEs: 'La Semana Santa de Ayacucho data de la era colonial y refleja profundas tradiciones católicas mezcladas con cultura andina. Las 33 iglesias de la ciudad (una por cada año de la vida de Cristo) la hacen un centro de arquitectura religiosa.',
    highlights: [
      'Elaborate palm Sunday processions',
      'Flower carpets in the streets',
      'Candlelit Good Friday procession',
      'Traditional music and dance',
      'Easter Sunday celebrations',
      '33 colonial churches to visit'
    ],
    highlightsEs: [
      'Elaboradas procesiones del Domingo de Ramos',
      'Alfombras de flores en las calles',
      'Procesión a la luz de las velas el Viernes Santo',
      'Música y danza tradicional',
      'Celebraciones del Domingo de Pascua',
      '33 iglesias coloniales para visitar'
    ],
    activities: [
      'Watch the processions',
      'See the flower carpet artistry',
      'Visit the colonial churches',
      'Attend religious services',
      'Try traditional foods',
      'Experience genuine Peruvian devotion'
    ],
    activitiesEs: [
      'Ver las procesiones',
      'Ver el arte de las alfombras de flores',
      'Visitar las iglesias coloniales',
      'Asistir a servicios religiosos',
      'Probar comidas tradicionales',
      'Experimentar la devoción peruana genuina'
    ],
    familyRating: 4,
    crowdLevel: 'high',
    familyTips: [
      'Book accommodation 2-3 months ahead',
      'Good Friday candlelight procession is magical',
      'Explain the religious significance to children',
      'Easter Saturday has lively celebrations',
      'Try the local Puca Picante dish',
      'The flower carpets are incredible photo ops',
      'Respectful dress required for churches',
      'Ayacucho is off the beaten path - less touristy'
    ],
    familyTipsEs: [
      'Reserva alojamiento con 2-3 meses de anticipación',
      'La procesión del Viernes Santo a la luz de las velas es mágica',
      'Explica el significado religioso a los niños',
      'El Sábado Santo tiene celebraciones animadas',
      'Prueba el plato local Puca Picante',
      'Las alfombras de flores son increíbles oportunidades fotográficas',
      'Se requiere vestimenta respetuosa para las iglesias',
      'Ayacucho está fuera del circuito turístico - menos turístico'
    ],
    whatToWear: 'Conservative, respectful clothing for church visits. Layers as temperatures vary.',
    whatToWearEs: 'Ropa conservadora y respetuosa para visitas a iglesias. Capas ya que las temperaturas varían.',
    foodToTry: [
      'Puca Picante (red peanut stew)',
      'Mondongo ayacuchano (soup)',
      'Chapla bread',
      'Humitas',
      'Chicha de jora'
    ],
    foodToTryEs: [
      'Puca Picante (guiso rojo de maní)',
      'Mondongo ayacuchano (sopa)',
      'Pan chapla',
      'Humitas',
      'Chicha de jora'
    ],
    practicalInfo: 'Ayacucho is a 9-hour bus ride or 1-hour flight from Lima. Holy Week is the busiest time. The city is at 2,700m altitude. Local artisan crafts (retablos) make great souvenirs.',
    practicalInfoEs: 'Ayacucho está a 9 horas en bus o 1 hora de vuelo desde Lima. La Semana Santa es la época más concurrida. La ciudad está a 2,700m de altitud. Las artesanías locales (retablos) son excelentes souvenirs.',
    relatedFestivals: ['senor-de-los-milagros', 'corpus-christi']
  },
  {
    slug: 'fiesta-de-la-marinera',
    name: 'Marinera Dance Festival',
    nameEs: 'Festival de la Marinera',
    date: 'Last week of January',
    dateEs: 'Última semana de enero',
    month: 1,
    duration: '1 week',
    durationEs: '1 semana',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'The national Marinera dance championship showcases Peru\'s elegant courtship dance. Couples in elaborate costumes perform this beautiful dance involving handkerchiefs, elegant footwork, and romantic gestures.',
    descriptionEs: 'El campeonato nacional de Marinera muestra el elegante baile de cortejo de Perú. Parejas en elaborados trajes realizan este hermoso baile que involucra pañuelos, elegante trabajo de pies y gestos románticos.',
    history: 'The Marinera dance originated on Peru\'s coast, blending Spanish, African, and indigenous influences. Declared a National Cultural Heritage, it tells the story of romantic courtship through graceful movements.',
    historyEs: 'El baile de la Marinera se originó en la costa de Perú, mezclando influencias españolas, africanas e indígenas. Declarada Patrimonio Cultural Nacional, cuenta la historia de cortejo romántico a través de movimientos gráciles.',
    highlights: [
      'Elegant Marinera dance performances',
      'Beautiful traditional costumes',
      'National dance competition',
      'Paso horses and exhibitions',
      'Traditional Peruvian music',
      'Romantic, graceful atmosphere'
    ],
    highlightsEs: [
      'Elegantes presentaciones de baile de Marinera',
      'Hermosos trajes tradicionales',
      'Competencia nacional de baile',
      'Caballos de paso y exhibiciones',
      'Música tradicional peruana',
      'Atmósfera romántica y grácil'
    ],
    activities: [
      'Watch the dance competitions',
      'See the children\'s category',
      'Attend Paso horse exhibitions',
      'Try traditional foods',
      'Visit Chan Chan ruins nearby',
      'Take a Marinera dance lesson'
    ],
    activitiesEs: [
      'Ver las competencias de baile',
      'Ver la categoría infantil',
      'Asistir a exhibiciones de caballos de paso',
      'Probar comidas tradicionales',
      'Visitar las ruinas de Chan Chan cercanas',
      'Tomar una lección de baile de Marinera'
    ],
    familyRating: 5,
    crowdLevel: 'moderate',
    familyTips: [
      'The children\'s dance category is adorable',
      'Buy tickets in advance for finals',
      'Trujillo has great weather in January',
      'Combine with Chan Chan visit',
      'The costumes are stunning - great photos',
      'Dance lessons available for tourists',
      'Less crowded than major festivals',
      'Evening performances have best atmosphere'
    ],
    familyTipsEs: [
      'La categoría de baile infantil es adorable',
      'Compra boletos con anticipación para las finales',
      'Trujillo tiene gran clima en enero',
      'Combina con visita a Chan Chan',
      'Los trajes son impresionantes - geniales fotos',
      'Clases de baile disponibles para turistas',
      'Menos concurrido que los festivales grandes',
      'Las presentaciones nocturnas tienen mejor atmósfera'
    ],
    whatToWear: 'Smart casual for competition viewing, comfortable clothes for daytime activities.',
    whatToWearEs: 'Casual elegante para ver la competencia, ropa cómoda para actividades diurnas.',
    foodToTry: [
      'Ceviche Trujillano',
      'Shambar (Monday soup)',
      'Sopa teóloga',
      'King Kong (sweet)',
      'Chicha de jora'
    ],
    foodToTryEs: [
      'Ceviche Trujillano',
      'Shambar (sopa de lunes)',
      'Sopa teóloga',
      'King Kong (dulce)',
      'Chicha de jora'
    ],
    practicalInfo: 'Finals held at the Trujillo coliseum. Competition categories include children, adults, and elderly. Trujillo is known as the "City of Eternal Spring" for its pleasant climate.',
    practicalInfoEs: 'Las finales se celebran en el coliseo de Trujillo. Las categorías de competencia incluyen niños, adultos y mayores. Trujillo es conocida como la "Ciudad de la Eterna Primavera" por su agradable clima.',
    relatedFestivals: ['vendimia-ica', 'festival-negro']
  },
  {
    slug: 'vendimia-ica',
    name: 'Vendimia Wine Harvest Festival',
    nameEs: 'Festival de la Vendimia',
    date: 'Second week of March',
    dateEs: 'Segunda semana de marzo',
    month: 3,
    duration: '7-10 days',
    durationEs: '7-10 días',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Celebrate Peru\'s wine and pisco harvest with grape-stomping, parades, and tastings. The festival crowns a Harvest Queen and features the traditional "treading of the grapes" - fun for the whole family!',
    descriptionEs: 'Celebra la cosecha de vino y pisco de Perú con pisado de uvas, desfiles y degustaciones. El festival corona una Reina de la Vendimia y presenta el tradicional "pisado de las uvas" - ¡diversión para toda la familia!',
    history: 'The Vendimia Festival began in 1958 to celebrate the region\'s wine and pisco production. Ica is the heart of Peru\'s wine and pisco country, with vineyards dating back to Spanish colonial times.',
    historyEs: 'El Festival de la Vendimia comenzó en 1958 para celebrar la producción de vino y pisco de la región. Ica es el corazón del país del vino y pisco de Perú, con viñedos que datan de tiempos coloniales españoles.',
    highlights: [
      'Traditional grape stomping',
      'Wine and pisco tastings',
      'Harvest Queen coronation',
      'Colorful parades and floats',
      'Live music and dancing',
      'Vineyard tours'
    ],
    highlightsEs: [
      'Pisado tradicional de uvas',
      'Degustaciones de vino y pisco',
      'Coronación de la Reina de la Vendimia',
      'Coloridos desfiles y carrozas',
      'Música en vivo y baile',
      'Tours por viñedos'
    ],
    activities: [
      'Stomp grapes the traditional way',
      'Tour local wineries',
      'Watch the parade',
      'Taste pisco varieties',
      'Visit Huacachina oasis',
      'Attend the Queen\'s coronation'
    ],
    activitiesEs: [
      'Pisar uvas de manera tradicional',
      'Recorrer bodegas locales',
      'Ver el desfile',
      'Degustar variedades de pisco',
      'Visitar el oasis de Huacachina',
      'Asistir a la coronación de la Reina'
    ],
    familyRating: 5,
    crowdLevel: 'moderate',
    familyTips: [
      'Kids love grape stomping - bring spare clothes!',
      'Non-alcoholic grape juice available',
      'Combine with Huacachina sandboarding',
      'Many family-friendly vineyard tours',
      'The parade has great floats',
      'March is warm - bring sunscreen',
      'Try the fresh grape juice (mosto)',
      'Book vineyard tours in advance'
    ],
    familyTipsEs: [
      '¡A los niños les encanta pisar uvas - trae ropa de repuesto!',
      'Jugo de uva sin alcohol disponible',
      'Combina con sandboard en Huacachina',
      'Muchos tours familiares a viñedos',
      'El desfile tiene geniales carrozas',
      'Marzo es caluroso - trae protector solar',
      'Prueba el jugo de uva fresco (mosto)',
      'Reserva tours a viñedos con anticipación'
    ],
    whatToWear: 'Light, casual clothes. Old clothes/swimsuit for grape stomping. Sun hat and sunscreen.',
    whatToWearEs: 'Ropa ligera y casual. Ropa vieja/traje de baño para pisar uvas. Sombrero para el sol y protector solar.',
    foodToTry: [
      'Tejas (traditional candy)',
      'Pallares with seco de res',
      'Cachina (fermenting grape must)',
      'Fresh grapes',
      'Pisco sour'
    ],
    foodToTryEs: [
      'Tejas (dulce tradicional)',
      'Pallares con seco de res',
      'Cachina (mosto de uva fermentando)',
      'Uvas frescas',
      'Pisco sour'
    ],
    practicalInfo: 'Ica is 4 hours south of Lima. The festival takes place in various vineyards and the main plaza. Many wineries offer special harvest activities. Huacachina is just 5km away.',
    practicalInfoEs: 'Ica está a 4 horas al sur de Lima. El festival se lleva a cabo en varios viñedos y la plaza principal. Muchas bodegas ofrecen actividades especiales de cosecha. Huacachina está a solo 5km.',
    relatedFestivals: ['fiesta-de-la-marinera', 'carnaval-cajamarca']
  },
  {
    slug: 'san-juan',
    name: 'San Juan - Amazon Festival',
    nameEs: 'San Juan - Festival Amazónico',
    date: 'June 24',
    dateEs: '24 de junio',
    month: 6,
    duration: '3-4 days',
    durationEs: '3-4 días',
    city: 'iquitos',
    region: 'Loreto Region',
    regionEs: 'Región Loreto',
    description: 'The Amazon\'s biggest celebration honors St. John the Baptist with traditional juanes (rice tamales), river bathing rituals, music, and dancing. It coincides with Inti Raymi, making late June festival season.',
    descriptionEs: 'La celebración más grande de la Amazonía honra a San Juan Bautista con juanes tradicionales (tamales de arroz), rituales de baño en el río, música y baile. Coincide con Inti Raymi, haciendo de finales de junio temporada de festivales.',
    history: 'San Juan blends Catholic veneration of John the Baptist with indigenous Amazonian traditions. The ritual river bathing on June 24th symbolizes purification, mirroring John\'s baptism of Jesus.',
    historyEs: 'San Juan mezcla la veneración católica de Juan el Bautista con tradiciones indígenas amazónicas. El baño ritual en el río el 24 de junio simboliza la purificación, reflejando el bautismo de Jesús por Juan.',
    highlights: [
      'Traditional juanes (rice tamales)',
      'River bathing rituals',
      'Amazonian music and dance',
      'Boat parades on the river',
      'Colorful celebrations',
      'Authentic jungle culture'
    ],
    highlightsEs: [
      'Juanes tradicionales (tamales de arroz)',
      'Rituales de baño en el río',
      'Música y danza amazónica',
      'Desfiles de botes en el río',
      'Coloridas celebraciones',
      'Cultura auténtica de la selva'
    ],
    activities: [
      'Try traditional juanes',
      'Join river celebrations',
      'Watch boat parades',
      'Dance to Amazonian music',
      'Visit indigenous communities',
      'Explore jungle lodges'
    ],
    activitiesEs: [
      'Probar juanes tradicionales',
      'Unirse a celebraciones en el río',
      'Ver desfiles de botes',
      'Bailar música amazónica',
      'Visitar comunidades indígenas',
      'Explorar lodges en la selva'
    ],
    familyRating: 4,
    crowdLevel: 'moderate',
    familyTips: [
      'Try the juanes - kids usually love them!',
      'Book jungle lodge well in advance',
      'Combine with Amazon wildlife tours',
      'The music and dancing are infectious',
      'June is dry season - best for jungle visits',
      'Iquitos has no road access - fly or boat only',
      'Mosquito protection essential',
      'River activities are fun for families'
    ],
    familyTipsEs: [
      '¡Prueba los juanes - a los niños usualmente les encantan!',
      'Reserva lodge en la selva con mucha anticipación',
      'Combina con tours de vida silvestre amazónica',
      'La música y el baile son contagiosos',
      'Junio es temporada seca - mejor para visitas a la selva',
      'Iquitos no tiene acceso por carretera - solo vuelo o bote',
      'Protección contra mosquitos esencial',
      'Las actividades en el río son divertidas para familias'
    ],
    whatToWear: 'Light, breathable clothes. Long sleeves for mosquito protection. Water shoes for river activities.',
    whatToWearEs: 'Ropa ligera y transpirable. Mangas largas para protección contra mosquitos. Zapatos de agua para actividades en el río.',
    foodToTry: [
      'Juanes (rice and chicken in bijao leaves)',
      'Tacacho con cecina (plantain with dried meat)',
      'Patarashca (fish in bijao leaves)',
      'Masato (yuca drink)',
      'Jungle fruits'
    ],
    foodToTryEs: [
      'Juanes (arroz y pollo en hojas de bijao)',
      'Tacacho con cecina (plátano con carne seca)',
      'Patarashca (pescado en hojas de bijao)',
      'Masato (bebida de yuca)',
      'Frutas de la selva'
    ],
    practicalInfo: 'Iquitos is only accessible by air or river. Festival centers around Plaza 28 de Julio and the river. June is dry season with less rain and better wildlife viewing.',
    practicalInfoEs: 'Iquitos solo es accesible por aire o río. El festival se centra alrededor de la Plaza 28 de Julio y el río. Junio es temporada seca con menos lluvia y mejor avistamiento de vida silvestre.',
    relatedFestivals: ['inti-raymi', 'virgen-candelaria']
  },
  {
    slug: 'mistura',
    name: 'Mistura Food Festival',
    nameEs: 'Festival Gastronómico Mistura',
    date: 'September',
    dateEs: 'Septiembre',
    month: 9,
    duration: '10 days',
    durationEs: '10 días',
    city: 'lima',
    region: 'Lima Region',
    regionEs: 'Región Lima',
    description: 'Latin America\'s largest food festival celebrates Peru\'s world-renowned cuisine. Sample dishes from top chefs and street vendors alike, with everything from ceviche to anticuchos in one delicious celebration.',
    descriptionEs: 'El festival de comida más grande de Latinoamérica celebra la mundialmente reconocida cocina de Perú. Prueba platos de chefs top y vendedores ambulantes por igual, con todo desde ceviche hasta anticuchos en una deliciosa celebración.',
    history: 'Founded in 2008 by the Peruvian Society of Gastronomy, Mistura showcases Peru\'s culinary diversity. It brings together street vendors, regional cuisines, high-end restaurants, and traditional producers.',
    historyEs: 'Fundado en 2008 por la Sociedad Peruana de Gastronomía, Mistura muestra la diversidad culinaria de Perú. Reúne vendedores ambulantes, cocinas regionales, restaurantes de alta gama y productores tradicionales.',
    highlights: [
      'Over 50,000 dishes to try',
      'Top Peruvian chefs',
      'Regional cuisines from all Peru',
      'Street food marketplace',
      'Cooking demonstrations',
      'Pisco bar and dessert areas'
    ],
    highlightsEs: [
      'Más de 50,000 platos para probar',
      'Los mejores chefs peruanos',
      'Cocinas regionales de todo Perú',
      'Mercado de comida callejera',
      'Demostraciones de cocina',
      'Bar de pisco y áreas de postres'
    ],
    activities: [
      'Sample diverse Peruvian dishes',
      'Watch cooking demonstrations',
      'Meet famous chefs',
      'Explore regional food stands',
      'Try street food favorites',
      'Shop for Peruvian products'
    ],
    activitiesEs: [
      'Probar diversos platos peruanos',
      'Ver demostraciones de cocina',
      'Conocer chefs famosos',
      'Explorar puestos de comida regional',
      'Probar favoritos de comida callejera',
      'Comprar productos peruanos'
    ],
    familyRating: 5,
    crowdLevel: 'very high',
    familyTips: [
      'Go early to avoid longest queues',
      'Buy coupons at entrance (used for purchases)',
      'The dessert section is kid heaven!',
      'Many kid-friendly options available',
      'Bring cash - some vendors prefer it',
      'The picarones are not to be missed',
      'Weekday visits are less crowded',
      'Comfortable shoes essential'
    ],
    familyTipsEs: [
      'Ve temprano para evitar las colas más largas',
      'Compra cupones en la entrada (usados para compras)',
      '¡La sección de postres es el cielo para niños!',
      'Muchas opciones aptas para niños disponibles',
      'Trae efectivo - algunos vendedores lo prefieren',
      'Los picarones son imperdibles',
      'Las visitas entre semana son menos concurridas',
      'Zapatos cómodos esenciales'
    ],
    whatToWear: 'Comfortable casual clothes and walking shoes. Bring appetite!',
    whatToWearEs: '¡Ropa casual cómoda y zapatos para caminar. Trae apetito!',
    foodToTry: [
      'Ceviche from coastal vendors',
      'Anticuchos',
      'Picarones',
      'Regional dishes from the Amazon',
      'Alfajores and other sweets',
      'Pisco cocktails for adults'
    ],
    foodToTryEs: [
      'Ceviche de vendedores costeños',
      'Anticuchos',
      'Picarones',
      'Platos regionales de la Amazonía',
      'Alfajores y otros dulces',
      'Cócteles de pisco para adultos'
    ],
    practicalInfo: 'Held at Costa Verde in Lima (location may vary). Entrance fee required plus food coupons. Over 500,000 visitors attend. Book Lima hotels early for September.',
    practicalInfoEs: 'Se celebra en Costa Verde en Lima (la ubicación puede variar). Se requiere entrada más cupones de comida. Más de 500,000 visitantes asisten. Reserva hoteles en Lima temprano para septiembre.',
    relatedFestivals: ['fiesta-de-la-marinera', 'vendimia-ica']
  },
  {
    slug: 'fiestas-patrias',
    name: 'Fiestas Patrias - Independence Day',
    nameEs: 'Fiestas Patrias - Día de la Independencia',
    date: 'July 28-29',
    dateEs: '28-29 de julio',
    month: 7,
    duration: '2 days (celebrations extend throughout late July)',
    durationEs: '2 días (celebraciones se extienden durante finales de julio)',
    city: 'lima',
    region: 'Nationwide',
    regionEs: 'Nacional',
    description: 'Peru\'s most patriotic celebration marks independence from Spain in 1821. Parades, fireworks, and festivities fill every city and town. Families gather for traditional food, and the country erupts in red and white pride.',
    descriptionEs: 'La celebración más patriótica de Perú marca la independencia de España en 1821. Desfiles, fuegos artificiales y festividades llenan cada ciudad y pueblo. Las familias se reúnen para comida tradicional, y el país estalla en orgullo rojo y blanco.',
    history: 'José de San Martín proclaimed Peru\'s independence on July 28, 1821, in Lima\'s Plaza Mayor. The two-day celebration honors this moment and the establishment of the republic the following day. It\'s the most important civic holiday in Peru.',
    historyEs: 'José de San Martín proclamó la independencia de Perú el 28 de julio de 1821, en la Plaza Mayor de Lima. La celebración de dos días honra este momento y el establecimiento de la república al día siguiente. Es el feriado cívico más importante de Perú.',
    highlights: [
      'Military parades in Lima',
      'Presidential speech from Government Palace',
      'Fireworks nationwide',
      'Flag-raising ceremonies',
      'Traditional music and dance',
      'Every building decorated in red and white'
    ],
    highlightsEs: [
      'Desfiles militares en Lima',
      'Discurso presidencial desde Palacio de Gobierno',
      'Fuegos artificiales a nivel nacional',
      'Ceremonias de izamiento de bandera',
      'Música y baile tradicional',
      'Cada edificio decorado en rojo y blanco'
    ],
    activities: [
      'Watch the Gran Parada Militar parade',
      'Visit decorated Plaza Mayor',
      'Enjoy traditional pachamanca feast',
      'See fireworks at night',
      'Join local street celebrations',
      'Shop for patriotic souvenirs'
    ],
    activitiesEs: [
      'Ver el desfile de la Gran Parada Militar',
      'Visitar la Plaza Mayor decorada',
      'Disfrutar de la tradicional pachamanca',
      'Ver fuegos artificiales en la noche',
      'Unirse a celebraciones callejeras locales',
      'Comprar souvenirs patrióticos'
    ],
    familyRating: 5,
    crowdLevel: 'very high',
    familyTips: [
      'Book accommodations months in advance',
      'Many businesses closed - plan accordingly',
      'Transportation limited - stay central',
      'Parade viewing spots fill early',
      'Incredible national pride - very festive!',
      'Great time to try pachamanca',
      'Expect crowds everywhere',
      'Fun for kids who love parades'
    ],
    familyTipsEs: [
      'Reserva alojamiento con meses de anticipación',
      'Muchos negocios cerrados - planifica acordemente',
      'Transporte limitado - quédate en el centro',
      'Los lugares para ver el desfile se llenan temprano',
      '¡Increíble orgullo nacional - muy festivo!',
      'Gran momento para probar pachamanca',
      'Espera multitudes en todas partes',
      'Divertido para niños que aman desfiles'
    ],
    whatToWear: 'Red and white clothing is encouraged! Comfortable clothes for outdoor celebrations.',
    whatToWearEs: '¡Se anima a usar ropa roja y blanca! Ropa cómoda para celebraciones al aire libre.',
    foodToTry: [
      'Pachamanca (earth-oven feast)',
      'Anticuchos',
      'Ceviche',
      'Chicha morada',
      'Picarones',
      'Pisco sour'
    ],
    foodToTryEs: [
      'Pachamanca (festín de horno de tierra)',
      'Anticuchos',
      'Ceviche',
      'Chicha morada',
      'Picarones',
      'Pisco sour'
    ],
    practicalInfo: 'National holidays on July 28-29. Most businesses closed. Heavy traffic and crowds. Book everything far in advance. Celebrations happen nationwide but Lima parade is the main event.',
    practicalInfoEs: 'Feriados nacionales el 28-29 de julio. La mayoría de negocios cerrados. Tráfico y multitudes pesadas. Reserva todo con mucha anticipación. Las celebraciones ocurren a nivel nacional pero el desfile de Lima es el evento principal.',
    relatedFestivals: ['inti-raymi', 'senor-de-los-milagros']
  },
  {
    slug: 'corpus-christi-cusco',
    name: 'Corpus Christi Cusco',
    nameEs: 'Corpus Christi Cusco',
    date: 'Variable (May/June - 60 days after Easter)',
    dateEs: 'Variable (mayo/junio - 60 días después de Semana Santa)',
    month: 6,
    duration: '1 week of processions',
    durationEs: '1 semana de procesiones',
    city: 'cusco',
    region: 'Cusco Region',
    regionEs: 'Región Cusco',
    description: 'One of Cusco\'s most colorful religious festivals, when fifteen saints and virgins from surrounding parishes are carried to the Cathedral to "visit" the body of Christ. A fascinating blend of Catholic and Andean traditions.',
    descriptionEs: 'Uno de los festivales religiosos más coloridos de Cusco, cuando quince santos y vírgenes de parroquias circundantes son llevados a la Catedral para "visitar" el cuerpo de Cristo. Una fascinante mezcla de tradiciones católicas y andinas.',
    history: 'Introduced by Spanish colonizers in the 1570s, Corpus Christi was layered over the Inca celebration of Inti Raymi. The tradition of parading saint statues from parish churches continues today, with each saint having its own devoted following.',
    historyEs: 'Introducido por los colonizadores españoles en la década de 1570, Corpus Christi se superpuso a la celebración inca del Inti Raymi. La tradición de desfilar estatuas de santos desde las iglesias parroquiales continúa hoy, con cada santo teniendo su propio seguimiento devoto.',
    highlights: [
      '15 saints paraded to Cathedral',
      'Ornate colonial-era floats',
      'Traditional brass bands',
      'Indigenous and Catholic fusion',
      'Elaborate processions',
      'Traditional chiriuchu feast'
    ],
    highlightsEs: [
      '15 santos desfilados a la Catedral',
      'Ornados carros de la era colonial',
      'Bandas de bronce tradicionales',
      'Fusión indígena y católica',
      'Elaboradas procesiones',
      'Festín tradicional de chiriuchu'
    ],
    activities: [
      'Watch processions enter Plaza de Armas',
      'Try traditional chiriuchu dish',
      'Visit the Cathedral',
      'See the saints in their finery',
      'Enjoy street food and festivals',
      'Take photos of elaborate floats'
    ],
    activitiesEs: [
      'Ver procesiones entrar a la Plaza de Armas',
      'Probar el tradicional plato chiriuchu',
      'Visitar la Catedral',
      'Ver los santos en sus galas',
      'Disfrutar comida callejera y festivales',
      'Tomar fotos de los elaborados carros'
    ],
    familyRating: 4,
    crowdLevel: 'high',
    familyTips: [
      'Thursday is main procession day',
      'Plaza de Armas is festival center',
      'Arrive early for good viewing spots',
      'Try chiriuchu - cold platter tradition',
      'Great cultural photography opportunity',
      'Kids fascinated by saint statues',
      'Combine with Inti Raymi if dates align',
      'Book hotels early for June'
    ],
    familyTipsEs: [
      'El jueves es el día principal de la procesión',
      'La Plaza de Armas es el centro del festival',
      'Llega temprano para buenos lugares para ver',
      'Prueba chiriuchu - tradición de plato frío',
      'Gran oportunidad de fotografía cultural',
      'Los niños fascinados por las estatuas de santos',
      'Combina con Inti Raymi si las fechas coinciden',
      'Reserva hoteles temprano para junio'
    ],
    whatToWear: 'Layers for Cusco weather. Respectful attire for church visits.',
    whatToWearEs: 'Capas para el clima de Cusco. Atuendo respetuoso para visitas a la iglesia.',
    foodToTry: [
      'Chiriuchu (cold platter with guinea pig)',
      'Choclo con queso',
      'Tamales cusqueños',
      'Chicha de jora',
      'Lechón (roast pig)',
      'Festival sweets'
    ],
    foodToTryEs: [
      'Chiriuchu (plato frío con cuy)',
      'Choclo con queso',
      'Tamales cusqueños',
      'Chicha de jora',
      'Lechón',
      'Dulces del festival'
    ],
    practicalInfo: 'Date varies yearly (60 days after Easter). Processions run for a week but Thursday is the highlight. Plaza de Armas becomes very crowded. Book Cusco hotels well in advance.',
    practicalInfoEs: 'La fecha varía cada año (60 días después de Semana Santa). Las procesiones duran una semana pero el jueves es lo más destacado. La Plaza de Armas se llena mucho. Reserva hoteles en Cusco con mucha anticipación.',
    relatedFestivals: ['inti-raymi', 'semana-santa-ayacucho', 'qoyllur-riti']
  },
  {
    slug: 'navidad-peru',
    name: 'Peruvian Christmas',
    nameEs: 'Navidad Peruana',
    date: 'December 24-25',
    dateEs: '24-25 de diciembre',
    month: 12,
    duration: 'Christmas Eve through Christmas Day',
    durationEs: 'Nochebuena hasta Navidad',
    city: 'lima',
    region: 'Nationwide',
    regionEs: 'Nacional',
    description: 'Christmas in Peru blends Catholic traditions with unique Peruvian customs. From elaborate nativity scenes to the midnight Mass and traditional feast of turkey or lechón, families celebrate with warmth despite the summer heat.',
    descriptionEs: 'La Navidad en Perú mezcla tradiciones católicas con costumbres peruanas únicas. Desde elaborados nacimientos hasta la Misa de Gallo y el festín tradicional de pavo o lechón, las familias celebran con calidez a pesar del calor del verano.',
    history: 'Christmas traditions came with Spanish colonization but developed unique Peruvian character. The Santurantikuy market in Cusco (December 24) has sold nativity figurines for centuries. Celebrations center on Christmas Eve (Nochebuena), with gifts opened at midnight.',
    historyEs: 'Las tradiciones navideñas llegaron con la colonización española pero desarrollaron un carácter peruano único. El mercado Santurantikuy en Cusco (24 de diciembre) ha vendido figurines de nacimiento por siglos. Las celebraciones se centran en Nochebuena, con regalos abiertos a medianoche.',
    highlights: [
      'Santurantikuy market (Cusco)',
      'Elaborate nativity scenes (nacimientos)',
      'Misa de Gallo (Midnight Mass)',
      'Hot chocolate and panetón',
      'Fireworks at midnight',
      'Summer Christmas celebration!'
    ],
    highlightsEs: [
      'Mercado Santurantikuy (Cusco)',
      'Elaborados nacimientos',
      'Misa de Gallo',
      'Chocolate caliente y panetón',
      'Fuegos artificiales a medianoche',
      '¡Celebración navideña de verano!'
    ],
    activities: [
      'Visit Santurantikuy market in Cusco',
      'See decorated Plaza de Armas',
      'Attend Midnight Mass',
      'Enjoy traditional Christmas dinner',
      'Watch midnight fireworks',
      'Exchange gifts at midnight'
    ],
    activitiesEs: [
      'Visitar mercado Santurantikuy en Cusco',
      'Ver la Plaza de Armas decorada',
      'Asistir a la Misa de Gallo',
      'Disfrutar de la cena tradicional de Navidad',
      'Ver fuegos artificiales a medianoche',
      'Intercambiar regalos a medianoche'
    ],
    familyRating: 5,
    crowdLevel: 'moderate',
    familyTips: [
      'It\'s summer in Peru - pack accordingly!',
      'Santurantikuy market is magical for kids',
      'Midnight celebrations mean late night',
      'Hot chocolate is traditional despite heat',
      'Great time to see decorated cities',
      'Family-friendly atmosphere everywhere',
      'Many restaurants closed - book dinner',
      'Panetón (Italian panettone) is everywhere'
    ],
    familyTipsEs: [
      '¡Es verano en Perú - empaca acordemente!',
      'El mercado Santurantikuy es mágico para niños',
      'Las celebraciones a medianoche significan noche tarde',
      'El chocolate caliente es tradicional a pesar del calor',
      'Gran momento para ver ciudades decoradas',
      'Ambiente familiar en todas partes',
      'Muchos restaurantes cerrados - reserva cena',
      'El panetón (panettone italiano) está en todas partes'
    ],
    whatToWear: 'Summer clothes for coastal Peru. Layers for highlands. Dressy casual for Midnight Mass.',
    whatToWearEs: 'Ropa de verano para la costa de Perú. Capas para las tierras altas. Casual elegante para la Misa de Gallo.',
    foodToTry: [
      'Panetón with hot chocolate',
      'Pavo relleno (stuffed turkey)',
      'Lechón (roast pork)',
      'Tamales',
      'Chocolate caliente',
      'Turrón and other sweets'
    ],
    foodToTryEs: [
      'Panetón con chocolate caliente',
      'Pavo relleno',
      'Lechón',
      'Tamales',
      'Chocolate caliente',
      'Turrón y otros dulces'
    ],
    practicalInfo: 'December 25 is a national holiday. Many businesses closed December 24-25. Summer weather on coast (hot), pleasant in highlands. Santurantikuy market on December 24 in Cusco is unmissable.',
    practicalInfoEs: 'El 25 de diciembre es feriado nacional. Muchos negocios cerrados 24-25 de diciembre. Clima de verano en la costa (caliente), agradable en las tierras altas. El mercado Santurantikuy el 24 de diciembre en Cusco es imperdible.',
    relatedFestivals: ['fiestas-patrias', 'ano-nuevo']
  },
  {
    slug: 'dia-de-los-muertos',
    name: 'Día de los Muertos (All Saints)',
    nameEs: 'Día de los Muertos (Todos los Santos)',
    date: 'November 1-2',
    dateEs: '1-2 de noviembre',
    month: 11,
    duration: '2 days',
    durationEs: '2 días',
    city: 'cusco',
    region: 'Nationwide (especially Andean regions)',
    regionEs: 'Nacional (especialmente regiones andinas)',
    description: 'Peruvians honor deceased loved ones with cemetery visits, special foods, and family gatherings. A blend of Catholic All Saints Day and ancient Andean ancestor worship, it\'s a time of remembrance and celebration of life.',
    descriptionEs: 'Los peruanos honran a seres queridos fallecidos con visitas al cementerio, comidas especiales y reuniones familiares. Una mezcla del Día de Todos los Santos católico y el antiguo culto a los ancestros andino, es un momento de recuerdo y celebración de la vida.',
    history: 'Pre-Columbian Peruvians practiced elaborate ancestor veneration, mummifying the dead and including them in festivals. Spanish Catholic traditions merged with these customs, creating a unique blend of remembrance that continues today.',
    historyEs: 'Los peruanos precolombinos practicaban elaborada veneración de ancestros, momificando a los muertos e incluyéndolos en festivales. Las tradiciones católicas españolas se mezclaron con estas costumbres, creando una mezcla única de recuerdo que continúa hoy.',
    highlights: [
      'Cemetery visits with flowers',
      'Special bread (tanta wawa)',
      'Traditional purple drink (colada morada)',
      'Family picnics at gravesites',
      'Music and celebration',
      'Andean ritual offerings'
    ],
    highlightsEs: [
      'Visitas al cementerio con flores',
      'Pan especial (tanta wawa)',
      'Bebida morada tradicional (colada morada)',
      'Picnics familiares en las tumbas',
      'Música y celebración',
      'Ofrendas rituales andinas'
    ],
    activities: [
      'Visit decorated cemeteries',
      'Try tanta wawa bread',
      'Join cemetery festivities',
      'Learn about Andean traditions',
      'Participate in family gatherings',
      'See altar displays'
    ],
    activitiesEs: [
      'Visitar cementerios decorados',
      'Probar pan tanta wawa',
      'Unirse a festividades del cementerio',
      'Aprender sobre tradiciones andinas',
      'Participar en reuniones familiares',
      'Ver exhibiciones de altares'
    ],
    familyRating: 4,
    crowdLevel: 'moderate',
    familyTips: [
      'A respectful cultural experience',
      'Cemeteries are festive, not somber',
      'Try tanta wawa bread shaped like babies',
      'Great for teaching about different traditions',
      'Photography usually welcome respectfully',
      'Most impactful in Andean regions',
      'Combine with regular Peru trip',
      'Not spooky - a celebration of life'
    ],
    familyTipsEs: [
      'Una experiencia cultural respetuosa',
      'Los cementerios son festivos, no sombríos',
      'Prueba el pan tanta wawa en forma de bebés',
      'Genial para enseñar sobre diferentes tradiciones',
      'Fotografía usualmente bienvenida respetuosamente',
      'Más impactante en regiones andinas',
      'Combina con viaje regular a Perú',
      'No es tenebroso - es una celebración de la vida'
    ],
    whatToWear: 'Respectful casual clothes. Layers in the highlands.',
    whatToWearEs: 'Ropa casual respetuosa. Capas en las tierras altas.',
    foodToTry: [
      'Tanta wawa (baby-shaped bread)',
      'Colada morada (purple corn drink)',
      'Lechón',
      'Tamales',
      'Traditional sweets',
      'Chicha morada'
    ],
    foodToTryEs: [
      'Tanta wawa (pan en forma de bebé)',
      'Colada morada (bebida de maíz morado)',
      'Lechón',
      'Tamales',
      'Dulces tradicionales',
      'Chicha morada'
    ],
    practicalInfo: 'November 1 is a national holiday. Cemeteries very active on November 1-2. More prominent in highland areas. A respectful, family-oriented celebration.',
    practicalInfoEs: 'El 1 de noviembre es feriado nacional. Los cementerios muy activos el 1-2 de noviembre. Más prominente en áreas de las tierras altas. Una celebración respetuosa y familiar.',
    relatedFestivals: ['semana-santa-ayacucho', 'navidad-peru']
  },
  {
    slug: 'santa-rosa-de-lima',
    name: 'Santa Rosa de Lima',
    nameEs: 'Santa Rosa de Lima',
    date: 'August 30',
    dateEs: '30 de agosto',
    month: 8,
    duration: '1 day',
    durationEs: '1 día',
    city: 'lima',
    region: 'Lima Region (national holiday)',
    regionEs: 'Región Lima (feriado nacional)',
    description: 'Lima\'s patron saint and the first person born in the Americas to be canonized is honored with pilgrimages, processions, and the tradition of dropping letters with wishes into her well.',
    descriptionEs: 'La santa patrona de Lima y la primera persona nacida en las Américas en ser canonizada es honrada con peregrinajes, procesiones y la tradición de dejar cartas con deseos en su pozo.',
    history: 'Isabel Flores de Oliva (1586-1617), known as Rosa, lived a life of extreme piety and charity in colonial Lima. She was canonized in 1671. Her sanctuary and well have been pilgrimage sites for over 350 years.',
    historyEs: 'Isabel Flores de Oliva (1586-1617), conocida como Rosa, vivió una vida de piedad y caridad extrema en la Lima colonial. Fue canonizada en 1671. Su santuario y pozo han sido sitios de peregrinación por más de 350 años.',
    highlights: [
      'Pilgrimage to her sanctuary',
      'Drop wishes into her well',
      'Religious processions',
      'Traditional music',
      'Decorated churches',
      'Local holiday atmosphere'
    ],
    highlightsEs: [
      'Peregrinación a su santuario',
      'Dejar deseos en su pozo',
      'Procesiones religiosas',
      'Música tradicional',
      'Iglesias decoradas',
      'Atmósfera de feriado local'
    ],
    activities: [
      'Visit Sanctuary of Santa Rosa',
      'Write a wish and drop in well',
      'See the church where she prayed',
      'Watch religious processions',
      'Enjoy local festivities',
      'Try traditional Lima food'
    ],
    activitiesEs: [
      'Visitar el Santuario de Santa Rosa',
      'Escribir un deseo y dejarlo en el pozo',
      'Ver la iglesia donde ella rezaba',
      'Ver procesiones religiosas',
      'Disfrutar festividades locales',
      'Probar comida tradicional limeña'
    ],
    familyRating: 4,
    crowdLevel: 'moderate',
    familyTips: [
      'Kids love writing wishes for the well',
      'Sanctuary can be crowded - go early',
      'National holiday - many businesses closed',
      'Interesting for kids learning about saints',
      'Combine with Lima sightseeing',
      'Simple but meaningful tradition',
      'Good for understanding Peruvian Catholicism',
      'Well at Sanctuary of Santa Rosa'
    ],
    familyTipsEs: [
      'A los niños les encanta escribir deseos para el pozo',
      'El santuario puede estar lleno - ve temprano',
      'Feriado nacional - muchos negocios cerrados',
      'Interesante para niños aprendiendo sobre santos',
      'Combina con turismo en Lima',
      'Tradición simple pero significativa',
      'Bueno para entender el catolicismo peruano',
      'Pozo en el Santuario de Santa Rosa'
    ],
    whatToWear: 'Respectful casual clothes appropriate for church visits.',
    whatToWearEs: 'Ropa casual respetuosa apropiada para visitas a la iglesia.',
    foodToTry: [
      'Picarones',
      'Anticuchos',
      'Suspiro limeño',
      'Ceviche',
      'Traditional sweets',
      'Festival street food'
    ],
    foodToTryEs: [
      'Picarones',
      'Anticuchos',
      'Suspiro limeño',
      'Ceviche',
      'Dulces tradicionales',
      'Comida callejera del festival'
    ],
    practicalInfo: 'August 30 is a national holiday. Sanctuary in central Lima\'s historic center. The well tradition involves writing wishes on paper and dropping them in. Lines can be long.',
    practicalInfoEs: 'El 30 de agosto es feriado nacional. El santuario está en el centro histórico de Lima. La tradición del pozo involucra escribir deseos en papel y dejarlos caer. Las colas pueden ser largas.',
    relatedFestivals: ['senor-de-los-milagros', 'semana-santa-ayacucho']
  },
  {
    slug: 'senor-de-los-milagros',
    name: 'Señor de los Milagros',
    nameEs: 'Señor de los Milagros',
    date: 'October (multiple processions)',
    dateEs: 'Octubre (múltiples procesiones)',
    month: 10,
    duration: 'Throughout October, main procession Oct 18-28',
    durationEs: 'Durante todo octubre, procesión principal 18-28 oct',
    city: 'lima',
    region: 'Lima Region (national)',
    regionEs: 'Región Lima (nacional)',
    description: 'The largest religious procession in South America draws millions of purple-clad devotees to honor the Lord of Miracles. Lima transforms as the massive painting of Christ is carried through the streets for hours.',
    descriptionEs: 'La procesión religiosa más grande de Sudamérica atrae millones de devotos vestidos de morado para honrar al Señor de los Milagros. Lima se transforma mientras la enorme pintura de Cristo es llevada por las calles durante horas.',
    history: 'In 1655, an enslaved Angolan man painted an image of Christ on a wall in Pachacamilla. When a massive earthquake destroyed Lima in 1746, the wall miraculously survived. The painting has been venerated ever since and is Peru\'s most important religious icon.',
    historyEs: 'En 1655, un hombre esclavizado de Angola pintó una imagen de Cristo en una pared en Pachacamilla. Cuando un terremoto masivo destruyó Lima en 1746, la pared milagrosamente sobrevivió. La pintura ha sido venerada desde entonces y es el icono religioso más importante de Perú.',
    highlights: [
      'Largest procession in South America',
      'Sea of purple-clad devotees',
      'Massive painting carried through streets',
      'Traditional purple habit wearing',
      'Turrón de Doña Pepa sweets',
      'Deep cultural and spiritual experience'
    ],
    highlightsEs: [
      'Procesión más grande de Sudamérica',
      'Mar de devotos vestidos de morado',
      'Pintura enorme llevada por las calles',
      'Uso del hábito morado tradicional',
      'Dulces turrón de Doña Pepa',
      'Experiencia cultural y espiritual profunda'
    ],
    activities: [
      'Watch the main procession',
      'Try turrón de Doña Pepa',
      'Visit Las Nazarenas church',
      'See Lima in purple',
      'Join in devotion',
      'Experience true Lima culture'
    ],
    activitiesEs: [
      'Ver la procesión principal',
      'Probar turrón de Doña Pepa',
      'Visitar la iglesia Las Nazarenas',
      'Ver Lima de morado',
      'Unirse a la devoción',
      'Experimentar la verdadera cultura limeña'
    ],
    familyRating: 4,
    crowdLevel: 'very high',
    familyTips: [
      'Very crowded - hold children\'s hands',
      'Wear purple to blend in',
      'Start early for good viewing spots',
      'Procession moves very slowly',
      'Bring water and snacks',
      'Incredible cultural experience',
      'Turrón de Doña Pepa is delicious',
      'October 18 and 28 are biggest days'
    ],
    familyTipsEs: [
      'Muy lleno - toma las manos de los niños',
      'Viste de morado para mezclarte',
      'Comienza temprano para buenos lugares',
      'La procesión se mueve muy lento',
      'Trae agua y snacks',
      'Experiencia cultural increíble',
      'El turrón de Doña Pepa es delicioso',
      'El 18 y 28 de octubre son los días más grandes'
    ],
    whatToWear: 'Purple clothing is traditional. Comfortable walking shoes essential.',
    whatToWearEs: 'La ropa morada es tradicional. Zapatos cómodos para caminar esenciales.',
    foodToTry: [
      'Turrón de Doña Pepa (iconic festival sweet)',
      'Mazamorra morada',
      'Picarones',
      'Anticuchos',
      'Purple corn drinks',
      'Street food vendors everywhere'
    ],
    foodToTryEs: [
      'Turrón de Doña Pepa (dulce icónico del festival)',
      'Mazamorra morada',
      'Picarones',
      'Anticuchos',
      'Bebidas de maíz morado',
      'Vendedores de comida callejera en todas partes'
    ],
    practicalInfo: 'Main processions October 18 and 28. Central Lima streets closed. Very crowded - plan transportation carefully. Las Nazarenas church is the home of the image.',
    practicalInfoEs: 'Procesiones principales el 18 y 28 de octubre. Calles del centro de Lima cerradas. Muy lleno - planifica el transporte cuidadosamente. La iglesia Las Nazarenas es el hogar de la imagen.',
    relatedFestivals: ['santa-rosa-de-lima', 'semana-santa-ayacucho']
  },
  {
    slug: 'vendimia-ica',
    name: 'Vendimia Wine Harvest Festival',
    nameEs: 'Festival de la Vendimia',
    date: 'Early March',
    dateEs: 'Principios de marzo',
    month: 3,
    duration: '1 week',
    durationEs: '1 semana',
    city: 'ica',
    region: 'Ica Region',
    regionEs: 'Región Ica',
    description: 'Celebrate Peru\'s wine and pisco harvest with grape stomping, beauty queens, folk dancing, and free-flowing pisco. This joyful festival showcases Ica\'s viticultural heritage with parades, concerts, and vineyard tours.',
    descriptionEs: 'Celebra la cosecha de vino y pisco de Perú con pisado de uvas, reinas de belleza, bailes folclóricos y pisco a raudales. Este alegre festival muestra la herencia vitícola de Ica con desfiles, conciertos y tours de viñedos.',
    history: 'The Vendimia dates back to the 1950s, celebrating Ica\'s position as Peru\'s wine and pisco heartland. Spanish missionaries planted the first vines here in the 1560s, and the region has produced wine and pisco ever since.',
    historyEs: 'La Vendimia data de los años 1950, celebrando la posición de Ica como el corazón del vino y pisco de Perú. Los misioneros españoles plantaron las primeras vides aquí en la década de 1560, y la región ha producido vino y pisco desde entonces.',
    highlights: [
      'Traditional grape stomping',
      'Pisco and wine tastings',
      'Beauty queen coronation',
      'Folk music and marinera dancing',
      'Vineyard tours',
      'Street parades and floats'
    ],
    highlightsEs: [
      'Pisado de uvas tradicional',
      'Degustaciones de pisco y vino',
      'Coronación de la reina de belleza',
      'Música folclórica y baile de marinera',
      'Tours de viñedos',
      'Desfiles callejeros y carrozas'
    ],
    activities: [
      'Stomp grapes the traditional way',
      'Tour pisco bodegas',
      'Watch the parade',
      'See marinera dance performances',
      'Enjoy live music concerts',
      'Sample local wines and piscos'
    ],
    activitiesEs: [
      'Pisar uvas de la manera tradicional',
      'Tour por bodegas de pisco',
      'Ver el desfile',
      'Ver presentaciones de marinera',
      'Disfrutar de conciertos en vivo',
      'Probar vinos y piscos locales'
    ],
    familyRating: 4,
    crowdLevel: 'high',
    familyTips: [
      'Kids can participate in grape stomping!',
      'Juice tastings available for children',
      'Parades are colorful and fun for all',
      'Book hotels far in advance',
      'Hot weather - bring sun protection',
      'Combine with Huacachina sandboarding',
      'Great cultural experience',
      'Try virgin pisco sour (no alcohol)'
    ],
    familyTipsEs: [
      '¡Los niños pueden participar en el pisado de uvas!',
      'Degustaciones de jugo disponibles para niños',
      'Los desfiles son coloridos y divertidos para todos',
      'Reserva hoteles con mucha anticipación',
      'Clima caliente - trae protección solar',
      'Combina con sandboard en Huacachina',
      'Gran experiencia cultural',
      'Prueba pisco sour virgen (sin alcohol)'
    ],
    whatToWear: 'Light summer clothes. Hat and sunscreen essential. Comfortable shoes for walking.',
    whatToWearEs: 'Ropa ligera de verano. Sombrero y protector solar esenciales. Zapatos cómodos para caminar.',
    foodToTry: [
      'Fresh pisco and wine',
      'Tejas (local sweets)',
      'Chocotejas (chocolate-covered treats)',
      'Pallares (lima beans)',
      'Carapulcra',
      'Fresh grape juice'
    ],
    foodToTryEs: [
      'Pisco y vino frescos',
      'Tejas (dulces locales)',
      'Chocotejas (dulces cubiertos de chocolate)',
      'Pallares',
      'Carapulcra',
      'Jugo de uva fresco'
    ],
    practicalInfo: 'Usually first or second week of March. Hotels fill up fast - book early. Main events in Ica city and at bodegas. Hot summer weather.',
    practicalInfoEs: 'Usualmente primera o segunda semana de marzo. Los hoteles se llenan rápido - reserva temprano. Eventos principales en la ciudad de Ica y en bodegas. Clima caliente de verano.',
    relatedFestivals: ['fiestas-patrias', 'carnaval-cajamarca']
  },
  {
    slug: 'concurso-marinera',
    name: 'Marinera Dance Festival',
    nameEs: 'Concurso Nacional de Marinera',
    date: 'Late January',
    dateEs: 'Finales de enero',
    month: 1,
    duration: '1 week',
    durationEs: '1 semana',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'Peru\'s most elegant dance comes alive in Trujillo with the national Marinera competition. Watch hundreds of couples perform this graceful courtship dance, featuring handkerchief twirling, fancy footwork, and elaborate costumes.',
    descriptionEs: 'El baile más elegante de Perú cobra vida en Trujillo con el concurso nacional de Marinera. Observa cientos de parejas realizar este elegante baile de cortejo, con pañuelos girando, trabajo de pies elaborado y trajes sofisticados.',
    history: 'The Marinera evolved from Spanish, African, and indigenous dance traditions. Declared Peru\'s national dance in 1986, the Trujillo competition has been held since 1960 and is the most prestigious dance event in the country.',
    historyEs: 'La Marinera evolucionó de tradiciones de danza españolas, africanas e indígenas. Declarada baile nacional de Perú en 1986, el concurso de Trujillo se ha celebrado desde 1960 y es el evento de danza más prestigioso del país.',
    highlights: [
      'National dance competition',
      'Elegant costumes and footwork',
      'Multiple age categories',
      'Children\'s performances',
      'Live orchestra music',
      'Grace and elegance on display'
    ],
    highlightsEs: [
      'Concurso nacional de danza',
      'Trajes elegantes y trabajo de pies',
      'Múltiples categorías de edad',
      'Presentaciones de niños',
      'Música de orquesta en vivo',
      'Gracia y elegancia en exhibición'
    ],
    activities: [
      'Watch competition finals',
      'See children\'s categories',
      'Enjoy street celebrations',
      'Take a marinera class',
      'Explore Trujillo\'s culture',
      'Photography opportunities'
    ],
    activitiesEs: [
      'Ver las finales del concurso',
      'Ver categorías de niños',
      'Disfrutar celebraciones callejeras',
      'Tomar una clase de marinera',
      'Explorar la cultura de Trujillo',
      'Oportunidades de fotografía'
    ],
    familyRating: 5,
    crowdLevel: 'moderate',
    familyTips: [
      'Children\'s categories are adorable',
      'Great introduction to Peruvian dance',
      'Buy tickets in advance for finals',
      'Kids can take beginner classes',
      'Elegant and family-appropriate',
      'Combine with Chan Chan and beaches',
      'Evening events - plan accordingly',
      'Beautiful costumes inspire kids'
    ],
    familyTipsEs: [
      'Las categorías de niños son adorables',
      'Gran introducción a la danza peruana',
      'Compra boletos con anticipación para las finales',
      'Los niños pueden tomar clases para principiantes',
      'Elegante y apropiado para familias',
      'Combina con Chan Chan y playas',
      'Eventos nocturnos - planifica acordemente',
      'Los trajes hermosos inspiran a los niños'
    ],
    whatToWear: 'Smart casual for competition viewing. Comfortable for street events.',
    whatToWearEs: 'Casual elegante para ver el concurso. Cómodo para eventos callejeros.',
    foodToTry: [
      'Ceviche trujillano',
      'Shambar (Monday soup)',
      'Cabrito a la norteña',
      'Sopa teóloga',
      'King kong (layered sweet)',
      'Chicha de jora'
    ],
    foodToTryEs: [
      'Ceviche trujillano',
      'Shambar (sopa del lunes)',
      'Cabrito a la norteña',
      'Sopa teóloga',
      'King kong (dulce en capas)',
      'Chicha de jora'
    ],
    practicalInfo: 'Last week of January. Main events at Club Libertad. Book Trujillo hotels early. Competition runs through the week with finals on last weekend.',
    practicalInfoEs: 'Última semana de enero. Eventos principales en Club Libertad. Reserva hoteles en Trujillo temprano. El concurso dura toda la semana con finales el último fin de semana.',
    relatedFestivals: ['festival-primavera-trujillo', 'fiestas-patrias']
  },
  {
    slug: 'festival-primavera-trujillo',
    name: 'Spring Festival Trujillo',
    nameEs: 'Festival de la Primavera',
    date: 'Last week of September',
    dateEs: 'Última semana de septiembre',
    month: 9,
    duration: '1 week',
    durationEs: '1 semana',
    city: 'trujillo',
    region: 'La Libertad Region',
    regionEs: 'Región La Libertad',
    description: 'Trujillo celebrates spring with elaborate flower-covered floats, beauty queens, and paso horse parades. The City of Eternal Spring lives up to its name with colorful celebrations, marinera dancing, and joyful street parties.',
    descriptionEs: 'Trujillo celebra la primavera con elaboradas carrozas cubiertas de flores, reinas de belleza y desfiles de caballos de paso. La Ciudad de la Eterna Primavera hace honor a su nombre con coloridas celebraciones, baile de marinera y alegres fiestas callejeras.',
    history: 'Founded in 1950, the Spring Festival celebrates Trujillo\'s mild climate and rich agricultural heritage. It has grown into one of Peru\'s most colorful celebrations, featuring the famous Peruvian paso horses bred in the region.',
    historyEs: 'Fundado en 1950, el Festival de la Primavera celebra el clima templado de Trujillo y su rica herencia agrícola. Ha crecido hasta convertirse en una de las celebraciones más coloridas de Perú, presentando los famosos caballos de paso peruanos criados en la región.',
    highlights: [
      'Flower-covered parade floats',
      'Paso horse demonstrations',
      'Spring Queen coronation',
      'Marinera performances',
      'Street parties and concerts',
      'Colorful costumes and flowers'
    ],
    highlightsEs: [
      'Carrozas del desfile cubiertas de flores',
      'Demostraciones de caballos de paso',
      'Coronación de la Reina de la Primavera',
      'Presentaciones de marinera',
      'Fiestas callejeras y conciertos',
      'Trajes coloridos y flores'
    ],
    activities: [
      'Watch the grand corso parade',
      'See paso horse shows',
      'Enjoy street festivities',
      'Visit flower displays',
      'Dance to live music',
      'See children\'s parades'
    ],
    activitiesEs: [
      'Ver el gran corso del desfile',
      'Ver shows de caballos de paso',
      'Disfrutar festividades callejeras',
      'Visitar exhibiciones de flores',
      'Bailar con música en vivo',
      'Ver desfiles de niños'
    ],
    familyRating: 5,
    crowdLevel: 'high',
    familyTips: [
      'Flower floats are spectacular',
      'Paso horses are gentle and beautiful',
      'Great for children who love animals',
      'Arrive early for parade spots',
      'Pleasant spring weather',
      'Combine with Chan Chan visit',
      'Colorful and photogenic',
      'Less intense than Lima festivals'
    ],
    familyTipsEs: [
      'Las carrozas de flores son espectaculares',
      'Los caballos de paso son gentiles y hermosos',
      'Genial para niños que aman los animales',
      'Llega temprano para lugares del desfile',
      'Clima agradable de primavera',
      'Combina con visita a Chan Chan',
      'Colorido y fotogénico',
      'Menos intenso que los festivales de Lima'
    ],
    whatToWear: 'Light spring clothes. Sun protection for parade watching.',
    whatToWearEs: 'Ropa ligera de primavera. Protección solar para ver el desfile.',
    foodToTry: [
      'Ceviche mixto',
      'Cabrito con frijoles',
      'Shambar',
      'Causa rellena',
      'King kong sweets',
      'Fresh fruit drinks'
    ],
    foodToTryEs: [
      'Ceviche mixto',
      'Cabrito con frijoles',
      'Shambar',
      'Causa rellena',
      'Dulces king kong',
      'Bebidas de fruta fresca'
    ],
    practicalInfo: 'Last week of September. Main parade on Saturday. Hotels book up - reserve early. Good time to combine with archaeological sites.',
    practicalInfoEs: 'Última semana de septiembre. Desfile principal el sábado. Los hoteles se llenan - reserva temprano. Buen momento para combinar con sitios arqueológicos.',
    relatedFestivals: ['concurso-marinera', 'vendimia-ica']
  },
  {
    slug: 'carnaval-cajamarca',
    name: 'Cajamarca Carnival',
    nameEs: 'Carnaval de Cajamarca',
    date: 'February (before Lent)',
    dateEs: 'Febrero (antes de Cuaresma)',
    month: 2,
    duration: '1 week',
    durationEs: '1 semana',
    city: 'cajamarca',
    region: 'Cajamarca Region',
    regionEs: 'Región Cajamarca',
    description: 'Peru\'s most famous carnival fills Cajamarca with water balloon fights, paint throwing, parades, and the ceremonial burial of Ño Carnavalón. This wild celebration attracts visitors from across Peru for uninhibited fun.',
    descriptionEs: 'El carnaval más famoso de Perú llena Cajamarca con peleas de globos de agua, lanzamiento de pintura, desfiles y el entierro ceremonial de Ño Carnavalón. Esta celebración salvaje atrae visitantes de todo Perú para diversión sin inhibiciones.',
    history: 'Cajamarca\'s carnival blends Spanish Catholic pre-Lenten traditions with indigenous celebrations. Ño Carnavalón, a carnival king figure, presides over the festivities and is ceremonially "buried" on Ash Wednesday to end the celebration.',
    historyEs: 'El carnaval de Cajamarca mezcla tradiciones católicas españolas de pre-Cuaresma con celebraciones indígenas. Ño Carnavalón, una figura del rey del carnaval, preside las festividades y es ceremonialmente "enterrado" el Miércoles de Ceniza para terminar la celebración.',
    highlights: [
      'Massive water and paint fights',
      'Ño Carnavalón parade',
      'Neighborhood competitions',
      'Traditional dances',
      'Burial of Ño Carnavalón',
      'Uninhibited celebration'
    ],
    highlightsEs: [
      'Peleas masivas de agua y pintura',
      'Desfile de Ño Carnavalón',
      'Competencias de barrios',
      'Bailes tradicionales',
      'Entierro de Ño Carnavalón',
      'Celebración sin inhibiciones'
    ],
    activities: [
      'Join water balloon battles',
      'Watch the main parade',
      'See traditional dances',
      'Participate in paint fights',
      'Attend neighborhood parties',
      'Witness Ño Carnavalón burial'
    ],
    activitiesEs: [
      'Unirse a batallas de globos de agua',
      'Ver el desfile principal',
      'Ver bailes tradicionales',
      'Participar en peleas de pintura',
      'Asistir a fiestas de barrios',
      'Presenciar el entierro de Ño Carnavalón'
    ],
    familyRating: 4,
    crowdLevel: 'very high',
    familyTips: [
      'YOU WILL GET WET - embrace it!',
      'Bring waterproof phone case',
      'Wear clothes you don\'t mind ruining',
      'Kids absolutely love it',
      'Store valuables safely at hotel',
      'Very chaotic but joyful',
      'Paint washes out - mostly',
      'Incredible cultural experience'
    ],
    familyTipsEs: [
      '¡TE MOJARÁS - acéptalo!',
      'Trae funda impermeable para el teléfono',
      'Viste ropa que no te importe arruinar',
      'A los niños les encanta absolutamente',
      'Guarda objetos de valor en el hotel',
      'Muy caótico pero alegre',
      'La pintura se quita - mayormente',
      'Experiencia cultural increíble'
    ],
    whatToWear: 'Old clothes that can be ruined. Waterproof phone protection. Closed shoes.',
    whatToWearEs: 'Ropa vieja que pueda arruinarse. Protección impermeable para teléfono. Zapatos cerrados.',
    foodToTry: [
      'Frito cajamarquino',
      'Chicharrón cajamarquino',
      'Humitas',
      'Caldo verde',
      'Manjar blanco',
      'Queso mantecoso'
    ],
    foodToTryEs: [
      'Frito cajamarquino',
      'Chicharrón cajamarquino',
      'Humitas',
      'Caldo verde',
      'Manjar blanco',
      'Queso mantecoso'
    ],
    practicalInfo: 'Date varies yearly (before Lent). Hotels fill up fast - book months ahead. No one is safe from water/paint! Main parade on carnival Sunday.',
    practicalInfoEs: 'La fecha varía cada año (antes de Cuaresma). Los hoteles se llenan rápido - reserva con meses de anticipación. ¡Nadie está a salvo del agua/pintura! Desfile principal el domingo de carnaval.',
    relatedFestivals: ['virgen-candelaria', 'vendimia-ica']
  },
  {
    slug: 'semana-santa-ayacucho',
    name: 'Semana Santa in Ayacucho',
    nameEs: 'Semana Santa en Ayacucho',
    date: 'March/April (Holy Week)',
    dateEs: 'Marzo/Abril (Semana Santa)',
    month: 4,
    duration: '10 days',
    durationEs: '10 días',
    city: 'ayacucho',
    region: 'Ayacucho Region',
    regionEs: 'Región Ayacucho',
    description: 'The most spectacular Holy Week celebration in South America transforms Ayacucho into a living religious theater. Ten days of processions, carpet-lined streets, candlelit vigils, and deeply moving ceremonies draw pilgrims from around the world to witness this UNESCO-recognized tradition.',
    descriptionEs: 'La celebración de Semana Santa más espectacular de Sudamérica transforma Ayacucho en un teatro religioso viviente. Diez días de procesiones, calles cubiertas de alfombras, vigilias con velas y ceremonias profundamente conmovedoras atraen peregrinos de todo el mundo para presenciar esta tradición reconocida por la UNESCO.',
    history: 'Ayacucho\'s Semana Santa dates to the 16th century, blending Spanish Catholic traditions with Andean spirituality. The city\'s 33 colonial churches (one for each year of Christ\'s life) host elaborate processions. The tradition has been recognized by UNESCO as an Intangible Cultural Heritage.',
    historyEs: 'La Semana Santa de Ayacucho data del siglo XVI, mezclando tradiciones católicas españolas con espiritualidad andina. Las 33 iglesias coloniales de la ciudad (una por cada año de la vida de Cristo) albergan elaboradas procesiones. La tradición ha sido reconocida por la UNESCO como Patrimonio Cultural Inmaterial.',
    highlights: [
      'Elaborate flower carpet streets',
      'Candlelit night processions',
      'Spectacular religious floats',
      '33 colonial churches participate',
      'Unique Andean-Catholic blend',
      'UNESCO Intangible Heritage'
    ],
    highlightsEs: [
      'Elaboradas alfombras de flores en las calles',
      'Procesiones nocturnas con velas',
      'Espectaculares carros religiosos',
      '33 iglesias coloniales participan',
      'Mezcla única andino-católica',
      'Patrimonio Inmaterial de la UNESCO'
    ],
    activities: [
      'Watch the flower carpet creation',
      'Join candlelit processions',
      'Visit the 33 colonial churches',
      'See the dramatic Good Friday procession',
      'Experience Easter Sunday celebration',
      'Try traditional Ayacucho cuisine'
    ],
    activitiesEs: [
      'Ver la creación de alfombras de flores',
      'Unirse a procesiones con velas',
      'Visitar las 33 iglesias coloniales',
      'Ver la dramática procesión del Viernes Santo',
      'Experimentar la celebración del Domingo de Pascua',
      'Probar la cocina tradicional de Ayacucho'
    ],
    familyRating: 5,
    crowdLevel: 'very high',
    familyTips: [
      'Book hotels 6+ months in advance',
      'Flower carpet making is fascinating for kids',
      'Night processions are magical but late',
      'Crowds are intense - hold children\'s hands',
      'Great for teaching about traditions',
      'Combine with Ayacucho crafts exploration',
      'Weather is pleasant in March/April',
      'Try puca picante and other local dishes'
    ],
    familyTipsEs: [
      'Reserva hoteles con 6+ meses de anticipación',
      'La creación de alfombras de flores es fascinante para los niños',
      'Las procesiones nocturnas son mágicas pero tarde',
      'Las multitudes son intensas - toma las manos de los niños',
      'Genial para enseñar sobre tradiciones',
      'Combina con exploración de artesanías de Ayacucho',
      'El clima es agradable en marzo/abril',
      'Prueba puca picante y otros platos locales'
    ],
    whatToWear: 'Respectful modest clothing for church visits. Layers for cool evenings. Comfortable walking shoes essential.',
    whatToWearEs: 'Ropa modesta y respetuosa para visitas a iglesias. Capas para noches frescas. Zapatos cómodos esenciales.',
    foodToTry: [
      'Puca picante (red spicy pork)',
      'Mondongo ayacuchano (soup)',
      'Chicharrón',
      'Panes de Semana Santa',
      'Ponche de habas',
      'Siete potajes (seven dishes on Holy Thursday)'
    ],
    foodToTryEs: [
      'Puca picante (cerdo picante rojo)',
      'Mondongo ayacuchano (sopa)',
      'Chicharrón',
      'Panes de Semana Santa',
      'Ponche de habas',
      'Siete potajes (siete platos el Jueves Santo)'
    ],
    practicalInfo: 'Dates vary yearly with Easter. Friday before Palm Sunday through Easter Sunday. Book everything months ahead - the city fills completely. Fly from Lima (1 hour) or bus (9 hours).',
    practicalInfoEs: 'Las fechas varían cada año con la Pascua. Viernes antes del Domingo de Ramos hasta Domingo de Pascua. Reserva todo con meses de anticipación - la ciudad se llena completamente. Vuelo desde Lima (1 hora) o bus (9 horas).',
    relatedFestivals: ['corpus-christi-cusco', 'senor-de-los-milagros', 'virgen-candelaria']
  }
];

// Helper functions
export function getFestivalBySlug(slug: string): Festival | undefined {
  return festivals.find(festival => festival.slug === slug);
}

export function getAllFestivalSlugs(): string[] {
  return festivals.map(festival => festival.slug);
}

export function getFestivalsByMonth(month: number): Festival[] {
  return festivals.filter(festival => festival.month === month);
}

export function getFestivalsByCity(citySlug: string): Festival[] {
  return festivals.filter(festival => festival.city === citySlug);
}

export function getFamilyFriendlyFestivals(minRating: number = 4): Festival[] {
  return festivals.filter(festival => festival.familyRating >= minRating);
}
