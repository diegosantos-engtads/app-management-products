import Link from 'next/link';
import { Container } from '../Container';

export function NavMenuTop() {
  return (
    <Container className='flex justify-end py-2'>
      <nav>
        <ul className='flex text-sm text-black'>
          <li className='border-r-1 px-6.5'>
            <Link href='/' className='text-lg'>
              Ajuda
            </Link>
          </li>
          <li className='border-r-1 px-6.5'>
            <Link href='/' className='text-lg'>
              Cadastrar
            </Link>
          </li>
          <li className='pl-6.5'>
            <Link href='/' className='text-lg'>
              Entrar
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
