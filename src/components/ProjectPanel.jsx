import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function ProjectPanel({ project, onClose }) {
  const panelRef = useRef(null)
  const [activeImage, setActiveImage] = useState(0)

  // Close when clicking outside the panel
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (project) {
      document.addEventListener('mousedown', handleClickOutside)
      // Reset active image when project changes
      setActiveImage(0)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [project, onClose])

  // Close with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        onClose()
      }
    }

    if (project) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [project, onClose])

  const handleClose = (e) => {
    e.stopPropagation()
    onClose()
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-md">
          <motion.div
            ref={panelRef}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="w-[92vw] sm:w-[600px] h-[calc(100vh-2rem)] mt-4 mx-3 mb-3
              rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-white/10 backdrop-blur-xl p-6 
              text-white overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with title and close button */}
            <div className="flex items-start justify-between mb-6">
              <div className='flex flex-col'>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
                {project.title}
              </h2>
              <h4 className='text-sm text-white/80 mt-1'>{project.role}</h4>
              </div>
              <button 
                onClick={handleClose} 
                className="px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center"
                aria-label="Close project details"
              >
                <span className="mr-1">✕</span> Close
              </button>
            </div>
            
            {/* Project blurb */}
            <p className="text-white/80 mb-6 text-lg">{project.blurb}</p>
            
            {/* Image gallery */}
            {project.images && project.images.length > 0 && (
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <img 
                    src={project.images[activeImage]} 
                    alt={`${project.title} screenshot ${activeImage + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2"
                    >
                      ←
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2"
                    >
                      →
                    </button>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveImage(index)}
                          className={`w-2 h-2 rounded-full ${index === activeImage ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
            
            {/* Project description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-white">Project Details</h3>
              <div className="space-y-4 text-white/80">
                {project.description ? (
                  typeof project.description === 'string' ? (
                    <p>{project.description}</p>
                  ) : (
                    project.description
                  )
                ) : (
                  <p>No detailed description available for this project.</p>
                )}
              </div>
            </div>
            
            {/* Key features */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-white">Key highlights</h3>
                <ul className="space-y-2">
                  {project.highlights.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-fuchsia-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Technologies used */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Project links */}
            <div className="flex flex-wrap gap-3">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-700 transition-colors">
                  Live Demo ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors">
                  View Code
                </a>
              )}
              {project.caseStudy && (
                <a href={project.caseStudy} target="_blank" rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-600 transition-colors">
                  Case Study
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}