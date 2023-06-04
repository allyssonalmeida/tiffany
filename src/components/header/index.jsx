import { useMediaQuery } from 'react-responsive'
import { useState } from 'react'

import style from '../../styles/Header.module.scss'
import HeaderBar from './headerbar'
import DesktopMenu from './menu/desktop'
import MobileMenu from './menu/mobile'
import TopBar from './topbar'


const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const isMobile = useMediaQuery({
    query: '(max-width: 720px)'
  })

  return (
    <header className={style.header}>
      <TopBar />
      <HeaderBar
        setMobileMenu={setMobileMenu}
      />
      {
        isMobile ?
          <MobileMenu
            isMobileMenuActive={mobileMenu}
            setMobileMenu={setMobileMenu}
          />
          :
          <DesktopMenu />
      }
    </header>
  )
}

export default Header