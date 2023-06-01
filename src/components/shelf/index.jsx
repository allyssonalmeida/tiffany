import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import style from '../../styles/Shelf.module.scss'
import items from '../../data/products.json'


const options = {
  type: 'loop',
  perPage: 3,
  pagination: false
}

const Shelf = () => {
  const { products } = items

  console.log(products)

  return (
    <section className={style.shelf}>
      {
        products &&
        <Splide>
          {products.map((product, index) => (
            <SplideSlide key={index} className={style.product__wrapper}>
              <a className={style.product}>
                <Splide className={style.product__gallery} options={options}>
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