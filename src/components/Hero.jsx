import React from 'react';
import SpotlightCard from './SpotlightCard';

const Hero = () => {
  return (
    <SpotlightCard className="bg-primary/60 hover:bg-primary transition-colors duration-450 rounded-2xl w-full">
      <h1 className="text-black text-4xl font-primary mb-4">Md Rahbir Mahdi</h1>

      <p className="font-secondary text-secondary mb-6">
        I’m a Computer Science student at York University passionate about AI, computer vision, and HCI. Exploring deep learning, generative AI, and cutting‑edge web applications—always pushing technology’s boundaries.
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
