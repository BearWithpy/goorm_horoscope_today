import React, { useEffect } from "react";
import "./App.css";

import { Footer, Header } from "containers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";

import horoscopeCall from "utils/horoscope";
import DetailPage from "pages/DetailPage";
import DetailComponent from "components/DetailInfo/DetailComponent";
import useHoroscopeStore from "store/horoscopeStore";

const App = (): React.JSX.Element => {
	const { setHoroscope } = useHoroscopeStore();

	async function fetchAndParseHoroscope() {
		try {
			const horoStr = await horoscopeCall();
			if (horoStr) {
				const horoJson = JSON.parse(horoStr);
				return horoJson;
			}
			return null;
		} catch (error) {
			console.error("Horoscope fetching or parsing failed:", error);
			return null;
		}
	}

	useEffect(() => {
		fetchAndParseHoroscope().then((horoJson) => {
			if (horoJson) {
				setHoroscope(horoJson);
			} else {
				console.log("No horoscope data received.");
			}
		});
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/detail1" element={<DetailPage />} />
					<Route path="/detail/:id" element={<DetailComponent />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default App;
