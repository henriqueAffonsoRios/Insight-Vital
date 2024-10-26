import styled, { createGlobalStyle, css } from 'styled-components'

interface ContainerProps {
  isDarkMode: boolean
}

export type FilterType =
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'achromatopsia'
  | 'achromatomaly'

interface FilterWrapperProps {
  type: FilterType | 'sem filtro'
}

export const cores = {
  azul: '#2C3E50',
  amarelo: '#F4D03F',
  cinza: '#D9D9D9',
  cinzaClaro: '#ECF0F1',
  preto: '#000000',
  cinzaEscuro: '#1A1A1A'
}

const colorBlindnessFilters: Record<FilterType, ReturnType<typeof css>> = {
  protanopia: css`
    filter: url(#protanopia);
  `,
  deuteranopia: css`
    filter: url(#deuteranopia);
  `,
  tritanopia: css`
    filter: url(#tritanopia);
  `,
  achromatopsia: css`
    filter: url(#achromatopsia);
  `,
  achromatomaly: css`
    filter: url(#achromatomaly);
  `
}

export const FilterWrapper = styled.div<FilterWrapperProps>`
  ${({ type }) => (type !== 'sem filtro' ? colorBlindnessFilters[type] : '')}
`

export const breakpoints = {
  desktop: '991px',
  tablet: '768px'
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  flex: 1;
`

export default GlobalCss
