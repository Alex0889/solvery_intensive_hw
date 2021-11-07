import React, {FC} from 'react';
import s from "./MentorInfo.module.scss";
import {Typography} from "../../prebuilt/components";
import {fullNameBuilder, truncateString} from "../../app/helpers";
import Tag from "../../pages/mentors/partials/MentorCard/partials/Tag";
import {IMentor} from "../../app/interfaces";
import {elemBuilder} from "./helpers";

type MentorInfoProps = {
  readonly mentor: IMentor,
  readonly isMentorPage?: boolean,
}

const MentorInfo: FC<MentorInfoProps> = ({
                                           mentor,
                                           isMentorPage = false,
                                         }) => {
  const reviewsStr = elemBuilder(mentor.reviewsCount, '👍', ['Отзыв', 'Отзыва', 'Отзывов']);

  const sessionsStr = elemBuilder(mentor.sessionsCount, '👨‍💻', ['Занятие проведено', 'Занятия проведено', 'Занятий проведено']);

  const sessionReviewContainer = (!!mentor.sessionsCount || !!mentor.reviewsCount) &&
    <div className={s.root__reviews}>
      {reviewsStr}
      {sessionsStr}
    </div>

  return (
    <div className={s.root}>
      <div className={s.root__header}>
        <Typography
          tag={"h3"}
          preset={"h3"}
          className={s.root__fullName}
          color={"typography-main"}
        >
          {fullNameBuilder(mentor.firstName, mentor.lastName)}
        </Typography>
        <Typography
          tag={"p"}
          className={s.root__location}
          preset={"paragraph1"}
          color={"typography-secondary"}
        >
          {mentor.city}
        </Typography>
        <Typography
          tag={"p"}
          preset={"paragraph1"}
        >
          {mentor.position}
          {(!mentor.companyWebsite || !!mentor.companyName) && ' - '}
          {!!mentor.companyWebsite ?
            <a className={s.root__link} href={mentor.companyWebsite}>{mentor.companyName}</a>:
            <span>{mentor.companyName}</span>}
        </Typography>
      </div>
      <div className={s.root__body}>
        {sessionReviewContainer}
        <Typography
          tag={"p"}
          preset={"paragraph1"}
          className={s.root__description}
        >
          {isMentorPage ? mentor.description : truncateString(mentor.description, 200)}
        </Typography>
      </div>
      <div className={s.root__tags}>
        {mentor.theme.tags.map(tag => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}</div>
    </div>
  );
};

export default MentorInfo;