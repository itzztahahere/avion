'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Products } from '@/types/products';
import { client } from '@/sanity/lib/client';
import { four } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

const PopularProducts = () => {
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: Products[] = await client.fetch(four);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      {/* Title */}
      <h2 className="text-3xl text-dark-primary mb-10">Our Popular Products</h2>

      {/* Grid Layout with Dynamic Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Map through the products to display them */}
        {products.map((product) => (
          <div key={product._id} className="bg-white overflow-hidden">
            {/* Display product image */}
            {product.image && (
              <div className="w-full h-[375px] relative">
                <Image
                  src={urlFor(product.image)?.url() || '/images/default-product.jpg'}  // Default image if no product image
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            
            {/* Display product details */}
            <div className="pl-0 p-5">
              <h4 className="text-xl text-gray-800">{product.title}</h4>
              <p className="text-lg font-normal text-gray-600 mt-2">${product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View Collections Button */}
      <div className="flex justify-center mt-8">
        <Link
          href="/allproducts"
          style={{ backgroundColor: '#F9F9F9' }}
          className="text-dark-primary py-3 px-4 w-[170px] h-[56px] text-center rounded-md"
        >
          View Collections
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
