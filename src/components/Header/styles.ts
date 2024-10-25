import styled from 'styled-components'

import { breakpoints, cores } from '../../styles'

export const HeaderContainer = styled.header`
  background-color: ${cores.azul};

  button {
    background-color: transparent;
    border: none;
  }

  img {
    height: 30px;
  }

  .container {
    > img {
      height: auto;
      width: 110px;
    }
  }

  ul {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const Hamburguer = styled.div`
  width: 32px;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${cores.amarelo};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }

  @media (min-width: ${breakpoints.tablet}) {
    &.is-open {
      display: none;
    }
  }

  ul {
    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    li {
      @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 10px;
        width: 100%;
        max-width: 200px;
        margin-right: 0;
        display: inline-block;
        text-align: left;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0;
      }

      p {
        color: ${cores.amarelo};
        font-weight: bold;
        margin: 0 0 0 10px;
      }
    }
  }
`
