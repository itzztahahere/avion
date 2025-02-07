import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";

import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      {/* Top Footer with sections arranged in grid */}
      <footer className="footer bg-dark-primary text-white px-10">
        {/* Set the width to 1280px */}
        <div className="w-full pt-10 pb-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Services Column */}
          <nav>
            <h6 className="footer-title mb-3">Services</h6>
            <a className="block a a-hover">Branding</a>
            <a className="block a a-hover">Design</a>
            <a className="block a a-hover">Marketing</a>
            <a className="block a a-hover">Advertisement</a>
          </nav>

          {/* Company Column */}
          <nav>
            <h6 className="footer-title mb-3">Company</h6>
            <a className="block a a-hover">About us</a>
            <a className="block a a-hover">Contact</a>
            <a className="block a a-hover">Jobs</a>
            <a className="block a a-hover">Press kit</a>
          </nav>

          {/* Legal Column */}
          <nav>
            <h6 className="footer-title mb-3">Legal</h6>
            <a className="block a a-hover">Terms of use</a>
            <a className="block a a-hover">Privacy policy</a>
            <a className="block a a-hover">Cookie policy</a>
          </nav>

          {/* Newsletter Column */}
          <form className="lg:col-span-2">
            <h6 className="footer-title mb-3">Join our mailing list</h6>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 bg-white opacity-15 w-full md:w-[354px] lg:w-[400px] h-[56px]"
              />
              <button className="bg-light-gray text-dark-primary px-2 py-2 w-[110px] h-[56px] hover:bg-primary transition">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        
        {/* Horizontal Line (White) */}
        <hr className="border-t-1 my-5 border-white mx-auto w-full" />

        {/* Bottom Footer with copyright text */}
        <div className="w-full pb-4 mx-auto bg-dark-primary p-1 flex flex-col sm:flex-row justify-between items-center text-white">
            {/* Copyright Text */}
            <p className="text-white text-center sm:text-left mb-4 sm:mb-0">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center sm:justify-end">
              <a href="/" className="hover:text-gray-400"><FaLinkedin size={20} /></a>
              <a href="/" className="hover:text-gray-400"><FaFacebookSquare size={20} /></a>
              <a href="/" className="hover:text-gray-400"><FaInstagram size={20} /></a>
              <a href="/" className="hover:text-gray-400"><IoLogoSkype size={20} /></a>
              <a href="/" className="hover:text-gray-400"><FaTwitter size={20} /></a>
              <a href="/" className="hover:text-gray-400"><FaPinterest size={20} /></a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
