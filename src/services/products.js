/**
 * Data service — swap this file's implementation for Supabase when ready.
 * All functions return Promises so the switch is seamless.
 */

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { id: 'cat-1', name: 'Residential', description: 'For home use', display_order: 1 },
  { id: 'cat-2', name: 'Commercial', description: 'For business and fleet use', display_order: 2 },
  { id: 'cat-3', name: 'Portable', description: 'Take it anywhere', display_order: 3 },
]

const PRODUCTS = [
  {
    id: 'prod-1',
    category_id: 'cat-1',
    brand: 'ProCharge',
    name: 'HomeCharge 7',
    slug: 'homecharge-7',
    short_description: 'Reliable 7 kW home charger for overnight charging.',
    long_description:
      'The HomeCharge 7 is our entry-level residential charger. With a clean, compact design it fits neatly in any garage or carport. Installation is straightforward and compatible with all Type 2 EVs.',
    price: 499,
    currency: 'USD',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Wall-mounted',
    is_smart: false,
    is_featured: false,
    is_active: true,
    key_features: [
      '7 kW single-phase output',
      'Type 2 universal connector',
      'IP65 weatherproof enclosure',
      'LED status indicator',
      '5-metre charging cable',
    ],
    categories: { name: 'Residential' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'HomeCharge-7-Datasheet.pdf', file_size_bytes: 1200000 },
    ],
  },
  {
    id: 'prod-2',
    category_id: 'cat-1',
    brand: 'ProCharge',
    name: 'HomeCharge 7S',
    slug: 'homecharge-7s',
    short_description: 'Smart 7 kW home charger with app control and scheduling.',
    long_description:
      'Everything you love about the HomeCharge 7, plus Wi-Fi connectivity, a companion app, and energy monitoring. Schedule charging during off-peak hours to save on your electricity bill.',
    price: 699,
    currency: 'USD',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    key_features: [
      '7 kW single-phase output',
      'Wi-Fi & Bluetooth connectivity',
      'App-based scheduling & monitoring',
      'Energy consumption tracking',
      'IP65 weatherproof enclosure',
      'RFID card access control',
    ],
    categories: { name: 'Residential' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'HomeCharge-7S-Datasheet.pdf', file_size_bytes: 1350000 },
    ],
  },
  {
    id: 'prod-3',
    category_id: 'cat-1',
    brand: 'PowerGrid',
    name: 'HomeCharge 22',
    slug: 'homecharge-22',
    short_description: '22 kW three-phase charger — charge in a fraction of the time.',
    long_description:
      'For homes with three-phase power, the HomeCharge 22 delivers up to 22 kW for significantly faster charging. Smart-enabled with load balancing to protect your home circuit.',
    price: 1199,
    currency: 'USD',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    key_features: [
      '22 kW three-phase output',
      'Dynamic load balancing',
      'Wi-Fi & Ethernet connectivity',
      'Touch display with real-time data',
      'IP65 weatherproof enclosure',
      'RFID & app access control',
    ],
    categories: { name: 'Residential' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'HomeCharge-22-Datasheet.pdf', file_size_bytes: 1580000 },
    ],
  },
  {
    id: 'prod-4',
    category_id: 'cat-2',
    brand: 'PowerGrid',
    name: 'BusinessPro 22',
    slug: 'businesspro-22',
    short_description: 'Dual-socket 22 kW pedestal charger for workplaces and car parks.',
    long_description:
      'The BusinessPro 22 is purpose-built for commercial settings. Its rugged pedestal housing is IP54-rated and supports two vehicles simultaneously. OCPP 1.6 compatible for fleet management integration.',
    price: 2499,
    currency: 'USD',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Pedestal',
    is_smart: true,
    is_featured: true,
    is_active: true,
    key_features: [
      'Dual socket — charge 2 vehicles simultaneously',
      '22 kW per outlet (three-phase)',
      'OCPP 1.6J for fleet management',
      'RFID, app & PIN access control',
      'IP54 rated pedestal enclosure',
      'Remote diagnostics & OTA updates',
    ],
    categories: { name: 'Commercial' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'BusinessPro-22-Datasheet.pdf', file_size_bytes: 2100000 },
    ],
  },
  {
    id: 'prod-5',
    category_id: 'cat-2',
    brand: 'FleetTech',
    name: 'RapidCharge 50',
    slug: 'rapidcharge-50',
    short_description: 'DC fast charger — 50 kW for rapid public or depot charging.',
    long_description:
      'The RapidCharge 50 delivers DC fast charging at up to 50 kW via CCS2. Ideal for retail car parks, service stations, and fleet depots where quick turnaround is essential.',
    price: 12500,
    currency: 'USD',
    power_output_kw: 50,
    connector_type: 'CCS2',
    phase: 'Three Phase',
    installation_type: 'Pedestal',
    is_smart: true,
    is_featured: false,
    is_active: true,
    key_features: [
      '50 kW DC fast charging',
      'CCS2 connector',
      'Adds ~50 km range in 10 minutes',
      '7" touchscreen display',
      'OCPP 2.0.1 compatible',
      'Payment terminal ready',
    ],
    categories: { name: 'Commercial' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'RapidCharge-50-Datasheet.pdf', file_size_bytes: 3200000 },
    ],
  },
  {
    id: 'prod-6',
    category_id: 'cat-2',
    brand: 'FleetTech',
    name: 'FleetPro 22',
    slug: 'fleetpro-22',
    short_description: 'Wall-mounted 22 kW charger optimised for fleet depots.',
    long_description:
      'The FleetPro 22 is designed for high-density fleet installations. Its compact wall-mount form factor maximises the number of charge points you can fit in a depot. Central management via OCPP.',
    price: 1799,
    currency: 'USD',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: false,
    is_active: true,
    key_features: [
      'Compact wall-mount design for dense installations',
      '22 kW three-phase output',
      'OCPP 1.6J fleet management',
      'Integrated cable management',
      'IP54 rated',
      'Daisy-chain power distribution',
    ],
    categories: { name: 'Commercial' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'FleetPro-22-Datasheet.pdf', file_size_bytes: 1900000 },
    ],
  },
  {
    id: 'prod-7',
    category_id: 'cat-3',
    brand: 'SwiftCharge',
    name: 'PortaPower 3.6',
    slug: 'portapower-3.6',
    short_description: 'Compact portable charger — plug in anywhere with a standard socket.',
    long_description:
      'The PortaPower 3.6 travels with you. Plug into any standard household socket and charge at 3.6 kW. A must-have for travel, holiday homes, and peace of mind on the road.',
    price: 249,
    currency: 'USD',
    power_output_kw: 3.6,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Portable',
    is_smart: false,
    is_featured: false,
    is_active: true,
    key_features: [
      '3.6 kW output from any standard socket',
      'Type 2 EV connector',
      'Lightweight carry bag included',
      'LED charging status indicator',
      'Built-in safety protections',
      '5-metre cable length',
    ],
    categories: { name: 'Portable' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'PortaPower-3.6-Datasheet.pdf', file_size_bytes: 980000 },
    ],
  },
  {
    id: 'prod-8',
    category_id: 'cat-3',
    brand: 'SwiftCharge',
    name: 'PortaPower 7S',
    slug: 'portapower-7s',
    short_description: 'Smart portable 7 kW charger with adjustable current output.',
    long_description:
      'The PortaPower 7S is for drivers who refuse to compromise. Adjustable output from 6A to 32A, integrated energy metering, and a companion app — all in a bag that fits in your boot.',
    price: 449,
    currency: 'USD',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Portable',
    is_smart: true,
    is_featured: true,
    is_active: true,
    key_features: [
      '7 kW adjustable output (6A–32A)',
      'Wi-Fi & Bluetooth app control',
      'Integrated energy metering',
      'Type 2 connector, 7-metre cable',
      'Lightweight carry bag included',
      'Built-in safety protections',
    ],
    categories: { name: 'Portable' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'PortaPower-7S-Datasheet.pdf', file_size_bytes: 1100000 },
    ],
  },
]

// ---------------------------------------------------------------------------
// Helper — simulate async network latency
// ---------------------------------------------------------------------------
function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ---------------------------------------------------------------------------
// Service functions
// ---------------------------------------------------------------------------

/**
 * Fetch all active products, optionally filtered and sorted.
 * @param {Object} filters
 * @param {string}  [filters.category_id]
 * @param {boolean} [filters.is_featured]
 * @param {string}  [filters.connector_type]
 * @param {string}  [filters.installation_type]
 * @param {string}  [filters.phase]
 * @param {number}  [filters.min_power_kw]
 * @param {number}  [filters.max_power_kw]
 * @param {boolean} [filters.is_smart]
 * @param {string}  [filters.brand]
 * @param {string}  [filters.price_sort]  'asc' | 'desc' | ''
 * @returns {Promise<Array>}
 */
export async function getProducts(filters = {}) {
  await delay()
  let results = PRODUCTS.filter((p) => p.is_active)

  if (filters.category_id) results = results.filter((p) => p.category_id === filters.category_id)
  if (filters.is_featured) results = results.filter((p) => p.is_featured)
  if (filters.connector_type) results = results.filter((p) => p.connector_type === filters.connector_type)
  if (filters.installation_type) results = results.filter((p) => p.installation_type === filters.installation_type)
  if (filters.phase) results = results.filter((p) => p.phase === filters.phase)
  if (filters.min_power_kw != null) results = results.filter((p) => p.power_output_kw >= filters.min_power_kw)
  if (filters.max_power_kw != null) results = results.filter((p) => p.power_output_kw <= filters.max_power_kw)
  if (filters.is_smart != null) results = results.filter((p) => p.is_smart === filters.is_smart)
  if (filters.brand) results = results.filter((p) => p.brand === filters.brand)

  if (filters.price_sort === 'asc') results = [...results].sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
  else if (filters.price_sort === 'desc') results = [...results].sort((a, b) => (b.price ?? 0) - (a.price ?? 0))

  return results
}

/**
 * Fetch all unique brand names from active products.
 * @returns {Promise<string[]>}
 */
export async function getBrands() {
  await delay(100)
  const brands = [...new Set(PRODUCTS.filter((p) => p.is_active).map((p) => p.brand).filter(Boolean))]
  return brands.sort()
}

/**
 * Fetch a single product by slug.
 * @param {string} slug
 * @returns {Promise<Object|null>}
 */
export async function getProductBySlug(slug) {
  await delay()
  return PRODUCTS.find((p) => p.slug === slug && p.is_active) || null
}

/**
 * Fetch all categories ordered by display_order.
 * @returns {Promise<Array>}
 */
export async function getCategories() {
  await delay()
  return [...CATEGORIES].sort((a, b) => a.display_order - b.display_order)
}

/**
 * Resolve a product image storage path to a display URL.
 * With mock data this is a no-op; replace with supabase.storage call later.
 * @param {string} storagePath
 * @returns {string}
 */
export function getImageUrl(storagePath) {
  // TODO: replace with supabase.storage.from('product-images').getPublicUrl(storagePath).data.publicUrl
  return storagePath
}

/**
 * Resolve a datasheet storage path to a download URL.
 * @param {string} storagePath
 * @returns {string}
 */
export function getDatasheetUrl(storagePath) {
  // TODO: replace with supabase.storage.from('product-datasheets').getPublicUrl(storagePath).data.publicUrl
  return storagePath
}

/**
 * Submit an expert consultation request.
 * TODO: replace with real API / Supabase edge function call.
 * @param {{ name: string, mobile: string }} payload
 * @returns {Promise<void>}
 */
export async function submitExpertRequest(payload) {
  await delay(800)
  console.log('[Mock] Expert request submitted:', payload)
  // TODO: POST to your backend endpoint or Supabase edge function
}

/**
 * Submit a product quote request.
 * TODO: replace with real API / Supabase edge function call.
 * @param {{ name: string, mobile: string, product_id: string, product_name: string }} payload
 * @returns {Promise<void>}
 */
export async function submitQuoteRequest(payload) {
  await delay(800)
  console.log('[Mock] Quote request submitted:', payload)
  // TODO: POST to your backend endpoint or Supabase edge function
}
