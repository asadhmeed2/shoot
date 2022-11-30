import React, { useMemo } from "react";

import cn from "classnames";

import styles from "./Board.module.scss";
import { Box } from "./components";

export const Board = () => {
  const boardBoxes = useMemo(
    () =>
      [...Array(10000)].map((box, idx) => {
        return <Box idx={idx} key={idx} />;
      }),
    []
  );
  return (
    <div className={cn("flex-wrap w-100 h-100 flex-center", styles.container)}>
      {boardBoxes}
    </div>
  );
};
