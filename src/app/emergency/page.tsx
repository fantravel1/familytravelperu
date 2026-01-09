'use client';

import { useI18n } from '@/lib/i18n';
import {
  Phone,
  AlertTriangle,
  Hospital,
  Shield,
  Building2,
  MapPin,
  Clock,
  Heart,
  Car,
  Flame,
  Users,
  CreditCard,
  Smartphone,
  FileText
} from 'lucide-react';

interface EmergencyContact {
  name: string;
  nameEs: string;
  number: string;
  description: string;
  descriptionEs: string;
  icon: React.ElementType;
  available: string;
  availableEs: string;
}

const emergencyNumbers: EmergencyContact[] = [
  {
    name: 'Police (PNP)',
    nameEs: 'Policía (PNP)',
    number: '105',
    description: 'National Police of Peru - for crimes, theft, and security emergencies',
    descriptionEs: 'Policía Nacional del Perú - para crímenes, robos y emergencias de seguridad',
    icon: Shield,
    available: '24/7',
    availableEs: '24/7'
  },
  {
    name: 'Fire Department',
    nameEs: 'Bomberos',
    number: '116',
    description: 'Fire emergencies and some rescue operations',
    descriptionEs: 'Emergencias de incendios y algunas operaciones de rescate',
    icon: Flame,
    available: '24/7',
    availableEs: '24/7'
  },
  {
    name: 'Medical Emergency (SAMU)',
    nameEs: 'Emergencia Médica (SAMU)',
    number: '106',
    description: 'Public ambulance service - free but may have long wait times',
    descriptionEs: 'Servicio de ambulancia pública - gratis pero puede tener tiempos de espera largos',
    icon: Hospital,
    available: '24/7',
    availableEs: '24/7'
  },
  {
    name: 'Tourist Police (POLTUR)',
    nameEs: 'Policía de Turismo (POLTUR)',
    number: '(01) 460-1060',
    description: 'Specialized police for tourists - English-speaking officers available',
    descriptionEs: 'Policía especializada para turistas - oficiales que hablan inglés disponibles',
    icon: Users,
    available: '24/7 in major cities',
    availableEs: '24/7 en ciudades principales'
  },
  {
    name: 'Road Emergency',
    nameEs: 'Emergencia Vial',
    number: '110',
    description: 'Traffic accidents and road emergencies',
    descriptionEs: 'Accidentes de tránsito y emergencias viales',
    icon: Car,
    available: '24/7',
    availableEs: '24/7'
  },
  {
    name: 'Defensa Civil',
    nameEs: 'Defensa Civil',
    number: '115',
    description: 'Natural disasters, earthquakes, floods',
    descriptionEs: 'Desastres naturales, terremotos, inundaciones',
    icon: AlertTriangle,
    available: '24/7',
    availableEs: '24/7'
  }
];

interface Embassy {
  country: string;
  countryEs: string;
  address: string;
  phone: string;
  emergency: string;
  hours: string;
  hoursEs: string;
}

const embassies: Embassy[] = [
  {
    country: 'United States',
    countryEs: 'Estados Unidos',
    address: 'Av. La Encalada, Block 17, Surco, Lima',
    phone: '(01) 618-2000',
    emergency: '(01) 618-2000',
    hours: 'Mon-Fri 8:00-17:00',
    hoursEs: 'Lun-Vie 8:00-17:00'
  },
  {
    country: 'United Kingdom',
    countryEs: 'Reino Unido',
    address: 'Torre Parque Mar, Av. José Larco 1301, Miraflores, Lima',
    phone: '(01) 617-3000',
    emergency: '+44 20 7008 5000',
    hours: 'Mon-Thu 8:30-17:00, Fri 8:30-14:00',
    hoursEs: 'Lun-Jue 8:30-17:00, Vie 8:30-14:00'
  },
  {
    country: 'Canada',
    countryEs: 'Canadá',
    address: 'Calle Bolognesi 228, Miraflores, Lima',
    phone: '(01) 319-3200',
    emergency: '+1 613-996-8885',
    hours: 'Mon-Thu 8:30-12:30, 13:30-17:15',
    hoursEs: 'Lun-Jue 8:30-12:30, 13:30-17:15'
  },
  {
    country: 'Australia',
    countryEs: 'Australia',
    address: 'Av. La Paz 1049, Miraflores, Lima',
    phone: '(01) 630-0500',
    emergency: '+61 2 6261 3305',
    hours: 'Mon-Fri 8:30-17:00',
    hoursEs: 'Lun-Vie 8:30-17:00'
  },
  {
    country: 'Germany',
    countryEs: 'Alemania',
    address: 'Av. Dionisio Derteano 144, San Isidro, Lima',
    phone: '(01) 212-5016',
    emergency: '(01) 212-5016',
    hours: 'Mon-Fri 9:00-12:00',
    hoursEs: 'Lun-Vie 9:00-12:00'
  },
  {
    country: 'France',
    countryEs: 'Francia',
    address: 'Av. Arequipa 3415, San Isidro, Lima',
    phone: '(01) 215-8400',
    emergency: '(01) 215-8400',
    hours: 'Mon-Fri 8:30-13:00',
    hoursEs: 'Lun-Vie 8:30-13:00'
  }
];

interface Hospital {
  name: string;
  city: string;
  cityEs: string;
  address: string;
  phone: string;
  type: string;
  typeEs: string;
}

const hospitals: Hospital[] = [
  {
    name: 'Clínica Anglo Americana',
    city: 'Lima',
    cityEs: 'Lima',
    address: 'Av. Alfredo Salazar, San Isidro',
    phone: '(01) 616-8900',
    type: 'Private - English-speaking staff',
    typeEs: 'Privado - Personal que habla inglés'
  },
  {
    name: 'Clínica Ricardo Palma',
    city: 'Lima',
    cityEs: 'Lima',
    address: 'Av. Javier Prado Este 1066, San Isidro',
    phone: '(01) 224-2224',
    type: 'Private - 24hr Emergency',
    typeEs: 'Privado - Emergencia 24hr'
  },
  {
    name: 'Clínica San Pablo',
    city: 'Cusco',
    cityEs: 'Cusco',
    address: 'Av. Infancia 508, Cusco',
    phone: '(084) 240-040',
    type: 'Private - Altitude specialists',
    typeEs: 'Privado - Especialistas en altitud'
  },
  {
    name: 'Hospital Regional Cusco',
    city: 'Cusco',
    cityEs: 'Cusco',
    address: 'Av. de la Cultura s/n, Cusco',
    phone: '(084) 227-661',
    type: 'Public - Main regional hospital',
    typeEs: 'Público - Hospital regional principal'
  },
  {
    name: 'Clínica Arequipa',
    city: 'Arequipa',
    cityEs: 'Arequipa',
    address: 'Esq. Puente Grau y Av. Bolognesi, Arequipa',
    phone: '(054) 253-424',
    type: 'Private - Well-equipped',
    typeEs: 'Privado - Bien equipado'
  }
];

export default function EmergencyPage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Contactos de Emergencia' : 'Emergency Contacts'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Números importantes, embajadas y hospitales para tu viaje familiar a Perú. Guarda esta página.'
                : 'Important numbers, embassies, and hospitals for your family trip to Peru. Save this page.'}
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Numbers */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Números de Emergencia' : 'Emergency Numbers'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyNumbers.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-peru-earth mb-1">
                        {locale === 'es' ? contact.nameEs : contact.name}
                      </h3>
                      <p className="text-3xl font-bold text-red-600 mb-2">{contact.number}</p>
                      <p className="text-sm text-gray-600 mb-2">
                        {locale === 'es' ? contact.descriptionEs : contact.description}
                      </p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {locale === 'es' ? contact.availableEs : contact.available}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Embassies */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center flex items-center justify-center gap-2">
            <Building2 className="h-8 w-8 text-peru-terracotta" />
            {locale === 'es' ? 'Embajadas en Lima' : 'Embassies in Lima'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {embassies.map((embassy, idx) => (
              <div key={idx} className="bg-peru-sand/30 rounded-xl p-6">
                <h3 className="font-bold text-peru-earth mb-3 text-lg">
                  {locale === 'es' ? embassy.countryEs : embassy.country}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-peru-terracotta flex-shrink-0 mt-0.5" />
                    <span>{embassy.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-peru-terracotta" />
                    <span>{embassy.phone}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <span className="font-medium">{locale === 'es' ? 'Emergencia:' : 'Emergency:'} {embassy.emergency}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{locale === 'es' ? embassy.hoursEs : embassy.hours}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center flex items-center justify-center gap-2">
            <Hospital className="h-8 w-8 text-peru-terracotta" />
            {locale === 'es' ? 'Hospitales Recomendados' : 'Recommended Hospitals'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-peru-earth">{hospital.name}</h3>
                  <span className="text-xs bg-peru-gold/20 text-peru-earth px-2 py-1 rounded-full">
                    {locale === 'es' ? hospital.cityEs : hospital.city}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-gray-700">
                    <MapPin className="h-4 w-4 text-peru-terracotta flex-shrink-0 mt-0.5" />
                    <span>{hospital.address}</span>
                  </p>
                  <p className="flex items-center gap-2 text-gray-700">
                    <Phone className="h-4 w-4 text-peru-terracotta" />
                    <span className="font-medium">{hospital.phone}</span>
                  </p>
                  <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {locale === 'es' ? hospital.typeEs : hospital.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do */}
      <section className="py-12 lg:py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Qué Hacer en una Emergencia' : 'What to Do in an Emergency'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-red-500" />
                <h3 className="font-bold text-peru-earth text-lg">
                  {locale === 'es' ? 'Emergencia Médica' : 'Medical Emergency'}
                </h3>
              </div>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>{locale === 'es' ? 'Llama al 106 (SAMU) o ve directamente al hospital más cercano' : 'Call 106 (SAMU) or go directly to the nearest hospital'}</li>
                <li>{locale === 'es' ? 'Para emergencias graves, ve a una clínica privada si es posible' : 'For serious emergencies, go to a private clinic if possible'}</li>
                <li>{locale === 'es' ? 'Ten tu seguro de viaje y pasaporte a mano' : 'Have your travel insurance and passport ready'}</li>
                <li>{locale === 'es' ? 'Contacta a tu embajada si necesitas ayuda' : 'Contact your embassy if you need assistance'}</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-500" />
                <h3 className="font-bold text-peru-earth text-lg">
                  {locale === 'es' ? 'Robo o Crimen' : 'Theft or Crime'}
                </h3>
              </div>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>{locale === 'es' ? 'Llama al 105 (Policía) o busca la Policía de Turismo' : 'Call 105 (Police) or find the Tourist Police'}</li>
                <li>{locale === 'es' ? 'Haz una denuncia policial para tu seguro' : 'File a police report for your insurance'}</li>
                <li>{locale === 'es' ? 'Contacta tu banco si te robaron tarjetas' : 'Contact your bank if cards were stolen'}</li>
                <li>{locale === 'es' ? 'Reporta pasaportes robados a tu embajada' : 'Report stolen passports to your embassy'}</li>
              </ol>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-8 w-8 text-green-500" />
                <h3 className="font-bold text-peru-earth text-lg">
                  {locale === 'es' ? 'Tarjetas Perdidas/Robadas' : 'Lost/Stolen Cards'}
                </h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Visa:</strong> +1-303-967-1096</li>
                <li><strong>Mastercard:</strong> +1-636-722-7111</li>
                <li><strong>Amex:</strong> +1-336-393-1111</li>
                <li className="text-gray-500 text-xs mt-2">
                  {locale === 'es' ? '* Números internacionales con cobro revertido' : '* International collect call numbers'}
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-purple-500" />
                <h3 className="font-bold text-peru-earth text-lg">
                  {locale === 'es' ? 'Pasaporte Perdido' : 'Lost Passport'}
                </h3>
              </div>
              <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                <li>{locale === 'es' ? 'Haz denuncia policial inmediatamente' : 'File a police report immediately'}</li>
                <li>{locale === 'es' ? 'Contacta tu embajada para pasaporte de emergencia' : 'Contact your embassy for emergency passport'}</li>
                <li>{locale === 'es' ? 'Ten copias de tu pasaporte guardadas separadamente' : 'Keep copies of your passport stored separately'}</li>
                <li>{locale === 'es' ? 'Guarda fotos del pasaporte en tu email' : 'Keep passport photos in your email'}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Smartphone className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-3">
                  {locale === 'es' ? 'Consejos Importantes' : 'Important Tips'}
                </h3>
                <ul className="text-sm text-yellow-700 space-y-2">
                  <li>• {locale === 'es' ? 'Guarda esta página o toma capturas de pantalla' : 'Save this page or take screenshots'}</li>
                  <li>• {locale === 'es' ? 'Descarga los números en tu teléfono antes de viajar' : 'Download the numbers to your phone before traveling'}</li>
                  <li>• {locale === 'es' ? 'Compra un SIM local para tener acceso a llamadas' : 'Buy a local SIM for access to calls'}</li>
                  <li>• {locale === 'es' ? 'Ten siempre copia de documentos importantes' : 'Always keep copies of important documents'}</li>
                  <li>• {locale === 'es' ? 'Registra tu viaje con tu embajada' : 'Register your trip with your embassy'}</li>
                  <li>• {locale === 'es' ? 'Compra seguro de viaje ANTES de llegar - es esencial' : 'Buy travel insurance BEFORE arriving - it\'s essential'}</li>
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
            {locale === 'es' ? '¿Necesitas Más Información?' : 'Need More Information?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Consulta nuestra guía de salud para consejos de prevención y preparación.'
              : 'Check out our health guide for prevention and preparation tips.'}
          </p>
          <a
            href="/health/"
            className="inline-block bg-white text-peru-earth px-8 py-3 rounded-full font-semibold hover:bg-peru-sand transition-colors"
          >
            {locale === 'es' ? 'Ver Guía de Salud' : 'View Health Guide'}
          </a>
        </div>
      </section>
    </main>
  );
}
