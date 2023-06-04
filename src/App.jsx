import { CartProvider } from "./context/CartContext"
import content from './data/content.json'

import Header from "./components/header"
import Breadcrumb from "./components/breadcrumb"
import Footer from "./components/footer"
import Video from "./components/video/video"
import Shelf from "./components/shelf"
import Box from "./components/box"

import style from './styles/Home.module.scss'

const App = () => {

  const {
    banners, categories, landmark, stories, fullbanners
  } = content

  // console.log("banners: ", banners)
  // console.log("categories: ", categories)

  return (
    <CartProvider>
      <Header />
      <Video />
      <Shelf />
      <div className="block">
        <a href="#" className="shop-now">Shop Now</a>
      </div>
      {
        banners &&
        <section className={style.banners}>
          {
            banners.map((item, index) => (
              <Box type="card" key={index} content={item} />
            ))
          }
        </section>
      }

      {
        categories &&
        <section className={style.categories}>

          <strong>Shop by Category</strong>
          <p>Brilliant design and unparalleled craftsmanship.</p>

          <div className={style.categories__list}>
            {
              categories.map((item, index) => (
                <Box type="category" key={index} content={item} />
              ))
            }
          </div>
        </section>
      }

      {
        landmark &&
        <section className={style.landmark}>
          <Box type="video-banner" content={landmark} />
        </section>
      }

      {
        stories &&
        <section className={style.stories}>

          <strong>Stories</strong>

          <div className={style.stories__list}>
            {
              stories.map((item, index) => (
                <Box type="stories" key={index} content={item} />
              ))
            }
          </div>
        </section>
      }

      {
        fullbanners &&
        <section className={style.fullbanners}>
          <div className={style.fullbanners__list}>
            {
              fullbanners.map((item, index) => (
                <Box type={`${index % 2 === 0 ? 'fullbanner' : 'fullbanner-reverse'}`} key={index} content={item} />
              ))
            }
          </div>

        </section>
      }

      <Breadcrumb />
      <Footer />
    </CartProvider>
  )
}

export default App
