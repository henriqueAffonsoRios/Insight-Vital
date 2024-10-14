import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
import { cores } from '../../styles'

export const ToggleDropdown = styled(Dropdown.Toggle)`
  border: none;
  box-shadow: none;
  position: relative;
  margin-right: 30px;

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
  transform: translate(0px, 42px) !important;

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
