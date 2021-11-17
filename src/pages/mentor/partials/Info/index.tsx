import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import s from "./Info.module.scss";
import MentorInfo from "../../../../components/MentorInfo";
import {Card} from "../../../../prebuilt/components";
import clsx from "clsx";

export type InfoProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Info: FC<InfoProps> = (
  {
    user,
    className
  }) => {
  return (
    <Card
      className={clsx(s.root, className)}>
      <MentorInfo
        mentor={user}
        isMentorPage={true}/>
    </Card>
  );
};

export default Info;