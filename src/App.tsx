import React, { useState } from 'react'
import GlobalCss, { FilterType, FilterWrapper, Main } from './styles'
import Header from './components/Header'
import BarraFiltro from './components/BarraFiltro'
import ConteudoPrincipal from './components/ConteudoMain'
import Footer from './components/Footer'
import ColorBlindnessModal from './components/Modal'
import Narrador from './components/Narrador'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState<
    FilterType | 'sem filtro'
  >('sem filtro')
  const [isNarratorActive, setIsNarratorActive] = useState(false)

  const toggleNarrator = () => {
    setIsNarratorActive(!isNarratorActive)
  }

  const handleOpenModal = () => setModalVisible(true)
  const handleCloseModal = () => setModalVisible(false)

  const handleSelectFilter = (type: FilterType | 'sem filtro') => {
    setSelectedFilter(type)
    setModalVisible(false)
  }

  const toggleDarkMode = () => {
    setDarkMode(true)
  }

  const toggleLightMode = () => {
    setDarkMode(false)
  }

  return (
    <>
      <GlobalCss isDarkMode={darkMode} />
      <FilterWrapper
        type={selectedFilter !== 'sem filtro' ? selectedFilter : 'sem filtro'}
      >
        <div className="d-flex flex-column min-vh-100">
          <Header
            toggleDarkMode={toggleDarkMode}
            toggleLightMode={toggleLightMode}
            onOpenModal={handleOpenModal}
            onToggleNarrator={toggleNarrator}
          />
          <div className="container p-0 mt-5">
            <BarraFiltro />
          </div>
          <Main
            isDarkMode={darkMode}
            className="container p-5 mb-5 d-flex align-items-center justify-content-center"
          >
            <ConteudoPrincipal />
          </Main>
          {modalVisible && (
            <ColorBlindnessModal
              onClose={handleCloseModal}
              onSelectFilter={handleSelectFilter}
            />
          )}
          <Footer />
        </div>
        {isNarratorActive && <Narrador isActive={isNarratorActive} />}
      </FilterWrapper>
    </>
  )
}

export default App
