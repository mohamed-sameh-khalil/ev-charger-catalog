import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { questions } from '../data/questions'

export default function QuestionnairePage() {
  const { t, lang } = useLang()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const navigate = useNavigate()

  const current = questions[step]
  const isLast = step === questions.length - 1
  const selectedValue = answers[current.id] || ''

  const question = current.question[lang] || current.question.en
  const options = current.options.map((o) => ({ ...o, label: o.label[lang] || o.label.en }))

  function selectAnswer(value) {
    setAnswers((prev) => ({ ...prev, [current.id]: value }))
  }

  function handleNext() {
    if (!selectedValue) return
    if (isLast) {
      navigate('/find-your-charger/results', { state: { answers } })
    } else {
      setStep((s) => s + 1)
    }
  }

  function handleBack() {
    if (step > 0) setStep((s) => s - 1)
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>{t('q_step', { current: step + 1, total: questions.length })}</span>
            <span>{Math.round(((step + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-brand-navy rounded-full overflow-hidden">
            <div
              className="h-full bg-brand-blue rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-brand-navy border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-6">{question}</h2>

          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => selectAnswer(option.value)}
                className={`w-full text-start px-5 py-4 rounded-xl border-2 transition-colors ${
                  selectedValue === option.value
                    ? 'border-brand-blue bg-brand-blue/10 text-white font-medium'
                    : 'border-white/10 hover:border-white/30 text-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-8">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="px-5 py-2 text-sm text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              {t('q_back')}
            </button>
            <button
              onClick={handleNext}
              disabled={!selectedValue}
              className="px-6 py-2 bg-brand-blue text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            >
              {isLast ? t('q_finish') : t('q_next')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
