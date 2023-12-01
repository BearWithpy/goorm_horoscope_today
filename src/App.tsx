import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";

const App = (): React.JSX.Element => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
