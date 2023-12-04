import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "containers/Header/Header.module.css";
import horoscopeCall from "utils/horoscope";
import useHoroscopeStore from "store/horoscopeStore";
import useGuidanceStore from "store/guidanceStore";

const Header = (): React.JSX.Element => {
  const [headerText, setHeaderText] = useState("환영합니다.");
  const { setHoroscope } = useHoroscopeStore();
  const { toggleGuidance } = useGuidanceStore();

  useEffect(() => {
    const startTimestamp = performance.now();

    const timer = setTimeout(() => {
      const endTimestamp = performance.now();
      const elapsedMilliseconds = endTimestamp - startTimestamp;

      setHeaderText("오늘의 운세");

      const remainingTime = Math.max(0, 4000 - elapsedMilliseconds);
      const adjustedTimer = setTimeout(() => {
        setHeaderText("오늘의 운세");
      }, remainingTime);

      return () => clearTimeout(adjustedTimer);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.header_space}>
      <Link
        to="/"
        onClick={async () => {
          const horo = await horoscopeCall();
          const horoJSON = JSON.parse(horo!);
          toggleGuidance("카드를 클릭하세요.");
          setHoroscope(horoJSON);
        }}
        className={styles.title}
      >
        {headerText}
      </Link>
    </div>
  );
};

export default Header;
