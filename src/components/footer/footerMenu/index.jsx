import style from '../../../styles/Footer.module.scss'
import menuData from '../../../data/menu.json'

const FooterMenu = () => {
  const { footer: menus } = menuData;
  // console.log(menus)
  return (
    menus &&
    <div className={style['footer__menu-wrapper']}>
      {
        menus.children?.map((menu, index) => {
          return (
            <div className={style.footer__menu} key={index}>
              <strong className={style['footer__menu-title']}>{menu.name}</strong>
              <ul className={style['footer__menu-list']}>
                {menu.menu.map((item, index) => (
                  <li key={index} className={style['footer__menu-item']}>
                    <a href={item.href}>{item.name}</a>
                  </li>)
                )}
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}

export default FooterMenu