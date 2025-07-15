import { ButtonProps } from "./Button.interface";
import { ArrowUpRight, Dot } from 'lucide-react';
import cn from "classnames";
import styles from './Button.module.css';

export const Button = ({ href, children, className }: ButtonProps) => {
  return (
    <a className={cn(styles.btn, className)} href={href} target={href && '_blank'} rel="noopener noreferrer">
      {children}
      <span className={styles.icon}>{<Dot size={42}/>}</span>
      <span className={styles.iconMobile}>{<ArrowUpRight color={'white'}/>}</span>
    </a>
  );
};