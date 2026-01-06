'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  Calendar,
  MapPin,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  Thermometer
} from 'lucide-react';

interface MonthData {
  month: string;
  monthEs: string;
  weather: 'dry' | 'wet' | 'transition';
  highland: { temp: string; rain: string; crowd: 'low' | 'medium' | 'high' };
  coast: { temp: string; rain: string; crowd: 'low' | 'medium' | 'high' };
  amazon: { temp: string; rain: string; crowd: 'low' | 'medium' | 'high' };
  events: string[];
  eventsEs: string[];
  familyRating: 1 | 2 | 3 | 4 | 5;
  notes: string;
  notesEs: string;
}

const monthsData: MonthData[] = [
  {
    month: 'January',
    monthEs: 'Enero',
    weather: 'wet',
    highland: { temp: '5-18°C', rain: 'Heavy', crowd: 'low' },
    coast: { temp: '19-26°C', rain: 'None', crowd: 'high' },
    amazon: { temp: '21-30°C', rain: 'Heavy', crowd: 'low' },
    events: ['New Year celebrations', 'Summer holidays in Peru'],
    eventsEs: ['Celebraciones de Año Nuevo', 'Vacaciones de verano en Perú'],
    familyRating: 2,
    notes: 'Rainy season in highlands. Coast is at its best. Consider Lima and coastal destinations.',
    notesEs: 'Temporada de lluvias en la sierra. La costa está en su mejor momento. Considera Lima y destinos costeros.'
  },
  {
    month: 'February',
    monthEs: 'Febrero',
    weather: 'wet',
    highland: { temp: '5-18°C', rain: 'Heaviest', crowd: 'low' },
    coast: { temp: '20-27°C', rain: 'None', crowd: 'high' },
    amazon: { temp: '21-30°C', rain: 'Heavy', crowd: 'low' },
    events: ['Carnival', 'Virgen de la Candelaria (Puno)'],
    eventsEs: ['Carnaval', 'Virgen de la Candelaria (Puno)'],
    familyRating: 2,
    notes: 'Inca Trail closed all month. Machu Picchu accessible but muddy. Great beach month.',
    notesEs: 'Camino Inca cerrado todo el mes. Machu Picchu accesible pero con barro. Excelente mes de playa.'
  },
  {
    month: 'March',
    monthEs: 'Marzo',
    weather: 'wet',
    highland: { temp: '5-19°C', rain: 'Heavy', crowd: 'low' },
    coast: { temp: '19-26°C', rain: 'None', crowd: 'medium' },
    amazon: { temp: '21-30°C', rain: 'Heavy', crowd: 'low' },
    events: ['Holy Week (late March/April)', 'Grape harvest festivals'],
    eventsEs: ['Semana Santa (finales marzo/abril)', 'Festivales de vendimia'],
    familyRating: 3,
    notes: 'End of rainy season approaching. Shoulder season pricing. Fewer tourists.',
    notesEs: 'Se acerca el fin de la temporada de lluvias. Precios de temporada media. Menos turistas.'
  },
  {
    month: 'April',
    monthEs: 'Abril',
    weather: 'transition',
    highland: { temp: '4-19°C', rain: 'Moderate', crowd: 'medium' },
    coast: { temp: '18-24°C', rain: 'None', crowd: 'medium' },
    amazon: { temp: '21-30°C', rain: 'Moderate', crowd: 'medium' },
    events: ['Holy Week/Easter', 'Lord of Earthquakes (Cusco)'],
    eventsEs: ['Semana Santa/Pascua', 'Señor de los Temblores (Cusco)'],
    familyRating: 4,
    notes: 'Excellent transition month. Rains decreasing, landscapes lush green. Good value.',
    notesEs: 'Excelente mes de transición. Lluvias disminuyendo, paisajes verdes. Buen valor.'
  },
  {
    month: 'May',
    monthEs: 'Mayo',
    weather: 'dry',
    highland: { temp: '2-19°C', rain: 'Light', crowd: 'medium' },
    coast: { temp: '16-22°C', rain: 'Light', crowd: 'low' },
    amazon: { temp: '20-30°C', rain: 'Light', crowd: 'medium' },
    events: ['Labor Day', 'Qoyllur Rit\'i Festival'],
    eventsEs: ['Día del Trabajo', 'Festival Qoyllur Rit\'i'],
    familyRating: 5,
    notes: 'Start of dry season! Perfect weather, fewer crowds than June-August. Highly recommended.',
    notesEs: '¡Inicio de temporada seca! Clima perfecto, menos multitudes que junio-agosto. Muy recomendado.'
  },
  {
    month: 'June',
    monthEs: 'Junio',
    weather: 'dry',
    highland: { temp: '0-19°C', rain: 'None', crowd: 'high' },
    coast: { temp: '15-19°C', rain: 'Mist', crowd: 'low' },
    amazon: { temp: '20-31°C', rain: 'Light', crowd: 'high' },
    events: ['Inti Raymi (June 24)', 'Corpus Christi', 'San Juan (Amazon)'],
    eventsEs: ['Inti Raymi (24 junio)', 'Corpus Christi', 'San Juan (Amazonía)'],
    familyRating: 5,
    notes: 'Peak season begins. Clear skies in highlands. Book everything well in advance.',
    notesEs: 'Comienza temporada alta. Cielos despejados en la sierra. Reserva todo con anticipación.'
  },
  {
    month: 'July',
    monthEs: 'Julio',
    weather: 'dry',
    highland: { temp: '-2-19°C', rain: 'None', crowd: 'high' },
    coast: { temp: '14-18°C', rain: 'Mist', crowd: 'medium' },
    amazon: { temp: '19-31°C', rain: 'None', crowd: 'high' },
    events: ['Peruvian Independence (July 28)', 'Virgin del Carmen', 'School holidays'],
    eventsEs: ['Independencia del Perú (28 julio)', 'Virgen del Carmen', 'Vacaciones escolares'],
    familyRating: 5,
    notes: 'Peak season. Best weather but most crowded and expensive. Cold nights in highlands.',
    notesEs: 'Temporada alta. Mejor clima pero más lleno y caro. Noches frías en la sierra.'
  },
  {
    month: 'August',
    monthEs: 'Agosto',
    weather: 'dry',
    highland: { temp: '0-20°C', rain: 'None', crowd: 'high' },
    coast: { temp: '14-18°C', rain: 'Mist', crowd: 'medium' },
    amazon: { temp: '19-32°C', rain: 'None', crowd: 'high' },
    events: ['Santa Rosa de Lima (Aug 30)', 'Pachamama Day'],
    eventsEs: ['Santa Rosa de Lima (30 ago)', 'Día de la Pachamama'],
    familyRating: 5,
    notes: 'Still peak season. Excellent for highlands and Amazon. Windy on coast.',
    notesEs: 'Todavía temporada alta. Excelente para sierra y Amazonía. Ventoso en la costa.'
  },
  {
    month: 'September',
    monthEs: 'Septiembre',
    weather: 'dry',
    highland: { temp: '2-20°C', rain: 'Light', crowd: 'medium' },
    coast: { temp: '14-19°C', rain: 'Light', crowd: 'low' },
    amazon: { temp: '20-33°C', rain: 'Light', crowd: 'medium' },
    events: ['Mistura Food Festival (Lima)', 'Spring equinox'],
    eventsEs: ['Festival Gastronómico Mistura (Lima)', 'Equinoccio de primavera'],
    familyRating: 5,
    notes: 'Excellent month! Crowds thin out, weather still great. Best value of dry season.',
    notesEs: '¡Excelente mes! Las multitudes disminuyen, el clima sigue siendo genial. Mejor valor de temporada seca.'
  },
  {
    month: 'October',
    monthEs: 'Octubre',
    weather: 'transition',
    highland: { temp: '4-20°C', rain: 'Light', crowd: 'medium' },
    coast: { temp: '15-20°C', rain: 'None', crowd: 'low' },
    amazon: { temp: '21-33°C', rain: 'Moderate', crowd: 'medium' },
    events: ['Lord of Miracles (Lima)', 'Día de la Canción Criolla'],
    eventsEs: ['Señor de los Milagros (Lima)', 'Día de la Canción Criolla'],
    familyRating: 4,
    notes: 'Transition month. Light rains possible but usually brief. Good balance of weather and crowds.',
    notesEs: 'Mes de transición. Lluvias ligeras posibles pero usualmente breves. Buen balance de clima y multitudes.'
  },
  {
    month: 'November',
    monthEs: 'Noviembre',
    weather: 'transition',
    highland: { temp: '4-20°C', rain: 'Moderate', crowd: 'low' },
    coast: { temp: '16-22°C', rain: 'None', crowd: 'low' },
    amazon: { temp: '21-32°C', rain: 'Moderate', crowd: 'low' },
    events: ['All Saints\' Day', 'Puno Week', 'Day of the Dead'],
    eventsEs: ['Día de Todos los Santos', 'Semana de Puno', 'Día de los Muertos'],
    familyRating: 3,
    notes: 'Rainy season begins. Afternoon showers common but mornings usually clear.',
    notesEs: 'Comienza temporada de lluvias. Lluvias por la tarde comunes pero mañanas usualmente despejadas.'
  },
  {
    month: 'December',
    monthEs: 'Diciembre',
    weather: 'wet',
    highland: { temp: '5-18°C', rain: 'Heavy', crowd: 'medium' },
    coast: { temp: '18-25°C', rain: 'None', crowd: 'high' },
    amazon: { temp: '21-31°C', rain: 'Heavy', crowd: 'low' },
    events: ['Christmas', 'Santuranticuy market (Cusco)', 'New Year\'s Eve'],
    eventsEs: ['Navidad', 'Mercado Santuranticuy (Cusco)', 'Año Nuevo'],
    familyRating: 3,
    notes: 'Rainy in highlands but festive atmosphere. Great for cultural experiences.',
    notesEs: 'Lluvioso en la sierra pero ambiente festivo. Excelente para experiencias culturales.'
  }
];

const seasonRecommendations = [
  {
    season: 'Dry Season (May-October)',
    seasonEs: 'Temporada Seca (Mayo-Octubre)',
    bestFor: ['Machu Picchu & Inca Trail', 'Trekking & hiking', 'Amazon wildlife', 'Photography'],
    bestForEs: ['Machu Picchu y Camino Inca', 'Trekking y senderismo', 'Fauna amazónica', 'Fotografía'],
    considerations: ['More crowded', 'Higher prices', 'Cold nights in highlands', 'Book in advance'],
    considerationsEs: ['Más lleno', 'Precios más altos', 'Noches frías en la sierra', 'Reservar con anticipación'],
    icon: Sun
  },
  {
    season: 'Wet Season (November-April)',
    seasonEs: 'Temporada de Lluvias (Noviembre-Abril)',
    bestFor: ['Coastal beaches', 'Fewer crowds', 'Lush landscapes', 'Better prices'],
    bestForEs: ['Playas costeras', 'Menos multitudes', 'Paisajes verdes', 'Mejores precios'],
    considerations: ['Daily rain in highlands', 'Muddy trails', 'Some activities limited', 'Inca Trail closed in Feb'],
    considerationsEs: ['Lluvia diaria en la sierra', 'Senderos con barro', 'Algunas actividades limitadas', 'Camino Inca cerrado en feb'],
    icon: CloudRain
  },
  {
    season: 'Shoulder Seasons (Apr-May, Sep-Oct)',
    seasonEs: 'Temporadas Medias (Abr-May, Sep-Oct)',
    bestFor: ['Best value', 'Good weather', 'Fewer tourists', 'Balanced experience'],
    bestForEs: ['Mejor valor', 'Buen clima', 'Menos turistas', 'Experiencia equilibrada'],
    considerations: ['Possible brief showers', 'Some uncertainty', 'Still need advance booking for popular sites'],
    considerationsEs: ['Posibles lluvias breves', 'Algo de incertidumbre', 'Aún necesita reserva anticipada para sitios populares'],
    icon: Cloud
  }
];

const weatherIcons = {
  dry: Sun,
  wet: CloudRain,
  transition: Cloud
};

const crowdColors = {
  low: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700'
};

export default function WhenToVisitPage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-gold to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Cuándo Visitar Perú?' : 'When to Visit Peru'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Guía completa mes a mes para planificar el viaje familiar perfecto'
              : 'Complete month-by-month guide to planning your perfect family trip'}
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="container-peru py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-12 relative z-10">
          <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 text-center">
            {locale === 'es' ? 'Resumen Rápido' : 'Quick Summary'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seasonRecommendations.map((rec, index) => {
              const SeasonIcon = rec.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-peru-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SeasonIcon className="w-8 h-8 text-peru-gold" />
                  </div>
                  <h3 className="font-display font-bold text-peru-earth mb-3">
                    {locale === 'es' ? rec.seasonEs : rec.season}
                  </h3>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-peru-terracotta mb-1">
                      {locale === 'es' ? 'Mejor para:' : 'Best for:'}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(locale === 'es' ? rec.bestForEs : rec.bestFor).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Month by Month */}
      <section className="container-peru py-8">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Guía Mes a Mes' : 'Month by Month Guide'}
        </h2>

        <div className="space-y-6">
          {monthsData.map((month, index) => {
            const WeatherIcon = weatherIcons[month.weather];
            return (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  {/* Month Header */}
                  <div className="md:w-48 bg-gradient-to-br from-peru-earth to-peru-terracotta p-6 text-white flex flex-col justify-center items-center">
                    <WeatherIcon className="w-10 h-10 mb-2" />
                    <h3 className="text-2xl font-display font-bold">
                      {locale === 'es' ? month.monthEs : month.month}
                    </h3>
                    <div className="flex mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= month.familyRating
                              ? 'text-peru-gold fill-peru-gold'
                              : 'text-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-white/80 mt-1">
                      {locale === 'es' ? 'Para familias' : 'Family rating'}
                    </p>
                  </div>

                  {/* Month Details */}
                  <div className="flex-1 p-6">
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {/* Highland */}
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-amber-600" />
                          <span className="font-medium text-amber-800">
                            {locale === 'es' ? 'Sierra' : 'Highlands'}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="flex items-center gap-1">
                            <Thermometer className="w-3 h-3" /> {month.highland.temp}
                          </p>
                          <p className="flex items-center gap-1">
                            <CloudRain className="w-3 h-3" /> {month.highland.rain}
                          </p>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs ${crowdColors[month.highland.crowd]}`}>
                            {month.highland.crowd === 'high' ? (locale === 'es' ? 'Lleno' : 'Crowded') :
                             month.highland.crowd === 'medium' ? (locale === 'es' ? 'Moderado' : 'Moderate') :
                             (locale === 'es' ? 'Tranquilo' : 'Quiet')}
                          </span>
                        </div>
                      </div>

                      {/* Coast */}
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-800">
                            {locale === 'es' ? 'Costa' : 'Coast'}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="flex items-center gap-1">
                            <Thermometer className="w-3 h-3" /> {month.coast.temp}
                          </p>
                          <p className="flex items-center gap-1">
                            <CloudRain className="w-3 h-3" /> {month.coast.rain}
                          </p>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs ${crowdColors[month.coast.crowd]}`}>
                            {month.coast.crowd === 'high' ? (locale === 'es' ? 'Lleno' : 'Crowded') :
                             month.coast.crowd === 'medium' ? (locale === 'es' ? 'Moderado' : 'Moderate') :
                             (locale === 'es' ? 'Tranquilo' : 'Quiet')}
                          </span>
                        </div>
                      </div>

                      {/* Amazon */}
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-green-600" />
                          <span className="font-medium text-green-800">
                            {locale === 'es' ? 'Amazonía' : 'Amazon'}
                          </span>
                        </div>
                        <div className="text-sm space-y-1">
                          <p className="flex items-center gap-1">
                            <Thermometer className="w-3 h-3" /> {month.amazon.temp}
                          </p>
                          <p className="flex items-center gap-1">
                            <CloudRain className="w-3 h-3" /> {month.amazon.rain}
                          </p>
                          <span className={`inline-block px-2 py-0.5 rounded text-xs ${crowdColors[month.amazon.crowd]}`}>
                            {month.amazon.crowd === 'high' ? (locale === 'es' ? 'Lleno' : 'Crowded') :
                             month.amazon.crowd === 'medium' ? (locale === 'es' ? 'Moderado' : 'Moderate') :
                             (locale === 'es' ? 'Tranquilo' : 'Quiet')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Notes & Events */}
                    <div className="border-t pt-4">
                      <p className="text-gray-700 mb-3">
                        {locale === 'es' ? month.notesEs : month.notes}
                      </p>
                      {month.events.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-sm text-gray-500">
                            {locale === 'es' ? 'Eventos:' : 'Events:'}
                          </span>
                          {(locale === 'es' ? month.eventsEs : month.events).map((event, i) => (
                            <span key={i} className="text-sm bg-peru-sand px-2 py-1 rounded text-peru-earth">
                              {event}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Family Tips */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-8">
            {locale === 'es' ? 'Consejos para Familias' : 'Tips for Families'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-peru-gold" />
                <h3 className="font-display font-bold text-white">
                  {locale === 'es' ? 'Mejor Época para Familias' : 'Best Time for Families'}
                </h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-peru-gold flex-shrink-0 mt-1" />
                  {locale === 'es'
                    ? 'Mayo y Septiembre: Mejor equilibrio entre clima, multitudes y precios'
                    : 'May and September: Best balance of weather, crowds, and prices'}
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-peru-gold flex-shrink-0 mt-1" />
                  {locale === 'es'
                    ? 'Junio-Agosto: Garantiza buen clima pero reserva con anticipación'
                    : 'June-August: Guarantees good weather but book far ahead'}
                </li>
                <li className="flex items-start gap-2">
                  <Star className="w-4 h-4 text-peru-gold flex-shrink-0 mt-1" />
                  {locale === 'es'
                    ? 'Vacaciones escolares de EE.UU./Europa = temporada alta en Perú'
                    : 'US/European school holidays = peak season in Peru'}
                </li>
              </ul>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-peru-gold" />
                <h3 className="font-display font-bold text-white">
                  {locale === 'es' ? 'Consideraciones Especiales' : 'Special Considerations'}
                </h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start gap-2">
                  <span className="text-peru-gold">•</span>
                  {locale === 'es'
                    ? 'El Camino Inca cierra todo febrero por mantenimiento'
                    : 'Inca Trail closes entire February for maintenance'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peru-gold">•</span>
                  {locale === 'es'
                    ? 'Las fiestas peruanas (julio, diciembre) significan multitudes locales'
                    : 'Peruvian holidays (July, December) mean local crowds'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-peru-gold">•</span>
                  {locale === 'es'
                    ? 'El Amazonas es excelente todo el año, pero la temporada seca es mejor para fauna'
                    : 'Amazon is great year-round, but dry season best for wildlife'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-peru py-12 text-center">
        <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? '¿Listo para elegir tu fecha?' : 'Ready to pick your dates?'}
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {locale === 'es'
            ? 'Explora nuestros itinerarios diseñados para cada época del año.'
            : 'Explore our itineraries designed for every time of year.'}
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
