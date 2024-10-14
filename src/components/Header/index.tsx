import { HeaderContainer } from './styles'

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
  return (
    <HeaderContainer>
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
      </div>
    </HeaderContainer>
  )
}

export default Header
