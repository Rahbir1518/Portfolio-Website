export default function Projects() {
  const projects = [
    {
      title: "Vroomi",
      badge: "3rd Place",
      description: "Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",
      tags: ["React", "TypeScript", "Supabase", "Stripe"]
    },
    {
      title: "Mimicoo",
      badge: "6th Place",
      description: "Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",
      tags: ["Python", "MediaPipe", "Gemini API", "FastAPI"]
    },
    {
      title: "SproutTale",
      badge: "Participant",
      description: "Gamified reading platform with AI-driven recommendations. Interactive leveling system with XP-based sprite evolution.",
      tags: ["React.js", "MongoDB", "Gemini API"]
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
            <div key={index} className="project-card cursor-hover">
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
          ))}
        </div>
      </div>
    </section>
  );
}