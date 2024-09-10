import React from 'react'
import GlobalCss, { Content, Main } from './styles'
import Header from './components/Header'
import BarraFiltro from './components/BarraFiltro'
import ConteudoPrincipal from './components/ConteudoMain'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Content>
        <Header />
        <Main className="container">
          <BarraFiltro />
          <ConteudoPrincipal />
        </Main>
        <Footer />
      </Content>
    </>
  )
}

export default App
