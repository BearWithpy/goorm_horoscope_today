import React, { useEffect, useState } from "react";
import styles from "pages/detailPage.module.css";
import FrontCard from "components/Card/FrontCard";
import { useParams } from "react-router-dom";
import horoscopeCall from "utils/horoscope";

const DetailPage = (): React.JSX.Element => {
	const [horoscope, setHoroscope] = useState("");

	useEffect(() => {
		horoscopeCall().then((horoJson) => {
			if (horoJson) {
				setHoroscope(horoJson);
			} else {
				console.log("no horoscope data received.");
			}
		});
	}, []);

	const { id } = useParams();

	return (
		<div className={styles.container}>
			<FrontCard />
			<div>{id}</div>

			{horoscope && (
				<div className={styles.fortune_quote_container}>
					<div className={styles.fortune}>
						<h1>{JSON.parse(horoscope).fortune}</h1>
					</div>
					<div className={styles.quote}>
						<h2>{JSON.parse(horoscope).quote}</h2>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
