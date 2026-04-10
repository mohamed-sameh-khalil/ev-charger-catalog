import { Link } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  const quickLinks = [
    { to: '/', label: t('nav_home') },
    { to: '/catalog', label: t('nav_catalog') },
    { to: '/find-your-charger', label: t('nav_find') },
    { to: '/knowledge-bank', label: t('nav_knowledge') },
  ]

  return (
    <footer className="bg-brand-navy border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="mb-3">
              <img
                src="https://www.solargyco.com/mobility/images/logos/Emobility.png"
                alt="E-Mobility"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">{t('footer_tagline')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-brand-sky transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer_contact')}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href={`tel:${t('contact_phone_val').replace(/\s/g, '')}`} className="hover:text-brand-sky transition-colors">
                  {t('contact_phone_val')}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span>
                <a href={`mailto:${t('contact_email_val')}`} className="hover:text-brand-sky transition-colors">
                  {t('contact_email_val')}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{t('contact_address_val')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🕐</span>
                <span>{t('contact_hours_val')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} EV Charger Solutions. {t('footer_rights')}
        </div>
      </div>
    </footer>
  )
}
