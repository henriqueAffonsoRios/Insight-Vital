import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  azul: '#2C3E50',
  amarelo: '#F4D03F',
  cinza: '#D9D9D9',
  cinzaClaro: '#ECF0F1'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.cinza};
  }
`

export const Main = styled.div`
  background-color: ${cores.cinzaClaro};
  border-radius: 10px;
  overflow: hidden;
`

export default GlobalCss
