import { motion } from 'framer-motion'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          className="mb-16 text-center text-5xl font-bold text-white group relative inline-block w-full hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -50}}
          transition={{duration: 1, ease: "easeInOut"}}
        >
          Projects
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-20 bg-sky-500 rounded-full"></span>
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              className="relative bg-neutral-800/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-sky-500/50 transition-all duration-300 group overflow-hidden"
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: 50}}
              transition={{duration: 0.5, delay: index * 0.2}}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* รูปภาพโปรเจค */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="relative z-10 p-8">
                <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-neutral-700/50 text-sky-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-sky-500/20 text-sky-400 rounded-lg hover:bg-sky-500/30 transition-colors"
                >
                  View Project
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects