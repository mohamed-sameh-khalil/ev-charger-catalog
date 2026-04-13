import { Link } from 'react-router-dom'
import { useCompare } from '../contexts/CompareContext'
import { useLang } from '../contexts/LanguageContext'

export default function CompareBar() {
  const { items, clear, MAX } = useCompare()
  const { t } = useLang()

  if (items.length < 1) return null

  return (
    <div className="fixed bottom-0 start-0 end-0 z-50 bg-brand-navy border-t border-brand-blue/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400 shrink-0">
            {t('compare_bar_label', { n: items.length })}
            {items.length < MAX && (
              <span className="ms-1 text-gray-500">({MAX - items.length} more)</span>
            )}
          </span>
          {items.map((p) => (
            <span
              key={p.id}
              className="inline-flex items-center gap-1.5 bg-brand-dark border border-white/10 rounded-lg px-3 py-1 text-sm text-white"
            >
              {p.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={clear}
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            {t('compare_clear')}
          </button>
          {items.length >= 2 ? (
            <Link
              to="/compare"
              className="bg-brand-blue text-white text-sm font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('compare_btn')}
            </Link>
          ) : (
            <span className="text-xs text-gray-500 border border-white/10 rounded-lg px-4 py-2">
              {t('compare_empty').split('.')[0]}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
