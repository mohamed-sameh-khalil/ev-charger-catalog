import { useState, useEffect } from 'react'
import { useLang } from '../contexts/LanguageContext'
import { useProducts } from '../hooks/useProducts'
import { getCategories, getBrands } from '../services/products'
import ProductCard from '../components/ProductCard'

export default function CatalogPage() {
  const { t } = useLang()
  const [categories, setCategories] = useState([])
  const [brands, setBrands] = useState([])
  const [filters, setFilters] = useState({
    category_id: '',
    brand: '',
    price_sort: '',
    powerRange: 0,
    connector_type: '',
    installation_type: '',
    phase: '',
  })

  const POWER_RANGES = [
    { label: t('filter_power_all'), min: null, max: null },
    { label: t('filter_power_7'), min: null, max: 7 },
    { label: t('filter_power_7_22'), min: 7, max: 22 },
    { label: t('filter_power_22'), min: 22, max: null },
  ]

  useEffect(() => {
    getCategories().then(setCategories)
    getBrands().then(setBrands)
  }, [])

  const range = POWER_RANGES[filters.powerRange]
  const { products, loading, error } = useProducts({
    ...(filters.category_id && { category_id: filters.category_id }),
    ...(filters.brand && { brand: filters.brand }),
    ...(filters.price_sort && { price_sort: filters.price_sort }),
    ...(range.min != null && { min_power_kw: range.min }),
    ...(range.max != null && { max_power_kw: range.max }),
    ...(filters.connector_type && { connector_type: filters.connector_type }),
    ...(filters.installation_type && { installation_type: filters.installation_type }),
    ...(filters.phase && { phase: filters.phase }),
  })

  function update(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  function clearFilters() {
    setFilters({ category_id: '', brand: '', price_sort: '', powerRange: 0, connector_type: '', installation_type: '', phase: '' })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-white mb-8">{t('catalog_title')}</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-60 shrink-0">
          <div className="bg-brand-navy border border-white/10 rounded-xl p-5 space-y-6">
            <FilterGroup label={t('filter_category')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.category_id}
                onChange={(e) => update('category_id', e.target.value)}
              >
                <option value="">{t('filter_all_categories')}</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup label={t('filter_brand')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.brand}
                onChange={(e) => update('brand', e.target.value)}
              >
                <option value="">{t('filter_all_brands')}</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup label={t('filter_price')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.price_sort}
                onChange={(e) => update('price_sort', e.target.value)}
              >
                <option value="">{t('filter_sort_default')}</option>
                <option value="asc">{t('filter_sort_low_high')}</option>
                <option value="desc">{t('filter_sort_high_low')}</option>
              </select>
            </FilterGroup>

            <FilterGroup label={t('filter_power')}>
              {POWER_RANGES.map((r, i) => (
                <label key={i} className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="powerRange"
                    checked={filters.powerRange === i}
                    onChange={() => update('powerRange', i)}
                    className="accent-brand-blue"
                  />
                  {r.label}
                </label>
              ))}
            </FilterGroup>

            <FilterGroup label={t('filter_connector')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.connector_type}
                onChange={(e) => update('connector_type', e.target.value)}
              >
                <option value="">{t('filter_all_connectors')}</option>
                {['Type 2', 'CCS2', 'CHAdeMO', 'Type 1'].map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup label={t('filter_installation')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.installation_type}
                onChange={(e) => update('installation_type', e.target.value)}
              >
                <option value="">{t('filter_all_installations')}</option>
                {['Wall-mounted', 'Pedestal', 'Portable'].map((ty) => (
                  <option key={ty} value={ty}>{ty}</option>
                ))}
              </select>
            </FilterGroup>

            <FilterGroup label={t('filter_phase')}>
              <select
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-brand-blue"
                value={filters.phase}
                onChange={(e) => update('phase', e.target.value)}
              >
                <option value="">{t('filter_all_phases')}</option>
                <option value="Single Phase">{t('filter_single')}</option>
                <option value="Three Phase">{t('filter_three')}</option>
              </select>
            </FilterGroup>

            <button
              onClick={clearFilters}
              className="w-full text-sm text-gray-400 hover:text-white underline transition-colors"
            >
              {t('filter_clear')}
            </button>
          </div>
        </aside>

        {/* Grid */}
        <main className="flex-1 min-w-0">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="bg-brand-navy animate-pulse rounded-xl h-72" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-400">Failed to load products. Please try again.</div>
          ) : products.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-3">🔍</p>
              <p className="text-lg font-medium text-white">{t('catalog_empty_title')}</p>
              <p className="text-sm mt-1">{t('catalog_empty_sub')}</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-400 mb-4">
                {products.length === 1
                  ? t('results_count_one')
                  : t('results_count', { n: products.length })}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

function FilterGroup({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">{label}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  )
}
