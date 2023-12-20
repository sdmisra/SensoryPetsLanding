import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <section className='w-full h-[86vh] flex items-center justify-evenly border-y-2 border-slate-100/40 rounded-sm bg-slate-900/50'>
      <div className='left-hero w-1/3 h-[80%]'>
        <HeroText />
      </div>
      <div className='flex items-center right-hero w-1/3'>
        <HeroCarousel/>
      </div>
    </section>
  )
}

export default HeroSection;