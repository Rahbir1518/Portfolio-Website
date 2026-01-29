export function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="section-header">
          <div className="section-number">04</div>
          <div className="section-title-block">
            <h2>Toolkit</h2>
            <p>Technologies & tools I work with</p>
          </div>
        </div>
        
        <div className="skills-grid">
          <div className="skill-block">
            <h3 className="skill-title">Languages</h3>
            <div className="skill-items">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C/C++</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">R</span>
            </div>
          </div>
          
          <div className="skill-block">
            <h3 className="skill-title" style={{ color: 'var(--coffee-light)' }}>Frameworks</h3>
            <div className="skill-items">
              <span className="skill-tag">ReactJS</span>
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">MediaPipe</span>
              <span className="skill-tag">OpenCV</span>
              <span className="skill-tag">TensorFlow</span>
            </div>
          </div>
          
          <div className="skill-block">
            <h3 className="skill-title" style={{ color: 'var(--cream-muted)' }}>Tools</h3>
            <div className="skill-items">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Supabase</span>
              <span className="skill-tag">Google Cloud</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}