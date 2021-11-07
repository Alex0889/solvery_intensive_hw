import React, {FC} from 'react';
import clsx from "clsx";
import s from "./GoBackLink.module.scss";
import {Link} from "../../../../prebuilt/components";
import {ROUTES} from "../../../../prebuilt/navigation/routes";

export type GoBackLinkProps = {
  readonly classNames?: string
}

const GoBackLink: FC<GoBackLinkProps> = ({
                                           classNames
                                         }) => {
  return (
    <div className={clsx(s.root, classNames)}>
      <Link href={ROUTES.mentors.url} className={s.root__link}>
        <div>
          <span className={s.root__arrow}>&#8656;</span>
          <span>К списку менторов</span>
        </div>
      </Link>
    </div>
  );
};

export default GoBackLink;