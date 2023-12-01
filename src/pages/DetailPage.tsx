import React from "react";
import styles from "pages/detailPage.module.css";
import FrontCard from "components/Card/FrontCard";

const DetailPage = () => {
	const horo = {
		fortune: "오늘은 행운과 긍정적인 에너지가 넘치는 날이다.",
		quote: "할 수 있는 것을 하자. 불가능한 일을 기대하지 말자.",
	};

	return (
		<div className={styles.container}>
			<FrontCard />

			<div className={styles.fortune_quote_container}>
				<div className={styles.fortune}>
					<h1>{horo.fortune}</h1>
				</div>
				<div className={styles.quote}>
					<h2>{horo.quote}</h2>
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
