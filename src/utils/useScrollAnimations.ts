import { useEffect } from 'react';

export const useScrollAnimations = () => {
  // Add CSS for scroll animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .animate-on-scroll {
        opacity: 0;
        transform: translateY(80px);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      
      .animate-on-scroll.fade-in-up {
        opacity: 1;
        transform: translateY(0);
      }
      
      .animate-on-scroll.fade-in-left {
        opacity: 1;
        transform: translateX(0);
      }
      
      .animate-on-scroll.fade-in-right {
        opacity: 1;
        transform: translateX(0);
      }
      
      .animate-on-scroll.scale-in {
        opacity: 1;
        transform: scale(1);
      }
      
      .animate-delay-100 {
        transition-delay: 150ms;
      }
      
      .animate-delay-200 {
        transition-delay: 300ms;
      }
      
      .animate-delay-300 {
        transition-delay: 450ms;
      }
      
      /* Enhanced bottom-up animation */
      .animate-on-scroll:not(.fade-in-up) {
        transform: translateY(100px);
      }
      
      .animate-on-scroll.fade-in-left:not(.fade-in-up) {
        transform: translateY(80px) translateX(-30px);
      }
      
      .animate-on-scroll.fade-in-right:not(.fade-in-up) {
        transform: translateY(80px) translateX(30px);
      }
      
      .animate-on-scroll.scale-in:not(.fade-in-up) {
        transform: translateY(60px) scale(0.9);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    // Observe all sections with animation class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};
