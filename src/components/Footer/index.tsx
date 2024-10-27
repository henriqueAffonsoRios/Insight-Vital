import { useTranslation } from 'react-i18next'

import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'

import { FooterContainer } from './styles'
import IdiomaComponente from '../IdiomaSelect'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <FooterContainer className="p-3">
      <div className="container">
        <div className="row align-items-center justify-content-between w-100">
          <div className="col-12 col-lg-2 text-center">
            <IdiomaComponente />
          </div>
          <div className="col-12 col-lg text-center my-2">
            <p className="m-0">{t('copyrightNotice')}</p>
          </div>
          <div className="col-12 col-lg-auto text-center">
            <ul className="d-flex justify-content-center justify-content-lg-end m-0 p-0">
              <li className="mx-2">
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
              <li className="mx-2">
                <a href="#">
                  <img src={github} alt="GitHub" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
