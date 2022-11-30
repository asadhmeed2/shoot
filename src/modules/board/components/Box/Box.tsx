import React from "react";

import cn from "classnames";

import styles from "./Box.module.scss";

type Props = {
  idx: number;
  color: string;
  onClick: () => void;
};

export const Box = ({ idx, color, onClick }: Props) => {
  const onBoxClick = () => {
    if (color) {
      onClick();
    }
  };

  return (
    <div
      className={cn(styles.box, `col-${idx} flex-center`)}
      style={{ backgroundColor: color }}
      onClick={onBoxClick}
    >
      {}
    </div>
  );
};
