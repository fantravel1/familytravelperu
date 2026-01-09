'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Home,
  Building2,
  Tent,
  Users,
  Baby,
  Star,
  CheckCircle,
  AlertTriangle,
  Wifi,
  Car,
  UtensilsCrossed,
  MapPin,
  DollarSign,
  Heart,
  Shield
} from 'lucide-react';

interface AccommodationType {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  priceRange: string;
  description: string;
  descriptionEs: string;
  pros: string[];
  prosEs: string[];
  cons: string[];
  consEs: string[];
  bestFor: string[];
  bestForEs: string[];
  familyTips: string[];
  familyTipsEs: string[];
}

const accommodationTypes: AccommodationType[] = [
  {
    id: 'luxury-hotels',
    name: 'Luxury Hotels',
    nameEs: 'Hoteles de Lujo',
    icon: Star,
    priceRange: '$250-600+/night',
    description: 'International chains like JW Marriott, Belmond, and boutique luxury properties. Full amenities, often including kids\' programs.',
    descriptionEs: 'Cadenas internacionales como JW Marriott, Belmond y propiedades boutique de lujo. Todas las comodidades, a menudo incluyendo programas para niños.',
    pros: [
      'Family suites and connecting rooms available',
      'Kids\' clubs and babysitting services',
      'On-site restaurants with kids\' menus',
      'Concierge to arrange family tours',
      'Pools and recreational facilities',
      'Reliable hot water and heating'
    ],
    prosEs: [
      'Suites familiares y habitaciones conectadas disponibles',
      'Clubes para niños y servicios de niñera',
      'Restaurantes con menús para niños',
      'Conserje para organizar tours familiares',
      'Piscinas e instalaciones recreativas',
      'Agua caliente y calefacción confiables'
    ],
    cons: [
      'Expensive, especially in high season',
      'May feel impersonal',
      'Kids might miss local experience'
    ],
    consEs: [
      'Caro, especialmente en temporada alta',
      'Puede sentirse impersonal',
      'Los niños podrían perderse la experiencia local'
    ],
    bestFor: ['Families wanting full service', 'First-time visitors to Peru', 'Babies and toddlers'],
    bestForEs: ['Familias que quieren servicio completo', 'Visitantes primerizos a Perú', 'Bebés y niños pequeños'],
    familyTips: [
      'Book early for family suites - limited availability',
      'Ask about kids eat free programs',
      'Request rooms away from elevators for quiet nights',
      'Many offer altitude-friendly amenities in Cusco'
    ],
    familyTipsEs: [
      'Reserva temprano para suites familiares - disponibilidad limitada',
      'Pregunta por programas de niños comen gratis',
      'Solicita habitaciones alejadas de ascensores para noches tranquilas',
      'Muchos ofrecen amenidades para la altitud en Cusco'
    ]
  },
  {
    id: 'mid-range-hotels',
    name: 'Mid-Range Hotels',
    nameEs: 'Hoteles de Gama Media',
    icon: Building2,
    priceRange: '$80-200/night',
    description: 'Comfortable 3-4 star hotels, often family-run with good service. The sweet spot for most families.',
    descriptionEs: 'Hoteles cómodos de 3-4 estrellas, a menudo familiares con buen servicio. El punto ideal para la mayoría de familias.',
    pros: [
      'Good value for money',
      'Often family-run with personal attention',
      'Breakfast usually included',
      'Central locations',
      'Many have small pools or gardens'
    ],
    prosEs: [
      'Buena relación calidad-precio',
      'A menudo familiares con atención personalizada',
      'Desayuno usualmente incluido',
      'Ubicaciones céntricas',
      'Muchos tienen pequeñas piscinas o jardines'
    ],
    cons: [
      'Smaller rooms than luxury options',
      'Fewer amenities',
      'May need to book activities separately'
    ],
    consEs: [
      'Habitaciones más pequeñas que opciones de lujo',
      'Menos amenidades',
      'Puede que necesites reservar actividades por separado'
    ],
    bestFor: ['Most families', 'Longer stays', 'Budget-conscious travelers'],
    bestForEs: ['La mayoría de familias', 'Estadías largas', 'Viajeros conscientes del presupuesto'],
    familyTips: [
      'Ask for triple or quad rooms rather than two doubles',
      'Check if they have cribs/cots available',
      'Read recent reviews for family experiences',
      'Many offer airport transfers'
    ],
    familyTipsEs: [
      'Pide habitaciones triples o cuádruples en lugar de dos dobles',
      'Verifica si tienen cunas disponibles',
      'Lee reseñas recientes de experiencias familiares',
      'Muchos ofrecen traslados al aeropuerto'
    ]
  },
  {
    id: 'boutique-hotels',
    name: 'Boutique Hotels',
    nameEs: 'Hoteles Boutique',
    icon: Heart,
    priceRange: '$120-350/night',
    description: 'Unique, characterful properties often in historic buildings. Great for families seeking authentic experiences.',
    descriptionEs: 'Propiedades únicas con carácter, a menudo en edificios históricos. Geniales para familias que buscan experiencias auténticas.',
    pros: [
      'Unique character and design',
      'Often in historic colonial buildings',
      'Personalized service',
      'Local feel and cultural immersion',
      'Instagram-worthy settings'
    ],
    prosEs: [
      'Carácter y diseño únicos',
      'A menudo en edificios coloniales históricos',
      'Servicio personalizado',
      'Ambiente local e inmersión cultural',
      'Escenarios dignos de Instagram'
    ],
    cons: [
      'May not have kid-specific amenities',
      'Older buildings can have quirks',
      'Limited number of family rooms'
    ],
    consEs: [
      'Puede que no tengan amenidades específicas para niños',
      'Edificios antiguos pueden tener peculiaridades',
      'Número limitado de habitaciones familiares'
    ],
    bestFor: ['Families with older kids', 'Those seeking unique stays', 'Cultural travelers'],
    bestForEs: ['Familias con niños mayores', 'Quienes buscan estadías únicas', 'Viajeros culturales'],
    familyTips: [
      'Ask about room layouts before booking',
      'Historic buildings may have stairs - check accessibility',
      'Many have beautiful courtyards kids love',
      'Staff often go above and beyond for families'
    ],
    familyTipsEs: [
      'Pregunta sobre la distribución de las habitaciones antes de reservar',
      'Edificios históricos pueden tener escaleras - verifica accesibilidad',
      'Muchos tienen hermosos patios que los niños adoran',
      'El personal a menudo hace más de lo esperado para las familias'
    ]
  },
  {
    id: 'apart-hotels',
    name: 'Aparthotels & Rentals',
    nameEs: 'Aparthoteles y Alquileres',
    icon: Home,
    priceRange: '$50-200/night',
    description: 'Self-catering apartments with kitchens. Perfect for longer stays or families who want flexibility.',
    descriptionEs: 'Apartamentos con cocina. Perfectos para estadías largas o familias que quieren flexibilidad.',
    pros: [
      'Kitchen for preparing kid-friendly meals',
      'More space than hotel rooms',
      'Laundry facilities often included',
      'Feel like home',
      'Cost-effective for longer stays'
    ],
    prosEs: [
      'Cocina para preparar comidas para niños',
      'Más espacio que habitaciones de hotel',
      'Instalaciones de lavandería a menudo incluidas',
      'Se siente como en casa',
      'Económico para estadías largas'
    ],
    cons: [
      'No daily housekeeping',
      'May lack concierge services',
      'Quality varies significantly'
    ],
    consEs: [
      'Sin limpieza diaria',
      'Puede carecer de servicios de conserjería',
      'La calidad varía significativamente'
    ],
    bestFor: ['Longer stays (4+ nights)', 'Picky eaters', 'Budget-conscious families'],
    bestForEs: ['Estadías largas (4+ noches)', 'Comedores exigentes', 'Familias conscientes del presupuesto'],
    familyTips: [
      'Check if sheets and towels are included',
      'Verify the kitchen is fully equipped',
      'Use Airbnb or Booking.com for reviews',
      'Great for making familiar foods for kids'
    ],
    familyTipsEs: [
      'Verifica si sábanas y toallas están incluidas',
      'Verifica que la cocina esté completamente equipada',
      'Usa Airbnb o Booking.com para reseñas',
      'Genial para preparar comidas familiares para niños'
    ]
  },
  {
    id: 'hostels',
    name: 'Family Hostels',
    nameEs: 'Hostales Familiares',
    icon: Users,
    priceRange: '$30-80/night',
    description: 'Private family rooms in hostels. Budget-friendly with social atmosphere and often excellent locations.',
    descriptionEs: 'Habitaciones privadas familiares en hostales. Económicos con ambiente social y a menudo excelentes ubicaciones.',
    pros: [
      'Very affordable',
      'Private family rooms available',
      'Social atmosphere - meet other families',
      'Often have kitchens',
      'Great locations',
      'Tours and activities organized'
    ],
    prosEs: [
      'Muy económico',
      'Habitaciones privadas familiares disponibles',
      'Ambiente social - conoce otras familias',
      'A menudo tienen cocinas',
      'Excelentes ubicaciones',
      'Tours y actividades organizadas'
    ],
    cons: [
      'Shared bathrooms in some cases',
      'Can be noisy from other travelers',
      'Basic amenities'
    ],
    consEs: [
      'Baños compartidos en algunos casos',
      'Puede ser ruidoso por otros viajeros',
      'Amenidades básicas'
    ],
    bestFor: ['Adventurous families', 'Teens', 'Budget travelers'],
    bestForEs: ['Familias aventureras', 'Adolescentes', 'Viajeros con presupuesto'],
    familyTips: [
      'Book private rooms with ensuite bathroom',
      'Check reviews specifically from families',
      'Many have movie rooms and games for kids',
      'Selina and Pariwana are family-friendly chains'
    ],
    familyTipsEs: [
      'Reserva habitaciones privadas con baño privado',
      'Verifica reseñas específicamente de familias',
      'Muchos tienen salas de cine y juegos para niños',
      'Selina y Pariwana son cadenas aptas para familias'
    ]
  },
  {
    id: 'jungle-lodges',
    name: 'Jungle Lodges',
    nameEs: 'Lodges de Selva',
    icon: Tent,
    priceRange: '$150-500/night (all-inclusive)',
    description: 'Remote eco-lodges in the Amazon rainforest. Usually all-inclusive with activities, meals, and guides.',
    descriptionEs: 'Eco-lodges remotos en la selva amazónica. Usualmente todo incluido con actividades, comidas y guías.',
    pros: [
      'All-inclusive (meals, activities, guides)',
      'Unique wildlife experiences',
      'Expert naturalist guides',
      'Educational and unforgettable',
      'Often have family bungalows'
    ],
    prosEs: [
      'Todo incluido (comidas, actividades, guías)',
      'Experiencias únicas de vida silvestre',
      'Guías naturalistas expertos',
      'Educativo e inolvidable',
      'A menudo tienen bungalows familiares'
    ],
    cons: [
      'Remote locations',
      'Limited connectivity (often a plus!)',
      'Basic facilities in some lodges',
      'Bugs and humidity'
    ],
    consEs: [
      'Ubicaciones remotas',
      'Conectividad limitada (¡a menudo es una ventaja!)',
      'Instalaciones básicas en algunos lodges',
      'Insectos y humedad'
    ],
    bestFor: ['Nature-loving families', 'Kids 6+', 'Adventure seekers'],
    bestForEs: ['Familias amantes de la naturaleza', 'Niños 6+', 'Buscadores de aventura'],
    familyTips: [
      'Choose lodges with family programs',
      'Inkaterra and Refugio Amazonas are excellent for kids',
      '3-4 nights is ideal for families',
      'Book rooms with mosquito nets and fans'
    ],
    familyTipsEs: [
      'Elige lodges con programas familiares',
      'Inkaterra y Refugio Amazonas son excelentes para niños',
      '3-4 noches es ideal para familias',
      'Reserva habitaciones con mosquiteros y ventiladores'
    ]
  }
];

const bookingSites = [
  { name: 'Booking.com', description: 'Best for hotels with free cancellation', descriptionEs: 'Mejor para hoteles con cancelación gratuita' },
  { name: 'Airbnb', description: 'Great for apartments and unique stays', descriptionEs: 'Genial para apartamentos y estadías únicas' },
  { name: 'Hotels.com', description: 'Rewards program (10 nights = 1 free)', descriptionEs: 'Programa de recompensas (10 noches = 1 gratis)' },
  { name: 'Expedia', description: 'Good for bundling flights + hotels', descriptionEs: 'Bueno para combinar vuelos + hoteles' }
];

const amenitiesChecklist = [
  { item: 'Family/quad rooms available', itemEs: 'Habitaciones familiares/cuádruples disponibles', icon: Users },
  { item: 'Cribs and extra beds', itemEs: 'Cunas y camas extra', icon: Baby },
  { item: 'Free WiFi', itemEs: 'WiFi gratuito', icon: Wifi },
  { item: 'Breakfast included', itemEs: 'Desayuno incluido', icon: UtensilsCrossed },
  { item: 'Parking (if renting car)', itemEs: 'Estacionamiento (si alquilas auto)', icon: Car },
  { item: 'Central location', itemEs: 'Ubicación céntrica', icon: MapPin },
  { item: 'Good reviews from families', itemEs: 'Buenas reseñas de familias', icon: Star },
  { item: 'Safety features', itemEs: 'Características de seguridad', icon: Shield }
];

export default function AccommodationPage() {
  const { locale } = useI18n();
  const [selectedType, setSelectedType] = useState<string>('mid-range-hotels');

  const activeType = accommodationTypes.find(t => t.id === selectedType);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Home className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Guía de Alojamiento' : 'Accommodation Guide'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Todo lo que necesitas saber sobre dónde alojarte en Perú con tu familia - desde hoteles de lujo hasta hostales económicos.'
                : 'Everything you need to know about where to stay in Peru with your family - from luxury hotels to budget hostels.'}
            </p>
          </div>
        </div>
      </section>

      {/* Type Selector */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-3">
            {accommodationTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all text-sm ${
                    selectedType === type.id
                      ? 'bg-peru-terracotta text-white shadow-lg scale-105'
                      : 'bg-peru-sand/30 text-gray-700 hover:bg-peru-sand'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{locale === 'es' ? type.nameEs : type.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Type Details */}
      {activeType && (
        <section className="py-12 lg:py-16">
          <div className="container-peru">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = activeType.icon;
                    return <Icon className="h-12 w-12 text-peru-terracotta" />;
                  })()}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                      {locale === 'es' ? activeType.nameEs : activeType.name}
                    </h2>
                    <p className="text-peru-terracotta font-semibold">
                      <DollarSign className="h-4 w-4 inline" />
                      {activeType.priceRange}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'es' ? activeType.bestForEs : activeType.bestFor).map((item, idx) => (
                    <span key={idx} className="bg-peru-gold/20 text-peru-earth text-sm px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                {locale === 'es' ? activeType.descriptionEs : activeType.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Pros */}
                <div className="bg-green-50 rounded-xl p-5">
                  <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    {locale === 'es' ? 'Ventajas' : 'Pros'}
                  </h3>
                  <ul className="space-y-2">
                    {(locale === 'es' ? activeType.prosEs : activeType.pros).map((pro, idx) => (
                      <li key={idx} className="text-green-700 flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="bg-red-50 rounded-xl p-5">
                  <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    {locale === 'es' ? 'Desventajas' : 'Cons'}
                  </h3>
                  <ul className="space-y-2">
                    {(locale === 'es' ? activeType.consEs : activeType.cons).map((con, idx) => (
                      <li key={idx} className="text-red-700 flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-1">✕</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Family Tips */}
              <div className="bg-peru-sand/30 rounded-xl p-5">
                <h3 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                  <Baby className="h-5 w-5 text-peru-terracotta" />
                  {locale === 'es' ? 'Consejos para Familias' : 'Family Tips'}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {(locale === 'es' ? activeType.familyTipsEs : activeType.familyTips).map((tip, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                      <Star className="h-4 w-4 text-peru-gold mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Amenities Checklist */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Lista de Amenidades para Familias' : 'Family Amenities Checklist'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {amenitiesChecklist.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-peru-sand/30 rounded-xl p-4 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-peru-terracotta flex-shrink-0" />
                  <span className="text-gray-700 text-sm">
                    {locale === 'es' ? item.itemEs : item.item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where to Book */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Dónde Reservar' : 'Where to Book'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bookingSites.map((site, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-center">
                <h3 className="font-bold text-peru-earth mb-2">{site.name}</h3>
                <p className="text-sm text-gray-600">
                  {locale === 'es' ? site.descriptionEs : site.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-peru-sand/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-center text-gray-700">
              <strong>{locale === 'es' ? 'Consejo:' : 'Pro tip:'}</strong>{' '}
              {locale === 'es'
                ? 'Siempre verifica el sitio web directo del hotel - a veces ofrecen mejores tarifas o beneficios adicionales para reservas directas.'
                : 'Always check the hotel\'s direct website - they sometimes offer better rates or extra perks for direct bookings.'}
            </p>
          </div>
        </div>
      </section>

      {/* By Region */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos por Región' : 'Tips by Region'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-3">Lima</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• {locale === 'es' ? 'Quédate en Miraflores o Barranco para familias' : 'Stay in Miraflores or Barranco for families'}</li>
                <li>• {locale === 'es' ? 'Muchas opciones de todos los niveles de precio' : 'Many options at all price levels'}</li>
                <li>• {locale === 'es' ? 'Cerca de parques, restaurantes y atracciones' : 'Near parks, restaurants, and attractions'}</li>
              </ul>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-3">Cusco</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• {locale === 'es' ? 'Considera quedarte en Valle Sagrado primero (menor altitud)' : 'Consider staying in Sacred Valley first (lower altitude)'}</li>
                <li>• {locale === 'es' ? 'Hoteles del centro pueden ser ruidosos' : 'Center hotels can be noisy'}</li>
                <li>• {locale === 'es' ? 'Pide habitaciones con calefacción' : 'Ask for rooms with heating'}</li>
              </ul>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-3">{locale === 'es' ? 'Costa (Paracas, Máncora)' : 'Coast (Paracas, Máncora)'}</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• {locale === 'es' ? 'Resorts frente al mar son geniales para familias' : 'Beachfront resorts are great for families'}</li>
                <li>• {locale === 'es' ? 'Reserva temprano para temporada alta (verano)' : 'Book early for high season (summer)'}</li>
                <li>• {locale === 'es' ? 'Pide habitaciones con vista al mar' : 'Ask for ocean view rooms'}</li>
              </ul>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-3">{locale === 'es' ? 'Amazonía' : 'Amazon'}</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• {locale === 'es' ? 'Lodges son la mejor opción (todo incluido)' : 'Lodges are the best option (all-inclusive)'}</li>
                <li>• {locale === 'es' ? 'Reserva con 2-3 meses de anticipación' : 'Book 2-3 months in advance'}</li>
                <li>• {locale === 'es' ? 'Elige lodges con programas familiares' : 'Choose lodges with family programs'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Listo para Planificar?' : 'Ready to Plan?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Nuestros itinerarios incluyen recomendaciones de alojamiento para cada destino.'
              : 'Our itineraries include accommodation recommendations for each destination.'}
          </p>
          <a
            href="/itineraries/"
            className="inline-block bg-white text-peru-earth px-8 py-3 rounded-full font-semibold hover:bg-peru-sand transition-colors"
          >
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </a>
        </div>
      </section>
    </main>
  );
}
