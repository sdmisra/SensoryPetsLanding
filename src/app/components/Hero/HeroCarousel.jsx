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
    <div className='h-3/4 flex justify-center'>
      <form className='relative -left-4 p-0 m-0 z-4'>
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
      <section className='max-h-3/4'>
      <Image
      className='relative -left-1 rounded'
      alt="one of the cuddly pets available for purchase today"
      src={array[plushOption][radioOption]}
      height={400}
      width={600}
      />
      </section>
    </div>
  )
}

export default HeroCarousel;