import React from "react";
import NavbarMain from "../components/navbarmain";
import BrandDifference from "../components/featurs";
import Footer from "../components/footer";

const About = () => {
  return (
    <>
    <NavbarMain /><div>
      {/* Hero Section */}
      <div className="w-[1280px] mx-auto my-5 h-auto flex flex-col  md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-dark-primary">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-dark-primary">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-center py-10 px-4">
        <div className="bg-dark-primary h-[478px] w-full md:w-2/5 text-white md:p-16 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
          <img
            src="/images/abt.jpg"
            alt="About main"
            className=" h-[478px] w-[630px] transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
        
      </div>

      {/* Service Section */}
      <div className="flex w-[1440px] flex-col md:flex-row h-[603px] justify-center mx-auto items-center my-10  py-10 md:space-y-0">
        <img
          src="/images/abt2.jpg"
          alt="Service"
          className="w-[720px] h-[603px] md:w-2/5 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
        <div className="border-2 h-[603px] bg-white w-[720px] md:w-3/5 md:p-20">
          <h1 className="text-xl md:text-2xl text-dark-primary">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-dark-primary mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-gray h-12 w-40 rounded-sm mt-10 text-dark-primary">Get in Touch</button>
        </div>
      </div>

     <BrandDifference/>


      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-dark-primary text-2xl md:text-3xl text-center">Join the club and get the benefits</h1>
          <p className="text-dark-primary text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-80 h-12 p-5 rounded-sm" />
            <button className="bg-dark-primary h-12 w-32 rounded-sm text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
