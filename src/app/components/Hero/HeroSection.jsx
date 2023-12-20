import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <section className='w-full max-h-[86vh] flex items-center justify-evenly'>
      <div className='left-hero w-1/3 h-[100%]'>
        <HeroText />
      </div>
      <div className='flex items-center right-hero w-1/3 h-[100%]'>
        <HeroCarousel/>
      </div>
    </section>
  )
}

export default HeroSection;