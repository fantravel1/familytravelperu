'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Baby,
  Users,
  Bike,
  Mountain,
  Camera,
  Ship,
  Tent,
  Waves,
  TreePine,
  Star,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Clock,
  Heart
} from 'lucide-react';

interface Activity {
  name: string;
  nameEs: string;
  location: string;
  locationEs: string;
  description: string;
  descriptionEs: string;
  duration: string;
  durationEs: string;
  tips: string[];
  tipsEs: string[];
  highlights: string[];
  highlightsEs: string[];
}

interface AgeGroup {
  id: string;
  name: string;
  nameEs: string;
  ageRange: string;
  icon: React.ElementType;
  color: string;
  overview: string;
  overviewEs: string;
  generalTips: string[];
  generalTipsEs: string[];
  bestActivities: Activity[];
  avoidActivities: string[];
  avoidActivitiesEs: string[];
}

const ageGroups: AgeGroup[] = [
  {
    id: 'babies',
    name: 'Babies & Toddlers',
    nameEs: 'Bebés y Niños Pequeños',
    ageRange: '0-3',
    icon: Baby,
    color: 'pink',
    overview: 'Peru is absolutely doable with babies and toddlers! Focus on low-altitude destinations, comfortable transport, and flexible schedules.',
    overviewEs: '¡Perú es totalmente factible con bebés y niños pequeños! Enfócate en destinos de baja altitud, transporte cómodo y horarios flexibles.',
    generalTips: [
      'Consider skipping high altitude (Cusco, Puno) for babies under 1 year',
      'Lima and coastal destinations are ideal for this age group',
      'Book accommodations with cribs and baby-proofed rooms',
      'Bring a good carrier - strollers struggle on cobblestones',
      'Pack familiar foods and plenty of diapers (available but expensive)',
      'Allow extra time in your itinerary for naps and flexibility'
    ],
    generalTipsEs: [
      'Considera omitir gran altitud (Cusco, Puno) para bebés menores de 1 año',
      'Lima y destinos costeros son ideales para este grupo de edad',
      'Reserva alojamientos con cunas y habitaciones a prueba de bebés',
      'Trae un buen portabebés - los cochecitos luchan en adoquines',
      'Empaca alimentos familiares y muchos pañales (disponibles pero caros)',
      'Permite tiempo extra en tu itinerario para siestas y flexibilidad'
    ],
    bestActivities: [
      {
        name: 'Miraflores Malecón Walk',
        nameEs: 'Paseo por el Malecón de Miraflores',
        location: 'Lima',
        locationEs: 'Lima',
        description: 'Stroller-friendly oceanside pathway with parks and playgrounds along the way.',
        descriptionEs: 'Camino costero apto para cochecitos con parques y áreas de juego en el camino.',
        duration: '1-2 hours',
        durationEs: '1-2 horas',
        tips: ['Multiple playgrounds for toddlers', 'Cafes with high chairs nearby', 'Smooth paved paths'],
        tipsEs: ['Múltiples parques para niños pequeños', 'Cafés con sillas altas cerca', 'Caminos pavimentados lisos'],
        highlights: ['Ocean views', 'Paragliders', 'Playgrounds'],
        highlightsEs: ['Vistas al océano', 'Parapentes', 'Parques infantiles']
      },
      {
        name: 'Parque Kennedy',
        nameEs: 'Parque Kennedy',
        location: 'Lima, Miraflores',
        locationEs: 'Lima, Miraflores',
        description: 'A charming park full of friendly cats that toddlers love to watch and gently pet.',
        descriptionEs: 'Un encantador parque lleno de gatos amigables que a los niños les encanta ver y acariciar.',
        duration: '30 min - 1 hour',
        durationEs: '30 min - 1 hora',
        tips: ['Best in late afternoon when cats are active', 'Benches for nursing/feeding', 'Ice cream nearby'],
        tipsEs: ['Mejor en la tarde cuando los gatos están activos', 'Bancas para amamantar/alimentar', 'Helados cerca'],
        highlights: ['Cats!', 'Central location', 'Restaurants nearby'],
        highlightsEs: ['¡Gatos!', 'Ubicación central', 'Restaurantes cerca']
      },
      {
        name: 'Ballestas Islands Boat Tour',
        nameEs: 'Tour en Bote a Islas Ballestas',
        location: 'Paracas',
        locationEs: 'Paracas',
        description: 'Short boat ride to see sea lions, penguins, and seabirds. Exciting for all ages.',
        descriptionEs: 'Corto paseo en bote para ver lobos marinos, pingüinos y aves marinas. Emocionante para todas las edades.',
        duration: '2 hours',
        durationEs: '2 horas',
        tips: ['Bring warm layers - ocean breeze can be cold', 'Hold babies/toddlers securely on boat', 'Book early morning tours'],
        tipsEs: ['Trae capas abrigadas - la brisa marina puede ser fría', 'Sostén a bebés/niños pequeños de forma segura', 'Reserva tours temprano'],
        highlights: ['Sea lions', 'Penguins', 'Wildlife up close'],
        highlightsEs: ['Lobos marinos', 'Pingüinos', 'Vida silvestre de cerca']
      },
      {
        name: 'Beach Time at Paracas',
        nameEs: 'Tiempo de Playa en Paracas',
        location: 'Paracas',
        locationEs: 'Paracas',
        description: 'Calm beaches perfect for letting little ones splash and play in the sand.',
        descriptionEs: 'Playas tranquilas perfectas para que los pequeños chapotéen y jueguen en la arena.',
        duration: 'Half day',
        durationEs: 'Medio día',
        tips: ['La Mina beach has calmer waters', 'Bring shade tent for babies', 'Best in morning before wind picks up'],
        tipsEs: ['Playa La Mina tiene aguas más calmadas', 'Trae tienda de sombra para bebés', 'Mejor en la mañana antes del viento'],
        highlights: ['Safe swimming', 'Soft sand', 'Sea wildlife'],
        highlightsEs: ['Natación segura', 'Arena suave', 'Vida marina']
      }
    ],
    avoidActivities: [
      'High altitude destinations (Cusco, Puno, Rainbow Mountain)',
      'Long bus rides over 4 hours',
      'Strenuous hikes',
      'Amazon jungle lodges in remote areas',
      'Crowded markets without good paths'
    ],
    avoidActivitiesEs: [
      'Destinos de gran altitud (Cusco, Puno, Montaña Arcoíris)',
      'Viajes en bus largos de más de 4 horas',
      'Caminatas extenuantes',
      'Lodges de selva amazónica en áreas remotas',
      'Mercados abarrotados sin buenos caminos'
    ]
  },
  {
    id: 'preschool',
    name: 'Preschoolers',
    nameEs: 'Preescolares',
    ageRange: '4-6',
    icon: Star,
    color: 'yellow',
    overview: 'This is a magical age for Peru travel! Kids are curious, mobile, and young enough to nap but old enough to enjoy adventures.',
    overviewEs: '¡Esta es una edad mágica para viajar a Perú! Los niños son curiosos, móviles, y lo suficientemente pequeños para dormir siesta pero suficientemente grandes para disfrutar aventuras.',
    generalTips: [
      'Cusco is possible with proper acclimatization (2-3 days)',
      'Keep activities short - 2-3 hours max',
      'Mix cultural visits with physical activities',
      'Stay in hotels with pools when possible',
      'Prepare them for llamas and alpacas - they\'ll be everywhere!',
      'Bring coloring books about Peru for downtimes'
    ],
    generalTipsEs: [
      'Cusco es posible con aclimatación apropiada (2-3 días)',
      'Mantén actividades cortas - máximo 2-3 horas',
      'Mezcla visitas culturales con actividades físicas',
      'Quédate en hoteles con piscinas cuando sea posible',
      '¡Prepáralos para llamas y alpacas - estarán por todos lados!',
      'Trae libros para colorear sobre Perú para tiempos muertos'
    ],
    bestActivities: [
      {
        name: 'Llama and Alpaca Farms',
        nameEs: 'Granjas de Llamas y Alpacas',
        location: 'Sacred Valley (Awanacancha)',
        locationEs: 'Valle Sagrado (Awanacancha)',
        description: 'Meet, feed, and photograph llamas and alpacas up close. Some farms let kids help feed them.',
        descriptionEs: 'Conoce, alimenta y fotografía llamas y alpacas de cerca. Algunas granjas permiten a los niños ayudar a alimentarlas.',
        duration: '1-2 hours',
        durationEs: '1-2 horas',
        tips: ['Llamas can spit when scared - teach kids to be gentle', 'Baby alpacas are incredibly soft!', 'Often combined with weaving demonstrations'],
        tipsEs: ['Las llamas pueden escupir cuando se asustan - enseña a los niños a ser gentiles', '¡Las alpacas bebés son increíblemente suaves!', 'A menudo combinado con demostraciones de tejido'],
        highlights: ['Animal encounters', 'Photo ops', 'Learning about textiles'],
        highlightsEs: ['Encuentros con animales', 'Oportunidades de fotos', 'Aprendiendo sobre textiles']
      },
      {
        name: 'Moray Terraces',
        nameEs: 'Terrazas de Moray',
        location: 'Sacred Valley',
        locationEs: 'Valle Sagrado',
        description: 'Ancient circular Incan terraces that look like giant steps - kids love running around them.',
        descriptionEs: 'Antiguas terrazas circulares Incas que parecen escalones gigantes - a los niños les encanta correr por ellas.',
        duration: '1 hour',
        durationEs: '1 hora',
        tips: ['Flat at top, easy walking', 'Great for burning energy', 'Combine with Maras salt mines'],
        tipsEs: ['Plano arriba, caminata fácil', 'Genial para quemar energía', 'Combina con salineras de Maras'],
        highlights: ['Unique shapes', 'Space to run', 'Photo opportunities'],
        highlightsEs: ['Formas únicas', 'Espacio para correr', 'Oportunidades de fotos']
      },
      {
        name: 'Chocolate Making Workshop',
        nameEs: 'Taller de Chocolate',
        location: 'Cusco',
        locationEs: 'Cusco',
        description: 'Learn how chocolate is made from cacao beans and make your own treats to eat!',
        descriptionEs: '¡Aprende cómo se hace el chocolate desde granos de cacao y haz tus propias golosinas para comer!',
        duration: '1.5-2 hours',
        durationEs: '1.5-2 horas',
        tips: ['ChocoMuseo offers kids\' workshops', 'Great rainy day activity', 'Kids eat what they make!'],
        tipsEs: ['ChocoMuseo ofrece talleres para niños', 'Genial actividad para días de lluvia', '¡Los niños comen lo que hacen!'],
        highlights: ['Hands-on activity', 'Chocolate tasting', 'Take home treats'],
        highlightsEs: ['Actividad práctica', 'Degustación de chocolate', 'Llevar golosinas a casa']
      },
      {
        name: 'Uros Floating Islands',
        nameEs: 'Islas Flotantes de los Uros',
        location: 'Lake Titicaca, Puno',
        locationEs: 'Lago Titicaca, Puno',
        description: 'Walk on islands made of reeds! Kids love the bouncy feeling and colorful boats.',
        descriptionEs: '¡Camina sobre islas hechas de totora! A los niños les encanta la sensación rebotante y los botes coloridos.',
        duration: '3-4 hours',
        durationEs: '3-4 horas',
        tips: ['Islands feel spongy - exciting for kids!', 'Colorful boats are fun to ride', 'Bring warm clothes'],
        tipsEs: ['Las islas se sienten esponjosas - ¡emocionante para niños!', 'Los botes coloridos son divertidos', 'Trae ropa abrigada'],
        highlights: ['Unique floating islands', 'Reed boat rides', 'Meeting Uros children'],
        highlightsEs: ['Islas flotantes únicas', 'Paseos en bote de totora', 'Conocer niños Uros']
      }
    ],
    avoidActivities: [
      'Rainbow Mountain (too high, too long)',
      'Multi-day treks',
      'Inca Trail',
      'Remote jungle lodges requiring long boat rides',
      'Museums longer than 1 hour'
    ],
    avoidActivitiesEs: [
      'Montaña Arcoíris (muy alto, muy largo)',
      'Treks de varios días',
      'Camino Inca',
      'Lodges remotos de selva que requieren largos viajes en bote',
      'Museos de más de 1 hora'
    ]
  },
  {
    id: 'kids',
    name: 'School-Age Kids',
    nameEs: 'Niños en Edad Escolar',
    ageRange: '7-12',
    icon: Bike,
    color: 'green',
    overview: 'The perfect age for Peru adventures! Kids can handle more activities, understand history, and create lasting memories of this incredible country.',
    overviewEs: '¡La edad perfecta para aventuras en Perú! Los niños pueden manejar más actividades, entender la historia, y crear recuerdos duraderos de este increíble país.',
    generalTips: [
      'They can do most activities adults can, with modifications',
      'Involve them in planning - let them choose some activities',
      'Challenge them with a travel journal or photo project',
      'Use the trip as a history and geography lesson',
      'They\'ll remember this trip forever - make it special!',
      'Consider hiring kid-friendly guides who engage children'
    ],
    generalTipsEs: [
      'Pueden hacer la mayoría de actividades que los adultos, con modificaciones',
      'Involúcralos en la planificación - déjalos elegir algunas actividades',
      'Desafíalos con un diario de viaje o proyecto de fotos',
      'Usa el viaje como lección de historia y geografía',
      '¡Recordarán este viaje para siempre - hazlo especial!',
      'Considera contratar guías que conecten con niños'
    ],
    bestActivities: [
      {
        name: 'Machu Picchu',
        nameEs: 'Machu Picchu',
        location: 'Aguas Calientes',
        locationEs: 'Aguas Calientes',
        description: 'The iconic citadel is magical for this age group. They can handle the walking and appreciate the history.',
        descriptionEs: 'La icónica ciudadela es mágica para este grupo de edad. Pueden manejar la caminata y apreciar la historia.',
        duration: '4-5 hours',
        durationEs: '4-5 horas',
        tips: ['Start early for fewer crowds', 'Book Huayna Picchu for adventurous kids 12+', 'Train ride is an adventure itself'],
        tipsEs: ['Empieza temprano para menos gente', 'Reserva Huayna Picchu para niños aventureros 12+', 'El viaje en tren es una aventura en sí'],
        highlights: ['Wonder of the world', 'Llamas on site', 'Epic train journey'],
        highlightsEs: ['Maravilla del mundo', 'Llamas en el sitio', 'Épico viaje en tren']
      },
      {
        name: 'Amazon Jungle Lodge',
        nameEs: 'Lodge en la Selva Amazónica',
        location: 'Puerto Maldonado or Iquitos',
        locationEs: 'Puerto Maldonado o Iquitos',
        description: 'Spot monkeys, macaws, and maybe even caimans! Night walks and piranha fishing are unforgettable.',
        descriptionEs: '¡Observa monos, guacamayos y quizás hasta caimanes! Caminatas nocturnas y pesca de pirañas son inolvidables.',
        duration: '3-4 days',
        durationEs: '3-4 días',
        tips: ['Choose family-friendly lodges (Inkaterra, Refugio Amazonas)', 'Kids love piranha fishing', 'Night walks are exciting but stay close'],
        tipsEs: ['Elige lodges familiares (Inkaterra, Refugio Amazonas)', 'A los niños les encanta pescar pirañas', 'Caminatas nocturnas emocionantes pero mantente cerca'],
        highlights: ['Wildlife spotting', 'Piranha fishing', 'Night jungle walks'],
        highlightsEs: ['Avistamiento de vida silvestre', 'Pesca de pirañas', 'Caminatas nocturnas en la selva']
      },
      {
        name: 'Sandboarding at Huacachina',
        nameEs: 'Sandboard en Huacachina',
        location: 'Ica',
        locationEs: 'Ica',
        description: 'Ride dune buggies and slide down massive sand dunes on sandboards. Thrilling adventure!',
        descriptionEs: '¡Monta buggies y deslízate por enormes dunas de arena en sandboards. ¡Aventura emocionante!',
        duration: '2-3 hours',
        durationEs: '2-3 horas',
        tips: ['Goggles highly recommended', 'Hold on tight in the buggy!', 'Sunset tours are magical'],
        tipsEs: ['Gafas muy recomendadas', '¡Agárrate fuerte en el buggy!', 'Tours al atardecer son mágicos'],
        highlights: ['Dune buggy ride', 'Sandboarding', 'Desert oasis views'],
        highlightsEs: ['Paseo en buggy', 'Sandboard', 'Vistas del oasis del desierto']
      },
      {
        name: 'Biking in Sacred Valley',
        nameEs: 'Ciclismo en el Valle Sagrado',
        location: 'Sacred Valley',
        locationEs: 'Valle Sagrado',
        description: 'Mostly downhill rides through stunning scenery with stops at villages and ruins.',
        descriptionEs: 'Recorridos mayormente cuesta abajo a través de paisajes impresionantes con paradas en pueblos y ruinas.',
        duration: '4-6 hours',
        durationEs: '4-6 horas',
        tips: ['Tours provide bikes and helmets', 'Routes can be customized for ability', 'Combine with Maras and Moray'],
        tipsEs: ['Tours proporcionan bicicletas y cascos', 'Las rutas se pueden personalizar', 'Combina con Maras y Moray'],
        highlights: ['Downhill through scenery', 'Village stops', 'Active adventure'],
        highlightsEs: ['Cuesta abajo por paisajes', 'Paradas en pueblos', 'Aventura activa']
      },
      {
        name: 'Colca Canyon Condors',
        nameEs: 'Cóndores del Cañón del Colca',
        location: 'Colca Valley',
        locationEs: 'Valle del Colca',
        description: 'Watch giant Andean condors soar on thermal currents just meters away.',
        descriptionEs: 'Observa cóndores andinos gigantes volar en corrientes térmicas a solo metros de distancia.',
        duration: '2-day trip',
        durationEs: 'Viaje de 2 días',
        tips: ['Requires overnight in Chivay/Colca', 'Early morning for best viewing', 'Bring binoculars'],
        tipsEs: ['Requiere noche en Chivay/Colca', 'Temprano en la mañana para mejor vista', 'Trae binoculares'],
        highlights: ['Condor viewing', 'Deep canyon', 'Traditional villages'],
        highlightsEs: ['Vista de cóndores', 'Cañón profundo', 'Pueblos tradicionales']
      }
    ],
    avoidActivities: [
      'Extreme Rainbow Mountain hike (Palccoyo is better alternative)',
      'Full Inca Trail (shorter treks available)',
      'Long museum visits without interactive elements',
      'Overly packed schedules - leave free time'
    ],
    avoidActivitiesEs: [
      'Caminata extrema a Montaña Arcoíris (Palccoyo es mejor alternativa)',
      'Camino Inca completo (treks más cortos disponibles)',
      'Visitas largas a museos sin elementos interactivos',
      'Horarios muy llenos - deja tiempo libre'
    ]
  },
  {
    id: 'teens',
    name: 'Teenagers',
    nameEs: 'Adolescentes',
    ageRange: '13-17',
    icon: Mountain,
    color: 'blue',
    overview: 'Peru is perfect for teens! They can handle physically demanding activities, appreciate culture, and this trip can be transformative.',
    overviewEs: '¡Perú es perfecto para adolescentes! Pueden manejar actividades físicamente demandantes, apreciar la cultura, y este viaje puede ser transformador.',
    generalTips: [
      'Give them responsibility - let them navigate or plan a day',
      'Include adventure activities they can brag about',
      'Allow some independence in safe areas',
      'Get them off their phones with photo challenges',
      'Consider volunteer opportunities for meaningful engagement',
      'They can handle Rainbow Mountain and more challenging hikes'
    ],
    generalTipsEs: [
      'Dales responsabilidad - déjalos navegar o planear un día',
      'Incluye actividades de aventura de las que puedan presumir',
      'Permite algo de independencia en áreas seguras',
      'Sácalos de sus teléfonos con retos fotográficos',
      'Considera oportunidades de voluntariado para compromiso significativo',
      'Pueden manejar Montaña Arcoíris y caminatas más desafiantes'
    ],
    bestActivities: [
      {
        name: 'Rainbow Mountain',
        nameEs: 'Montaña de Siete Colores',
        location: 'Cusco Region',
        locationEs: 'Región de Cusco',
        description: 'The famous striped mountain at 5,200m. A challenging but Instagram-worthy achievement.',
        descriptionEs: 'La famosa montaña rayada a 5,200m. Un logro desafiante pero digno de Instagram.',
        duration: 'Full day',
        durationEs: 'Día completo',
        tips: ['Acclimatize fully first (minimum 3 days in Cusco)', 'Start very early', 'Horse option available for part of trek'],
        tipsEs: ['Aclimátate completamente primero (mínimo 3 días en Cusco)', 'Empieza muy temprano', 'Opción de caballo disponible para parte del trek'],
        highlights: ['Epic colors', 'Achievement', 'Epic photos'],
        highlightsEs: ['Colores épicos', 'Logro', 'Fotos épicas']
      },
      {
        name: 'Short Inca Trail (2-Day)',
        nameEs: 'Camino Inca Corto (2 Días)',
        location: 'Machu Picchu',
        locationEs: 'Machu Picchu',
        description: 'Hike through Inca ruins and cloud forest to arrive at Machu Picchu through the Sun Gate.',
        descriptionEs: 'Camina por ruinas Incas y bosque nublado para llegar a Machu Picchu por la Puerta del Sol.',
        duration: '2 days',
        durationEs: '2 días',
        tips: ['Book months in advance', 'Moderate fitness required', 'Camping gear provided'],
        tipsEs: ['Reserva con meses de anticipación', 'Se requiere condición física moderada', 'Equipo de camping proporcionado'],
        highlights: ['Sun Gate entrance', 'Inca ruins along trail', 'Overnight camping'],
        highlightsEs: ['Entrada por Puerta del Sol', 'Ruinas Incas en el camino', 'Camping nocturno']
      },
      {
        name: 'Surfing at Máncora',
        nameEs: 'Surf en Máncora',
        location: 'Northern Coast',
        locationEs: 'Costa Norte',
        description: 'Learn to surf or improve skills at Peru\'s best beach destination.',
        descriptionEs: 'Aprende a surfear o mejora habilidades en el mejor destino de playa de Perú.',
        duration: '3-5 days',
        durationEs: '3-5 días',
        tips: ['Consistent waves for all levels', 'Multiple surf schools available', 'Great beach town vibe'],
        tipsEs: ['Olas consistentes para todos los niveles', 'Múltiples escuelas de surf disponibles', 'Gran ambiente de pueblo de playa'],
        highlights: ['Learning to surf', 'Beach time', 'Beach town culture'],
        highlightsEs: ['Aprender a surfear', 'Tiempo de playa', 'Cultura de pueblo playero']
      },
      {
        name: 'Huayna Picchu Hike',
        nameEs: 'Caminata a Huayna Picchu',
        location: 'Machu Picchu',
        locationEs: 'Machu Picchu',
        description: 'The steep mountain behind Machu Picchu with incredible views. Challenging and rewarding.',
        descriptionEs: 'La empinada montaña detrás de Machu Picchu con vistas increíbles. Desafiante y gratificante.',
        duration: '2-3 hours additional',
        durationEs: '2-3 horas adicionales',
        tips: ['Book well in advance - limited permits', 'Steep with some scrambling', 'Not for those afraid of heights'],
        tipsEs: ['Reserva con anticipación - permisos limitados', 'Empinada con algo de escalada', 'No para quienes temen las alturas'],
        highlights: ['Epic views', 'Physical challenge', 'Bragging rights'],
        highlightsEs: ['Vistas épicas', 'Desafío físico', 'Derecho a presumir']
      },
      {
        name: 'Paragliding in Lima',
        nameEs: 'Parapente en Lima',
        location: 'Miraflores, Lima',
        locationEs: 'Miraflores, Lima',
        description: 'Tandem paragliding over the Lima coastline with stunning Pacific views.',
        descriptionEs: 'Parapente en tándem sobre la costa de Lima con impresionantes vistas del Pacífico.',
        duration: '20-30 minutes',
        durationEs: '20-30 minutos',
        tips: ['Minimum age usually 14+', 'No experience needed', 'Book at Parque del Amor launch site'],
        tipsEs: ['Edad mínima usualmente 14+', 'No se necesita experiencia', 'Reserva en el sitio de lanzamiento del Parque del Amor'],
        highlights: ['Flying over ocean', 'Adrenaline rush', 'Amazing photos'],
        highlightsEs: ['Volar sobre el océano', 'Descarga de adrenalina', 'Fotos increíbles']
      }
    ],
    avoidActivities: [
      'Overly curated or "sanitized" experiences',
      'Too many churches/museums without action breaks',
      'Rigid schedules without downtime',
      'Group tours designed for seniors'
    ],
    avoidActivitiesEs: [
      'Experiencias demasiado curadas o "sanitizadas"',
      'Demasiadas iglesias/museos sin descansos de acción',
      'Horarios rígidos sin tiempo libre',
      'Tours grupales diseñados para personas mayores'
    ]
  }
];

export default function ActivitiesByAgePage() {
  const { locale } = useI18n();
  const [selectedAge, setSelectedAge] = useState<string>('kids');

  const activeGroup = ageGroups.find(g => g.id === selectedAge);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Actividades por Edad' : 'Activities by Age'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Encuentra las mejores actividades en Perú para cada etapa de la infancia - desde bebés hasta adolescentes.'
                : 'Find the best Peru activities for every stage of childhood - from babies to teens.'}
            </p>
          </div>
        </div>
      </section>

      {/* Age Group Selector */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-3">
            {ageGroups.map((group) => {
              const Icon = group.icon;
              return (
                <button
                  key={group.id}
                  onClick={() => setSelectedAge(group.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedAge === group.id
                      ? 'bg-peru-terracotta text-white shadow-lg scale-105'
                      : 'bg-peru-sand/30 text-gray-700 hover:bg-peru-sand'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <span className="block">{locale === 'es' ? group.nameEs : group.name}</span>
                    <span className="text-xs opacity-75">{locale === 'es' ? 'Años' : 'Ages'} {group.ageRange}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Age Group Content */}
      {activeGroup && (
        <>
          {/* Overview */}
          <section className="py-12 lg:py-16">
            <div className="container-peru">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = activeGroup.icon;
                    return <Icon className="h-12 w-12 text-peru-terracotta" />;
                  })()}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                      {locale === 'es' ? activeGroup.nameEs : activeGroup.name}
                    </h2>
                    <p className="text-gray-500">{locale === 'es' ? 'Edades' : 'Ages'} {activeGroup.ageRange}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {locale === 'es' ? activeGroup.overviewEs : activeGroup.overview}
                </p>

                {/* General Tips */}
                <div className="bg-peru-sand/30 rounded-xl p-5">
                  <h3 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-peru-terracotta" />
                    {locale === 'es' ? 'Consejos Generales' : 'General Tips'}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {(locale === 'es' ? activeGroup.generalTipsEs : activeGroup.generalTips).map((tip, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Best Activities */}
              <h3 className="text-2xl font-bold text-peru-earth mb-6 text-center">
                {locale === 'es' ? 'Mejores Actividades' : 'Best Activities'}
              </h3>
              <div className="grid gap-6 mb-8">
                {activeGroup.bestActivities.map((activity, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-peru-earth">
                            {locale === 'es' ? activity.nameEs : activity.name}
                          </h4>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {locale === 'es' ? activity.locationEs : activity.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {locale === 'es' ? activity.durationEs : activity.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {(locale === 'es' ? activity.highlightsEs : activity.highlights).map((highlight, hidx) => (
                            <span key={hidx} className="bg-peru-gold/20 text-peru-earth text-xs px-2 py-1 rounded-full">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        {locale === 'es' ? activity.descriptionEs : activity.description}
                      </p>
                      <div className="bg-peru-sand/30 rounded-lg p-3">
                        <p className="text-sm font-semibold text-peru-earth mb-2">
                          {locale === 'es' ? 'Consejos:' : 'Tips:'}
                        </p>
                        <ul className="flex flex-wrap gap-x-4 gap-y-1">
                          {(locale === 'es' ? activity.tipsEs : activity.tips).map((tip, tidx) => (
                            <li key={tidx} className="text-sm text-gray-600 flex items-center gap-1">
                              <Star className="h-3 w-3 text-peru-gold" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activities to Avoid */}
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  {locale === 'es' ? 'Actividades a Evitar para Este Grupo de Edad' : 'Activities to Avoid for This Age Group'}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {(locale === 'es' ? activeGroup.avoidActivitiesEs : activeGroup.avoidActivities).map((activity, idx) => (
                    <li key={idx} className="text-red-700 flex items-start gap-2">
                      <span className="text-red-500 mt-1">✕</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Listo para Planificar?' : 'Ready to Plan?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Consulta nuestros itinerarios pre-planificados con actividades apropiadas para cada edad.'
              : 'Check out our pre-planned itineraries with age-appropriate activities built in.'}
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
