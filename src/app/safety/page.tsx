'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Shield,
  AlertTriangle,
  Phone,
  MapPin,
  Car,
  Wallet,
  Heart,
  Users,
  Sun,
  Droplets,
  Mountain,
  Bug,
  CheckCircle,
  XCircle,
  Smartphone,
  Lock,
  Eye
} from 'lucide-react';

interface SafetyTip {
  title: string;
  titleEs: string;
  content: string;
  contentEs: string;
  icon: React.ElementType;
  severity: 'info' | 'warning' | 'critical';
}

interface SafetyCategory {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  icon: React.ElementType;
  tips: SafetyTip[];
}

const safetyCategories: SafetyCategory[] = [
  {
    id: 'general',
    title: 'General Safety',
    titleEs: 'Seguridad General',
    description: 'Common-sense tips for staying safe throughout your trip.',
    descriptionEs: 'Consejos de sentido común para mantenerse seguro durante tu viaje.',
    icon: Shield,
    tips: [
      {
        title: 'Stay Aware of Surroundings',
        titleEs: 'Mantente Alerta a tu Entorno',
        content: 'Peru is generally safe, but stay alert in crowded areas like markets and bus stations. Keep children close and establish meeting points in busy places.',
        contentEs: 'Perú es generalmente seguro, pero mantente alerta en áreas concurridas como mercados y estaciones de bus. Mantén a los niños cerca y establece puntos de encuentro en lugares concurridos.',
        icon: Eye,
        severity: 'info'
      },
      {
        title: 'Use Official Transportation',
        titleEs: 'Usa Transporte Oficial',
        content: 'Use registered taxis (look for company stickers), Uber/Cabify apps, or hotel-arranged transport. Avoid unmarked cars, especially at night.',
        contentEs: 'Usa taxis registrados (busca stickers de compañías), apps Uber/Cabify, o transporte organizado por el hotel. Evita autos sin marcas, especialmente de noche.',
        icon: Car,
        severity: 'warning'
      },
      {
        title: 'Carry Copies of Documents',
        titleEs: 'Lleva Copias de Documentos',
        content: 'Keep color copies of passports separate from originals. Store digital copies in cloud storage. Leave originals in hotel safe when possible.',
        contentEs: 'Mantén copias a color de pasaportes separadas de los originales. Guarda copias digitales en la nube. Deja originales en la caja fuerte del hotel cuando sea posible.',
        icon: Lock,
        severity: 'info'
      },
      {
        title: 'Trust Your Instincts',
        titleEs: 'Confía en tus Instintos',
        content: 'If something feels wrong, leave the situation. Teach children to stay close and speak up if they feel uncomfortable.',
        contentEs: 'Si algo se siente mal, sal de la situación. Enseña a los niños a quedarse cerca y hablar si se sienten incómodos.',
        icon: Users,
        severity: 'info'
      }
    ]
  },
  {
    id: 'money',
    title: 'Money & Valuables',
    titleEs: 'Dinero y Objetos de Valor',
    description: 'Protect your money and belongings while traveling.',
    descriptionEs: 'Protege tu dinero y pertenencias mientras viajas.',
    icon: Wallet,
    tips: [
      {
        title: 'Don\'t Flash Cash or Jewelry',
        titleEs: 'No Muestres Dinero o Joyas',
        content: 'Keep expensive items out of sight. Use a money belt for large amounts. Withdraw cash from ATMs inside banks or malls.',
        contentEs: 'Mantén objetos costosos fuera de la vista. Usa un cinturón de dinero para cantidades grandes. Retira efectivo de cajeros dentro de bancos o centros comerciales.',
        icon: Wallet,
        severity: 'warning'
      },
      {
        title: 'Divide Your Money',
        titleEs: 'Divide tu Dinero',
        content: 'Keep day money separate from reserves. Have backup cards stored separately. Each adult should carry some emergency cash.',
        contentEs: 'Mantén el dinero del día separado de las reservas. Ten tarjetas de respaldo guardadas por separado. Cada adulto debe llevar algo de efectivo de emergencia.',
        icon: Lock,
        severity: 'info'
      },
      {
        title: 'Be Careful with Phones',
        titleEs: 'Ten Cuidado con los Teléfonos',
        content: 'Don\'t use phones walking in crowded streets - stop in a safe spot. Use wrist straps. Phone theft is the most common crime affecting tourists.',
        contentEs: 'No uses teléfonos caminando en calles concurridas - detente en un lugar seguro. Usa correas de muñeca. El robo de teléfonos es el crimen más común que afecta a turistas.',
        icon: Smartphone,
        severity: 'warning'
      }
    ]
  },
  {
    id: 'health',
    title: 'Health & Medical',
    titleEs: 'Salud y Medicina',
    description: 'Stay healthy and know what to do in medical situations.',
    descriptionEs: 'Mantente saludable y sabe qué hacer en situaciones médicas.',
    icon: Heart,
    tips: [
      {
        title: 'Get Travel Insurance',
        titleEs: 'Obtén Seguro de Viaje',
        content: 'Essential for families. Ensure it covers altitude sickness, emergency evacuation, and activities like hiking. Keep policy details accessible.',
        contentEs: 'Esencial para familias. Asegúrate de que cubra mal de altura, evacuación de emergencia y actividades como senderismo. Mantén los detalles de la póliza accesibles.',
        icon: Shield,
        severity: 'critical'
      },
      {
        title: 'Altitude Precautions',
        titleEs: 'Precauciones de Altitud',
        content: 'Acclimatize slowly in Cusco (3,400m). Know altitude sickness symptoms. Have medication ready. Don\'t ignore symptoms - descend if severe.',
        contentEs: 'Aclimatarse lentamente en Cusco (3,400m). Conoce los síntomas del mal de altura. Ten medicamentos listos. No ignores síntomas - desciende si son severos.',
        icon: Mountain,
        severity: 'critical'
      },
      {
        title: 'Water & Food Safety',
        titleEs: 'Seguridad de Agua y Comida',
        content: 'Drink only bottled/purified water. Avoid ice unless you\'re sure it\'s purified. Eat at busy restaurants with high turnover.',
        contentEs: 'Bebe solo agua embotellada/purificada. Evita el hielo a menos que estés seguro de que está purificado. Come en restaurantes concurridos con alta rotación.',
        icon: Droplets,
        severity: 'warning'
      },
      {
        title: 'Sun Protection',
        titleEs: 'Protección Solar',
        content: 'UV rays are intense at altitude. Use SPF 50+, reapply frequently. Hats and sunglasses are essential. Kids burn faster than adults.',
        contentEs: 'Los rayos UV son intensos en altura. Usa SPF 50+, reaplica frecuentemente. Sombreros y gafas de sol son esenciales. Los niños se queman más rápido que los adultos.',
        icon: Sun,
        severity: 'warning'
      },
      {
        title: 'Insect Protection (Amazon)',
        titleEs: 'Protección de Insectos (Amazonía)',
        content: 'Use DEET-based repellent in the jungle. Wear long sleeves at dawn/dusk. Check for ticks after jungle walks. Consider malaria prophylaxis.',
        contentEs: 'Usa repelente con DEET en la selva. Usa mangas largas al amanecer/atardecer. Revisa garrapatas después de caminatas en la selva. Considera profilaxis contra malaria.',
        icon: Bug,
        severity: 'warning'
      }
    ]
  },
  {
    id: 'transport',
    title: 'Transportation Safety',
    titleEs: 'Seguridad en Transporte',
    description: 'Stay safe on roads, trains, and in vehicles.',
    descriptionEs: 'Mantente seguro en carreteras, trenes y vehículos.',
    icon: Car,
    tips: [
      {
        title: 'Choose Quality Bus Companies',
        titleEs: 'Elige Compañías de Bus de Calidad',
        content: 'For long distances, use reputable companies like Cruz del Sur, Oltursa, or ITTSA. They have better safety records and more comfortable seats for families.',
        contentEs: 'Para largas distancias, usa compañías reputadas como Cruz del Sur, Oltursa o ITTSA. Tienen mejores registros de seguridad y asientos más cómodos para familias.',
        icon: CheckCircle,
        severity: 'info'
      },
      {
        title: 'Mountain Road Awareness',
        titleEs: 'Conciencia de Carreteras de Montaña',
        content: 'Mountain roads can be winding and narrow. Motion sickness is common - bring medication. Sit near the front. Avoid night travel on mountain roads.',
        contentEs: 'Las carreteras de montaña pueden ser sinuosas y angostas. El mareo es común - trae medicamentos. Siéntate cerca del frente. Evita viajar de noche en carreteras de montaña.',
        icon: AlertTriangle,
        severity: 'warning'
      },
      {
        title: 'Train Safety',
        titleEs: 'Seguridad en Trenes',
        content: 'Trains to Machu Picchu are very safe. Keep valuables secure. Watch children near platforms. Book with official operators (PeruRail, Inca Rail).',
        contentEs: 'Los trenes a Machu Picchu son muy seguros. Mantén objetos de valor seguros. Vigila a los niños cerca de plataformas. Reserva con operadores oficiales (PeruRail, Inca Rail).',
        icon: CheckCircle,
        severity: 'info'
      }
    ]
  },
  {
    id: 'kids',
    title: 'Child-Specific Safety',
    titleEs: 'Seguridad Específica para Niños',
    description: 'Extra precautions for traveling with children.',
    descriptionEs: 'Precauciones extra para viajar con niños.',
    icon: Users,
    tips: [
      {
        title: 'ID Bracelets for Young Children',
        titleEs: 'Pulseras de Identificación para Niños Pequeños',
        content: 'Have young children wear bracelets with your phone number. Teach them your hotel name. Take a daily photo of their outfit for identification.',
        contentEs: 'Haz que los niños pequeños usen pulseras con tu número de teléfono. Enséñales el nombre de tu hotel. Toma una foto diaria de su ropa para identificación.',
        icon: Users,
        severity: 'info'
      },
      {
        title: 'Establish Meeting Points',
        titleEs: 'Establece Puntos de Encuentro',
        content: 'Before entering crowded areas, designate a meeting spot if separated. Teach kids to find a uniformed official or store employee if lost.',
        contentEs: 'Antes de entrar a áreas concurridas, designa un punto de encuentro si se separan. Enseña a los niños a encontrar un oficial uniformado o empleado de tienda si se pierden.',
        icon: MapPin,
        severity: 'warning'
      },
      {
        title: 'Altitude with Children',
        titleEs: 'Altitud con Niños',
        content: 'Children may not communicate symptoms well. Watch for behavior changes, loss of appetite, unusual fatigue. Don\'t push through - rest or descend if needed.',
        contentEs: 'Los niños pueden no comunicar bien los síntomas. Observa cambios de comportamiento, pérdida de apetito, fatiga inusual. No fuerces - descansa o desciende si es necesario.',
        icon: Mountain,
        severity: 'critical'
      },
      {
        title: 'Pool & Water Safety',
        titleEs: 'Seguridad en Piscinas y Agua',
        content: 'Many hotel pools don\'t have lifeguards. Never leave children unattended. Ocean currents on Peru\'s coast can be strong.',
        contentEs: 'Muchas piscinas de hotel no tienen salvavidas. Nunca dejes a los niños sin supervisión. Las corrientes oceánicas en la costa de Perú pueden ser fuertes.',
        icon: Droplets,
        severity: 'warning'
      }
    ]
  }
];

const emergencyNumbers = [
  { service: 'Police', serviceEs: 'Policía', number: '105', note: 'National emergency' },
  { service: 'Fire', serviceEs: 'Bomberos', number: '116', note: '' },
  { service: 'Ambulance', serviceEs: 'Ambulancia', number: '117', note: '' },
  { service: 'Tourist Police', serviceEs: 'Policía de Turismo', number: '(01) 460-1060', note: 'Lima - English speaking' },
  { service: 'Tourist Protection', serviceEs: 'Protección al Turista', number: '01-574-8000', note: 'iPeru hotline 24/7' },
];

const safetyByRegion = [
  {
    region: 'Lima',
    regionEs: 'Lima',
    level: 'moderate',
    tips: 'Miraflores and Barranco are safest for tourists. Avoid Centro alone at night. Use Uber or registered taxis.',
    tipsEs: 'Miraflores y Barranco son los más seguros para turistas. Evita el Centro solo de noche. Usa Uber o taxis registrados.'
  },
  {
    region: 'Cusco & Sacred Valley',
    regionEs: 'Cusco y Valle Sagrado',
    level: 'safe',
    tips: 'Very tourist-friendly with strong police presence. Watch for pickpockets in crowded areas. Altitude is the main concern.',
    tipsEs: 'Muy amigable para turistas con fuerte presencia policial. Cuidado con carteristas en áreas concurridas. La altitud es la principal preocupación.'
  },
  {
    region: 'Machu Picchu / Aguas Calientes',
    regionEs: 'Machu Picchu / Aguas Calientes',
    level: 'safe',
    tips: 'Extremely safe tourist zone. Main risks are slips on wet stairs and altitude. Stay on marked trails.',
    tipsEs: 'Zona turística extremadamente segura. Principales riesgos son resbalones en escaleras mojadas y altitud. Mantente en senderos marcados.'
  },
  {
    region: 'Amazon Lodges',
    regionEs: 'Lodges Amazónicos',
    level: 'safe',
    tips: 'Reputable lodges are very safe. Follow guide instructions. Insect protection essential. Don\'t swim in rivers without guide approval.',
    tipsEs: 'Lodges reputados son muy seguros. Sigue instrucciones del guía. Protección de insectos esencial. No nades en ríos sin aprobación del guía.'
  },
  {
    region: 'Arequipa & Colca',
    regionEs: 'Arequipa y Colca',
    level: 'safe',
    tips: 'Safe for tourists. Colca roads are winding - motion sickness common. High altitude at Cruz del Condor viewpoint.',
    tipsEs: 'Seguro para turistas. Las carreteras del Colca son sinuosas - mareo común. Alta altitud en el mirador Cruz del Cóndor.'
  },
  {
    region: 'Lake Titicaca / Puno',
    regionEs: 'Lago Titicaca / Puno',
    level: 'safe',
    tips: 'Safe but very high altitude (3,830m). Cold at night year-round. Boat trips are safe with licensed operators.',
    tipsEs: 'Seguro pero muy alta altitud (3,830m). Frío de noche todo el año. Paseos en bote son seguros con operadores licenciados.'
  }
];

const severityColors = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  critical: 'bg-red-50 border-red-200 text-red-800'
};

const levelColors = {
  safe: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  caution: 'bg-orange-100 text-orange-800'
};

export default function SafetyPage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-ocean py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Guía de Seguridad' : 'Safety Guide'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Consejos esenciales de seguridad para viajes familiares seguros en Perú'
              : 'Essential safety tips for secure family travel in Peru'}
          </p>
        </div>
      </section>

      {/* Overall Safety Message */}
      <section className="container-peru py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-12 relative z-10">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Perú es Seguro para Familias' : 'Peru is Safe for Families'}
              </h2>
              <p className="text-gray-700">
                {locale === 'es'
                  ? 'Perú es generalmente un destino muy seguro para familias. Millones de turistas visitan cada año sin incidentes. Con precauciones básicas de sentido común, tu familia tendrá una experiencia maravillosa y segura. Esta guía cubre consejos para hacer tu viaje aún más tranquilo.'
                  : 'Peru is generally a very safe destination for families. Millions of tourists visit each year without incident. With basic common-sense precautions, your family will have a wonderful and safe experience. This guide covers tips to make your trip even more worry-free.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="container-peru py-8">
        <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
          <h2 className="text-xl font-display font-bold text-red-800 mb-4 flex items-center gap-2">
            <Phone className="w-6 h-6" />
            {locale === 'es' ? 'Números de Emergencia' : 'Emergency Numbers'}
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {emergencyNumbers.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-red-600">{item.number}</p>
                <p className="font-medium text-gray-800">
                  {locale === 'es' ? item.serviceEs : item.service}
                </p>
                {item.note && <p className="text-xs text-gray-500 mt-1">{item.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Categories */}
      <section className="container-peru py-8">
        <div className="space-y-8">
          {safetyCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <div key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-peru-sand/30 p-6 flex items-center gap-4">
                  <div className="w-14 h-14 bg-peru-gold/20 rounded-xl flex items-center justify-center">
                    <CategoryIcon className="w-7 h-7 text-peru-gold" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-peru-earth">
                      {locale === 'es' ? category.titleEs : category.title}
                    </h2>
                    <p className="text-gray-600">
                      {locale === 'es' ? category.descriptionEs : category.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  {category.tips.map((tip, index) => {
                    const TipIcon = tip.icon;
                    return (
                      <div
                        key={index}
                        className={`rounded-xl p-4 border ${severityColors[tip.severity]}`}
                      >
                        <div className="flex items-start gap-3">
                          <TipIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-bold mb-1">
                              {locale === 'es' ? tip.titleEs : tip.title}
                            </h3>
                            <p className="text-sm opacity-90">
                              {locale === 'es' ? tip.contentEs : tip.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety by Region */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-8">
            {locale === 'es' ? 'Seguridad por Región' : 'Safety by Region'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyByRegion.map((region, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-bold text-peru-earth">
                    {locale === 'es' ? region.regionEs : region.region}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${levelColors[region.level as keyof typeof levelColors]}`}>
                    {region.level === 'safe' ? (locale === 'es' ? 'Seguro' : 'Safe') :
                     region.level === 'moderate' ? (locale === 'es' ? 'Moderado' : 'Moderate') :
                     (locale === 'es' ? 'Precaución' : 'Caution')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">
                  {locale === 'es' ? region.tipsEs : region.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Do's and Don'ts */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Resumen Rápido' : 'Quick Summary'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
            <h3 className="font-display font-bold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              {locale === 'es' ? 'Hacer' : 'Do'}
            </h3>
            <ul className="space-y-2">
              {[
                { en: 'Get comprehensive travel insurance', es: 'Obtener seguro de viaje completo' },
                { en: 'Use registered taxis or ride apps', es: 'Usar taxis registrados o apps de transporte' },
                { en: 'Stay hydrated at altitude', es: 'Mantenerse hidratado en altura' },
                { en: 'Keep copies of documents', es: 'Mantener copias de documentos' },
                { en: 'Teach kids emergency protocols', es: 'Enseñar a los niños protocolos de emergencia' },
                { en: 'Book reputable tour operators', es: 'Reservar operadores turísticos reputados' },
                { en: 'Drink only bottled water', es: 'Beber solo agua embotellada' },
                { en: 'Use sunscreen and hats daily', es: 'Usar protector solar y sombreros diariamente' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-green-700">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>{locale === 'es' ? item.es : item.en}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
            <h3 className="font-display font-bold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              {locale === 'es' ? 'No Hacer' : 'Don\'t'}
            </h3>
            <ul className="space-y-2">
              {[
                { en: 'Flash expensive items or cash', es: 'Mostrar objetos costosos o efectivo' },
                { en: 'Use phones walking in crowds', es: 'Usar teléfonos caminando entre multitudes' },
                { en: 'Ignore altitude symptoms', es: 'Ignorar síntomas de altitud' },
                { en: 'Take unmarked taxis at night', es: 'Tomar taxis sin marcar de noche' },
                { en: 'Leave children unattended at pools', es: 'Dejar niños sin supervisión en piscinas' },
                { en: 'Drink tap water', es: 'Beber agua del grifo' },
                { en: 'Travel mountain roads at night', es: 'Viajar por carreteras de montaña de noche' },
                { en: 'Skip travel insurance', es: 'Omitir seguro de viaje' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-red-700">
                  <XCircle className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>{locale === 'es' ? item.es : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-peru-sand py-12">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
            {locale === 'es' ? '¿Listo para una aventura segura?' : 'Ready for a safe adventure?'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Explora itinerarios diseñados con la seguridad familiar en mente.'
              : 'Explore itineraries designed with family safety in mind.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraries/" className="btn-primary">
              {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
            </Link>
            <Link href="/altitude-guide/" className="btn-gold">
              {locale === 'es' ? 'Guía de Altitud' : 'Altitude Guide'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
