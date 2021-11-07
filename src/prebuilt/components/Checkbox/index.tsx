import React, {FC, InputHTMLAttributes, ReactNode} from 'react';
import s from "./Checkbox.module.scss";
import clsx from "clsx";

export type CheckboxProps = {
  readonly className?: string;
  readonly children: ReactNode;
}

const Checkbox: FC<CheckboxProps & InputHTMLAttributes<HTMLInputElement>> = ({
                                                                               children,
                                                                               className,
                                                                               ...props}) => {
  return (
    <label className={clsx(s.root, className)}>
      {children}
      <input className={s.root__checkbox} type="checkbox" {...props}/>
      <span className={s.root__checkmark}/>
    </label>
  );
}

export default Checkbox;