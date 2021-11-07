import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import {Info, Actions, Avatar} from "./partials";
import {Card} from "../../../../prebuilt/components";
import s from './MentorCard.module.scss';
import {fullNameBuilder} from "../../../../app/helpers";

export type MentorProps = {
  mentor: IMentor
}

const MentorCard: FC<MentorProps> = ({mentor}) => {
  return (
    <Card className={s.root}>
      <Avatar url={mentor.avatar} alt={fullNameBuilder(mentor.firstName, mentor.lastName)}/>
      <Info mentor={mentor}/>
      <Actions mentor={mentor}/>
    </Card>
  );
};

export default MentorCard;