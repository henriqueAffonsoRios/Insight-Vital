import styled, { createGlobalStyle } from 'styled-components'

interface ContainerProps {
  isDarkMode: boolean
}

export const cores = {
  azul: '#2C3E50',
  amarelo: '#F4D03F',
  cinza: '#D9D9D9',
  cinzaClaro: '#ECF0F1',
  preto: '#000000',
  cinzaEscuro: '#1A1A1A'
}

const GlobalCss = createGlobalStyle<ContainerProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${(props) =>
      props.isDarkMode ? cores.cinzaEscuro : cores.cinza};
  }
`

export const Main = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.isDarkMode ? cores.preto : cores.cinzaClaro};
  border-radius: 10px;
  overflow: hidden;
`

export default GlobalCss
