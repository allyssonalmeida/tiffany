import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import style from '../../../styles/Header.module.scss'

const Minicart = () => {

  const { cart, removeFromCart, placeOrder } = useContext(CartContext)

  console.log(cart)

  const handleOrder = () => {
    console.log('handle order fired');
    const orderId = cart?.orderId;
    placeOrder()
    window.alert(`Placed order: ${orderId}\nCheck localStorage to see all orders `)
  }

  return (
    <section className={`${style.dropdown__child} ${style.minicart}`}>
      {
        cart?.products?.length > 0 ? (
          <>
            <div className={style.minicart__message}>
              <p>To speed up the checkout process, sign in now.</p>
              <a href="#">Sign In</a>
            </div>
            <ul className={style.minicart__items}>
              {cart.products.map((product, index) => (
                <li key={index} className={style['minicart-item']}>
                  <div className={style['minicart-item__image']}>
                    <img src={product.image.url} alt={product.image.alt} />
                  </div>
                  <div className={style['minicart-item__summary']}>
                    <div className={style['minicart-item__name']}>
                      <a href="#">
                        {product.name}
                      </a>
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
                      <span>Remove</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className={style.minicart__footer}>
              <a href="#" className={style['minicart__view-bag']}>View Bag</a>
              <a href="#" className={style['minicart__checkout-btn']} onClick={handleOrder}>
                <span>
                  Estimated Total: {(cart.total / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </span>
                <span>
                  Checkout
                </span>
              </a>
            </div>
          </>
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