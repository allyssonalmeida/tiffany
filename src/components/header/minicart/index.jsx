import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import style from '../../../styles/Header.module.scss'

const Minicart = () => {

  const { cart, removeFromCart } = useContext(CartContext)

  console.log(cart)

  return (
    <section className={`${style.dropdown__child} ${style.minicart}`}>
      {
        cart?.products?.length > 0 ? (
          <ul className={style.minicart__items}>
            {cart.products.map((product, index) => (
              <li key={index} className={style['minicart-item']}>
                <div className={style['minicart-item__image']}>
                  <img src={product.image.url} alt={product.image.alt} />
                </div>
                <div className={style['minicart-item__summary']}>
                  <div className={style['minicart-item__name']}>
                    {product.name}
                  </div>
                  <div className={style['minicart-item__quantity']}>
                    Quantity:
                    <span>
                      {product.quantity}
                    </span>
                  </div>
                  <button
                    className={style['minicart-item__remove']}
                    onClick={() => (removeFromCart(product))}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) :
          (
            <>
              <div className={style.dropdown__content}>
                <strong>Your Shopping Bag</strong>
                <p>
                  Your shopping bag is empty.
                </p>
              </div>
              <div className={style.dropdown__ctas}>

                <p>
                  For a faster checkout, sign in to your account.
                </p>
                <a href="#">Sign In</a>
              </div>
            </>
          )
      }
    </section>
  )
}

export default Minicart