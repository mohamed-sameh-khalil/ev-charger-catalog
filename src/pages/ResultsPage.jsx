import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { getProducts } from '../services/products'
import ProductCard from '../components/ProductCard'

function buildFilters(answers) {
  const filters = {}
  if (answers.speed === 'standard') filters.max_power_kw = 7
  else if (answers.speed === 'fast') { filters.min_power_kw = 7; filters.max_power_kw = 22 }
  else if (answers.speed === 'ultra') filters.min_power_kw = 22
  if (answers.installation === 'wall') filters.installation_type = 'Wall-mounted'
  else if (answers.installation === 'pedestal') filters.installation_type = 'Pedestal'
  else if (answers.installation === 'portable') filters.installation_type = 'Portable'
  if (answers.smart === 'yes') filters.is_smart = true
  return filters
}

export default function ResultsPage() {
  const location = useLocation()
  const { t } = useLang()
  const answers = location.state?.answers || {}
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const filters = buildFilters(answers)
    getProducts(filters)
      .then((data) => setProducts(data.slice(0, 3)))
      .finally(() => setLoading(false))
  }, [])

  const tagKeys = {
    home: 'results_tag_home',
    business: 'results_tag_business',
    standard: 'results_tag_standard',
    fast: 'results_tag_fast',
    ultra: 'results_tag_ultra',
    smart_yes: 'results_tag_smart',
    portable: 'results_tag_portable',
  }

  function getReason() {
    const tags = []
    if (answers.location) tags.push(t(tagKeys[answers.location] || ''))
    if (answers.speed) tags.push(t(tagKeys[answers.speed] || ''))
    if (answers.smart === 'yes') tags.push(t('results_tag_smart'))
    if (answers.installation === 'portable') tags.push(t('results_tag_portable'))
    const filtered = tags.filter(Boolean)
    return filtered.length > 0
      ? t('results_matched', { tags: filtered.join(', ') })
      : t('results_based')
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">{t('results_title')}</h1>
        <p className="text-gray-400">{getReason()}</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-brand-navy animate-pulse rounded-xl h-72" />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-4">🤔</p>
          <p className="text-lg font-medium text-white mb-2">{t('results_none_title')}</p>
          <p className="text-sm mb-6">{t('results_none_sub')}</p>
          <Link
            to="/catalog"
            className="inline-block bg-brand-blue text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            {t('results_browse')}
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/catalog" className="text-brand-sky hover:underline text-sm">
              {t('results_browse_all')}
            </Link>
          </div>
        </>
      )}

      <div className="text-center mt-6">
        <Link to="/find-your-charger" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
          {t('results_retake')}
        </Link>
      </div>
    </div>
  )
}
