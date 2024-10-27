import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const SexoComponente: React.FC = () => {
  const { t } = useTranslation()
  const [selectedDropdown, setSelectedDropdown] = useState('select')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const options = ['male', 'female', 'both']

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
    setDropdownOpen(false)
  }

  return (
    <>
      <h4>{t('sex')}</h4>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <ToggleDropdown
          className="text-center w-100 d-flex justify-content-center align-items-center narrable-icon"
          data-narration={t(selectedDropdown) + ' ' + t('sex')}
        >
          {t(selectedDropdown)}
        </ToggleDropdown>
        <MenuDropdown
          className="w-100 text-center"
          popperConfig={{ modifiers: [{ name: 'flip', enabled: false }] }}
        >
          {options.map((option) => (
            <Item key={option} onClick={() => handleSelect(option)}>
              {t(option)}
            </Item>
          ))}
        </MenuDropdown>
      </Dropdown>
    </>
  )
}

export default SexoComponente
