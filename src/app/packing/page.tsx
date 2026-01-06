'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import { packingLists, PackingList, PackingCategory, PackingItem } from '@/data/packing-lists';
import {
  CheckCircle,
  Circle,
  Mountain,
  TreePine,
  Waves,
  Map,
  ChevronDown,
  ChevronUp,
  Printer,
  FileText,
  Heart,
  Smartphone,
  Shirt,
  Backpack,
  Baby,
  Download
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  FileText,
  Heart,
  Smartphone,
  Shirt,
  Backpack,
  Baby
};

const tripTypeIcons: Record<string, React.ElementType> = {
  highland: Mountain,
  amazon: TreePine,
  coast: Waves,
  'multi-region': Map,
  adventure: Mountain
};

function PackingItemRow({ item, locale, checked, onToggle }: {
  item: PackingItem;
  locale: string;
  checked: boolean;
  onToggle: () => void;
}) {
  const itemText = locale === 'es' ? item.itemEs : item.item;
  const noteText = locale === 'es' ? item.noteEs : item.note;

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
        checked ? 'bg-peru-jungle/10' : 'hover:bg-peru-sand/50'
      }`}
      onClick={onToggle}
    >
      {checked ? (
        <CheckCircle className="w-5 h-5 text-peru-jungle flex-shrink-0 mt-0.5" />
      ) : (
        <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
      )}
      <div className="flex-1">
        <span className={`${checked ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {itemText}
        </span>
        {item.essential && !checked && (
          <span className="ml-2 text-xs bg-peru-terracotta/20 text-peru-terracotta px-2 py-0.5 rounded">
            {locale === 'es' ? 'Esencial' : 'Essential'}
          </span>
        )}
        {noteText && (
          <p className="text-sm text-gray-500 mt-1">{noteText}</p>
        )}
      </div>
    </div>
  );
}

function PackingCategorySection({ category, locale, checkedItems, onToggleItem }: {
  category: PackingCategory;
  locale: string;
  checkedItems: Set<string>;
  onToggleItem: (itemKey: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const IconComponent = iconMap[category.icon] || FileText;
  const categoryName = locale === 'es' ? category.nameEs : category.name;

  const totalItems = category.items.length;
  const checkedCount = category.items.filter(item =>
    checkedItems.has(`${category.id}-${item.item}`)
  ).length;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between bg-peru-sand/30 hover:bg-peru-sand/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <IconComponent className="w-5 h-5 text-peru-terracotta" />
          <span className="font-display font-bold text-peru-earth">{categoryName}</span>
          <span className="text-sm text-gray-500">
            ({checkedCount}/{totalItems})
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="p-4 space-y-1">
          {category.items.map((item) => {
            const itemKey = `${category.id}-${item.item}`;
            return (
              <PackingItemRow
                key={itemKey}
                item={item}
                locale={locale}
                checked={checkedItems.has(itemKey)}
                onToggle={() => onToggleItem(itemKey)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function PackingListDetail({ list, locale, onBack }: {
  list: PackingList;
  locale: string;
  onBack: () => void;
}) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (itemKey: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  };

  const totalItems = list.categories.reduce((sum, cat) => sum + cat.items.length, 0);
  const checkedCount = checkedItems.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  const handlePrint = () => {
    window.print();
  };

  const title = locale === 'es' ? list.titleEs : list.title;
  const description = locale === 'es' ? list.descriptionEs : list.description;

  return (
    <div>
      <button
        onClick={onBack}
        className="mb-6 text-peru-terracotta hover:text-peru-earth transition-colors flex items-center gap-2"
      >
        ← {locale === 'es' ? 'Volver a las listas' : 'Back to lists'}
      </button>

      <div className="bg-gradient-to-br from-peru-earth to-peru-terracotta rounded-2xl p-8 text-white mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">{title}</h1>
        <p className="text-white/90 mb-6">{description}</p>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="flex justify-between text-sm mb-2">
              <span>{locale === 'es' ? 'Progreso' : 'Progress'}</span>
              <span>{checkedCount}/{totalItems} {locale === 'es' ? 'artículos' : 'items'}</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-peru-gold transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors print:hidden"
          >
            <Printer className="w-4 h-4" />
            {locale === 'es' ? 'Imprimir' : 'Print'}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {list.categories.map((category) => (
          <PackingCategorySection
            key={category.id}
            category={category}
            locale={locale}
            checkedItems={checkedItems}
            onToggleItem={toggleItem}
          />
        ))}
      </div>

      {/* Tips Section */}
      <div className="mt-12 bg-peru-sand rounded-xl p-6">
        <h2 className="font-display font-bold text-peru-earth text-xl mb-4">
          {locale === 'es' ? 'Consejos de Empaque' : 'Packing Tips'}
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
            <span>
              {locale === 'es'
                ? 'Usa cubos de empaque para organizar la ropa por clima/región'
                : 'Use packing cubes to organize clothing by climate/region'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
            <span>
              {locale === 'es'
                ? 'Lleva una mochila de día para excursiones separada del equipaje principal'
                : 'Pack a daypack for excursions separate from main luggage'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
            <span>
              {locale === 'es'
                ? 'Prueba todo el equipo nuevo antes del viaje, especialmente zapatos'
                : 'Test all new gear before the trip, especially shoes'}
            </span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-peru-gold flex-shrink-0 mt-0.5" />
            <span>
              {locale === 'es'
                ? 'Deja espacio para souvenirs: textiles peruanos y artesanías'
                : 'Leave room for souvenirs: Peruvian textiles and crafts'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function PackingPage() {
  const { locale } = useI18n();
  const [selectedList, setSelectedList] = useState<PackingList | null>(null);

  if (selectedList) {
    return (
      <main className="min-h-screen bg-peru-sand/30">
        <div className="container-peru py-12">
          <PackingListDetail
            list={selectedList}
            locale={locale}
            onBack={() => setSelectedList(null)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-earth to-peru-terracotta py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Listas de Equipaje' : 'Packing Lists'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Listas de equipaje interactivas diseñadas para cada tipo de aventura en Perú'
              : 'Interactive packing checklists designed for every type of Peru adventure'}
          </p>
        </div>
      </section>

      {/* Lists Grid */}
      <section className="container-peru py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {packingLists.map((list) => {
            const TripIcon = tripTypeIcons[list.tripType] || Map;
            const title = locale === 'es' ? list.titleEs : list.title;
            const description = locale === 'es' ? list.descriptionEs : list.description;
            const totalItems = list.categories.reduce((sum, cat) => sum + cat.items.length, 0);

            return (
              <button
                key={list.id}
                onClick={() => setSelectedList(list)}
                className="text-left bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 bg-peru-gold/20 rounded-xl flex items-center justify-center group-hover:bg-peru-gold/30 transition-colors">
                      <TripIcon className="w-7 h-7 text-peru-gold" />
                    </div>
                    <span className="text-sm text-gray-500">
                      {totalItems} {locale === 'es' ? 'artículos' : 'items'}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-peru-earth mb-2 group-hover:text-peru-terracotta transition-colors">
                    {title}
                  </h2>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {list.categories.slice(0, 4).map((cat) => (
                      <span
                        key={cat.id}
                        className="text-xs bg-peru-sand px-3 py-1 rounded-full text-peru-earth"
                      >
                        {locale === 'es' ? cat.nameEs : cat.name}
                      </span>
                    ))}
                    {list.categories.length > 4 && (
                      <span className="text-xs bg-peru-sand px-3 py-1 rounded-full text-peru-earth">
                        +{list.categories.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Pro Tips */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            {locale === 'es' ? 'Consejos Pro de Empaque' : 'Pro Packing Tips'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="w-8 h-8 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Capas, Capas, Capas' : 'Layers, Layers, Layers'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'La temperatura puede variar 30°C en un solo día entre regiones'
                  : 'Temperature can vary 30°C in a single day between regions'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Menos es Más' : 'Less is More'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'La lavandería es barata en Perú. Empaca ligero y lava en el camino'
                  : 'Laundry is cheap in Peru. Pack light and wash along the way'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-peru-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Baby className="w-8 h-8 text-peru-gold" />
              </div>
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Snacks de Emergencia' : 'Emergency Snacks'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Siempre lleva snacks favoritos de casa. Salvan el día con niños'
                  : 'Always pack favorite snacks from home. They save the day with kids'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-peru-sand py-12">
        <div className="container-peru text-center">
          <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
            {locale === 'es' ? '¿Listo para planificar tu viaje?' : 'Ready to plan your trip?'}
          </h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            {locale === 'es'
              ? 'Explora nuestros itinerarios familiares diseñados para Perú'
              : 'Explore our family itineraries designed for Peru'}
          </p>
          <Link href="/itineraries/" className="btn-primary">
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </Link>
        </div>
      </section>
    </main>
  );
}
