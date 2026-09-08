import React, { useState } from 'react';
import { Sparkles, Eye, X } from 'lucide-react';

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: '/assets/images/mahalakshmi-1.jpg',
      title: 'पारंपरिक महालक्ष्मी गौरी शृंगार',
      subtitle: 'दिव्य वस्त्र एवं पारंपरिक आभूषणों से सुशोभित माता का स्वरूप',
    },
    {
      id: 2,
      src: '/assets/images/mahalakshmi-2.jpg',
      title: 'पावन पूजन एवं आराध्य झाँकी',
      subtitle: 'स्नेहिल निवास पर आयोजित भक्तिमय मंगलमय वातावरण',
    },
  ];

  return (
    <div className="w-full my-6">
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1.5 text-xs text-[#936E2B] font-medium font-devanagari">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>पूर्व वर्षों की पावन स्मृतियाँ एवं दर्शन</span>
        </div>
      </div>

      {/* 2-Column Photo Cards with Gold Borders */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#FAF4EB] p-1.5 border border-[#C5A059]/50 shadow-sm hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#F2E8D8]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#791724]">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="font-devanagari text-[11px] md:text-xs text-center text-[#791724] font-medium mt-1.5 line-clamp-1">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for Large Viewing */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-lg w-full bg-[#FAF4EB] p-4 rounded-2xl border-2 border-[#C5A059] shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-[#791724] text-white hover:bg-[#540D17] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="rounded-xl overflow-hidden border border-[#C5A059]/40 max-h-[70vh] flex items-center justify-center bg-black/5">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[68vh] object-contain rounded-lg"
              />
            </div>
            <div className="text-center font-devanagari">
              <h4 className="text-base text-[#791724] font-bold">
                {selectedPhoto.title}
              </h4>
              <p className="text-xs text-[#5E4A40] mt-0.5">
                {selectedPhoto.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
