import React, { useEffect, useState } from "react";

import cn from "classnames";

import styles from "./Box.module.scss";

type Props = {
  idx: number;
  color: string;
  borderRadiusTopLeft: string;
  borderRadiusTopRight: string;
  borderRadiusBottomLeft: string;
  borderRadiusBottomRight: string;
  onClick: (idx: number) => void;
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
      onClick(idx);
    }
  };

  //   eff set color data
  useEffect(() => {
    console.log(color);

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
