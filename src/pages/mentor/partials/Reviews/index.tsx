import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import s from "./Reviews.module.scss";
import {Typography} from "../../../../prebuilt/components";
import CardWrapper from "../../../../components/CardWrapper";
import clsx from "clsx";
import {dateBuilder, objExists} from "../../helpers";

export type ReviewsProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Reviews: FC<ReviewsProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper title={'Отзывы'}
                 propertyExists={(objExists(user.reviewBoard)) && (Boolean(user.reviewBoard?.messages))}
                 className={clsx(s.root, className)}>
      {user.reviewBoard && user.reviewBoard.messages.map(message => (
        <div key={message.id} className={s.root__listItem}>
          <div className={s.root__header}>
            {!!message.author.avatar &&
            <img
              width={'32px'}
              height={'32px'}
              className={s.root__avatar}
              src={message.author.avatar}
              alt={message.author.fullName}
            />}
            <Typography
              tag={'p'}
              className={s.root__userName}>{message.author.fullName}</Typography>
          </div>
          <Typography
            tag={'p'}
            className={s.root__body}>{message.message}</Typography>

          {!!message.createdAt &&
          <span className={s.root__createdAt}>{dateBuilder(message.createdAt, 'DD MMMM YYYY')}</span>
          }

        </div>
      ))}
    </CardWrapper>
  );
};

export default Reviews;