import React, {FC} from 'react';
import {IMentor} from "../../../../app/interfaces";
import s from "./Posts.module.scss";
import CardWrapper from "../../../../components/CardWrapper";
import {propExists} from "../../helpers";
import clsx from "clsx";

export type PostsProps = {
  readonly user: IMentor,
  readonly className?: string
}

const Posts: FC<PostsProps> = (
  {
    user,
    className
  }) => {
  return (
    <CardWrapper
      title={'Публикации'}
      propertyExists={propExists(user.posts)}
      className={clsx(s.root, className)}
    >
      {user.posts!.map(post => (
        <div key={post.id} className={s.root__listItem}>
          <a href={post.link} target={'_blank'} rel="noreferrer" className={s.root__link}>{post.name}</a>
        </div>
      ))}
    </CardWrapper>
  );
};

export default Posts;