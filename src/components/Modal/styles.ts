import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: ${cores.azul};
  color: ${cores.amarelo};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`

export const FilterButton = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: bold;
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
`
