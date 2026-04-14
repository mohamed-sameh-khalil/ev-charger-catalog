/**
 * Data service — swap this file's implementation for Supabase when ready.
 * All functions return Promises so the switch is seamless.
 *
 * BACKEND NOTES (Supabase):
 * - Categories: managed in the `categories` table — add/edit/remove from Supabase dashboard
 * - Brands: derived from the `brand` column in the `products` table — add a product with a new brand
 * - Best Sellers: toggle `is_featured = true` on any product in Supabase dashboard
 * - Connector types: derived from `connector_type` column — add products with new connector types
 * - All content is fully editable without code changes once Supabase is wired in
 */

// ---------------------------------------------------------------------------
// Mock data — replace with Supabase queries in each function below
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { id: 'cat-1', name: 'Wall Mounted Charger', description: 'Fixed wall installation', display_order: 1 },
  { id: 'cat-2', name: 'Portable Charger', description: 'Charge anywhere', display_order: 2 },
  { id: 'cat-3', name: 'Cables', description: 'Charging cables and adapters', display_order: 3 },
]

const PRODUCTS = [
  {
    id: 'prod-1',
    category_id: 'cat-1',
    brand: 'Schneider Electric',
    name: 'EVlink Home Smart 7kW',
    slug: 'evlink-home-smart-7kw',
    short_description: 'Smart 7 kW wall charger with app control — perfect for European cars.',
    long_description:
      'The EVlink Home Smart 7kW delivers reliable single-phase charging at 7 kW. Wi-Fi enabled with the Schneider app for scheduling and energy monitoring. Compatible with all Type 2 vehicles.',
    price: 4500,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '2 years',
    key_features: [
      '7 kW single-phase output',
      'Type 2 universal connector',
      'Wi-Fi & Bluetooth connectivity',
      'App scheduling & energy monitoring',
      'IP65 weatherproof enclosure',
      'RFID card access control',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'EVlink-Home-Smart-7kW-Datasheet.pdf', file_size_bytes: 1350000 },
    ],
  },
  {
    id: 'prod-2',
    category_id: 'cat-1',
    brand: 'Schneider Electric',
    name: 'EVlink Pro AC 22kW',
    slug: 'evlink-pro-ac-22kw',
    short_description: 'High-power 22 kW three-phase wall charger for fast home and office charging.',
    long_description:
      'The EVlink Pro AC 22kW supports three-phase power for maximum AC charging speed. Built for both residential and commercial use with OCPP compatibility.',
    price: 8900,
    currency: 'EGP',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '2 years',
    key_features: [
      '22 kW three-phase output',
      'Dynamic load balancing',
      'Wi-Fi & Ethernet connectivity',
      'OCPP 1.6J compatible',
      'IP55 rated enclosure',
      'RFID & app access control',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'EVlink-Pro-AC-22kW-Datasheet.pdf', file_size_bytes: 1580000 },
    ],
  },
  {
    id: 'prod-3',
    category_id: 'cat-1',
    brand: 'BESEN',
    name: 'BESEN BS-G01 7kW GBT',
    slug: 'besen-bs-g01-7kw-gbt',
    short_description: 'Smart 7 kW GBT wall charger — designed for Chinese imported EVs.',
    long_description:
      'The BESEN BS-G01 is purpose-built for Chinese-standard EVs (BYD, NIO, Chery, etc.). Features a GBT connector, app control, and energy monitoring in a compact wall-mount design.',
    price: 3800,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'GBT',
    phase: 'Single Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '2 years',
    key_features: [
      '7 kW single-phase output',
      'GBT connector (Chinese EV standard)',
      'Wi-Fi app control & scheduling',
      'LED status display',
      'IP65 rated enclosure',
      'Overload & short-circuit protection',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'BESEN-BS-G01-Datasheet.pdf', file_size_bytes: 1200000 },
    ],
  },
  {
    id: 'prod-4',
    category_id: 'cat-1',
    brand: 'Rolec',
    name: 'Rolec WallPod EV 7kW',
    slug: 'rolec-wallpod-ev-7kw',
    short_description: 'Robust 7 kW wall charger with RFID access — ideal for businesses.',
    long_description:
      'The Rolec WallPod EV delivers reliable 7 kW charging with RFID access control. Its robust design makes it ideal for workplace and commercial installations.',
    price: 5200,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Wall-mounted',
    is_smart: false,
    is_featured: false,
    is_active: true,
    warranty: '3 years',
    key_features: [
      '7 kW single-phase output',
      'Type 2 connector',
      'RFID access control',
      'Robust commercial-grade enclosure',
      'IP54 rated',
      'LED status indicator',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'Rolec-WallPod-7kW-Datasheet.pdf', file_size_bytes: 1100000 },
    ],
  },
  {
    id: 'prod-5',
    category_id: 'cat-1',
    brand: 'Phoenix',
    name: 'Phoenix EV Charger 22kW',
    slug: 'phoenix-ev-charger-22kw',
    short_description: '22 kW three-phase smart charger with dual socket output.',
    long_description:
      'The Phoenix EV Charger 22kW supports dual-socket simultaneous charging at up to 22 kW per outlet. OCPP compliant for fleet and commercial management.',
    price: 11500,
    currency: 'EGP',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '2 years',
    key_features: [
      'Dual socket — 2 vehicles simultaneously',
      '22 kW three-phase per outlet',
      'OCPP 1.6J fleet management',
      'Dynamic load balancing',
      'RFID, PIN & app access',
      'IP54 rated enclosure',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'Phoenix-EV-22kW-Datasheet.pdf', file_size_bytes: 2100000 },
    ],
  },
  {
    id: 'prod-6',
    category_id: 'cat-2',
    brand: 'BESEN',
    name: 'BESEN Portable 3.5kW Type 2',
    slug: 'besen-portable-3-5kw-type2',
    short_description: 'Compact portable charger for European cars — charge from any socket.',
    long_description:
      'The BESEN portable charger plugs into any standard socket and delivers 3.5 kW via a Type 2 connector. Includes adjustable current output and a travel bag.',
    price: 1800,
    currency: 'EGP',
    power_output_kw: 3.5,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Portable',
    is_smart: false,
    is_featured: false,
    is_active: true,
    warranty: '1 year',
    key_features: [
      '3.5 kW from any standard socket',
      'Type 2 EV connector',
      'Adjustable current (8A–16A)',
      'LED status indicator',
      'Built-in safety protections',
      'Travel bag included',
    ],
    categories: { name: 'Portable Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'BESEN-Portable-3.5kW-Datasheet.pdf', file_size_bytes: 980000 },
    ],
  },
  {
    id: 'prod-7',
    category_id: 'cat-2',
    brand: 'BESEN',
    name: 'BESEN Portable 7kW GBT Smart',
    slug: 'besen-portable-7kw-gbt',
    short_description: 'Smart 7 kW portable GBT charger with app control for Chinese EVs.',
    long_description:
      'The BESEN 7kW Smart Portable delivers maximum portable charging speed for Chinese-standard EVs. Adjustable output from 6A to 32A with Wi-Fi app control and energy metering.',
    price: 2900,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'GBT',
    phase: 'Single Phase',
    installation_type: 'Portable',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '1 year',
    key_features: [
      '7 kW adjustable output (6A–32A)',
      'GBT connector (Chinese EV standard)',
      'Wi-Fi & Bluetooth app control',
      'Integrated energy metering',
      '7-metre cable length',
      'Travel bag included',
    ],
    categories: { name: 'Portable Charger' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'BESEN-Portable-7kW-GBT-Datasheet.pdf', file_size_bytes: 1100000 },
    ],
  },
  {
    id: 'prod-8',
    category_id: 'cat-3',
    brand: 'Rolec',
    name: 'Type 2 to Type 2 Charging Cable 7kW',
    slug: 'type2-to-type2-cable-7kw',
    short_description: 'Mode 3 Type 2 to Type 2 cable — 7 kW, 5 metres.',
    long_description:
      'High-quality Mode 3 charging cable with Type 2 plugs on both ends. Compatible with all European EVs and public charging stations. 5-metre length, 32A rated.',
    price: 950,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'Type 2',
    phase: 'Single Phase',
    installation_type: 'Cable',
    is_smart: false,
    is_featured: false,
    is_active: true,
    warranty: '1 year',
    key_features: [
      'Type 2 to Type 2 (Mode 3)',
      '32A / 7 kW rated',
      '5-metre flexible cable',
      'IP44 rated connectors',
      'Compatible with all Type 2 EVs and stations',
    ],
    categories: { name: 'Cables' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'Type2-Type2-Cable-Datasheet.pdf', file_size_bytes: 700000 },
    ],
  },
  {
    id: 'prod-9',
    category_id: 'cat-3',
    brand: 'Phoenix',
    name: 'GBT to Type 2 Adapter Cable',
    slug: 'gbt-to-type2-adapter-cable',
    short_description: 'GBT to Type 2 adapter — charge Chinese EVs at Type 2 stations.',
    long_description:
      'This adapter cable lets Chinese-standard EVs (BYD, NIO, Chery, etc.) charge at Type 2 public stations. Supports up to 7 kW AC charging. 1-metre adapter length.',
    price: 1200,
    currency: 'EGP',
    power_output_kw: 7,
    connector_type: 'GBT',
    phase: 'Single Phase',
    installation_type: 'Cable',
    is_smart: false,
    is_featured: true,
    is_active: true,
    warranty: '1 year',
    key_features: [
      'GBT to Type 2 adapter',
      '7 kW / 32A rated',
      '1-metre adapter length',
      'Compatible with BYD, NIO, Chery, and more',
      'IP44 rated connectors',
    ],
    categories: { name: 'Cables' },
    product_images: [],
    product_datasheets: [
      { storage_path: null, file_name: 'GBT-Type2-Adapter-Datasheet.pdf', file_size_bytes: 750000 },
    ],
  },

  // ── Real products from catalog ──────────────────────────────────────────────

  {
    id: 'prod-10',
    category_id: 'cat-3',
    brand: 'BESEN',
    name: 'Besen Cable Type 2 to Type 2',
    slug: 'besen-cable-type2-to-type2',
    short_description: 'Heavy-duty 22 kW three-phase Type 2 to Type 2 cable for fast AC charging.',
    long_description:
      'The BESEN Type 2 to Type 2 cable delivers three-phase 22 kW AC charging between the station and your EV. Robust construction with IP44-rated connectors and a flexible 5-metre cable — compatible with all Type 2 EVs and public stations.',
    price: 8010,
    currency: 'EGP',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Cable',
    is_smart: false,
    is_featured: true,
    is_active: true,
    warranty: '1 year',
    key_features: [
      'Type 2 to Type 2 (Mode 3)',
      '22 kW / three-phase rated',
      'IP44-rated connectors',
      '5-metre flexible cable',
      'Compatible with all Type 2 EVs and stations',
      'Robust strain-relief construction',
    ],
    categories: { name: 'Cables' },
    product_images: [
      { storage_path: '/products/images/besen-cable-type2.png', alt_text: 'Besen Type 2 to Type 2 Cable', is_primary: true, display_order: 1 },
    ],
    product_datasheets: [
      { storage_path: '/products/datasheets/besen-cable-type2-datasheet.pdf', file_name: 'Besen-Cable-Type2-Datasheet.pdf', file_size_bytes: null },
    ],
  },
  {
    id: 'prod-11',
    category_id: 'cat-2',
    brand: 'BESEN',
    name: 'Besen Portable Charger GBT',
    slug: 'besen-portable-charger-gbt',
    short_description: 'Smart 7.4 kW portable GBT charger with app control — charge your Chinese EV anywhere.',
    long_description:
      'The BESEN Portable GBT Charger delivers 7.4 kW single-phase charging for Chinese-standard EVs (BYD, NIO, Chery, etc.). Built-in smart features with app control, adjustable current, and LED status display in a compact portable design.',
    price: 15640,
    currency: 'EGP',
    power_output_kw: 7.4,
    connector_type: 'GBT',
    phase: 'Single Phase',
    installation_type: 'Portable',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '1 year',
    key_features: [
      '7.4 kW single-phase output',
      'GBT connector (Chinese EV standard)',
      'Smart app control & scheduling',
      'Adjustable current output',
      'LED status indicator',
      'Compact portable design with carry bag',
    ],
    categories: { name: 'Portable Charger' },
    product_images: [
      { storage_path: '/products/images/besen-portable-gbt.png', alt_text: 'Besen Portable Charger GBT', is_primary: true, display_order: 1 },
    ],
    product_datasheets: [
      { storage_path: '/products/datasheets/besen-portable-gbt-datasheet.pdf', file_name: 'Besen-Portable-GBT-Datasheet.pdf', file_size_bytes: null },
    ],
  },
  {
    id: 'prod-12',
    category_id: 'cat-1',
    brand: 'Rolec',
    name: 'Rolec Qubev',
    slug: 'rolec-qubev',
    short_description: 'Reliable 22 kW three-phase wall charger with sleek modern design.',
    long_description:
      'The Rolec Qubev is a premium 22 kW three-phase wall-mounted charger built for home and workplace installations. Its compact, weather-resistant enclosure and Type 2 socket make it a future-proof choice for any European EV.',
    price: 22655,
    currency: 'EGP',
    power_output_kw: 22,
    connector_type: 'Type 2',
    phase: 'Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: false,
    is_featured: true,
    is_active: true,
    warranty: '3 years',
    key_features: [
      '22 kW three-phase output',
      'Type 2 universal socket',
      'Compact weather-resistant enclosure',
      'LED status indicator',
      'IP54 rated',
      '3-year manufacturer warranty',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [
      { storage_path: '/products/images/rolec-qubev.png', alt_text: 'Rolec Qubev Wall Charger', is_primary: true, display_order: 1 },
    ],
    product_datasheets: [
      { storage_path: '/products/datasheets/rolec-qubev-datasheet.pdf', file_name: 'Rolec-Qubev-Datasheet.pdf', file_size_bytes: null },
    ],
  },
  {
    id: 'prod-13',
    category_id: 'cat-1',
    brand: 'Rolec',
    name: 'Rolec EVO',
    slug: 'rolec-evo',
    short_description: 'Smart 7.4 kW / 22 kW wall charger with OCPP and app control — 5-year warranty.',
    long_description:
      'The Rolec EVO is a premium smart wall charger supporting both single-phase (7.4 kW) and three-phase (22 kW) installations. OCPP 1.6J compliant with built-in app control, load management, and a 5-year warranty for total peace of mind.',
    price: 38720,
    currency: 'EGP',
    power_output_kw: 22,
    power_output_label: '7.4 kW / 22 kW',
    connector_type: 'Type 2',
    phase: 'Single Phase / Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '5 years',
    key_features: [
      '7.4 kW (single-phase) or 22 kW (three-phase)',
      'Type 2 universal socket',
      'OCPP 1.6J compatible',
      'Smart app control & load management',
      'IP55 rated enclosure',
      'Industry-leading 5-year warranty',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [
      { storage_path: '/products/images/rolec-evo.png', alt_text: 'Rolec EVO Smart Wall Charger', is_primary: true, display_order: 1 },
    ],
    product_datasheets: [
      { storage_path: '/products/datasheets/rolec-evo-datasheet.pdf', file_name: 'Rolec-EVO-Datasheet.pdf', file_size_bytes: null },
    ],
  },
  {
    id: 'prod-14',
    category_id: 'cat-1',
    brand: 'Schneider Electric',
    name: 'Schneider Charge',
    slug: 'schneider-charge',
    short_description: 'Smart 7.4 kW / 22 kW wall charger from Schneider Electric — built for reliability.',
    long_description:
      'The Schneider Charge wall charger supports both single-phase (7.4 kW) and three-phase (22 kW) configurations. Engineered with Schneider Electric\'s industrial quality standards, it delivers smart charging with app control, RFID access, and built-in energy monitoring.',
    price: 39900,
    currency: 'EGP',
    power_output_kw: 22,
    power_output_label: '7.4 kW / 22 kW',
    connector_type: 'Type 2',
    phase: 'Single Phase / Three Phase',
    installation_type: 'Wall-mounted',
    is_smart: true,
    is_featured: true,
    is_active: true,
    warranty: '1.5 years',
    key_features: [
      '7.4 kW (single-phase) or 22 kW (three-phase)',
      'Type 2 universal socket',
      'Smart app control & energy monitoring',
      'RFID access control',
      'IP55 rated enclosure',
      'Schneider Electric industrial reliability',
    ],
    categories: { name: 'Wall Mounted Charger' },
    product_images: [
      { storage_path: '/products/images/schneider-charge.png', alt_text: 'Schneider Charge Wall Charger', is_primary: true, display_order: 1 },
    ],
    product_datasheets: [
      { storage_path: '/products/datasheets/schneider-charge-datasheet.pdf', file_name: 'Schneider-Charge-Datasheet.pdf', file_size_bytes: null },
    ],
  },
]

// ---------------------------------------------------------------------------
// Helper
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
 * @param {string}  [filters.category_name]   - filter by category name (used by questionnaire)
 * @param {boolean} [filters.is_featured]
 * @param {string}  [filters.connector_type]
 * @param {string}  [filters.phase]
 * @param {number}  [filters.min_power_kw]
 * @param {number}  [filters.max_power_kw]
 * @param {boolean} [filters.is_smart]
 * @param {string}  [filters.brand]
 * @param {string}  [filters.price_sort]      - 'asc' | 'desc'
 * @param {string}  [filters.search]          - text search on name + short_description
 * @returns {Promise<Array>}
 */
export async function getProducts(filters = {}) {
  await delay()
  let results = PRODUCTS.filter((p) => p.is_active)

  if (filters.category_id) results = results.filter((p) => p.category_id === filters.category_id)
  if (filters.category_name) results = results.filter((p) => p.categories?.name === filters.category_name)
  if (filters.is_featured) results = results.filter((p) => p.is_featured)
  if (filters.connector_type) results = results.filter((p) => p.connector_type === filters.connector_type)
  if (filters.phase) results = results.filter((p) => p.phase === filters.phase)
  if (filters.min_power_kw != null) results = results.filter((p) => p.power_output_kw >= filters.min_power_kw)
  if (filters.max_power_kw != null) results = results.filter((p) => p.power_output_kw <= filters.max_power_kw)
  if (filters.is_smart != null) results = results.filter((p) => p.is_smart === filters.is_smart)
  if (filters.brand) results = results.filter((p) => p.brand === filters.brand)

  if (filters.search) {
    const q = filters.search.toLowerCase()
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.short_description || '').toLowerCase().includes(q) ||
        (p.brand || '').toLowerCase().includes(q)
    )
  }

  if (filters.price_sort === 'asc') results = [...results].sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
  else if (filters.price_sort === 'desc') results = [...results].sort((a, b) => (b.price ?? 0) - (a.price ?? 0))

  return results
}

/**
 * Fetch all unique brand names from active products.
 * In Supabase: SELECT DISTINCT brand FROM products WHERE is_active = true ORDER BY brand
 * @returns {Promise<string[]>}
 */
export async function getBrands() {
  await delay(100)
  const brands = [...new Set(PRODUCTS.filter((p) => p.is_active).map((p) => p.brand).filter(Boolean))]
  return brands.sort()
}

/**
 * Fetch all unique connector types from active products.
 * In Supabase: SELECT DISTINCT connector_type FROM products WHERE is_active = true
 * @returns {Promise<string[]>}
 */
export async function getConnectorTypes() {
  await delay(100)
  const types = [...new Set(PRODUCTS.filter((p) => p.is_active).map((p) => p.connector_type).filter(Boolean))]
  return types.sort()
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
 * In Supabase: SELECT * FROM categories ORDER BY display_order — add/remove from dashboard
 * @returns {Promise<Array>}
 */
export async function getCategories() {
  await delay()
  return [...CATEGORIES].sort((a, b) => a.display_order - b.display_order)
}

/**
 * Resolve a product image storage path to a display URL.
 * TODO: replace with supabase.storage.from('product-images').getPublicUrl(storagePath).data.publicUrl
 */
export function getImageUrl(storagePath) {
  return storagePath
}

/**
 * Resolve a datasheet storage path to a download URL.
 * TODO: replace with supabase.storage.from('product-datasheets').getPublicUrl(storagePath).data.publicUrl
 */
export function getDatasheetUrl(storagePath) {
  return storagePath
}

/**
 * Submit an expert consultation request via Netlify Forms.
 * Netlify captures the submission and sends an email notification to the configured address.
 */
export async function submitExpertRequest(payload) {
  const body = new URLSearchParams({
    'form-name': 'expert-request',
    name: payload.name || '',
    mobile: payload.mobile || '',
  })
  const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
  if (!res.ok) throw new Error('Submission failed')
}

/**
 * Submit a product quote request via Netlify Forms.
 * Netlify captures the submission and sends an email notification to the configured address.
 */
export async function submitQuoteRequest(payload) {
  const body = new URLSearchParams({
    'form-name': 'quote-request',
    name: payload.name || '',
    mobile: payload.mobile || '',
    product_name: payload.product_name || '',
  })
  const res = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
  if (!res.ok) throw new Error('Submission failed')
}
