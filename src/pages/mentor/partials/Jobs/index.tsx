import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import s from "./Jobs.module.scss";
import CardWrapper from "../../../../components/CardWrapper";
import clsx from "clsx";
import {dateBuilder, propExists} from "../../helpers";

export type JobsProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Jobs: FC<JobsProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper
      title={'Резюме'}
      propertyExists={propExists(user.jobs)}
      className={clsx(s.root, className)}
    >
      {user.jobs!.map((job, idx) => (
        <div key={`${job.startDate}_${idx}`} className={s.root__listItem}>
          <div>
            {
              dateBuilder(job.startDate)
            } - {
            !!job.endDate ?
              dateBuilder(job.endDate) :
              job.isUntilNow ? 'по настоящее время' : ''
          }
          </div>
          <div>
            <a href={job.employerWebsite}>{job.employer}</a> - {job.position}
          </div>
        </div>
      ))}
    </CardWrapper>
  );
};

export default Jobs;