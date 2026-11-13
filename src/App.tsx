import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { BackToTop } from './components/BackToTop'
import { ErrorBoundary } from './components/ErrorBoundary'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { IntroLoader } from './components/IntroLoader'
import { SavedProvider } from './components/SavedContext'
import { TransitionProvider } from './components/TransitionContext'
import { About } from './pages/About'
import { Article } from './pages/Article'
import { DestinationDetail } from './pages/DestinationDetail'
import { Destinations } from './pages/Destinations'
import { Home } from './pages/Home'
import { Journal } from './pages/Journal'
import { NotFound } from './pages/NotFound'
import { Plan } from './pages/Plan'
import { Saved } from './pages/Saved'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <SavedProvider>
          <TransitionProvider>
            <a href="#main" className="skip-link">
              Skip to content
            </a>
            <Header />
            <main id="main" className="main" tabIndex={-1}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/destinations/:slug" element={<DestinationDetail />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/journal/:slug" element={<Article />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <BackToTop />
            <IntroLoader />
          </TransitionProvider>
        </SavedProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
