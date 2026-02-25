import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import PlanDetails from './pages/PlanDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plan/:id" element={<PlanDetails />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
