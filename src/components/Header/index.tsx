import clsx from 'clsx';
import Link from 'next/link';
import { Container } from '../Container';

export function Header() {
  return (
    <header className={clsx(' top-0 flex items-center')}>
      <Container>
        <h1
          className={clsx(
            'text-2xl/normal font-extrabold py-8',
            'sm:text-3xl/normal sm:py-10',
            'md:text-4xl/normal md:py-11',
            'lg:text-6xl/normal md:py-12',
          )}
        >
          <Link href='/'>Gerenciador de Produtos</Link>
        </h1>
      </Container>
    </header>
  );
}
