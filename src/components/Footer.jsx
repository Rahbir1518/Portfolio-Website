export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="footer-title">Let's create something together</h2>
        <p className="footer-text">Open for opportunities in software development, hackathons, and creative collaborations.</p>
        <a href="mailto:rahbir1518@gmail.com" className="footer-cta cursor-clickable">Get in Touch</a>
        
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/rahbirmahdi/" target="_blank" className="cursor-clickable">
          LinkedIn
          </a>
          <a href="https://github.com/Rahbir1518" target="_blank" className="cursor-clickable">
          GitHub
          </a>
          <a href="https://devpost.com/Rahbir1518?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" target="_blank" className="cursor-clickable">
          Devpost
          </a>
          <a href="resume.pdf" download={"Md_Rahbir_Mahdi_Resume.pdf"} className="cursor-clickable">
          Resume
          </a>
        </div>
      </div>
    </footer>
  );
}