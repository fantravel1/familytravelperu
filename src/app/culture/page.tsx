'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Heart,
  Users,
  Clock,
  HandHeart,
  MessageCircle,
  Home,
  Utensils,
  Music,
  Gift,
  Baby,
  Check,
  X,
  AlertTriangle,
  Star,
  Sparkles
} from 'lucide-react';

interface CustomCategory {
  id: string;
  title: string;
  titleEs: string;
  icon: React.ReactNode;
  description: string;
  descriptionEs: string;
  dos: string[];
  dosEs: string[];
  donts: string[];
  dontsEs: string[];
  kidTip: string;
  kidTipEs: string;
}

interface CulturalValue {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: React.ReactNode;
}

const culturalValues: CulturalValue[] = [
  {
    title: 'Family First',
    titleEs: 'La Familia Primero',
    description: 'Family is the cornerstone of Peruvian society. Extended families often live together or nearby, and family gatherings are frequent and important.',
    descriptionEs: 'La familia es la piedra angular de la sociedad peruana. Las familias extensas suelen vivir juntas o cerca, y las reuniones familiares son frecuentes e importantes.',
    icon: <Users className="h-8 w-8" />
  },
  {
    title: 'Warmth & Hospitality',
    titleEs: 'Calidez y Hospitalidad',
    description: 'Peruvians are known for their warmth toward visitors. Don\'t be surprised by genuine friendliness and willingness to help.',
    descriptionEs: 'Los peruanos son conocidos por su calidez hacia los visitantes. No te sorprendas por la amabilidad genuina y disposición para ayudar.',
    icon: <Heart className="h-8 w-8" />
  },
  {
    title: 'Respect for Elders',
    titleEs: 'Respeto a los Mayores',
    description: 'Elders are highly respected. Children are taught to greet adults properly and show deference to older family members.',
    descriptionEs: 'Los mayores son muy respetados. Se enseña a los niños a saludar a los adultos apropiadamente y mostrar deferencia a los familiares mayores.',
    icon: <HandHeart className="h-8 w-8" />
  },
  {
    title: 'Flexible Time (Hora Peruana)',
    titleEs: 'Tiempo Flexible (Hora Peruana)',
    description: 'Time is viewed more flexibly than in many Western cultures. Social events often start 30-60 minutes "late" by design.',
    descriptionEs: 'El tiempo se ve más flexible que en muchas culturas occidentales. Los eventos sociales suelen empezar 30-60 minutos "tarde" por diseño.',
    icon: <Clock className="h-8 w-8" />
  }
];

const customCategories: CustomCategory[] = [
  {
    id: 'greetings',
    title: 'Greetings & Introductions',
    titleEs: 'Saludos y Presentaciones',
    icon: <MessageCircle className="h-6 w-6" />,
    description: 'Greetings are warm and often include physical contact. Understanding local greeting customs helps make great first impressions.',
    descriptionEs: 'Los saludos son cálidos y a menudo incluyen contacto físico. Entender las costumbres locales ayuda a causar buenas primeras impresiones.',
    dos: [
      'Greet with a kiss on the right cheek (between women, or man and woman)',
      'Shake hands firmly when meeting men',
      'Say "Buenos días" (morning), "Buenas tardes" (afternoon), or "Buenas noches" (evening)',
      'Use "Señor" or "Señora" with older people as a sign of respect',
      'Make eye contact when greeting'
    ],
    dosEs: [
      'Saluda con un beso en la mejilla derecha (entre mujeres, o hombre y mujer)',
      'Da la mano firmemente al conocer hombres',
      'Di "Buenos días", "Buenas tardes" o "Buenas noches" según corresponda',
      'Usa "Señor" o "Señora" con personas mayores como señal de respeto',
      'Haz contacto visual al saludar'
    ],
    donts: [
      'Skip greetings - it\'s considered rude to not acknowledge people',
      'Rush through greetings - take time to be present',
      'Use first names with elders unless invited to do so'
    ],
    dontsEs: [
      'Omitir saludos - se considera grosero no reconocer a las personas',
      'Apurar los saludos - toma tiempo para estar presente',
      'Usar nombres de pila con mayores a menos que te inviten a hacerlo'
    ],
    kidTip: 'Teach children to say "Hola" with a smile. Peruvians love seeing polite children and will often give them extra attention!',
    kidTipEs: '¡Enseña a los niños a decir "Hola" con una sonrisa. A los peruanos les encanta ver niños educados y a menudo les darán atención extra!'
  },
  {
    id: 'dining',
    title: 'Dining & Food Customs',
    titleEs: 'Costumbres de Comida',
    icon: <Utensils className="h-6 w-6" />,
    description: 'Food is central to Peruvian culture. Meals are social occasions meant to be enjoyed slowly with family and friends.',
    descriptionEs: 'La comida es central en la cultura peruana. Las comidas son ocasiones sociales para disfrutar lentamente con familia y amigos.',
    dos: [
      'Wait for the host to indicate where to sit',
      'Say "Buen provecho" before eating (like "enjoy your meal")',
      'Try a little of everything - refusing food can offend',
      'Compliment the food enthusiastically',
      'Keep hands visible on the table while eating'
    ],
    dosEs: [
      'Espera a que el anfitrión indique dónde sentarse',
      'Di "Buen provecho" antes de comer',
      'Prueba un poco de todo - rechazar comida puede ofender',
      'Elogia la comida con entusiasmo',
      'Mantén las manos visibles en la mesa mientras comes'
    ],
    donts: [
      'Start eating before the host or eldest person',
      'Leave food on your plate if possible (it suggests the food wasn\'t good)',
      'Ask for changes to traditional dishes at family gatherings',
      'Rush through meals - lunch can last 2+ hours'
    ],
    dontsEs: [
      'Empezar a comer antes que el anfitrión o la persona mayor',
      'Dejar comida en el plato si es posible (sugiere que no estaba buena)',
      'Pedir cambios a platos tradicionales en reuniones familiares',
      'Apurar las comidas - el almuerzo puede durar 2+ horas'
    ],
    kidTip: 'If kids are picky eaters, explain in advance. Peruvians understand children have preferences but will appreciate any effort to try local foods.',
    kidTipEs: 'Si los niños son quisquillosos, explica por adelantado. Los peruanos entienden que los niños tienen preferencias pero apreciarán cualquier esfuerzo por probar comidas locales.'
  },
  {
    id: 'home-visits',
    title: 'Visiting Homes',
    titleEs: 'Visitas a Hogares',
    icon: <Home className="h-6 w-6" />,
    description: 'Being invited to a Peruvian home is an honor. These visits are opportunities to experience authentic hospitality.',
    descriptionEs: 'Ser invitado a un hogar peruano es un honor. Estas visitas son oportunidades para experimentar hospitalidad auténtica.',
    dos: [
      'Bring a small gift (flowers, chocolates, wine, or something from your country)',
      'Arrive 15-30 minutes after the stated time (arriving early is awkward)',
      'Offer to help clean up after meals',
      'Accept food and drink offerings graciously',
      'Send a thank you message afterward'
    ],
    dosEs: [
      'Trae un pequeño regalo (flores, chocolates, vino, o algo de tu país)',
      'Llega 15-30 minutos después de la hora indicada (llegar temprano es incómodo)',
      'Ofrece ayudar a limpiar después de las comidas',
      'Acepta ofertas de comida y bebida con gracia',
      'Envía un mensaje de agradecimiento después'
    ],
    donts: [
      'Arrive exactly on time or early',
      'Wear shoes inside if the family removes theirs',
      'Discuss politics or sensitive topics unless the host brings them up',
      'Leave immediately after eating - stay and socialize'
    ],
    dontsEs: [
      'Llegar exactamente a tiempo o temprano',
      'Usar zapatos adentro si la familia se quita los suyos',
      'Discutir política o temas sensibles a menos que el anfitrión los mencione',
      'Irse inmediatamente después de comer - quédate y socializa'
    ],
    kidTip: 'Peruvian families adore children! Kids will likely be showered with attention and treats. Prepare them to say "Gracias" often.',
    kidTipEs: '¡Las familias peruanas adoran a los niños! Probablemente los niños recibirán mucha atención y golosinas. Prepáralos para decir "Gracias" seguido.'
  },
  {
    id: 'celebrations',
    title: 'Celebrations & Festivals',
    titleEs: 'Celebraciones y Festivales',
    icon: <Music className="h-6 w-6" />,
    description: 'Peru has vibrant festivals combining Catholic and indigenous traditions. Celebrations are colorful, musical, and community-focused.',
    descriptionEs: 'Perú tiene festivales vibrantes que combinan tradiciones católicas e indígenas. Las celebraciones son coloridas, musicales y comunitarias.',
    dos: [
      'Join in respectfully if invited - participation is welcomed',
      'Ask permission before photographing ceremonies or participants',
      'Dress modestly for religious celebrations',
      'Try traditional festival foods and drinks',
      'Learn a few words about the celebration\'s meaning'
    ],
    dosEs: [
      'Únete respetuosamente si te invitan - la participación es bienvenida',
      'Pide permiso antes de fotografiar ceremonias o participantes',
      'Vístete modestamente para celebraciones religiosas',
      'Prueba comidas y bebidas tradicionales del festival',
      'Aprende algunas palabras sobre el significado de la celebración'
    ],
    donts: [
      'Mock or make fun of traditions, even playfully',
      'Interrupt ceremonies or processions',
      'Wear revealing clothing to religious events',
      'Get intoxicated at family-friendly celebrations'
    ],
    dontsEs: [
      'Burlarse de las tradiciones, incluso en broma',
      'Interrumpir ceremonias o procesiones',
      'Usar ropa reveladora en eventos religiosos',
      'Embriagarse en celebraciones familiares'
    ],
    kidTip: 'Festivals are magical for kids! The costumes, music, and dancing captivate children. Bring earplugs for sensitive ears - celebrations can be loud!',
    kidTipEs: '¡Los festivales son mágicos para los niños! Los disfraces, música y baile cautivan a los niños. Trae tapones para oídos sensibles - ¡las celebraciones pueden ser ruidosas!'
  },
  {
    id: 'gifts',
    title: 'Gift Giving',
    titleEs: 'Dar Regalos',
    icon: <Gift className="h-6 w-6" />,
    description: 'Gift giving is thoughtful in Peru. The gesture matters more than the value, and presentation is important.',
    descriptionEs: 'Dar regalos es considerado en Perú. El gesto importa más que el valor, y la presentación es importante.',
    dos: [
      'Wrap gifts nicely - presentation matters',
      'Bring gifts from your home country - they\'re especially appreciated',
      'Give flowers in odd numbers (except 13)',
      'Include something small for children if visiting a family',
      'Open gifts when given, with appreciation'
    ],
    dosEs: [
      'Envuelve los regalos bien - la presentación importa',
      'Trae regalos de tu país - son especialmente apreciados',
      'Da flores en números impares (excepto 13)',
      'Incluye algo pequeño para los niños si visitas una familia',
      'Abre los regalos cuando te los den, con aprecio'
    ],
    donts: [
      'Give yellow flowers (associated with death/funerals)',
      'Give knives or sharp objects (symbolizes cutting the relationship)',
      'Give overly expensive gifts that might embarrass the recipient',
      'Forget to bring something if invited to a home'
    ],
    dontsEs: [
      'Dar flores amarillas (asociadas con muerte/funerales)',
      'Dar cuchillos u objetos afilados (simboliza cortar la relación)',
      'Dar regalos muy caros que puedan avergonzar al receptor',
      'Olvidar traer algo si te invitan a un hogar'
    ],
    kidTip: 'Let kids pick small gifts to give - stickers, small toys, or treats from home. This teaches them about cultural exchange and makes interactions memorable.',
    kidTipEs: 'Deja que los niños elijan pequeños regalos - stickers, juguetes pequeños o dulces de casa. Esto les enseña sobre intercambio cultural y hace las interacciones memorables.'
  }
];

const importantPhrases = [
  { spanish: 'Con permiso', english: 'Excuse me (when passing)', context: 'Use when walking past someone or reaching across' },
  { spanish: 'Disculpe', english: 'Excuse me (to get attention)', context: 'Use to politely get someone\'s attention' },
  { spanish: 'Muy amable', english: 'Very kind of you', context: 'Express gratitude for a kind gesture' },
  { spanish: 'Qué lindo/linda', english: 'How beautiful', context: 'Compliment children, crafts, or views' },
  { spanish: 'Salud', english: 'Cheers / Bless you', context: 'Used when toasting or after someone sneezes' },
  { spanish: 'Provecho', english: 'Enjoy your meal', context: 'Said when entering a restaurant where others are eating' }
];

export default function CulturePage() {
  const { locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('greetings');

  const selectedCategory = customCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-terracotta to-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8" />
              <span className="text-peru-gold font-semibold">
                {locale === 'es' ? 'Cultura y Costumbres' : 'Culture & Customs'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Entendiendo la Cultura Peruana'
                : 'Understanding Peruvian Culture'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Costumbres esenciales, etiqueta y valores culturales para ayudar a tu familia a conectar con Perú de manera significativa.'
                : 'Essential customs, etiquette, and cultural values to help your family connect meaningfully with Peru.'}
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Values */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Valores Culturales Fundamentales' : 'Core Cultural Values'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalValues.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-peru-sand/50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-peru-terracotta">
                  {value.icon}
                </div>
                <h3 className="font-bold text-peru-earth text-lg mb-3">
                  {locale === 'es' ? value.titleEs : value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'es' ? value.descriptionEs : value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs Categories */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Guía de Costumbres' : 'Customs Guide'}
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {customCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-peru-terracotta text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-peru-sand'
                }`}
              >
                {cat.icon}
                <span className="font-medium">
                  {locale === 'es' ? cat.titleEs : cat.title}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Category Content */}
          {selectedCategory && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-peru-earth to-peru-terracotta p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {locale === 'es' ? selectedCategory.titleEs : selectedCategory.title}
                  </h3>
                  <p className="text-white/90">
                    {locale === 'es' ? selectedCategory.descriptionEs : selectedCategory.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Do's */}
                    <div>
                      <h4 className="flex items-center text-lg font-bold text-green-700 mb-4">
                        <Check className="h-5 w-5 mr-2" />
                        {locale === 'es' ? 'Qué Hacer' : 'Do\'s'}
                      </h4>
                      <ul className="space-y-3">
                        {(locale === 'es' ? selectedCategory.dosEs : selectedCategory.dos).map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Don'ts */}
                    <div>
                      <h4 className="flex items-center text-lg font-bold text-red-700 mb-4">
                        <X className="h-5 w-5 mr-2" />
                        {locale === 'es' ? 'Qué No Hacer' : 'Don\'ts'}
                      </h4>
                      <ul className="space-y-3">
                        {(locale === 'es' ? selectedCategory.dontsEs : selectedCategory.donts).map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Kid Tip */}
                  <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start">
                      <Baby className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                      <div>
                        <h5 className="font-bold text-amber-800 mb-1">
                          {locale === 'es' ? 'Consejo para Familias' : 'Family Tip'}
                        </h5>
                        <p className="text-amber-700 text-sm">
                          {locale === 'es' ? selectedCategory.kidTipEs : selectedCategory.kidTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Important Phrases */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Frases Culturales Importantes' : 'Important Cultural Phrases'}
            </h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-100">
                {importantPhrases.map((phrase, idx) => (
                  <div key={idx} className="p-4 hover:bg-peru-sand/20 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-bold text-peru-earth text-lg">{phrase.spanish}</p>
                        <p className="text-gray-600">{phrase.english}</p>
                      </div>
                      <div className="bg-peru-sand/50 px-3 py-1 rounded-full">
                        <p className="text-xs text-peru-earth">{phrase.context}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children in Peru */}
      <section className="py-16 bg-gradient-to-r from-peru-gold/20 to-amber-100">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Baby className="h-12 w-12 text-peru-terracotta mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Los Niños en la Cultura Peruana' : 'Children in Peruvian Culture'}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Peru es un país muy amigable con los niños. Esto es lo que pueden esperar las familias.'
                  : 'Peru is an extremely child-friendly country. Here\'s what families can expect.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-peru-terracotta" />
                  {locale === 'es' ? 'Qué Esperar' : 'What to Expect'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Los extraños pueden tocar la cabeza de tu hijo o pellizcear sus mejillas con afecto' : 'Strangers may touch your child\'s head or pinch their cheeks affectionately',
                    locale === 'es' ? 'Los restaurantes casi siempre dan la bienvenida a los niños, incluso tarde en la noche' : 'Restaurants almost always welcome children, even late at night',
                    locale === 'es' ? 'La gente puede ofrecer dulces o pequeños regalos a los niños' : 'People may offer candy or small gifts to children',
                    locale === 'es' ? 'Los niños a menudo reciben atención extra en tiendas y mercados' : 'Children often receive extra attention in shops and markets',
                    locale === 'es' ? 'Pueden comentar sobre la apariencia de tu hijo - esto es un cumplido' : 'They may comment on your child\'s appearance - this is a compliment'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Sparkles className="h-5 w-5 text-peru-gold mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-peru-gold" />
                  {locale === 'es' ? 'Consejos para Padres' : 'Tips for Parents'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Enseña a los niños a decir "gracias" y "por favor" - causa muy buena impresión' : 'Teach kids to say "gracias" and "por favor" - it makes a great impression',
                    locale === 'es' ? 'Acepta la amabilidad con gracia, incluso si se siente diferente a casa' : 'Accept kindness graciously, even if it feels different from home',
                    locale === 'es' ? 'Los horarios de comida peruanos son más tarde - almuerzo a las 1-3pm, cena a las 8-10pm' : 'Peruvian meal times are later - lunch at 1-3pm, dinner at 8-10pm',
                    locale === 'es' ? 'Los niños son bienvenidos en casi todos los espacios públicos' : 'Children are welcome in almost all public spaces',
                    locale === 'es' ? 'Trae fotos de tu familia en casa para compartir - a los peruanos les encanta' : 'Bring photos of your family at home to share - Peruvians love this'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Sensitivity Note */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-peru-earth text-white rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-peru-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'es' ? 'Nota sobre Sensibilidad Cultural' : 'Cultural Sensitivity Note'}
                  </h3>
                  <p className="text-white/90 mb-4">
                    {locale === 'es'
                      ? 'Perú es un país diverso con muchas culturas indígenas, cada una con sus propias tradiciones. Las costumbres pueden variar significativamente entre Lima y las comunidades andinas o amazónicas.'
                      : 'Peru is a diverse country with many indigenous cultures, each with their own traditions. Customs can vary significantly between Lima and Andean or Amazonian communities.'}
                  </p>
                  <p className="text-white/90">
                    {locale === 'es'
                      ? 'Cuando tengas dudas, observa lo que hacen los locales, pregunta respetuosamente, y aborda las diferencias culturales con curiosidad y humildad. Tu esfuerzo por entender y respetar la cultura local será genuinamente apreciado.'
                      : 'When in doubt, observe what locals do, ask respectfully, and approach cultural differences with curiosity and humility. Your effort to understand and respect local culture will be genuinely appreciated.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
