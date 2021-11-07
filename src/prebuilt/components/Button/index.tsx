import React, {FC, ReactNode, ButtonHTMLAttributes} from 'react';
import s from "./Button.module.scss";
import clsx from "clsx";

export type ButtonProps = {
  readonly className?: string;
  readonly fullwidth?: boolean;
  readonly children?: ReactNode;
  readonly theme?: 'primary' | 'outlined' | 'disabled';
  readonly disabled?: boolean;
}

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
                      className,
                      fullwidth,
                      children,
                      theme = "primary",
                      disabled = false,
                      ...props
                    }): JSX.Element => {
  return (
    <button
      className={clsx(
        s.button,
        (fullwidth && s.button_fullwidth),
        s[theme],
        (disabled && s.button_disabled),
        className)}
      disabled={disabled}
      {...props}>{children}</button>
  );
};

export default Button;