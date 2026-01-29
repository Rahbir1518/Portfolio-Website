export function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">Computer Science Student & Developer</span>
          <h1 className="hero-title">
            MD RAHBIR<br />
            <span className="hero-title-accent">MAHDI</span>
          </h1>
          <p className="hero-subtitle">
            Full-stack developer focused on building impactful applications. 
            Currently looking for internships while pursuing CS at York University.
          </p>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Email</span>
              <a href="mailto:rahbir1518@gmail.com" className="meta-value cursor-clickable">rahbir1518@gmail.com</a>
            </div>
            <div className="meta-item">
              <span className="meta-label">Location</span>
              <span className="meta-value">Toronto, ON</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Status</span>
              <span className="meta-value" style={{ color: 'var(--accent)' }}>● Available</span>
            </div>
          </div>
        </div>
        
        <div className="hero-sectors">
          <a href="#exp" className="sector-link cursor-clickable">Experience</a>
          <a href="#projects" className="sector-link cursor-clickable">Projects</a>
          <a href="#skills" className="sector-link cursor-clickable">Skills</a>
          <a href="#art" className="sector-link cursor-clickable">Art</a>
        </div>
      </div>
    </section>
  );
}