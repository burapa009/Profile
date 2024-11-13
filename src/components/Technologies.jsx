import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";


const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <section id="technologies"> 
    <div className='border-b border-neutral-700 pb-24'>
        <motion.h1
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5, ease: "easeInOut"}}
        className="my-20 text-center text-4xl text-white group relative inline-block w-full  transition-colors duration-1000 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
          Technologies
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full  "></span>
        </motion.h1>
        <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5, ease: "easeInOut"}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]">
                <FaHtml5 className='text-7xl text-orange-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)] ">
                <IoLogoCss3 className='text-7xl text-sky-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">
                <IoLogoJavascript className='text-7xl text-yellow-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                <FaReact className='text-7xl text-cyan-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                <RiTailwindCssFill className='text-7xl text-purple-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(15,118,110,0.5)]">
                <BiLogoMongodb className='text-7xl text-teal-700 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
                <FaNode className='text-7xl text-green-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(8)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                <FaDatabase className='text-7xl text-blue-500 transition-colors duration-300'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="p-4 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                <TbJson className='text-7xl text-amber-500 transition-colors duration-300'/>
            </motion.div>          
        </motion.div>
    </div>
    </section>
  )
}

export default Technologies