import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getFestivalBySlug, getAllFestivalSlugs, festivals } from '@/data/festivals';
import { getCityBySlug } from '@/data/cities';
import {
  MapPin,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  Users,
  Baby,
  Heart,
  Utensils,
  Shirt,
  Info,
  Sparkles,
  PartyPopper
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllFestivalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const festival = getFestivalBySlug(params.slug);
  if (!festival) return { title: 'Festival Not Found' };

  return {
    title: `${festival.name} | Peru Family Festivals`,
    description: festival.description.substring(0, 160),
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

function CrowdBadge({ level }: { level: 'low' | 'moderate' | 'high' | 'very high' }) {
  const colors = {
    low: 'bg-green-100 text-green-700',
    moderate: 'bg-yellow-100 text-yellow-700',
    high: 'bg-orange-100 text-orange-700',
    'very high': 'bg-red-100 text-red-700'
  };

  const labels = {
    low: 'Low Crowds',
    moderate: 'Moderate Crowds',
    high: 'High Crowds',
    'very high': 'Very High Crowds'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[level]}`}>
      {labels[level]}
    </span>
  );
}

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

export default function FestivalPage({ params }: Props) {
  const festival = getFestivalBySlug(params.slug);

  if (!festival) {
    notFound();
  }

  const city = getCityBySlug(festival.city);
  const relatedFestivals = festival.relatedFestivals
    .map(slug => getFestivalBySlug(slug))
    .filter((f): f is NonNullable<typeof f> => f !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4 flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/festivals" className="hover:text-white">Festivals</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{festival.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {monthNames[festival.month - 1]}
              </span>
              <CrowdBadge level={festival.crowdLevel} />
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-2">
              {festival.name}
            </h1>

            {festival.quechuaMeaning && (
              <p className="text-lg text-yellow-200 mb-4 italic">
                {festival.quechuaName && <span className="font-semibold">{festival.quechuaName}</span>}
                {' — '}&ldquo;{festival.quechuaMeaning}&rdquo; <span className="text-white/60 text-sm">(Quechua)</span>
              </p>
            )}

            <p className="text-xl text-white/90 mb-6">
              {festival.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{festival.date}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{festival.region}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>{festival.duration}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Baby className="h-5 w-5 mr-2" />
                <span>Family Rating:</span>
                <StarRating rating={festival.familyRating} />
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
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                When
              </h3>
              <p className="text-sm text-gray-600">{festival.date}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Duration
              </h3>
              <p className="text-sm text-gray-600">{festival.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Location
              </h3>
              <p className="text-sm text-gray-600">{city?.name || festival.region}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Crowds
              </h3>
              <p className="text-sm text-gray-600 capitalize">{festival.crowdLevel}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-peru py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* History */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Info className="h-6 w-6 mr-2 text-peru-terracotta" />
                History & Background
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">{festival.history}</p>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Sparkles className="h-6 w-6 mr-2 text-peru-terracotta" />
                Festival Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {festival.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start bg-white rounded-xl p-4 shadow-md">
                    <Star className="h-5 w-5 text-peru-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <PartyPopper className="h-6 w-6 mr-2 text-peru-terracotta" />
                Things to Do
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <ul className="space-y-3">
                  {festival.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-peru-gold/20 text-peru-earth rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-gray-700">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Family Tips */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Baby className="h-6 w-6 mr-2 text-peru-terracotta" />
                Tips for Families
              </h2>
              <div className="bg-purple-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {festival.familyTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Food to Try */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Utensils className="h-6 w-6 mr-2 text-peru-terracotta" />
                Festival Foods to Try
              </h2>
              <div className="bg-orange-50 rounded-2xl p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {festival.foodToTry.map((food, idx) => (
                    <li key={idx} className="flex items-start">
                      <Utensils className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Practical Info */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Info className="h-6 w-6 mr-2 text-peru-terracotta" />
                Practical Information
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">{festival.practicalInfo}</p>
              </div>
            </section>

            {/* Related Festivals */}
            {relatedFestivals.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                  You Might Also Enjoy
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedFestivals.map((relatedFestival) => (
                    <Link
                      key={relatedFestival.slug}
                      href={`/festivals/${relatedFestival.slug}`}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors">
                            {relatedFestival.name}
                          </h3>
                          <p className="text-sm text-gray-500">{relatedFestival.date}</p>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={relatedFestival.familyRating} />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedFestival.description}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <MapPin className="h-3 w-3 mr-1" />
                        {relatedFestival.region}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* City Link */}
            {city && (
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-peru-earth mb-4">Location</h3>
                <Link
                  href={`/cities/${city.slug}`}
                  className="flex items-center p-3 bg-peru-sand/30 rounded-lg hover:bg-peru-sand transition-colors"
                >
                  <MapPin className="h-5 w-5 text-peru-terracotta mr-3" />
                  <div>
                    <span className="text-gray-700 font-medium">{city.name}</span>
                    <p className="text-xs text-gray-500">{city.region}</p>
                  </div>
                </Link>
              </div>
            )}

            {/* At a Glance */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-peru-gold" />
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">When</span>
                  <span className="font-medium">{festival.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{festival.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Crowds</span>
                  <span className="font-medium capitalize">{festival.crowdLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Family Rating</span>
                  <span className="font-medium">{festival.familyRating}/5</span>
                </div>
              </div>
            </div>

            {/* What to Wear */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Shirt className="h-5 w-5 mr-2 text-peru-gold" />
                What to Wear
              </h3>
              <p className="text-gray-600 text-sm">
                {festival.whatToWear}
              </p>
            </div>

            {/* Family Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Baby className="h-5 w-5 mr-2 text-peru-gold" />
                Family Rating
              </h3>
              <div className="flex items-center gap-2">
                <StarRating rating={festival.familyRating} />
                <span className="text-gray-600 text-sm">({festival.familyRating}/5)</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {festival.familyRating >= 4
                  ? 'Highly recommended for families with children'
                  : festival.familyRating >= 3
                  ? 'Good for families with older children'
                  : 'May be challenging for young children'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Plan Your {festival.name} Trip
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our itineraries that can include this festival and discover the best way to experience Peru with your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              View Itineraries
            </Link>
            <Link
              href="/festivals"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Browse All Festivals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
