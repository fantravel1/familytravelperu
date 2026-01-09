'use client';

import { useI18n } from '@/lib/i18n';
import {
  Wifi,
  Smartphone,
  Signal,
  MapPin,
  Check,
  X,
  AlertTriangle,
  CreditCard,
  Building2,
  Mountain,
  Plane,
  Baby,
  Download,
  Globe
} from 'lucide-react';

interface CarrierInfo {
  name: string;
  coverage: 'excellent' | 'good' | 'limited';
  strengths: string[];
  strengthsEs: string[];
  touristPlan: string;
  touristPlanEs: string;
  price: string;
}

interface LocationConnectivity {
  location: string;
  locationEs: string;
  mobileSignal: 'excellent' | 'good' | 'limited' | 'none';
  wifi: 'excellent' | 'good' | 'limited' | 'none';
  notes: string;
  notesEs: string;
}

const carriers: CarrierInfo[] = [
  {
    name: 'Claro',
    coverage: 'excellent',
    strengths: [
      'Best overall coverage in Peru',
      'Works well in remote areas',
      'Reliable 4G in cities'
    ],
    strengthsEs: [
      'Mejor cobertura general en Perú',
      'Funciona bien en áreas remotas',
      '4G confiable en ciudades'
    ],
    touristPlan: 'Tourist SIM available at airport and stores',
    touristPlanEs: 'SIM turística disponible en aeropuerto y tiendas',
    price: '$10-30 for 4-15GB data'
  },
  {
    name: 'Movistar',
    coverage: 'excellent',
    strengths: [
      'Strong urban coverage',
      'Good data speeds',
      'Widely available'
    ],
    strengthsEs: [
      'Fuerte cobertura urbana',
      'Buenas velocidades de datos',
      'Ampliamente disponible'
    ],
    touristPlan: 'Prepaid SIM at official stores',
    touristPlanEs: 'SIM prepago en tiendas oficiales',
    price: '$8-25 for 3-12GB data'
  },
  {
    name: 'Entel',
    coverage: 'good',
    strengths: [
      'Competitive pricing',
      'Good in major cities',
      'Simple top-up system'
    ],
    strengthsEs: [
      'Precios competitivos',
      'Bueno en ciudades principales',
      'Sistema de recarga simple'
    ],
    touristPlan: 'Easy prepaid options',
    touristPlanEs: 'Opciones prepago fáciles',
    price: '$7-20 for 3-10GB data'
  },
  {
    name: 'Bitel',
    coverage: 'limited',
    strengths: [
      'Cheapest option',
      'Improving coverage',
      'Good for budget travelers'
    ],
    strengthsEs: [
      'Opción más barata',
      'Cobertura mejorando',
      'Bueno para viajeros con presupuesto'
    ],
    touristPlan: 'Budget prepaid plans',
    touristPlanEs: 'Planes prepago económicos',
    price: '$5-15 for 2-8GB data'
  }
];

const locationConnectivity: LocationConnectivity[] = [
  {
    location: 'Lima',
    locationEs: 'Lima',
    mobileSignal: 'excellent',
    wifi: 'excellent',
    notes: 'Full 4G coverage. WiFi in most cafes, restaurants, and hotels.',
    notesEs: 'Cobertura 4G completa. WiFi en la mayoría de cafés, restaurantes y hoteles.'
  },
  {
    location: 'Cusco City',
    locationEs: 'Ciudad de Cusco',
    mobileSignal: 'excellent',
    wifi: 'excellent',
    notes: 'Strong coverage in city center. Most tourist spots have good WiFi.',
    notesEs: 'Cobertura fuerte en el centro. La mayoría de lugares turísticos tienen buen WiFi.'
  },
  {
    location: 'Machu Picchu',
    locationEs: 'Machu Picchu',
    mobileSignal: 'limited',
    wifi: 'limited',
    notes: 'Spotty at ruins. Better in Aguas Calientes town. Download offline maps!',
    notesEs: 'Irregular en las ruinas. Mejor en el pueblo de Aguas Calientes. ¡Descarga mapas offline!'
  },
  {
    location: 'Sacred Valley',
    locationEs: 'Valle Sagrado',
    mobileSignal: 'good',
    wifi: 'good',
    notes: 'Good in towns (Ollantaytambo, Pisac). Can be weak between villages.',
    notesEs: 'Bueno en pueblos (Ollantaytambo, Pisac). Puede ser débil entre pueblos.'
  },
  {
    location: 'Lake Titicaca / Puno',
    locationEs: 'Lago Titicaca / Puno',
    mobileSignal: 'good',
    wifi: 'good',
    notes: 'Good in Puno. Limited on islands - enjoy the digital detox!',
    notesEs: 'Bueno en Puno. Limitado en las islas - ¡disfruta el descanso digital!'
  },
  {
    location: 'Arequipa',
    locationEs: 'Arequipa',
    mobileSignal: 'excellent',
    wifi: 'excellent',
    notes: 'Modern city with excellent connectivity throughout.',
    notesEs: 'Ciudad moderna con excelente conectividad en todas partes.'
  },
  {
    location: 'Colca Canyon',
    locationEs: 'Cañón del Colca',
    mobileSignal: 'limited',
    wifi: 'limited',
    notes: 'Basic coverage in Chivay. Very limited at viewpoints and remote areas.',
    notesEs: 'Cobertura básica en Chivay. Muy limitada en miradores y áreas remotas.'
  },
  {
    location: 'Amazon / Iquitos',
    locationEs: 'Amazonas / Iquitos',
    mobileSignal: 'limited',
    wifi: 'limited',
    notes: 'Good in Iquitos city. Jungle lodges have limited or no connectivity.',
    notesEs: 'Bueno en la ciudad de Iquitos. Los lodges de la selva tienen conectividad limitada o nula.'
  },
  {
    location: 'Nazca',
    locationEs: 'Nazca',
    mobileSignal: 'good',
    wifi: 'good',
    notes: 'Decent coverage in town. Limited in desert areas.',
    notesEs: 'Cobertura decente en el pueblo. Limitada en áreas desérticas.'
  },
  {
    location: 'Huacachina / Ica',
    locationEs: 'Huacachina / Ica',
    mobileSignal: 'good',
    wifi: 'good',
    notes: 'Good in Ica. Huacachina oasis has WiFi in most hotels.',
    notesEs: 'Bueno en Ica. El oasis de Huacachina tiene WiFi en la mayoría de hoteles.'
  },
  {
    location: 'Máncora / Northern Beaches',
    locationEs: 'Máncora / Playas del Norte',
    mobileSignal: 'good',
    wifi: 'good',
    notes: 'Good coverage in towns. Beach hotels usually have WiFi.',
    notesEs: 'Buena cobertura en pueblos. Los hoteles de playa usualmente tienen WiFi.'
  },
  {
    location: 'Rainbow Mountain',
    locationEs: 'Montaña de Colores',
    mobileSignal: 'none',
    wifi: 'none',
    notes: 'No coverage at altitude. Download everything before the trek.',
    notesEs: 'Sin cobertura en la altitud. Descarga todo antes de la caminata.'
  }
];

const getSignalColor = (level: string) => {
  switch (level) {
    case 'excellent': return 'text-green-600';
    case 'good': return 'text-yellow-600';
    case 'limited': return 'text-orange-500';
    case 'none': return 'text-red-500';
    default: return 'text-gray-500';
  }
};

const getSignalBars = (level: string) => {
  const bars = level === 'excellent' ? 4 : level === 'good' ? 3 : level === 'limited' ? 1 : 0;
  return (
    <div className="flex items-end space-x-0.5">
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={`w-1 rounded-sm ${
            bar <= bars ? getSignalColor(level).replace('text-', 'bg-') : 'bg-gray-200'
          }`}
          style={{ height: `${bar * 4}px` }}
        />
      ))}
    </div>
  );
};

const getCoverageColor = (coverage: string) => {
  switch (coverage) {
    case 'excellent': return 'bg-green-100 text-green-800';
    case 'good': return 'bg-yellow-100 text-yellow-800';
    case 'limited': return 'bg-orange-100 text-orange-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export default function ConnectivityPage() {
  const { locale } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Wifi className="h-8 w-8" />
              <span className="text-blue-200 font-semibold">
                {locale === 'es' ? 'Conectividad' : 'Connectivity'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Internet y Conectividad en Perú'
                : 'Internet & Connectivity in Peru'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Todo lo que necesitas saber sobre mantenerte conectado durante tu viaje familiar a Perú.'
                : 'Everything you need to know about staying connected during your family trip to Peru.'}
            </p>
          </div>
        </div>
      </section>

      {/* Key Tips Banner */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Smartphone className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Compra SIM Local' : 'Buy Local SIM'}
              </span>
              <span className="text-xs text-gray-500">$10-30 USD</span>
            </div>
            <div className="flex flex-col items-center">
              <Download className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Descarga Offline' : 'Download Offline'}
              </span>
              <span className="text-xs text-gray-500">Maps, guides</span>
            </div>
            <div className="flex flex-col items-center">
              <Signal className="h-8 w-8 text-yellow-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Cobertura Variable' : 'Variable Coverage'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Según ubicación' : 'By location'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'WiFi Gratis' : 'Free WiFi'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Hoteles, cafés' : 'Hotels, cafés'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SIM Card Options */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Opciones de SIM para Turistas' : 'Tourist SIM Card Options'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carriers.map((carrier) => (
              <div key={carrier.name} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-peru-earth">{carrier.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${getCoverageColor(carrier.coverage)}`}>
                    {carrier.coverage === 'excellent'
                      ? (locale === 'es' ? 'Excelente' : 'Excellent')
                      : carrier.coverage === 'good'
                      ? (locale === 'es' ? 'Bueno' : 'Good')
                      : (locale === 'es' ? 'Limitado' : 'Limited')}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {(locale === 'es' ? carrier.strengthsEs : carrier.strengths).map((s, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {locale === 'es' ? carrier.touristPlanEs : carrier.touristPlan}
                  </p>
                  <p className="text-lg font-bold text-peru-terracotta">{carrier.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SIM Purchase Tips */}
          <div className="mt-8 bg-blue-50 rounded-2xl p-6">
            <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
              {locale === 'es' ? 'Cómo Comprar una SIM' : 'How to Buy a SIM'}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Plane className="h-4 w-4 mr-2 text-blue-500" />
                  {locale === 'es' ? 'En el Aeropuerto' : 'At the Airport'}
                </h4>
                <p className="text-sm text-gray-600">
                  {locale === 'es'
                    ? 'Busca stands de Claro o Movistar después de aduanas. Conveniente pero ligeramente más caro.'
                    : 'Look for Claro or Movistar stands after customs. Convenient but slightly pricier.'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Building2 className="h-4 w-4 mr-2 text-blue-500" />
                  {locale === 'es' ? 'Tiendas Oficiales' : 'Official Stores'}
                </h4>
                <p className="text-sm text-gray-600">
                  {locale === 'es'
                    ? 'Mejores precios y más opciones de planes. Trae tu pasaporte para registro.'
                    : 'Better prices and more plan options. Bring your passport for registration.'}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  {locale === 'es' ? 'Lo Que Necesitas' : 'What You Need'}
                </h4>
                <p className="text-sm text-gray-600">
                  {locale === 'es'
                    ? 'Teléfono desbloqueado, pasaporte, efectivo o tarjeta. El proceso toma 10-15 minutos.'
                    : 'Unlocked phone, passport, cash or card. Process takes 10-15 minutes.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectivity by Location */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Conectividad por Ubicación' : 'Connectivity by Location'}
          </h2>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-peru-sand/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-peru-earth font-semibold">
                      {locale === 'es' ? 'Ubicación' : 'Location'}
                    </th>
                    <th className="px-6 py-4 text-center text-peru-earth font-semibold">
                      {locale === 'es' ? 'Señal Móvil' : 'Mobile Signal'}
                    </th>
                    <th className="px-6 py-4 text-center text-peru-earth font-semibold">
                      WiFi
                    </th>
                    <th className="px-6 py-4 text-left text-peru-earth font-semibold">
                      {locale === 'es' ? 'Notas' : 'Notes'}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {locationConnectivity.map((loc, idx) => (
                    <tr key={idx} className="hover:bg-peru-sand/10">
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {locale === 'es' ? loc.locationEs : loc.location}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center space-x-2">
                          {getSignalBars(loc.mobileSignal)}
                          <Signal className={`h-4 w-4 ${getSignalColor(loc.mobileSignal)}`} />
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <Wifi className={`h-5 w-5 ${getSignalColor(loc.wifi)}`} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {locale === 'es' ? loc.notesEs : loc.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Download Before You Go */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Descarga Antes de Ir' : 'Download Before You Go'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-green-600" />
                  {locale === 'es' ? 'Apps Esenciales' : 'Essential Apps'}
                </h3>
                <ul className="space-y-3">
                  {[
                    { app: 'Google Maps', desc: locale === 'es' ? 'Descarga mapas offline de cada región' : 'Download offline maps of each region' },
                    { app: 'Maps.me', desc: locale === 'es' ? 'Excelente alternativa offline' : 'Excellent offline alternative' },
                    { app: 'Google Translate', desc: locale === 'es' ? 'Descarga español para traducción offline' : 'Download Spanish for offline translation' },
                    { app: 'WhatsApp', desc: locale === 'es' ? 'La app de mensajería más usada en Perú' : 'Most used messaging app in Peru' },
                    { app: 'XE Currency', desc: locale === 'es' ? 'Conversor de moneda offline' : 'Offline currency converter' },
                    { app: 'Peru Rail / Inca Rail', desc: locale === 'es' ? 'Boletos y horarios' : 'Tickets and schedules' }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-800">{item.app}</span>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Mountain className="h-5 w-5 mr-2 text-peru-terracotta" />
                  {locale === 'es' ? 'Para Áreas Remotas' : 'For Remote Areas'}
                </h3>
                <ul className="space-y-3">
                  {[
                    locale === 'es' ? 'Guías de viaje en PDF o ebooks' : 'Travel guides in PDF or ebooks',
                    locale === 'es' ? 'Listas de reproducción de música offline' : 'Offline music playlists',
                    locale === 'es' ? 'Shows/películas de Netflix descargados' : 'Downloaded Netflix shows/movies',
                    locale === 'es' ? 'Juegos offline para niños en transporte largo' : 'Offline games for kids on long transport',
                    locale === 'es' ? 'Información importante guardada (reservas, contactos)' : 'Important info saved (bookings, contacts)',
                    locale === 'es' ? 'Fotos de pasaportes y documentos' : 'Photos of passports and documents'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="h-5 w-5 text-peru-gold mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Roaming vs Local SIM */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Roaming vs SIM Local' : 'Roaming vs Local SIM'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-red-200">
                <h3 className="font-bold text-red-600 text-lg mb-4 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  {locale === 'es' ? 'Roaming Internacional' : 'International Roaming'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Muy caro ($10-15/día o más)' : 'Very expensive ($10-15/day or more)'}
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Límites de datos bajos' : 'Low data caps'}
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Cargos por exceso sorpresa' : 'Surprise overage charges'}
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Conveniente - no necesita configuración' : 'Convenient - no setup needed'}
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Mantén tu número de casa' : 'Keep your home number'}
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
                <h3 className="font-bold text-green-600 text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  {locale === 'es' ? 'SIM Local (Recomendado)' : 'Local SIM (Recommended)'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Mucho más barato ($10-30 total)' : 'Much cheaper ($10-30 total)'}
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Más datos incluidos' : 'More data included'}
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Fácil de recargar si necesitas más' : 'Easy to top up if you need more'}
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Requiere teléfono desbloqueado' : 'Requires unlocked phone'}
                  </li>
                  <li className="flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-1" />
                    {locale === 'es' ? 'Número temporal peruano' : 'Temporary Peruvian number'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Tips */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto text-center">
            <Baby className="h-12 w-12 mx-auto mb-4 text-peru-gold" />
            <h2 className="text-3xl font-display font-bold mb-6">
              {locale === 'es' ? 'Consejos de Conectividad para Familias' : 'Connectivity Tips for Families'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Para los Niños' : 'For the Kids'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Descarga contenido de entretenimiento antes de salir' : 'Download entertainment content before leaving'}</li>
                  <li>• {locale === 'es' ? 'Instala juegos offline para viajes largos en bus/tren' : 'Install offline games for long bus/train rides'}</li>
                  <li>• {locale === 'es' ? 'Descarga apps educativas sobre Perú' : 'Download educational apps about Peru'}</li>
                  <li>• {locale === 'es' ? 'Configura tiempo de pantalla para controlar uso' : 'Set up screen time to control usage'}</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Mantente en Contacto' : 'Staying in Touch'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Crea grupo de WhatsApp con familia en casa' : 'Create WhatsApp group with family back home'}</li>
                  <li>• {locale === 'es' ? 'Programa llamadas para cuando tengas WiFi confiable' : 'Schedule calls for when you have reliable WiFi'}</li>
                  <li>• {locale === 'es' ? 'Comparte ubicación en tiempo real con familiares' : 'Share live location with relatives'}</li>
                  <li>• {locale === 'es' ? 'Considera una SIM extra para emergencias' : 'Consider an extra SIM for emergencies'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-8">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-amber-800 mb-2">
                    {locale === 'es' ? 'Nota Importante' : 'Important Note'}
                  </h3>
                  <p className="text-amber-700 text-sm">
                    {locale === 'es'
                      ? 'En áreas remotas y sitios arqueológicos, disfruta estar desconectado. Algunos de los mejores momentos familiares en Perú ocurren cuando dejas el teléfono y realmente experimentas la magia que te rodea.'
                      : 'In remote areas and archaeological sites, embrace being disconnected. Some of the best family moments in Peru happen when you put the phone away and truly experience the magic around you.'}
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
