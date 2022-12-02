import React, { useCallback, useEffect, useState } from "react";

import cn from "classnames";

import styles from "./Board.module.scss";
import { Box } from "./components";

export type BoxType = {
  idx: number;
  color: string;
  borderRadiusTopLeft: string;
  borderRadiusBottomLeft: string;
  borderRadiusTopRight: string;
  borderRadiusBottomRight: string;
  onClick: (box: BoxType) => void;
};

export const Board = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 157));
  const [boxesMap] = useState(new Map<number, BoxType>());

  useEffect(() => {
    if (number > 10000) {
      setNumber(Math.floor(Math.random() * 157));
    }
    const id = setInterval(() => {
      setNumber((prv) => prv + 157);
      const box = boxesMap.get(number + 157)!;
      box["color"] = "red";
      setTimeout(() => {
        box["color"] = "";
      }, 100);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [boxesMap, number]);

  const onBoxClicked = useCallback((box: BoxType) => {
    box!["color"] = "";
  }, []);

  useEffect(() => {
    [...Array(10000)].map((box, idx) => {
      return boxesMap.set(idx, {
        idx,
        color: "",
        borderRadiusTopLeft: "",
        borderRadiusBottomLeft: "",
        borderRadiusTopRight: "",
        borderRadiusBottomRight: "",
        onClick: onBoxClicked,
      });
    });
  }, [boxesMap, number, onBoxClicked]);

  return (
    <div className={cn("flex-wrap w-100 h-100 flex-center", styles.container)}>
      {Array.from(boxesMap.values())?.map((box) => (
        <Box {...box} onClick={onBoxClicked} />
      ))}
    </div>
  );
};
