import { NavLink } from '../NavLink/NavLink';
import styles from './NavMenu.module.css';

type NavMenuProps = {
  pathname: string;
};

const links = [
  { id: 1, path: '/about', text: 'Обо мне' },
  { id: 2, path: '/projects', text: 'Работы' },
];

export const NavMenu = ({ pathname }: NavMenuProps) => {
  return (
    <ul className={styles.navMenu}>
      {links.map((link) => (
        <li key={link.id} className={styles.navMenuItem}>
          <NavLink pathname={pathname} path={link.path} text={link.text}/>
        </li>
      ))}
    </ul>
  );
};
