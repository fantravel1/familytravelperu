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
