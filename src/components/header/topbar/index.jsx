import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import style from '../../../styles/Header.module.scss'

const options = {
  dots: false,
  infinite: true,
  arrows: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1
}

const TopBar = () => {
  return (
    <Slider {...options} className={style.topBar}>
      <div className={style.topBar__text}>
        <p>Order now from complimentary delivery and returns on all orders.</p>
      </div>
      <div className={style.topBar__text}>
        <p>Our graduation gifts are the perfect way to say {'congratulations'}. <a href="#">Shop now</a></p>
      </div>
    </Slider>
  )
}

export default TopBar