import React from 'react'
import SpotlightCard from './SpotlightCard';
import experience from '../assets/experience.png';

const Experience = () => {
  return (
    <SpotlightCard className="SpotlightCard5 div5 bg-primary md:bg-primary/60 md:hover:bg-primary transition-colors duration-450 rounded-2xl col-span-4 md:col-span-2 sm:col-span-1">
      <div className="text-black font-primary px-4 py-4">
        <h1 className="font-primary text-black text-2xl flex items-center space-x-2 hover:underline"> 
          <img src={experience} alt="Project icon by Icons8" className="w-12 h-12" />
          <span>Experience</span>
        </h1>

        <SpotlightCard className='bg-ternary/30 p-4 mt-4' spotlightColor='#F8EFE0'>
          <h1 className='text-secondary font-primary text-lg pb-2'>
            <a
              className="cursor-none hover:underline"
            >
              FashionIQ  |  Co-Founder & Developer<br/>
              <a>Jan. 2025 – Apr. 2025</a>
            </a>
          </h1>
          
          <ul className='font-secondary'>
            <li>-Collaborated in a startup focused on leveraging AI and machine learning for personalized fashion recommendations</li>
            <li>-Led the development of an AI-based recommendation engine utilizing TensorFlow, Hugging Face, and OpenAI CLIP</li>
            <li>-Led efforts in data collection and preprocessing</li>
            <li>-Managed large-scale data storage using PostgreSQL, MySQL, and MongoDB</li>
          </ul>
        </SpotlightCard>

        <SpotlightCard className='bg-ternary/30 p-4 mt-4' spotlightColor='#F8EFE0'>
          <h1 className='text-secondary font-primary text-lg pb-2'>
            <a
              className="text-black cursor-none hover:underline"
              href="https://samratnur.github.io/portfolio-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freelance Web Developer
            </a>
          
          </h1>
          <ul className='font-secondary'>
            <li>-Designed and developed responsive websites and web applications for individuals using technologies like React, Next.js, Tailwind CSS, etc.</li>
            <li>-Collaborated with clients to gather requirements, deliver customized solutions</li>
            <li>-Integrated third-party APIs and backend services to deliver dynamic, data-driven experiences</li>
          </ul>

        </SpotlightCard>
      </div>
    </SpotlightCard>
  )
}

export default Experience
