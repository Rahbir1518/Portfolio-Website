export default function Projects() {
  const base = import.meta.env.BASE_URL;
  const projects = [
    {
      title: "Clarus",
      event: "HackCanada 2026",
      winner: true,
      tracks: ["Vivirion Solutions", "Google"],
      description: "Automate every step of your clinical workflow.",
      tags: ["Healthcare AI", "FastAPI", "Workflow Design", "Twilio", "Voice Automation", "Supabase"],
      link: "https://devpost.com/software/clarus-7werym",
      image: `${base}/images/Clarus.jpg`
    },
    {
      title: "Mimicoo",
      event: "Hack the Valley 2025",
      winner: true,
      placement: "6th Place",
      description: "Infant babble analysis tool using MediaPipe and Librosa. Features Gemini API integration for speech disorder risk analysis.",
      tags: ["Audio ML", "MediaPipe", "Speech Analysis", "Python", "FastAPI", "Gemini API"],
      link: "https://devpost.com/software/mimicoo",
      image: `${base}/images/mimicoo.jpg`
    },
    {
      title: "Vroomi",
      event: "Hack the Valley 2025",
      winner: true,
      placement: "3rd Place",
      description: "Ride-sharing app with geolocation-based cost-splitting. Features route optimization using Travelling Postman Problem algorithms.",
      tags: ["Geolocation", "Optimization", "React", "TypeScript", "Supabase", "Stripe"],
      link: "https://devpost.com/software/vroomi",
      image: `${base}/images/vroomi.jpg` // Place in public/images/
    },
    {
      title: "Hampy",
      event: "Hack the North 2026",
      description: "Voice-driven BracketBot robot picker for food banks. Combines BB-SLAM mapping and localization for autonomous navigation, a YOLOv8 detector trained on the demo items, and Meta Quest 3 hand-tracking teleoperation to record demonstrations for a learned pick. One validated request runs the full pipeline: navigate, detect, pick, deliver, release.",
      tags: ["BB-SLAM", "YOLOv8", "Object Detection", "Model Training", "Robotics", "FastAPI"],
      link: "https://devpost.com/software/hampy",
      image: `${base}/images/HTN.jpg`
    },
    {
      title: "Numen",
      event: "GenAI Genesis 2026",
      description: "AI-powered team knowledge automation that answers engineering questions from code, docs, and past conversations with traceable sources.",
      tags: ["AI Search", "Knowledge Graph", "RAG", "FastAPI", "Next.js", "Gemini API"],
      link: "https://devpost.com/software/numen-9l43wx",
      image: `${base}/images/numen.png`
    },
    {
      title: "Corpus",
      event: "Hack the 6ix 2026",
      description: "Persistent cross-tool project memory for AI coding agents, letting sessions resume with relevant context instead of re-deriving everything.",
      tags: ["MCP", "AI Memory", "Supabase", "Graphify", "PostgreSQL", "Next.js"],
      link: "https://devpost.com/software/corpus-ixosp5",
      image: `${base}/images/corpus.png`
    },
    {
      title: "DWS",
      event: "CXC 2026 - AI Hackathon",
      description: "Voice-first indoor navigation assistant that helps visually impaired users navigate buildings using camera input, AI reasoning, and spoken guidance.",
      tags: ["Computer Vision", "Mobile Camera", "Accessibility", "YOLO", "Gemini Vision", "ElevenLabs"],
      link: "https://devpost.com/software/dws-4z1rot",
      image: `${base}/images/dws.jpg`
    },
    {
      title: "Nervy",
      event: "HackHive 2026",
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
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder" aria-hidden="true">
                    {project.title}
                  </div>
                )}
                <div className="project-image-overlay" />
              </div>

              <div className="project-content">
                <div className="project-header">
                  {project.event && <span className="project-event">{project.event}</span>}
                  <h3 className="project-title">{project.title}</h3>
                  {(project.winner || project.placement) && (
                    <div className="project-awards">
                      {project.winner && <span className="award-pill award-pill--winner">Winner</span>}
                      {project.placement && <span className="award-pill">{project.placement}</span>}
                    </div>
                  )}
                  {project.tracks && (
                    <div className="project-awards">
                      {project.tracks.map((track, i) => (
                        <span key={i} className="award-pill">{track}</span>
                      ))}
                    </div>
                  )}
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