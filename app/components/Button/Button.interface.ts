import { DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: null | React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}