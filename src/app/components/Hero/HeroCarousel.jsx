'use client';
import Image from 'next/image'
import assetPaths from '@/app/assets/plushArray'
import {motion} from 'framer-motion'
import {useState} from 'react'

const HeroCarousel = () => {
  const [radioOption, setRadioOption] = useState(0)
  const [plushOption, setPlushOption] = useState('winnie')
  const array = assetPaths;

  const selectOption = (event) => {
    setRadioOption(event.target.value)
  }

  return (
    <div className='flex flex-col h-[80%] w-[95%] rounded-xl shadow-lg" p-4'>
    <section className='flex flex-col items-center h-full w-full p-2'>
      <span className='flex justify-evenly w-[100%] h-auto p-2'>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('winnie')}
        }
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .5)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Winnie</motion.button>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('maple')}}
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .5)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Maple</motion.button>
        <motion.button 
        className='flex text-lg border-2 items-center p-2 rounded-lg bg-slate-200/90'
        onClick={()=>{setPlushOption('begonia')}}
        whileHover={{scale: 1.2, backgroundColor: 'rgb(21,42,75, .5)', color: 'rgb(234, 251, 256)'}}
        whileTap={{scale: .9}}
        >Begonia</motion.button>
      </span>
      <Image
      className='flex self-center py-2 rounded-[50px]'
      alt="one of the cuddly pets available for purchase today"
      src={array[plushOption][radioOption]}
      height={400}
      width={400}
      />
      </section>
      <form className='flex justify-center p-2 m-2 z-4'>
        <div>
          <input type="radio" value={0} checked={radioOption == "0"} onChange={(e)=>{selectOption(e)}}/>
        </div>
        <div>
          <input type="radio" value={1} checked={radioOption == "1"} onChange={(e)=>{selectOption(e)}}/>
        </div>
        <div>
          <input type="radio" value={2} checked={radioOption == "2"} onChange={(e)=>{selectOption(e)}}/>
        </div>
      </form>
    </div>
  )
}

export default HeroCarousel;