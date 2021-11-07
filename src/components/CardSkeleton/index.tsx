import React, {FC, ReactNode} from 'react';
import {Card, Listing, Typography} from "../../prebuilt/components";
import s from "./CardSkeleton.module.scss";
import clsx from "clsx";

export type CardSkeletonProps = {
  readonly title: string,
  readonly propertyExists: boolean,
  readonly children: ReactNode,
  readonly classNames?: string
}

const CardSkeleton: FC<CardSkeletonProps> = ({
                                               title,
                                               propertyExists,
                                               children,
                                               classNames
                                             }) => {
  if (propertyExists) return (
    <Card className={clsx(s.root__card, classNames)}>
      <Typography tag={'h3'} preset={'h3'}>
        {title}
      </Typography>
      <Listing>
        {children}
      </Listing>
    </Card>
  )
  return null;
};

export default CardSkeleton;