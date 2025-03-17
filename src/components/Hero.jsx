import React from 'react'

const Hero = () => {
  return (
    <div className="div2 col-span-3 md:col-span-2 sm:col-span-1 bg-[#EDE8D0]/60 hover:bg-[#EDE8D0] transition-colors duration-450 rounded-2xl mt-10 p-4">
      
      <h1 className="text-black text-4xl p-2 font-primary">{"<-"}Md Rahbir Mahdi{"->"}</h1>
      
      <p className='font-secondary text-secondary p-2 inline-flex items-center'>
        I am a Computer Science student at York University passionate about AI, computer vision, 
        and human-computer interaction. Currently exploring deep learning, 
        generative AI, and innovative web applications. 
        Enthusiastic about building intelligent systems that enhance user experiences and push the boundaries of technology.
      </p>

      <div className='flex flex-wrap gap-4 mt-6'>
        <a className="border-2 cursor-none text-secondary hover:text-slate-500 font-thin font-mono px-4 py-2 rounded-2xl text-sm" href="src/assets/Resume.pdf" download="Resume.pdf">
          Resume
        </a>

        <a className="border-2 cursor-none text-secondary hover:text-slate-500 font-thin font-mono px-4 py-2 rounded-2xl text-sm" href="https://www.linkedin.com/in/rahbirmahdi" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>

        <a className="border-2 cursor-none text-secondary hover:text-slate-500 font-thin font-mono px-4 py-2 rounded-2xl text-sm" href="https://github.com/Rahbir1518" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>

      </div>

    </div>
  )
}

export default Hero
