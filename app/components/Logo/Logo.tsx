import Link from 'next/link';
import cn from 'classnames';
import './style.css';

const Logo = ({ className = null }) => {
  return (
    <Link href="/" className={cn('logo', className)}>
      {'AntoshkinDEV'}
    </Link>
  );
};

export default Logo;