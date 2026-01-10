import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { cities, getCityBySlug, getAllCitySlugs } from '@/data/cities';
import { getSitesByCity } from '@/data/sites';
import {
  MapPin,
  Mountain,
  Users,
  Calendar,
  Clock,
  Star,
  Thermometer,
  Plane,
  Utensils,
  Building2,
  Baby,
  ChevronRight,
  Heart
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  if (!city) return { title: 'City Not Found' };

  return {
    title: `${city.name} Family Travel Guide | Peru with Kids`,
    description: city.description.substring(0, 160),
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.slug);

  if (!city) {
    notFound();
  }

  const nearbySites = getSitesByCity(params.slug);
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/destinations" className="hover:text-white">Destinations</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{city.name}</span>
            </nav>

            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-peru-gold font-semibold">{city.region}</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              {city.name} Family Travel Guide
            </h1>

            <p className="text-xl text-white/90 mb-6">
              {city.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Mountain className="h-5 w-5 mr-2" />
                <span>{city.altitude}m altitude</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Users className="h-5 w-5 mr-2" />
                <span>Pop: {city.population}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>Min {city.minDays} days</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Baby className="h-5 w-5 mr-2" />
                <span>Family Rating:</span>
                <StarRating rating={city.familyRating} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-peru-earth mb-1">Best Months</h3>
              <div className="flex flex-wrap gap-1">
                {city.bestMonths.map((month) => (
                  <span key={month} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {monthNames[month - 1]}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1">Climate</h3>
              <p className="text-sm text-gray-600">{city.climate}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1">Getting There</h3>
              <p className="text-sm text-gray-600">{city.gettingThere}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1">Minimum Stay</h3>
              <p className="text-sm text-gray-600">{city.minDays} days recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-peru py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                Top Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {city.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start bg-white rounded-xl p-4 shadow-md">
                    <Star className="h-5 w-5 text-peru-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Family Tips */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Baby className="h-6 w-6 mr-2 text-peru-terracotta" />
                Family Tips for {city.name}
              </h2>
              <div className="bg-purple-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {city.familyTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Nearby Sites */}
            {nearbySites.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                  Things to See & Do
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {nearbySites.map((site) => (
                    <Link
                      key={site.slug}
                      href={`/sites/${site.slug}`}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors">
                            {site.name}
                          </h3>
                          <p className="text-sm text-gray-500 capitalize">{site.type}</p>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={site.familyRating} />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {site.description}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {site.duration}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{site.difficulty}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Where to Stay */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-peru-terracotta" />
                Where to Stay
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {city.hotels.map((hotel, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-peru-earth">{hotel.name}</h3>
                      <span className="text-peru-gold font-bold">{hotel.priceRange}</span>
                    </div>
                    <p className="text-sm text-gray-500">{hotel.type}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Where to Eat */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Utensils className="h-6 w-6 mr-2 text-peru-terracotta" />
                Family-Friendly Restaurants
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {city.restaurants.map((restaurant, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-peru-earth">{restaurant.name}</h3>
                      {restaurant.kidFriendly && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          Kid-Friendly
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{restaurant.type}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related Cities */}
            {city.relatedCities.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth mb-4">Nearby Destinations</h3>
                <div className="space-y-3">
                  {city.relatedCities.map((slug) => {
                    const relatedCity = getCityBySlug(slug);
                    if (!relatedCity) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/cities/${slug}`}
                        className="flex items-center p-3 bg-peru-sand/30 rounded-lg hover:bg-peru-sand transition-colors"
                      >
                        <MapPin className="h-4 w-4 text-peru-terracotta mr-2" />
                        <span className="text-gray-700">{relatedCity.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Climate Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Thermometer className="h-5 w-5 mr-2 text-peru-gold" />
                Climate & Weather
              </h3>
              <p className="text-gray-600 text-sm">
                {city.climate}
              </p>
            </div>

            {/* Getting There */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Plane className="h-5 w-5 mr-2 text-peru-gold" />
                Getting There
              </h3>
              <p className="text-gray-600 text-sm">
                {city.gettingThere}
              </p>
            </div>

            {/* Altitude Warning */}
            {city.altitude > 2500 && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Altitude Advisory
                </h3>
                <p className="text-amber-700 text-sm">
                  {city.name} is at {city.altitude}m elevation. Take time to acclimatize,
                  drink plenty of water, and consider coca tea. Watch children closely
                  for altitude sickness symptoms.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Itineraries CTA */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Plan Your {city.name} Adventure
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our family-friendly itineraries that include {city.name} and other amazing destinations in Peru.
          </p>
          <Link
            href="/itineraries"
            className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
          >
            View All Itineraries
          </Link>
        </div>
      </section>
    </div>
  );
}
