import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.svg'
import blind from '../../assets/images/blind.svg'
import sun from '../../assets/images/sun.svg'
import night from '../../assets/images/night.svg'
interface HeaderProps {
  toggleDarkMode: () => void
  toggleLightMode: () => void
  onOpenModal: () => void
  onToggleNarrator: () => void
}

const Header = ({
  toggleDarkMode,
  toggleLightMode,
  onOpenModal,
  onToggleNarrator
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <S.HeaderContainer>
      <div className="container p-0 d-flex flex-wrap justify-content-between align-items-center">
        <img
          src={logo}
          alt="Insight Vital"
          className="narrable-icon"
          data-narration={t('insightLogo')}
        />
        <ul className="nav navbar navbar-expand">
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={onToggleNarrator}
              data-narration={t('narratorMode')}
            >
              <img src={avatar} alt="Narrator mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={onOpenModal}
              data-narration={t('colorBlindMode')}
            >
              <img src={blind} alt="Blindness mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={toggleLightMode}
              data-narration={t('lightTheme')}
            >
              <img src={sun} alt="Light mode icon" />
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={toggleDarkMode}
              data-narration={t('darkTheme')}
            >
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
            <button
              className="navbar-brand narrable-icon"
              onClick={onToggleNarrator}
              data-narration={t('narratorMode')}
            >
              <img src={avatar} alt="Narrator mode icon" />
              <p>{t('narratorMode')}</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={onOpenModal}
              data-narration={t('colorBlindMode')}
            >
              <img src={blind} alt="Blindness mode icon" />
              <p>{t('colorBlindMode')}</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={toggleLightMode}
              data-narration={t('lightTheme')}
            >
              <img src={sun} alt="Light mode icon" />
              <p>{t('lightTheme')}</p>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="navbar-brand narrable-icon"
              onClick={toggleDarkMode}
              data-narration={t('darkTheme')}
            >
              <img src={night} alt="Dark mode icon" />
              <p>{t('darkTheme')}</p>
            </button>
          </li>
        </ul>
      </S.NavMobile>
    </S.HeaderContainer>
  )
}

export default Header
