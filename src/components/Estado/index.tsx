import React, { useState, useEffect, useRef } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from 'axios'
import {
  Btn,
  Buscar,
  DropdownContainer,
  EstadoList,
  Item,
  MenuDropdown,
  ToggleDropdown
} from './styles'

interface Estado {
  id: number
  nome: string
}

const DropdownEstado: React.FC = () => {
  const [estados, setEstados] = useState<Estado[]>([])
  const [filteredEstados, setFilteredEstados] = useState<Estado[]>([])
  const [selectedEstados, setSelectedEstados] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    axios
      .get<Estado[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then((response) => {
        const estadosList = response.data.map((estado) => ({
          id: estado.id,
          nome: estado.nome
        }))
        setEstados(estadosList)
        setFilteredEstados(estadosList)
      })
      .catch((error) => {
        console.error('Erro ao buscar estados:', error)
      })
  }, [])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value
    setSearchTerm(term)
    const filtered = estados.filter((estado) =>
      estado.nome.toLowerCase().includes(term.toLowerCase())
    )
    setFilteredEstados(filtered)
  }

  const selectAllEstados = () => {
    setSelectedEstados(['Todos'])
    setShowDropdown(false)
  }

  const handleSelectEstado = (estado: Estado) => {
    setSelectedEstados([estado.nome])
    setShowDropdown(false)
  }

  const dropdownRef = useRef<HTMLDivElement>(null)
  const estadoListRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      estadoListRef.current &&
      !estadoListRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <h4>Estado</h4>
      <Dropdown
        show={showDropdown}
        onToggle={() => setShowDropdown(!showDropdown)}
        className="custom-dropdown mx-2"
      >
        <ToggleDropdown className="px-4 text-center w-100 d-flex justify-content-center align-items-center">
          {selectedEstados.length === 0
            ? 'Selecionar'
            : selectedEstados.join(', ')}
        </ToggleDropdown>

        <MenuDropdown className="w-100 text-center">
          <DropdownContainer>
            <Buscar
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Btn onClick={selectAllEstados}>✓</Btn>
          </DropdownContainer>
          <EstadoList>
            {filteredEstados.map((estado) => (
              <Item key={estado.id} onClick={() => handleSelectEstado(estado)}>
                {estado.nome}
              </Item>
            ))}
          </EstadoList>
        </MenuDropdown>
      </Dropdown>
    </>
  )
}

export default DropdownEstado
