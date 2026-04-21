import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SolutionsPage from './pages/SolutionsPage'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'

// Component yar oo Scroll-ka kor u celinaya
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 flex flex-col">
      {/* Tan ayaa maamulaysa in kor lagugu celiyo */}
      <ScrollToTop />
      
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
