import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="bg-white h-auto min-h-[704px] w-full flex items-center justify-center">
        {/* Box Container */}
        <div className="bg-dark-primary h-auto min-h-[584px] w-full sm:w-[1280px] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 py-10">

          {/* Left Side Content */}
          <div className="text-white space-y-8 max-w-full sm:max-w-[600px] text-center sm:text-left">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl my-5">
              The furniture brand for the future, with timeless designs
            </h1>
            
            {/* CTA Button */}
            <Link
              href="/allproducts"
              className="text-white my-5 px-6 py-3 rounded-md text-lg hover:bg-accent-dark transition mb-6"
              style={{ backgroundColor: '#F9F9F926' }}
            >
              View Collection
            </Link>
            
            {/* Paragraph */}
            <p className="text-lg mt-4">
              This is a small paragraph to describe the purpose of the section. It explains the value proposition of your product or service.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="mt-6 sm:mt-0">
            <img src="/images/chair.jpg" className="h-auto sm:h-[584px] w-full sm:w-[520px] object-cover" alt="Hero Image" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
