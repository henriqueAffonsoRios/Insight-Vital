import { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const IdiomaComponente = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('Português')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)
  const { t, i18n } = useTranslation()

  const options = ['portuguese', 'english']

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const toggleLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
    if (option === 'english') {
      toggleLanguage('en')
    } else {
      toggleLanguage('pt')
    }
    setDropdownOpen(false)
  }

  useEffect(() => {
    if (toggleRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (toggleRef.current) {
          setMenuWidth(toggleRef.current.offsetWidth)
        }
      })

      resizeObserver.observe(toggleRef.current)

      return () => resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <ToggleDropdown
          ref={toggleRef}
          className="text-center w-100 d-flex justify-content-center align-items-center"
        >
          {t(selectedDropdown)}
        </ToggleDropdown>
        <MenuDropdown
          className="text-center"
          menuWidth={menuWidth}
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
      </Dropdown>
    </>
  )
}

export default IdiomaComponente
