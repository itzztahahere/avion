import Image from 'next/image';
import NavbarMain from '../components/navbarmain';

const Cart = () => {
  const products = [
    {
      id: 1,
      name: 'Graystone Vase',
      description: 'A timeless ceramic vase with a tri-color grey glaze.',
      price: 85,
      image: '/images/chair2.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Marble Bowl',
      description: 'A sleek white marble bowl perfect for any space.',
      price: 45,
      image: '/images/chair.jpg',
      quantity: 2,
    },
  ];

  return (
    <>
      <NavbarMain />
      <div className="max-w-screen-xl mx-auto p-6 bg-white">
        <h1 className="text-2xl my-3 sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between border-b py-4">
            {/* Product Image */}
            <div className="w-1/4 flex justify-start">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              />
            </div>

            {/* Product Details */}
            <div className="w-1/2 flex flex-col">
              <h1 className="text-base sm:text-lg font-medium">{product.name}</h1>
              <p className="text-sm mt-2">{product.description}</p>
              <p className="mt-2 text-base font-semibold">£{product.price}</p>
            </div>

            {/* Quantity */}
            <div className="w-1/4 text-center">
              <input
                type="number"
                value={product.quantity}
                min="1"
                className="w-16 py-2 border rounded text-center"
              />
            </div>

            {/* Total */}
            <div className="w-1/4 text-center">
              <p className="text-lg font-semibold">£{product.price * product.quantity}</p>
            </div>
          </div>
        ))}
      {/* Subtotal Section */}
      <div className="mt-10 text-center lg:text-right">
          <h1 className="inline text-lg text-primary sm:text-xl font-medium mr-4">
            Subtotal
          </h1>
          <h1 className="inline text-xl sm:text-2xl  font-semibold">£210</h1>
          <p className="text-sm text-primary mt-4">
            Taxes and shipping are calculated at checkout
          </p>
          <button className="bg-dark-primary h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">
            Go to checkout
          </button>
    </div>
      </div>
    </>
  );
};

export default Cart;
