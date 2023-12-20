import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText"

const HeroSection = () => {
  return (
    <section className='w-full h-[86vh] flex items-center justify-evenly border-y-2 border-slate-100/10 rounded-sm bg-slate-300/10'>
      <div className='flex items-center left-hero w-1/3 h-full'>
        <HeroText />
      </div>
      <div className='flex flex-col items-center right-hero w-1/3 h-full'>
      <h3 className='relative top-0 left-0 p-2'>Choose a buddy to preview:</h3>
        <HeroCarousel/>
      </div>
    </section>
  )
}

export default HeroSection;