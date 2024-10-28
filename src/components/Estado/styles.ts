import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
import { cores } from '../../styles'

export const ToggleDropdown = styled(Dropdown.Toggle)`
  border: none;
  box-shadow: none;
  position: relative;
  font-size: 15px !important;

  &:hover,
  &:active,
  &:checked {
    background-color: ${cores.amarelo} !important;
    border-color: ${cores.amarelo} !important;
    color: ${cores.azul} !important;
    outline: none !important;
  }

  &.btn:focus,
  &.btn:active,
  &.btn.show {
    background-color: ${cores.amarelo} !important;
    border-color: ${cores.amarelo} !important;
    color: ${cores.azul} !important;
  }

  &.show {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  &::after {
    position: absolute;
    right: 1rem;
  }
`

export const MenuDropdown = styled(Dropdown.Menu)`
  margin-top: 0;
  background-color: ${cores.amarelo};
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform: translate(0px, 34px) !important;

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background-color: ${cores.amarelo} !important;
    border-color: ${cores.amarelo} !important;
    color: ${cores.azul} !important;
    outline: none !important;
  }
`

export const Item = styled(Dropdown.Item)`
  font-weight: bold;
  color: ${cores.azul};

  &:hover {
    color: ${cores.cinzaClaro} !important;
  }

  &:hover,
  &:focus,
  &:active,
  &:checked {
    background-color: ${cores.amarelo} !important;
    border-color: ${cores.amarelo} !important;
    outline: none !important;
  }
`

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Buscar = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${cores.azul};
  background-color: ${cores.amarelo};
`

export const EstadoList = styled.div`
  max-height: 60px;
  overflow-y: auto;
  border-top: 1px solid #ccc;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${cores.azul};
    border-radius: 3px;
    cursor: pointer;
  }
`

export const Btn = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: transparent !important;
  }
`
