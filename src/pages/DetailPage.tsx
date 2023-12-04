import React from "react";
import styles from "pages/detailPage.module.css";
import useHoroscopeStore from "store/horoscopeStore";
import DetailComponent from "components/DetailInfo/DetailComponent";

const DetailPage = (): React.JSX.Element => {
  const { horoscope } = useHoroscopeStore();

  return (
    <div className={styles.container}>
      <DetailComponent />
      {horoscope && (
        <div className={styles.fortune_quote_container}>
          <div className={styles.fortune}>
            <h1>{horoscope.fortune}</h1>
          </div>
          <div className={styles.quote}>
            <h2>{horoscope.quote}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
