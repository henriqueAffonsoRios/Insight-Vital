import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.azul};

  button {
    background-color: transparent;
    border: none;
  }

  .container {
    > img {
      width: 110px;
    }

    li {
      button > img {
        height: 30px;
      }
    }
  }
`
