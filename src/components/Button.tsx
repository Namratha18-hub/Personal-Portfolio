import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonProps = (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>) & {
  variant?: "primary" | "secondary" | "text";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const styles = { primary: "button-primary", secondary: "button-secondary", text: "button-text" };
  const classes = `${styles[variant]} ${className}`.trim();
  if ("href" in props) return <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}