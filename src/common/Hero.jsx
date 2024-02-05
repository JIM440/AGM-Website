import HeroBig from '../assets/images/header-images/AGM_Hero_Large.jpg'
import HeroSmall from '../assets/images/header-images/AGM_Hero_Small.jpg'

const Hero = () => {
  return (
    <section id="hero" className="hero-2-cols">
    <div className="hero-home-image">
      <img className='desktop'
        src={HeroBig}
        alt=""
      />
      <img className='mobile'
        src={HeroSmall}
        alt=""
      />
    </div>
  </section>
  )
}

export default Hero
