import { HERO_CONTENT } from '../constants'
import profile from '../assets/burapa.jpeg'
import { motion } from 'framer-motion'

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.2
    }
  }
})

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const Hero = () => {
  return (
    <motion.div 
      className="border-b border-neutral-700 pb-4 lg:mb-35"
      variants={container(0.2)}
      initial="hidden"
      animate="visible"
    >
        <div className="flex flex-wrap">
            <motion.div variants={item} className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
                    lg:text-8xl">
                       <span className="relative bg-gradient-to-r from-blue-900 via-blue-500 
                    to-sky-500 bg-clip-text text-transparent 
                    transition-all duration-500 ease-in-out hover:scale-110 
                    hover:from-blue-700 hover:via-blue-400 hover:to-sky-400 
                    cursor-pointer transform-gpu group">
                        <span className="absolute left-0 -bottom-2 h-1 w-0 bg-gradient-to-r 
                        from-blue-900 to-sky-500 transition-all duration-700 group-hover:w-full"></span>
                        <span className="before:content-[''] before:absolute before:right-0 
                        before:top-0 before:h-full before:w-full 
                        before:animate-typewriter group-hover:before:w-0 
                        before:transition-all before:duration-700  " >
                            
                            Burapa
                        </span>
                    </span>
                    </h1>
                    <span className="relative bg-gradient-to-r from-pink-500 via-pink-900
                    to-orange-500 bg-clip-text text-4xl tracking-tight text-transparent
                    cursor-pointer group">
                        <span className="absolute left-0 -bottom-1 h-1 w-0 bg-gradient-to-r 
                        from-pink-500 to-orange-500 transition-all duration-700 group-hover:w-full"></span>
                        <span className="before:content-[''] before:absolute before:right-0 
                        before:top-0 before:h-full before:w-full 
                        before:animate-typewriter group-hover:before:w-0 
                        before:transition-all before:duration-700">
                            Full Stack Developer
                        </span>
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tight'>
                        {HERO_CONTENT}
                    </p>
                </div>
            </motion.div>
            <motion.div variants={item} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img 
                        src={profile} 
                        alt='profile' 
                        className='w-full max-w-md rounded-lg'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Hero