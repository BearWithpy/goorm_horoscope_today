import React, { useEffect, useState } from "react";

import Card from "./Card";

import styles from "components/Card/card.module.css";
import horoscopeCall from "utils/horoscope";
import { Link } from "react-router-dom";

const CardContainer = () => {
  // 이미지 경로들을 저장할 상태

  const [guidance, setGuidance] = useState("카드를 클릭하세요.");

  return (
    <div className={styles.body_inner}>
      <div className={styles.guidance}>{guidance}</div>
      <Card />
      <div className={styles.textForWaiting}>카드에 기 모으는 중...</div>
    </div>
  );
};

export default CardContainer;
