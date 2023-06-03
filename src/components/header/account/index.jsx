import style from '../../../styles/Header.module.scss'

const Account = () => {
  return (
    <section className={`${style.dropdown__child} ${style.account}`}>
      <div className={style.dropdown__content}>
        <strong>Sign In or Create an Account</strong>
        <p>
          With an account you can check out faster, view your online order history and access your shopping bag or saved items from any device.
        </p>
      </div>
      <div className={style.dropdown__ctas}>
        <a href="#">Create an Account</a>
        <a href="#">Sign In</a>
      </div>
    </section>
  )
}

export default Account