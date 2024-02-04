'use client'

import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
    initial={{opacity: 0, y: -10}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: .25, duration: .5}}
    className='flex items-center h-[6vh] border-y-2 border-slate-700/80 rounded-md p-2 my-2 bg-slate-200'
    >
      <motion.h1
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{delay: .5, duration: 1}}
      className="text-4xl">Here is a peek at our next pets!
      </motion.h1>
    </motion.header>
  )
}

export default Header;