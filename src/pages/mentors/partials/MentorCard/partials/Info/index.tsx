import React, {FC} from 'react';
import {IMentor} from "../../../../../../app/interfaces";
import MentorInfo from "../../../../../../components/MentorInfo";

export type InfoProps = {
  readonly mentor: IMentor;
}

const Info: FC<InfoProps> = ({mentor}) => {
  return (
    <MentorInfo mentor={mentor}/>
  );
};

export default Info;