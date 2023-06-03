import { PropTypes } from 'prop-types'
import style from '../../styles/Box.module.scss'

const Box = ({ type, content }) => {

  return (
    <div className={`${style.banner} ${style[`banner--${type}`]}`}>
      <div className={`${style.banner__media} ${style[`banner__media--${type}`]}`}>
        {
          content.media.type === 'image' &&
          <a href={content.cta.url} >
            <img
              src={content.media.url}
              alt={content.media.alt}
            />
          </a>
        }
        {
          content.media.type === 'video' &&
          <video
            src={content.media.url}
            width="100%"
            height="100%"
            playsInline
            muted
            autoPlay
            disablePictureInPicture
            preload="auto"
            loop
          />
        }
      </div>
      <div className={`${style.banner__content} ${style[`banner__content--${type}`]}`}>
        {
          content?.title &&
          <strong>{content.title}</strong>
        }
        {
          content?.text &&
          <p>{content.text}</p>
        }
        {
          content?.cta &&
          <div
            className={style.banner__cta}>
            <a
              href={content?.cta?.url}
              title={content?.cta?.text}
            >
              {content?.cta?.text}
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default Box

Box.propTypes = {
  type: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}
