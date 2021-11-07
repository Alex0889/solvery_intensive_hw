import React, {ReactNode} from "react";
import s from "./MentorInfo.module.scss";
import {Typography} from "../../prebuilt/components";
import {pluralize} from "numeralize-ru";

export function elemBuilder(count: number, emoji: string, plur: string[]): ReactNode {
  return !!count &&
    <div className={s.root__review}>
      <span>{emoji} {Math.ceil(count)} </span>
      <Typography tag={"p"} preset={'paragraph1'}
                  color={'typography-secondary'}>{pluralize(Math.ceil(count), plur[0], plur[1], plur[2])}</Typography>
    </div>
}