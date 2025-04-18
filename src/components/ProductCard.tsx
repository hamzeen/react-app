import Link from 'next/link';
import { Product } from '@/types/product';
import { formatPrice } from '@/utils/formatPrice';

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => (
  <div className="border rounded p-4 shadow hover:shadow-lg transition">
    <Link href={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">{formatPrice(product.price)}</p>
    </Link>
  </div>
);