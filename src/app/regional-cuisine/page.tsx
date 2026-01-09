'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import {
  UtensilsCrossed,
  Fish,
  Mountain,
  TreePine,
  MapPin,
  Star,
  Baby,
  AlertTriangle,
  ChefHat,
  Flame,
  Leaf,
  Heart
} from 'lucide-react';

interface Dish {
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  ingredients: string[];
  ingredientsEs: string[];
  spiceLevel: 'none' | 'mild' | 'medium' | 'hot';
  kidFriendly: boolean;
  vegetarianOption: boolean;
  mustTry: boolean;
  whereToTry: string;
  whereToTryEs: string;
}

interface Region {
  id: string;
  name: string;
  nameEs: string;
  icon: React.ElementType;
  description: string;
  descriptionEs: string;
  signature: string;
  signatureEs: string;
  dishes: Dish[];
  restaurantTips: string[];
  restaurantTipsEs: string[];
}

const regions: Region[] = [
  {
    id: 'coast',
    name: 'Coastal Cuisine',
    nameEs: 'Cocina Costeña',
    icon: Fish,
    description: 'Peru\'s coastal cuisine is world-famous for its seafood. Lima is the culinary capital, where you\'ll find everything from humble cevicherías to world-renowned restaurants.',
    descriptionEs: 'La cocina costeña de Perú es mundialmente famosa por sus mariscos. Lima es la capital culinaria, donde encontrarás desde humildes cevicherías hasta restaurantes de renombre mundial.',
    signature: 'Ceviche - raw fish "cooked" in lime juice',
    signatureEs: 'Ceviche - pescado crudo "cocinado" en jugo de limón',
    dishes: [
      {
        name: 'Ceviche',
        nameEs: 'Ceviche',
        description: 'Fresh raw fish marinated in lime juice, onions, and chili peppers. Peru\'s national dish and absolute must-try!',
        descriptionEs: '¡Pescado crudo fresco marinado en jugo de limón, cebollas y ajíes. El plato nacional de Perú y absolutamente imprescindible!',
        ingredients: ['Fresh white fish', 'Lime juice', 'Red onion', 'Cilantro', 'Ají amarillo'],
        ingredientsEs: ['Pescado blanco fresco', 'Jugo de limón', 'Cebolla roja', 'Cilantro', 'Ají amarillo'],
        spiceLevel: 'mild',
        kidFriendly: false,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Any cevichería at lunch (never eat ceviche at night!)',
        whereToTryEs: 'Cualquier cevichería al almuerzo (¡nunca comas ceviche de noche!)'
      },
      {
        name: 'Arroz con Mariscos',
        nameEs: 'Arroz con Mariscos',
        description: 'Peru\'s answer to paella - flavorful rice loaded with shrimp, squid, mussels, and other seafood.',
        descriptionEs: 'La respuesta de Perú a la paella - arroz sabroso cargado de camarones, calamares, mejillones y otros mariscos.',
        ingredients: ['Rice', 'Mixed seafood', 'Ají panca', 'Peas', 'Bell peppers'],
        ingredientsEs: ['Arroz', 'Mariscos mixtos', 'Ají panca', 'Arvejas', 'Pimientos'],
        spiceLevel: 'mild',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'La Mar, Punto Azul, or any seaside restaurant',
        whereToTryEs: 'La Mar, Punto Azul, o cualquier restaurante costero'
      },
      {
        name: 'Jalea',
        nameEs: 'Jalea',
        description: 'Crispy fried mixed seafood platter with yuca and salsa criolla. A sharing favorite!',
        descriptionEs: '¡Fuente de mariscos mixtos fritos crujientes con yuca y salsa criolla. Un favorito para compartir!',
        ingredients: ['Fried fish', 'Fried calamari', 'Fried shrimp', 'Yuca', 'Salsa criolla'],
        ingredientsEs: ['Pescado frito', 'Calamares fritos', 'Camarones fritos', 'Yuca', 'Salsa criolla'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: false,
        whereToTry: 'Traditional cevicherías and coastal restaurants',
        whereToTryEs: 'Cevicherías tradicionales y restaurantes costeros'
      },
      {
        name: 'Causa Limeña',
        nameEs: 'Causa Limeña',
        description: 'Layered mashed potato cake with avocado and your choice of chicken, tuna, or vegetables. Beautifully presented!',
        descriptionEs: '¡Pastel de puré de papa en capas con palta y tu elección de pollo, atún o vegetales. Bellamente presentado!',
        ingredients: ['Yellow potato', 'Lime', 'Ají amarillo', 'Avocado', 'Chicken or tuna'],
        ingredientsEs: ['Papa amarilla', 'Limón', 'Ají amarillo', 'Palta', 'Pollo o atún'],
        spiceLevel: 'mild',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: true,
        whereToTry: 'Any Peruvian restaurant - a classic appetizer',
        whereToTryEs: 'Cualquier restaurante peruano - un clásico aperitivo'
      },
      {
        name: 'Chicharrón de Pescado',
        nameEs: 'Chicharrón de Pescado',
        description: 'Bite-sized pieces of battered and fried fish. A kid-friendly option that\'s always a hit!',
        descriptionEs: '¡Trozos de pescado empanizado y frito. Una opción apta para niños que siempre es un éxito!',
        ingredients: ['White fish', 'Flour batter', 'Salt', 'Garlic'],
        ingredientsEs: ['Pescado blanco', 'Masa de harina', 'Sal', 'Ajo'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: false,
        whereToTry: 'Any cevichería - great alternative for kids',
        whereToTryEs: 'Cualquier cevichería - gran alternativa para niños'
      },
      {
        name: 'Tiradito',
        nameEs: 'Tiradito',
        description: 'Thinly sliced raw fish in a spicy/citrus sauce - like sashimi meets ceviche.',
        descriptionEs: 'Pescado crudo cortado finamente en salsa picante/cítrica - como sashimi con ceviche.',
        ingredients: ['Fresh fish', 'Ají amarillo sauce', 'Lime', 'Garlic'],
        ingredientsEs: ['Pescado fresco', 'Salsa de ají amarillo', 'Limón', 'Ajo'],
        spiceLevel: 'medium',
        kidFriendly: false,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Upscale Nikkei restaurants like Maido',
        whereToTryEs: 'Restaurantes Nikkei de alta gama como Maido'
      }
    ],
    restaurantTips: [
      'Eat ceviche only for lunch - it should be made fresh daily',
      'Look for busy cevicherías - high turnover means fresh fish',
      'Don\'t be afraid of simple, local spots',
      'Kids can try chicharrón de pescado or arroz con mariscos',
      'Leche de tigre (the ceviche marinade) is a local hangover cure!'
    ],
    restaurantTipsEs: [
      'Come ceviche solo al almuerzo - debe hacerse fresco cada día',
      'Busca cevicherías concurridas - alta rotación significa pescado fresco',
      'No temas a los lugares locales simples',
      'Los niños pueden probar chicharrón de pescado o arroz con mariscos',
      '¡La leche de tigre (el marinado del ceviche) es la cura local para la resaca!'
    ]
  },
  {
    id: 'highlands',
    name: 'Andean Highland Cuisine',
    nameEs: 'Cocina Andina',
    icon: Mountain,
    description: 'Hearty, warming dishes perfect for high altitude. Quinoa, potatoes, and corn are staples, along with alpaca, guinea pig (cuy), and other mountain proteins.',
    descriptionEs: 'Platos sustanciosos y reconfortantes perfectos para la altura. Quinua, papas y maíz son alimentos básicos, junto con alpaca, cuy y otras proteínas de montaña.',
    signature: 'Cuy (guinea pig) - traditional Andean delicacy',
    signatureEs: 'Cuy - delicadeza tradicional andina',
    dishes: [
      {
        name: 'Lomo Saltado',
        nameEs: 'Lomo Saltado',
        description: 'Stir-fried beef with onions, tomatoes, and French fries served with rice. A Peruvian-Chinese fusion classic!',
        descriptionEs: '¡Carne de res salteada con cebollas, tomates y papas fritas servido con arroz. Un clásico de la fusión peruano-china!',
        ingredients: ['Beef tenderloin', 'Onions', 'Tomatoes', 'Soy sauce', 'French fries', 'Rice'],
        ingredientsEs: ['Lomo de res', 'Cebollas', 'Tomates', 'Salsa de soya', 'Papas fritas', 'Arroz'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Everywhere! But try Chicha in Cusco for a gourmet version',
        whereToTryEs: '¡En todos lados! Pero prueba Chicha en Cusco para una versión gourmet'
      },
      {
        name: 'Cuy (Guinea Pig)',
        nameEs: 'Cuy (Conejillo de Indias)',
        description: 'Traditional Andean delicacy - roasted whole guinea pig. Brave families should try it at least once!',
        descriptionEs: 'Delicadeza tradicional andina - cuy asado entero. ¡Las familias valientes deberían probarlo al menos una vez!',
        ingredients: ['Guinea pig', 'Garlic', 'Herbs', 'Potatoes'],
        ingredientsEs: ['Cuy', 'Ajo', 'Hierbas', 'Papas'],
        spiceLevel: 'none',
        kidFriendly: false,
        vegetarianOption: false,
        mustTry: false,
        whereToTry: 'Cusqueña restaurants like Pachapapa or Kusikuy',
        whereToTryEs: 'Restaurantes cusqueños como Pachapapa o Kusikuy'
      },
      {
        name: 'Alpaca Steak',
        nameEs: 'Filete de Alpaca',
        description: 'Lean, tender meat similar to beef but with unique flavor. Very high in protein, low in fat!',
        descriptionEs: '¡Carne magra y tierna similar a la res pero con sabor único. Muy alta en proteína, baja en grasa!',
        ingredients: ['Alpaca meat', 'Andean herbs', 'Potatoes'],
        ingredientsEs: ['Carne de alpaca', 'Hierbas andinas', 'Papas'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Uchu Peruvian Steakhouse, Chicha, or MAP Café in Cusco',
        whereToTryEs: 'Uchu Peruvian Steakhouse, Chicha, o MAP Café en Cusco'
      },
      {
        name: 'Rocoto Relleno',
        nameEs: 'Rocoto Relleno',
        description: 'Stuffed rocoto pepper (very spicy!) with meat, cheese, and eggs. An Arequipa specialty.',
        descriptionEs: '¡Rocoto relleno (muy picante!) con carne, queso y huevos. Una especialidad de Arequipa.',
        ingredients: ['Rocoto pepper', 'Ground beef', 'Cheese', 'Eggs', 'Potatoes'],
        ingredientsEs: ['Rocoto', 'Carne molida', 'Queso', 'Huevos', 'Papas'],
        spiceLevel: 'hot',
        kidFriendly: false,
        vegetarianOption: false,
        mustTry: false,
        whereToTry: 'Arequipa restaurants - Zig Zag is famous',
        whereToTryEs: 'Restaurantes de Arequipa - Zig Zag es famoso'
      },
      {
        name: 'Quinoa Soup',
        nameEs: 'Sopa de Quinua',
        description: 'Hearty soup made with quinoa, vegetables, and sometimes cheese. Perfect for cold highland evenings.',
        descriptionEs: 'Sopa sustanciosa hecha con quinua, vegetales y a veces queso. Perfecta para noches frías de las tierras altas.',
        ingredients: ['Quinoa', 'Vegetables', 'Cheese', 'Herbs'],
        ingredientsEs: ['Quinua', 'Vegetales', 'Queso', 'Hierbas'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: false,
        whereToTry: 'Any traditional restaurant in Cusco or Puno',
        whereToTryEs: 'Cualquier restaurante tradicional en Cusco o Puno'
      },
      {
        name: 'Choclo con Queso',
        nameEs: 'Choclo con Queso',
        description: 'Giant Peruvian corn on the cob served with fresh local cheese. Simple but delicious!',
        descriptionEs: '¡Choclo gigante peruano servido con queso fresco local. Simple pero delicioso!',
        ingredients: ['Giant Peruvian corn', 'Fresh cheese'],
        ingredientsEs: ['Choclo peruano gigante', 'Queso fresco'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: true,
        whereToTry: 'Street vendors and markets throughout the highlands',
        whereToTryEs: 'Vendedores ambulantes y mercados en las tierras altas'
      },
      {
        name: 'Papa a la Huancaína',
        nameEs: 'Papa a la Huancaína',
        description: 'Boiled potatoes covered in a creamy, mildly spicy yellow cheese sauce. A beloved appetizer.',
        descriptionEs: 'Papas hervidas cubiertas con una salsa cremosa de queso amarillo ligeramente picante. Un aperitivo muy querido.',
        ingredients: ['Potatoes', 'Ají amarillo', 'Cheese', 'Evaporated milk', 'Crackers'],
        ingredientsEs: ['Papas', 'Ají amarillo', 'Queso', 'Leche evaporada', 'Galletas'],
        spiceLevel: 'mild',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: true,
        whereToTry: 'Available at most Peruvian restaurants nationwide',
        whereToTryEs: 'Disponible en la mayoría de restaurantes peruanos a nivel nacional'
      }
    ],
    restaurantTips: [
      'Portions are huge in the highlands - consider sharing',
      'Try the set lunch menu (menú del día) for great value',
      'Altitude may affect appetite - don\'t over-order on first day',
      'Coca tea with meals aids digestion at altitude',
      'Most dishes can be made less spicy on request'
    ],
    restaurantTipsEs: [
      'Las porciones son enormes en las tierras altas - considera compartir',
      'Prueba el menú del día para gran valor',
      'La altitud puede afectar el apetito - no pidas demasiado el primer día',
      'El té de coca con las comidas ayuda la digestión en altura',
      'La mayoría de los platos pueden hacerse menos picantes a pedido'
    ]
  },
  {
    id: 'amazon',
    name: 'Amazonian Cuisine',
    nameEs: 'Cocina Amazónica',
    icon: TreePine,
    description: 'Unique ingredients from the rainforest including exotic fish, tropical fruits, and unusual vegetables. An adventure for the taste buds!',
    descriptionEs: '¡Ingredientes únicos de la selva incluyendo peces exóticos, frutas tropicales y vegetales inusuales. Una aventura para el paladar!',
    signature: 'Juane - rice and chicken wrapped in bijao leaves',
    signatureEs: 'Juane - arroz y pollo envuelto en hojas de bijao',
    dishes: [
      {
        name: 'Juane',
        nameEs: 'Juane',
        description: 'Rice, chicken, eggs, and olives wrapped in bijao leaves and steamed. The jungle\'s answer to tamales!',
        descriptionEs: '¡Arroz, pollo, huevos y aceitunas envueltos en hojas de bijao y cocinados al vapor. La respuesta de la selva a los tamales!',
        ingredients: ['Rice', 'Chicken', 'Eggs', 'Olives', 'Bijao leaves'],
        ingredientsEs: ['Arroz', 'Pollo', 'Huevos', 'Aceitunas', 'Hojas de bijao'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Iquitos restaurants, especially during San Juan festival',
        whereToTryEs: 'Restaurantes de Iquitos, especialmente durante la fiesta de San Juan'
      },
      {
        name: 'Tacacho con Cecina',
        nameEs: 'Tacacho con Cecina',
        description: 'Mashed and grilled green plantains served with dried, smoked pork. Classic jungle breakfast!',
        descriptionEs: '¡Plátanos verdes machacados y asados servidos con cerdo seco ahumado. Clásico desayuno de la selva!',
        ingredients: ['Green plantains', 'Pork fat', 'Cecina (dried pork)', 'Chorizo'],
        ingredientsEs: ['Plátanos verdes', 'Grasa de cerdo', 'Cecina', 'Chorizo'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Breakfast at jungle lodges or Iquitos markets',
        whereToTryEs: 'Desayuno en lodges de selva o mercados de Iquitos'
      },
      {
        name: 'Paiche',
        nameEs: 'Paiche',
        description: 'Giant Amazonian fish (can grow over 2 meters!) with firm, meaty flesh. Sustainably farmed.',
        descriptionEs: '¡Pez amazónico gigante (puede crecer más de 2 metros!) con carne firme. Criado de manera sostenible.',
        ingredients: ['Paiche fish', 'Local herbs', 'Coconut milk'],
        ingredientsEs: ['Pescado paiche', 'Hierbas locales', 'Leche de coco'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: true,
        whereToTry: 'Jungle lodges and Iquitos restaurants',
        whereToTryEs: 'Lodges de selva y restaurantes de Iquitos'
      },
      {
        name: 'Inchicapi',
        nameEs: 'Inchicapi',
        description: 'Thick soup made with chicken, peanuts, cilantro, and yuca. Hearty jungle comfort food!',
        descriptionEs: '¡Sopa espesa hecha con pollo, maní, cilantro y yuca. Comida reconfortante de la selva!',
        ingredients: ['Chicken', 'Peanuts', 'Cilantro', 'Yuca', 'Corn'],
        ingredientsEs: ['Pollo', 'Maní', 'Cilantro', 'Yuca', 'Maíz'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: false,
        mustTry: false,
        whereToTry: 'Traditional restaurants in Iquitos and jungle lodges',
        whereToTryEs: 'Restaurantes tradicionales en Iquitos y lodges de selva'
      },
      {
        name: 'Chonta Salad',
        nameEs: 'Ensalada de Chonta',
        description: 'Salad made from heart of palm (chonta) with onion and lime. Refreshing and unique!',
        descriptionEs: '¡Ensalada hecha de palmito (chonta) con cebolla y limón. Refrescante y única!',
        ingredients: ['Heart of palm', 'Onion', 'Lime', 'Cilantro'],
        ingredientsEs: ['Palmito', 'Cebolla', 'Limón', 'Cilantro'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: false,
        whereToTry: 'Available at most jungle restaurants',
        whereToTryEs: 'Disponible en la mayoría de restaurantes de la selva'
      },
      {
        name: 'Camu Camu Juice',
        nameEs: 'Jugo de Camu Camu',
        description: 'Juice from the superfruit camu camu - more vitamin C than any other fruit! Tart and refreshing.',
        descriptionEs: '¡Jugo de la superfruta camu camu - más vitamina C que cualquier otra fruta! Ácido y refrescante.',
        ingredients: ['Camu camu fruit', 'Sugar', 'Water'],
        ingredientsEs: ['Fruta camu camu', 'Azúcar', 'Agua'],
        spiceLevel: 'none',
        kidFriendly: true,
        vegetarianOption: true,
        mustTry: true,
        whereToTry: 'Juice stands and restaurants throughout the jungle',
        whereToTryEs: 'Puestos de jugos y restaurantes en toda la selva'
      }
    ],
    restaurantTips: [
      'Jungle lodges serve amazing fresh food - usually included in package',
      'Try the exotic fruit juices - aguaje, cocona, camu camu',
      'Fish is incredibly fresh - caught that day',
      'Portions tend to be generous',
      'Local beer and masato (fermented yuca drink) are traditional'
    ],
    restaurantTipsEs: [
      'Los lodges de selva sirven comida fresca increíble - usualmente incluida',
      'Prueba los jugos de frutas exóticas - aguaje, cocona, camu camu',
      'El pescado es increíblemente fresco - pescado ese día',
      'Las porciones tienden a ser generosas',
      'La cerveza local y el masato (bebida de yuca fermentada) son tradicionales'
    ]
  }
];

const kidFriendlyDishes = [
  { name: 'Arroz con Pollo', nameEs: 'Arroz con Pollo', description: 'Green rice with chicken - universally loved', descriptionEs: 'Arroz verde con pollo - universalmente amado' },
  { name: 'Ají de Gallina', nameEs: 'Ají de Gallina', description: 'Creamy chicken in mild yellow sauce', descriptionEs: 'Pollo cremoso en salsa amarilla suave' },
  { name: 'Chicharrón de Pescado', nameEs: 'Chicharrón de Pescado', description: 'Fried fish bites - like fish sticks!', descriptionEs: '¡Bocados de pescado frito - como palitos de pescado!' },
  { name: 'Chaufa', nameEs: 'Chaufa', description: 'Peruvian fried rice - always a hit', descriptionEs: 'Arroz frito peruano - siempre un éxito' },
  { name: 'Pollo a la Brasa', nameEs: 'Pollo a la Brasa', description: 'Rotisserie chicken - Peru\'s favorite!', descriptionEs: '¡Pollo a la brasa - el favorito de Perú!' },
  { name: 'Anticuchos', nameEs: 'Anticuchos', description: 'Beef heart skewers - don\'t tell them what it is!', descriptionEs: '¡Brochetas de corazón de res - no les digas qué es!' },
  { name: 'Picarones', nameEs: 'Picarones', description: 'Sweet potato donuts with syrup', descriptionEs: 'Donas de camote con miel' },
  { name: 'Suspiro a la Limeña', nameEs: 'Suspiro a la Limeña', description: 'Sweet dulce de leche dessert', descriptionEs: 'Postre dulce de dulce de leche' }
];

export default function RegionalCuisinePage() {
  const { locale } = useI18n();
  const [selectedRegion, setSelectedRegion] = useState<string>('coast');

  const activeRegion = regions.find(r => r.id === selectedRegion);

  const getSpiceBadge = (level: string) => {
    switch (level) {
      case 'none': return { label: locale === 'es' ? 'Sin picante' : 'No spice', color: 'bg-green-100 text-green-700', icon: '🌱' };
      case 'mild': return { label: locale === 'es' ? 'Suave' : 'Mild', color: 'bg-yellow-100 text-yellow-700', icon: '🌶️' };
      case 'medium': return { label: locale === 'es' ? 'Medio' : 'Medium', color: 'bg-orange-100 text-orange-700', icon: '🌶️🌶️' };
      case 'hot': return { label: locale === 'es' ? 'Picante' : 'Hot', color: 'bg-red-100 text-red-700', icon: '🌶️🌶️🌶️' };
      default: return { label: '', color: '', icon: '' };
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-peru-sand/20">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-peru-earth to-peru-terracotta text-white">
        <div className="container-peru">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="h-10 w-10" />
              <h1 className="text-4xl lg:text-5xl font-display font-bold">
                {locale === 'es' ? 'Cocinas Regionales de Perú' : 'Regional Cuisines of Peru'}
              </h1>
            </div>
            <p className="text-xl text-white/90">
              {locale === 'es'
                ? 'Descubre los sabores únicos de la costa, sierra y selva de Perú - guía de platos regionales y consejos para familias.'
                : 'Discover the unique flavors of Peru\'s coast, highlands, and jungle - regional dish guide and family tips.'}
            </p>
          </div>
        </div>
      </section>

      {/* Region Selector */}
      <section className="py-8 bg-white border-b sticky top-0 z-40">
        <div className="container-peru">
          <div className="flex flex-wrap justify-center gap-4">
            {regions.map((region) => {
              const Icon = region.icon;
              return (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedRegion === region.id
                      ? 'bg-peru-terracotta text-white shadow-lg scale-105'
                      : 'bg-peru-sand/30 text-gray-700 hover:bg-peru-sand'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{locale === 'es' ? region.nameEs : region.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Region Content */}
      {activeRegion && (
        <section className="py-12 lg:py-16">
          <div className="container-peru">
            {/* Region Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                {(() => {
                  const Icon = activeRegion.icon;
                  return <Icon className="h-12 w-12 text-peru-terracotta" />;
                })()}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-peru-earth">
                    {locale === 'es' ? activeRegion.nameEs : activeRegion.name}
                  </h2>
                  <p className="text-peru-gold font-medium">
                    <Star className="h-4 w-4 inline mr-1" />
                    {locale === 'es' ? activeRegion.signatureEs : activeRegion.signature}
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                {locale === 'es' ? activeRegion.descriptionEs : activeRegion.description}
              </p>
            </div>

            {/* Dishes Grid */}
            <h3 className="text-2xl font-bold text-peru-earth mb-6 text-center">
              {locale === 'es' ? 'Platos Típicos' : 'Signature Dishes'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {activeRegion.dishes.map((dish, idx) => {
                const spiceBadge = getSpiceBadge(dish.spiceLevel);
                return (
                  <div key={idx} className={`bg-white rounded-xl shadow-md overflow-hidden ${dish.mustTry ? 'ring-2 ring-peru-gold' : ''}`}>
                    {dish.mustTry && (
                      <div className="bg-peru-gold text-white text-center py-1 text-sm font-medium">
                        {locale === 'es' ? '⭐ Imprescindible' : '⭐ Must Try'}
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h4 className="text-lg font-bold text-peru-earth">
                          {locale === 'es' ? dish.nameEs : dish.name}
                        </h4>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`text-xs px-2 py-1 rounded-full ${spiceBadge.color}`}>
                            {spiceBadge.icon} {spiceBadge.label}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-3">
                        {locale === 'es' ? dish.descriptionEs : dish.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {dish.kidFriendly && (
                          <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            <Baby className="h-3 w-3" />
                            {locale === 'es' ? 'Apto para niños' : 'Kid-friendly'}
                          </span>
                        )}
                        {dish.vegetarianOption && (
                          <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            <Leaf className="h-3 w-3" />
                            {locale === 'es' ? 'Opción vegetariana' : 'Vegetarian option'}
                          </span>
                        )}
                      </div>

                      <div className="bg-peru-sand/30 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {locale === 'es' ? 'Dónde probar:' : 'Where to try:'}
                        </p>
                        <p className="text-sm text-gray-700">
                          {locale === 'es' ? dish.whereToTryEs : dish.whereToTry}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Restaurant Tips */}
            <div className="bg-peru-sand/30 rounded-xl p-6">
              <h3 className="font-bold text-peru-earth mb-4 flex items-center gap-2">
                <UtensilsCrossed className="h-5 w-5 text-peru-terracotta" />
                {locale === 'es' ? 'Consejos para Restaurantes' : 'Restaurant Tips'}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {(locale === 'es' ? activeRegion.restaurantTipsEs : activeRegion.restaurantTips).map((tip, idx) => (
                  <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                    <Star className="h-4 w-4 text-peru-gold mt-0.5 flex-shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Kid-Friendly Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-peru">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-peru-earth mb-4 text-center flex items-center justify-center gap-2">
            <Baby className="h-8 w-8 text-peru-terracotta" />
            {locale === 'es' ? 'Favoritos para Niños' : 'Kid Favorites'}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Estos platos son éxitos garantizados con los niños - sabores familiares con un toque peruano.'
              : 'These dishes are guaranteed hits with kids - familiar flavors with a Peruvian twist.'}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kidFriendlyDishes.map((dish, idx) => (
              <div key={idx} className="bg-peru-sand/30 rounded-xl p-4 text-center">
                <h3 className="font-bold text-peru-earth mb-1">
                  {locale === 'es' ? dish.nameEs : dish.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {locale === 'es' ? dish.descriptionEs : dish.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety */}
      <section className="py-8 bg-peru-sand/30">
        <div className="container-peru">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">
                  {locale === 'es' ? 'Consejos de Seguridad Alimentaria' : 'Food Safety Tips'}
                </h3>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• {locale === 'es' ? 'Bebe solo agua embotellada o purificada' : 'Drink only bottled or purified water'}</li>
                  <li>• {locale === 'es' ? 'Come ceviche solo al almuerzo en lugares concurridos' : 'Eat ceviche only at lunch at busy places'}</li>
                  <li>• {locale === 'es' ? 'Evita ensaladas crudas fuera de restaurantes de confianza' : 'Avoid raw salads outside trusted restaurants'}</li>
                  <li>• {locale === 'es' ? 'Introduce nuevos alimentos gradualmente a los niños' : 'Introduce new foods gradually to kids'}</li>
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
            {locale === 'es' ? '¿Hambriento por Más?' : 'Hungry for More?'}
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Revisa nuestra guía de comida general para consejos de restaurantes, etiqueta y más.'
              : 'Check out our general food guide for restaurant tips, etiquette, and more.'}
          </p>
          <a
            href="/food-guide/"
            className="inline-block bg-white text-peru-earth px-8 py-3 rounded-full font-semibold hover:bg-peru-sand transition-colors"
          >
            {locale === 'es' ? 'Ver Guía de Comida' : 'View Food Guide'}
          </a>
        </div>
      </section>
    </main>
  );
}
