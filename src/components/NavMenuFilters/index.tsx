import { Settings2 } from 'lucide-react';
import { Container } from '../Container';

export function NavMenuFilters() {
  return (
    <Container className='pt-8 pb-2 flex items-center justify-end gap-6'>
      <p className='items-center hidden gap-1 sm:flex text-[#000]'>
        Filtros <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='sm:flex items-center hidden gap-1 text-lg text-[#000]'>
        Ordenar Por <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='sm:flex items-center hidden gap-1 text-lg text-[#000]'>
        Ordenar Por <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='items-center hidden gap-1 sm:flex text-[#000]'>
        Filtros <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='sm:flex items-center hidden gap-1 text-lg text-[#000]'>
        Ordenar Por <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='sm:flex items-center hidden gap-1 text-lg text-[#000]'>
        Ordenar Por <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='items-center hidden gap-1 sm:flex text-[#000]'>
        Filtros <Settings2 size={'13px'} stroke='black' />
      </p>

      <p className='sm:flex items-center hidden gap-1 text-lg text-[#000]'>
        Ordenar Por <Settings2 size={'13px'} stroke='black' />
      </p>

      <Settings2 stroke='black' className='text-black sm:hidden ' />
    </Container>
  );
}
