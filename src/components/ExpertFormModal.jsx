import { useState } from 'react'
import { useLang } from '../contexts/LanguageContext'
import { submitExpertRequest, submitQuoteRequest } from '../services/products'

export default function ExpertFormModal({ onClose }) {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', mobile: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = t('form_required')
    if (!form.mobile.trim()) e.mobile = t('form_required')
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitting(true)
    try {
      await submitExpertRequest(form)
      setSuccess(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Overlay onClose={onClose}>
      {success ? (
        <div className="text-center py-6">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-white mb-2">{t('form_success_title')}</h2>
          <p className="text-gray-300 mb-6">{t('form_success_body')}</p>
          <button
            onClick={onClose}
            className="bg-brand-blue text-white font-semibold px-8 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('form_close')}
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-white mb-1">{t('expert_title')}</h2>
          <p className="text-gray-400 text-sm mb-6">{t('expert_subtitle')}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label={t('form_name')} error={errors.name}>
              <input
                type="text"
                placeholder={t('form_name_placeholder')}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              />
            </Field>
            <Field label={t('form_mobile')} error={errors.mobile}>
              <input
                type="tel"
                placeholder={t('form_mobile_placeholder')}
                value={form.mobile}
                onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-blue text-white font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity mt-2"
            >
              {submitting ? t('form_submitting') : t('form_submit')}
            </button>
          </form>
        </>
      )}
    </Overlay>
  )
}

export function RequestQuoteModal({ product, onClose }) {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', mobile: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = t('form_required')
    if (!form.mobile.trim()) e.mobile = t('form_required')
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setSubmitting(true)
    try {
      await submitQuoteRequest({ ...form, product_name: product?.name })
      setSuccess(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Overlay onClose={onClose}>
      {success ? (
        <div className="text-center py-6">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-white mb-2">{t('form_success_title')}</h2>
          <p className="text-gray-300 mb-6">{t('form_success_body')}</p>
          <button
            onClick={onClose}
            className="bg-brand-blue text-white font-semibold px-8 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('form_close')}
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-xl font-bold text-white mb-1">{t('quote_title')}</h2>
          <p className="text-gray-400 text-sm mb-4">{t('quote_subtitle')}</p>
          {product && (
            <div className="bg-brand-dark rounded-lg px-4 py-3 mb-4 border border-white/10">
              <span className="text-xs text-gray-400">{t('quote_product_label')}</span>
              <p className="text-white font-medium">{product.name}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label={t('form_name')} error={errors.name}>
              <input
                type="text"
                placeholder={t('form_name_placeholder')}
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              />
            </Field>
            <Field label={t('form_mobile')} error={errors.mobile}>
              <input
                type="tel"
                placeholder={t('form_mobile_placeholder')}
                value={form.mobile}
                onChange={(e) => setForm((f) => ({ ...f, mobile: e.target.value }))}
                className="w-full bg-brand-dark border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue"
              />
            </Field>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-brand-blue text-white font-semibold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity mt-2"
            >
              {submitting ? t('form_submitting') : t('form_submit')}
            </button>
          </form>
        </>
      )}
    </Overlay>
  )
}

function Overlay({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(6,11,24,0.85)' }}
      onClick={onClose}
    >
      <div
        className="bg-brand-navy rounded-2xl p-8 w-full max-w-md relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 end-4 text-gray-400 hover:text-white transition-colors text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}
