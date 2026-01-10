'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cities } from '@/data/cities';
import {
  MapPin,
  Clock,
  Star,
  Filter,
  ChevronRight,
  Baby,
  Mountain,
  Users,
  Thermometer
} from 'lucide-react';

const regions = [
  { value: 'all', label: 'All Regions' },
  { value: 'Cusco Region', label: 'Cusco Region' },
  { value: 'Arequipa Region', label: 'Arequipa Region' },
  { value: 'Puno Region', label: 'Puno Region' },
  { value: 'Ica Region', label: 'Ica Region' },
  { value: 'Lima Region', label: 'Lima Region' },
  { value: 'Loreto Region', label: 'Amazon (Loreto)' },
  { value: 'La Libertad Region', label: 'La Libertad' },
  { value: 'Lambayeque Region', label: 'Lambayeque' },
  { value: 'Piura Region', label: 'Piura' },
];

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

export default function CitiesPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [familyOnly, setFamilyOnly] = useState(false);

  const filteredCities = cities.filter((city) => {
    if (selectedRegion !== 'all' && city.region !== selectedRegion) return false;
    if (familyOnly && city.familyRating < 4) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Cities</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Cities in Peru
            </h1>
            <p className="text-xl text-white/90 mb-6">
              From the colonial charm of Cusco to the vibrant capital Lima, explore Peru&apos;s most family-friendly cities. Each offers unique experiences, culture, and adventure.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {cities.length} Cities
              </span>
              <span className="flex items-center">
                <Baby className="h-5 w-5 mr-2" />
                Family-Focused
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white py-6 shadow-sm sticky top-16 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
            </div>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-peru-gold focus:border-peru-gold"
            >
              {regions.map((region) => (
                <option key={region.value} value={region.value}>
                  {region.label}
                </option>
              ))}
            </select>

            {/* Family Friendly Toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={familyOnly}
                onChange={(e) => setFamilyOnly(e.target.checked)}
                className="w-4 h-4 text-peru-gold rounded focus:ring-peru-gold"
              />
              <span className="text-sm text-gray-700">Top Family-Rated Only</span>
            </label>

            <span className="text-sm text-gray-500 ml-auto">
              {filteredCities.length} cities found
            </span>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="container-peru py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-br from-peru-gold to-peru-terracotta relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-white/30" />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm">
                    {city.region.replace(' Region', '')}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-display font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors">
                    {city.name}
                  </h3>
                  <StarRating rating={city.familyRating} />
                </div>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {city.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                  <span className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                    <Mountain className="h-3 w-3 mr-1" />
                    {city.altitude}m
                  </span>
                  <span className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                    <Clock className="h-3 w-3 mr-1" />
                    Min {city.minDays} days
                  </span>
                  <span className="flex items-center bg-gray-100 rounded-full px-2 py-1">
                    <Thermometer className="h-3 w-3 mr-1" />
                    {city.climate.substring(0, 20)}...
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {city.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-peru-sand/50 text-peru-earth px-2 py-1 rounded"
                    >
                      {highlight.length > 25 ? highlight.substring(0, 25) + '...' : highlight}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No cities match your filters.</p>
            <button
              onClick={() => {
                setSelectedRegion('all');
                setFamilyOnly(false);
              }}
              className="mt-4 text-peru-terracotta hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Plan Your Peru Adventure
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Combine these amazing cities into the perfect family itinerary. Browse our curated trips or explore more!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Browse Itineraries
            </Link>
            <Link
              href="/sites"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Explore Sites
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
