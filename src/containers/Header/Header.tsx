import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "containers/Header/Header.module.css";

const Header = (): React.JSX.Element => {
  const [headerText, setHeaderText] = useState("환영합니다.");

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderText("오늘의 운세");
    }, 2800);
    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.header_space}>
      <Link to="/" className={styles.title}>
        {headerText}
      </Link>
    </div>
  );
};

export default Header;
