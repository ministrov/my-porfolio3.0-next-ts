import { ButtonProps } from "./Button.interface";
import cn from "classnames";
import styles from './Button.module.css';

export const Button = ({ href, children, icon, className }: ButtonProps) => {
  return (
    <a className={cn(styles.btn, className)} href={href} target={href && '_blank'} rel="noopener noreferrer">
      {children}
      <span className={styles.icon}>{icon}</span>
    </a>
  );
};