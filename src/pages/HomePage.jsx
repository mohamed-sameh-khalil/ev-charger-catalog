import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import ExpertFormModal from '../components/ExpertFormModal'

export default function HomePage() {
  const { t } = useLang()
  const { products: featured, loading } = useProducts({ is_featured: true })
  const [showExpert, setShowExpert] = useState(false)

  const contactItems = [
    { icon: '📞', label: t('contact_phone'), value: t('contact_phone_val'), href: `tel:${t('contact_phone_val').replace(/\s/g, '')}` },
    { icon: '✉️', label: t('contact_email'), value: t('contact_email_val'), href: `mailto:${t('contact_email_val')}` },
    { icon: '📍', label: t('contact_address'), value: t('contact_address_val'), href: null },
    { icon: '🕐', label: t('contact_hours'), value: t('contact_hours_val'), href: null },
  ]

  return (
    <>
      {/* Hero */}
      <section
        className="relative py-24 px-4 text-white overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #060B18 0%, #0C1A35 50%, #003a7a 100%)' }}
      >
        {/* Decorative glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 60%, #0078FF 0%, transparent 70%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight whitespace-pre-line">
            {t('hero_title')}
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">{t('hero_subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="bg-brand-blue text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              {t('hero_browse')}
            </Link>
            <Link
              to="/find-your-charger"
              className="border border-brand-sky text-brand-sky font-semibold px-8 py-3.5 rounded-xl hover:bg-brand-sky/10 transition-colors"
            >
              {t('hero_choose')}
            </Link>
            <button
              onClick={() => setShowExpert(true)}
              className="border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              {t('hero_expert')}
            </button>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      {(loading || featured.length > 0) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">{t('section_featured')}</h2>
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="bg-brand-navy animate-pulse rounded-xl h-72" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
            <div className="text-center mt-10">
              <Link
                to="/catalog"
                className="inline-block bg-brand-blue text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                {t('view_all')}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact Us */}
      <section id="contact" className="py-16 px-4 bg-brand-navy border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t('contact_title')}</h2>
            <p className="text-gray-400">{t('contact_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map(({ icon, label, value, href }) => (
              <div key={label} className="bg-brand-dark rounded-xl p-6 border border-white/10 flex items-start gap-4">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white font-medium hover:text-brand-sky transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowExpert(true)}
              className="bg-brand-blue text-white font-semibold px-10 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              {t('nav_expert')}
            </button>
          </div>
        </div>
      </section>

      {showExpert && <ExpertFormModal onClose={() => setShowExpert(false)} />}
    </>
  )
}
