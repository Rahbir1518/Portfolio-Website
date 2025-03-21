import React from 'react'
import SpotlightCard from './SpotlightCard'
import project from '../assets/project.png';

const FeaturedProjects = () => {
  return (
    <SpotlightCard className="SpotlightCard5 div5 p-4 ml-7 bg-primary/60 hover:bg-primary transition-colors duration-450 rounded-2xl col-span-4 md:col-span-2 sm:col-span-1">
      <div className='text-black font-primary'>
        <h1 className="font-primary text-black text-2xl flex items-center space-x-2 hover:underline"> 
          <img src={project} alt="Project icon by Icons8" className="w-6 h-6" />
          <span>Featured Projects</span>
        </h1>
      </div>
    </SpotlightCard>
  )
}

export default FeaturedProjects
