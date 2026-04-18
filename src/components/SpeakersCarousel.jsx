import React, { useState, useEffect, useRef } from 'react';
import { speakersData } from '../constants/speakersData.js';

const SpeakersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [autoplay, setAutoplay] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null); // Para el Modal
  const carouselRef = useRef(null);

  // Configuración responsive
  const visibleSlides = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  };

  const totalSlides = speakersData.length;

  const getVisibleSlidesCount = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth < 768) {
      return visibleSlides.mobile;
    } else if (window.innerWidth < 992) {
      return visibleSlides.tablet;
    } else {
      return visibleSlides.desktop;
    }
  };

  const [slidesToShow, setSlidesToShow] = useState(getVisibleSlidesCount());

  // Precargar imágenes
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = speakersData.map((speaker) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = speaker.image;
        });
      });

      try {
        await Promise.all(imagePromises);
      } catch (error) {
        console.error('Error precargando imágenes:', error);
      }
    };
    preloadImages();
  }, []);

  // Update slidesToShow on resize
  useEffect(() => {
    const handleResize = () => setSlidesToShow(getVisibleSlidesCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    // Don't autoplay if a modal is open
    if (autoplay && !isAnimating && !selectedSpeaker) {
      interval = setInterval(() => {
        moveToNextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [activeIndex, autoplay, isAnimating, selectedSpeaker]);

  const pauseAutoplay = () => {
    setAutoplay(false);
    setTimeout(() => setAutoplay(true), 8000);
  };

  const moveToNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= totalSlides - slidesToShow + 1 ? 0 : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const moveToPrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? totalSlides - slidesToShow : nextIndex;
    });
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    pauseAutoplay();
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleTouchStart = (e) => {
    pauseAutoplay();
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 50) {
      moveToNextSlide();
      setTouchPosition(null);
    }

    if (direction < -50) {
      moveToPrevSlide();
      setTouchPosition(null);
    }
  };

  const handleMouseEnter = () => pauseAutoplay();

  const openModal = (speaker) => {
    setSelectedSpeaker(speaker);
    setAutoplay(false); // Detener auto-scroll al abrir el modal
  };

  const closeModal = () => {
    setSelectedSpeaker(null);
    setAutoplay(true);
  };

  return (
    <div className="py-12 relative">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text mb-4">
          Speakers
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Conoce a los Speakers que nos acompañarán en esta edición y las temáticas que abordarán.
        </p>
      </div>
      
      <div 
        className="relative max-w-6xl mx-auto px-12" 
        ref={carouselRef}
      >
        <button 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          onClick={() => { pauseAutoplay(); moveToPrevSlide(); }} 
          aria-label="Anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"></path>
          </svg>
        </button>
        
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onMouseEnter={handleMouseEnter}
        >
          <div 
            className="flex transition-transform duration-300 ease-out"
            style={{ 
              transform: `translateX(-${activeIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {speakersData.map((speaker) => (
              <div 
                className="flex-shrink-0 px-3 cursor-pointer group" 
                style={{ width: `${100 / slidesToShow}%` }}
                key={speaker.id}
                onClick={() => openModal(speaker)}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors h-full flex flex-col items-center p-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-orange-500 transition-colors">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 text-center">{speaker.name}</h3>
                  <p className="text-sm text-gray-400 text-center line-clamp-2">{speaker.role}</p>
                  <p className="text-xs text-orange-400 mt-2 font-medium bg-orange-500/10 px-3 py-1 rounded-full">{speaker.track}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          onClick={() => { pauseAutoplay(); moveToNextSlide(); }} 
          aria-label="Siguiente"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"></path>
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalSlides - slidesToShow + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === index 
                ? 'w-8 bg-orange-500' 
                : 'w-2.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Modal Popup for Speaker Bio */}
      {selectedSpeaker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div 
            className="bg-zinc-900 border border-white/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-6 items-center mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden shrink-0 border-4 border-zinc-800 shadow-xl">
                  <img 
                    src={selectedSpeaker.image} 
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-2">{selectedSpeaker.name}</h3>
                  <p className="text-orange-400 font-medium text-lg mb-4">{selectedSpeaker.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <a 
                      href={selectedSpeaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full hover:bg-blue-600/30 transition-colors text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn
                    </a>
                    {selectedSpeaker.instagram && (
                      <a 
                        href={selectedSpeaker.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/20 text-pink-400 rounded-full hover:bg-pink-600/30 transition-colors text-sm font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                      </a>
                    )}
                    {selectedSpeaker.youtube && (
                      <a 
                        href={selectedSpeaker.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-500 rounded-full hover:bg-red-600/30 transition-colors text-sm font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                        YouTube
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Biografía</h4>
                  <p className="text-justify">{selectedSpeaker.bio}</p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/5">
                  <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs font-medium mb-3">
                    {selectedSpeaker.track}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Sesión: {selectedSpeaker.sessionTitle}</h4>
                  <p className="whitespace-pre-line text-justify">{selectedSpeaker.sessionDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakersCarousel;
