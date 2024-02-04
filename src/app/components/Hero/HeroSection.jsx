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
    className='w-full h-[86vh] flex items-center justify-evenly backdrop-brightness-[80%] border-y-2 border-slate-100/10 rounded-s'>
      <div className='flex items-center left-hero w-1/2 h-full p-2'>
        <HeroText />
      </div>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:6, duration: 2}}
      className='flex flex-col items-center right-hero w-1/3 h-full p-2'
      >
      <h3 className='p-2 text-5xl text-emerald-50'>Featured Friends:</h3>
        <HeroCarousel/>
      </motion.div>
    </motion.section>
  )
}

export default HeroSection;