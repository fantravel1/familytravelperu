'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Mountain,
  AlertTriangle,
  Heart,
  Droplets,
  Moon,
  Utensils,
  Baby,
  Clock,
  CheckCircle,
  XCircle,
  Thermometer,
  Activity,
  ArrowUp,
  Shield
} from 'lucide-react';

interface AltitudeZone {
  range: string;
  label: string;
  labelEs: string;
  examples: string[];
  examplesEs: string[];
  risk: 'low' | 'moderate' | 'high';
  color: string;
}

const altitudeZones: AltitudeZone[] = [
  {
    range: '0-2,000m (0-6,500ft)',
    label: 'Low Altitude',
    labelEs: 'Altitud Baja',
    examples: ['Lima', 'Coastal cities', 'Amazon lowlands'],
    examplesEs: ['Lima', 'Ciudades costeras', 'Tierras bajas amazónicas'],
    risk: 'low',
    color: 'bg-green-100 border-green-500'
  },
  {
    range: '2,000-3,000m (6,500-10,000ft)',
    label: 'Moderate Altitude',
    labelEs: 'Altitud Moderada',
    examples: ['Arequipa (2,335m)', 'Ollantaytambo (2,792m)'],
    examplesEs: ['Arequipa (2,335m)', 'Ollantaytambo (2,792m)'],
    risk: 'moderate',
    color: 'bg-yellow-100 border-yellow-500'
  },
  {
    range: '3,000-4,000m (10,000-13,000ft)',
    label: 'High Altitude',
    labelEs: 'Altitud Alta',
    examples: ['Cusco (3,400m)', 'Puno (3,830m)', 'Colca Canyon'],
    examplesEs: ['Cusco (3,400m)', 'Puno (3,830m)', 'Cañón del Colca'],
    risk: 'high',
    color: 'bg-orange-100 border-orange-500'
  },
  {
    range: '4,000m+ (13,000ft+)',
    label: 'Very High Altitude',
    labelEs: 'Altitud Muy Alta',
    examples: ['Rainbow Mountain (5,200m)', 'Mountain passes', 'Lake Titicaca islands'],
    examplesEs: ['Montaña de Colores (5,200m)', 'Pasos de montaña', 'Islas del Lago Titicaca'],
    risk: 'high',
    color: 'bg-red-100 border-red-500'
  }
];

const symptoms = {
  mild: [
    { en: 'Headache', es: 'Dolor de cabeza' },
    { en: 'Fatigue', es: 'Fatiga' },
    { en: 'Dizziness', es: 'Mareos' },
    { en: 'Nausea', es: 'Náuseas' },
    { en: 'Shortness of breath', es: 'Falta de aire' },
    { en: 'Difficulty sleeping', es: 'Dificultad para dormir' },
    { en: 'Loss of appetite', es: 'Pérdida de apetito' },
  ],
  severe: [
    { en: 'Severe headache not relieved by medication', es: 'Dolor de cabeza severo no aliviado por medicación' },
    { en: 'Confusion or disorientation', es: 'Confusión o desorientación' },
    { en: 'Loss of coordination', es: 'Pérdida de coordinación' },
    { en: 'Persistent vomiting', es: 'Vómitos persistentes' },
    { en: 'Chest tightness', es: 'Opresión en el pecho' },
    { en: 'Blue tinge to lips or fingers', es: 'Tono azul en labios o dedos' },
  ]
};

const preventionTips = [
  {
    icon: Clock,
    title: 'Ascend Slowly',
    titleEs: 'Asciende Lentamente',
    description: 'Spend 1-2 days in Cusco before heading higher. Avoid flying directly from sea level to high altitude when possible.',
    descriptionEs: 'Pasa 1-2 días en Cusco antes de ir más alto. Evita volar directamente desde el nivel del mar a gran altitud si es posible.'
  },
  {
    icon: Droplets,
    title: 'Stay Hydrated',
    titleEs: 'Mantente Hidratado',
    description: 'Drink 3-4 liters of water daily. The air is dry at altitude and you lose water faster. Avoid alcohol initially.',
    descriptionEs: 'Bebe 3-4 litros de agua diarios. El aire es seco en altura y pierdes agua más rápido. Evita el alcohol inicialmente.'
  },
  {
    icon: Utensils,
    title: 'Eat Light',
    titleEs: 'Come Ligero',
    description: 'Eat light, easily digestible meals. Avoid heavy, fatty foods. Carbohydrates are easier to process at altitude.',
    descriptionEs: 'Come comidas ligeras y fáciles de digerir. Evita comidas pesadas y grasas. Los carbohidratos son más fáciles de procesar en altura.'
  },
  {
    icon: Moon,
    title: 'Rest Well',
    titleEs: 'Descansa Bien',
    description: 'Take it easy the first 24-48 hours. Sleep and rest allow your body to acclimatize naturally.',
    descriptionEs: 'Tómalo con calma las primeras 24-48 horas. Dormir y descansar permite que tu cuerpo se aclimate naturalmente.'
  },
  {
    icon: Activity,
    title: 'Avoid Overexertion',
    titleEs: 'Evita el Sobreesfuerzo',
    description: 'Don\'t plan strenuous activities for your first days at altitude. Walk slowly and take frequent breaks.',
    descriptionEs: 'No planees actividades extenuantes para tus primeros días en altura. Camina lento y toma descansos frecuentes.'
  },
  {
    icon: Shield,
    title: 'Consider Medication',
    titleEs: 'Considera Medicación',
    description: 'Acetazolamide (Diamox) can help prevent and treat symptoms. Consult your doctor before travel.',
    descriptionEs: 'Acetazolamida (Diamox) puede ayudar a prevenir y tratar síntomas. Consulta a tu médico antes de viajar.'
  }
];

const localRemedies = [
  {
    name: 'Mate de Coca',
    nameEs: 'Mate de Coca',
    description: 'Coca leaf tea is the traditional Andean remedy. Available everywhere in the highlands.',
    descriptionEs: 'El té de hojas de coca es el remedio andino tradicional. Disponible en todas partes de la sierra.',
    safe: true
  },
  {
    name: 'Coca Candies',
    nameEs: 'Caramelos de Coca',
    description: 'Coca-flavored hard candies. Easy for kids to take and mildly effective.',
    descriptionEs: 'Caramelos duros con sabor a coca. Fáciles para niños y moderadamente efectivos.',
    safe: true
  },
  {
    name: 'Sorojchi Pills',
    nameEs: 'Pastillas Sorojchi',
    description: 'Over-the-counter altitude pills containing aspirin, caffeine, and salophene. Adults only.',
    descriptionEs: 'Pastillas de venta libre que contienen aspirina, cafeína y salofeno. Solo para adultos.',
    safe: false
  },
  {
    name: 'Canned Oxygen',
    nameEs: 'Oxígeno Enlatado',
    description: 'Available in pharmacies and many hotels. Provides temporary relief.',
    descriptionEs: 'Disponible en farmacias y muchos hoteles. Proporciona alivio temporal.',
    safe: true
  }
];

export default function AltitudeGuidePage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-ocean to-peru-earth py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mountain className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Guía de Altitud' : 'Altitude Guide'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Todo lo que las familias necesitan saber sobre el mal de altura en Perú'
              : 'Everything families need to know about altitude sickness in Peru'}
          </p>
        </div>
      </section>

      {/* What is Altitude Sickness */}
      <section className="container-peru py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-12 relative z-10">
          <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
            {locale === 'es' ? '¿Qué es el Mal de Altura?' : 'What is Altitude Sickness?'}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {locale === 'es'
              ? 'El mal de altura (soroche en español) ocurre cuando tu cuerpo no recibe suficiente oxígeno en elevaciones altas. A 3,400 metros (la altura de Cusco), hay aproximadamente 40% menos oxígeno que al nivel del mar. La mayoría de las personas experimentan algunos síntomas, pero con la preparación adecuada, pueden minimizarse significativamente.'
              : 'Altitude sickness (called "soroche" in Spanish) occurs when your body doesn\'t get enough oxygen at high elevations. At 3,400 meters (Cusco\'s elevation), there\'s approximately 40% less oxygen than at sea level. Most people experience some symptoms, but with proper preparation, they can be significantly minimized.'}
          </p>
          <div className="flex items-center gap-2 text-peru-terracotta">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">
              {locale === 'es'
                ? 'Importante: Los síntomas generalmente aparecen 6-24 horas después de llegar a gran altitud.'
                : 'Important: Symptoms typically appear 6-24 hours after arriving at high altitude.'}
            </span>
          </div>
        </div>
      </section>

      {/* Altitude Zones */}
      <section className="container-peru py-8">
        <h2 className="section-title mb-6">
          {locale === 'es' ? 'Zonas de Altitud en Perú' : 'Altitude Zones in Peru'}
        </h2>
        <div className="space-y-4">
          {altitudeZones.map((zone, index) => (
            <div
              key={index}
              className={`rounded-xl border-l-4 p-6 ${zone.color}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowUp className="w-5 h-5 text-gray-600" />
                    <span className="font-mono text-gray-600">{zone.range}</span>
                  </div>
                  <h3 className="font-display font-bold text-peru-earth text-lg">
                    {locale === 'es' ? zone.labelEs : zone.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'es' ? zone.examplesEs : zone.examples).map((example, i) => (
                    <span key={i} className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Symptoms */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            {locale === 'es' ? 'Síntomas a Reconocer' : 'Symptoms to Recognize'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mild Symptoms */}
            <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Thermometer className="w-6 h-6 text-yellow-600" />
                <h3 className="font-display font-bold text-peru-earth">
                  {locale === 'es' ? 'Síntomas Leves (Comunes)' : 'Mild Symptoms (Common)'}
                </h3>
              </div>
              <ul className="space-y-2">
                {symptoms.mild.map((symptom, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                    {locale === 'es' ? symptom.es : symptom.en}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-yellow-700 bg-yellow-100 rounded p-3">
                {locale === 'es'
                  ? 'Estos síntomas son normales y generalmente mejoran en 1-2 días con descanso e hidratación.'
                  : 'These symptoms are normal and usually improve within 1-2 days with rest and hydration.'}
              </p>
            </div>

            {/* Severe Symptoms */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="font-display font-bold text-peru-earth">
                  {locale === 'es' ? 'Síntomas Severos (Buscar Ayuda)' : 'Severe Symptoms (Seek Help)'}
                </h3>
              </div>
              <ul className="space-y-2">
                {symptoms.severe.map((symptom, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <XCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    {locale === 'es' ? symptom.es : symptom.en}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-red-700 bg-red-100 rounded p-3">
                {locale === 'es'
                  ? '⚠️ Si experimentas estos síntomas, busca atención médica inmediata y desciende a menor altitud.'
                  : '⚠️ If you experience these symptoms, seek immediate medical attention and descend to lower altitude.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Consejos de Prevención' : 'Prevention Tips'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventionTips.map((tip, index) => {
            const TipIcon = tip.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="w-12 h-12 bg-peru-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <TipIcon className="w-6 h-6 text-peru-gold" />
                </div>
                <h3 className="font-display font-bold text-peru-earth mb-2">
                  {locale === 'es' ? tip.titleEs : tip.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {locale === 'es' ? tip.descriptionEs : tip.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Children and Altitude */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Baby className="w-8 h-8 text-peru-gold" />
            <h2 className="text-3xl font-display font-bold text-white">
              {locale === 'es' ? 'Niños y Altitud' : 'Children and Altitude'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-display font-bold text-white mb-4">
                {locale === 'es' ? 'Lo Que Debes Saber' : 'What You Should Know'}
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Los niños se aclimatan de manera similar a los adultos'
                    : 'Children acclimatize similarly to adults'}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Los niños pequeños pueden no poder expresar sus síntomas'
                    : 'Young children may not be able to express their symptoms'}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Observa cambios en comportamiento, apetito y patrones de sueño'
                    : 'Watch for changes in behavior, appetite, and sleep patterns'}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Diamox puede usarse en niños - consulta al pediatra'
                    : 'Diamox can be used in children - consult pediatrician'}
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="font-display font-bold text-white mb-4">
                {locale === 'es' ? 'Señales de Alarma en Niños' : 'Warning Signs in Children'}
              </h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Irritabilidad o llanto inusual'
                    : 'Unusual irritability or crying'}
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Rechazo a comer o beber'
                    : 'Refusal to eat or drink'}
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Letargo excesivo o dificultad para despertar'
                    : 'Excessive lethargy or difficulty waking'}
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  {locale === 'es'
                    ? 'Vómitos repetidos'
                    : 'Repeated vomiting'}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-peru-gold/20 rounded-xl p-6 text-center">
            <p className="text-white font-medium">
              {locale === 'es'
                ? '💡 Consejo Pro: Para familias con niños pequeños, consideren pasar una noche en el Valle Sagrado (2,800m) antes de subir a Cusco (3,400m).'
                : '💡 Pro Tip: For families with young children, consider spending a night in the Sacred Valley (2,800m) before heading up to Cusco (3,400m).'}
            </p>
          </div>
        </div>
      </section>

      {/* Local Remedies */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Remedios Locales' : 'Local Remedies'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {localRemedies.map((remedy, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-bold text-peru-earth">
                  {locale === 'es' ? remedy.nameEs : remedy.name}
                </h3>
                {remedy.safe ? (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {locale === 'es' ? 'Seguro para niños' : 'Safe for kids'}
                  </span>
                ) : (
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                    {locale === 'es' ? 'Solo adultos' : 'Adults only'}
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-sm">
                {locale === 'es' ? remedy.descriptionEs : remedy.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Acclimatization Schedule */}
      <section className="bg-peru-sand py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            {locale === 'es' ? 'Itinerario de Aclimatación Sugerido' : 'Suggested Acclimatization Schedule'}
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-4">
              {[
                {
                  day: 1,
                  title: locale === 'es' ? 'Llegada a Cusco' : 'Arrive in Cusco',
                  activities: locale === 'es'
                    ? ['Descansar en el hotel', 'Comida ligera', 'Mucha agua', 'Caminar lento si sales']
                    : ['Rest at hotel', 'Light meal', 'Lots of water', 'Walk slowly if going out']
                },
                {
                  day: 2,
                  title: locale === 'es' ? 'Día Tranquilo' : 'Easy Day',
                  activities: locale === 'es'
                    ? ['Exploración ligera del centro', 'Continuar hidratación', 'Siesta si es necesario', 'Evitar escaleras empinadas']
                    : ['Light exploration of center', 'Continue hydrating', 'Nap if needed', 'Avoid steep stairs']
                },
                {
                  day: 3,
                  title: locale === 'es' ? 'Valle Sagrado' : 'Sacred Valley',
                  activities: locale === 'es'
                    ? ['Bajar a menor altitud (2,800m)', 'Actividades moderadas', 'El cuerpo continúa adaptándose', 'Noche en el valle']
                    : ['Drop to lower altitude (2,800m)', 'Moderate activities', 'Body continues adapting', 'Night in valley']
                },
                {
                  day: 4,
                  title: locale === 'es' ? 'Machu Picchu' : 'Machu Picchu',
                  activities: locale === 'es'
                    ? ['Altitud más baja (2,430m)', 'Ya deberías estar aclimatado', 'Disfruta actividades completas', '¡Pasa un día increíble!']
                    : ['Lower altitude (2,430m)', 'Should be acclimatized', 'Enjoy full activities', 'Have an amazing day!']
                }
              ].map((schedule, index) => (
                <div
                  key={index}
                  className={`p-6 ${index < 3 ? 'border-r border-peru-sand' : ''}`}
                >
                  <div className="w-10 h-10 bg-peru-gold rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {schedule.day}
                  </div>
                  <h3 className="font-display font-bold text-peru-earth mb-3">
                    {schedule.title}
                  </h3>
                  <ul className="space-y-2">
                    {schedule.activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-peru-gold flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-peru py-12 text-center">
        <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? '¿Listo para planificar tu viaje?' : 'Ready to plan your trip?'}
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {locale === 'es'
            ? 'Nuestros itinerarios están diseñados con tiempo de aclimatación incorporado.'
            : 'Our itineraries are designed with built-in acclimatization time.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/itineraries/" className="btn-primary">
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </Link>
          <Link href="/packing/" className="btn-gold">
            {locale === 'es' ? 'Listas de Equipaje' : 'Packing Lists'}
          </Link>
        </div>
      </section>
    </main>
  );
}
