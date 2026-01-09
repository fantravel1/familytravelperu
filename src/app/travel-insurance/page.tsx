'use client';

import { useI18n } from '@/lib/i18n';
import {
  Shield,
  Heart,
  Plane,
  Mountain,
  Baby,
  AlertTriangle,
  Check,
  X,
  DollarSign,
  Phone,
  FileText,
  Stethoscope,
  Car,
  Luggage,
  Clock
} from 'lucide-react';

interface CoverageItem {
  name: string;
  nameEs: string;
  essential: boolean;
  description: string;
  descriptionEs: string;
  minimumCoverage: string;
  peruNote: string;
  peruNoteEs: string;
}

const coverageItems: CoverageItem[] = [
  {
    name: 'Medical Expenses',
    nameEs: 'Gastos Médicos',
    essential: true,
    description: 'Covers hospital stays, doctor visits, medications, and treatments.',
    descriptionEs: 'Cubre hospitalización, visitas médicas, medicamentos y tratamientos.',
    minimumCoverage: '$100,000+',
    peruNote: 'Private hospitals in Peru can be expensive. Clinic costs in Lima can rival US prices.',
    peruNoteEs: 'Los hospitales privados en Perú pueden ser costosos. Los costos de clínicas en Lima pueden rivalizar con precios de EE.UU.'
  },
  {
    name: 'Emergency Medical Evacuation',
    nameEs: 'Evacuación Médica de Emergencia',
    essential: true,
    description: 'Covers transport to nearest adequate medical facility or home country.',
    descriptionEs: 'Cubre transporte a la instalación médica adecuada más cercana o al país de origen.',
    minimumCoverage: '$250,000+',
    peruNote: 'Essential for remote areas like Machu Picchu or Amazon. Air evacuation from Cusco costs $10,000+.',
    peruNoteEs: 'Esencial para áreas remotas como Machu Picchu o Amazonas. Evacuación aérea desde Cusco cuesta $10,000+.'
  },
  {
    name: 'Trip Cancellation',
    nameEs: 'Cancelación de Viaje',
    essential: true,
    description: 'Reimburses prepaid, non-refundable trip costs if you need to cancel.',
    descriptionEs: 'Reembolsa costos de viaje prepagados y no reembolsables si necesitas cancelar.',
    minimumCoverage: '100% of trip cost',
    peruNote: 'Machu Picchu tickets, train tickets, and flights are often non-refundable.',
    peruNoteEs: 'Los boletos de Machu Picchu, trenes y vuelos a menudo no son reembolsables.'
  },
  {
    name: 'Trip Interruption',
    nameEs: 'Interrupción de Viaje',
    essential: true,
    description: 'Covers costs if you need to cut your trip short and return home.',
    descriptionEs: 'Cubre costos si necesitas acortar tu viaje y regresar a casa.',
    minimumCoverage: '150% of trip cost',
    peruNote: 'Important for long trips. Last-minute flights home from Peru are very expensive.',
    peruNoteEs: 'Importante para viajes largos. Los vuelos de último minuto desde Perú son muy costosos.'
  },
  {
    name: 'Altitude Sickness Coverage',
    nameEs: 'Cobertura de Mal de Altura',
    essential: true,
    description: 'Specific coverage for altitude-related illnesses and complications.',
    descriptionEs: 'Cobertura específica para enfermedades y complicaciones relacionadas con la altitud.',
    minimumCoverage: 'Included in medical',
    peruNote: 'Cusco is at 3,400m. Some policies exclude altitude illness - check carefully!',
    peruNoteEs: 'Cusco está a 3,400m. ¡Algunas pólizas excluyen el mal de altura - verifica cuidadosamente!'
  },
  {
    name: 'Baggage Loss/Delay',
    nameEs: 'Pérdida/Retraso de Equipaje',
    essential: false,
    description: 'Covers lost, stolen, or delayed baggage and contents.',
    descriptionEs: 'Cubre equipaje perdido, robado o retrasado y su contenido.',
    minimumCoverage: '$1,500-$3,000',
    peruNote: 'Useful for multi-leg flights. Keep essentials in carry-on for first 24-48 hours.',
    peruNoteEs: 'Útil para vuelos con conexiones. Lleva lo esencial en equipaje de mano para las primeras 24-48 horas.'
  },
  {
    name: 'Travel Delay',
    nameEs: 'Retraso de Viaje',
    essential: false,
    description: 'Covers meals and accommodation if your flight is significantly delayed.',
    descriptionEs: 'Cubre comidas y alojamiento si tu vuelo se retrasa significativamente.',
    minimumCoverage: '$150-$300/day',
    peruNote: 'Flight delays during rainy season are common in the mountains.',
    peruNoteEs: 'Los retrasos de vuelos durante la temporada de lluvias son comunes en las montañas.'
  },
  {
    name: 'Adventure Activities',
    nameEs: 'Actividades de Aventura',
    essential: false,
    description: 'Covers injuries from hiking, rafting, zip-lining, etc.',
    descriptionEs: 'Cubre lesiones por senderismo, rafting, tirolesa, etc.',
    minimumCoverage: 'Varies by activity',
    peruNote: 'Standard policies often exclude adventure sports. Add if you plan to hike or do adventure activities.',
    peruNoteEs: 'Las pólizas estándar a menudo excluyen deportes de aventura. Agrega si planeas hacer senderismo o actividades de aventura.'
  }
];

const whatToLookFor = {
  en: [
    'Pre-existing conditions coverage (especially important for older travelers)',
    'Coverage for all family members including children',
    '24/7 emergency assistance hotline',
    'Direct payment to hospitals (vs. reimbursement)',
    'COVID-19 coverage and quarantine expenses',
    'Cancel for any reason (CFAR) option for maximum flexibility',
    'High altitude coverage explicitly included',
    'Adventure activities you plan to do'
  ],
  es: [
    'Cobertura de condiciones preexistentes (especialmente importante para viajeros mayores)',
    'Cobertura para todos los miembros de la familia incluyendo niños',
    'Línea de asistencia de emergencia 24/7',
    'Pago directo a hospitales (vs. reembolso)',
    'Cobertura de COVID-19 y gastos de cuarentena',
    'Opción de cancelar por cualquier razón (CFAR) para máxima flexibilidad',
    'Cobertura de alta altitud explícitamente incluida',
    'Actividades de aventura que planeas hacer'
  ]
};

const redFlags = {
  en: [
    'Very low coverage limits (under $50,000 medical)',
    'High deductibles on medical expenses',
    'Altitude sickness exclusions',
    'Pre-existing condition exclusions without waiver options',
    'Adventure activity exclusions for basic hiking',
    'Reimbursement-only policies (no direct pay)',
    'Limited or no evacuation coverage'
  ],
  es: [
    'Límites de cobertura muy bajos (menos de $50,000 médico)',
    'Deducibles altos en gastos médicos',
    'Exclusiones de mal de altura',
    'Exclusiones de condiciones preexistentes sin opciones de exención',
    'Exclusiones de actividades de aventura para senderismo básico',
    'Pólizas solo de reembolso (sin pago directo)',
    'Cobertura de evacuación limitada o nula'
  ]
};

export default function TravelInsurancePage() {
  const { locale } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-blue-200 font-semibold">
                {locale === 'es' ? 'Guía de Seguros' : 'Insurance Guide'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Seguro de Viaje para Perú'
                : 'Travel Insurance for Peru'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Por qué el seguro de viaje es esencial para tu familia, qué cobertura necesitas, y qué buscar en una póliza.'
                : 'Why travel insurance is essential for your family, what coverage you need, and what to look for in a policy.'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Essential */}
      <section className="py-8 bg-amber-50 border-b border-amber-200">
        <div className="container-peru">
          <div className="flex items-center justify-center space-x-4">
            <AlertTriangle className="h-8 w-8 text-amber-600" />
            <p className="text-amber-800 font-medium text-center">
              {locale === 'es'
                ? 'El seguro de viaje NO es obligatorio para Perú, pero es ALTAMENTE recomendado, especialmente para familias visitando zonas de altura.'
                : 'Travel insurance is NOT required for Peru, but is HIGHLY recommended, especially for families visiting high altitude areas.'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Peru Specifically Needs Insurance */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Por Qué el Seguro es Importante en Perú' : 'Why Insurance Matters in Peru'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Mountain className="h-10 w-10 text-peru-terracotta mx-auto mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Alta Altitud' : 'High Altitude'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Cusco (3,400m) y otros destinos pueden causar mal de altura. Algunos casos requieren evacuación.'
                  : 'Cusco (3,400m) and other destinations can cause altitude sickness. Some cases require evacuation.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Plane className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Áreas Remotas' : 'Remote Areas'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Machu Picchu, Amazonas y otros lugares están lejos de hospitales principales.'
                  : 'Machu Picchu, Amazon, and other locations are far from major hospitals.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Costos Médicos' : 'Medical Costs'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Los hospitales privados en Lima pueden costar $1,000+/día. La evacuación puede costar $20,000+.'
                  : 'Private hospitals in Lima can cost $1,000+/day. Evacuation can cost $20,000+.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Baby className="h-10 w-10 text-purple-600 mx-auto mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Niños' : 'Children'}
              </h3>
              <p className="text-sm text-gray-600">
                {locale === 'es'
                  ? 'Los niños son más susceptibles al mal de altura y enfermedades. La paz mental no tiene precio.'
                  : 'Children are more susceptible to altitude sickness and illness. Peace of mind is priceless.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Breakdown */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Qué Cobertura Necesitas' : 'What Coverage You Need'}
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {coverageItems.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 shadow-lg ${
                  item.essential ? 'border-l-4 border-green-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-bold text-peru-earth text-lg">
                      {locale === 'es' ? item.nameEs : item.name}
                    </h3>
                    {item.essential && (
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                        {locale === 'es' ? 'Esencial' : 'Essential'}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-bold text-peru-terracotta">
                    {item.minimumCoverage}
                  </span>
                </div>

                <p className="text-gray-600 mb-3">
                  {locale === 'es' ? item.descriptionEs : item.description}
                </p>

                <div className="bg-amber-50 rounded-lg p-3">
                  <p className="text-sm text-amber-700">
                    <Mountain className="h-4 w-4 inline mr-1" />
                    <strong>{locale === 'es' ? 'Nota para Perú:' : 'Peru Note:'}</strong>{' '}
                    {locale === 'es' ? item.peruNoteEs : item.peruNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Look For vs Red Flags */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Qué Buscar en una Póliza' : 'What to Look For in a Policy'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-green-700 text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  {locale === 'es' ? 'Buenas Señales' : 'Good Signs'}
                </h3>
                <ul className="space-y-3">
                  {(locale === 'es' ? whatToLookFor.es : whatToLookFor.en).map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  {locale === 'es' ? 'Señales de Alerta' : 'Red Flags'}
                </h3>
                <ul className="space-y-3">
                  {(locale === 'es' ? redFlags.es : redFlags.en).map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Expectations */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Costos Esperados' : 'Expected Costs'}
            </h2>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                <div className="p-4 bg-green-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'es' ? 'Básico' : 'Basic'}
                  </p>
                  <p className="text-2xl font-bold text-green-700">$50-80</p>
                  <p className="text-xs text-gray-500">
                    {locale === 'es' ? 'por persona/2 semanas' : 'per person/2 weeks'}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-300">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'es' ? 'Recomendado' : 'Recommended'}
                  </p>
                  <p className="text-2xl font-bold text-blue-700">$100-150</p>
                  <p className="text-xs text-gray-500">
                    {locale === 'es' ? 'por persona/2 semanas' : 'per person/2 weeks'}
                  </p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'es' ? 'Completo' : 'Comprehensive'}
                  </p>
                  <p className="text-2xl font-bold text-purple-700">$150-250</p>
                  <p className="text-xs text-gray-500">
                    {locale === 'es' ? 'por persona/2 semanas' : 'per person/2 weeks'}
                  </p>
                </div>
              </div>

              <p className="text-center text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los costos varían según edad, duración del viaje, cobertura y proveedor. Las familias suelen obtener descuentos por póliza grupal.'
                  : 'Costs vary based on age, trip length, coverage, and provider. Families often get discounts for group policies.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Your Insurance */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Cómo Usar tu Seguro en Perú' : 'How to Use Your Insurance in Peru'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth text-lg mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  {locale === 'es' ? 'En una Emergencia' : 'In an Emergency'}
                </h3>
                <ol className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Llama a la línea de emergencia 24/7 de tu seguro' : 'Call your insurance 24/7 emergency line',
                    locale === 'es' ? 'Proporciona tu número de póliza y ubicación' : 'Provide your policy number and location',
                    locale === 'es' ? 'Ellos coordinarán con hospitales locales' : 'They will coordinate with local hospitals',
                    locale === 'es' ? 'Guarda TODOS los recibos y documentos médicos' : 'Keep ALL receipts and medical documents',
                    locale === 'es' ? 'Toma fotos de todo para tus registros' : 'Take photos of everything for your records'
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
                  <FileText className="h-5 w-5 mr-2 text-green-600" />
                  {locale === 'es' ? 'Qué Llevar Contigo' : 'What to Carry With You'}
                </h3>
                <ul className="space-y-3 text-gray-700">
                  {[
                    locale === 'es' ? 'Copia impresa de tu póliza de seguro' : 'Printed copy of your insurance policy',
                    locale === 'es' ? 'Número de póliza en tu teléfono y escrito' : 'Policy number on your phone AND written down',
                    locale === 'es' ? 'Números de emergencia 24/7' : '24/7 emergency phone numbers',
                    locale === 'es' ? 'Copia digital de documentos en la nube' : 'Digital copy of documents in the cloud',
                    locale === 'es' ? 'Tarjeta de seguro si te dan una' : 'Insurance card if they provide one',
                    locale === 'es' ? 'Información de contacto de emergencia' : 'Emergency contact information'
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

      {/* Family Tips */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto text-center">
            <Baby className="h-12 w-12 mx-auto mb-4 text-peru-gold" />
            <h2 className="text-3xl font-display font-bold mb-6">
              {locale === 'es' ? 'Consejos de Seguro para Familias' : 'Insurance Tips for Families'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Para los Niños' : 'For Kids'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Asegura que los niños estén explícitamente incluidos en la póliza' : 'Ensure children are explicitly included in the policy'}</li>
                  <li>• {locale === 'es' ? 'Verifica límites de edad - algunos no cubren infantes' : 'Check age limits - some don\'t cover infants'}</li>
                  <li>• {locale === 'es' ? 'La cobertura de mal de altura es crucial para niños' : 'Altitude sickness coverage is crucial for kids'}</li>
                  <li>• {locale === 'es' ? 'Considera cobertura para repatriación con un padre' : 'Consider coverage for repatriation with a parent'}</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Ahorra Dinero' : 'Save Money'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Compra póliza familiar grupal para descuentos' : 'Buy family group policy for discounts'}</li>
                  <li>• {locale === 'es' ? 'Compara al menos 3 proveedores diferentes' : 'Compare at least 3 different providers'}</li>
                  <li>• {locale === 'es' ? 'Compra dentro de 14 días de depositar tu viaje para más beneficios' : 'Buy within 14 days of trip deposit for more benefits'}</li>
                  <li>• {locale === 'es' ? 'Póliza anual puede ser más barata si viajas frecuentemente' : 'Annual policy may be cheaper if you travel often'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-peru-terracotta mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-4">
              {locale === 'es' ? '¿Listo para Proteger tu Viaje?' : 'Ready to Protect Your Trip?'}
            </h2>
            <p className="text-gray-600 mb-6">
              {locale === 'es'
                ? 'Compara precios y coberturas de múltiples proveedores. Compra tu seguro tan pronto como reserves tu viaje para máxima protección.'
                : 'Compare prices and coverage from multiple providers. Purchase your insurance as soon as you book your trip for maximum protection.'}
            </p>
            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-green-700">
                <strong>{locale === 'es' ? 'Recuerda:' : 'Remember:'}</strong>{' '}
                {locale === 'es'
                  ? 'El costo de un buen seguro de viaje es mínimo comparado con una emergencia médica en el extranjero. Para una familia de 4, espera pagar $400-600 por un viaje de 2 semanas con cobertura completa.'
                  : 'The cost of good travel insurance is minimal compared to a medical emergency abroad. For a family of 4, expect to pay $400-600 for a 2-week trip with comprehensive coverage.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
