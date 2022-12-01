import React, { useCallback, useEffect, useMemo, useState } from "react";

import cn from "classnames";

import styles from "./Board.module.scss";
import { Box } from "./components";

export const Board = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 157));

  useEffect(() => {
    if (number > 10000) {
      setNumber(Math.floor(Math.random() * 157));
    }
    const id = setInterval(() => {
      setNumber((prv) => prv + 157);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [number]);

  const onBoxClicked = useCallback(() => {
    setNumber(Math.floor(Math.random() * 157));
  }, []);

  const boardBoxes = useMemo(
    () =>
      [...Array(10000)].map((box, idx) => {
        return (
          <Box
            idx={idx}
            key={idx}
            color={
              idx === number ||
              idx === number + 1 ||
              idx === number - 1 ||
              idx === number - 157 ||
              idx === number + 157 ||
              idx === number - 158 ||
              idx === number + 158 ||
              idx === number - 156 ||
              idx === number + 156
                ? "red"
                : ""
            }
            borderRadiusTopLeft={idx === number - 158 ? "15px" : ""}
            borderRadiusTopRight={idx === number - 156 ? "15px" : ""}
            borderRadiusBottomLeft={idx === number + 156 ? "15px" : ""}
            borderRadiusBottomRight={idx === number + 158 ? "15px" : ""}
            onClick={onBoxClicked}
          />
        );
      }),
    [number, onBoxClicked]
  );
  return (
    <div className={cn("flex-wrap w-100 h-100 flex-center", styles.container)}>
      {boardBoxes}
    </div>
  );
};
