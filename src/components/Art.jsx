export function Art() {
  const artworks = [
    { id: 1, src: "images/cat.png", title: "Rainy Night", span: "wide" },
    { id: 2, src: "images/guitar.jpg", title: "Nostalgia" },
    { id: 3, src: "images/lantern.jpg", title: "Lantern Light" },
    { id: 4, src: "images/railroad.jpg", title: "The Crossing" },
    { id: 5, src: "images/violin.jpg", title: "Melody" },
  ];

  return (
    <section id="art" className="art-section">
      <div className="section-container">
        <div className="art-header-center">
          <p className="art-pretitle">Hey, I also draw in my spare time</p>
          <h2 className="art-title">Visual Arts</h2>
        </div>
        
        <div className="art-grid-masonry">
          {artworks.map((art) => (
            <div 
              key={art.id} 
              className={`art-item cursor-hover ${art.span || ''}`}
            >
              <img 
                src={art.src} 
                alt={art.title}
                className="art-image"
                loading="lazy"
              />
              <div className="art-overlay">
                <span className="art-caption">{art.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}