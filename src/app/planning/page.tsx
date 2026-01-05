'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Calendar, Thermometer, Backpack, Heart, Bus, Hotel,
  Sun, Cloud, Snowflake, CheckCircle, AlertTriangle
} from 'lucide-react';

export default function PlanningPage() {
  const { t, locale } = useI18n();

  const seasons = [
    {
      icon: Sun,
      months: locale === 'es' ? 'Mayo - Octubre' : 'May - October',
      name: locale === 'es' ? 'Temporada Seca' : 'Dry Season',
      description: locale === 'es'
        ? 'Mejor época para visitar los Andes y Machu Picchu. Días soleados, noches frías.'
        : 'Best time to visit the Andes and Machu Picchu. Sunny days, cold nights.',
      highlight: true
    },
    {
      icon: Cloud,
      months: locale === 'es' ? 'Noviembre - Abril' : 'November - April',
      name: locale === 'es' ? 'Temporada de Lluvias' : 'Rainy Season',
      description: locale === 'es'
        ? 'Lluvias frecuentes en la sierra, pero menos turistas y precios más bajos.'
        : 'Frequent rains in the highlands, but fewer tourists and lower prices.',
      highlight: false
    },
    {
      icon: Thermometer,
      months: locale === 'es' ? 'Diciembre - Marzo' : 'December - March',
      name: locale === 'es' ? 'Verano en la Costa' : 'Coastal Summer',
      description: locale === 'es'
        ? 'Perfecto para Lima y las playas. Tiempo cálido y soleado.'
        : 'Perfect for Lima and beaches. Warm and sunny weather.',
      highlight: false
    }
  ];

  const packingEssentials = {
    clothing: [
      locale === 'es' ? 'Capas (hace frío en altitud)' : 'Layers (cold at altitude)',
      locale === 'es' ? 'Chaqueta impermeable' : 'Rain jacket',
      locale === 'es' ? 'Zapatos cómodos para caminar' : 'Comfortable walking shoes',
      locale === 'es' ? 'Ropa ligera para la selva' : 'Light clothing for jungle',
      locale === 'es' ? 'Sombrero y gafas de sol' : 'Hat and sunglasses',
      locale === 'es' ? 'Traje de baño' : 'Swimsuit',
    ],
    essentials: [
      locale === 'es' ? 'Protector solar fuerte (SPF 50+)' : 'Strong sunscreen (SPF 50+)',
      locale === 'es' ? 'Repelente de insectos' : 'Insect repellent',
      locale === 'es' ? 'Medicamentos personales' : 'Personal medications',
      locale === 'es' ? 'Botiquín básico' : 'Basic first aid kit',
      locale === 'es' ? 'Adaptador de enchufe' : 'Power adapter',
      locale === 'es' ? 'Cámara con batería extra' : 'Camera with extra battery',
    ],
    forKids: [
      locale === 'es' ? 'Snacks favoritos' : 'Favorite snacks',
      locale === 'es' ? 'Juguetes pequeños para viajes' : 'Small travel toys',
      locale === 'es' ? 'Tablet con películas/juegos' : 'Tablet with movies/games',
      locale === 'es' ? 'Libros para colorear' : 'Coloring books',
      locale === 'es' ? 'Ropa extra (¡los niños se ensucian!)' : 'Extra clothes (kids get messy!)',
    ]
  };

  const healthTips = [
    {
      title: locale === 'es' ? 'Mal de Altura' : 'Altitude Sickness',
      tips: [
        locale === 'es' ? 'Tómalo con calma los primeros días en Cusco' : 'Take it easy the first days in Cusco',
        locale === 'es' ? 'Bebe mucha agua' : 'Drink plenty of water',
        locale === 'es' ? 'El té de coca ayuda' : 'Coca tea helps',
        locale === 'es' ? 'Evita comidas pesadas el primer día' : 'Avoid heavy meals on day one',
      ]
    },
    {
      title: locale === 'es' ? 'Seguridad Alimentaria' : 'Food Safety',
      tips: [
        locale === 'es' ? 'Bebe solo agua embotellada' : 'Drink only bottled water',
        locale === 'es' ? 'Come en restaurantes recomendados' : 'Eat at recommended restaurants',
        locale === 'es' ? 'Lava las frutas antes de comer' : 'Wash fruits before eating',
        locale === 'es' ? 'Lleva snacks para emergencias' : 'Carry snacks for emergencies',
      ]
    },
    {
      title: locale === 'es' ? 'Vacunas Recomendadas' : 'Recommended Vaccines',
      tips: [
        locale === 'es' ? 'Fiebre amarilla (para la selva)' : 'Yellow fever (for jungle)',
        locale === 'es' ? 'Hepatitis A y B' : 'Hepatitis A and B',
        locale === 'es' ? 'Tifoidea' : 'Typhoid',
        locale === 'es' ? 'Consulta a tu médico antes de viajar' : 'Consult your doctor before travel',
      ]
    }
  ];

  const transportOptions = [
    {
      name: locale === 'es' ? 'Vuelos Domésticos' : 'Domestic Flights',
      description: locale === 'es'
        ? 'La forma más rápida de moverse entre regiones. LATAM y otras aerolíneas conectan Lima con Cusco, Arequipa, Iquitos.'
        : 'Fastest way to move between regions. LATAM and other airlines connect Lima with Cusco, Arequipa, Iquitos.',
      recommended: true
    },
    {
      name: locale === 'es' ? 'Transporte Privado' : 'Private Transportation',
      description: locale === 'es'
        ? 'Recomendado para familias. Flexible, seguro y cómodo. Incluido en nuestros itinerarios.'
        : 'Recommended for families. Flexible, safe, and comfortable. Included in our itineraries.',
      recommended: true
    },
    {
      name: locale === 'es' ? 'Trenes' : 'Trains',
      description: locale === 'es'
        ? 'Esencial para Machu Picchu. PeruRail e Inca Rail ofrecen servicios panorámicos.'
        : 'Essential for Machu Picchu. PeruRail and Inca Rail offer scenic services.',
      recommended: true
    },
    {
      name: locale === 'es' ? 'Buses Turísticos' : 'Tourist Buses',
      description: locale === 'es'
        ? 'Buena opción para rutas largas como Cusco-Puno. Cruz del Sur y otros operadores premium.'
        : 'Good option for long routes like Cusco-Puno. Cruz del Sur and other premium operators.',
      recommended: false
    }
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4">
            {t('planning.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('planning.subtitle')}
          </p>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            <Calendar className="inline-block w-8 h-8 mr-3 text-peru-gold" />
            {t('planning.best_time')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seasons.map((season, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  season.highlight
                    ? 'bg-peru-gold/10 border-2 border-peru-gold'
                    : 'bg-gray-50'
                }`}
              >
                <season.icon className={`w-12 h-12 mb-4 ${season.highlight ? 'text-peru-gold' : 'text-gray-400'}`} />
                <div className="text-sm font-medium text-peru-terracotta mb-1">{season.months}</div>
                <h3 className="text-xl font-display font-bold text-peru-earth mb-2">{season.name}</h3>
                <p className="text-gray-600">{season.description}</p>
                {season.highlight && (
                  <div className="mt-4 inline-block badge-gold">
                    {locale === 'es' ? 'Recomendado' : 'Recommended'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Pack */}
      <section className="py-16 lg:py-24 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            <Backpack className="inline-block w-8 h-8 mr-3 text-peru-gold" />
            {t('planning.packing')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-display font-bold text-peru-earth mb-4">
                {locale === 'es' ? 'Ropa' : 'Clothing'}
              </h3>
              <ul className="space-y-2">
                {packingEssentials.clothing.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-peru-jungle flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-display font-bold text-peru-earth mb-4">
                {locale === 'es' ? 'Esenciales' : 'Essentials'}
              </h3>
              <ul className="space-y-2">
                {packingEssentials.essentials.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-peru-jungle flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-display font-bold text-peru-earth mb-4">
                {locale === 'es' ? 'Para los Niños' : 'For the Kids'}
              </h3>
              <ul className="space-y-2">
                {packingEssentials.forKids.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-peru-jungle flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Safety */}
      <section className="py-16 lg:py-24">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            <Heart className="inline-block w-8 h-8 mr-3 text-peru-gold" />
            {t('planning.health')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {healthTips.map((section, index) => (
              <div key={index} className="bg-peru-sand/50 rounded-2xl p-6">
                <h3 className="text-xl font-display font-bold text-peru-earth mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-peru-terracotta flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 lg:py-24 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth text-center mb-12">
            <Bus className="inline-block w-8 h-8 mr-3 text-peru-gold" />
            {t('planning.transportation')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {transportOptions.map((option, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 ${
                  option.recommended ? 'bg-white shadow-lg' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-display font-bold text-peru-earth">
                    {option.name}
                  </h3>
                  {option.recommended && (
                    <span className="badge-gold text-xs">
                      {locale === 'es' ? 'Top' : 'Best'}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Listo para Planificar tu Viaje?' : 'Ready to Plan Your Trip?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Déjanos ayudarte a crear el itinerario perfecto para tu familia.'
              : 'Let us help you create the perfect itinerary for your family.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/itineraries/" className="btn-gold">
              {t('hero.cta')}
            </Link>
            <Link href="/contact/" className="btn-secondary border-white text-white hover:bg-white hover:text-peru-earth">
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
