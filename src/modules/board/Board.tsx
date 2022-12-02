import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import cn from "classnames";

import styles from "./Board.module.scss";
import { Box } from "./components";

type BoxType = {
  idx: number;
  color: string;
  borderRadiusTopLeft: string;
  borderRadiusBottomLeft: string;
  borderRadiusTopRight: string;
  borderRadiusBottomRight: string;
  onClick: (idx: number) => void;
};

export const Board = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 157));
  const [boxesMap, setBoxesMap] = useState(new Map<number, BoxType>());

  useEffect(() => {
    if (number > 10000) {
      setNumber(Math.floor(Math.random() * 157));
    }
    const id = setInterval(() => {
      setNumber((prv) => prv + 157);
      const box = boxesMap.get(number)!;
      box["color"] = "red";
      setTimeout(() => {
        box["color"] = "";
        console.log(box);
      }, 100);
      console.log(box);
    }, 100);

    return () => {
      clearInterval(id);
    };
  }, [boxesMap, number]);

  const onBoxClicked = useCallback((idx: number) => {}, [boxesMap, number]);

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
      {Object.values(boxesMap).map((box) => (
        <Box {...box} onClick={onBoxClicked} />
      ))}
    </div>
  );
};
