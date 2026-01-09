'use client';

import { useI18n } from '@/lib/i18n';
import {
  DollarSign,
  CreditCard,
  Banknote,
  Building2,
  AlertTriangle,
  CheckCircle,
  Users,
  UtensilsCrossed,
  Car,
  Hotel,
  ShoppingBag,
  Percent,
  Globe,
  Smartphone
} from 'lucide-react';

interface TipCategory {
  name: string;
  nameEs: string;
  icon: React.ElementType;
  standard: string;
  standardEs: string;
  notes: string;
  notesEs: string;
}

const tippingGuide: TipCategory[] = [
  {
    name: 'Restaurants',
    nameEs: 'Restaurantes',
    icon: UtensilsCrossed,
    standard: '10% standard, 15% for excellent service',
    standardEs: '10% estándar, 15% por servicio excelente',
    notes: 'Some restaurants add service charge - check bill first',
    notesEs: 'Algunos restaurantes agregan cargo por servicio - revisa la cuenta primero'
  },
  {
    name: 'Tour Guides',
    nameEs: 'Guías de Tour',
    icon: Users,
    standard: '$10-20 per day for private guide',
    standardEs: '$10-20 por día para guía privado',
    notes: 'Group tours: $3-5 per person. Machu Picchu guides expect more.',
    notesEs: 'Tours grupales: $3-5 por persona. Guías de Machu Picchu esperan más.'
  },
  {
    name: 'Hotels',
    nameEs: 'Hoteles',
    icon: Hotel,
    standard: 'Bellhops: $1-2/bag, Housekeeping: $2-3/day',
    standardEs: 'Botones: $1-2/maleta, Limpieza: $2-3/día',
    notes: 'Leave housekeeping tip daily - staff may rotate',
    notesEs: 'Deja propina de limpieza diariamente - el personal puede rotar'
  },
  {
    name: 'Taxi/Drivers',
    nameEs: 'Taxi/Conductores',
    icon: Car,
    standard: 'Round up fare, or 10% for excellent service',
    standardEs: 'Redondea la tarifa, o 10% por excelente servicio',
    notes: 'Private drivers on multi-day trips: $10-15/day',
    notesEs: 'Conductores privados en viajes de varios días: $10-15/día'
  },
  {
    name: 'Porters (Inca Trail)',
    nameEs: 'Porteadores (Camino Inca)',
    icon: ShoppingBag,
    standard: '$20-50 total per porter for 4-day trek',
    standardEs: '$20-50 total por porteador para trek de 4 días',
    notes: 'Very important - they carry heavy loads in difficult conditions',
    notesEs: 'Muy importante - cargan cargas pesadas en condiciones difíciles'
  },
  {
    name: 'Spa/Wellness',
    nameEs: 'Spa/Bienestar',
    icon: CheckCircle,
    standard: '10-15% of service cost',
    standardEs: '10-15% del costo del servicio',
    notes: 'Same as US/European standards',
    notesEs: 'Igual que estándares de EE.UU./Europa'
  }
];

export default function MoneyGuidePage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Guía de Dinero y Propinas' : 'Money & Tipping Guide'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Todo sobre moneda, pagos, cajeros y propinas en Perú para tu viaje familiar.'
                : 'Everything about currency, payments, ATMs, and tipping in Peru for your family trip.'}
            </p>
          </div>
        </div>
      </section>

      {/* Currency Basics */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Moneda de Perú' : 'Peru\'s Currency'}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-peru-gold/20 rounded-full">
                  <Banknote className="h-8 w-8 text-peru-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-peru-earth">Sol (PEN)</h3>
                  <p className="text-gray-500">{locale === 'es' ? 'Moneda oficial' : 'Official currency'}</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p><strong>{locale === 'es' ? 'Símbolo:' : 'Symbol:'}</strong> S/</p>
                <p><strong>{locale === 'es' ? 'Tasa aproximada:' : 'Approx. rate:'}</strong> 1 USD ≈ 3.7 PEN</p>
                <p><strong>{locale === 'es' ? 'Billetes:' : 'Bills:'}</strong> S/10, S/20, S/50, S/100, S/200</p>
                <p><strong>{locale === 'es' ? 'Monedas:' : 'Coins:'}</strong> S/0.10, S/0.20, S/0.50, S/1, S/2, S/5</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-peru-earth">US Dollar (USD)</h3>
                  <p className="text-gray-500">{locale === 'es' ? 'Ampliamente aceptado' : 'Widely accepted'}</p>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>{locale === 'es'
                  ? 'Dólares son aceptados en muchos hoteles, tours y restaurantes turísticos.'
                  : 'Dollars are accepted at many hotels, tours, and tourist restaurants.'}</p>
                <p className="text-sm text-peru-terracotta">
                  {locale === 'es'
                    ? '⚠️ Billetes deben estar en perfectas condiciones - sin roturas ni manchas'
                    : '⚠️ Bills must be in perfect condition - no tears or stains'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Métodos de Pago' : 'Payment Methods'}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <CreditCard className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Tarjetas de Crédito' : 'Credit Cards'}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Visa y Mastercard ampliamente aceptadas' : 'Visa and Mastercard widely accepted'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Amex aceptada en hoteles grandes' : 'Amex accepted at major hotels'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Notifica a tu banco antes de viajar' : 'Notify your bank before traveling'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Banknote className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Efectivo' : 'Cash'}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Esencial para mercados y vendedores pequeños' : 'Essential for markets and small vendors'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Lleva billetes pequeños (S/10, S/20)' : 'Carry small bills (S/10, S/20)'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'S/100 y S/200 difíciles de cambiar' : 'S/100 and S/200 hard to break'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-peru-sand/30 rounded-xl p-6">
              <Smartphone className="h-10 w-10 text-peru-terracotta mb-4" />
              <h3 className="font-bold text-peru-earth mb-2">
                {locale === 'es' ? 'Pagos Digitales' : 'Digital Payments'}
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Apple/Google Pay en tiendas grandes' : 'Apple/Google Pay at major stores'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'Yape (app local) muy popular' : 'Yape (local app) very popular'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span>{locale === 'es' ? 'No confíes solo en pagos digitales' : 'Don\'t rely solely on digital payments'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ATMs */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center flex items-center justify-center gap-2">
            <Building2 className="h-8 w-8 text-peru-terracotta" />
            {locale === 'es' ? 'Cajeros Automáticos (ATMs)' : 'ATMs'}
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-peru-earth mb-3">
                  {locale === 'es' ? 'Bancos Recomendados' : 'Recommended Banks'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span><strong>BCP</strong> - {locale === 'es' ? 'Más ubicaciones' : 'Most locations'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span><strong>BBVA</strong> - {locale === 'es' ? 'Buenos límites' : 'Good limits'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span><strong>Interbank</strong> - {locale === 'es' ? 'Retiros en USD' : 'USD withdrawals'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span><strong>Scotiabank</strong> - {locale === 'es' ? 'Global Alliance' : 'Global Alliance'}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-peru-earth mb-3">
                  {locale === 'es' ? 'Consejos de Seguridad' : 'Safety Tips'}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• {locale === 'es' ? 'Usa ATMs dentro de bancos o centros comerciales' : 'Use ATMs inside banks or malls'}</li>
                  <li>• {locale === 'es' ? 'Evita ATMs en la calle de noche' : 'Avoid street ATMs at night'}</li>
                  <li>• {locale === 'es' ? 'Cubre tu PIN al ingresar' : 'Cover your PIN when entering'}</li>
                  <li>• {locale === 'es' ? 'Revisa el ATM por dispositivos extraños' : 'Check ATM for skimming devices'}</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-yellow-800">
                    {locale === 'es' ? 'Límites de Retiro' : 'Withdrawal Limits'}
                  </p>
                  <p className="text-sm text-yellow-700">
                    {locale === 'es'
                      ? 'Típicamente S/400-700 por transacción, ~S/1,500/día. Los cajeros ofrecen Soles o Dólares - elige Soles para mejor tasa.'
                      : 'Typically S/400-700 per transaction, ~S/1,500/day. ATMs offer Soles or Dollars - choose Soles for better rate.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipping Guide */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center flex items-center justify-center gap-2">
            <Percent className="h-8 w-8 text-peru-terracotta" />
            {locale === 'es' ? 'Guía de Propinas' : 'Tipping Guide'}
          </h2>

          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Las propinas no son obligatorias en Perú pero son muy apreciadas, especialmente en el sector turístico.'
              : 'Tipping is not mandatory in Peru but is greatly appreciated, especially in the tourism sector.'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tippingGuide.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-peru-sand/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="h-8 w-8 text-peru-terracotta" />
                    <h3 className="font-bold text-peru-earth">
                      {locale === 'es' ? category.nameEs : category.name}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-peru-earth mb-2">
                    {locale === 'es' ? category.standardEs : category.standard}
                  </p>
                  <p className="text-sm text-gray-600">
                    {locale === 'es' ? category.notesEs : category.notes}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Money-Saving Tips */}
      <section className="py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Consejos para Ahorrar' : 'Money-Saving Tips'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                {locale === 'es' ? 'Hacer' : 'Do'}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• {locale === 'es' ? 'Come el menú del día (almuerzo) por S/8-15' : 'Eat the menú del día (lunch) for S/8-15'}</li>
                <li>• {locale === 'es' ? 'Usa tarjetas sin comisión por cambio de divisa' : 'Use cards with no foreign transaction fees'}</li>
                <li>• {locale === 'es' ? 'Negocia precios en mercados de artesanías' : 'Negotiate prices at craft markets'}</li>
                <li>• {locale === 'es' ? 'Reserva tours locales en vez de internacionales' : 'Book local tours instead of international ones'}</li>
                <li>• {locale === 'es' ? 'Viaja en temporada baja para mejores precios' : 'Travel in low season for better prices'}</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-500" />
                {locale === 'es' ? 'Evitar' : 'Avoid'}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• {locale === 'es' ? 'Cambiar dinero en el aeropuerto (malas tasas)' : 'Exchanging money at airports (bad rates)'}</li>
                <li>• {locale === 'es' ? 'ATMs que cobran comisiones altas' : 'ATMs that charge high fees'}</li>
                <li>• {locale === 'es' ? 'Pagar en dólares cuando puedes pagar en soles' : 'Paying in dollars when you can pay in soles'}</li>
                <li>• {locale === 'es' ? 'Restaurantes en la Plaza de Armas (precios turísticos)' : 'Restaurants on Plaza de Armas (tourist prices)'}</li>
                <li>• {locale === 'es' ? 'No revisar la cuenta antes de pagar' : 'Not checking the bill before paying'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Warning */}
      <section className="py-8 bg-peru-sand/30">
        <div className="container-peru">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">
                  {locale === 'es' ? 'Cuidado con el Cambio de Dinero' : 'Money Exchange Warning'}
                </h3>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• {locale === 'es' ? 'Usa casas de cambio oficiales, no personas en la calle' : 'Use official exchange houses, not street changers'}</li>
                  <li>• {locale === 'es' ? 'Verifica la tasa antes de entregar tu dinero' : 'Verify the rate before handing over your money'}</li>
                  <li>• {locale === 'es' ? 'Cuenta tu dinero en el mostrador, no después' : 'Count your money at the counter, not after'}</li>
                  <li>• {locale === 'es' ? 'No aceptes billetes rotos o muy viejos' : 'Don\'t accept torn or very old bills'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold mb-4">
            {locale === 'es' ? '¿Listo para Presupuestar?' : 'Ready to Budget?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Usa nuestra calculadora de presupuesto para estimar el costo total de tu viaje.'
              : 'Use our budget calculator to estimate the total cost of your trip.'}
          </p>
          <a
            href="/budget/"
            className="inline-block bg-white text-peru-earth px-8 py-3 rounded-full font-semibold hover:bg-peru-sand transition-colors"
          >
            {locale === 'es' ? 'Calculadora de Presupuesto' : 'Budget Calculator'}
          </a>
        </div>
      </section>
    </main>
  );
}
