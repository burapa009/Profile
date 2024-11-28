import { motion } from 'framer-motion'
import { EXPERIENCES } from '../constants'

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="mb-16 text-center text-5xl font-bold text-white group relative inline-block w-full hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -50}}
          transition={{duration: 1, ease: "easeInOut"}}
        >
          Experiences
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-sky-500 rounded-full"></span>
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((experience, index) => (
            <motion.div
              key={index}
              className="relative bg-neutral-800/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-700/50 hover:border-sky-500/50 transition-all duration-300 group"
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: 50}}
              transition={{duration: 0.5, delay: index * 0.2}}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-sky-500/20 text-sky-400 rounded-full text-sm mb-4">
                  {experience.date}
                </span>
                
                <h3 className="text-2xl text-white font-bold mb-2 group-hover:text-sky-400 transition-colors">
                  {experience.title}
                </h3>
                
                <p className="text-lg text-neutral-300 mb-2">
                  {experience.company}
                </p>
                
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="text-sm text-neutral-400">Technologies:</span>
                  {experience.technologies.split(',').map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-3 py-1 bg-neutral-700/50 rounded-full text-sm text-sky-300 hover:bg-sky-500/20 transition-colors"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 text-neutral-300">
                  {experience.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-sky-500 rounded-full mt-2 mr-3"></span>
                      <span className="flex-1">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience