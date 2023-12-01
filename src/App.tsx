import React, { useEffect } from "react";
import "./App.css";

import { Footer, Header } from "containers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";

import horoscopeCall from "utils/horoscope";
import DetailPage from "pages/DetailPage";

const App = (): React.JSX.Element => {
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
        console.log(horoJson);
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
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
