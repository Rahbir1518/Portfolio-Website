export default function Projects() {
  const projects = [
    {
      title: "Vroomi",
      badge: "3rd Place",
      description: "Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",
      tags: ["React", "TypeScript", "Supabase", "Stripe"],
      link: "https://devpost.com/software/vroomi",
      image: "/images/vroomi.jpg" // Place in public/images/
    },
    {
      title: "Mimicoo",
      badge: "6th Place",
      description: "Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",
      tags: ["Python", "MediaPipe", "Gemini API", "FastAPI"],
      link: "https://devpost.com/software/mimicoo",
      image: "/images/mimicoo.jpg"
    },
    {
      title: "Nervy",
      badge: "Hackathon Project",
      description: "AI behavioral interview coach delivering real-time video feedback on eye contact, posture, and confidence via MediaPipe/OpenCV.",
      tags: ["FastAPI", "MediaPipe", "OpenCV", "Gemini API", "WebSockets"],
      link: "https://devpost.com/software/nervy",
      image: "/images/nervy.jpg"
    }
  ];

  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">03</div>
          <div className="section-title-block">
            <h2>Hackathons</h2>
            <p>Building under pressure, winning with innovation</p>
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              className="project-card cursor-clickable"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {/* Image Container */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={`${project.title} screenshot`} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay" />
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-badge">{project.badge}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}