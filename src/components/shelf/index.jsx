import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import style from '../../styles/Shelf.module.scss'
import items from '../../data/products.json'


const shelfOptions = {
  type: 'slide',
  perPage: 4,
  perMove: 1,
  pagination: false,
}
const galleryOptions = {
  type: 'fade',
  perPage: 1,
  pagination: true,
  arrows: false
}

const Shelf = () => {
  const { products } = items

  console.log(products)

  return (
    <section className={style.shelf}>
      {
        products &&
        <Splide options={shelfOptions}>
          {products.map((product, index) => (
            <SplideSlide key={index} className={style.product__wrapper}>
              <a className={style.product}>
                <Splide className={style.product__gallery} options={galleryOptions}>
                  {
                    product.images.map((image, index) => (
                      <SplideSlide key={index} className={style.product__image}>
                        <img src={image.url} alt={image.alt} />
                      </SplideSlide>
                    ))
                  }
                </Splide>
              </a>
            </SplideSlide>
          ))}
        </Splide>
      }
    </section>
  )
}

export default Shelf