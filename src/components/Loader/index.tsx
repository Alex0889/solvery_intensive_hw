import React, {FC} from 'react';
import {ReactComponent as Spinner} from './spinner.svg';
import s from './Loader.module.scss';
import clsx from "clsx";

export type LoaderProps = {
  readonly className?: string,
}

const Loader: FC<LoaderProps> = ({className}) => {
  return (
    <div className={clsx(s.root, className)}>
      <Spinner/>
    </div>
  );
};

export default Loader;