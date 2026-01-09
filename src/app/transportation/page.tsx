'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  Plane,
  Train,
  Bus,
  Car,
  Ship,
  Baby,
  Clock,
  DollarSign,
  Star,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Users,
  Luggage,
  Info
} from 'lucide-react';

interface TransportOption {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  familyRating: number;
  description: string;
  descriptionEs: string;
  pros: string[];
  prosEs: string[];
  cons: string[];
  consEs: string[];
  costLevel: 1 | 2 | 3;
  kidTips: string[];
  kidTipsEs: string[];
  routes: {
    name: string;
    nameEs: string;
    duration: string;
    cost: string;
    familyNote: string;
    familyNoteEs: string;
  }[];
}

const transportOptions: TransportOption[] = [
  {
    id: 'domestic-flights',
    name: 'Domestic Flights',
    nameEs: 'Vuelos Domésticos',
    icon: Plane,
    familyRating: 5,
    description: 'The fastest way to cover long distances in Peru. Major airlines like LATAM and Sky Peru operate frequent routes between Lima and major cities.',
    descriptionEs: 'La forma más rápida de cubrir largas distancias en Perú. Aerolíneas como LATAM y Sky Perú operan rutas frecuentes entre Lima y las principales ciudades.',
    pros: [
      'Save significant travel time',
      'Comfortable for children',
      'Avoid altitude sickness from gradual ascent',
      'Regular schedules to major destinations',
      'Child discounts available (under 2 fly free on lap)'
    ],
    prosEs: [
      'Ahorra tiempo significativo de viaje',
      'Cómodo para niños',
      'Evita el mal de altura del ascenso gradual',
      'Horarios regulares a destinos principales',
      'Descuentos para niños (menores de 2 años vuelan gratis en brazos)'
    ],
    cons: [
      'More expensive than buses',
      'Strict baggage limits',
      'Flight delays are common',
      'Limited routes to smaller destinations'
    ],
    consEs: [
      'Más caro que los buses',
      'Límites estrictos de equipaje',
      'Los retrasos de vuelos son comunes',
      'Rutas limitadas a destinos pequeños'
    ],
    costLevel: 3,
    kidTips: [
      'Book early morning flights to avoid afternoon weather delays',
      'Request bassinet seats for infants on longer flights',
      'Bring snacks - in-flight food options are limited',
      'Arrive 2 hours early for domestic flights',
      'Consider aisle seats for easy bathroom access'
    ],
    kidTipsEs: [
      'Reserva vuelos temprano en la mañana para evitar retrasos por clima',
      'Solicita asientos con cuna para bebés en vuelos largos',
      'Lleva snacks - las opciones de comida en vuelo son limitadas',
      'Llega 2 horas antes para vuelos domésticos',
      'Considera asientos de pasillo para fácil acceso al baño'
    ],
    routes: [
      {
        name: 'Lima - Cusco',
        nameEs: 'Lima - Cusco',
        duration: '1h 20min',
        cost: '$60-150',
        familyNote: 'Most popular route. Multiple daily flights.',
        familyNoteEs: 'Ruta más popular. Múltiples vuelos diarios.'
      },
      {
        name: 'Lima - Arequipa',
        nameEs: 'Lima - Arequipa',
        duration: '1h 30min',
        cost: '$50-120',
        familyNote: 'Good alternative entry to southern Peru.',
        familyNoteEs: 'Buena alternativa de entrada al sur de Perú.'
      },
      {
        name: 'Lima - Iquitos',
        nameEs: 'Lima - Iquitos',
        duration: '1h 50min',
        cost: '$70-180',
        familyNote: 'Only way to reach Iquitos (no roads).',
        familyNoteEs: 'Única forma de llegar a Iquitos (sin carreteras).'
      },
      {
        name: 'Lima - Puerto Maldonado',
        nameEs: 'Lima - Puerto Maldonado',
        duration: '1h 40min',
        cost: '$80-200',
        familyNote: 'Gateway to Amazon lodges.',
        familyNoteEs: 'Puerta de entrada a lodges del Amazonas.'
      },
      {
        name: 'Cusco - Puerto Maldonado',
        nameEs: 'Cusco - Puerto Maldonado',
        duration: '45min',
        cost: '$50-100',
        familyNote: 'Quick hop from highlands to jungle.',
        familyNoteEs: 'Salto rápido de las montañas a la selva.'
      }
    ]
  },
  {
    id: 'tourist-trains',
    name: 'Tourist Trains',
    nameEs: 'Trenes Turísticos',
    icon: Train,
    familyRating: 5,
    description: 'Peru offers some of the most scenic train journeys in South America. PeruRail and Inca Rail operate routes to Machu Picchu and other destinations.',
    descriptionEs: 'Perú ofrece algunos de los viajes en tren más escénicos de Sudamérica. PeruRail e Inca Rail operan rutas a Machu Picchu y otros destinos.',
    pros: [
      'Spectacular scenery',
      'Comfortable seating with tables',
      'Bathroom facilities on board',
      'Snack service included',
      'Kids love train travel!'
    ],
    prosEs: [
      'Paisaje espectacular',
      'Asientos cómodos con mesas',
      'Baños a bordo',
      'Servicio de snacks incluido',
      '¡A los niños les encanta viajar en tren!'
    ],
    cons: [
      'Expensive for families',
      'Limited departure times',
      'Must book well in advance',
      'Machu Picchu route only runs to Aguas Calientes'
    ],
    consEs: [
      'Caro para familias',
      'Horarios de salida limitados',
      'Debe reservarse con anticipación',
      'La ruta de Machu Picchu solo llega a Aguas Calientes'
    ],
    costLevel: 3,
    kidTips: [
      'Book window seats for best views',
      'Expedition class is more affordable and still comfortable',
      'Vistadome has panoramic windows kids love',
      'Bring activities for the 3-4 hour journey',
      'Train staff often interact playfully with children'
    ],
    kidTipsEs: [
      'Reserva asientos de ventana para mejores vistas',
      'La clase Expedition es más económica y aún cómoda',
      'Vistadome tiene ventanas panorámicas que encantan a los niños',
      'Lleva actividades para el viaje de 3-4 horas',
      'El personal del tren a menudo interactúa con los niños'
    ],
    routes: [
      {
        name: 'Ollantaytambo - Aguas Calientes',
        nameEs: 'Ollantaytambo - Aguas Calientes',
        duration: '1h 45min',
        cost: '$60-400+',
        familyNote: 'Main route to Machu Picchu. Book 2+ months ahead.',
        familyNoteEs: 'Ruta principal a Machu Picchu. Reserva 2+ meses antes.'
      },
      {
        name: 'Poroy (Cusco) - Aguas Calientes',
        nameEs: 'Poroy (Cusco) - Aguas Calientes',
        duration: '3h 30min',
        cost: '$75-450+',
        familyNote: 'Scenic route from near Cusco. Only runs in dry season.',
        familyNoteEs: 'Ruta escénica desde cerca de Cusco. Solo en temporada seca.'
      },
      {
        name: 'Puno - Cusco (Titicaca Train)',
        nameEs: 'Puno - Cusco (Tren Titicaca)',
        duration: '10h',
        cost: '$250-400',
        familyNote: 'Luxury scenic journey across altiplano. Great for older kids.',
        familyNoteEs: 'Viaje escénico de lujo por el altiplano. Ideal para niños mayores.'
      }
    ]
  },
  {
    id: 'tourist-buses',
    name: 'Tourist Buses',
    nameEs: 'Buses Turísticos',
    icon: Bus,
    familyRating: 4,
    description: 'Comfortable long-distance buses operated by companies like Cruz del Sur, Oltursa, and Peru Hop. Many offer cama (bed) seats.',
    descriptionEs: 'Buses cómodos de larga distancia operados por empresas como Cruz del Sur, Oltursa y Peru Hop. Muchos ofrecen asientos cama.',
    pros: [
      'Very affordable',
      'Extensive route network',
      'Night buses save hotel costs',
      'Cama seats recline almost flat',
      'On-board entertainment and meals'
    ],
    prosEs: [
      'Muy económico',
      'Amplia red de rutas',
      'Buses nocturnos ahorran costos de hotel',
      'Asientos cama se reclinan casi horizontal',
      'Entretenimiento y comidas a bordo'
    ],
    cons: [
      'Long journey times',
      'Night buses can disrupt sleep schedules',
      'Some roads are winding',
      'Not ideal for children prone to motion sickness'
    ],
    consEs: [
      'Tiempos de viaje largos',
      'Buses nocturnos pueden alterar horarios de sueño',
      'Algunas carreteras son sinuosas',
      'No ideal para niños propensos al mareo'
    ],
    costLevel: 1,
    kidTips: [
      'Choose cama or semi-cama seats for comfort',
      'Bring motion sickness medicine just in case',
      'Daytime buses let kids enjoy scenery',
      'Cruz del Sur and Oltursa are the most reliable',
      'Peru Hop allows hop-on/hop-off flexibility'
    ],
    kidTipsEs: [
      'Elige asientos cama o semi-cama para comodidad',
      'Lleva medicina para el mareo por si acaso',
      'Buses diurnos permiten a los niños disfrutar el paisaje',
      'Cruz del Sur y Oltursa son los más confiables',
      'Peru Hop permite flexibilidad de subir/bajar'
    ],
    routes: [
      {
        name: 'Lima - Cusco',
        nameEs: 'Lima - Cusco',
        duration: '20-22h',
        cost: '$30-80',
        familyNote: 'Very long. Consider flying instead with kids.',
        familyNoteEs: 'Muy largo. Considera volar en su lugar con niños.'
      },
      {
        name: 'Cusco - Puno',
        nameEs: 'Cusco - Puno',
        duration: '6-7h',
        cost: '$15-40',
        familyNote: 'Scenic route. Tourist buses stop at viewpoints.',
        familyNoteEs: 'Ruta escénica. Buses turísticos paran en miradores.'
      },
      {
        name: 'Arequipa - Puno',
        nameEs: 'Arequipa - Puno',
        duration: '5-6h',
        cost: '$15-35',
        familyNote: 'Beautiful high altitude landscape.',
        familyNoteEs: 'Hermoso paisaje de gran altitud.'
      },
      {
        name: 'Lima - Paracas',
        nameEs: 'Lima - Paracas',
        duration: '3.5-4h',
        cost: '$15-30',
        familyNote: 'Easy day trip distance. Manageable with kids.',
        familyNoteEs: 'Distancia fácil para excursión de un día. Manejable con niños.'
      },
      {
        name: 'Cusco - Ollantaytambo',
        nameEs: 'Cusco - Ollantaytambo',
        duration: '1.5-2h',
        cost: '$5-15',
        familyNote: 'Short scenic ride through Sacred Valley.',
        familyNoteEs: 'Viaje corto escénico por el Valle Sagrado.'
      }
    ]
  },
  {
    id: 'private-transfers',
    name: 'Private Transfers & Taxis',
    nameEs: 'Traslados Privados y Taxis',
    icon: Car,
    familyRating: 5,
    description: 'Hire private drivers for flexibility and comfort. Book through hotels, tour agencies, or apps like Uber and Cabify in major cities.',
    descriptionEs: 'Contrata conductores privados para flexibilidad y comodidad. Reserva a través de hoteles, agencias de tours, o apps como Uber y Cabify en ciudades principales.',
    pros: [
      'Door-to-door convenience',
      'Flexibility to stop when needed',
      'Can accommodate car seats',
      'No schedules to follow',
      'Driver can provide local insights'
    ],
    prosEs: [
      'Conveniencia puerta a puerta',
      'Flexibilidad para parar cuando sea necesario',
      'Puede acomodar sillas de carro',
      'Sin horarios que seguir',
      'El conductor puede dar información local'
    ],
    cons: [
      'More expensive per trip',
      'Quality varies by driver',
      'Need to arrange in advance for longer routes',
      'Car seats not always available'
    ],
    consEs: [
      'Más caro por viaje',
      'La calidad varía según el conductor',
      'Necesita arreglar con anticipación para rutas largas',
      'Sillas de carro no siempre disponibles'
    ],
    costLevel: 2,
    kidTips: [
      'Bring your own car seat from home',
      'Use Uber/Cabify for transparent pricing in cities',
      'Book hotel transfers for airport pickups',
      'For Sacred Valley tours, hire driver for full day',
      'Agree on price before starting longer trips'
    ],
    kidTipsEs: [
      'Trae tu propia silla de carro desde casa',
      'Usa Uber/Cabify para precios transparentes en ciudades',
      'Reserva traslados del hotel para recogida en aeropuerto',
      'Para tours del Valle Sagrado, contrata conductor por día completo',
      'Acuerda el precio antes de empezar viajes largos'
    ],
    routes: [
      {
        name: 'Cusco Airport - City Center',
        nameEs: 'Aeropuerto Cusco - Centro',
        duration: '20-30min',
        cost: '$5-15',
        familyNote: 'Book through hotel for hassle-free arrival.',
        familyNoteEs: 'Reserva a través del hotel para llegada sin problemas.'
      },
      {
        name: 'Lima Airport - Miraflores',
        nameEs: 'Aeropuerto Lima - Miraflores',
        duration: '45-90min',
        cost: '$20-40',
        familyNote: 'Traffic dependent. Allow extra time.',
        familyNoteEs: 'Depende del tráfico. Deja tiempo extra.'
      },
      {
        name: 'Cusco - Sacred Valley Day Tour',
        nameEs: 'Cusco - Valle Sagrado Tour de Día',
        duration: '8-10h',
        cost: '$60-120',
        familyNote: 'Great for families - set your own pace.',
        familyNoteEs: 'Ideal para familias - establece tu propio ritmo.'
      }
    ]
  },
  {
    id: 'boats',
    name: 'Boats & River Transport',
    nameEs: 'Botes y Transporte Fluvial',
    icon: Ship,
    familyRating: 4,
    description: 'Essential for Lake Titicaca islands and Amazon jungle lodges. Options range from shared boats to private speedboats.',
    descriptionEs: 'Esencial para las islas del Lago Titicaca y lodges de la selva amazónica. Opciones van desde botes compartidos hasta lanchas privadas.',
    pros: [
      'Only way to reach many destinations',
      'Kids love boat rides',
      'Scenic and memorable experiences',
      'Life jackets provided'
    ],
    prosEs: [
      'Única forma de llegar a muchos destinos',
      'A los niños les encantan los paseos en bote',
      'Experiencias escénicas y memorables',
      'Chalecos salvavidas proporcionados'
    ],
    cons: [
      'Weather dependent',
      'Can be cold on Lake Titicaca',
      'Basic facilities on shared boats',
      'Motion sickness possible'
    ],
    consEs: [
      'Depende del clima',
      'Puede ser frío en el Lago Titicaca',
      'Instalaciones básicas en botes compartidos',
      'Posible mareo'
    ],
    costLevel: 2,
    kidTips: [
      'Bring warm layers for Lake Titicaca boats',
      'Apply sunscreen - reflection off water is strong',
      'Motion sickness medicine for sensitive kids',
      'Life jackets are provided but bring your own for toddlers',
      'Amazon river boats are typically covered and comfortable'
    ],
    kidTipsEs: [
      'Trae capas abrigadas para botes del Lago Titicaca',
      'Aplica protector solar - el reflejo del agua es fuerte',
      'Medicina para el mareo para niños sensibles',
      'Se proporcionan chalecos pero trae el tuyo para bebés',
      'Los botes del río Amazonas típicamente son cubiertos y cómodos'
    ],
    routes: [
      {
        name: 'Puno - Uros Islands',
        nameEs: 'Puno - Islas Uros',
        duration: '30min',
        cost: '$15-30',
        familyNote: 'Short and easy. Kids love the floating islands.',
        familyNoteEs: 'Corto y fácil. A los niños les encantan las islas flotantes.'
      },
      {
        name: 'Puno - Taquile Island',
        nameEs: 'Puno - Isla Taquile',
        duration: '2.5h each way',
        cost: '$25-50',
        familyNote: 'Full day trip. Involves hiking on island.',
        familyNoteEs: 'Viaje de día completo. Incluye caminata en la isla.'
      },
      {
        name: 'Puerto Maldonado - Jungle Lodge',
        nameEs: 'Puerto Maldonado - Lodge de Selva',
        duration: '45min-3h',
        cost: 'Included in lodge',
        familyNote: 'Exciting start to jungle adventure!',
        familyNoteEs: '¡Emocionante inicio de aventura en la selva!'
      }
    ]
  }
];

const cityTransport = [
  {
    city: 'Lima',
    cityEs: 'Lima',
    options: [
      { method: 'Uber/Cabify', note: 'Best option - safe, reliable, metered', noteEs: 'Mejor opción - seguro, confiable, con taxímetro' },
      { method: 'Metropolitano (BRT)', note: 'Fast but crowded. Not ideal with strollers.', noteEs: 'Rápido pero lleno. No ideal con cochecitos.' },
      { method: 'Taxi', note: 'Use only official taxis. Agree on price first.', noteEs: 'Usa solo taxis oficiales. Acuerda precio primero.' },
      { method: 'Walking', note: 'Great in Miraflores and Barranco. Use caution elsewhere.', noteEs: 'Genial en Miraflores y Barranco. Precaución en otros lugares.' }
    ]
  },
  {
    city: 'Cusco',
    cityEs: 'Cusco',
    options: [
      { method: 'Walking', note: 'Historic center is best explored on foot.', noteEs: 'El centro histórico se explora mejor a pie.' },
      { method: 'Taxi', note: 'Cheap and plentiful. $2-5 within city.', noteEs: 'Barato y abundante. $2-5 dentro de la ciudad.' },
      { method: 'Collectivos', note: 'Shared vans to nearby towns. Budget-friendly.', noteEs: 'Vans compartidas a pueblos cercanos. Económico.' },
      { method: 'Uber', note: 'Available but limited coverage.', noteEs: 'Disponible pero cobertura limitada.' }
    ]
  },
  {
    city: 'Arequipa',
    cityEs: 'Arequipa',
    options: [
      { method: 'Walking', note: 'Plaza de Armas area is very walkable.', noteEs: 'Área de Plaza de Armas muy caminable.' },
      { method: 'Taxi', note: 'Affordable. Use meters or agree price.', noteEs: 'Económico. Usa taxímetro o acuerda precio.' },
      { method: 'Uber', note: 'Works well in the city.', noteEs: 'Funciona bien en la ciudad.' }
    ]
  }
];

export default function TransportationPage() {
  const { locale } = useI18n();
  const [selectedTransport, setSelectedTransport] = useState<string>('domestic-flights');

  const activeTransport = transportOptions.find(t => t.id === selectedTransport);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es' ? 'Guía de Transporte para Familias' : 'Family Transportation Guide'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Todo lo que necesitas saber sobre cómo moverse por Perú con niños - desde vuelos y trenes hasta buses y botes.'
                : 'Everything you need to know about getting around Peru with kids - from flights and trains to buses and boats.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <div className="text-center p-4">
              <Plane className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">1-2h</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Vuelo Lima-Cusco' : 'Lima-Cusco Flight'}
              </p>
            </div>
            <div className="text-center p-4">
              <Train className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">4</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Rutas de Tren Escénico' : 'Scenic Train Routes'}
              </p>
            </div>
            <div className="text-center p-4">
              <Bus className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">$15-30</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Bus Típico (4-6h)' : 'Typical Bus (4-6h)'}
              </p>
            </div>
            <div className="text-center p-4">
              <Car className="h-8 w-8 text-peru-terracotta mx-auto mb-2" />
              <p className="text-2xl font-bold text-peru-earth">Uber</p>
              <p className="text-sm text-gray-600">
                {locale === 'es' ? 'Disponible en Ciudades' : 'Available in Cities'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Transport Options */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Opciones de Transporte' : 'Transportation Options'}
          </h2>

          {/* Transport Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {transportOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setSelectedTransport(option.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                    selectedTransport === option.id
                      ? 'bg-peru-terracotta text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-peru-sand border border-gray-200'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">
                    {locale === 'es' ? option.nameEs : option.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Transport Details */}
          {activeTransport && (
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-peru-earth to-peru-terracotta p-6 text-white">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = activeTransport.icon;
                    return <Icon className="h-12 w-12" />;
                  })()}
                  <div>
                    <h3 className="text-2xl font-bold">
                      {locale === 'es' ? activeTransport.nameEs : activeTransport.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1">
                        <Baby className="h-4 w-4" />
                        <span className="text-sm">
                          {locale === 'es' ? 'Apto para familias:' : 'Family-friendly:'}{' '}
                          {'★'.repeat(activeTransport.familyRating)}
                          {'☆'.repeat(5 - activeTransport.familyRating)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span className="text-sm">
                          {'$'.repeat(activeTransport.costLevel)}
                          <span className="text-white/50">{'$'.repeat(3 - activeTransport.costLevel)}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <p className="text-gray-700 text-lg mb-6">
                  {locale === 'es' ? activeTransport.descriptionEs : activeTransport.description}
                </p>

                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-xl p-5">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      {locale === 'es' ? 'Ventajas' : 'Pros'}
                    </h4>
                    <ul className="space-y-2">
                      {(locale === 'es' ? activeTransport.prosEs : activeTransport.pros).map((pro, idx) => (
                        <li key={idx} className="text-green-700 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-xl p-5">
                    <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      {locale === 'es' ? 'Desventajas' : 'Cons'}
                    </h4>
                    <ul className="space-y-2">
                      {(locale === 'es' ? activeTransport.consEs : activeTransport.cons).map((con, idx) => (
                        <li key={idx} className="text-red-700 flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Kid Tips */}
                <div className="bg-peru-sand/30 rounded-xl p-5 mb-8">
                  <h4 className="font-bold text-peru-earth mb-3 flex items-center gap-2">
                    <Baby className="h-5 w-5" />
                    {locale === 'es' ? 'Consejos para Niños' : 'Tips for Traveling with Kids'}
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {(locale === 'es' ? activeTransport.kidTipsEs : activeTransport.kidTips).map((tip, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2">
                        <Star className="h-4 w-4 text-peru-gold mt-1 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Routes */}
                <div>
                  <h4 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {locale === 'es' ? 'Rutas Populares' : 'Popular Routes'}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-peru-sand">
                          <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                            {locale === 'es' ? 'Ruta' : 'Route'}
                          </th>
                          <th className="text-center py-3 px-2 text-sm font-semibold text-gray-600">
                            <Clock className="h-4 w-4 inline mr-1" />
                            {locale === 'es' ? 'Duración' : 'Duration'}
                          </th>
                          <th className="text-center py-3 px-2 text-sm font-semibold text-gray-600">
                            <DollarSign className="h-4 w-4 inline mr-1" />
                            {locale === 'es' ? 'Costo' : 'Cost'}
                          </th>
                          <th className="text-left py-3 px-2 text-sm font-semibold text-gray-600">
                            <Users className="h-4 w-4 inline mr-1" />
                            {locale === 'es' ? 'Nota Familiar' : 'Family Note'}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeTransport.routes.map((route, idx) => (
                          <tr key={idx} className="border-b border-gray-100 hover:bg-peru-sand/10">
                            <td className="py-3 px-2 font-medium text-peru-earth">
                              {locale === 'es' ? route.nameEs : route.name}
                            </td>
                            <td className="py-3 px-2 text-center text-gray-600">
                              {route.duration}
                            </td>
                            <td className="py-3 px-2 text-center text-gray-600">
                              {route.cost}
                            </td>
                            <td className="py-3 px-2 text-gray-600 text-sm">
                              {locale === 'es' ? route.familyNoteEs : route.familyNote}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* City Transport Guide */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Transporte Dentro de las Ciudades' : 'Getting Around Within Cities'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cityTransport.map((city) => (
              <div key={city.city} className="bg-peru-sand/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-peru-earth mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-peru-terracotta" />
                  {locale === 'es' ? city.cityEs : city.city}
                </h3>
                <ul className="space-y-3">
                  {city.options.map((option, idx) => (
                    <li key={idx}>
                      <span className="font-semibold text-peru-earth">{option.method}</span>
                      <p className="text-sm text-gray-600">
                        {locale === 'es' ? option.noteEs : option.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos Generales de Transporte' : 'General Transportation Tips'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Luggage className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Sillas de Carro' : 'Car Seats'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Trae la tuya - rara vez disponibles en Perú. Las sillas inflables de viaje son una gran opción.'
                  : 'Bring your own - rarely available in Peru. Inflatable travel car seats are a great option.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <Clock className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Tiempo Extra' : 'Allow Extra Time'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los retrasos son comunes. Añade 30% de tiempo buffer para conexiones importantes.'
                  : 'Delays are common. Add 30% buffer time for important connections.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <Info className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Reserva Anticipada' : 'Book Ahead'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Trenes y vuelos en temporada alta se agotan. Reserva 2-3 meses antes.'
                  : 'Trains and peak season flights sell out. Book 2-3 months ahead.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <Users className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Viaja Ligero' : 'Travel Light'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Menos equipaje = menos estrés con niños. Considera enviar equipaje pesado por delante.'
                  : 'Less luggage = less stress with kids. Consider sending heavy luggage ahead.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Planner Suggestion */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Necesitas Ayuda Planificando tu Ruta?' : 'Need Help Planning Your Route?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Consulta nuestros itinerarios pre-planificados con todas las conexiones de transporte ya organizadas para familias.'
              : 'Check out our pre-planned itineraries with all transport connections already organized for families.'}
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
