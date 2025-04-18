import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';

type Props = {
  product: Product;
};

export const ProductDetails = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < product.stock) setQuantity(q => q + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const totalPrice = quantity * product.price;

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="sm:text-3xl text-2xl font-medium title-font font-bold">
      <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition mr-3">
    ←
  </Link>
        <span className="text-indigo-600">Product:</span> {product.name}
      </h1>
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-4 rounded" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-xl text-green-700 mb-2">{formatPrice(product.price)}</p>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-sm text-gray-500 mb-6">Stock: {product.stock}</p>

      {/* Stepper */}
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="px-3 py-1 bg-gray-200 text-lg rounded disabled:opacity-50"
          disabled={quantity === 1}
        >
          -
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          onClick={increment}
          className="px-3 py-1 bg-gray-200 text-lg rounded disabled:opacity-50"
          disabled={quantity === product.stock}
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="text-lg font-semibold mt-8">
        Total Payment: <span className="text-green-700">{formatPrice(totalPrice)}</span>
      </div>

    </div>
  );
};
