'use client';

import { useState } from 'react';
import Link from 'next/link';
import { activities } from '@/data/activities';
import {
  MapPin,
  Clock,
  Star,
  Filter,
  ChevronRight,
  Baby,
  Mountain,
  Palette,
  TreeDeciduous,
  Utensils,
  GraduationCap,
  Sparkles
} from 'lucide-react';

const activityTypes = [
  { value: 'all', label: 'All Activities', icon: Sparkles },
  { value: 'adventure', label: 'Adventure', icon: Mountain },
  { value: 'cultural', label: 'Cultural', icon: Palette },
  { value: 'nature', label: 'Nature', icon: TreeDeciduous },
  { value: 'culinary', label: 'Culinary', icon: Utensils },
  { value: 'educational', label: 'Educational', icon: GraduationCap },
  { value: 'relaxation', label: 'Relaxation', icon: Sparkles },
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
    adventure: 'bg-orange-100 text-orange-700',
    cultural: 'bg-purple-100 text-purple-700',
    nature: 'bg-green-100 text-green-700',
    culinary: 'bg-red-100 text-red-700',
    educational: 'bg-blue-100 text-blue-700',
    relaxation: 'bg-teal-100 text-teal-700'
  };

  const color = colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${color}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

export default function ActivitiesPage() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [familyOnly, setFamilyOnly] = useState(false);

  const filteredActivities = activities.filter((activity) => {
    if (selectedType !== 'all' && activity.type !== selectedType) return false;
    if (selectedDifficulty !== 'all' && activity.difficulty !== selectedDifficulty) return false;
    if (familyOnly && activity.familyRating < 4) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-gold to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-4xl">
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Activities</span>
            </nav>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
              Family Activities in Peru
            </h1>
            <p className="text-xl text-white/90 mb-6">
              From Amazon adventures to cooking classes, discover the best family-friendly activities across Peru. Filter by type, difficulty, and family suitability.
            </p>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2" />
                {activities.length} Activities
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

            {/* Activity Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-peru-gold focus:border-peru-gold"
            >
              {activityTypes.map((type) => (
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
              {filteredActivities.length} activities found
            </span>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="container-peru py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/activities/${activity.slug}`}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <TypeBadge type={activity.type} />
                  <StarRating rating={activity.familyRating} />
                </div>

                <h3 className="text-xl font-display font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors mb-2">
                  {activity.name}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {activity.region.replace(' Region', '')}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {activity.duration}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${
                      activity.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                      activity.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
                    </span>
                  </span>
                  <span className="text-sm text-gray-500">
                    Ages {activity.minAge}+
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No activities match your filters.</p>
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
            Ready to Plan Your Peru Adventure?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Combine these activities into the perfect family itinerary. Browse our curated trips or create your own!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Browse Itineraries
            </Link>
            <Link
              href="/destinations"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
