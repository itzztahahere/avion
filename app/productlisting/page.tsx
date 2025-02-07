import Image from 'next/image';
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
import NavbarMain from '../components/navbarmain';
import Footer from '../components/footer';
import Link from 'next/link';
import BrandDifference from '../components/featurs';

const ProductListing = () => {
  
  return (
    <>
    <NavbarMain/>
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-[759px]">
              <Image
                src={'/images/productlisting.jpg'}
                height={759}
                width={800}
                alt="chair"
                className="w-full h-[759px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <h1 className="text-xl md:text-2xl font-semibold mt-12 text-[#505977]">You might also like</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {['chair', 'img2', 'img3', 'img4'].map((item, idx) => (
              <div key={idx} className="w-full">
                <Image
                  src={`/images/${item}.jpg`}
                  height={700}
                  width={700}
                  alt={item}
                  className="w-full h-[375px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="mt-4 text-[#2A254B]">
                  <p className="py-2">{item === 'chair' ? 'The Dendy Chair' : `The ${item}`}</p>
                  <p>${item === 'chair' ? 250 : item === 'vase' ? 155 : 125}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Collection Button */}
          <div className="my-10 flex justify-center">
            <Link href="/allproducts" className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </Link>
          </div>

          {/* Features Section */}
          <BrandDifference/>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ProductListing;
