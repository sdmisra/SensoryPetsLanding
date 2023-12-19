import Image from 'next/image'
import andy from '/public/Andy/CottonAndy.jpg'

const HeroImage = () => {
  return (
    <Image 
    alt="one of the cuddly pets available for purchase today"
    src={andy}
    />
  )
}

export default HeroImage;