'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sites } from '@/data/sites';
import {
  MapPin,
  Clock,
  Star,
  Filter,
  ChevronRight,
  Baby,
  Mountain,
  Landmark,
  TreeDeciduous,
  Building2,
  Palette
} from 'lucide-react';

const siteTypes = [
  { value: 'all', label: 'All Sites', icon: Landmark },
  { value: 'archaeological', label: 'Archaeological', icon: Landmark },
  { value: 'natural', label: 'Natural', icon: TreeDeciduous },
  { value: 'cultural', label: 'Cultural', icon: Palette },
  { value: 'museum', label: 'Museum', icon: Building2 },
];

const difficultyLevels = [
  { value: 'all', label: 'All Levels' },
  { value: 'easy', label: 'Easy' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'challenging', label: 'Challenging' },
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

function TypeBadge({ type }: { type: string }) {
  const colors = {
    archaeological: 'bg-amber-100 text-amber-700',
    natural: 'bg-green-100 text-green-700',
    cultural: 'bg-purple-100 text-purple-700',
    museum: 'bg-blue-100 text-blue-700'
  };

  const color = colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

export default function SitesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [familyOnly, setFamilyOnly] = useState(false);

  const filteredSites = sites.filter((site) => {
    if (selectedType !== 'all' && site.type !== selectedType) return false;
    if (selectedDifficulty !== 'all' && site.difficulty !== selectedDifficulty) return false;
    if (familyOnly && site.familyRating < 4) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-terracotta to-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Sites & Attractions</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Sites & Attractions in Peru
            </h1>
            <p className="text-xl text-white/90 mb-6">
              From ancient Inca ruins to stunning natural wonders, explore Peru&apos;s most incredible sites. Filter by type, difficulty, and family-friendliness.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center">
                <Landmark className="h-5 w-5 mr-2" />
                {sites.length} Sites
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

            {/* Site Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-peru-gold focus:border-peru-gold"
            >
              {siteTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-peru-gold focus:border-peru-gold"
            >
              {difficultyLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
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
              {filteredSites.length} sites found
            </span>
          </div>
        </div>
      </section>

      {/* Sites Grid */}
      <section className="container-peru py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <Link
              key={site.slug}
              href={`/sites/${site.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <TypeBadge type={site.type} />
                  <StarRating rating={site.familyRating} />
                </div>

                <h3 className="text-xl font-display font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors mb-2">
                  {site.name}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {site.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {site.region.replace(' Region', '')}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {site.duration}
                  </span>
                  {site.altitude && site.altitude > 0 && (
                    <span className="flex items-center">
                      <Mountain className="h-4 w-4 mr-1" />
                      {site.altitude}m
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      site.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      site.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {site.difficulty.charAt(0).toUpperCase() + site.difficulty.slice(1)}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">
                    Ages {site.minAge}+
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No sites match your filters.</p>
            <button
              onClick={() => {
                setSelectedType('all');
                setSelectedDifficulty('all');
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
            Combine these amazing sites into the perfect family itinerary. Browse our curated trips or explore more activities!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Browse Itineraries
            </Link>
            <Link
              href="/activities"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Family Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
