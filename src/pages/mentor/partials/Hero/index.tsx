import React, {FC} from 'react';
import clsx from "clsx";
import s from "./Hero.module.scss";
import {getImgLink, getMentorFullName} from "../../../../app/helpers";
import {Button, Card} from "../../../../prebuilt/components";
import {IMentor} from "../../../../app/interfaces";

export type HeroProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Hero: FC<HeroProps> = (
  {
    user,
    className
  }) => {
  return (
    <Card className={clsx(s.root, className)}>
      <div className={s.root__header}>
        <img
          className={s.root__img}
          src={getImgLink(user.avatar)}
          alt={getMentorFullName(user.firstName, user.lastName)}/>
      </div>
      <div>
        <Button
          disabled={user.fullyBooked}
          fullwidth>
          Оставить заявку
        </Button>
      </div>
      <span
        className={clsx(
          s.root__footer,
          (user.fullyBooked && s.red)
        )}>
        {user.fullyBooked ? 'Максимум учеников' : 'На пробное занятие'}
      </span>
    </Card>
  );
};

export default Hero;