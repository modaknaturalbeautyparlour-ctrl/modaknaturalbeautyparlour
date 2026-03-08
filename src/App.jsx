import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import PlanDetails from './pages/PlanDetails';
import Services from './pages/Services';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <Router>
      <div className="App">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        {showContent && (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plan/:id" element={<PlanDetails />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
            <WhatsAppFloat />
            <ScrollToTop />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
