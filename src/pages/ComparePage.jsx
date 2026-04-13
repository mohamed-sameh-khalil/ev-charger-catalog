import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { useCompare } from '../contexts/CompareContext'
import { getImageUrl } from '../services/products'

const SPEC_ROWS = [
  { key: 'brand', label_en: 'Brand', label_ar: 'العلامة التجارية', get: (p) => p.brand || '—' },
  { key: 'categories', label_en: 'Category', label_ar: 'الفئة', get: (p) => p.categories?.name || '—' },
  { key: 'power_output_kw', label_en: 'Power Output', label_ar: 'قوة الشحن', get: (p) => p.power_output_kw ? `${p.power_output_kw} kW` : '—' },
  { key: 'connector_type', label_en: 'Connector Type', label_ar: 'نوع الموصل', get: (p) => p.connector_type || '—' },
  { key: 'phase', label_en: 'Phase', label_ar: 'الطور', get: (p) => p.phase || '—' },
  { key: 'installation_type', label_en: 'Installation Type', label_ar: 'نوع التركيب', get: (p) => p.installation_type || '—' },
  { key: 'is_smart', label_en: 'Smart Features', label_ar: 'ميزات ذكية', get: (p, t) => p.is_smart ? t('spec_yes') : t('spec_no') },
  { key: 'warranty', label_en: 'Warranty', label_ar: 'الضمان', get: (p) => p.warranty || '—' },
  { key: 'price', label_en: 'Price', label_ar: 'السعر', get: (p) => p.price != null ? `${p.currency || 'EGP'} ${Number(p.price).toLocaleString()}` : '—' },
]

export default function ComparePage() {
  const { t, lang } = useLang()
  const { items, clear } = useCompare()

  if (items.length < 2) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">⚖️</p>
        <h2 className="text-xl font-semibold text-white mb-3">{t('compare_empty')}</h2>
        <Link to="/catalog" className="text-brand-sky hover:underline text-sm">
          {t('product_back')}
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">{t('compare_title')}</h1>
        <div className="flex items-center gap-4">
          <button onClick={clear} className="text-sm text-gray-400 hover:text-white transition-colors">
            {t('compare_clear')}
          </button>
          <Link to="/catalog" className="text-sm text-brand-sky hover:underline">
            {t('product_back')}
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          {/* Product headers */}
          <thead>
            <tr>
              <th className="w-40 shrink-0" />
              {items.map((p) => (
                <th key={p.id} className="p-3 align-top">
                  <div className="bg-brand-navy border border-white/10 rounded-xl p-4 flex flex-col items-center gap-3">
                    <div className="w-full h-36 bg-brand-dark rounded-lg flex items-center justify-center overflow-hidden">
                      {(p.product_images || []).length > 0 ? (
                        <img
                          src={getImageUrl(p.product_images[0].storage_path)}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-5xl">⚡</span>
                      )}
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-brand-sky mb-1">{p.brand}</p>
                      <h3 className="font-semibold text-white text-sm leading-snug">{p.name}</h3>
                    </div>
                    <Link
                      to={`/catalog/${p.slug}`}
                      className="text-xs text-gray-400 hover:text-white transition-colors underline"
                    >
                      {lang === 'ar' ? 'عرض المنتج' : 'View product'}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Spec rows */}
          <tbody>
            {SPEC_ROWS.map((row, i) => (
              <tr key={row.key} className={i % 2 === 0 ? 'bg-brand-navy/40' : ''}>
                <td className="px-4 py-3 text-sm font-medium text-gray-400 whitespace-nowrap">
                  {lang === 'ar' ? row.label_ar : row.label_en}
                </td>
                {items.map((p) => {
                  const val = row.get(p, t)
                  return (
                    <td key={p.id} className="px-4 py-3 text-sm text-white text-center">
                      {val}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>

          {/* Key features */}
          <tbody>
            <tr>
              <td className="px-4 py-3 text-sm font-medium text-gray-400 align-top whitespace-nowrap pt-6">
                {t('product_features')}
              </td>
              {items.map((p) => (
                <td key={p.id} className="px-4 py-3 align-top pt-6">
                  <ul className="space-y-1.5">
                    {(p.key_features || []).map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-brand-sky mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
