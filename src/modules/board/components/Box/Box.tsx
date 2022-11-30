import React from "react";

import cn from "classnames";

import styles from "./Box.module.scss";

type Props = {
  idx: number;
};

export const Box = ({ idx }: Props) => {
  const onClick = () => {
    console.log(` click from col-${idx}`);
  };
  return (
    <div className={cn(styles.box, `col-${idx} flex-center`)} onClick={onClick}>
      {}
    </div>
  );
};
