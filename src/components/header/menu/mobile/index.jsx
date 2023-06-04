import { PropTypes } from "prop-types";

import style from '../../../../styles/Menu.module.scss'
import menu from '../../../../data/menu.json'
import { useEffect, useMemo, useState } from 'react'

const MobileMenu = ({ isMobileMenuActive, setMobileMenu }) => {
  const { header: headerMenu } = menu
  const [subMenu, setSubMenu] = useState('')


  const activeSubMenu = useMemo(() => {
    // console.log(subMenu)
    const filtered_items = headerMenu.children.find(item => item.name === subMenu)
    return filtered_items
  }, [headerMenu, subMenu])

  useEffect(() => {
    // console.log("SubmenuItems: ", activeSubMenu)
  }, [activeSubMenu])

  // console.log("Header Menu: ", headerMenu)
  return (
    <div className={`${style.menu__mobile} ${isMobileMenuActive && style['menu__mobile--active']}`}>
      <div className={style.sidebar}>
        <div className={style.sidebar__header}>
          <button
            className={style.sidebar__close}
            onClick={() => { setMobileMenu(false) }}
          >
            Close
          </button>
        </div>
        <div className={style.sidebar__content}>
          {headerMenu &&
            <nav className={style.sidebar__list}>
              <ul>
                {headerMenu.children?.map((menuItem, index) => (
                  <li
                    key={index}
                    className={style.sidebar__item}
                    onClick={() => { setSubMenu(menuItem?.name) }}
                  >
                    <a href={menuItem?.href}>
                      {menuItem?.name}
                    </a>
                  </li>
                ))
                }</ul>
            </nav>
          }
          <nav className={`${style.sidebar__list}`}>
            <ul>
              <li
                className={`${style.sidebar__link} ${style["sidebar__link--contact"]}`}
              >
                <a href="#contact" title="Contact">
                  Contact us
                </a>
              </li>
              <li className={`${style.sidebar__link} ${style["sidebar__link--appointment"]}`}
              >
                <a
                  href="#appointment"
                  title="Book an Appointment"
                >
                  Book an Appointment
                </a>
              </li>
              <li className={`${style.sidebar__link} ${style["sidebar__link--account"]}`}
              >
                <a
                  href="#account"
                  title="My Account"
                >
                  My Account
                </a>
              </li>
              <li className={`${style.sidebar__link}  ${style["sidebar__link--location"]}`}
              >
                <a
                  href="#location"
                  title="Store Locations"
                >
                  Store Locator
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {
        // activeSubMenu &&
        <div className={`${style.submenu__mobile} ${activeSubMenu && style['submenu__mobile--active']}`}>
          <div className={style.sidebar}>
            <div className={style.sidebar__header}>
              <button
                className={style.sidebar__back}
                onClick={() => { setSubMenu(false) }}
              >back </button>
              <strong>
                {subMenu}
              </strong>
              <button
                className={style.sidebar__close}
                onClick={() => { setSubMenu(false) }}
              >
                Close
              </button>
            </div>
            <div className={style.sidebar__content}>
              {activeSubMenu &&
                <nav className={`${style.sidebar__list} ${style['sidebar__list--mobile']}`}>
                  <ul>
                    {activeSubMenu.children?.map((subMenuItem, index) => (
                      <li
                        key={index}
                        className={`${style.sidebar__item} ${style['sidebar__item--submenu']}`}
                      >
                        <strong href={subMenuItem?.href} className={`${index === 0 && style.first}`}>
                          {subMenuItem?.name}
                        </strong>

                        <ul>
                          {
                            subMenuItem.menu?.map((thirdLevel, index) => (
                              <li
                                key={index}
                                className={`${style.sidebar__item} ${style['sidebar__item--thirdlevel']}`}
                              >
                                <a href={thirdLevel.href}>
                                  {thirdLevel?.name}
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                    }</ul>
                </nav>
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MobileMenu

MobileMenu.propTypes = {
  isMobileMenuActive: PropTypes.bool,
  setMobileMenu: PropTypes.func,
}