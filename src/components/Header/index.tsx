import { HeaderContainer, Item } from './styles'

import logo from '../../assets/images/logo.png'
import blind from '../../assets/images/blind.png'
import sun from '../../assets/images/sun.png'
import night from '../../assets/images/night.png'

const Header = () => (
  <HeaderContainer>
    <img src={logo} alt="Insight Vital" />
    <ul>
      <Item>
        <img src={blind} alt="Blindness mode icon" />
      </Item>
      <Item>
        <img src={sun} alt="Light mode icon" />
      </Item>
      <Item>
        <img src={night} alt="Dark mode icon" />
      </Item>
    </ul>
  </HeaderContainer>
)

export default Header
