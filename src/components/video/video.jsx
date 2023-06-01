import style from '../../styles/Video.module.scss'

const Video = () => {
  return (
    <section className={`container ${style.video__wrapper}`}>
      <div className={style.video__content}>
        <strong>This is Tiffany HardWear</strong>
        <p>
          Our brand ambassadors redefine Tiffany HardWear in our latest campaign.
        </p>
        <a href="#">Shop the Collection</a>
      </div>
      <div className={style.video__frame}>
        <a href="#">
          <video
            width="100%"
            height="100%"
            playsInline
            muted
            autoPlay
            disablePictureInPicture
            preload="auto"
            loop
            src="//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile"
          />
        </a>
      </div>
    </section>
  )
}

export default Video