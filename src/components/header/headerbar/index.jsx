import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import style from "../../../styles/Header.module.scss";
import Tiffany from "../../../assets/images/tiffco-logo-2.svg";
import Account from "../account";
import Wishlist from "../wishlist";
import Minicart from "../minicart";

const HeaderBar = () => {
  const { countItems, cart } = useContext(CartContext)
  const [activeMenu, setActiveMenu] = useState('')

  const totalItems = countItems()

  useEffect(() => {
    console.log("cart", cart)
  }, [cart])


  return (
    <div className={style.headerBar}>
      <div className={style.headerBar__left}>
        <button
          href="#"
          title="Mobile menu"
          className={`${style.headerBar__menu}`}
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
          Store Locations
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
            Account
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
            Your Shopping Bag <span className={style.bag__count}>{totalItems}</span>
          </a>
        </div>
        <div className={`${style.headerBar__dropdown} ${style['headerBar__dropdown--right']} ${activeMenu !== '' && style['headerBar__dropdown--active']}`}>
          {activeMenu === 'account' && <Account />}
          {activeMenu === 'wishlist' && <Wishlist />}
          {activeMenu === 'cart' && <Minicart />}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
