'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  MapPin,
  Clock,
  Car,
  Train,
  Ship,
  Users,
  Star,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Building,
  Sun,
  Baby,
  CheckCircle,
  Bike
} from 'lucide-react';

interface DayTrip {
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  distance: string;
  duration: string;
  durationEs: string;
  transport: string[];
  bestFor: string[];
  bestForEs: string[];
  highlights: string[];
  highlightsEs: string[];
  familyTips: string[];
  familyTipsEs: string[];
  ageRecommendation: string;
  ageRecommendationEs: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
}

interface City {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  description: string;
  descriptionEs: string;
  trips: DayTrip[];
}

const cities: City[] = [
  {
    id: 'lima',
    name: 'Lima',
    nameEs: 'Lima',
    icon: Building,
    description: 'Peru\'s capital offers excellent day trip options to beaches, ancient ruins, and desert oases.',
    descriptionEs: 'La capital de Perú ofrece excelentes opciones de excursiones a playas, ruinas antiguas y oasis desérticos.',
    trips: [
      {
        name: 'Paracas & Ballestas Islands',
        nameEs: 'Paracas e Islas Ballestas',
        description: 'See Peru\'s "Little Galapagos" - sea lions, penguins, and thousands of seabirds on a boat tour, plus explore the desert reserve.',
        descriptionEs: 'Visita las "Pequeñas Galápagos" de Perú - lobos marinos, pingüinos y miles de aves marinas en un tour en bote, más explora la reserva desértica.',
        distance: '250 km (155 mi)',
        duration: 'Full day (4-5 hrs drive each way or 45 min flight)',
        durationEs: 'Día completo (4-5 hrs manejo cada tramo o 45 min vuelo)',
        transport: ['car', 'bus', 'plane'],
        bestFor: ['Wildlife lovers', 'Beach time', 'Photography'],
        bestForEs: ['Amantes de la vida silvestre', 'Tiempo de playa', 'Fotografía'],
        highlights: ['Sea lions up close', 'Humboldt penguins', 'Red Beach', 'Candelabra geoglyph'],
        highlightsEs: ['Lobos marinos de cerca', 'Pingüinos de Humboldt', 'Playa Roja', 'Geoglifo del Candelabro'],
        familyTips: ['Book early morning boat tour to avoid wind', 'Bring warm layers for boat ride', 'La Mina beach has calm waters for kids', 'Pack snacks - limited options in reserve'],
        familyTipsEs: ['Reserva tour en bote temprano para evitar el viento', 'Trae capas abrigadas para el bote', 'Playa La Mina tiene aguas calmadas para niños', 'Lleva snacks - opciones limitadas en la reserva'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      },
      {
        name: 'Huacachina Oasis & Sandboarding',
        nameEs: 'Oasis de Huacachina y Sandboard',
        description: 'Experience a desert oasis surrounded by massive sand dunes. Ride dune buggies and sandboard down the slopes!',
        descriptionEs: '¡Experimenta un oasis desértico rodeado de enormes dunas de arena. Monta buggies y deslízate en sandboard por las pendientes!',
        distance: '300 km (186 mi)',
        duration: 'Full day (4-5 hrs drive each way)',
        durationEs: 'Día completo (4-5 hrs manejo cada tramo)',
        transport: ['car', 'bus'],
        bestFor: ['Adventure seekers', 'Teens', 'Photography'],
        bestForEs: ['Buscadores de aventura', 'Adolescentes', 'Fotografía'],
        highlights: ['Dune buggy rides', 'Sandboarding', 'Sunset views', 'Oasis lagoon'],
        highlightsEs: ['Paseos en buggy', 'Sandboard', 'Vistas del atardecer', 'Laguna del oasis'],
        familyTips: ['Best for kids 5+ due to buggy rides', 'Bring goggles for sand protection', 'Sunset tours are most magical', 'Stay overnight if possible to reduce driving'],
        familyTipsEs: ['Mejor para niños 5+ por los paseos en buggy', 'Trae gafas para protección de la arena', 'Tours al atardecer son más mágicos', 'Quédate una noche si es posible para reducir el manejo'],
        ageRecommendation: 'Ages 5+',
        ageRecommendationEs: 'Mayores de 5 años',
        difficulty: 'moderate'
      },
      {
        name: 'Pachacamac Ruins',
        nameEs: 'Ruinas de Pachacamac',
        description: 'Ancient pre-Incan pilgrimage site just outside Lima. Walk among temples with Pacific Ocean views.',
        descriptionEs: 'Antiguo sitio de peregrinación pre-Inca justo afuera de Lima. Camina entre templos con vistas al Océano Pacífico.',
        distance: '40 km (25 mi)',
        duration: 'Half day (1 hr drive each way)',
        durationEs: 'Medio día (1 hr manejo cada tramo)',
        transport: ['car', 'taxi'],
        bestFor: ['History buffs', 'Short trip', 'Avoiding long drives'],
        bestForEs: ['Amantes de la historia', 'Viaje corto', 'Evitar manejos largos'],
        highlights: ['Sun Temple', 'Painted Temple', 'Ocean views', 'Excellent museum'],
        highlightsEs: ['Templo del Sol', 'Templo Pintado', 'Vistas al océano', 'Excelente museo'],
        familyTips: ['Visit museum first to understand the site', 'Bring sun protection - little shade', 'Morning visits are cooler', 'Great for history-curious kids'],
        familyTipsEs: ['Visita el museo primero para entender el sitio', 'Trae protección solar - poca sombra', 'Las visitas matutinas son más frescas', 'Genial para niños curiosos de historia'],
        ageRecommendation: 'Ages 4+',
        ageRecommendationEs: 'Mayores de 4 años',
        difficulty: 'easy'
      },
      {
        name: 'Caral Archaeological Site',
        nameEs: 'Sitio Arqueológico de Caral',
        description: 'Visit the oldest city in the Americas (5,000 years old!) - a UNESCO World Heritage Site north of Lima.',
        descriptionEs: '¡Visita la ciudad más antigua de las Américas (5,000 años de antigüedad!) - un Sitio Patrimonio de la Humanidad al norte de Lima.',
        distance: '180 km (112 mi)',
        duration: 'Full day (3-4 hrs drive each way)',
        durationEs: 'Día completo (3-4 hrs manejo cada tramo)',
        transport: ['car', 'tour'],
        bestFor: ['History enthusiasts', 'UNESCO chasers', 'Educational trips'],
        bestForEs: ['Entusiastas de la historia', 'Cazadores de UNESCO', 'Viajes educativos'],
        highlights: ['Ancient pyramids', 'Circular plazas', 'Oldest city Americas', 'Desert landscape'],
        highlightsEs: ['Pirámides antiguas', 'Plazas circulares', 'Ciudad más antigua de América', 'Paisaje desértico'],
        familyTips: ['Hire a guide - makes it fascinating for kids', 'Bring lots of water and sun protection', 'Best for school-age kids who enjoy history', 'Combine with beach lunch in Huacho'],
        familyTipsEs: ['Contrata un guía - lo hace fascinante para niños', 'Trae mucha agua y protección solar', 'Mejor para niños en edad escolar que disfrutan la historia', 'Combina con almuerzo de playa en Huacho'],
        ageRecommendation: 'Ages 7+',
        ageRecommendationEs: 'Mayores de 7 años',
        difficulty: 'moderate'
      },
      {
        name: 'Lunahuaná Adventure',
        nameEs: 'Aventura en Lunahuaná',
        description: 'River valley escape with rafting, zip-lining, and excellent Peruvian cuisine at vineyard restaurants.',
        descriptionEs: 'Escape al valle del río con rafting, tirolesa y excelente cocina peruana en restaurantes de viñedos.',
        distance: '180 km (112 mi)',
        duration: 'Full day (3 hrs drive each way)',
        durationEs: 'Día completo (3 hrs manejo cada tramo)',
        transport: ['car', 'tour'],
        bestFor: ['Adventure activities', 'Foodies', 'Active families'],
        bestForEs: ['Actividades de aventura', 'Amantes de la comida', 'Familias activas'],
        highlights: ['White water rafting', 'Zip-lining', 'Wine/pisco tasting', 'River swimming'],
        highlightsEs: ['Rafting en aguas blancas', 'Tirolesa', 'Degustación de vino/pisco', 'Natación en el río'],
        familyTips: ['Rafting available for kids 6+ (Class II rapids)', 'Book rafting for morning, lunch at vineyard', 'Bring swimsuits for river time', 'Great for active teenagers'],
        familyTipsEs: ['Rafting disponible para niños 6+ (rápidos Clase II)', 'Reserva rafting en la mañana, almuerzo en viñedo', 'Trae trajes de baño para el río', 'Genial para adolescentes activos'],
        ageRecommendation: 'Ages 6+',
        ageRecommendationEs: 'Mayores de 6 años',
        difficulty: 'moderate'
      }
    ]
  },
  {
    id: 'cusco',
    name: 'Cusco',
    nameEs: 'Cusco',
    icon: Mountain,
    description: 'The Sacred Valley and surrounding highlands offer incredible day trips to Incan ruins, colorful mountains, and traditional villages.',
    descriptionEs: 'El Valle Sagrado y las tierras altas circundantes ofrecen increíbles excursiones a ruinas Incas, montañas coloridas y pueblos tradicionales.',
    trips: [
      {
        name: 'Sacred Valley Classic',
        nameEs: 'Valle Sagrado Clásico',
        description: 'Visit Pisac market and ruins, Ollantaytambo fortress, and traditional villages in a day-long valley tour.',
        descriptionEs: 'Visita el mercado y ruinas de Pisac, la fortaleza de Ollantaytambo y pueblos tradicionales en un tour de día por el valle.',
        distance: '100 km loop',
        duration: 'Full day',
        durationEs: 'Día completo',
        transport: ['car', 'tour'],
        bestFor: ['First-timers', 'Markets', 'Inca history'],
        bestForEs: ['Primerizos', 'Mercados', 'Historia Inca'],
        highlights: ['Pisac market', 'Ollantaytambo', 'Moray terraces', 'Maras salt mines'],
        highlightsEs: ['Mercado de Pisac', 'Ollantaytambo', 'Terrazas de Moray', 'Salineras de Maras'],
        familyTips: ['Pisac market on Sundays is biggest', 'Let kids pick a souvenir at market', 'Ollantaytambo has great kid-friendly restaurants', 'Valley is lower altitude - kids feel better here'],
        familyTipsEs: ['El mercado de Pisac los domingos es más grande', 'Deja que los niños elijan un recuerdo en el mercado', 'Ollantaytambo tiene restaurantes aptos para niños', 'El valle es de menor altitud - los niños se sienten mejor aquí'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      },
      {
        name: 'Maras & Moray',
        nameEs: 'Maras y Moray',
        description: 'See the stunning Maras salt evaporation pools and the mysterious circular Moray agricultural terraces.',
        descriptionEs: 'Ve las impresionantes piscinas de evaporación de sal de Maras y las misteriosas terrazas agrícolas circulares de Moray.',
        distance: '50 km (31 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'tour', 'quad'],
        bestFor: ['Photography', 'Unique landscapes', 'Shorter trip'],
        bestForEs: ['Fotografía', 'Paisajes únicos', 'Viaje más corto'],
        highlights: ['Salt mines terraces', 'Moray circles', 'Andean views', 'Village life'],
        highlightsEs: ['Terrazas de salinas', 'Círculos de Moray', 'Vistas andinas', 'Vida de pueblo'],
        familyTips: ['Kids love running around Moray terraces', 'Can combine with quad bike tour', 'Bring walking shoes for salt mine paths', 'Buy salt souvenirs at Maras'],
        familyTipsEs: ['A los niños les encanta correr por las terrazas de Moray', 'Se puede combinar con tour en cuatrimoto', 'Trae zapatos cómodos para los senderos de las salinas', 'Compra recuerdos de sal en Maras'],
        ageRecommendation: 'Ages 3+',
        ageRecommendationEs: 'Mayores de 3 años',
        difficulty: 'easy'
      },
      {
        name: 'Rainbow Mountain (Vinicunca)',
        nameEs: 'Montaña de Colores (Vinicunca)',
        description: 'Trek to the famous striped mountain at 5,200m elevation. A challenging but unforgettable experience.',
        descriptionEs: 'Camina a la famosa montaña rayada a 5,200m de elevación. Una experiencia desafiante pero inolvidable.',
        distance: '100 km (62 mi)',
        duration: 'Full day (3 hrs drive + 3-4 hr hike)',
        durationEs: 'Día completo (3 hrs manejo + 3-4 hrs caminata)',
        transport: ['tour'],
        bestFor: ['Adventure seekers', 'Fit teens', 'Bucket list'],
        bestForEs: ['Buscadores de aventura', 'Adolescentes en forma', 'Lista de deseos'],
        highlights: ['Colorful striped mountain', 'High altitude achievement', 'Epic photos', 'Alpacas'],
        highlightsEs: ['Montaña de rayas coloridas', 'Logro de gran altitud', 'Fotos épicas', 'Alpacas'],
        familyTips: ['Only for acclimatized, fit teens 13+', 'Horse rental available for parts of trail', 'Start before dawn (leave 3-4am)', 'Palccoyo is an easier alternative with similar views'],
        familyTipsEs: ['Solo para adolescentes aclimatados y en forma 13+', 'Alquiler de caballos disponible para partes del sendero', 'Empieza antes del amanecer (sal 3-4am)', 'Palccoyo es una alternativa más fácil con vistas similares'],
        ageRecommendation: 'Ages 13+ (fit)',
        ageRecommendationEs: 'Mayores de 13 años (en forma)',
        difficulty: 'challenging'
      },
      {
        name: 'Palccoyo Rainbow Mountain',
        nameEs: 'Montaña Palccoyo',
        description: 'The family-friendly alternative to Rainbow Mountain - shorter hike, fewer crowds, three colorful mountains!',
        descriptionEs: '¡La alternativa familiar a la Montaña de Colores - caminata más corta, menos gente, tres montañas coloridas!',
        distance: '95 km (59 mi)',
        duration: 'Full day',
        durationEs: 'Día completo',
        transport: ['tour'],
        bestFor: ['Families', 'Less crowds', 'Easier hike'],
        bestForEs: ['Familias', 'Menos multitudes', 'Caminata más fácil'],
        highlights: ['Three rainbow mountains', 'Stone forest', 'Only 45-min walk', 'Alpaca herds'],
        highlightsEs: ['Tres montañas arcoíris', 'Bosque de piedra', 'Solo 45 min de caminata', 'Rebaños de alpacas'],
        familyTips: ['Much better option for families with kids', 'Flat, easy trail', 'Still high altitude - acclimatize first', 'Less touristy, more authentic experience'],
        familyTipsEs: ['Mucho mejor opción para familias con niños', 'Sendero plano y fácil', 'Aún alta altitud - aclimatarse primero', 'Menos turístico, experiencia más auténtica'],
        ageRecommendation: 'Ages 7+',
        ageRecommendationEs: 'Mayores de 7 años',
        difficulty: 'moderate'
      },
      {
        name: 'Humantay Lake',
        nameEs: 'Laguna Humantay',
        description: 'Hike to a stunning turquoise glacial lake surrounded by snow-capped peaks. A magical high-altitude experience.',
        descriptionEs: 'Camina a una impresionante laguna glaciar turquesa rodeada de picos nevados. Una experiencia mágica de alta altitud.',
        distance: '130 km (81 mi)',
        duration: 'Full day (3-4 hrs drive + 1.5 hr hike)',
        durationEs: 'Día completo (3-4 hrs manejo + 1.5 hrs caminata)',
        transport: ['tour'],
        bestFor: ['Nature lovers', 'Photography', 'Active families'],
        bestForEs: ['Amantes de la naturaleza', 'Fotografía', 'Familias activas'],
        highlights: ['Turquoise glacial lake', 'Mountain views', 'Andean scenery', 'Waterfalls'],
        highlightsEs: ['Laguna glaciar turquesa', 'Vistas de montañas', 'Paisaje andino', 'Cascadas'],
        familyTips: ['Moderate hike - 1.5 hrs uphill', 'Horse rental available', 'Peak altitude 4,200m - acclimatize first', 'Best for kids 8+ with hiking experience'],
        familyTipsEs: ['Caminata moderada - 1.5 hrs cuesta arriba', 'Alquiler de caballos disponible', 'Altitud máxima 4,200m - aclimatarse primero', 'Mejor para niños 8+ con experiencia en caminatas'],
        ageRecommendation: 'Ages 8+',
        ageRecommendationEs: 'Mayores de 8 años',
        difficulty: 'moderate'
      },
      {
        name: 'Chinchero Weaving Experience',
        nameEs: 'Experiencia de Tejido en Chinchero',
        description: 'Visit a traditional highland village, see ancient ruins, and learn about Andean weaving techniques from local artisans.',
        descriptionEs: 'Visita un pueblo tradicional de las tierras altas, ve ruinas antiguas y aprende sobre técnicas de tejido andino de artesanos locales.',
        distance: '30 km (19 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'tour'],
        bestFor: ['Cultural immersion', 'Hands-on activities', 'Shopping'],
        bestForEs: ['Inmersión cultural', 'Actividades prácticas', 'Compras'],
        highlights: ['Weaving demonstrations', 'Natural dye process', 'Inca ruins', 'Sunday market'],
        highlightsEs: ['Demostraciones de tejido', 'Proceso de tintes naturales', 'Ruinas Incas', 'Mercado dominical'],
        familyTips: ['Kids can try weaving too!', 'Sunday market is most vibrant', 'Beautiful photo opportunities', 'Support local women cooperatives'],
        familyTipsEs: ['¡Los niños pueden probar a tejer también!', 'El mercado dominical es más vibrante', 'Hermosas oportunidades de fotos', 'Apoya cooperativas de mujeres locales'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'arequipa',
    name: 'Arequipa',
    nameEs: 'Arequipa',
    icon: Sun,
    description: 'The White City serves as the gateway to Peru\'s most dramatic canyon, colonial charm, and volcanic landscapes.',
    descriptionEs: 'La Ciudad Blanca es la puerta de entrada al cañón más dramático de Perú, encanto colonial y paisajes volcánicos.',
    trips: [
      {
        name: 'Colca Canyon (2-day)',
        nameEs: 'Cañón del Colca (2 días)',
        description: 'One of the world\'s deepest canyons - watch Andean condors soar, visit hot springs, and explore traditional villages.',
        descriptionEs: 'Uno de los cañones más profundos del mundo - observa cóndores andinos volar, visita aguas termales y explora pueblos tradicionales.',
        distance: '160 km (100 mi)',
        duration: '2 days (3-4 hrs drive each way)',
        durationEs: '2 días (3-4 hrs manejo cada tramo)',
        transport: ['car', 'tour'],
        bestFor: ['Condor viewing', 'Natural wonders', 'Hot springs'],
        bestForEs: ['Avistamiento de cóndores', 'Maravillas naturales', 'Aguas termales'],
        highlights: ['Condor Cross viewpoint', 'Hot springs at Chivay', 'Traditional villages', 'Canyon views'],
        highlightsEs: ['Mirador Cruz del Cóndor', 'Aguas termales en Chivay', 'Pueblos tradicionales', 'Vistas del cañón'],
        familyTips: ['Best as overnight trip - avoid 8+ hrs driving in one day', 'Early morning for condor viewing (7-9am)', 'Hot springs are family-friendly', 'Altitude reaches 4,910m at pass - watch for symptoms'],
        familyTipsEs: ['Mejor como viaje de una noche - evita 8+ hrs de manejo en un día', 'Temprano en la mañana para ver cóndores (7-9am)', 'Las aguas termales son aptas para familias', 'La altitud alcanza 4,910m en el paso - observa síntomas'],
        ageRecommendation: 'Ages 5+',
        ageRecommendationEs: 'Mayores de 5 años',
        difficulty: 'moderate'
      },
      {
        name: 'Salinas y Aguada Blanca Reserve',
        nameEs: 'Reserva Salinas y Aguada Blanca',
        description: 'High-altitude reserve with wild vicuñas, flamingos, and stunning views of volcanoes Misti and Chachani.',
        descriptionEs: 'Reserva de alta altitud con vicuñas salvajes, flamencos y vistas impresionantes de los volcanes Misti y Chachani.',
        distance: '45 km (28 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'tour'],
        bestFor: ['Wildlife', 'Photography', 'Volcanic landscapes'],
        bestForEs: ['Vida silvestre', 'Fotografía', 'Paisajes volcánicos'],
        highlights: ['Wild vicuñas', 'Andean flamingos', 'Volcano views', 'High altitude lakes'],
        highlightsEs: ['Vicuñas salvajes', 'Flamencos andinos', 'Vistas de volcanes', 'Lagos de alta altitud'],
        familyTips: ['Lower altitude than Colca - easier for kids', 'Best wildlife viewing early morning', 'Often visited en route to/from Colca', 'Bring binoculars for flamingo spotting'],
        familyTipsEs: ['Menor altitud que Colca - más fácil para niños', 'Mejor avistamiento de vida silvestre temprano', 'A menudo visitado en ruta a/desde Colca', 'Trae binoculares para avistar flamencos'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      },
      {
        name: 'Sumbay Cave Paintings',
        nameEs: 'Pinturas Rupestres de Sumbay',
        description: 'See 8,000-year-old rock art depicting hunters and animals in a dramatic volcanic landscape.',
        descriptionEs: 'Ve arte rupestre de 8,000 años que representa cazadores y animales en un dramático paisaje volcánico.',
        distance: '90 km (56 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'tour'],
        bestFor: ['Archaeology', 'Off-beaten-path', 'History buffs'],
        bestForEs: ['Arqueología', 'Fuera de lo común', 'Amantes de la historia'],
        highlights: ['Ancient cave paintings', 'Wild landscape', 'Vicuña sightings', 'Cultural history'],
        highlightsEs: ['Pinturas rupestres antiguas', 'Paisaje salvaje', 'Avistamiento de vicuñas', 'Historia cultural'],
        familyTips: ['Good for kids interested in prehistory', 'Often combined with Salinas reserve', 'Remote location - bring snacks/water', 'Fascinating for curious school-age kids'],
        familyTipsEs: ['Bueno para niños interesados en prehistoria', 'A menudo combinado con reserva Salinas', 'Ubicación remota - trae snacks/agua', 'Fascinante para niños curiosos en edad escolar'],
        ageRecommendation: 'Ages 6+',
        ageRecommendationEs: 'Mayores de 6 años',
        difficulty: 'easy'
      },
      {
        name: 'Yura Hot Springs',
        nameEs: 'Baños Termales de Yura',
        description: 'Relax in natural thermal pools just outside Arequipa. A perfect half-day escape for weary travelers.',
        descriptionEs: 'Relájate en piscinas termales naturales justo afuera de Arequipa. Un escape perfecto de medio día para viajeros cansados.',
        distance: '30 km (19 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'taxi'],
        bestFor: ['Relaxation', 'Tired families', 'Easy access'],
        bestForEs: ['Relajación', 'Familias cansadas', 'Fácil acceso'],
        highlights: ['Thermal pools', 'Mountain setting', 'Restaurant facilities', 'Relaxation'],
        highlightsEs: ['Piscinas termales', 'Entorno montañoso', 'Instalaciones de restaurante', 'Relajación'],
        familyTips: ['Great for rest day between activities', 'Bring swimsuits and towels', 'Kid-friendly pool temperatures', 'Good option if Colca seems too intense'],
        familyTipsEs: ['Genial para día de descanso entre actividades', 'Trae trajes de baño y toallas', 'Temperaturas de piscina aptas para niños', 'Buena opción si Colca parece muy intenso'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'puno',
    name: 'Puno / Lake Titicaca',
    nameEs: 'Puno / Lago Titicaca',
    icon: Waves,
    description: 'The world\'s highest navigable lake offers unique cultural experiences on floating islands and in traditional communities.',
    descriptionEs: 'El lago navegable más alto del mundo ofrece experiencias culturales únicas en islas flotantes y comunidades tradicionales.',
    trips: [
      {
        name: 'Uros Floating Islands',
        nameEs: 'Islas Flotantes de los Uros',
        description: 'Visit the famous reed islands built by the Uros people. Walk on floating platforms and ride traditional boats.',
        descriptionEs: 'Visita las famosas islas de totora construidas por el pueblo Uros. Camina sobre plataformas flotantes y monta botes tradicionales.',
        distance: '6 km boat ride',
        duration: '3-4 hours',
        durationEs: '3-4 horas',
        transport: ['boat'],
        bestFor: ['Unique experience', 'Cultural', 'Short trip'],
        bestForEs: ['Experiencia única', 'Cultural', 'Viaje corto'],
        highlights: ['Floating islands', 'Reed boat rides', 'Uros culture', 'Lake views'],
        highlightsEs: ['Islas flotantes', 'Paseos en bote de totora', 'Cultura Uros', 'Vistas del lago'],
        familyTips: ['Kids love the bouncy floating islands!', 'The colorful boats are a hit with children', 'Short trip - manageable for young kids', 'Bring warm clothes - cold on the water'],
        familyTipsEs: ['¡A los niños les encantan las islas flotantes rebotantes!', 'Los botes coloridos son un éxito con los niños', 'Viaje corto - manejable para niños pequeños', 'Trae ropa abrigada - frío en el agua'],
        ageRecommendation: 'All ages',
        ageRecommendationEs: 'Todas las edades',
        difficulty: 'easy'
      },
      {
        name: 'Taquile Island',
        nameEs: 'Isla Taquile',
        description: 'Visit a traditional Quechua-speaking island known for its textiles, spectacular views, and preserved culture.',
        descriptionEs: 'Visita una isla tradicional de habla quechua conocida por sus textiles, vistas espectaculares y cultura preservada.',
        distance: '35 km boat ride',
        duration: 'Full day',
        durationEs: 'Día completo',
        transport: ['boat'],
        bestFor: ['Cultural immersion', 'UNESCO textiles', 'Photography'],
        bestForEs: ['Inmersión cultural', 'Textiles UNESCO', 'Fotografía'],
        highlights: ['Textile traditions', 'Island village', 'Lake panoramas', 'Traditional lunch'],
        highlightsEs: ['Tradiciones textiles', 'Pueblo de la isla', 'Panoramas del lago', 'Almuerzo tradicional'],
        familyTips: ['Involves walking up steps - can be tiring at altitude', 'Pack snacks for the boat ride', 'Traditional lunch included in most tours', 'Best for kids 6+ due to walking'],
        familyTipsEs: ['Involucra subir escalones - puede ser cansado en altitud', 'Empaca snacks para el paseo en bote', 'Almuerzo tradicional incluido en la mayoría de tours', 'Mejor para niños 6+ debido a la caminata'],
        ageRecommendation: 'Ages 6+',
        ageRecommendationEs: 'Mayores de 6 años',
        difficulty: 'moderate'
      },
      {
        name: 'Sillustani Towers',
        nameEs: 'Torres de Sillustani',
        description: 'Ancient funerary towers (chullpas) overlooking Lake Umayo. Pre-Incan history in a stunning lakeside setting.',
        descriptionEs: 'Antiguas torres funerarias (chullpas) con vista al Lago Umayo. Historia pre-Inca en un impresionante entorno junto al lago.',
        distance: '35 km (22 mi)',
        duration: 'Half day',
        durationEs: 'Medio día',
        transport: ['car', 'tour'],
        bestFor: ['Archaeology', 'Lake views', 'Photography'],
        bestForEs: ['Arqueología', 'Vistas del lago', 'Fotografía'],
        highlights: ['Funerary towers', 'Lake Umayo', 'Pre-Incan history', 'Scenic views'],
        highlightsEs: ['Torres funerarias', 'Lago Umayo', 'Historia pre-Inca', 'Vistas panorámicas'],
        familyTips: ['Open site - kids can explore freely', 'Alpacas often roam the area', 'Great sunset tour option', 'Less crowded than lake islands'],
        familyTipsEs: ['Sitio abierto - los niños pueden explorar libremente', 'Las alpacas a menudo deambulan por el área', 'Gran opción de tour al atardecer', 'Menos concurrido que las islas del lago'],
        ageRecommendation: 'Ages 4+',
        ageRecommendationEs: 'Mayores de 4 años',
        difficulty: 'easy'
      },
      {
        name: 'Amantani Island Homestay',
        nameEs: 'Homestay en Isla Amantaní',
        description: 'Stay overnight with a local family on a car-free island. Experience authentic Andean life and traditions.',
        descriptionEs: 'Quédate una noche con una familia local en una isla sin autos. Experimenta la vida y tradiciones andinas auténticas.',
        distance: '40 km boat ride',
        duration: '2 days/1 night',
        durationEs: '2 días/1 noche',
        transport: ['boat'],
        bestFor: ['Authentic experience', 'Cultural immersion', 'Unplugged time'],
        bestForEs: ['Experiencia auténtica', 'Inmersión cultural', 'Tiempo desconectado'],
        highlights: ['Homestay experience', 'Traditional meals', 'Sunset hikes', 'No vehicles/wifi'],
        highlightsEs: ['Experiencia de homestay', 'Comidas tradicionales', 'Caminatas al atardecer', 'Sin vehículos/wifi'],
        familyTips: ['Very basic accommodations - manage expectations', 'Kids will love playing with local children', 'Bring flashlight - limited electricity', 'Great for adventurous families'],
        familyTipsEs: ['Alojamiento muy básico - manejar expectativas', 'A los niños les encantará jugar con niños locales', 'Trae linterna - electricidad limitada', 'Genial para familias aventureras'],
        ageRecommendation: 'Ages 5+',
        ageRecommendationEs: 'Mayores de 5 años',
        difficulty: 'moderate'
      }
    ]
  }
];

const transportIcons: Record<string, React.ElementType> = {
  car: Car,
  bus: Car,
  tour: Users,
  taxi: Car,
  plane: Sun,
  boat: Ship,
  train: Train,
  quad: Bike
};

export default function DayTripsPage() {
  const { locale } = useI18n();
  const [selectedCity, setSelectedCity] = useState<string>('cusco');

  const activeCity = cities.find(c => c.id === selectedCity);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'moderate': return 'bg-yellow-100 text-yellow-700';
      case 'challenging': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyText = (difficulty: string) => {
    const texts: Record<string, { en: string; es: string }> = {
      easy: { en: 'Easy', es: 'Fácil' },
      moderate: { en: 'Moderate', es: 'Moderado' },
      challenging: { en: 'Challenging', es: 'Desafiante' }
    };
    return locale === 'es' ? texts[difficulty]?.es : texts[difficulty]?.en;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Excursiones de un Día' : 'Day Trips'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Las mejores excursiones de un día desde las principales ciudades de Perú - perfectas para familias con niños de todas las edades.'
                : 'The best day trips from Peru\'s major cities - perfect for families with kids of all ages.'}
            </p>
          </div>
        </div>
      </section>

      {/* City Selector */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => {
              const Icon = city.icon;
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedCity === city.id
                      ? 'bg-peru-terracotta text-white shadow-lg scale-105'
                      : 'bg-peru-sand/30 text-gray-700 hover:bg-peru-sand'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{locale === 'es' ? city.nameEs : city.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* City Description */}
      {activeCity && (
        <section className="py-8 bg-peru-sand/20">
          <div className="container-peru">
            <div className="flex items-center gap-4 mb-2">
              {(() => {
                const Icon = activeCity.icon;
                return <Icon className="h-8 w-8 text-peru-terracotta" />;
              })()}
              <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                {locale === 'es' ? `Excursiones desde ${activeCity.nameEs}` : `Day Trips from ${activeCity.name}`}
              </h2>
            </div>
            <p className="text-gray-600 ml-12">
              {locale === 'es' ? activeCity.descriptionEs : activeCity.description}
            </p>
          </div>
        </section>
      )}

      {/* Day Trips List */}
      {activeCity && (
        <section className="py-12 lg:py-16">
          <div className="container-peru">
            <div className="space-y-6">
              {activeCity.trips.map((trip, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold text-peru-earth">
                          {locale === 'es' ? trip.nameEs : trip.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {trip.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {locale === 'es' ? trip.durationEs : trip.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Baby className="h-4 w-4" />
                            {locale === 'es' ? trip.ageRecommendationEs : trip.ageRecommendation}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(trip.difficulty)}`}>
                          {getDifficultyText(trip.difficulty)}
                        </span>
                        <div className="flex gap-1">
                          {trip.transport.map((t, tidx) => {
                            const TransportIcon = transportIcons[t] || Car;
                            return (
                              <span key={tidx} className="p-1.5 bg-peru-sand/30 rounded-lg" title={t}>
                                <TransportIcon className="h-4 w-4 text-peru-earth" />
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4">
                      {locale === 'es' ? trip.descriptionEs : trip.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(locale === 'es' ? trip.highlightsEs : trip.highlights).map((highlight, hidx) => (
                        <span key={hidx} className="bg-peru-gold/20 text-peru-earth text-sm px-3 py-1 rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Best For & Family Tips */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-peru-sand/30 rounded-xl p-4">
                        <h4 className="font-semibold text-peru-earth mb-2 flex items-center gap-2">
                          <Camera className="h-4 w-4" />
                          {locale === 'es' ? 'Mejor Para' : 'Best For'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(locale === 'es' ? trip.bestForEs : trip.bestFor).map((item, bidx) => (
                            <span key={bidx} className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-peru-terracotta/10 rounded-xl p-4">
                        <h4 className="font-semibold text-peru-terracotta mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}
                        </h4>
                        <ul className="space-y-1">
                          {(locale === 'es' ? trip.familyTipsEs : trip.familyTips).map((tip, tidx) => (
                            <li key={tidx} className="text-sm text-gray-600 flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tips Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos para Excursiones con Niños' : 'Day Trip Tips with Kids'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Clock className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Empieza Temprano' : 'Start Early'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'La mayoría de tours salen entre 5-7am. Los niños duermen en el camino y llegan frescos.'
                  : 'Most tours depart between 5-7am. Kids sleep en route and arrive refreshed.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <TreePine className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Empaca Snacks' : 'Pack Snacks'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Lleva snacks familiares, agua y entretenimiento para viajes largos. Los restaurantes pueden estar lejos.'
                  : 'Bring familiar snacks, water, and entertainment for long drives. Restaurants can be far between.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Mountain className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Considera la Altitud' : 'Consider Altitude'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Muchas excursiones pasan por altitudes altas. Asegúrate de que los niños estén aclimatados primero.'
                  : 'Many day trips pass through high altitudes. Make sure kids are acclimatized first.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Quieres un Itinerario Completo?' : 'Want a Complete Itinerary?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Nuestros itinerarios pre-planificados combinan estas excursiones de un día con alojamiento y logística.'
              : 'Our pre-planned itineraries combine these day trips with accommodation and logistics.'}
          </p>
          <a
            href="/itineraries/"
            className="inline-block bg-white text-peru-earth px-8 py-3 rounded-full font-semibold hover:bg-peru-sand transition-colors"
          >
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </a>
        </div>
      </section>
    </main>
  );
}
