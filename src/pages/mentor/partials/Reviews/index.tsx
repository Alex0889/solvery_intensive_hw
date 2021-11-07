import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import s from "./Reviews.module.scss";
import {Typography} from "../../../../prebuilt/components";
import CardSkeleton from "../../../../components/CardSkeleton";
import clsx from "clsx";
import {dateBuilder, objExists, propExists} from "../../helpers";

export type ReviewsProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Reviews: FC<ReviewsProps> = ({
                                     user,
                                     classNames
                                   }) => {
  return (
    <CardSkeleton title={'Отзывы'}
                  propertyExists={(objExists(user.reviewBoard)) && (propExists(user.reviewBoard && user.reviewBoard.messages))}
                  classNames={clsx(s.root, classNames)}>
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
    </CardSkeleton>
  );
};

export default Reviews;