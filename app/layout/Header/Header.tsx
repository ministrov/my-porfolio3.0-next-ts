'use client';

import { usePathname } from 'next/navigation';
import { NavMenu } from '@/app/components/NavMenu/NavMenu';
import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <Logo />

        <NavMenu pathname={pathname}/>
      </nav>
    </header>
  );
};

export default Header;
