import React from 'react';

const BrandStory = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 h-auto sm:h-[603px]">
      {/* Left Side Content */}
      <div className="flex flex-col justify-between px-10 py-10 sm:py-0 h-full">
        <div>
          <h2 className="text-2xl font-semibold text-left mt-10 sm:mt-20 mb-6">
            From a studio in London to a global brand with over 400 outlets
          </h2>
          <p className="text-lg text-dark-primary">
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>
        <button 
          style={{ backgroundColor: '#F9F9F9' }} 
          className="text-dark-primary py-3 mb-10 px-4 w-[170px] h-[56px] text-center mt-auto"
        >
          Get in touch
        </button>
      </div>

      {/* Right Side Image */}
      <div className="relative">
        <img src="/images/imageee.jpg" alt="Brand Story Image" className="h-[603px] w-full object-cover" />
      </div>
    </div>
  );
};

export default BrandStory;
