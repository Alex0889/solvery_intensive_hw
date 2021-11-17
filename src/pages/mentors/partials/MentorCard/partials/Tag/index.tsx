import React, {ReactNode} from 'react';
import s from "./Tag.module.scss";
import clsx from "clsx";

export type TagProps = {
  readonly className?: string;
  readonly children?: ReactNode;
  readonly active?: boolean,
}

const Tag = (
  {
    className,
    children,
    active,
    ...props
  }: TagProps) => {
  return (
    <div className={clsx(s.root, (active && s.active), className)} {...props}>{children}</div>
  );
};

export default Tag;