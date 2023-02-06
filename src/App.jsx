import './styles/globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';
import TerapiasPage from './Pages/Terapias/TerapiasPage';
import UbicacionPage from './Pages/Ubicacion/UbicacionPage';
import NotFoundPage from './Pages/404/NotFoundPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
    </div>
      <Routes>
        {/* HomePage */}
        <Route path="/" element={<HomePage />} />
        {/* TODO: Terapias */}
        <Route path="/terapias" element={<TerapiasPage />} />
        {/* Ubicacion y contacto */}
        <Route path="/contacto" element={<UbicacionPage />} />
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
