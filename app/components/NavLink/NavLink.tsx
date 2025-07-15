import Link from 'next/link';
import cn from 'classnames';
import styles from './NavLink.module.css';

type NavLinkProps = {
  pathname: string;
  path: string;
  text?: string;
};

export const NavLink = ({ pathname, path, text }: NavLinkProps) => {
  return (
    <Link
      href={path}
      className={cn(styles.navLink, {
        [styles.active]: pathname === path,
      })}
    >
      {text}
    </Link>
  );
};
