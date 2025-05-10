import React from 'react';
import SpotlightCard from './SpotlightCard';
import project from '../assets/project.png';

const FeaturedProjects = () => {
  return (
    <SpotlightCard className="SpotlightCard5 div5 bg-primary md:bg-primary/60 md:hover:bg-primary transition-colors duration-450 rounded-2xl col-span-4 md:col-span-2 sm:col-span-1">
      <div className="font-primary px-4 py-4">
        <h1 className="font-primary text-2xl flex items-center space-x-2 hover:underline"> 
          <img src={project} alt="Project icon by Icons8" className="w-6 h-6" />
          <span>Featured Projects</span>
        </h1>

        <SpotlightCard className='bg-ternary/30 p-4 mt-4' spotlightColor='#F8EFE0'>
          <h1 className='text-secondary font-primary text-lg'>
            <a
              className="cursor-none hover:underline"
              href="https://github.com/Rahbir1518/SignNavigator"
              target="_blank"
              rel="noopener noreferrer"
            >
              SignNavigator | Python, MediaPipe, OpenCV
            </a>
          </h1>
          <span className='font-secondary'>
            I built a real-time hand gesture recognition system using MediaPipe and OpenCV. By optimizing features and training a Random Forest model, I improved accuracy from 80% to 96%. Features were stored with Pickle for reproducibility and faster load times.
          </span>
        </SpotlightCard>

        <SpotlightCard className='bg-ternary/30 p-4 mt-4' spotlightColor='#F8EFE0'>
          <h1 className='text-secondary font-primary text-lg'>
            <a
              className="cursor-none hover:underline"
              href="https://github.com/Rahbir1518/SnapNote"
              target="_blank"
              rel="noopener noreferrer"
            >
              SnapNote | Python, Tkinter, PyTesseract
            </a>
          </h1>
          <span className='font-secondary'>
            Built a notebook app with a built-in dictionary using web scraping, added OCR with PyTesseract and OpenCV to pull text from screenshots, and extended support to 10 languages. Also automated image organization and cleaned up the UI for better performance.
          </span>
        </SpotlightCard>
      </div>
    </SpotlightCard>
  );
};

export default FeaturedProjects;
