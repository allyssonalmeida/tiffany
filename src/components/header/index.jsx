import style from '../../styles/Header.module.scss'
import HeaderBar from './headerbar'
import DesktopMenu from './menu/desktop'
import MobileMenu from './menu/mobile'
import TopBar from './topbar'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 720px)'
  })

  return (
    <header className={style.header}>
      <TopBar />
      <HeaderBar />
      {
        isMobile ?
          <MobileMenu />
          :
          <DesktopMenu />
      }
    </header>
  )
}

export default Header