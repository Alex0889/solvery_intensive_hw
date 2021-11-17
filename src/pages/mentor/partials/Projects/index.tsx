import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import s from "./Projects.module.scss";
import {Typography} from "../../../../prebuilt/components";
import CardWrapper from "../../../../components/CardWrapper";
import clsx from "clsx";
import {propExists} from "../../helpers";

export type ProjectsProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Projects: FC<ProjectsProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper
      title={'Проекты'}
      propertyExists={propExists(user.projects)}
      className={clsx(s.root, className)}
    >
      {user.projects!.map(project => (
        <div key={project.id} className={s.root__listItem}>
          <div>
            <a href={project.projectWebsite}>{project.name}</a>
          </div>
          <div>
            <Typography
              tag={'p'}
              preset={'paragraph1'}>
              {project.mentorContribution}
            </Typography>
          </div>
        </div>
      ))}
    </CardWrapper>
  );
};

export default Projects;