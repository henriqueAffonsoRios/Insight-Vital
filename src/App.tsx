import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

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
  const [selectedFilter, setSelectedFilter] = useState<FilterType | 'noFilter'>(
    'noFilter'
  )
  const [isNarratorActive, setIsNarratorActive] = useState(false)
  const { i18n } = useTranslation()
  const [isFiltered, setIsFiltered] = useState(false)

  const handleFilterClick = () => {
    setIsFiltered(true)
  }

  const toggleNarrator = () => {
    setIsNarratorActive(!isNarratorActive)
  }

  const handleOpenModal = () => setModalVisible(true)
  const handleCloseModal = () => setModalVisible(false)

  const handleSelectFilter = (type: FilterType | 'noFilter') => {
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
        type={selectedFilter !== 'noFilter' ? selectedFilter : 'noFilter'}
      >
        <div className="d-flex flex-column min-vh-100">
          <Header
            toggleDarkMode={toggleDarkMode}
            toggleLightMode={toggleLightMode}
            onOpenModal={handleOpenModal}
            onToggleNarrator={toggleNarrator}
          />
          <div className="container p-0 mt-5">
            <BarraFiltro onFilterClick={handleFilterClick} />
          </div>
          <Main
            isDarkMode={darkMode}
            isFiltered={isFiltered}
            className="container py-5 mb-5 d-block"
          >
            <ConteudoPrincipal isFiltered={isFiltered} />
          </Main>
          {modalVisible && (
            <ColorBlindnessModal
              onClose={handleCloseModal}
              onSelectFilter={handleSelectFilter}
            />
          )}
          <Footer />
        </div>
        <Narrador isActive={isNarratorActive} language={i18n.language} />
      </FilterWrapper>
    </>
  )
}

export default App
