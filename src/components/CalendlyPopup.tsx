import { X, Loader2 } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface CalendlyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: object;
        utm?: object;
      }) => void;
    };
  }
}

const CalendlyPopup: React.FC<CalendlyPopupProps> = ({ isOpen, onClose }) => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Prevent background scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Initialize Calendly widget when popup opens
  useEffect(() => {
    if (!isOpen || !calendlyContainerRef.current) return;

    setIsLoading(true);

    const initCalendly = () => {
      if (window.Calendly && calendlyContainerRef.current) {
        // Clear the container first
        calendlyContainerRef.current.innerHTML = '';

        // Initialize Calendly widget
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/ankita-simplify3x/new-meeting?hide_gdpr_banner=1',
          parentElement: calendlyContainerRef.current,
        });

        // Hide loader after widget loads
        setTimeout(() => setIsLoading(false), 1500);
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for Calendly to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);

      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <div className="w-full max-w-[1100px] h-[90vh] relative rounded-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors p-2 hover:bg-gray-800 rounded-full"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <Loader2 className="w-12 h-12 text-cyan-400 animate-spin" />
          </div>
        )}

        {/* Calendly widget container */}
        <div
          ref={calendlyContainerRef}
          style={{ width: '100%', height: '100%', minWidth: '320px' }}
        />
      </div>
    </div>
  );
};

export default CalendlyPopup;
