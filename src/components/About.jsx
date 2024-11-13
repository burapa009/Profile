import aboutImg from '../assets/about2.jpg'
import { ABOUT_TEXT } from '../constants'
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
  visible: { opacity: 1, y: 0 }
}

const About = () => {

  return (
    <section id="about">
      <motion.div 
        variants={container(0.2)}
        initial="hidden"
        whileInView="visible"
        className='border-b border-neutral-700 pb-4'
      >
        <motion.h1
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5, ease: "easeInOut"}}
        className='my-20 text-center text-4xl font-bold text-white group relative inline-block w-full'>
          <span className='hover:text-sky-500 transition-colors duration-1000'>About</span>
          <span className='text-neutral-500 hover:text-orange-500 transition-colors duration-1000'>Me</span>
          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-sky-500 transition-all duration-700 group-hover:w-full'></span>
        </motion.h1>
        <div className='flex flex-wrap'>
            <motion.div variants={item} className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img 
                        variants={item}
                        className='rounded-2xl hover:scale-105 transition-transform duration-500' 
                        src={aboutImg} 
                        alt='about'
                    />
                </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5, ease: "easeInOut"}}
            variants={item} className='w-full lg:w-1/2'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6 text-neutral-300 leading-relaxed'>
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About