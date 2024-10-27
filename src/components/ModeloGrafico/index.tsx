import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const ModeloGrafico = () => {
  const { t } = useTranslation()
  const [selectedDropdown, setSelectedDropdown] = useState('select')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const options = ['percentage', 'normalized', 'both']

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
    setDropdownOpen(false)
  }

  return (
    <>
      <h4 className="text-truncate">{t('chartModel')}</h4>
      <Dropdown
        show={dropdownOpen}
        onToggle={toggleDropdown}
        className="custom-dropdown"
      >
        <ToggleDropdown
          className="text-center w-100 d-flex justify-content-center align-items-center narrable-icon"
          data-narration={t(selectedDropdown) + ' ' + t('chartModel')}
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

export default ModeloGrafico
