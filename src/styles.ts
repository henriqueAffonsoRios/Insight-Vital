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

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Main = styled.div`
  background-color: ${cores.cinzaClaro};
  border-radius: 10px;
  overflow: hidden;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`

export default GlobalCss
