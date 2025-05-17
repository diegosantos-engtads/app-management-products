import { NavMenuTop } from '../NavMenuTop';
import { NavMenu } from '../NavMenu';
import { NavMenuFilters } from '../NavMenuFilters';

export function Header() {
  return (
    <header>
      <NavMenuTop />

      <NavMenu />

      <NavMenuFilters />
    </header>
  );
}
