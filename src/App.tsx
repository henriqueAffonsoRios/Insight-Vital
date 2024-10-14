import React, { useState } from 'react'
import GlobalCss, { Main } from './styles'
import Header from './components/Header'
import BarraFiltro from './components/BarraFiltro'
import ConteudoPrincipal from './components/ConteudoMain'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(true)
  }

  const toggleLightMode = () => {
    setDarkMode(false)
  }

  return (
    <>
      <GlobalCss isDarkMode={darkMode} />
      <div className="d-flex flex-column min-vh-100">
        <Header
          toggleDarkMode={toggleDarkMode}
          toggleLightMode={toggleLightMode}
        />
        <Main isDarkMode={darkMode} className="container p-0 flex-grow-1 my-5">
          <BarraFiltro />
          <ConteudoPrincipal />
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
