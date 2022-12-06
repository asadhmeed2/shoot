import React from "react";

import styles from "./Player.module.scss";

export const Player = () => {
  const onBoxClick = () => {};

  return (
    <div
      onClick={onBoxClick}
      style={{ top: 0, left: 0 }}
      className={styles.player}
    >
      {}
    </div>
  );
};
