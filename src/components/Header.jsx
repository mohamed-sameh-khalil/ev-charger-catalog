import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import ExpertFormModal from './ExpertFormModal'

export default function Header() {
  const { t, lang, toggleLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)
  const [showExpert, setShowExpert] = useState(false)

  const navLinks = [
    { to: '/', label: t('nav_home') },
    { to: '/catalog', label: t('nav_catalog') },
    { to: '/find-your-charger', label: t('nav_find') },
    { to: '/knowledge-bank', label: t('nav_knowledge') },
  ]

  return (
    <>
      <header className="bg-brand-navy border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src="https://www.solargyco.com/mobility/images/logos/Emobility.png"
                alt="E-Mobility"
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md text-sm transition-colors ${
                      isActive
                        ? 'text-brand-sky font-medium'
                        : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Language toggle */}
              <button
                onClick={toggleLang}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/20 text-sm text-gray-300 hover:text-white hover:border-white/40 transition-colors"
                title="Switch language"
              >
                <span>{lang === 'en' ? '🇪🇬' : '🇬🇧'}</span>
                <span>{lang === 'en' ? 'العربية' : 'English'}</span>
              </button>

              {/* Talk to Expert */}
              <button
                onClick={() => setShowExpert(true)}
                className="hidden sm:block bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                {t('nav_expert')}
              </button>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <nav className="lg:hidden border-t border-white/10 py-4 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isActive ? 'text-brand-sky font-medium' : 'text-gray-300 hover:text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <div className="flex gap-2 mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => { toggleLang(); setMenuOpen(false) }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-white/20 text-sm text-gray-300"
                >
                  <span>{lang === 'en' ? '🇪🇬' : '🇬🇧'}</span>
                  <span>{lang === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <button
                  onClick={() => { setShowExpert(true); setMenuOpen(false) }}
                  className="flex-1 bg-brand-blue text-white text-sm font-semibold px-4 py-2 rounded-lg"
                >
                  {t('nav_expert')}
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {showExpert && <ExpertFormModal onClose={() => setShowExpert(false)} />}
    </>
  )
}
