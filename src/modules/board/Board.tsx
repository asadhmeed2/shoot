import React, { useMemo } from "react";

import cn from "classnames";

import styles from "./Board.module.scss";

export const Board = () => {
  const boardBoxes = useMemo(
    () =>
      [...Array(1000)].map((box, idx) => {
        return (
          <div className={cn(styles.box, `col-${idx} flex-center`)}>{idx}</div>
        );
      }),
    []
  );
  return (
    <div className={cn("flex-wrap w-100 h-100 flex-center", styles.container)}>
      {boardBoxes}
    </div>
  );
};
