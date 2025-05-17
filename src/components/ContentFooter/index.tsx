import Link from 'next/link';
import { Container } from '../Container';
import clsx from 'clsx';

export function ContentFooter() {
  return (
    <Container className='flex flex-wrap justify-around gap-8 my-20 '>
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i}>
          <h5 className={clsx('text-sm', 'font-medium', 'mb-4', 'text-[#efefef]')}>
            Encontre uma loja
          </h5>
          <ul className='space-y-3 text-xs text-[#efefef]'>
            <li>
              <Link href='/'>Cadastre-se para novidades</Link>
            </li>
            <li>
              <Link href='/'>Cartão presente</Link>
            </li>
            <li>
              <Link href='/'>Mapa do site</Link>
            </li>
            <li>
              <Link href='/'>Acompanhe seu pedido</Link>
            </li>
            <li>
              <Link href='/'>Outras categorias</Link>
            </li>
          </ul>
        </div>
      ))}
    </Container>
  );
}
