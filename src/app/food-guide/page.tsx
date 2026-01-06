'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';
import {
  Utensils,
  Baby,
  AlertTriangle,
  Heart,
  ThumbsUp,
  MapPin,
  Star,
  Coffee,
  Leaf,
  Fish,
  Beef,
  IceCream,
  ChefHat
} from 'lucide-react';

interface FoodItem {
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  kidFriendly: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
  mustTry?: boolean;
  tip?: string;
  tipEs?: string;
}

interface FoodCategory {
  id: string;
  title: string;
  titleEs: string;
  icon: React.ElementType;
  items: FoodItem[];
}

const foodCategories: FoodCategory[] = [
  {
    id: 'main-dishes',
    title: 'Main Dishes',
    titleEs: 'Platos Principales',
    icon: ChefHat,
    items: [
      {
        name: 'Lomo Saltado',
        nameEs: 'Lomo Saltado',
        description: 'Stir-fried beef with onions, tomatoes, and french fries served with rice. A perfect fusion of Chinese and Peruvian cuisine.',
        descriptionEs: 'Carne de res salteada con cebollas, tomates y papas fritas servido con arroz. Una perfecta fusión de cocina china y peruana.',
        kidFriendly: true,
        mustTry: true,
        tip: 'Ask for "sin ají" (no chili) for kids',
        tipEs: 'Pedir "sin ají" para niños'
      },
      {
        name: 'Pollo a la Brasa',
        nameEs: 'Pollo a la Brasa',
        description: 'Rotisserie chicken marinated in Peruvian spices. Served with fries and salad. Kids absolutely love it!',
        descriptionEs: 'Pollo al horno marinado en especias peruanas. Servido con papas fritas y ensalada. ¡A los niños les encanta!',
        kidFriendly: true,
        mustTry: true,
        tip: 'Try the green "ají" sauce on the side - it\'s amazing but can be spicy',
        tipEs: 'Prueba la salsa de ají verde aparte - es increíble pero puede ser picante'
      },
      {
        name: 'Arroz con Pollo',
        nameEs: 'Arroz con Pollo',
        description: 'Chicken and rice cooked with cilantro, peas, and beer. Similar to paella but uniquely Peruvian.',
        descriptionEs: 'Pollo y arroz cocinado con cilantro, arvejas y cerveza. Similar a la paella pero únicamente peruano.',
        kidFriendly: true,
        tip: 'A safe, familiar choice for picky eaters',
        tipEs: 'Una opción segura y familiar para niños quisquillosos'
      },
      {
        name: 'Ají de Gallina',
        nameEs: 'Ají de Gallina',
        description: 'Shredded chicken in a creamy yellow pepper sauce. Mild despite the name "ají" (chili).',
        descriptionEs: 'Pollo desmenuzado en salsa cremosa de ají amarillo. Suave a pesar del nombre "ají".',
        kidFriendly: true,
        tip: 'Usually mild enough for kids, but ask first',
        tipEs: 'Usualmente lo suficientemente suave para niños, pero preguntar primero'
      },
      {
        name: 'Ceviche',
        nameEs: 'Ceviche',
        description: 'Fresh raw fish "cooked" in lime juice with onions and cilantro. Peru\'s national dish!',
        descriptionEs: 'Pescado fresco "cocinado" en jugo de limón con cebollas y cilantro. ¡El plato nacional de Perú!',
        kidFriendly: false,
        mustTry: true,
        tip: 'Best eaten at lunch when fish is freshest. Not recommended for young children due to raw fish.',
        tipEs: 'Mejor comerlo al almuerzo cuando el pescado está más fresco. No recomendado para niños pequeños por el pescado crudo.'
      },
      {
        name: 'Rocoto Relleno',
        nameEs: 'Rocoto Relleno',
        description: 'Stuffed spicy pepper filled with meat, topped with cheese. Traditional from Arequipa.',
        descriptionEs: 'Rocoto relleno de carne, cubierto con queso. Tradicional de Arequipa.',
        kidFriendly: false,
        spicy: true,
        tip: 'Very spicy! Not for kids or those sensitive to heat',
        tipEs: '¡Muy picante! No para niños o personas sensibles al picante'
      },
      {
        name: 'Causa Rellena',
        nameEs: 'Causa Rellena',
        description: 'Layered mashed potato dish with chicken or tuna filling. Cold appetizer or main.',
        descriptionEs: 'Plato de puré de papa en capas con relleno de pollo o atún. Aperitivo frío o plato principal.',
        kidFriendly: true,
        vegetarian: false,
        tip: 'Ask for the chicken version for kids',
        tipEs: 'Pedir la versión de pollo para niños'
      }
    ]
  },
  {
    id: 'soups',
    title: 'Soups & Stews',
    titleEs: 'Sopas y Guisos',
    icon: Coffee,
    items: [
      {
        name: 'Sopa a la Criolla',
        nameEs: 'Sopa a la Criolla',
        description: 'Hearty noodle soup with beef, milk, and egg. Perfect comfort food for altitude adjustment.',
        descriptionEs: 'Sopa sustanciosa de fideos con carne, leche y huevo. Perfecta para adaptarse a la altura.',
        kidFriendly: true,
        tip: 'Great for helping with altitude sickness',
        tipEs: 'Excelente para ayudar con el mal de altura'
      },
      {
        name: 'Caldo de Gallina',
        nameEs: 'Caldo de Gallina',
        description: 'Traditional hen soup with noodles, potatoes, and herbs. Peruvian chicken noodle soup!',
        descriptionEs: 'Sopa tradicional de gallina con fideos, papas y hierbas. ¡Sopa de pollo peruana!',
        kidFriendly: true,
        tip: 'Locals recommend this for altitude adjustment',
        tipEs: 'Los locales lo recomiendan para adaptarse a la altura'
      },
      {
        name: 'Chupe de Camarones',
        nameEs: 'Chupe de Camarones',
        description: 'Rich shrimp chowder with potatoes, corn, eggs, and cheese. Specialty of Arequipa.',
        descriptionEs: 'Rica sopa de camarones con papas, choclo, huevos y queso. Especialidad de Arequipa.',
        kidFriendly: true,
        tip: 'Check for shellfish allergies first',
        tipEs: 'Verificar alergias a mariscos primero'
      }
    ]
  },
  {
    id: 'snacks',
    title: 'Snacks & Street Food',
    titleEs: 'Snacks y Comida Callejera',
    icon: Utensils,
    items: [
      {
        name: 'Empanadas',
        nameEs: 'Empanadas',
        description: 'Baked or fried pastries filled with meat, cheese, or chicken.',
        descriptionEs: 'Pasteles horneados o fritos rellenos de carne, queso o pollo.',
        kidFriendly: true,
        tip: 'Perfect portable snack for kids on the go',
        tipEs: 'Snack perfecto y portátil para niños en movimiento'
      },
      {
        name: 'Choclo con Queso',
        nameEs: 'Choclo con Queso',
        description: 'Large-kernel Peruvian corn served with fresh cheese. Simple and delicious.',
        descriptionEs: 'Choclo de granos grandes servido con queso fresco. Simple y delicioso.',
        kidFriendly: true,
        vegetarian: true,
        tip: 'Found everywhere in the highlands - kids love the big kernels',
        tipEs: 'Se encuentra en todas partes de la sierra - a los niños les encantan los granos grandes'
      },
      {
        name: 'Papa Rellena',
        nameEs: 'Papa Rellena',
        description: 'Deep-fried mashed potato ball stuffed with seasoned beef.',
        descriptionEs: 'Bola de puré de papa frita rellena de carne sazonada.',
        kidFriendly: true,
        tip: 'Ask for it without the olive inside if kids are picky',
        tipEs: 'Pedir sin la aceituna si los niños son quisquillosos'
      },
      {
        name: 'Anticuchos',
        nameEs: 'Anticuchos',
        description: 'Grilled beef heart skewers. A popular street food, especially in Lima.',
        descriptionEs: 'Brochetas de corazón de res a la parrilla. Comida callejera popular, especialmente en Lima.',
        kidFriendly: false,
        tip: 'Don\'t tell kids what it is, many love the taste!',
        tipEs: 'No les digas a los niños qué es, ¡a muchos les encanta el sabor!'
      },
      {
        name: 'Churros',
        nameEs: 'Churros',
        description: 'Fried dough pastry, often filled with dulce de leche.',
        descriptionEs: 'Masa frita, a menudo rellena de dulce de leche.',
        kidFriendly: true,
        tip: 'Perfect afternoon snack, found in parks and plazas',
        tipEs: 'Snack perfecto de la tarde, se encuentra en parques y plazas'
      }
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts & Sweets',
    titleEs: 'Postres y Dulces',
    icon: IceCream,
    items: [
      {
        name: 'Picarones',
        nameEs: 'Picarones',
        description: 'Sweet potato and squash doughnuts drizzled with honey syrup. The Peruvian donut!',
        descriptionEs: 'Donas de camote y zapallo bañadas en miel de chancaca. ¡La dona peruana!',
        kidFriendly: true,
        mustTry: true,
        tip: 'Best enjoyed warm in the evening from street vendors',
        tipEs: 'Mejor disfrutarlos calientes en la noche de vendedores callejeros'
      },
      {
        name: 'Alfajores',
        nameEs: 'Alfajores',
        description: 'Delicate cookies sandwiched with dulce de leche and dusted with powdered sugar.',
        descriptionEs: 'Galletas delicadas con dulce de leche y espolvoreadas con azúcar glas.',
        kidFriendly: true,
        tip: 'Great souvenir - they keep well for travel',
        tipEs: 'Excelente souvenir - se conservan bien para el viaje'
      },
      {
        name: 'Suspiro a la Limeña',
        nameEs: 'Suspiro a la Limeña',
        description: 'Rich dulce de leche pudding topped with meringue and cinnamon.',
        descriptionEs: 'Rico pudín de dulce de leche cubierto con merengue y canela.',
        kidFriendly: true,
        mustTry: true,
        tip: 'Very sweet - one portion can be shared',
        tipEs: 'Muy dulce - una porción se puede compartir'
      },
      {
        name: 'Mazamorra Morada',
        nameEs: 'Mazamorra Morada',
        description: 'Purple corn pudding with fruits. Traditional and unique to Peru.',
        descriptionEs: 'Pudín de maíz morado con frutas. Tradicional y único de Perú.',
        kidFriendly: true,
        tip: 'Often served with Arroz con Leche - try both!',
        tipEs: 'A menudo servido con Arroz con Leche - ¡prueba ambos!'
      },
      {
        name: 'Lucuma Ice Cream',
        nameEs: 'Helado de Lúcuma',
        description: 'Ice cream made from lucuma fruit - a unique Peruvian flavor.',
        descriptionEs: 'Helado hecho de lúcuma - un sabor único peruano.',
        kidFriendly: true,
        mustTry: true,
        tip: 'A flavor you can only find in Peru!',
        tipEs: '¡Un sabor que solo puedes encontrar en Perú!'
      }
    ]
  },
  {
    id: 'drinks',
    title: 'Drinks & Beverages',
    titleEs: 'Bebidas',
    icon: Coffee,
    items: [
      {
        name: 'Inca Kola',
        nameEs: 'Inca Kola',
        description: 'Bright yellow, bubble-gum flavored soda. More popular than Coca-Cola in Peru!',
        descriptionEs: 'Gaseosa amarilla brillante con sabor a chicle. ¡Más popular que Coca-Cola en Perú!',
        kidFriendly: true,
        mustTry: true,
        tip: 'Every kid should try it - they usually love it!',
        tipEs: 'Cada niño debería probarlo - ¡usualmente les encanta!'
      },
      {
        name: 'Chicha Morada',
        nameEs: 'Chicha Morada',
        description: 'Non-alcoholic purple corn drink with fruits and spices. Refreshing and healthy.',
        descriptionEs: 'Bebida no alcohólica de maíz morado con frutas y especias. Refrescante y saludable.',
        kidFriendly: true,
        mustTry: true,
        tip: 'Full of antioxidants - great for the whole family',
        tipEs: 'Lleno de antioxidantes - excelente para toda la familia'
      },
      {
        name: 'Mate de Coca',
        nameEs: 'Mate de Coca',
        description: 'Coca leaf tea. Traditional remedy for altitude sickness.',
        descriptionEs: 'Té de hojas de coca. Remedio tradicional para el mal de altura.',
        kidFriendly: true,
        tip: 'Safe for kids and helps with altitude. Not the same as cocaine!',
        tipEs: 'Seguro para niños y ayuda con la altura. ¡No es lo mismo que cocaína!'
      },
      {
        name: 'Emoliente',
        nameEs: 'Emoliente',
        description: 'Warm herbal drink with barley, flaxseed, and herbs. Found on street corners.',
        descriptionEs: 'Bebida caliente de hierbas con cebada, linaza y hierbas. Se encuentra en esquinas.',
        kidFriendly: true,
        tip: 'Great for cold mornings in the highlands',
        tipEs: 'Excelente para mañanas frías en la sierra'
      },
      {
        name: 'Fresh Juices (Jugos)',
        nameEs: 'Jugos Frescos',
        description: 'Fresh fruit juices available everywhere - papaya, mango, passion fruit, and more.',
        descriptionEs: 'Jugos de frutas frescas disponibles en todas partes - papaya, mango, maracuyá, y más.',
        kidFriendly: true,
        tip: 'Ask for "sin hielo" (no ice) to be safe, or ensure they use purified water',
        tipEs: 'Pedir "sin hielo" para estar seguros, o asegurarse que usan agua purificada'
      }
    ]
  }
];

const safetyTips = [
  {
    title: 'Water Safety',
    titleEs: 'Seguridad del Agua',
    content: 'Drink only bottled or purified water. Ask for drinks "sin hielo" (without ice) to be safe.',
    contentEs: 'Beber solo agua embotellada o purificada. Pedir bebidas "sin hielo" para estar seguros.'
  },
  {
    title: 'Street Food',
    titleEs: 'Comida Callejera',
    content: 'Choose vendors with high turnover and food cooked fresh. Avoid pre-made items sitting out.',
    contentEs: 'Elegir vendedores con alta rotación y comida cocinada fresca. Evitar alimentos pre-hechos expuestos.'
  },
  {
    title: 'Raw Foods',
    titleEs: 'Alimentos Crudos',
    content: 'Be cautious with salads and raw foods. Ceviche is safe at reputable restaurants that serve it only at lunch.',
    contentEs: 'Ser cauteloso con ensaladas y alimentos crudos. El ceviche es seguro en restaurantes reputados que lo sirven solo al almuerzo.'
  },
  {
    title: 'Allergies',
    titleEs: 'Alergias',
    content: 'Learn allergy phrases in Spanish. "Sin maní" (no peanuts), "Alergia a mariscos" (shellfish allergy).',
    contentEs: 'Aprender frases de alergias. "Sin maní", "Alergia a mariscos", etc.'
  }
];

export default function FoodGuidePage() {
  const { locale } = useI18n();

  return (
    <main className="min-h-screen bg-peru-sand/30">
      {/* Hero */}
      <section className="bg-gradient-to-br from-peru-terracotta to-peru-earth py-16 lg:py-24">
        <div className="container-peru text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Utensils className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            {locale === 'es' ? 'Guía de Comida Peruana' : 'Peruvian Food Guide'}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {locale === 'es'
              ? 'Todo lo que las familias necesitan saber sobre la deliciosa cocina peruana'
              : 'Everything families need to know about delicious Peruvian cuisine'}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="container-peru py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 -mt-12 relative z-10">
          <p className="text-lg text-gray-700 leading-relaxed">
            {locale === 'es'
              ? 'La cocina peruana es reconocida mundialmente y ofrece increíbles opciones para familias. Desde platos reconfortantes que los niños adorarán hasta delicias gourmet para paladares aventureros, esta guía te ayudará a navegar los menús peruanos con confianza.'
              : 'Peruvian cuisine is world-renowned and offers incredible options for families. From comfort foods that kids will love to gourmet delights for adventurous palates, this guide will help you navigate Peruvian menus with confidence.'}
          </p>
        </div>
      </section>

      {/* Food Categories */}
      <section className="container-peru py-8">
        {foodCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div key={category.id} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-peru-gold/20 rounded-xl flex items-center justify-center">
                  <CategoryIcon className="w-6 h-6 text-peru-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-peru-earth">
                  {locale === 'es' ? category.titleEs : category.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`bg-white rounded-xl shadow-md p-6 ${
                      item.mustTry ? 'ring-2 ring-peru-gold' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display font-bold text-peru-earth text-lg">
                        {locale === 'es' ? item.nameEs : item.name}
                      </h3>
                      <div className="flex gap-1">
                        {item.mustTry && (
                          <span className="bg-peru-gold text-white text-xs px-2 py-1 rounded">
                            {locale === 'es' ? '¡Probar!' : 'Must Try!'}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      {locale === 'es' ? item.descriptionEs : item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.kidFriendly ? (
                        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          <ThumbsUp className="w-3 h-3" />
                          {locale === 'es' ? 'Para niños' : 'Kid-friendly'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                          <AlertTriangle className="w-3 h-3" />
                          {locale === 'es' ? 'Solo adultos' : 'Adults only'}
                        </span>
                      )}
                      {item.spicy && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                          🌶️ {locale === 'es' ? 'Picante' : 'Spicy'}
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          <Leaf className="w-3 h-3" />
                          {locale === 'es' ? 'Vegetariano' : 'Vegetarian'}
                        </span>
                      )}
                    </div>

                    {(item.tip || item.tipEs) && (
                      <div className="text-xs text-peru-terracotta bg-peru-sand/50 rounded p-2">
                        💡 {locale === 'es' ? item.tipEs : item.tip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Safety Tips */}
      <section className="bg-peru-earth py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="text-3xl font-display font-bold text-white text-center mb-8">
            {locale === 'es' ? 'Consejos de Seguridad Alimentaria' : 'Food Safety Tips'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-peru-gold flex-shrink-0" />
                  <div>
                    <h3 className="font-display font-bold text-white mb-2">
                      {locale === 'es' ? tip.titleEs : tip.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {locale === 'es' ? tip.contentEs : tip.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Phrases */}
      <section className="container-peru py-12 lg:py-16">
        <h2 className="section-title text-center mb-8">
          {locale === 'es' ? 'Frases Útiles' : 'Useful Phrases'}
        </h2>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {[
              { en: 'Can you make it less spicy?', es: '¿Puede hacerlo menos picante?' },
              { en: 'No chili pepper, please', es: 'Sin ají, por favor' },
              { en: 'Is this spicy?', es: '¿Esto es picante?' },
              { en: 'I have a food allergy', es: 'Tengo alergia alimentaria' },
              { en: 'No peanuts', es: 'Sin maní' },
              { en: 'The check, please', es: 'La cuenta, por favor' },
              { en: 'Water without ice', es: 'Agua sin hielo' },
              { en: 'For children', es: 'Para niños' },
              { en: 'Is it fresh today?', es: '¿Está fresco hoy?' },
              { en: 'Delicious!', es: '¡Delicioso!' },
            ].map((phrase, index) => (
              <div
                key={index}
                className={`p-4 ${index % 2 === 0 ? 'bg-peru-sand/30' : ''} border-b border-peru-sand/50`}
              >
                <p className="font-medium text-peru-earth">{phrase.es}</p>
                <p className="text-sm text-gray-500">{phrase.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Restaurant Areas */}
      <section className="bg-peru-sand py-12 lg:py-16">
        <div className="container-peru">
          <h2 className="section-title text-center mb-8">
            {locale === 'es' ? 'Mejores Zonas para Comer' : 'Top Areas for Dining'}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-peru-terracotta" />
                <h3 className="font-display font-bold text-peru-earth">Lima - Miraflores</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'La capital gastronómica. Restaurantes de clase mundial y comida callejera increíble.'
                  : 'The gastronomic capital. World-class restaurants and incredible street food.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-peru-terracotta" />
                <h3 className="font-display font-bold text-peru-earth">Cusco - San Blas</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Barrio bohemio con restaurantes familiares y cafés con vista a la ciudad.'
                  : 'Bohemian neighborhood with family-friendly restaurants and cafes with city views.'}
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-peru-terracotta" />
                <h3 className="font-display font-bold text-peru-earth">Arequipa - Centro</h3>
              </div>
              <p className="text-gray-600 text-sm">
                {locale === 'es'
                  ? 'Famosa por picanterías tradicionales y el mejor rocoto relleno del país.'
                  : 'Famous for traditional picanterías and the best rocoto relleno in the country.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-peru py-12 text-center">
        <h2 className="text-2xl font-display font-bold text-peru-earth mb-4">
          {locale === 'es' ? '¿Listo para tu aventura gastronómica?' : 'Ready for your culinary adventure?'}
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {locale === 'es'
            ? 'Descubre itinerarios que incluyen las mejores experiencias gastronómicas de Perú.'
            : 'Discover itineraries that include Peru\'s best culinary experiences.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/itineraries/" className="btn-primary">
            {locale === 'es' ? 'Ver Itinerarios' : 'View Itineraries'}
          </Link>
          <Link href="/packing/" className="btn-gold">
            {locale === 'es' ? 'Listas de Equipaje' : 'Packing Lists'}
          </Link>
        </div>
      </section>
    </main>
  );
}
