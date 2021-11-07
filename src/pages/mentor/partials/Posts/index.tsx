import React, {FC} from 'react';
import {IMentorFull} from "../../../../app/interfaces";
import s from "./Posts.module.scss";
import CardSkeleton from "../../../../components/CardSkeleton";
import {propExists} from "../../helpers";
import clsx from "clsx";

export type PostsProps = {
  readonly user: IMentorFull,
  readonly classNames?: string
}

const Posts: FC<PostsProps> = ({
                                 user,
                                 classNames
                               }) => {
  return (
    <CardSkeleton
      title={'Публикации'}
      propertyExists={propExists(user.posts)}
      classNames={clsx(s.root, classNames)}
    >
      {user.posts!.map(post => (
        <div key={post.id} className={s.root__listItem}>
          <a href={post.link} target={'_blank'} rel="noreferrer" className={s.root__link}>{post.name}</a>
        </div>
      ))}
    </CardSkeleton>
  );
};

export default Posts;