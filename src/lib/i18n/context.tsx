'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from './translations';

type TranslationValue = string | { [key: string]: TranslationValue };
type Translations = Record<string, unknown>;

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function getNestedValue(obj: TranslationValue, path: string): string {
  const keys = path.split('.');
  let current: TranslationValue = obj;

  for (const key of keys) {
    if (typeof current === 'object' && current !== null && key in current) {
      current = (current as { [key: string]: TranslationValue })[key];
    } else {
      return path;
    }
  }

  return typeof current === 'string' ? current : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'es')) {
      setLocaleState(savedLocale);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        setLocaleState('es');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (key: string): string => {
    return getNestedValue(translations[locale] as TranslationValue, key);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, translations: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

export function useTranslations(namespace?: string) {
  const { t, locale, translations } = useI18n();

  if (namespace) {
    return (key: string) => t(`${namespace}.${key}`);
  }

  return t;
}

export function useLocale() {
  const { locale } = useI18n();
  return locale;
}
