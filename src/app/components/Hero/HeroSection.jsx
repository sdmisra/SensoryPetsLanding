import HeroImage from "./HeroImage";
import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <section>
      <div className='left-hero'>
        <HeroText />
      </div>
      <div className='right-hero'>
        <HeroImage/>
      </div>
    </section>
  )
}

export default HeroSection;