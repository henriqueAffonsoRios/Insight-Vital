import styled from 'styled-components'
import { cores } from '../../styles'

export const Main = styled.div`
  background-color: ${cores.cinzaClaro};
`

export const FilterContainer = styled.section`
  background-color: ${cores.azul};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 88px;
  border-radius: 10px;
`

export const FilterList = styled.ul`
  display: flex;
`

export const Item = styled.li`
  margin-right: 34px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 128px;

  h3 {
    text-align: center;
    color: ${cores.amarelo};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${cores.amarelo};
    color: ${cores.azul};
    padding: 6px 10px;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    user-select: none;
  }
`
