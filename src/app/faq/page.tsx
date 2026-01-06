'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Plane,
  Heart,
  DollarSign,
  Calendar,
  Baby,
  Shield,
  Utensils,
  Mountain
} from 'lucide-react';

interface FAQ {
  question: string;
  questionEs: string;
  answer: string;
  answerEs: string;
}

interface FAQCategory {
  id: string;
  title: string;
  titleEs: string;
  icon: React.ElementType;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'planning',
    title: 'Trip Planning',
    titleEs: 'Planificación del Viaje',
    icon: Calendar,
    faqs: [
      {
        question: 'What is the best time to visit Peru with kids?',
        questionEs: '¿Cuál es la mejor época para visitar Perú con niños?',
        answer: 'The dry season (May-October) is ideal, especially June-August for highland areas. However, this is also peak season with more crowds. April-May and September-October offer good weather with fewer tourists. Avoid February in Cusco/Machu Picchu due to heavy rains.',
        answerEs: 'La temporada seca (mayo-octubre) es ideal, especialmente junio-agosto para zonas de sierra. Sin embargo, esta también es temporada alta con más turistas. Abril-mayo y septiembre-octubre ofrecen buen clima con menos turistas. Evita febrero en Cusco/Machu Picchu debido a lluvias intensas.'
      },
      {
        question: 'How many days do we need for Peru?',
        questionEs: '¿Cuántos días necesitamos para Perú?',
        answer: 'A minimum of 7 days allows you to see Lima, Cusco, Sacred Valley, and Machu Picchu. 10-14 days is better for a more relaxed pace with kids, including acclimatization time. 2-3 weeks lets you add the Amazon or other regions without rushing.',
        answerEs: 'Un mínimo de 7 días te permite ver Lima, Cusco, Valle Sagrado y Machu Picchu. 10-14 días es mejor para un ritmo más relajado con niños, incluyendo tiempo de aclimatación. 2-3 semanas te permite agregar la Amazonía u otras regiones sin prisas.'
      },
      {
        question: 'Should we book a guided tour or travel independently?',
        questionEs: '¿Deberíamos reservar un tour guiado o viajar independientemente?',
        answer: 'For first-time visitors with children, guided tours offer convenience and safety. However, Peru is also very accessible for independent travel. A good middle ground is booking guides for specific activities (Machu Picchu, Amazon lodges) while exploring cities independently.',
        answerEs: 'Para visitantes primerizos con niños, los tours guiados ofrecen comodidad y seguridad. Sin embargo, Perú también es muy accesible para viajes independientes. Un buen punto medio es reservar guías para actividades específicas (Machu Picchu, lodges amazónicos) mientras exploras ciudades independientemente.'
      },
      {
        question: 'Do I need a visa to visit Peru?',
        questionEs: '¿Necesito visa para visitar Perú?',
        answer: 'Citizens of the US, Canada, UK, EU, Australia, and most Western countries do not need a visa for stays up to 183 days. You\'ll receive a tourist entry stamp on arrival. Your passport must be valid for at least 6 months beyond your travel dates.',
        answerEs: 'Ciudadanos de EE.UU., Canadá, Reino Unido, UE, Australia y la mayoría de países occidentales no necesitan visa para estadías de hasta 183 días. Recibirás un sello de entrada turística al llegar. Tu pasaporte debe ser válido por al menos 6 meses después de tus fechas de viaje.'
      }
    ]
  },
  {
    id: 'health-safety',
    title: 'Health & Safety',
    titleEs: 'Salud y Seguridad',
    icon: Heart,
    faqs: [
      {
        question: 'What vaccinations do we need?',
        questionEs: '¿Qué vacunas necesitamos?',
        answer: 'No vaccinations are required for Peru, but recommended ones include Hepatitis A, Typhoid, and routine vaccines. Yellow fever is recommended if visiting the Amazon jungle. Consult a travel medicine clinic 4-6 weeks before your trip.',
        answerEs: 'No se requieren vacunas para Perú, pero las recomendadas incluyen Hepatitis A, Tifoidea y vacunas de rutina. La fiebre amarilla se recomienda si visitas la selva amazónica. Consulta una clínica de medicina de viajes 4-6 semanas antes de tu viaje.'
      },
      {
        question: 'Is Peru safe for families?',
        questionEs: '¿Es Perú seguro para familias?',
        answer: 'Yes! Peru is generally very safe for tourists, especially in main tourist areas. Use common sense precautions: don\'t flash valuables, use official taxis or apps like Uber, and be aware of your surroundings in crowded areas. Peruvians are very family-oriented and welcoming to children.',
        answerEs: 'Sí! Perú es generalmente muy seguro para turistas, especialmente en zonas turísticas principales. Usa precauciones de sentido común: no muestres objetos de valor, usa taxis oficiales o apps como Uber, y mantente atento en zonas concurridas. Los peruanos son muy orientados a la familia y acogedores con los niños.'
      },
      {
        question: 'How do we handle altitude sickness with kids?',
        questionEs: '¿Cómo manejamos el mal de altura con niños?',
        answer: 'Children acclimatize similarly to adults. Plan 1-2 easy days when arriving at altitude. Stay hydrated, avoid heavy meals, and consider starting in the Sacred Valley (lower altitude) before Cusco. Coca tea is safe for children and helps with symptoms. Consult your pediatrician about medication like Diamox.',
        answerEs: 'Los niños se aclimatan de manera similar a los adultos. Planifica 1-2 días tranquilos al llegar a la altura. Mantente hidratado, evita comidas pesadas y considera comenzar en el Valle Sagrado (menor altitud) antes de Cusco. El té de coca es seguro para niños y ayuda con los síntomas. Consulta a tu pediatra sobre medicamentos como Diamox.'
      },
      {
        question: 'Can we drink the water?',
        questionEs: '¿Podemos tomar el agua?',
        answer: 'No, don\'t drink tap water in Peru. Drink only bottled water (widely available) or purified water. Be cautious with ice in drinks - ask if it\'s made with purified water. Brushing teeth with tap water is generally fine for short exposure.',
        answerEs: 'No, no bebas agua del grifo en Perú. Bebe solo agua embotellada (ampliamente disponible) o agua purificada. Ten cuidado con el hielo en las bebidas - pregunta si está hecho con agua purificada. Cepillarse los dientes con agua del grifo generalmente está bien para exposición corta.'
      },
      {
        question: 'What medical facilities are available?',
        questionEs: '¿Qué instalaciones médicas hay disponibles?',
        answer: 'Lima has excellent private hospitals (Clinica Anglo Americana, Clinica Ricardo Palma). Cusco has good clinics familiar with altitude issues. Most tourist areas have pharmacies (farmacias) where you can get many medications without prescription. Travel insurance with medical coverage is essential.',
        answerEs: 'Lima tiene excelentes hospitales privados (Clínica Anglo Americana, Clínica Ricardo Palma). Cusco tiene buenas clínicas familiarizadas con problemas de altura. La mayoría de zonas turísticas tienen farmacias donde puedes obtener muchos medicamentos sin receta. El seguro de viaje con cobertura médica es esencial.'
      }
    ]
  },
  {
    id: 'kids',
    title: 'Traveling with Kids',
    titleEs: 'Viajando con Niños',
    icon: Baby,
    faqs: [
      {
        question: 'What is the minimum age for Machu Picchu?',
        questionEs: '¿Cuál es la edad mínima para Machu Picchu?',
        answer: 'There\'s no minimum age - babies and toddlers can visit. Children under 8 enter free (with parent\'s ticket). The site involves walking on uneven terrain, so carriers are better than strollers. The train ride itself is a highlight for kids.',
        answerEs: 'No hay edad mínima - bebés y niños pequeños pueden visitar. Niños menores de 8 años entran gratis (con boleto de adulto). El sitio implica caminar en terreno irregular, por lo que los portabebés son mejores que los cochecitos. El viaje en tren es un punto destacado para los niños.'
      },
      {
        question: 'Are strollers practical in Peru?',
        questionEs: '¿Son prácticos los cochecitos en Perú?',
        answer: 'Not really, except in Lima\'s modern districts. Cusco\'s cobblestone streets, Machu Picchu\'s stairs, and most sites make strollers impractical. Bring a lightweight carrier or baby backpack instead. For toddlers, consider a lightweight umbrella stroller just for airports and flat areas.',
        answerEs: 'No realmente, excepto en los distritos modernos de Lima. Las calles empedradas de Cusco, las escaleras de Machu Picchu y la mayoría de los sitios hacen impracticables los cochecitos. Trae un portabebés liviano o mochila portabebés. Para niños pequeños, considera un cochecito paraguas solo para aeropuertos y áreas planas.'
      },
      {
        question: 'Will my kids enjoy the trip?',
        questionEs: '¿Mis hijos disfrutarán el viaje?',
        answer: 'Absolutely! Kids love seeing llamas and alpacas, exploring ancient ruins (Machu Picchu is like a giant playground), boat rides on Lake Titicaca, wildlife spotting in the Amazon, and trying new foods. The key is balancing activities with downtime and not overscheduling.',
        answerEs: 'Absolutamente! A los niños les encanta ver llamas y alpacas, explorar ruinas antiguas (Machu Picchu es como un parque de juegos gigante), paseos en bote en el Lago Titicaca, observar fauna en la Amazonía y probar nuevas comidas. La clave es equilibrar actividades con tiempo de descanso y no sobreprogramar.'
      },
      {
        question: 'What about picky eaters?',
        questionEs: '¿Qué pasa con los niños quisquillosos para comer?',
        answer: 'Peru has plenty of kid-friendly options: Pollo a la Brasa (rotisserie chicken), Lomo Saltado (beef with fries), arroz con pollo, empanadas, and great pizza in tourist areas. Pack some familiar snacks from home for emergencies. Most restaurants are happy to accommodate children.',
        answerEs: 'Perú tiene muchas opciones para niños: Pollo a la Brasa, Lomo Saltado (carne con papas fritas), arroz con pollo, empanadas y buena pizza en zonas turísticas. Empaca algunos snacks familiares de casa para emergencias. La mayoría de restaurantes están felices de acomodar a los niños.'
      },
      {
        question: 'Are there child discounts?',
        questionEs: '¿Hay descuentos para niños?',
        answer: 'Yes! Many attractions offer free entry or reduced prices for children: Machu Picchu (free under 8), domestic flights (reduced fares under 12), trains (often 50% off for children), and most museums have child rates. Always carry ID showing your child\'s age.',
        answerEs: 'Sí! Muchas atracciones ofrecen entrada gratuita o precios reducidos para niños: Machu Picchu (gratis menores de 8), vuelos domésticos (tarifas reducidas menores de 12), trenes (a menudo 50% de descuento para niños) y la mayoría de museos tienen tarifas infantiles. Siempre lleva identificación mostrando la edad de tu hijo.'
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & Getting Around',
    titleEs: 'Logística y Transporte',
    icon: Plane,
    faqs: [
      {
        question: 'How do we get to Machu Picchu?',
        questionEs: '¿Cómo llegamos a Machu Picchu?',
        answer: 'Most families take the train from Ollantaytambo (Sacred Valley) to Aguas Calientes, then a bus up to Machu Picchu. The train ride through the mountains is spectacular. Book trains (PeruRail or Inca Rail) and entry tickets well in advance, especially in peak season.',
        answerEs: 'La mayoría de familias toman el tren desde Ollantaytambo (Valle Sagrado) a Aguas Calientes, luego un bus hasta Machu Picchu. El viaje en tren por las montañas es espectacular. Reserva trenes (PeruRail o Inca Rail) y boletos de entrada con anticipación, especialmente en temporada alta.'
      },
      {
        question: 'Is it better to fly or drive between cities?',
        questionEs: '¿Es mejor volar o manejar entre ciudades?',
        answer: 'Flying is recommended for Lima-Cusco (1.5 hours vs 20+ hours by bus). Within regions like the Sacred Valley, private drivers or organized tours are best. Long-distance buses are comfortable but time-consuming. Domestic flights are affordable and save precious vacation time.',
        answerEs: 'Se recomienda volar Lima-Cusco (1.5 horas vs 20+ horas en bus). Dentro de regiones como el Valle Sagrado, conductores privados o tours organizados son mejores. Los buses de larga distancia son cómodos pero consumen mucho tiempo. Los vuelos domésticos son asequibles y ahorran tiempo valioso de vacaciones.'
      },
      {
        question: 'Can we rent a car?',
        questionEs: '¿Podemos alquilar un auto?',
        answer: 'It\'s possible but not recommended for most visitors. Roads can be challenging, signage is limited, and traffic in cities is chaotic. Private drivers are affordable and take the stress out of navigation. For the Sacred Valley, hiring a driver for a day costs $80-150 USD.',
        answerEs: 'Es posible pero no se recomienda para la mayoría de visitantes. Las carreteras pueden ser desafiantes, la señalización es limitada y el tráfico en ciudades es caótico. Los conductores privados son asequibles y quitan el estrés de la navegación. Para el Valle Sagrado, contratar un conductor por un día cuesta $80-150 USD.'
      },
      {
        question: 'How early should we book Machu Picchu tickets?',
        questionEs: '¿Con cuánta anticipación debemos reservar boletos para Machu Picchu?',
        answer: 'Book 2-3 months in advance for peak season (June-August), 1 month ahead for shoulder season. Daily visitor limits mean tickets sell out. Book trains at the same time. The earlier circuit times (6am, 7am) are popular but consider your kids\' sleep schedules.',
        answerEs: 'Reserva con 2-3 meses de anticipación para temporada alta (junio-agosto), 1 mes antes para temporada media. Los límites diarios de visitantes significan que los boletos se agotan. Reserva trenes al mismo tiempo. Los horarios tempranos (6am, 7am) son populares pero considera los horarios de sueño de tus hijos.'
      }
    ]
  },
  {
    id: 'budget',
    title: 'Budget & Money',
    titleEs: 'Presupuesto y Dinero',
    icon: DollarSign,
    faqs: [
      {
        question: 'How much does a family trip to Peru cost?',
        questionEs: '¿Cuánto cuesta un viaje familiar a Perú?',
        answer: 'A mid-range 10-day trip for a family of 4 costs approximately $6,000-10,000 USD including flights, hotels, activities, and meals. Budget options exist for less, and luxury experiences can cost more. Peru offers excellent value compared to many destinations.',
        answerEs: 'Un viaje de 10 días de rango medio para una familia de 4 cuesta aproximadamente $6,000-10,000 USD incluyendo vuelos, hoteles, actividades y comidas. Existen opciones económicas por menos, y experiencias de lujo pueden costar más. Perú ofrece excelente valor comparado con muchos destinos.'
      },
      {
        question: 'Should we use USD or Soles?',
        questionEs: '¿Deberíamos usar USD o Soles?',
        answer: 'Peruvian Soles are the local currency and accepted everywhere. USD is accepted at many tourist businesses but exchange rates are usually worse. Bring clean USD bills to exchange at banks or exchange houses (casas de cambio) for better rates than airports.',
        answerEs: 'Los Soles peruanos son la moneda local y se aceptan en todas partes. El USD se acepta en muchos negocios turísticos pero las tasas de cambio suelen ser peores. Trae billetes USD limpios para cambiar en bancos o casas de cambio para mejores tasas que en aeropuertos.'
      },
      {
        question: 'Are credit cards widely accepted?',
        questionEs: '¿Se aceptan tarjetas de crédito ampliamente?',
        answer: 'Yes, in tourist areas, hotels, and restaurants. Visa is most widely accepted, followed by Mastercard. Always carry some cash for small purchases, markets, and tips. Notify your bank of travel plans to avoid cards being blocked.',
        answerEs: 'Sí, en zonas turísticas, hoteles y restaurantes. Visa es la más aceptada, seguida de Mastercard. Siempre lleva algo de efectivo para compras pequeñas, mercados y propinas. Notifica a tu banco sobre tus planes de viaje para evitar que bloqueen las tarjetas.'
      },
      {
        question: 'How much should we tip?',
        questionEs: '¿Cuánto deberíamos dar de propina?',
        answer: 'Tipping is appreciated but not mandatory. Guidelines: Restaurants 10%, tour guides $5-10 per person/day, drivers $3-5 per day, porters $1-2 per bag, hotel housekeeping $1-2 per day. Tip in Soles when possible.',
        answerEs: 'La propina se agradece pero no es obligatoria. Guías: Restaurantes 10%, guías de tour $5-10 por persona/día, conductores $3-5 por día, porteros $1-2 por maleta, limpieza de hotel $1-2 por día. Da propina en Soles cuando sea posible.'
      }
    ]
  },
  {
    id: 'food',
    title: 'Food & Dining',
    titleEs: 'Comida y Restaurantes',
    icon: Utensils,
    faqs: [
      {
        question: 'Is Peruvian food spicy?',
        questionEs: '¿Es picante la comida peruana?',
        answer: 'Not all of it! Many dishes are mild. Ají (chili pepper) is common but usually served on the side. Ask for dishes "sin ají" (without chili) for kids. Popular kid-friendly foods like Pollo a la Brasa, Lomo Saltado, and empanadas can be made mild.',
        answerEs: 'No toda! Muchos platos son suaves. El ají es común pero usualmente se sirve aparte. Pide platos "sin ají" para niños. Comidas populares para niños como Pollo a la Brasa, Lomo Saltado y empanadas pueden hacerse suaves.'
      },
      {
        question: 'Is ceviche safe for kids?',
        questionEs: '¿Es seguro el ceviche para niños?',
        answer: 'Traditional ceviche uses raw fish "cooked" in lime juice. It\'s safe at reputable restaurants that serve it only at lunch (when fish is freshest). However, it\'s not recommended for young children or those with sensitive stomachs. Older kids who like sushi usually enjoy it.',
        answerEs: 'El ceviche tradicional usa pescado crudo "cocinado" en jugo de limón. Es seguro en restaurantes reputados que lo sirven solo al almuerzo (cuando el pescado está más fresco). Sin embargo, no se recomienda para niños pequeños o aquellos con estómagos sensibles. Los niños mayores que les gusta el sushi usualmente lo disfrutan.'
      },
      {
        question: 'What if we have food allergies?',
        questionEs: '¿Qué pasa si tenemos alergias alimentarias?',
        answer: 'Peru is increasingly aware of food allergies. Learn key phrases: "Alergia a..." (allergic to), "Sin maní" (no peanuts), "Sin gluten." Upscale restaurants understand well; be more careful at street stalls. Pack safe snacks and cards explaining allergies in Spanish.',
        answerEs: 'Perú está cada vez más consciente de las alergias alimentarias. Aprende frases clave: "Alergia a...", "Sin maní", "Sin gluten". Restaurantes de alta gama entienden bien; ten más cuidado en puestos callejeros. Empaca snacks seguros y tarjetas explicando alergias en español.'
      }
    ]
  },
  {
    id: 'altitude',
    title: 'Altitude',
    titleEs: 'Altitud',
    icon: Mountain,
    faqs: [
      {
        question: 'Will my kids get altitude sickness?',
        questionEs: '¿Mis hijos tendrán mal de altura?',
        answer: 'Children acclimatize similarly to adults - some have symptoms, some don\'t. Young children may not express symptoms clearly, so watch for behavior changes, loss of appetite, or unusual tiredness. Start with easier days and be ready to adjust plans if needed.',
        answerEs: 'Los niños se aclimatan de manera similar a los adultos - algunos tienen síntomas, otros no. Los niños pequeños pueden no expresar síntomas claramente, así que observa cambios de comportamiento, pérdida de apetito o cansancio inusual. Comienza con días más fáciles y prepárate para ajustar planes si es necesario.'
      },
      {
        question: 'Should we fly or bus to Cusco?',
        questionEs: '¿Deberíamos volar o ir en bus a Cusco?',
        answer: 'Flying is faster but means a rapid altitude gain. Some families spend a night at a lower elevation first (Sacred Valley at 2,800m vs Cusco at 3,400m). This is especially worth considering for young children or those with altitude concerns.',
        answerEs: 'Volar es más rápido pero significa un aumento rápido de altitud. Algunas familias pasan una noche a menor elevación primero (Valle Sagrado a 2,800m vs Cusco a 3,400m). Esto vale especialmente la pena considerar para niños pequeños o aquellos con preocupaciones de altitud.'
      },
      {
        question: 'Is Diamox safe for children?',
        questionEs: '¿Es seguro Diamox para niños?',
        answer: 'Yes, Diamox (acetazolamide) can be used in children at adjusted doses. Consult your pediatrician before travel to discuss whether it\'s appropriate for your child and to get proper dosing instructions. Start 1-2 days before reaching high altitude.',
        answerEs: 'Sí, Diamox (acetazolamida) puede usarse en niños con dosis ajustadas. Consulta a tu pediatra antes de viajar para discutir si es apropiado para tu hijo y obtener instrucciones de dosificación adecuadas. Comienza 1-2 días antes de llegar a gran altitud.'
      }
    ]
  }
];

function FAQItem({ faq, locale }: { faq: FAQ; locale: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const question = locale === 'es' ? faq.questionEs : faq.question;
  const answer = locale === 'es' ? faq.answerEs : faq.answer;

  return (
    <div className="border-b border-peru-sand last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-peru-terracotta transition-colors"
      >
        <span className="font-medium text-peru-earth pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-peru-gold flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-peru-gold flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const { locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Todo lo que necesitas saber para planificar tu viaje familiar a Perú'
              : 'Everything you need to know to plan your family trip to Peru'}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white border-b shadow-sm">
        <div className="container-peru py-4 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {faqCategories.map((category) => {
              const CategoryIcon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(isActive ? null : category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-peru-gold text-white'
                      : 'bg-peru-sand text-peru-earth hover:bg-peru-gold/20'
                  }`}
                >
                  <CategoryIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {locale === 'es' ? category.titleEs : category.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container-peru py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          {faqCategories
            .filter(category => !activeCategory || category.id === activeCategory)
            .map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-peru-sand/30 px-6 py-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-peru-gold/20 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-peru-gold" />
                    </div>
                    <h2 className="font-display font-bold text-peru-earth text-xl">
                      {locale === 'es' ? category.titleEs : category.title}
                    </h2>
                  </div>
                  <div className="px-6">
                    {category.faqs.map((faq, index) => (
                      <FAQItem key={index} faq={faq} locale={locale} />
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            {locale === 'es' ? '¿Aún tienes preguntas?' : 'Still Have Questions?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {locale === 'es'
              ? 'No dudes en contactarnos. Estamos aquí para ayudarte a planificar la aventura familiar perfecta.'
              : 'Don\'t hesitate to reach out. We\'re here to help you plan the perfect family adventure.'}
          </p>
          <Link href="/contact/" className="btn-gold">
            {locale === 'es' ? 'Contáctanos' : 'Contact Us'}
          </Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Recursos Relacionados' : 'Related Resources'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/altitude-guide/" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Mountain className="w-8 h-8 text-peru-gold mb-3" />
            <h3 className="font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? 'Guía de Altitud' : 'Altitude Guide'}
            </h3>
            <p className="text-gray-600 text-sm">
              {locale === 'es'
                ? 'Todo sobre el mal de altura y cómo prevenirlo'
                : 'Everything about altitude sickness and prevention'}
            </p>
          </Link>
          <Link href="/packing/" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Shield className="w-8 h-8 text-peru-gold mb-3" />
            <h3 className="font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? 'Listas de Equipaje' : 'Packing Lists'}
            </h3>
            <p className="text-gray-600 text-sm">
              {locale === 'es'
                ? 'Listas interactivas para cada tipo de viaje'
                : 'Interactive checklists for every trip type'}
            </p>
          </Link>
          <Link href="/food-guide/" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <Utensils className="w-8 h-8 text-peru-gold mb-3" />
            <h3 className="font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? 'Guía de Comida' : 'Food Guide'}
            </h3>
            <p className="text-gray-600 text-sm">
              {locale === 'es'
                ? 'Guía completa de la cocina peruana para familias'
                : 'Complete guide to Peruvian cuisine for families'}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
