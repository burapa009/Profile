import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <section id="experience">
      <div className="border-b border-neutral-700 pb-4">
        <motion.h1 
          className="my-20 text-center text-4xl text-white group relative inline-block w-full hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -50}}
          transition={{duration: 1, ease: "easeInOut"}}
        >
          Experiences
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.h1>
        {/* ปรับปรุงส่วนที่เหลือให้ใช้ข้อมูลจาก EXPERIENCES โดยตรง */}
      </div>
    </section>
  )
}

export default Experience