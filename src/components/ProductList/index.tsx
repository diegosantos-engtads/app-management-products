import { productRepository } from '@/repositories/product';
import { ProductCoverImage } from '../ProductCoverImage';
import Link from 'next/link';

export async function ProductList() {
  const products = await productRepository.findAll();

  return (
    <section className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6'>
      {products.map(product => {
        return (
          <Link
            key={product.id}
            href={product.name}
            className='bg-[#ffffff] p-2 rounded-[5px] grid gap-2 text-[#0b0b0b] sm:p-4'
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
            <div className='flex flex-col gap-1.5'>
              <h2 className='text-[12px] font-medium'>{product.name}</h2>
              <p className='bg-[var(--muted)] mr-auto text-left text-[.60rem] p-0.5 rounded-[5px]'>
                {product.category}
              </p>
              <p className='text-xs font-medium'>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(product.price)}
              </p>
              <p className='text-xs hidden sm:block'>
                {product.description.length > 55
                  ? `${product.description
                      .slice(0, 55)
                      .split(' ')
                      .slice(0, -1)
                      .join(' ')}`
                  : product.description}
                ...Ver_mais
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
