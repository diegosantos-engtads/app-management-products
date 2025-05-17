import Link from 'next/link';

export function CopyrightDiegoSantos() {
  return (
    <small className='block my-10 text-center px-8 text-[#e7e7e7]'>
      Criado por{' '}
      <Link
        href='https://github.com/diegosantos-engtads'
        className='inline-block text-[#fff] font-medium after:block after:w-0 after:h-[1px] after:bg-[#ffffff] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full'
        target='_blank'
      >
        Diego Santos
      </Link>{' '}
      Copyright &copy; {new Date().getFullYear()}{' '}
      <Link
        href='/'
        className='inline-block text-[#fff] font-medium after:block after:w-0 after:h-[1px] after:bg-[#ffffff] after:transition-all after:duration-400 after:ease-in-out hover:after:w-full'
      >
        Gerenciado de Produtos
      </Link>{' '}
      Todos os direitos reservados.
    </small>
  );
}
