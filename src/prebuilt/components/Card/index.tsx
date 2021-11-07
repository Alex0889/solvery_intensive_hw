import React, {FC, ReactNode} from 'react';
import s from "./Card.module.scss";
import clsx from "clsx";

export type CardProps = {
  readonly children: ReactNode;
  readonly className?: string;
}

const Card: FC<CardProps> = ({
                               children,
                               className
                             }) => {
  return (
    <div className={clsx(s.root, className)}>
      {children}
    </div>
  );
};

export default Card;