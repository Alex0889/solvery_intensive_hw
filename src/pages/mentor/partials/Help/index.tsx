import React, {FC} from 'react';
import CardSkeleton from "../../../../components/CardSkeleton";
import {IMentorFull} from "../../../../app/interfaces";
import s from './Help.module.scss';
import clsx from "clsx";
import {propExists} from "../../helpers";

export type HelpProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Help: FC<HelpProps> = ({
                               user,
                               classNames
                             }) => {
  return (
    <CardSkeleton
      title={'С чем могу помочь'}
      propertyExists={propExists(user.solutions)}
      classNames={clsx(s.root, classNames)}
    >
      {user.solutions!.map(solution => (
        <div key={solution.id} className={s.root__listItem}>{solution.description}</div>
      ))}
    </CardSkeleton>
  );
};

export default Help;