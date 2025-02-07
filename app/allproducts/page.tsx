'use client';

import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';
import NavbarMain from '../components/navbarmain';
import Footer from "../components/footer";
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Products } from '@/types/products';
import { client } from '@/sanity/lib/client';
import { allProducts } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const Product = () => {
    const [product, setProduct] = useState<Products[]>([]);

    useEffect(() => {
        async function fetchProduct() {
            const fetchedProduct: Products[] = await client.fetch(allProducts);
            setProduct(fetchedProduct);
        }
        fetchProduct();
    }, []);

    const router = useRouter();

    const handleNavigation = () => {
        router.push('/productlisting'); // Navigates to the "/productlisting" page
    };

    return (
        <>
            <NavbarMain />
            <section>
                <div className="relative h-[209px]">
                    <img
                        src="/images/bgimg.jpg"
                        className="object-cover w-full h-[209px]"
                        alt="Background Image"
                    />
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
                        All Products
                    </p>
                </div>
            </section>

            <div className="flex items-center justify-between h-[69px] w-[1440px] mx-auto px-4">
                {/* Left Hand Side */}
                <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-dark-primary">Category</p>
                        <IoIosArrowForward />
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-dark-primary">Product Type</p>
                        <IoIosArrowForward />
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-dark-primary">Price</p>
                        <IoIosArrowForward />
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="text-sm text-dark-primary">Brand</p>
                        <IoIosArrowForward />
                    </div>
                </div>

                {/* Right Hand Side */}
                <div className="flex items-center space-x-2">
                    <p className="text-sm text-dark-primary">Sorting By: Date Added</p>
                </div>
            </div>

            <section>
                <div className='px-10 py-12 text-[#2A254B] mt-12'>
                    {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
                    <h1 className='text-2xl mb-8'>Our popular products</h1>
                    
                    {/* Grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {product.map((product) => (
                            <div key={product._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="w-full relative h-[300px]">
                                    <Image
                                            src={urlFor(product.image)?.url() || ""}
                                            alt={product.title}
                                            layout="fill"
                                            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                        />
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold text-dark-primary">{product.title}</h2>
                                    <p className="text-lg font-normal text-gray-600 mt-2">${product.price}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Product;
