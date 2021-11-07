import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import s from "./Info.module.scss";
import MentorInfo from "../../../../components/MentorInfo";
import {Card} from "../../../../prebuilt/components";
import clsx from "clsx";

export type InfoProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Info: FC<InfoProps> = ({
                               user,
                               classNames
                             }) => {
  return (
    <Card className={clsx(s.root, classNames)}><MentorInfo mentor={user} isMentorPage={true}/></Card>
  );
};

export default Info;