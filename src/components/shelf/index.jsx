import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from '../../styles/Shelf.module.scss'
import items from '../../data/products.json'


const options = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1
}

const Shelf = () => {
  const { products } = items

  console.log(products)

  return (
    <section className={style.shelf}>
      {
        products &&
        <Slider {...options}>
          {products.map((product, index) => (
            <div key={index} className={style.product}>
              <a href="#product" key={index} className={style.product__image}>
                <img src={product.images[0].url} alt={product.images[0].alt} />
              </a>
              <div className={style.product__summary}>
                <strong className={style.product__name}></strong>
                <button className={style.product__cta}>
                  <span className={style.product__price}>
                    {(product.price / 100).toLocaleString('en-US', { type: 'currency', currency: 'USD' })}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      }
    </section>
  )
}

export default Shelf