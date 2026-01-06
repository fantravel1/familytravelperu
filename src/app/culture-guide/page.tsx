'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Heart,
  Users,
  MessageCircle,
  Gift,
  Camera,
  Handshake,
  Music,
  Palette,
  Mountain,
  Star,
  AlertTriangle,
  CheckCircle,
  Coffee,
  Clock,
  Shirt
} from 'lucide-react';

interface CulturalTip {
  do: string;
  doEs: string;
  dont: string;
  dontEs: string;
}

interface CustomSection {
  id: string;
  title: string;
  titleEs: string;
  icon: React.ElementType;
  description: string;
  descriptionEs: string;
  tips: CulturalTip[];
}

const culturalSections: CustomSection[] = [
  {
    id: 'greetings',
    title: 'Greetings & Social Customs',
    titleEs: 'Saludos y Costumbres Sociales',
    icon: Handshake,
    description: 'Peruvians are warm and friendly. Understanding greeting customs helps create positive connections.',
    descriptionEs: 'Los peruanos son cálidos y amigables. Entender las costumbres de saludo ayuda a crear conexiones positivas.',
    tips: [
      {
        do: 'Greet with a kiss on the cheek (women) or handshake (men). Children should greet adults politely.',
        doEs: 'Saluda con un beso en la mejilla (mujeres) o apretón de manos (hombres). Los niños deben saludar cortésmente a los adultos.',
        dont: 'Skip greetings or seem rushed. Taking time to greet properly is important.',
        dontEs: 'Omitir saludos o parecer apurado. Tomarse tiempo para saludar correctamente es importante.'
      },
      {
        do: 'Say "Buenos días" (morning), "Buenas tardes" (afternoon), or "Buenas noches" (evening).',
        doEs: 'Decir "Buenos días", "Buenas tardes" o "Buenas noches" según la hora.',
        dont: 'Use casual greetings like "Hey" with people you don\'t know well.',
        dontEs: 'Usar saludos casuales como "Hey" con personas que no conoces bien.'
      },
      {
        do: 'Accept invitations to someone\'s home - it\'s a sign of friendship. Bring a small gift.',
        doEs: 'Acepta invitaciones a casas - es señal de amistad. Lleva un pequeño regalo.',
        dont: 'Arrive exactly on time - being 15-30 minutes late is normal and expected.',
        dontEs: 'Llegar exactamente a tiempo - llegar 15-30 minutos tarde es normal y esperado.'
      }
    ]
  },
  {
    id: 'photography',
    title: 'Photography Etiquette',
    titleEs: 'Etiqueta Fotográfica',
    icon: Camera,
    description: 'Peru offers incredible photo opportunities, but respecting local customs around photography is essential.',
    descriptionEs: 'Perú ofrece increíbles oportunidades fotográficas, pero respetar las costumbres locales es esencial.',
    tips: [
      {
        do: 'Ask permission before photographing local people, especially indigenous communities.',
        doEs: 'Pedir permiso antes de fotografiar a personas locales, especialmente comunidades indígenas.',
        dont: 'Take photos secretly or without consent - it\'s considered disrespectful.',
        dontEs: 'Tomar fotos en secreto o sin consentimiento - se considera irrespetuoso.'
      },
      {
        do: 'Offer a small tip (1-2 soles) if photographing traditionally-dressed locals who pose for tourists.',
        doEs: 'Ofrecer una pequeña propina (1-2 soles) si fotografías a locales vestidos tradicionalmente que posan para turistas.',
        dont: 'Photograph religious ceremonies or rituals without explicit permission.',
        dontEs: 'Fotografiar ceremonias religiosas o rituales sin permiso explícito.'
      },
      {
        do: 'Be discreet in markets and public spaces - blend in rather than being obviously a tourist.',
        doEs: 'Sé discreto en mercados y espacios públicos - intégrate en lugar de parecer obviamente turista.',
        dont: 'Use flash photography in museums, churches, or at archaeological sites where prohibited.',
        dontEs: 'Usar flash en museos, iglesias o sitios arqueológicos donde está prohibido.'
      }
    ]
  },
  {
    id: 'dining',
    title: 'Dining & Food Culture',
    titleEs: 'Comida y Cultura Gastronómica',
    icon: Coffee,
    description: 'Food is central to Peruvian culture. Meal times are social occasions to be savored.',
    descriptionEs: 'La comida es central en la cultura peruana. Las comidas son ocasiones sociales para disfrutar.',
    tips: [
      {
        do: 'Try local dishes and express appreciation. Saying "¡Qué rico!" (How delicious!) is welcomed.',
        doEs: 'Prueba platos locales y expresa aprecio. Decir "¡Qué rico!" es bienvenido.',
        dont: 'Complain about spicy food - ask for "sin ají" (without chili) instead.',
        dontEs: 'Quejarse de comida picante - pide "sin ají" en su lugar.'
      },
      {
        do: 'Wait for the host to begin eating or say "Buen provecho" before starting.',
        doEs: 'Esperar a que el anfitrión comience a comer o diga "Buen provecho" antes de empezar.',
        dont: 'Leave food on your plate at someone\'s home - it suggests you didn\'t enjoy it.',
        dontEs: 'Dejar comida en el plato en casa de alguien - sugiere que no te gustó.'
      },
      {
        do: 'Lunch (almuerzo) is the main meal, typically from 1-3pm. Expect slower service during this time.',
        doEs: 'El almuerzo es la comida principal, típicamente de 1-3pm. Espera servicio más lento durante este tiempo.',
        dont: 'Rush through meals - dining is meant to be leisurely and social.',
        dontEs: 'Apurar las comidas - comer se supone que es tranquilo y social.'
      }
    ]
  },
  {
    id: 'religion',
    title: 'Religion & Spirituality',
    titleEs: 'Religión y Espiritualidad',
    icon: Star,
    description: 'Peru blends Catholic traditions with ancient Andean beliefs. Both are deeply respected.',
    descriptionEs: 'Perú mezcla tradiciones católicas con creencias andinas antiguas. Ambas son profundamente respetadas.',
    tips: [
      {
        do: 'Dress modestly when visiting churches - cover shoulders and knees.',
        doEs: 'Vestir modestamente al visitar iglesias - cubrir hombros y rodillas.',
        dont: 'Interrupt religious services or ceremonies for photos.',
        dontEs: 'Interrumpir servicios religiosos o ceremonias para fotos.'
      },
      {
        do: 'Show respect for Pachamama (Mother Earth) traditions you may encounter.',
        doEs: 'Mostrar respeto por las tradiciones de Pachamama (Madre Tierra) que puedas encontrar.',
        dont: 'Mock or trivialize indigenous spiritual practices.',
        dontEs: 'Burlarse o trivializar prácticas espirituales indígenas.'
      },
      {
        do: 'Participate respectfully if offered coca leaves for altitude or ceremonies.',
        doEs: 'Participar respetuosamente si te ofrecen hojas de coca para la altura o ceremonias.',
        dont: 'Assume coca leaf use is related to cocaine - it\'s a sacred plant in Andean culture.',
        dontEs: 'Asumir que el uso de hojas de coca está relacionado con cocaína - es una planta sagrada en la cultura andina.'
      }
    ]
  },
  {
    id: 'tipping',
    title: 'Tipping & Bargaining',
    titleEs: 'Propinas y Regateo',
    icon: Gift,
    description: 'Understanding when to tip and when bargaining is appropriate helps navigate daily interactions.',
    descriptionEs: 'Entender cuándo dar propina y cuándo regatear es apropiado ayuda a navegar interacciones diarias.',
    tips: [
      {
        do: 'Tip 10% at restaurants if service charge isn\'t included. Round up taxi fares.',
        doEs: 'Dar 10% de propina en restaurantes si el servicio no está incluido. Redondear tarifas de taxi.',
        dont: 'Feel obligated to tip everywhere - it\'s appreciated but not always expected.',
        dontEs: 'Sentir obligación de dar propina en todas partes - es apreciado pero no siempre esperado.'
      },
      {
        do: 'Bargain at markets and with street vendors - it\'s expected and part of the fun.',
        doEs: 'Regatear en mercados y con vendedores ambulantes - es esperado y parte de la diversión.',
        dont: 'Bargain in established stores, restaurants, or for fixed-price services.',
        dontEs: 'Regatear en tiendas establecidas, restaurantes o servicios de precio fijo.'
      },
      {
        do: 'Start bargaining at about 50-60% of the asking price and work up from there.',
        doEs: 'Empezar a regatear al 50-60% del precio pedido y subir desde ahí.',
        dont: 'Bargain aggressively or insult the seller - keep it friendly.',
        dontEs: 'Regatear agresivamente o insultar al vendedor - mantenlo amigable.'
      }
    ]
  },
  {
    id: 'dress',
    title: 'Dress Code & Appearance',
    titleEs: 'Código de Vestimenta y Apariencia',
    icon: Shirt,
    description: 'Peruvians tend to dress neatly and conservatively. Casual tourist attire is fine but avoid looking too sloppy.',
    descriptionEs: 'Los peruanos tienden a vestir ordenadamente y conservadoramente. Ropa casual de turista está bien pero evita verte muy descuidado.',
    tips: [
      {
        do: 'Dress in layers for the highlands - weather changes quickly and varies greatly.',
        doEs: 'Vestir en capas para la sierra - el clima cambia rápidamente y varía mucho.',
        dont: 'Wear revealing clothing in rural or religious areas - it may offend locals.',
        dontEs: 'Usar ropa reveladora en áreas rurales o religiosas - puede ofender a los locales.'
      },
      {
        do: 'Bring a nice outfit for upscale restaurants in Lima - some have dress codes.',
        doEs: 'Traer un atuendo elegante para restaurantes de lujo en Lima - algunos tienen código de vestimenta.',
        dont: 'Wear shorts in the highlands unless hiking - locals rarely do.',
        dontEs: 'Usar shorts en la sierra a menos que hagas senderismo - los locales rara vez lo hacen.'
      },
      {
        do: 'Remove hats when entering churches and some traditional buildings.',
        doEs: 'Quitarse los sombreros al entrar a iglesias y algunos edificios tradicionales.',
        dont: 'Wear indigenous traditional clothing as a costume - it can be seen as disrespectful.',
        dontEs: 'Usar ropa tradicional indígena como disfraz - puede verse como irrespetuoso.'
      }
    ]
  },
  {
    id: 'time',
    title: 'Time & Punctuality',
    titleEs: 'Tiempo y Puntualidad',
    icon: Clock,
    description: 'Peru operates on a more relaxed sense of time than many Western countries.',
    descriptionEs: 'Perú opera con un sentido del tiempo más relajado que muchos países occidentales.',
    tips: [
      {
        do: 'Be flexible with timing - buses, tours, and meetings often run late.',
        doEs: 'Sé flexible con el tiempo - buses, tours y reuniones a menudo se retrasan.',
        dont: 'Get frustrated when things don\'t run on schedule - it\'s part of the culture.',
        dontEs: 'Frustrarte cuando las cosas no van según horario - es parte de la cultura.'
      },
      {
        do: 'Arrive on time for organized tours, flights, and professional appointments.',
        doEs: 'Llegar a tiempo para tours organizados, vuelos y citas profesionales.',
        dont: 'Expect stores to open exactly at their posted times - especially in smaller towns.',
        dontEs: 'Esperar que las tiendas abran exactamente a sus horarios publicados - especialmente en pueblos pequeños.'
      },
      {
        do: 'Plan extra buffer time between activities and connections.',
        doEs: 'Planificar tiempo extra entre actividades y conexiones.',
        dont: 'Rush locals or seem impatient - it\'s considered rude.',
        dontEs: 'Apurar a los locales o parecer impaciente - se considera grosero.'
      }
    ]
  }
];

const familySpecificTips = [
  {
    title: 'Children Are Welcomed',
    titleEs: 'Los Niños Son Bienvenidos',
    content: 'Peruvians adore children. Expect strangers to smile, wave, and want to interact with your kids. This is normal and friendly, not concerning.',
    contentEs: 'Los peruanos adoran a los niños. Espera que extraños sonrían, saluden y quieran interactuar con tus hijos. Esto es normal y amigable, no preocupante.'
  },
  {
    title: 'Teaching Moments',
    titleEs: 'Momentos de Enseñanza',
    content: 'Use cultural differences as learning opportunities. Discuss why customs differ and encourage kids to observe and ask questions.',
    contentEs: 'Usa las diferencias culturales como oportunidades de aprendizaje. Discute por qué las costumbres difieren y anima a los niños a observar y hacer preguntas.'
  },
  {
    title: 'Basic Spanish Phrases',
    titleEs: 'Frases Básicas en Español',
    content: 'Teach kids simple phrases like "Hola," "Gracias," and "Por favor." Locals appreciate the effort and it\'s a great educational experience.',
    contentEs: 'Enseña a los niños frases simples como "Hola", "Gracias" y "Por favor". Los locales aprecian el esfuerzo y es una gran experiencia educativa.'
  },
  {
    title: 'Respect Indigenous Communities',
    titleEs: 'Respetar Comunidades Indígenas',
    content: 'When visiting indigenous communities, explain to children that this is people\'s home, not a zoo or attraction. Model respectful behavior.',
    contentEs: 'Al visitar comunidades indígenas, explica a los niños que es el hogar de las personas, no un zoológico o atracción. Modela comportamiento respetuoso.'
  }
];

const usefulPhrases = [
  { spanish: 'Hola', english: 'Hello', pronunciation: 'OH-lah' },
  { spanish: 'Buenos días', english: 'Good morning', pronunciation: 'BWAY-nos DEE-ahs' },
  { spanish: 'Gracias', english: 'Thank you', pronunciation: 'GRAH-see-ahs' },
  { spanish: 'Por favor', english: 'Please', pronunciation: 'por fah-VOR' },
  { spanish: 'Con permiso', english: 'Excuse me', pronunciation: 'kon per-MEE-so' },
  { spanish: '¿Cuánto cuesta?', english: 'How much?', pronunciation: 'KWAN-toh KWES-tah' },
  { spanish: 'La cuenta, por favor', english: 'The bill, please', pronunciation: 'lah KWEN-tah por fah-VOR' },
  { spanish: '¿Dónde está el baño?', english: 'Where is the bathroom?', pronunciation: 'DON-day es-TAH el BAH-nyo' },
  { spanish: 'No entiendo', english: 'I don\'t understand', pronunciation: 'no en-tee-EN-doh' },
  { spanish: 'Más despacio, por favor', english: 'Slower, please', pronunciation: 'mahs des-PAH-see-oh' },
  { spanish: '¡Qué lindo!', english: 'How beautiful!', pronunciation: 'kay LEEN-doh' },
  { spanish: '¡Qué rico!', english: 'Delicious!', pronunciation: 'kay REE-koh' },
];

export default function CultureGuidePage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Cultura y Costumbres' : 'Culture & Customs'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Guía esencial de etiqueta y costumbres peruanas para viajes familiares respetuosos'
              : 'Essential guide to Peruvian etiquette and customs for respectful family travel'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="container-peru py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-12 relative z-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            {locale === 'es'
              ? 'Perú es un país de rica herencia cultural que mezcla tradiciones indígenas con influencias españolas coloniales y costumbres modernas. Entender y respetar estas costumbres enriquecerá tu experiencia de viaje y creará conexiones más significativas con los locales. Esta guía ayudará a tu familia a navegar situaciones sociales con confianza y respeto.'
              : 'Peru is a country of rich cultural heritage that blends indigenous traditions with Spanish colonial influences and modern customs. Understanding and respecting these customs will enrich your travel experience and create more meaningful connections with locals. This guide will help your family navigate social situations with confidence and respect.'}
          </p>
        </div>
      </section>

      {/* Cultural Sections */}
      <section className="container-peru py-8">
        <div className="space-y-8">
          {culturalSections.map((section) => {
            const SectionIcon = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-peru-sand/30 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-peru-gold/20 rounded-xl flex items-center justify-center">
                    <SectionIcon className="w-7 h-7 text-peru-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-peru-earth">
                      {locale === 'es' ? section.titleEs : section.title}
                    </h2>
                    <p className="text-gray-600">
                      {locale === 'es' ? section.descriptionEs : section.description}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {section.tips.map((tip, index) => (
                      <div key={index} className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-800">
                              {locale === 'es' ? 'Hacer' : 'Do'}
                            </span>
                          </div>
                          <p className="text-green-700 text-sm">
                            {locale === 'es' ? tip.doEs : tip.do}
                          </p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-800">
                              {locale === 'es' ? 'No hacer' : 'Don\'t'}
                            </span>
                          </div>
                          <p className="text-red-700 text-sm">
                            {locale === 'es' ? tip.dontEs : tip.dont}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Family-Specific Tips */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-8 h-8 text-peru-gold" />
            <h2 className="text-3xl font-display font-bold text-white">
              {locale === 'es' ? 'Consejos para Familias' : 'Tips for Families'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {familySpecificTips.map((tip, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="font-display font-bold text-white mb-3">
                  {locale === 'es' ? tip.titleEs : tip.title}
                </h3>
                <p className="text-white/90 text-sm">
                  {locale === 'es' ? tip.contentEs : tip.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Phrases */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          <MessageCircle className="inline-block w-8 h-8 mr-2 text-peru-gold" />
          {locale === 'es' ? 'Frases Útiles en Español' : 'Useful Spanish Phrases'}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {usefulPhrases.map((phrase, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index % 2 === 0 ? 'bg-peru-sand/20' : ''
                } border-b border-peru-sand/30 last:border-b-0`}
              >
                <p className="font-bold text-peru-earth text-lg">{phrase.spanish}</p>
                <p className="text-gray-600">{phrase.english}</p>
                <p className="text-sm text-peru-terracotta italic mt-1">
                  {phrase.pronunciation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Festivals Highlight */}
      <section className="bg-peru-sand py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            <Music className="inline-block w-8 h-8 mr-2 text-peru-gold" />
            {locale === 'es' ? 'Festivales y Celebraciones' : 'Festivals & Celebrations'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-peru-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">Inti Raymi</h3>
              <p className="text-sm text-gray-500 mb-2">{locale === 'es' ? '24 de Junio - Cusco' : 'June 24 - Cusco'}</p>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Festival del Sol, la celebración inca más importante. Miles se reúnen para recrear antiguos rituales.'
                  : 'Festival of the Sun, the most important Inca celebration. Thousands gather to reenact ancient rituals.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-peru-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">Virgen de la Candelaria</h3>
              <p className="text-sm text-gray-500 mb-2">{locale === 'es' ? 'Febrero - Puno' : 'February - Puno'}</p>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'El festival folclórico más grande de Sudamérica con coloridos disfraces y danzas.'
                  : 'South America\'s largest folklore festival with colorful costumes and traditional dances.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-12 h-12 bg-peru-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">Qoyllur Rit'i</h3>
              <p className="text-sm text-gray-500 mb-2">{locale === 'es' ? 'Mayo/Junio - Cusco' : 'May/June - Cusco'}</p>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Peregrinación andina única que mezcla tradiciones católicas e incas en un glaciar a 4,700m.'
                  : 'Unique Andean pilgrimage blending Catholic and Incan traditions at a 4,700m glacier.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-peru py-12 text-center">
        <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? '¿Listo para tu aventura cultural?' : 'Ready for your cultural adventure?'}
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {locale === 'es'
            ? 'Explora itinerarios que incluyen experiencias culturales auténticas para toda la familia.'
            : 'Explore itineraries that include authentic cultural experiences for the whole family.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/itineraries/" className="btn-primary">
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </Link>
          <Link href="/faq/" className="btn-gold">
            {locale === 'es' ? 'Preguntas Frecuentes' : 'FAQ'}
          </Link>
        </div>
      </section>
    </main>
  );
}
