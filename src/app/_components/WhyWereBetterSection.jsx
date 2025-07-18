import React, { useState } from 'react';

// Placeholder for your StarIcon and PlayButtonIcon components
const StarIcon = (props) => <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/></svg>;
const PlayButtonIcon = (props) => <svg {...props} width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5V19L19 12L8 5Z"/></svg>;

const WhyWereBetterSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState('Paul');
  const [isPlaying, setIsPlaying] = useState(false);

  // Map active testimonial to its video details
  const testimonialVideos = {
    'Paul': {
      embedUrl: "https://www.youtube.com/embed/pKy7cNtaJ0c?autoplay=1",
      thumbnailUrl: "https://img.youtube.com/vi/pKy7cNtaJ0c/maxresdefault.jpg",
      quote: "I used Better three years ago for my primary residence and just now for my vacation home. Very simple process. Each time it took about two weeks to close.",
      customer: "Paul – Better Mortgage customer"
    },
    'Amanda': {
      embedUrl: "https://www.youtube.com/embed/tF60HQo3vhU?autoplay=1",
      thumbnailUrl: "https://img.youtube.com/vi/tF60HQo3vhU/maxresdefault.jpg",
      quote: "Amanda's testimonial text goes here...",
      customer: "Amanda – Better Mortgage customer"
    },
    'Tiara': {
      embedUrl: "https://www.youtube.com/embed/Mhkf_1o4v7s?autoplay=1",
      thumbnailUrl: "https://img.youtube.com/vi/Mhkf_1o4v7s/maxresdefault.jpg",
      quote: "Tiara's testimonial text goes here...",
      customer: "Tiara – Better Mortgage customer"
    },
  };

  const currentVideo = testimonialVideos[activeTestimonial];

  const handleTabClick = (testimonialName) => {
    setActiveTestimonial(testimonialName);
    setIsPlaying(false);
  };

  return (
    <section className="section  flex flex-col justify-center md:gap-70 xl:gap-70 sm:gap-20 m-10 md:px-10 md:flex-row-reverse xl:p-[40px] bg-gray-50">
  {/* Right Section - Text */}
  <div className="flex flex-col justify-center md:max-w-[507px] gap-6 text-center md:text-left">
    <h2 className="text-3xl md:text-4xl lg:text-[56px] font-bold text-black leading-tight tracking-tight">
      Find out why we're better.
    </h2>
    <a
      className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal transition-all duration-200 bg-green-900 text-white hover:bg-green-700 h-14 px-8 py-3 mx-auto md:mx-0 w-full md:w-fit"
      href="https://better.com/b/our-stories"
    >
      See all our stories
    </a>
    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-700">
      <StarIcon className="text-gray-700" />
      <span><strong>Excellent</strong> <strong>4.4</strong> out of 5</span>
    </div>
  </div>

  {/* Left Section - Video + Tabs */}
  <div className="flex flex-col gap-5 items-center md:items-start">
    {/* Tab Buttons */}
    <div className="flex gap-3 overflow-x-auto px-1 w-full [&::-webkit-scrollbar]:hidden">
      {Object.keys(testimonialVideos).map((name) => (
        <button
          key={name}
          className={`whitespace-nowrap rounded-full text-sm font-bold border px-5 py-2 transition-all duration-200 ${
            activeTestimonial === name
              ? 'border-[#00FF80] text-[#00FF80] shadow-[0_0_0_4px_inset_rgba(0,255,128,0.5)]'
              : 'border-gray-400 text-gray-700 hover:border-[#00FF80] hover:text-[#00FF80] hover:shadow-[0_0_0_4px_inset_rgba(0,255,128,0.2)]'
          }`}
          onClick={() => handleTabClick(name)}
        >
          {name}
        </button>
      ))}
    </div>

    {/* Video or Thumbnail */}
    <div className="relative w-full max-w-[340px] h-[500px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
      {isPlaying ? (
        <iframe
          title={`${activeTestimonial} Testimonial Video`}
          src={currentVideo.embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      ) : (
        <button 
          className="relative w-full h-full group" 
          onClick={() => setIsPlaying(true)}
          aria-label={`Play ${activeTestimonial}'s testimonial video`}
        >
          <img 
            src={currentVideo.thumbnailUrl} 
            alt={`${activeTestimonial}'s testimonial thumbnail`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
            <PlayButtonIcon className="text-white/90 group-hover:text-white size-16 transition-all" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
            <p className="text-sm italic mb-2">"{currentVideo.quote}"</p>
            <p className="text-xs font-semibold">{currentVideo.customer}</p>
          </div>
        </button>
      )}
    </div>
  </div>
</section>

  );
};

export default WhyWereBetterSection;