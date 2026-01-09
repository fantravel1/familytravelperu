'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Heart,
  Pill,
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  Baby,
  Thermometer,
  Droplets,
  Sun,
  Bug,
  Phone,
  MapPin,
  Clock,
  ShieldCheck
} from 'lucide-react';

interface HealthTopic {
  id: string;
  title: string;
  titleEs: string;
  icon: React.ElementType;
  description: string;
  descriptionEs: string;
  tips: string[];
  tipsEs: string[];
  kidSpecific: string[];
  kidSpecificEs: string[];
  warning?: string;
  warningEs?: string;
}

const healthTopics: HealthTopic[] = [
  {
    id: 'vaccinations',
    title: 'Vaccinations',
    titleEs: 'Vacunas',
    icon: Stethoscope,
    description: 'Peru doesn\'t require specific vaccinations for entry, but several are recommended depending on regions you\'ll visit.',
    descriptionEs: 'Perú no requiere vacunas específicas para entrar, pero varias se recomiendan dependiendo de las regiones que visitarás.',
    tips: [
      'Hepatitis A and B vaccines are recommended for all travelers',
      'Typhoid vaccine recommended if visiting rural areas',
      'Yellow fever vaccine required for Amazon jungle visits',
      'Rabies vaccine recommended for extended jungle stays',
      'Ensure routine vaccinations (MMR, DTaP) are up to date',
      'Consult a travel medicine specialist 6-8 weeks before travel'
    ],
    tipsEs: [
      'Vacunas de Hepatitis A y B recomendadas para todos los viajeros',
      'Vacuna contra tifoidea recomendada si visitas áreas rurales',
      'Vacuna contra fiebre amarilla requerida para visitas a la selva amazónica',
      'Vacuna contra rabia recomendada para estadías prolongadas en la selva',
      'Asegura que las vacunas de rutina (MMR, DTaP) estén al día',
      'Consulta un especialista en medicina de viaje 6-8 semanas antes del viaje'
    ],
    kidSpecific: [
      'Check if your child\'s regular immunization schedule is complete',
      'Yellow fever vaccine is safe for children over 9 months',
      'Bring vaccination records for all family members',
      'Some vaccines may need to be given in multiple doses'
    ],
    kidSpecificEs: [
      'Verifica si el calendario de inmunización regular de tu hijo está completo',
      'La vacuna contra fiebre amarilla es segura para niños mayores de 9 meses',
      'Trae registros de vacunación de todos los miembros de la familia',
      'Algunas vacunas pueden necesitar darse en múltiples dosis'
    ]
  },
  {
    id: 'altitude',
    title: 'Altitude Sickness',
    titleEs: 'Mal de Altura',
    icon: Thermometer,
    description: 'Cusco (3,400m) and Lake Titicaca (3,800m) are at high altitude. Most visitors experience some symptoms in the first 24-48 hours.',
    descriptionEs: 'Cusco (3,400m) y el Lago Titicaca (3,800m) están a gran altitud. La mayoría de visitantes experimentan algunos síntomas en las primeras 24-48 horas.',
    tips: [
      'Arrive in Cusco and rest for the first day - no strenuous activity',
      'Drink plenty of water (3-4 liters per day)',
      'Avoid alcohol and heavy meals the first few days',
      'Consider Diamox (acetazolamide) - consult your doctor',
      'Coca tea is a traditional remedy and widely available',
      'Ascend gradually when possible (fly Lima-Arequipa-Cusco)',
      'Know the symptoms: headache, nausea, fatigue, dizziness'
    ],
    tipsEs: [
      'Llega a Cusco y descansa el primer día - sin actividad extenuante',
      'Bebe mucha agua (3-4 litros por día)',
      'Evita el alcohol y comidas pesadas los primeros días',
      'Considera Diamox (acetazolamida) - consulta a tu médico',
      'El té de coca es un remedio tradicional y ampliamente disponible',
      'Asciende gradualmente cuando sea posible (vuela Lima-Arequipa-Cusco)',
      'Conoce los síntomas: dolor de cabeza, náuseas, fatiga, mareos'
    ],
    kidSpecific: [
      'Children may be more susceptible and less able to communicate symptoms',
      'Watch for: unusual fussiness, loss of appetite, trouble sleeping',
      'Diamox dosing for children should be discussed with your pediatrician',
      'Have a low-altitude backup plan if kids don\'t adjust',
      'Don\'t ignore persistent symptoms - descend if necessary'
    ],
    kidSpecificEs: [
      'Los niños pueden ser más susceptibles y menos capaces de comunicar síntomas',
      'Observa: irritabilidad inusual, pérdida de apetito, problemas para dormir',
      'La dosis de Diamox para niños debe discutirse con tu pediatra',
      'Ten un plan de respaldo de baja altitud si los niños no se adaptan',
      'No ignores síntomas persistentes - desciende si es necesario'
    ],
    warning: 'Severe altitude sickness (HACE, HAPE) is a medical emergency. If symptoms worsen or include confusion, difficulty breathing, or blue lips, descend immediately and seek medical care.',
    warningEs: 'El mal de altura severo (HACE, HAPE) es una emergencia médica. Si los síntomas empeoran o incluyen confusión, dificultad para respirar o labios azules, desciende inmediatamente y busca atención médica.'
  },
  {
    id: 'water-food',
    title: 'Water & Food Safety',
    titleEs: 'Seguridad del Agua y Alimentos',
    icon: Droplets,
    description: 'Tap water is not safe to drink in Peru. Food hygiene varies widely, especially outside tourist areas.',
    descriptionEs: 'El agua del grifo no es segura para beber en Perú. La higiene de alimentos varía mucho, especialmente fuera de áreas turísticas.',
    tips: [
      'Drink only bottled or purified water',
      'Avoid ice unless you know it\'s from purified water',
      'Eat at busy, popular restaurants (high turnover = fresh food)',
      'Avoid street food unless it\'s freshly cooked and hot',
      'Peel fruits or wash with purified water',
      'Be cautious with raw salads outside high-end restaurants',
      'Carry hand sanitizer and use before meals'
    ],
    tipsEs: [
      'Bebe solo agua embotellada o purificada',
      'Evita el hielo a menos que sepas que es de agua purificada',
      'Come en restaurantes populares y concurridos (alta rotación = comida fresca)',
      'Evita comida callejera a menos que esté recién cocinada y caliente',
      'Pela frutas o lávalas con agua purificada',
      'Ten cuidado con ensaladas crudas fuera de restaurantes de alta gama',
      'Lleva desinfectante de manos y úsalo antes de las comidas'
    ],
    kidSpecific: [
      'Pack powdered electrolyte packets for potential stomach upsets',
      'Bring familiar snacks from home for picky eaters',
      'Stick to cooked foods when introducing Peruvian cuisine',
      'Avoid ceviche for very young children (raw fish)',
      'Check all bottles are properly sealed before drinking'
    ],
    kidSpecificEs: [
      'Empaca paquetes de electrolitos en polvo para posibles malestares estomacales',
      'Trae snacks familiares de casa para comedores exigentes',
      'Mantente con alimentos cocinados al introducir cocina peruana',
      'Evita el ceviche para niños muy pequeños (pescado crudo)',
      'Verifica que todas las botellas estén bien selladas antes de beber'
    ]
  },
  {
    id: 'sun-protection',
    title: 'Sun Protection',
    titleEs: 'Protección Solar',
    icon: Sun,
    description: 'The sun is extremely strong in Peru, especially at high altitude and near the equator. UV index regularly reaches "extreme" levels.',
    descriptionEs: 'El sol es extremadamente fuerte en Perú, especialmente en gran altitud y cerca del ecuador. El índice UV regularmente alcanza niveles "extremos".',
    tips: [
      'Use SPF 50+ broad-spectrum sunscreen',
      'Reapply every 2 hours and after swimming',
      'Wear wide-brimmed hats and UV-protective sunglasses',
      'Seek shade during peak hours (10am-4pm)',
      'Don\'t forget lips, ears, and tops of feet',
      'UV is stronger at altitude - 4% more per 300m elevation',
      'Cloudy days can still cause sunburn'
    ],
    tipsEs: [
      'Usa protector solar SPF 50+ de amplio espectro',
      'Reaplica cada 2 horas y después de nadar',
      'Usa sombreros de ala ancha y gafas de sol con protección UV',
      'Busca sombra durante horas pico (10am-4pm)',
      'No olvides labios, orejas y parte superior de los pies',
      'Los UV son más fuertes en altitud - 4% más por cada 300m de elevación',
      'Los días nublados también pueden causar quemaduras'
    ],
    kidSpecific: [
      'Children\'s skin is more sensitive - use kid-specific sunscreen',
      'Apply 30 minutes before going outside',
      'Cover babies with lightweight clothing and keep in shade',
      'Make sunscreen application a fun daily ritual',
      'Pack multiple sun hats - kids lose things!'
    ],
    kidSpecificEs: [
      'La piel de los niños es más sensible - usa protector solar específico para niños',
      'Aplica 30 minutos antes de salir',
      'Cubre a los bebés con ropa ligera y mantenlos en la sombra',
      'Haz de la aplicación de protector solar un ritual diario divertido',
      '¡Empaca múltiples sombreros - los niños pierden cosas!'
    ]
  },
  {
    id: 'insects',
    title: 'Insect-Borne Illnesses',
    titleEs: 'Enfermedades Transmitidas por Insectos',
    icon: Bug,
    description: 'Mosquitoes in the Amazon and coastal areas can carry dengue, Zika, and (rarely) malaria. Protection is essential.',
    descriptionEs: 'Los mosquitos en la Amazonía y áreas costeras pueden transmitir dengue, Zika y (raramente) malaria. La protección es esencial.',
    tips: [
      'Use DEET-based repellent (20-30% concentration)',
      'Apply repellent after sunscreen',
      'Wear long sleeves and pants at dawn and dusk',
      'Sleep under mosquito nets in jungle lodges',
      'Malaria prophylaxis may be recommended for remote Amazon areas',
      'Check CDC/WHO recommendations before travel',
      'Treat clothing with permethrin for extra protection'
    ],
    tipsEs: [
      'Usa repelente a base de DEET (concentración 20-30%)',
      'Aplica repelente después del protector solar',
      'Usa mangas largas y pantalones al amanecer y atardecer',
      'Duerme bajo mosquiteros en lodges de la selva',
      'La profilaxis contra malaria puede recomendarse para áreas remotas del Amazonas',
      'Verifica las recomendaciones del CDC/OMS antes de viajar',
      'Trata la ropa con permetrina para protección extra'
    ],
    kidSpecific: [
      'Use child-safe repellent (check age recommendations)',
      'Don\'t apply repellent to children\'s hands (they touch their mouths)',
      'Consider repellent wristbands for additional protection',
      'Dress kids in lightweight long-sleeved clothing',
      'Check beds and sleeping areas for mosquitoes before bedtime'
    ],
    kidSpecificEs: [
      'Usa repelente seguro para niños (verifica recomendaciones de edad)',
      'No apliques repelente en las manos de los niños (se tocan la boca)',
      'Considera pulseras repelentes para protección adicional',
      'Viste a los niños con ropa ligera de mangas largas',
      'Revisa camas y áreas de dormir en busca de mosquitos antes de acostarse'
    ],
    warning: 'If you develop fever, severe headache, joint pain, or rash after returning home, seek medical attention and mention your travel to Peru.',
    warningEs: 'Si desarrollas fiebre, dolor de cabeza severo, dolor en articulaciones o sarpullido después de regresar a casa, busca atención médica y menciona tu viaje a Perú.'
  },
  {
    id: 'traveler-diarrhea',
    title: 'Traveler\'s Diarrhea',
    titleEs: 'Diarrea del Viajero',
    icon: Pill,
    description: 'The most common travel illness. Usually caused by bacteria in food or water and resolves within a few days.',
    descriptionEs: 'La enfermedad de viaje más común. Usualmente causada por bacterias en comida o agua y se resuelve en pocos días.',
    tips: [
      'Follow water and food safety guidelines strictly',
      'Carry oral rehydration salts (ORS)',
      'Imodium can help manage symptoms for adults',
      'Probiotics before and during travel may help prevent',
      'Wash hands frequently, especially before eating',
      'Seek medical care if symptoms are severe or last more than 2 days',
      'Stay hydrated - small, frequent sips of water'
    ],
    tipsEs: [
      'Sigue estrictamente las pautas de seguridad de agua y alimentos',
      'Lleva sales de rehidratación oral (SRO)',
      'Imodium puede ayudar a manejar síntomas en adultos',
      'Probióticos antes y durante el viaje pueden ayudar a prevenir',
      'Lávate las manos frecuentemente, especialmente antes de comer',
      'Busca atención médica si los síntomas son severos o duran más de 2 días',
      'Mantente hidratado - pequeños sorbos frecuentes de agua'
    ],
    kidSpecific: [
      'Dehydration happens faster in children - watch for signs',
      'Signs of dehydration: dry mouth, no tears, decreased urination',
      'Give ORS solution, not sports drinks or juice',
      'Don\'t give anti-diarrheal medication to young children without consulting a doctor',
      'Pack pediatric electrolyte powder from home'
    ],
    kidSpecificEs: [
      'La deshidratación ocurre más rápido en niños - observa los signos',
      'Signos de deshidratación: boca seca, sin lágrimas, micción disminuida',
      'Da solución SRO, no bebidas deportivas o jugos',
      'No des medicamentos antidiarreicos a niños pequeños sin consultar a un médico',
      'Empaca electrolitos pediátricos en polvo desde casa'
    ]
  }
];

const medicalKit = {
  essentials: [
    { item: 'Prescription medications (extra supply)', itemEs: 'Medicamentos recetados (suministro extra)' },
    { item: 'Pain reliever/fever reducer (acetaminophen, ibuprofen)', itemEs: 'Analgésico/reductor de fiebre (acetaminofén, ibuprofeno)' },
    { item: 'Antihistamine for allergies', itemEs: 'Antihistamínico para alergias' },
    { item: 'Oral rehydration salts', itemEs: 'Sales de rehidratación oral' },
    { item: 'Anti-diarrhea medication (for adults)', itemEs: 'Medicamento antidiarreico (para adultos)' },
    { item: 'Motion sickness medication', itemEs: 'Medicamento para el mareo' },
    { item: 'Sunscreen SPF 50+', itemEs: 'Protector solar SPF 50+' },
    { item: 'Insect repellent (DEET-based)', itemEs: 'Repelente de insectos (a base de DEET)' },
    { item: 'Hand sanitizer', itemEs: 'Desinfectante de manos' },
    { item: 'First aid supplies (bandages, antiseptic)', itemEs: 'Suministros de primeros auxilios (vendas, antiséptico)' }
  ],
  forKids: [
    { item: 'Children\'s pain reliever/fever reducer', itemEs: 'Analgésico/reductor de fiebre para niños' },
    { item: 'Pediatric electrolyte powder', itemEs: 'Electrolitos pediátricos en polvo' },
    { item: 'Children\'s antihistamine', itemEs: 'Antihistamínico para niños' },
    { item: 'Kid-safe sunscreen', itemEs: 'Protector solar seguro para niños' },
    { item: 'Child-safe insect repellent', itemEs: 'Repelente de insectos seguro para niños' },
    { item: 'Thermometer', itemEs: 'Termómetro' },
    { item: 'Diaper rash cream (if applicable)', itemEs: 'Crema para dermatitis del pañal (si aplica)' },
    { item: 'Any specific medications your child takes', itemEs: 'Cualquier medicamento específico que tome tu hijo' }
  ],
  altitude: [
    { item: 'Diamox/Acetazolamide (prescription)', itemEs: 'Diamox/Acetazolamida (receta médica)' },
    { item: 'Ibuprofen for headaches', itemEs: 'Ibuprofeno para dolores de cabeza' },
    { item: 'Coca tea bags or candies', itemEs: 'Bolsitas de té de coca o caramelos' },
    { item: 'Oxygen canister (available locally)', itemEs: 'Tanque de oxígeno (disponible localmente)' }
  ]
};

const emergencyContacts = [
  { name: 'Emergency Services', nameEs: 'Servicios de Emergencia', number: '105', note: 'Police', noteEs: 'Policía' },
  { name: 'Medical Emergency', nameEs: 'Emergencia Médica', number: '117', note: 'Ambulance', noteEs: 'Ambulancia' },
  { name: 'Fire Department', nameEs: 'Bomberos', number: '116', note: 'Fire/Rescue', noteEs: 'Incendio/Rescate' },
  { name: 'Tourist Police', nameEs: 'Policía de Turismo', number: '(01) 574-8000', note: 'Lima', noteEs: 'Lima' }
];

export default function HealthPage() {
  const { locale } = useI18n();
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const activeTopic = healthTopics.find(t => t.id === selectedTopic);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Guía de Salud Familiar' : 'Family Health Guide'}
              </h1>
            </div>
            <p className="text-xl text-white/90 mb-6">
              {locale === 'es'
                ? 'Todo lo que necesitas saber para mantener a tu familia saludable mientras viajas por Perú.'
                : 'Everything you need to know to keep your family healthy while traveling in Peru.'}
            </p>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 inline-block">
              <p className="text-sm">
                <AlertTriangle className="h-4 w-4 inline mr-2" />
                {locale === 'es'
                  ? 'Esta guía es solo informativa. Consulta a tu médico antes de viajar.'
                  : 'This guide is for information only. Consult your doctor before traveling.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Stethoscope className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Consulta tu médico' : 'See your doctor'}
              </p>
              <p className="font-bold text-peru-earth">6-8 {locale === 'es' ? 'semanas antes' : 'weeks before'}</p>
            </div>
            <div className="p-4">
              <Thermometer className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Altitud de Cusco' : 'Cusco altitude'}
              </p>
              <p className="font-bold text-peru-earth">3,400m / 11,150ft</p>
            </div>
            <div className="p-4">
              <Sun className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Índice UV típico' : 'Typical UV index'}
              </p>
              <p className="font-bold text-peru-earth">11+ ({locale === 'es' ? 'extremo' : 'extreme'})</p>
            </div>
            <div className="p-4">
              <Phone className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Emergencias' : 'Emergency'}
              </p>
              <p className="font-bold text-peru-earth">105</p>
            </div>
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Temas de Salud Importantes' : 'Important Health Topics'}
          </h2>

          {/* Topic Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {healthTopics.map((topic) => {
              const Icon = topic.icon;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                  className={`text-left p-6 rounded-xl transition-all ${
                    selectedTopic === topic.id
                      ? 'bg-peru-terracotta text-white shadow-lg'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <Icon className={`h-8 w-8 mb-3 ${selectedTopic === topic.id ? 'text-white' : 'text-peru-terracotta'}`} />
                  <h3 className={`font-bold text-lg ${selectedTopic === topic.id ? 'text-white' : 'text-peru-earth'}`}>
                    {locale === 'es' ? topic.titleEs : topic.title}
                  </h3>
                  <p className={`text-sm mt-1 ${selectedTopic === topic.id ? 'text-white/80' : 'text-gray-600'}`}>
                    {locale === 'es' ? topic.descriptionEs.slice(0, 80) : topic.description.slice(0, 80)}...
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Topic Details */}
          {activeTopic && (
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = activeTopic.icon;
                  return <Icon className="h-8 w-8 text-peru-terracotta" />;
                })()}
                <h3 className="text-2xl font-bold text-peru-earth">
                  {locale === 'es' ? activeTopic.titleEs : activeTopic.title}
                </h3>
              </div>

              <p className="text-gray-700 mb-6">
                {locale === 'es' ? activeTopic.descriptionEs : activeTopic.description}
              </p>

              {activeTopic.warning && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-700 text-sm">
                      {locale === 'es' ? activeTopic.warningEs : activeTopic.warning}
                    </p>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {/* General Tips */}
                <div className="bg-peru-sand/30 rounded-xl p-5">
                  <h4 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {locale === 'es' ? 'Consejos Generales' : 'General Tips'}
                  </h4>
                  <ul className="space-y-2">
                    {(locale === 'es' ? activeTopic.tipsEs : activeTopic.tips).map((tip, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                        <span className="text-peru-terracotta mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Kids Specific */}
                <div className="bg-peru-terracotta/10 rounded-xl p-5">
                  <h4 className="font-bold text-peru-terracotta mb-3 flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    {locale === 'es' ? 'Para Niños' : 'For Kids'}
                  </h4>
                  <ul className="space-y-2">
                    {(locale === 'es' ? activeTopic.kidSpecificEs : activeTopic.kidSpecific).map((tip, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                        <span className="text-peru-gold mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Medical Kit */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Kit Médico de Viaje' : 'Travel Medical Kit'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Essentials */}
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-peru-terracotta" />
                {locale === 'es' ? 'Esenciales' : 'Essentials'}
              </h3>
              <ul className="space-y-2">
                {medicalKit.essentials.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{locale === 'es' ? item.itemEs : item.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Kids */}
            <div className="bg-peru-terracotta/10 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <Baby className="h-5 w-5 text-peru-terracotta" />
                {locale === 'es' ? 'Para Niños' : 'For Kids'}
              </h3>
              <ul className="space-y-2">
                {medicalKit.forKids.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{locale === 'es' ? item.itemEs : item.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Altitude */}
            <div className="bg-peru-gold/10 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-peru-gold" />
                {locale === 'es' ? 'Para Altitud' : 'For Altitude'}
              </h3>
              <ul className="space-y-2">
                {medicalKit.altitude.map((item, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{locale === 'es' ? item.itemEs : item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Contactos de Emergencia' : 'Emergency Contacts'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {emergencyContacts.map((contact, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md text-center">
                <Phone className="h-8 w-8 text-peru-terracotta mx-auto mb-3" />
                <h3 className="font-bold text-peru-earth">
                  {locale === 'es' ? contact.nameEs : contact.name}
                </h3>
                <p className="text-2xl font-bold text-peru-terracotta my-2">{contact.number}</p>
                <p className="text-sm text-gray-600">
                  {locale === 'es' ? contact.noteEs : contact.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare in Peru */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-8 text-center">
            {locale === 'es' ? 'Atención Médica en Perú' : 'Healthcare in Peru'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <MapPin className="h-8 w-8 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                {locale === 'es' ? 'Hospitales y Clínicas' : 'Hospitals & Clinics'}
              </h3>
              <ul className="space-y-2 text-white/90">
                <li>• {locale === 'es' ? 'Lima tiene excelentes hospitales privados (Clínica Anglo Americana, Clínica Ricardo Palma)' : 'Lima has excellent private hospitals (Clínica Anglo Americana, Clínica Ricardo Palma)'}</li>
                <li>• {locale === 'es' ? 'Cusco tiene clínicas adecuadas para emergencias' : 'Cusco has adequate clinics for emergencies'}</li>
                <li>• {locale === 'es' ? 'Las áreas rurales tienen instalaciones limitadas' : 'Rural areas have limited facilities'}</li>
                <li>• {locale === 'es' ? 'Pago por adelantado es común - guarda recibos para reclamos de seguro' : 'Upfront payment is common - keep receipts for insurance claims'}</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <Clock className="h-8 w-8 mb-4" />
              <h3 className="font-bold text-xl mb-3">
                {locale === 'es' ? 'Farmacias' : 'Pharmacies'}
              </h3>
              <ul className="space-y-2 text-white/90">
                <li>• {locale === 'es' ? 'Farmacias abundan en todas las ciudades (InkaFarma, MiFarma)' : 'Pharmacies are abundant in all cities (InkaFarma, MiFarma)'}</li>
                <li>• {locale === 'es' ? 'Muchos medicamentos disponibles sin receta' : 'Many medications available without prescription'}</li>
                <li>• {locale === 'es' ? 'Lleva tus recetas traducidas al español' : 'Bring your prescriptions translated to Spanish'}</li>
                <li>• {locale === 'es' ? 'Horarios extendidos en áreas turísticas' : 'Extended hours in tourist areas'}</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-white/20 inline-block px-6 py-3 rounded-xl">
              <p className="font-semibold">
                {locale === 'es'
                  ? '¡El seguro de viaje es esencial! Asegúrate de que cubra evacuación médica.'
                  : 'Travel insurance is essential! Make sure it covers medical evacuation.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
