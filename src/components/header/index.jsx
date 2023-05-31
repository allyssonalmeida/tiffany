import style from '../../styles/Header.module.scss'
import HeaderBar from './headerbar'
import TopBar from './topbar'
const Header = () => {
  return (
    <header className={style.header}>
      <TopBar />
      <HeaderBar />
    </header>
  )
}

export default Header