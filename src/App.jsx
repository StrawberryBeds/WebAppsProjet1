import './App.css'
import Header from './composents/Header'
import Footer from './composents/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlertesEtAvis from './pages/AlertesEtAvis'
import Alerte from './pages/Alerte'

// import Main from './composents/MainTitres + Barre de Recherche'
// import MainResultats from './composents/MainResultats'

import { Link } from 'react-router-dom';

// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path='/' element={<AlertesEtAvis />} />
        <Route path='/alerte' element={<Alerte />} />
      </Routes>

      {/* <Main></Main>
      <MainResultats></MainResultats> */}
      
      <Footer></Footer>
    </Router>
  )
}

export default App
