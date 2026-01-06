import { destinations } from '@/data/destinations';
import DestinationContent from './DestinationContent';

export default function DestinationPage({ params }: { params: { slug: string } }) {
  return <DestinationContent slug={params.slug} />;
}

export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}
