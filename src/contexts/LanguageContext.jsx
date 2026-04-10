import { createContext, useContext, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const isRTL = lang === 'ar'

  function t(key, vars = {}) {
    const str = translations[lang][key] ?? translations['en'][key] ?? key
    return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), str)
  }

  function toggleLang() {
    setLang((l) => (l === 'en' ? 'ar' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
