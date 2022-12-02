import React, { useEffect, useState } from "react";

import cn from "classnames";

import styles from "./Box.module.scss";
import { BoxType } from "modules/board/Board";

type Props = {
  idx: number;
  color: string;
  borderRadiusTopLeft: string;
  borderRadiusTopRight: string;
  borderRadiusBottomLeft: string;
  borderRadiusBottomRight: string;
  onClick: (box: BoxType) => void;
};

export const Box = ({
  idx,
  color,
  borderRadiusTopLeft,
  borderRadiusTopRight,
  borderRadiusBottomRight,
  borderRadiusBottomLeft,
  onClick,
}: Props) => {
  const [colorData, setColorData] = useState<string>();
  const onBoxClick = () => {
    if (color) {
      onClick({
        idx,
        color,
        borderRadiusTopLeft,
        borderRadiusTopRight,
        borderRadiusBottomRight,
        borderRadiusBottomLeft,
        onClick,
      });
    }
  };

  //   eff set color data
  useEffect(() => {
    setColorData(color);
  }, [color]);

  return (
    <div
      className={cn(styles.box, `col-${idx} flex-center`)}
      style={{
        backgroundColor: colorData,
        borderColor: colorData,
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
