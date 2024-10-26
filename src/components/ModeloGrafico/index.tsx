import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const ModeloGrafico = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('Selecionar')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
    setDropdownOpen(false)
  }

  return (
    <>
      <h4 className="text-truncate">Modelo de gráfico</h4>
      <Dropdown
        show={dropdownOpen}
        onToggle={toggleDropdown}
        className="custom-dropdown"
      >
        <ToggleDropdown
          className="text-center w-100 d-flex justify-content-center align-items-center narrable-icon"
          data-narration={
            selectedDropdown !== 'Selecionar'
              ? selectedDropdown
              : 'Selecionar modelo de gráfico'
          }
        >
          {selectedDropdown}
        </ToggleDropdown>
        <MenuDropdown className="w-100 text-center">
          <Item onClick={() => handleSelect('Percentual')}>Percentual</Item>
          <Item onClick={() => handleSelect('Normalizado')}>Normalizado</Item>
          <Item onClick={() => handleSelect('Ambos')}>Ambos</Item>
        </MenuDropdown>
      </Dropdown>
    </>
  )
}

export default ModeloGrafico
