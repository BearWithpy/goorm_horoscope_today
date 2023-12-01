import React from "react";
import styles from "./Header.module.css";

const Header = (): React.JSX.Element => {
  return (
    <div className={styles.header_space}>
      <div className={styles.title}>오늘의 운세</div>
    </div>
  );
};

export default Header;
