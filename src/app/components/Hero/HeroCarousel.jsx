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
    <div className='flex justify-center border-2'>
      <form className='relative -left-4 top-12 p-0 m-0 z-4'>
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
      <section className='max-h-3/4 p-2'>
        <h3 className='flex justify-center p-2'>Choose a buddy to preview:</h3>
      <span className='w-[100%] h-[4vh] flex justify-evenly'>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4'
        onClick={()=>{setPlushOption('winnie')}}
        >Winnie</button>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4'
        onClick={()=>{setPlushOption('maple')}}
        >Maple</button>
        <button 
        className='flex text-lg border-2 items-center p-2 rounded-lg py-4'
        onClick={()=>{setPlushOption('begonia')}}
        >Begonia</button>
      </span>
      <Image
      className='relative -left-1 rounded-[50px]'
      alt="one of the cuddly pets available for purchase today"
      src={array[plushOption][radioOption]}
      height={500}
      width={500}
      />
      </section>
    </div>
  )
}

export default HeroCarousel;