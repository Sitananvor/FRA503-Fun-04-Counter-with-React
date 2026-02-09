import './Stars.css';

const StarData = [
  { top: '10%', left: '15%', size: '2.2rem', delay: '0s' },
  { top: '30%', left: '80%', size: '1.5rem', delay: '1.s' },
  { top: '40%', left: '10%', size: '1.3rem', delay: '2s' },
  { top: '5%', left: '50%', size: '1.2rem', delay: '0.5s' },
  { top: '60%', left: '85%', size: '1.9rem', delay: '2.5s' },
  { top: '80%', left: '10%', size: '2.2rem', delay: '3s' },
  { top: '90%', left: '70%', size: '1.5rem', delay: '1.8s' },
  { top: '15%', left: '92%', size: '1.0rem', delay: '2.5s' },
];

export default function Stars() {
  return (
    <div className="starsWrapper">
      {StarData.map((star, index) => (
        <span 
          key={index} 
          className="starElement" 
          style={{
            top: star.top,
            left: star.left,
            fontSize: star.size,
            animationDelay: star.delay
          }}
        >
          ⭐
        </span>
      ))}
    </div>
  );
}