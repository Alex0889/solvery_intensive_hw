import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import clsx from "clsx";
import s from "./Prices.module.scss";
import {Card, Typography} from "../../../../prebuilt/components";
import {countDiscount} from "../../helpers";
import Discount from "../../../../components/Discount";
import {countPrice} from "../../../../app/helpers";

export type PricesProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Prices: FC<PricesProps> = ({
                                   user,
                                   classNames
                                 }) => {

  const price = user?.theme && countPrice(user.theme);

  return (
    <Card className={clsx(s.root, classNames)}>
      <Typography
        tag={"h3"}
        preset={"h3"}>Стоимость занятий
      </Typography>
      <div className={s.root__row}>
        <div className={s.root__service}>Занятие с ментором</div>
        <div><span className={s.root__price}>{price}₽</span>/ час</div>
      </div>
      {user.discountForFiveSessions &&
      <div className={s.root__row}>
        <Discount condition={user.discountForFiveSessions} percent={5}/>
        <div><span className={s.root__price}>{countDiscount(5, price)}₽</span>/ час</div>
      </div>}
      {user.discountForTenSessions &&
      <div className={s.root__row}>
        <Discount condition={user.discountForTenSessions} percent={10}/>
        <div><span className={s.root__price}>{countDiscount(10, price)}₽</span>/ час</div>
      </div>}
      <div className={s.root__row}>
        <div className={s.root__service}>Пробные 15 минут</div>
        <div><span className={s.root__free}>Бесплатно</span></div>
      </div>
      <div className={s.root__divider}/>
      <div className={clsx(s.root__row, s.root__text_small)}>Дополнительные услуги</div>
      {user?.theme?.mentorServices?.messaging &&
      <div className={s.root__row}>
        <div className={s.root__service}>Неделя переписки</div>
        <div><span className={s.root__price}>{price}₽</span>/ час</div>
      </div>}
      {user?.theme?.mentorServices?.projectReview &&
      <div className={s.root__row}>
        <div className={s.root__service}>Разбор проекта</div>
        <div><span className={s.root__request}>по запросу</span></div>
      </div>}
    </Card>
  );
};

export default Prices;