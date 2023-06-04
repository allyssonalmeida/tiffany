import PropTypes from 'prop-types'
import style from '../../styles/Product.module.scss'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    console.log('AddToCart fired')
    addToCart(product)
  }

  return (
    <div className={style.product}>
      <button className={`${style.wishlist}`} title="Add to Wishlist">
        <div className={style.wishlist__icon}></div>
      </button>
      <a href="#product" className={style.product__image}>
        <img src={product.images[0]?.url} alt={product.images[0].alt} />
      </a>
      <div className={style.product__summary}>
        <strong className={style.product__name}>
          {product.name}
        </strong>
        <button className={style.product__cta} onClick={handleAddToCart}>
          <span className={style.product__price}>
            {(product.price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
          <span className={style.product__addToCart}>
            Add to Bag
          </span>
        </button>
      </div>
    </div>
  )
}
export default Product

Product.propTypes = {
  product: PropTypes.object.isRequired
}
