import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { ToggleDropdown, MenuDropdown, Item } from '../../styles/DropdownStyles'

interface DropdownComponentProps {
  title: string
  options: string[]
  onSelect?: (value: string) => void
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  title,
  options,
  onSelect
}) => {
  const { t } = useTranslation()
  const [selectedOption, setSelectedOption] = useState('select')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    if (onSelect !== undefined) {
      onSelect(option)
    }
    setDropdownOpen(false)
  }

  return (
    <>
      <h4>{t(title)}</h4>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <ToggleDropdown
          className="text-center w-100 d-flex justify-content-center align-items-center narrable-icon"
          data-narration={`${t(selectedOption)} ${t(title)}`}
        >
          {t(selectedOption)}
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

export default DropdownComponent
