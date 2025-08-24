import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'

export default function EnhancedAboutSection() {
    const aboutRef = useRef(null);
    
    useEffect(() => {
      // Animate about section on scroll
      const handleScroll = () => {
        if (aboutRef.current) {
          const rect = aboutRef.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            aboutRef.current.classList.add('animate-in');
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check on initial load
      
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <section ref={aboutRef} className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
          I'm a Full Stack Engineer and creative developer passionate about building immersive and impactful digital experiences. My expertise spans frontend development with React and Vue 3, backend development with Node.js,Django and GO, and integrating complex systems like ERPs, CRMs, HRMS, payroll systems, and SSO solutions. I thrive at the intersection of design and functionality.Whether it’s crafting intuitive user interfaces, architecting scalable backends, or building progressive web apps (PWAs) that scale seamlessly.
          </p>
          <p>
          Beyond building products, I also teach the MERN stack, mentor students, and contribute to shaping bootcamp curricula, helping the next generation of developers grow.
          </p>
          <div className="skills">
          <span className="skill-tag">NodeJS</span>
            <span className="skill-tag">Three.js</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">Vue</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Django & Flask</span>
            <span className="skill-tag">WebGL</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">CSS3</span>
          </div>
        </div>
      </section>
    );
  }