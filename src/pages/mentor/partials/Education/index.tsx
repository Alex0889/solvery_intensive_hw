import React, {FC} from 'react';
import s from "./Education.module.scss";
import CardWrapper from "../../../../components/CardWrapper";
import {IMentor} from "../../../../app/interfaces";
import clsx from "clsx";
import {propExists} from "../../helpers";

export type EducationProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Education: FC<EducationProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper
      title={'Образование'}
      propertyExists={propExists(user.education)}
      className={clsx(s.root, className)}
    >
      {user.education!.map(item => (
        <div key={item.id} className={s.root__listItem}>
          <div>{item.institution}{item.issueYear ? ', ' + item.issueYear : ''}</div>
          <div>{item.course}</div>
        </div>
      ))}
    </CardWrapper>
  );
};

export default Education;