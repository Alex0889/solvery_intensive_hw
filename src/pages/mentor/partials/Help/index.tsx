import React, {FC} from 'react';
import CardWrapper from "../../../../components/CardWrapper";
import {IMentor} from "../../../../app/interfaces";
import s from './Help.module.scss';
import clsx from "clsx";
import {propExists} from "../../helpers";

export type HelpProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Help: FC<HelpProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper
      title={'С чем могу помочь'}
      propertyExists={propExists(user.solutions)}
      className={clsx(s.root, className)}>
      {user.solutions!.map(solution => (
        <div
          key={solution.id}
          className={s.root__listItem}>
          {solution.description}
        </div>
      ))}
    </CardWrapper>
  );
};

export default Help;