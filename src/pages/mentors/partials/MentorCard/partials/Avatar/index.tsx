import React, {FC} from 'react';
import s from "./Avatar.module.scss";
import clsx from "clsx";

export type AvatarProps = {
  readonly className?: string;
  readonly alt?: string;
  readonly url: string;
}

const Avatar: FC<AvatarProps> = ({
                                   className,
                                   alt,
                                   url
                                 }) => {
  return (
    <div className={clsx(s.root, className)}>
      <img src={`https://solvery.io/${url}`} alt={alt}/>
    </div>
  );
};

export default Avatar;