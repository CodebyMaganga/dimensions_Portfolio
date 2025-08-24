import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { gsap } from 'gsap';
import { PROJECTS } from './data/projects';
import ProjectPlanet from './components/ProjectPlanet';
import PortalCore from './components/PortalCore';
import ProjectPanel from './components/ProjectPanel';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import GroundGrid from './components/GroundGrid';
import CenterName from './components/CenterName';
import AboutSection from './components/AboutSection';

// Enhanced About Section with animation


// Contact Section Component
function ContactSection() {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Animate contact section on scroll
    const handleScroll = () => {
      if (contactRef.current) {
        const rect = contactRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          contactRef.current.classList.add('animate-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message (you can implement this)
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section ref={contactRef} className="contact-section">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-icon">📧</span>
            <span>codebymaganga@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📱</span>
            <span>+254 707849963</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Background Transition Component
function BackgroundTransition() {
  return (
    <div className="background-transition">
      <div className="stars-background"></div>
      <div className="content-background"></div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [selected, setSelected] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-screen font-sans relative">
      <BackgroundTransition />
      
      <TopBar />

      <Canvas camera={{ position: [0, 2.5, 12], fov: 60 }} className="z-10">
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 6, 2]} intensity={1.5} color="#FFD700" />
        <pointLight position={[-6, -3, -4]} intensity={0.8} color="#00E5FF" />

        <Stars radius={80} depth={40} count={4000} factor={3} fade />
        {/* <GroundGrid /> */}

        <CenterName />
        {PROJECTS.map((p, i) => (
          <ProjectPlanet key={p.id} idx={i} total={PROJECTS.length} project={p} onSelect={setSelected} />
        ))}

        <OrbitControls enablePan={false} minDistance={6} maxDistance={18} />
      </Canvas>

      
      
      <section id="about">
      <AboutSection />
      </section>
      <section id="contact">
      <ContactSection />
      </section>

      <ProjectPanel project={selected} onClose={() => setSelected(null)} />

      <Footer />
    </div>
  );
}