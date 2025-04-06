import './App.css'
import Header from './composents/Header'
import Footer from './composents/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlertesEtAvis from './pages/AlertesEtAvis'
import Alerte from './pages/Alerte'

import { Link } from 'react-router-dom';


function App() {

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
