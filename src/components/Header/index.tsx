import { useState } from 'react'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.svg'
import blind from '../../assets/images/blind.svg'
import sun from '../../assets/images/sun.svg'
import night from '../../assets/images/night.svg'

interface ThemeToggleProps {
  toggleDarkMode: () => void
  toggleLightMode: () => void
}

const Header = ({ toggleDarkMode, toggleLightMode }: ThemeToggleProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.HeaderContainer>
      <div className="container p-0 d-flex flex-wrap justify-content-between align-items-center">
        <img src={logo} alt="Insight Vital" />
        <ul className="nav navbar navbar-expand">
          <li className="nav-item">
            <button className="navbar-brand">
              <img src={avatar} alt="Narrator mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand">
              <img src={blind} alt="Blindness mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand" onClick={toggleLightMode}>
              <img src={sun} alt="Light mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand" onClick={toggleDarkMode}>
              <img src={night} alt="Dark mode icon" />
            </button>
          </li>
        </ul>
        <S.Hamburguer onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </S.Hamburguer>
      </div>
      <S.NavMobile className={isOpen ? 'is-open' : ''}>
        <ul className="nav navbar navbar-expand">
          <li className="nav-item">
            <button className="navbar-brand">
              <img src={avatar} alt="Narrator mode icon" />
              <p>Modo narrador</p>
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand">
              <img src={blind} alt="Blindness mode icon" />
              <p>Modo daltonismo</p>
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand" onClick={toggleLightMode}>
              <img src={sun} alt="Light mode icon" />
              <p>Tema claro</p>
            </button>
          </li>
          <li className="nav-item">
            <button className="navbar-brand" onClick={toggleDarkMode}>
              <img src={night} alt="Dark mode icon" />
              <p>Tema escuro</p>
            </button>
          </li>
        </ul>
      </S.NavMobile>
    </S.HeaderContainer>
  )
}

export default Header
