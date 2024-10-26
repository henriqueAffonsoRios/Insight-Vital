import React from 'react'
import { FilterButton, ModalContainer, Overlay } from './styles'
import { FilterType } from '../../styles'

interface ModalProps {
  onClose: () => void
  onSelectFilter: (type: FilterType | 'sem filtro') => void
}

const ColorBlindnessModal: React.FC<ModalProps> = ({
  onClose,
  onSelectFilter
}) => {
  const filterOptions: (FilterType | 'sem filtro')[] = [
    'sem filtro',
    'protanopia',
    'deuteranopia',
    'tritanopia',
    'achromatopsia',
    'achromatomaly'
  ]

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleBackgroundClick}>
      <ModalContainer>
        <h3>Escolha o Filtro</h3>
        {filterOptions.map((type) => (
          <FilterButton key={type} onClick={() => onSelectFilter(type)}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </FilterButton>
        ))}
      </ModalContainer>
    </Overlay>
  )
}

export default ColorBlindnessModal
