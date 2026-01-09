'use client';

import { useI18n } from '@/lib/i18n';
import {
  Plane,
  Baby,
  Clock,
  Check,
  AlertTriangle,
  Luggage,
  Moon,
  Sun,
  Utensils,
  Headphones,
  Gamepad2,
  Heart,
  ThermometerSun
} from 'lucide-react';

interface AgeGroup {
  id: string;
  ageRange: string;
  ageRangeEs: string;
  icon: string;
  tips: string[];
  tipsEs: string[];
  essentials: string[];
  essentialsEs: string[];
}

const ageGroups: AgeGroup[] = [
  {
    id: 'infants',
    ageRange: 'Infants (0-2 years)',
    ageRangeEs: 'Bebés (0-2 años)',
    icon: '👶',
    tips: [
      'Request bassinet seats (bulkhead) when booking - limited availability',
      'Nurse or bottle-feed during takeoff and landing to help ears equalize',
      'Bring more diapers than you think you\'ll need (at least 1 per hour)',
      'Pack a change of clothes for yourself too - spills happen',
      'Favorite lovey or comfort item is essential',
      'Walk the aisles when baby is fussy'
    ],
    tipsEs: [
      'Solicita asientos con cuna (mampara) al reservar - disponibilidad limitada',
      'Amamanta o da biberón durante despegue y aterrizaje para ayudar a los oídos',
      'Trae más pañales de los que crees necesitar (al menos 1 por hora)',
      'Empaca un cambio de ropa para ti también - los derrames pasan',
      'El objeto de consuelo favorito es esencial',
      'Camina por los pasillos cuando el bebé esté inquieto'
    ],
    essentials: [
      'Diapers and wipes (lots!)',
      'Formula/bottles or nursing cover',
      'Pacifiers (bring extras)',
      'Change of clothes (2-3 outfits)',
      'Blanket',
      'Favorite small toy',
      'Baby carrier for walking'
    ],
    essentialsEs: [
      'Pañales y toallitas (¡muchos!)',
      'Fórmula/biberones o cobertor de lactancia',
      'Chupetes (trae extras)',
      'Cambio de ropa (2-3 mudas)',
      'Manta',
      'Juguete pequeño favorito',
      'Portabebés para caminar'
    ]
  },
  {
    id: 'toddlers',
    ageRange: 'Toddlers (2-4 years)',
    ageRangeEs: 'Niños pequeños (2-4 años)',
    icon: '🧒',
    tips: [
      'Book seats near the back - closer to bathrooms and more walking space',
      'Let them burn energy before boarding - airport play areas are your friend',
      'Download favorite shows to tablet BEFORE the flight',
      'New small toys are magical - dollar store surprises work great',
      'Bring familiar snacks even if airline provides food',
      'Sticker books and coloring are perfect for this age',
      'Practice "airplane behavior" before the trip'
    ],
    tipsEs: [
      'Reserva asientos cerca de atrás - más cerca de baños y espacio para caminar',
      'Déjalos gastar energía antes de abordar - las áreas de juego del aeropuerto son tu amigo',
      'Descarga programas favoritos en la tablet ANTES del vuelo',
      'Los juguetes nuevos pequeños son mágicos - las sorpresas de tienda de dólar funcionan',
      'Trae snacks familiares aunque la aerolínea proporcione comida',
      'Libros de stickers y colorear son perfectos para esta edad',
      'Practica "comportamiento de avión" antes del viaje'
    ],
    essentials: [
      'Tablet with downloaded content',
      'Headphones (kid-sized)',
      'New small toys (3-5)',
      'Sticker books',
      'Crayons and coloring book',
      'Favorite snacks',
      'Change of clothes',
      'Comfort item (blanket, stuffed animal)'
    ],
    essentialsEs: [
      'Tablet con contenido descargado',
      'Audífonos (tamaño niño)',
      'Juguetes pequeños nuevos (3-5)',
      'Libros de stickers',
      'Crayones y libro para colorear',
      'Snacks favoritos',
      'Cambio de ropa',
      'Objeto de consuelo (manta, peluche)'
    ]
  },
  {
    id: 'kids',
    ageRange: 'Kids (5-10 years)',
    ageRangeEs: 'Niños (5-10 años)',
    icon: '👧',
    tips: [
      'Let them help pack their own carry-on with approved items',
      'Window seats are usually preferred - views and wall to lean on',
      'Activity books, travel journals, and games help pass time',
      'Explain the Peru adventure - excitement helps behavior',
      'Consider travel pillow and blanket for sleep comfort',
      'Bring their own headphones for in-flight entertainment',
      'Set expectations about screen time rules for the flight'
    ],
    tipsEs: [
      'Déjalos ayudar a empacar su propio equipaje de mano con artículos aprobados',
      'Los asientos de ventana suelen ser preferidos - vistas y pared para apoyarse',
      'Libros de actividades, diarios de viaje y juegos ayudan a pasar el tiempo',
      'Explica la aventura en Perú - la emoción ayuda al comportamiento',
      'Considera almohada y manta de viaje para comodidad al dormir',
      'Trae sus propios audífonos para entretenimiento en vuelo',
      'Establece expectativas sobre reglas de tiempo de pantalla para el vuelo'
    ],
    essentials: [
      'Activity books/puzzle books',
      'Travel journal with colored pencils',
      'Tablet/device with games and movies',
      'Good quality headphones',
      'Travel pillow',
      'Healthy and fun snacks',
      'Water bottle (empty through security)',
      'Card games',
      'Book they\'re currently reading'
    ],
    essentialsEs: [
      'Libros de actividades/rompecabezas',
      'Diario de viaje con lápices de colores',
      'Tablet/dispositivo con juegos y películas',
      'Audífonos de buena calidad',
      'Almohada de viaje',
      'Snacks saludables y divertidos',
      'Botella de agua (vacía por seguridad)',
      'Juegos de cartas',
      'Libro que estén leyendo actualmente'
    ]
  },
  {
    id: 'tweens',
    ageRange: 'Tweens & Teens (11+)',
    ageRangeEs: 'Preadolescentes y Adolescentes (11+)',
    icon: '🧑',
    tips: [
      'They can mostly manage themselves - give them some independence',
      'Make sure devices are charged and loaded before flight',
      'Consider upgrading their entertainment budget for the long flight',
      'Discuss arrival procedures so they know what to expect',
      'Encourage them to stay hydrated and move around',
      'Download Peru-related movies or documentaries',
      'Get them excited with a travel playlist'
    ],
    tipsEs: [
      'Pueden manejarse solos en su mayoría - dales algo de independencia',
      'Asegúrate de que los dispositivos estén cargados y preparados antes del vuelo',
      'Considera aumentar su presupuesto de entretenimiento para el vuelo largo',
      'Discute los procedimientos de llegada para que sepan qué esperar',
      'Anímalos a mantenerse hidratados y moverse',
      'Descarga películas o documentales relacionados con Perú',
      'Emociónalos con una playlist de viaje'
    ],
    essentials: [
      'Phone/tablet fully charged',
      'Portable charger',
      'Quality headphones/earbuds',
      'Entertainment (games, movies, music)',
      'Book or e-reader',
      'Comfortable hoodie/sweater',
      'Neck pillow and eye mask',
      'Snacks they actually like',
      'Journal for trip reflections'
    ],
    essentialsEs: [
      'Teléfono/tablet completamente cargado',
      'Cargador portátil',
      'Audífonos/auriculares de calidad',
      'Entretenimiento (juegos, películas, música)',
      'Libro o lector electrónico',
      'Sudadera/suéter cómodo',
      'Almohada de cuello y antifaz',
      'Snacks que realmente les gusten',
      'Diario para reflexiones del viaje'
    ]
  }
];

const generalTips = {
  en: {
    before: [
      'Book direct flights when possible - connections with kids are stressful',
      'Choose overnight flights to Peru so kids sleep through most of it',
      'Request kids meals when booking (usually more appealing options)',
      'Get to the airport early - rushing creates stress',
      'Dress kids in layers - planes are unpredictably hot/cold',
      'Bring an empty water bottle to fill after security'
    ],
    during: [
      'Set watches to Peru time right away to start adjusting',
      'Encourage movement every 2 hours to prevent stiffness',
      'Stay hydrated - cabin air is very dry',
      'Don\'t force sleeping - let kids follow their bodies',
      'Take turns walking with restless kids if traveling with partner'
    ],
    after: [
      'Get outside in daylight to help reset body clocks',
      'Don\'t schedule demanding activities first day',
      'Early dinner and bedtime first night',
      'Accept that first 1-2 days might be rough',
      'Keep expectations low and flexibility high'
    ]
  },
  es: {
    before: [
      'Reserva vuelos directos cuando sea posible - las conexiones con niños son estresantes',
      'Elige vuelos nocturnos a Perú para que los niños duerman la mayor parte',
      'Solicita comidas para niños al reservar (generalmente opciones más atractivas)',
      'Llega al aeropuerto temprano - apurarse crea estrés',
      'Viste a los niños en capas - los aviones son impredeciblemente calientes/fríos',
      'Trae una botella de agua vacía para llenar después de seguridad'
    ],
    during: [
      'Ajusta los relojes a hora de Perú de inmediato para empezar a adaptarte',
      'Fomenta el movimiento cada 2 horas para prevenir rigidez',
      'Mantente hidratado - el aire de cabina es muy seco',
      'No fuerces el sueño - deja que los niños sigan sus cuerpos',
      'Tomen turnos caminando con niños inquietos si viajan en pareja'
    ],
    after: [
      'Sal a la luz del día para ayudar a reiniciar los relojes biológicos',
      'No programes actividades exigentes el primer día',
      'Cena temprana y hora de dormir el primer día',
      'Acepta que los primeros 1-2 días pueden ser difíciles',
      'Mantén las expectativas bajas y la flexibilidad alta'
    ]
  }
};

export default function FlightTipsPage() {
  const { locale } = useI18n();
  const tips = locale === 'es' ? generalTips.es : generalTips.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-sky-500 to-blue-700 text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8" />
              <span className="text-sky-200 font-semibold">
                {locale === 'es' ? 'Consejos de Vuelo' : 'Flight Tips'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Sobrevive el Vuelo a Perú'
                : 'Surviving the Flight to Peru'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Consejos probados por familias para vuelos de larga distancia con niños. Desde bebés hasta adolescentes, lo tenemos cubierto.'
                : 'Family-tested tips for long-haul flights with kids. From infants to teens, we\'ve got you covered.'}
            </p>
          </div>
        </div>
      </section>

      {/* Flight Duration Info */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-peru-earth">6-8h</p>
              <p className="text-xs text-gray-500">
                {locale === 'es' ? 'Desde Miami/Houston' : 'From Miami/Houston'}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-peru-earth">8-10h</p>
              <p className="text-xs text-gray-500">
                {locale === 'es' ? 'Desde NYC/LA' : 'From NYC/LA'}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-peru-earth">12-14h</p>
              <p className="text-xs text-gray-500">
                {locale === 'es' ? 'Desde Europa' : 'From Europe'}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-peru-earth">20h+</p>
              <p className="text-xs text-gray-500">
                {locale === 'es' ? 'Desde Asia/Australia' : 'From Asia/Australia'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Specific Tips */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos por Edad' : 'Tips by Age Group'}
          </h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {ageGroups.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-peru-earth to-peru-terracotta p-4 text-white">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{group.icon}</span>
                    <h3 className="text-xl font-bold">
                      {locale === 'es' ? group.ageRangeEs : group.ageRange}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-peru-earth mb-3 flex items-center">
                        <Heart className="h-4 w-4 mr-2 text-peru-gold" />
                        {locale === 'es' ? 'Consejos Clave' : 'Key Tips'}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'es' ? group.tipsEs : group.tips).map((tip, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-peru-earth mb-3 flex items-center">
                        <Luggage className="h-4 w-4 mr-2 text-peru-gold" />
                        {locale === 'es' ? 'Esenciales de Equipaje de Mano' : 'Carry-On Essentials'}
                      </h4>
                      <ul className="space-y-2">
                        {(locale === 'es' ? group.essentialsEs : group.essentials).map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <span className="text-peru-terracotta mr-2">•</span>
                            {item}
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

      {/* General Tips */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos Generales para Familias' : 'General Tips for Families'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Sun className="h-6 w-6 text-yellow-500" />
                <h3 className="font-bold text-peru-earth">
                  {locale === 'es' ? 'Antes del Vuelo' : 'Before the Flight'}
                </h3>
              </div>
              <ul className="space-y-2">
                {tips.before.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold text-peru-earth">
                  {locale === 'es' ? 'Durante el Vuelo' : 'During the Flight'}
                </h3>
              </div>
              <ul className="space-y-2">
                {tips.during.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-2 mb-4">
                <Moon className="h-6 w-6 text-purple-500" />
                <h3 className="font-bold text-peru-earth">
                  {locale === 'es' ? 'Después de Aterrizar' : 'After Landing'}
                </h3>
              </div>
              <ul className="space-y-2">
                {tips.after.map((tip, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jet Lag Section */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Combatiendo el Jet Lag' : 'Fighting Jet Lag'}
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-peru-gold" />
                    {locale === 'es' ? 'La Buena Noticia' : 'The Good News'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {locale === 'es'
                      ? 'Perú está en hora del Este de EE.UU. (o cerca), así que los viajeros norteamericanos experimentan poco o ningún jet lag. Los viajeros europeos están solo 5-7 horas detrás.'
                      : 'Peru is on US Eastern Time (or close to it), so North American travelers experience little to no jet lag. European travelers are only 5-7 hours behind.'}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• {locale === 'es' ? 'Lima = Nueva York (misma zona horaria)' : 'Lima = New York (same time zone)'}</li>
                    <li>• {locale === 'es' ? 'Londres → Lima = -5 horas' : 'London → Lima = -5 hours'}</li>
                    <li>• {locale === 'es' ? 'Sydney → Lima = -15 horas' : 'Sydney → Lima = -15 hours'}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                    <ThermometerSun className="h-5 w-5 mr-2 text-peru-gold" />
                    {locale === 'es' ? 'Estrategia de Ajuste' : 'Adjustment Strategy'}
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        {locale === 'es'
                          ? 'Día 1: Llega, paseo ligero, cena temprana, dormir temprano'
                          : 'Day 1: Arrive, light walking, early dinner, early sleep'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        {locale === 'es'
                          ? 'Día 2: Actividades matutinas, siesta si es necesario, normal después'
                          : 'Day 2: Morning activities, nap if needed, normal after'}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span>
                        {locale === 'es'
                          ? 'Día 3+: La mayoría de familias están completamente ajustadas'
                          : 'Day 3+: Most families are fully adjusted'}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Items */}
      <section className="py-16 bg-amber-50">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-peru-earth mb-4">
                    {locale === 'es' ? 'No Olvides en tu Equipaje de Mano' : 'Don\'t Forget in Your Carry-On'}
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    {[
                      locale === 'es' ? 'Todos los medicamentos que los niños puedan necesitar' : 'All medications kids might need',
                      locale === 'es' ? 'Copias de pasaportes/documentos de viaje' : 'Copies of passports/travel documents',
                      locale === 'es' ? 'Números de emergencia anotados' : 'Emergency phone numbers written down',
                      locale === 'es' ? 'Tarjeta de seguro de viaje' : 'Travel insurance card',
                      locale === 'es' ? 'Cambio de ropa para TODOS (incluyendo adultos)' : 'Change of clothes for EVERYONE (including adults)',
                      locale === 'es' ? 'Confirmaciones de hotel/tour' : 'Hotel/tour confirmations',
                      locale === 'es' ? 'Artículos de valor (no en maleta documentada)' : 'Valuables (not in checked bag)',
                      locale === 'es' ? 'Cargadores y baterías portátiles' : 'Chargers and portable batteries'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Encouragement */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto text-center">
            <Plane className="h-12 w-12 mx-auto mb-4 text-peru-gold" />
            <h2 className="text-2xl font-display font-bold mb-4">
              {locale === 'es' ? '¡Lo Tienes!' : 'You\'ve Got This!'}
            </h2>
            <p className="text-white/90">
              {locale === 'es'
                ? 'Sí, volar con niños es desafiante. Pero recuerda: este vuelo es el comienzo de una aventura familiar increíble. Llega preparado, mantén la calma, y recuerda que millones de familias hacen este viaje cada año. ¡Pronto estarán haciendo recuerdos increíbles en Perú!'
                : 'Yes, flying with kids is challenging. But remember: this flight is the start of an incredible family adventure. Come prepared, stay calm, and remember that millions of families make this trip every year. Soon you\'ll be making amazing memories in Peru!'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
