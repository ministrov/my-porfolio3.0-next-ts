import Link from 'next/link';
import cn from 'classnames';
import styles from './Logo.module.css';

const Logo = ({ className = null }) => {
  return (
    <Link href="/" className={cn(styles.logo, className)}>
      {'AntoshkinDEV'}
    </Link>
  );
};

export default Logo;