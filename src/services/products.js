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
  // ── Products ───────────────────────────────────────────────────────────────

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
 * Submit an expert consultation request.
 * TODO: wire up to a backend / email service when ready.
 */
export async function submitExpertRequest(_payload) {
  // no-op — success popup is shown client-side
}

/**
 * Submit a product quote request.
 * TODO: wire up to a backend / email service when ready.
 */
export async function submitQuoteRequest(_payload) {
  // no-op — success popup is shown client-side
}
