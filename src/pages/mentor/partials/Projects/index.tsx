import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import s from "./Projects.module.scss";
import {Typography} from "../../../../prebuilt/components";
import CardSkeleton from "../../../../components/CardSkeleton";
import clsx from "clsx";
import {propExists} from "../../helpers";

export type ProjectsProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Projects: FC<ProjectsProps> = ({
                                       user,
                                       classNames
                                     }) => {
  return (
    <CardSkeleton
      title={'Проекты'}
      propertyExists={propExists(user.projects)}
      classNames={clsx(s.root, classNames)}
    >
      {user.projects!.map(project => (
        <div key={project.id} className={s.root__listItem}>
          <div><a href={project.projectWebsite}>{project.name}</a></div>
          <div><Typography tag={'p'} preset={'paragraph1'}>{project.mentorContribution}</Typography></div>
        </div>
      ))}
    </CardSkeleton>
  );
};

export default Projects;