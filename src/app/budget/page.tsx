'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Calculator,
  DollarSign,
  Plane,
  Hotel,
  Utensils,
  Ticket,
  Car,
  ShoppingBag,
  Users,
  Calendar,
  Info,
  TrendingUp,
  TrendingDown,
  Minus
} from 'lucide-react';

interface CostRange {
  budget: number;
  midRange: number;
  luxury: number;
}

interface CostCategory {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  perDay: boolean;
  costs: CostRange;
  notes: string;
  notesEs: string;
}

const costCategories: CostCategory[] = [
  {
    id: 'accommodation',
    name: 'Accommodation',
    nameEs: 'Alojamiento',
    icon: Hotel,
    perDay: true,
    costs: { budget: 40, midRange: 120, luxury: 350 },
    notes: 'Per room/night. Budget = hostels/basic hotels, Mid = 3-4 star hotels, Luxury = 5-star/boutique.',
    notesEs: 'Por habitación/noche. Económico = hostales/hoteles básicos, Medio = hoteles 3-4 estrellas, Lujo = 5 estrellas/boutique.'
  },
  {
    id: 'food',
    name: 'Food & Dining',
    nameEs: 'Comida y Restaurantes',
    icon: Utensils,
    perDay: true,
    costs: { budget: 30, midRange: 70, luxury: 150 },
    notes: 'Per person/day. Budget = local restaurants, Mid = tourist restaurants, Luxury = fine dining.',
    notesEs: 'Por persona/día. Económico = restaurantes locales, Medio = restaurantes turísticos, Lujo = alta cocina.'
  },
  {
    id: 'transport',
    name: 'Local Transport',
    nameEs: 'Transporte Local',
    icon: Car,
    perDay: true,
    costs: { budget: 15, midRange: 40, luxury: 100 },
    notes: 'Per person/day. Budget = public buses, Mid = taxis/shared tours, Luxury = private drivers.',
    notesEs: 'Por persona/día. Económico = buses públicos, Medio = taxis/tours compartidos, Lujo = conductores privados.'
  },
  {
    id: 'activities',
    name: 'Activities & Entrance Fees',
    nameEs: 'Actividades y Entradas',
    icon: Ticket,
    perDay: true,
    costs: { budget: 20, midRange: 50, luxury: 120 },
    notes: 'Per person/day average. Includes museums, tours, and experiences.',
    notesEs: 'Promedio por persona/día. Incluye museos, tours y experiencias.'
  }
];

const fixedCosts = [
  {
    name: 'International Flights',
    nameEs: 'Vuelos Internacionales',
    budget: 600,
    midRange: 900,
    luxury: 2500,
    notes: 'Per person, round-trip from US. Varies greatly by season and origin.',
    notesEs: 'Por persona, ida y vuelta desde EE.UU. Varía mucho por temporada y origen.'
  },
  {
    name: 'Domestic Flights (Lima-Cusco)',
    nameEs: 'Vuelos Domésticos (Lima-Cusco)',
    budget: 80,
    midRange: 120,
    luxury: 200,
    notes: 'Per person, one-way. Book in advance for better rates.',
    notesEs: 'Por persona, solo ida. Reserva con anticipación para mejores tarifas.'
  },
  {
    name: 'Machu Picchu Package',
    nameEs: 'Paquete Machu Picchu',
    budget: 150,
    midRange: 250,
    luxury: 500,
    notes: 'Per person. Includes entry + train. Budget = Expedition train, Luxury = Hiram Bingham.',
    notesEs: 'Por persona. Incluye entrada + tren. Económico = tren Expedition, Lujo = Hiram Bingham.'
  },
  {
    name: 'Travel Insurance',
    nameEs: 'Seguro de Viaje',
    budget: 50,
    midRange: 100,
    luxury: 200,
    notes: 'Per person for 2-week trip. Essential for family travel.',
    notesEs: 'Por persona para viaje de 2 semanas. Esencial para viajes familiares.'
  }
];

const seasonMultipliers = {
  peak: { label: 'Peak Season (Jun-Aug)', labelEs: 'Temporada Alta (Jun-Ago)', multiplier: 1.3 },
  shoulder: { label: 'Shoulder (Apr-May, Sep-Oct)', labelEs: 'Temporada Media (Abr-May, Sep-Oct)', multiplier: 1.0 },
  low: { label: 'Low Season (Nov-Mar)', labelEs: 'Temporada Baja (Nov-Mar)', multiplier: 0.85 }
};

export default function BudgetPage() {
  const { locale } = useI18n();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(2);
  const [days, setDays] = useState(10);
  const [budgetLevel, setBudgetLevel] = useState<'budget' | 'midRange' | 'luxury'>('midRange');
  const [season, setSeason] = useState<'peak' | 'shoulder' | 'low'>('shoulder');

  const totalPeople = adults + children;
  const childDiscount = 0.7; // Children cost ~70% of adult prices

  // Calculate daily costs
  const calculateDailyCosts = () => {
    let total = 0;
    costCategories.forEach(cat => {
      const baseCost = cat.costs[budgetLevel];
      if (cat.id === 'accommodation') {
        // Accommodation is per room, assume 1-2 rooms for family
        const rooms = totalPeople <= 3 ? 1 : 2;
        total += baseCost * rooms;
      } else {
        // Other costs are per person
        total += baseCost * adults + baseCost * children * childDiscount;
      }
    });
    return total;
  };

  // Calculate fixed costs
  const calculateFixedCosts = () => {
    let total = 0;
    fixedCosts.forEach(cost => {
      const baseCost = cost[budgetLevel];
      total += baseCost * adults + baseCost * children * childDiscount;
    });
    return total;
  };

  const dailyTotal = calculateDailyCosts();
  const fixedTotal = calculateFixedCosts();
  const subtotal = (dailyTotal * days) + fixedTotal;
  const seasonAdjusted = subtotal * seasonMultipliers[season].multiplier;
  const contingency = seasonAdjusted * 0.1; // 10% contingency
  const grandTotal = seasonAdjusted + contingency;

  const perPersonPerDay = grandTotal / totalPeople / days;

  const budgetLabels = {
    budget: { en: 'Budget', es: 'Económico', color: 'bg-green-500' },
    midRange: { en: 'Mid-Range', es: 'Rango Medio', color: 'bg-yellow-500' },
    luxury: { en: 'Luxury', es: 'Lujo', color: 'bg-purple-500' }
  };

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-gold to-peru-terracotta py-16 lg:py-20">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Calculadora de Presupuesto' : 'Budget Calculator'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Estima el costo de tu viaje familiar a Perú'
              : 'Estimate the cost of your family trip to Peru'}
          </p>
        </div>
      </section>

      <div className="container-peru py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trip Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-display font-bold text-peru-earth mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-peru-gold" />
                {locale === 'es' ? 'Detalles del Viaje' : 'Trip Details'}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'es' ? 'Adultos' : 'Adults'}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold text-peru-earth w-12 text-center">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <TrendingUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'es' ? 'Niños' : 'Children'}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold text-peru-earth w-12 text-center">{children}</span>
                    <button
                      onClick={() => setChildren(children + 1)}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <TrendingUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {locale === 'es' ? 'Días' : 'Days'}
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setDays(Math.max(3, days - 1))}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-2xl font-bold text-peru-earth w-12 text-center">{days}</span>
                    <button
                      onClick={() => setDays(days + 1)}
                      className="w-10 h-10 rounded-full bg-peru-sand flex items-center justify-center hover:bg-peru-gold hover:text-white transition-colors"
                    >
                      <TrendingUp className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Budget Level */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-display font-bold text-peru-earth mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-peru-gold" />
                {locale === 'es' ? 'Nivel de Presupuesto' : 'Budget Level'}
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {(['budget', 'midRange', 'luxury'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setBudgetLevel(level)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      budgetLevel === level
                        ? 'border-peru-gold bg-peru-gold/10'
                        : 'border-gray-200 hover:border-peru-gold/50'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full ${budgetLabels[level].color} mx-auto mb-2`} />
                    <p className="font-medium text-peru-earth">
                      {locale === 'es' ? budgetLabels[level].es : budgetLabels[level].en}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Season */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-display font-bold text-peru-earth mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-peru-gold" />
                {locale === 'es' ? 'Temporada' : 'Season'}
              </h2>

              <div className="grid grid-cols-3 gap-4">
                {(['peak', 'shoulder', 'low'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSeason(s)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      season === s
                        ? 'border-peru-gold bg-peru-gold/10'
                        : 'border-gray-200 hover:border-peru-gold/50'
                    }`}
                  >
                    <p className="font-medium text-peru-earth text-sm">
                      {locale === 'es' ? seasonMultipliers[s].labelEs : seasonMultipliers[s].label}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {s === 'peak' && (locale === 'es' ? '+30%' : '+30%')}
                      {s === 'shoulder' && (locale === 'es' ? 'Base' : 'Base')}
                      {s === 'low' && (locale === 'es' ? '-15%' : '-15%')}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-display font-bold text-peru-earth mb-6">
                {locale === 'es' ? 'Desglose de Costos' : 'Cost Breakdown'}
              </h2>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-500 text-sm uppercase tracking-wider">
                  {locale === 'es' ? 'Costos Diarios' : 'Daily Costs'}
                </h3>
                {costCategories.map((cat) => {
                  const CatIcon = cat.icon;
                  const baseCost = cat.costs[budgetLevel];
                  let lineCost = 0;
                  if (cat.id === 'accommodation') {
                    const rooms = totalPeople <= 3 ? 1 : 2;
                    lineCost = baseCost * rooms * days;
                  } else {
                    lineCost = (baseCost * adults + baseCost * children * childDiscount) * days;
                  }
                  return (
                    <div key={cat.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <CatIcon className="w-5 h-5 text-peru-terracotta" />
                        <div>
                          <p className="font-medium text-peru-earth">
                            {locale === 'es' ? cat.nameEs : cat.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            ${baseCost}/{locale === 'es' ? 'día' : 'day'}
                          </p>
                        </div>
                      </div>
                      <span className="font-bold text-peru-earth">${lineCost.toLocaleString()}</span>
                    </div>
                  );
                })}

                <h3 className="font-medium text-gray-500 text-sm uppercase tracking-wider mt-6">
                  {locale === 'es' ? 'Costos Fijos' : 'Fixed Costs'}
                </h3>
                {fixedCosts.map((cost, index) => {
                  const baseCost = cost[budgetLevel];
                  const lineCost = baseCost * adults + baseCost * children * childDiscount;
                  return (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-peru-earth">
                          {locale === 'es' ? cost.nameEs : cost.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          ${baseCost}/{locale === 'es' ? 'persona' : 'person'}
                        </p>
                      </div>
                      <span className="font-bold text-peru-earth">${lineCost.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-peru-earth to-peru-terracotta rounded-2xl shadow-xl p-6 text-white">
              <h2 className="text-xl font-display font-bold mb-6">
                {locale === 'es' ? 'Resumen del Presupuesto' : 'Budget Summary'}
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white/80">
                  <span>{locale === 'es' ? 'Viajeros' : 'Travelers'}</span>
                  <span>{adults} + {children} {locale === 'es' ? 'niños' : 'kids'}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>{locale === 'es' ? 'Duración' : 'Duration'}</span>
                  <span>{days} {locale === 'es' ? 'días' : 'days'}</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>{locale === 'es' ? 'Nivel' : 'Level'}</span>
                  <span>{locale === 'es' ? budgetLabels[budgetLevel].es : budgetLabels[budgetLevel].en}</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-white/80">
                    <span>{locale === 'es' ? 'Subtotal' : 'Subtotal'}</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/80 mt-2">
                    <span>{locale === 'es' ? 'Ajuste temporada' : 'Season adjustment'}</span>
                    <span>{season === 'peak' ? '+30%' : season === 'low' ? '-15%' : '—'}</span>
                  </div>
                  <div className="flex justify-between text-white/80 mt-2">
                    <span>{locale === 'es' ? 'Contingencia (10%)' : 'Contingency (10%)'}</span>
                    <span>${contingency.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-4 mb-6">
                <p className="text-white/60 text-sm mb-1">
                  {locale === 'es' ? 'Total Estimado' : 'Estimated Total'}
                </p>
                <p className="text-4xl font-bold">${Math.round(grandTotal).toLocaleString()}</p>
                <p className="text-sm text-white/60 mt-2">
                  ~${Math.round(perPersonPerDay)}/{locale === 'es' ? 'persona/día' : 'person/day'}
                </p>
              </div>

              <div className="bg-white/10 rounded-xl p-4">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-peru-gold flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/80">
                    {locale === 'es'
                      ? 'Esto es una estimación. Los precios reales varían según disponibilidad, proveedores y elecciones específicas.'
                      : 'This is an estimate. Actual prices vary based on availability, providers, and specific choices.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Money-Saving Tips */}
      <section className="bg-peru-sand py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            {locale === 'es' ? 'Consejos para Ahorrar' : 'Money-Saving Tips'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <TrendingDown className="w-8 h-8 text-peru-gold mb-3" />
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Viaja en Temporada Baja' : 'Travel Off-Season'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Abril-mayo y septiembre-octubre ofrecen buen clima con precios más bajos y menos multitudes.'
                  : 'April-May and September-October offer good weather with lower prices and fewer crowds.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Utensils className="w-8 h-8 text-peru-gold mb-3" />
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Come como Local' : 'Eat Like a Local'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Los menús del día en restaurantes locales ofrecen comidas completas por $3-5. Evita zonas turísticas para mejor valor.'
                  : 'Set lunch menus at local restaurants offer full meals for $3-5. Avoid tourist areas for better value.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Plane className="w-8 h-8 text-peru-gold mb-3" />
              <h3 className="font-display font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Reserva con Anticipación' : 'Book in Advance'}
              </h3>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Vuelos, trenes a Machu Picchu y hoteles populares son más baratos con reserva anticipada.'
                  : 'Flights, Machu Picchu trains, and popular hotels are cheaper when booked well ahead.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-peru py-12 text-center">
        <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? '¿Listo para planificar tu viaje?' : 'Ready to plan your trip?'}
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {locale === 'es'
            ? 'Explora itinerarios con precios reales y paquetes todo incluido.'
            : 'Explore itineraries with real pricing and all-inclusive packages.'}
        </p>
        <Link href="/itineraries/" className="btn-primary">
          {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
        </Link>
      </section>
    </main>
  );
}
