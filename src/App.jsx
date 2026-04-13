import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { CompareProvider } from './contexts/CompareContext'
import Header from './components/Header'
import Footer from './components/Footer'
import CompareBar from './components/CompareBar'
import HomePage from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import ProductDetailPage from './pages/ProductDetailPage'
import QuestionnairePage from './pages/QuestionnairePage'
import ResultsPage from './pages/ResultsPage'
import KnowledgeBankPage from './pages/KnowledgeBankPage'
import ComparePage from './pages/ComparePage'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <CompareProvider>
          <div className="min-h-screen flex flex-col bg-brand-dark">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:slug" element={<ProductDetailPage />} />
                <Route path="/find-your-charger" element={<QuestionnairePage />} />
                <Route path="/find-your-charger/results" element={<ResultsPage />} />
                <Route path="/knowledge-bank" element={<KnowledgeBankPage />} />
                <Route path="/compare" element={<ComparePage />} />
              </Routes>
            </main>
            <Footer />
            <CompareBar />
          </div>
        </CompareProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}
