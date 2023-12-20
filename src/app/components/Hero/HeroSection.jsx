import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <section className='w-full h-[86vh] flex items-center justify-evenly border-2'>
      <div className='left-hero w-1/3 h-[80%]'>
        <HeroText />
      </div>
      <div className='flex items-center right-hero w-1/3 max-h-[70%]'>
        <HeroCarousel/>
      </div>
    </section>
  )
}

export default HeroSection;