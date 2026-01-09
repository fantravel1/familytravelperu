'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  FileText,
  Plane,
  Clock,
  Check,
  X,
  AlertTriangle,
  Baby,
  Globe,
  CreditCard,
  Building2,
  Heart,
  Shield,
  Calendar
} from 'lucide-react';

interface CountryRequirement {
  country: string;
  countryEs: string;
  visaRequired: boolean;
  maxStay: string;
  notes: string;
  notesEs: string;
}

const visaFreeCountries: CountryRequirement[] = [
  { country: 'United States', countryEs: 'Estados Unidos', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Canada', countryEs: 'Canadá', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'United Kingdom', countryEs: 'Reino Unido', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Australia', countryEs: 'Australia', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'New Zealand', countryEs: 'Nueva Zelanda', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Germany', countryEs: 'Alemania', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'France', countryEs: 'Francia', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Spain', countryEs: 'España', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Italy', countryEs: 'Italia', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Netherlands', countryEs: 'Países Bajos', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Japan', countryEs: 'Japón', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'South Korea', countryEs: 'Corea del Sur', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Brazil', countryEs: 'Brasil', visaRequired: false, maxStay: '183 days', notes: 'ID card or passport', notesEs: 'DNI o pasaporte' },
  { country: 'Argentina', countryEs: 'Argentina', visaRequired: false, maxStay: '183 days', notes: 'ID card or passport', notesEs: 'DNI o pasaporte' },
  { country: 'Chile', countryEs: 'Chile', visaRequired: false, maxStay: '183 days', notes: 'ID card or passport', notesEs: 'DNI o pasaporte' },
  { country: 'Colombia', countryEs: 'Colombia', visaRequired: false, maxStay: '183 days', notes: 'ID card or passport', notesEs: 'DNI o pasaporte' },
  { country: 'Mexico', countryEs: 'México', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Israel', countryEs: 'Israel', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Singapore', countryEs: 'Singapur', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
  { country: 'Switzerland', countryEs: 'Suiza', visaRequired: false, maxStay: '183 days', notes: 'Valid passport required', notesEs: 'Pasaporte válido requerido' },
];

const entryDocuments = {
  en: [
    {
      title: 'Valid Passport',
      description: 'Must be valid for at least 6 months beyond your planned departure date from Peru',
      required: true,
      forKids: 'Each child needs their own passport - no exceptions'
    },
    {
      title: 'Return/Onward Ticket',
      description: 'Proof of departure from Peru (flight, bus, or other transportation)',
      required: true,
      forKids: 'Children\'s tickets should match adult itinerary'
    },
    {
      title: 'Proof of Accommodation',
      description: 'Hotel bookings or letter of invitation if staying with friends/family',
      required: false,
      forKids: 'Include children in all booking confirmations'
    },
    {
      title: 'Travel Insurance',
      description: 'Highly recommended but not mandatory for entry',
      required: false,
      forKids: 'Ensure policy covers all family members including children'
    },
    {
      title: 'Immigration Card (TAM)',
      description: 'Given on arrival - keep this safe for your entire stay!',
      required: true,
      forKids: 'Each person receives their own card - store children\'s cards safely'
    }
  ],
  es: [
    {
      title: 'Pasaporte Válido',
      description: 'Debe ser válido por al menos 6 meses después de tu fecha de salida planeada de Perú',
      required: true,
      forKids: 'Cada niño necesita su propio pasaporte - sin excepciones'
    },
    {
      title: 'Boleto de Regreso/Salida',
      description: 'Prueba de salida de Perú (vuelo, bus u otro transporte)',
      required: true,
      forKids: 'Los boletos de los niños deben coincidir con el itinerario de los adultos'
    },
    {
      title: 'Prueba de Alojamiento',
      description: 'Reservas de hotel o carta de invitación si te quedas con amigos/familia',
      required: false,
      forKids: 'Incluye a los niños en todas las confirmaciones de reserva'
    },
    {
      title: 'Seguro de Viaje',
      description: 'Muy recomendado pero no obligatorio para entrada',
      required: false,
      forKids: 'Asegura que la póliza cubra a todos los miembros de la familia incluyendo niños'
    },
    {
      title: 'Tarjeta de Inmigración (TAM)',
      description: '¡Se entrega al llegar - guárdala segura durante toda tu estancia!',
      required: true,
      forKids: 'Cada persona recibe su propia tarjeta - guarda las tarjetas de los niños de forma segura'
    }
  ]
};

const childTravelDocs = {
  en: [
    {
      situation: 'Both parents traveling together',
      documents: 'No additional documents required beyond passports',
      notes: 'Keep family booking confirmations together'
    },
    {
      situation: 'One parent traveling alone with child',
      documents: 'Notarized letter of consent from absent parent recommended',
      notes: 'While not always checked, it\'s strongly advised to avoid issues'
    },
    {
      situation: 'Grandparents or other relatives traveling with child',
      documents: 'Notarized letter of consent from BOTH parents required',
      notes: 'Must include travel dates, destinations, and guardian details'
    },
    {
      situation: 'Child has different surname than traveling parent',
      documents: 'Bring birth certificate showing relationship',
      notes: 'Apostilled if possible for international travel'
    },
    {
      situation: 'Adopted children',
      documents: 'Bring adoption papers or legal guardianship documents',
      notes: 'Certified/apostilled copies recommended'
    }
  ],
  es: [
    {
      situation: 'Ambos padres viajando juntos',
      documents: 'No se requieren documentos adicionales además de los pasaportes',
      notes: 'Mantén las confirmaciones de reserva familiar juntas'
    },
    {
      situation: 'Un padre viajando solo con el niño',
      documents: 'Se recomienda carta de consentimiento notariada del padre ausente',
      notes: 'Aunque no siempre se revisa, se aconseja fuertemente para evitar problemas'
    },
    {
      situation: 'Abuelos u otros familiares viajando con el niño',
      documents: 'Se requiere carta de consentimiento notariada de AMBOS padres',
      notes: 'Debe incluir fechas de viaje, destinos y detalles del guardián'
    },
    {
      situation: 'El niño tiene apellido diferente al padre que viaja',
      documents: 'Trae certificado de nacimiento mostrando la relación',
      notes: 'Apostillado si es posible para viaje internacional'
    },
    {
      situation: 'Niños adoptados',
      documents: 'Trae papeles de adopción o documentos de tutela legal',
      notes: 'Se recomiendan copias certificadas/apostilladas'
    }
  ]
};

export default function VisaPage() {
  const { locale } = useI18n();
  const [searchCountry, setSearchCountry] = useState('');

  const filteredCountries = visaFreeCountries.filter(c =>
    (locale === 'es' ? c.countryEs : c.country)
      .toLowerCase()
      .includes(searchCountry.toLowerCase())
  );

  const documents = locale === 'es' ? entryDocuments.es : entryDocuments.en;
  const childDocs = locale === 'es' ? childTravelDocs.es : childTravelDocs.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-8 w-8" />
              <span className="text-peru-gold font-semibold">
                {locale === 'es' ? 'Requisitos de Entrada' : 'Entry Requirements'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Visa y Requisitos de Entrada a Perú'
                : 'Peru Visa & Entry Requirements'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Todo lo que tu familia necesita saber sobre pasaportes, visas y documentos para ingresar a Perú.'
                : 'Everything your family needs to know about passports, visas, and documents for entering Peru.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? '100+ Países' : '100+ Countries'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Sin visa requerida' : 'Visa-free entry'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Hasta 183 Días' : 'Up to 183 Days'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Estancia turística' : 'Tourist stay'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FileText className="h-8 w-8 text-peru-terracotta mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Pasaporte 6 Meses' : '6 Month Passport'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Validez mínima' : 'Minimum validity'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Baby className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Documentos Niños' : 'Child Documents'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Ver requisitos abajo' : 'See requirements below'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visa-Free Countries */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-4 text-center">
            {locale === 'es' ? 'Países Sin Visa' : 'Visa-Free Countries'}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            {locale === 'es'
              ? 'Los ciudadanos de estos países pueden ingresar a Perú sin visa por hasta 183 días.'
              : 'Citizens from these countries can enter Peru visa-free for up to 183 days.'}
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder={locale === 'es' ? 'Buscar país...' : 'Search country...'}
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-peru-terracotta focus:ring-2 focus:ring-peru-terracotta/20 outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {filteredCountries.map((country, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-md flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">
                    {locale === 'es' ? country.countryEs : country.country}
                  </p>
                  <p className="text-xs text-gray-500">{country.maxStay}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            {locale === 'es'
              ? 'Esta no es una lista completa. Consulta con tu embajada local para confirmar requisitos.'
              : 'This is not a complete list. Check with your local embassy to confirm requirements.'}
          </p>
        </div>
      </section>

      {/* Entry Documents */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Documentos de Entrada' : 'Entry Documents'}
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 shadow-lg ${
                  doc.required ? 'border-l-4 border-peru-terracotta' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-peru-earth text-lg">{doc.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    doc.required
                      ? 'bg-red-100 text-red-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {doc.required
                      ? (locale === 'es' ? 'Obligatorio' : 'Required')
                      : (locale === 'es' ? 'Recomendado' : 'Recommended')}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{doc.description}</p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-sm text-purple-700">
                    <Baby className="h-4 w-4 inline mr-1" />
                    <strong>{locale === 'es' ? 'Para niños:' : 'For kids:'}</strong> {doc.forKids}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children's Travel Documents */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <Baby className="h-12 w-12 text-peru-terracotta mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Documentos para Niños' : 'Children\'s Travel Documents'}
              </h2>
              <p className="text-gray-600">
                {locale === 'es'
                  ? 'Requisitos especiales cuando viajan menores de edad'
                  : 'Special requirements when traveling with minors'}
              </p>
            </div>

            <div className="space-y-4">
              {childDocs.map((doc, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-peru-earth text-lg mb-2">{doc.situation}</h3>
                  <div className="flex items-start space-x-3 mb-2">
                    <FileText className="h-5 w-5 text-peru-gold flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{doc.documents}</p>
                  </div>
                  <p className="text-sm text-gray-500 ml-8">{doc.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TAM Card Warning */}
      <section className="py-16 bg-amber-50">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-peru-earth mb-4">
                    {locale === 'es'
                      ? '¡Importante! Sobre tu Tarjeta TAM'
                      : 'Important! About Your TAM Card'}
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      {locale === 'es'
                        ? 'La Tarjeta Andina de Migración (TAM) es un documento de entrada/salida que recibirás al llegar a Perú. Puede ser digital (código enviado a tu email) o físico.'
                        : 'The Tarjeta Andina de Migración (TAM) is an entry/exit document you\'ll receive upon arrival in Peru. It may be digital (code sent to your email) or physical.'}
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {locale === 'es'
                          ? 'Guárdala durante TODA tu estancia'
                          : 'Keep it for your ENTIRE stay'}
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {locale === 'es'
                          ? 'La necesitarás para salir del país'
                          : 'You\'ll need it to leave the country'}
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        {locale === 'es'
                          ? 'Toma foto/copia de respaldo'
                          : 'Take a photo/backup copy'}
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                        {locale === 'es'
                          ? 'Perderla = trámite complicado en Migraciones'
                          : 'Losing it = complicated process at Immigration'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* At the Airport */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Qué Esperar en el Aeropuerto' : 'What to Expect at the Airport'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-blue-600" />
                  {locale === 'es' ? 'Llegada' : 'Arrival'}
                </h3>
                <ol className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Pasar por control de inmigración (puede tardar 30-60 min)' : 'Go through immigration control (can take 30-60 min)',
                    locale === 'es' ? 'Presentar pasaporte y documentos' : 'Present passport and documents',
                    locale === 'es' ? 'Recibir TAM con días autorizados' : 'Receive TAM with authorized days',
                    locale === 'es' ? 'Recoger equipaje' : 'Collect luggage',
                    locale === 'es' ? 'Pasar por aduanas (declarar si es necesario)' : 'Pass through customs (declare if needed)',
                    locale === 'es' ? '¡Bienvenido a Perú!' : 'Welcome to Peru!'
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-peru-terracotta text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-green-600" />
                  {locale === 'es' ? 'Consejos para Familias' : 'Tips for Families'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Lleva documentos de los niños en tu equipaje de mano' : 'Keep children\'s documents in your carry-on',
                    locale === 'es' ? 'Usa baños antes de la fila de inmigración' : 'Use restrooms before immigration queue',
                    locale === 'es' ? 'Trae snacks para la espera' : 'Bring snacks for the wait',
                    locale === 'es' ? 'Las familias con niños pequeños a veces pueden usar filas rápidas' : 'Families with small children can sometimes use fast lanes',
                    locale === 'es' ? 'Ten reservas de hotel listas para mostrar' : 'Have hotel reservations ready to show',
                    locale === 'es' ? 'Mantén la calma - los oficiales son generalmente amables' : 'Stay calm - officers are generally friendly'
                  ].map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extending Your Stay */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Extender tu Estadía' : 'Extending Your Stay'}
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-peru-earth mb-2 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-peru-gold" />
                    {locale === 'es' ? '183 días máximo en un año' : '183 days maximum per year'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'es'
                      ? 'Los turistas pueden permanecer un máximo de 183 días en cualquier período de 365 días. Esto NO puede extenderse.'
                      : 'Tourists can stay a maximum of 183 days in any 365-day period. This CANNOT be extended.'}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-peru-earth mb-2 flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-peru-gold" />
                    {locale === 'es' ? 'Si te quedas más tiempo (overstay)' : 'If you overstay'}
                  </h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• {locale === 'es' ? 'Multa de $1 USD por día de exceso' : '$1 USD fine per day overstayed'}</li>
                    <li>• {locale === 'es' ? 'Pagable en el aeropuerto al salir' : 'Payable at the airport upon departure'}</li>
                    <li>• {locale === 'es' ? 'Puede causar problemas para futuras visitas' : 'May cause issues for future visits'}</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-green-700">
                    <strong>{locale === 'es' ? 'Consejo:' : 'Tip:'}</strong>{' '}
                    {locale === 'es'
                      ? 'Para la mayoría de vacaciones familiares (1-4 semanas), no necesitas preocuparte por esto. Solo asegúrate de tener suficientes días autorizados en tu TAM.'
                      : 'For most family vacations (1-4 weeks), you don\'t need to worry about this. Just make sure you have enough authorized days on your TAM.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Requirements */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Requisitos de Salud' : 'Health Requirements'}
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="h-6 w-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-peru-earth mb-2">
                      {locale === 'es' ? 'Vacunas' : 'Vaccinations'}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {locale === 'es'
                        ? 'No hay vacunas obligatorias para ingresar a Perú desde la mayoría de países.'
                        : 'No vaccinations are required to enter Peru from most countries.'}
                    </p>
                    <p className="text-amber-600 text-sm">
                      <AlertTriangle className="h-4 w-4 inline mr-1" />
                      {locale === 'es'
                        ? 'Si vienes de un país con fiebre amarilla o visitarás la selva amazónica, se recomienda la vacuna de fiebre amarilla.'
                        : 'If coming from a yellow fever country or visiting the Amazon jungle, yellow fever vaccination is recommended.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-peru-earth mb-2">
                      {locale === 'es' ? 'Seguro de Viaje' : 'Travel Insurance'}
                    </h3>
                    <p className="text-gray-600">
                      {locale === 'es'
                        ? 'No es obligatorio pero ALTAMENTE recomendado. Asegúrate de que cubra emergencias médicas, evacuación y la altitud si visitarás zonas altas.'
                        : 'Not mandatory but HIGHLY recommended. Make sure it covers medical emergencies, evacuation, and altitude if you\'ll be visiting high areas.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
