import style from '../../../styles/Header.module.scss'
import Tiffany from '../../../assets/images/tiffco-logo-2.svg'
import Menu from '../../../assets/images/menu.svg'
import Search from '../../../assets/images/search-1.svg'
import Location from '../../../assets/images/location.svg'
import Contact from '../../../assets/images/concierge.svg'
import Calendar from '../../../assets/images/calendar.svg'
import Account from '../../../assets/images/account.svg'

const HeaderBar = () => {
  return (
    <div className={style.headerBar}>
      <a href="#">
        <div className={style["headerBar__menu-icon"]}>
          <img src={Menu} alt="Open menu" />
        </div>
      </a>
      <a href="#search">
        <div className={style["headerBar__menu-icon"]}>
          <img src={Search} alt="Open Search" />
        </div>
      </a>
      <a href="#location">
        <img src={Location} alt="Store Locations" />
      </a>
      <a href="#contact">
        <img src={Contact} alt="Store Locations" />
        Contact us
      </a>
      <img src={Tiffany} className="logo logo--header" alt="Tiffany & Co." />

      <a href="#appointment">
        <img src={Calendar} alt="Store Locations" />
        Book an Appointment
      </a>
      <a href="#account">
        <img src={Account} alt="Store Locations" />
      </a>
    </div>
  )
}

export default HeaderBar