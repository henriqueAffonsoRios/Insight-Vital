import React from 'react'
import { useTranslation } from 'react-i18next'

import { FilterButton, ModalContainer, Overlay } from './styles'
import { FilterType } from '../../styles'

interface ModalProps {
  onClose: () => void
  onSelectFilter: (type: FilterType | 'noFilter') => void
}

const ColorBlindnessModal: React.FC<ModalProps> = ({
  onClose,
  onSelectFilter
}) => {
  const filterOptions: (FilterType | 'noFilter')[] = [
    'noFilter',
    'protanopia',
    'deuteranopia',
    'tritanopia',
    'achromatopsia',
    'achromatomaly'
  ]
  const { t } = useTranslation()

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Overlay onClick={handleBackgroundClick}>
      <ModalContainer>
        <h3>{t('chooseFilter')}</h3>
        {filterOptions.map((type) => (
          <FilterButton key={type} onClick={() => onSelectFilter(type)}>
            {t(type)}
          </FilterButton>
        ))}
      </ModalContainer>
    </Overlay>
  )
}

export default ColorBlindnessModal
