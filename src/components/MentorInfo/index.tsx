import React, {FC} from 'react';
import s from "./MentorInfo.module.scss";
import {Link, Typography} from "../../prebuilt/components";
import {getMentorFullName, truncateString} from "../../app/helpers";
import Tag from "../../pages/mentors/partials/MentorCard/partials/Tag";
import {IMentorCard} from "../../app/interfaces";
import {elemBuilder} from "./helpers";
import {ROUTES} from "../../prebuilt/navigation/routes";
import {useAppSelector} from "../../app/hook";
import Avatar from "../../prebuilt/components/Avatar";

type MentorInfoProps = {
  readonly mentor: IMentorCard,
  readonly isMentorPage?: boolean,
};

const MentorInfo: FC<MentorInfoProps> = (
  {
    mentor,
    isMentorPage = false,
  }) => {
  const {filters: {filters: {tagIds}}} = useAppSelector();

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
        <div className={s.root__hero}>
          {!isMentorPage && <Avatar url={mentor.avatar} className={s.root__avatar}/>}
          <Typography
            tag={"h3"}
            preset={"h3"}
            className={s.root__fullName}
            color={"typography-main"}
          >
            {getMentorFullName(mentor.firstName, mentor.lastName)}
          </Typography>
        </div>
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

          {(!mentor.companyWebsite || Boolean(mentor.companyName)) && ' - '}

          {Boolean(mentor.companyWebsite) ?
            <a className={s.root__link} href={mentor.companyWebsite}>{mentor.companyName}</a> :
            <span>{mentor.companyName}</span>
          }
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
          <Link
            key={tag.id}
            href={{
              pathname: ROUTES.mentors.url,
              state: {tag: tag.id}
            }}>
            <Tag active={tagIds.includes(Number(tag.id))}>{tag.name}</Tag>
          </Link>
        ))}</div>
    </div>
  );
};

export default MentorInfo;