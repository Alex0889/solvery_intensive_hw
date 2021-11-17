import React, {FC} from 'react';
import {IMentorCard} from "../../../../app/interfaces";
import {Actions, Avatar} from "./partials";
import {Card} from "../../../../prebuilt/components";
import s from './MentorCard.module.scss';
import {getMentorFullName} from "../../../../app/helpers";
import MentorInfo from "../../../../components/MentorInfo";

export type MentorProps = {
  mentor: IMentorCard
}

const MentorCard: FC<MentorProps> = ({mentor}) => {
  return (
    <Card className={s.root}>
      <Avatar
        className={s.root__avatar}
        url={mentor.avatar}
        alt={getMentorFullName(mentor.firstName, mentor.lastName)}/>
      <MentorInfo mentor={mentor}/>
      <Actions mentor={mentor}/>
    </Card>
  );
};

export default MentorCard;