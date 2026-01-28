'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
}

export function YouTubeVideo({ videoId, title, className = '' }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // YouTube thumbnail URLs - try maxresdefault first, fallback to hqdefault
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        unoptimized
        onError={(e) => {
          // Fallback to hqdefault if maxresdefault doesn't exist
          const target = e.target as HTMLImageElement;
          if (target.src !== fallbackThumbnailUrl) {
            target.src = fallbackThumbnailUrl;
          }
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
        </div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-white text-sm md:text-base font-medium line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
}

// Compact version for sidebar or smaller areas
export function YouTubeVideoCompact({ videoId, title, className = '' }: YouTubeVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  if (isPlaying) {
    return (
      <div className={`relative w-full aspect-video rounded-lg overflow-hidden shadow-md ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full aspect-video rounded-lg overflow-hidden shadow-md cursor-pointer group ${className}`}
      onClick={() => setIsPlaying(true)}
      role="button"
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-700 group-hover:scale-110 transition-all duration-300">
          <Play className="w-6 h-6 text-white fill-white ml-0.5" />
        </div>
      </div>
    </div>
  );
}
