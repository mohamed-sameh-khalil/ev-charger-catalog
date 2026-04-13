import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../contexts/LanguageContext'
import { questions } from '../data/questions'

// SVG illustrations for the phase meter question
function SinglePhaseSVG() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Meter body */}
      <rect x="15" y="20" width="90" height="100" rx="8" fill="#0C1A35" stroke="#0078FF" strokeWidth="2"/>
      {/* Display */}
      <rect x="25" y="32" width="70" height="30" rx="4" fill="#060B18"/>
      <text x="60" y="53" textAnchor="middle" fill="#50C8FF" fontSize="14" fontWeight="bold">1φ</text>
      {/* Dial */}
      <circle cx="60" cy="90" r="18" fill="#060B18" stroke="#0078FF" strokeWidth="1.5"/>
      <line x1="60" y1="75" x2="60" y2="90" stroke="#50C8FF" strokeWidth="2" strokeLinecap="round"/>
      {/* Terminals — 2 wires */}
      <rect x="38" y="115" width="12" height="8" rx="2" fill="#0078FF"/>
      <rect x="70" y="115" width="12" height="8" rx="2" fill="#0078FF"/>
      <line x1="44" y1="123" x2="44" y2="135" stroke="#50C8FF" strokeWidth="2"/>
      <line x1="76" y1="123" x2="76" y2="135" stroke="#50C8FF" strokeWidth="2"/>
      {/* Label */}
      <text x="60" y="148" textAnchor="middle" fill="#9CA3AF" fontSize="9">2 wires</text>
    </svg>
  )
}

function ThreePhaseSVG() {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Meter body */}
      <rect x="10" y="20" width="100" height="100" rx="8" fill="#0C1A35" stroke="#0078FF" strokeWidth="2"/>
      {/* Display */}
      <rect x="20" y="30" width="80" height="28" rx="4" fill="#060B18"/>
      <text x="60" y="50" textAnchor="middle" fill="#50C8FF" fontSize="14" fontWeight="bold">3φ</text>
      {/* Three dials */}
      <circle cx="35" cy="85" r="12" fill="#060B18" stroke="#0078FF" strokeWidth="1.5"/>
      <line x1="35" y1="74" x2="35" y2="85" stroke="#50C8FF" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="60" cy="85" r="12" fill="#060B18" stroke="#0078FF" strokeWidth="1.5"/>
      <line x1="60" y1="74" x2="60" y2="85" stroke="#50C8FF" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="85" cy="85" r="12" fill="#060B18" stroke="#0078FF" strokeWidth="1.5"/>
      <line x1="85" y1="74" x2="85" y2="85" stroke="#50C8FF" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Terminals — 4 wires */}
      <rect x="20" y="114" width="10" height="7" rx="1.5" fill="#0078FF"/>
      <rect x="38" y="114" width="10" height="7" rx="1.5" fill="#0078FF"/>
      <rect x="56" y="114" width="10" height="7" rx="1.5" fill="#0078FF"/>
      <rect x="74" y="114" width="10" height="7" rx="1.5" fill="#0078FF"/>
      <line x1="25" y1="121" x2="25" y2="133" stroke="#50C8FF" strokeWidth="2"/>
      <line x1="43" y1="121" x2="43" y2="133" stroke="#50C8FF" strokeWidth="2"/>
      <line x1="61" y1="121" x2="61" y2="133" stroke="#50C8FF" strokeWidth="2"/>
      <line x1="79" y1="121" x2="79" y2="133" stroke="#50C8FF" strokeWidth="2"/>
      {/* Label */}
      <text x="60" y="148" textAnchor="middle" fill="#9CA3AF" fontSize="9">4 wires</text>
    </svg>
  )
}

const PHASE_ILLUSTRATIONS = {
  single: SinglePhaseSVG,
  three: ThreePhaseSVG,
}

export default function QuestionnairePage() {
  const { t, lang } = useLang()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const navigate = useNavigate()

  const current = questions[step]
  const isLast = step === questions.length - 1
  const selectedValue = answers[current.id] || ''

  const question = current.question[lang] || current.question.en
  const options = current.options.map((o) => ({
    ...o,
    label: o.label[lang] || o.label.en,
    description: o.description ? (o.description[lang] || o.description.en) : null,
  }))

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
      <div className="w-full max-w-2xl">
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

          {current.hasImages ? (
            /* Image option layout for phase question */
            <div className="grid grid-cols-2 gap-4">
              {options.map((option) => {
                const Illustration = PHASE_ILLUSTRATIONS[option.value]
                const isActive = selectedValue === option.value
                return (
                  <button
                    key={option.value}
                    onClick={() => selectAnswer(option.value)}
                    className={`flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition-colors ${
                      isActive
                        ? 'border-brand-blue bg-brand-blue/10'
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="w-28 h-32">
                      {Illustration && <Illustration />}
                    </div>
                    <div className="text-center">
                      <p className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {option.label}
                      </p>
                      {option.description && (
                        <p className="text-xs text-gray-500 mt-1">{option.description}</p>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          ) : (
            /* Standard list layout */
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
          )}

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
