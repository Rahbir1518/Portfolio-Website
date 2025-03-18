import React from 'react';
import SpotlightCard from './SpotlightCard';
import wrench from '../assets/wrench.png';
import framework from '../assets/framework.png';

const TechStack = () => {
  return (
    <div className="div4 p-4">
      
      <div className="w-[98%] mx-auto">
        <div className="flex space-x-4">

          <SpotlightCard className="flex-1 bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
            
            <h1 className='font-primary text-black text-2xl '>{"</>"} <span className="hover:underline">Languages</span></h1>
            
            <div className="grid grid-cols-2 gap-x-8 text-secondary font-secondary mt-4">
              <ul className="list-none space-y-1">
                <li>Python</li>
                <li>Java</li>
                <li>C</li>
                <li>RISC-V Assembly</li>
                <li>Verilog</li>
                <li>JavaScript</li>
              </ul>
              <ul className="list-none space-y-1">
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
          </SpotlightCard>

          <SpotlightCard className="flex-1 text-secondary font-secondary bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
            <h1 className="font-primary text-black text-2xl flex items-center space-x-2 hover:underline"> 
              <img src={wrench} alt="Wrench" className="w-6 h-6" />
              <span>Developer Tools</span>
            </h1>
            
            <div className="grid grid-cols-2 gap-x-8 text-secondary font-secondary mt-4">
              <ul className="list-none space-y-1">
                <li>Git</li>
                <li>Google Cloud Platforms</li>
                <li>VS Code</li>
                <li>Pycharm</li>
                <li>CRAN</li>
                <li>Eclipse</li>
              </ul>
              <ul className="list-none space-y-1">
                <li>Atom</li>
              </ul>
            </div>
          </SpotlightCard>

          <SpotlightCard className="flex-1 text-secondary font-secondary bg-primary/60 hover:bg-primary transition-colors duration-450" spotlightColor="rgba(185, 140, 115, 1)">
          <h1 className="font-primary text-black text-2xl flex items-center space-x-2 hover:underline"> 
              <img src={framework} alt="Frameworks" className="w-6 h-6" />
              <span>Libraries & Frameworks</span>
            </h1>
            
            <div className="grid grid-cols-2 gap-x-8 text-secondary font-secondary mt-4">
              <ul className="list-none space-y-1">
                <li>React</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>NumPy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
              <ul className="list-none space-y-1">
                <li>Mediapipe</li>
                <li>OpenCV</li>
                <li>Scikit-learn</li>
                <li>TensorFlow</li>
                <li>PyGame</li>
                <li>Teachable Machine</li>
              </ul>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
