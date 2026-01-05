'use client';

import { useI18n, type Locale } from '@/lib/i18n';
import { Globe } from 'lucide-react';

const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const otherLocale: Locale = locale === 'en' ? 'es' : 'en';

  return (
    <button
      onClick={() => setLocale(otherLocale)}
      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-peru-terracotta transition-colors rounded-lg hover:bg-gray-100"
      aria-label={`Switch to ${localeNames[otherLocale]}`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">{localeNames[otherLocale]}</span>
    </button>
  );
}
