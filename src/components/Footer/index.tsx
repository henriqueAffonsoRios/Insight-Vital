import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'

import { FooterContainer, ListaIcones } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <select>
        <option>Português</option>
        <option>Inglês</option>
      </select>
      <p>
        &copy; 2024 Insight Vital. Todos os direitos reservados. O conteúdo
        deste site é protegido por leis de direitos autorais e outras
        legislações aplicáveis. Qualquer reprodução, distribuição ou utilização
        não autorizada do material aqui contido está estritamente proibida.
      </p>
      <ListaIcones>
        <li>
          <a href="#">
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ListaIcones>
    </FooterContainer>
  )
}

export default Footer
