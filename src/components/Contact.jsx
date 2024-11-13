import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <section id="contact">
    <div className='border-b border-neutral-700 pb-20'>
        <h1 className='my-10 text-center text-4xl text-white group relative inline-block w-full hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]'>
          Contact Me
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </h1>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <a href="#" className='border-b'>
                {CONTACT.email}
            </a>
        </div>
    </div>
    </section>
  )
}

export default Contact