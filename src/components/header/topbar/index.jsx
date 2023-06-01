import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

import style from '../../../styles/Header.module.scss'

const options = {
  type: 'loop',
  perPage: 1,
  pagination: false,
  autoplay: true,
  interval: 3000
}

const TopBar = () => {
  return (
    <Splide options={options} className={style.topBar}>
      <SplideSlide className={style.topBar__text}>
        <p>Order now from complimentary delivery and returns on all orders.</p>
      </SplideSlide>
      <SplideSlide className={style.topBar__text}>
        <p>Our graduation gifts are the perfect way to say {'congratulations'}. <a href="#">Shop now</a></p>
      </SplideSlide>
    </Splide>
  )
}

export default TopBar