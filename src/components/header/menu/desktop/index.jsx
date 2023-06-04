import Box from '../../../box'
import style from '../../../../styles/Menu.module.scss'
import menu from '../../../../data/menu.json'
import { useState } from 'react'

const DesktopMenu = () => {
  const { header: headerMenu } = menu
  const [activeMenu, setActiveMenu] = useState('')

  return (
    <div className={style.menu__desktop}>
      {
        headerMenu &&
        <nav className={style.menu__list}>
          <ul>
            {headerMenu.children?.map((menuItem, index) => (
              <li
                key={index}
                className={`${style.menu__item} ${activeMenu === menuItem.name && style.active}`}
                onMouseOver={() => { setActiveMenu(menuItem.name) }}
              >
                <a href={menuItem.href}>
                  {menuItem.name}
                </a>
                {
                  activeMenu === menuItem.name &&
                  <div className={`${style.submenu} ${style[`submenu--${menuItem.name.replaceAll(' ', '')}`]}`} onMouseOut={() => { setActiveMenu('') }}>
                    <ul className={style.submenu__list}>
                      {menuItem.children?.map((subMenuItem, index) => (
                        <li
                          key={index}
                          className={style.submenu__item}
                        >
                          <strong>
                            {subMenuItem.name}
                          </strong>
                          {
                            <ul className={style['thirdlevel-menu']}>
                              {subMenuItem.menu?.map((thirdLevelItem, index) => (
                                <li className={style['thirdlevel-menu__item']} key={index}>
                                  <a href={thirdLevelItem.href}>
                                    {thirdLevelItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          }
                        </li>
                      ))}
                    </ul>
                    {
                      menuItem.banner &&
                      <div className={style.submenu__banner}>
                        <Box type="menu-card" key={index} content={menuItem.banner} />
                      </div>
                    }
                  </div>
                }
              </li>
            )
            )}
          </ul>
        </nav>
      }
    </div>
  )
}

export default DesktopMenu