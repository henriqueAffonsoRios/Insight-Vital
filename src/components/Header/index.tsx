import { HeaderContainer } from './styles'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.svg'
import blind from '../../assets/images/blind.svg'
import sun from '../../assets/images/sun.svg'
import night from '../../assets/images/night.svg'

const Header = () => (
  <HeaderContainer>
    <div className="container p-0 d-flex flex-wrap justify-content-between align-items-center">
      <img src={logo} alt="Insight Vital" />
      <ul className="nav navbar navbar-expand">
        <li className="nav-item">
          <a className="navbar-brand" href="#">
            <img src={avatar} alt="Narrator mode icon" />
          </a>
        </li>
        <li className="nav-item">
          <a className="navbar-brand" href="#">
            <img src={blind} alt="Blindness mode icon" />
          </a>
        </li>
        <li className="nav-item">
          <a className="navbar-brand" href="#">
            <img src={sun} alt="Light mode icon" />
          </a>
        </li>
        <li className="nav-item">
          <a className="navbar-brand" href="#">
            <img src={night} alt="Dark mode icon" />
          </a>
        </li>
      </ul>
    </div>
  </HeaderContainer>
)

export default Header
