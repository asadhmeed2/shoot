import React from "react";

import cn from "classnames";

import styles from "./Board.module.scss";

export const Board = () => {
  return (
    <div className="flex-wrap h-100">
      {new Array(1000).map((box, idx) => {
        return <div className={cn(styles.box, `col-${idx}`)}>{idx}</div>;
      })}
    </div>
  );
};
