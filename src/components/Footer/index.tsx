import { CopyrightDiegoSantos } from '../CopyrightDiegoSantos';
import { ContentFooter } from '../ContentFooter';

export function Footer() {
  return (
    <footer className='bg-[#151515] text-white mt-20'>
      <ContentFooter />
      <hr className='border-solid w-full opacity-8' />
      <CopyrightDiegoSantos />
    </footer>
  );
}
