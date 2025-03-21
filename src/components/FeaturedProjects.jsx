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

        <SpotlightCard className='bg-ternary/30 p-4 m-4' spotlightColor='#F8EFE0'>
          
          <h1 className='text-secondary font-primary text-lg mt-4'>
            <a className="text-black cursor-none hover:underline" href="https://github.com/Rahbir1518/SignNavigator"  target="_blank" rel="noopener noreferrer">SignNavigator | Python, MediaPipe, OpenCV</a>
          </h1>

          <span className='font-secondary'>A project where I developed a real-time hand gesture recognition system using MediaPipe for landmark detection and OpenCV for video processing. 
            I improved the model’s accuracy from 80% to 96% by optimizing features and training a Random Forest Classifier for ASL gesture recognition.
            I also built a custom data pipeline and stored features using Pickle for reproducibility and model efficiency. 
            The project utilized Python libraries such as NumPy, Matplotlib, and Scikit-learn for data handling, model training, and performance evaluation.
          </span>
        </SpotlightCard>

        <SpotlightCard className='bg-ternary/30 p-4 m-4' spotlightColor='#F8EFE0'> Test2</SpotlightCard>

      </div>
    </SpotlightCard>
  )
}

export default FeaturedProjects
