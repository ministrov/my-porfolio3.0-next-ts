import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="header__nav main-nav">
        {/* <Logo /> */}

        <div className="main-nav__block">
          {/* <MainNav /> */}

          {/* <ToggleLang /> */}
        </div>
      </nav>
    </header>
  );
};
