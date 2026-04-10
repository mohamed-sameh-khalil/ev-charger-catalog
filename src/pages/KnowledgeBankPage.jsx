import { useState } from 'react'
import { useLang } from '../contexts/LanguageContext'

export default function KnowledgeBankPage() {
  const { t } = useLang()
  const faqs = t('kb_faq')
  const [open, setOpen] = useState(null)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('kb_title')}</h1>
        <p className="text-gray-400">{t('kb_subtitle')}</p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-brand-navy border border-white/10 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-start"
            >
              <span className="font-semibold text-white pe-4">{item.q}</span>
              <span
                className="text-brand-sky text-xl shrink-0 transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
