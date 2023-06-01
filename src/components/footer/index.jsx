import style from '../../styles/Footer.module.scss'
import FooterMenu from './footerMenu';
import Newsletter from './newsletter';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__wrapper}>
        <FooterMenu />
        <div className={style.footer__right}>
          <Newsletter />
          <ul className={style.footer__social}>
            <li className={`${style['footer__social-item']} ${style['footer__social-item--instagram']}`}>
              <a href="#" title="Instagram">Instagram</a>
            </li>
            <li className={`${style['footer__social-item']} ${style['footer__social-item--facebook']}`}>
              <a href="#" title="Facebook">Facebook</a>
            </li>
            <li className={`${style['footer__social-item']} ${style['footer__social-item--pinterest']}`}>
              <a href="#" title="Pinterest">Pinterest</a>
            </li>
            <li className={`${style['footer__social-item']} ${style['footer__social-item--twitter']}`}>
              <a href="#" title="Twitter">Twitter</a>
            </li>
            <li className={`${style['footer__social-item']} ${style['footer__social-item--youtube']}`}>
              <a href="#" title="Youtube">Youtube</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footer__bottom}>
        <div className={style.footer__location}>
          <a href="#" >
            Change Location: <span>United States</span>
          </a>
        </div>
        <span className={style.footer__copy}>
          © T&CO. 2023
        </span>
      </div>
    </footer>
  )
}

export default Footer