import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AlertesEtAvis from './pages/AlertesEtAvis'
import Alerte from './pages/Alerte'

function App() {

  return (
    <Router>
      <Header></Header>

      <Routes>
        <Route path='/' element={<AlertesEtAvis />} />
        <Route path="/alerte/:id" element={<Alerte />} />
      </Routes>

      {/* <Main></Main>
      <MainResultats></MainResultats> */}

      <Footer></Footer>
    </Router>
  )
}

export default App
