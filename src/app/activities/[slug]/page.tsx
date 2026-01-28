import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getActivityBySlug, getAllActivitySlugs, activities } from '@/data/activities';
import { YouTubeVideo } from '@/components/ui/YouTubeVideo';

function getActivityImageFallback(type: string): string {
  const fallbacks: Record<string, string> = {
    adventure: '/images/icons/adventure.svg',
    cultural: '/images/icons/cultural.svg',
    nature: '/images/icons/nature.svg',
    culinary: '/images/icons/culinary.svg',
    educational: '/images/icons/educational.svg',
    relaxation: '/images/icons/relaxation.svg'
  };
  return fallbacks[type] || '/images/icons/adventure.svg';
}
import { getCityBySlug } from '@/data/cities';
import {
  MapPin,
  Mountain,
  Users,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  DollarSign,
  AlertTriangle,
  Baby,
  Heart,
  Shield,
  CheckCircle,
  Compass,
  Lightbulb,
  Building2,
  ExternalLink
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllActivitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const activity = getActivityBySlug(params.slug);
  if (!activity) return { title: 'Activity Not Found' };

  return {
    title: `${activity.name} | Family Activities in Peru`,
    description: activity.description.substring(0, 160),
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

function DifficultyBadge({ difficulty }: { difficulty: 'easy' | 'moderate' | 'challenging' }) {
  const colors = {
    easy: 'bg-green-100 text-green-700',
    moderate: 'bg-yellow-100 text-yellow-700',
    challenging: 'bg-red-100 text-red-700'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[difficulty]}`}>
      {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
    </span>
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
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

export default function ActivityPage({ params }: Props) {
  const activity = getActivityBySlug(params.slug);

  if (!activity) {
    notFound();
  }

  const city = getCityBySlug(activity.city);
  const relatedActivities = activity.relatedActivities
    .map(slug => getActivityBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => a !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-gold to-peru-terracotta text-white overflow-hidden">
        {/* Background Image */}
        {activity.image ? (
          <div className="absolute inset-0">
            <Image
              src={activity.image}
              alt={activity.name}
              fill
              className="object-cover opacity-30"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-peru-gold/80 to-peru-terracotta/80" />
          </div>
        ) : (
          <div className="absolute inset-0 opacity-20">
            <Image
              src={getActivityImageFallback(activity.type)}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="container-peru relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4 flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/activities/" className="hover:text-white">Activities</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{activity.name}</span>
            </nav>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <TypeBadge type={activity.type} />
              <DifficultyBadge difficulty={activity.difficulty} />
            </div>

            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-2">
              {activity.name}
            </h1>

            {activity.quechuaMeaning && (
              <p className="text-lg text-peru-sand mb-4 italic">
                {activity.quechuaName && <span className="font-semibold">{activity.quechuaName}</span>}
                {' — '}&ldquo;{activity.quechuaMeaning}&rdquo; <span className="text-white/60 text-sm">(Quechua)</span>
              </p>
            )}

            <p className="text-xl text-white/90 mb-6">
              {activity.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{activity.region}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-5 w-5 mr-2" />
                <span>{activity.duration}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <DollarSign className="h-5 w-5 mr-2" />
                <span>{activity.priceRange}</span>
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Baby className="h-5 w-5 mr-2" />
                <span>Family Rating:</span>
                <StarRating rating={activity.familyRating} />
              </div>
            </div>
            {activity.imageCredit && (
              <p className="mt-4 text-xs text-white/60">Photo: {activity.imageCredit}</p>
            )}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Minimum Age
              </h3>
              <p className="text-sm text-gray-600">{activity.minAge}+ years</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Best Time
              </h3>
              <p className="text-sm text-gray-600">{activity.bestTime}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Duration
              </h3>
              <p className="text-sm text-gray-600">{activity.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                Price Range
              </h3>
              <p className="text-sm text-gray-600">{activity.priceRange}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-peru py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* What to Expect */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Compass className="h-6 w-6 mr-2 text-peru-terracotta" />
                What to Expect
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">{activity.whatToExpect}</p>
              </div>
            </section>

            {/* Video Section */}
            {activity.youtubeVideoId && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                  <svg className="h-6 w-6 mr-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Watch Video
                </h2>
                <YouTubeVideo
                  videoId={activity.youtubeVideoId}
                  title={activity.youtubeVideoTitle || activity.name}
                />
              </section>
            )}

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                Activity Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start bg-white rounded-xl p-4 shadow-md">
                    <Star className="h-5 w-5 text-peru-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-green-500" />
                What&apos;s Included
              </h2>
              <div className="bg-green-50 rounded-2xl p-6">
                <ul className="grid md:grid-cols-2 gap-3">
                  {activity.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Tips for Families */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Lightbulb className="h-6 w-6 mr-2 text-peru-terracotta" />
                Tips for Families
              </h2>
              <div className="bg-purple-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {activity.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Safety Notes */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-peru-terracotta" />
                Safety Information
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <ul className="space-y-3">
                  {activity.safetyNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-amber-800">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Providers */}
            {activity.providers.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                  <Building2 className="h-6 w-6 mr-2 text-peru-terracotta" />
                  Recommended Providers
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {activity.providers.map((provider, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-peru-earth">{provider.name}</h3>
                        {provider.familyFriendly && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                            Family-Friendly
                          </span>
                        )}
                      </div>
                      {provider.website && (
                        <a
                          href={provider.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-peru-terracotta hover:underline flex items-center mt-2"
                        >
                          Visit Website <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Activities */}
            {relatedActivities.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                  You Might Also Enjoy
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedActivities.map((relatedActivity) => (
                    <Link
                      key={relatedActivity.slug}
                      href={`/activities/${relatedActivity.slug}`}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors">
                            {relatedActivity.name}
                          </h3>
                          <p className="text-sm text-gray-500 capitalize">{relatedActivity.type}</p>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={relatedActivity.familyRating} />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedActivity.description}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedActivity.duration}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{relatedActivity.difficulty}</span>
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
                <Compass className="h-5 w-5 mr-2 text-peru-gold" />
                At a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium capitalize">{activity.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <span className="font-medium capitalize">{activity.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{activity.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min Age</span>
                  <span className="font-medium">{activity.minAge}+ years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">{activity.priceRange}</span>
                </div>
              </div>
            </div>

            {/* Best Time to Go */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-peru-gold" />
                Best Time to Go
              </h3>
              <p className="text-gray-600 text-sm">
                {activity.bestTime}
              </p>
            </div>

            {/* Family Rating */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Baby className="h-5 w-5 mr-2 text-peru-gold" />
                Family Rating
              </h3>
              <div className="flex items-center gap-2">
                <StarRating rating={activity.familyRating} />
                <span className="text-gray-600 text-sm">({activity.familyRating}/5)</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Recommended for ages {activity.minAge}+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Ready for Your {activity.name} Adventure?
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our family-friendly itineraries that include this activity and discover the best way to experience Peru with kids.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries/"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              View Itineraries
            </Link>
            <Link
              href="/activities/"
              className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
            >
              Browse All Activities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
