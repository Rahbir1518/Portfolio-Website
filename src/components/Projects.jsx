export default function Projects() {
  const base = import.meta.env.BASE_URL;
  const projects = [
    {
      title: "Clarus",
      badge: "Winner • HackCanada 2026 • Vivirion + Google",
      description: "Automate every step of your clinical workflow.",
      tags: ["Healthcare AI", "FastAPI", "Workflow Design", "Twilio", "Voice Automation", "Supabase"],
      link: "https://devpost.com/software/clarus-7werym",
      image: `${base}/images/Clarus.jpg`
    },
    {
      title: "Mimicoo",
      badge: "Winner • 6th Place • Hack the Valley 2025",
      description: "Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",
      tags: ["Audio ML", "MediaPipe", "Speech Analysis", "Python", "FastAPI", "Gemini API"],
      link: "https://devpost.com/software/mimicoo",
      image: `${base}/images/mimicoo.jpg`
    },
    {
      title: "Vroomi",
      badge: "Winner • 3rd Place • Hack the Valley 2025",
      description: "Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",
      tags: ["Geolocation", "Optimization", "React", "TypeScript", "Supabase", "Stripe"],
      link: "https://devpost.com/software/vroomi",
      image: `${base}/images/vroomi.jpg` // Place in public/images/
    },
    {
      title: "Numen",
      badge: "GenAI Genesis 2026",
      description: "AI-powered team knowledge automation that answers engineering questions from code, docs, and past conversations with traceable sources.",
      tags: ["AI Search", "Knowledge Graph", "RAG", "FastAPI", "Next.js", "Gemini API"],
      link: "https://devpost.com/software/numen-9l43wx",
      image: `${base}/images/numen.png`
    },
    {
      title: "Corpus",
      badge: "Hack the 6ix 2026",
      description: "Persistent cross-tool project memory for AI coding agents, letting sessions resume with relevant context instead of re-deriving everything.",
      tags: ["MCP", "AI Memory", "Supabase", "Graphify", "PostgreSQL", "Next.js"],
      link: "https://devpost.com/software/corpus-ixosp5",
      image: `${base}/images/corpus.png`
    },
    {
      title: "DWS",
      badge: "CXC 2026 - AI Hackathon",
      description: "Voice-first indoor navigation assistant that helps visually impaired users navigate buildings using camera input, AI reasoning, and spoken guidance.",
      tags: ["Computer Vision", "Mobile Camera", "Accessibility", "YOLO", "Gemini Vision", "ElevenLabs"],
      link: "https://devpost.com/software/dws-4z1rot",
      image: `${base}/images/dws.jpg`
    },
    {
      title: "Nervy",
      badge: "HackHive 2026",
      description: "AI behavioral interview coach delivering real-time video feedback on eye contact, posture, and confidence via MediaPipe/OpenCV.",
      tags: ["OpenCV", "MediaPipe", "WebSockets", "Computer Vision", "FastAPI", "AI Coaching"],
      link: "https://devpost.com/software/nervy",
      image: `${base}/images/nervy.jpg`
    },

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