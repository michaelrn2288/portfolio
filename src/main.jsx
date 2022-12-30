import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './Components/App'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import MouseSparks from './Components/MouseSparks'
import NotFound from './Components/NotFound'
import Projects from './Components/Projects'
import ToggleButton from './Components/ToggleButton'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
