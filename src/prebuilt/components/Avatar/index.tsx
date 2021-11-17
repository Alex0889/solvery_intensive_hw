import React, {FC} from 'react';
import s from "./Avatar.module.scss";
import clsx from "clsx";
import {getImgLink} from "../../../app/helpers";

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
      <img src={getImgLink(url)} alt={alt}/>
    </div>
  );
};

export default Avatar;