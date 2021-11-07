import React, {FC} from 'react';
import s from './Discount.module.scss';
import clsx from "clsx";

export type DiscountProps = {
  readonly condition: boolean,
  readonly percent: number,
  readonly classNames?: string,
}

const Discount: FC<DiscountProps> = ({
                                       condition,
                                       percent,
                                       classNames
                                     }) => {
  if (condition) return (
    <div className={clsx(s.root, classNames)}>
      Пакет {percent} занятий <span className={s.root__percent}>-{percent}%</span>
    </div>
  )
  return null;
};

export default Discount;