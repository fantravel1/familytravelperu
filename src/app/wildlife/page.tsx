'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Bird,
  TreePine,
  Waves,
  Mountain,
  Camera,
  MapPin,
  Star,
  CheckCircle,
  Clock,
  Eye,
  Baby,
  AlertTriangle,
  Search
} from 'lucide-react';

interface Animal {
  name: string;
  nameEs: string;
  scientificName: string;
  description: string;
  descriptionEs: string;
  bestTime: string;
  bestTimeEs: string;
  difficulty: 'common' | 'likely' | 'rare';
  kidFriendly: boolean;
  tips: string[];
  tipsEs: string[];
}

interface Region {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  color: string;
  description: string;
  descriptionEs: string;
  bestLocations: string[];
  bestLocationsEs: string[];
  bestMonths: string;
  bestMonthsEs: string;
  animals: Animal[];
}

const regions: Region[] = [
  {
    id: 'amazon',
    name: 'Amazon Rainforest',
    nameEs: 'Selva Amazónica',
    icon: TreePine,
    color: 'green',
    description: 'The Amazon is Peru\'s wildlife paradise. Home to over 1,800 bird species and countless mammals, reptiles, and insects.',
    descriptionEs: 'La Amazonía es el paraíso de vida silvestre de Perú. Hogar de más de 1,800 especies de aves e innumerables mamíferos, reptiles e insectos.',
    bestLocations: ['Tambopata National Reserve', 'Manu National Park', 'Pacaya-Samiria Reserve', 'Iquitos area lodges'],
    bestLocationsEs: ['Reserva Nacional Tambopata', 'Parque Nacional Manu', 'Reserva Pacaya-Samiria', 'Lodges del área de Iquitos'],
    bestMonths: 'May-October (dry season)',
    bestMonthsEs: 'Mayo-Octubre (temporada seca)',
    animals: [
      {
        name: 'Howler Monkeys',
        nameEs: 'Monos Aulladores',
        scientificName: 'Alouatta',
        description: 'Their morning calls can be heard for miles! Easy to spot in the canopy, especially at dawn.',
        descriptionEs: '¡Sus llamados matutinos se escuchan por kilómetros! Fáciles de ver en el dosel, especialmente al amanecer.',
        bestTime: 'Early morning (5-7am)',
        bestTimeEs: 'Temprano en la mañana (5-7am)',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Listen for their roaring calls', 'Look up in large trees', 'Often in family groups'],
        tipsEs: ['Escucha sus llamados rugientes', 'Mira hacia arriba en árboles grandes', 'A menudo en grupos familiares']
      },
      {
        name: 'Squirrel Monkeys',
        nameEs: 'Monos Ardilla',
        scientificName: 'Saimiri',
        description: 'Small, adorable monkeys that travel in large troops. Kids love watching them jump from tree to tree!',
        descriptionEs: '¡Monos pequeños y adorables que viajan en grandes grupos. A los niños les encanta verlos saltar de árbol en árbol!',
        bestTime: 'Morning and late afternoon',
        bestTimeEs: 'Mañana y tarde',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Travel in groups of 30-100', 'Very active and playful', 'Often near rivers'],
        tipsEs: ['Viajan en grupos de 30-100', 'Muy activos y juguetones', 'A menudo cerca de ríos']
      },
      {
        name: 'Giant River Otters',
        nameEs: 'Nutrias Gigantes',
        scientificName: 'Pteronura brasiliensis',
        description: 'The world\'s largest otters - up to 6 feet long! Highly social and vocal. A must-see in the Amazon.',
        descriptionEs: '¡Las nutrias más grandes del mundo - hasta 1.8 metros de largo! Muy sociales y vocales. Imprescindible en la Amazonía.',
        bestTime: 'Morning, near oxbow lakes',
        bestTimeEs: 'Mañana, cerca de cochas',
        difficulty: 'likely',
        kidFriendly: true,
        tips: ['Look for family groups in calm lakes', 'They\'re very curious and may approach boats', 'Listen for their whistling calls'],
        tipsEs: ['Busca grupos familiares en lagos tranquilos', 'Son muy curiosos y pueden acercarse a los botes', 'Escucha sus llamados silbantes']
      },
      {
        name: 'Macaws',
        nameEs: 'Guacamayos',
        scientificName: 'Ara',
        description: 'Stunning red, blue, and green parrots. Clay licks attract hundreds at dawn - spectacular!',
        descriptionEs: 'Impresionantes loros rojos, azules y verdes. Las colpas atraen cientos al amanecer - ¡espectacular!',
        bestTime: 'Dawn at clay licks (5-9am)',
        bestTimeEs: 'Amanecer en colpas (5-9am)',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Visit clay licks (colpas) early morning', 'Tambopata has famous clay licks', 'Bring binoculars for best views'],
        tipsEs: ['Visita colpas temprano en la mañana', 'Tambopata tiene colpas famosas', 'Trae binoculares para mejores vistas']
      },
      {
        name: 'Caimans',
        nameEs: 'Caimanes',
        scientificName: 'Caiman crocodilus',
        description: 'Crocodilian relatives found in rivers and lakes. Night canoe trips reveal their glowing eyes!',
        descriptionEs: '¡Parientes de los cocodrilos encontrados en ríos y lagos. Los paseos nocturnos en canoa revelan sus ojos brillantes!',
        bestTime: 'Night tours',
        bestTimeEs: 'Tours nocturnos',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Night canoe trips are best', 'Look for eye shine with flashlights', 'Usually harmless to humans'],
        tipsEs: ['Los paseos nocturnos en canoa son mejores', 'Busca el brillo de los ojos con linternas', 'Usualmente inofensivos para humanos']
      },
      {
        name: 'Capybara',
        nameEs: 'Capibara',
        scientificName: 'Hydrochoerus hydrochaeris',
        description: 'The world\'s largest rodent! Gentle giants often seen grazing along riverbanks.',
        descriptionEs: '¡El roedor más grande del mundo! Gigantes gentiles a menudo vistos pastando a lo largo de las orillas.',
        bestTime: 'Early morning, late afternoon',
        bestTimeEs: 'Temprano en la mañana, tarde',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Often in groups near water', 'Very calm and approachable', 'Great photo opportunities'],
        tipsEs: ['A menudo en grupos cerca del agua', 'Muy calmados y accesibles', 'Grandes oportunidades de fotos']
      },
      {
        name: 'Pink River Dolphins',
        nameEs: 'Delfines Rosados',
        scientificName: 'Inia geoffrensis',
        description: 'Unique freshwater dolphins with pink coloring. Mystical creatures of Amazon legends.',
        descriptionEs: 'Delfines de agua dulce únicos con coloración rosada. Criaturas místicas de las leyendas amazónicas.',
        bestTime: 'Dawn and dusk, calm waters',
        bestTimeEs: 'Amanecer y atardecer, aguas calmadas',
        difficulty: 'likely',
        kidFriendly: true,
        tips: ['More pink in older males', 'Very shy - watch quietly', 'Common near Iquitos'],
        tipsEs: ['Más rosados en machos mayores', 'Muy tímidos - observa en silencio', 'Comunes cerca de Iquitos']
      },
      {
        name: 'Jaguars',
        nameEs: 'Jaguares',
        scientificName: 'Panthera onca',
        description: 'The elusive king of the Amazon. Sightings are rare but unforgettable.',
        descriptionEs: 'El elusivo rey de la Amazonía. Los avistamientos son raros pero inolvidables.',
        bestTime: 'Dawn and dusk, dry season',
        bestTimeEs: 'Amanecer y atardecer, temporada seca',
        difficulty: 'rare',
        kidFriendly: true,
        tips: ['Best chances in Manu or remote areas', 'Look for tracks and scratch marks', 'Camera traps often catch what eyes miss'],
        tipsEs: ['Mejores oportunidades en Manu o áreas remotas', 'Busca huellas y marcas de garras', 'Las cámaras trampa a menudo captan lo que los ojos pierden']
      },
      {
        name: 'Tarantulas',
        nameEs: 'Tarántulas',
        scientificName: 'Theraphosidae',
        description: 'Large, hairy spiders that kids either love or fear! Night walks often reveal them.',
        descriptionEs: '¡Arañas grandes y peludas que a los niños les encanta o temen! Los paseos nocturnos a menudo las revelan.',
        bestTime: 'Night walks',
        bestTimeEs: 'Paseos nocturnos',
        difficulty: 'common',
        kidFriendly: false,
        tips: ['Guides know where to find them', 'They\'re docile and rarely bite', 'Great for brave kids!'],
        tipsEs: ['Los guías saben dónde encontrarlas', 'Son dóciles y rara vez muerden', '¡Genial para niños valientes!']
      }
    ]
  },
  {
    id: 'coast',
    name: 'Pacific Coast',
    nameEs: 'Costa del Pacífico',
    icon: Waves,
    color: 'blue',
    description: 'Peru\'s coast hosts incredible marine wildlife including sea lions, penguins, and migrating whales.',
    descriptionEs: 'La costa de Perú alberga increíble vida marina incluyendo lobos marinos, pingüinos y ballenas migratorias.',
    bestLocations: ['Ballestas Islands (Paracas)', 'Paracas National Reserve', 'Punta San Juan', 'Máncora'],
    bestLocationsEs: ['Islas Ballestas (Paracas)', 'Reserva Nacional de Paracas', 'Punta San Juan', 'Máncora'],
    bestMonths: 'Year-round (whales Aug-Oct)',
    bestMonthsEs: 'Todo el año (ballenas Ago-Oct)',
    animals: [
      {
        name: 'South American Sea Lions',
        nameEs: 'Lobos Marinos Sudamericanos',
        scientificName: 'Otaria flavescens',
        description: 'Thousands gather on rocks and beaches. Watch males barking and posturing - very entertaining!',
        descriptionEs: '¡Miles se reúnen en rocas y playas. Observa a los machos ladrando y posando - muy entretenido!',
        bestTime: 'Morning boat tours',
        bestTimeEs: 'Tours en bote por la mañana',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Ballestas Islands has huge colonies', 'Very active and fun to watch', 'Can smell them before you see them!'],
        tipsEs: ['Las Islas Ballestas tienen grandes colonias', 'Muy activos y divertidos de ver', '¡Puedes olerlos antes de verlos!']
      },
      {
        name: 'Humboldt Penguins',
        nameEs: 'Pingüinos de Humboldt',
        scientificName: 'Spheniscus humboldti',
        description: 'Yes, penguins in Peru! These endangered cuties live along the cool Peruvian coast.',
        descriptionEs: '¡Sí, pingüinos en Perú! Estos lindos en peligro viven a lo largo de la fresca costa peruana.',
        bestTime: 'Morning, Ballestas Islands',
        bestTimeEs: 'Mañana, Islas Ballestas',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Ballestas Islands is best spot', 'Look for them on rocky outcrops', 'Kids love spotting them!'],
        tipsEs: ['Las Islas Ballestas es el mejor lugar', 'Búscalos en afloramientos rocosos', '¡A los niños les encanta avistarlos!']
      },
      {
        name: 'Pelicans',
        nameEs: 'Pelícanos',
        scientificName: 'Pelecanus thagus',
        description: 'Huge pelicans dive spectacularly for fish. Watch them plunge from impressive heights!',
        descriptionEs: '¡Enormes pelícanos se zambullen espectacularmente por peces. Míralos caer desde alturas impresionantes!',
        bestTime: 'Anytime along coast',
        bestTimeEs: 'Cualquier momento en la costa',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Watch them dive for fish', 'Common at fishing ports', 'Often seen from shore'],
        tipsEs: ['Míralos zambullirse por peces', 'Comunes en puertos pesqueros', 'A menudo vistos desde la costa']
      },
      {
        name: 'Humpback Whales',
        nameEs: 'Ballenas Jorobadas',
        scientificName: 'Megaptera novaeangliae',
        description: 'Migrating whales pass through Peruvian waters. Breaching and tail slapping is magical!',
        descriptionEs: '¡Ballenas migratorias pasan por aguas peruanas. Los saltos y golpes de cola son mágicos!',
        bestTime: 'August-October',
        bestTimeEs: 'Agosto-Octubre',
        difficulty: 'likely',
        kidFriendly: true,
        tips: ['Best from Máncora (north)', 'Also seen from Paracas', 'Book whale watching tours'],
        tipsEs: ['Mejor desde Máncora (norte)', 'También vistas desde Paracas', 'Reserva tours de avistamiento de ballenas']
      },
      {
        name: 'Sea Turtles',
        nameEs: 'Tortugas Marinas',
        scientificName: 'Cheloniidae',
        description: 'Green and Hawksbill turtles swim in Peruvian waters. Sometimes seen while snorkeling.',
        descriptionEs: 'Tortugas verdes y carey nadan en aguas peruanas. A veces vistas mientras buceas.',
        bestTime: 'Summer months (Dec-Mar)',
        bestTimeEs: 'Meses de verano (Dic-Mar)',
        difficulty: 'rare',
        kidFriendly: true,
        tips: ['Best chances while snorkeling', 'Northern beaches are better', 'Don\'t touch or chase them'],
        tipsEs: ['Mejores oportunidades buceando', 'Las playas del norte son mejores', 'No las toques ni persigas']
      },
      {
        name: 'Boobies & Cormorants',
        nameEs: 'Piqueros y Cormoranes',
        scientificName: 'Sula / Phalacrocorax',
        description: 'Thousands of seabirds nest on coastal islands. Blue-footed boobies are a highlight!',
        descriptionEs: '¡Miles de aves marinas anidan en islas costeras. Los piqueros de patas azules son lo más destacado!',
        bestTime: 'Year-round',
        bestTimeEs: 'Todo el año',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Ballestas has huge colonies', 'Look for blue-footed boobies', 'The smell is intense but worth it!'],
        tipsEs: ['Ballestas tiene enormes colonias', 'Busca piqueros de patas azules', '¡El olor es intenso pero vale la pena!']
      }
    ]
  },
  {
    id: 'highlands',
    name: 'Andean Highlands',
    nameEs: 'Tierras Altas Andinas',
    icon: Mountain,
    color: 'amber',
    description: 'The high Andes are home to iconic species like condors, vicuñas, and the world\'s largest hummingbirds.',
    descriptionEs: 'Los altos Andes son hogar de especies icónicas como cóndores, vicuñas y los colibríes más grandes del mundo.',
    bestLocations: ['Colca Canyon', 'Salinas y Aguada Blanca Reserve', 'Sacred Valley', 'Lake Titicaca area'],
    bestLocationsEs: ['Cañón del Colca', 'Reserva Salinas y Aguada Blanca', 'Valle Sagrado', 'Área del Lago Titicaca'],
    bestMonths: 'April-November (dry season)',
    bestMonthsEs: 'Abril-Noviembre (temporada seca)',
    animals: [
      {
        name: 'Andean Condor',
        nameEs: 'Cóndor Andino',
        scientificName: 'Vultur gryphus',
        description: 'The world\'s largest flying bird with 10-foot wingspan! Watching them soar on thermals is unforgettable.',
        descriptionEs: '¡El ave voladora más grande del mundo con envergadura de 3 metros! Verlos planear en las térmicas es inolvidable.',
        bestTime: 'Early morning (7-10am)',
        bestTimeEs: 'Temprano en la mañana (7-10am)',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Colca Canyon Cruz del Condor is best spot', 'Arrive by 7am', 'They ride thermal currents close to viewpoint'],
        tipsEs: ['Cruz del Cóndor en el Cañón del Colca es el mejor lugar', 'Llega para las 7am', 'Aprovechan las corrientes térmicas cerca del mirador']
      },
      {
        name: 'Vicuñas',
        nameEs: 'Vicuñas',
        scientificName: 'Vicugna vicugna',
        description: 'Wild relatives of llamas with incredibly soft wool. Graceful and shy, they roam in herds.',
        descriptionEs: 'Parientes salvajes de las llamas con lana increíblemente suave. Gráciles y tímidos, deambulan en manadas.',
        bestTime: 'Morning, open highlands',
        bestTimeEs: 'Mañana, altiplano abierto',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Salinas y Aguada Blanca Reserve has many', 'Keep distance - they\'re wild', 'Often seen on high passes'],
        tipsEs: ['La Reserva Salinas y Aguada Blanca tiene muchas', 'Mantén distancia - son salvajes', 'A menudo vistas en pasos altos']
      },
      {
        name: 'Llamas & Alpacas',
        nameEs: 'Llamas y Alpacas',
        scientificName: 'Lama glama / Vicugna pacos',
        description: 'The iconic Andean camelids! Domesticated for thousands of years, they\'re everywhere in the highlands.',
        descriptionEs: '¡Los icónicos camélidos andinos! Domesticados por miles de años, están en todos lados en las tierras altas.',
        bestTime: 'Anytime in highlands',
        bestTimeEs: 'Cualquier momento en las tierras altas',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Alpacas are fluffier, llamas larger', 'Many farms allow feeding/petting', 'They may spit if annoyed!'],
        tipsEs: ['Las alpacas son más esponjosas, las llamas más grandes', 'Muchas granjas permiten alimentar/acariciar', '¡Pueden escupir si se molestan!']
      },
      {
        name: 'Andean Flamingos',
        nameEs: 'Flamencos Andinos',
        scientificName: 'Phoenicoparrus andinus',
        description: 'Pink flamingos at over 4,000m altitude! They wade in high-altitude salt lakes.',
        descriptionEs: '¡Flamencos rosados a más de 4,000m de altitud! Caminan en lagos de sal de alta altitud.',
        bestTime: 'Morning, year-round',
        bestTimeEs: 'Mañana, todo el año',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Salinas Reserve near Arequipa', 'Also Lake Titicaca area', 'Bring binoculars'],
        tipsEs: ['Reserva Salinas cerca de Arequipa', 'También área del Lago Titicaca', 'Trae binoculares']
      },
      {
        name: 'Giant Hummingbird',
        nameEs: 'Colibrí Gigante',
        scientificName: 'Patagona gigas',
        description: 'The world\'s largest hummingbird - the size of a sparrow! Found in highland gardens.',
        descriptionEs: '¡El colibrí más grande del mundo - del tamaño de un gorrión! Encontrado en jardines de tierras altas.',
        bestTime: 'Morning, flowering gardens',
        bestTimeEs: 'Mañana, jardines floridos',
        difficulty: 'likely',
        kidFriendly: true,
        tips: ['Look in hotel gardens in Cusco/Arequipa', 'Much larger than other hummingbirds', 'Hovers at flowers like all hummers'],
        tipsEs: ['Busca en jardines de hoteles en Cusco/Arequipa', 'Mucho más grande que otros colibríes', 'Se suspende en las flores como todos los colibríes']
      },
      {
        name: 'Spectacled Bear',
        nameEs: 'Oso de Anteojos',
        scientificName: 'Tremarctos ornatus',
        description: 'South America\'s only bear! Lives in cloud forests and high valleys. Very rare to spot.',
        descriptionEs: '¡El único oso de Sudamérica! Vive en bosques nublados y valles altos. Muy raro de avistar.',
        bestTime: 'Dawn/dusk, cloud forest edges',
        bestTimeEs: 'Amanecer/atardecer, bordes de bosque nublado',
        difficulty: 'rare',
        kidFriendly: true,
        tips: ['Best chances in Machu Picchu area', 'They\'re shy and elusive', 'Camera traps have better luck'],
        tipsEs: ['Mejores oportunidades en área de Machu Picchu', 'Son tímidos y elusivos', 'Las cámaras trampa tienen mejor suerte']
      },
      {
        name: 'Vizcacha',
        nameEs: 'Vizcacha',
        scientificName: 'Lagidium viscacia',
        description: 'Adorable rabbit-like rodents that sunbathe on rocks. Kids love their long, curly ears!',
        descriptionEs: '¡Adorables roedores parecidos a conejos que toman sol en las rocas. A los niños les encantan sus largas orejas rizadas!',
        bestTime: 'Morning, sunny rocks',
        bestTimeEs: 'Mañana, rocas soleadas',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Look at Machu Picchu ruins', 'Often at Sacsayhuamán too', 'They sit very still - look carefully!'],
        tipsEs: ['Busca en las ruinas de Machu Picchu', 'A menudo también en Sacsayhuamán', '¡Se quedan muy quietos - mira con cuidado!']
      }
    ]
  },
  {
    id: 'titicaca',
    name: 'Lake Titicaca',
    nameEs: 'Lago Titicaca',
    icon: Bird,
    color: 'indigo',
    description: 'The world\'s highest navigable lake hosts unique birds, frogs, and aquatic life found nowhere else.',
    descriptionEs: 'El lago navegable más alto del mundo alberga aves únicas, ranas y vida acuática que no se encuentra en ningún otro lugar.',
    bestLocations: ['Uros Islands', 'Taquile Island', 'Amantani', 'Sillustani area'],
    bestLocationsEs: ['Islas Uros', 'Isla Taquile', 'Amantaní', 'Área de Sillustani'],
    bestMonths: 'April-October (dry season)',
    bestMonthsEs: 'Abril-Octubre (temporada seca)',
    animals: [
      {
        name: 'Titicaca Grebe',
        nameEs: 'Zambullidor del Titicaca',
        scientificName: 'Rollandia microptera',
        description: 'A flightless grebe found only on Lake Titicaca! Endangered and special to spot.',
        descriptionEs: '¡Un zambullidor no volador encontrado solo en el Lago Titicaca! En peligro y especial de avistar.',
        bestTime: 'Morning boat trips',
        bestTimeEs: 'Paseos en bote por la mañana',
        difficulty: 'likely',
        kidFriendly: true,
        tips: ['Can\'t fly - only found here', 'Look in reed beds', 'Ask boat captain to point them out'],
        tipsEs: ['No puede volar - solo se encuentra aquí', 'Busca en los totorales', 'Pide al capitán del bote que los señale']
      },
      {
        name: 'Giant Titicaca Frog',
        nameEs: 'Rana Gigante del Titicaca',
        scientificName: 'Telmatobius culeus',
        description: 'A critically endangered giant frog with extremely saggy skin that lives underwater.',
        descriptionEs: 'Una rana gigante en peligro crítico con piel extremadamente flácida que vive bajo el agua.',
        bestTime: 'Rarely seen (underwater)',
        bestTimeEs: 'Raramente vista (bajo el agua)',
        difficulty: 'rare',
        kidFriendly: true,
        tips: ['Lives only in Lake Titicaca', 'Very rarely seen by visitors', 'Some conservation centers have them'],
        tipsEs: ['Vive solo en el Lago Titicaca', 'Muy raramente vista por visitantes', 'Algunos centros de conservación las tienen']
      },
      {
        name: 'Andean Gulls',
        nameEs: 'Gaviotas Andinas',
        scientificName: 'Chroicocephalus serranus',
        description: 'High-altitude gulls that follow boats and hang around the islands.',
        descriptionEs: 'Gaviotas de alta altitud que siguen a los botes y merodean las islas.',
        bestTime: 'Anytime on the lake',
        bestTimeEs: 'Cualquier momento en el lago',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Very common around boats', 'Not shy', 'Kids enjoy watching them follow boats'],
        tipsEs: ['Muy comunes alrededor de los botes', 'No son tímidas', 'A los niños les gusta verlas seguir los botes']
      },
      {
        name: 'Puna Ibis',
        nameEs: 'Ibis de la Puna',
        scientificName: 'Plegadis ridgwayi',
        description: 'Dark ibis with a curved beak, often seen wading in shallow lake areas.',
        descriptionEs: 'Ibis oscuro con pico curvo, a menudo visto vadeando en áreas poco profundas del lago.',
        bestTime: 'Morning, shallow areas',
        bestTimeEs: 'Mañana, áreas poco profundas',
        difficulty: 'common',
        kidFriendly: true,
        tips: ['Look in shallow wetlands', 'Often in small groups', 'Distinctive curved beak'],
        tipsEs: ['Busca en humedales poco profundos', 'A menudo en grupos pequeños', 'Pico curvo distintivo']
      }
    ]
  }
];

export default function WildlifePage() {
  const { locale } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState<string>('amazon');

  const activeRegion = regions.find(r => r.id === selectedRegion);

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'common':
        return {
          label: locale === 'es' ? 'Fácil de ver' : 'Easy to spot',
          color: 'bg-green-100 text-green-700'
        };
      case 'likely':
        return {
          label: locale === 'es' ? 'Probable' : 'Likely',
          color: 'bg-yellow-100 text-yellow-700'
        };
      case 'rare':
        return {
          label: locale === 'es' ? 'Raro' : 'Rare',
          color: 'bg-red-100 text-red-700'
        };
      default:
        return { label: '', color: '' };
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Search className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Guía de Vida Silvestre' : 'Wildlife Spotting Guide'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Descubre la increíble vida silvestre de Perú - desde jaguares de la selva hasta pingüinos de la costa y cóndores de los Andes.'
                : 'Discover Peru\'s incredible wildlife - from jungle jaguars to coastal penguins and Andean condors.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Bird className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">1,800+</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Especies de aves' : 'Bird species'}
              </p>
            </div>
            <div className="p-4">
              <TreePine className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">500+</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Especies de mamíferos' : 'Mammal species'}
              </p>
            </div>
            <div className="p-4">
              <Mountain className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">3</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Ecosistemas principales' : 'Major ecosystems'}
              </p>
            </div>
            <div className="p-4">
              <Camera className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">∞</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Oportunidades de fotos' : 'Photo opportunities'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Region Selector */}
      <section className="py-8 bg-peru-sand/20 border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map((region) => {
              const Icon = region.icon;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-peru-terracotta text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-peru-sand shadow'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{locale === 'es' ? region.nameEs : region.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Region Content */}
      {activeRegion && (
        <>
          {/* Region Overview */}
          <section className="py-12 lg:py-16">
            <div className="container-peru">
              <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = activeRegion.icon;
                    return <Icon className="h-12 w-12 text-peru-terracotta" />;
                  })()}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                      {locale === 'es' ? activeRegion.nameEs : activeRegion.name}
                    </h2>
                    <p className="text-gray-500">
                      <Clock className="h-4 w-4 inline mr-1" />
                      {locale === 'es' ? activeRegion.bestMonthsEs : activeRegion.bestMonths}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  {locale === 'es' ? activeRegion.descriptionEs : activeRegion.description}
                </p>

                {/* Best Locations */}
                <div className="bg-peru-sand/30 rounded-xl p-5">
                  <h3 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-peru-terracotta" />
                    {locale === 'es' ? 'Mejores Lugares' : 'Best Locations'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(locale === 'es' ? activeRegion.bestLocationsEs : activeRegion.bestLocations).map((location, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                        {location}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animals Grid */}
              <h3 className="text-2xl font-bold text-peru-earth mb-6 text-center">
                {locale === 'es' ? 'Animales para Avistar' : 'Animals to Spot'}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {activeRegion.animals.map((animal, idx) => {
                  const difficultyBadge = getDifficultyBadge(animal.difficulty);
                  return (
                    <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div>
                            <h4 className="text-lg font-bold text-peru-earth">
                              {locale === 'es' ? animal.nameEs : animal.name}
                            </h4>
                            <p className="text-sm text-gray-500 italic">{animal.scientificName}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${difficultyBadge.color}`}>
                              {difficultyBadge.label}
                            </span>
                            {animal.kidFriendly && (
                              <span className="text-peru-gold" title={locale === 'es' ? 'Apto para niños' : 'Kid-friendly'}>
                                <Baby className="h-5 w-5" />
                              </span>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3">
                          {locale === 'es' ? animal.descriptionEs : animal.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                          <Eye className="h-4 w-4" />
                          <span>{locale === 'es' ? animal.bestTimeEs : animal.bestTime}</span>
                        </div>

                        <div className="bg-peru-sand/30 rounded-lg p-3">
                          <p className="text-xs font-semibold text-peru-earth mb-2">
                            {locale === 'es' ? 'Consejos para avistar:' : 'Spotting tips:'}
                          </p>
                          <ul className="space-y-1">
                            {(locale === 'es' ? animal.tipsEs : animal.tips).map((tip, tidx) => (
                              <li key={tidx} className="text-xs text-gray-600 flex items-start gap-2">
                                <Star className="h-3 w-3 text-peru-gold mt-0.5 flex-shrink-0" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Wildlife Tips */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos para Avistar Vida Silvestre con Niños' : 'Wildlife Spotting Tips with Kids'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Search className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Trae Binoculares' : 'Bring Binoculars'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los binoculares hacen la experiencia 10x mejor. Considera unos para niños también.'
                  : 'Binoculars make the experience 10x better. Consider kid-sized ones too.'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Clock className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Empieza Temprano' : 'Start Early'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'La mayoría de los animales están activos al amanecer. ¡Vale la pena levantarse temprano!'
                  : 'Most animals are active at dawn. It\'s worth the early wake-up!'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Camera className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Mantente en Silencio' : 'Stay Quiet'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Practica ser silencioso con los niños. ¡Los animales huyen del ruido!'
                  : 'Practice being quiet with kids. Animals flee from noise!'}
              </p>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <CheckCircle className="h-8 w-8 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Haz una Lista' : 'Make a Checklist'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Da a los niños una lista de animales para buscar. ¡Hace que estén comprometidos!'
                  : 'Give kids a checklist of animals to find. It keeps them engaged!'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="py-8 bg-peru-sand/30">
        <div className="container-peru">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">
                  {locale === 'es' ? 'Seguridad con la Vida Silvestre' : 'Wildlife Safety'}
                </h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• {locale === 'es' ? 'Nunca alimentes animales salvajes' : 'Never feed wild animals'}</li>
                  <li>• {locale === 'es' ? 'Mantén distancia segura - usa zoom en vez de acercarte' : 'Keep safe distances - use zoom instead of approaching'}</li>
                  <li>• {locale === 'es' ? 'Sigue las instrucciones del guía en todo momento' : 'Follow guide instructions at all times'}</li>
                  <li>• {locale === 'es' ? 'Usa repelente de insectos en la selva' : 'Use insect repellent in jungle areas'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Quieres Más Aventura?' : 'Want More Adventure?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Nuestros itinerarios de selva y naturaleza están diseñados para máximo avistamiento de vida silvestre.'
              : 'Our jungle and nature itineraries are designed for maximum wildlife spotting.'}
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
