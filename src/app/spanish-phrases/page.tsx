'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  MessageCircle,
  Baby,
  Utensils,
  Hotel,
  Bus,
  ShoppingBag,
  AlertTriangle,
  Heart,
  Volume2,
  Copy,
  Check,
  MapPin,
  Stethoscope
} from 'lucide-react';

interface Phrase {
  english: string;
  spanish: string;
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

const phraseCategories: PhraseCategory[] = [
  {
    id: 'basics',
    name: 'Basic Essentials',
    nameEs: 'Esenciales Básicos',
    icon: MessageCircle,
    description: 'Must-know phrases for everyday interactions',
    descriptionEs: 'Frases imprescindibles para interacciones diarias',
    phrases: [
      { english: 'Hello', spanish: 'Hola', pronunciation: 'OH-lah' },
      { english: 'Good morning', spanish: 'Buenos días', pronunciation: 'BWEH-nos DEE-as' },
      { english: 'Good afternoon', spanish: 'Buenas tardes', pronunciation: 'BWEH-nas TAR-des' },
      { english: 'Good evening/night', spanish: 'Buenas noches', pronunciation: 'BWEH-nas NO-ches' },
      { english: 'Please', spanish: 'Por favor', pronunciation: 'por fah-VOR' },
      { english: 'Thank you', spanish: 'Gracias', pronunciation: 'GRAH-see-as' },
      { english: 'Thank you very much', spanish: 'Muchas gracias', pronunciation: 'MOO-chas GRAH-see-as' },
      { english: 'You\'re welcome', spanish: 'De nada', pronunciation: 'deh NAH-dah' },
      { english: 'Yes', spanish: 'Sí', pronunciation: 'see' },
      { english: 'No', spanish: 'No', pronunciation: 'noh' },
      { english: 'Excuse me', spanish: 'Disculpe', pronunciation: 'dees-KOOL-peh' },
      { english: 'I\'m sorry', spanish: 'Lo siento', pronunciation: 'loh see-EN-toh' },
      { english: 'Do you speak English?', spanish: '¿Habla inglés?', pronunciation: 'AH-blah een-GLES' },
      { english: 'I don\'t understand', spanish: 'No entiendo', pronunciation: 'noh en-tee-EN-doh' },
      { english: 'Can you help me?', spanish: '¿Puede ayudarme?', pronunciation: 'PWEH-deh ah-yoo-DAR-meh' },
      { english: 'How much does it cost?', spanish: '¿Cuánto cuesta?', pronunciation: 'KWAN-toh KWES-tah' }
    ]
  },
  {
    id: 'family',
    name: 'Traveling with Kids',
    nameEs: 'Viajando con Niños',
    icon: Baby,
    description: 'Essential phrases for parents traveling with children',
    descriptionEs: 'Frases esenciales para padres viajando con niños',
    phrases: [
      { english: 'I\'m traveling with my children', spanish: 'Viajo con mis hijos', pronunciation: 'vee-AH-hoh kon mees EE-hos' },
      { english: 'Do you have a high chair?', spanish: '¿Tiene una silla alta?', pronunciation: 'tee-EH-neh OO-nah SEE-yah AL-tah' },
      { english: 'Do you have a crib?', spanish: '¿Tiene una cuna?', pronunciation: 'tee-EH-neh OO-nah KOO-nah' },
      { english: 'Is this suitable for children?', spanish: '¿Es apropiado para niños?', pronunciation: 'es ah-proh-pee-AH-doh PAH-rah NEE-nyos' },
      { english: 'Where is the bathroom?', spanish: '¿Dónde está el baño?', pronunciation: 'DON-deh es-TAH el BAH-nyoh' },
      { english: 'My child needs to use the bathroom', spanish: 'Mi hijo necesita usar el baño', pronunciation: 'mee EE-hoh neh-seh-SEE-tah oo-SAR el BAH-nyoh' },
      { english: 'Do you have diapers?', spanish: '¿Tiene pañales?', pronunciation: 'tee-EH-neh pah-NYAH-les' },
      { english: 'Where can I change my baby?', spanish: '¿Dónde puedo cambiar a mi bebé?', pronunciation: 'DON-deh PWEH-doh kam-bee-AR ah mee beh-BEH' },
      { english: 'Is there a playground nearby?', spanish: '¿Hay un parque infantil cerca?', pronunciation: 'eye oon PAR-keh een-fan-TEEL SER-kah' },
      { english: 'My child is tired', spanish: 'Mi hijo está cansado', pronunciation: 'mee EE-hoh es-TAH kan-SAH-doh' },
      { english: 'We need to rest', spanish: 'Necesitamos descansar', pronunciation: 'neh-seh-see-TAH-mos des-kan-SAR' },
      { english: 'Is it safe for children?', spanish: '¿Es seguro para niños?', pronunciation: 'es seh-GOO-roh PAH-rah NEE-nyos' },
      { english: 'Can you go slower please?', spanish: '¿Puede ir más despacio por favor?', pronunciation: 'PWEH-deh eer mas des-PAH-see-oh por fah-VOR' },
      { english: 'We need a family room', spanish: 'Necesitamos una habitación familiar', pronunciation: 'neh-seh-see-TAH-mos OO-nah ah-bee-tah-see-ON fah-mee-lee-AR' }
    ]
  },
  {
    id: 'food',
    name: 'Restaurants & Food',
    nameEs: 'Restaurantes y Comida',
    icon: Utensils,
    description: 'Order food and handle dietary needs',
    descriptionEs: 'Ordena comida y maneja necesidades dietéticas',
    phrases: [
      { english: 'A table for... people, please', spanish: 'Una mesa para... personas, por favor', pronunciation: 'OO-nah MEH-sah PAH-rah... per-SOH-nas por fah-VOR' },
      { english: 'Do you have a kids\' menu?', spanish: '¿Tiene menú infantil?', pronunciation: 'tee-EH-neh meh-NOO een-fan-TEEL' },
      { english: 'The check, please', spanish: 'La cuenta, por favor', pronunciation: 'lah KWEN-tah por fah-VOR' },
      { english: 'Is this spicy?', spanish: '¿Es picante?', pronunciation: 'es pee-KAN-teh' },
      { english: 'Not spicy, please', spanish: 'Sin picante, por favor', pronunciation: 'seen pee-KAN-teh por fah-VOR' },
      { english: 'My child has an allergy to...', spanish: 'Mi hijo tiene alergia a...', pronunciation: 'mee EE-hoh tee-EH-neh ah-LER-hee-ah ah' },
      { english: 'Does this contain nuts?', spanish: '¿Contiene nueces?', pronunciation: 'kon-tee-EH-neh NWEH-ses' },
      { english: 'Does this contain dairy?', spanish: '¿Contiene lácteos?', pronunciation: 'kon-tee-EH-neh LAK-teh-os' },
      { english: 'Without gluten, please', spanish: 'Sin gluten, por favor', pronunciation: 'seen GLOO-ten por fah-VOR' },
      { english: 'Plain, please (no sauce)', spanish: 'Simple, por favor', pronunciation: 'SEEM-pleh por fah-VOR' },
      { english: 'Can you warm this up?', spanish: '¿Puede calentar esto?', pronunciation: 'PWEH-deh kah-len-TAR ES-toh' },
      { english: 'More water, please', spanish: 'Más agua, por favor', pronunciation: 'mas AH-gwah por fah-VOR' },
      { english: 'Bottled water, please', spanish: 'Agua embotellada, por favor', pronunciation: 'AH-gwah em-boh-teh-YAH-dah por fah-VOR' },
      { english: 'This is delicious!', spanish: '¡Está delicioso!', pronunciation: 'es-TAH deh-lee-see-OH-soh' }
    ]
  },
  {
    id: 'hotel',
    name: 'Accommodation',
    nameEs: 'Alojamiento',
    icon: Hotel,
    description: 'Check in, requests, and hotel needs',
    descriptionEs: 'Check in, solicitudes y necesidades del hotel',
    phrases: [
      { english: 'I have a reservation', spanish: 'Tengo una reservación', pronunciation: 'TEN-goh OO-nah reh-ser-vah-see-ON' },
      { english: 'We need an extra bed', spanish: 'Necesitamos una cama extra', pronunciation: 'neh-seh-see-TAH-mos OO-nah KAH-mah EKS-trah' },
      { english: 'What time is breakfast?', spanish: '¿A qué hora es el desayuno?', pronunciation: 'ah keh OH-rah es el deh-sah-YOO-noh' },
      { english: 'Is breakfast included?', spanish: '¿El desayuno está incluido?', pronunciation: 'el deh-sah-YOO-noh es-TAH een-kloo-EE-doh' },
      { english: 'Can we have a quiet room?', spanish: '¿Podemos tener una habitación tranquila?', pronunciation: 'poh-DEH-mos teh-NER OO-nah ah-bee-tah-see-ON tran-KEE-lah' },
      { english: 'The air conditioning doesn\'t work', spanish: 'El aire acondicionado no funciona', pronunciation: 'el EYE-reh ah-kon-dee-see-oh-NAH-doh noh foon-see-OH-nah' },
      { english: 'We need more towels', spanish: 'Necesitamos más toallas', pronunciation: 'neh-seh-see-TAH-mos mas toh-AH-yas' },
      { english: 'What is the WiFi password?', spanish: '¿Cuál es la contraseña del WiFi?', pronunciation: 'kwal es lah kon-trah-SEH-nyah del WEE-fee' },
      { english: 'Can you store our luggage?', spanish: '¿Puede guardar nuestro equipaje?', pronunciation: 'PWEH-deh gwar-DAR NWES-troh eh-kee-PAH-heh' },
      { english: 'What time is checkout?', spanish: '¿A qué hora es el checkout?', pronunciation: 'ah keh OH-rah es el CHECK-out' },
      { english: 'Can we have late checkout?', spanish: '¿Podemos hacer checkout tarde?', pronunciation: 'poh-DEH-mos ah-SER CHECK-out TAR-deh' }
    ]
  },
  {
    id: 'transport',
    name: 'Transportation',
    nameEs: 'Transporte',
    icon: Bus,
    description: 'Getting around by taxi, bus, and train',
    descriptionEs: 'Moverse en taxi, bus y tren',
    phrases: [
      { english: 'How do I get to...?', spanish: '¿Cómo llego a...?', pronunciation: 'KOH-moh YEH-goh ah' },
      { english: 'Take me to..., please', spanish: 'Lléveme a..., por favor', pronunciation: 'YEH-veh-meh ah... por fah-VOR' },
      { english: 'Is it far?', spanish: '¿Está lejos?', pronunciation: 'es-TAH LEH-hos' },
      { english: 'How long does it take?', spanish: '¿Cuánto tiempo toma?', pronunciation: 'KWAN-toh tee-EM-poh TOH-mah' },
      { english: 'Stop here, please', spanish: 'Pare aquí, por favor', pronunciation: 'PAH-reh ah-KEE por fah-VOR' },
      { english: 'Can you wait for us?', spanish: '¿Puede esperarnos?', pronunciation: 'PWEH-deh es-peh-RAR-nos' },
      { english: 'Do you have a car seat?', spanish: '¿Tiene silla de carro para niños?', pronunciation: 'tee-EH-neh SEE-yah deh KAH-roh PAH-rah NEE-nyos' },
      { english: 'Where is the bus station?', spanish: '¿Dónde está la estación de buses?', pronunciation: 'DON-deh es-TAH lah es-tah-see-ON deh BOO-ses' },
      { english: 'Where is the train station?', spanish: '¿Dónde está la estación de tren?', pronunciation: 'DON-deh es-TAH lah es-tah-see-ON deh tren' },
      { english: 'What time does the bus leave?', spanish: '¿A qué hora sale el bus?', pronunciation: 'ah keh OH-rah SAH-leh el boos' },
      { english: 'Two tickets to..., please', spanish: 'Dos boletos a..., por favor', pronunciation: 'dos boh-LEH-tos ah... por fah-VOR' },
      { english: 'Turn left/right', spanish: 'Gire a la izquierda/derecha', pronunciation: 'HEE-reh ah lah ees-kee-ER-dah/deh-REH-chah' }
    ]
  },
  {
    id: 'shopping',
    name: 'Shopping',
    nameEs: 'Compras',
    icon: ShoppingBag,
    description: 'Buying souvenirs and essentials',
    descriptionEs: 'Comprando recuerdos y esenciales',
    phrases: [
      { english: 'How much does this cost?', spanish: '¿Cuánto cuesta esto?', pronunciation: 'KWAN-toh KWES-tah ES-toh' },
      { english: 'Can you give me a discount?', spanish: '¿Me puede dar un descuento?', pronunciation: 'meh PWEH-deh dar oon des-KWEN-toh' },
      { english: 'That\'s too expensive', spanish: 'Es muy caro', pronunciation: 'es mwee KAH-roh' },
      { english: 'I\'ll take it', spanish: 'Lo llevo', pronunciation: 'loh YEH-voh' },
      { english: 'Do you accept credit cards?', spanish: '¿Aceptan tarjetas de crédito?', pronunciation: 'ah-SEP-tan tar-HEH-tas deh KREH-dee-toh' },
      { english: 'Where is the pharmacy?', spanish: '¿Dónde está la farmacia?', pronunciation: 'DON-deh es-TAH lah far-MAH-see-ah' },
      { english: 'Where is the supermarket?', spanish: '¿Dónde está el supermercado?', pronunciation: 'DON-deh es-TAH el soo-per-mer-KAH-doh' },
      { english: 'Do you have this in a smaller size?', spanish: '¿Tiene esto en talla más pequeña?', pronunciation: 'tee-EH-neh ES-toh en TAH-yah mas peh-KEH-nyah' },
      { english: 'Can I see that one?', spanish: '¿Puedo ver ese?', pronunciation: 'PWEH-doh ver EH-seh' },
      { english: 'Just looking, thanks', spanish: 'Solo estoy mirando, gracias', pronunciation: 'SOH-loh es-TOY mee-RAN-doh GRAH-see-as' }
    ]
  },
  {
    id: 'emergency',
    name: 'Emergencies',
    nameEs: 'Emergencias',
    icon: AlertTriangle,
    description: 'Critical phrases for urgent situations',
    descriptionEs: 'Frases críticas para situaciones urgentes',
    phrases: [
      { english: 'Help!', spanish: '¡Ayuda!', pronunciation: 'ah-YOO-dah' },
      { english: 'Call the police!', spanish: '¡Llame a la policía!', pronunciation: 'YAH-meh ah lah poh-lee-SEE-ah' },
      { english: 'Call an ambulance!', spanish: '¡Llame una ambulancia!', pronunciation: 'YAH-meh OO-nah am-boo-LAN-see-ah' },
      { english: 'I need a doctor', spanish: 'Necesito un médico', pronunciation: 'neh-seh-SEE-toh oon MEH-dee-koh' },
      { english: 'My child is sick', spanish: 'Mi hijo está enfermo', pronunciation: 'mee EE-hoh es-TAH en-FER-moh' },
      { english: 'Where is the hospital?', spanish: '¿Dónde está el hospital?', pronunciation: 'DON-deh es-TAH el os-pee-TAL' },
      { english: 'I\'ve lost my passport', spanish: 'He perdido mi pasaporte', pronunciation: 'eh per-DEE-doh mee pah-sah-POR-teh' },
      { english: 'I\'ve lost my child', spanish: 'He perdido a mi hijo', pronunciation: 'eh per-DEE-doh ah mee EE-hoh' },
      { english: 'My child\'s name is...', spanish: 'Mi hijo se llama...', pronunciation: 'mee EE-hoh seh YAH-mah' },
      { english: 'We need help', spanish: 'Necesitamos ayuda', pronunciation: 'neh-seh-see-TAH-mos ah-YOO-dah' },
      { english: 'It\'s an emergency', spanish: 'Es una emergencia', pronunciation: 'es OO-nah eh-mer-HEN-see-ah' },
      { english: 'I don\'t feel well', spanish: 'No me siento bien', pronunciation: 'noh meh see-EN-toh bee-EN' }
    ]
  },
  {
    id: 'health',
    name: 'Health & Pharmacy',
    nameEs: 'Salud y Farmacia',
    icon: Stethoscope,
    description: 'Medical needs and pharmacy visits',
    descriptionEs: 'Necesidades médicas y visitas a la farmacia',
    phrases: [
      { english: 'I need medicine for...', spanish: 'Necesito medicina para...', pronunciation: 'neh-seh-SEE-toh meh-dee-SEE-nah PAH-rah' },
      { english: 'headache', spanish: 'dolor de cabeza', pronunciation: 'doh-LOR deh kah-BEH-sah' },
      { english: 'stomach ache', spanish: 'dolor de estómago', pronunciation: 'doh-LOR deh es-TOH-mah-goh' },
      { english: 'fever', spanish: 'fiebre', pronunciation: 'fee-EH-breh' },
      { english: 'diarrhea', spanish: 'diarrea', pronunciation: 'dee-ah-REH-ah' },
      { english: 'altitude sickness', spanish: 'mal de altura', pronunciation: 'mal deh al-TOO-rah' },
      { english: 'sunburn', spanish: 'quemadura de sol', pronunciation: 'keh-mah-DOO-rah deh sol' },
      { english: 'insect bite', spanish: 'picadura de insecto', pronunciation: 'pee-kah-DOO-rah deh een-SEK-toh' },
      { english: 'Do you have children\'s medicine?', spanish: '¿Tiene medicina para niños?', pronunciation: 'tee-EH-neh meh-dee-SEE-nah PAH-rah NEE-nyos' },
      { english: 'My child has a fever', spanish: 'Mi hijo tiene fiebre', pronunciation: 'mee EE-hoh tee-EH-neh fee-EH-breh' },
      { english: 'I need sunscreen', spanish: 'Necesito protector solar', pronunciation: 'neh-seh-SEE-toh proh-tek-TOR soh-LAR' },
      { english: 'I need insect repellent', spanish: 'Necesito repelente de insectos', pronunciation: 'neh-seh-SEE-toh reh-peh-LEN-teh deh een-SEK-tos' }
    ]
  },
  {
    id: 'fun',
    name: 'Fun & Friendly',
    nameEs: 'Diversión y Amistad',
    icon: Heart,
    description: 'Connect with locals and have fun',
    descriptionEs: 'Conecta con locales y diviértete',
    phrases: [
      { english: 'What is your name?', spanish: '¿Cómo te llamas?', pronunciation: 'KOH-moh teh YAH-mas' },
      { english: 'My name is...', spanish: 'Me llamo...', pronunciation: 'meh YAH-moh' },
      { english: 'Nice to meet you', spanish: 'Mucho gusto', pronunciation: 'MOO-choh GOOS-toh' },
      { english: 'Where are you from?', spanish: '¿De dónde eres?', pronunciation: 'deh DON-deh EH-res' },
      { english: 'We are from...', spanish: 'Somos de...', pronunciation: 'SOH-mos deh' },
      { english: 'How beautiful!', spanish: '¡Qué bonito!', pronunciation: 'keh boh-NEE-toh' },
      { english: 'I love Peru!', spanish: '¡Me encanta Perú!', pronunciation: 'meh en-KAN-tah peh-ROO' },
      { english: 'Can I take a photo?', spanish: '¿Puedo tomar una foto?', pronunciation: 'PWEH-doh toh-MAR OO-nah FOH-toh' },
      { english: 'Can you take our photo?', spanish: '¿Puede tomarnos una foto?', pronunciation: 'PWEH-deh toh-MAR-nos OO-nah FOH-toh' },
      { english: 'The children love the llamas!', spanish: '¡A los niños les encantan las llamas!', pronunciation: 'ah los NEE-nyos les en-KAN-tan las YAH-mas' },
      { english: 'Have a nice day!', spanish: '¡Que tenga un buen día!', pronunciation: 'keh TEN-gah oon bwen DEE-ah' },
      { english: 'See you later!', spanish: '¡Hasta luego!', pronunciation: 'AS-tah LWEH-goh' }
    ]
  }
];

const numbers = [
  { number: '0', spanish: 'cero', pronunciation: 'SEH-roh' },
  { number: '1', spanish: 'uno', pronunciation: 'OO-noh' },
  { number: '2', spanish: 'dos', pronunciation: 'dohs' },
  { number: '3', spanish: 'tres', pronunciation: 'trehs' },
  { number: '4', spanish: 'cuatro', pronunciation: 'KWAH-troh' },
  { number: '5', spanish: 'cinco', pronunciation: 'SEEN-koh' },
  { number: '6', spanish: 'seis', pronunciation: 'says' },
  { number: '7', spanish: 'siete', pronunciation: 'see-EH-teh' },
  { number: '8', spanish: 'ocho', pronunciation: 'OH-choh' },
  { number: '9', spanish: 'nueve', pronunciation: 'NWEH-veh' },
  { number: '10', spanish: 'diez', pronunciation: 'dee-ES' },
  { number: '20', spanish: 'veinte', pronunciation: 'BAYN-teh' },
  { number: '50', spanish: 'cincuenta', pronunciation: 'seen-KWEN-tah' },
  { number: '100', spanish: 'cien', pronunciation: 'see-EN' }
];

export default function SpanishPhrasesPage() {
  const { locale } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState<string>('basics');
  const [copiedPhrase, setCopiedPhrase] = useState<string | null>(null);

  const activeCategory = phraseCategories.find(c => c.id === selectedCategory);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPhrase(text);
    setTimeout(() => setCopiedPhrase(null), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Frases en Español para Familias' : 'Spanish Phrases for Families'}
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-6">
              {locale === 'es'
                ? 'Frases esenciales en español para ayudar a tu familia a comunicarse mientras viaja por Perú.'
                : 'Essential Spanish phrases to help your family communicate while traveling through Peru.'}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span>100+ {locale === 'es' ? 'frases' : 'phrases'}</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span>{locale === 'es' ? 'Guía de pronunciación' : 'Pronunciation guide'}</span>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span>{locale === 'es' ? 'Enfocado en familias' : 'Family-focused'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Selector */}
      <section className="py-6 bg-white border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap gap-2 justify-center">
            {phraseCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-peru-terracotta text-white'
                      : 'bg-peru-sand/30 text-gray-700 hover:bg-peru-sand'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{locale === 'es' ? category.nameEs : category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Phrases Section */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          {activeCategory && (
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                {(() => {
                  const Icon = activeCategory.icon;
                  return <Icon className="h-8 w-8 text-peru-terracotta" />;
                })()}
                <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                  {locale === 'es' ? activeCategory.nameEs : activeCategory.name}
                </h2>
              </div>
              <p className="text-gray-600">
                {locale === 'es' ? activeCategory.descriptionEs : activeCategory.description}
              </p>
            </div>
          )}

          <div className="grid gap-3">
            {activeCategory?.phrases.map((phrase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="font-semibold text-peru-earth">{phrase.english}</p>
                  <p className="text-lg text-peru-terracotta font-medium">{phrase.spanish}</p>
                  <p className="text-sm text-gray-500 italic">{phrase.pronunciation}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(phrase.spanish)}
                  className="p-2 rounded-lg hover:bg-peru-sand/50 transition-colors"
                  title={locale === 'es' ? 'Copiar' : 'Copy'}
                >
                  {copiedPhrase === phrase.spanish ? (
                    <Check className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth mb-6 text-center">
            {locale === 'es' ? 'Números Esenciales' : 'Essential Numbers'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {numbers.map((num) => (
              <div key={num.number} className="bg-peru-sand/30 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-peru-terracotta">{num.number}</p>
                <p className="font-medium text-peru-earth">{num.spanish}</p>
                <p className="text-xs text-gray-500">{num.pronunciation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos de Comunicación' : 'Communication Tips'}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Volume2 className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Habla Despacio' : 'Speak Slowly'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'No te preocupes por el acento perfecto. Hablar despacio y claro es más importante.'
                  : 'Don\'t worry about perfect accent. Speaking slowly and clearly is more important.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Los Locales Aprecian el Esfuerzo' : 'Locals Appreciate Effort'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Incluso un simple "gracias" en español hace que la gente sonría y quiera ayudarte.'
                  : 'Even a simple "gracias" in Spanish makes people smile and want to help you.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Baby className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Los Niños Ayudan' : 'Kids Help'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los peruanos aman a los niños. Tu hijo diciendo "hola" abrirá puertas.'
                  : 'Peruvians love children. Your kid saying "hola" will open doors everywhere.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Usa Gestos' : 'Use Gestures'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Señalar, mostrar fotos y usar gestos ayuda mucho cuando las palabras fallan.'
                  : 'Pointing, showing photos, and using gestures helps a lot when words fail.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Descarga una App' : 'Download an App'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Google Translate funciona offline. Descarga el paquete de español antes de viajar.'
                  : 'Google Translate works offline. Download the Spanish pack before traveling.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-peru-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-peru-gold" />
              </div>
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Aprende Palabras de Comida' : 'Learn Food Words'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Conocer "pollo" (chicken), "arroz" (rice), y "sin picante" te salvará en restaurantes.'
                  : 'Knowing "pollo" (chicken), "arroz" (rice), and "sin picante" will save you at restaurants.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Printable CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¡Practica Antes de Viajar!' : 'Practice Before You Travel!'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Haz un juego familiar - practica una categoría cada noche antes del viaje.'
              : 'Make it a family game - practice one category each night before your trip.'}
          </p>
        </div>
      </section>
    </main>
  );
}
