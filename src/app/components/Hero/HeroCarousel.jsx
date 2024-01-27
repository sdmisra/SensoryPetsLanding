'use client';
import Image from 'next/image'
import assetPaths from '@/app/assets/plushArray'
import {useState} from 'react'

const HeroCarousel = () => {
  const [radioOption, setRadioOption] = useState(0)
  const [plushOption, setPlushOption] = useState('winnie')
  const array = assetPaths;
  console.log(array)

  const handleButton = (event) => {
    console.log(event)
    setRadioOption(event.target.value)
  }

  return (
    <div className='flex flex-col h-[80%] w-[95%] rounded-xl backdrop-brightness-[70%] shadow-lg" p-4'>
    <section className='flex flex-col items-center h-full w-full p-2'>
      <span className='flex justify-evenly w-[100%] h-[4vh] '>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4 bg-slate-100/75'
        onClick={()=>{setPlushOption('winnie')}
      }
        >Winnie</button>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4 bg-slate-100/75'
        onClick={()=>{setPlushOption('maple')}}
        >Maple</button>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4 bg-slate-100/75'
        onClick={()=>{setPlushOption('begonia')}}
        >Begonia</button>
      </span>
      <Image
      className='rounded-[50px]'
      alt="one of the cuddly pets available for purchase today"
      src={array[plushOption][radioOption]}
      height={400}
      width={400}
      />
      </section>
      <form className='flex flex-col items-center p-0 m-0 z-4'>
        <div>
          <input type="radio" value={0} checked={radioOption == "0"} onChange={(e)=>{handleButton(e)}}/>
        </div>
        <div>
          <input type="radio" value={1} checked={radioOption == "1"} onChange={(e)=>{handleButton(e)}}/>
        </div>
        <div>
          <input type="radio" value={2} checked={radioOption == "2"} onChange={(e)=>{handleButton(e)}}/>
        </div>
      </form>
    </div>
  )
}

export default HeroCarousel;