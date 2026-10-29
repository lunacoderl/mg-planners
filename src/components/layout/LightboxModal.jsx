import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  title = '',
  description = ''
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const imageSrc = typeof currentImage === 'string' ? currentImage : currentImage?.src || currentImage?.image;
  const imageAlt = typeof currentImage === 'string' ? title : currentImage?.title || currentImage?.alt || title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview lightbox"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer focus:outline-hidden"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer focus:outline-hidden"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer focus:outline-hidden"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image display container */}
      <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={imageSrc}
          alt={imageAlt || 'Architectural view'}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl select-none"
        />

        {/* Captions and counter */}
        <div className="mt-4 text-center max-w-2xl px-4">
          {imageAlt && (
            <h4 className="text-white font-medium text-base sm:text-lg mb-1">
              {imageAlt}
            </h4>
          )}
          {description && (
            <p className="text-white/70 text-xs sm:text-sm">
              {description}
            </p>
          )}
          {images.length > 1 && (
            <span className="inline-block mt-2 text-xs font-mono text-[#F2C94C] bg-white/10 px-2.5 py-0.5 rounded-full">
              {currentIndex + 1} of {images.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

