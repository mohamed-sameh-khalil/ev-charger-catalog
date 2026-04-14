import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { useCompare } from '../contexts/CompareContext'
import { getImageUrl } from '../services/products'

function getPrimaryImageUrl(product) {
  const images = product.product_images || []
  const primary = images.find((img) => img.is_primary) || images[0]
  if (!primary) return null
  return getImageUrl(primary.storage_path)
}

export default function ProductCard({ product }) {
  const { t } = useLang()
  const { toggle, isSelected, MAX, items } = useCompare()
  const imageUrl = getPrimaryImageUrl(product)
  const selected = isSelected(product.id)
  const compareAtMax = !selected && items.length >= MAX

  function handleCompare(e) {
    e.preventDefault()
    e.stopPropagation()
    if (compareAtMax) return
    toggle(product)
  }

  return (
    <div className="relative group">
      {/* Compare toggle */}
      <button
        onClick={handleCompare}
        title={compareAtMax ? t('compare_max') : selected ? t('product_compare_added') : t('product_compare')}
        className={`absolute top-3 end-3 z-10 flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full border transition-colors ${
          selected
            ? 'bg-brand-blue border-brand-blue text-white'
            : compareAtMax
            ? 'bg-brand-dark/80 border-white/10 text-gray-500 cursor-not-allowed'
            : 'bg-brand-dark/80 border-white/20 text-gray-300 hover:border-brand-blue hover:text-white backdrop-blur-sm'
        }`}
      >
        {selected ? '✓' : '⊕'} {t('product_compare')}
      </button>

      <Link
        to={`/catalog/${product.slug}`}
        className="block bg-brand-navy border border-white/10 rounded-xl overflow-hidden hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all flex flex-col"
      >
        <div className="bg-brand-dark h-48 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <span className="text-5xl">⚡</span>
          )}
        </div>
        <div className="p-4 flex flex-col gap-1 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-brand-sky font-medium uppercase tracking-wide">
              {product.categories?.name}
            </span>
            {product.brand && (
              <span className="text-xs text-gray-500">{product.brand}</span>
            )}
          </div>
          <h3 className="font-semibold text-white group-hover:text-brand-sky transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 flex-1">{product.short_description}</p>
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
            <span className="text-sm text-gray-400">{product.power_output_label || `${product.power_output_kw} kW`}</span>
            <span className="font-semibold text-white">
              {product.price != null
                ? `${product.currency || 'EGP'} ${Number(product.price).toLocaleString()}`
                : t('product_contact')}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
