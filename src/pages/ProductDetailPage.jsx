import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { useCompare } from '../contexts/CompareContext'
import { getProductBySlug, getImageUrl, getDatasheetUrl } from '../services/products'
import { RequestQuoteModal } from '../components/ExpertFormModal'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const { t } = useLang()
  const { toggle, isSelected, MAX, items } = useCompare()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [showQuote, setShowQuote] = useState(false)

  useEffect(() => {
    setLoading(true)
    getProductBySlug(slug)
      .then((data) => {
        if (!data) {
          setError('Product not found.')
        } else {
          const sortedImages = [...(data.product_images || [])].sort((a, b) => {
            if (a.is_primary) return -1
            if (b.is_primary) return 1
            return (a.display_order || 0) - (b.display_order || 0)
          })
          setProduct({ ...data, product_images: sortedImages })
        }
      })
      .catch(() => setError('Failed to load product.'))
      .finally(() => setLoading(false))
  }, [slug])

  function formatBytes(bytes) {
    if (!bytes) return ''
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="animate-pulse space-y-6">
          <div className="h-6 bg-brand-navy rounded w-32" />
          <div className="h-96 bg-brand-navy rounded-xl" />
          <div className="h-4 bg-brand-navy rounded w-3/4" />
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">🔌</p>
        <h2 className="text-xl font-semibold text-white mb-4">{t('product_not_found')}</h2>
        <Link to="/catalog" className="text-brand-sky hover:underline">{t('product_back')}</Link>
      </div>
    )
  }

  const images = product.product_images || []
  const datasheets = product.product_datasheets || []
  const selected = isSelected(product.id)
  const compareAtMax = !selected && items.length >= MAX

  const specs = [
    { label: t('spec_brand'), value: product.brand || '—' },
    { label: t('spec_power'), value: product.power_output_kw ? `${product.power_output_kw} kW` : '—' },
    { label: t('spec_connector'), value: product.connector_type || '—' },
    { label: t('spec_phase'), value: product.phase || '—' },
    { label: t('spec_installation'), value: product.installation_type || '—' },
    { label: t('spec_smart'), value: product.is_smart ? t('spec_yes') : t('spec_no') },
    { label: t('spec_warranty'), value: product.warranty || '—' },
    { label: t('spec_category'), value: product.categories?.name || '—' },
  ]

  return (
    <>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <Link to="/catalog" className="text-sm text-brand-sky hover:underline mb-6 inline-block">
          {t('product_back')}
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image gallery */}
          <div>
            <div className="bg-brand-navy rounded-xl overflow-hidden h-80 flex items-center justify-center border border-white/10">
              {images.length > 0 ? (
                <img
                  src={getImageUrl(images[activeImage].storage_path)}
                  alt={images[activeImage].alt_text || product.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-8xl">⚡</span>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                      i === activeImage ? 'border-brand-blue' : 'border-white/10'
                    }`}
                  >
                    <img src={getImageUrl(img.storage_path)} alt={img.alt_text || ''} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-4">
            <span className="text-sm text-brand-sky font-medium uppercase tracking-wide">
              {product.brand} · {product.categories?.name}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{product.name}</h1>
            <p className="text-gray-400">{product.short_description}</p>
            <p className="text-2xl font-bold text-white">
              {product.price != null
                ? `${product.currency || 'EGP'} ${Number(product.price).toLocaleString()}`
                : t('product_contact')}
            </p>

            {/* Key features */}
            {product.key_features?.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-2">{t('product_features')}</p>
                <ul className="space-y-1.5">
                  {product.key_features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-brand-sky mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col gap-3 mt-2">
              <button
                onClick={() => setShowQuote(true)}
                className="bg-brand-blue text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                {t('product_quote')}
              </button>
              <button
                onClick={() => toggle(product)}
                disabled={compareAtMax}
                className={`py-2.5 px-6 rounded-xl text-sm font-medium border transition-colors ${
                  selected
                    ? 'border-brand-sky text-brand-sky bg-brand-sky/10 hover:bg-brand-sky/20'
                    : compareAtMax
                    ? 'border-white/10 text-gray-500 cursor-not-allowed'
                    : 'border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {selected ? `✓ ${t('product_compare_added')}` : t('product_compare')}
                {compareAtMax && <span className="ms-2 text-xs">({t('compare_max')})</span>}
              </button>
            </div>
          </div>
        </div>

        {/* Specs */}
        <section className="mt-10">
          <h2 className="text-lg font-bold text-white mb-4">{t('product_specs')}</h2>
          <div className="bg-brand-navy border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specs.map(({ label, value }) => (
                  <tr key={label} className="border-b border-white/10 last:border-0">
                    <td className="px-5 py-3 text-gray-400 font-medium w-1/2">{label}</td>
                    <td className="px-5 py-3 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Datasheet downloads */}
        {datasheets.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-bold text-white mb-4">{t('product_downloads')}</h2>
            <div className="flex flex-col gap-3">
              {datasheets.map((ds, i) =>
                ds.storage_path ? (
                  <a
                    key={i}
                    href={getDatasheetUrl(ds.storage_path)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 bg-brand-blue text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity w-fit"
                  >
                    📥 {ds.file_name}
                    {ds.file_size_bytes && (
                      <span className="text-blue-200 font-normal">({formatBytes(ds.file_size_bytes)})</span>
                    )}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="inline-flex items-center gap-3 bg-brand-navy border border-white/10 text-gray-400 text-sm px-5 py-2.5 rounded-lg w-fit cursor-not-allowed"
                    title="Datasheet will be available soon"
                  >
                    📄 {ds.file_name}
                    {ds.file_size_bytes && (
                      <span className="text-gray-600 font-normal">({formatBytes(ds.file_size_bytes)})</span>
                    )}
                    <span className="text-xs text-gray-500 border border-white/10 rounded px-1.5 py-0.5">Coming soon</span>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* Long description */}
        {product.long_description && (
          <section className="mt-10">
            <h2 className="text-lg font-bold text-white mb-4">{t('product_description')}</h2>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">{product.long_description}</p>
          </section>
        )}
      </div>

      {showQuote && <RequestQuoteModal product={product} onClose={() => setShowQuote(false)} />}
    </>
  )
}
