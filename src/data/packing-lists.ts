export interface PackingItem {
  item: string;
  itemEs: string;
  essential: boolean;
  note?: string;
  noteEs?: string;
}

export interface PackingCategory {
  id: string;
  name: string;
  nameEs: string;
  icon: string;
  items: PackingItem[];
}

export interface PackingList {
  id: string;
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
  tripType: 'highland' | 'amazon' | 'coast' | 'multi-region' | 'adventure';
  duration: 'short' | 'medium' | 'long';
  categories: PackingCategory[];
}

// Base essentials for all Peru trips
const baseEssentials: PackingCategory = {
  id: 'documents',
  name: 'Documents & Money',
  nameEs: 'Documentos y Dinero',
  icon: 'FileText',
  items: [
    { item: 'Passport (valid 6+ months)', itemEs: 'Pasaporte (válido 6+ meses)', essential: true },
    { item: 'Copies of passport (digital & physical)', itemEs: 'Copias del pasaporte (digital y física)', essential: true },
    { item: 'Travel insurance documents', itemEs: 'Documentos de seguro de viaje', essential: true },
    { item: 'Flight confirmations', itemEs: 'Confirmaciones de vuelos', essential: true },
    { item: 'Hotel reservations', itemEs: 'Reservas de hotel', essential: true },
    { item: 'Credit cards (notify bank of travel)', itemEs: 'Tarjetas de crédito (notificar al banco)', essential: true },
    { item: 'US dollars in small bills', itemEs: 'Dólares en billetes pequeños', essential: true, note: 'For exchange to Soles', noteEs: 'Para cambiar a Soles' },
    { item: 'Emergency contact list', itemEs: 'Lista de contactos de emergencia', essential: true },
    { item: 'Vaccination records', itemEs: 'Registros de vacunación', essential: false },
  ]
};

const healthEssentials: PackingCategory = {
  id: 'health',
  name: 'Health & Medications',
  nameEs: 'Salud y Medicamentos',
  icon: 'Heart',
  items: [
    { item: 'Prescription medications (extra supply)', itemEs: 'Medicamentos recetados (suministro extra)', essential: true },
    { item: 'Basic first aid kit', itemEs: 'Botiquín básico de primeros auxilios', essential: true },
    { item: 'Motion sickness medication', itemEs: 'Medicamento para mareos', essential: true, note: 'For winding mountain roads', noteEs: 'Para carreteras sinuosas' },
    { item: 'Pain relievers (ibuprofen/acetaminophen)', itemEs: 'Analgésicos (ibuprofeno/paracetamol)', essential: true },
    { item: 'Antidiarrheal medication', itemEs: 'Antidiarreicos', essential: true },
    { item: 'Antihistamines', itemEs: 'Antihistamínicos', essential: true },
    { item: 'Bandages and antiseptic', itemEs: 'Vendas y antiséptico', essential: true },
    { item: 'Hand sanitizer', itemEs: 'Desinfectante de manos', essential: true },
    { item: 'Sunscreen SPF 50+', itemEs: 'Protector solar SPF 50+', essential: true },
    { item: 'Lip balm with SPF', itemEs: 'Bálsamo labial con SPF', essential: true },
    { item: 'Insect repellent', itemEs: 'Repelente de insectos', essential: true },
  ]
};

const electronicsBase: PackingCategory = {
  id: 'electronics',
  name: 'Electronics',
  nameEs: 'Electrónicos',
  icon: 'Smartphone',
  items: [
    { item: 'Phone and charger', itemEs: 'Teléfono y cargador', essential: true },
    { item: 'Universal power adapter (Type A/B)', itemEs: 'Adaptador universal (Tipo A/B)', essential: true, note: 'Peru uses same plugs as US', noteEs: 'Perú usa los mismos enchufes que EE.UU.' },
    { item: 'Portable power bank', itemEs: 'Batería portátil', essential: true },
    { item: 'Camera and memory cards', itemEs: 'Cámara y tarjetas de memoria', essential: false },
    { item: 'Headphones for flights', itemEs: 'Auriculares para vuelos', essential: false },
    { item: 'E-reader or tablet', itemEs: 'E-reader o tablet', essential: false },
  ]
};

// Highland-specific packing list (Cusco, Sacred Valley, Machu Picchu)
export const highlandPackingList: PackingList = {
  id: 'highland-adventure',
  title: 'Highland Peru Packing List',
  titleEs: 'Lista de Equipaje para Sierra Peruana',
  description: 'Essential items for exploring Cusco, Sacred Valley, and Machu Picchu at high altitude.',
  descriptionEs: 'Artículos esenciales para explorar Cusco, Valle Sagrado y Machu Picchu en altura.',
  tripType: 'highland',
  duration: 'medium',
  categories: [
    baseEssentials,
    {
      ...healthEssentials,
      items: [
        ...healthEssentials.items,
        { item: 'Altitude sickness medication (Diamox)', itemEs: 'Medicamento para mal de altura (Diamox)', essential: true, note: 'Consult doctor before trip', noteEs: 'Consultar médico antes del viaje' },
        { item: 'Coca candies or tea', itemEs: 'Caramelos o té de coca', essential: false, note: 'Helps with altitude', noteEs: 'Ayuda con la altura' },
        { item: 'Electrolyte packets', itemEs: 'Sobres de electrolitos', essential: true },
      ]
    },
    {
      id: 'clothing-highland',
      name: 'Clothing',
      nameEs: 'Ropa',
      icon: 'Shirt',
      items: [
        { item: 'Layers! Temperature varies greatly', itemEs: '¡Capas! La temperatura varía mucho', essential: true },
        { item: 'Warm fleece or down jacket', itemEs: 'Polar o chaqueta de plumas', essential: true },
        { item: 'Rain jacket/poncho', itemEs: 'Chaqueta de lluvia/poncho', essential: true },
        { item: 'Long pants (quick-dry preferred)', itemEs: 'Pantalones largos (secado rápido)', essential: true },
        { item: 'Comfortable walking shoes', itemEs: 'Zapatos cómodos para caminar', essential: true },
        { item: 'Hiking boots (broken in!)', itemEs: 'Botas de senderismo (¡ya usadas!)', essential: true },
        { item: 'Warm hat and gloves', itemEs: 'Gorro y guantes abrigados', essential: true },
        { item: 'Sun hat', itemEs: 'Sombrero para el sol', essential: true },
        { item: 'Sunglasses (UV protection)', itemEs: 'Gafas de sol (protección UV)', essential: true },
        { item: 'Wool socks (multiple pairs)', itemEs: 'Calcetines de lana (varios pares)', essential: true },
        { item: 'Thermal underwear', itemEs: 'Ropa interior térmica', essential: false, note: 'For cold mornings', noteEs: 'Para mañanas frías' },
        { item: 'Swimsuit', itemEs: 'Traje de baño', essential: false, note: 'For hotel pools/hot springs', noteEs: 'Para piscinas/aguas termales' },
      ]
    },
    {
      id: 'gear-highland',
      name: 'Gear & Accessories',
      nameEs: 'Equipo y Accesorios',
      icon: 'Backpack',
      items: [
        { item: 'Daypack (20-30L)', itemEs: 'Mochila de día (20-30L)', essential: true },
        { item: 'Reusable water bottle', itemEs: 'Botella de agua reutilizable', essential: true },
        { item: 'Water purification tablets', itemEs: 'Pastillas purificadoras de agua', essential: false },
        { item: 'Walking poles', itemEs: 'Bastones de senderismo', essential: false, note: 'Helpful for Machu Picchu', noteEs: 'Útiles para Machu Picchu' },
        { item: 'Small flashlight/headlamp', itemEs: 'Linterna pequeña/frontal', essential: true },
        { item: 'Dry bags for valuables', itemEs: 'Bolsas impermeables para objetos de valor', essential: false },
        { item: 'Binoculars', itemEs: 'Binoculares', essential: false },
      ]
    },
    electronicsBase,
    {
      id: 'kids-highland',
      name: 'For Kids',
      nameEs: 'Para Niños',
      icon: 'Baby',
      items: [
        { item: 'Favorite snacks from home', itemEs: 'Snacks favoritos de casa', essential: true },
        { item: 'Entertainment for long drives', itemEs: 'Entretenimiento para viajes largos', essential: true },
        { item: 'Comfort item (stuffed animal, blanket)', itemEs: 'Objeto de confort (peluche, manta)', essential: false },
        { item: 'Kids altitude medication (ask pediatrician)', itemEs: 'Medicamento de altura para niños (consultar pediatra)', essential: true },
        { item: 'Extra layers for kids', itemEs: 'Capas extra para niños', essential: true },
        { item: 'Waterproof jacket with hood', itemEs: 'Chaqueta impermeable con capucha', essential: true },
        { item: 'Sturdy shoes they can run in', itemEs: 'Zapatos resistentes para correr', essential: true },
      ]
    }
  ]
};

// Amazon/Jungle packing list
export const amazonPackingList: PackingList = {
  id: 'amazon-jungle',
  title: 'Amazon Jungle Packing List',
  titleEs: 'Lista de Equipaje para Selva Amazónica',
  description: 'Everything you need for exploring the Peruvian Amazon rainforest safely and comfortably.',
  descriptionEs: 'Todo lo que necesitas para explorar la selva amazónica peruana de forma segura y cómoda.',
  tripType: 'amazon',
  duration: 'medium',
  categories: [
    baseEssentials,
    {
      ...healthEssentials,
      items: [
        ...healthEssentials.items,
        { item: 'Yellow fever vaccination card', itemEs: 'Certificado de vacuna contra fiebre amarilla', essential: true, note: 'Required for Amazon', noteEs: 'Requerido para Amazonas' },
        { item: 'Malaria prophylaxis (if recommended)', itemEs: 'Profilaxis contra malaria (si se recomienda)', essential: false, note: 'Consult travel doctor', noteEs: 'Consultar médico de viajes' },
        { item: 'DEET insect repellent (30%+)', itemEs: 'Repelente con DEET (30%+)', essential: true },
        { item: 'After-bite cream', itemEs: 'Crema para después de picaduras', essential: true },
        { item: 'Antihistamine cream', itemEs: 'Crema antihistamínica', essential: true },
        { item: 'Rehydration salts', itemEs: 'Sales de rehidratación', essential: true },
      ]
    },
    {
      id: 'clothing-amazon',
      name: 'Clothing',
      nameEs: 'Ropa',
      icon: 'Shirt',
      items: [
        { item: 'Long-sleeved lightweight shirts', itemEs: 'Camisas livianas de manga larga', essential: true, note: 'Protection from insects', noteEs: 'Protección contra insectos' },
        { item: 'Long lightweight pants', itemEs: 'Pantalones largos livianos', essential: true },
        { item: 'Convertible pants/shorts', itemEs: 'Pantalones convertibles', essential: false },
        { item: 'Quick-dry clothing', itemEs: 'Ropa de secado rápido', essential: true },
        { item: 'Rain poncho or jacket', itemEs: 'Poncho o chaqueta de lluvia', essential: true },
        { item: 'Rubber boots (often provided by lodges)', itemEs: 'Botas de goma (usualmente provistas por lodges)', essential: false },
        { item: 'Sandals with straps', itemEs: 'Sandalias con correas', essential: true },
        { item: 'Sturdy closed-toe shoes', itemEs: 'Zapatos cerrados resistentes', essential: true },
        { item: 'Hat with wide brim', itemEs: 'Sombrero de ala ancha', essential: true },
        { item: 'Bandana or buff', itemEs: 'Bandana o buff', essential: false },
        { item: 'Swimsuit', itemEs: 'Traje de baño', essential: true },
        { item: 'Light pajamas', itemEs: 'Pijamas livianos', essential: true },
      ]
    },
    {
      id: 'gear-amazon',
      name: 'Gear & Accessories',
      nameEs: 'Equipo y Accesorios',
      icon: 'Backpack',
      items: [
        { item: 'Waterproof daypack', itemEs: 'Mochila impermeable de día', essential: true },
        { item: 'Dry bags (multiple sizes)', itemEs: 'Bolsas impermeables (varios tamaños)', essential: true },
        { item: 'Waterproof phone case', itemEs: 'Funda impermeable para teléfono', essential: true },
        { item: 'Headlamp with red light mode', itemEs: 'Linterna frontal con modo luz roja', essential: true },
        { item: 'Binoculars (for wildlife)', itemEs: 'Binoculares (para fauna)', essential: true },
        { item: 'Mosquito head net', itemEs: 'Red mosquitera para cabeza', essential: false },
        { item: 'Reusable water bottle', itemEs: 'Botella de agua reutilizable', essential: true },
        { item: 'Small towel (quick-dry)', itemEs: 'Toalla pequeña (secado rápido)', essential: true },
      ]
    },
    {
      ...electronicsBase,
      items: [
        ...electronicsBase.items,
        { item: 'Waterproof camera or case', itemEs: 'Cámara acuática o funda', essential: false },
        { item: 'Extra batteries (humidity affects them)', itemEs: 'Baterías extra (la humedad las afecta)', essential: true },
        { item: 'Silica gel packets', itemEs: 'Paquetes de gel de sílice', essential: false, note: 'Protect electronics from humidity', noteEs: 'Proteger electrónicos de la humedad' },
      ]
    },
    {
      id: 'kids-amazon',
      name: 'For Kids',
      nameEs: 'Para Niños',
      icon: 'Baby',
      items: [
        { item: 'Kids-safe insect repellent', itemEs: 'Repelente de insectos para niños', essential: true },
        { item: 'Long-sleeved rash guards', itemEs: 'Camisetas manga larga anti-UV', essential: true },
        { item: 'Waterproof sandals', itemEs: 'Sandalias impermeables', essential: true },
        { item: 'Bug net for sleeping', itemEs: 'Mosquitero para dormir', essential: false },
        { item: 'Nature journal and pencils', itemEs: 'Diario de naturaleza y lápices', essential: false },
        { item: 'Kid-sized binoculars', itemEs: 'Binoculares para niños', essential: false },
        { item: 'Favorite waterproof toys', itemEs: 'Juguetes impermeables favoritos', essential: false },
      ]
    }
  ]
};

// Coastal Peru packing list
export const coastalPackingList: PackingList = {
  id: 'coastal-peru',
  title: 'Coastal Peru Packing List',
  titleEs: 'Lista de Equipaje para Costa Peruana',
  description: 'What to pack for Lima, Paracas, Nazca, and other coastal destinations.',
  descriptionEs: 'Qué empacar para Lima, Paracas, Nazca y otros destinos costeros.',
  tripType: 'coast',
  duration: 'medium',
  categories: [
    baseEssentials,
    healthEssentials,
    {
      id: 'clothing-coast',
      name: 'Clothing',
      nameEs: 'Ropa',
      icon: 'Shirt',
      items: [
        { item: 'Light layers (coastal fog can be cool)', itemEs: 'Capas livianas (la neblina costera puede ser fría)', essential: true },
        { item: 'Comfortable walking shoes', itemEs: 'Zapatos cómodos para caminar', essential: true },
        { item: 'Sandals', itemEs: 'Sandalias', essential: true },
        { item: 'Light jacket or sweater', itemEs: 'Chaqueta liviana o suéter', essential: true },
        { item: 'Casual dining attire', itemEs: 'Ropa casual para restaurantes', essential: true, note: 'Lima has great restaurants!', noteEs: '¡Lima tiene excelentes restaurantes!' },
        { item: 'Swimsuit', itemEs: 'Traje de baño', essential: true },
        { item: 'Beach cover-up', itemEs: 'Pareo de playa', essential: false },
        { item: 'Sun hat', itemEs: 'Sombrero para el sol', essential: true },
        { item: 'Sunglasses', itemEs: 'Gafas de sol', essential: true },
        { item: 'Light scarf (for sun/wind)', itemEs: 'Pañuelo liviano (para sol/viento)', essential: false },
      ]
    },
    {
      id: 'gear-coast',
      name: 'Gear & Accessories',
      nameEs: 'Equipo y Accesorios',
      icon: 'Backpack',
      items: [
        { item: 'Day bag', itemEs: 'Bolso de día', essential: true },
        { item: 'Reusable water bottle', itemEs: 'Botella de agua reutilizable', essential: true },
        { item: 'Beach towel', itemEs: 'Toalla de playa', essential: false },
        { item: 'Snorkel gear (optional)', itemEs: 'Equipo de snorkel (opcional)', essential: false },
        { item: 'Waterproof bag for beach', itemEs: 'Bolsa impermeable para playa', essential: false },
      ]
    },
    electronicsBase,
    {
      id: 'kids-coast',
      name: 'For Kids',
      nameEs: 'Para Niños',
      icon: 'Baby',
      items: [
        { item: 'Beach toys', itemEs: 'Juguetes de playa', essential: false },
        { item: 'Rash guard for sun protection', itemEs: 'Camiseta anti-UV', essential: true },
        { item: 'Water shoes', itemEs: 'Zapatos de agua', essential: true },
        { item: 'Sand-free beach towel', itemEs: 'Toalla anti-arena', essential: false },
        { item: 'Snacks for beach days', itemEs: 'Snacks para días de playa', essential: true },
      ]
    }
  ]
};

// Multi-region comprehensive list
export const multiRegionPackingList: PackingList = {
  id: 'multi-region',
  title: 'Complete Peru Packing List',
  titleEs: 'Lista Completa de Equipaje para Perú',
  description: 'The ultimate packing list for families visiting multiple regions of Peru.',
  descriptionEs: 'La lista de equipaje definitiva para familias que visitan múltiples regiones de Perú.',
  tripType: 'multi-region',
  duration: 'long',
  categories: [
    baseEssentials,
    {
      id: 'health-complete',
      name: 'Health & Medications',
      nameEs: 'Salud y Medicamentos',
      icon: 'Heart',
      items: [
        ...healthEssentials.items,
        { item: 'Altitude sickness medication', itemEs: 'Medicamento para mal de altura', essential: true },
        { item: 'Yellow fever vaccination (for Amazon)', itemEs: 'Vacuna fiebre amarilla (para Amazonas)', essential: false },
        { item: 'DEET insect repellent', itemEs: 'Repelente con DEET', essential: true },
        { item: 'Electrolyte packets', itemEs: 'Sobres de electrolitos', essential: true },
        { item: 'Coca tea/candies', itemEs: 'Té/caramelos de coca', essential: false },
      ]
    },
    {
      id: 'clothing-complete',
      name: 'Clothing (Versatile Layers)',
      nameEs: 'Ropa (Capas Versátiles)',
      icon: 'Shirt',
      items: [
        { item: 'Base layers (2-3)', itemEs: 'Capas base (2-3)', essential: true },
        { item: 'Mid layers - fleece/sweater (2)', itemEs: 'Capas medias - polar/suéter (2)', essential: true },
        { item: 'Warm jacket (down or synthetic)', itemEs: 'Chaqueta abrigada (plumas o sintética)', essential: true },
        { item: 'Rain jacket with hood', itemEs: 'Chaqueta de lluvia con capucha', essential: true },
        { item: 'Long pants (3-4, quick-dry)', itemEs: 'Pantalones largos (3-4, secado rápido)', essential: true },
        { item: 'Shorts (2)', itemEs: 'Shorts (2)', essential: true },
        { item: 'Long-sleeved shirts (3-4)', itemEs: 'Camisas manga larga (3-4)', essential: true },
        { item: 'T-shirts (4-5)', itemEs: 'Camisetas (4-5)', essential: true },
        { item: 'Hiking boots', itemEs: 'Botas de senderismo', essential: true },
        { item: 'Comfortable walking shoes', itemEs: 'Zapatos cómodos para caminar', essential: true },
        { item: 'Sandals with straps', itemEs: 'Sandalias con correas', essential: true },
        { item: 'Warm hat and gloves', itemEs: 'Gorro y guantes', essential: true },
        { item: 'Sun hat', itemEs: 'Sombrero para el sol', essential: true },
        { item: 'Sunglasses', itemEs: 'Gafas de sol', essential: true },
        { item: 'Swimsuit', itemEs: 'Traje de baño', essential: true },
        { item: 'Sleepwear for varied climates', itemEs: 'Ropa de dormir para varios climas', essential: true },
        { item: 'Underwear (7+ days worth)', itemEs: 'Ropa interior (7+ días)', essential: true },
        { item: 'Socks - wool and regular', itemEs: 'Calcetines - lana y regulares', essential: true },
      ]
    },
    {
      id: 'gear-complete',
      name: 'Gear & Accessories',
      nameEs: 'Equipo y Accesorios',
      icon: 'Backpack',
      items: [
        { item: 'Daypack (25-30L)', itemEs: 'Mochila de día (25-30L)', essential: true },
        { item: 'Packing cubes', itemEs: 'Cubos organizadores', essential: true, note: 'Essential for multi-climate trips', noteEs: 'Esenciales para viajes multi-clima' },
        { item: 'Dry bags (various sizes)', itemEs: 'Bolsas impermeables (varios tamaños)', essential: true },
        { item: 'Reusable water bottles (each family member)', itemEs: 'Botellas de agua (cada miembro)', essential: true },
        { item: 'Water purification', itemEs: 'Purificación de agua', essential: false },
        { item: 'Headlamp', itemEs: 'Linterna frontal', essential: true },
        { item: 'Binoculars', itemEs: 'Binoculares', essential: false },
        { item: 'Walking poles', itemEs: 'Bastones de senderismo', essential: false },
        { item: 'Travel pillow', itemEs: 'Almohada de viaje', essential: false },
        { item: 'Eye mask and earplugs', itemEs: 'Antifaz y tapones para oídos', essential: false },
        { item: 'Laundry bag', itemEs: 'Bolsa para ropa sucia', essential: true },
        { item: 'Travel towel', itemEs: 'Toalla de viaje', essential: false },
      ]
    },
    {
      ...electronicsBase,
      items: [
        ...electronicsBase.items,
        { item: 'Waterproof phone case', itemEs: 'Funda impermeable para teléfono', essential: true },
        { item: 'Extra memory cards', itemEs: 'Tarjetas de memoria extra', essential: false },
        { item: 'Portable WiFi (pocket router)', itemEs: 'WiFi portátil (router de bolsillo)', essential: false },
      ]
    },
    {
      id: 'kids-complete',
      name: 'For Kids (All Ages)',
      nameEs: 'Para Niños (Todas las Edades)',
      icon: 'Baby',
      items: [
        { item: 'Favorite snacks (lots!)', itemEs: 'Snacks favoritos (¡muchos!)', essential: true },
        { item: 'Entertainment for travel days', itemEs: 'Entretenimiento para días de viaje', essential: true },
        { item: 'Comfort items', itemEs: 'Objetos de confort', essential: true },
        { item: 'Kids medications and first aid', itemEs: 'Medicamentos y primeros auxilios para niños', essential: true },
        { item: 'Layers appropriate for each climate', itemEs: 'Capas apropiadas para cada clima', essential: true },
        { item: 'Sturdy shoes for hiking', itemEs: 'Zapatos resistentes para senderismo', essential: true },
        { item: 'Water shoes or sandals', itemEs: 'Zapatos de agua o sandalias', essential: true },
        { item: 'Sun protection gear', itemEs: 'Equipo de protección solar', essential: true },
        { item: 'Bug spray (kid-safe)', itemEs: 'Repelente (seguro para niños)', essential: true },
        { item: 'Nature journal', itemEs: 'Diario de naturaleza', essential: false },
        { item: 'Binoculars (kid-sized)', itemEs: 'Binoculares (tamaño niño)', essential: false },
        { item: 'Waterproof camera', itemEs: 'Cámara acuática', essential: false },
      ]
    },
    {
      id: 'toddler-specific',
      name: 'Toddler Essentials',
      nameEs: 'Esenciales para Bebés/Niños Pequeños',
      icon: 'Baby',
      items: [
        { item: 'Car seat (check airline policies)', itemEs: 'Silla de auto (verificar políticas de aerolínea)', essential: true },
        { item: 'Lightweight stroller or carrier', itemEs: 'Cochecito liviano o portabebés', essential: true },
        { item: 'Diapers and wipes (bring extras)', itemEs: 'Pañales y toallitas (traer extras)', essential: true },
        { item: 'Portable changing pad', itemEs: 'Cambiador portátil', essential: true },
        { item: 'Formula/baby food (if needed)', itemEs: 'Fórmula/comida para bebé (si es necesario)', essential: true },
        { item: 'Sippy cups/bottles', itemEs: 'Vasos/biberones', essential: true },
        { item: 'Favorite books', itemEs: 'Libros favoritos', essential: false },
        { item: 'Sleep sack for various temps', itemEs: 'Saco de dormir para varias temperaturas', essential: false },
      ]
    }
  ]
};

export const packingLists: PackingList[] = [
  highlandPackingList,
  amazonPackingList,
  coastalPackingList,
  multiRegionPackingList
];

export function getPackingListById(id: string): PackingList | undefined {
  return packingLists.find(list => list.id === id);
}

export function getPackingListsByTripType(tripType: string): PackingList[] {
  return packingLists.filter(list => list.tripType === tripType);
}
