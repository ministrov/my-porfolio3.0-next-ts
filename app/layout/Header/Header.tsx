import Logo from '@/app/components/Logo/Logo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <Logo />

        <div className={styles.mainNavBlock}>
          {/* <MainNav /> */}

          {/* <ToggleLang /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
