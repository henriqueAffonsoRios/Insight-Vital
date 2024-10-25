import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const SexoComponente = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('Selecionar')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
    setDropdownOpen(false)
  }

  return (
    <>
      <h4>Sexo</h4>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <ToggleDropdown className="text-center w-100 d-flex justify-content-center align-items-center">
          {selectedDropdown}
        </ToggleDropdown>
        <MenuDropdown className="w-100 text-center">
          <Item onClick={() => handleSelect('Masculino')}>Masculino</Item>
          <Item onClick={() => handleSelect('Feminino')}>Feminino</Item>
          <Item onClick={() => handleSelect('Ambos')}>Ambos</Item>
        </MenuDropdown>
      </Dropdown>
    </>
  )
}

export default SexoComponente
