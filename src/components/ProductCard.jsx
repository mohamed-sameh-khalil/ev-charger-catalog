import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { getImageUrl } from '../services/products'

function getPrimaryImageUrl(product) {
  const images = product.product_images || []
  const primary = images.find((img) => img.is_primary) || images[0]
  if (!primary) return null
  return getImageUrl(primary.storage_path)
}

export default function ProductCard({ product }) {
  const { t } = useLang()
  const imageUrl = getPrimaryImageUrl(product)

  return (
    <Link
      to={`/catalog/${product.slug}`}
      className="group bg-brand-navy border border-white/10 rounded-xl overflow-hidden hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10 transition-all flex flex-col"
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
          <span className="text-sm text-gray-400">{product.power_output_kw} kW</span>
          <span className="font-semibold text-white">
            {product.price != null
              ? `${product.currency || 'USD'} ${Number(product.price).toLocaleString()}`
              : t('product_contact')}
          </span>
        </div>
      </div>
    </Link>
  )
}
