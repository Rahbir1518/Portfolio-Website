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
              className="text-black cursor-none hover:underline"
              href="https://devpost.com/software/vroomi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Islamic Center of Markham - Masjid Darul Iman (Computer Systems Analyst)<br/>
              <a>Jul. 2025-Aug. 2025</a>
            </a>
          
          </h1>
          <ul className='font-secondary'>
            <li>-Developed a community-facing mobile app using React Native (Expo), designed to serve 1,000+ congregation members with real-time access to announcements, events, and prayer timings.</li>
            <li>-Implemented push notifications, live data syncing, and a polished UI to improve user engagement and accessibility.</li>
            <li>-Built a full-stack volunteer scheduling web platform using React.js and Supabase, designed to streamline coordination of 250+ volunteers across weekly events.</li>
            <li>-Integrated Supabase Auth with a PostgreSQL database, enabling secure login, role-based permissions, and full CRUD operations.</li>
            <li>-Created scalable RESTful APIs, automated volunteer onboarding workflows, and responsive layouts for use across desktop and mobile.</li>
            <li>-Collaborated with administrative staff to translate manual scheduling processes into digital workflows, reducing coordination time and errors.</li>
          </ul>

        </SpotlightCard>

        <SpotlightCard className='bg-ternary/30 p-4 mt-4' spotlightColor='#F8EFE0'>
          <h1 className='text-secondary font-primary text-lg pb-2'>
            <a
              className="text-black cursor-none hover:underline"
              href="https://devpost.com/software/vroomi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vroomi (SpurHacks 2025 – 3rd Place Winner)<br/>
              <a>Jun. 2025</a>
            </a>
          
          </h1>
          <ul className='font-secondary'>
            <li>-Built a campus ride-sharing web app that matched students via geolocation and auto-split ride costs with real-time pricing.</li>
            <li>-Engineered responsive UI with React and TailwindCSS; Added scroll animations and resolved 15+ UI bugs.</li>
            <li>-Designed and developed the Driver Dashboard to display trips, earnings, and passenger data.</li>
            <li>-Integrated Supabase for real-time syncing of ride data across 3 views.</li>
            <li>-Supported route optimization by implementing algorithms based on the Travelling Postman Problem.</li>
            <li>-Connected Stripe Checkout to enable secure payments and dynamic gas cost-splitting by vehicle type.</li>
            <li>-Deployed full-stack app on Vercel, ensuring seamless integration and zero demo-time bugs.</li>
          </ul>

        </SpotlightCard>

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
            <li>-Developed an AI-based fashion recommender using TensorFlow, Hugging Face, and OpenAI CLIP.</li>
            <li>-Increased outfit match accuracy by 3x by aligning recommendations with cultural and body-type contexts.</li>
            <li>-Scraped 100K+ fashion data entries using BeautifulSoup, Scrapy, and Selenium.</li>
            <li>-Reduced preprocessing time by 40% with custom data cleaning scripts in Python.</li>
            <li>-Improved query efficiency by 50% through optimized indexing and data normalization.</li>
            <li>-Led model tuning, dataset engineering, and system architecture for deployment readiness.</li>
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
              Freelance Web Developer<br/>
              <a>Apr. 2025 – Present</a>
            </a>
          
          </h1>
          <ul className='font-secondary'>
            <li>-Delivered responsive client websites using React, Next.js, and Tailwind CSS.</li>
            <li>-Boosted page speed by up to 40% via image optimization, lazy loading, and code splitting.</li>
            <li>-Integrated APIs (Google Maps, Stripe, Auth0) to enable real-time interactivity.</li>
            <li>-Enhanced SEO and accessibility (WCAG 2.1) across all projects.</li>
            <li>-Maintained projects post-launch with bug fixes, analytics integration, and performance tracking.</li>
            <li>-Fixed bugs and tracked performance after launch with analytics tools.</li>
            <li>-Set up GitHub Actions for automated builds and deploys, cutting release time by 75%.</li>
          </ul>

        </SpotlightCard>
      </div>
    </SpotlightCard>
  )
}

export default Experience
