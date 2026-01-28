import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getSiteBySlug, getAllSiteSlugs, getSitesByCity, sites } from '@/data/sites';
import { getCityBySlug } from '@/data/cities';
import { YouTubeVideo } from '@/components/ui/YouTubeVideo';

// Get fallback SVG path based on site type
function getSiteImageFallback(type: string): string {
  const fallbacks: Record<string, string> = {
    archaeological: '/images/icons/archaeological.svg',
    natural: '/images/icons/natural.svg',
    cultural: '/images/icons/cultural.svg',
    museum: '/images/icons/museum.svg'
  };
  return fallbacks[type] || '/images/icons/archaeological.svg';
}
import {
  MapPin,
  Mountain,
  Users,
  Calendar,
  Clock,
  Star,
  ChevronRight,
  History,
  Lightbulb,
  DollarSign,
  Compass,
  CheckCircle,
  AlertTriangle,
  Baby,
  Heart,
  Plane,
  Building2
} from 'lucide-react';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSiteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const site = getSiteBySlug(params.slug);
  if (!site) return { title: 'Site Not Found' };

  return {
    title: `${site.name} Family Guide | Peru with Kids`,
    description: site.description.substring(0, 160),
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
    archaeological: 'bg-amber-100 text-amber-700',
    natural: 'bg-green-100 text-green-700',
    cultural: 'bg-purple-100 text-purple-700',
    museum: 'bg-blue-100 text-blue-700'
  };

  const color = colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${color}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

export default function SitePage({ params }: Props) {
  const site = getSiteBySlug(params.slug);

  if (!site) {
    notFound();
  }

  const city = getCityBySlug(site.city);
  const relatedSites = site.relatedSites
    .map(slug => getSiteBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section with Image */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-terracotta to-peru-earth text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={site.image || getSiteImageFallback(site.type)}
            alt={site.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-peru-terracotta/90 to-peru-earth/80" />
        </div>

        <div className="container-peru relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              {/* Breadcrumb */}
              <nav className="flex items-center space-x-2 text-white/70 text-sm mb-4 flex-wrap">
                <Link href="/" className="hover:text-white">Home</Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/sites/" className="hover:text-white">Sites</Link>
                <ChevronRight className="h-4 w-4" />
                {city && (
                  <>
                    <Link href={`/cities/${city.slug}/`} className="hover:text-white">{city.name}</Link>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
                <span className="text-white">{site.name}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <TypeBadge type={site.type} />
                <DifficultyBadge difficulty={site.difficulty} />
              </div>

              <h1 className="text-4xl lg:text-5xl font-display font-bold mb-2">
                {site.name}
              </h1>

              {site.quechuaMeaning && (
                <p className="text-lg text-peru-gold mb-4 italic">
                  {site.quechuaName && <span className="font-semibold">{site.quechuaName}</span>}
                  {' — '}&ldquo;{site.quechuaMeaning}&rdquo; <span className="text-white/60 text-sm">(Quechua)</span>
                </p>
              )}

              <p className="text-xl text-white/90 mb-6">
                {site.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{site.region}</span>
                </div>
                {site.altitude !== undefined && site.altitude > 0 && (
                  <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                    <Mountain className="h-5 w-5 mr-2" />
                    <span>{site.altitude}m altitude</span>
                  </div>
                )}
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{site.duration}</span>
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Baby className="h-5 w-5 mr-2" />
                  <span>Family Rating:</span>
                  <StarRating rating={site.familyRating} />
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={site.image || getSiteImageFallback(site.type)}
                  alt={site.name}
                  fill
                  className="object-cover"
                  priority
                />
                {site.imageCredit && (
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                    📷 {site.imageCredit}
                  </div>
                )}
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
                <DollarSign className="h-4 w-4 mr-1" />
                Entrance Fee
              </h3>
              <p className="text-sm text-gray-600">{site.entranceFee}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Best Time
              </h3>
              <p className="text-sm text-gray-600">{site.bestTime}</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Users className="h-4 w-4 mr-1" />
                Minimum Age
              </h3>
              <p className="text-sm text-gray-600">{site.minAge}+ years recommended</p>
            </div>
            <div>
              <h3 className="font-semibold text-peru-earth mb-1 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Duration
              </h3>
              <p className="text-sm text-gray-600">{site.duration}</p>
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
                <History className="h-6 w-6 mr-2 text-peru-terracotta" />
                History & Background
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">{site.history}</p>
              </div>
            </section>

            {/* Video Section */}
            {site.youtubeVideoId && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                  <svg className="h-6 w-6 mr-2 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                  Watch Video
                </h2>
                <YouTubeVideo
                  videoId={site.youtubeVideoId}
                  title={site.youtubeVideoTitle || site.name}
                />
              </section>
            )}

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                Top Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {site.highlights.map((highlight, idx) => (
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
                <Lightbulb className="h-6 w-6 mr-2 text-peru-terracotta" />
                Tips for Families
              </h2>
              <div className="bg-purple-50 rounded-2xl p-6">
                <ul className="space-y-3">
                  {site.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start">
                      <Heart className="h-5 w-5 text-purple-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Getting There */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Plane className="h-6 w-6 mr-2 text-peru-terracotta" />
                Getting There
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <p className="text-gray-700 leading-relaxed">{site.gettingThere}</p>
              </div>
            </section>

            {/* Facilities */}
            <section>
              <h2 className="text-2xl font-display font-bold text-peru-earth mb-6 flex items-center">
                <Building2 className="h-6 w-6 mr-2 text-peru-terracotta" />
                Facilities
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <ul className="space-y-3">
                  {site.facilities.map((facility, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Related Sites */}
            {relatedSites.length > 0 && (
              <section>
                <h2 className="text-2xl font-display font-bold text-peru-earth mb-6">
                  Related Sites You Might Like
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedSites.map((relatedSite) => (
                    <Link
                      key={relatedSite.slug}
                      href={`/sites/${relatedSite.slug}`}
                      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-peru-earth group-hover:text-peru-terracotta transition-colors">
                            {relatedSite.name}
                          </h3>
                          <p className="text-sm text-gray-500 capitalize">{relatedSite.type}</p>
                        </div>
                        <div className="flex items-center">
                          <StarRating rating={relatedSite.familyRating} />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedSite.description}
                      </p>
                      <div className="flex items-center mt-3 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedSite.duration}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{relatedSite.difficulty}</span>
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
                <h3 className="font-bold text-peru-earth mb-4">Base City</h3>
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
                  <span className="font-medium capitalize">{site.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Difficulty</span>
                  <span className="font-medium capitalize">{site.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{site.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Min Age</span>
                  <span className="font-medium">{site.minAge}+ years</span>
                </div>
                {site.altitude !== undefined && site.altitude > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Altitude</span>
                    <span className="font-medium">{site.altitude}m</span>
                  </div>
                )}
              </div>
            </div>

            {/* Altitude Warning */}
            {site.altitude !== undefined && site.altitude > 2500 && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Altitude Advisory
                </h3>
                <p className="text-amber-700 text-sm">
                  {site.name} is at {site.altitude}m elevation. Take time to acclimatize,
                  drink plenty of water, and consider coca tea. Watch children closely
                  for altitude sickness symptoms.
                </p>
              </div>
            )}

            {/* Entrance Fee */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-peru-gold" />
                Entrance Fee
              </h3>
              <p className="text-gray-600 text-sm">
                {site.entranceFee}
              </p>
            </div>

            {/* Best Time to Visit */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-peru-gold" />
                Best Time to Visit
              </h3>
              <p className="text-gray-600 text-sm">
                {site.bestTime}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-12 bg-peru-earth text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold mb-4">
            Plan Your Visit to {site.name}
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Explore our family-friendly itineraries that include {site.name} and discover the best way to experience this amazing destination with kids.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-block bg-peru-gold text-peru-earth font-bold px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              View Itineraries
            </Link>
            {city && (
              <Link
                href={`/cities/${city.slug}`}
                className="inline-block bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-colors"
              >
                Explore {city.name}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
