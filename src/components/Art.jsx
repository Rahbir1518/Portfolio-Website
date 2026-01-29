export function Art() {
  return (
    <section id="art" className="art-section">
      <div className="section-container">
        <div className="art-header-center">
          <p className="art-pretitle">Hey, I also draw in my spare time</p>
          <h2 className="art-title">Visual Arts</h2>
        </div>
        
        <div className="art-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="art-item cursor-hover">
              <div className="art-placeholder">
                <span className="art-placeholder-icon">◆</span>
                <span>Artwork {num}{num === 1 && <><br /><small>Add your image</small></>}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}