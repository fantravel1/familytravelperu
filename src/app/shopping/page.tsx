'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  ShoppingBag,
  Star,
  MapPin,
  Baby,
  AlertTriangle,
  Check,
  DollarSign,
  Heart,
  Palette,
  Shirt,
  Gift,
  Coffee
} from 'lucide-react';

interface SouvenirCategory {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ReactNode;
  description: string;
  descriptionEs: string;
  items: SouvenirItem[];
}

interface SouvenirItem {
  name: string;
  nameEs: string;
  priceRange: string;
  description: string;
  descriptionEs: string;
  whereToBuy: string;
  whereToBuyEs: string;
  kidFriendly: boolean;
  authenticityTip: string;
  authenticityTipEs: string;
}

interface ShoppingLocation {
  name: string;
  nameEs: string;
  city: string;
  type: 'market' | 'mall' | 'artisan' | 'street';
  description: string;
  descriptionEs: string;
  bestFor: string[];
  bestForEs: string[];
  bargaining: boolean;
  kidFriendly: boolean;
}

const souvenirCategories: SouvenirCategory[] = [
  {
    id: 'textiles',
    name: 'Textiles & Clothing',
    nameEs: 'Textiles y Ropa',
    icon: <Shirt className="h-6 w-6" />,
    description: 'Peru is famous for its high-quality alpaca wool and traditional weaving techniques passed down for generations.',
    descriptionEs: 'Perú es famoso por su lana de alpaca de alta calidad y técnicas de tejido tradicionales transmitidas por generaciones.',
    items: [
      {
        name: 'Alpaca Sweaters',
        nameEs: 'Suéteres de Alpaca',
        priceRange: '$30-$200',
        description: 'Incredibly soft and warm. Baby alpaca is the finest quality.',
        descriptionEs: 'Increíblemente suaves y cálidos. Baby alpaca es la mejor calidad.',
        whereToBuy: 'Cusco, Lima (Miraflores)',
        whereToBuyEs: 'Cusco, Lima (Miraflores)',
        kidFriendly: true,
        authenticityTip: 'Real alpaca doesn\'t smell when wet. Ask to test with water.',
        authenticityTipEs: 'La alpaca real no huele cuando está mojada. Pide hacer la prueba con agua.'
      },
      {
        name: 'Woven Blankets',
        nameEs: 'Mantas Tejidas',
        priceRange: '$20-$150',
        description: 'Traditional patterns with vibrant colors. Each region has distinct designs.',
        descriptionEs: 'Patrones tradicionales con colores vibrantes. Cada región tiene diseños distintos.',
        whereToBuy: 'Chinchero, Pisac Markets',
        whereToBuyEs: 'Mercados de Chinchero, Pisac',
        kidFriendly: true,
        authenticityTip: 'Hand-woven items have slight irregularities. Machine-made are too perfect.',
        authenticityTipEs: 'Los artículos tejidos a mano tienen pequeñas irregularidades. Los hechos a máquina son demasiado perfectos.'
      },
      {
        name: 'Chullo (Ear-flap Hat)',
        nameEs: 'Chullo',
        priceRange: '$5-$25',
        description: 'Traditional Andean hat with ear flaps. Kids love wearing them!',
        descriptionEs: 'Gorro andino tradicional con orejeras. ¡A los niños les encanta usarlos!',
        whereToBuy: 'Any market in the highlands',
        whereToBuyEs: 'Cualquier mercado en la sierra',
        kidFriendly: true,
        authenticityTip: 'Look for hand-knit ones with natural dyes for authentic pieces.',
        authenticityTipEs: 'Busca los tejidos a mano con tintes naturales para piezas auténticas.'
      }
    ]
  },
  {
    id: 'crafts',
    name: 'Handicrafts & Art',
    nameEs: 'Artesanías y Arte',
    icon: <Palette className="h-6 w-6" />,
    description: 'Traditional crafts reflect Peru\'s rich cultural heritage, from pottery to silver work.',
    descriptionEs: 'Las artesanías tradicionales reflejan el rico patrimonio cultural de Perú, desde cerámica hasta platería.',
    items: [
      {
        name: 'Retablos',
        nameEs: 'Retablos',
        priceRange: '$15-$300',
        description: 'Colorful wooden boxes depicting scenes from daily life or history.',
        descriptionEs: 'Cajas de madera coloridas que representan escenas de la vida diaria o historia.',
        whereToBuy: 'Ayacucho, Lima markets',
        whereToBuyEs: 'Ayacucho, mercados de Lima',
        kidFriendly: true,
        authenticityTip: 'Authentic retablos from Ayacucho have intricate details and natural pigments.',
        authenticityTipEs: 'Los retablos auténticos de Ayacucho tienen detalles intrincados y pigmentos naturales.'
      },
      {
        name: 'Mate Burilado (Carved Gourds)',
        nameEs: 'Mate Burilado',
        priceRange: '$10-$80',
        description: 'Intricately carved gourds showing scenes from Peruvian life.',
        descriptionEs: 'Calabazas talladas intrincadamente mostrando escenas de la vida peruana.',
        whereToBuy: 'Huancayo, Cusco',
        whereToBuyEs: 'Huancayo, Cusco',
        kidFriendly: true,
        authenticityTip: 'Real ones take weeks to carve. Very cheap ones are machine-made.',
        authenticityTipEs: 'Los reales toman semanas en tallarse. Los muy baratos son hechos a máquina.'
      },
      {
        name: 'Ceramic Bulls (Toritos de Pucará)',
        nameEs: 'Toritos de Pucará',
        priceRange: '$5-$50',
        description: 'Traditional good luck charms placed on rooftops. Symbol of protection.',
        descriptionEs: 'Amuletos tradicionales de buena suerte colocados en techos. Símbolo de protección.',
        whereToBuy: 'Puno, Cusco, any souvenir shop',
        whereToBuyEs: 'Puno, Cusco, cualquier tienda de souvenirs',
        kidFriendly: true,
        authenticityTip: 'Authentic ones from Pucará have distinct style and are heavier.',
        authenticityTipEs: 'Los auténticos de Pucará tienen un estilo distintivo y son más pesados.'
      }
    ]
  },
  {
    id: 'jewelry',
    name: 'Jewelry & Silver',
    nameEs: 'Joyería y Plata',
    icon: <Star className="h-6 w-6" />,
    description: 'Peru has a rich tradition of silverwork dating back to pre-Columbian times.',
    descriptionEs: 'Perú tiene una rica tradición de platería que data de tiempos precolombinos.',
    items: [
      {
        name: 'Silver Jewelry',
        nameEs: 'Joyería de Plata',
        priceRange: '$10-$200',
        description: 'Beautiful earrings, bracelets, and necklaces with traditional designs.',
        descriptionEs: 'Hermosos aretes, pulseras y collares con diseños tradicionales.',
        whereToBuy: 'Lima (Miraflores), Cusco San Blas',
        whereToBuyEs: 'Lima (Miraflores), Cusco San Blas',
        kidFriendly: false,
        authenticityTip: 'Look for 950 or 925 stamps. Use a magnet - real silver isn\'t magnetic.',
        authenticityTipEs: 'Busca sellos 950 o 925. Usa un imán - la plata real no es magnética.'
      },
      {
        name: 'Friendship Bracelets',
        nameEs: 'Pulseras de la Amistad',
        priceRange: '$1-$10',
        description: 'Colorful woven bracelets. Perfect for kids to share with friends.',
        descriptionEs: 'Pulseras tejidas coloridas. Perfectas para que los niños compartan con amigos.',
        whereToBuy: 'Any market or beach town',
        whereToBuyEs: 'Cualquier mercado o pueblo de playa',
        kidFriendly: true,
        authenticityTip: 'Not about authenticity - just choose colors your kids love!',
        authenticityTipEs: '¡No se trata de autenticidad - solo elige colores que les gusten a tus hijos!'
      }
    ]
  },
  {
    id: 'food',
    name: 'Food & Drinks',
    nameEs: 'Comida y Bebidas',
    icon: <Coffee className="h-6 w-6" />,
    description: 'Take home the flavors of Peru with these culinary souvenirs.',
    descriptionEs: 'Llévate los sabores del Perú con estos souvenirs culinarios.',
    items: [
      {
        name: 'Peruvian Chocolate',
        nameEs: 'Chocolate Peruano',
        priceRange: '$5-$20',
        description: 'Peru produces some of the world\'s finest cacao. Look for single-origin bars.',
        descriptionEs: 'Perú produce uno de los mejores cacaos del mundo. Busca barras de origen único.',
        whereToBuy: 'ChocoMuseo (Cusco, Lima), supermarkets',
        whereToBuyEs: 'ChocoMuseo (Cusco, Lima), supermercados',
        kidFriendly: true,
        authenticityTip: 'Brands like Maraná, Cacaosuyo, and Shattell are excellent Peruvian chocolatiers.',
        authenticityTipEs: 'Marcas como Maraná, Cacaosuyo y Shattell son excelentes chocolateros peruanos.'
      },
      {
        name: 'Pisco',
        nameEs: 'Pisco',
        priceRange: '$15-$60',
        description: 'Peru\'s national spirit. Great for making Pisco Sours at home.',
        descriptionEs: 'El licor nacional de Perú. Ideal para hacer Pisco Sours en casa.',
        whereToBuy: 'Duty-free, supermarkets, specialty stores',
        whereToBuyEs: 'Duty-free, supermercados, tiendas especializadas',
        kidFriendly: false,
        authenticityTip: 'Look for "Pisco Puro" or "Pisco Acholado" from Ica region.',
        authenticityTipEs: 'Busca "Pisco Puro" o "Pisco Acholado" de la región de Ica.'
      },
      {
        name: 'Peruvian Coffee',
        nameEs: 'Café Peruano',
        priceRange: '$8-$25',
        description: 'High-altitude coffee with complex flavors. Often organic.',
        descriptionEs: 'Café de altura con sabores complejos. A menudo orgánico.',
        whereToBuy: 'Specialty coffee shops, supermarkets',
        whereToBuyEs: 'Cafeterías de especialidad, supermercados',
        kidFriendly: false,
        authenticityTip: 'Regions like Chanchamayo and Cajamarca produce excellent beans.',
        authenticityTipEs: 'Regiones como Chanchamayo y Cajamarca producen excelentes granos.'
      },
      {
        name: 'Lucuma Powder',
        nameEs: 'Polvo de Lúcuma',
        priceRange: '$5-$15',
        description: 'Superfood powder from Peru\'s beloved fruit. Great in smoothies.',
        descriptionEs: 'Polvo superfood de la fruta favorita de Perú. Ideal en batidos.',
        whereToBuy: 'Supermarkets, health food stores',
        whereToBuyEs: 'Supermercados, tiendas naturistas',
        kidFriendly: true,
        authenticityTip: 'Choose organic brands for best quality.',
        authenticityTipEs: 'Elige marcas orgánicas para mejor calidad.'
      }
    ]
  },
  {
    id: 'kids',
    name: 'Perfect for Kids',
    nameEs: 'Perfecto para Niños',
    icon: <Baby className="h-6 w-6" />,
    description: 'Souvenirs that children will treasure and play with.',
    descriptionEs: 'Souvenirs que los niños atesorarán y con los que jugarán.',
    items: [
      {
        name: 'Finger Puppets',
        nameEs: 'Títeres de Dedo',
        priceRange: '$1-$5 each',
        description: 'Adorable llama, alpaca, and condor puppets. Kids can collect them all!',
        descriptionEs: 'Adorables títeres de llama, alpaca y cóndor. ¡Los niños pueden coleccionarlos!',
        whereToBuy: 'Any market, street vendors',
        whereToBuyEs: 'Cualquier mercado, vendedores ambulantes',
        kidFriendly: true,
        authenticityTip: 'Look for hand-knit ones for better quality.',
        authenticityTipEs: 'Busca los tejidos a mano para mejor calidad.'
      },
      {
        name: 'Pan Flutes (Zampoña)',
        nameEs: 'Zampoña',
        priceRange: '$3-$20',
        description: 'Traditional Andean instrument. Fun for kids to learn!',
        descriptionEs: 'Instrumento andino tradicional. ¡Divertido para que los niños aprendan!',
        whereToBuy: 'Markets, music shops',
        whereToBuyEs: 'Mercados, tiendas de música',
        kidFriendly: true,
        authenticityTip: 'Higher quality ones produce better sound. Test before buying.',
        authenticityTipEs: 'Los de mayor calidad producen mejor sonido. Prueba antes de comprar.'
      },
      {
        name: 'Stuffed Alpacas',
        nameEs: 'Alpacas de Peluche',
        priceRange: '$5-$30',
        description: 'Cuddly alpaca toys made from real alpaca fur. Super soft!',
        descriptionEs: 'Juguetes de alpaca hechos con piel real de alpaca. ¡Super suaves!',
        whereToBuy: 'Everywhere - markets, shops, airports',
        whereToBuyEs: 'En todas partes - mercados, tiendas, aeropuertos',
        kidFriendly: true,
        authenticityTip: 'Real alpaca fur is silky smooth. Synthetic versions are coarser.',
        authenticityTipEs: 'La piel de alpaca real es sedosa. Las versiones sintéticas son más ásperas.'
      },
      {
        name: 'Colorful Bags (Chuspas)',
        nameEs: 'Bolsas Coloridas (Chuspas)',
        priceRange: '$5-$15',
        description: 'Small woven bags perfect for kids to carry their treasures.',
        descriptionEs: 'Pequeñas bolsas tejidas perfectas para que los niños lleven sus tesoros.',
        whereToBuy: 'Any highland market',
        whereToBuyEs: 'Cualquier mercado de la sierra',
        kidFriendly: true,
        authenticityTip: 'Hand-woven ones have tighter weave and natural dye variations.',
        authenticityTipEs: 'Los tejidos a mano tienen tejido más apretado y variaciones de tinte natural.'
      }
    ]
  }
];

const shoppingLocations: ShoppingLocation[] = [
  {
    name: 'Pisac Market',
    nameEs: 'Mercado de Pisac',
    city: 'Sacred Valley',
    type: 'market',
    description: 'Famous Sunday market with hundreds of vendors. One of Peru\'s best for textiles.',
    descriptionEs: 'Famoso mercado dominical con cientos de vendedores. Uno de los mejores de Perú para textiles.',
    bestFor: ['Textiles', 'Ceramics', 'Jewelry', 'Produce'],
    bestForEs: ['Textiles', 'Cerámica', 'Joyería', 'Productos'],
    bargaining: true,
    kidFriendly: true
  },
  {
    name: 'San Pedro Market',
    nameEs: 'Mercado de San Pedro',
    city: 'Cusco',
    type: 'market',
    description: 'Cusco\'s main market. Great for food, textiles, and experiencing local life.',
    descriptionEs: 'El mercado principal de Cusco. Ideal para comida, textiles y experimentar la vida local.',
    bestFor: ['Food', 'Juice', 'Textiles', 'Daily goods'],
    bestForEs: ['Comida', 'Jugos', 'Textiles', 'Artículos diarios'],
    bargaining: true,
    kidFriendly: true
  },
  {
    name: 'Chinchero Textile Market',
    nameEs: 'Mercado Textil de Chinchero',
    city: 'Sacred Valley',
    type: 'artisan',
    description: 'Watch weavers demonstrate traditional techniques. Best for authentic textiles.',
    descriptionEs: 'Observa tejedoras demostrar técnicas tradicionales. Lo mejor para textiles auténticos.',
    bestFor: ['Hand-woven textiles', 'Blankets', 'Natural dyes'],
    bestForEs: ['Textiles tejidos a mano', 'Mantas', 'Tintes naturales'],
    bargaining: false,
    kidFriendly: true
  },
  {
    name: 'Indian Market (Mercado Indio)',
    nameEs: 'Mercado Indio',
    city: 'Lima',
    type: 'market',
    description: 'Located in Miraflores. Great selection of crafts from across Peru.',
    descriptionEs: 'Ubicado en Miraflores. Gran selección de artesanías de todo el Perú.',
    bestFor: ['Souvenirs', 'Crafts', 'Jewelry', 'Gifts'],
    bestForEs: ['Souvenirs', 'Artesanías', 'Joyería', 'Regalos'],
    bargaining: true,
    kidFriendly: true
  },
  {
    name: 'Larcomar',
    nameEs: 'Larcomar',
    city: 'Lima',
    type: 'mall',
    description: 'Upscale mall with ocean views. Fixed prices but quality guaranteed.',
    descriptionEs: 'Centro comercial de lujo con vistas al mar. Precios fijos pero calidad garantizada.',
    bestFor: ['Alpaca boutiques', 'Silver jewelry', 'High-end crafts'],
    bestForEs: ['Boutiques de alpaca', 'Joyería de plata', 'Artesanías de alta gama'],
    bargaining: false,
    kidFriendly: true
  },
  {
    name: 'San Blas',
    nameEs: 'San Blas',
    city: 'Cusco',
    type: 'artisan',
    description: 'Artisan neighborhood with workshops and galleries. Meet the makers!',
    descriptionEs: 'Barrio artesanal con talleres y galerías. ¡Conoce a los artesanos!',
    bestFor: ['Art', 'Unique crafts', 'Ceramics', 'Textiles'],
    bestForEs: ['Arte', 'Artesanías únicas', 'Cerámica', 'Textiles'],
    bargaining: false,
    kidFriendly: true
  }
];

const bargainingTips = {
  en: [
    'Start at 50-60% of the asking price',
    'Be friendly and smile - bargaining should be fun',
    'Walk away if the price isn\'t right - they may call you back',
    'Buy multiple items for better discounts',
    'Have small bills ready - claiming "no change" is a tactic',
    'Compare prices at several stalls before buying',
    'Never bargain unless you\'re genuinely interested',
    'Morning shopping often gets better deals'
  ],
  es: [
    'Comienza con el 50-60% del precio pedido',
    'Sé amable y sonríe - el regateo debe ser divertido',
    'Aléjate si el precio no es correcto - pueden llamarte de vuelta',
    'Compra múltiples artículos para mejores descuentos',
    'Ten billetes pequeños listos - decir "no tengo cambio" es una táctica',
    'Compara precios en varios puestos antes de comprar',
    'Nunca regatees a menos que estés genuinamente interesado',
    'Las compras en la mañana a menudo obtienen mejores ofertas'
  ]
};

export default function ShoppingPage() {
  const { locale } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>('textiles');

  const selectedCategory = souvenirCategories.find(c => c.id === activeCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'market': return 'bg-green-100 text-green-800';
      case 'mall': return 'bg-blue-100 text-blue-800';
      case 'artisan': return 'bg-purple-100 text-purple-800';
      case 'street': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    if (locale === 'es') {
      switch (type) {
        case 'market': return 'Mercado';
        case 'mall': return 'Centro Comercial';
        case 'artisan': return 'Artesanal';
        case 'street': return 'Callejero';
        default: return type;
      }
    }
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-peru-sand/30 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-gold to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8" />
              <span className="text-white/90 font-semibold">
                {locale === 'es' ? 'Guía de Compras' : 'Shopping Guide'}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              {locale === 'es'
                ? 'Souvenirs y Compras en Perú'
                : 'Souvenirs & Shopping in Peru'}
            </h1>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Qué comprar, dónde encontrarlo, y cómo asegurar autenticidad. Guía completa para familias.'
                : 'What to buy, where to find it, and how to ensure authenticity. Complete guide for families.'}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container-peru">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center">
              <DollarSign className="h-8 w-8 text-peru-gold mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Regateo OK' : 'Bargaining OK'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'En mercados' : 'At markets'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 text-peru-terracotta mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Apoya Artesanos' : 'Support Artisans'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Compra directo' : 'Buy direct'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Check className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Verifica Calidad' : 'Check Quality'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Antes de pagar' : 'Before paying'}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Gift className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">
                {locale === 'es' ? 'Para Niños' : 'Kid Picks'}
              </span>
              <span className="text-xs text-gray-500">
                {locale === 'es' ? 'Títeres, peluches' : 'Puppets, plushies'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Souvenir Categories */}
      <section className="py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Qué Comprar' : 'What to Buy'}
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {souvenirCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  activeCategory === cat.id
                    ? 'bg-peru-terracotta text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-peru-sand shadow'
                }`}
              >
                {cat.icon}
                <span className="font-medium">
                  {locale === 'es' ? cat.nameEs : cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Selected Category */}
          {selectedCategory && (
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-gray-600 mb-8">
                {locale === 'es' ? selectedCategory.descriptionEs : selectedCategory.description}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCategory.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-bold text-peru-earth text-lg">
                          {locale === 'es' ? item.nameEs : item.name}
                        </h3>
                        {item.kidFriendly && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center">
                            <Baby className="h-3 w-3 mr-1" />
                            {locale === 'es' ? 'Niños' : 'Kids'}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-600 mb-3">
                        {locale === 'es' ? item.descriptionEs : item.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-peru-gold mr-2" />
                          <span className="text-gray-700">{item.priceRange}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-peru-terracotta mr-2" />
                          <span className="text-gray-700">
                            {locale === 'es' ? item.whereToBuyEs : item.whereToBuy}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2">
                          <strong>{locale === 'es' ? 'Autenticidad:' : 'Authenticity:'}</strong>{' '}
                          {locale === 'es' ? item.authenticityTipEs : item.authenticityTip}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Where to Shop */}
      <section className="py-16 bg-peru-sand/30">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
            {locale === 'es' ? 'Dónde Comprar' : 'Where to Shop'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {shoppingLocations.map((location, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-peru-earth text-lg">
                      {locale === 'es' ? location.nameEs : location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.city}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(location.type)}`}>
                    {getTypeLabel(location.type)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">
                  {locale === 'es' ? location.descriptionEs : location.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">
                    {locale === 'es' ? 'Mejor para:' : 'Best for:'}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {(locale === 'es' ? location.bestForEs : location.bestFor).map((item, i) => (
                      <span key={i} className="text-xs bg-peru-sand/50 text-peru-earth px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs">
                  <span className={location.bargaining ? 'text-green-600' : 'text-gray-400'}>
                    {location.bargaining
                      ? (locale === 'es' ? '✓ Regateo OK' : '✓ Bargaining OK')
                      : (locale === 'es' ? '✕ Precio fijo' : '✕ Fixed prices')}
                  </span>
                  <span className={location.kidFriendly ? 'text-green-600' : 'text-gray-400'}>
                    {location.kidFriendly
                      ? (locale === 'es' ? '✓ Apto niños' : '✓ Kid-friendly')
                      : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bargaining Tips */}
      <section className="py-16">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-peru-earth mb-8 text-center">
              {locale === 'es' ? 'Consejos para Regatear' : 'Bargaining Tips'}
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {(locale === 'es' ? bargainingTips.es : bargainingTips.en).map((tip, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-peru-gold mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-amber-50">
        <div className="container-peru">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-amber-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-peru-earth mb-4">
                    {locale === 'es' ? 'Cuidado con las Falsificaciones' : 'Beware of Counterfeits'}
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      locale === 'es'
                        ? '"Baby alpaca" muy barato probablemente es acrílico. La alpaca real cuesta más.'
                        : 'Very cheap "baby alpaca" is likely acrylic. Real alpaca costs more.',
                      locale === 'es'
                        ? 'La joyería de "plata" sin sellos probablemente no es plata real.'
                        : '"Silver" jewelry without stamps is probably not real silver.',
                      locale === 'es'
                        ? 'Las artesanías "antiguas" son casi siempre reproducciones - y exportar antigüedades reales es ilegal.'
                        : '"Antique" artifacts are almost always reproductions - and exporting real antiquities is illegal.',
                      locale === 'es'
                        ? 'Si un precio parece demasiado bueno para ser verdad, probablemente lo es.'
                        : 'If a price seems too good to be true, it probably is.'
                    ].map((warning, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {warning}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Shopping Tips */}
      <section className="py-16 bg-peru-earth text-white">
        <div className="container-peru">
          <div className="max-w-4xl mx-auto text-center">
            <Baby className="h-12 w-12 mx-auto mb-4 text-peru-gold" />
            <h2 className="text-3xl font-display font-bold mb-6">
              {locale === 'es' ? 'Consejos de Compras para Familias' : 'Family Shopping Tips'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Involucra a los Niños' : 'Involve the Kids'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Dales un presupuesto pequeño para gastar' : 'Give them a small budget to spend'}</li>
                  <li>• {locale === 'es' ? 'Déjalos elegir souvenirs para amigos' : 'Let them choose souvenirs for friends'}</li>
                  <li>• {locale === 'es' ? 'Los títeres de dedo son geniales para coleccionar' : 'Finger puppets are great to collect'}</li>
                  <li>• {locale === 'es' ? 'Enséñales sobre las artesanías que compran' : 'Teach them about the crafts they\'re buying'}</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-peru-gold">
                  {locale === 'es' ? 'Consejos Prácticos' : 'Practical Tips'}
                </h3>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li>• {locale === 'es' ? 'Compra temprano en la mañana con niños' : 'Shop early morning with kids'}</li>
                  <li>• {locale === 'es' ? 'Trae bolsas/mochilas para llevar compras' : 'Bring bags/backpacks for carrying purchases'}</li>
                  <li>• {locale === 'es' ? 'Los mercados pueden ser abrumadores - toma descansos' : 'Markets can be overwhelming - take breaks'}</li>
                  <li>• {locale === 'es' ? 'Guarda espacio en tu maleta para souvenirs' : 'Save luggage space for souvenirs'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
