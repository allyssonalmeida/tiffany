import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from '../../styles/Shelf.module.scss'
import items from '../../data/products.json'
import Product from '../product';


const options = {
  dots: false,
  infinite: false,
  arrows: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1
      }
    },
  ]
}

const Shelf = () => {
  const { products } = items

  // console.log(products)

  return (
    <section className={style.shelf}>
      {
        products &&
        <Slider {...options}>
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </Slider>
      }
    </section>
  )
}

export default Shelf