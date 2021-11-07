import React, {FC} from 'react';
import s from "./Education.module.scss";
import CardSkeleton from "../../../../components/CardSkeleton";
import {IMentorFull} from "../../../../app/interfaces";
import clsx from "clsx";
import {propExists} from "../../helpers";

export type EducationProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Education: FC<EducationProps> = ({
                                         user,
                                         classNames
                                       }) => {
  return (
    <CardSkeleton
      title={'Образование'}
      propertyExists={propExists(user.education)}
      classNames={clsx(s.root, classNames)}
    >
      {user.education!.map(item => (
        <div key={item.id} className={s.root__listItem}>
          <div>{item.institution}{item.issueYear ? ', ' + item.issueYear : ''}</div>
          <div>{item.course}</div>
        </div>
      ))}
    </CardSkeleton>
  );
};

export default Education;