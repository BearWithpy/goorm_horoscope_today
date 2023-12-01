import React, { useEffect } from "react";
import "./App.css";

import { Footer, Header } from "containers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "pages/MainPage";

import horoscopeCall from "utils/horoscope";
import DetailPage from "pages/DetailPage";

const App = (): React.JSX.Element => {
  // useEffect(() => {
  //   horoscopeCall();
  // }, []);

  // example string
  // 운세: 오늘은 행운의 한 날이며, 사소한 일들에서도 큰 기쁨을 느낄 수 있는 날입니다.
  // 명언: "행운은 그에게 고요한 사람에게 더 큰 호의를 베풀어 줍니다." - 에즈라 타운젠드

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
