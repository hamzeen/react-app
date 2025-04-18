import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';

type Props = {
  product: Product;
};

export const ProductDetails = ({ product }: Props) => (
  <div className="max-w-3xl mx-auto p-6">
    <img src={product.image} alt={product.name} className="w-full h-80 object-cover mb-4" />
    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
    <p className="text-xl text-green-700 mb-2">{formatPrice(product.price)}</p>
    <p className="text-gray-700 mb-2">{product.description}</p>
    <p className="text-sm text-gray-500">Stock: {product.stock}</p>
  </div>
);