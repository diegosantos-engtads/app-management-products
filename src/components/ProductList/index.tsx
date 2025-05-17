import { productRepository } from '@/repositories/product';
import { ProductCoverImage } from '../ProductCoverImage';
import Link from 'next/link';
import { ProductSummary } from '../ProductSummary';

export async function ProductList() {
  const products = await productRepository.findAll();

  return (
    <section className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 bg-[var(--foreground)]'>
      {products.map(product => {
        return (
          <Link
            key={product.id}
            href={product.name}
            className='p-2 rounded-[5px] grid gap-2 text-[#0b0b0b] sm:p-4'
          >
            <ProductCoverImage
              imageProps={{
                width: 500,
                height: 500,
                src: product.imageUrl,
                alt: product.name,
                priority: true,
              }}
            />

            <ProductSummary
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          </Link>
        );
      })}
    </section>
  );
}
