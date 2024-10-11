import React from 'react'
import GlobalCss, { Main } from './styles'
import Header from './components/Header'
import BarraFiltro from './components/BarraFiltro'
import ConteudoPrincipal from './components/ConteudoMain'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Main className="container p-0 flex-grow-1 my-5">
          <BarraFiltro />
          <ConteudoPrincipal />
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
