import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const BrandDifference = () => {
  return (
    <div className="bg-white w-full sm:w-[1280px] h-auto sm:h-[355px] flex flex-col items-center justify-center p-10 justify-self-center">
      {/* Title */}
      <h2 className="text-3xl font-semibold text-dark-primary mb-12 sm:mb-20">What makes our brand different</h2>

      {/* Four Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {/* Column 1 */}
        <div className="text-center sm:text-left">
          <TbTruckDelivery size={30} />
          <h3 className="text-2xl py-4 font-normal text-dark-primary">Next day as standard</h3>
          <p className="text-sm text-dark-primary mt-2">Order before 3pm and get your order the next day as standard.</p>
        </div>

        {/* Column 2 */}
        <div className="text-center sm:text-left">
          <IoIosCheckmarkCircleOutline size={30} />
          <h3 className="text-2xl py-4 font-normal text-dark-primary">Made by true artisans</h3>
          <p className="text-sm text-dark-primary mt-2">Hand-crafted goods made with real passion and craftsmanship.</p>
        </div>

        {/* Column 3 */}
        <div className="text-center sm:text-left">
          <MdOutlinePriceChange size={30} />
          <h3 className="text-2xl py-4 font-normal text-dark-primary">Unbeatable prices</h3>
          <p className="text-sm text-dark-primary mt-2">For our material and quality, you won&apos;t find better prices anywhere.</p>
        </div>

        {/* Column 4 */}
        <div className="text-center sm:text-left">
          <LuSprout size={30} />
          <h3 className="text-2xl py-4 font-normal text-dark-primary">Recycled packaging</h3>
          <p className="text-sm text-dark-primary mt-2">We use 100% recycled packaging to ensure our footprint is manageable.</p>
        </div>
      </div>
    </div>
  );
};

export default BrandDifference;
