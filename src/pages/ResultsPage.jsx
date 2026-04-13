import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { getProducts } from '../services/products'
import ProductCard from '../components/ProductCard'

/**
 * Map questionnaire answers to getProducts() filters.
 * Questions: protocol, product_type, phase, smart
 */
function buildFilters(answers) {
  const filters = {}

  // Protocol → connector_type
  if (answers.protocol === 'gbt') filters.connector_type = 'GBT'
  else if (answers.protocol === 'type1') filters.connector_type = 'Type 1'
  else if (answers.protocol === 'type2') filters.connector_type = 'Type 2'

  // Product type → category_name
  if (answers.product_type === 'wall') filters.category_name = 'Wall Mounted Charger'
  else if (answers.product_type === 'cable') filters.category_name = 'Cables'
  else if (answers.product_type === 'portable') filters.category_name = 'Portable Charger'

  // Phase
  if (answers.phase === 'single') filters.phase = 'Single Phase'
  else if (answers.phase === 'three') filters.phase = 'Three Phase'

  // Smart
  if (answers.smart === 'yes') filters.is_smart = true

  return filters
}

function getReason(answers, t) {
  const tags = []
  if (answers.protocol === 'gbt') tags.push('GBT / Chinese protocol')
  else if (answers.protocol === 'type1') tags.push('Type 1')
  else if (answers.protocol === 'type2') tags.push('Type 2')
  if (answers.product_type === 'wall') tags.push(t('nav_find') === 'Help Me Choose' ? 'wall-mounted charger' : 'شاحن جداري')
  else if (answers.product_type === 'cable') tags.push(t('nav_find') === 'Help Me Choose' ? 'cable' : 'كابل')
  else if (answers.product_type === 'portable') tags.push(t('nav_find') === 'Help Me Choose' ? 'portable charger' : 'شاحن محمول')
  if (answers.phase === 'single') tags.push(t('filter_single'))
  else if (answers.phase === 'three') tags.push(t('filter_three'))
  if (answers.smart === 'yes') tags.push(t('spec_smart'))
  return tags.length > 0 ? t('results_matched', { tags: tags.join(', ') }) : t('results_based')
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
      .then((data) => {
        // If exact match returns nothing, broaden by removing phase filter
        if (data.length === 0 && filters.phase) {
          const { phase, ...broader } = filters
          return getProducts(broader)
        }
        return data
      })
      .then((data) => setProducts(data.slice(0, 3)))
      .finally(() => setLoading(false))
  }, [])

  const reason = getReason(answers, t)

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white mb-3">{t('results_title')}</h1>
        <p className="text-gray-400">{reason}</p>
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
