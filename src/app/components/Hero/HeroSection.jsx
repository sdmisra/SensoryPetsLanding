'use client';
import {motion} from 'framer-motion';

import HeroCarousel from "./HeroCarousel";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, backdropFilter: 'brightness(70%)'}}
    transition={{delay:1, duration: 2}}
    className='w-full sm:h-full md:h-[80vh] md:flex md:items-center md:justify-evenly backdrop-brightness-[80%] border-y-2 border-slate-100/10 rounded-sm'>
      <div className='hidden h-3/5 md:flex md:items-center md:left-hero md:w-1/2 md:h-full p-2'>
        <HeroText />
      </div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:6, duration: 2}}
      className='flex flex-col items-center right-hero sm:w-[90vw] md:w-1/3 md:h-full p-2'
      >
      <h3 className='p-2 sm:text-3xl md:text-5xl text-emerald-50'>Featured Friends:</h3>
        <HeroCarousel/>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection;