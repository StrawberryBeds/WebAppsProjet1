import './App.css'
import Header from './composents/Header'
import Main from './composents/Main'
import Footer from './composents/Footer'

import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

export default App
