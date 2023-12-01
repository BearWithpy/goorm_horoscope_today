import React from "react";
import styles from "containers/Footer/Footer.module.css";

const Footer = (): React.JSX.Element => {
  return (
    <div className={styles.footer_space}>
      <div className={`${styles.footer_text} material-symbols-outlined`}>
        copyright
      </div>
      <div>CPK limited</div>
    </div>
  );
};

export default Footer;
