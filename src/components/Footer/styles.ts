import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.azul};
  color: ${cores.amarelo};
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 150px;
  margin-top: 70px;
  padding: 30px 70px;

  p {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }
`

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: ${cores.amarelo};
    border: none;
    border-radius: 5px;
    color: ${cores.azul};
    font-weight: bold;
    cursor: pointer;
    padding: 5px 30px;
    text-align: center;
    outline: none;

    &:hover {
      background-color: #f1c40f;
    }
  }
`

export const ListaIcones = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  li {
    margin-left: 15px;
  }
`
