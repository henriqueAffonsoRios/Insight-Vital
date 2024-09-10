import styled from 'styled-components'

import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.azul};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 76px;
  margin-bottom: 70px;
`

export const Item = styled.li`
  display: inline;
  margin-left: 22px;

  img {
    height: 35px;
  }
`
