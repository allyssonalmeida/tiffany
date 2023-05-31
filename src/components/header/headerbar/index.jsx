import style from "../../../styles/Header.module.scss";
import Tiffany from "../../../assets/images/tiffco-logo-2.svg";

const HeaderBar = () => {
  return (
    <div className={style.headerBar}>
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
      <img src={Tiffany} className="logo logo--header" alt="Tiffany & Co." />
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
        className={`${style.headerBar__item} ${style["headerBar__item--account"]}`}
      >
        Account
      </a>
      <a
        href="#wishlist"
        title="My Wishlist"
        className={`${style.headerBar__item} ${style["headerBar__item--wishlist"]}`}
      >
        My Wishlist
      </a>
      <a
        href="#shoppingbag"
        title="My Shopping Bag"
        className={`${style.headerBar__item} ${style["headerBar__item--shoppingbag"]}`}
      >
        Your Shopping Bag
      </a>
    </div>
  );
};

export default HeaderBar;
