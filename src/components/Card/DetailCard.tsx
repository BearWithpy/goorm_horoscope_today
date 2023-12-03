import React from "react";

import styles from "components/Card/card.module.css";

const DetailCard = () => {
  return (
    <div className={styles.card_space}>
      <div className={styles.pattern}></div>
      <div className={styles.pattern}></div>
      <div className={styles.pattern}></div>
      <div className={styles.pattern}></div>
      <div className={styles.pattern}></div>
    </div>
  );
};

export default DetailCard;
