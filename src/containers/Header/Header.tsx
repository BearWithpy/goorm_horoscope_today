import React from "react";
import { Link } from "react-router-dom";
import styles from "containers/Header/Header.module.css";

const Header = (): React.JSX.Element => {
  return (
    <div className={styles.header_space}>
      <Link to="/" className={styles.title}>
        오늘의 운세
      </Link>
    </div>
  );
};

export default Header;
