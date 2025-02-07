import React from 'react';

const JoinTheClub = () => {
  return (
    <div className="bg-[#F9F9F9] py-16 px-6 sm:px-10">
      {/* Child Div */}
      <div className="max-w-[1273px] mx-auto h-auto bg-white flex flex-col items-center justify-center text-center py-10 px-6 sm:px-10">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-2">Join the club and get the benefits</h2>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-8 w-full sm:w-[470px]">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.
        </p>

        {/* Input and Button Container */}
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto justify-center gap-4">
          {/* Text Input */}
          <input 
            type="email"
            placeholder="your@email.com"
            className="px-4 py-2 bg-light-gray w-full sm:w-[354px] h-[56px] text-lg"
          />

          {/* Sign Up Button */}
          <button className="bg-dark-primary text-white px-6 py-2 h-[56px] w-full sm:w-[118px] text-lg hover:bg-primary transition mt-4 sm:mt-0">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinTheClub;
