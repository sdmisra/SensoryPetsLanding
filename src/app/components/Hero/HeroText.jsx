'use client';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:.9, backgroundColor: 'rgb(21,42,75)'}}
    transition={{delay: .5, duration: 4}}
    className="flex flex-col items-center justify-center w-full h-4/5 p-4 rounded-lg text-cyan-50 shadow-sm border-2 border-slate-100/50"
    >
      <motion.h2
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 2, duration: 1}}
      className="sm:text-lg md:text-4xl">
      Custom companions from our home:
      </motion.h2>
      <br/>
      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 3, duration: 2}}
      className="indent-6 sm:text-sm md:text-md"
      >Invest your hard earned funds in a product that is handmade and designed by our family to become a member of yours. 
      Our weighted and scented plushes are a perfect product for all ages, and offer a truly unique companion that suits your sensory needs - textural preferences, scenting options, and weight are considerations that we take seriously to offer you a product that you will cherish for many years to come.
      </motion.p>
      <br />
      <motion.p
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay: 4, duration: 2}}
      className='indent-6 sm:text-sm md:text-md'>Bring your loved ones comfort that will withstand the challenges ahead, and let us bring your ideal plushes to life with a custom order!</motion.p>
      <br />
      <motion.h2
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{delay: 5, duration: 2}}
      className="sm:text-lg md:text-4xl">Designs guaranteed to grow with you:</motion.h2>
      <br/>
      <motion.p
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{delay: 6, duration: 2}}
      className="indent-6 sm:text-sm md:text-md"
      >An entirely unique offering comes along with each plush: we want you to find a genuine attachment to your new friend and we offer a 30 day bonding guarantee alongside our warrantee of quality and resilient build methods - valid for a full<span className="font-bold"> three years</span>!
      </motion.p>
      <br />
      <motion.p
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{delay: 7, duration: 2}}
      className='indent-6 sm:text-sm md:text-md'>
      Our products are double sewn and we thoughtfully distribute our weighting materials to ensure that no leaks or tears occur, but we are eager to respond if you have any concerns or questions about your beaded buddy along the way.
      </motion.p>
    </motion.section>
  )
}

export default HeroText;