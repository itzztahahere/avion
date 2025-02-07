'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import { IoMenu, IoClose } from 'react-icons/io5';
import Link from 'next/link';

const NavbarMain = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white">
            {/* First Row: Search Icon, Logo, Profile, and Cart Icons */}
            <div className="flex items-center justify-between py-3 px-6" style={{ height: '80px' }}>
                {/* Mobile Layout: Logo, Search Icon, and Hamburger Menu */}
                <div className="flex items-center lg:hidden w-full">
                    {/* Logo on the Left */}
                    <div className="flex items-center">
                        <Link href="/">
                            <h1 className="text-xl font-semibold text-gray-800">
                                Avion
                            </h1>
                        </Link>
                    </div>

                    {/* Search Icon Movile view */}
                    <div className="flex items-center ml-auto space-x-2 ml-2">
                        <CiSearch size={25} />
                    </div>

                    {/* Hamburger Icon */}
                    <div className="flex items-center ml-5">
                        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                            {isMobileMenuOpen ? <IoClose size={25} /> : <IoMenu size={25} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Layout: Logo, Search Icon, Profile, and Cart Icons */}
                <div className="hidden lg:flex items-center justify-between w-full">
                    {/* Search Icon */}
                    <div className="flex items-center space-x-2">
                        <CiSearch size={25} />
                    </div>

                    {/* Logo in the center */}
                    <div className="text-center flex-1">
                        <h1 className="text-xl font-semibold text-gray-800">
                            <Link href="/">
                                Avion
                            </Link>
                        </h1>
                    </div>

                    {/* Profile and Cart Icons */}
                    <div className="flex items-center space-x-4">
                        <Link href="/cart">
                            <IoCartOutline size={25} aria-label="Cart" />
                        </Link>
                        <Link href="/profile">
                            <IoIosContact size={25} aria-label="Profile" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second Row: Product Categories */}
            <div className="hidden lg:flex justify-center py-3 border-t border-b border-gray-200" style={{ height: '52px' }}>
                <div className="flex justify-evenly gap-10 w-[675px]">
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Plant Pots</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Ceramics</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Tables</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Chairs</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Crockery</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Tableware</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer">Cutlery</p>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (if open) */}
            {isMobileMenuOpen && (
                <div className="lg:hidden flex flex-col items-center py-3 bg-white border-t border-gray-200">
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Plant Pots</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Ceramics</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Tables</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Chairs</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Crockery</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Tableware</p>
                    </Link>
                    <Link href="/allproducts">
                        <p className="text-sm text-nav-items-text cursor-pointer py-2">Cutlery</p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default NavbarMain;
