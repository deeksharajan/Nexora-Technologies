import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Products from './pages/Products.jsx'
import Contact from './pages/Contact.jsx'
import StartProject from './pages/StartProject.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start-project" element={<StartProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
