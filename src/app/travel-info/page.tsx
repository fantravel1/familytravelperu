'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Sun, Cloud, Droplets, Snowflake, Mountain, Thermometer, Heart,
  AlertTriangle, Baby, Users, Plane, Bus, Car, Train, Cable,
  UtensilsCrossed, Fish, Award, MapPin, CheckCircle, Info
} from 'lucide-react';

export default function TravelInfoPage() {
  const { t, locale } = useI18n();

  const climateRegions = [
    {
      icon: Mountain,
      name: locale === 'es' ? 'Altiplano - Temporada Seca' : 'Highlands - Dry Season',
      months: locale === 'es' ? 'Mayo - Septiembre' : 'May - September',
      description: locale === 'es'
        ? 'Cielos despejados, noches frías 0-7°C, días cálidos 15-24°C. Ideal para trekking y Machu Picchu.'
        : 'Clear skies, cold nights 0-7°C, warm days 15-24°C. Perfect for trekking and Machu Picchu.',
      highlight: true
    },
    {
      icon: Cloud,
      name: locale === 'es' ? 'Altiplano - Temporada de Lluvias' : 'Highlands - Rainy Season',
      months: locale === 'es' ? 'Octubre - Abril' : 'October - April',
      description: locale === 'es'
        ? 'Lluvias por la tarde, senderos fangosos. Menos turistas pero más desafiante para caminatas.'
        : 'Afternoon showers, muddy trekking trails. Fewer tourists but more challenging for hiking.',
      highlight: false
    },
    {
      icon: Sun,
      name: locale === 'es' ? 'Costa (Paracas)' : 'Coast (Paracas)',
      months: locale === 'es' ? 'Todo el Año' : 'Year-Round',
      description: locale === 'es'
        ? 'Clima cálido y seco. Veranos 27°C, inviernos 18°C. Excelente para vida silvestre marina.'
        : 'Warm and dry climate. Summers 27°C, winters 18°C. Excellent for marine wildlife.',
      highlight: false
    },
    {
      icon: Thermometer,
      name: locale === 'es' ? 'Playas de Máncora' : 'Mancora Beaches',
      months: locale === 'es' ? 'Marzo (pico)' : 'March (peak)',
      description: locale === 'es'
        ? 'Tropical, máximos de 30.8°C en marzo, mínimos de 15.5°C en septiembre.'
        : 'Tropical climate, peaks at 30.8°C in March, lows of 15.5°C in September.',
      highlight: false
    },
    {
      icon: Droplets,
      name: locale === 'es' ? 'Amazonas (Iquitos)' : 'Amazon (Iquitos)',
      months: locale === 'es' ? 'Jun-Nov (mejor)' : 'Jun-Nov (best)',
      description: locale === 'es'
        ? 'Agua alta Dic-May (lluvia intensa), agua baja Jun-Nov (mejor para senderismo).'
        : 'High-water Dec-May (heavy rain), low-water Jun-Nov (better for hiking).',
      highlight: false
    }
  ];

  const altitudeInfo = [
    {
      location: 'Cusco',
      elevation: '11,152 ft (3,399m)',
      icon: AlertTriangle,
      description: locale === 'es'
        ? 'La altitud más desafiante. Requiere 2+ días de aclimatación.'
        : 'Most challenging altitude. Requires 2+ days acclimatization.',
      color: 'text-peru-terracotta'
    },
    {
      location: 'Machu Picchu',
      elevation: '7,972 ft (2,430m)',
      icon: CheckCircle,
      description: locale === 'es'
        ? 'Más manejable que Cusco. Altitud moderada, más fácil de tolerar.'
        : 'More manageable than Cusco. Moderate altitude, easier to tolerate.',
      color: 'text-peru-jungle'
    },
    {
      location: 'Huaraz',
      elevation: '10,013 ft (3,052m)',
      icon: Mountain,
      description: locale === 'es'
        ? 'Ciudad de montaña alta. Necesita aclimatación adecuada.'
        : 'High mountain city. Needs proper acclimatization.',
      color: 'text-peru-ocean'
    },
    {
      location: locale === 'es' ? 'Valle Sagrado' : 'Sacred Valley',
      elevation: '9,000-11,000 ft',
      icon: Heart,
      description: locale === 'es'
        ? 'Recomendado como base. Más fácil que Cusco para aclimatarse.'
        : 'Recommended as base. Easier than Cusco for acclimatization.',
      color: 'text-peru-gold'
    }
  ];

  const healthTips = [
    {
      title: locale === 'es' ? 'Para la Altitud' : 'For Altitude',
      tips: [
        locale === 'es' ? 'Mínimo 2 días de aclimatación antes de actividades intensas' : 'Minimum 2 days acclimatization before strenuous activities',
        locale === 'es' ? 'Té de coca ayuda con síntomas leves' : 'Coca tea helps with mild symptoms',
        locale === 'es' ? 'Beber mucha agua (3-4 litros diarios)' : 'Drink plenty of water (3-4 liters daily)',
        locale === 'es' ? 'Evitar alcohol los primeros días' : 'Avoid alcohol first few days',
        locale === 'es' ? 'Comer comidas ligeras y frecuentes' : 'Eat light, frequent meals'
      ]
    },
    {
      title: locale === 'es' ? 'Para el Amazonas' : 'For Amazon',
      tips: [
        locale === 'es' ? 'Vacuna contra fiebre amarilla obligatoria' : 'Yellow fever vaccination required',
        locale === 'es' ? 'Repelente de insectos fuerte (DEET 30%+)' : 'Strong insect repellent (DEET 30%+)',
        locale === 'es' ? 'Ropa de manga larga ligera' : 'Light long-sleeve clothing',
        locale === 'es' ? 'Antimaláricos según recomendación médica' : 'Anti-malarials as per medical advice',
      ]
    },
    {
      title: locale === 'es' ? 'Consejos Generales' : 'General Tips',
      tips: [
        locale === 'es' ? 'Seguro de viaje con cobertura para altitud' : 'Travel insurance with altitude coverage',
        locale === 'es' ? 'Llevar medicamentos personales en equipaje de mano' : 'Carry personal medications in carry-on',
        locale === 'es' ? 'Botiquín básico de primeros auxilios' : 'Basic first aid kit',
        locale === 'es' ? 'Protector solar SPF 50+ para alta altitud' : 'SPF 50+ sunscreen for high altitude',
      ]
    }
  ];

  const familyTips = [
    {
      icon: Baby,
      age: locale === 'es' ? 'Niños Pequeños (0-5 años)' : 'Young Children (0-5 years)',
      tips: [
        locale === 'es' ? 'Limitar caminatas diarias a 1-2 horas' : 'Limit daily walking to 1-2 hours',
        locale === 'es' ? 'Programar actividades en horarios de mayor energía' : 'Schedule activities for peak energy times',
        locale === 'es' ? 'Llevar snacks y juguetes favoritos' : 'Bring favorite snacks and toys',
        locale === 'es' ? 'Considerar portabebés para trekking ligero' : 'Consider baby carriers for light trekking',
        locale === 'es' ? 'Evitar altitud extrema (quedarse en Valle Sagrado)' : 'Avoid extreme altitude (stay in Sacred Valley)'
      ]
    },
    {
      icon: Users,
      age: locale === 'es' ? 'Niños y Adolescentes (6-17 años)' : 'Kids & Teens (6-17 years)',
      tips: [
        locale === 'es' ? 'Incluir actividades de aventura (tirolesa, rafting)' : 'Include adventure activities (zipline, rafting)',
        locale === 'es' ? 'Intercambios culturales con comunidades locales' : 'Cultural exchanges with local communities',
        locale === 'es' ? 'Involucrarlos en la planificación del viaje' : 'Involve them in trip planning',
        locale === 'es' ? 'Clases de cocina peruana para experiencias prácticas' : 'Peruvian cooking classes for hands-on experiences',
        locale === 'es' ? 'Tiempo libre para explorar mercados y compras' : 'Free time to explore markets and shopping'
      ]
    },
    {
      icon: Heart,
      age: locale === 'es' ? 'Viajeros Senior (60+)' : 'Senior Travelers (60+)',
      tips: [
        locale === 'es' ? 'Mayor tiempo de aclimatación (3-4 días)' : 'Longer acclimatization time (3-4 days)',
        locale === 'es' ? 'Tours con caminata mínima disponibles' : 'Tours with minimal walking available',
        locale === 'es' ? 'Considerar tren a Machu Picchu (no caminar)' : 'Consider train to Machu Picchu (no hiking)',
        locale === 'es' ? 'Hoteles con elevadores y facilidades' : 'Hotels with elevators and facilities',
        locale === 'es' ? 'Chequeo médico pre-viaje recomendado' : 'Pre-travel medical checkup recommended'
      ]
    }
  ];

  const transportOptions = [
    {
      icon: Plane,
      name: locale === 'es' ? 'Vuelos Domésticos' : 'Domestic Flights',
      details: locale === 'es' ? 'Lima-Cusco ~1 hora' : 'Lima-Cusco ~1 hour',
      description: locale === 'es'
        ? 'La forma más rápida de cubrir grandes distancias. LATAM, Avianca, Peruvian Airlines.'
        : 'Fastest way to cover long distances. LATAM, Avianca, Peruvian Airlines.',
      recommended: true
    },
    {
      icon: Bus,
      name: locale === 'es' ? 'Buses Turísticos' : 'Tourist Buses',
      details: locale === 'es' ? 'Peru Hop, TEPSA' : 'Peru Hop, TEPSA',
      description: locale === 'es'
        ? 'Buena opción para rutas populares. Servicios cómodos y seguros para familias.'
        : 'Good option for popular routes. Comfortable and safe services for families.',
      recommended: true
    },
    {
      icon: Car,
      name: locale === 'es' ? 'Transporte Privado' : 'Private Transfers',
      details: locale === 'es' ? '~$37 Cusco-Ollantaytambo' : '~$37 Cusco-Ollantaytambo',
      description: locale === 'es'
        ? 'Flexible y conveniente para familias. Recomendado para Valle Sagrado.'
        : 'Flexible and convenient for families. Recommended for Sacred Valley.',
      recommended: true
    },
    {
      icon: Car,
      name: locale === 'es' ? 'Alquiler de Auto' : 'Car Rental',
      details: locale === 'es' ? '~$20/día' : '~$20/day',
      description: locale === 'es'
        ? 'Carreteras desafiantes. Solo para conductores experimentados.'
        : 'Challenging roads. Only for experienced drivers.',
      recommended: false
    },
    {
      icon: Train,
      name: locale === 'es' ? 'Tren a Machu Picchu' : 'Machu Picchu Train',
      details: 'PeruRail, Inca Rail',
      description: locale === 'es'
        ? 'Esencial para llegar a Machu Picchu. Vistas panorámicas espectaculares.'
        : 'Essential for reaching Machu Picchu. Spectacular scenic views.',
      recommended: true
    },
    {
      icon: Cable,
      name: locale === 'es' ? 'Teleférico Kuélap' : 'Kuelap Cable Car',
      details: locale === 'es' ? '20 minutos desde Nuevo Tingo' : '20 minutes from Nuevo Tingo',
      description: locale === 'es'
        ? 'Forma moderna de llegar a las ruinas de Kuélap. Ahorra horas de caminata.'
        : 'Modern way to reach Kuelap ruins. Saves hours of hiking.',
      recommended: true
    }
  ];

  const gastronomy = [
    {
      icon: Fish,
      dish: 'Ceviche',
      badge: locale === 'es' ? 'Patrimonio UNESCO 2024' : 'UNESCO Heritage 2024',
      description: locale === 'es'
        ? 'Pescado fresco marinado en jugo de limón con cebolla morada, ají y cilantro. Plato emblemático de la costa.'
        : 'Fresh fish marinated in lime juice with red onion, chili, and cilantro. Iconic coastal dish.',
      region: locale === 'es' ? 'Costa' : 'Coast'
    },
    {
      icon: UtensilsCrossed,
      dish: 'Lomo Saltado',
      badge: locale === 'es' ? 'Fusión' : 'Fusion',
      description: locale === 'es'
        ? 'Fusión chino-peruana. Carne salteada con tomates, cebollas, papas fritas y arroz.'
        : 'Chinese-Peruvian fusion. Stir-fried beef with tomatoes, onions, fries, and rice.',
      region: locale === 'es' ? 'Todo Perú' : 'All Peru'
    },
    {
      icon: Mountain,
      dish: locale === 'es' ? 'Pachamanca' : 'Pachamanca',
      badge: locale === 'es' ? 'Tradicional' : 'Traditional',
      description: locale === 'es'
        ? 'Carnes y verduras cocidas en horno de tierra. Experiencia culinaria ancestral.'
        : 'Meats and vegetables cooked in earth oven. Ancient culinary experience.',
      region: locale === 'es' ? 'Altiplano' : 'Highlands'
    },
    {
      icon: AlertTriangle,
      dish: locale === 'es' ? 'Picante de Cuy' : 'Picante de Cuy',
      badge: locale === 'es' ? 'Aventurero' : 'Adventurous',
      description: locale === 'es'
        ? 'Especialidad de Huaraz. Cuy (conejillo de indias) en salsa picante. Experiencia cultural única.'
        : 'Huaraz specialty. Guinea pig in spicy sauce. Unique cultural experience.',
      region: 'Huaraz'
    },
    {
      icon: Droplets,
      dish: 'Juane',
      badge: locale === 'es' ? 'Amazónico' : 'Amazonian',
      description: locale === 'es'
        ? 'Arroz, pollo y especias envueltos en hojas de bijao. Plato tradicional de la selva.'
        : 'Rice, chicken, and spices wrapped in bijao leaves. Traditional jungle dish.',
      region: locale === 'es' ? 'Amazonas' : 'Amazon'
    },
    {
      icon: Award,
      dish: 'Pisco',
      badge: locale === 'es' ? 'Bebida Nacional' : 'National Drink',
      description: locale === 'es'
        ? 'Brandy de uva, base del famoso Pisco Sour. Mejor en la costa (Ica, Paracas).'
        : 'Grape brandy, base of the famous Pisco Sour. Best on the coast (Ica, Paracas).',
      region: locale === 'es' ? 'Costa' : 'Coast'
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('travel_info.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('travel_info.subtitle')}
          </p>
        </div>
      </section>

      {/* Seasons & Climate */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-3">
              {t('travel_info.seasons_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('travel_info.seasons_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateRegions.map((region, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  region.highlight
                    ? 'bg-peru-gold/10 border-2 border-peru-gold shadow-lg'
                    : 'bg-gray-50'
                }`}
              >
                <region.icon
                  className={`w-12 h-12 mb-4 ${
                    region.highlight ? 'text-peru-gold' : 'text-gray-400'
                  }`}
                />
                <div className="text-sm font-medium text-peru-terracotta mb-1">
                  {region.months}
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-2">
                  {region.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {region.description}
                </p>
                {region.highlight && (
                  <div className="mt-4 inline-block badge-gold text-xs">
                    {locale === 'es' ? 'Mejor Época' : 'Best Time'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altitude & Health */}
      <section className="py-16 lg:py-24 bg-peru-sand/30">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-3">
              {t('travel_info.altitude_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('travel_info.altitude_subtitle')}
            </p>
          </div>

          {/* Altitude Levels */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {altitudeInfo.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <location.icon className={`w-10 h-10 mb-3 ${location.color}`} />
                <h3 className="text-xl font-display font-bold text-peru-earth mb-1">
                  {location.location}
                </h3>
                <div className="text-peru-gold font-semibold mb-3">
                  {location.elevation}
                </div>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </div>
            ))}
          </div>

          {/* Health Tips */}
          <div className="grid md:grid-cols-3 gap-6">
            {healthTips.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-display font-bold text-peru-earth mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-peru-gold" />
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-peru-jungle flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Travel Tips */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-3">
              {t('travel_info.family_tips_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('travel_info.family_tips_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {familyTips.map((group, index) => (
              <div key={index} className="bg-peru-sand/50 rounded-2xl p-6">
                <div className="w-14 h-14 bg-peru-gold/20 rounded-full flex items-center justify-center mb-4">
                  <group.icon className="w-7 h-7 text-peru-gold" />
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-4">
                  {group.age}
                </h3>
                <ul className="space-y-2">
                  {group.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-peru-terracotta flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sacred Valley Recommendation */}
          <div className="mt-8 bg-peru-gold/10 border-2 border-peru-gold rounded-2xl p-6 text-center">
            <MapPin className="w-8 h-8 text-peru-gold mx-auto mb-3" />
            <h3 className="text-xl font-display font-bold text-peru-earth mb-2">
              {locale === 'es' ? '💡 Consejo Pro' : '💡 Pro Tip'}
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'El Valle Sagrado (9,000-11,000 ft) es más fácil de tolerar que Cusco y es una base excelente para familias. Considera alojarte allí para mejor aclimatación.'
                : 'The Sacred Valley (9,000-11,000 ft) is easier to tolerate than Cusco and makes an excellent base for families. Consider staying there for better acclimatization.'}
            </p>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 lg:py-24 bg-peru-sand/30">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-3">
              {t('travel_info.transport_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('travel_info.transport_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  option.recommended
                    ? 'bg-white shadow-lg border-2 border-peru-gold/20'
                    : 'bg-gray-50'
                }`}
              >
                <option.icon
                  className={`w-10 h-10 mb-3 ${
                    option.recommended ? 'text-peru-gold' : 'text-gray-400'
                  }`}
                />
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-display font-bold text-peru-earth">
                    {option.name}
                  </h3>
                  {option.recommended && (
                    <span className="badge-gold text-xs">
                      {locale === 'es' ? 'Recomendado' : 'Recommended'}
                    </span>
                  )}
                </div>
                <div className="text-peru-terracotta font-medium text-sm mb-2">
                  {option.details}
                </div>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food & Gastronomy */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-3">
              {t('travel_info.food_title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('travel_info.food_subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gastronomy.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start justify-between mb-3">
                  <item.icon className="w-10 h-10 text-peru-gold" />
                  <span className="badge-gold text-xs">{item.badge}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-1">
                  {item.dish}
                </h3>
                <div className="text-peru-terracotta text-sm font-medium mb-3">
                  {item.region}
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* UNESCO Badge */}
          <div className="mt-10 bg-gradient-to-r from-peru-gold/10 to-peru-terracotta/10 rounded-2xl p-6 text-center">
            <Award className="w-12 h-12 text-peru-gold mx-auto mb-3" />
            <h3 className="text-xl font-display font-bold text-peru-earth mb-2">
              {locale === 'es'
                ? 'Ceviche - Patrimonio Cultural Inmaterial UNESCO 2024'
                : 'Ceviche - UNESCO Intangible Cultural Heritage 2024'}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {locale === 'es'
                ? "La gastronomía peruana es reconocida mundialmente. ¡No te pierdas la oportunidad de probar la cocina que ha puesto a Perú en el mapa culinario global!"
                : "Peruvian gastronomy is world-renowned. Don't miss the chance to try the cuisine that's put Peru on the global culinary map!"}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            {t('travel_info.cta_title')}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {t('travel_info.cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraries/" className="btn-gold">
              {t('hero.cta')}
            </Link>
            <Link
              href="/contact/"
              className="btn-secondary border-white text-white hover:bg-white hover:text-peru-earth"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
