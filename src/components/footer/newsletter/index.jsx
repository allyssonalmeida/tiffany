import { useState } from 'react'
import style from '../../../styles/Footer.module.scss'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log("Handle Submit")
  }

  return (
    <div className={style.newsletter}>
      <strong className={style.newsletter__title}>
        Latest from Tiffany
      </strong>
      <p className={style.newsletter__text}>
        Be the first to know about exciting new designs, special events, store openings and much more.
      </p>
      <form className={style.newsletter__form} onSubmit={handleSubmit}>
        <div className={style['newsletter__form-group']}>
          <input
            type="email"
            id="email"
            className={`${style.newsletter__input} ${email.length > 0 ? style.active : ''}`}
            value={email}
            required
            onChange={({ target }) => { setEmail(target.value) }}
          />
          <label className={style.newsletter__label} htmlFor="email">E-mail</label>
        </div>
        <button type="submit" className={style.newsletter__submit}>
          Sign up
        </button>
      </form>
    </div>
  )
}

export default Newsletter