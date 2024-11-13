import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section id="projects">
    <div className="border-b border-neutral-700 pb-4">
        <motion.h1 
            className="my-20 text-center text-4xl text-white group relative inline-block w-full hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -50}}
            transition={{duration: 1, ease: "easeInOut"}}
        >
          <span>Pro
            <span className="text-neutral-400">jects</span>
          </span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </motion.h1>
        <div>
            {PROJECTS.map((project,index) => (
                <motion.div 
                    key={index} 
                    className='mb-8 flex flex-wrap lg:justify-center'
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 0.8, delay: index * 0.2}}
                >
                    <div className='w-full lg:w-1/4'>
                    <img 
                        src={project.image} 
                        width={150}
                        height={150}
                        alt={project.title}
                        className='mb-6 rounded'
                        />                       
                    </div>
                    <div className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='text-sky-500 text-2xl mb-2 font-semibold'>{project.title}</h6>
                        <p className='text-white mb-4 text-neutral-400 text-left'>{project.description}</p>
                        {project.technologies.map((tech,index) => (
                            <span key={index} className=' mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-orange-500'>{tech}</span>
                        ))}
                     </div>
                </motion.div>
            ))}
        </div>
    </div>
    </section>
  )
}

export default Projects