import { motion } from 'framer-motion'
import logo from '../assets/generation2.png'
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa"


const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
         <img src={logo} className='w-32 h-14 mx-2' alt='logo'/>
      </div>

      <div className='hidden md:flex items-center gap-8'>
        <motion.button 
          onClick={() => scrollToSection('about')} 
          className='text-[16px] font-extrabold text-orange-500 cursor-pointer
          shadow-lg shadow-orange-500/50 px-4 py-2 rounded-lg transition-all duration-300
          hover:text-sky-500 hover:shadow-sky-500/70 hover:scale-105'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.button>
        <button 
          onClick={() => scrollToSection('technologies')} 
          className='text-[16px] font-extrabold text-white cursor-pointer
          shadow-lg shadow-purple-500/50 px-4 py-2 rounded-lg transition-all duration-300
          hover:text-sky-500 hover:shadow-sky-500/70 hover:scale-105'
        >
          Technologies
        </button>
        <button 
          onClick={() => scrollToSection('experience')} 
          className='text-[16px] font-extrabold text-white cursor-pointer
          shadow-lg shadow-green-500/50 px-4 py-2 rounded-lg transition-all duration-300
          hover:text-sky-500 hover:shadow-sky-500/70 hover:scale-105'
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className='text-[16px] font-extrabold text-white cursor-pointer
          shadow-lg shadow-yellow-500/50 px-4 py-2 rounded-lg transition-all duration-300
          hover:text-sky-500 hover:shadow-sky-500/70 hover:scale-105'
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className='text-[16px] font-extrabold text-white cursor-pointer
          shadow-lg shadow-pink-500/50 px-4 py-2 rounded-lg transition-all duration-300
          hover:text-sky-500 hover:shadow-sky-500/70 hover:scale-105'
        >
          Contact
        </button>
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a 
          href='https://www.linkedin.com/in/burapa-sangkawibhuk/' 
          target='_blank' 
          rel='Linkedin'
        >
          <FaLinkedin className='hover:text-sky-500 w-8 h-8 cursor-pointer'/>
        </a>
        <a 
          href='https://github.com/burapa009' 
          target='_blank' 
          rel='Github'
        >
          <FaGithub className='hover:text-sky-500 w-8 h-8 cursor-pointer'/>
        </a>
        <a 
          href='https://www.facebook.com/profile.php?id=100001970090683' 
          target='_blank' 
          rel='Facebook'
        >
          <FaFacebook className='hover:text-sky-500 w-8 h-8 cursor-pointer'/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar