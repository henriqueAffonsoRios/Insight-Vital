import { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'react-bootstrap'

import { ToggleDropdown, MenuDropdown, Item } from './styles'

const IdiomaComponente = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('Português')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState(0)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleSelect = (option: string) => {
    setSelectedDropdown(option)
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
          {selectedDropdown}
        </ToggleDropdown>
        <MenuDropdown
          className="text-center"
          ref={menuRef}
          menuWidth={menuWidth}
          popperConfig={{ modifiers: [{ name: 'flip', enabled: false }] }}
        >
          <Item onClick={() => handleSelect('Português')}>Português</Item>
          <Item onClick={() => handleSelect('Inglês')}>Inglês</Item>
        </MenuDropdown>
      </Dropdown>
    </>
  )
}

export default IdiomaComponente
