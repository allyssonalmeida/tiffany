import style from '../../../styles/Header.module.scss'

const Wishlist = () => {
  return (
    <section className={`${style.dropdown__child} ${style.wishlist}`}>
      <div className={style.dropdown__content}>
        <strong>Welcome to your Saved Items</strong>
        <p>
          View saved favorites, build-your-own charm jewelry designs and sent hints.
        </p>
      </div>
      <div className={style.dropdown__ctas}>
        <a href="#">Sign In</a>
      </div>
    </section>
  )
}

export default Wishlist