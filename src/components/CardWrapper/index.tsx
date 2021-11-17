import React, {FC, ReactNode} from 'react';
import {Card, Listing, Typography} from "../../prebuilt/components";
import s from "./CardWrapper.module.scss";
import clsx from "clsx";

export type CardSkeletonProps = {
  readonly title: string,
  readonly propertyExists: boolean,
  readonly children: ReactNode,
  readonly className?: string
}

const CardWrapper: FC<CardSkeletonProps> = (
  {
    title,
    propertyExists,
    children,
    className
  }) => {
  if (propertyExists) return (
    <Card className={clsx(s.root__card, className)}>
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

export default CardWrapper;