import React, {FC} from 'react';
import clsx from "clsx";
import s from "./Hero.module.scss";
import {fullNameBuilder} from "../../../../app/helpers";
import {Button, Card} from "../../../../prebuilt/components";
import {IMentorFull} from "../../../../app/interfaces";

export type HeroProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Hero: FC<HeroProps> = ({
                               user,
                               classNames
                             }) => {
  return (
    <Card className={clsx(s.root, classNames)}>
      <div className={s.root__header}>
        <img
          className={s.root__img}
          src={`https://solvery.io/${user.avatar}`}
          alt={fullNameBuilder(user.firstName, user.lastName)}/></div>
      <div><Button disabled={user.fullyBooked} fullwidth>Оставить заявку</Button></div>
      <span
        className={clsx(
          s.root__footer,
          (user.fullyBooked && s.root__footer_red)
        )}>{user.fullyBooked ? 'Максимум учеников' : 'На пробное занятие'}</span>
    </Card>
  );
};

export default Hero;