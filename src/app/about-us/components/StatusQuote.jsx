"use client";

import { useState } from "react";

const StatusQuoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-[#fdfbf9] py-20 md:py-32 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">

        {/* Left: Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            The status quo is broken
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            The traditional processes around homeownership are opaque and stressful.
            Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage
            lending is rife with unnecessary fees and slow, painful processes. It’s a system set up
            to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center mt-8 px-6 py-3 bg-[#017848] text-white text-base font-semibold rounded-md hover:bg-green-700 transition"
          >
            Read Vishal’s story
          </a>
        </div>

        {/* Right: Thumbnail with Play Button */}
        <div className="w-full md:w-1/2 relative">
          <div
            onClick={() => setIsOpen(true)}
            className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md cursor-pointer group"
          >
            <img
              src="https://media.better.com/video/vishal-mission.jpg"
              alt="Vishal Garg"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/1KjYlLBM9j4?autoplay=1"
              title="Better CEO Vishal Garg"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default StatusQuoSection;
