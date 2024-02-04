'use client';
import Image from 'next/image'
import assetPaths from '@/app/assets/plushArray'
import { motion } from 'framer-motion'
import { useState } from 'react'

const HeroCarousel = () => {
  const [radioOption, setRadioOption] = useState(0)
  const [plushOption, setPlushOption] = useState('winnie')
  const array = assetPaths;

  const selectOption = (event) => {
    setRadioOption(event.target.value)
  }

  return (
    <motion.div 
    className='flex flex-col h-[85%] w-[95%] border-2 border-slate-100/50 p-2 rounded-lg backdrop-brightness-75'
    animate={{opacity:.9, backgroundColor: 'rgb(21,42,75)'}}
    >
      <span className='flex justify-evenly w-[100%] p-2'>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('winnie')}
        }
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .7)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Winnie</motion.button>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('maple')}}
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .7)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Maple</motion.button>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('begonia')}}
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .7)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Begonia</motion.button>
      </span>
    <section className='flex flex-col items-center justify-center h-full w-full rounded-lg bg-slate-100/50  border-slate-100/10 border-2'>
      <Image
      className='p-2 rounded-[2rem]'
      alt="one of the cuddly pets available for purchase today"
      src={array[plushOption][radioOption]}
      height={250}
      width={300}
      />
      </section>
      <form className='flex justify-evenly p-2 m-2'>
        <div>
          <input 
          className='sm:w-2 sm:h-2 md:w-6 md:h-6 text-cyan-600 bg-slate-100 border-slate-300 focus:ring-cyan-500'
          type="radio" value={0} checked={radioOption == "0"} onChange={(e)=>{selectOption(e)}}/>
        </div>
        <div>
          <input
          className='sm:w-2 sm:h-2 md:w-6 md:h-6 text-cyan-600 bg-slate-100 border-slate-300 focus:ring-cyan-500'
          type="radio" value={1} checked={radioOption == "1"} onChange={(e)=>{selectOption(e)}}/>
        </div>
        <div>
          <input
          className='sm:w-2 sm:h-2 md:w-6 md:h-6 text-cyan-600 bg-slate-100 border-slate-300 focus:ring-cyan-500' 
          type="radio" value={2} checked={radioOption == "2"} onChange={(e)=>{selectOption(e)}}/>
        </div>
      </form>
    </motion.div>
  )
}

export default HeroCarousel;