import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'
import { breakpoints, cores } from '../../styles'

export const ToggleDropdown = styled(Dropdown.Toggle)`
  border: none;
  box-shadow: none;
  position: relative;
  font-size: 15px !important;
  font-weight: bold;
  background-color: ${cores.amarelo};
  color: ${cores.azul};

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

  &::after {
    position: absolute;
    right: 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    &.show {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    &.show {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`

export const MenuDropdown = styled(Dropdown.Menu)<{ menuWidth: number }>`
  margin-top: 0;
  background-color: ${cores.amarelo};
  border: none;
  min-width: inherit !important;
  width: ${(props) => props.menuWidth}px !important;
  font-size: 15px !important;

  @media (min-width: ${breakpoints.desktop}) {
    transform: translate(0px, -77px) !important;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (max-width: ${breakpoints.desktop}) {
    transform: translate(0px, 32px) !important;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

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
