import React, {FC, ReactNode, SelectHTMLAttributes} from 'react';
import s from "./Select.module.scss";
import clsx from "clsx";

export type SelectProps = {
  readonly className?: string;
  readonly title: string;
  readonly children: ReactNode;
  readonly options: any[];
  readonly defaultValue: string;
}

const Select: FC<SelectProps & SelectHTMLAttributes<HTMLSelectElement>> = (
  {
    className,
    title,
    children,
    defaultValue,
    ...props
  }) => {
  return (
    <select value={defaultValue} className={clsx(s.root, className)} {...props}>
      <option value={defaultValue} disabled>{title}</option>
      {children}
    </select>
  );
};

export default Select;