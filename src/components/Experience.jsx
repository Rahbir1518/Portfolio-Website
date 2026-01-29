export function Experience() {
  return (
    <section id="exp" className="experience-section">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">02</div>
          <div className="section-title-block">
            <h2>Experience</h2>
            <p>Building software that serves communities and scales impact</p>
          </div>
        </div>
        
        <div className="experience-list">
          <div className="experience-card cursor-hover">
            <div className="exp-date">Jul 2025 – Aug 2025</div>
            <div className="exp-content">
              <h3>Software Developer Intern</h3>
              <div className="exp-company">Islamic Center of Markham — Toronto, ON</div>
              <ul className="exp-points">
                <li>Developed community-facing mobile app serving 1,000+ members using React Native (Expo) with real-time announcements and prayer schedules</li>
                <li>Implemented push notifications via OneSignal and live data syncing with Supabase</li>
                <li>Engineered full-stack Volunteer Scheduling platform using React.js and Supabase for 250+ volunteers</li>
                <li>Integrated secure Supabase Auth with PostgreSQL and role-based access control</li>
              </ul>
            </div>
          </div>
          
          <div className="experience-card cursor-hover">
            <div className="exp-date">Apr 2025 – Present</div>
            <div className="exp-content">
              <h3>Freelance Web Developer</h3>
              <div className="exp-company">Independent — Remote</div>
              <ul className="exp-points">
                <li>Built responsive websites with React, Next.js and Tailwind CSS resulting in 3x traffic increase and 25% mailing list growth</li>
                <li>Implemented automated testing with Jest and Postman, reducing bugs by 60%</li>
                <li>Streamlined CI/CD via GitHub Actions, reducing release time by 900s</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}