import React from "react";

import cn from "classnames";

import styles from "./Box.module.scss";

type Props = {
  idx: number;
  color: string;
  borderRadiusTopLeft: string;
  borderRadiusTopRight: string;
  borderRadiusBottomLeft: string;
  borderRadiusBottomRight: string;
  onClick: () => void;
};

export const Box = ({ idx, color, borderRadiusTopLeft,borderRadiusTopRight,borderRadiusBottomRight,borderRadiusBottomLeft, onClick }: Props) => {
  const onBoxClick = () => {
    if (color) {
      onClick();
    }
  };

  return (
    <div
      className={cn(styles.box, `col-${idx} flex-center`)}
      style={{
        backgroundColor: color,
        borderColor: color,
        borderTopLeftRadius: borderRadiusTopLeft,
        borderTopRightRadius: borderRadiusTopRight,
        borderBottomLeftRadius: borderRadiusBottomLeft,
        borderBottomRightRadius: borderRadiusBottomRight,

      }}
      onClick={onBoxClick}
    >
      {}
    </div>
  );
};
