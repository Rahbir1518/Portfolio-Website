import React from 'react';
import SpotlightCard from './SpotlightCard';

const Hero = () => {
  return (
    
    <SpotlightCard className="bg-primary md:bg-primary/60 md:hover:bg-primary transition-colors duration-450 rounded-2xl w-full">
      <h1 className="text-black text-4xl font-primary mb-4">Md Rahbir Mahdi</h1>

      <p className="font-secondary text-secondary pb-3">
        I'm a Computer Science student at York University with a strong interest in AI, computer vision, and human-computer interaction. Lately, I've been learning more about deep learning, generative AI, and building modern web apps.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="src/assets/Resume.pdf"
          download
          className="border-2 text-[#0d0705] hover:bg-greenYellow/70 px-4 py-2 rounded-2xl text-sm font-thin font-mono transition-colors hover:cursor-none"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/rahbirmahdi"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 text-[#0d0705] hover:bg-greenYellow/70 px-4 py-2 rounded-2xl text-sm font-thin font-mono transition-colors hover:cursor-none"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Rahbir1518"
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 text-[#0d0705] hover:bg-greenYellow/70 px-4 py-2 rounded-2xl text-sm font-thin font-mono transition-colors hover:cursor-none"
        >
          GitHub
        </a>
      </div>
    </SpotlightCard>
  );
};

export default Hero;
