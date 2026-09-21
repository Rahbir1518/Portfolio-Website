const sectors = ['EXPERIENCE', 'PROJECTS', 'SKILLS', 'ART'];

// Four repeats: the animation scrolls -50%, so each half must be wider than the viewport.
const items = Array.from({ length: 4 }, () => sectors).flat();

export function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((name, i) => (
          <span key={i} className="marquee-item">
            SECTOR {String((i % sectors.length) + 1).padStart(2, '0')} — {name}
          </span>
        ))}
      </div>
    </div>
  );
}
