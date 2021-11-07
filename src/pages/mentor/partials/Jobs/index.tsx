import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import s from "./Jobs.module.scss";
import CardSkeleton from "../../../../components/CardSkeleton";
import clsx from "clsx";
import {dateBuilder, propExists} from "../../helpers";

export type JobsProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Jobs: FC<JobsProps> = ({
                               user,
                               classNames
                             }) => {
  return (
    <CardSkeleton
      title={'Резюме'}
      propertyExists={propExists(user.jobs)}
      classNames={clsx(s.root, classNames)}
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
    </CardSkeleton>
  );
};

export default Jobs;