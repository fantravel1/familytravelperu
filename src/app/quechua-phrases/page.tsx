'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  MessageCircle,
  Mountain,
  MapPin,
  Sun,
  Heart,
  Volume2,
  Copy,
  Check,
  Sparkles,
  Hash,
  Users,
  Landmark,
  ChevronRight
} from 'lucide-react';

interface Phrase {
  english: string;
  quechua: string;
  pronunciation: string;
  context?: string;
}

interface PhraseCategory {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  description: string;
  descriptionEs: string;
  phrases: Phrase[];
}

interface PlaceName {
  name: string;
  meaning: string;
  meaningEs: string;
  explanation: string;
  explanationEs: string;
}

interface CulturalTerm {
  term: string;
  pronunciation: string;
  meaning: string;
  meaningEs: string;
  explanation: string;
  explanationEs: string;
}

const phraseCategories: PhraseCategory[] = [
  {
    id: 'greetings',
    name: 'Greetings & Basics',
    nameEs: 'Saludos y Básicos',
    icon: MessageCircle,
    description: 'Essential Quechua greetings to connect with locals',
    descriptionEs: 'Saludos esenciales en quechua para conectar con los locales',
    phrases: [
      { english: 'Hello', quechua: 'Allillanchu', pronunciation: 'ah-yee-YAHN-choo', context: 'Formal greeting, literally "Are you well?"' },
      { english: 'Hello (informal)', quechua: 'Imaynalla', pronunciation: 'ee-may-NAH-yah', context: 'Casual "How are you?"' },
      { english: 'I am fine', quechua: 'Allillanmi', pronunciation: 'ah-yee-YAHN-mee', context: 'Response to greeting' },
      { english: 'Yes', quechua: 'Arí', pronunciation: 'ah-REE' },
      { english: 'No', quechua: 'Mana', pronunciation: 'MAH-nah' },
      { english: 'Thank you', quechua: 'Sulpayki', pronunciation: 'sool-PAY-kee', context: 'Also "Añay" (ah-NYAY)' },
      { english: 'Please', quechua: 'Allichu', pronunciation: 'ah-YEE-choo' },
      { english: 'You\'re welcome', quechua: 'Imamanta', pronunciation: 'ee-mah-MAHN-tah', context: 'Literally "For what?"' },
      { english: 'Good morning', quechua: 'Allin punchay', pronunciation: 'ah-YEEN POON-chay' },
      { english: 'Good afternoon', quechua: 'Allin sukha', pronunciation: 'ah-YEEN SOO-kah' },
      { english: 'Good evening', quechua: 'Allin tuta', pronunciation: 'ah-YEEN TOO-tah' },
      { english: 'Goodbye', quechua: 'Tupananchikkama', pronunciation: 'too-pah-nahn-CHEEK-kah-mah', context: 'Literally "Until we meet again"' },
      { english: 'See you later', quechua: 'Ratukama', pronunciation: 'rah-too-KAH-mah' },
      { english: 'What is your name?', quechua: 'Imataq sutiyki?', pronunciation: 'ee-mah-TAHK soo-TEE-kee' },
      { english: 'My name is...', quechua: 'Sutiyqa...', pronunciation: 'soo-TEE-kah...' },
      { english: 'Nice to meet you', quechua: 'Ancha kusikuni', pronunciation: 'AHN-chah koo-see-KOO-nee' }
    ]
  },
  {
    id: 'travel',
    name: 'Travel & Directions',
    nameEs: 'Viaje y Direcciones',
    icon: MapPin,
    description: 'Useful phrases for getting around',
    descriptionEs: 'Frases útiles para moverse',
    phrases: [
      { english: 'Where is...?', quechua: 'Maypin...?', pronunciation: 'MAY-peen' },
      { english: 'How do I get to...?', quechua: 'Imaynata... chayani?', pronunciation: 'ee-may-NAH-tah... chah-YAH-nee' },
      { english: 'Far', quechua: 'Karu', pronunciation: 'KAH-roo' },
      { english: 'Near/Close', quechua: 'Kaylla', pronunciation: 'KAY-yah' },
      { english: 'Right', quechua: 'Pañaman', pronunciation: 'pah-NYAH-mahn' },
      { english: 'Left', quechua: 'Lluqi', pronunciation: 'YOO-kee' },
      { english: 'Straight ahead', quechua: 'Chiqanta', pronunciation: 'chee-KAHN-tah' },
      { english: 'Road/Path', quechua: 'Ñan', pronunciation: 'nyahn', context: 'Also means "way"' },
      { english: 'Mountain', quechua: 'Urqu', pronunciation: 'OOR-koo' },
      { english: 'River', quechua: 'Mayu', pronunciation: 'MAH-yoo' },
      { english: 'Lake', quechua: 'Qucha', pronunciation: 'KOO-chah' },
      { english: 'Village/Town', quechua: 'Llaqta', pronunciation: 'YAHK-tah' },
      { english: 'House', quechua: 'Wasi', pronunciation: 'WAH-see' },
      { english: 'I am lost', quechua: 'Chinkaykuni', pronunciation: 'cheen-kay-KOO-nee' },
      { english: 'I want to go to...', quechua: '...man riyta munani', pronunciation: '...mahn REE-tah moo-NAH-nee' }
    ]
  },
  {
    id: 'polite',
    name: 'Polite Expressions',
    nameEs: 'Expresiones de Cortesía',
    icon: Heart,
    description: 'Show respect with these kind phrases',
    descriptionEs: 'Muestra respeto con estas frases amables',
    phrases: [
      { english: 'Excuse me', quechua: 'Pampachaway', pronunciation: 'pahm-pah-CHAH-way', context: 'Also used for "forgive me"' },
      { english: 'I\'m sorry', quechua: 'Pampachaway', pronunciation: 'pahm-pah-CHAH-way' },
      { english: 'Beautiful', quechua: 'Sumaq', pronunciation: 'SOO-mahk', context: 'Also means "good" or "delicious"' },
      { english: 'Very beautiful', quechua: 'Ancha sumaq', pronunciation: 'AHN-chah SOO-mahk' },
      { english: 'Delicious', quechua: 'Mishki', pronunciation: 'MEESH-kee', context: 'Literally "sweet"' },
      { english: 'Good', quechua: 'Allin', pronunciation: 'ah-YEEN' },
      { english: 'Friend', quechua: 'Masiy', pronunciation: 'mah-SEE' },
      { english: 'Brother (male speaking)', quechua: 'Wayqey', pronunciation: 'WAY-kay' },
      { english: 'Sister (female speaking)', quechua: 'Ñañay', pronunciation: 'NYAH-nyay' },
      { english: 'Mother', quechua: 'Mama', pronunciation: 'MAH-mah' },
      { english: 'Father', quechua: 'Tayta', pronunciation: 'TAY-tah' },
      { english: 'Child', quechua: 'Wawa', pronunciation: 'WAH-wah' },
      { english: 'I love Peru', quechua: 'Piruta munani', pronunciation: 'pee-ROO-tah moo-NAH-nee' },
      { english: 'Blessings to you', quechua: 'Kacharpari', pronunciation: 'kah-char-PAH-ree' }
    ]
  },
  {
    id: 'numbers',
    name: 'Numbers',
    nameEs: 'Números',
    icon: Hash,
    description: 'Count in the language of the Incas',
    descriptionEs: 'Cuenta en el idioma de los Incas',
    phrases: [
      { english: 'One', quechua: 'Huk', pronunciation: 'hook' },
      { english: 'Two', quechua: 'Iskay', pronunciation: 'ees-KAY' },
      { english: 'Three', quechua: 'Kimsa', pronunciation: 'KEEM-sah' },
      { english: 'Four', quechua: 'Tawa', pronunciation: 'TAH-wah' },
      { english: 'Five', quechua: 'Pichqa', pronunciation: 'PEECH-kah' },
      { english: 'Six', quechua: 'Suqta', pronunciation: 'SOOK-tah' },
      { english: 'Seven', quechua: 'Qanchis', pronunciation: 'KAHN-chees' },
      { english: 'Eight', quechua: 'Pusaq', pronunciation: 'POO-sahk' },
      { english: 'Nine', quechua: 'Isqun', pronunciation: 'ees-KOON' },
      { english: 'Ten', quechua: 'Chunka', pronunciation: 'CHOON-kah' },
      { english: 'Twenty', quechua: 'Iskay chunka', pronunciation: 'ees-KAY CHOON-kah' },
      { english: 'One hundred', quechua: 'Pachak', pronunciation: 'pah-CHAHK' },
      { english: 'One thousand', quechua: 'Waranqa', pronunciation: 'wah-RAHN-kah' }
    ]
  }
];

const culturalTerms: CulturalTerm[] = [
  {
    term: 'Pachamama',
    pronunciation: 'pah-chah-MAH-mah',
    meaning: 'Mother Earth',
    meaningEs: 'Madre Tierra',
    explanation: 'The most revered deity in Andean cosmology. Pachamama is the goddess of fertility, agriculture, and nature. Offerings (pagos) are still made to her before planting, building, and traveling.',
    explanationEs: 'La deidad más venerada en la cosmología andina. Pachamama es la diosa de la fertilidad, la agricultura y la naturaleza. Se siguen haciendo ofrendas (pagos) antes de sembrar, construir y viajar.'
  },
  {
    term: 'Inti',
    pronunciation: 'EEN-tee',
    meaning: 'The Sun / Sun God',
    meaningEs: 'El Sol / Dios Sol',
    explanation: 'The Inca sun god, considered the divine ancestor of the Inca emperors. Inti Raymi (Festival of the Sun) is still celebrated every June 24th in Cusco.',
    explanationEs: 'El dios sol inca, considerado el ancestro divino de los emperadores incas. El Inti Raymi (Festival del Sol) todavía se celebra cada 24 de junio en Cusco.'
  },
  {
    term: 'Apu',
    pronunciation: 'AH-poo',
    meaning: 'Mountain Spirit / Lord',
    meaningEs: 'Espíritu de la Montaña / Señor',
    explanation: 'Sacred mountain spirits that protect communities. Major peaks like Ausangate and Salkantay are powerful Apus. Locals still make offerings to seek their blessing and protection.',
    explanationEs: 'Espíritus sagrados de las montañas que protegen a las comunidades. Picos importantes como Ausangate y Salkantay son Apus poderosos. Los locales aún hacen ofrendas para buscar su bendición y protección.'
  },
  {
    term: 'Wiracocha',
    pronunciation: 'wee-rah-KOH-chah',
    meaning: 'Creator God',
    meaningEs: 'Dios Creador',
    explanation: 'The supreme creator god who emerged from Lake Titicaca to create the sun, moon, stars, and humanity. Also called Viracocha in Spanish texts.',
    explanationEs: 'El dios creador supremo que emergió del Lago Titicaca para crear el sol, la luna, las estrellas y la humanidad. También llamado Viracocha en textos españoles.'
  },
  {
    term: 'Chakana',
    pronunciation: 'chah-KAH-nah',
    meaning: 'Andean Cross / Bridge',
    meaningEs: 'Cruz Andina / Puente',
    explanation: 'The sacred Inca cross symbolizing the three worlds: Hanan Pacha (upper/celestial world), Kay Pacha (this world), and Uku Pacha (underworld). You\'ll see it throughout Peru.',
    explanationEs: 'La cruz sagrada inca que simboliza los tres mundos: Hanan Pacha (mundo superior/celestial), Kay Pacha (este mundo), y Uku Pacha (inframundo). La verás por todo el Perú.'
  },
  {
    term: 'Ayni',
    pronunciation: 'AY-nee',
    meaning: 'Reciprocity / Mutual Help',
    meaningEs: 'Reciprocidad / Ayuda Mutua',
    explanation: 'The core Andean principle of reciprocity - today I help you, tomorrow you help me. This philosophy built the Inca Empire and still guides community life.',
    explanationEs: 'El principio andino central de reciprocidad - hoy te ayudo, mañana me ayudas. Esta filosofía construyó el Imperio Inca y aún guía la vida comunitaria.'
  },
  {
    term: 'Coca',
    pronunciation: 'KOH-kah',
    meaning: 'Sacred Leaf',
    meaningEs: 'Hoja Sagrada',
    explanation: 'The sacred coca leaf has been used for thousands of years for altitude sickness, energy, and religious ceremonies. Coca tea (mate de coca) is widely offered to tourists.',
    explanationEs: 'La hoja sagrada de coca se ha usado por miles de años para el mal de altura, energía y ceremonias religiosas. El té de coca (mate de coca) se ofrece ampliamente a los turistas.'
  },
  {
    term: 'Chicha',
    pronunciation: 'CHEE-chah',
    meaning: 'Traditional Corn Beer',
    meaningEs: 'Cerveza Tradicional de Maíz',
    explanation: 'A fermented corn drink sacred to the Incas. Still made traditionally in the Sacred Valley. Look for "chicha de jora" - the alcoholic version, or "chicha morada" - a sweet purple corn drink.',
    explanationEs: 'Una bebida de maíz fermentado sagrada para los incas. Aún se hace tradicionalmente en el Valle Sagrado. Busca "chicha de jora" - la versión alcohólica, o "chicha morada" - una bebida dulce de maíz morado.'
  },
  {
    term: 'Pago a la Tierra',
    pronunciation: 'PAH-goh ah lah TYEH-rah',
    meaning: 'Offering to the Earth',
    meaningEs: 'Ofrenda a la Tierra',
    explanation: 'A traditional ceremony offering coca leaves, flowers, sweets, and other items to Pachamama. Many families participate in these ceremonies during their Peru trip.',
    explanationEs: 'Una ceremonia tradicional que ofrece hojas de coca, flores, dulces y otros artículos a Pachamama. Muchas familias participan en estas ceremonias durante su viaje a Perú.'
  },
  {
    term: 'Quipu',
    pronunciation: 'KEE-poo',
    meaning: 'Knotted Strings / Inca Records',
    meaningEs: 'Cuerdas Anudadas / Registros Incas',
    explanation: 'The Inca system of recording information using knotted strings. Different colors and knot types conveyed numerical and possibly narrative information. A writing system without letters!',
    explanationEs: '¡El sistema inca de registro de información usando cuerdas anudadas. Diferentes colores y tipos de nudos transmitían información numérica y posiblemente narrativa. Un sistema de escritura sin letras!'
  }
];

const placeNames: PlaceName[] = [
  {
    name: 'Machu Picchu',
    meaning: 'Old Mountain',
    meaningEs: 'Montaña Vieja',
    explanation: 'From "machu" (old) and "pikchu" (peak/mountain). Refers to the mountain peak, not the citadel itself which was likely called something else.',
    explanationEs: 'De "machu" (viejo) y "pikchu" (pico/montaña). Se refiere al pico de la montaña, no a la ciudadela que probablemente tenía otro nombre.'
  },
  {
    name: 'Huayna Picchu',
    meaning: 'Young Mountain',
    meaningEs: 'Montaña Joven',
    explanation: 'The smaller, steeper peak that rises behind Machu Picchu. "Wayna" means young, contrasting with the "old" mountain.',
    explanationEs: 'El pico más pequeño y empinado que se eleva detrás de Machu Picchu. "Wayna" significa joven, contrastando con la montaña "vieja".'
  },
  {
    name: 'Sacsayhuamán',
    meaning: 'Satisfied Falcon',
    meaningEs: 'Halcón Satisfecho',
    explanation: 'From "saqsay" (satisfied/full) and "waman" (falcon/hawk). Some say the fortress layout resembles a falcon\'s head when viewed from above.',
    explanationEs: 'De "saqsay" (satisfecho/lleno) y "waman" (halcón). Algunos dicen que el diseño de la fortaleza se asemeja a la cabeza de un halcón visto desde arriba.'
  },
  {
    name: 'Ollantaytambo',
    meaning: 'Ollantay\'s Resting Place',
    meaningEs: 'Lugar de Descanso de Ollantay',
    explanation: 'Named after the legendary warrior Ollantay. "Tambo" means inn or resting place - a stopping point on the Inca road system.',
    explanationEs: 'Nombrado en honor al legendario guerrero Ollantay. "Tambo" significa posada o lugar de descanso - un punto de parada en el sistema de caminos incas.'
  },
  {
    name: 'Cusco (Qosqo)',
    meaning: 'Navel of the World',
    meaningEs: 'Ombligo del Mundo',
    explanation: 'The Incas believed Cusco was the center of the universe. The original Quechua spelling is "Qosqo" or "Qusqu."',
    explanationEs: 'Los incas creían que Cusco era el centro del universo. La ortografía original en quechua es "Qosqo" o "Qusqu."'
  },
  {
    name: 'Pisac',
    meaning: 'Partridge',
    meaningEs: 'Perdiz',
    explanation: 'Named after the "p\'isaq" bird (partridge). Some believe the ancient ruins were designed in the shape of a partridge.',
    explanationEs: 'Nombrado por el pájaro "p\'isaq" (perdiz). Algunos creen que las ruinas antiguas fueron diseñadas en forma de perdiz.'
  },
  {
    name: 'Urubamba',
    meaning: 'Plain of Spiders',
    meaningEs: 'Llanura de Arañas',
    explanation: 'From "uru" (spider) and "bamba/pampa" (plain/flat land). The valley was known for its spider population.',
    explanationEs: 'De "uru" (araña) y "bamba/pampa" (llanura/tierra plana). El valle era conocido por su población de arañas.'
  },
  {
    name: 'Titicaca',
    meaning: 'Puma Rock / Gray Puma',
    meaningEs: 'Roca del Puma / Puma Gris',
    explanation: 'Likely from "titi" (puma/wildcat) and "kaka" (rock/gray). The Island of the Sun was believed to be the birthplace of the sun god.',
    explanationEs: 'Probablemente de "titi" (puma/gato salvaje) y "kaka" (roca/gris). La Isla del Sol se creía que era el lugar de nacimiento del dios sol.'
  },
  {
    name: 'Sillustani',
    meaning: 'Nail of the Fingernail',
    meaningEs: 'Uña del Dedo',
    explanation: 'The peninsula\'s shape resembles a fingernail. "Sillu" means fingernail and "stani" refers to a place.',
    explanationEs: 'La forma de la península se asemeja a una uña. "Sillu" significa uña y "stani" se refiere a un lugar.'
  },
  {
    name: 'Moray',
    meaning: 'Round/Circular',
    meaningEs: 'Redondo/Circular',
    explanation: 'Describes the famous circular terraces that may have been an agricultural laboratory.',
    explanationEs: 'Describe las famosas terrazas circulares que pudieron haber sido un laboratorio agrícola.'
  },
  {
    name: 'Tambomachay',
    meaning: 'Rest Cave / Lodging Cave',
    meaningEs: 'Cueva de Descanso / Cueva de Alojamiento',
    explanation: 'From "tampu" (lodging/rest) and "mach\'ay" (cave). A ritual bathing site with still-flowing Inca fountains.',
    explanationEs: 'De "tampu" (alojamiento/descanso) y "mach\'ay" (cueva). Un sitio de baño ritual con fuentes incas que aún fluyen.'
  },
  {
    name: 'Q\'enqo (Qenqo)',
    meaning: 'Zigzag / Labyrinth',
    meaningEs: 'Zigzag / Laberinto',
    explanation: 'Named for the zigzagging channels carved into the rock for ritual offerings of chicha or llama blood.',
    explanationEs: 'Nombrado por los canales en zigzag tallados en la roca para ofrendas rituales de chicha o sangre de llama.'
  },
  {
    name: 'Choquequirao',
    meaning: 'Cradle of Gold',
    meaningEs: 'Cuna de Oro',
    explanation: 'From "chuqi" (gold) and "k\'iraw" (cradle). This remote "sister city" of Machu Picchu awaits adventurous trekkers.',
    explanationEs: 'De "chuqi" (oro) y "k\'iraw" (cuna). Esta remota "ciudad hermana" de Machu Picchu espera a los excursionistas aventureros.'
  },
  {
    name: 'Ausangate',
    meaning: 'With the Sacred One',
    meaningEs: 'Con el Sagrado',
    explanation: 'A powerful Apu (mountain spirit). At 6,384m, it\'s the highest peak in the Cusco region and deeply sacred.',
    explanationEs: 'Un poderoso Apu (espíritu de la montaña). Con 6,384m, es el pico más alto de la región de Cusco y profundamente sagrado.'
  },
  {
    name: 'Salkantay',
    meaning: 'Savage/Wild Mountain',
    meaningEs: 'Montaña Salvaje',
    explanation: 'From "salqa" (wild/savage) and "inti" (sun). This 6,271m peak is one of the most revered Apus.',
    explanationEs: 'De "salqa" (salvaje) e "inti" (sol). Este pico de 6,271m es uno de los Apus más venerados.'
  },
  {
    name: 'Vinicunca',
    meaning: 'Rainbow Mountain',
    meaningEs: 'Montaña Arcoíris',
    explanation: 'From "wini" (rainbow) and "kunka" (neck/hill). The colorful mineral striations create the famous rainbow effect.',
    explanationEs: 'De "wini" (arcoíris) y "kunka" (cuello/cerro). Las estrías minerales coloridas crean el famoso efecto arcoíris.'
  }
];

function PhraseCard({ phrase, isQuechua = true }: { phrase: Phrase; isQuechua?: boolean }) {
  const [copied, setCopied] = useState(false);
  const { t } = useI18n();

  const handleCopy = () => {
    navigator.clipboard.writeText(phrase.quechua);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <p className="text-lg font-semibold text-peru-terracotta">{phrase.quechua}</p>
          <p className="text-sm text-gray-500 italic">{phrase.pronunciation}</p>
          <p className="text-gray-700 mt-1">{phrase.english}</p>
          {phrase.context && (
            <p className="text-xs text-gray-500 mt-1">{phrase.context}</p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
}

export default function QuechuaPhrasesPage() {
  const { t, locale } = useI18n();
  const isSpanish = locale === 'es';
  const [activeCategory, setActiveCategory] = useState('greetings');
  const [activeSection, setActiveSection] = useState<'phrases' | 'cultural' | 'places'>('phrases');

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-terracotta to-peru-brown text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="chakana-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 L15 5 L15 10 L20 10 L20 15 L15 15 L15 20 L10 20 L10 15 L5 15 L5 10 L0 10 L0 5 L5 5 L5 0 Z" fill="currentColor" opacity="0.3"/>
            </pattern>
            <rect width="100" height="100" fill="url(#chakana-pattern)"/>
          </svg>
        </div>
        <div className="container-peru relative z-10">
          <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4 flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">
              {isSpanish ? 'Frases en Quechua' : 'Quechua Phrases'}
            </span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {isSpanish ? 'Idioma de los Incas' : 'Language of the Incas'}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            {isSpanish ? 'Quechua: El Idioma Vivo de los Incas' : 'Quechua: The Living Language of the Incas'}
          </h1>

          <p className="text-xl text-white/90 max-w-3xl">
            {isSpanish
              ? 'Aprende frases esenciales en quechua, descubre los significados detrás de los nombres de lugares famosos, y conecta con la cultura andina ancestral que aún prospera en Perú.'
              : 'Learn essential Quechua phrases, discover the meanings behind famous place names, and connect with the ancient Andean culture that still thrives in Peru today.'}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Users className="h-5 w-5 mr-2" />
              <span>{isSpanish ? '8+ millones de hablantes' : '8+ million speakers'}</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
              <Landmark className="h-5 w-5 mr-2" />
              <span>{isSpanish ? 'Idioma oficial del Perú' : 'Official language of Peru'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Tabs */}
      <section className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container-peru">
          <div className="flex gap-4 py-4 overflow-x-auto">
            <button
              onClick={() => setActiveSection('phrases')}
              className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeSection === 'phrases'
                  ? 'bg-peru-terracotta text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <MessageCircle className="h-4 w-4 inline mr-2" />
              {isSpanish ? 'Frases Útiles' : 'Useful Phrases'}
            </button>
            <button
              onClick={() => setActiveSection('cultural')}
              className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeSection === 'cultural'
                  ? 'bg-peru-terracotta text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Sparkles className="h-4 w-4 inline mr-2" />
              {isSpanish ? 'Vocabulario Cultural' : 'Cultural Vocabulary'}
            </button>
            <button
              onClick={() => setActiveSection('places')}
              className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap ${
                activeSection === 'places'
                  ? 'bg-peru-terracotta text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Mountain className="h-4 w-4 inline mr-2" />
              {isSpanish ? 'Nombres de Lugares' : 'Place Names'}
            </button>
          </div>
        </div>
      </section>

      {/* Phrases Section */}
      {activeSection === 'phrases' && (
        <section className="py-12">
          <div className="container-peru">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {phraseCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-peru-gold text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{isSpanish ? category.nameEs : category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Content */}
            {phraseCategories
              .filter((cat) => cat.id === activeCategory)
              .map((category) => (
                <div key={category.id}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-display font-bold text-peru-brown">
                      {isSpanish ? category.nameEs : category.name}
                    </h2>
                    <p className="text-gray-600">
                      {isSpanish ? category.descriptionEs : category.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.phrases.map((phrase, index) => (
                      <PhraseCard key={index} phrase={phrase} />
                    ))}
                  </div>
                </div>
              ))}

            {/* Pronunciation Guide */}
            <div className="mt-12 bg-peru-sand/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-peru-brown mb-4">
                <Volume2 className="h-5 w-5 inline mr-2" />
                {isSpanish ? 'Guía de Pronunciación' : 'Pronunciation Guide'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-peru-terracotta">Q / Q'</p>
                  <p className="text-gray-600">{isSpanish ? 'Sonido gutural de "k" desde la garganta' : 'Guttural "k" sound from the throat'}</p>
                </div>
                <div>
                  <p className="font-medium text-peru-terracotta">LL</p>
                  <p className="text-gray-600">{isSpanish ? 'Como "y" en español o "ll" en "llamar"' : 'Like "y" in "yes" or Spanish "ll"'}</p>
                </div>
                <div>
                  <p className="font-medium text-peru-terracotta">Ñ</p>
                  <p className="text-gray-600">{isSpanish ? 'Como la "ñ" española en "niño"' : 'Like Spanish "ñ" in "señor"'}</p>
                </div>
                <div>
                  <p className="font-medium text-peru-terracotta">CH / CHH</p>
                  <p className="text-gray-600">{isSpanish ? 'Como "ch" en "chocolate"' : 'Like "ch" in "church"'}</p>
                </div>
                <div>
                  <p className="font-medium text-peru-terracotta">H</p>
                  <p className="text-gray-600">{isSpanish ? 'Siempre aspirada, como en "hello"' : 'Always aspirated, like in "hello"'}</p>
                </div>
                <div>
                  <p className="font-medium text-peru-terracotta">W</p>
                  <p className="text-gray-600">{isSpanish ? 'Como "w" en inglés' : 'Like "w" in English "water"'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cultural Vocabulary Section */}
      {activeSection === 'cultural' && (
        <section className="py-12">
          <div className="container-peru">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-peru-brown">
                {isSpanish ? 'Vocabulario Cultural Andino' : 'Andean Cultural Vocabulary'}
              </h2>
              <p className="text-gray-600">
                {isSpanish
                  ? 'Comprende los conceptos sagrados y la cosmovisión que dieron forma al Imperio Inca y continúan guiando la vida andina.'
                  : 'Understand the sacred concepts and worldview that shaped the Inca Empire and continue to guide Andean life.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {culturalTerms.map((term, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-peru-terracotta">{term.term}</h3>
                      <p className="text-sm text-gray-500 italic">{term.pronunciation}</p>
                    </div>
                    <Sun className="h-6 w-6 text-peru-gold" />
                  </div>
                  <p className="text-lg font-medium text-peru-brown mb-2">
                    {isSpanish ? term.meaningEs : term.meaning}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {isSpanish ? term.explanationEs : term.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Place Names Section */}
      {activeSection === 'places' && (
        <section className="py-12">
          <div className="container-peru">
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-peru-brown">
                {isSpanish ? 'Significados de los Nombres de Lugares' : 'Place Name Meanings'}
              </h2>
              <p className="text-gray-600">
                {isSpanish
                  ? 'Descubre las historias ocultas en los nombres de los destinos más famosos del Perú.'
                  : 'Discover the stories hidden in the names of Peru\'s most famous destinations.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeNames.map((place, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Mountain className="h-5 w-5 text-peru-terracotta" />
                    <h3 className="text-lg font-bold text-peru-brown">{place.name}</h3>
                  </div>
                  <p className="text-peru-terracotta font-semibold mb-2">
                    "{isSpanish ? place.meaningEs : place.meaning}"
                  </p>
                  <p className="text-gray-600 text-sm">
                    {isSpanish ? place.explanationEs : place.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Did You Know Section */}
      <section className="py-12 bg-peru-brown text-white">
        <div className="container-peru">
          <h2 className="text-2xl font-display font-bold mb-6 text-center">
            {isSpanish ? '¿Sabías Que...?' : 'Did You Know...?'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <Sparkles className="h-8 w-8 text-peru-gold mb-3" />
              <h3 className="font-bold mb-2">{isSpanish ? 'Idioma Oficial' : 'Official Language'}</h3>
              <p className="text-white/80 text-sm">
                {isSpanish
                  ? 'El quechua es uno de los idiomas oficiales del Perú junto con el español y el aymara.'
                  : 'Quechua is one of Peru\'s official languages alongside Spanish and Aymara.'}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Users className="h-8 w-8 text-peru-gold mb-3" />
              <h3 className="font-bold mb-2">{isSpanish ? 'Millones de Hablantes' : 'Millions of Speakers'}</h3>
              <p className="text-white/80 text-sm">
                {isSpanish
                  ? 'Más de 8 millones de personas hablan quechua en Perú, Bolivia, Ecuador y otros países.'
                  : 'Over 8 million people speak Quechua in Peru, Bolivia, Ecuador, and beyond.'}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <Landmark className="h-8 w-8 text-peru-gold mb-3" />
              <h3 className="font-bold mb-2">{isSpanish ? 'Idioma del Imperio' : 'Imperial Language'}</h3>
              <p className="text-white/80 text-sm">
                {isSpanish
                  ? 'Los incas difundieron el quechua por todo su imperio como "Runasimi" - el idioma del pueblo.'
                  : 'The Incas spread Quechua across their empire as "Runasimi" - the language of the people.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold text-peru-brown mb-4">
            {isSpanish ? '¿Quieres Aprender Más?' : 'Want to Learn More?'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {isSpanish
              ? 'Aprende frases en español también para tu viaje a Perú, o explora nuestra guía cultural para entender mejor las tradiciones andinas.'
              : 'Learn Spanish phrases too for your Peru trip, or explore our culture guide to better understand Andean traditions.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/spanish-phrases"
              className="px-6 py-3 bg-peru-terracotta text-white rounded-lg hover:bg-peru-terracotta/90 transition-colors"
            >
              {isSpanish ? 'Frases en Español' : 'Spanish Phrases'}
            </Link>
            <Link
              href="/culture-guide"
              className="px-6 py-3 bg-white text-peru-terracotta border-2 border-peru-terracotta rounded-lg hover:bg-peru-sand/30 transition-colors"
            >
              {isSpanish ? 'Guía Cultural' : 'Culture Guide'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
