import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import style from "../../../styles/Header.module.scss";
import Tiffany from "../../../assets/images/tiffco-logo-2.svg";
import Account from "../account";
import Wishlist from "../wishlist";
import Minicart from "../minicart";
import { PropTypes } from "prop-types";

const HeaderBar = ({ setMobileMenu }) => {
  const { countItems } = useContext(CartContext)
  const [activeMenu, setActiveMenu] = useState('')

  const totalItems = countItems()

  return (
    <div className={style.headerBar}>
      <div className={style.headerBar__left}>
        <button
          href="#"
          title="Mobile menu"
          className={`${style.headerBar__menu}`}
          onClick={() => { setMobileMenu(true) }}
        >
          Open Menu
        </button>
        <a
          href="#search"
          title="Open search"
          className={`${style.headerBar__item} ${style["headerBar__item--search"]}`}
        >
          Search
        </a>
        <a
          href="#location"
          title="Store Locations"
          className={`${style.headerBar__item}  ${style["headerBar__item--location"]}`}
        >
          Store Locator
        </a>
        <a
          href="#contact"
          title="Contact"
          className={`${style.headerBar__item} ${style["headerBar__item--contact"]}`}
        >
          Contact us
        </a>
      </div>
      <div className={style.logo__wrapper}>
        <img src={Tiffany} className="logo logo--header" alt="Tiffany & Co." />
      </div>
      <div className={style.headerBar__right} onMouseLeave={() => { setActiveMenu('') }}>
        <div className="flex">
          <a
            href="#appointment"
            title="Book an Appointment"
            className={`${style.headerBar__item} ${style["headerBar__item--appointment"]}`}
          >
            Book an Appointment
          </a>
          <a
            href="#account"
            title="My Account"
            onMouseEnter={() => { setActiveMenu('account') }}
            className={`${style.headerBar__item} ${style["headerBar__item--account"]}`}
          >
            My Account
          </a>
          <a
            href="#wishlist"
            title="My Wishlist"
            onMouseEnter={() => { setActiveMenu('wishlist') }}
            className={`${style.headerBar__item} ${style["headerBar__item--wishlist"]}`}
          >
            My Wishlist
          </a>
          <a
            href="#shoppingbag"
            title="My Shopping Bag"
            onMouseEnter={() => { setActiveMenu('cart') }}
            className={`${style.headerBar__item} ${style["headerBar__item--shoppingbag"]}`}
          >
            Your Shopping Bag <span className={style.bag__count}>{totalItems > 0 && totalItems}</span>
          </a>
        </div>
        <div className={`${style.headerBar__dropdown} ${style['headerBar__dropdown--right']} ${activeMenu !== '' && style['headerBar__dropdown--active']}`}>
          <button className={style.dropdown__close} onClick={() => { setActiveMenu('') }}>
            Close
          </button>
          {activeMenu === 'account' && <Account />}
          {activeMenu === 'wishlist' && <Wishlist />}
          {activeMenu === 'cart' && <Minicart />}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;

HeaderBar.propTypes = {
  setMobileMenu: PropTypes.func
}