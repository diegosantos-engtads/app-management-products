import Link from 'next/link';
import { Container } from '../Container';
import { Heart, Package2 } from 'lucide-react';

export function NavMenu() {
  return (
    <nav className='bg-[#fff]'>
      <Container className='flex items-center justify-between py-4 gap-8'>
        <Link href='/' className='text-xl font-bold text-black'>
          <h1>Logo</h1>
        </Link>
        <input
          type='search'
          name='search'
          id='search'
          placeholder='Buscar...'
          className='bg-[#c6c6c65d] text-black px-4 py-1 rounded-full w-full max-w-md shadow-md
         outline-none focus:ring-1 focus:ring-[#e5e5e5]'
        />
        <div className='items-center gap-4 hidden sm:flex'>
          <Link href='/' aria-label='Favoritos'>
            <Heart stroke='#1f1f1f' className='icon-fluid' />
          </Link>
          <Link href='/' aria-label='Carrinho'>
            <Package2 stroke='#1f1f1f' className='icon-fluid' />
          </Link>
        </div>
      </Container>
    </nav>
  );
}
