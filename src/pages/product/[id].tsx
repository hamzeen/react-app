import { useRouter } from 'next/router';
import { products } from '@/data/products';
import { ProductDetails } from '@/components/ProductDetails';

export default function ProductPage() {
  const { query } = useRouter();
  const product = products.find(p => p.id === query.id);

  if (!product) return <p className="p-8 text-red-500">Product not found.</p>;

  return <ProductDetails product={product} />;
}