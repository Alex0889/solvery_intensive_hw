import React, {FC} from 'react';
import s from "./Actions.module.scss";
import {Button, Link, Typography} from "../../../../../../prebuilt/components";
import {IMentorCard} from "../../../../../../app/interfaces";
import Discount from "../../../../../../components/Discount";
import {countPrice, priceWithLocale} from "../../../../../../app/helpers";

export type ActionsProps = {
  readonly mentor: IMentorCard;
}

const Actions: FC<ActionsProps> = ({mentor}) => {
  return (
    <div className={s.root}>
      <Typography
        tag={"p"}
        preset={"paragraph1"}>
        {priceWithLocale(countPrice(mentor.theme))}/ час
      </Typography>
      <Discount
        condition={mentor.discountForFiveSessions}
        percent={5}/>
      <Discount
        condition={mentor.discountForTenSessions}
        percent={10}/>
      <Link
        theme={"primary"}
        size={"md"}
        href={`mentors/${mentor.id}`}
        className={s.root__link}>
        <Button
          theme={'primary'}
          fullwidth>Подробнее
        </Button>
      </Link>
    </div>
  );
};

export default Actions;