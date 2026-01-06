import { getAllDurations, itineraries } from '@/data/itineraries';
import ItineraryContent from './ItineraryContent';

export default function ItineraryPage({ params }: { params: { slug: string } }) {
  return <ItineraryContent slug={params.slug} />;
}

export function generateStaticParams() {
  // Generate params for both duration pages (e.g., "7-day") and itinerary detail pages
  const durations = getAllDurations();
  const durationParams = durations.map((days) => ({
    slug: `${days}-day`,
  }));

  const itineraryParams = itineraries.map((itinerary) => ({
    slug: itinerary.slug,
  }));

  return [...durationParams, ...itineraryParams];
}
