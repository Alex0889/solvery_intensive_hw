import React, {FC} from "react";
import clsx from "clsx";
import s from "./NoDataImg.module.scss";

type NoDataImgProps = {
  readonly image: string;
  readonly className?: string;
}

const NoDataImg:FC<NoDataImgProps> = ({className, image}) => {
  return (
    <div className={clsx(s.root, className)}>
      <img src={image} alt="No data provided"/>
    </div>
  );
};

export default NoDataImg;