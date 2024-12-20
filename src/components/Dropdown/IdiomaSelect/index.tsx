import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import {
  ToggleDropdown,
  MenuDropdown,
  Item
} from '../../../styles/DropdownStyles'

const IdiomaComponente = () => {
  const { t, i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState('portuguese')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [menuWidth, setMenuWidth] = useState(0)

  const options = ['portuguese', 'english']

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedLanguage(option)
    i18n.changeLanguage(option === 'english' ? 'en' : 'pt')
    setDropdownOpen(false) // Garante o fechamento ao selecionar uma opção
  }

  useEffect(() => {
    const handleResize = () => {
      const toggleElement = document.getElementById('toggle-dropdown')
      if (toggleElement) setMenuWidth(toggleElement.offsetWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
      <ToggleDropdown
        id="toggle-dropdown"
        className="text-center w-100 d-flex justify-content-center align-items-center"
        onClick={toggleDropdown}
        isLanguageMenu={true}
      >
        {t(selectedLanguage)}
      </ToggleDropdown>
      {dropdownOpen && (
        <MenuDropdown
          className="text-center"
          menuWidth={menuWidth}
          isLanguageMenu={true}
          popperConfig={{ modifiers: [{ name: 'flip', enabled: false }] }}
        >
          {options.map((option) => (
            <Item
              key={option}
              onClick={() => handleSelect(option)}
              className="narrable-icon"
            >
              {t(option)}
            </Item>
          ))}
        </MenuDropdown>
      )}
    </Dropdown>
  )
}

export default IdiomaComponente
