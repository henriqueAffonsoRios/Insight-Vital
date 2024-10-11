import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.azul};

  .container {
    > img {
      width: 110px;
    }

    li {
      a > img {
        height: 30px;
      }
    }
  }
`
