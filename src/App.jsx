import './App.css'
import Header from './composents/Header'
import Main from './composents/MainTitres + Barre de Recherche'
import MainResultats from './composents/MainResultats'
import Footer from './composents/Footer'

import { Link } from 'react-router-dom';

// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
      <MainResultats></MainResultats>
      <Footer></Footer>
    </>
  )
}

export default App
