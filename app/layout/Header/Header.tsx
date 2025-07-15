import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        {/* <Logo /> */}

        <div className={styles.mainNavBlock}>
          {/* <MainNav /> */}

          {/* <ToggleLang /> */}
        </div>
      </nav>
    </header>
  );
};
